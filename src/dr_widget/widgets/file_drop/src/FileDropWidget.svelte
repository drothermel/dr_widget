<script lang="ts">
  import {
    FileDropZone,
    displaySize,
    type FileDropZoneProps,
  } from "$lib/components/ui/file-drop-zone";

  type BoundFile = {
    name: string;
    size: number;
    type: string;
  };

  type FileBinding = {
    file_count: number;
    files: string;
    error: string;
    max_files?: number;
  };

  const { bindings, maxFiles: maxFilesProp } = $props<{
    bindings: FileBinding;
    maxFiles?: number;
  }>();

  const maxFiles = $derived(
    (): number => maxFilesProp ?? bindings?.max_files ?? 5
  );

  const parsedFiles = $derived(readBoundFiles());

  const handleUpload: FileDropZoneProps["onUpload"] = async (
    files: File[]
  ): Promise<void> => {
    const existing = readBoundFiles();
    const merged = [...existing];

    for (const file of files) {
      const duplicate = merged.some(
        (item) =>
          item.name === file.name &&
          item.size === file.size &&
          item.type === file.type
      );

      if (!duplicate) {
        merged.push({
          name: file.name,
          size: file.size,
          type: file.type,
        });
      }
    }

    writeBoundFiles(merged);
    bindings.error = "";
  };

  const handleFileRejected: FileDropZoneProps["onFileRejected"] = ({
    reason,
    file,
  }) => {
    bindings.error = `${file.name}: ${reason}`;
  };

  function removeFile(index: number): void {
    const current = readBoundFiles();
    current.splice(index, 1);
    writeBoundFiles(current);

    if (current.length === 0) {
      bindings.error = "";
    }
  }

  function readBoundFiles(): BoundFile[] {
    if (!bindings?.files) return [];
    try {
      const parsed = JSON.parse(bindings.files) as BoundFile[];
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter(
          (item) =>
            item &&
            typeof item.name === "string" &&
            typeof item.size === "number" &&
            typeof item.type === "string"
        )
        .map((item) => ({
          name: item.name,
          size: item.size,
          type: item.type,
        }));
    } catch {
      return [];
    }
  }

  function writeBoundFiles(files: BoundFile[]): void {
    bindings.files = JSON.stringify(files);
    bindings.file_count = files.length;
  }
</script>

<div class="space-y-6">
  <div class="space-y-2">
    <h1 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
      Load Config
    </h1>
    <FileDropZone
      maxFiles={maxFiles()}
      fileCount={parsedFiles.length}
      onUpload={handleUpload}
      onFileRejected={handleFileRejected}
    />
  </div>

  {#if bindings.error}
    <div
      class="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-500/40 dark:bg-red-950/40 dark:text-red-200"
    >
      <strong class="font-semibold">Upload error:</strong>
      <span class="ml-2">{bindings.error}</span>
    </div>
  {/if}

  {#if parsedFiles.length > 0}
    <div class="space-y-3">
      {#each parsedFiles as file, index (file.name + file.size + file.type)}
        <div
          class="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3 text-sm shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
        >
          <div>
            <p class="font-medium text-zinc-800 dark:text-zinc-100">
              {file.name}
            </p>
            <p class="text-xs text-zinc-500 dark:text-zinc-400">
              {displaySize(file.size)} · {file.type || "unknown type"}
            </p>
          </div>

          <button
            type="button"
            class="inline-flex items-center rounded-md border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
            onclick={() => removeFile(index)}
          >
            Remove
          </button>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-sm text-zinc-500 dark:text-zinc-400">
      No files selected yet. Use the drop zone above to add some.
    </p>
  {/if}
</div>

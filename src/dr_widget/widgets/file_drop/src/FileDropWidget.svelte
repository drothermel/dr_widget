<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Modal from "$lib/components/ui/modal";
  import * as Empty from "$lib/components/ui/empty/index.js";
  import { Skull, X } from "@lucide/svelte";

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
    (): number => maxFilesProp ?? bindings?.max_files ?? 1
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
  <div class="flex w-full flex-col gap-6">
    <Tabs.Root value="find">
      <Tabs.List>
        <Tabs.Trigger value="find">Browse Configs</Tabs.Trigger>
        <Tabs.Trigger value="save">Save Config</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="find">
        <Card.Root>
          <Card.Header>
            <Card.Title>Browse Configs</Card.Title>
            <Card.Description>
              Select a config file to view before loading.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div class="space-y-4">
              <FileDropZone
                maxFiles={maxFiles()}
                fileCount={parsedFiles.length}
                onUpload={handleUpload}
                onFileRejected={handleFileRejected}
              />
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
                          {displaySize(file.size)} · {file.type ||
                            "unknown type"}
                        </p>
                      </div>

                      <div class="flex gap-2">
                        <Button
                          variant="ghost"
                          class="w-30 bg-slate-50 shadow-sm"
                          onclick={() => removeFile(index)}>Load</Button
                        >
                        <Button
                          variant="ghost"
                          size="icon"
                          class="bg-red-100 shadow-sm"
                          onclick={() => removeFile(index)}><X /></Button
                        >
                      </div>
                    </div>
                  {/each}
                </div>
              {:else}
                <p class="text-sm text-zinc-500 dark:text-zinc-400">
                  No files selected yet. Use the drop zone above to add some.
                </p>
              {/if}
            </div>
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="save">
        <Card.Root>
          <Card.Header>
            <Card.Title>Save Config</Card.Title>
            <Card.Description>Select a config file to save.</Card.Description>
          </Card.Header>
          <Card.Content>
            <div class="space-y-4">
              <p>TBD</p>
              <Empty.Root>
                <Empty.Header>
                  <Empty.Media variant="icon">
                    <Skull />
                  </Empty.Media>
                  <Empty.Title>No Config</Empty.Title>
                  <Empty.Description>
                    It seems you don't have a config file loaded, please load a
                    config file to get started.
                  </Empty.Description>
                </Empty.Header>
              </Empty.Root>
            </div>
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  </div>
</div>

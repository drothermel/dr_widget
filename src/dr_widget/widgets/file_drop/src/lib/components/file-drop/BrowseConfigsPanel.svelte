<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { FileDropZone } from "$lib/components/ui/file-drop-zone";
  import SelectedFilesList from "./SelectedFilesList.svelte";
  import type { FileDropZoneProps } from "$lib/components/ui/file-drop-zone";
  import type { BoundFile } from "$lib/hooks/use-file-bindings";

  const {
    files = [],
    error,
    maxFiles,
    onUpload,
    onFileRejected,
    onRemove,
    onLoad,
  } = $props<{
    files?: BoundFile[];
    error?: string;
    maxFiles: number;
    onUpload: FileDropZoneProps["onUpload"];
    onFileRejected?: FileDropZoneProps["onFileRejected"];
    onRemove: (index: number) => void;
    onLoad: (index: number) => void;
  }>();
</script>

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
        {maxFiles}
        fileCount={files.length}
        onUpload={onUpload}
        onFileRejected={onFileRejected}
      />
      {#if error}
        <div
          class="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-500/40 dark:bg-red-950/40 dark:text-red-200"
        >
          <strong class="font-semibold">Upload error:</strong>
          <span class="ml-2">{error}</span>
        </div>
      {/if}

      <SelectedFilesList
        files={files}
        onLoad={onLoad}
        onRemove={onRemove}
      />
    </div>
  </Card.Content>
</Card.Root>

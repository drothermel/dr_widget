<script lang="ts">
  import { FileDropZone } from "$lib/components/ui/file-drop-zone";

  type FileBinding = {
    file_count: number;
    files: string;
    error: string;
  };

  const { bindings, maxFiles = 5 } = $props<{
    bindings: FileBinding;
    maxFiles?: number;
  }>();

  async function handleUpload(files: File[]): Promise<void> {
    bindings.file_count = files.length;
    bindings.files = JSON.stringify(
      files.map((f) => ({
        name: f.name,
        size: f.size,
        type: f.type,
      }))
    );
  }
</script>

<div class="p-6">
  <FileDropZone
    maxFiles={5}
    fileCount={bindings?.file_count ?? 0}
    onUpload={handleUpload}
  >
    <div class="text-center py-8">
      <p>Drop files here</p>
    </div>
  </FileDropZone>
</div>

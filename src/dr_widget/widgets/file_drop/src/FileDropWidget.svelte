<script>
  import { FileDropZone } from "$lib/components/ui/file-drop-zone";

  /** @type {{ bindings: { file_count: number, files: string, error: string }}} */
  let { bindings } = $props();

  function handleUpload(files) {
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

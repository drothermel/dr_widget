<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";

  import BrowseConfigsPanel from "$lib/components/file-drop/BrowseConfigsPanel.svelte";
  import SaveConfigPanel from "$lib/components/file-drop/SaveConfigPanel.svelte";
  import {
    createFileBindingHandlers,
    type BoundFile,
    type FileBinding,
  } from "$lib/hooks/use-file-bindings";

  const { bindings, maxFiles: maxFilesProp } = $props<{
    bindings: FileBinding;
    maxFiles?: number;
  }>();

  const bindingHandlers = createFileBindingHandlers({
    bindings,
    maxFilesProp,
  });

  const parsedFiles = $derived(bindingHandlers.readBoundFiles());

  const maxFiles = 1;

  let previewFile = $state<BoundFile | undefined>(undefined);
  let previewText = $state<string | undefined>(
    bindings.selected_config ?? undefined
  );
  let previewJson = $state<unknown | undefined>(undefined);

  const resetPreviewState = () => {
    previewFile = undefined;
    previewText = undefined;
    previewJson = undefined;
  };

  $effect(() => {
    if (!previewText) {
      previewJson = undefined;
      return;
    }

    try {
      previewJson = JSON.parse(previewText);
    } catch {
      previewJson = undefined;
    }
  });

  $effect(() => {
    if (parsedFiles.length === 0 && previewFile) {
      resetPreviewState();
    }
  });

  const handleUpload = async (files: File[]) => {
    const [file] = files;
    if (!file) return;

    const fileText = await file.text();

    await bindingHandlers.handleUpload([file]);

    previewFile = {
      name: file.name,
      size: file.size,
      type: file.type,
    };
    previewText = fileText;
    bindings.error = "";
  };

  const handleRemove = () => {
    bindingHandlers.removeFile(0);
    bindingHandlers.writeSelectedConfig(null);
    bindings.error = "";
    resetPreviewState();
  };

  const handleLoadConfig = () => {
    if (!previewText) {
      bindings.error = "Unable to load config: missing file contents.";
      return;
    }

    bindingHandlers.writeSelectedConfig(previewText);
  };
</script>

<div class="space-y-6">
  <div class="flex w-full flex-col gap-6">
    <Tabs.Root value="find">
      <Tabs.List>
        <Tabs.Trigger value="find">Browse Configs</Tabs.Trigger>
        <Tabs.Trigger value="save">Save Config</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="find">
        <BrowseConfigsPanel
          file={previewFile}
          rawContents={previewText}
          parsedContents={previewJson}
          error={bindings.error}
          maxFiles={maxFiles}
          onUpload={handleUpload}
          onFileRejected={bindingHandlers.handleFileRejected}
          onRemove={handleRemove}
          onLoad={handleLoadConfig}
        />
      </Tabs.Content>

      <Tabs.Content value="save">
        <SaveConfigPanel>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">
            TBD – hook into notebook persistence.
          </p>
        </SaveConfigPanel>
      </Tabs.Content>
    </Tabs.Root>
  </div>
</div>

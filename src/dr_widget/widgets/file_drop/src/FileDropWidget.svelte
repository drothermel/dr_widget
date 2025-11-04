<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";

  import BrowseConfigsPanel from "$lib/components/file-drop/BrowseConfigsPanel.svelte";
  import SaveConfigPanel from "$lib/components/file-drop/SaveConfigPanel.svelte";
  import {
    createFileBindingHandlers,
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
  const maxFiles = $derived(bindingHandlers.maxFiles());

  const handleLoadConfig = (index: number) => {
    // TODO: replace with real load logic once wired to notebook events
    bindingHandlers.removeFile(index);
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
          files={parsedFiles}
          error={bindings.error}
          maxFiles={maxFiles}
          onUpload={bindingHandlers.handleUpload}
          onFileRejected={bindingHandlers.handleFileRejected}
          onRemove={bindingHandlers.removeFile}
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

<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Empty from "$lib/components/ui/empty/index.js";
  import { Skull } from "@lucide/svelte";

  const { children } = $props();
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>Save Config</Card.Title>
    <Card.Description>Select a config file to save.</Card.Description>
  </Card.Header>
  <Card.Content>
    <div class="space-y-4">
      {#if children?.default}
        {@render children.default()}
      {/if}
      <Empty.Root>
        <Empty.Header>
          <Empty.Media variant="icon">
            <Skull />
          </Empty.Media>
          <Empty.Title>No Config</Empty.Title>
          <Empty.Description>
            It seems you don't have a config file loaded, please load a config file to
            get started.
          </Empty.Description>
        </Empty.Header>
      </Empty.Root>
    </div>
  </Card.Content>
</Card.Root>

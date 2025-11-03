<script>
  import FileDropWidget from "./FileDropWidget.svelte";

  // Simulate anywidget bindings for testing
  let bindings = $state({
    files: "",
    file_count: 0,
    error: "",
  });

  // Watch for changes to display them
  $effect(() => {
    console.log("Files updated:", bindings.files);
    console.log("File count:", bindings.file_count);
    if (bindings.error) {
      console.error("Error:", bindings.error);
    }
  });
</script>

<main>
  <div class="container">
    <h1>File Drop Widget - Dev Preview</h1>
    <p class="subtitle">Testing the anywidget component in isolation</p>

    <!-- Your actual widget component -->
    <FileDropWidget {bindings} />

    <!-- Debug panel to see the state -->
    <div class="debug-panel">
      <h2>Debug Output</h2>
      <div class="debug-section">
        <strong>File Count:</strong>
        {bindings.file_count}
      </div>
      <div class="debug-section">
        <strong>Files Data:</strong>
        <pre>{bindings.files || "(empty)"}</pre>
      </div>
      {#if bindings.error}
        <div class="debug-section error">
          <strong>Error:</strong>
          {bindings.error}
        </div>
      {/if}
    </div>
  </div>
</main>

<style>
  main {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    color: #333;
    margin: 0;
  }

  .subtitle {
    color: #666;
    margin: 0;
  }

  .debug-panel {
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    margin-top: 2rem;
  }

  .debug-panel h2 {
    margin-top: 0;
    color: #555;
    font-size: 1.2rem;
  }

  .debug-section {
    margin-top: 1rem;
    padding: 0.5rem;
    background: white;
    border-radius: 4px;
  }

  .debug-section.error {
    background: #fee;
    border: 1px solid #fcc;
  }

  pre {
    margin: 0.5rem 0 0 0;
    padding: 0.5rem;
    background: #eee;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 0.875rem;
  }
</style>

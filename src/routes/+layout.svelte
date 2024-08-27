<script lang="ts">
  import '../styles/app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>MoneyLion Tech Talk #15</title>
</svelte:head>

{@render children()}

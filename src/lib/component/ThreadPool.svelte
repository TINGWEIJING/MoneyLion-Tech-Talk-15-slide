<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { onMount } from 'svelte';
  import { tween, all, animate, wait } from '@animotion/motion';
  import { fade, fly, slide } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  interface ThreadLayerProps {
    initialThreadCount?: number;
    backgroundColor?: string;
  }
  let { initialThreadCount, backgroundColor = 'black' }: ThreadLayerProps = $props();
  let threadCounter: number = $state(0);

  onMount(() => {
    if (initialThreadCount !== undefined) {
      threadCounter = initialThreadCount;
    }
  });
</script>

<div class="thread-pool-div" style:background-color={backgroundColor}>
  {#each Array.from({ length: threadCounter }, (_, i) => i) as threadId}
    <div class="thread-box-div"></div>
  {/each}
</div>

<style>
  .thread-pool-div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    height: 100%;
    width: 100%;
    border-radius: var(--size-24);
  }

  .thread-box-div {
    background-color: white;
    aspect-ratio: 1/1;
    height: var(--size-96);
    border-radius: var(--size-12);
    margin: var(--size-12);
  }
</style>

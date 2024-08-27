<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { onMount } from 'svelte';
  import { tween, all, animate, wait } from '@animotion/motion';
  import { fade, fly, slide } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import type { BasicThread } from './type';

  interface ThreadLayerProps {
    initialThreadCount?: number;
    backgroundColor?: string;
    label?: string;
  }
  let {
    initialThreadCount,
    backgroundColor = 'dodgerblue',
    label = 'Thread'
  }: ThreadLayerProps = $props();
  let threads: BasicThread[] = $state([]);
  let threadCounter: number = $state(0);

  onMount(() => {
    if (initialThreadCount !== undefined) {
      initThreads(initialThreadCount);
    }
  });

  const initThreads = (numOfThreads: number) => {
    threads = [];
    threadCounter = 0;
    for (let i = 0; i < numOfThreads; i++) {
      threads.push({
        id: threadCounter
      });
      threadCounter += 1;
    }
  };

  const spawnThread = () => {
    threads.push({
      id: threadCounter
    });
    threadCounter += 1;
  };

  export { initThreads, spawnThread };
</script>

<div class="thread-layer-div" style:background-color={backgroundColor} transition:fade>
  {#each threads as thread (thread.id)}
    <div class="thread-item" animate:flip transition:slide>{`${label} #${thread.id + 1}`}</div>
  {/each}
</div>

<style>
  .thread-layer-div {
    border-radius: var(--size-24);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    padding-left: var(--size-16);
    padding-right: var(--size-16);
  }

  .thread-item {
    background-color: white;
    color: black;
    height: var(--size-64);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--size-12);
    font-size: var(--size-30);
    margin-top: var(--size-16);
    margin-bottom: var(--size-16);
  }
</style>

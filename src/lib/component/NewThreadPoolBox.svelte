<script lang="ts">
  import { onMount } from 'svelte';
  import type { Thread } from './type';
  import { slide } from 'svelte/transition';
  import { send, receive } from './transition';

  interface ThreadPoolBoxProps {
    initialThreadCount?: number;
    backgroundColor?: string;
    showTaskLabel?: boolean;
  }
  let {
    initialThreadCount,
    backgroundColor = 'brown',
    showTaskLabel = false
  }: ThreadPoolBoxProps = $props();
  let threads: Thread[] = $state([]);
  let threadCounter: number = $state(0);

  onMount(() => {
    console.log('Mount thread box');
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

  const killThread = (id?: number) => {
    if (id === undefined) {
      let selectedThreadIndex: number | undefined = undefined;
      for (let index = 0; index < threads.length; index++) {
        const selectedThread = threads[index];
        if (selectedThread.taskId === undefined) {
          selectedThreadIndex = index;
          break;
        }
      }
      if (selectedThreadIndex !== undefined) {
        threads.splice(selectedThreadIndex, 1);
      }
    }
  };

  const addTask = (taskId: number) => {
    let selectedThreadIndex: number | undefined = undefined;
    for (let index = 0; index < threads.length; index++) {
      const selectedThread = threads[index];
      if (selectedThread.taskId === undefined) {
        selectedThreadIndex = index;
        break;
      }
    }
    if (selectedThreadIndex !== undefined) {
      threads[selectedThreadIndex].taskId = taskId;
    }
  };

  const completeTask = (threadId: number) => {
    let selectedThreadIndex: number | undefined = undefined;
    for (let index = 0; index < threads.length; index++) {
      const selectedThread = threads[index];
      if (selectedThread.id === threadId) {
        selectedThreadIndex = index;
        break;
      }
    }
    if (selectedThreadIndex !== undefined) {
      threads[selectedThreadIndex].taskId = undefined;
    }
  };

  export { initThreads, spawnThread, killThread, addTask, completeTask };
</script>

<div class="thread-pool-box" style:background-color={backgroundColor}>
  {#each threads as thread (thread.id)}
    <div class="thread-box" transition:slide>
      <div class="task-container-box">
        {#if thread.taskId !== undefined}
          <div
            class="task-circle"
            in:receive={{ key: thread.taskId }}
            out:send={{ key: thread.taskId }}
          >
            {showTaskLabel ? `${thread.taskId + 1}` : ''}
          </div>
        {/if}
      </div>
      <div class="thread-label">{`thread-${thread.id + 1}`}</div>
    </div>
  {/each}
</div>

<style>
  .thread-pool-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: stretch;
    gap: var(--size-12);
    border-radius: var(--size-40);
  }

  .thread-box {
    background-color: aliceblue;
    color: black;
    margin: 4% 5% 4% 5%;
    height: var(--size-144);
    border-radius: var(--size-16);
    padding: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }

  .task-container-box {
    aspect-ratio: 1 / 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .thread-label {
    text-align: center;
    font-size: var(--size-50);
    margin-left: var(--size-72);
  }
</style>

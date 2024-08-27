<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';
  import { fade, fly } from 'svelte/transition';
  import NewTaskQueueBox from '$lib/component/NewTaskQueueBox.svelte';
  import NewThreadPoolBox from '$lib/component/NewThreadPoolBox.svelte';

  let commonPool: NewThreadPoolBox;
  let queue01: NewTaskQueueBox;
  let queue02: NewTaskQueueBox;
  let queue03: NewTaskQueueBox;
</script>

<Slide
  in={() => {
    commonPool.initThreads(3);
    queue01.initTasks(3);
    queue02.initTasks(3);
    queue03.initTasks(3);
  }}
>
  <p class="slide-header-div s-6xl font-bold">Thread Pool Exhaustion Event</p>
  <p class="s-5xl">ForkJoinPool Common Pool</p>
  <div class="event-div">
    <div class="queue-group-div">
      <div class="queue-div">
        <NewTaskQueueBox
          bind:this={queue01}
          initialTaskCount={3}
          backgroundColor="rgb(31, 126, 110)"
        />
      </div>
      <div class="queue-div">
        <NewTaskQueueBox
          bind:this={queue02}
          initialTaskCount={3}
          backgroundColor="rgb(31, 126, 110)"
        />
      </div>
      <div class="queue-div">
        <NewTaskQueueBox
          bind:this={queue03}
          initialTaskCount={3}
          backgroundColor="rgb(31, 126, 110)"
        />
      </div>
    </div>
    <div class="common-pool-div">
      <NewThreadPoolBox
        bind:this={commonPool}
        initialThreadCount={3}
        backgroundColor="rgb(62, 70, 124)"
      />
    </div>
  </div>

  <Action
    do={async () => {
      // submit task from different queue to thread pool
      let taskId: number | undefined;
      taskId = queue01.submitTask();
      if (taskId !== undefined) {
        commonPool.addTask(taskId);
      }
      await wait(500);
      taskId = queue02.submitTask();
      if (taskId !== undefined) {
        commonPool.addTask(taskId);
      }
      await wait(500);
      taskId = queue03.submitTask();
      if (taskId !== undefined) {
        commonPool.addTask(taskId);
      }
    }}
  />
  <Action
    do={async () => {
      // submit task from different queue to thread pool
      let taskId: number | undefined;

      commonPool.completeTask(0);

      await wait(100);
      taskId = queue01.submitTask();
      if (taskId !== undefined) {
        commonPool.addTask(taskId);
      }

      await wait(500);
      commonPool.completeTask(2);

      await wait(300);
      taskId = queue03.submitTask();
      if (taskId !== undefined) {
        commonPool.addTask(taskId);
      }

      await wait(500);
      commonPool.completeTask(1);

      await wait(500);
      taskId = queue02.submitTask();
      if (taskId !== undefined) {
        commonPool.addTask(taskId);
      }

      await wait(500);
      commonPool.completeTask(2);

      await wait(300);
      queue03.addTask();

      await wait(300);
      taskId = queue03.submitTask();
      if (taskId !== undefined) {
        commonPool.addTask(taskId);
      }
    }}
  />
  <Action
    do={async () => {
      // add tasks to task queue
      for (let index = 0; index < 6; index++) {
        queue01.addTask();
        queue02.addTask();
        queue03.addTask();
      }
    }}
  />
</Slide>

<style>
  .event-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    column-gap: var(--size-250);
  }

  .common-pool-div {
    height: var(--size-700);
    width: var(--size-500);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .queue-group-div {
    width: var(--size-800);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    row-gap: var(--size-50);
  }

  .queue-div {
    height: var(--size-150);
  }
</style>

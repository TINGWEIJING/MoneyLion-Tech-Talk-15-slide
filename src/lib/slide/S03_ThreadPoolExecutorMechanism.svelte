<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';
  import TaskQueueBox from '$lib/component/TaskQueueBox.svelte';
  import ThreadPoolBox from '$lib/component/ThreadPoolBox.svelte';
  import { CODE_OPTIONS_LINE_NUM } from '$lib/constant';

  const initialTaskNumber = 6;
  let taskQueueBox: TaskQueueBox;
  let threadPoolBox: ThreadPoolBox;
  let queueSizeTracking = tween(initialTaskNumber, { duration: 500 });
</script>

<Slide
  in={async () => {
    taskQueueBox.initTasks(initialTaskNumber);
    threadPoolBox.initThreads(2);
    await queueSizeTracking.to(taskQueueBox.getTaskCount());
  }}
>
  <p class="slide-header-div s-6xl font-bold">Thread Pool Executor Mechanism</p>

  <div class="s-7xl absolute top-[22%] left-[10%]">
    <ul class="text-left">
      <li>Core Pool Size: 2</li>
      <li>Max Pool Size: 4</li>
      <li>Queue Capacity: 8</li>
    </ul>
  </div>

  <p class="s-6xl" style={'position: absolute; bottom: 24%; left: 10%'}>
    {`Task Num: ${$queueSizeTracking.toFixed(0)} | Queue Capacity: 8`}
  </p>
  <TaskQueueBox bind:this={taskQueueBox} initialTaskCount={initialTaskNumber} />
  <ThreadPoolBox bind:this={threadPoolBox} initialThreadCount={2} />

  <Action
    do={async () => {
      // submit 2 tasks to thread pool
      let taskId: number | undefined;
      for (let index = 0; index < 2; index++) {
        taskId = taskQueueBox.submitTask();
        if (taskId !== undefined) {
          threadPoolBox.addTask(taskId);
        }
      }
      await queueSizeTracking.to(taskQueueBox.getTaskCount());
    }}
  />
  <Action
    do={async () => {
      // add 4 tasks to task queue
      for (let index = 0; index < 4; index++) {
        taskQueueBox.addTask();
      }
      await queueSizeTracking.to(taskQueueBox.getTaskCount());
    }}
  />
  <Action
    do={async () => {
      // reach queue capacity, add 1 more thread
      threadPoolBox.spawnThread();
    }}
  />
  <Action
    do={async () => {
      // submit 1 task to thread pool
      let taskId: number | undefined;
      for (let index = 0; index < 1; index++) {
        taskId = taskQueueBox.submitTask();
        if (taskId !== undefined) {
          threadPoolBox.addTask(taskId);
        }
      }
      await queueSizeTracking.to(taskQueueBox.getTaskCount());
    }}
  />
  <Action
    do={async () => {
      // add 1 tasks to task queue
      for (let index = 0; index < 1; index++) {
        taskQueueBox.addTask();
      }
      await queueSizeTracking.to(taskQueueBox.getTaskCount());
    }}
  />
  <Action
    do={async () => {
      // reach queue capacity, add 1 more thread
      threadPoolBox.spawnThread();
    }}
  />
  <Action
    do={async () => {
      // submit 1 tasks to thread pool
      let taskId: number | undefined;
      for (let index = 0; index < 1; index++) {
        taskId = taskQueueBox.submitTask();
        if (taskId !== undefined) {
          threadPoolBox.addTask(taskId);
        }
      }
      await queueSizeTracking.to(taskQueueBox.getTaskCount());
    }}
  />
  <Action
    do={async () => {
      // add 1 tasks to task queue
      for (let index = 0; index < 1; index++) {
        taskQueueBox.addTask();
      }
      await queueSizeTracking.to(taskQueueBox.getTaskCount());
    }}
  />
</Slide>

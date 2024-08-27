<script lang="ts">
  import { onMount } from 'svelte';
  import type { Task } from './type';
  import { fly } from 'svelte/transition';
  import { send, receive } from './transition';
  import { flip } from 'svelte/animate';

  interface TaskQueueBoxProps {
    initialTaskCount?: number;
    backgroundColor?: string;
    showTaskLabel?: boolean;
  }
  let {
    initialTaskCount,
    backgroundColor = 'rebeccapurple',
    showTaskLabel = false
  }: TaskQueueBoxProps = $props();
  let tasks: Task[] = $state([]);
  let taskCounter: number = $state(0);

  onMount(() => {
    if (initialTaskCount !== undefined) {
      initTasks(initialTaskCount);
    }
  });

  const initTasks = (numOfTasks: number) => {
    tasks = [];
    taskCounter = 0;
    for (let i = 0; i < numOfTasks; i++) {
      tasks.push({
        id: taskCounter
      });
      taskCounter += 1;
    }
  };

  const addTask = () => {
    tasks.push({
      id: taskCounter
    });
    taskCounter += 1;
  };

  const submitTask = () => {
    const selectedTask = tasks.shift();
    return selectedTask?.id;
  };

  const getTaskCount = () => {
    return tasks.length;
  };

  export { initTasks, addTask, submitTask, getTaskCount };
</script>

<div class="task-queue-box" style:background-color={backgroundColor}>
  {#each tasks as task (task.id)}
    <div
      class="task-circle"
      animate:flip
      style={`z-index: ${100 - task.id}`}
      in:receive={{ key: task.id }}
      out:send={{ key: task.id }}
    >
      {showTaskLabel ? `${task.id + 1}` : ''}
    </div>
  {/each}
</div>

<style>
  .task-queue-box {
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: var(--size-40);
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0 2% 0 2%;
  }
</style>

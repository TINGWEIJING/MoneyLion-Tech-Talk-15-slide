<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';
  import { fade, fly } from 'svelte/transition';

  import ThreadLayer from '$lib/component/ThreadLayer.svelte';

  let cpuCoreLayer: ThreadLayer;
  let osThreadLayer: ThreadLayer;
  let platformThreadLayer: ThreadLayer;
  let shouldHideVirtualThread = $state(false);
</script>

<Slide
  in={() => {
    cpuCoreLayer.initThreads(1);
    osThreadLayer.initThreads(2);
    platformThreadLayer.initThreads(2);
    shouldHideVirtualThread = false;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Java Thread Relationship</p>
  <div class="flex flex-row items-end justify-evenly">
    <Transition visible>
      <div class="flex flex-col">
        <p class="s-4xl">CPU Core</p>
        <div class="sized-thread-layer">
          <ThreadLayer
            bind:this={cpuCoreLayer}
            initialThreadCount={1}
            backgroundColor="rgb(45, 63, 133)"
            label="Core"
          />
        </div>
      </div>
    </Transition>
    <Transition visible class="h-full">
      <div class="flex h-full flex-col justify-center">
        <p>1:N</p>
        <div class="connection-line"></div>
      </div>
    </Transition>
    <Transition visible>
      <div class="flex flex-col">
        <p class="s-4xl">OS Thread</p>
        <div class="sized-thread-layer">
          <ThreadLayer
            bind:this={osThreadLayer}
            initialThreadCount={2}
            backgroundColor="rgb(60, 113, 165)"
            label="OS thread"
          />
        </div>
      </div>
    </Transition>
    <Transition visible class="h-full">
      <div class="flex h-full flex-col justify-center">
        <p>1:1</p>
        <div class="connection-line"></div>
      </div>
    </Transition>
    <Transition visible class="h-full">
      <div class="flex flex-col items-center">
        <p class="s-4xl">Java<br />Platform Thread</p>
        <div class="sized-thread-layer">
          <ThreadLayer
            bind:this={platformThreadLayer}
            initialThreadCount={2}
            backgroundColor="rgb(46, 131, 215)"
            label="Platform thread"
          />
        </div>
      </div>
    </Transition>
    {#if !shouldHideVirtualThread}
      <div class="flex h-full flex-col justify-center" transition:fade>
        <p class="s-5xl">N:M</p>
        <div class="connection-line"></div>
      </div>
      <div class="flex flex-col items-center" transition:fade>
        <p class="s-4xl">Java<br />Virtual Thread</p>
        <div class="sized-thread-layer">
          <ThreadLayer initialThreadCount={5} backgroundColor="lightcoral" label="Virtual thread" />
        </div>
      </div>
    {/if}
  </div>

  <Transition
    do={() => {
      shouldHideVirtualThread = true;
    }}
  />
  <Transition
    do={() => {
      osThreadLayer.spawnThread();
    }}
  />
  <Transition
    do={() => {
      platformThreadLayer.spawnThread();
    }}
  />
</Slide>

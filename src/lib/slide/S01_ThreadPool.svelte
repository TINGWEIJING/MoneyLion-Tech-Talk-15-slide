<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';
  import { fade, fly } from 'svelte/transition';
  import ThreadPool from '$lib/component/ThreadPool.svelte';

  let showStep = $state(0);
</script>

<Slide
  in={() => {
    showStep = 0;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Thread Pool</p>
  <div class="thread-pools-div">
    <div style:grid-area="1 / 1 / 3 / 3">
      <ThreadPool initialThreadCount={9} backgroundColor="rgb(223, 145, 1)" />
    </div>
    <div style:grid-area="1 / 3 / 3/ 5">
      <ThreadPool initialThreadCount={4} backgroundColor="rgb(62, 70, 124)" />
    </div>
    <div style:grid-area="3 / 1 / 4 / 5">
      <ThreadPool initialThreadCount={5} backgroundColor="brown" />
    </div>
    <div style:grid-area="4 / 1 / 5 / 3">
      <ThreadPool initialThreadCount={3} backgroundColor="rebeccapurple" />
    </div>
    <div style:grid-area="4 / 3 / 5 / 5">
      <ThreadPool initialThreadCount={1} backgroundColor="rgb(46, 131, 215)" />
    </div>
  </div>

  {#if showStep > 0 && showStep < 6}
    <div class="s-6xl absolute top-[24%] left-[2%] w-[25%] text-wrap" transition:fade>
      Tomcat HTTP Connector Pool
    </div>
  {/if}
  {#if showStep > 1}
    <div class="s-6xl absolute top-[24%] right-[2%] w-[25%] text-wrap" transition:fade>
      ForkJoinPool Common Pool
    </div>
  {/if}
  {#if showStep > 2}
    <div class="s-6xl absolute top-[53%] left-[2%] w-[25%] text-wrap" transition:fade>
      Executor Service
    </div>
  {/if}
  {#if showStep > 3 && showStep < 6}
    <div class="s-6xl absolute top-[70%] left-[2%] w-[25%] text-wrap" transition:fade>
      Database Connection Pool
    </div>
  {/if}
  {#if showStep > 4 && showStep < 6}
    <div class="s-6xl absolute top-[70%] right-[2%] w-[25%] text-wrap" transition:fade>
      Independent Thread
    </div>
  {/if}

  <Action
    do={() => {
      showStep += 1;
    }}
  />
  <Action
    do={() => {
      showStep += 1;
    }}
  />
  <Action
    do={() => {
      showStep += 1;
    }}
  />
  <Action
    do={() => {
      showStep += 1;
    }}
  />
  <Action
    do={() => {
      showStep += 1;
    }}
  />
  <Action
    do={() => {
      showStep += 1;
    }}
  />
</Slide>

<style>
  .thread-pools-div {
    background-color: rgb(46, 131, 215);
    border-radius: var(--size-24);
    height: var(--size-800);
    width: var(--size-800);
    padding: var(--size-4);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  .thread-pools-div > div {
    /* background-color: rgb(62, 70, 124); */
    padding: var(--size-12);
    place-self: stretch;
  }
</style>

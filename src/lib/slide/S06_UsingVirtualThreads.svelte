<script lang="ts">
  import { CODE_OPTIONS_LINE_NUM } from '$lib/constant';
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  let codeA: Code;
  const rawCodeA = `@Bean(name = "threadPoolTaskExecutor")
public Executor threadPoolTaskExecutor() {
    ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
    executor.setCorePoolSize(100);
    executor.setMaxPoolSize(500);
    executor.setQueueCapacity(200);
    executor.initialize();
    return executor;
}`;

  const rawCodeA02 = `@Bean(name = "virtualThreadPerTaskExecutor")
public ExecutorService virtualThreadPerTaskExecutor() {
    return Executors.newVirtualThreadPerTaskExecutor();
}`;
</script>

<Slide
  in={async () => {
    await codeA.update`${rawCodeA}`;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Using Virtual Threads</p>
  <Transition visible>
    <div class="s-7xl">
      <Code
        bind:this={codeA}
        lang="java"
        theme="poimandres"
        code={rawCodeA}
        options={CODE_OPTIONS_LINE_NUM}
      />
    </div>
  </Transition>
  <Action
    do={() => {
      codeA.update`${rawCodeA02}`;
    }}
  />
</Slide>

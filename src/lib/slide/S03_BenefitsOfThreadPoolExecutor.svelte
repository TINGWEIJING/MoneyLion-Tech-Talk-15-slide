<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  let showStep = $state(0);
</script>

<Slide
  in={() => {
    showStep = 0;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Benefits of Thread Pool Executor</p>
  <ol class="s-7xl w-[92%] text-wrap text-left">
    <Transition visible>
      <li style:opacity={showStep > 0 ? '65%' : '100%'}>
        Control number of threads to be created in the pool.
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li style:opacity={showStep > 1 ? '65%' : '100%'}>
        Configurable to handle spikes in the number of requests during high traffic.
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li>
        Avoid OutOfMemoryError by limiting the number of threads in the pool and tasks in task
        queue.
      </li>
    </Transition>
  </ol>
</Slide>

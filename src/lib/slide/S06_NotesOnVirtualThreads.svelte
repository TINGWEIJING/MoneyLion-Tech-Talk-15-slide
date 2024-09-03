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
  <p class="slide-header-div s-6xl font-bold">Notes on Virtual Threads</p>
  <ol class="s-7xl w-[94%] text-wrap text-left">
    <Transition visible>
      <li style:opacity={showStep > 0 ? '65%' : '100%'}>
        Not optimized for CPU-intensive operations.
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li style:opacity={showStep > 1 ? '65%' : '100%'}>
        Not all version of Database driver libraries support. <br />Please verify compatibility.
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li style:opacity={showStep > 2 ? '65%' : '100%'}>
        Can improve overall throughput but do not necessarily guarantee speed improvements for
        individual tasks.
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li style:opacity={showStep > 3 ? '65%' : '100%'}>
        Best practice to conduct benchmarks before and after implementing virtual threads.
      </li>
    </Transition>
  </ol>
</Slide>

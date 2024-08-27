<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';
</script>

<Slide>
  <p class="slide-header-div s-6xl font-bold">Notes on Virtual Threads</p>
  <ol class="s-6xl w-[94%] text-wrap text-left">
    <Transition visible>
      <li>Not optimized for CPU-intensive operations.</li>
    </Transition>
    <Transition>
      <li>
        Not all version of Database driver libraries support. <br />Please verify compatibility.
      </li>
    </Transition>
    <Transition>
      <li>
        Can improve overall throughput but do not necessarily guarantee speed improvements for
        individual tasks.
      </li>
    </Transition>
    <Transition>
      <li>Best practice to conduct benchmarks before and after implementing virtual threads.</li>
    </Transition>
  </ol>
</Slide>

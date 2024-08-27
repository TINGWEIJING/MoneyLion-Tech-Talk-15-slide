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
  <p class="slide-header-div s-6xl font-bold">Developer Perspective</p>
  <ol class="s-7xl w-[94%] text-wrap text-left">
    <Transition visible>
      <li style:opacity={showStep > 0 ? '65%' : '100%'}>
        Observed <u>unpredictable delays between the execution of subsequent asynchronous tasks</u>,
        as thread pool exhaustion can cause irregular time gaps in task scheduling.
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li>
        Errors:
        <ul class="s-5xl" style="list-style-type:disc;">
          <li><code>java.net.SocketException: Broken pipe (Write failed)</code></li>
          <li><code>java.io.IOException: Broken pipe</code></li>
        </ul>
      </li>
    </Transition>
  </ol>
</Slide>

<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  import JconsoleScreenshot from '$lib/images/jconsole_screenshot.png';

  let showStep = $state(0);
</script>

<Slide
  in={() => {
    showStep = 0;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Important Values</p>
  <div class="screenshot-description-div">
    <ul class="s-6xl text-wrap text-left">
      <Transition visible>
        <li style:opacity={showStep > 0 && showStep !== 3 ? '65%' : '100%'}>
          <b>Active count</b>: Approximate number of threads that are actively executing tasks.
        </li>
      </Transition>
      <Transition
        do={() => {
          showStep += 1;
        }}
      >
        <li style:opacity={showStep > 1 ? '65%' : '100%'}>
          <b>Pool size</b>: Current number of threads in the pool
        </li>
      </Transition>
      <Transition
        do={() => {
          showStep += 1;
        }}
      >
        <li style:opacity={showStep > 2 ? '65%' : '100%'}>
          <b>Queue size</b>: Number of tasks in task queue
        </li>
      </Transition>
      <Transition
        do={() => {
          showStep += 1;
        }}
      />
    </ul>
  </div>
  <img
    class="screenshot absolute top-[4%] right-[-56%]"
    src={JconsoleScreenshot}
    alt="Jconsole Screenshot"
  />
</Slide>

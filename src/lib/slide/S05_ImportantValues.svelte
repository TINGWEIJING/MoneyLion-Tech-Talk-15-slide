<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  import JconsoleScreenshot from '$lib/images/jconsole_screenshot.png';
</script>

<Slide>
  <p class="slide-header-div s-6xl font-bold">Important Values</p>
  <div class="screenshot-description-div">
    <ul class="s-6xl text-wrap text-left">
      <li><b>Active count</b>: Approximate number of threads that are actively executing tasks.</li>
      <li><b>Pool size</b>: Current number of threads in the pool</li>
      <li><b>Queue size</b>: Number of tasks in task queue</li>
    </ul>
  </div>
  <img
    class="screenshot absolute top-[4%] right-[-56%]"
    src={JconsoleScreenshot}
    alt="Jconsole Screenshot"
  />
</Slide>

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
  <p class="slide-header-div s-6xl font-bold">Queue Capacity Guideline</p>

  <ul class="s-6xl w-[94%] text-wrap text-left">
    <Transition visible>
      <li style:opacity={showStep > 0 ? '65%' : '100%'}>
        Core Pool Size {'\\( \\le \\)'} Queue Capacity {'\\( < \\)'} Max Pool Size
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li style:opacity={showStep > 1 ? '65%' : '100%'}>
        Too small:
        <ul class="s-6xl">
          <li>Pool size expands to max pool size frequently</li>
          <li>Low task execution delay</li>
        </ul>
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li>
        Too large:
        <ul class="s-6xl">
          <li>Pool size will not expand immediately</li>
          <li>High task execution delay</li>
          <li>High memory usage</li>
        </ul>
      </li>
    </Transition>
  </ul>
</Slide>

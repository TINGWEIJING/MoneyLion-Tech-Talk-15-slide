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
  <p class="slide-header-div s-6xl font-bold">Guidelines</p>
  <ul class="s-6xl text-wrap text-left">
    <Transition visible>
      <li style:opacity={showStep > 0 ? '65%' : '100%'}>
        <b>Monitor CPU and Memory Usage</b>
        <ul style="list-style-type:disc;">
          <li class="s-5xl">Increase hardware resources if usage consistently exceeds 90%.</li>
        </ul>
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li style:opacity={showStep > 1 ? '65%' : '100%'}>
        <b>Caution in Decreasing Pool Size</b>
        <ul style="list-style-type:disc;">
          <li class="s-5xl">Traffic is extremely underestimated and remains consistently low.</li>
          <li class="s-5xl">Reducing hardware resources for cost savings.</li>
        </ul>
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li>
        <b>Setting up Alerts</b>
        <ul style="list-style-type:disc;">
          <li class="s-5xl">Telegram, Slack, or PagerDuty</li>
        </ul>
      </li>
    </Transition>
  </ul>
</Slide>

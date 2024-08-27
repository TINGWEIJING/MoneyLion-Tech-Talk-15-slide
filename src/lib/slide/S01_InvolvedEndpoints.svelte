<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';
  import JavaIcon from '$lib/images/java.svg';
  import SpringBootIcon from '$lib/images/springboot.svg';

  let showStep = $state(0);
</script>

<Slide
  in={() => {
    showStep = 0;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Involved Endpoints</p>

  <ol class="s-7xl w-[94%] text-wrap text-left">
    <Transition visible>
      <li style:opacity={showStep > 0 ? '65%' : '100%'}>
        Retrieve top 5 user preference product categories
        <ul style="list-style-type:disc;">
          <li class="s-5xl">Example: Electronics, beauty, toys, sports, fashion etc.</li>
        </ul>
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li>Retrieve top 10 trending products for specified product category</li>
    </Transition>
  </ol>
  <Transition
    do={() => {
      showStep = 0;
    }}
  >
    <div
      class="sized-icons-div flex flex-row content-end items-end justify-evenly justify-items-center"
    >
      <div class="flex flex-col">
        <img class="icon" src={JavaIcon} alt="Java icon" />
        <p class="s-5xl">Java 8</p>
      </div>
      <div class="flex flex-col items-center">
        <img class="icon" src={SpringBootIcon} alt="Spring Boot icon" />
        <p class="s-4xl">Spring Boot 2.7.0</p>
      </div>
    </div>
  </Transition>
</Slide>

<style>
  .sized-icons-div {
    width: var(--size-1200);
    padding-top: var(--size-56);
  }
</style>

<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  let layoutClass = $state('flex flex-row');
</script>

<Slide
  in={() => {
    layoutClass = 'flex flex-col';
  }}
>
  <p class="slide-header-div s-6xl font-bold">Endpoint Calling Pattern</p>
  <div class="flex flex-col content-start items-center">
    <Transition visible>
      <div class="fetch-product-categories-block w-full">Fetch 5 product categories</div>
    </Transition>
    <div class={layoutClass}>
      <Transition>
        <div class="fetch-trending-product-block">
          <p>Fetch trending <strong>electronic</strong> products</p>
        </div>
      </Transition>
      <Transition>
        <div class="fetch-trending-product-block">
          <p>Fetch trending <strong>beauty</strong> products</p>
        </div>
      </Transition>
      <Transition>
        <div class="fetch-trending-product-block">
          <p>Fetch trending <strong>toy</strong> products</p>
        </div>
      </Transition>
      <Transition>
        <div class="fetch-trending-product-block">
          <p>Fetch trending <strong>sport</strong> products</p>
        </div>
      </Transition>
      <Transition>
        <div class="fetch-trending-product-block">
          <p>Fetch trending <strong>fashion</strong> products</p>
        </div>
      </Transition>
    </div>
  </div>
  <Transition
    do={() => {
      layoutClass = 'flex flex-row';
    }}
  />
</Slide>

<style>
  /* Calling block */
  .fetch-product-categories-block,
  .fetch-trending-product-block {
    min-width: var(--size-288);
    max-width: 100%;
    min-height: var(--size-96);
    max-height: var(--size-144);
    height: var(--size-144);
    border-radius: var(--size-24);
    color: black;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size: var(--size-40);
    margin: var(--size-8);
    padding: var(--size-12);
  }

  .fetch-product-categories-block {
    background-color: yellowgreen;
  }

  .fetch-trending-product-block {
    background-color: rgb(224, 224, 66);
  }
</style>

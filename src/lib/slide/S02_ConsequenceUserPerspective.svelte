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
  <p class="slide-header-div s-6xl font-bold">User Perspective</p>

  <ol class="s-7xl w-[94%] text-wrap text-left">
    <Transition visible>
      <li style:opacity={showStep > 0 ? '65%' : '100%'}>
        Experience slow response time due to high latency.
        <div
          class="sized-spinner text-surface inline-block animate-spin rounded-full border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
          >
        </div>
      </li>
    </Transition>
    <Transition
      do={() => {
        showStep += 1;
      }}
    >
      <li>
        HTTP request timeout error:
        <ul style="list-style-type:disc;">
          <li>
            <div
              class="alert-div flex items-center border-solid border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <p>408 Request Timeout</p>
            </div>
          </li>
          <li>
            <div
              class="alert-div flex items-center border-solid border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <p>503 Service Unavailable</p>
            </div>
          </li>
          <li>
            <div
              class="alert-div flex items-center border-solid border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <p>504 Gateway Timeout</p>
            </div>
          </li>
        </ul>
      </li>
    </Transition>
  </ol>
  <!-- <div
		class="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
		role="status"
	>
		<span
			class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
			>Loading...</span
		>
	</div> -->
  <!-- <div
		class="mb-4 flex items-center rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
		role="alert"
	>
		<svg
			class="flex-shrink-0 me-3 inline h-4 w-4"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
			/>
		</svg>
		<span class="sr-only">Info</span>
		<div>
			<span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
		</div>
	</div> -->
</Slide>

<style>
  .sized-spinner {
    height: var(--size-56);
    width: var(--size-56);
    border-width: var(--size-8);
  }

  .alert-div {
    width: 50%;
    font-size: var(--size-48);
    margin-bottom: var(--size-4);
    border-radius: var(--size-8);
    border-width: var(--size-4);
    padding: var(--size-16);
  }
</style>

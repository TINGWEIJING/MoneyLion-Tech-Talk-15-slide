<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'

	let text: HTMLParagraphElement
	let shouldDisplayNone: boolean = $state(false)
	let shouldVisibilityHidden: boolean = $state(false)
	let layoutClass = $state('flex flex-col gap-4')
</script>

<Slide>
	<div class={layoutClass}>
		<Transition visible>
			<p class="s-96">A</p>
		</Transition>
		<Transition visible>
			<p style:display={shouldDisplayNone ? 'none' : undefined} class="s-96">B</p>
		</Transition>
		<Transition visible>
			<p style:visibility={shouldVisibilityHidden ? 'hidden' : undefined} class="s-96">C</p>
		</Transition>
	</div>
	<Transition do={() => (layoutClass = 'flex flex-row gap-16')} />
	<Transition do={() => (shouldDisplayNone = true)} />
	<Transition do={() => (shouldVisibilityHidden = true)} />

	<!-- <div class="flex flex-row place-content-center place-items-center gap-36">
		<Transition>
			<p class="s-96">A</p>
		</Transition>
		<div class="flex flex-col gap-24">
			<Transition>
				<p class="s-96">B</p>
			</Transition>
			<Transition>
				<p class="s-96">C</p>
			</Transition>
		</div>
	</div> -->

	<!-- Cannot use w-full else animation not working -->
	<div class="absolute h-full">
		<Transition class="h-full">
			<p bind:this={text} class="relative text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
		</Transition>
	</div>

	<Transition do={() => text.classList.replace('text-8xl', 'text-6xl')} class="mt-16"></Transition>
</Slide>

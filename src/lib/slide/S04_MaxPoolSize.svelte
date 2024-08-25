<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
	import { fade, fly } from 'svelte/transition'

	let showStep = $state(0)
</script>

<Slide
	in={() => {
		showStep = 0
	}}
>
	<p class="slide-header-div s-6xl font-bold">Max Pool Size</p>
	<p class="s-9xl">{'\\(L = \\lambda \\times W\\)'}</p>
	<p style:visibility={showStep > 0 ? undefined : 'hidden'} in:fade class="s-5xl">
		{'\\(\\lambda= 500 \\times 5 = 2500 s^{-1} \\)'}
	</p>
	<p style:visibility={showStep > 1 ? undefined : 'hidden'} in:fade class="s-5xl">
		{'\\(W= 0.2 s \\)'}
	</p>
	<p style:visibility={showStep > 2 ? undefined : 'hidden'} in:fade class="s-5xl">
		{'\\(L= 2500 s^{-1} \\times 0.2 s = 500\\)'}
	</p>
	<!-- TODO: Add graph -->
	<Transition
		do={() => {
			showStep++
		}}
	/>
	<Transition
		do={() => {
			showStep++
		}}
	/>
	<Transition
		do={() => {
			showStep++
		}}
	/>
</Slide>

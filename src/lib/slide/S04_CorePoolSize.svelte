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
	<p class="slide-header-div s-6xl font-bold">Core Pool Size</p>
	<p class="s-9xl">{'\\(L = \\lambda \\times W\\)'}</p>
	<p class="s-5xl">{'\\(L:\\)'} Required core pool size</p>
	<p class="s-5xl">{'\\(\\lambda:\\)'} Thread spawn rate (per second)</p>
	<p class="s-5xl">{'\\(W:\\)'} Request completion time (second)</p>
	<!-- TODO: Add graph -->
	<p style:visibility={showStep > 0 ? undefined : 'hidden'} in:fade class="s-5xl">
		{'\\(\\lambda = 100 \\times 5 = 500 s^{-1} \\)'}
	</p>
	<p style:visibility={showStep > 1 ? undefined : 'hidden'} in:fade class="s-5xl">
		{'\\(W = 0.2 s \\)'}
	</p>
	<p style:visibility={showStep > 2 ? undefined : 'hidden'} in:fade class="s-5xl">
		{'\\(L = 500 s^{-1} \\times 0.2 s = 100\\)'}
	</p>
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
	<!-- <p class="s-5xl">{'\\( \\begin{aligned} AG &= B \\newline C &= DE \\end{aligned} \\)'}</p> -->
</Slide>

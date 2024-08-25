<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Little's Law</p>
	<p class="s-5xl">
		The long-term average number of customers in a stationary system (L) is equal to the long-term
		average effective arrival rate (λ) multiplied by the average time a customer spends in the
		system (W)
	</p>
	<p class="s-10xl">{'\\(L = \\lambda \\times W\\)'}</p>
	<p class="s-7xl">{'\\(L:\\)'} Required pool size (approximately)</p>
	<p class="s-7xl">{'\\(\\lambda:\\)'} Estimated average incoming task rate</p>
	<p class="s-7xl">{'\\(W:\\)'} Estimated average task processing time</p>
</Slide>

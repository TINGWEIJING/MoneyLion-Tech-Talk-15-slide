<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Queue Capacity</p>
	<p class="s-8xl">Guideline:</p>
	<ul class="s-6xl text-wrap pl-24 text-left">
		<li>Core Pool Size {'\\( \\le \\)'} Queue Capacity {'\\( < \\)'} Max Pool Size</li>
		<li>Too small: Pool size expands to max pool size frequently, low task execution delay</li>
		<li>
			Too large: High memory usage and pool size will not expand immediately, high task execution
			delay
		</li>
	</ul>
</Slide>

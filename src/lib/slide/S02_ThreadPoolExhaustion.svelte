<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="s-9xl font-bold">Thread Pool Exhaustion</p>
	<p class="s-6xl">
		Occurs when all available threads in a pool are in use, preventing any new tasks from starting
		until some threads become free
	</p>
</Slide>

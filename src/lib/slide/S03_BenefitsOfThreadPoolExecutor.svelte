<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Benefits of Thread Pool Executor</p>
	<ol class="s-6xl text-wrap pl-24 text-left">
		<li>Control number of threads to be created in the pool.</li>
		<li>Configurable to handle spikes in the number of requests during high traffic.</li>
		<li>
			Avoid OutOfMemoryError by limiting the number of threads in the pool and tasks in task queue.
		</li>
	</ol>
</Slide>

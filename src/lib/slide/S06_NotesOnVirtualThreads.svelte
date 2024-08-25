<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Notes on Virtual Threads</p>
	<ul class="s-6xl text-wrap text-left">
		<li>Not optimized for CPU-intensive operations.</li>
		<li>
			Not all version of Database driver libraries support. <br />Please verify compatibility.
		</li>
		<li>
			Can improve overall throughput but do not necessarily guarantee speed improvements for
			individual tasks.
		</li>
		<li>Best practice to conduct benchmarks before and after implementing virtual threads.</li>
	</ul>
</Slide>

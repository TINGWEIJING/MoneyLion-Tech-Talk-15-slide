<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Concurrency in Backend</p>
	<p class="s-8xl">Use case:</p>
	<div>
		<ul class="s-7xl text-left">
			<li>Rest API asynchronous endpoint calling</li>
			<li>Database operations</li>
			<li>
				Other I/O operations: <span class="s-5xl">File writing, WebSocket, etc.</span>
			</li>
		</ul>
	</div>
</Slide>

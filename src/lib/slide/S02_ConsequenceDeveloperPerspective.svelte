<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Consequences</p>
	<p class="s-8xl">Developer perspective:</p>
	<ol class="s-5xl text-wrap pl-24 text-left">
		<li>
			Observed unpredictable delays between the execution of subsequent asynchronous tasks, as
			thread pool exhaustion can cause irregular time gaps in task scheduling.
		</li>
		<li>
			Errors: <code class="s-4xl">java.net.SocketException: Broken pipe (Write failed)</code> or
			<code class="s-4xl">java.io.IOException: Broken pipe </code>
		</li>
	</ol>
</Slide>

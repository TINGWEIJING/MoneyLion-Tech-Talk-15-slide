<script lang="ts">
	import { CODE_OPTIONS } from '$lib/constant'
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'

	let code: Code
	const rawCode = `@Bean(name = "threadPoolTaskExecutor")
public Executor threadPoolTaskExecutor() {
    ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
    executor.setCorePoolSize(2);
    executor.setMaxPoolSize(4);
    executor.setQueueCapacity(8);
    executor.initialize();
    return executor;
}`
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Defining Thread Pool Executor</p>
	<div class="s-7xl">
		<Code bind:this={code} lang="java" theme="poimandres" code={rawCode} options={CODE_OPTIONS} />
	</div>
	<!-- TODO: Show code & explain 3 important value -->
</Slide>

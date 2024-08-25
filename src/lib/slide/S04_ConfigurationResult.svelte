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

	const rawCode02 = `@Bean(name = "threadPoolTaskExecutor")
public Executor threadPoolTaskExecutor() {
    ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
    executor.setCorePoolSize(100);
    executor.setMaxPoolSize(500);
    executor.setQueueCapacity(200);
    executor.initialize();
    return executor;
}`
</script>

<Slide
	in={async () => {
		await code.update`${rawCode}`
		await code.selectLines`*`
	}}
>
	<p class="slide-header-div s-6xl font-bold">Configuration Result</p>
	<div class="s-7xl">
		<Code bind:this={code} lang="java" theme="poimandres" code={rawCode} options={CODE_OPTIONS} />
	</div>
	<Action
		do={async () => {
			await code.selectLines`4-6`
			await code.update`${rawCode02}`
		}}
	/>
</Slide>

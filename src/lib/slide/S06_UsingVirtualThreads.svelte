<script lang="ts">
	import { CODE_OPTIONS } from '$lib/constant'
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'

	let codeA: Code
	let codeB: Code
	const rawCodeA = `@Bean(name = "threadPoolTaskExecutor")
public Executor threadPoolTaskExecutor() {
    ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
    executor.setCorePoolSize(100);
    executor.setMaxPoolSize(500);
    executor.setQueueCapacity(200);
    executor.initialize();
    return executor;
}`

	const rawCodeA02 = `@Bean(name = "virtualThreadPerTaskExecutor")
public ExecutorService virtualThreadPerTaskExecutor() {
    return Executors.newVirtualThreadPerTaskExecutor();
}`

	const rawCodeB = `@GetMapping("/{userId}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String userId) {
    Executor executor = threadPoolTaskExecutor();
    // omitted...
    // fetch trending products for each category
    List<List<String>> nestCategoryProductList = personalizedProductCategories
            .getCategories()
            .stream()
            .map(category -> CompletableFuture.supplyAsync(
                    () -> fetchTrendingProductsByCategory(category),
                    executor
            ))
            .map(CompletableFuture::join)
            .collect(Collectors.toList());
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`

	const rawCodeB02 = `@GetMapping("/{userId}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String userId) {
    Executor executor = virtualThreadPerTaskExecutor();
    // omitted...
    // fetch trending products for each category
    List<List<String>> nestCategoryProductList = personalizedProductCategories
            .getCategories()
            .stream()
            .map(category -> CompletableFuture.supplyAsync(
                    () -> fetchTrendingProductsByCategory(category),
                    executor
            ))
            .map(CompletableFuture::join)
            .collect(Collectors.toList());
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`
</script>

<Slide
	in={async () => {
		await codeA.update`${rawCodeA}`
		await codeB.update`${rawCodeB}`
		await codeB.selectLines`*`
	}}
>
	<p class="slide-header-div s-6xl font-bold">Using Virtual Threads</p>
	<Transition visible>
		<div class="s-5xl">
			<Code
				bind:this={codeA}
				lang="java"
				theme="poimandres"
				code={rawCodeA}
				options={CODE_OPTIONS}
			/>
		</div>
	</Transition>
	<Action
		do={() => {
			codeA.update`${rawCodeA02}`
		}}
	/>
	<Transition>
		<div class="s-5xl">
			<Code
				bind:this={codeB}
				lang="java"
				theme="poimandres"
				code={rawCodeB}
				options={CODE_OPTIONS}
			/>
		</div>
	</Transition>
	<Action
		do={async () => {
			await codeB.selectLines`3,9-12`
			await codeB.update`${rawCodeB02}`
		}}
	/>
</Slide>

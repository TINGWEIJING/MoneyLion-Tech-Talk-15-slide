<script lang="ts">
	import { CODE_OPTIONS } from '$lib/constant'
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'

	let code: Code
	const rawCode = `@GetMapping("/{userId}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String userId) {
    // fetch user personalized product categories
    PersonalizedProductCategories personalizedProductCategories
            = fetchPersonalizedProductCategories(userId);
    // fetch trending products for each category
    List<List<String>> nestCategoryProductList = personalizedProductCategories
            .getCategories()
            .stream()
            .map(category -> CompletableFuture.supplyAsync(
                    () -> fetchTrendingProductsByCategory(category)
            ))
            .map(CompletableFuture::join)
            .collect(Collectors.toList());
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`

	const rawCode02 = `@GetMapping("/{userId}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String userId) {
    Executor executor = threadPoolTaskExecutor();
    // fetch user personalized product categories
    PersonalizedProductCategories personalizedProductCategories
            = fetchPersonalizedProductCategories(userId);
    // fetch trending products for each category
    List<List<String>> nestCategoryProductList = personalizedProductCategories
            .getCategories()
            .stream()
            .map(category -> CompletableFuture.supplyAsync(
                    () -> fetchTrendingProductsByCategory(category)
            ))
            .map(CompletableFuture::join)
            .collect(Collectors.toList());
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`

	const rawCode03 = `@GetMapping("/{userId}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String userId) {
    Executor executor = threadPoolTaskExecutor();
    // fetch user personalized product categories
    PersonalizedProductCategories personalizedProductCategories
            = fetchPersonalizedProductCategories(userId);
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
	in={() => {
		code.update`${rawCode}`
	}}
>
	<p class="slide-header-div s-6xl font-bold">Using Thread Pool Executor</p>
	<div class="s-5xl">
		<Code bind:this={code} lang="java" theme="poimandres" code={rawCode} options={CODE_OPTIONS} />
	</div>
	<Action
		do={() => {
			code.update`${rawCode02}`
		}}
	/>
	<Action
		do={() => {
			code.update`${rawCode03}`
		}}
	/>
	<!-- TODO: Show code to use executor -->
</Slide>

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
            .map(category -> fetchTrendingProductsByCategory(category))
            .collect(Collectors.toList());
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`

	const rawCode02 = `@GetMapping("/{userId}/personalized-trends")
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
</script>

<Slide
	in={async () => {
		await code.update`${rawCode}`
		await code.selectLines`*`
	}}
>
	<p class="slide-header-div s-6xl font-bold">Endpoint Implementation</p>
	<div class="s-5xl">
		<Code bind:this={code} lang="java" theme="poimandres" code={rawCode} options={CODE_OPTIONS} />
	</div>
	<Action
		do={async () => {
			await code.selectLines`10`
		}}
	/>
	<Action
		do={async () => {
			await code.update`${rawCode02}`
			await code.selectLines`10-12`
		}}
	/>
	<Action
		do={async () => {
			await code.selectLines`13`
		}}
	/>
	<!-- Animate code -->
</Slide>

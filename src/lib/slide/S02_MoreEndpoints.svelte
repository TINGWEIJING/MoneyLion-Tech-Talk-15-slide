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
    // async tasks
}

@GetMapping("/{userId}/personalized-recommendations")
public PersonalizedRecommendationsResp getPersonalizedRecommendations(@PathVariable String userId) {
    // more async tasks
}

@GetMapping("/{userId}/recent-category-activities")
public RecentActivitiesResp getRecentCategoryActivities(@PathVariable String userId) {
    // more and more async tasks
}`
</script>

<Slide
	in={() => {
		code.update`${rawCode}`
	}}
>
	<p class="slide-header-div s-6xl font-bold">More Endpoints</p>
	<div class="s-5xl">
		<Code bind:this={code} lang="java" theme="poimandres" code={rawCode} options={CODE_OPTIONS} />
	</div>
	<Action
		do={() => {
			code.update`${rawCode02}`
		}}
	/>
	<!-- TODO: Show code & explain this is using platform thread -->
	<!-- TODO: No control, ForkJoinPool. commonPool() -->
	<!-- TODO: In reality, other endpoint may spawn thread for asynchronous task, imaging high trafiic -->
</Slide>

<script lang="ts">
  import { CODE_OPTIONS_LINE_NUM } from '$lib/constant';
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  let code: Code;
  const rawCode = `@GetMapping("/{id}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String id) {
    // fetch user personalized product categories
    PersonalizedProductCategories personalizedProductCategories
            = fetchPersonalizedProductCategories(id);
    // fetch trending products for each category
    List<CompletableFuture<List<String>>> futures = personalizedProductCategories
            .getCategories()
            .stream()
            .map(category -> CompletableFuture.supplyAsync(
                    () -> fetchTrendingProductsByCategory(category)
            ))
            .collect(Collectors.toList());
    List<List<String>> nestCategoryProductList = futures.stream()
            .map(CompletableFuture::join)
            .collect(Collectors.toList());
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`;

  const rawCode02 = `@GetMapping("/{id}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String id) {
    // async tasks
}

@GetMapping("/{id}/personalized-recommendations")
public PersonalizedRecommendationsResp getPersonalizedRecommendations(@PathVariable String id) {
    // more async tasks
}

@GetMapping("/{id}/recent-category-activities")
public RecentActivitiesResp getRecentCategoryActivities(@PathVariable String id) {
    // more and more async tasks
}`;
</script>

<Slide
  in={async () => {
    await code.update`${rawCode}`;
    await code.selectLines`*`;
  }}
>
  <p class="slide-header-div s-6xl font-bold">More Endpoints</p>
  <div class="s-5bxl">
    <Code
      bind:this={code}
      lang="java"
      theme="poimandres"
      code={rawCode}
      options={CODE_OPTIONS_LINE_NUM}
    />
  </div>
  <Action
    do={() => {
      code.selectLines`10-12`;
    }}
  />
  <Action
    do={async () => {
      await code.update`${rawCode02}`;
      await code.selectLines`*`;
    }}
  />
</Slide>

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
    Executor executor = threadPoolTaskExecutor();
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

  const rawCode03 = `@GetMapping("/{id}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String id) {
    Executor executor = threadPoolTaskExecutor();
    // fetch user personalized product categories
    PersonalizedProductCategories personalizedProductCategories
            = fetchPersonalizedProductCategories(id);
    // fetch trending products for each category
    List<CompletableFuture<List<String>>> futures = personalizedProductCategories
            .getCategories()
            .stream()
            .map(category -> CompletableFuture.supplyAsync(
                    () -> fetchTrendingProductsByCategory(category),
                    executor
            ))
            .collect(Collectors.toList());
    List<List<String>> nestCategoryProductList = futures.stream()
            .map(CompletableFuture::join)
            .collect(Collectors.toList());
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`;
</script>

<Slide
  in={async () => {
    await code.update`${rawCode}`;
    await code.selectLines`*`;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Using Thread Pool Executor</p>
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
    do={async () => {
      await code.update`${rawCode02}`;
      await code.selectLines`3`;
    }}
  />
  <Action
    do={async () => {
      await code.selectLines`11-13`;
    }}
  />
  <Action
    do={async () => {
      await code.update`${rawCode03}`;
    }}
  />
</Slide>

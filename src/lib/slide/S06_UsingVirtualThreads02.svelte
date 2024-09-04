<script lang="ts">
  import { CODE_OPTIONS_LINE_NUM } from '$lib/constant';
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  let codeB: Code;

  const rawCodeB = `@GetMapping("/{id}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String id) {
    Executor executor = threadPoolTaskExecutor();
    // omitted...
    // fetch trending products for each category
    List<CompletableFuture<List<String>>> futures = personalizedProductCategories
            .getCategories()
            .stream()
            .map(category -> CompletableFuture.supplyAsync(
                    () -> fetchTrendingProductsByCategory(category),
                    executor
            ))
            .collect(Collectors.toList());
    // omitted...
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`;

  const rawCodeB02 = `@GetMapping("/{id}/personalized-trends")
public PersonalizedTrendsResp getPersonalizedTrends(@PathVariable String id) {
    Executor executor = virtualThreadPerTaskExecutor();
    // omitted...
    // fetch trending products for each category
    List<CompletableFuture<List<String>>> futures = personalizedProductCategories
            .getCategories()
            .stream()
            .map(category -> CompletableFuture.supplyAsync(
                    () -> fetchTrendingProductsByCategory(category),
                    executor
            ))
            .collect(Collectors.toList());
    // omitted...
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`;
</script>

<Slide
  in={async () => {
    await codeB.update`${rawCodeB}`;
    await codeB.selectLines`*`;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Using Virtual Threads</p>

  <div class="s-5bxl">
    <Code
      bind:this={codeB}
      lang="java"
      theme="poimandres"
      code={rawCodeB}
      options={CODE_OPTIONS_LINE_NUM}
    />
  </div>

  <Action
    do={async () => {
      await codeB.selectLines`3,9-12`;
    }}
  />
  <Action
    do={async () => {
      await codeB.selectLines`3,9-12`;
    }}
  />
  <Action
    do={async () => {
      await codeB.update`${rawCodeB02}`;
    }}
  />
</Slide>

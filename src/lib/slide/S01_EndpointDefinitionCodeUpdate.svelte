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
    List<List<String>> nestCategoryProductList = personalizedProductCategories
            .getCategories()
            .stream()
            .map(category -> fetchTrendingProductsByCategory(category))
            .collect(Collectors.toList());
    return mapToPersonalizedTrendsResp(nestCategoryProductList);
}`;

  const rawCode02 = `@GetMapping("/{id}/personalized-trends")
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
</script>

<Slide
  in={async () => {
    await code.update`${rawCode}`;
    await code.selectLines`*`;
  }}
>
  <p class="slide-header-div s-6xl font-bold" style:z-index={'-1'}>Endpoint Implementation</p>
  <div class="s-6xl">
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
      await code.selectLines`3-5`;
    }}
  />
  <Action
    do={async () => {
      await code.selectLines`3-5`;
    }}
  />
  <Action
    do={async () => {
      await code.selectLines`6-11`;
    }}
  />
  <Action
    do={async () => {
      await code.selectLines`7-8`;
    }}
  />
  <Action
    do={async () => {
      await code.selectLines`8-10`;
    }}
  />
  <Action
    do={async () => {
      await code.selectLines`10`;
    }}
  />
  <Action
    do={async () => {
      await code.update`${rawCode02}`;
      await code.selectLines`10-12`;
    }}
  />
  <Action
    do={async () => {
      await code.selectLines`7,14-16`;
    }}
  />
  <Action
    do={async () => {
      await code.selectLines`7-16`;
    }}
  />
  <!-- Animate code -->
</Slide>

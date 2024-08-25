<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
	import JavaIcon from '$lib/images/java.svg'
	import SpringBootIcon from '$lib/images/springboot.svg'

	let className = $state('s-6xl')
</script>

<Slide
	in={() => {
		className = 's-6xl'
	}}
>
	<p class="slide-header-div s-6xl font-bold">Scenario</p>
	<Transition visible>
		<p class={className}>
			Developing an endpoint to retrieve user preference trending products in microservice
			architecture...
		</p>
	</Transition>
	<Transition
		do={() => {
			className = 's-3xl'
		}}
	>
		<!-- TODO: Improve sentence with product preference -->
		<p class="s-8xl">Given:</p>
		<ol class="s-5xl text-wrap pl-24 text-left">
			<!-- TODO: Line height or gap & padding left -->
			<!-- TODO: Escape curly braces -->
			<li>
				<code class="s-4xl">/userId/personalised-product-categories</code>: Retrieve top 5 user
				preference product categories
				<ul style="list-style-type:disc;">
					<!-- TODO: More appropriate example -->
					<li class="s-4xl">Example: Electronics, beauty, toys, sports, clothing etc.</li>
				</ul>
			</li>
			<li>
				<code class="s-4xl">/categories/categoryId/trending-products</code>: Retrieve top 10
				trending products for specified product category
			</li>
		</ol>
		<div class="flex w-full flex-row content-end items-end justify-evenly justify-items-center">
			<div class="flex flex-col">
				<img class="icon" src={JavaIcon} alt="Java icon" />
				<p class="s-4xl">Java 8</p>
			</div>
			<div class="flex flex-col items-center">
				<img class="icon" src={SpringBootIcon} alt="Spring Boot icon" />
				<p class="s-4xl">Spring Boot 2.7.0</p>
			</div>
		</div>
	</Transition>
</Slide>

<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'

	let layoutClass = $state('flex flex-row')
</script>

<Slide
	in={() => {
		layoutClass = 'flex flex-col'
	}}
>
	<p class="slide-header-div s-6xl font-bold">Endpoint Calling Pattern</p>
	<div class="flex flex-col content-start">
		<Transition visible>
			<div class="fetch-product-categories-block">Fetch 5 product categories</div>
		</Transition>
		<div class={layoutClass}>
			<Transition>
				<div class="fetch-trending-product-block">Fetch trending electronic products</div>
			</Transition>
			<Transition>
				<div class="fetch-trending-product-block">Fetch trending beauty products</div>
			</Transition>
			<Transition>
				<div class="fetch-trending-product-block">Fetch trending toy products</div>
			</Transition>
			<Transition>
				<div class="fetch-trending-product-block">Fetch trending sport products</div>
			</Transition>
			<Transition>
				<div class="fetch-trending-product-block">Fetch trending clothing products</div>
			</Transition>
		</div>
	</div>
	<Transition
		do={() => {
			layoutClass = 'flex flex-row'
		}}
	/>
</Slide>

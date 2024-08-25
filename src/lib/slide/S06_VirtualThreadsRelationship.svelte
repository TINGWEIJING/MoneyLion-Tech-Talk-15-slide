<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Virtual Threads Relationship</p>
	<div class="flex flex-row items-end justify-evenly">
		<div class="flex flex-col">
			<p class="s-4xl">CPU Core</p>
			<div class="layer-div cpu-core-container">
				<div class="layer-item">Core #1</div>
			</div>
		</div>
		<div class="flex h-full flex-col justify-center">
			<p>1:N</p>
			<div class="connection-line"></div>
		</div>
		<div class="flex flex-col">
			<p class="s-4xl">OS Thread</p>
			<div class="layer-div os-thread-container">
				<div class="layer-item">OS thread #1</div>
				<div class="layer-item">OS thread #2</div>
			</div>
		</div>
		<div class="flex h-full flex-col justify-center">
			<p>1:1</p>
			<div class="connection-line"></div>
		</div>
		<div class="flex flex-col items-center">
			<p class="s-4xl">Java<br />Platform Thread</p>
			<div class="layer-div platform-thread-container">
				<div class="layer-item">Platform thread #1</div>
				<div class="layer-item">Platform thread #2</div>
			</div>
		</div>
		<div class="flex h-full flex-col justify-center">
			<p>N:M</p>
			<div class="connection-line"></div>
		</div>
		<div class="flex flex-col items-center">
			<p class="s-4xl">Java<br />Virtual Thread</p>
			<div class="layer-div virtual-thread-container">
				<div class="layer-item">Virtual thread #1</div>
				<div class="layer-item">Virtual thread #2</div>
				<div class="layer-item">Virtual thread #3</div>
				<div class="layer-item">Virtual thread #4</div>
				<div class="layer-item">Virtual thread #5</div>
			</div>
		</div>
	</div>
</Slide>

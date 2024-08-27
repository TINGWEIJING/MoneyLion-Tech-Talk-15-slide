<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
	import JavaIcon from '$lib/images/java.svg'
	import SpringBootIcon from '$lib/images/springboot.svg'
</script>

<Slide>
	<div class="heading-01">
		<p>06</p>
		<p class="s-9xl font-bold">Virtual Threads</p>
		<Transition>
			<div class="flex w-full flex-row content-end items-end justify-evenly justify-items-center">
				<div class="flex flex-col">
					<img class="icon" src={JavaIcon} alt="Java icon" />
					<p class="s-4xl">Java 21</p>
				</div>
				<div class="flex flex-col items-center">
					<img class="icon" src={SpringBootIcon} alt="Spring Boot icon" />
					<p class="s-4xl">Spring Boot 3.2.X</p>
				</div>
			</div>
		</Transition>
	</div>
	<!-- <p>
		Lightweight threads that significantly reduce the effort of maintaining and observing
		high-throughput concurrent applications
	</p>
	<div class="flex w-full flex-row content-end items-end justify-evenly justify-items-center">
		<div class="flex flex-col">
			<img class="icon" src={JavaIcon} alt="Java icon" />
			<p class="s-4xl">Java 21</p>
		</div>
		<div class="flex flex-col items-center">
			<img class="icon" src={SpringBootIcon} alt="Spring Boot icon" />
			<p class="s-4xl">Spring Boot 3.2.X</p>
		</div>
	</div> -->
</Slide>

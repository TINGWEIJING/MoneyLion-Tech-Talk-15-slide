<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Guidelines</p>
	<ul class="s-6xl text-wrap text-left">
		<li>
			<b>Monitor CPU and Memory Usage</b>
			<ul style="list-style-type:disc;">
				<li class="s-5xl">Increase hardware resources if usage consistently exceeds 90%.</li>
			</ul>
		</li>
		<li>
			<b>Caution in Decreasing Pool Size</b>
			<ul style="list-style-type:disc;">
				<li class="s-5xl">Traffic is extremely underestimated and remains consistently low.</li>
				<li class="s-5xl">Reducing hardware resources for cost savings.</li>
			</ul>
		</li>
		<li>
			<b>Setting up Alerts</b>
			<ul style="list-style-type:disc;">
				<li class="s-5xl">Telegram, Slack, or PagerDuty</li>
			</ul>
		</li>
	</ul>
</Slide>

<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
	import DatadogIcon from '$lib/images/datadog.svg'
	import GrafanaIcon from '$lib/images/grafana.svg'
	import PrometheusIcon from '$lib/images/prometheus.svg'
	import ElasticStackIcon from '$lib/images/elastic_stack.svg'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Java Management Extensions (JMX)</p>
	<p class="s-7xl">
		A Java technology that provides tools for managing and monitoring applications and services
		using a standardized interface.
	</p>
	<div class="flex w-full flex-row content-end items-end justify-evenly justify-items-center">
		<div class="flex flex-col items-center">
			<img class="icon" src={DatadogIcon} alt="Java icon" />
			<p class="s-4xl">Datadog</p>
		</div>
		<div class="flex flex-col items-center">
			<img class="icon" src={GrafanaIcon} alt="Spring Boot icon" />
			<p class="s-4xl">Grafana</p>
		</div>
		<div class="flex flex-col items-center">
			<img class="icon" src={PrometheusIcon} alt="Spring Boot icon" />
			<p class="s-4xl">Prometheus</p>
		</div>
		<div class="flex flex-col items-center">
			<img class="icon" src={ElasticStackIcon} alt="Spring Boot icon" />
			<p class="s-4xl">Elastic Stack</p>
		</div>
	</div>
</Slide>

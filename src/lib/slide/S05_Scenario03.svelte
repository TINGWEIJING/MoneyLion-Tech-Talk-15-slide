<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
	import Chart from 'chart.js/auto'

	const yLength = 20
	const labels = Array.from({ length: yLength }, (_, i) => `${i + 1}T`)
	const maxPoolSizeData = Array.from({ length: yLength }, (_, i) => 500)
	const corePoolSizeData = Array.from({ length: yLength }, (_, i) => 100)
	const activeCountData = [
		80, 95, 145, 120, 140, 260, 120, 110, 180, 285, 145, 180, 190, 155, 130, 170, 100, 160, 110, 140
	]

	function makeLineChart(canvas: HTMLCanvasElement) {
		new Chart(canvas.getContext('2d')!, {
			type: 'line',
			options: {
				maintainAspectRatio: false
			},
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Active Count',
						backgroundColor: 'rgba(75, 192, 192, 0.2)',
						borderColor: 'rgba(75, 192, 192, 1)',
						borderWidth: 4,
						data: activeCountData
					},
					{
						label: 'Max Pool Size',
						backgroundColor: 'rgba(255, 0, 0, 0.2)',
						borderColor: 'rgba(255, 0, 0, 0.8)',
						borderWidth: 1,
						data: maxPoolSizeData
					},
					{
						label: 'Core Pool Size',
						backgroundColor: 'rgba(255, 165, 0, 0.2)',
						borderColor: 'rgba(255, 165, 0, 1)',
						borderWidth: 1,
						data: corePoolSizeData
					}
				]
			}
		})
	}
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Scenario 3</p>
	<div class="flex flex-row items-center justify-center">
		<div class="line-chart-div">
			<canvas use:makeLineChart></canvas>
		</div>
		<div class="line-chart-description-div flex flex-col items-center justify-center">
			<Transition visible>
				<p class="s-5xl">
					Given the active count trends observed during <strong>non-peak traffic</strong>...
				</p>
			</Transition>
			<Transition><p class="s-5xl">Recommended to increase Core Pool Size value</p></Transition>
		</div>
	</div>
</Slide>

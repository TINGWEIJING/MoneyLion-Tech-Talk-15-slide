<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Potentail Causes And Fixes</p>
	<table class="s-6xl">
		<thead>
			<tr>
				<th>Cause</th>
				<th>Fix</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Unregulated thread spawning</td>
				<td>Configure the thread pool.</td>
			</tr>
			<tr>
				<td>Insufficient CPU or memory resources</td>
				<td
					>Increase hardware capacity, or scale horizontally by adding more replicas or instances</td
				>
			</tr>
			<tr>
				<td>Flawed implementation or the presence of bugs in the code</td>
				<td>Revisit and review the implementation & perform debugging.</td>
			</tr>
		</tbody>
	</table>
</Slide>

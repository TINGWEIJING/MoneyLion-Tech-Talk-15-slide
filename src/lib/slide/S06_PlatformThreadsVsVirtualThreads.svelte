<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core'
	import { tween, all, animate, wait } from '@animotion/motion'
</script>

<Slide>
	<p class="slide-header-div s-6xl font-bold">Platform Threads vs Virtual Threads</p>
	<table class="s-6xl">
		<thead>
			<tr>
				<th>
					<strong>Aspect</strong>
				</th>
				<th>
					<strong>Platform Threads</strong>
				</th>
				<th>
					<strong>Virtual Threads</strong>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<strong>Use Case</strong>
				</td>
				<td>Suitable for both CPU & I/O operations</td>
				<td>Designed for I/O operation only</td>
			</tr>
			<tr>
				<td>
					<strong>Resource Usage</strong>
				</td>
				<td>High memory usage</td>
				<td>Extremely lightweight in terms of memory usage</td>
			</tr>
			<tr>
				<td>
					<strong>Creation and Teardown</strong>
				</td>
				<td>Slower</td>
				<td>Faster</td>
			</tr>
		</tbody>
	</table>
</Slide>

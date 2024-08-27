<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';
  import Chart from 'chart.js/auto';

  const yLength = 20;
  const labels = [
    '06:00',
    '06:15',
    '06:30',
    '06:45',
    '07:00',
    '07:15',
    '07:30',
    '07:45',
    '08:00',
    '08:15',
    '08:30',
    '08:45',
    '09:00',
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45'
  ];
  const maxPoolSizeData = Array.from({ length: yLength }, (_, i) => 500);
  const corePoolSizeData = Array.from({ length: yLength }, (_, i) => 100);
  const activeCountData = [
    80, 95, 145, 120, 140, 260, 320, 420, 490, 460, 485, 500, 500, 500, 500, 500, 500, 500, 500, 500
  ];

  function makeLineChart(canvas: HTMLCanvasElement) {
    new Chart(canvas.getContext('2d')!, {
      type: 'line',
      options: {
        maintainAspectRatio: false,
        normalized: true,
        animation: false,
        events: [],
        hover: { mode: undefined },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      },
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Active Count',
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 4,
            fill: true,
            data: activeCountData
          },
          {
            label: 'Max Pool Size',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgba(255, 0, 0, 0.8)',
            borderWidth: 3,
            pointRadius: 0,
            data: maxPoolSizeData
          },
          {
            label: 'Core Pool Size',
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            borderColor: 'rgba(255, 165, 0, 1)',
            borderWidth: 3,
            pointRadius: 0,
            data: corePoolSizeData
          }
        ]
      }
    });
  }
</script>

<Slide>
  <p class="slide-header-div s-6xl font-bold">Scenario 1</p>
  <div class="flex flex-row items-center justify-center">
    <div class="line-chart-div">
      <canvas use:makeLineChart></canvas>
    </div>
    <div class="line-chart-description-div flex flex-col items-center justify-center">
      <Transition visible>
        <p class="s-5xl">
          Given the active count trends observed during <strong>peak traffic</strong>...
        </p>
      </Transition>
      <Transition><p class="s-5xl">Sign to increase Max Pool Size value</p></Transition>
    </div>
  </div>
</Slide>

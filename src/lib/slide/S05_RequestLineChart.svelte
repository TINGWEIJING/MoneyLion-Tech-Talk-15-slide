<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  import Chart from 'chart.js/auto';

  const yLength = 72;
  const labels = [
    '00:00',
    '00:20',
    '00:40',
    '01:00',
    '01:20',
    '01:40',
    '02:00',
    '02:20',
    '02:40',
    '03:00',
    '03:20',
    '03:40',
    '04:00',
    '04:20',
    '04:40',
    '05:00',
    '05:20',
    '05:40',
    '06:00',
    '06:20',
    '06:40',
    '07:00',
    '07:20',
    '07:40',
    '08:00',
    '08:20',
    '08:40',
    '09:00',
    '09:20',
    '09:40',
    '10:00',
    '10:20',
    '10:40',
    '11:00',
    '11:20',
    '11:40',
    '12:00',
    '12:20',
    '12:40',
    '13:00',
    '13:20',
    '13:40',
    '14:00',
    '14:20',
    '14:40',
    '15:00',
    '15:20',
    '15:40',
    '16:00',
    '16:20',
    '16:40',
    '17:00',
    '17:20',
    '17:40',
    '18:00',
    '18:20',
    '18:40',
    '19:00',
    '19:20',
    '19:40',
    '20:00',
    '20:20',
    '20:40',
    '21:00',
    '21:20',
    '21:40',
    '22:00',
    '22:20',
    '22:40',
    '23:00',
    '23:20',
    '23:40'
  ];
  const maxPoolSizeData = Array.from({ length: yLength }, (_, i) => 500);
  const corePoolSizeData = Array.from({ length: yLength }, (_, i) => 100);
  const requestCountData = [
    275,
    300,
    320, // 00:00 - 00:40 (Non-peak hours)
    300,
    340,
    320, // 01:00 - 01:40
    330,
    350,
    370, // 02:00 - 02:40
    370,
    330,
    340, // 03:00 - 03:40
    360,
    350,
    370, // 04:00 - 04:40
    410,
    360,
    350, // 05:00 - 05:40 (Start of morning peak)
    360,
    340,
    350, // 06:00 - 06:40
    400,
    350,
    360, // 07:00 - 07:40 (Morning peak)
    380,
    395,
    415, // 08:00 - 08:40
    400,
    500,
    550, // 09:00 - 09:40 (Peak continues)
    670,
    690,
    850, // 10:00 - 10:40
    900,
    905,
    970, // 11:00 - 11:40 (Midday peak)
    1000,
    980,
    985, // 12:00 - 12:40
    1060,
    1050,
    1000, // 13:00 - 13:40 (Start of decline)
    990,
    960,
    850, // 14:00 - 14:40
    820,
    790,
    780, // 15:00 - 15:40
    760,
    755,
    745, // 16:00 - 16:40
    735,
    720,
    700, // 17:00 - 17:40 (Evening decline)
    680,
    670,
    645, // 18:00 - 18:40
    625,
    615,
    580, // 19:00 - 19:40
    550,
    430,
    400, // 20:00 - 20:40
    350,
    320,
    315, // 21:00 - 21:40
    314,
    312,
    308, // 22:00 - 22:40
    300,
    280,
    275 // 23:00 - 23:40 (Night non-peak)
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
        },
        plugins: {
          annotation: {
            annotations: {
              peakStartHour: {
                type: 'line',
                xMin: '09:20',
                xMax: '09:20',
                borderColor: 'white',
                borderWidth: 3
              },
              peakEndHour: {
                type: 'line',
                xMin: '20:00',
                xMax: '20:00',
                borderColor: 'white',
                borderWidth: 3
              }
            }
          }
        }
      },
      data: {
        labels: labels,
        datasets: [
          {
            label: 'HTTP Request Count',
            backgroundColor: 'rgba(226, 226, 72, 0.1)',
            borderColor: 'rgba(226, 226, 72, 1)',
            borderWidth: 4,
            fill: true,
            data: requestCountData
          }
        ]
      }
    });
  }
</script>

<Slide>
  <p class="slide-header-div s-6xl font-bold">Request Volume</p>
  <div class="flex flex-row items-center justify-center">
    <div class="sized-line-chart-div">
      <canvas use:makeLineChart></canvas>
    </div>
  </div>
  <div class="s-5xl absolute top-[40%] left-[17%]">Non-peak traffic</div>
  <div class="s-5xl absolute right-[32%] bottom-[36%]">Peak traffic</div>
</Slide>

<style>
  .sized-line-chart-div {
    width: var(--size-1500);
    height: var(--size-800);
  }
</style>

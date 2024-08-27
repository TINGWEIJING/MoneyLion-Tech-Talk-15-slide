<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween } from '@animotion/motion';
  import { onMount } from 'svelte';
  import MoneyLionLogo from '$lib/images/MoneyLion_logo.png';
  import JavaIcon from '$lib/images/java.svg';
  import SpringBootIcon from '$lib/images/springboot.svg';
  import DatadogIcon from '$lib/images/datadog.svg';
  import GrafanaIcon from '$lib/images/grafana.svg';
  import PrometheusIcon from '$lib/images/prometheus.svg';
  import ElasticStackIcon from '$lib/images/elastic_stack.svg';
  import JconsoleScreenshot from '$lib/images/jconsole_screenshot.png';
  import FontSizeSlide from '$lib/experiment/FontSizeSlide.svelte';
  import MovementSlide from '$lib/experiment/MovementSlide.svelte';

  import S01ConcurrencyUseCase from '$lib/legacy/S01_ConcurrencyUseCase.svelte';
  import S01JavaThreads from '$lib/slide/S01_JavaThreads.svelte';
  import S01ThreadPool from '$lib/slide/S01_ThreadPool.svelte';
  import S01ScenarioWithApp from '$lib/slide/S01_ScenarioWithApp.svelte';
  import S01InvolvedEndpoints from '$lib/slide/S01_InvolvedEndpoints.svelte';
  import S01EndpointDefinitionCode from '$lib/legacy/S01_EndpointDefinitionCode.svelte';
  import S01EndpointCallingVisualized from '$lib/slide/S01_EndpointCallingVisualized.svelte';
  import S01EndpointDefinitionCodeUpdate from '$lib/slide/S01_EndpointDefinitionCodeUpdate.svelte';

  import S02ThreadPoolExhaustion from '$lib/slide/S02_ThreadPoolExhaustion.svelte';
  import S02PlatformThread from '$lib/legacy/S02_PlatformThread.svelte';
  import S02MoreEndpoints from '$lib/slide/S02_MoreEndpoints.svelte';
  import S02ThreadPoolExhaustionOccurrence from '$lib/legacy/S02_ThreadPoolExhaustionOccurrence.svelte';
  import S02ThreadPoolExhaustionEvent from '$lib/slide/S02_ThreadPoolExhaustionEvent.svelte';
  import S02ConsequenceUserPerspective from '$lib/slide/S02_ConsequenceUserPerspective.svelte';
  import S02ConsequenceDeveloperPerspective from '$lib/slide/S02_ConsequenceDeveloperPerspective.svelte';
  import S02PotentialCausesAndFixes from '$lib/slide/S02_PotentialCausesAndFixes.svelte';

  import S03ThreadPoolExecutor from '$lib/slide/S03_ThreadPoolExecutor.svelte';
  import S03DefiningThreadPoolExecutor from '$lib/slide/S03_DefiningThreadPoolExecutor.svelte';
  import S03UsingThreadPoolExecutor from '$lib/slide/S03_UsingThreadPoolExecutor.svelte';
  import S03ThreadPoolExecutorMechanism from '$lib/slide/S03_ThreadPoolExecutorMechanism.svelte';
  import S03BenefitsOfThreadPoolExecutor from '$lib/slide/S03_BenefitsOfThreadPoolExecutor.svelte';

  import S04ConfiguringThreadPoolExecutor from '$lib/slide/S04_ConfiguringThreadPoolExecutor.svelte';
  import S04LittlesLaw from '$lib/slide/S04_LittlesLaw.svelte';
  import S04CorePoolSize from '$lib/slide/S04_CorePoolSize.svelte';
  import S04MaxPoolSize from '$lib/slide/S04_MaxPoolSize.svelte';
  import S04QueueCapacity from '$lib/slide/S04_QueueCapacity.svelte';
  import S04ConfigurationResult from '$lib/slide/S04_ConfigurationResult.svelte';

  import S05MonitoringAndAdjustment from '$lib/slide/S05_MonitoringAndAdjustment.svelte';
  import S05JavaManagementExtensions from '$lib/slide/S05_JavaManagementExtensions.svelte';
  import S05ImportantValues from '$lib/slide/S05_ImportantValues.svelte';
  import S05RequestLineChart from '$lib/slide/S05_RequestLineChart.svelte';
  import S05Scenario01 from '$lib/slide/S05_Scenario01.svelte';
  import S05Scenario02 from '$lib/slide/S05_Scenario02.svelte';
  import S05Scenario03 from '$lib/slide/S05_Scenario03.svelte';
  import S05Scenario04 from '$lib/slide/S05_Scenario04.svelte';
  import S05Guidelines from '$lib/slide/S05_Guidelines.svelte';

  import S06VirtualThreads from '$lib/slide/S06_VirtualThreads.svelte';
  import S06VirtualThreadsRelationship from '$lib/slide/S06_VirtualThreadsRelationship.svelte';
  import S06PlatformThreadsVsVirtualThreads from '$lib/slide/S06_PlatformThreadsVsVirtualThreads.svelte';
  import S06UsingVirtualThreads from '$lib/slide/S06_UsingVirtualThreads.svelte';
  import S06UsingVirtualThreads02 from '$lib/slide/S06_UsingVirtualThreads02.svelte';
  import S06NotesOnVirtualThreads from '$lib/slide/S06_NotesOnVirtualThreads.svelte';

  import S07KeyTakeaways from '$lib/slide/S07_KeyTakeaways.svelte';

  import { Chart } from 'chart.js';
  import annotationPlugin from 'chartjs-plugin-annotation';

  Chart.register(annotationPlugin);

  let componentElement: HTMLElement;
  let isVisible = $state(false);
  let logoClassName = $derived.by(() => {
    return isVisible ? 'top-left-logo' : 'bottom-left-logo';
  });

  function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      isVisible = entry.isIntersecting;
    });
  }

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.1 // Trigger when at least 10% of the component is visible
    });

    if (componentElement) {
      observer.observe(componentElement);
    }

    return () => {
      // Cleanup the observer when the component is destroyed
      if (componentElement) {
        observer.unobserve(componentElement);
      }
    };
  });
</script>

<Presentation
  options={{
    history: true,
    transition: 'slide',
    controls: true,
    progress: true,
    slideNumber: true
  }}
>
  <!-- <FontSizeSlide /> -->
  <!-- <MovementSlide /> -->

  <Slide>
    <div bind:this={componentElement} class="main-title-div">
      <p>Optimizing Performance:</p>
      <p>Tackling Thread Pool Exhaustion to Reduce Backend Latency</p>
    </div>
    <div class="author-div">
      <p>Ting Wei Jing</p>
      <p class="s-2xl">Backend Engineer I, MoneyLion</p>
      <p>September 04. 2024</p>
    </div>
  </Slide>

  <Slide>
    <p class="content-title s-8xl font-bold">Content</p>
    <div class="toc-div">
      <p class="s-7xl">01 Concurrency in Java</p>
      <p class="s-7xl">02 Thread Pool Exhaustion</p>
      <p class="s-7xl">03 Thread Pool Executor</p>
      <p class="s-7xl">04 Configuring Thread Pool Executor</p>
      <p class="s-7xl">05 Monitoring and Adjustment</p>
      <p class="s-7xl">06 Virtual Threads</p>
    </div>
  </Slide>

  <Slide>
    <div class="heading-01">
      <p>01</p>
      <p class="s-9xl font-bold">Concurrency in Java</p>
    </div>
  </Slide>
  <S01JavaThreads />
  <S01ThreadPool />
  <S01ScenarioWithApp />
  <S01InvolvedEndpoints />
  <S01EndpointCallingVisualized />
  <S01EndpointDefinitionCodeUpdate />

  <S02ThreadPoolExhaustion />
  <S02MoreEndpoints />
  <S02ThreadPoolExhaustionEvent />
  <S02ConsequenceUserPerspective />
  <S02ConsequenceDeveloperPerspective />
  <S02PotentialCausesAndFixes />

  <S03ThreadPoolExecutor />
  <S03ThreadPoolExecutorMechanism />
  <S03DefiningThreadPoolExecutor />
  <S03UsingThreadPoolExecutor />
  <S03BenefitsOfThreadPoolExecutor />

  <S04ConfiguringThreadPoolExecutor />
  <S04LittlesLaw />
  <S04CorePoolSize />
  <S04MaxPoolSize />
  <S04QueueCapacity />
  <S04ConfigurationResult />

  <S05MonitoringAndAdjustment />
  <S05JavaManagementExtensions />
  <S05ImportantValues />
  <S05RequestLineChart />
  <S05Scenario01 />
  <S05Scenario02 />
  <S05Scenario03 />
  <S05Scenario04 />
  <S05Guidelines />

  <S06VirtualThreads />
  <S06VirtualThreadsRelationship />
  <S06PlatformThreadsVsVirtualThreads />
  <S06UsingVirtualThreads />
  <S06UsingVirtualThreads02 />
  <S06NotesOnVirtualThreads />

  <S07KeyTakeaways />

  <Slide>
    <div class="last-slide">
      <p class="thank-you">Thank you</p>
      <a class="profile-link" href="https://www.tingcode.com" target="_blank">tingcode.com</a>
    </div>
  </Slide>

  <img class={logoClassName} src={MoneyLionLogo} alt="MoneyLion logo" />
</Presentation>

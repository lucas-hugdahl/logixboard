<script>
  import { onMount } from "svelte";
  import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
  import Chart from "chart.js";
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let range;
  export let color;
  export let label;
  let animatedValue = {var: 0};
  let canvas;
  let chart = null;

  const progress = tweened(0, {
		duration: 1500,
		easing: cubicOut
  });

  const handleClick = () => {
    dispatch('clicked')
  }
  
  progress.set(range[0]);

  $: {
    if (chart) {
      chart.update();
    }
    progress.set(range[0]);
  }

  onMount(async  () => {
    chart = new Chart(canvas, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "# of Votes",
            data: [range[0], range[1]],
            backgroundColor: [
              color,
              '#141414'
            ],
            borderColor: [
              color,
              '#141414'
            ],
            borderWidth: 0
          }
        ]
      },
      options: {
        rotation: .5 * Math.PI,
        hover: {mode: null},
        tooltips: {enabled: false},
        aspectRatio: 1,
        responsive: true,
        duration: 2000,
        easing: 'easeInOutElastic'
      }
    });
  });
</script>

<style>
  .stat-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  .stat-wrapper:hover {
    cursor: pointer;
  }

  .stat-value {
    font-size: 4rem;
  }

  canvas {
    width: 150px!important;
    height: 150px !important;
    display: inline-block;
    justify-self: center;
  }
</style>

<div class="stat-wrapper button m-4 w-100" on:click="{handleClick}">
  <canvas bind:this={canvas} />
  <div class="details pl-5">
    <h1 class="stat-value t-light m-0">{$progress.toFixed()}</h1>
    <p>{label}<p/>
  </div>
</div>

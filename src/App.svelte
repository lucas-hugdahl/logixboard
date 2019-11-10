<script>
	import { onMount } from 'svelte';
	import shipmentData from "./data/shipments";
	import Icons from './components/Icons.svelte';
	import StatDoughnut from "./components/StatDoughnut.svelte";
	import ShipmentTable from "./components/ShipmentTable.svelte";
	import TopNav from "./components/TopNav.svelte";
	import SideNav from "./components/SideNav.svelte";
	import Map from "./components/Map.svelte";

	let stats = {
		onTrack: 0,
		offTrack: 0,
		needAttention: 0
	}

	shipmentData.data.map((order) => {
		if (order.status == 'Arrived' || order.status == 'In Transit') {
			stats.onTrack += 1;
		} else if (order.status == 'Roll-Over' || order.status == 'Cancelled') {
			stats.offTrack += 1;
		} else if (order.status == 'TransportError' ) {
			stats.needAttention += 1;
		}
	});
</script>

<style type="text/scss">
	.container-main {
		display: grid;
		grid-template: 80px 1fr / 100px 1fr;
		grid-template-areas: "logo		 top-nav"
												 "side-nav   content";
		height: 100vh;
		grid-gap:var(--grid-gap);
		box-sizing: border-box;
	}
	.logo {
		align-self: center;
		justify-self: center;
	}
	.top-nav {
		grid-area: top-nav;
	}
	.content {
		display: grid;
		grid-gap:var(--grid-gap);
		grid-auto-rows: min-content;
		grid-template-columns: repeat(3, 1fr); 
	}
	.widget {
		overflow: hidden;
		position: relative;
	}
	.widget-sm {
		grid-column: span 1;
	}
	.widget-md {
		grid-column: span 2;
	}
	.widget-lg {
		grid-column: span 3;
	}
</style>

<!-- Render icons so they get cached -->
<Icons />
<main class="container-main px-5 pt-5">
	<div class="logo">
		<img src="/images/logixboard-logo-small.png" alt="logixbaord logo" width="50%"/>
	</div>
	<div class="top-nav">
		<TopNav />
	</div>
	<div>
		<SideNav />
	</div>
	<div class="content">
		<div class="widget widget-lg card">
			<Map shipments={shipmentData}/>
		</div>
		<div class="widget widget-sm card">
			<StatDoughnut color="#23bd23" value={stats.onTrack} total={shipmentData.data.length} label="Orders on Track"/>
		</div>
		<div class="widget widget-sm card">
			<StatDoughnut color="#f1a708" value={stats.offTrack} total={shipmentData.data.length} label="Orders off Track"/>
		</div>
		<div class="widget widget-sm card">
			<StatDoughnut color="#e95b5b" value={stats.needAttention} total={shipmentData.data.length} label="Orders Need Attention"/>
		</div>
		<div class="widget widget-lg card">
			<ShipmentTable shipments={shipmentData} hideColumns={['Shipment ID']}/>
		</div>
	</div>
</main>



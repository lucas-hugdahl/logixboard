<script>
	import { onMount } from 'svelte';
	import shipmentData from "./data/shipments";
	import originsLatLng from "./data/geocodedOrigins";
  import destinationsLatLng from "./data/geocodedDestinations";
	import Icons from './components/Icons.svelte';
	import StatDoughnut from "./components/StatDoughnut.svelte";
	import ShipmentTable from "./components/ShipmentTable.svelte";
	import SideNav from "./components/SideNav.svelte";
	import Modal from "./components/Modal.svelte";
	import Map from "./components/Map.svelte";
	import ManageOrderForm from "./components/ManageOrderForm.svelte";
	import { shipments, ordersOnTrack, ordersOffTrack, ordersNeedAttention } from "./store";
	import { get } from "svelte/store";


	let modals = {
		orderStatus: false,
		manageShipment: false,
		createShipment: false,
		state: {
			selectedOrders: [],
			selectedOrder: {}
		}
	}

	const handleStatusModal = (values) => {
		modals.state.selectedOrders = values;
		modals.orderStatus = true
	}

	const handleMangeOrder = (order) => {
		
	}

	shipments.subscribe(val => {
		console.log('STORE: shipments', val)

		ordersOnTrack.update(() => {
			let newValue = val.data.filter(order => order.status == 'Arrived' || order.status == 'In Transit');
			console.log('STORE: ordersOnTrack', newValue)
			return {columnDictionary: {...val.columnDictionary}, data: newValue}
		});
		ordersOffTrack.update(() => {
			let newValue = val.data.filter(order => order.status == 'Roll-Over' || order.status == 'Cancelled');
			console.log('STORE: ordersOffTrack', newValue)
			return {columnDictionary: {...val.columnDictionary}, data: newValue}
		});
		ordersNeedAttention.update(() => {
			let newValue = val.data.filter(order => order.status == 'TransportError');
			console.log('STORE: ordersNeedAttention', newValue)
			return {columnDictionary: {...val.columnDictionary}, data: newValue}
		});
	});


	//Add lat and lng to orders
	//Previously this made a batch geocode request to mapquest API
	//but that request was taking too long so I saved the data to local files for the purpose of this demo. 
	let modifiedShipmentData = [];
	shipmentData.data.map((item, index) => {
			modifiedShipmentData.push({
					...item,
				originLatLng: originsLatLng.results[index].locations[0].latLng,
				destinationLatLng: destinationsLatLng.results[index].locations[0].latLng
			})
	});

	shipments.set({
		columnDictionary: shipmentData.columnDictionary,
		data: modifiedShipmentData
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

	</div>
	<div>
		<SideNav on:create={()=>{modals.createShipment = true}}/>
	</div>
	<div class="content">
		<div class="widget widget-lg card">
			<Map shipments={$shipments}/>
		</div>
		<div class="widget widget-sm card">
			<StatDoughnut color="#23bd23" range={[$ordersOnTrack.data.length, $shipments.data.length]} label="Orders on Track"}} on:clicked={()=>{modals.state.selectedOrders = get(ordersOnTrack); modals.orderStatus = true}}/>
		</div>
		<div class="widget widget-sm card">
			<StatDoughnut color="#f1a708" range={[$ordersOffTrack.data.length, $shipments.data.length]} label="Orders off Track" on:clicked={()=>{modals.state.selectedOrders = get(ordersOffTrack); modals.orderStatus = true}}/>
		</div>
		<div class="widget widget-sm card">
			<StatDoughnut color="#e95b5b" range={[$ordersNeedAttention.data.length, $shipments.data.length]} label="Orders Need Attention" on:clicked={()=>{modals.state.selectedOrders = get(ordersNeedAttention); modals.orderStatus = true}}/>
		</div>
		<div class="widget widget-lg card">
			<ShipmentTable shipments={$shipments} hideColumns={['Shipment ID']} on:edit={handleMangeOrder}/>
		</div>
	</div>
</main>

<!-- Create order -->
{#if modals.createShipment}
	<Modal on:close={() => {modals.createShipment = false}} title="Create Shipment">
			<ManageOrderForm isNew={true} on:orderAdded={()=>{modals.createShipment = false}}/>
	</Modal>
{/if}


<!-- Order status modal -->
{#if modals.orderStatus}
	<Modal on:close={() => {modals.orderStatus = false}} >
			<ShipmentTable shipments={modals.state.selectedOrders} hideColumns={['Shipment ID']}/>
	</Modal>
{/if}



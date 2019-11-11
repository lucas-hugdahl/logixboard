<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  import { GEOCODE_ADDRESS } from "../apiService";
	import { shipments, ordersOnTrack, ordersOffTrack, ordersNeedAttention } from "../store";
  import { get } from "svelte/store";
  

  let addErr = false;
  let clientError = "";
  
  let orderModel = {
    shipment_id: Math.random().toString(36).substr(2, 9),
    client_name: "",
    origin: "",
    destination: "",
    mode: "",
    estimated_departure: "",
    estimated_arrival: "",
    status: "In Transit",
    originLatLng: {},
    destinationLatLng: {}
  }
  const validate = (order => {
    clientError = "";
    return orderModel.client_name &&  orderModel.origin && orderModel.destination && orderModel.mode && orderModel.estimated_departure && orderModel.estimated_arrival
  })

  const formatDate = (date) => {
    let dateArr = date.split("-");
    return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`
  }

  const addOrder = e => {
    e.preventDefault();
    let shipmentsModified = {...get(shipments)};


    if (validate(orderModel)) {

      orderModel.originLatLng = {lat: 33.757338, lng: -118.220772}; //dumby data for now
      orderModel.destinationLatLng = {lat: 55.62951, lng: 12.63937}; //dumby data for now
      orderModel.estimated_departure = formatDate( orderModel.estimated_departure);
      orderModel.estimated_arrival = formatDate( orderModel.estimated_arrival);
      shipmentsModified.data = [orderModel, ...shipmentsModified.data];
      shipments.update(val => {
        return shipmentsModified
      })
      dispatch("orderAdded")

      //skipping this step for now until I have better error reporting and loading states in place
      // GEOCODE_ADDRESS(orderModel.orgin)
      // .then(res => {
      //   orderModel.originLatLng = res;
      //   return GEOCODE_ADDRESS(orderModel.destination)
      // }).then(res => {
      //   orderModel.destinationLatLng = res;
      //   orderModel.estimated_departure = formatDate( orderModel.estimated_departure);
      //   orderModel.estimated_arrival = formatDate( orderModel.estimated_arrival);
      //   shipmentsModified.data = [orderModel, ...shipmentsModified.data];
        
        
      //   shipments.update(val => {
      //     return shipmentsModified
      //   })
      //   dispatch("orderAdded")
      // })
      // .catch((err) => {
      //     addErr = err;
      //     console.log(err)
      // })
    } else {
      clientError = "Please fill out all fields"
    }
  }


</script>

<style>
  .form-row {
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   width: 100%;

  }

  .form-group {
    width: 45%;
    box-sizing: border-box;
    padding: calc(var(--spacer) * 1.5) 0;
    position: relative;
  }
</style>

<p class="t-error mx-4">{clientError}</p>
<form class="form p-4" on:submit={addOrder}>
  <div class="form-row">
    <div class="form-group">
      <input class="text-input w-100" type="text" placeholder="Client Name" bind:value={orderModel.client_name}/>
    </div>
    <div class="form-group">
      <input class="text-input w-100" type="text" placeholder="Origin" bind:value={orderModel.origin}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <input class="text-input w-100" type="text" placeholder="Destination" bind:value={orderModel.destination}/>
    </div>
    <div class="form-group">
      <label class="top-label" for="mode">Mode</label>
      <select class="select-input w-100" id="mode" placeholder="Mode" bind:value={orderModel.mode}>
        <option value="" disabled selected>Mode</option>
        <option value="Rail">Rail</option>
        <option value="Air">Air</option>
        <option value="Sea">Sea</option>
      </select>
    </div>
  </div>
  <div class="form-row">
      <div class="form-group">
        <label class="top-label" for="estimatedDeparture">Estimated Departure</label>
         <input class="date-input w-100" type="date" bind:value={orderModel.estimated_departure}/>
      </div>
      <div class="form-group">
        <label class="top-label" for="estimatedArrival">Estimated Arrival</label>
        <input class="date-input w-100" type="date" id="estimatedArrival" bind:value={orderModel.estimated_arrival}/>
      </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <button class="button button--box button--green" type="submit">Create Shipment</button>
    </div>
  </div>
</form>
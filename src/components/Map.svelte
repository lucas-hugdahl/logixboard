<script>
  import { onMount } from "svelte";
  import mapboxgl from "mapbox-gl";
  import originsLatLng from "../data/geocodedOrigins";
  import destinationsLatLng from "../data/geocodedDestinations";
  export let shipments;
  let modifiedShipments = [];

  let mapIsLoaded = false;
  let mapContainer;
  const mapQuestToken = "tdol3vJL4lBh2pXefGnrTaAAT89WK13U";
  const mapBoxToken =
    "pk.eyJ1IjoibHVjYXNodWdkYWhsIiwiYSI6ImNrMnNmem05MjEwZ3IzY252czd6cDh0eTQifQ.1wQDoh9Hn1BeOQI-pN0IHw";
  let mapQuestBaseURL = `http://www.mapquestapi.com/geocoding/v1/batch?key=${mapQuestToken}`;

  // This takes too long. Saved the data to local files for the purpose of this demo.
  const geocodeAllAddresses = () => {
    return new Promise((resolve, reject) => {
      let batchGeocodeOriginsURL = mapQuestBaseURL;
      let batchGeocodeDestinationsURL = mapQuestBaseURL;
      shipments.data.map((item, index) => {
        batchGeocodeOriginsURL += `&location=${item.origin
          .split(" ")
          .join("+")}`;
        batchGeocodeDestinationsURL += `&location=${item.destination
          .split(" ")
          .join("+")}`;
        fetch(batchGeocodeOriginsURL)
          .then(res => res.json())
          .then(res => {
            //originsLatLng = res;
            return fetch(batchGeocodeDestinationsURL);
          })
          .then(res => res.json())
          .then(res => {
            //destinationsLatLng = res;
            resolve();
          });
      });
    });
  };

  const addLatLngToData = () => {
    shipments.data.map((item, index) => {
      modifiedShipments.push({
        ...item,
        originLatLng: originsLatLng.results[index].locations[0].latLng,
        destinationLatLng: destinationsLatLng.results[index].locations[0].latLng
      });
    });
  };

  const buildMapRoutesLayer = () => {
    let mapFeatures = [];
    addLatLngToData();
    modifiedShipments.map((item, index) => {
      mapFeatures.push({
        type: "Feature",
        properties: {
          color: "#F7455D" // red
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [item.originLatLng.lat, item.originLatLng.lng],
            [item.destinationLatLng.lat, item.destinationLatLng.lng]
          ]
        }
      });
    });
    return mapFeatures;
  };

  console.log(buildMapRoutesLayer());

  const initMap = () => {
    mapboxgl.accessToken = mapBoxToken;

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/dark-v9",
      zoom: 2,
      center: [9.5375, 33.8869]
    });


    map.on('load', function () {
      mapIsLoaded = true;
      modifiedShipments.map((item, index) => {
        map.addLayer({
          id: `id-${index}`,
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: [
                  [item.originLatLng.lng, item.originLatLng.lat],
                  [item.destinationLatLng.lng, item.destinationLatLng.lat]
                ]
              }
            }
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": item.status == "Arrived" ?"#23bd23" :item.status == "In Transit" ?"#20a7ee" : item.status == "Roll-Over" || item.status == "Cancelled" || item.status == "Customs Hold" ? "#f1a708" : item.status == "TransportError" ? "#e95b5b" : "#888", 
            "line-width": 5
          }
        });
      });
    })


  };

  onMount(async () => {
    initMap();
  });
</script>

<style>
  .map {
    height: 550px;
  }
</style>

<div class="map" bind:this={mapContainer}>
  {#if !mapIsLoaded}
    <img class="w-100 h-100" src="images/map-placeholder.png" />
  {/if}
</div>

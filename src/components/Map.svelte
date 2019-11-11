<script>
  import { onMount } from "svelte";
  import mapboxgl from "mapbox-gl";
  import { getStatusColor } from "../utilities";
  export let shipments;
  let mapIsLoaded = false;
  let mapContainer;
  let mapInstance = null;

  const mapBoxToken =
    "pk.eyJ1IjoibHVjYXNodWdkYWhsIiwiYSI6ImNrMnNmem05MjEwZ3IzY252czd6cDh0eTQifQ.1wQDoh9Hn1BeOQI-pN0IHw";

  $: {
    if (mapIsLoaded) {
      updateMapLayers(shipmentsList);
    }
  }

  const updateMapLayers = shipmentsList => {
    console.log("MAP: update layers");

    shipments.data.map((item, index) => {
      let existingLayer = mapInstance.getLayer(item.shipment_id);
      if (typeof existingLayer !== "undefined") {
        // Remove map layer & source.
        mapInstance
          .removeLayer(item.shipment_id)
          .removeSource(item.shipment_id);
        mapInstance.off("click", item.shipment_id, handleMapClick);
      }

      let newLayer = {
        id: item.shipment_id,
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: { client_name: item.client_name, status: item.status },
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
          "line-color": getStatusColor(item.status),
          "line-width": 4
        }
      };
      mapInstance.addLayer(newLayer);
      mapInstance.on("click", item.shipment_id, handleMapClick);

      // Change the cursor to a pointer when the mouse is over the states layer.
      mapInstance.on("mouseenter", item.shipment_id, function() {
        mapInstance.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      mapInstance.on("mouseleave", item.shipment_id, function() {
        mapInstance.getCanvas().style.cursor = "";
      });
    });
  };

  const handleMapClick = e => {
    let html = `
      <div class="map-popup">
        <p>${e.features[0].properties.client_name}</p>
        <p style="color:${getStatusColor(e.features[0].properties.status)}">${e.features[0].properties.status}</p>
      </div>
    `;
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(html)
      .addTo(mapInstance);
  };

  const initMap = () => {
    mapboxgl.accessToken = mapBoxToken;
    mapInstance = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/dark-v9",
      zoom: 2,
      center: [9.5375, 33.8869]
    });

    mapInstance.on("load", function() {
      mapIsLoaded = true;
      updateMapLayers(shipments.data);
    });
  };

  onMount(async () => {
    initMap();
  });
</script>

<style>
  .map {
    height: 550px;
  }

  :global(.mapboxgl-popup p, .mapboxgl-popup a) {
    font-size: var(--font-size-micro) !important;
  }

  :global(.mapboxgl-popup) {
    background: var(--color-card);
    color: var(--color-font-level-2);
    position: relative;
    display: inline-block;
    min-height: 30px;
    text-align: center;
    padding: calc(var(--spacer) * 1.5) var(--spacer);
  }


  :global(.mapboxgl-popup-close-button) {
    position: absolute;
    top: 2px;
    right: 2px;
    appearance: none;
    color: white;
    border-width: 0;
    background: none;
    font-size: 16px;
  }
  :global(.mapboxgl-popup-close-button:hover) {
    cursor: pointer;
  }
</style>

<div class="map" bind:this={mapContainer}>
  {#if !mapIsLoaded}
    <img class="w-100 h-100" src="images/map-placeholder.png" />
  {/if}
</div>

<!-- <div
  class="mapboxgl-popup mapboxgl-popup-anchor-bottom"
  style="max-width: 240px; transform: translate(-50%, -100%) translate(291px,
  442px);">
  <div class="mapboxgl-popup-tip" />
  <div class="mapboxgl-popup-content">
    <button
      class="mapboxgl-popup-close-button"
      type="button"
      aria-label="Close popup">
      ×
    </button>
    Microsoft
  </div>
</div> -->

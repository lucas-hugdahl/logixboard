<script>
  import icons from "../data/icons";
</script>

<style>
  .icon-wrapper {
    display: none;
  }
</style>

<!-- Add SVGs to the dom so that they are all cached on page load -->
<div class="icon-wrapper">
  {#each Object.entries(icons) as iconObj, key}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="{iconObj[1].viewbox}">
      <g id={iconObj[0]}>
        {@html iconObj[1].html}
      </g>
    </svg>
  {/each}
</div>




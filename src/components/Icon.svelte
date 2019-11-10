<script>
  import icons from "../data/icons";
  export let icon;
  let iconExists = icon.toLowerCase() in icons;
</script>

{#if iconExists}
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="{icons[icon.toLowerCase()].viewbox}">
    <use href="#{icon.toLowerCase()}" fill="var(--color-font-level-2)"/>
  </svg>
{:else}
  {icon}
{/if}


<script>
  import Icon from "./Icon.svelte"
</script>

<style>
  nav {
    background: var(--color-card);
    border-radius: var(--border-radius)
  }
</style>

<nav class="nav">
  <ul class="inline-list m-0 p-0 w-100 py-4">
    <li>
      <button class="button button--nav w-100">
        <Icon icon="home"/>
        <p class="t-micro m-0">Home</p>
      </button>
    </li>
    <li class="mt-3">
      <button class="button button--nav w-100" on:click={()=>{alert('Just for looks. Click "Create Shipment"')}}>
        <Icon icon="users"/>
        <p class="t-micro m-0">Customers</p>
      </button>
    </li>
    <li class="mt-3">
      <button class="button button--nav w-100" on:click={()=>{alert('Just for looks. Click "Create Shipment"')}}>
        <Icon icon="graph"/>
        <p class="t-micro m-0">Analytics</p>
      </button>
    </li>
    <li class="mt-3">
      <button class="button button--nav w-100">
        <Icon icon="add"/>
        <p class="t-micro m-0">Create Shipment</p>
      </button>
    </li>
  </ul>
</nav>
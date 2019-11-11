<script>
  import Icon from "./Icon.svelte";
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  export let title = "";
  const dispatch = createEventDispatcher();

  onMount(async () => {
    document.querySelector("body")['overflow-y'] = "hidden";
  })

  onDestroy(() => {
    document.querySelector("body")['overflow-y'] = "auto";
  })

  const handleClose = () => {
    dispatch("close");
  }
</script>

<style>
  .modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: var(--color-modal-background);
    z-index: var(--z-4);
  }

  .body {
    overflow-y: auto;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    max-height: 80vh;
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-areas: "label close"
                        "content  content";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 70px 1fr;

  }

  .label {
    grid-area: label;
    align-self: center;
  }
  .close {
    grid-area: close;
    justify-self: end;
    align-self: center;
  }
  .content {
    grid-area: content;
  }
</style>

<div class="modal">
  <div class="body card pt-1">
    <h2 class="label mx-4">{title}</h2>
    <button class="button close button--icon mx-4" on:click={handleClose}>
      <Icon icon="close"/>
    </button>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</div>
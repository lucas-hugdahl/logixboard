<script>
	import Icon from "../components/Icon.svelte";
	import { convertToSafeName, getStatusColor } from "../utilities"
	import { onMount } from "svelte"
	export let shipments;
	export let hideColumns = [];
	export let label = "Shipments";


	//state
	let filter = {
		open: false,
		columns: {},
		search: ""
	}
	//methods
	const filterTableData = () => {
		let filteredData = [];
		shipments.data.map((shipment) => {
			//Only search active columns
			Object.entries(shipment).map((item) => {
				// Dont return a cell if the column isn't in the filter therefore it's just a data property, not a seachable column
				if (typeof filter.columns[item[0]] !== "undefined") {
					if (filter.columns[item[0]].active && item[1].includes(filter.search)) {
						filteredData.push(shipment)
					}
				}
			});
		});	
		return filteredData;
	};

	//make copy of the columns used for filetering
	Object.entries(shipments.columnDictionary).map((item) => {
		filter.columns[item[0]] = {
			name: item[1],
			active: hideColumns.indexOf(item[1]) < 0 ? true : false
		}
	})

</script>

<style>
	.wrapper {
		position: relative;
		max-height: 60vh;
		min-height: 300px;
		box-sizing: border-box;
		display: grid;
		grid-gap: calc(var(--spacer) * 1);
		grid-template-rows: 70px 1fr;
		grid-template-columns: 1fr;
	}

	.nav {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(2,1fr) ;
		grid-template-rows: 1fr;
	}

	.filter {
		position: relative;
		text-align:right;
	}

	.filter .form-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.filter-menu {
		position: absolute;
		right: 0;
		top: 100%;
		width: 200px;
		z-index: var(--z-2);
		text-align:left;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		transform-origin: 100% 0;
		transform: scale(0);
		opacity: 0;
		transition: all .25s cubic-bezier(.685,0,.28,1);
		background-color: var(--color-card);
	}

	.filter-menu .form-group:not(:last-child) {
		padding-bottom: calc(var(--spacer) * 1);
	}

	.filter-menu.active {
		transform: scale(1);
		opacity: 1;
	}

	.table-wrapper {
		overflow-y: auto;
		transition: opacity .3s ease-in-out;
	}

	.table-icon {
		width: 24px;
		height: 24px;
	}

	.table-wrapper.active {
		opacity: .7;
	}
</style>

<div class="wrapper m-4" role="button">
	<div class="nav">
		<h2 class="m-0">{label}</h2>
		<div class="filter">
			<button class="button button--icon filter-button" on:click={() => {filter.open = !filter.open}}>
				<Icon icon={filter.open ? 'close' : 'settings'}/>
			</button>
			<div class={`filter-menu p-1 ${filter.open ? 'active' : ''}`}>
				<form on:submit={(e)=>{e.preventDefault(); filter.open = false}}>
					<div class="form-group">
						<input class="text-input w-100" placeholder="Search" bind:value={filter.search}/>
					</div>
					{#each Object.entries(filter.columns) as col, key}
						<div class="form-group">
							<label for={`#${convertToSafeName(col[0])}`}>{col[1].name}</label>
							<input type="checkbox" id={`#${convertToSafeName(col[0])}`} bind:checked={col[1].active}/>
						</div>
					{/each}
				</form>
			</div>
		</div>
	</div>
	<div class={`table-wrapper ${filter.open ? 'active' : ''}`}>
		<table class="table">
			<thead>
				<tr>
					{#each Object.entries(filter.columns) as col, key}
						{#if col[1].active}
							<th>{col[1].name}</th>
						{/if}
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each (filter.search ? filterTableData() : shipments.data) as row, key}
					<tr>
						{#each Object.entries(row) as value, index}
							<!-- Custom formatting for certain cells -->
							<!-- Dont render a cell if it's columns isn't in the filter therefore it's just a data property -->
							{#if typeof filter.columns[value[0]] !== "undefined"}
								{#if filter.columns[value[0]].active}
									{#if value[0] == "mode"}
										<td class="table-icon" data-col={value[0]}>
											<Icon icon={value[1]} />
										</td>
									{:else if value[0] == "status"}
										<td style={`color: ${getStatusColor(value[1])}`} data-col={value[0]}>
											<strong>{value[1]}</strong>
										</td>
									{:else}
										<td data-col={value[0]}>
											{value[1]}
										</td>
									{/if}
								{/if}
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
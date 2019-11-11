import { writable, readable } from 'svelte/store';

export const isLoaded = writable(false);
export const shipments = writable({data:[], columnDictionary:[]});
export const ordersOnTrack = writable([]);
export const ordersOffTrack = writable([]);
export const ordersNeedAttention = writable([]);
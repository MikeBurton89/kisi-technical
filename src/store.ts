import { writable } from 'svelte/store';

export const hidden = writable<boolean>(true)
export const hovered = writable<boolean>(false)
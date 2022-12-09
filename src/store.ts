import { writable } from 'svelte/store';

export const imagesArray = writable<object[] | void>([])
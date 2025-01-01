// Reexport your entry components here
declare global {
    type MaybePromise<T> = Promise<T> | T;
}

export { default as Link } from './Link.svelte';
export { default as Form } from './Form';

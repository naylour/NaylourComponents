// Reexport your entry components here
declare global {
    type MaybePromise<T> = Promise<T> | T;
}

export { default as Link, LinkState } from './Link.svelte';
export { default as Form, FormState, Input } from './Form';

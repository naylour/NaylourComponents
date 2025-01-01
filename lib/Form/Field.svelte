<script module lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { getContext } from './Form.svelte';

	type Props = HTMLInputAttributes & {
		title?: string;
	};
</script>

<script lang="ts">
	const { title, type = 'text', id, ...attrs }: Props = $props();
	const uuid = crypto.randomUUID();

	let _id = $derived(id ? `${uuid}-${id}` : uuid);

	const context = getContext();


	let field = $state<{
        root?: HTMLDivElement;
		label?: HTMLLabelElement;
		input?: HTMLInputElement;
	}>({});

    context.fields.set(uuid, field);
</script>

<div class="field" bind:this={field.root}>
	{#if title}
		<label bind:this={field.label} class="field_label" for={_id}>{title}</label>
	{/if}
	<input bind:this={field.input} {...attrs} class={['field_input', attrs.class]} {type} id={_id} />
</div>

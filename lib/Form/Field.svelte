<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

    type Props = HTMLInputAttributes & {
        type?: HTMLInputAttributes['type']
    };

    const { type = 'text', ...attrs }: Props = $props();
</script>


<input {type} {...attrs}>

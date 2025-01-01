<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';

    type Props = HTMLFormAttributes & {
        children: Snippet<[]>;
    };

    const { children, ...attrs }: Props = $props();
</script>


<form {...attrs}>
    {@render children()}
</form>

<script module lang="ts">
</script>

<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface LinkEvent {
		rect: DOMRect;
		currentTarget: HTMLAnchorElement;
	}

	type Props = HTMLAnchorAttributes & {
		children: Snippet<[]>;
		onactive?: (__event__: LinkEvent) => MaybePromise<void>;
		isActive?: boolean;
		link?: HTMLAnchorElement;
        indicator?: 'class' | 'attr';
	};

	let {
		children,
		onactive,
		isActive = $bindable(false),
		link = $bindable(undefined),
		href,
        indicator = 'class',
		...initATTRs
	}: Props = $props();

    let attrs = $state({ ...initATTRs });

	$effect.root(() => {
        $effect(() => {
            if (href) {
                if (href === '/') {
                    if (page.url.pathname === href) isActive = true;
					else isActive = false;
				} else if (page.url.pathname.startsWith(href)) isActive = true;
				else isActive = false;

                if(indicator === 'attr') attrs.active = isActive;
			}
		});

		$effect(() => {
			if (isActive && link) {
				onactive?.({
					rect: link.getBoundingClientRect(),
					currentTarget: link
				});
			}
		});
	});
</script>

<!--
@component
Description Link component

Example

```svelte
<Link href="/admin" bind:link onactive={({ rect, currentTarget }) => {
    console.log({ rect, currentTarget })
}}>Admin Page</Link>

```
-->
<a {...attrs} {href} bind:this={link} class={['link', attrs.class, isActive && indicator == 'class' && 'active']}>
	{@render children?.()}
</a>

<style>
	.link {
		color: red;
	}

	.link.active, .link[active=true] {
		color: blue;
	}
</style>

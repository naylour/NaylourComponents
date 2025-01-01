<script module lang="ts">
	import { setContext as _setContext, getContext as _getContext, type Snippet } from 'svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import { SvelteMap } from 'svelte/reactivity';

	type Props = {
		children: Snippet<[]>;
		form?: HTMLFormElement;
        name?: string;
	} & HTMLFormAttributes;

	class Context {
        id = $state<string>();
        name = $state<string>();
        form = $state<HTMLFormElement>();
        fields = new SvelteMap<string, {
            root?: HTMLDivElement;
            label?: HTMLLabelElement;
            input?: HTMLInputElement;
        }>();
    }

	export const
        NAYLOUR_CONTEXT_KEY = Symbol(`NAYLOUR_CONTEXT_KEY`),
		setContext = () => _setContext(NAYLOUR_CONTEXT_KEY, new Context()),
		getContext = (): ReturnType<typeof setContext> => _getContext(NAYLOUR_CONTEXT_KEY);

	export const FormState = new (class {
		count = $state(0);
		map = new SvelteMap<string, HTMLFormElement>();
        contexts = $state<Context[]>([]);
	})();
</script>

<script lang="ts">
	const uuid = crypto.randomUUID();

	let { children, name, form = $bindable(undefined), onsubmit, ...attrs }: Props = $props();

    const context = setContext();

    context.name = name;
    context.id = uuid;

	$effect(() => {
		if (form && !FormState.map.has(uuid)) {
			FormState.count++;
			FormState.map.set(uuid, form);
            context.form = form;
		}
	});

    FormState.contexts.push(context);
</script>

<form
	{...attrs}
	bind:this={form}
	class={['form', attrs.class]}
	onsubmit={(__event__) => {
		__event__.preventDefault();
		__event__.stopPropagation();

		onsubmit?.(__event__);
	}}
>
	{@render children()}
</form>

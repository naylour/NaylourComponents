<script lang="ts">
	import { onMount } from 'svelte';
    import { Link, Form, FormState } from '../../lib';

    const { children } = $props();

    onMount(() => {
        const first = $state.snapshot(FormState.contexts)[0];

        for(const [id, field] of first.fields) {
            if(field.label) field.label.textContent = 'Hello'
        }
    })
</script>

<Link href="/" onactive={__event__ => {
    // console.log(__event__)
}}>Home</Link>

<Link href="/me" onactive={__event__ => {
    // console.log(__event__)
}}>Me</Link>


<Form name="First">
    <Form.Field id="name" name="name" title="Gogo" />
    <Form.Field title="Bye" />
</Form>
<!-- <Form name="Second">
    <Form.Field id="name" name="name" title="Hello" />
    <Form.Field title="Bye" />
</Form> -->


{@render children()}

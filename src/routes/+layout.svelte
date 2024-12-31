<script lang="ts">
    import { Link } from '../../lib/index.js';

    const { children } = $props();
</script>

<Link href="/" onactive={__event__ => {
    console.log(__event__)
}}>Home</Link>

<Link href="/me" onactive={__event__ => {
    console.log(__event__)
}}>Me</Link>



{@render children()}

<script>
	import Node from '$lib/components/Node.svelte';

	const props = $props();
</script>

<Node {...props.data.page}></Node>

<pre>{JSON.stringify(props, null, 2)}</pre>

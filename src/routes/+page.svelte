<script>
	import Node from '$lib/Components/Node.svelte';

	const props = $props();
</script>

<Node {...props.data.page}></Node>

<pre>{JSON.stringify(props, null, 2)}</pre>

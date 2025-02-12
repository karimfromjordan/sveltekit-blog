<script>
	import Node from '$lib/Components/Node.svelte';

	const { kind, children, tag, component, text, metadata, ...attributes } = $props();
</script>

{#if tag}
	<svelte:element this={tag} {...attributes}>
		{#if text}
			{text}
		{/if}
		{#if children}
			{#each children as node (node)}
				<Node {...node}></Node>
			{/each}
		{/if}
	</svelte:element>
{:else if component}
	Component
{:else if text}
	{text}
{/if}

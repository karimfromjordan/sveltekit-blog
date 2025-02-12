<script>
	import Node from '$lib/Components/Node.svelte';

	const { node, variables, components } = $props();
</script>

{#if node.tag}
	<svelte:element this={node.tag} {...node.attr}>
		{#if node.text}
			{node.text}
		{/if}
		{#if node.children}
			{#each node.children as n (n)}
				<Node {...n}></Node>
			{/each}
		{/if}
	</svelte:element>
{:else if node.component}
	Component
{:else if node.text}
	{node.text}
{/if}

<script>
	import '$lib/styles.css';

	let { children } = $props();
</script>

<div>
	<header></header>

	{@render children()}

	<footer></footer>
</div>

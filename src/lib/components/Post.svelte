<script>
  const props = $props()
</script>

<article>
  <h1>{props.post.h1}</h1>

  {#each props.post.blocks as block}

  {/each}
</article>
<script context="module">
  import client from '../../sanityClient'
	export function preload({ params, query }) {
    return client.fetch('*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)').then(posts => {
			return { posts };
		}).catch(err => this.error(500, err));
	}
</script>

<script>
  export let posts;

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<li><a rel='prefetch' href='blog/{post.slug.current}'>{post.title}</a> ({formatDate(post.publishedAt)})</li>
	{/each}
</ul>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>
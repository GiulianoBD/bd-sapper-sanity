<script>
	import Cover from "../components/bloks/Cover.svelte";
	import Highlight from "../components/bloks/Highlight.svelte";
	import Search from "../components/bloks/Search.svelte";
	import Footer from "../components/bloks/Footer.svelte";
	// import Space from "../components/utils/Space.svelte";
	import PostGrid from "../components/blog/PostGrid.svelte"

	import client from '../sanityClient'
	import { onMount } from 'svelte';
	
	export let post = '/'
	var posts = [];
	
	// let h = '100'
	// let u = 'vh'

	onMount( async () => {
		posts = await fetchLastPosts()
	})

	async function fetchLastPosts() {

		var posts = await client
		.fetch('*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)')
		.then(posts => { return posts })
		.catch(err => this.error(500, err));
		
		return posts
	}

</script>


	<svelte:head>
		<title>Blog BD Consulting</title>
	</svelte:head>

	<Cover />
	<Highlight {post} />
	<Search />
	<PostGrid {posts} />
	<!-- <Space bind:height="{h}" bind:unit="{u}" /> -->
	<Footer />
<script>
	import Nav from '../components/Nav.svelte';
	import ScrollController from '../components/plug/ScrollController.svelte';
	export let segment;

	var mainHeight;
</script>

<Nav {segment}/>
<ScrollController {mainHeight} />

<main bind:clientHeight="{mainHeight}" >
	<div data-scroll-container>
		<section data-scroll-section >
			<slot></slot>
		</section>
	</div>
</main>

<script>
	import { goto } from '@sapper/app'
	import SVGLogo from './brand/SVGLogo.svelte'
	export let segment;

	let navw;

	// $: console.log(navw)

</script>

<nav bind:clientWidth="{navw}" class="nav__wrap" >
	<div class="nav__main flex" >
		<div class="nav__logo" on:click="{()=>{ goto('.') }}" >
			<SVGLogo />
		</div>
		
		{#if navw > 600 }

			<div class="nav__widget--holder">

				<ul class="inline">
					<li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
					<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>
					<!-- <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li> -->
				</ul>
				
				<div class="nav__link--dashboard">
					<p>Area Riservata</p>
				</div>
				
			</div>

			{:else}
				[TODO HAMBURGER LOGIC] 
		{/if}

	</div>
</nav>

<style>
	
	.nav__wrap {
		left: 0;
		right: 0;
		z-index: 1;
		position: fixed;
		font-size: 22px;
	}
	
	.nav__main {
		margin: 20px auto;
		padding: 5px;
		width: var(--contentw);
		background-color: white;
		box-sizing: border-box;
	}

	.nav__logo {
		display: inline-block;
		height: 52px;
		cursor: pointer;
	}
	
	.nav__widget--holder {
		display: inline-flex;
		height: 52px;
	}

	.nav__link--dashboard {
		cursor: pointer;
		background-color: var(--brandcolor);
	}

	.nav__link--dashboard p {
		color: white;
		margin: 0;
		padding: 0 20px;
		line-height: 52px;
	}

	li {
		margin-right: 20px;
	}

	li:last-of-type {
		margin-right: 40px;
	}

</style>
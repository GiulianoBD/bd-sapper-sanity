<script>
  import SVGSquare from '../brand/SVGSquare.svelte'
  export let post;
  let picturew;
</script>


<!-- data-scroll data-scroll-call="function, module" -->

<section class="hglts__wrap cbox boxpad">

  <div class="hglts__heading" style="width:{picturew - 80}px">
    <h2>Highlights</h2>
  </div>

  <div class="hglts__wrap--inner">

    <div class="picture" bind:clientWidth="{picturew}">
      <img src="/images/highlights-debug.jpg" alt="">
      <div class="bd-logo-square">
        <SVGSquare />
      </div>
    </div>

    <div class="hglts__wrap--excerpt flex">
      <div class="hglts__wrap--excerpt--inner">
        <p>Categoria dell'articolo</p>
        <div class="hglts__inexc--wrap">
          <h3>Titolo dell'articolo BD in Evidenza</h3>
          <hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum elementum enim, vel egestas eros eleifend nec. Sed quis est dui. Mauris imperdiet commodo urna porta eleifend...</p>
        </div>
        <button class="hglts__btn btn__blue">
          <a href="[link-to-post]"><p>Continua a leggere</p></a>
        </button>
      </div>
    </div>


  </div>

</section>

<style>
  .hglts__wrap {
    width: var(--contentw);
    margin: 0 auto;
  }

  .hglts__heading {
    /* width: 50%; */
    margin: 30px 80px;
    padding-bottom: 10px;
    border-bottom: 2px dotted var(--brandcolor);
  }

  .picture {
    position: relative;
  }

  .picture img {
    width: 100%;
  }

  .hglts__inexc--wrap {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  :global(.bd-logo-square) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%,-50%) scale(0.5);
  }

    @media (min-width:1025px) { 
      .hglts__wrap--inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 40px;
      }
    }

    @media (min-width:1281px) { 
      .hglts__wrap--excerpt--inner {
        width: 80%;
      }
    }

</style>
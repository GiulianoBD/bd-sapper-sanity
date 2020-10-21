<script>
    import ArrowDown from 'svelte-icons/md/MdArrowForward.svelte'
    import client from '../../sanityClient'
    import imageUrlBuilder from '@sanity/image-url'
    import { formatDate } from '../utils/helpers'

    var postWidth;
    export let post;
    console.log(post)

    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }

</script>

<a class="post__single-wrap" href="blog/{post.slug.current}" bind:clientWidth="{postWidth}" title="{post.mainImage.alt}">
    <div class="post__picture">
        <img
            src={urlFor(post.mainImage)
                .width(Math.floor(postWidth))
                .url()}
            alt="{post.mainImage.alt}"
        />
    </div>
    <div class="post__caption">
        <h4>{post.title}</h4>
        <div class="post__caption--cta">
            <p>{formatDate(post.publishedAt)}</p>
            <div class="post__caption--cta-readmore">
                <button class="btn__clear">Leggi l'articolo</button>
                <div class="icon small white">
                    <ArrowDown />
                </div>
            </div>
        </div>
    </div>
</a>

<style>

    .post__single-wrap {
        border-radius: 10px;
        overflow: hidden;
        display: block;
    }

    .post__caption {
        background-color: var(--brandcolor);
        padding: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }

    .post__caption h4 {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .post__caption p {
        text-transform: capitalize;
    }

    .post__caption h4,
    .post__caption p {
        color: white;
    }

    .post__picture {
        height: 100%;
        width: 100%;
        position: absolute;
        box-sizing: border-box;
        /* border: 5px solid red; */
        overflow: hidden;
        background-color: gray;
    }

    .post__caption--cta {
        display: flex;
        justify-content: space-between;
    }

    .post__caption--cta-readmore {
        display: inline-flex;
    }

</style>
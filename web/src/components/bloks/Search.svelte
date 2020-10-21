<script>
    import client from '../../sanityClient'
    import SearchLoader from '../utils/SearchLoader.svelte'
    import SearchIco from 'svelte-icons/md/MdSearch.svelte'
    import OpenArchive from 'svelte-icons/md/MdOpenInNew.svelte'
    
    import { onMount } from 'svelte';
    import { formatDate } from '../utils/helpers'

    let timer;
    let queryValue = 'placeholder'
    let DOMContentLoaded = false;
    let afterFirstSearch = false;
    let queryLoading = false;

    var posts = []

    $: fetch(queryValue)


    onMount(()=>{
        DOMContentLoaded = true

        return () => { console.log('destroy') }
    })

    async function fetch( queryValue ) {

        if (!DOMContentLoaded) return

        const params = { input: queryValue }
        const query = `*[ body[].children[].text match $input ] {
            title,
            "slug": slug.current,
            publishedAt
        }`

        client.fetch(query, params).then( data => {
            posts = data
        }).finally( setTimeout(() => { queryLoading = false }, 1200) )
        // })

    }

    const debounceSearch = value => {
		clearTimeout(timer);
		timer = setTimeout(() => {
            if ( value == '' ) return
            queryValue = value;
            queryLoading = true;
            afterFirstSearch = true;
		}, 750);
    }
    

    // $: console.log(posts)
    

</script>

<section class="search__wrapper cbox boxpad" >
    <div class="search__heading flex">
        <div class="search__heading--title">
            <div class="icon extra blue">
                <SearchIco />
            </div>
            <h4><b>Cerca</b> tra i nostri articoli <br><b>l’argomento</b> che ti interessa:</h4>
        </div>

        <div class="search__heading--archive">
            <a href="[ma-va-in-archiviopost]"><p>Sfoglia tutti gli articoli</p></a>
            <div class="icon blue">
                <OpenArchive />
            </div>
        </div>

    </div>
    <div class="search__sbwrap cbox flex">
        <input type="text" placeholder="BD Consulting" on:keyup={({ target: { value } }) => debounceSearch(value)} >
    </div>

    {#if queryLoading} 
        <div class="search__loader--wrap">
            <SearchLoader />
        </div>
        {:else}
            {#if posts.length == 0 && afterFirstSearch }
                <div class="search__no-results" >
                    <p class="search__no-results-caption" > Sembra non ci siano articoli inerenti alla tua ricerca '{queryValue}'.</p>
                </div>
                {:else if afterFirstSearch }
                <div class="search__results--wrap">
                    <p class="search__results--title" >Abbiamo trovato {posts.length} articoli per la keyword '{queryValue}':</p>
                    {#each posts as post }
                        <div class="search__results--item">
                            <a href="/blog/{post.slug}">
                                <h4>{post.title}</h4>
                                <p>{formatDate(post.publishedAt)}</p>
                            </a>
                        </div>
                    {/each}
                </div>
            {/if}
    {/if}

</section>

<style>

    .search__heading {
        align-items: baseline;
        margin-bottom: 60px;
    }

    .search__heading--title,
    .search__heading--archive {
        display: inline-flex;
        align-items: center;
    }

    .search__heading--title h4 {
        margin-left: 10px;
    }

    .search__heading--archive p:hover {
       text-decoration: underline;
    }

    .search__sbwrap input {
        height: 145px;
        border: none;
        border-bottom: 2px solid var(--brandcolor);
        width: 100%;
        background-color: #3d488c17;
        text-align: center;
        font-size: 92px;
        color: var(--brandcolor);
        margin-bottom: 20px;
    }

    .search__results--wrap {
        width: 90%;
        margin: 0 auto;
    }

    .search__results--title,
    .search__no-results-caption {
        text-align: center;
        font-size: 26px;
        font-weight: 600;
        margin: 60px 0;
        color: var(--brandcolor);
    }

    .search__results--item a {
        display: inline-flex;
        align-items: baseline;
        justify-content: space-between;
        width: 100%;
        padding: 0px 10px 10px 10px;
        margin-bottom: 40px;
        border-bottom: 1px solid var(--brandcolor);
        box-sizing: border-box;
        cursor: pointer;
    }

    .search__results--item h4 {
        font-size: 24px;
    }

    .search__results--item p {
        text-transform: capitalize;
        color: var(--brandcolor);
    }

    .search__loader--wrap {
        transform: scale(0.5);
    }

    .icon {
        margin-left: 20px;
    }

</style>
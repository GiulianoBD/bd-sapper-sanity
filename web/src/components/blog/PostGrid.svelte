<script>
    import PostCard from '../blog/PostCard.svelte'

    export let posts = [];
    $: console.log(posts)

</script>

<section class="postgrid__wrap boxpad">
    <div class="postgrid__center cbox">
        <div class="postgrid__heading">
            <h3>Sfoglia gli articoli del nostro blog BD</h3>
            <p>Qui puoi trovare informazioni utili e commenti dei soci titolari</p>
        </div>
        <main>
            <div class="postgrid__post-wrap">
                {#each posts as post}
                    <PostCard { post } />
                {/each}
            </div>
        </main>
    </div>
</section>


<style>

    .postgrid__wrap {
        background-color: #3d488c17;
    }

    .postgrid__heading {
        text-align: center;
        padding-bottom: 80px;
    }

    .postgrid__heading h3 {
        text-align: center;
        margin-bottom: 20px;
    }

    .postgrid__post-wrap {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 320px);
        gap: 20px;
    }

</style>
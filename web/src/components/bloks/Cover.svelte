<script>
    import ArrowDown from 'svelte-icons/md/MdArrowDownward.svelte'
    let heading = 'Titolo che riassume il perchè questo blog di BD Consulting sia utile agli interessati.'
</script>

<section class="img__cover" data-scroll	data-scroll-call="cover">
    <div class="cover__wrapper--headline cbox">
        <h1>{heading}</h1>
        <div class="cover__wrapper--btn">
            <button class="btn__white scroll__down" >
                <span>Scopri il blog</span>
                <div class="icon">
                    <ArrowDown />
                </div>
            </button>
        </div>
    </div>
</section>

<style>

    section {
        height: 100vh;
        background-color: var(--brandcolor);
        background-image: url('/images/cover-blog.jpg');
    }

    h1 {
        font-size: 64px;
        padding-top: 35vh;
        color: white;
        width: 100%;
    }

    button {
        padding: 15px 40px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    button span {
        margin-right: 15px;
        font-size: 22px;
    }

    .cover__wrapper--headline {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    
    .cover__wrapper--btn {
        display: grid;
        place-items: end;
    }

    /* tablet, landscape iPad, lo-res laptops ands desktops */ 
    @media (min-width:801px) { 
        h1 {
            width: 80%;
            padding-top: 40vh;
        }
    }

</style>
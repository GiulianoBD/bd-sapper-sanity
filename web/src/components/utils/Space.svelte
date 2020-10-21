<script>
    export let height;
    export let unit;
</script>

<section style="height:{height}{unit}">
    <span>This space measures <b>{height}{unit}</b>.</span> 
</section>

<style>

    section {
        display: grid;
        place-items: center;
        background-color: #3d488c17;
    }

</style>
<script context="module">
    import { writable } from 'svelte/store'
    export const scrollTrigger  = writable('default')
</script>

<script>
    import { onMount } from "svelte";
    import { scrollCDN, loadScript } from '../utils/helpers'
    
    export let mainHeight;
    var scroll;

    $: handleResize(mainHeight)
    $: handleCall($scrollTrigger)

    onMount(() => {
        
        loadScript(scrollCDN).then( () => { 

            console.log('[Locomotive CDN Loaded]')

            scroll =  new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                class: 'in-viewport',
                repeat: true
            })

        })
        .catch( err => console.error(err) )
        .finally( () => {
            // scroll.on('call', (s)=>{ console.log(s) })
            // scroll.on('scroll', s => {  })
            // $visible = ( s.scroll.y > s.limit / 10  ) ? true : false
        })
        
    })

    function handleResize(h){
        if (typeof scroll !== 'object' ) return
        scroll.update() 
    } 
    
    function handleCall(e) {
        if (typeof scroll !== 'object' ) return
        console.log('[Scroll Triggered]', e)
        
        // if (!scroll) return
        if (e == 'update') handleUpdate()
        else return
        // { 
            // ()
            // console.log('Update Called [PRE]')
            // console.log(scroll)
            // console.log(e)
            // console.log(typeof scroll)
        // }
        
        $scrollTrigger = 'default'
    }
    
    function handleUpdate() {
        console.log('[UPDATE Triggered]')
        if (typeof scroll !== 'object' ) return
        scroll.scrollTo(0,0,0)
    }

    // () => { console.log('Update Called [POST]') }


</script>


<span id="progress"></span>


<style>
    #progress {
        position: fixed;
    }
</style>
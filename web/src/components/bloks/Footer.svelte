<script>
    import SVGLogo from '../brand/SVGLogo.svelte'
</script>

<footer>
    <div class="footer__wrap cbox">
        <div class="footer__contacts flex">
            <div id="footerlogo">
                <SVGLogo />
            </div>
            <div class="footer__contacts--links">
                <ul>
                    <li><a href="[link-mappa-milano]"><p><b>HQ Milano</b> — Largo Augusto, 1, 20122 Milano</p></a></li>
                    <li><a href="[link-mappa-brescia]"><p><b>HQ Brescia</b> — Via Cefalonia, 49, 25124, Brescia</p></a></li>
                    <li><a href="tel:+390302054595"><p><b>RA. Centralino unificato</b> — +39 030 20 54 595</p></a></li>
                </ul>
            </div>
        </div>
        <div class="footer__legals">
            <div class="footer__cc"><p>2020 © BD Consulting Srl — All rights reserved — C.F./P.I. — 03227520982</p></div>
            <div class="footer__policy">
                <a href="privacy-policy">Privacy Policy</a>
                <a href="cookie-policy">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>

<style>
    footer {
        color: white;
        background-color: var(--brandcolor);
        padding: 40px 0;
        letter-spacing: 1.4px;
    }

    .footer__legals {
        display: inline-flex;
        justify-content: space-between;
        border-top: 2px solid white;
        padding-top: 20px;
        width: 100%;
    }

    .footer__policy a {
        margin-left: 20px;
    }

    .footer__policy a:hover {
        text-decoration: underline;
    }

    .footer__contacts {
        width: 100%;
        margin-bottom: 20px;
    }

    #footerlogo {
        display: inline-block;
    }

</style>
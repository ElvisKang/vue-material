<template>
<header>
    <md-nav  :logo="logo" nolink>
    </md-nav>
</header>    
<div class="container">
<article id="chips">
    <section>
        <doc-item-title>Contact</doc-item-title>
        <doc-item-demo>
            <md-chip img-src="static/images/doc/chips.jpg" img-alt="Contact Person" >Jane Doe</md-chip>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.contact}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Tag</doc-item-title>
        <doc-item-demo>
            <md-chip tag >Tag</md-chip>
            <md-chip tag img-src="static/images/doc/chips.jpg" img-alt="Contact Person" >Jane Doe</md-chip>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.tag}}
        </doc-item-code>
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from "../codes/Chips.js";
    export default {
        mixins:[docView,hasCode],
        data(){
            return {    
                logo:{
                    href:"#!/chips",
                    text:"Chips",
                    pos:"center"
                },
                codes
            }
        }
    }
</script>
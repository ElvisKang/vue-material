<template>
<header>
    <md-nav class="doc-nav" :logo="logo" nolink>
    </md-nav>
</header>    
<div class="container">
<article>
    <section class="center">
        <p>Coming Soon</p>
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    export default {
        mixins:[docView,hasCode],
        data(){
            return {
                logo:{
                    href:"!#/footer",
                    text:"Footer",
                    pos:"center"
                }
            }
        }
    }
</script>
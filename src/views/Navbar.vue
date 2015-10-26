<template>
<header>
    <md-nav :logo="logo" nolink>
    </md-nav>
</header>    
<div class="container">
<article id="navbar">
    <section>
        <p>Coming soon</p>
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
                    href:"#!/navbar",
                    text:"Navbar",
                    pos:"center"
                },
                // codes
            }
        }
    }
</script>
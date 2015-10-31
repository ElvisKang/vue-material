<template>
<header>
    <div class="navbar-fixed">
        <md-nav  :logo="logo" no-link> </md-nav>
    </div>
</header>    
<div class="container">
<article id="navbar">
    <section>
        <doc-item-title>Basic</doc-item-title>
        <doc-item-demo>
            <md-nav :logo="{href:'#!/navbar',text:'Logo'}" links-pos="right">
                <md-a href="#!/navbar">About</md-a>
                <md-a href="https://github.com/ElvisKang/vue-material">Github</md-a>
            </md-nav>
            <md-nav :logo="{href:'#!/navbar',text:'Logo',pos:'center'}" links-pos="right">
                <md-a href="#!/navbar">About</md-a>
                <md-a href="https://github.com/ElvisKang/vue-material">Github</md-a>
            </md-nav>
            <md-nav :logo="{href:'#!/navbar',text:'Logo',pos:'right'}">
                <md-a href="#!/navbar">About</md-a>
                <md-a href="https://github.com/ElvisKang/vue-material">Github</md-a>
            </md-nav>
        </doc-item-demo>
        <doc-item-code lang="markup">
        </doc-item-code>
    </section>
    <section>
         <doc-item-title>Customized Logo</doc-item-title>
         <doc-item-demo>
            <md-nav :logo="{href:'#!/navbar',pos:'center'}" links-pos="right" class="white">
                <md-icon slot="logo" text="code" class="green-text"></md-icon>
                <md-a href="#!/navbar" class="green-text">About</md-a>
                <md-a href="https://github.com/ElvisKang/vue-material" class="green-text active">Github</md-a>
            </md-nav>
         </doc-item-demo>
         <doc-item-code lang="markup">
             <!-- {{codes.tag}} -->
         </doc-item-code>
     </section>
     <section>
         <doc-item-title>Icon Links</doc-item-title>
        <doc-item-demo>
            <md-nav :logo="{href:'#!/navbar',text:'Logo'}" links-pos="right">
                <md-a href="#!/navbar" icon-text="search"></md-a>
                <md-a href="https://github.com/ElvisKang/vue-material"  icon-text="code"></md-a>
            </md-nav>
        </doc-item-demo>
        <doc-item-demo>
            <md-nav :logo="{href:'#!/navbar',text:'Logo'}" links-pos="right">
                <md-a href="" icon-text="search" icon-pos="left">Search</md-a>
                <md-a href="https://github.com/ElvisKang/vue-material" icon-text="code" icon-pos="right">Github</md-a>
            </md-nav>
        </doc-item-demo>
     </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    // import codes from "../codes/Chips.js";
    export default {
        mixins:[docView,hasCode],
        data(){
            return {    
                logo:{
                    href:"#!/navbar",
                    text:"Navbar(incomplete)",
                    pos:"center"
                },
                // codes
            }
        }
    }
</script>
<style>
    #navbar nav {
        margin-bottom: 5px;
    }
</style>
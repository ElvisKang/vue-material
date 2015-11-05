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
                <a href="#!/navbar">About</a>
                <a href="https://github.com/ElvisKang/vue-material">Github</a>
            </md-nav>
            <md-nav :logo="{href:'#!/navbar',text:'Logo',pos:'center'}" links-pos="right">
                <a href="#!/navbar">About</a>
                <a href="https://github.com/ElvisKang/vue-material">Github</a>
            </md-nav>
            <md-nav :logo="{href:'#!/navbar',text:'Logo',pos:'right'}">
                <a href="#!/navbar">About</a>
                <a href="https://github.com/ElvisKang/vue-material">Github</a>
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
                <a href="#!/navbar" class="green-text">About</a>
                <a href="https://github.com/ElvisKang/vue-material" class="green-text active">Github</a>
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
                <a href="#!/navbar">
                    <md-icon text="search"></md-icon>
                </a>
                <a href="https://github.com/ElvisKang/vue-material">
                    <md-icon text="code"></md-icon>
                </a>
            </md-nav>
        </doc-item-demo>
        <doc-item-demo>
            <md-nav :logo="{href:'#!/navbar',text:'Logo'}" links-pos="right">
                <a href="">
                    <md-icon text="search" pos="left"></md-icon>
                    Search
                </a>
                <a href="https://github.com/ElvisKang/vue-material" icon-text="code" icon-pos="right">
                    <md-icon text="code" pos="right"></md-icon>
                    Github
                </a>
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
                    text:"Navbar",
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
<template>
<header>
    <md-nav>
        <md-nav-logo href="#!/navbar" pos="center">Navbar</md-nav-logo>
    </md-nav>
</header>    
<div class="container">
<article id="navbar">
    <section>
        <doc-item-title>Basic</doc-item-title>
        <doc-item-demo>
            <md-nav>
                <md-nav-logo href="#!/navbar">Logo</md-nav-logo>
                <md-nav-links>
                    <a href="#!/navbar">About</a>
                    <a href="https://github.com/ElvisKang/vue-material">Github</a>
                </md-nav-links>
            </md-nav>
            <md-nav>
                <md-nav-logo href="#!/navbar" pos="center">Logo</md-nav-logo>
                <md-nav-links>
                    <a href="#!/navbar">About</a>
                    <a href="https://github.com/ElvisKang/vue-material">Github</a>
                </md-nav-links>
            </md-nav>
            <md-nav>
                <md-nav-logo href="#!/navbar" pos="right">Logo</md-nav-logo>
                <md-nav-links pos="left">
                    <a href="#!/navbar">About</a>
                    <a href="https://github.com/ElvisKang/vue-material">Github</a>
                </md-nav-links>
            </md-nav>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.basic}}
        </doc-item-code>
    </section>
    <section>
         <doc-item-title>Non-text Logo</doc-item-title>
         <doc-item-demo>
            <md-nav class="white">
                <md-nav-logo href="#!/navbar" pos="center">
                    <md-icon slot="logo" text="code" class="green-text"></md-icon>
                </md-nav-logo>
                <md-nav-links class="green-text">
                    <a href="#!/navbar">About</a>
                    <a href="https://github.com/ElvisKang/vue-material">Github</a>
                </md-nav-links>
            </md-nav>
         </doc-item-demo>
         <doc-item-code lang="markup">
             {{codes.cus}}
         </doc-item-code>
     </section>
     <section>
         <doc-item-title>Icon Links</doc-item-title>
        <doc-item-demo>
            <md-nav>
                <md-nav-logo href="#!/navbar">Logo</md-nav-logo>
                <md-nav-links>
                    <a href="#!/navbar">
                        <md-icon text="search"></md-icon>
                    </a>
                    <a href="https://github.com/ElvisKang/vue-material">
                        <md-icon text="code"></md-icon>
                    </a>
                </md-nav-links>
            </md-nav>
            <md-nav>
                <md-nav-logo href="#!/navbar">Logo</md-nav-logo>
                <md-nav-links>
                    <a href="">
                        <md-icon text="search" pos="left"></md-icon>
                        Search
                    </a>
                    <a href="https://github.com/ElvisKang/vue-material" icon-text="code" icon-pos="right">
                        <md-icon text="code" pos="right"></md-icon>
                        Github
                    </a>
                </md-nav-links>
            </md-nav>
        </doc-item-demo>
         <doc-item-code lang="markup">
             {{codes.icon}}
         </doc-item-code>
     </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from "../codes/Navbar.js";
    export default {
        mixins:[docView,hasCode],
        data(){
            return {    
                codes
            }
        }
    }
</script>
<style>
    #navbar nav {
        margin-bottom: 5px;
    }
    nav ul a {
        color:inherit;
    }
</style>
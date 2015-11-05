<template>
<header>
    <md-nav  :logo="logo" no-link>
    </md-nav>
</header>    
<div class="container">
<article id="chips">
    <section>
        <doc-item-title>Lists</doc-item-title>
        <doc-item-demo>
            <md-list>
                <md-list-item href="#!/lists">
                    Item
                    <md-badge>1</md-badge>
                </md-list-item>
                <md-list-item href="#!/lists">Item</md-list-item>
                <md-list-item href="#!/lists">
                    Item
                    <md-badge new>14</md-badge>
                </md-list-item>
                <md-list-item href="#!/lists">Item</md-list-item>
            </md-list>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.lists}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Navbar</doc-item-title>
        <doc-item-demo>
            <md-nav :logo="{href:'#!/badges',text:'Logo'}" links-pos="right">
                <a href="#!/badges">Message<md-badge new>14</md-badge></a>
                <a href="https://github.com/ElvisKang/vue-material">Github</a>
            </md-nav>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.navbar}}
        </doc-item-code>
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from "../codes/Badges.js";
    export default {
        mixins:[docView,hasCode],
        data(){
            return {    
                logo:{
                    href:"#!/badges",
                    text:"Badges",
                    pos:"center"
                },
                codes
            }
        }
    }
</script>
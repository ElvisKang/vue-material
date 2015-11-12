<template>
<header>
    <md-nav>
        <md-nav-logo href="#!/badges" pos="center">Badges</md-nav-logo>
    </md-nav>
</header>    
<div class="container">
<article id="chips">
    <section>
        <doc-item-title>Lists</doc-item-title>
        <doc-item-demo>
            <md-list>
                <md-list-item href="#!/badges">
                    Item
                    <md-badge>1</md-badge>
                </md-list-item>
                <md-list-item href="#!/badges">Item</md-list-item>
                <md-list-item href="#!/badges">
                    Item
                    <md-badge new>14</md-badge>
                </md-list-item>
                <md-list-item href="#!/badges">Item</md-list-item>
            </md-list>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.lists}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Navbar</doc-item-title>
        <doc-item-demo>
            <md-nav>
                <md-nav-logo href="#!/badges">Logo</md-nav-logo>
                <md-nav-links>
                    <a href="#!/badges">Message<md-badge new>14</md-badge></a>
                    <a href="https://github.com/ElvisKang/vue-material">Github</a>
                </md-nav-links>
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
                codes
            }
        }
    }
</script>
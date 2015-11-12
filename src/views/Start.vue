<template>
<header>
    <md-nav>
        <md-nav-logo href="#!/start" pos="center">Getting Started</md-nav-logo>
    </md-nav>
</header>    
<div class="container">
<article id="start">
    <section>
        <doc-item-title>Download</doc-item-title>
        <doc-item-intro>
            First of all, you need to download <a href="http://materializecss.com/getting-started.html">Materialize</a> and <a href="vuejs.org">Vue.js(1.0.0+)</a>.
        </doc-item-intro>
        <doc-item-intro>
            After that ,  installing vue-material with npm. 
        </doc-item-intro>
        <doc-item-code>
            {{codes.install}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Usage</doc-item-title>
        <doc-item-code lang="javascript">
            {{codes.use}}
        </doc-item-code>
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from '../codes/Start.js';
    export default {
        mixins:[docView,hasCode],
        data(){
            return {
                codes
            }
        }
    }
</script>
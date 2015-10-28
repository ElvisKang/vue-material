<template>
<header>
    <md-nav  :logo="logo" no-link>
    </md-nav>
</header>    
<div class="container">
<article id="start">
    <section>
        <doc-item-title>Determinate</doc-item-title>
        <doc-item-demo>
            <md-progress :percent="80"></md-progress>
            <md-progress  class="red lighten-4" bar-color="red" :percent="80"></md-progress>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.deter}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Indeterminate</doc-item-title>
        <doc-item-demo>
            <md-progress ></md-progress>
            <md-progress class="red lighten-4" bar-color="red"></md-progress>
        </doc-item-demo>
    </section>
        <doc-item-code lang="markup">
            {{codes.indeter}}
        </doc-item-code>
    <section>
        <doc-item-title>Circular</doc-item-title>
        <doc-item-demo>
            <md-circular class="big"></md-circular>
            <md-circular colors="blue"></md-circular>
            <md-circular colors="green"></md-circular>
            <md-circular colors="red"></md-circular>
            <md-circular class="small" colors="yellow"></md-circular>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.circular}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Circular Flashing Colors</doc-item-title>
        <doc-item-demo>
            <md-circular class="big" colors="blue red yellow green"></md-circular>
            <md-circular :colors="['blue','red','yellow','green']"></md-circular>
            <md-circular class="small" colors="blue red yellow green"></md-circular>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.flashing}}
        </doc-item-code>
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from '../codes/Preloader.js'
    export default {
        mixins:[docView,hasCode],
        data(){
            return {
                logo:{
                    href:"#!/preloader",
                    text:"Preloader",
                    pos:"center"
                },
                codes
            }
        }
    }
</script>
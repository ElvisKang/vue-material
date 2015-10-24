<template>
<header>
    <md-nav  :logo="logo" nolink>
    </md-nav>
</header>    
<div class="container">
<article>
<section>
    <doc-item-title>Raised</doc-item-title>
    <doc-item-demo>
        <md-btn id="haha">Button</md-btn>
        <md-btn icon-text="code" icon-pos="right" class="green">Button</md-btn>
        <md-btn icon-text="code" class="yellow darken-1">Button</md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup" >
    {{codes.raised}}
    </doc-item-code>
</section>
<section>
    <doc-item-title>Flat</doc-item-title>
    <doc-item-demo>
        <md-btn  flat >Button</md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup" >
        {{codes.flat}}
    </doc-item-code>
</section> 
<section>
    <doc-item-title>Floating</doc-item-title>
    <doc-item-demo>
        <md-btn-f  icon-text="code" class="red btn-large"></md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup">
        {{codes.floating}}
    </doc-item-code>
</section> 
<section>
    <doc-item-title>Fixed Action Button(unfinished)</doc-item-title>
    <doc-item-demo>
        <md-fab :pos="{right:'24px',bottom:'45px'}"  :main-btn="{class:'btn-large red',text:'code'}">
              <li> <md-btn-f class="pink" icon-text="insert_chart"></md-btn-f></li>
              <li> <md-btn-f class="yellow" icon-text="format_quote"></md-btn-f></li>
              <li> <md-btn-f class="green" icon-text="publish"></md-btn-f> </li>
              <li> <md-btn-f class="blue" icon-text="attach_file"></md-btn-f> </li>
        </md-fab>
    </doc-item-demo>
    <doc-item-code lang="markup">
        {{codes.fab}}
    </doc-item-code>
</section> 
<section>
    <doc-item-title>Disabled</doc-item-title>
    <doc-item-demo>
        <md-btn disabled>Button</md-btn>
        <md-btn flat disabled>Button</md-btn>
        <md-btn-f  icon-text="code" class="red btn-large" disabled></md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup" >
        {{codes.disabled}}
    </doc-item-code>
</section>
</article>
</div>
</template>

<script lang="babel">
import {docView,hasCode} from './mixin.js';
import codes from '../codes/Buttons.js';
export default {
    mixins:[docView,hasCode],
    data(){
        return {            
        logo:{
            href:"#!/buttons",
            text:"Buttons",
            pos:"center"
             },
             codes
        }
    }
}
</script>
<style>
    .doc-demo>*{
        margin-right:3px;
    }
    nav {
        background: #41B883;
    }
</style>
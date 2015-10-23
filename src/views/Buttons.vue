<template>
<header>
    <md-nav class="doc-nav" :logo="logo" nolink>
    </md-nav>
</header>    
<div class="container">
<article>
<section>
    <doc-item-title>Raised</doc-item-title>
    <doc-item-demo>
        <md-btn >Button</md-btn>
        <md-btn icon-text="code" icon-pos="right" class="green">Button</md-btn>
        <md-btn icon-text="code" class="yellow darken-1">Button</md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup" :code="codes.raised">
    </doc-item-code>
</section>
<section>
    <doc-item-title>Flat</doc-item-title>
    <doc-item-demo>
        <md-btn  flat >Button</md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup" :code="codes.flat">
    </doc-item-code>
</section> 
<section>
    <doc-item-title>Floating</doc-item-title>
    <doc-item-demo>
        <md-btn-f  icon-text="code" class="red btn-large"></md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup" :code="codes.floating">
    </doc-item-code>
</section> 
<section>
    <doc-item-title>Fixed Action Button(unfinished)</doc-item-title>
    <doc-item-demo>
        <md-fab :pos="{right:'24px',bottom:'45px'}"  main-text="mode_edit">
              <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></i></a></li>
              <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
              <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
              <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
        </md-fab>
    </doc-item-demo>
</section> 
<section>
    <doc-item-title>Disabled</doc-item-title>
    <doc-item-demo>
        <md-btn disabled>Button</md-btn>
        <md-btn flat disabled>Button</md-btn>
        <md-btn-f  icon-text="code" class="red btn-large" disabled></md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup" :code="codes.disabled">
</section>
</article>
</div>
</template>

<script lang="babel">
import {docView,hasCode} from './mixin.js';
export default {
    mixins:[docView,hasCode],
    data(){
        return {            
        logo:{
            href:"!#/buttons",
            text:"Buttons",
            pos:"center"
             },
        codes:{
            raised:`
<md-btn >Button</md-btn>
<md-btn icon-text="code" icon-pos="right" class="green">Button</md-btn>
<md-btn icon-text="code" class="yellow darken-1">Button</md-btn>
        `,
            flat:`
<md-btn  flat >Button</md-btn>
            `,
            floating:`
<md-btn-f  icon-text="code" class="red btn-large"></md-btn>
            `,
            disabled:`
<md-btn disabled>Button</md-btn>
<md-btn flat disabled>Button</md-btn>
<md-btn-f  icon-text="code" class="red btn-large" disabled></md-btn>
            `
        }
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
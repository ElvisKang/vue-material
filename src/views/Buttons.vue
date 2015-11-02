<template>
<header>
    <md-nav  :logo="logo" no-link>
    </md-nav>
</header>    
<div class="container">
<article>
<section>
    <doc-item-title>Raised</doc-item-title>
    <doc-item-demo>
        <p>
            <md-btn>Button</md-btn>
            <md-btn class="green" >Button</md-btn>
            <md-btn class="yellow" label="Button" ></md-btn>
        </p>
        <p>
            <md-btn icon-text="code" icon-pos="right" >Button</md-btn>
            <md-btn icon-text="code" icon-pos="left" >Button</md-btn>
        </p>
        <p>
            <md-btn large>Button</md-btn>
            <md-btn disabled>Button</md-btn>
        </p>
    </doc-item-demo>
    <doc-item-code lang="html" >
    {{codes.raised}}
    </doc-item-code>
</section>
<section>
    <doc-item-title>Flat</doc-item-title>
    <doc-item-demo>
        <md-btn  type="flat" large >Button1</md-btn>
        <md-btn  type="flat" >Button2</md-btn>
        <md-btn  type="flat" disabled >Button3</md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup" >
        {{codes.flat}}
    </doc-item-code>
</section> 
<section>
    <doc-item-title>Floating</doc-item-title>
    <doc-item-demo>
        <md-btn type="floating" large icon-text="code" class="red" ></md-btn>
        <md-btn type="floating"  icon-text="code" class="red" ></md-btn>
        <md-btn type="floating" disabled icon-text="code" class="red" ></md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup">
        {{codes.floating}}
    </doc-item-code>
</section> 
<section>
    <doc-item-title>Fixed Action Button</doc-item-title>
    <doc-item-demo>
        <md-fab  style="right:24px;bottom:45px">
              <md-btn type="floating" large slot="main" class="red" icon-text="code"></md-btn>
              <md-btn type="floating" class="pink" icon-text="insert_chart"></md-btn>
              <md-btn type="floating" class="yellow" icon-text="format_quote"></md-btn>
              <md-btn type="floating" class="green" icon-text="publish"></md-btn>
              <md-btn type="floating" class="blue" icon-text="attach_file"></md-btn>
        </md-fab>
    </doc-item-demo>
    <doc-item-code lang="markup">
        {{codes.fab}}
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
        clickedID:null,            
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

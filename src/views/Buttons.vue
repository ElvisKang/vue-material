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
        <md-btn @click="btnClick('Raised1')">Button</md-btn>
        <md-btn icon-text="code" icon-pos="right" class="green" @click="btnClick('Raised2')">Button</md-btn>
        <md-btn icon-text="code" icon-pos="left" class="yellow darken-1" @click="btnClick('Raised3')">Button</md-btn>
        <p>Try to click button :{{clickedID}}</p>
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
        <md-btn float icon-text="code" class="red btn-large"></md-btn>
    </doc-item-demo>
    <doc-item-code lang="markup">
        {{codes.floating}}
    </doc-item-code>
</section> 
<section>
    <doc-item-title>Fixed Action Button</doc-item-title>
    <doc-item-demo>
        <md-fab  style="right:24px;bottom:45px">
              <md-btn float slot="main" class="red btn-large" icon-text="code"></md-btn>
              <md-btn float class="pink" icon-text="insert_chart"></md-btn>
              <md-btn float class="yellow" icon-text="format_quote"></md-btn>
              <md-btn float class="green" icon-text="publish"></md-btn>
              <md-btn float class="blue" icon-text="attach_file"></md-btn>
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
        <md-btn float  icon-text="code" class="red btn-large" disabled></md-btn>
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
        clickedID:null,            
        logo:{
            href:"#!/buttons",
            text:"Buttons",
            pos:"center"
             },
             codes
        }
    },
    methods:{
        btnClick(id){
            this.clickedID=id;
        }
    }
}
</script>

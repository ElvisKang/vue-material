<template>
<md-nav-wrapper :class="class">
    <a :href="logo.href" :class="['brand-logo',logo.pos]">
        <slot name="logo">
            {{logo.text}}
        </slot>
    </a>
    <ul v-el:ul v-if="!noLink" :class="[linksPos]">
        <slot></slot> 
    </ul>        
</md-nav-wrapper>
</template>

<script type="babel">
import wrap from '../utils/wrap-children.js';
import mdNavWrapper from './md-nav-wrapper.vue';
export default {
    props:{
        class:String,
        logo:Object,
        noLink:Boolean,
        linksPos:String,
        hide:{
            type:String,
        }
    },
    components:{
        'md-nav-wrapper':mdNavWrapper
    },
    created(){
            //check logo
            //logo.pos can be empty
            let logo= this.logo;
            logo.href = logo.href || "";
    },
    ready(){
        if(!this.noLink){
            let ul = this.$els.ul;
            wrap(ul,"li");
        }
    }
}
</script>

<style>
ul.side-nav.fixed li a {
    font-size: 13px;
    line-height: 44px;
    height: 44px;
}        
</style>
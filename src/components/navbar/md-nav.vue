<template>
<nav>
      <div class="nav-wrapper">
            <a :href="logo.href" :class="['brand-logo',logo.pos]">
                <slot name="logo">
                    {{logo.text}}
                </slot>
            </a>
            <ul v-el:ul v-if="!noLink" :class="[linksPos]">
                <slot></slot> 
            </ul>        
      </div>
</nav>
</template>

<script type="babel">
import wrap from '../utils/wrap-children.js';
export default {
    props:{
        logo:Object,
        noLink:Boolean,
        linksPos:String,
        hide:{
            type:String,
        }
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
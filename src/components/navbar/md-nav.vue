<template>
<nav>
      <div class="nav-wrapper">
        <md-nav-logo :href="logo.href" :text="logo.text" :pos="logo.pos">
            <slot name="logo"></slot>
        </md-nav-logo>
        <ul v-if="noLink" :class="[linksPos]">
            <slot></slot> 
        </ul>
      </div>
</nav>
</template>

<script type="babel">
export default {
    props:{
        fixed:Boolean,
        logo:Object,
        noLink:Boolean,
        linksPos:String
/*        logoText:String,
        logoPos:{
            type:String,
            default:"right",
        },
        logoHref:{
            type:String,
            default:"#"
        }*/
    },
    created(){
            //check logo
            //logo.pos can be empty
            let logo= this.logo;
            logo.href = logo.href || "#";

    }
}
</script>
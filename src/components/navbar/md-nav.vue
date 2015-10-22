<template>
<nav>
      <div :class="[fixed?'navbar-fixed':'nav-wrapper']">
        <md-nav-logo :href="logo.href" :text="logo.text" :pos="logo.pos">
            <slot name="logo-cus"></slot>
        </md-nav-logo>
       <slot name="nav-links"> </slot>
      </div>
</nav>
</template>

<script type="babel">
export default {
    props:{
        fixed:Boolean,
        logo:Object
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
            let logo= this.logo;
            logo.pos = logo.pos || "left";
            logo.href = logo.href || "#";
    }
}
</script>
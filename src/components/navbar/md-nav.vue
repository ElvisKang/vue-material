<template>
<nav>
      <div :class="[fixed?'navbar-fixed':'nav-wrapper']">
        <md-nav-logo :href="logo.href" :text="logo.text" :pos="logo.pos">
            <slot name="logo"></slot>
        </md-nav-logo>
       <slot name="nav-links"> </slot>
      </div>
</nav>
</template>

<script type="babel">
export default {
    data() {
        return {
            fixed:false,
            logo:{
                href:"#",
                pos:"left",
                text:"Logo"
            }
        }
    }
}
</script>
<template>
<nav>
      <div :class="[fixed?'navbar-fixed':'nav-wrapper']">
        <md-nav-logo >
            <slot name="logo"></slot>
        </md-nav-logo>
       <slot name="nav-links"> </slot>
      </div>
</nav>
</template>

<script type="babel">
import md-nav-link from './md-nav-link.vue';
export default {
    data() {
        return {
            fixed:false,
            navLinks:{
                items:[],
                pos:'right'
            }
            logo:{
                href:"#",
                pos:"left",
                text:"Logo"
            }
        }
    },
    methods:{
        isActive(item,index){
            return false
        }
    },
    components:{
        md-nav-link
    }
}
</script>
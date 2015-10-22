<template>
<ul :class="[pos,'hide-on-med-and-down']">
    <md-nav-li v-for="item in items" :href="item.href" :icon="item.icon"></md-nav-li>
    <slot></slot>
</ul>
</template>

<script type="babel">
import mdNavLi from './md-nav-li.vue';
export default {
    props:{
        items:{},
        pos:{
            type:String,
            default:"right"
        }
    },
    components:{
        'md-nav-li':mdNavLi
    }
}
</script>
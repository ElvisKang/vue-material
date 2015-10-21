<template>
<ul class="right">
    <md-nav-li v-for="item in items" :href="item.href" :icon="icon" :dropdown="item.dropdown"></md-nav-li>
</ul>
</template>

<script type="babel">
import mdNavLi from './md-nav-li.vue';
export default {
    data(){
        return {
        items:[],
        pos:"right"
        }
    },
    components:{
        'md-nav-li':mdNavLi
    }
}
</script>
<template>
<a v-if="href" :href="href" :class="header?'collection-header':'collection-item'">
    <slot></slot>
</a>
<li v-else  :class="header?'collection-header':'collection-item'">
    <slot></slot>
</li>
</template>

<script type="babel">
export default {
    props:{
        header:Boolean,
        href:String
    },
    created(){
        let parent = this.$parent
        if(!parent.withHeader && this.header === true) {
            parent.withHeader = true;
        }
        if(!parent.isLinks && this.href){
            parent.isLinks=true;
        }
    }
}
</script>
<template>
    <span v-show="count>0" :class="['badge',badge.new?'new':'']"  >{{count}}</span>
</template>

<script lang="babel">
export default {
    props:{
        badge:Object
    },
    computed:{
        count:()=>Math.trunc(this.badge.count)
    }
}
</script>
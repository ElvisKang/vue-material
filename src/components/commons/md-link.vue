<template>
<a href="{{link.href}}">
    {{link.text}}
    <md-badge :badge="badge"></md-badge>
</a>
</template>

<script type="babel">
import md-badge from './md-badge.vue';
export default {
        props : {
            link:Object,
            badge:Object
        },
        components : {
            md-badge
        }
}   
</script>
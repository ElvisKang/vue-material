<template>
<a href="{{link.href}}">
    {{link.text}}
    <md-badge :badge="badge"></md-badge>
</a>
</template>

<script type="babel">
import mdBadge from './md-badge.vue';
export default {
        props : {
            link:Object,
            badge:Object
        },
        components : {
            mdBadge
        }
}   
</script>
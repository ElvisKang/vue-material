<template>
    <ul  :class="['side-nav',fixed?'fixed':'']" :style="{width:width+'px'}">
        <slot></slot>
    </ul>
</template>

<script type="babel">
export default {
    props:{
        fixed:Boolean,
        width:{
            type:Number,
            default:240
        }
    }
}
</script>

<style>
    .side-nav.fixed li a {
        font-size: 13px;
        line-height: 44px;
        height: 44px;
    }     
</style>
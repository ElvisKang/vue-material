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
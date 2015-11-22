<template>
    <span :class="['badge',new?'new':'']"  >
        <slot></slot>
    </span>
</template>

<script type="babel">
export default {
    props:{
        new:Boolean,
        // count:Number
    }
}
</script>
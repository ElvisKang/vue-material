<template>
<span :class="['card-title',reveal?'activator':'']">
    <slot></slot>
    <slot name="icon"></slot>
</span>
</template>

<script type="babel">
export default {
    props:{
        reveal:Boolean
    }
}
</script>

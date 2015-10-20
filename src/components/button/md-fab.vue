<template>
<div class="fixed-action-btn" :style="pos">
    <slot name="main-icon"></slot>
    <slot name="sub-icons"></slot>
</div>
</template>

<script type="babel">
export default {
    props:{
        pos:Object
    }
}
</script>
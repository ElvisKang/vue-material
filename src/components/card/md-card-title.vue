<template>
<span class="card-title">
    {{title}}
    <slot name="icon"></slot>
</span>
</template>

<script type="babel">
export default {
    props:{
        title:String
    }
}
</script>

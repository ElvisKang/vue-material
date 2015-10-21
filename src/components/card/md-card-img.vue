<template>
<div class="card-image">
    <img :src="imgSrc" :alt="imgAlt" :class="{'activator':reveal}">
    <slot name="title"></slot>      
</div>
</template>

<script type="babel">
export default {
    props:{
        reveal:Boolean
    }
}
</script>
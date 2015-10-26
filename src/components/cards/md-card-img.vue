<template>
<div class="card-image">
    <img :src="imgSrc" :class="{'activator':reveal}">
    <slot name="title"></slot>      
</div>
</template>

<script type="babel">
import {hasImg} from '../mixins/common-mixin.js';
export default {
    props:{
        reveal:Boolean,
        imgSrc:String
    }
}
</script>
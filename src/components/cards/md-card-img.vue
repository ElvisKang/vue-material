<template>
<div class="card-image">
    <img :src="src" :class="{'activator':reveal}">
    <slot></slot>      
</div>
</template>

<script type="babel">
import {hasImg} from '../mixins/common-mixin.js';
export default {
    props:{
        reveal:Boolean,
        src:String
    }
}
</script>
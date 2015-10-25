<template>
    <div class="chip">
        <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt">
        <slot></slot>
        <i  v-if="tag" class="material-icons">close</i>
    </div>
</template>

<script type="babel">
import {hasImg} from '../mixins/common-mixin.js'
export default {
    props:{
        tag:Boolean
    }
}
</script>
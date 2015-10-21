<template>
    <div class="chip">
        <img :src="imgSrc" :alt="imgAlt">
        <img
        {{content}}
        <i  v-if="flat" class="material-icons">close</i>
    </div>
</template>

<script type="babel">
import {hasImg} from '../mixins/common-mixin.js'
export default {
    props:{
        flat:Boolean
    }
}
</script>
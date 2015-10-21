<template>
    <div class="chip">
        <img :src="imgSrc" :alt="imgAlt">
        {{text}}
        <i  v-if="tag" class="material-icons">close</i>
    </div>
</template>

<script type="babel">
import {hasImg} from '../mixins/common-mixin.js'
export default {
    props:{
        tag:{
            type:Boolean,
            default:true
        },
        text:String
    }
}
</script>
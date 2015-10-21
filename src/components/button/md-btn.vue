<template>
<a :class="[flat?'btn-flat':'btn']">
    <slot  v-if="!flat" name="icon">
        <md-icon   :icon-text="iconText" :icon-pos="iconPos"></md-icon>
    </slot>
    {{text}}
</a>
</template>

<script lang="babel">
import {btnIcon} from './mixin.js';
export default {
    mixins:[btnIcon],
    props:{
        flat:Boolean,
        text:String
    }
}
</script>
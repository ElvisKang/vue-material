<template>
<a :class="[flat?'btn-flat':'btn']">
    <slot  name="icon">
        <md-icon   v-if="!flat"  :text="iconText" :pos="iconPos"></md-icon>
    </slot>
    {{text}}
</a>
</template>

<script lang="babel">
import {btnIcon} from '../mixins/button-mixin.js';
export default {
    mixins:[btnIcon],
    props:{
        flat:Boolean,
        text:String
    }
}
</script>
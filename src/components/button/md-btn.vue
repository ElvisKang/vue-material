<template>
<a :class="[flat?'btn-flat':'btn',disabled?'disabled':'']">
    <slot  name="icon">
        <md-icon   v-if="!flat"  :text="iconText" :pos="iconPos"></md-icon>
    </slot>
    <slot></slot>
</a>
</template>

<script lang="babel">
import {btnIcon} from '../mixins/button-mixin.js';
export default {
    mixins:[btnIcon],
    props:{
            disabled:Boolean,
            iconPos:{
                type:String,
                default:"left"
            },
            flat:Boolean
        }
}
</script>
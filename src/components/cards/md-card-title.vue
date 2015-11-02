<template>
<span :class="{'card-title':true,'activator':reveal}">
    <slot></slot>
    <md-icon v-if="reveal" :text="" pos="right"></md-icon>
</span>
</template>

<script type="babel">
import {hasIcon} from '../mixins/common-mixin.js';
export default {
    mixins:[hasIcon],
    props:{
        reveal:Boolean
    }
}
</script>

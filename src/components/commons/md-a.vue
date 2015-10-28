<template>
<a>
    <md-icon v-if="iconText" :text="iconText" :pos="iconPos"></md-icon>
    <slot></slot>
</a>
</template>

<script type="babel">
import {hasIcon} from "../mixins/common-mixin.js";
export default {
    mixins:[hasIcon]
}
</script>
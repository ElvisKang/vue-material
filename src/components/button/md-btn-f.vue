<template>
    <a class="btn-floating">
        <md-icon   :text="iconText" :pos="iconPos"></md-icon>
    </a>
</template>
<script type="babel">
import {btnIcon} from './mixin.js';
export default {
    mixins:[btnIcon]
}
</script>
<template>
    <a :class="['btn-floating',disabled?'disabled':'']" >
        <md-icon   :text="iconText"</md-icon>
    </a>
</template>
<script type="babel">
import {btnIcon} from '../mixins/button-mixin.js';
export default {
    mixins:[btnIcon],
    props:{
        disabled:Boolean,
        iconText:{
            type:String,
            require:true
        }
    }
}
</script>
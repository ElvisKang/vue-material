<template>
<p class="range-field">
    <input  type="range" :step="step" :value="value" :min="min" :max="max" />
    <span class="thumb" style="left: 289.344px; height: 0px; width: 0px; top: 10px; margin-left: -6px;"><span class="value">38</span></span>
</p>
</template>

<script type="babel">
import {basicAttr,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,status],
    props:{
        min:{
            type:Number,
            default:0
        },
        max:{
            type:Number,
            default:0
        },
        step:{
            type:Number,
            default:1
        },
        value:Number
    }
}
</script>
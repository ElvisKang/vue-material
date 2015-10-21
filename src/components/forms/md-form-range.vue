<template>
<p class="range-field">
    <input  type="range" :step="step" :value="value" :min="min" :max="max" />
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
        }
        value:Number
    }
}
</script>
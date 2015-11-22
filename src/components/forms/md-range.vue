<template>
    <span>
        <input  @mouseup="mouseEvent" @mousedown="mouseEvent" @type="range" :step="step" :value="value" :min="min" :max="max" v-model="rangeValue"/>
        <span  v-show="showThumb" class="thumb" :style="thumbStyle" style="left: 289.344px; height: 0px; width: 0px; top: 10px; margin-left: -6px;"><span class="value">{{rangeValue}}</span></span>
    </span>
</template>

<script type="babel">
import {basicAttr,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,status],
    data(){
        return {
            showThumb:false,
            thumb:{

            }
        }
    },
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
    },
    methods:{
        mouseEvent(){
            this.showThumb=!this.showThumb;
        }
    }
}
</script>
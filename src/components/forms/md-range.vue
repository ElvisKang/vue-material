<template>
    <p class="range-field">
        <input v-el:input :id="id" v-model="mdValue" type="range" :step="step" :value="value" :min="min" :max="max" @change="showThumb=true" @click="showThumb=true" @mouseout="showThumb=false"/>
        <span  v-show="showThumb" :class="{thumb:true,active:showThumb}" :style="thumbStyle">
            <span class="value">{{mdValue}}</span>
        </span>
    </p>
</template>

<script type="babel">
import {basicAttr,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,status],
    data(){
        return {
            showThumb:false,
            thumbStyle:{
                left:"0px",
                width:'30px',
                height:'30px',
                top:'-20px',
                marginLeft:"-15px"
            }
        }
    },
    props:{
        id:String,
        min:{
            type:Number,
            default:0
        },
        max:{
            type:Number,
            default:100
        },
        step:{
            type:Number,
            default:1
        },
        value:Number
    },
    watch:{
        mdValue(value){
            let input = this.$els.input;
            let left= (value/(this.max-this.min)*input.clientWidth)+'px';
            this.$set('thumbStyle.left',left); 
        }
    }
}
</script>
<template>
<div class="switch">
    <label>
        <slot name="off">
        {{text[0]}}
        </slot>
        <input type="checkbox" v-model="mdValue" :false-value="value[0]" :true-value="value[1]" :checked="checked" :disabled="disabled" >
        <span class="lever"></span> 
        <slot name="on">
        {{text[1]}}
        </slot>
    </label>
</div>
</template>

<script type="babel">
import {basicAttr,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,status],
    props:{
        text:{
            type:Array,
            default(){
                return ['off','on'];
            }
        },
        value:Array
    },
    created(){
        if(this.text.length<2){
            this.text= ['off','on'];
        }
        if(!this.value){
            this.value=[false,true];
        }
    }
}
</script>
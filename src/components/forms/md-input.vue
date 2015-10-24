<template>
<div class="input-field">
        <slot name="icon">
            <md-icon :icon="icon"></md-icon>
        </slot>
        <input :id="id" :name="name" :value="value?value:''" :placeholder="placeholder" :type="type"  :class="{'validate':validate}" :disabled="disabled" :required="required" @focus="focus=true" @blur="focus=false">
        <label :for="id" :class="{'active':focus}"><slot></slot></label>
</div>
</template>

<script type="babel">
import {basicAttr,status,formIcon} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,formIcon,status],
    data(){
        return {
            focus:false
        }
    },
    props:{
        type:{
            type:String,
            default:"text"
        },
        validate:Boolean,
        value:{
                type:String
        }
    },
    computed:{
        labelActive(){

        }
    },
    ready(){
        console.log(this.value);
    },
    watch:{
        value(){
            console.log(this.value);
        }
    }
}
</script>
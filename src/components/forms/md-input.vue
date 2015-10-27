<template>
<div class="input-field">
        <md-icon v-if="iconText" :class="{'active':focus}" :text="iconText" :pos="iconPos"></md-icon>
        <input v-model="mdValue" :id="id" v-el:input :name="name" :value="value" :placeholder="placeholder" :type="type" :disabled="disabled" :required="required" @focus="focus=true" @blur="focus=false" lazy>
        <label :for="id" :class="{'active':labelActive}"><slot></slot></label>
</div>
</template>

<script type="babel">
import {basicAttr,status,formIcon,actLabel} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,formIcon,status,actLabel],
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
        validate:Boolean
    },
}
</script>
<template>
<div class="input-field">
    <select :id="id" :class="{'browser-default':browserDefault}" :required="required" :disabled="disabled">
      <option :value="defaultValue" disabled selected>{{title}}</option>
      <option v-for="option in options" :value="option.value">{{option.text}}</option>
    </select>
    <label :for="id">{{label}}</label>
</div>    
</template>

<script type="babel">
import {basicAttr,status} from '../mixins/form-mixin.js';
export  default {
    mixins:[basicAttr,status],
    props:{
        defaultValue:{
            type:String,
            default:""
        },
        browserDefault:Boolean,
        options:Object,
        title:String
    }
}
</script>
<template>
    <select :id="id" :class="{'browser-default':browserDefault}" :required="required" :disabled="disabled">
      <option :value="defaultValue" disabled selected>{{title}}</option>
      <option v-for="option in options" :value="option.value">{{option.text}}</option>
    </select>
    <label :for="id">{{label}}</label>    
</template>

<script type="babel">
import {basic} from './mixin.js';
export  default {
    mixins:[basic],
    props:{
        defaultValue:{
            type:String,
            default:""
        }
        browserDefault:Boolean,
        options:Object,
        title:String
    }
}
</script>
<template>
<div class="switch">
    <label>
        <slot name="off">
        {{off}}
        </slot>
        <input type="checkbox" v-mobel="mdValue" :false-value="off" :true-value="on" :checked="checked" :disabled="disabled" >
        <span class="lever"></span> 
        <slot name="on">
        {{on}}
        </slot>
    </label>
</div>
</template>

<script type="babel">
import {basicAttr,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,status],
    props:{
        off:{
            type:String,
            default:"off"
        },
        on:{
            type:String,
            default:"on"
        }
    }
}
</script>
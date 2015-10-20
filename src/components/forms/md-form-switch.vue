<template>
<div class="switch">
    <label>
        {{offText}}
        <input type="checkbox" :id="id" :name="name" :value="value" :checked="checked" :disabled="disabled" >
        <span class="lever"></span> 
        {{onText}}
    </label>
</div>
</template>

<script type="babel">
import {basic} from './mixin.js';
export default {
    mixins:[basic],
    props:{
        offText:{
            type:String,
            default:"off"
        },
        onText:{
            type:String,
            default:"on"
        }
    }
}
</script>
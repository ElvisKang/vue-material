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
import {basicAttr,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,status],
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
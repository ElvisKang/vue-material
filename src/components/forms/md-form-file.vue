<template>
<div class="file-field input-field">
    <div class="btn">
        <span>{{btnText}}</span>
        <input  type="file" :multiple="multiple">
    </div>
    <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
    </div>
</div>
</template>

<script type="babel">
import {basic} from './mixin.js';
export default {
    mixins:[basic],
    porps:{
        multiple:Boolean,
        btnText:{
            type:String,
            default:"File"
        }
    }
}
</script>
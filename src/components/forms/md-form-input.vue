<template>
<div class="input-field">
        <slot name="icon">
            <md-icon :icon="icon"></md-icon>
        </slot>
        <input :id="id" :name="name" :value="value" :placeholder="placeholder" :type="type"  :class="{'validate':validate}" :disabled="disabled" :required="required">
        <label :for="id">{{label}}</label>
</div>
</template>

<script type="babel">
import {basicAttr,status,formIcon} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,formIcon,status],
    props:{
        type:{
            type:String,
            default:"text"
        },
        validate:Boolean
    }
}
</script>
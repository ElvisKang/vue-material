<template>
<div class="input-field ">
    <slot name="icon">
        <md-icon :icon="icon"></md-icon>
    </slot>
    <textarea :id="id" :name="name" value="value" class="materialize-textarea" :disabled="disabled"></textarea>
    <label :for="id">{{label}}</label>
</div>
</template>

<script type="babel">
import {basicAttr,formIcon,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,formIcon,status]
}
</script>
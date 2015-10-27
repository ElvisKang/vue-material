<template>
    <input :class="{'with-gap':gap}" :checked="checked" :value="value" :name="name" type="radio" :id="id" :disabled="disabled" />
    <label :for="id"><slot></slot></label>
</template>

<script>
import {basicAttr,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,status],
    props:{
        gap:Boolean
    }
}
</script>
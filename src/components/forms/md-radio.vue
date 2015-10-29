<template>
<span>
    <input type="radio" v-model="mdValue" :class="{'with-gap':gap}" :value="value" :name="name" :id="id" :checked="checked" :disabled="disabled"/>
    <label :for="id"><slot></slot></label>
</span>
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
<template>
    <input :class="{'with-gap':gap}" :name="name" type="radio" :id="id" :disable="disable" />
    <label :for="id">{{label}}</label>
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
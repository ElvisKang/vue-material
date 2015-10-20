<template>
    <input :class="{'with-gap':gap}" :name="name" type="radio" :id="id" :disable="disable" />
    <label :for="id">{{label}}</label>
</template>

<script>
import {basic} from './mixin.js';
export default {
    mixins:[basic],
    props:{
        gap:Boolean
    }
}
</script>
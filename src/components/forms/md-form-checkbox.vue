<template>
      <input type="checkbox" :id="id" :class="{'filled-in':filledIn}" :name="name" :checked="checked" :disabled="disabled" />
      <label :for="id">{{label}}</label>
</template>

<script type="babel">
import {basic} from './mixin.js';
export default {
    mixins:[basic],
    props: {
            filledIn:Boolean,
            checked:Boolean
        }
}
</script>

<template>
      <input type="checkbox" :id="id" :class="{'filled-in':filled}" :name="name" :checked="checked" :disabled="disabled" />
      <label :for="id"><slot></slot></label>
</template>

<script type="babel">
import {basicAttr,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,status],
    props: {
            filled:Boolean,
        }
}
</script>

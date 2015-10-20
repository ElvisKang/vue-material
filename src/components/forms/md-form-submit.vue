<template>
  <button class="btn" type="submit" :name="name" :disabled="disabled">{{btnText}}
    <i class="material-icons right">send</i>
  </button>
</template>

<script lang="babel">
import {basic} from './mixin.js';
export default {
    mixins:[basic],
    props:{
        btnText:{
          type:String,
          default:"Submit"
        }
    }
}
</script>
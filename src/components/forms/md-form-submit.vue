<template>
  <button class="btn" type="submit" :name="name" :disabled="disabled">{{btnText}}
    <i class="material-icons right">send</i>
  </button>
</template>

<script lang="babel">
import {basicAttr,status} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,status],
    props:{
        btnText:{
          type:String,
          default:"Submit"
        }
    }
}
</script>
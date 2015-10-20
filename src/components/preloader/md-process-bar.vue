<template>
 <div class="progress">
      <div :class="type" :style="{width:percentage+'%'}"></div>
  </div>
</template>

<script type="babel">
export default {
    props:{
        percentage:{
            type:Number,
            default:0
        }
    },
    computed:{
        type:()=>this.percentage>=0?"determinate":"indeterminate"
    }
}
</script>
<template>
 <div class="progress">
      <div :class="[indeterminate?'indeterminate':'determinate']" :style="{width:widthValue}"></div>
  </div>
</template>

<script type="babel">
export default {
    props:{
        percent:{
            type:Number,
            default:0
        },
        indeterminate:Boolean
    },
    computed:{
        widthValue(){
            if(!indeterminate){
                return this.percent+"%";
             }
        }
    }
}
</script>
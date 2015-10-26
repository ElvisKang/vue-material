<template>
 <div class="progress">
      <div :class="[widthValue?'determinate':'indeterminate',barColor]" :style="{width:widthValue}"></div>
  </div>
</template>

<script type="babel">
export default {
    props:{
        barColor:String,
        percent:Number
    },
    computed:{
        widthValue(){
             if(this.percent>=0){
                return this.percent<100?`${this.percent}%`:"100%";
             }else {
                return "";
             }
        }
    }
}
</script>
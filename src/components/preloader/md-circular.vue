<template>
<div class="preloader-wrapper active">
        <md-circular-item v-for="color in colors" :color="color"></md-circular-item>
  </div>
</template>

<script type="babel">
import mdCircularItem from './md-circular-item.vue';
export default {
    props:['colors'],
    created(){
        let colors = this.colors;
        if(colors == undefined ){
            this.colors = [""];
            return;
        }
        if(typeof colors === "string") {
            colors = colors.split(' ');
        }
        if(colors.length === 1){
            this.colors=[`spinner-${colors[0]}-only`]
        }else {
            this.colors=colors.map((v)=>`spinner-${v}`)
        }
    },
    components:{
        'md-circular-item':mdCircularItem
    }
}
</script>
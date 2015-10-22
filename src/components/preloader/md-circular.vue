<template>
<div :class="['preloader-wrapper','active']">
        <md-circular-item v-for="color in colorsArr" :color="color"></md-circular-item>
  </div>
</template>

<script type="babel">
import mdCircularItem from './md-circular-item.vue';
export default {
    props:['colors'],
    methods:{
        toggleActive(){
            this.active = !this.active;
        }
    },
    computed:{
        colorsArr(){
            let colors = this.colors;
            let result=null;
            if(typeof colors === "string"){
                colors=colors.split(" ");
            }
            if(colors.length === 1){
                result=[`spinner-${colors[0]}-only`];
            }else {
                result= colors.map((v)=>`spinner-${v}`);
            }
            return result;
        }
    },
    components:{
        'md-circular-item':mdCircularItem
    }
}
</script>
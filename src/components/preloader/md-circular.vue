<template>
<div :class="['preloader-wrapper',size,'active']">
        <md-circular-item v-for="color in colorsArr" :color="color"></md-circular-item>
  </div>
</template>

<script type="babel">
import md-circular-item from './md-circular-item.vue';
export default {
    data(){
        return {
            size:"",
            colors:[]
        }
    },
    methods:{
        toggleActive(){
            this.active = !this.active;
        }
    },
    computed:{
        colorsArr(){
            let colors = this.colors;
            let result;
            if(colors.length === 1){
                result=[`spinner-${colors[0]}-only`];
            }else {
                result= colors.map((v)=>`spinner-${v}`);
            }
            return result;
        }
    },
    components:{
        md-circular-item
    }
}
</script>
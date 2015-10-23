<template>
<div :class="['fixed-action-btn']" :style="pos">
    <md-btn-f @mouseover="mouseEvent" @mouseout="mouseEvent" ></md-btn-f>
    <ul  v-show="hover">
        <slot></slot>
    </ul>
</div>
</template>

<script type="babel">
export default {
    data(){
        return {
            hover:false
        }
    },
    props:{
        pos:Object,
        mainText:String
    },
    methods:{
        mouseEvent(){
            this.hover = !this.hover;
        }
    }
}
</script>
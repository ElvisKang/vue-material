<template>
<div :class="{'fixed-action-btn':true,'active':hover}" :style="pos">
    <md-btn-f :class="mainBtn.class"  :icon-text="mainBtn.text" @mouseover="mouseEvent" @mouseout="mouseEvent" ></md-btn-f>
    <ul v-show="hover">
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
        mainBtn:Object
    },
    methods:{
        mouseEvent(){
            this.hover = !this.hover;
        }
    }
}
</script>

<style>
.fixed-action-btn.active>ul a {
    opacity: 1;
}
</style>
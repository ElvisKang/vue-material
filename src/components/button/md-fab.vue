<template>
<div :class="{'fixed-action-btn':true,'active':hover}" @mouseover="mouseEvent" @mouseout="mouseEvent">
    <slot name="main"></slot>
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
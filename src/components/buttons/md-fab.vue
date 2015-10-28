<template>
<div :class="{'fixed-action-btn':true,'active':hover}" @mouseover="mouseEvent" @mouseout="mouseEvent">
    <slot name="main"></slot>
    <ul v-el:ul v-show="hover">
        <slot></slot>
    </ul>
</div>
</template>

<script type="babel">
import wrap from '../utils/wrap-children.js';
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
    },
    ready(){
        //wrap sub_buttons with li tag
        let ul = this.$els.ul;
        wrap(ul,"li");
    },
}
</script>

<style>
.fixed-action-btn.active>ul button {
    opacity: 1;
}
</style>
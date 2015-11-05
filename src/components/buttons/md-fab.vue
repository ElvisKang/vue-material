<template>
<div :class="{'fixed-action-btn':true,'active':hover}" @mouseover="mouseEvent" @mouseout="mouseEvent">
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
        let ul = this.$els.ul;
        this.$el.insertBefore(ul.children[0],ul);
        wrap(ul,"li");
    },
}
</script>

<style>
.fixed-action-btn.active>ul a {
    opacity: 1;
}
</style>
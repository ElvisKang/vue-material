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
    },
    ready(){
        //wrap sub_buttons with li tag
        let ul = this.$el.children[1];
        let len = ul.children.length;
        for(let i=0; i<len;i++) {
            let li = document.createElement("li");
            li.appendChild(ul.firstChild);
            ul.appendChild(li);
        }
    },
}
</script>

<style>
.fixed-action-btn.active>ul a {
    opacity: 1;
}
</style>
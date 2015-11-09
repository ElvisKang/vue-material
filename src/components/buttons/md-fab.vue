<template>
<div v-el:container :class="{'fixed-action-btn':true,'active':showSubs,'horizontal':horizontal}">
    <ul v-el:ul v-show="showSubs">
        <slot></slot>
    </ul>
</div>
</template>

<script type="babel">
import wrap from '../utils/wrap-children.js';
export default {
    data(){
        return {
            showSubs:false,
            mainBtn:null
        }
    },
    props:{
        clickOnly:Boolean,
        horizontal:Boolean
    },
    methods:{
        toggleSubs(){
            this.showSubs = !this.showSubs;
        },
        bindEvent(isClick){
            this.showSubs=false;
            this.unbindEvent();
            if(isClick){
                this.mainBtn.addEventListener('click',this.toggleSubs);
            }else{
                this.$els.container.addEventListener('mouseover',this.toggleSubs);
                this.$els.container.addEventListener('mouseout',this.toggleSubs);
            }
        },
        unbindEvent(){
            this.mainBtn.removeEventListener('click',this.toggleSubs);
            this.$els.container.removeEventListener('mouseover',this.toggleSubs);
            this.$els.container.removeEventListener('mouseout',this.toggleSubs);
        }
    },
    watch:{
        clickOnly(v){
            this.bindEvent(v);
        }
    },
    ready(){
        let ul = this.$els.ul;
        this.mainBtn = ul.children[0];
        this.$el.insertBefore(this.mainBtn,ul);
        wrap(ul,"li");

        this.bindEvent(this.clickOnly);
    },
    beforeDestroy(){
        this.unbindEvent();
    }
}
</script>

<style>
.fixed-action-btn.active>ul a {
    opacity: 1;
}
</style>
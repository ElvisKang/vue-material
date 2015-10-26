<template>
    <a :class="[type,disabled?'disabled':'']">
        <md-icon   v-if="!flat"  :text="iconText" :pos="iconPos"></md-icon>
        <slot></slot>
    </a>
    </template>
</template>

<script lang="babel">
import {btnIcon} from '../mixins/button-mixin.js';
export default {
    mixins:[btnIcon],
    props:{
            disabled:Boolean,
            flat:Boolean,
            float:Boolean
        },
    computed:{
        type(){
            if(this.float){
                return 'btn-floating';
            }else if(this.flat){
                return 'btn-flat';
            }else {
                return 'btn'
            }
        }
    }
}
</script>
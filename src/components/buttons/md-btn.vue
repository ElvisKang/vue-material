<template>
    <a :class="[btnType,disabled?'disabled':'',large?'btn-large':'']">
       <slot name="icon">
            <md-icon   v-if="(!flat && iconText)"  :text="iconText" :pos="iconPos"></md-icon>
       </slot> 
        <slot>
            {{label}}
        </slot>
    </a>
</template>

<script lang="babel">
import {hasIcon} from '../mixins/common-mixin.js';
export default {
    mixins:[hasIcon],
    props:{
            label:{
                type:String,
                default:'Button'
            },
            large:Boolean,
            disabled:Boolean,
            type:String
        },
    computed:{
        btnType(){
           switch(this.type){
                case 'floating' :
                    return 'btn-floating';
                case 'flat' :
                    return 'btn-flat';
                default :
                    return 'btn'
           }
        }
    }
}
</script>
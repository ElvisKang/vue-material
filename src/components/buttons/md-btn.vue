<template>
    <button :class="[type,disabled?'disabled':'']">
        <md-icon   v-if="(!flat && iconText)"  :text="iconText" :pos="iconPos"></md-icon>
        <slot>
            {{btnText}}
        </slot>
    </button>
    </template>
</template>

<script lang="babel">
import {btnIcon} from '../mixins/button-mixin.js';
export default {
    mixins:[btnIcon],
    props:{
            btnText:{
                type:String,
                default:'Button'
            },
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
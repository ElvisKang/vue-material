<template>
    <ul :class="[pos]">
        <slot></slot> 
    </ul>      
</template>
<script type="babel">
import {wrapChildren} from '../../utils/';
export default {
    props:{
        pos:{
            type:String,
            default:"right"
        }
    },
    ready(){
        wrapChildren(this.$el,"li");
    }
}
</script>
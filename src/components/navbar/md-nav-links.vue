<template>
    <ul :class="[pos]">
        <slot></slot> 
    </ul>      
</template>
<script type="babel">
import wrap from '../utils/wrap-children.js';
export default {
    props:{
        pos:{
            type:String,
            default:"right"
        }
    },
    ready(){
        wrap(this.$el,"li");
    }
}
</script>
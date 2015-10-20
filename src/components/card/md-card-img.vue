<template>
<div class="card-image">
    <md-img :img="img" :class="{'activator':isReveal}"></md-img>
    <slot name="title"></slot>      
</div>
</template>

<script type="babel">
import {md-img} from '../commons/index.js';
export default {
    props:{
        img:Object,
        isReveal:{
            type:Boolean,
            default:false
        }
    },
    components:{
        md-img
    }
}
</script>
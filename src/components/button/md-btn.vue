<template>
<a :class="[isFlat?'btn-flat':'btn']">
    <slot  v-if="!isFlat" name="icon">
        <md-icon   :icon="icon"></md-icon>
    </slot>
    {{text}}
</a>
</template>

<script lang="babel">
import {md-icon} from '../commons/index.js';
export default {
    data(){
        return {
            text:"Button",
            icon:null,
            isFlat:false        
        }
    },
    components:{
        md-icon
    }
}
</script>
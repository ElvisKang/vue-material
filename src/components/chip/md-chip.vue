<template>
    <div class="chip">
        <md-img :img="img"></md-img>
        {{content}}
        <i  v-if="isFlag" class="material-icons">close</i>
    </div>
</template>

<script type="babel">
import {md-img} from '../commons/index.js';
export default {
    data(){
        return {
            img:null,
            content:"",
            isFlag:false
        }
    },
    components:{
        md-img
    }
}
</script>
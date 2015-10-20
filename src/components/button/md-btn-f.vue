<template>
    <a class="btn-floating">
        <mg-icon :icon="icon"></mg-icon>
    </a>
</template>
<script type="babel">
import {md-icon} from '../commons/index.js';
export default {
    data(){
        return {
            icon:null
        }
    },
    components:{
        md-icon
    }
}
</script>
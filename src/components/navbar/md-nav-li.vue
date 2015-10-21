<template>
<li>
    <a :href="item.href">
        <md-icon v-if="item.icon" :text="item.icon.text" :pos="item.icon.pos"></md-icon>
        {{item.text}}
    </a>
</li>
</template>

<script type="babel">
import {mdIcon} from "../commons/index.js";
export default {
    props:{
        //can't work now
        dropdown:{
            type:Boolean,
            default:false
        },
        item:Object
    }
    components:{
        'md-icon':mdIcon
    }
}
</script>
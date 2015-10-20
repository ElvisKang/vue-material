<template>
<li>
    <a :href="item.href">
        <slot name="icon">
            <md-icon  :icon="item.icon"></md-icon>
        </slot>
        {{item.text}}
    </a>
</li>
</template>

<script type="babel">
import {md-icon} from "../commons/index.js";
export default {
    
    components:{
        md-icon
    }
}
</script>
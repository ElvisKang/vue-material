<template>
<div class="card-content">  
    <slot name="title"></slot>
    <slot name="content">
                <p>{{content}}</p>
    </slot>
</div>
</template>

<script type="babel">
import md-card-title from './md-card-title.vue';
export default {
    props:{
        content:String
    }
}
</script>

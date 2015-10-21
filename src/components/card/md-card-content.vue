<template>
<div class="card-content">  
    <slot name="title"></slot>
    <p>{{content}}</p>
</div>
</template>

<script type="babel">
import mdCard from './md-card-'
export default {
    props:{
        content:String
    }
}
</script>

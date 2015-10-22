<template>
<div class="card-content">  
    <slot name="title"></slot>
    <p>{{content}}</p>
</div>
</template>

<script type="babel">
export default {
    props:{
        content:String
    }
}
</script>

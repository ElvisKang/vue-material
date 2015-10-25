<template>
    <h2 class="doc-title" ><slot></slot></h2>
</template>

<script type="babel">
export default {
    props:{
        color:String
    }
}
</script>

<style>
    .doc-title {
        font-weight: 300;
        color:#41b883;
    }
</style>
<template>
    <h2 class="doc-header" :><slot></slot></h2>
</template>

<script type="babel">
export default {
    props:{
        color:String
    }
}
</script>

<style>
    .doc-header {
        font-weight: 300;
    }
</style>
<template>
    <i :class="['material-icons',pos]">{{text}}</i>
</template>

<script type="babel">
export default {
    props: {
        text:String,
        pos:String
    }
}
</script>
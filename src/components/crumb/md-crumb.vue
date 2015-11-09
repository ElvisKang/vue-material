<template>
<a class="breadcrumb">
    <slot>
        {{text}}
    </slot>
</a>
</template>

<script type="babel">
    export default {
        props:{
            text:String
        }
    }
</script>
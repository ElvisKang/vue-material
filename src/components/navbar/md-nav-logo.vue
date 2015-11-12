<template>
<a :class="['brand-logo',pos]">
    <slot>
    </slot>
</a>
</template>

<script type="babel">
    export default {
        props:{
            pos:{
                type:String,
                default:"left"
            }
        }
    }
</script>
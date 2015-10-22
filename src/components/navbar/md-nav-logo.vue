<template>
<a :href="href" :class="['brand-logo',pos]">
    <slot name="logo-cus">
        {{text}}
    </slot>
</a>
</template>

<script >
export default {
    props : {
        href:String,
        text:String,
        pos:String
    }
}
</script>
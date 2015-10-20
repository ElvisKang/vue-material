<template>
<a :href="logo.href" :class="['brand-logo',logo.pos]">
    <slot name="logo">
        {{logo.text}}
    </slot>
</a>
</template>

<script >
export default {
    props : {
        logo:Object
    }
}
</script>
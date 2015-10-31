<template>
<div class="card-action">
    <slot>
        <a v-for="link in links"  :href="link.href">{{link.text}}</a>
    </slot>
</div>
</template>

<script type="babel">
export default {
    props:{
        links:Array
    }
}
</script>

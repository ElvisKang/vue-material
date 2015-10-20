<template>
<div class="card-action">
    <a v-for="link in links" :href="link.href">{{link.text}}</a>
</div>
</template>

<script type="babel">
export default {
    props:{
        links:Array
    }
}
</script>

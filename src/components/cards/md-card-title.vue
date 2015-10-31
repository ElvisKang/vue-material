<template>
<span :class="{'card-title':true,'activator':reveal}">
    <slot></slot>
    <i  v-if="reveal"  slot="icon" class="material-icons right">more_vert</i>
</span>
</template>

<script type="babel">
export default {
    props:{
        reveal:Boolean
    }
}
</script>

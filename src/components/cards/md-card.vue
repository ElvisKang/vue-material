<template>
    <div :class="panel?'card-panel':'card'">
        <slot></slot>
    </div>
</template>

<script type="babel">
    export default {
        props:{
            panel:Boolean
        }
    }
</script>
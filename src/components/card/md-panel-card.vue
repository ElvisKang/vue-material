<template>
<div class="card-panel">
    <span :class="options.class">
        <slot>
                {{options.text}}
        </slot>
    </span>
</div>
</template>

<script type="babel">
export default {
    props:{
        options:Object
    }
}
</script>
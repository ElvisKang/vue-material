<template>
<div>
    <slot name="title">
        <h5 :class="[options.titleClass]">{{options.title}}</h5>
    </slot>
    <slot name="text">
        <p  :class="[options.textClass]">
                {{options.text}}
        </p>
    </slot>
    <slot></slot>
</div>
</template>
<script type="babel">
export default {
        props:{
            options:Object
        }
    }
</script>
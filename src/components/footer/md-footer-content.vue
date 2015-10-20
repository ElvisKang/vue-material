<template>
    <slot name="title"></slot>
    <p class="grey-text text-lighten-4">{{content.text}}</p>
</template>
<script type="babel">
export default {
    props:{
        content:{
            type:Object,
            default(){
                return {
                    title:"Footer Title",
                    text:"Footer Content"
                }
            }
        }
    }
}
</script>
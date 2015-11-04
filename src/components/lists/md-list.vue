<template>
<div v-if="isLinks" :class="{'collection':true,'with-header':withHeader}">
    <slot></slot>
</div>
<ul v-else  :class="{'collection':true,'with-header':withHeader}">
<slot></slot>
</ul>
</template>

<script type="babel">
export default {
    data(){
        return {
            withHeader:false,
            isLinks:false
        }
    }
}
</script>
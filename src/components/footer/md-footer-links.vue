<template>
    <slot name="title"></slot>
    <ul>
        <li v-for="link in linkList">
            <a :href="link.href">
                {{link.text}}
            </a>
        </li>
    </ul>
</template>

<script type="babel">
export default {
     props:{
          linkList:Object
     }
}
</script>
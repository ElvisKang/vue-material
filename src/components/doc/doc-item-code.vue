<template>
<pre>
    <code :class="'language-'+lang">
        <slot></slot>
    </code>
</pre>
</template>

<script>
export default {
    props:{
        lang:String,
        code:String
    }
}
</script>
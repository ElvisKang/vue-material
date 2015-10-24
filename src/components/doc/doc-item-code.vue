<template>
<pre>
    <code :class="lang">
        <slot></slot>
    </code>
</pre>
</template>

<script>
export default {
    props:{
        lang:String,
        code:String
    },
    created(){
        this.lang=`language-${this.lang}`;
    }
}
</script>
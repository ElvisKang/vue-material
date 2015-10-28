<template>
<nav class="doc-toc">
      <h1><slot name="title">Contents</slot></h1>
      <ul>
        <slot></slot>
     </ul>
    </nav>
</template>

<script type="babel">
    export default {

    }
</script>

<style>
    .doc-toc{
        border-left-color:#41B883;
    }
    .doc-toc h1 {
    font-size: 15px;
    line-height: 16px;
    padding-bottom: 12px;
    font-weight: 400;
    color: #35495E;
    }

    .doc-toc li {
    font-size: 20px;
    line-height: 40px;
    }
    .doc-toc a {
        color:#35495E;
    }
</style>
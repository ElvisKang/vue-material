<template>
    <footer class="page-footer">
        <div class="container">
            <div v-el:row class="row">
                <slot></slot>
            </div>
        </div>
        <slot name="copyright"></slot>
    </footer>
</template>
<script type="babel">
export default {

}   
</script>
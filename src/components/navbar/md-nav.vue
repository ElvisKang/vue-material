<template>
<nav>
    <div class="nav-wrapper">
        <slot></slot>
    </div>
</nav>
</template>

<script type="babel">
export default {
    props:{
        fixed:Boolean
    },
    ready(){
        if(this.fixed){
            let el = this.$el
            let parentNode = el.parentNode;
            let div=document.createElement("div");
            div.className="navbar-fixed";
            parentNode.insertBefore(div,el)
            div.appendChild(el);
        }
    }
}
</script>

<style>
    .brand-logo.left {
        left:0.5rem;
    }
</style>
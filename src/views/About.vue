<template>
<header>
    <md-nav>
        <md-nav-logo href="#!/about" pos="center">About</md-nav-logo>
    </md-nav>
</header>    
<div class="container">
<article id="about">
    <section id="logo" class="center" >
        <a v-link="{path:'/about'}">
            <object data="static/images/logo.svg" type="image/svg+xml" width="400px"></object>
        </a>
    </section>
    <section id="introduce">
        <h2>Introduction</h2>
        <p>
            Vue-Material intends to build <a href="http://materializecss.com/">Materialize(0.97.2+)</a> with pure <a href="http://vuejs.org/">Vue.js(1.0.0+)</a> ,which let users get rid of depending on 3rd Javascript libraries ,such as Materialize.js and Jquery.js(with plugins). 
        </p>
    </section>
        <section id="status">
        <h2>Status</h2>
        <p>
            Still Under Building....
        </p>
    </section>
    </section>
    <section id="declaration">
    <h2>Declaration</h2>
    <p>
        This project doesn't  belong to  Materialize. I'd like to thank Alan Chang for permitting me to use their Logo for this project. :)
    </p>
</section>
</article>
</div>
</template>

<script lang="babel">
export default {

}
</script>
<style>
    #about>section p {
        font-size: 1.25rem;
    }
    #logo {
        margin-top: 20px;
    }
</style>
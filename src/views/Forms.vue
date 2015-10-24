<template>
<header>
    <md-nav class="doc-nav" :logo="logo" nolink>
    </md-nav>
</header>    
<div class="container">
<article>
    <section>
                <doc-item-title>Input</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <div class="col s12 l6">
                    <md-input v-model="username" name="text" id="text-input" placeholder="Username">Username</md-input>
                    {{username}}
                </div>
            </div>
        </doc-item-demo>
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    export default {
        mixins:[docView,hasCode],
        data(){
            return {
                logo:{
                    href:"#!/forms",
                    text:"Forms",
                    pos:"center"
                }
            }
        }
    }
</script>
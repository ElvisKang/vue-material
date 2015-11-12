<template>
<header>
    <md-nav>
        <md-nav-logo href="#!/breadcrumbs" pos="center">Breadcrumbs</md-nav-logo>
    </md-nav>
</header>    
<div class="container">
<article id="breadcrumbs">
    <section>
        <doc-item-title>Basic</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <md-nav>
                    <div class="col s12">
                        <md-crumb href="#!/breadcrumbs">First</md-crumb>
                        <md-crumb href="#!/breadcrumbs">Second</md-crumb>
                        <md-crumb href="#!/breadcrumbs">Third</md-crumb>
                    </div>
                </md-nav>
            </div> 
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.basic}}
        </doc-item-code>
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from "../codes/Breadcrumbs.js";
    export default {
        mixins:[docView,hasCode],
        data(){
            return {    
                codes
            }
        }
    }
</script>
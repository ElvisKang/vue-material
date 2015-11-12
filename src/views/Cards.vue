<template>
<header>
    <md-nav>
        <md-nav-logo href="#!/cards" pos="center">Cards</md-nav-logo>
    </md-nav>
</header>    
<div class="container">
<article id="cards">
    <section>
        <doc-item-title>Basic</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <div class="col s12 l6">
                    <md-card class="blue-grey darken-1">
                        <md-card-content class=" white-text">
                            <md-card-title>Title</md-card-title>
                            <p>I am good at containing small bits of information.</p>
                        </md-card-content>
                        <md-card-action>
                            <a href="#!/cards">Link</a>
                        </md-card-action>
                    </md-card>
                </div>
            </div>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.basic}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Image</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <div class="col s12 l6">
                <md-card>
                    <md-card-img src="static/images/doc/image_card.jpg">
                        <md-card-title>Image Title</md-card-title>
                    </md-card-img>
                    <md-card-content>
                        <md-card-title class="black-text">Content Title</md-card-title>
                        <p>I am good at containing small bits of information.</p>
                    </md-card-content>
                    <md-card-action>
                        <a href="#!/cards">Link</a>
                    </md-card-action>
                </md-card>
                </div>
            </div>            
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.img}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Panel</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <div class="col s12 l6">
                <md-card panel class="teal">
                    <span>I am good at containing small bits of information.</span>
                </md-card>
                </div>
            </div>
        </doc-item-demo>         
        <doc-item-code lang="markup">
            {{codes.panel}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Reveal(incomplete)</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <div class="col s12 l6">
                    <md-card>
                        <md-card-content>
                            <md-card-title reveal class="black-text" icon-text="more_vert">Title</md-card-title>
                            <p>I am good at containing small bits of information.</p>
                        </md-card-content>
                        <md-card-reveal>
                            <md-card-title reveal icon-text="close">Reveal Title</md-card-title>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </md-card-reveal>
                    </md-card>
                </div>
                <div class="col s12 l6">
                    <md-card>
                        <md-card-img src="static/images/doc/image_card.jpg">
                        </md-card-img>
                        <md-card-content>
                            <md-card-title reveal class="black-text" icon-text="more_vert">Content Title</md-card-title>
                            <p>I am good at containing small bits of information.</p>
                        </md-card-content>
                        <md-card-reveal>
                            <md-card-title reveal icon-text="close">Reveal Title</md-card-title>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </md-card-reveal>
                    </md-card>
                </div>
            </div>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.reveal}}
        </doc-item-code>
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from '../codes/Cards.js';
    export default {
        mixins:[docView,hasCode],
        data(){
            return {
                options:{
                    basic:{
                        title:{
                            text:"Basic Card Title",
                            class:"black-text"
                        },
                        content:{
                            class:"black-text",
                            text:"I am good at containing small bits of information. "
                        },
                        links:[{href:'#!/card',text:'Card'}]
                    },
                    image:{
                        imgSrc:"static/images/doc/image_card.jpg",
                        links:[{href:'#!/card',text:'Card'}],
                        title:{
                            class:"grey-text lighten-3",
                            text:"Image Card"
                        },
                         content:{
                            text:"I am good at containing small bits of information. "
                        }                       
                    },
                    panel:{
                        text:"I am good at containing small bits of information.",
                        class:"white-text"
                    },
                    reveal:{
                        title:{
                            text:"Card Reveal Title",
                        },
                        content:{
                            text:"Here is some more information about this product that is only revealed once clicked on."
                        }
                    }

                },
                codes
            }
        }
    }
</script>
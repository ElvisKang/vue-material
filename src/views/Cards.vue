<template>
<header>
    <md-nav  :logo="logo" no-link>
    </md-nav>
</header>    
<div class="container">
<article id="navbar">
    <section>
        <doc-item-title>Basic</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <div class="col s12 l6">       
                <md-basic-card :options="options.basic" class="blue-grey"></md-basic-card>
                </div>
            </div>
        </doc-item-demo>
    </section>
        <doc-item-title>Image</doc-item-title>
        <doc-item-demo>
        <div class="row">
            <div class="col s12 l6">
                <md-image-card :options="options.image"></md-image-card>
            </div>
        </div>            
        </doc-item-demo>
        <!-- <doc-item-code></doc-item-code> -->
    <section>
        <doc-item-title>Panel</doc-item-title>
        <doc-item-demo>
        <div class="row">
            <div class="col s12 l6">
            <md-panel-card :options="options.panel" class="teal"></md-panel-card>
            </div>
        </div>
        </doc-item-demo>         
        <!-- <doc-item-code></doc-item-code> -->
    </section>
    <section>
        <doc-item-title>Reveal (unfinished)</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <div class="col s12 l6">
                    <md-basic-card reveal :options="options.basic">
                        <md-card-reveal slot="reveal" :options="options.reveal"></md-card-reveal>
                    </md-reveal-card>
                </div>
                <div class="col s12 l6">
                    <md-image-card reveal :options="options.image">
                        <p slot="content"><a href="#">This is a link</a></p>
                        <md-card-reveal slot="reveal" :options="options.reveal"></md-card-reveal>
                    </md-image-card>
                </div>
            </div>
        </doc-item-demo>
        <!-- <doc-item-code></doc-item-code> -->
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
                    href:"#!/card",
                    text:"Card (Incomplete)",
                    pos:"center"
                },
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

                }
                // codes
            }
        }
    }
</script>
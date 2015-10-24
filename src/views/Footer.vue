<template>
<header>
    <md-nav  :logo="logo" nolink>
    </md-nav>
</header>    
<div class="container">
<article id="footer">
    <section>
    <doc-item-title>Basic</doc-item-title> 
        <doc-item-demo>
            <md-footer class="green">
                <md-footer-content slot="main" class="col s12 l6" :options="demo1.content"></md-footer-content>
                <md-footer-links slot="main" class="col s12 l6" :options="demo1.links"></md-footer-links>
                <md-footer-copyright slot="copyright" :options="demo1.copr"></md-footer-copyright>
            </md-footer>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.demo1.code}}
        </doc-item-code> 
        <doc-item-code lang="javascript">
            {{codes.demo1.options}}
        </doc-item-code>   
    </section>
    <section>
    <doc-item-title>Customized with Slot</doc-item-title>
        <doc-item-demo>
            <md-footer class="red">
                <md-footer-content slot="main" class="col s12 l4">
                        <p>Another Content</p>
                        <h5 slot="title">Title1</h5>
                        <p slot="text" class="">Content</p>
                        <md-btn class="yellow" >Code2</md-btn>
                </md-footer-content>
                <md-footer-content slot="main" class="col s12 l4">
                    <h5 slot="title">Title2</h5>
                    <p slot="text" class="">Content2</p>
                </md-footer-content>
                <md-footer-links slot="main"  class="col s12 l4">
                    <h5 slot="title" class="white-text">Title3</h5>
                    <ul slot="links">
                        <li><a href="#!/footer"  class="white-text">Footer</a></li>                
                    </ul>
                </md-footer-links>
                <md-footer-copyright slot="copyright">
                    <span>© 2015 Vue-material, All rights reserved.</span>
                    <a href="https://github.com/ElvisKang/vue-material" class="white-text right">Github</a>
                </md-footer-copyright>
            </md-footer>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.demo2.code}}
        </doc-item-code>   
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from '../codes/Footer.js';
    export default {
        mixins:[docView,hasCode],
        data(){
            return {
                logo:{
                    href:"#!/footer",
                    text:"Footer",
                    pos:"center"
                },
                codes,
                demo1:{
                    content:{
                        title:'Title1',
                        text:'this is content1',
                        titleClass:"white-text",
                        textClass:"white-text"
                    },
                    links:{
                        title:'Links',
                        links:[{href:"#!/footer",text:"Footer"}],
                        titleClass:"white-text",
                        linkClass:"white-text"
                    },
                    copr:{
                        text:"© 2015 Vue-material, All rights reserved.",
                        link:{
                            href:"https://github.com/ElvisKang/vue-material",
                            text:"Github",
                            linkClass:"white-text"
                        }
                    }
                }
            }
        }
    }
</script>
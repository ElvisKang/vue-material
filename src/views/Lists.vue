<template>
<header>
    <md-nav>
        <md-nav-logo href="#!/lists" pos="center">Lists</md-nav-logo>
    </md-nav>
</header>    
<div class="container">
<article id="chips">
    <section>
        <doc-item-title>Basic</doc-item-title>
        <doc-item-demo>
            <md-list>
                <md-list-item>Item</md-list-item>
                <md-list-item>Item</md-list-item>
                <md-list-item>Item</md-list-item>
            </md-list>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.basic}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Links</doc-item-title>
        <doc-item-demo>
            <md-list>
                <md-list-item href="#!/lists">Item</md-list-item>
                <md-list-item href="#!/lists">Item</md-list-item>
                <md-list-item href="#!/lists">Item</md-list-item>
                <md-list-item href="#!/lists">Item</md-list-item>
            </md-list>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.links}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Header</doc-item-title>
        <doc-item-demo>
            <md-list>
                <md-list-item header><h4>Header</h4></md-list-item>
                <md-list-item>Item</md-list-item>
                <md-list-item>Item</md-list-item>
            </md-list>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.header}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Secondary content</doc-item-title>
        <doc-item-demo>
            <md-list>
                <md-list-item header><h4>Header</h4></md-list-item>
                <md-list-item>
                    Item
                    <md-list-sec href="#!/lists">
                        <md-icon text="send"></md-icon>
                    </md-list-sec>
                </md-list-item>
                <md-list-item>
                    Item
                    <md-list-sec href="#!/lists">
                        <md-icon text="send"></md-icon>
                    </md-list-sec>
                </md-list-item>
                <md-list-item>
                    Item
                    <md-list-sec href="#!/lists">
                        <md-icon text="send"></md-icon>
                    </md-list-sec>
                </md-list-item>
            </md-list>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.sec}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Avatar Content</doc-item-title>
        <doc-item-demo>
            <md-list>
                <md-list-avatar>
                  <img src="static/images/doc/chips.jpg" class="circle">
                  <span class="title">Title</span>
                  <p>First Line <br>
                     Second Line
                  </p>
                    <md-list-sec href="#!/lists">
                        <md-icon text="grade"></md-icon>
                    </md-list-sec>
                </md-list-avatar>
                <md-list-avatar>
                  <md-icon class="circle" text="folder"></md-icon>
                  <span class="title">Title</span>
                  <p>First Line <br>
                     Second Line
                  </p>
                    <md-list-sec href="#!/lists">
                        <md-icon text="grade"></md-icon>
                    </md-list-sec>
                </md-list-avatar>
                <md-list-avatar>
                  <md-icon class="circle red" text="play_arrow"></md-icon>
                  <span class="title">Title</span>
                  <p>First Line <br>
                     Second Line
                  </p>
                    <md-list-sec href="#!/lists">
                        <md-icon text="grade"></md-icon>
                    </md-list-sec>
                </md-list-avatar>
            </md-list>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.avatar}}
        </doc-item-code>
    </section>
</article>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from "../codes/Lists.js";
    export default {
        mixins:[docView,hasCode],
        data(){
            return {    
                codes
            }
        }
    }
</script>
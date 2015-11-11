<template>
<md-sidenav id="sidenav" fixed>
<li class="logo">
    <a v-link="{path:'/about'}">
        <object data="static/images/logo.svg" type="image/svg+xml"></object>
    </a>
</li> 
    <li class="bold">
        <a v-link="{path:'/about'}">About</a>
    </li>
    <li class="bold">
        <a v-link="{path:'/start'}">Getting Started</a>
    </li>
    <li class="no-padding">
        <ul  class="collapsible collapsible-accordion">
       <li class="bold">
        <a  class="collapsible-header" @click="collapse('components')">Components</a>
        <div class="md-collapsible-body"  v-show="collapseStatus.components" >
            <ul>
                <li>
                        <a v-link="{path:'/badges'}">Badges</a>
                </li>
                <li>
                        <a v-link="{path:'/breadcrumbs'}">Breadcrumbs</a>
                </li>   
                <li>
                        <a v-link="{path:'/buttons'}">Buttons</a>
                </li>
                <li>
                        <a v-link="{path:'/cards'}">Cards</a>
                </li>
                <li>
                        <a v-link="{path:'/chips'}">Chips</a>
                </li>
                <li>
                        <a v-link="{path:'/footer'}">Footer</a>
                </li>
                <li>
                        <a v-link="{path:'/forms'}">Forms</a>
                </li>
                <li>
                        <a v-link="{path:'/lists'}">Lists</a>
                </li>
                <li>
                        <a v-link="{path:'/preloader'}">Preloader</a>
                </li>
                <li>
                        <a v-link="{path:'/navbar'}">Navbar(incomplete)</a>
                </li>
            </ul>
        </div>
    </li>     
        </ul>
    </li>
    </md-sidenav>
<main :style="{paddingLeft:'240px'}">
    <router-view></router-view>
</main>
</template>

<script type="babel">
export default {
    el:"#app",
    data(){
        return {
            collapseStatus:{
                components:false
            }
        }
    },
    methods:{
        collapse(name){
            this.collapseStatus[name]=!this.collapseStatus[name];
        }
    }
}
</script>

<style>
.logo{
    margin:32px;
}
.md-collapsible-body {
    background: #fff;
}
.md-collapsible-body a{
    margin-left: 30px;
}
.bold >a {
    font-weight: bold;
}
#sidenav a.v-link-active {
    color: #41B883;
}
.doc-demo>*, .doc-demo>p>*{
    margin-right:3px;
}
nav {
    background: #41B883;
}
</style>
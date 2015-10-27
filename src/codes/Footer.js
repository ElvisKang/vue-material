let demo1={
    code:`
<md-footer class="green">
    <md-footer-content slot="main" class="col s12 l6" :options="demo1.content">
       <md-btn class="yellow darken-2" ></md-btn>      
    </md-footer-content>
    <md-footer-links slot="main" class="col s12 l6" :options="demo1.links"></md-footer-links>
    <md-footer-copyright slot="copyright" :options="demo1.copr"></md-footer-copyright>
</md-footer>`,

    options:`
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
    }`
};

let demo2={
    code:`
<md-footer class="green">
    <md-footer-content slot="main" class="col s12 l4">
            <p>Another Content</p>
            <h5 slot="title" class="white-text">Title1</h5>
            <p slot="text" class="white-text">Content</p>
            <md-btn class="yellow darken-2" ></md-btn>
    </md-footer-content>
    <md-footer-content slot="main" class="col s12 l4">
        <h5 slot="title">Title2</h5>
        <p slot="text" >Content2</p>
    </md-footer-content>
    <md-footer-links slot="main"  class="col s12 l4">
        <h5 slot="title" class="white-text">Links</h5>
        <ul slot="links">
            <li><a href="#!/footer"  class="white-text">Footer</a></li>                
        </ul>
    </md-footer-links>
    <md-footer-copyright slot="copyright">
        <span>© 2015 Vue-material, All rights reserved.</span>
        <a href="https://github.com/ElvisKang/vue-material" class="white-text right">Github</a>
    </md-footer-copyright>
</md-footer>
</doc-item-demo>`
};

export default {
    demo1,
    demo2
}


import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from './vue-material.min.js';
import App from './app.vue';
import Views from './views/index.js';
VueMaterial.registerAll(Vue);
Vue.use(VueRouter);
var router = new VueRouter();
router.map({
    '/about':{
        component:Views.About
    },
    '/buttons': {
        component:Views.Buttons
    },
    '/footer':{
        component:Views.Footer
    },
    '/navbar':{
        component:Views.Navbar
    },
    '/forms':{
        component:Views.Forms
    }
});
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/about'
})
router.start(App, '#app');

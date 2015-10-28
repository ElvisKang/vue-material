import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueMaterial from 'vue-material';
import VueMaterial from './vue-material.min.js';
import App from './app.vue';
import Views from './views/index.js';
VueMaterial.regAll(Vue);
// VueMaterial.register(Vue,['buttons','navbar'])
Vue.use(VueRouter);
var router = new VueRouter();
router.map({
    '/about':{
        component:Views.About
    },
    '/buttons': {
        component:Views.Buttons
    },
    '/cards': {
        component:Views.Cards
    },
    '/chips': {
        component:Views.Chips
    },
    '/footer':{
        component:Views.Footer
    },
    '/forms':{
        component:Views.Forms
    },
    '/navbar':{
        component:Views.Navbar
    },
    '/preloader':{
        component:Views.Preloader
    },
    '/start':{
        component:Views.Start
    }
});
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/about'
})
router.start(App, '#app');

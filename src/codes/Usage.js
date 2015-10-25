let install=`
npm install vue-material`;

let use =`
import Vue from 'Vue';
import VueMaterial from VueMaterial;

//global register all components
VueMaterial.registerAll(Vue);
//or
//global register some components
VueMaterial.register(Vue,['button','footer']);`;

export default {
    use,
    install
}

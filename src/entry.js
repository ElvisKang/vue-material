import button from './components/button/index.js';
import commons from './components/commons/index.js';
import sidenav from './components/sidenav/index.js';
import navbar from './components/navbar/index.js';
import footer from './components/footer/index.js';
import forms from './components/forms/index.js';
/*import card from './components/card/index.js';
import chip from './components/chip/index.js';
import collection from './components/collection/index.js';
import pagination from './components/pagination/index.js';
import preloader from './components/preloader/index.js';*/


export default {
    components: {
        button,
        commons,
        footer,
        forms,
        navbar,
        sidenav,
    },
    /*    card,
        chip,
        collection,
        pagination,
        preloader,*/
    //this array should be replaced by something
    // componentsName: ['button', 'card', 'chip', 'collection', 'footer', 'forms', 'navbar', 'pagination', 'preloader'],
    // componentsName: ['button', 'sidenav', 'navbar', 'footer'],
    _registered: [],
    registerAll(Vue){
        for(let comName in this.components ) {
            this._regComponent(Vue,comName);
        }
    },
    register(Vue, names) {
        if (!Array.isArray(names)) {
            throw "Vue-material:Function register's the second param 'names' must be Array";
        }
         // In case that users forget to register commons 
        this._regComponent(Vue, 'commons'); 
        for (let name of names) {
            name = name.toLowerCase();
            if ((name in this.components) && (this._registered.indexOf(name) === -1)) {
                this._regComponent(Vue, name);
            }
        }
    },
    //mdXxYy=>md-xx-yy
    _camel2kebab(str) {
        const reg = /([a-zA-Z])(?=[A-Z])/g;
        return str.replace(reg, '$1-').toLowerCase();
    },
    _regComponent(Vue, name) {
        let com = this.components[name];
        for (let item in com) {
            let regName = this._camel2kebab(item);
            Vue.component(regName, com[item]);
            console.log(regName);
        }
        this._registered.push(name);
    }
}

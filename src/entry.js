import button from './components/button/index.js';
import chip from './components/chip/index.js';
import commons from './components/commons/index.js';
import footer from './components/footer/index.js';
import forms from './components/forms/index.js';
import navbar from './components/navbar/index.js';
import sidenav from './components/sidenav/index.js';
import card from './components/card/index.js';
/*
import collection from './components/collection/index.js';
import pagination from './components/pagination/index.js';
import preloader from './components/preloader/index.js';*/


export default {
    components: {
        button,
        card,
        chip,
        commons,
        footer,
        forms,
        navbar,
        sidenav,
    },
    /*    
        collection,
        pagination,
        preloader,*/
    _registered: [],
    registerAll(Vue){
        for(let comName in this.components ) {
            this._regComponent(Vue,comName);
        }
    },
    register(Vue, names) {
        for (let name of names) {
            name = name.toLowerCase();
            if ((name in this.components) && (this._registered.indexOf(name) === -1)) {
                this._regComponent(Vue, name);
            }
        }
    },
    //mdXxYy=>md-xx-yy
    _camel2kebab(str) {
        const reg = /(?=[A-Z])/g;
        return str.replace(reg, '-').toLowerCase();
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

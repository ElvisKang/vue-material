import badges from './components/badges/'
import buttons from './components/buttons/';
import cards from './components/cards/';
import chips from './components/chips/';
import commons from './components/commons/';
import crumb from './components/crumb';
import footer from './components/footer/';
import forms from './components/forms/';
import lists from './components/lists/';
import navbar from './components/navbar/';
import preloader from './components/preloader/';
import sidenav from './components/sidenav/';

import directives from './directives/';

/*
import pagination from './components/pagination/';
import waves from 'node-waves';
*/

export default {
    components: {
        badges,
        buttons,
        cards,
        chips,
        commons,
        crumb,
        footer,
        forms,
        navbar,
        sidenav,
        preloader,
        lists,
    },
    directives,
    _registered: [],
    regAll(Vue){
        for(let comName in this.components ) {
            if(this._registered.indexOf(comName) === -1){
                this._regComponent(Vue,comName);
            }
        }
        this.regAllDirectives(Vue);
    },
    reg(Vue, names) {
        for (let name of names) {
            name = name.toLowerCase();
            if ((name in this.components) && (this._registered.indexOf(name) === -1)) {
                this._regComponent(Vue, name);
            }
        }
        this.regAllDirectives(Vue);
    },
    regAllDirectives(Vue){
        for(let dirName in this.directives){
            if(this._registered.indexOf(dirName) === -1){
                this._regDirective(Vue,dirName);
            }
        }
    },
    getConstructor(name){
        let result;
        if(typeof name === "string"){
            
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
        }
        this._registered.push(name);
    },
    _regDirective(Vue,name){
        let obj = this.directives[name];
        name = this._camel2kebab(name);
        Vue.directive(name,obj);
        this._registered.push(name);
    }
    
}



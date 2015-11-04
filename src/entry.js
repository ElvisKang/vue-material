import buttons from './components/buttons/index.js';
import cards from './components/cards/index.js';
import chips from './components/chips/index.js';
import commons from './components/commons/index.js';
import footer from './components/footer/index.js';
import forms from './components/forms/index.js';
import navbar from './components/navbar/index.js';
import preloader from './components/preloader/index.js';
import sidenav from './components/sidenav/index.js';
import lists from './components/lists/index.js';
/*
import pagination from './components/pagination/index.js';
*/
import directives from './directives/index.js';


export default {
    components: {
        buttons,
        cards,
        chips,
        commons,
        footer,
        forms,
        navbar,
        sidenav,
        preloader,
        lists,
    },
    /*    
        pagination,
        */
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

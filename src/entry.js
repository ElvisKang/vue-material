import button from './components/button/index.js';
import card from './components/card/index.js';
import chips from './components/chips/index.js';
import collection from './components/collection/index.js';
import common from './components/common/index.js';
import footer from './components/footer/index.js';
import forms from './components/forms/index.js';
import navbar from './components/navbar/index.js';
import pagination from './components/pagination/index.js';
import preloader from './components/preloader/index.js';


export default {
    button,
    card,
    chips,
    collection,
    common,
    footer,
    forms,
    navbar,
    pagination,
    preloader,
    registered: [],
        //this array should be replaced by something
        componentsName: ['button', 'card', 'chips', 'collection', 'common', 'footer', 'forms', 'navbar', 'pagination', 'preloader'],
        register: (Vue, names = this.componentsName) => {
            if(Array.isArray(names)){
                console.log("param 'names' must be Array");
                return;
            }
            for (let name of names) {
                name = name.toLowerCase();
                if ((name in this) && (this.registered.indexOf(name) !== -1)) {
                    _regComponent(Vue, this[name]);
                    this.registered.push(name);
                }
            }
        },
        _camel2dashed(str) {
            const reg = '/([a-zA-Z])(?=[A-Z])/g';
            return str.replace(reg, '$1-').toLowerCase();
        },
        _regComponent(Vue, com) {
            for (let item in com) {
                let regName = _camel2dashed(item);
                Vue.component(regName, com[item]);
            }
        }
}

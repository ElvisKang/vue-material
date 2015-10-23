(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-material"] = factory();
	else
		root["vue-material"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsButtonIndexJs = __webpack_require__(7);

	var _componentsButtonIndexJs2 = _interopRequireDefault(_componentsButtonIndexJs);

	var _componentsCommonsIndexJs = __webpack_require__(11);

	var _componentsCommonsIndexJs2 = _interopRequireDefault(_componentsCommonsIndexJs);

	// import forms from './components/forms/index.js';

	var _componentsSidenavIndexJs = __webpack_require__(26);

	var _componentsSidenavIndexJs2 = _interopRequireDefault(_componentsSidenavIndexJs);

	/*import card from './components/card/index.js';
	import chip from './components/chip/index.js';
	import collection from './components/collection/index.js';
	import footer from './components/footer/index.js';
	import navbar from './components/navbar/index.js';
	import pagination from './components/pagination/index.js';
	import preloader from './components/preloader/index.js';*/

	exports['default'] = {
	    button: _componentsButtonIndexJs2['default'],
	    commons: _componentsCommonsIndexJs2['default'],
	    // forms,
	    sidenav: _componentsSidenavIndexJs2['default'],
	    /*    card,
	        chip,
	        collection,
	        footer,
	        navbar,
	        pagination,
	        preloader,*/
	    registered: [],
	    //this array should be replaced by something
	    // componentsName: ['button', 'card', 'chip', 'collection', 'footer', 'forms', 'navbar', 'pagination', 'preloader'],
	    componentsName: ['button'],
	    register: function register(Vue, names) {
	        names = names || this.componentsName;
	        console.log(names);
	        if (!Array.isArray(names)) {
	            console.log("param 'names' must be Array");
	            return;
	        }
	        this._regComponent(Vue, 'commons');
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _name = _step.value;

	                _name = _name.toLowerCase();
	                if (_name in this && this.registered.indexOf(_name) === -1) {
	                    this._regComponent(Vue, _name);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator['return']) {
	                    _iterator['return']();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    },
	    //mdXxYy=>md-xx-yy
	    _camel2kebab: function _camel2kebab(str) {
	        var reg = /([a-zA-Z])(?=[A-Z])/g;
	        return str.replace(reg, '$1-').toLowerCase();
	    },
	    _regComponent: function _regComponent(Vue, name) {
	        var com = this[name];
	        for (var item in com) {
	            console.log(item);
	            var regName = this._camel2kebab(item);
	            console.log(regName);
	            Vue.component(regName, com[item]);
	        }
	        this.registered.push(name);
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdBtnVue = __webpack_require__(8);

	var _mdBtnVue2 = _interopRequireDefault(_mdBtnVue);

	var _mdBtnFVue = __webpack_require__(23);

	var _mdBtnFVue2 = _interopRequireDefault(_mdBtnFVue);

	// import mdFab from './md-fab.vue';

	exports['default'] = {
	    mdBtn: _mdBtnVue2['default'],
	    mdBtnF: _mdBtnFVue2['default']
	    // mdFab
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9)
	module.exports.template = __webpack_require__(22)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/vue-material/node_modules/vue-loader/lib/hot-reload-api.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = module.exports.hotID = "-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-btn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-btn.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-btn.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-btn.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-btn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsButtonMixinJs = __webpack_require__(10);

	exports['default'] = {
	    mixins: [_mixinsButtonMixinJs.btnIcon],
	    props: {
	        flat: Boolean,
	        text: String
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _commonsIndexJs = __webpack_require__(11);

	exports["default"] = {
	    btnIcon: {
	        props: {
	            iconText: String,
	            iconPos: {
	                type: String,
	                "default": "left"
	            }
	        },
	        components: {
	            "md-icon": _commonsIndexJs.mdIcon
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdBadgeVue = __webpack_require__(12);

	var _mdBadgeVue2 = _interopRequireDefault(_mdBadgeVue);

	var _mdIconVue = __webpack_require__(15);

	var _mdIconVue2 = _interopRequireDefault(_mdIconVue);

	var _mdLinkVue = __webpack_require__(18);

	var _mdLinkVue2 = _interopRequireDefault(_mdLinkVue);

	exports['default'] = {
	    mdBadge: _mdBadgeVue2['default'],
	    mdIcon: _mdIconVue2['default'],
	    mdLink: _mdLinkVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13)
	module.exports.template = __webpack_require__(14)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/vue-material/node_modules/vue-loader/lib/hot-reload-api.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = module.exports.hotID = "-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-badge.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-badge.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-badge.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-badge.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-badge.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        badge: Object
	    },
	    computed: {
	        count: function count() {
	            return Math.trunc(undefined.badge.count);
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<span v-show=\"count>0\" :class=\"['badge',badge.new?'new':'']\"  >{{count}}</span>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16)
	module.exports.template = __webpack_require__(17)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/vue-material/node_modules/vue-loader/lib/hot-reload-api.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = module.exports.hotID = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-icon.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-icon.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-icon.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-icon.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-icon.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        text: String,
	        pos: String
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<i v-if=\"text\" :class=\"['material-icons',pos]\">{{text}}</i>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19)
	module.exports.template = __webpack_require__(21)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/vue-material/node_modules/vue-loader/lib/hot-reload-api.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = module.exports.hotID = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-link.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-link.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-link.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-link.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-link.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(20)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mdBadgeVue = __webpack_require__(12);

	var _mdBadgeVue2 = _interopRequireDefault(_mdBadgeVue);

	exports['default'] = {
	    props: {
	        link: Object,
	        badge: Object
	    },
	    components: {
	        mdBadge: _mdBadgeVue2['default']
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<a href=\"{{link.href}}\">\n    {{link.text}}\n    <md-badge :badge=\"badge\"></md-badge>\n</a>";

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<a :class=\"[flat?'btn-flat':'btn']\">\n    <slot  name=\"icon\">\n        <md-icon   v-if=\"!flat\"  :text=\"iconText\" :pos=\"iconPos\"></md-icon>\n    </slot>\n    {{text}}\n</a>";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24)
	module.exports.template = __webpack_require__(25)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/vue-material/node_modules/vue-loader/lib/hot-reload-api.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = module.exports.hotID = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-btn-f.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-btn-f.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-btn-f.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-btn-f.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-btn-f.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsButtonMixinJs = __webpack_require__(10);

	exports['default'] = {
	    mixins: [_mixinsButtonMixinJs.btnIcon]
	};
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<a class=\"btn-floating\">\n        <md-icon   :text=\"iconText\" :pos=\"iconPos\"></md-icon>\n    </a>";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _mdSidenavVue = __webpack_require__(27);

	var _mdSidenavVue2 = _interopRequireDefault(_mdSidenavVue);

	exports["default"] = {
	    mdSideNav: _mdSidenavVue2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28)
	module.exports.template = __webpack_require__(29)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/vue-material/node_modules/vue-loader/lib/hot-reload-api.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = module.exports.hotID = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-sidenav.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-sidenav.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-sidenav.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-sidenav.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-sidenav.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        fixed: Boolean,
	        width: {
	            type: Number,
	            "default": 240
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<ul :class=\"['side-nav',fixed?'fixed','']\" :style=\"{width:width+'px'}\">\n        <slot></slot>\n    </ul>";

/***/ }
/******/ ])
});
;
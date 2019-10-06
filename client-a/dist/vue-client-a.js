/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0327":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c6f3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("43821335", content, shadowRoot)
};

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "2b0e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) { var repeat, classify, classifyRE, hasConsole; }

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (false) {}
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {}
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       false && false;

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     false && false;
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {}
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {}

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {}
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {}
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {}
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {}
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnReservedPrefix, warnNonPresent, allowedGlobals; }

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (false) { var perf; }

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       false && false;
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) { var keyInLowerCase; }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {} else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {}
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {}
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       false && false;
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       false && false;
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (false) {}
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (false) {}
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {}
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     false && false;
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {}
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {} else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {} else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {}
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       false && false;
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? (undefined)
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) { var lowerCaseEvent; }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {}
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {} else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {}

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {}
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {}
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {}
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (false) {}
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? undefined
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       false && false;
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) { var hyphenatedKey; } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     false && false;
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {}
    if (props && hasOwn(props, key)) {
       false && false;
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {}

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (false) {}
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {}
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {}
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {}

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {} else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {}

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (false
  ) {}
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {}

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {}
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {}
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       false && false;
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {}

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {}
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {}
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {}

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (false) {}
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {}
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {}

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {}

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     false && false;
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {}

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {}

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) { var name, opts; }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {}
    }
    if (false
    ) {}
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5a13":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_518166f2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0327");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_518166f2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_518166f2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_518166f2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_518166f2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_518166f2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("2350");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f2fe3a9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=518166f2&scoped=true&shadow
var Appvue_type_template_id_518166f2_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Form"},[_c('h1',{staticClass:"display-4"},[_vm._v("Form")]),(_vm.show)?_c('b-form',{on:{"submit":_vm.onSubmit,"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"id":"input-group-1","label":"Email address:","label-for":"input-1","description":"We'll never share your email with anyone else."}},[_c('b-form-input',{attrs:{"id":"input-1","type":"email","required":"","placeholder":"Enter email"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_c('b-form-group',{attrs:{"id":"input-group-2","label":"Your Name:","label-for":"input-2"}},[_c('b-form-input',{attrs:{"id":"input-2","required":"","placeholder":"Enter name"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_c('b-form-group',{attrs:{"id":"input-group-3","label":"Food:","label-for":"input-3"}},[_c('b-form-select',{attrs:{"id":"input-3","options":_vm.foods,"required":""},model:{value:(_vm.form.food),callback:function ($$v) {_vm.$set(_vm.form, "food", $$v)},expression:"form.food"}})],1),_c('b-form-group',{attrs:{"id":"input-group-4"}},[_c('b-form-checkbox-group',{attrs:{"id":"checkboxes-4"},model:{value:(_vm.form.checked),callback:function ($$v) {_vm.$set(_vm.form, "checked", $$v)},expression:"form.checked"}},[_c('b-form-checkbox',{attrs:{"value":"me"}},[_vm._v("Check me out")]),_c('b-form-checkbox',{attrs:{"value":"that"}},[_vm._v("Check that out")])],1)],1),_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("Submit")]),_c('b-button',{attrs:{"type":"reset","variant":"danger"}},[_vm._v("Reset")])],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=518166f2&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.1.0
  * (c) 2015-present Evan You
  * @license MIT
  */


// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return vue_runtime_esm["a" /* default */].extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof vue_runtime_esm["a" /* default */]
        ? superProto.constructor
        : vue_runtime_esm["a" /* default */];
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
var shouldIgnore = {
    prototype: true,
    arguments: true,
    callee: true,
    caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function vue_class_component_esm_Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.2.2 MIT LICENSE copyright 2019 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) ||
                    null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_2 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var _this = this;
                var rv = Object.create((typeof original_2 === 'function' ? original_2.call(this) : original_2) ||
                    null);
                rv[reactiveInjectKey] = {};
                var _loop_1 = function (i) {
                    rv[provide.managed[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
                    Object.defineProperty(rv[reactiveInjectKey], provide.managed[i], {
                        enumerable: true,
                        get: function () { return _this[i]; },
                    });
                };
                var this_1 = this;
                for (var i in provide.managed) {
                    _loop_1(i);
                }
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var vue_property_decorator_hyphenateRE = /\B([A-Z])/g;
var vue_property_decorator_hyphenate = function (str) { return str.replace(vue_property_decorator_hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = vue_property_decorator_hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/vue.js
//
// Single point of contact for Vue
//
// TODO:
//   Conditionally import Vue if no global Vue
//

/* harmony default export */ var vue = (vue_runtime_esm["a" /* default */]);
// CONCATENATED MODULE: ./node_modules/vue-functional-data-merge/dist/lib.esm.js
var e=function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l)}return a}function lib_esm_a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y))}arguments[c].style=i}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t])}return a}
//# sourceMappingURL=lib.esm.js.map

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form/form.js


var form_props = {
  id: {
    type: String,
    default: null
  },
  inline: {
    type: Boolean,
    default: false
  },
  novalidate: {
    type: Boolean,
    default: false
  },
  validated: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BForm =
/*#__PURE__*/
vue.extend({
  name: 'BForm',
  functional: true,
  props: form_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('form', lib_esm_a(data, {
      class: {
        'form-inline': props.inline,
        'was-validated': props.validated
      },
      attrs: {
        id: props.id,
        novalidate: props.novalidate
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/array.js
// --- Static ---
var from = Array.from;
var isArray = Array.isArray; // --- Instance ---

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/object.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // --- Static ---

var object_assign = Object.assign;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var keys = Object.keys;
var defineProperties = Object.defineProperties;
var defineProperty = Object.defineProperty;
var freeze = Object.freeze;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getPrototypeOf = Object.getPrototypeOf;
var create = Object.create;
var isFrozen = Object.isFrozen;
var is = Object.is; // --- "Instance" ---

var object_hasOwnProperty = function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
var object_toString = function toString(obj) {
  return Object.prototype.toString.call(obj);
}; // --- Utilities ---

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 * Note object could be a complex type like array, date, etc.
 */

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
};
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}; // @link https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var omit = function omit(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread({}, result, _defineProperty({}, key, obj[key]));
  }, {});
};
var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};
/**
 * Deep-freezes and object, making it immutable / read-only.
 * Returns the same object passed-in, but frozen.
 * Freezes inner object/array/values first.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * Note: this method will not work for property values using Symbol() as a key
 */

var object_deepFreeze = function deepFreeze(obj) {
  // Retrieve the property names defined on object/array
  // Note: `keys` will ignore properties that are keyed by a `Symbol()`
  var props = keys(obj); // Iterate over each prop and recursively freeze it

  props.forEach(function (prop) {
    var value = obj[prop]; // If value is a plain object or array, we deepFreeze it

    obj[prop] = value && (isPlainObject(value) || isArray(value)) ? deepFreeze(value) : value;
  });
  return freeze(obj);
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/memoize.js


var memoize_memoize = function memoize(fn) {
  var cache = create(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsKey = JSON.stringify(args);
    return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
  };
};

/* harmony default export */ var utils_memoize = (memoize_memoize);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/env.js
var env = __webpack_require__("938d");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/safe-types.js
function safe_types_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { safe_types_typeof = function _typeof(obj) { return typeof obj; }; } else { safe_types_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return safe_types_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (safe_types_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * SSR safe types
 */

var w = env["c" /* hasWindowSupport */] ? window : {};
var safe_types_Element = env["c" /* hasWindowSupport */] ? w.Element :
/*#__PURE__*/
function (_Object) {
  _inherits(Element, _Object);

  function Element() {
    _classCallCheck(this, Element);

    return _possibleConstructorReturn(this, _getPrototypeOf(Element).apply(this, arguments));
  }

  return Element;
}(_wrapNativeSuper(Object));
var safe_types_HTMLElement = env["c" /* hasWindowSupport */] ? w.HTMLElement :
/*#__PURE__*/
function (_Element) {
  _inherits(HTMLElement, _Element);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(HTMLElement).apply(this, arguments));
  }

  return HTMLElement;
}(safe_types_Element);
var SVGElement = env["c" /* hasWindowSupport */] ? w.SVGElement :
/*#__PURE__*/
function (_Element2) {
  _inherits(SVGElement, _Element2);

  function SVGElement() {
    _classCallCheck(this, SVGElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(SVGElement).apply(this, arguments));
  }

  return SVGElement;
}(safe_types_Element);
var File = env["c" /* hasWindowSupport */] ? w.File :
/*#__PURE__*/
function (_Object2) {
  _inherits(File, _Object2);

  function File() {
    _classCallCheck(this, File);

    return _possibleConstructorReturn(this, _getPrototypeOf(File).apply(this, arguments));
  }

  return File;
}(_wrapNativeSuper(Object));
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/inspect.js
function inspect_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { inspect_typeof = function _typeof(obj) { return typeof obj; }; } else { inspect_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return inspect_typeof(obj); }



 // --- Convenience inspection utilities ---

var toType = function toType(val) {
  return inspect_typeof(val);
};
var toRawType = function toRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
};
var toRawTypeLC = function toRawTypeLC(val) {
  return toRawType(val).toLowerCase();
};
var isUndefined = function isUndefined(val) {
  return val === undefined;
};
var isNull = function isNull(val) {
  return val === null;
};
var isUndefinedOrNull = function isUndefinedOrNull(val) {
  return isUndefined(val) || isNull(val);
};
var isFunction = function isFunction(val) {
  return toType(val) === 'function';
};
var inspect_isBoolean = function isBoolean(val) {
  return toType(val) === 'boolean';
};
var isString = function isString(val) {
  return toType(val) === 'string';
};
var inspect_isNumber = function isNumber(val) {
  return toType(val) === 'number';
};
var inspect_isPrimitive = function isPrimitive(val) {
  return inspect_isBoolean(val) || isString(val) || inspect_isNumber(val);
};
var isDate = function isDate(val) {
  return val instanceof Date;
};
var isEvent = function isEvent(val) {
  return val instanceof Event;
};
var inspect_isFile = function isFile(val) {
  return val instanceof File;
};
var isRegExp = function isRegExp(val) {
  return toRawType(val) === 'RegExp';
};
var inspect_isPromise = function isPromise(val) {
  return !isUndefinedOrNull(val) && isFunction(val.then) && isFunction(val.catch);
}; // Extra convenience named re-exports


// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/upper-first.js

/**
 * Transform the first character to uppercase
 * @param {string} str
 */

var upper_first_upperFirst = function upperFirst(str) {
  if (!isString(str)) {
    str = String(str);
  }

  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/* harmony default export */ var upper_first = (upper_first_upperFirst);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/clone-deep.js
function clone_deep_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function clone_deep_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { clone_deep_ownKeys(source, true).forEach(function (key) { clone_deep_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { clone_deep_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function clone_deep_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var clone_deep_cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if (isArray(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
    }, []);
  }

  if (isPlainObject(obj)) {
    return keys(obj).reduce(function (result, key) {
      return clone_deep_objectSpread({}, result, clone_deep_defineProperty({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};
/* harmony default export */ var clone_deep = (clone_deep_cloneDeep);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/get.js

/**
 * Get property defined by dot/array notation in string.
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @param {*} defaultValue (optional)
 * @return {*}
 */

var get_get = function get(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Handle array of path values
  path = isArray(path) ? path.join('.') : path; // If no path or no object passed

  if (!path || !isObject(obj)) {
    return defaultValue;
  } // Handle edge case where user has dot(s) in top-level item field key
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2762
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  if (path in obj) {
    return obj[path];
  } // Handle string array notation (numeric indices only)


  path = String(path).replace(/\[(\d+)]/g, '.$1');
  var steps = path.split('.').filter(Boolean); // Handle case where someone passes a string of only dots

  if (steps.length === 0) {
    return defaultValue;
  } // Traverse path in object to find result
  // We use `!=` vs `!==` to test for both `null` and `undefined`
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  return steps.every(function (step) {
    return isObject(obj) && step in obj && (obj = obj[step]) != null;
  }) ? obj : defaultValue;
};

/* harmony default export */ var utils_get = (get_get);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/config-defaults.js
 // --- General BootstrapVue configuration ---
// NOTES
//
// The global config SHALL NOT be used to set defaults for Boolean props, as the props
// would loose their semantic meaning, and force people writing 3rd party components to
// explicity set a true or false value using the v-bind syntax on boolean props
//
// Supported config values (depending on the prop's supported type(s)):
// `String`, `Array`, `Object`, `null` or `undefined`
// BREAKPOINT DEFINITIONS
//
// Some components (`<b-col>` and `<b-form-group>`) generate props based on breakpoints,
// and this occurs when the component is first loaded (evaluated), which may happen
// before the config is created/modified
//
// To get around this we make these components' props async (lazy evaluation)
// The component definition is only called/executed when the first access to the
// component is used (and cached on subsequent uses)
// PROP DEFAULTS
//
// For default values on props, we use the default value factory function approach so
// that the default values are pulled in at each component instantiation
//
//  props: {
//    variant: {
//      type: String,
//      default: () => getConfigComponent('BAlert', 'variant')
//    }
//  }
//
// We also provide a cached getter for breakpoints, which are "frozen" on first access
// prettier-ignore

/* harmony default export */ var config_defaults = (object_deepFreeze({
  // Breakpoints
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  // Form controls
  formControls: {
    size: null
  },
  // Component specific defaults are keyed by the component
  // name (PascalCase) and prop name (camelCase)
  BAlert: {
    dismissLabel: 'Close',
    variant: 'info'
  },
  BBadge: {
    variant: 'secondary'
  },
  BButton: {
    size: null,
    variant: 'secondary'
  },
  BButtonClose: {
    // `textVariant` is `null` to inherit the current text color
    textVariant: null,
    ariaLabel: 'Close'
  },
  BCardSubTitle: {
    // `<b-card>` and `<b-card-body>` also inherit this prop
    subTitleTextVariant: 'muted'
  },
  BCarousel: {
    labelPrev: 'Previous Slide',
    labelNext: 'Next Slide',
    labelGotoSlide: 'Goto Slide',
    labelIndicators: 'Select a slide to display'
  },
  BDropdown: {
    toggleText: 'Toggle Dropdown',
    size: null,
    variant: 'secondary',
    splitVariant: null
  },
  BFormFile: {
    browseText: 'Browse',
    // Chrome default file prompt
    placeholder: 'No file chosen',
    dropPlaceholder: 'Drop files here'
  },
  BFormText: {
    textVariant: 'muted'
  },
  BImg: {
    blankColor: 'transparent'
  },
  BImgLazy: {
    blankColor: 'transparent'
  },
  BInputGroup: {
    size: null
  },
  BJumbotron: {
    bgVariant: null,
    borderVariant: null,
    textVariant: null
  },
  BListGroupItem: {
    variant: null
  },
  BModal: {
    titleTag: 'h5',
    size: 'md',
    headerBgVariant: null,
    headerBorderVariant: null,
    headerTextVariant: null,
    headerCloseVariant: null,
    bodyBgVariant: null,
    bodyTextVariant: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerTextVariant: null,
    cancelTitle: 'Cancel',
    cancelVariant: 'secondary',
    okTitle: 'OK',
    okVariant: 'primary',
    headerCloseLabel: 'Close'
  },
  BNavbar: {
    variant: null
  },
  BNavbarToggle: {
    label: 'Toggle navigation'
  },
  BPagination: {
    size: null
  },
  BPaginationNav: {
    size: null
  },
  BPopover: {
    boundary: 'scrollParent',
    boundaryPadding: 5,
    customClass: null,
    delay: 50,
    variant: null
  },
  BProgress: {
    variant: null
  },
  BProgressBar: {
    variant: null
  },
  BSpinner: {
    variant: null
  },
  BTable: {
    selectedVariant: 'primary',
    headVariant: null,
    footVariant: null
  },
  BToast: {
    toaster: 'b-toaster-top-right',
    autoHideDelay: 5000,
    variant: null,
    toastClass: null,
    headerClass: null,
    bodyClass: null
  },
  BToaster: {
    ariaLive: null,
    ariaAtomic: null,
    role: null
  },
  BTooltip: {
    boundary: 'scrollParent',
    boundaryPadding: 5,
    customClass: null,
    delay: 50,
    variant: null
  }
}));
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/config.js




 // --- Constants ---

var PROP_NAME = '$bvConfig';
var VueProto = vue.prototype; // --- Getter methods ---
// All methods return a deep clone (immutable) copy of the config
// value, to prevent mutation of the user config object.
// Get the current user config. For testing purposes only

var getConfig = function getConfig() {
  return VueProto[PROP_NAME] ? VueProto[PROP_NAME].getConfig() : {};
}; // Method to grab a config value based on a dotted/array notation key

var config_getConfigValue = function getConfigValue(key) {
  return VueProto[PROP_NAME] ? VueProto[PROP_NAME].getConfigValue(key) : clone_deep(utils_get(config_defaults, key));
}; // Method to grab a config value for a particular component

var getComponentConfig = function getComponentConfig(cmpName) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // Return the particular config value for key for if specified,
  // otherwise we return the full config (or an empty object if not found)
  return key ? config_getConfigValue("".concat(cmpName, ".").concat(key)) : config_getConfigValue(cmpName) || {};
}; // Convenience method for getting all breakpoint names

var getBreakpoints = function getBreakpoints() {
  return config_getConfigValue('breakpoints');
}; // Private function for caching / locking-in breakpoint names

var _getBreakpointsCached = utils_memoize(function () {
  return getBreakpoints();
}); // Convenience method for getting all breakpoint names.
// Caches the results after first access.


var config_getBreakpointsCached = function getBreakpointsCached() {
  return clone_deep(_getBreakpointsCached());
}; // Convenience method for getting breakpoints with
// the smallest breakpoint set as ''.
// Useful for components that create breakpoint specific props.

var getBreakpointsUp = function getBreakpointsUp() {
  var breakpoints = getBreakpoints();
  breakpoints[0] = '';
  return breakpoints;
}; // Convenience method for getting breakpoints with
// the smallest breakpoint set as ''.
// Useful for components that create breakpoint specific props.
// Caches the results after first access.

var getBreakpointsUpCached = utils_memoize(function () {
  var breakpoints = config_getBreakpointsCached();
  breakpoints[0] = '';
  return breakpoints;
}); // Convenience method for getting breakpoints with
// the largest breakpoint set as ''.
// Useful for components that create breakpoint specific props.

var getBreakpointsDown = function getBreakpointsDown() {
  var breakpoints = getBreakpoints();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
}; // Convenience method for getting breakpoints with
// the largest breakpoint set as ''.
// Useful for components that create breakpoint specific props.
// Caches the results after first access.

/* istanbul ignore next: we don't use this method anywhere, yet */

var getBreakpointsDownCached = function getBreakpointsDownCached()
/* istanbul ignore next */
{
  var breakpoints = config_getBreakpointsCached();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/dom.js


 // --- Constants ---

var dom_w = env["c" /* hasWindowSupport */] ? window : {};
var d = env["a" /* hasDocumentSupport */] ? document : {};
var elProto = typeof Element !== 'undefined' ? Element.prototype : {}; // --- Normalization utils ---
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

/* istanbul ignore next */

var matchesEl = elProto.matches || elProto.msMatchesSelector || elProto.webkitMatchesSelector; // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

/* istanbul ignore next */

var closestEl = elProto.closest || function (sel)
/* istanbul ignore next */
{
  var el = this;

  do {
    // Use our "patched" matches function
    if (matches(el, sel)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (!isNull(el) && el.nodeType === Node.ELEMENT_NODE);

  return null;
}; // `requestAnimationFrame()` convenience method

var requestAF = dom_w.requestAnimationFrame || dom_w.webkitRequestAnimationFrame || dom_w.mozRequestAnimationFrame || dom_w.msRequestAnimationFrame || dom_w.oRequestAnimationFrame || // Fallback, but not a true polyfill
// Only needed for Opera Mini

/* istanbul ignore next */
function (cb) {
  return setTimeout(cb, 16);
};
var MutationObs = dom_w.MutationObserver || dom_w.WebKitMutationObserver || dom_w.MozMutationObserver || null; // --- Utils ---
// Normalize event options based on support of passive option
// Exported only for testing purposes

var dom_parseEventOptions = function parseEventOptions(options) {
  /* istanbul ignore else: can't test in JSDOM, as it supports passive */
  if (env["b" /* hasPassiveEventSupport */]) {
    return isObject(options) ? options : {
      useCapture: Boolean(options || false)
    };
  } else {
    // Need to translate to actual Boolean value
    return Boolean(isObject(options) ? options.useCapture : options);
  }
}; // Attach an event listener to an element

var eventOn = function eventOn(el, evtName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler, dom_parseEventOptions(options));
  }
}; // Remove an event listener from an element

var eventOff = function eventOff(el, evtName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(evtName, handler, dom_parseEventOptions(options));
  }
}; // Determine if an element is an HTML Element

var isElement = function isElement(el) {
  return Boolean(el && el.nodeType === Node.ELEMENT_NODE);
}; // Determine if an HTML element is visible - Faster than CSS check

var isVisible = function isVisible(el) {
  if (!isElement(el) || !dom_contains(d.body, el)) {
    return false;
  }

  if (el.style.display === 'none') {
    // We do this check to help with vue-test-utils when using v-show

    /* istanbul ignore next */
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests


  var bcr = getBCR(el);
  return Boolean(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || Boolean(getAttr(el, 'disabled')) || hasClass(el, 'disabled');
}; // Cause/wait-for an element to reflow it's content (adjusting it's height/width)

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found

var dom_selectAll = function selectAll(selector, root) {
  return from((isElement(root) ? root : d).querySelectorAll(selector));
}; // Select a single element, returns `null` if not found

var dom_select = function select(selector, root) {
  return (isElement(root) ? root : d).querySelector(selector) || null;
}; // Determine if an element matches a selector

var matches = function matches(el, selector) {
  if (!isElement(el)) {
    return false;
  }

  return matchesEl.call(el, selector);
}; // Finds closest element matching selector. Returns `null` if not found

var closest = function closest(selector, root) {
  var includeRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isElement(root)) {
    return null;
  }

  var el = closestEl.call(root, selector); // Native closest behaviour when `includeRoot` is truthy,
  // else emulate jQuery closest and return `null` if match is
  // the passed in root element when `includeRoot` is falsey

  return includeRoot ? el : el === root ? null : el;
}; // Returns true if the parent element contains the child element

var dom_contains = function contains(parent, child) {
  if (!parent || !isFunction(parent.contains)) {
    return false;
  }

  return parent.contains(child);
}; // Get an element given an ID

var getById = function getById(id) {
  return d.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element

var setAttr = function setAttr(el, attr, val) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, val);
  }
}; // Remove an attribute from an element

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element
// Returns `null` if not found

var getAttr = function getAttr(el, attr) {
  return attr && isElement(el) ? el.getAttribute(attr) : null;
}; // Determine if an attribute exists on an element
// Returns `true` or `false`, or `null` if element not found

var hasAttr = function hasAttr(el, attr) {
  return attr && isElement(el) ? el.hasAttribute(attr) : null;
}; // Return the Bounding Client Rect of an element
// Returns `null` if not an element

/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */

var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element

/* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */

var dom_getCS = function getCS(el) {
  return env["c" /* hasWindowSupport */] && isElement(el) ? dom_w.getComputedStyle(el) : {};
}; // Returns a `Selection` object representing the range of text selected
// Returns `null` if no window support is given

/* istanbul ignore next: getSelection() doesn't work in JSDOM */

var dom_getSel = function getSel() {
  return env["c" /* hasWindowSupport */] && dom_w.getSelection ? dom_w.getSelection() : null;
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to it's offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position

var position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = dom_getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && dom_getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = dom_getCS(offsetParent);
      parentOffset.top += parseFloat(offsetParentStyles.borderTopWidth);
      parentOffset.left += parseFloat(offsetParentStyles.borderLeftWidth);
    }
  }

  return {
    top: _offset.top - parentOffset.top - parseFloat(elStyles.marginTop),
    left: _offset.left - parentOffset.left - parseFloat(elStyles.marginLeft)
  };
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-state.js
/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true for is-valid
 *  - false for is-invalid
 *  - null for no contextual state
 */
 // @vue/component

/* harmony default export */ var form_state = ({
  props: {
    state: {
      // Tri-state prop: true, false, null (or undefined)
      type: Boolean,
      default: null
    }
  },
  computed: {
    computedState: function computedState() {
      // If not a boolean, ensure that value is null
      return inspect_isBoolean(this.state) ? this.state : null;
    },
    stateClass: function stateClass() {
      var state = this.computedState;

      if (state === true) {
        return 'is-valid';
      } else if (state === false) {
        return 'is-invalid';
      }

      return null;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/id.js
/*
 * SSR Safe Client Side ID attribute generation
 * id's can only be generated client side, after mount.
 * this._uid is not synched between server and client.
 */
// @vue/component
/* harmony default export */ var mixins_id = ({
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID.
      // Reacts to changes in both .id and .localId_ And regens a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method!!!
      // But benefits from Vue's Computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // mounted only occurs client side
    this.$nextTick(function () {
      // Update dom with auto ID after dom loaded to prevent
      // SSR hydration errors.
      _this.localId_ = "__BVID__".concat(_this._uid);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/normalize-slot.js

 // Note for functional components:
// In functional components, `slots` is a function so it must be called
// first before passing to the below methods. `scopedSlots` is always an
// object and may be undefined (for Vue < 2.6.x)

/**
 * Returns true if either scoped or unscoped named slot exists
 *
 * @param {String, Array} name or name[]
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var normalize_slot_hasNormalizedSlot = function hasNormalizedSlot(names) {
  var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Ensure names is an array
  names = concat(names).filter(Boolean); // Returns true if the either a $scopedSlot or $slot exists with the specified name

  return names.some(function (name) {
    return $scopedSlots[name] || $slots[name];
  });
};
/**
 * Returns VNodes for named slot either scoped or unscoped
 *
 * @param {String, Array} name or name[]
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */


var normalize_slot_normalizeSlot = function normalizeSlot(names) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Ensure names is an array
  names = concat(names).filter(Boolean);
  var slot;

  for (var i = 0; i < names.length && !slot; i++) {
    var name = names[i];
    slot = $scopedSlots[name] || $slots[name];
  } // Note: in Vue 2.6.x, all named slots are also scoped slots


  return isFunction(slot) ? slot(scope) : slot;
}; // Named exports


 // Default export (backwards compatibility)

/* harmony default export */ var normalize_slot = (normalize_slot_normalizeSlot);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js


/* harmony default export */ var mixins_normalize_slot = ({
  methods: {
    hasNormalizedSlot: function hasNormalizedSlot(names) {
      // Returns true if the either a $scopedSlot or $slot exists with the specified name
      // `names` can be a string name or an array of names
      return normalize_slot_hasNormalizedSlot(names, this.$scopedSlots, this.$slots);
    },
    normalizeSlot: function normalizeSlot(names) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Returns an array of rendered VNodes if slot found.
      // Returns undefined if not found.
      // `names` can be a string name or an array of names
      var vNodes = normalize_slot_normalizeSlot(names, scope, this.$scopedSlots, this.$slots);

      return vNodes ? concat(vNodes) : vNodes;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/suffix-prop-name.js

/**
 * Suffix can be a falsey value so nothing is appended to string.
 * (helps when looping over props & some shouldn't change)
 * Use data last parameters to allow for currying.
 * @param {string} suffix
 * @param {string} str
 */

var suffix_prop_name_suffixPropName = function suffixPropName(suffix, str) {
  return str + (suffix ? upper_first(suffix) : '');
};

/* harmony default export */ var suffix_prop_name = (suffix_prop_name_suffixPropName);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/layout/col.js
function col_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function col_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { col_ownKeys(source, true).forEach(function (key) { col_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { col_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function col_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Generates a prop object with a type of `[Boolean, String, Number]`

var boolStrNum = function boolStrNum() {
  return {
    type: [Boolean, String, Number],
    default: false
  };
}; // Generates a prop object with a type of `[String, Number]`


var strNum = function strNum() {
  return {
    type: [String, Number],
    default: null
  };
}; // Compute a breakpoint class name


var col_computeBreakpoint = function computeBreakpoint(type, breakpoint, val) {
  var className = type;

  if (isUndefined(val) || isNull(val) || val === false) {
    return undefined;
  }

  if (breakpoint) {
    className += "-".concat(breakpoint);
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <b-col sm></b-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += "-".concat(val);
  return className.toLowerCase();
}; // Memoized function for better performance on generating class names


var computeBreakpointClass = utils_memoize(col_computeBreakpoint); // Cached copy of the breakpoint prop names

var breakpointPropMap = create(null); // Lazy evaled props factory for BCol

var col_generateProps = function generateProps() {
  // Grab the breakpoints from the cached config (exclude the '' (xs) breakpoint)
  var breakpoints = getBreakpointsUpCached().filter(Boolean); // Supports classes like: .col-sm, .col-md-6, .col-lg-auto

  var breakpointCol = breakpoints.reduce(function (propMap, breakpoint) {
    if (breakpoint) {
      // We filter out the '' breakpoint (xs), as making a prop name ''
      // would not work. The `cols` prop is used for `xs`
      propMap[breakpoint] = boolStrNum();
    }

    return propMap;
  }, create(null)); // Supports classes like: .offset-md-1, .offset-lg-12

  var breakpointOffset = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[suffix_prop_name(breakpoint, 'offset')] = strNum();
    return propMap;
  }, create(null)); // Supports classes like: .order-md-1, .order-lg-12

  var breakpointOrder = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[suffix_prop_name(breakpoint, 'order')] = strNum();
    return propMap;
  }, create(null)); // For loop doesn't need to check hasOwnProperty
  // when using an object created from null

  breakpointPropMap = object_assign(create(null), {
    col: keys(breakpointCol),
    offset: keys(breakpointOffset),
    order: keys(breakpointOrder)
  }); // Return the generated props

  return col_objectSpread({
    // Generic flexbox .col (xs)
    col: {
      type: Boolean,
      default: false
    },
    // .col-[1-12]|auto  (xs)
    cols: strNum()
  }, breakpointCol, {
    offset: strNum()
  }, breakpointOffset, {
    order: strNum()
  }, breakpointOrder, {
    // Flex alignment
    alignSelf: {
      type: String,
      default: null,
      validator: function validator(str) {
        return arrayIncludes(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], str);
      }
    },
    tag: {
      type: String,
      default: 'div'
    }
  });
}; // We do not use Vue.extend here as that would evaluate the props
// immediately, which we do not want to happen
// @vue/component


var BCol = {
  name: 'BCol',
  functional: true,

  get props() {
    // Allow props to be lazy evaled on first access and
    // then they become a non-getter afterwards.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
    delete this.props; // eslint-disable-next-line no-return-assign

    return this.props = col_generateProps();
  },

  render: function render(h, _ref) {
    var _classList$push;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var classList = []; // Loop through `col`, `offset`, `order` breakpoint props

    for (var type in breakpointPropMap) {
      // Returns colSm, offset, offsetSm, orderMd, etc.
      var _keys = breakpointPropMap[type];

      for (var i = 0; i < _keys.length; i++) {
        // computeBreakpoint(col, colSm => Sm, value=[String, Number, Boolean])
        var c = computeBreakpointClass(type, _keys[i].replace(type, ''), props[_keys[i]]); // If a class is returned, push it onto the array.

        if (c) {
          classList.push(c);
        }
      }
    }

    var hasColClasses = classList.some(function (className) {
      return /^col-/.test(className);
    });
    classList.push((_classList$push = {
      // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
      col: props.col || !hasColClasses && !props.cols
    }, col_defineProperty(_classList$push, "col-".concat(props.cols), props.cols), col_defineProperty(_classList$push, "offset-".concat(props.offset), props.offset), col_defineProperty(_classList$push, "order-".concat(props.order), props.order), col_defineProperty(_classList$push, "align-self-".concat(props.alignSelf), props.alignSelf), _classList$push));
    return h(props.tag, lib_esm_a(data, {
      class: classList
    }), children);
  }
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/layout/form-row.js


var form_row_props = {
  tag: {
    type: String,
    default: 'div'
  }
}; // @vue/component

var BFormRow =
/*#__PURE__*/
vue.extend({
  name: 'BFormRow',
  functional: true,
  props: form_row_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, lib_esm_a(data, {
      staticClass: 'form-row'
    }), children);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form/form-text.js
function form_text_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NAME = 'BFormText';
var form_text_props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'small'
  },
  textVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME, 'textVariant');
    }
  },
  inline: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BFormText =
/*#__PURE__*/
vue.extend({
  name: NAME,
  functional: true,
  props: form_text_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, lib_esm_a(data, {
      class: form_text_defineProperty({
        'form-text': !props.inline
      }, "text-".concat(props.textVariant), Boolean(props.textVariant)),
      attrs: {
        id: props.id
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form/form-invalid-feedback.js


var form_invalid_feedback_props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: Boolean,
    default: null
  },
  ariaLive: {
    type: String,
    default: null
  },
  role: {
    type: String,
    default: null
  }
}; // @vue/component

var BFormInvalidFeedback =
/*#__PURE__*/
vue.extend({
  name: 'BFormInvalidFeedback',
  functional: true,
  props: form_invalid_feedback_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === false;
    return h(props.tag, lib_esm_a(data, {
      class: {
        'invalid-feedback': !props.tooltip,
        'invalid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id,
        role: props.role,
        'aria-live': props.ariaLive,
        'aria-atomic': props.ariaLive ? 'true' : null
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form/form-valid-feedback.js


var form_valid_feedback_props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: Boolean,
    default: null
  },
  ariaLive: {
    type: String,
    default: null
  },
  role: {
    type: String,
    default: null
  }
}; // @vue/component

var BFormValidFeedback =
/*#__PURE__*/
vue.extend({
  name: 'BFormValidFeedback',
  functional: true,
  props: form_valid_feedback_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === true;
    return h(props.tag, lib_esm_a(data, {
      class: {
        'valid-feedback': !props.tooltip,
        'valid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id,
        role: props.role,
        'aria-live': props.ariaLive,
        'aria-atomic': props.ariaLive ? 'true' : null
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form-group/form-group.js
function form_group_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function form_group_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { form_group_ownKeys(source, true).forEach(function (key) { form_group_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { form_group_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function form_group_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Utils







 // Mixins



 // Sub components





 // Component name

var form_group_NAME = 'BFormGroup'; // Selector for finding first input in the form-group

var SELECTOR = 'input:not([disabled]),textarea:not([disabled]),select:not([disabled])'; // Render helper functions (here rather than polluting the instance with more methods)

var form_group_renderInvalidFeedback = function renderInvalidFeedback(h, ctx) {
  var content = ctx.normalizeSlot('invalid-feedback') || ctx.invalidFeedback;
  var invalidFeedback = h();

  if (content) {
    invalidFeedback = h(BFormInvalidFeedback, {
      props: {
        id: ctx.invalidFeedbackId,
        // If state is explicitly false, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip,
        ariaLive: ctx.feedbackAriaLive,
        role: ctx.feedbackAriaLive ? 'alert' : null
      },
      attrs: {
        tabindex: content ? '-1' : null
      }
    }, [content]);
  }

  return invalidFeedback;
};

var form_group_renderValidFeedback = function renderValidFeedback(h, ctx) {
  var content = ctx.normalizeSlot('valid-feedback') || ctx.validFeedback;
  var validFeedback = h();

  if (content) {
    validFeedback = h(BFormValidFeedback, {
      props: {
        id: ctx.validFeedbackId,
        // If state is explicitly true, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip,
        ariaLive: ctx.feedbackAriaLive,
        role: ctx.feedbackAriaLive ? 'alert' : null
      },
      attrs: {
        tabindex: content ? '-1' : null
      }
    }, [content]);
  }

  return validFeedback;
};

var form_group_renderHelpText = function renderHelpText(h, ctx) {
  // Form help text (description)
  var content = ctx.normalizeSlot('description') || ctx.description;
  var description = h();

  if (content) {
    description = h(BFormText, {
      attrs: {
        id: ctx.descriptionId,
        tabindex: content ? '-1' : null
      }
    }, [content]);
  }

  return description;
};

var form_group_renderLabel = function renderLabel(h, ctx) {
  // Render label/legend inside b-col if necessary
  var content = ctx.normalizeSlot('label') || ctx.label;
  var labelFor = ctx.labelFor;
  var isLegend = !labelFor;
  var isHorizontal = ctx.isHorizontal;
  var labelTag = isLegend ? 'legend' : 'label';

  if (!content && !isHorizontal) {
    return h();
  } else if (ctx.labelSrOnly) {
    var label = h();

    if (content) {
      label = h(labelTag, {
        class: 'sr-only',
        attrs: {
          id: ctx.labelId,
          for: labelFor || null
        }
      }, [content]);
    }

    return h(isHorizontal ? BCol : 'div', {
      props: isHorizontal ? ctx.labelColProps : {}
    }, [label]);
  } else {
    return h(isHorizontal ? BCol : labelTag, {
      on: isLegend ? {
        click: ctx.legendClick
      } : {},
      props: isHorizontal ? form_group_objectSpread({
        tag: labelTag
      }, ctx.labelColProps) : {},
      attrs: {
        id: ctx.labelId,
        for: labelFor || null,
        // We add a tab index to legend so that screen readers
        // will properly read the aria-labelledby in IE.
        tabindex: isLegend ? '-1' : null
      },
      class: [// When horizontal or if a legend is rendered, add col-form-label
      // for correct sizing as Bootstrap has inconsistent font styling
      // for legend in non-horizontal form-groups.
      // See: https://github.com/twbs/bootstrap/issues/27805
      isHorizontal || isLegend ? 'col-form-label' : '', // Emulate label padding top of 0 on legend when not horizontal
      !isHorizontal && isLegend ? 'pt-0' : '', // If not horizontal and not a legend, we add d-block to label
      // so that label-align works
      !isHorizontal && !isLegend ? 'd-block' : '', ctx.labelSize ? "col-form-label-".concat(ctx.labelSize) : '', ctx.labelAlignClasses, ctx.labelClass]
    }, [content]);
  }
}; // -- BFormGroup Prop factory -- used for lazy generation of props
// Memoize this function to return cached values to
// save time in computed functions


var makePropName = utils_memoize(function () {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prefix = arguments.length > 1 ? arguments[1] : undefined;
  return "".concat(prefix).concat(upper_first(breakpoint));
}); // BFormGroup prop generator for lazy generation of props

var form_group_generateProps = function generateProps() {
  var BREAKPOINTS = getBreakpointsUpCached(); // Generate the labelCol breakpoint props

  var bpLabelColProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // i.e. label-cols, label-cols-sm, label-cols-md, ...
    props[makePropName(breakpoint, 'labelCols')] = {
      type: [Number, String, Boolean],
      default: breakpoint ? false : null
    };
    return props;
  }, create(null)); // Generate the labelAlign breakpoint props

  var bpLabelAlignProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // label-align, label-align-sm, label-align-md, ...
    props[makePropName(breakpoint, 'labelAlign')] = {
      type: String,
      // left, right, center
      default: null
    };
    return props;
  }, create(null));
  return form_group_objectSpread({
    label: {
      type: String,
      default: null
    },
    labelFor: {
      type: String,
      default: null
    },
    labelSize: {
      type: String,
      default: null
    },
    labelSrOnly: {
      type: Boolean,
      default: false
    }
  }, bpLabelColProps, {}, bpLabelAlignProps, {
    labelClass: {
      type: [String, Array, Object],
      default: null
    },
    description: {
      type: String,
      default: null
    },
    invalidFeedback: {
      type: String,
      default: null
    },
    validFeedback: {
      type: String,
      default: null
    },
    tooltip: {
      // Enable tooltip style feedback
      type: Boolean,
      default: false
    },
    feedbackAriaLive: {
      type: String,
      default: 'assertive'
    },
    validated: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });
}; // We do not use Vue.extend here as that would evaluate the props
// immediately, which we do not want to happen
// @vue/component


var BFormGroup = {
  name: form_group_NAME,
  mixins: [mixins_id, form_state, mixins_normalize_slot],

  get props() {
    // Allow props to be lazy evaled on first access and
    // then they become a non-getter afterwards.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
    delete this.props; // eslint-disable-next-line no-return-assign

    return this.props = form_group_generateProps();
  },

  computed: {
    labelColProps: function labelColProps() {
      var _this = this;

      var props = {};
      getBreakpointsUpCached().forEach(function (breakpoint) {
        // Grab the value if the label column breakpoint prop
        var propVal = _this[makePropName(breakpoint, 'labelCols')]; // Handle case where the prop's value is an empty string,
        // which represents true


        propVal = propVal === '' ? true : propVal || false;

        if (!inspect_isBoolean(propVal)) {
          // Convert to column size to number
          propVal = parseInt(propVal, 10) || 0; // Ensure column size is greater than 0

          propVal = propVal > 0 ? propVal : false;
        }

        if (propVal) {
          // Add the prop to the list of props to give to b-col
          // If breakpoint is '' (labelCols=true), then we use the
          // col prop to make equal width at xs
          var bColPropName = breakpoint || (inspect_isBoolean(propVal) ? 'col' : 'cols'); // Add it to the props

          props[bColPropName] = propVal;
        }
      });
      return props;
    },
    labelAlignClasses: function labelAlignClasses() {
      var _this2 = this;

      var classes = [];
      getBreakpointsUpCached().forEach(function (breakpoint) {
        // Assemble the label column breakpoint align classes
        var propVal = _this2[makePropName(breakpoint, 'labelAlign')] || null;

        if (propVal) {
          var className = breakpoint ? "text-".concat(breakpoint, "-").concat(propVal) : "text-".concat(propVal);
          classes.push(className);
        }
      });
      return classes;
    },
    isHorizontal: function isHorizontal() {
      // Determine if the resultant form-group will be rendered
      // horizontal (meaning it has label-col breakpoints)
      return keys(this.labelColProps).length > 0;
    },
    labelId: function labelId() {
      return this.hasNormalizedSlot('label') || this.label ? this.safeId('_BV_label_') : null;
    },
    descriptionId: function descriptionId() {
      return this.hasNormalizedSlot('description') || this.description ? this.safeId('_BV_description_') : null;
    },
    hasInvalidFeedback: function hasInvalidFeedback() {
      // Used for computing aria-describedby
      return this.computedState === false && (this.hasNormalizedSlot('invalid-feedback') || this.invalidFeedback);
    },
    invalidFeedbackId: function invalidFeedbackId() {
      return this.hasInvalidFeedback ? this.safeId('_BV_feedback_invalid_') : null;
    },
    hasValidFeedback: function hasValidFeedback() {
      // Used for computing aria-describedby
      return this.computedState === true && (this.hasNormalizedSlot('valid-feedback') || this.validFeedback);
    },
    validFeedbackId: function validFeedbackId() {
      return this.hasValidFeedback ? this.safeId('_BV_feedback_valid_') : null;
    },
    describedByIds: function describedByIds() {
      // Screen readers will read out any content linked to by aria-describedby
      // even if the content is hidden with `display: none;`, hence we only include
      // feedback IDs if the form-group's state is explicitly valid or invalid.
      return [this.descriptionId, this.invalidFeedbackId, this.validFeedbackId].filter(Boolean).join(' ') || null;
    }
  },
  watch: {
    describedByIds: function describedByIds(add, remove) {
      if (add !== remove) {
        this.setInputDescribedBy(add, remove);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      // Set the aria-describedby IDs on the input specified by label-for
      // We do this in a nextTick to ensure the children have finished rendering
      _this3.setInputDescribedBy(_this3.describedByIds);
    });
  },
  methods: {
    legendClick: function legendClick(evt) {
      if (this.labelFor) {
        // Don't do anything if labelFor is set

        /* istanbul ignore next: clicking a label will focus the input, so no need to test */
        return;
      }

      var tagName = evt.target ? evt.target.tagName : '';

      if (/^(input|select|textarea|label|button|a)$/i.test(tagName)) {
        // If clicked an interactive element inside legend,
        // we just let the default happen

        /* istanbul ignore next */
        return;
      }

      var inputs = dom_selectAll(SELECTOR, this.$refs.content).filter(isVisible);

      if (inputs && inputs.length === 1 && inputs[0].focus) {
        // if only a single input, focus it, emulating label behaviour
        inputs[0].focus();
      }
    },
    setInputDescribedBy: function setInputDescribedBy(add, remove) {
      // Sets the `aria-describedby` attribute on the input if label-for is set.
      // Optionally accepts a string of IDs to remove as the second parameter.
      // Preserves any aria-describedby value(s) user may have on input.
      if (this.labelFor && env["d" /* isBrowser */]) {
        var input = dom_select("#".concat(this.labelFor), this.$refs.content);

        if (input) {
          var adb = 'aria-describedby';
          var ids = (getAttr(input, adb) || '').split(/\s+/);
          add = (add || '').split(/\s+/);
          remove = (remove || '').split(/\s+/); // Update ID list, preserving any original IDs
          // and ensuring the ID's are unique

          ids = ids.filter(function (id) {
            return !arrayIncludes(remove, id);
          }).concat(add).filter(Boolean);
          ids = keys(ids.reduce(function (memo, id) {
            return form_group_objectSpread({}, memo, form_group_defineProperty({}, id, true));
          }, {})).join(' ').trim();

          if (ids) {
            setAttr(input, adb, ids);
          } else {
            // No IDs, so remove the attribute
            removeAttr(input, adb);
          }
        }
      }
    }
  },
  render: function render(h) {
    var isFieldset = !this.labelFor;
    var isHorizontal = this.isHorizontal; // Generate the label

    var label = form_group_renderLabel(h, this); // Generate the content

    var content = h(isHorizontal ? BCol : 'div', {
      ref: 'content',
      attrs: {
        tabindex: isFieldset ? '-1' : null,
        role: isFieldset ? 'group' : null
      }
    }, [this.normalizeSlot('default') || h(), form_group_renderInvalidFeedback(h, this), form_group_renderValidFeedback(h, this), form_group_renderHelpText(h, this)]); // Create the form-group

    var data = {
      staticClass: 'form-group',
      class: [this.validated ? 'was-validated' : null, this.stateClass],
      attrs: {
        id: this.safeId(),
        disabled: isFieldset ? this.disabled : null,
        role: isFieldset ? null : 'group',
        'aria-invalid': this.computedState === false ? 'true' : null,
        // Only apply aria-labelledby if we are a horizontal fieldset
        // as the legend is no longer a direct child of fieldset
        'aria-labelledby': isFieldset && isHorizontal ? this.labelId : null,
        // Only apply aria-describedby IDs if we are a fieldset
        // as the input will have the IDs when not a fieldset
        'aria-describedby': isFieldset ? this.describedByIds : null
      }
    }; // Return it wrapped in a form-group
    // Note: Fieldsets do not support adding `row` or `form-row` directly
    // to them due to browser specific render issues, so we move the `form-row`
    // to an inner wrapper div when horizontal and using a fieldset

    return h(isFieldset ? 'fieldset' : isHorizontal ? BFormRow : 'div', data, isHorizontal && isFieldset ? [h(BFormRow, {}, [label, content])] : [label, content]);
  }
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form.js

var form_SELECTOR = 'input, textarea, select'; // @vue/component

/* harmony default export */ var mixins_form = ({
  props: {
    name: {
      type: String // default: undefined

    },
    id: {
      type: String // default: undefined

    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.handleAutofocus();
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    this.handleAutofocus();
  },
  methods: {
    handleAutofocus: function handleAutofocus() {
      var _this = this;

      this.$nextTick(function () {
        requestAF(function () {
          var el = _this.$el;

          if (_this.autofocus && isVisible(el)) {
            if (!matches(el, form_SELECTOR)) {
              el = dom_select(form_SELECTOR, el);
            }

            el && el.focus && el.focus();
          }
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-size.js
 // @vue/component

/* harmony default export */ var form_size = ({
  props: {
    size: {
      type: String,
      default: function _default() {
        return getComponentConfig('formControls', 'size');
      }
    }
  },
  computed: {
    sizeFormClass: function sizeFormClass() {
      return [this.size ? "form-control-".concat(this.size) : null];
    },
    sizeBtnClass: function sizeBtnClass()
    /* istanbul ignore next: don't think this is used */
    {
      return [this.size ? "btn-".concat(this.size) : null];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-text.js
 // @vue/component

/* harmony default export */ var form_text = ({
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    plaintext: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    formatter: {
      type: Function,
      default: null
    },
    trim: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    lazyFormatter: {
      type: Boolean,
      value: false
    }
  },
  data: function data() {
    return {
      localValue: this.stringifyValue(this.value)
    };
  },
  computed: {
    computedClass: function computedClass() {
      return [{
        // Range input needs class custom-range
        'custom-range': this.type === 'range',
        // plaintext not supported by type=range or type=color
        'form-control-plaintext': this.plaintext && this.type !== 'range' && this.type !== 'color',
        // form-control not used by type=range or plaintext. Always used by type=color
        'form-control': !this.plaintext && this.type !== 'range' || this.type === 'color'
      }, this.sizeFormClass, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (!this.ariaInvalid || this.ariaInvalid === 'false') {
        // this.ariaInvalid is null or false or 'false'
        return this.computedState === false ? 'true' : null;
      }

      if (this.ariaInvalid === true) {
        // User wants explicit aria-invalid=true
        return 'true';
      } // Most likely a string value (which could be the string 'true')


      return this.ariaInvalid;
    }
  },
  watch: {
    value: function value(newVal) {
      if (newVal !== this.localValue) {
        this.localValue = this.stringifyValue(newVal);
      }
    }
  },
  mounted: function mounted() {
    var value = this.stringifyValue(this.value);

    if (value !== this.localValue) {
      /* istanbul ignore next */
      this.localValue = value;
    }
  },
  methods: {
    stringifyValue: function stringifyValue(value) {
      return isUndefined(value) || isNull(value) ? '' : String(value);
    },
    getFormatted: function getFormatted(value, evt) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      value = this.stringifyValue(value);

      if ((!this.lazyFormatter || force) && isFunction(this.formatter)) {
        value = this.formatter(value, evt);
      }

      return value;
    },
    updateValue: function updateValue(value) {
      value = this.stringifyValue(value);

      if (value !== this.localValue) {
        // Keep the input set to the value before modifiers
        this.localValue = value;

        if (this.number) {
          // Emulate `.number` modifier behaviour
          var num = parseFloat(value);
          value = isNaN(num) ? value : num;
        } else if (this.trim) {
          // Emulate `.trim` modifier behaviour
          value = value.trim();
        } // Update the v-model


        this.$emit('update', value);
      } else if (this.$refs.input && value !== this.$refs.input.value) {
        // When the `localValue` hasn't changed but the actual input value
        // is out of sync, make sure to change it to the given one.
        // Usually casued by browser autocomplete and how it triggers the
        // change or input event, or depending on the formatter function.
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/2657
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/3498

        /* istanbul ignore next: hard to test */
        this.$refs.input.value = value;
      }
    },
    onInput: function onInput(evt) {
      // `evt.target.composing` is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js

      /* istanbul ignore if: hard to test composition events */
      if (evt.target.composing) {
        return;
      }

      var formatted = this.getFormatted(evt.target.value, evt); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      if (formatted === false || evt.defaultPrevented) {
        /* istanbul ignore next */
        evt.preventDefault();
        return;
      }

      this.updateValue(formatted);
      this.$emit('input', formatted);
    },
    onChange: function onChange(evt) {
      // `evt.target.composing` is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js

      /* istanbul ignore if: hard to test composition events */
      if (evt.target.composing) {
        return;
      }

      var formatted = this.getFormatted(evt.target.value, evt); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      if (formatted === false || evt.defaultPrevented) {
        /* istanbul ignore next */
        evt.preventDefault();
        return;
      }

      this.updateValue(formatted);
      this.$emit('change', formatted);
    },
    onBlur: function onBlur(evt) {
      // Lazy formatter
      if (this.lazyFormatter) {
        var formatted = this.getFormatted(evt.target.value, evt, true); // Exit when the `formatter` function strictly returned `false`

        if (formatted === false) {
          return;
        }

        this.updateValue(formatted);
      } // Emit native blur event


      this.$emit('blur', evt);
    },
    focus: function focus() {
      // For external handler that may want a focus method
      if (!this.disabled) {
        this.$el.focus();
      }
    },
    blur: function blur() {
      // For external handler that may want a blur method
      if (!this.disabled) {
        this.$el.blur();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-selection.js
// @vue/component
/* harmony default export */ var form_selection = ({
  computed: {
    selectionStart: {
      // Expose selectionStart for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionStart;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionStart = val;
      }
    },
    selectionEnd: {
      // Expose selectionEnd for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionEnd;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionEnd = val;
      }
    },
    selectionDirection: {
      // Expose selectionDirection for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionDirection;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionDirection = val;
      }
    }
  },
  methods: {
    select: function select()
    /* istanbul ignore next */
    {
      var _this$$refs$input;

      // For external handler that may want a select() method
      (_this$$refs$input = this.$refs.input).select.apply(_this$$refs$input, arguments);
    },
    setSelectionRange: function setSelectionRange()
    /* istanbul ignore next */
    {
      var _this$$refs$input2;

      // For external handler that may want a setSelectionRange(a,b,c) method
      (_this$$refs$input2 = this.$refs.input).setSelectionRange.apply(_this$$refs$input2, arguments);
    },
    setRangeText: function setRangeText()
    /* istanbul ignore next */
    {
      var _this$$refs$input3;

      // For external handler that may want a setRangeText(a,b,c) method
      (_this$$refs$input3 = this.$refs.input).setRangeText.apply(_this$$refs$input3, arguments);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-validity.js
// @vue/component
/* harmony default export */ var form_validity = ({
  computed: {
    validity: {
      // Expose validity property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.validity;
      }
    },
    validationMessage: {
      // Expose validationMessage property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.validationMessage;
      }
    },
    willValidate: {
      // Expose willValidate property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.willValidate;
      }
    }
  },
  methods: {
    setCustomValidity: function setCustomValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input;

      // For external handler that may want a setCustomValidity(...) method
      return (_this$$refs$input = this.$refs.input).setCustomValidity.apply(_this$$refs$input, arguments);
    },
    checkValidity: function checkValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input2;

      // For external handler that may want a checkValidity(...) method
      return (_this$$refs$input2 = this.$refs.input).checkValidity.apply(_this$$refs$input2, arguments);
    },
    reportValidity: function reportValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input3;

      // For external handler that may want a reportValidity(...) method
      return (_this$$refs$input3 = this.$refs.input).reportValidity.apply(_this$$refs$input3, arguments);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form-input/form-input.js
function form_input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function form_input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { form_input_ownKeys(source, true).forEach(function (key) { form_input_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { form_input_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function form_input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // Valid supported input types

var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; // @vue/component

var BFormInput =
/*#__PURE__*/
vue.extend({
  name: 'BFormInput',
  mixins: [mixins_id, mixins_form, form_size, form_state, form_text, form_selection, form_validity],
  props: {
    // value prop defined in form-text mixin
    // value: { },
    type: {
      type: String,
      default: 'text',
      validator: function validator(type) {
        return arrayIncludes(TYPES, type);
      }
    },
    noWheel: {
      // Disable mousewheel to prevent wheel from changing values (i.e. number/date).
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    step: {
      type: [String, Number],
      default: null
    },
    list: {
      type: String,
      default: null
    }
  },
  computed: {
    localType: function localType() {
      // We only allow certain types
      return arrayIncludes(TYPES, this.type) ? this.type : 'text';
    }
  },
  watch: {
    noWheel: function noWheel(newVal) {
      this.setWheelStopper(newVal);
    }
  },
  mounted: function mounted() {
    this.setWheelStopper(this.noWheel);
  },
  deactivated: function deactivated() {
    // Turn off listeners when keep-alive component deactivated

    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  activated: function activated() {
    // Turn on listeners (if no-wheel) when keep-alive component activated

    /* istanbul ignore next */
    this.setWheelStopper(this.noWheel);
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  methods: {
    setWheelStopper: function setWheelStopper(on) {
      var input = this.$el; // We use native events, so that we don't interfere with propgation

      if (on) {
        eventOn(input, 'focus', this.onWheelFocus);
        eventOn(input, 'blur', this.onWheelBlur);
      } else {
        eventOff(input, 'focus', this.onWheelFocus);
        eventOff(input, 'blur', this.onWheelBlur);
        eventOff(document, 'wheel', this.stopWheel);
      }
    },
    onWheelFocus: function onWheelFocus(evt) {
      eventOn(document, 'wheel', this.stopWheel);
    },
    onWheelBlur: function onWheelBlur(evt) {
      eventOff(document, 'wheel', this.stopWheel);
    },
    stopWheel: function stopWheel(evt) {
      evt.preventDefault();
      this.$el.blur();
    }
  },
  render: function render(h) {
    var self = this;
    return h('input', {
      ref: 'input',
      class: self.computedClass,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: self.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: self.safeId(),
        name: self.name,
        form: self.form || null,
        type: self.localType,
        disabled: self.disabled,
        placeholder: self.placeholder,
        required: self.required,
        autocomplete: self.autocomplete || null,
        readonly: self.readonly || self.plaintext,
        min: self.min,
        max: self.max,
        step: self.step,
        list: self.localType !== 'password' ? self.list : null,
        'aria-required': self.required ? 'true' : null,
        'aria-invalid': self.computedAriaInvalid
      },
      domProps: {
        value: self.localValue
      },
      on: form_input_objectSpread({}, self.$listeners, {
        input: self.onInput,
        change: self.onChange,
        blur: self.onBlur
      })
    });
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/prefix-prop-name.js

/**
 * @param {string} prefix
 * @param {string} value
 */

var prefix_prop_name_prefixPropName = function prefixPropName(prefix, value) {
  return prefix + upper_first(value);
};

/* harmony default export */ var prefix_prop_name = (prefix_prop_name_prefixPropName);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/lower-first.js
/**
 * @param {string} str
 */
var lowerFirst = function lowerFirst(str) {
  str = String(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};

/* harmony default export */ var lower_first = (lowerFirst);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/unprefix-prop-name.js

/**
 * @param {string} prefix
 * @param {string} value
 */

var unprefix_prop_name_unprefixPropName = function unprefixPropName(prefix, value) {
  return lower_first(value.replace(prefix, ''));
};

/* harmony default export */ var unprefix_prop_name = (unprefix_prop_name_unprefixPropName);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/identity.js
var identity = function identity(x) {
  return x;
};

/* harmony default export */ var utils_identity = (identity);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/copy-props.js
function copy_props_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function copy_props_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { copy_props_ownKeys(source, true).forEach(function (key) { copy_props_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { copy_props_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function copy_props_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Copies props from one array/object to a new array/object. Prop values
 * are also cloned as new references to prevent possible mutation of original
 * prop object values. Optionally accepts a function to transform the prop name.
 *
 * @param {[]|{}} props
 * @param {Function} transformFn
 */

var copy_props_copyProps = function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : utils_identity;

  if (isArray(props)) {
    return props.map(transformFn);
  } // Props as an object.


  var copied = {};

  for (var prop in props) {
    /* istanbul ignore else */
    // eslint-disable-next-line no-prototype-builtins
    if (props.hasOwnProperty(prop)) {
      // If the prop value is an object, do a shallow clone to prevent
      // potential mutations to the original object.
      copied[transformFn(prop)] = isObject(props[prop]) ? copy_props_objectSpread({}, props[prop]) : props[prop];
    }
  }

  return copied;
};

/* harmony default export */ var copy_props = (copy_props_copyProps);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/pluck-props.js



/**
 * Given an array of properties or an object of property keys,
 * plucks all the values off the target object, returning a new object
 * that has props that reference the original prop values
 *
 * @param {{}|string[]} keysToPluck
 * @param {{}} objToPluck
 * @param {Function} transformFn
 * @return {{}}
 */

var pluck_props_pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : utils_identity;
  return (isArray(keysToPluck) ? keysToPluck.slice() : keys(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
};

/* harmony default export */ var pluck_props = (pluck_props_pluckProps);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/card.js
// @vue/component
/* harmony default export */ var card = ({
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    bgVariant: {
      type: String,
      default: null
    },
    borderVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/card/card-title.js


var card_title_props = {
  title: {
    type: String,
    default: ''
  },
  titleTag: {
    type: String,
    default: 'h4'
  }
}; // @vue/component

var BCardTitle =
/*#__PURE__*/
vue.extend({
  name: 'BCardTitle',
  functional: true,
  props: card_title_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.titleTag, lib_esm_a(data, {
      staticClass: 'card-title'
    }), children || props.title);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/card/card-sub-title.js



var card_sub_title_NAME = 'BCardSubTitle';
var card_sub_title_props = {
  subTitle: {
    type: String,
    default: ''
  },
  subTitleTag: {
    type: String,
    default: 'h6'
  },
  subTitleTextVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(card_sub_title_NAME, 'subTitleTextVariant');
    }
  }
}; // @vue/component

var BCardSubTitle =
/*#__PURE__*/
vue.extend({
  name: card_sub_title_NAME,
  functional: true,
  props: card_sub_title_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.subTitleTag, lib_esm_a(data, {
      staticClass: 'card-subtitle',
      class: [props.subTitleTextVariant ? "text-".concat(props.subTitleTextVariant) : null]
    }), children || props.subTitle);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/card/card-body.js
function card_body_toConsumableArray(arr) { return card_body_arrayWithoutHoles(arr) || card_body_iterableToArray(arr) || card_body_nonIterableSpread(); }

function card_body_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function card_body_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function card_body_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function card_body_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function card_body_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_body_ownKeys(source, true).forEach(function (key) { card_body_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_body_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_body_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var card_body_props = card_body_objectSpread({}, copy_props(card.props, prefix_prop_name.bind(null, 'body')), {
  bodyClass: {
    type: [String, Object, Array],
    default: null
  }
}, card_title_props, {}, card_sub_title_props, {
  overlay: {
    type: Boolean,
    default: false
  }
}); // @vue/component

var BCardBody =
/*#__PURE__*/
vue.extend({
  name: 'BCardBody',
  functional: true,
  props: card_body_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var cardTitle = h();
    var cardSubTitle = h();
    var cardContent = children || [h()];

    if (props.title) {
      cardTitle = h(BCardTitle, {
        props: pluck_props(card_title_props, props)
      });
    }

    if (props.subTitle) {
      cardSubTitle = h(BCardSubTitle, {
        props: pluck_props(card_sub_title_props, props),
        class: ['mb-2']
      });
    }

    return h(props.bodyTag, lib_esm_a(data, {
      staticClass: 'card-body',
      class: [(_ref2 = {
        'card-img-overlay': props.overlay
      }, card_body_defineProperty(_ref2, "bg-".concat(props.bodyBgVariant), Boolean(props.bodyBgVariant)), card_body_defineProperty(_ref2, "border-".concat(props.bodyBorderVariant), Boolean(props.bodyBorderVariant)), card_body_defineProperty(_ref2, "text-".concat(props.bodyTextVariant), Boolean(props.bodyTextVariant)), _ref2), props.bodyClass || {}]
    }), [cardTitle, cardSubTitle].concat(card_body_toConsumableArray(cardContent)));
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/html.js
var stripTagsRegex = /(<([^>]+)>)/gi; // Removes any thing that looks like an HTML tag from the supplied string

var stripTags = function stripTags() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(text).replace(stripTagsRegex, '');
}; // Generate a domProps object for either innerHTML, textContent or nothing

var htmlOrText = function htmlOrText(innerHTML, textContent) {
  return innerHTML ? {
    innerHTML: innerHTML
  } : textContent ? {
    textContent: textContent
  } : {};
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/card/card-header.js
function card_header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function card_header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_header_ownKeys(source, true).forEach(function (key) { card_header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_header_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var card_header_props = card_header_objectSpread({}, copy_props(card.props, prefix_prop_name.bind(null, 'header')), {
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerClass: {
    type: [String, Object, Array],
    default: null
  }
}); // @vue/component

var BCardHeader =
/*#__PURE__*/
vue.extend({
  name: 'BCardHeader',
  functional: true,
  props: card_header_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.headerTag, lib_esm_a(data, {
      staticClass: 'card-header',
      class: [props.headerClass, (_ref2 = {}, card_header_defineProperty(_ref2, "bg-".concat(props.headerBgVariant), Boolean(props.headerBgVariant)), card_header_defineProperty(_ref2, "border-".concat(props.headerBorderVariant), Boolean(props.headerBorderVariant)), card_header_defineProperty(_ref2, "text-".concat(props.headerTextVariant), Boolean(props.headerTextVariant)), _ref2)]
    }), children || [h('div', {
      domProps: htmlOrText(props.headerHtml, props.header)
    })]);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/card/card-footer.js
function card_footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function card_footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_footer_ownKeys(source, true).forEach(function (key) { card_footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_footer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var card_footer_props = card_footer_objectSpread({}, copy_props(card.props, prefix_prop_name.bind(null, 'footer')), {
  footer: {
    type: String,
    default: null
  },
  footerHtml: {
    type: String,
    default: null
  },
  footerClass: {
    type: [String, Object, Array],
    default: null
  }
}); // @vue/component

var BCardFooter =
/*#__PURE__*/
vue.extend({
  name: 'BCardFooter',
  functional: true,
  props: card_footer_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.footerTag, lib_esm_a(data, {
      staticClass: 'card-footer',
      class: [props.footerClass, (_ref2 = {}, card_footer_defineProperty(_ref2, "bg-".concat(props.footerBgVariant), Boolean(props.footerBgVariant)), card_footer_defineProperty(_ref2, "border-".concat(props.footerBorderVariant), Boolean(props.footerBorderVariant)), card_footer_defineProperty(_ref2, "text-".concat(props.footerTextVariant), Boolean(props.footerTextVariant)), _ref2)]
    }), children || [h('div', {
      domProps: htmlOrText(props.footerHtml, props.footer)
    })]);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/card/card-img.js


var card_img_props = {
  src: {
    type: String,
    default: null,
    required: true
  },
  alt: {
    type: String,
    default: null
  },
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  start: {
    type: Boolean,
    default: false
  },
  left: {
    // alias of 'start'
    type: Boolean,
    default: false
  },
  end: {
    type: Boolean,
    default: false
  },
  right: {
    // alias of 'end'
    type: Boolean,
    default: false
  },
  height: {
    type: [Number, String],
    default: null
  },
  width: {
    type: [Number, String],
    default: null
  }
}; // @vue/component

var BCardImg =
/*#__PURE__*/
vue.extend({
  name: 'BCardImg',
  functional: true,
  props: card_img_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var baseClass = 'card-img';

    if (props.top) {
      baseClass += '-top';
    } else if (props.right || props.end) {
      baseClass += '-right';
    } else if (props.bottom) {
      baseClass += '-bottom';
    } else if (props.left || props.start) {
      baseClass += '-left';
    }

    return h('img', lib_esm_a(data, {
      class: [baseClass],
      attrs: {
        src: props.src,
        alt: props.alt,
        height: props.height,
        width: props.width
      }
    }));
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/card/card.js
function card_toConsumableArray(arr) { return card_arrayWithoutHoles(arr) || card_iterableToArray(arr) || card_nonIterableSpread(); }

function card_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function card_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function card_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_ownKeys(source, true).forEach(function (key) { card_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var cardImgProps = copy_props(card_img_props, prefix_prop_name.bind(null, 'img'));
cardImgProps.imgSrc.required = false;
var card_props = card_objectSpread({}, card_body_props, {}, card_header_props, {}, card_footer_props, {}, cardImgProps, {}, copy_props(card.props), {
  align: {
    type: String,
    default: null
  },
  noBody: {
    type: Boolean,
    default: false
  }
}); // @vue/component

var BCard =
/*#__PURE__*/
vue.extend({
  name: 'BCard',
  functional: true,
  props: card_props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots(); // Vue < 2.6.x may return undefined for scopedSlots

    var $scopedSlots = scopedSlots || {}; // Create placeholder elements for each section

    var imgFirst = h();
    var header = h();
    var content = h();
    var footer = h();
    var imgLast = h();

    if (props.imgSrc) {
      var img = h(BCardImg, {
        props: pluck_props(cardImgProps, props, unprefix_prop_name.bind(null, 'img'))
      });

      if (props.imgBottom) {
        imgLast = img;
      } else {
        imgFirst = img;
      }
    }

    if (props.header || normalize_slot_hasNormalizedSlot('header', $scopedSlots, $slots)) {
      header = h(BCardHeader, {
        props: pluck_props(card_header_props, props)
      }, normalize_slot_normalizeSlot('header', {}, $scopedSlots, $slots));
    }

    content = normalize_slot_normalizeSlot('default', {}, $scopedSlots, $slots) || [];

    if (!props.noBody) {
      // Wrap content in card-body
      content = [h(BCardBody, {
        props: pluck_props(card_body_props, props)
      }, card_toConsumableArray(content))];
    }

    if (props.footer || normalize_slot_hasNormalizedSlot('footer', $scopedSlots, $slots)) {
      footer = h(BCardFooter, {
        props: pluck_props(card_footer_props, props)
      }, normalize_slot_normalizeSlot('footer', {}, $scopedSlots, $slots));
    }

    return h(props.tag, lib_esm_a(data, {
      staticClass: 'card',
      class: (_class = {
        'flex-row': props.imgLeft || props.imgStart,
        'flex-row-reverse': (props.imgRight || props.imgEnd) && !(props.imgLeft || props.imgStart)
      }, card_defineProperty(_class, "text-".concat(props.align), Boolean(props.align)), card_defineProperty(_class, "bg-".concat(props.bgVariant), Boolean(props.bgVariant)), card_defineProperty(_class, "border-".concat(props.borderVariant), Boolean(props.borderVariant)), card_defineProperty(_class, "text-".concat(props.textVariant), Boolean(props.textVariant)), _class)
    }), [imgFirst, header].concat(card_toConsumableArray(content), [footer, imgLast]));
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-options.js


 // @vue/component

/* harmony default export */ var form_options = ({
  props: {
    options: {
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    valueField: {
      type: String,
      default: 'value'
    },
    textField: {
      type: String,
      default: 'text'
    },
    htmlField: {
      type: String,
      default: 'html'
    },
    disabledField: {
      type: String,
      default: 'disabled'
    }
  },
  computed: {
    formOptions: function formOptions() {
      var options = this.options;
      var valueField = this.valueField;
      var textField = this.textField;
      var htmlField = this.htmlField;
      var disabledField = this.disabledField;

      if (isArray(options)) {
        // Normalize flat-ish arrays to Array of Objects
        return options.map(function (option) {
          if (isPlainObject(option)) {
            var value = option[valueField];
            var text = String(option[textField]);
            return {
              value: isUndefined(value) ? text : value,
              text: stripTags(text),
              html: option[htmlField],
              disabled: Boolean(option[disabledField])
            };
          }

          return {
            value: option,
            text: stripTags(String(option)),
            disabled: false
          };
        });
      } else {
        // options is Object
        // Normalize Objects to Array of Objects
        return keys(options).map(function (key) {
          var option = options[key] || {};

          if (isPlainObject(option)) {
            var value = option[valueField];
            var text = option[textField];
            return {
              value: isUndefined(value) ? key : value,
              text: isUndefined(text) ? stripTags(String(key)) : stripTags(String(text)),
              html: option[htmlField],
              disabled: Boolean(option[disabledField])
            };
          }

          return {
            value: key,
            text: stripTags(String(option)),
            disabled: false
          };
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-custom.js
// @vue/component
/* harmony default export */ var form_custom = ({
  props: {
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    custom: function custom() {
      return !this.plain;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form-select/form-select.js
function form_select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function form_select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { form_select_ownKeys(source, true).forEach(function (key) { form_select_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { form_select_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function form_select_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // @vue/component

var BFormSelect =
/*#__PURE__*/
vue.extend({
  name: 'BFormSelect',
  mixins: [mixins_id, mixins_normalize_slot, mixins_form, form_size, form_state, form_custom, form_options],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {// type: [Object, Array, String, Number, Boolean],
      // default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectSize: {
      // Browsers default size to 0, which shows 4 rows in most browsers in multiple mode
      // Size of 1 can bork out Firefox
      type: Number,
      default: 0
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data() {
    return {
      localValue: this.value
    };
  },
  computed: {
    computedSelectSize: function computedSelectSize() {
      // Custom selects with a size of zero causes the arrows to be hidden,
      // so dont render the size attribute in this case
      return !this.plain && this.selectSize === 0 ? null : this.selectSize;
    },
    inputClass: function inputClass() {
      return [this.plain ? 'form-control' : 'custom-select', this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (this.ariaInvalid === true || this.ariaInvalid === 'true') {
        return 'true';
      }

      return this.stateClass === 'is-invalid' ? 'true' : null;
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      this.localValue = newVal;
    },
    localValue: function localValue(newVal, oldVal) {
      this.$emit('input', this.localValue);
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    }
  },
  render: function render(h) {
    var _this = this;

    var options = this.formOptions.map(function (option, index) {
      return h('option', {
        key: "option_".concat(index, "_opt"),
        attrs: {
          disabled: Boolean(option.disabled)
        },
        domProps: form_select_objectSpread({}, htmlOrText(option.html, option.text), {
          value: option.value
        })
      });
    });
    return h('select', {
      ref: 'input',
      class: this.inputClass,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: this.safeId(),
        name: this.name,
        form: this.form || null,
        multiple: this.multiple || null,
        size: this.computedSelectSize,
        disabled: this.disabled,
        required: this.required,
        'aria-required': this.required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      },
      on: {
        change: function change(evt) {
          var target = evt.target;
          var selectedVal = from(target.options).filter(function (o) {
            return o.selected;
          }).map(function (o) {
            return '_value' in o ? o._value : o.value;
          });
          _this.localValue = target.multiple ? selectedVal : selectedVal[0];

          _this.$nextTick(function () {
            _this.$emit('change', _this.localValue);
          });
        }
      }
    }, [this.normalizeSlot('first'), options, this.normalizeSlot('default')]);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/to-string.js

/**
 * Convert a value to a string that can be rendered.
 */

var to_string_toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return isUndefinedOrNull(val) ? '' : isArray(val) || isPlainObject(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
};

/* harmony default export */ var to_string = (to_string_toString);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/router.js



var ANCHOR_TAG = 'a'; // Precompile RegExp

var commaRE = /%2C/g;
var encodeReserveRE = /[!'()*]/g; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var router_encode = function encode(str) {
  return encodeURIComponent(to_string(str)).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var router_stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!isPlainObject(obj)) {
    return '';
  }

  var query = keys(obj).map(function (key) {
    var val = obj[key];

    if (isUndefined(val)) {
      return '';
    } else if (isNull(val)) {
      return router_encode(key);
    } else if (isArray(val)) {
      return val.reduce(function (results, val2) {
        if (isNull(val2)) {
          results.push(router_encode(key));
        } else if (!isUndefined(val2)) {
          // Faster than string interpolation
          results.push(router_encode(key) + '=' + router_encode(val2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return router_encode(key) + '=' + router_encode(val);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};
var router_parseQuery = function parseQuery(query) {
  var parsed = {};
  query = to_string(query).trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (isUndefined(parsed[key])) {
      parsed[key] = val;
    } else if (isArray(parsed[key])) {
      parsed[key].push(val);
    } else {
      parsed[key] = [parsed[key], val];
    }
  });
  return parsed;
};
var router_isRouterLink = function isRouterLink(tag) {
  return to_string(tag).toLowerCase() !== ANCHOR_TAG;
};
var computeTag = function computeTag() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      to = _ref.to,
      disabled = _ref.disabled;

  var thisOrParent = arguments.length > 1 ? arguments[1] : undefined;
  return thisOrParent.$router && to && !disabled ? thisOrParent.$nuxt ? 'nuxt-link' : 'router-link' : ANCHOR_TAG;
};
var router_computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  if (target === '_blank' && isNull(rel)) {
    return 'noopener';
  }

  return rel || null;
};
var router_computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // We've already checked the $router in computeTag(), so isRouterLink() indicates a live router.
  // When deferring to Vue Router's router-link, don't use the href attribute at all.
  // We return null, and then remove href from the attributes passed to router-link
  if (router_isRouterLink(tag)) {
    return null;
  } // Return `href` when explicitly provided


  if (href) {
    return href;
  } // Reconstruct `href` when `to` used, but no router


  if (to) {
    // Fallback to `to` prop (if `to` is a string)
    if (isString(to)) {
      return to || toFallback;
    } // Fallback to `to.path + to.query + to.hash` prop (if `to` is an object)


    if (isPlainObject(to) && (to.path || to.query || to.hash)) {
      var path = to_string(to.path);
      var query = router_stringifyQueryObj(to.query);
      var hash = to_string(to.hash);
      hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
      return "".concat(path).concat(query).concat(hash) || toFallback;
    }
  } // If nothing is provided return the fallback


  return fallback;
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/link/link.js
function link_toConsumableArray(arr) { return link_arrayWithoutHoles(arr) || link_iterableToArray(arr) || link_nonIterableSpread(); }

function link_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function link_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function link_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { link_ownKeys(source, true).forEach(function (key) { link_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { link_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * The Link component is used in many other BV components.
 * As such, sharing its props makes supporting all its features easier.
 * However, some components need to modify the defaults for their own purpose.
 * Prefer sharing a fresh copy of the props to ensure mutations
 * do not affect other component references to the props.
 *
 * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 * @return {{}}
 */

var propsFactory = function propsFactory() {
  return {
    href: {
      type: String,
      default: null
    },
    rel: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // router-link specific props
    to: {
      type: [String, Object],
      default: null
    },
    append: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: false
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    activeClass: {
      type: String // default: undefined

    },
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: {
      type: String // default: undefined

    },
    routerTag: {
      type: String,
      default: 'a'
    },
    // nuxt-link specific prop(s)
    noPrefetch: {
      type: Boolean,
      default: false
    }
  };
};
var link_props = propsFactory(); // @vue/component

var BLink =
/*#__PURE__*/
vue.extend({
  name: 'BLink',
  mixins: [mixins_normalize_slot],
  inheritAttrs: false,
  props: propsFactory(),
  computed: {
    computedTag: function computedTag() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      return computeTag({
        to: this.to,
        disabled: this.disabled
      }, this);
    },
    isRouterLink: function isRouterLink() {
      return router_isRouterLink(this.computedTag);
    },
    computedRel: function computedRel() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      return router_computeRel({
        target: this.target,
        rel: this.rel
      });
    },
    computedHref: function computedHref() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      return router_computeHref({
        to: this.to,
        href: this.href
      }, this.computedTag);
    },
    computedProps: function computedProps() {
      return this.isRouterLink ? link_objectSpread({}, this.$props, {
        tag: this.routerTag
      }) : {};
    }
  },
  methods: {
    onClick: function onClick(evt) {
      var _arguments = arguments;
      var evtIsEvent = isEvent(evt);
      var isRouterLink = this.isRouterLink;
      var suppliedHandler = this.$listeners.click;

      if (evtIsEvent && this.disabled) {
        // Stop event from bubbling up
        evt.stopPropagation(); // Kill the event loop attached to this specific `EventTarget`
        // Needed to prevent `vue-router` for doing it's thing

        evt.stopImmediatePropagation();
      } else {
        /* istanbul ignore next: difficult to test, but we know it works */
        if (isRouterLink && evt.currentTarget.__vue__) {
          // Router links do not emit instance `click` events, so we
          // add in an $emit('click', evt) on it's vue instance
          evt.currentTarget.__vue__.$emit('click', evt);
        } // Call the suppliedHandler(s), if any provided


        concat(suppliedHandler).filter(function (h) {
          return isFunction(h);
        }).forEach(function (handler) {
          handler.apply(void 0, link_toConsumableArray(_arguments));
        }); // Emit the global $root click event

        this.$root.$emit('clicked::link', evt);
      } // Stop scroll-to-top behavior or navigation on
      // regular links when href is just '#'


      if (evtIsEvent && (this.disabled || !isRouterLink && this.computedHref === '#')) {
        evt.preventDefault();
      }
    },
    focus: function focus() {
      if (this.$el && this.$el.focus) {
        this.$el.focus();
      }
    },
    blur: function blur() {
      if (this.$el && this.$el.blur) {
        this.$el.blur();
      }
    }
  },
  render: function render(h) {
    var tag = this.computedTag;
    var rel = this.computedRel;
    var href = this.computedHref;
    var isRouterLink = this.isRouterLink;
    var componentData = {
      class: {
        active: this.active,
        disabled: this.disabled
      },
      attrs: link_objectSpread({}, this.$attrs, {
        rel: rel,
        target: this.target,
        tabindex: this.disabled ? '-1' : isUndefined(this.$attrs.tabindex) ? null : this.$attrs.tabindex,
        'aria-disabled': this.disabled ? 'true' : null
      }),
      props: this.computedProps
    }; // Add the event handlers. We must use `navtiveOn` for
    // `<router-link>`/`<nuxt-link>` instead of `on`

    componentData[isRouterLink ? 'nativeOn' : 'on'] = link_objectSpread({}, this.$listeners, {
      // We want to overwrite any click handler since our callback
      // will invoke the user supplied handler(s) if `!this.disabled`
      click: this.onClick
    }); // If href attribute exists on <router-link> (even undefined or null) it fails working on
    // SSR, so we explicitly add it here if needed (i.e. if computedHref() is truthy)

    if (href) {
      componentData.attrs.href = href;
    } else {
      // Ensure the prop HREF does not exist for router links
      delete componentData.props.href;
    }

    return h(tag, componentData, this.normalizeSlot('default'));
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/button/button.js
function button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_ownKeys(source, true).forEach(function (key) { button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // --- Constants --

var button_NAME = 'BButton';
var btnProps = {
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: function _default() {
      return getComponentConfig(button_NAME, 'size');
    }
  },
  variant: {
    type: String,
    default: function _default() {
      return getComponentConfig(button_NAME, 'variant');
    }
  },
  type: {
    type: String,
    default: 'button'
  },
  tag: {
    type: String,
    default: 'button'
  },
  pill: {
    type: Boolean,
    default: false
  },
  squared: {
    type: Boolean,
    default: false
  },
  pressed: {
    // tri-state prop: true, false or null
    // => on, off, not a toggle
    type: Boolean,
    default: null
  }
};
var linkProps = propsFactory();
delete linkProps.href.default;
delete linkProps.to.default;
var linkPropKeys = keys(linkProps);
var button_props = button_objectSpread({}, linkProps, {}, btnProps); // --- Helper methods ---
// Focus handler for toggle buttons.  Needs class of 'focus' when focused.

var button_handleFocus = function handleFocus(evt) {
  if (evt.type === 'focusin') {
    addClass(evt.target, 'focus');
  } else if (evt.type === 'focusout') {
    removeClass(evt.target, 'focus');
  }
}; // Is the requested button a link?


var isLink = function isLink(props) {
  // If tag prop is set to `a`, we use a b-link to get proper disabled handling
  return Boolean(props.href || props.to || props.tag && String(props.tag).toLowerCase() === 'a');
}; // Is the button to be a toggle button?


var button_isToggle = function isToggle(props) {
  return inspect_isBoolean(props.pressed);
}; // Is the button "really" a button?


var isButton = function isButton(props) {
  if (isLink(props)) {
    return false;
  } else if (props.tag && String(props.tag).toLowerCase() !== 'button') {
    return false;
  }

  return true;
}; // Is the requested tag not a button or link?


var isNonStandardTag = function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
}; // Compute required classes (non static classes)


var button_computeClass = function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || getComponentConfig(button_NAME, 'variant')), (_ref = {}, button_defineProperty(_ref, "btn-".concat(props.size), Boolean(props.size)), button_defineProperty(_ref, 'btn-block', props.block), button_defineProperty(_ref, 'rounded-pill', props.pill), button_defineProperty(_ref, 'rounded-0', props.squared && !props.pill), button_defineProperty(_ref, "disabled", props.disabled), button_defineProperty(_ref, "active", props.pressed), _ref)];
}; // Compute the link props to pass to b-link (if required)


var button_computeLinkProps = function computeLinkProps(props) {
  return isLink(props) ? pluck_props(linkPropKeys, props) : null;
}; // Compute the attributes for a button


var computeAttrs = function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = button_isToggle(props);
  var nonStdTag = isNonStandardTag(props);
  var role = data.attrs && data.attrs.role ? data.attrs.role : null;
  var tabindex = data.attrs ? data.attrs.tabindex : null;

  if (nonStdTag) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA.
    // Don't bork any role provided in data.attrs when isLink or isButton
    role: nonStdTag ? 'button' : role,
    // We set the aria-disabled state for non-standard tags
    'aria-disabled': nonStdTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // autocomplete off is needed in toggle mode to prevent some browsers from
    // remembering the previous setting when using the back button.
    autocomplete: toggle ? 'off' : null,
    // Tab index is used when the component is not a button.
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a tabindex of '0' to non buttons or non links.
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
}; // @vue/component


var BButton =
/*#__PURE__*/
vue.extend({
  name: button_NAME,
  functional: true,
  props: button_props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = button_isToggle(props);
    var link = isLink(props);
    var on = {
      click: function click(evt) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && isEvent(evt)) {
          evt.stopPropagation();
          evt.preventDefault();
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send .sync updates to any "pressed" prop (if .sync listeners)
          // Concat will normalize the value to an array
          // without double wrapping an array value in an array.
          concat(listeners['update:pressed']).forEach(function (fn) {
            if (isFunction(fn)) {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = button_handleFocus;
      on.focusout = button_handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: button_computeClass(props),
      props: button_computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? BLink : props.tag, lib_esm_a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/loose-equal.js

 // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = loose_equal_looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var loose_equal_looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = keys(a).length;
    var bKeysCount = keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      // eslint-disable-next-line no-prototype-builtins
      var aHasKey = a.hasOwnProperty(key); // eslint-disable-next-line no-prototype-builtins

      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

/* harmony default export */ var loose_equal = (loose_equal_looseEqual);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/loose-index-of.js


var loose_index_of_looseIndexOf = function looseIndexOf(arr, val) {
  // Assumes that the first argument is an array
  for (var i = 0; i < arr.length; i++) {
    if (loose_equal(arr[i], val)) {
      return i;
    }
  }

  return -1;
};

/* harmony default export */ var loose_index_of = (loose_index_of_looseIndexOf);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-radio-check.js
function form_radio_check_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function form_radio_check_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { form_radio_check_ownKeys(source, true).forEach(function (key) { form_radio_check_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { form_radio_check_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function form_radio_check_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // @vue/component

/* harmony default export */ var form_radio_check = ({
  mixins: [mixins_normalize_slot],
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    value: {// Value when checked
      // type: Object,
      // default: undefined
    },
    checked: {// This is the v-model
      // type: Object,
      // default: undefined
    },
    inline: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    button: {
      // Only applicable in standalone mode (non group)
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: null
    },
    ariaLabel: {
      // Placed on the input if present.
      type: String,
      default: null
    },
    ariaLabelledby: {
      // Placed on the input if present.
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localChecked: this.isGroup ? this.bvGroup.checked : this.checked,
      hasFocus: false
    };
  },
  computed: {
    computedLocalChecked: {
      get: function get() {
        return this.isGroup ? this.bvGroup.localChecked : this.localChecked;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.bvGroup.localChecked = val;
        } else {
          this.localChecked = val;
        }
      }
    },
    isGroup: function isGroup() {
      // Is this check/radio a child of check-group or radio-group?
      return Boolean(this.bvGroup);
    },
    isBtnMode: function isBtnMode() {
      // Support button style in single input mode
      return this.isGroup ? this.bvGroup.buttons : this.button;
    },
    isPlain: function isPlain() {
      return this.isBtnMode ? false : this.isGroup ? this.bvGroup.plain : this.plain;
    },
    isCustom: function isCustom() {
      return this.isBtnMode ? false : !this.isPlain;
    },
    isSwitch: function isSwitch() {
      // Custom switch styling (checkboxes only)
      return this.isBtnMode || this.isRadio || this.isPlain ? false : this.isGroup ? this.bvGroup.switches : this.switch;
    },
    isInline: function isInline() {
      return this.isGroup ? this.bvGroup.inline : this.inline;
    },
    isDisabled: function isDisabled() {
      // Child can be disabled while parent isn't, but is always disabled if group is
      return this.isGroup ? this.bvGroup.disabled || this.disabled : this.disabled;
    },
    isRequired: function isRequired() {
      // Required only works when a name is provided for the input(s)
      // Child can only be required when parent is
      // Groups will always have a name (either user supplied or auto generated)
      return Boolean(this.getName && (this.isGroup ? this.bvGroup.required : this.required));
    },
    getName: function getName() {
      // Group name preferred over local name
      return (this.isGroup ? this.bvGroup.groupName : this.name) || null;
    },
    getForm: function getForm() {
      return (this.isGroup ? this.bvGroup.form : this.form) || null;
    },
    getSize: function getSize() {
      return (this.isGroup ? this.bvGroup.size : this.size) || '';
    },
    getState: function getState() {
      return this.isGroup ? this.bvGroup.computedState : this.computedState;
    },
    getButtonVariant: function getButtonVariant() {
      // Local variant preferred over group variant
      if (this.buttonVariant) {
        return this.buttonVariant;
      } else if (this.isGroup && this.bvGroup.buttonVariant) {
        return this.bvGroup.buttonVariant;
      } // default variant


      return 'secondary';
    },
    buttonClasses: function buttonClasses() {
      var _ref;

      // Same for radio & check
      return ['btn', "btn-".concat(this.getButtonVariant), (_ref = {}, form_radio_check_defineProperty(_ref, "btn-".concat(this.getSize), this.getSize), form_radio_check_defineProperty(_ref, "disabled", this.isDisabled), form_radio_check_defineProperty(_ref, "active", this.isChecked), form_radio_check_defineProperty(_ref, "focus", this.hasFocus), _ref)];
    }
  },
  watch: {
    checked: function checked(newVal, oldVal) {
      this.computedLocalChecked = newVal;
    }
  },
  methods: {
    handleFocus: function handleFocus(evt) {
      // When in buttons mode, we need to add 'focus' class to label when input focused
      // As it is the hidden input which has actual focus
      if (evt.target) {
        if (evt.type === 'focus') {
          this.hasFocus = true;
        } else if (evt.type === 'blur') {
          this.hasFocus = false;
        }
      }
    },
    // Convenience methods for focusing the input
    focus: function focus() {
      if (!this.isDisabled && this.$refs.input && this.$refs.input.focus) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (!this.isDisabled && this.$refs.input && this.$refs.input.blur) {
        this.$refs.input.blur();
      }
    }
  },
  render: function render(h) {
    var defaultSlot = this.normalizeSlot('default'); // Generate the input element

    var on = {
      change: this.handleChange
    };

    if (this.isBtnMode) {
      // Handlers for focus styling when in button mode
      on.focus = on.blur = this.handleFocus;
    }

    var input = h('input', {
      ref: 'input',
      key: 'input',
      on: on,
      class: {
        'form-check-input': this.isPlain,
        'custom-control-input': this.isCustom,
        'is-valid': this.getState === true && !this.isBtnMode,
        'is-invalid': this.getState === false && !this.isBtnMode,
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911
        'position-static': this.isPlain && !defaultSlot
      },
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.computedLocalChecked,
        expression: 'computedLocalChecked'
      }],
      attrs: form_radio_check_objectSpread({}, this.$attrs, {
        id: this.safeId(),
        type: this.isRadio ? 'radio' : 'checkbox',
        name: this.getName,
        form: this.getForm,
        disabled: this.isDisabled,
        required: this.isRequired,
        autocomplete: 'off',
        'aria-required': this.isRequired || null,
        'aria-label': this.ariaLabel || null,
        'aria-labelledby': this.ariaLabelledby || null
      }),
      domProps: {
        value: this.value,
        checked: this.isChecked
      }
    });

    if (this.isBtnMode) {
      // Button mode
      var button = h('label', {
        class: this.buttonClasses
      }, [input, defaultSlot]);

      if (!this.isGroup) {
        // Standalone button mode, so wrap in 'btn-group-toggle'
        // and flag it as inline-block to mimic regular buttons
        button = h('div', {
          class: ['btn-group-toggle', 'd-inline-block']
        }, [button]);
      }

      return button;
    } else {
      // Not button mode
      var label = h(); // If no label content in plain mode we dont render the label
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911

      if (!(this.isPlain && !defaultSlot)) {
        label = h('label', {
          class: {
            'form-check-label': this.isPlain,
            'custom-control-label': this.isCustom
          },
          attrs: {
            for: this.safeId()
          }
        }, defaultSlot);
      } // Wrap it in a div


      return h('div', {
        class: form_radio_check_defineProperty({
          'form-check': this.isPlain,
          'form-check-inline': this.isPlain && this.isInline,
          'custom-control': this.isCustom,
          'custom-control-inline': this.isCustom && this.isInline,
          'custom-checkbox': this.isCustom && this.isCheck && !this.isSwitch,
          'custom-switch': this.isSwitch,
          'custom-radio': this.isCustom && this.isRadio
        }, "b-custom-control-".concat(this.getSize), Boolean(this.getSize && !this.isBtnMode))
      }, [input, label]);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form-checkbox/form-checkbox.js








 // @vue/component

var BFormCheckbox =
/*#__PURE__*/
vue.extend({
  name: 'BFormCheckbox',
  mixins: [form_radio_check, // Includes shared render function
  mixins_id, mixins_form, form_size, form_state],
  inject: {
    bvGroup: {
      from: 'bvCheckGroup',
      default: false
    }
  },
  props: {
    value: {
      // type: [String, Number, Boolean, Object],
      default: true
    },
    uncheckedValue: {
      // type: [String, Number, Boolean, Object],
      // Not applicable in multi-check mode
      default: false
    },
    indeterminate: {
      // Not applicable in multi-check mode
      type: Boolean,
      default: false
    },
    switch: {
      // Custom switch styling
      type: Boolean,
      default: false
    },
    checked: {
      // v-model (Array when multiple checkboxes have same name)
      // type: [String, Number, Boolean, Object, Array],
      default: null
    }
  },
  computed: {
    isChecked: function isChecked() {
      var checked = this.computedLocalChecked;
      var value = this.value;

      if (isArray(checked)) {
        return loose_index_of(checked, value) > -1;
      } else {
        return loose_equal(checked, value);
      }
    },
    isRadio: function isRadio() {
      return false;
    },
    isCheck: function isCheck() {
      return true;
    }
  },
  watch: {
    computedLocalChecked: function computedLocalChecked(newVal, oldVal) {
      this.$emit('input', newVal);

      if (this.$refs && this.$refs.input) {
        this.$emit('update:indeterminate', this.$refs.input.indeterminate);
      }
    },
    indeterminate: function indeterminate(newVal, oldVal) {
      this.setIndeterminate(newVal);
    }
  },
  mounted: function mounted() {
    // Set initial indeterminate state
    this.setIndeterminate(this.indeterminate);
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var _ref$target = _ref.target,
          checked = _ref$target.checked,
          indeterminate = _ref$target.indeterminate;
      var localChecked = this.computedLocalChecked;
      var value = this.value;
      var isArr = isArray(localChecked);
      var uncheckedValue = isArr ? null : this.uncheckedValue; // Update computedLocalChecked

      if (isArr) {
        var idx = loose_index_of(localChecked, value);

        if (checked && idx < 0) {
          // Add value to array
          localChecked = localChecked.concat(value);
        } else if (!checked && idx > -1) {
          // Remove value from array
          localChecked = localChecked.slice(0, idx).concat(localChecked.slice(idx + 1));
        }
      } else {
        localChecked = checked ? value : uncheckedValue;
      }

      this.computedLocalChecked = localChecked; // Change is only emitted on user interaction

      this.$emit('change', checked ? value : uncheckedValue); // If this is a child of form-checkbox-group, we emit a change event on it as well

      if (this.isGroup) {
        this.bvGroup.$emit('change', localChecked);
      }

      this.$emit('update:indeterminate', indeterminate);
    },
    setIndeterminate: function setIndeterminate(state) {
      // Indeterminate only supported in single checkbox mode
      if (isArray(this.computedLocalChecked)) {
        state = false;
      }

      if (this.$refs && this.$refs.input) {
        this.$refs.input.indeterminate = state; // Emit update event to prop

        this.$emit('update:indeterminate', state);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form-radio/form-radio.js






 // @vue/component

var BFormRadio =
/*#__PURE__*/
vue.extend({
  name: 'BFormRadio',
  mixins: [mixins_id, form_radio_check, // Includes shared render function
  mixins_form, form_size, form_state],
  inject: {
    bvGroup: {
      from: 'bvRadioGroup',
      default: false
    }
  },
  props: {
    checked: {
      // v-model
      // type: [String, Number, Boolean, Object],
      default: null
    }
  },
  computed: {
    // Radio Groups can only have a single value, so determining if checked is simple
    isChecked: function isChecked() {
      return loose_equal(this.value, this.computedLocalChecked);
    },
    // Flags for form-radio-check mixin
    isRadio: function isRadio() {
      return true;
    },
    isCheck: function isCheck() {
      return false;
    }
  },
  watch: {
    // Radio Groups can only have a single value, so our watchers are simple
    computedLocalChecked: function computedLocalChecked(newVal, oldVal) {
      this.$emit('input', this.computedLocalChecked);
    }
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var checked = _ref.target.checked;
      var value = this.value;
      this.computedLocalChecked = value; // Change is only emitted on user interaction

      this.$emit('change', checked ? value : null); // If this is a child of form-radio-group, we emit a change event on it as well

      if (this.isGroup) {
        this.bvGroup.$emit('change', checked ? value : null);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-radio-check-group.js



 // @vue/component

/* harmony default export */ var form_radio_check_group = ({
  mixins: [mixins_normalize_slot],
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    validated: {
      type: Boolean,
      default: false
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    buttons: {
      // Render as button style
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: 'secondary'
    }
  },
  computed: {
    inline: function inline() {
      return !this.stacked;
    },
    groupName: function groupName() {
      // Checks/Radios tied to the same model must have the same name,
      // especially for ARIA accessibility.
      return this.name || this.safeId();
    },
    groupClasses: function groupClasses() {
      if (this.buttons) {
        return ['btn-group-toggle', this.inline ? 'btn-group' : 'btn-group-vertical', this.size ? "btn-group-".concat(this.size) : '', this.validated ? "was-validated" : ''];
      }

      return [this.validated ? "was-validated" : ''];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      var ariaInvalid = this.ariaInvalid;

      if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
        return 'true';
      }

      return this.computedState === false ? 'true' : null;
    }
  },
  watch: {
    checked: function checked(newVal, oldVal) {
      this.localChecked = newVal;
    },
    localChecked: function localChecked(newVal, oldVal) {
      this.$emit('input', newVal);
    }
  },
  render: function render(h) {
    var _this = this;

    var inputs = this.formOptions.map(function (option, idx) {
      var uid = "_BV_option_".concat(idx, "_");
      return h(_this.isRadioGroup ? BFormRadio : BFormCheckbox, {
        key: uid,
        props: {
          id: _this.safeId(uid),
          value: option.value,
          // Individual radios or checks can be disabled in a group
          disabled: option.disabled || false // We don't need to include these, since the input's will know they are inside here
          // name: this.groupName,
          // form: this.form || null,
          // required: Boolean(this.name && this.required)

        }
      }, [h('span', {
        domProps: htmlOrText(option.html, option.text)
      })]);
    });
    return h('div', {
      class: this.groupClasses,
      attrs: {
        id: this.safeId(),
        role: this.isRadioGroup ? 'radiogroup' : 'group',
        // Tabindex to allow group to be focused if needed
        tabindex: '-1',
        'aria-required': this.required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      }
    }, [this.normalizeSlot('first'), inputs, this.normalizeSlot('default')]);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form-checkbox/form-checkbox-group.js







var form_checkbox_group_props = {
  switches: {
    // Custom switch styling
    type: Boolean,
    default: false
  },
  checked: {
    type: Array,
    default: null
  }
}; // @vue/component

var BFormCheckboxGroup =
/*#__PURE__*/
vue.extend({
  name: 'BFormCheckboxGroup',
  mixins: [mixins_id, mixins_form, form_radio_check_group, // Includes render function
  form_options, form_size, form_state],
  provide: function provide() {
    return {
      bvCheckGroup: this
    };
  },
  props: form_checkbox_group_props,
  data: function data() {
    return {
      localChecked: this.checked || []
    };
  },
  computed: {
    isRadioGroup: function isRadioGroup() {
      return false;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&shadow



var Appvue_type_script_lang_ts_shadow_App = class App extends vue_runtime_esm["a" /* default */] {
  constructor() {
    super(...arguments);
    this.form = {
      email: '',
      name: '',
      food: null,
      checked: []
    };
    this.foods = [{
      text: 'Select One',
      value: null
    }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'];
    this.show = true;
  }

  onClick(event) {
    event.target.dispatchEvent(new CustomEvent('my-click', {
      bubbles: true,
      detail: 'clicked',
      composed: true
    }));
  }

  onSubmit(evt) {
    evt.preventDefault();
    alert(JSON.stringify(this.form));
  }

  onReset(evt) {
    evt.preventDefault(); // Reset our form values

    this.form.email = '';
    this.form.name = '';
    this.form.food = null;
    this.form.checked = []; // Trick to reset/clear native browser form validation state

    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });
  }

  onDataChanged(newValue) {
    try {
      this.dataParse = JSON.parse(newValue);
    } catch (e) {
      this.dataParse = {};
    }
  }

};

__decorate([Prop()], Appvue_type_script_lang_ts_shadow_App.prototype, "data", void 0);

__decorate([Watch('data', {
  immediate: true
})], Appvue_type_script_lang_ts_shadow_App.prototype, "onDataChanged", null);

Appvue_type_script_lang_ts_shadow_App = __decorate([vue_class_component_esm({
  components: {
    'b-form': BForm,
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput,
    'b-card': BCard,
    'b-form-select': BFormSelect,
    'b-button': BButton,
    'b-form-checkbox-group': BFormCheckboxGroup,
    'b-form-checkbox': BFormCheckbox
  }
})], Appvue_type_script_lang_ts_shadow_App);
/* harmony default export */ var Appvue_type_script_lang_ts_shadow = (Appvue_type_script_lang_ts_shadow_App);
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&shadow
 /* harmony default export */ var src_Appvue_type_script_lang_ts_shadow = (Appvue_type_script_lang_ts_shadow); 
// CONCATENATED MODULE: ./src/App.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("5a13")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  src_Appvue_type_script_lang_ts_shadow,
  Appvue_type_template_id_518166f2_scoped_true_shadow_render,
  staticRenderFns,
  false,
  injectStyles,
  "518166f2",
  null
  ,true
)

/* harmony default export */ var Appshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('vue-client-a', vue_wc_wrapper(vue_runtime_esm["a" /* default */], Appshadow))

/***/ }),

/***/ "938d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasWindowSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasDocumentSupport; });
/* unused harmony export hasNavigatorSupport */
/* unused harmony export hasPromiseSupport */
/* unused harmony export hasMutationObserverSupport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isBrowser; });
/* unused harmony export userAgent */
/* unused harmony export isJSDOM */
/* unused harmony export isIE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasPassiveEventSupport; });
/* unused harmony export hasTouchSupport */
/* unused harmony export hasPointerEventSupport */
/* unused harmony export hasIntersectionObserverSupport */
/* unused harmony export getEnv */
/* unused harmony export getNoWarn */
/**
 * Utilities to get information about the current environment
 */
// --- Constants ---
var hasWindowSupport = typeof window !== 'undefined';
var hasDocumentSupport = typeof document !== 'undefined';
var hasNavigatorSupport = typeof navigator !== 'undefined';
var hasPromiseSupport = typeof Promise !== 'undefined';
var hasMutationObserverSupport = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
var isBrowser = hasWindowSupport && hasDocumentSupport && hasNavigatorSupport; // Browser type sniffing

var userAgent = isBrowser ? window.navigator.userAgent.toLowerCase() : '';
var isJSDOM = userAgent.indexOf('jsdom') > 0;
var isIE = /msie|trident/.test(userAgent); // Determine if the browser supports the option passive for events

var hasPassiveEventSupport = function () {
  var passiveEventSupported = false;

  if (isBrowser) {
    try {
      var options = {
        get passive() {
          // This function will be called when the browser
          // attempts to access the passive property.

          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
}();
var hasTouchSupport = isBrowser && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
var hasPointerEventSupport = isBrowser && Boolean(window.PointerEvent || window.MSPointerEvent);
var hasIntersectionObserverSupport = isBrowser && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use intersectionRatio > 0 instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in window.IntersectionObserverEntry.prototype; // --- Getters ---

var getEnv = function getEnv(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var env = typeof process !== 'undefined' && process ? Object({"NODE_ENV":"production","BASE_URL":"/"}) || false : {};

  if (!key) {
    /* istanbul ignore next */
    return env;
  }

  return env[key] || fallback;
};
var getNoWarn = function getNoWarn() {
  return getEnv('BOOTSTRAP_VUE_NO_WARN');
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("f28c")))

/***/ }),

/***/ "c6f3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap v4.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */[data-v-518166f2]:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*[data-v-518166f2],[data-v-518166f2]:after,[data-v-518166f2]:before{-webkit-box-sizing:border-box;box-sizing:border-box}html[data-v-518166f2]{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article[data-v-518166f2],aside[data-v-518166f2],figcaption[data-v-518166f2],figure[data-v-518166f2],footer[data-v-518166f2],header[data-v-518166f2],hgroup[data-v-518166f2],main[data-v-518166f2],nav[data-v-518166f2],section[data-v-518166f2]{display:block}body[data-v-518166f2]{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:16px;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"][data-v-518166f2]:focus{outline:0!important}hr[data-v-518166f2]{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}h1[data-v-518166f2],h2[data-v-518166f2],h3[data-v-518166f2],h4[data-v-518166f2],h5[data-v-518166f2],h6[data-v-518166f2]{margin-top:0;margin-bottom:8px;margin-bottom:.5rem}p[data-v-518166f2]{margin-top:0;margin-bottom:16px;margin-bottom:1rem}abbr[data-original-title][data-v-518166f2],abbr[title][data-v-518166f2]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address[data-v-518166f2]{font-style:normal;line-height:inherit}address[data-v-518166f2],dl[data-v-518166f2],ol[data-v-518166f2],ul[data-v-518166f2]{margin-bottom:16px;margin-bottom:1rem}dl[data-v-518166f2],ol[data-v-518166f2],ul[data-v-518166f2]{margin-top:0}ol ol[data-v-518166f2],ol ul[data-v-518166f2],ul ol[data-v-518166f2],ul ul[data-v-518166f2]{margin-bottom:0}dt[data-v-518166f2]{font-weight:700}dd[data-v-518166f2]{margin-bottom:8px;margin-bottom:.5rem;margin-left:0}blockquote[data-v-518166f2]{margin:0 0 16px;margin:0 0 1rem}b[data-v-518166f2],strong[data-v-518166f2]{font-weight:bolder}small[data-v-518166f2]{font-size:80%}sub[data-v-518166f2],sup[data-v-518166f2]{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub[data-v-518166f2]{bottom:-.25em}sup[data-v-518166f2]{top:-.5em}a[data-v-518166f2]{color:#007bff;text-decoration:none;background-color:transparent}a[data-v-518166f2]:hover{color:#0056b3;text-decoration:underline}a[data-v-518166f2]:not([href]):not([tabindex]),a[data-v-518166f2]:not([href]):not([tabindex]):focus,a[data-v-518166f2]:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a[data-v-518166f2]:not([href]):not([tabindex]):focus{outline:0}code[data-v-518166f2],kbd[data-v-518166f2],pre[data-v-518166f2],samp[data-v-518166f2]{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}pre[data-v-518166f2]{margin-top:0;margin-bottom:16px;margin-bottom:1rem;overflow:auto}figure[data-v-518166f2]{margin:0 0 16px;margin:0 0 1rem}img[data-v-518166f2]{border-style:none}img[data-v-518166f2],svg[data-v-518166f2]{vertical-align:middle}svg[data-v-518166f2]{overflow:hidden}table[data-v-518166f2]{border-collapse:collapse}caption[data-v-518166f2]{padding-top:12px;padding-top:.75rem;padding-bottom:12px;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th[data-v-518166f2]{text-align:inherit}label[data-v-518166f2]{display:inline-block;margin-bottom:8px;margin-bottom:.5rem}button[data-v-518166f2]{border-radius:0}button[data-v-518166f2]:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button[data-v-518166f2],input[data-v-518166f2],optgroup[data-v-518166f2],select[data-v-518166f2],textarea[data-v-518166f2]{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button[data-v-518166f2],input[data-v-518166f2]{overflow:visible}button[data-v-518166f2],select[data-v-518166f2]{text-transform:none}select[data-v-518166f2]{word-wrap:normal}[type=button][data-v-518166f2],[type=reset][data-v-518166f2],[type=submit][data-v-518166f2],button[data-v-518166f2]{-webkit-appearance:button}[type=button][data-v-518166f2]:not(:disabled),[type=reset][data-v-518166f2]:not(:disabled),[type=submit][data-v-518166f2]:not(:disabled),button[data-v-518166f2]:not(:disabled){cursor:pointer}[type=button][data-v-518166f2]::-moz-focus-inner,[type=reset][data-v-518166f2]::-moz-focus-inner,[type=submit][data-v-518166f2]::-moz-focus-inner,button[data-v-518166f2]::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox][data-v-518166f2],input[type=radio][data-v-518166f2]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=date][data-v-518166f2],input[type=datetime-local][data-v-518166f2],input[type=month][data-v-518166f2],input[type=time][data-v-518166f2]{-webkit-appearance:listbox}textarea[data-v-518166f2]{overflow:auto;resize:vertical}fieldset[data-v-518166f2]{min-width:0;padding:0;margin:0;border:0}legend[data-v-518166f2]{display:block;width:100%;max-width:100%;padding:0;margin-bottom:8px;margin-bottom:.5rem;font-size:24px;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress[data-v-518166f2]{vertical-align:baseline}[type=number][data-v-518166f2]::-webkit-inner-spin-button,[type=number][data-v-518166f2]::-webkit-outer-spin-button{height:auto}[type=search][data-v-518166f2]{outline-offset:-2px;-webkit-appearance:none}[type=search][data-v-518166f2]::-webkit-search-decoration{-webkit-appearance:none}[data-v-518166f2]::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output[data-v-518166f2]{display:inline-block}summary[data-v-518166f2]{display:list-item;cursor:pointer}template[data-v-518166f2]{display:none}[hidden][data-v-518166f2]{display:none!important}.h1[data-v-518166f2],.h2[data-v-518166f2],.h3[data-v-518166f2],.h4[data-v-518166f2],.h5[data-v-518166f2],.h6[data-v-518166f2],h1[data-v-518166f2],h2[data-v-518166f2],h3[data-v-518166f2],h4[data-v-518166f2],h5[data-v-518166f2],h6[data-v-518166f2]{margin-bottom:8px;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1[data-v-518166f2],h1[data-v-518166f2]{font-size:40px;font-size:2.5rem}.h2[data-v-518166f2],h2[data-v-518166f2]{font-size:32px;font-size:2rem}.h3[data-v-518166f2],h3[data-v-518166f2]{font-size:28px;font-size:1.75rem}.h4[data-v-518166f2],h4[data-v-518166f2]{font-size:24px;font-size:1.5rem}.h5[data-v-518166f2],h5[data-v-518166f2]{font-size:20px;font-size:1.25rem}.h6[data-v-518166f2],h6[data-v-518166f2]{font-size:16px;font-size:1rem}.lead[data-v-518166f2]{font-size:20px;font-size:1.25rem;font-weight:300}.display-1[data-v-518166f2]{font-size:96px;font-size:6rem}.display-1[data-v-518166f2],.display-2[data-v-518166f2]{font-weight:300;line-height:1.2}.display-2[data-v-518166f2]{font-size:88px;font-size:5.5rem}.display-3[data-v-518166f2]{font-size:72px;font-size:4.5rem}.display-3[data-v-518166f2],.display-4[data-v-518166f2]{font-weight:300;line-height:1.2}.display-4[data-v-518166f2]{font-size:56px;font-size:3.5rem}hr[data-v-518166f2]{margin-top:16px;margin-top:1rem;margin-bottom:16px;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small[data-v-518166f2],small[data-v-518166f2]{font-size:80%;font-weight:400}.mark[data-v-518166f2],mark[data-v-518166f2]{padding:.2em;background-color:#fcf8e3}.list-inline[data-v-518166f2],.list-unstyled[data-v-518166f2]{padding-left:0;list-style:none}.list-inline-item[data-v-518166f2]{display:inline-block}.list-inline-item[data-v-518166f2]:not(:last-child){margin-right:8px;margin-right:.5rem}.initialism[data-v-518166f2]{font-size:90%;text-transform:uppercase}.blockquote[data-v-518166f2]{margin-bottom:16px;margin-bottom:1rem;font-size:20px;font-size:1.25rem}.blockquote-footer[data-v-518166f2]{display:block;font-size:80%;color:#6c757d}.blockquote-footer[data-v-518166f2]:before{content:\"\\2014\\A0\"}.img-fluid[data-v-518166f2],.img-thumbnail[data-v-518166f2]{max-width:100%;height:auto}.img-thumbnail[data-v-518166f2]{padding:4px;padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure[data-v-518166f2]{display:inline-block}.figure-img[data-v-518166f2]{margin-bottom:8px;margin-bottom:.5rem;line-height:1}.figure-caption[data-v-518166f2]{font-size:90%;color:#6c757d}code[data-v-518166f2]{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code[data-v-518166f2]{color:inherit}kbd[data-v-518166f2]{padding:3.2px 6.4px;padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd[data-v-518166f2]{padding:0;font-size:100%;font-weight:700}pre[data-v-518166f2]{display:block;font-size:87.5%;color:#212529}pre code[data-v-518166f2]{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable[data-v-518166f2]{max-height:340px;overflow-y:scroll}.container[data-v-518166f2]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container[data-v-518166f2]{max-width:540px}}@media (min-width:768px){.container[data-v-518166f2]{max-width:720px}}@media (min-width:992px){.container[data-v-518166f2]{max-width:960px}}@media (min-width:1200px){.container[data-v-518166f2]{max-width:1140px}}.container-fluid[data-v-518166f2]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters[data-v-518166f2]{margin-right:0;margin-left:0}.no-gutters>.col[data-v-518166f2],.no-gutters>[class*=col-][data-v-518166f2]{padding-right:0;padding-left:0}.col[data-v-518166f2],.col-1[data-v-518166f2],.col-2[data-v-518166f2],.col-3[data-v-518166f2],.col-4[data-v-518166f2],.col-5[data-v-518166f2],.col-6[data-v-518166f2],.col-7[data-v-518166f2],.col-8[data-v-518166f2],.col-9[data-v-518166f2],.col-10[data-v-518166f2],.col-11[data-v-518166f2],.col-12[data-v-518166f2],.col-auto[data-v-518166f2],.col-lg[data-v-518166f2],.col-lg-1[data-v-518166f2],.col-lg-2[data-v-518166f2],.col-lg-3[data-v-518166f2],.col-lg-4[data-v-518166f2],.col-lg-5[data-v-518166f2],.col-lg-6[data-v-518166f2],.col-lg-7[data-v-518166f2],.col-lg-8[data-v-518166f2],.col-lg-9[data-v-518166f2],.col-lg-10[data-v-518166f2],.col-lg-11[data-v-518166f2],.col-lg-12[data-v-518166f2],.col-lg-auto[data-v-518166f2],.col-md[data-v-518166f2],.col-md-1[data-v-518166f2],.col-md-2[data-v-518166f2],.col-md-3[data-v-518166f2],.col-md-4[data-v-518166f2],.col-md-5[data-v-518166f2],.col-md-6[data-v-518166f2],.col-md-7[data-v-518166f2],.col-md-8[data-v-518166f2],.col-md-9[data-v-518166f2],.col-md-10[data-v-518166f2],.col-md-11[data-v-518166f2],.col-md-12[data-v-518166f2],.col-md-auto[data-v-518166f2],.col-sm[data-v-518166f2],.col-sm-1[data-v-518166f2],.col-sm-2[data-v-518166f2],.col-sm-3[data-v-518166f2],.col-sm-4[data-v-518166f2],.col-sm-5[data-v-518166f2],.col-sm-6[data-v-518166f2],.col-sm-7[data-v-518166f2],.col-sm-8[data-v-518166f2],.col-sm-9[data-v-518166f2],.col-sm-10[data-v-518166f2],.col-sm-11[data-v-518166f2],.col-sm-12[data-v-518166f2],.col-sm-auto[data-v-518166f2],.col-xl[data-v-518166f2],.col-xl-1[data-v-518166f2],.col-xl-2[data-v-518166f2],.col-xl-3[data-v-518166f2],.col-xl-4[data-v-518166f2],.col-xl-5[data-v-518166f2],.col-xl-6[data-v-518166f2],.col-xl-7[data-v-518166f2],.col-xl-8[data-v-518166f2],.col-xl-9[data-v-518166f2],.col-xl-10[data-v-518166f2],.col-xl-11[data-v-518166f2],.col-xl-12[data-v-518166f2],.col-xl-auto[data-v-518166f2]{position:relative;width:100%;padding-right:15px;padding-left:15px}.col[data-v-518166f2]{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto[data-v-518166f2]{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1[data-v-518166f2],.col-auto[data-v-518166f2]{-webkit-box-flex:0}.col-1[data-v-518166f2]{-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-2[data-v-518166f2]{-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-2[data-v-518166f2],.col-3[data-v-518166f2]{-webkit-box-flex:0}.col-3[data-v-518166f2]{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4[data-v-518166f2]{-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-4[data-v-518166f2],.col-5[data-v-518166f2]{-webkit-box-flex:0}.col-5[data-v-518166f2]{-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-6[data-v-518166f2]{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-6[data-v-518166f2],.col-7[data-v-518166f2]{-webkit-box-flex:0}.col-7[data-v-518166f2]{-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-8[data-v-518166f2]{-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-8[data-v-518166f2],.col-9[data-v-518166f2]{-webkit-box-flex:0}.col-9[data-v-518166f2]{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10[data-v-518166f2]{-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-10[data-v-518166f2],.col-11[data-v-518166f2]{-webkit-box-flex:0}.col-11[data-v-518166f2]{-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-12[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first[data-v-518166f2]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-last[data-v-518166f2]{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-0[data-v-518166f2]{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1[data-v-518166f2]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2[data-v-518166f2]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3[data-v-518166f2]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4[data-v-518166f2]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5[data-v-518166f2]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6[data-v-518166f2]{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7[data-v-518166f2]{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8[data-v-518166f2]{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-9[data-v-518166f2]{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-10[data-v-518166f2]{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-11[data-v-518166f2]{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-12[data-v-518166f2]{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-1[data-v-518166f2]{margin-left:8.33333%}.offset-2[data-v-518166f2]{margin-left:16.66667%}.offset-3[data-v-518166f2]{margin-left:25%}.offset-4[data-v-518166f2]{margin-left:33.33333%}.offset-5[data-v-518166f2]{margin-left:41.66667%}.offset-6[data-v-518166f2]{margin-left:50%}.offset-7[data-v-518166f2]{margin-left:58.33333%}.offset-8[data-v-518166f2]{margin-left:66.66667%}.offset-9[data-v-518166f2]{margin-left:75%}.offset-10[data-v-518166f2]{margin-left:83.33333%}.offset-11[data-v-518166f2]{margin-left:91.66667%}@media (min-width:576px){.col-sm[data-v-518166f2]{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-sm-2[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-sm-3[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-sm-5[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-sm-6[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-sm-8[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-sm-9[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-sm-11[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-sm-12[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first[data-v-518166f2]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-sm-last[data-v-518166f2]{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-sm-0[data-v-518166f2]{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-sm-1[data-v-518166f2]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-sm-2[data-v-518166f2]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-sm-3[data-v-518166f2]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-sm-4[data-v-518166f2]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-sm-5[data-v-518166f2]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-sm-6[data-v-518166f2]{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-sm-7[data-v-518166f2]{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-sm-8[data-v-518166f2]{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-sm-9[data-v-518166f2]{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-sm-10[data-v-518166f2]{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-sm-11[data-v-518166f2]{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-sm-12[data-v-518166f2]{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-sm-0[data-v-518166f2]{margin-left:0}.offset-sm-1[data-v-518166f2]{margin-left:8.33333%}.offset-sm-2[data-v-518166f2]{margin-left:16.66667%}.offset-sm-3[data-v-518166f2]{margin-left:25%}.offset-sm-4[data-v-518166f2]{margin-left:33.33333%}.offset-sm-5[data-v-518166f2]{margin-left:41.66667%}.offset-sm-6[data-v-518166f2]{margin-left:50%}.offset-sm-7[data-v-518166f2]{margin-left:58.33333%}.offset-sm-8[data-v-518166f2]{margin-left:66.66667%}.offset-sm-9[data-v-518166f2]{margin-left:75%}.offset-sm-10[data-v-518166f2]{margin-left:83.33333%}.offset-sm-11[data-v-518166f2]{margin-left:91.66667%}}@media (min-width:768px){.col-md[data-v-518166f2]{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-md-2[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-md-3[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-md-5[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-md-6[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-md-8[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-md-9[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-md-11[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-md-12[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first[data-v-518166f2]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-md-last[data-v-518166f2]{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-md-0[data-v-518166f2]{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-md-1[data-v-518166f2]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-md-2[data-v-518166f2]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-md-3[data-v-518166f2]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-md-4[data-v-518166f2]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-md-5[data-v-518166f2]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-md-6[data-v-518166f2]{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-md-7[data-v-518166f2]{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-md-8[data-v-518166f2]{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-md-9[data-v-518166f2]{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-md-10[data-v-518166f2]{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-md-11[data-v-518166f2]{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-md-12[data-v-518166f2]{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-md-0[data-v-518166f2]{margin-left:0}.offset-md-1[data-v-518166f2]{margin-left:8.33333%}.offset-md-2[data-v-518166f2]{margin-left:16.66667%}.offset-md-3[data-v-518166f2]{margin-left:25%}.offset-md-4[data-v-518166f2]{margin-left:33.33333%}.offset-md-5[data-v-518166f2]{margin-left:41.66667%}.offset-md-6[data-v-518166f2]{margin-left:50%}.offset-md-7[data-v-518166f2]{margin-left:58.33333%}.offset-md-8[data-v-518166f2]{margin-left:66.66667%}.offset-md-9[data-v-518166f2]{margin-left:75%}.offset-md-10[data-v-518166f2]{margin-left:83.33333%}.offset-md-11[data-v-518166f2]{margin-left:91.66667%}}@media (min-width:992px){.col-lg[data-v-518166f2]{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-lg-2[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-lg-3[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-lg-5[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-lg-6[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-lg-8[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-lg-9[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-lg-11[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-lg-12[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first[data-v-518166f2]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-lg-last[data-v-518166f2]{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-lg-0[data-v-518166f2]{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-lg-1[data-v-518166f2]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-lg-2[data-v-518166f2]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-lg-3[data-v-518166f2]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-lg-4[data-v-518166f2]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-lg-5[data-v-518166f2]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-lg-6[data-v-518166f2]{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-lg-7[data-v-518166f2]{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-lg-8[data-v-518166f2]{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-lg-9[data-v-518166f2]{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-lg-10[data-v-518166f2]{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-lg-11[data-v-518166f2]{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-lg-12[data-v-518166f2]{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-lg-0[data-v-518166f2]{margin-left:0}.offset-lg-1[data-v-518166f2]{margin-left:8.33333%}.offset-lg-2[data-v-518166f2]{margin-left:16.66667%}.offset-lg-3[data-v-518166f2]{margin-left:25%}.offset-lg-4[data-v-518166f2]{margin-left:33.33333%}.offset-lg-5[data-v-518166f2]{margin-left:41.66667%}.offset-lg-6[data-v-518166f2]{margin-left:50%}.offset-lg-7[data-v-518166f2]{margin-left:58.33333%}.offset-lg-8[data-v-518166f2]{margin-left:66.66667%}.offset-lg-9[data-v-518166f2]{margin-left:75%}.offset-lg-10[data-v-518166f2]{margin-left:83.33333%}.offset-lg-11[data-v-518166f2]{margin-left:91.66667%}}@media (min-width:1200px){.col-xl[data-v-518166f2]{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-xl-2[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-xl-3[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-xl-5[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-xl-6[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-xl-8[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-xl-9[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-xl-11[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-xl-12[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first[data-v-518166f2]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-xl-last[data-v-518166f2]{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-xl-0[data-v-518166f2]{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-xl-1[data-v-518166f2]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-xl-2[data-v-518166f2]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-xl-3[data-v-518166f2]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-xl-4[data-v-518166f2]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-xl-5[data-v-518166f2]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-xl-6[data-v-518166f2]{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-xl-7[data-v-518166f2]{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-xl-8[data-v-518166f2]{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-xl-9[data-v-518166f2]{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-xl-10[data-v-518166f2]{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-xl-11[data-v-518166f2]{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-xl-12[data-v-518166f2]{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-xl-0[data-v-518166f2]{margin-left:0}.offset-xl-1[data-v-518166f2]{margin-left:8.33333%}.offset-xl-2[data-v-518166f2]{margin-left:16.66667%}.offset-xl-3[data-v-518166f2]{margin-left:25%}.offset-xl-4[data-v-518166f2]{margin-left:33.33333%}.offset-xl-5[data-v-518166f2]{margin-left:41.66667%}.offset-xl-6[data-v-518166f2]{margin-left:50%}.offset-xl-7[data-v-518166f2]{margin-left:58.33333%}.offset-xl-8[data-v-518166f2]{margin-left:66.66667%}.offset-xl-9[data-v-518166f2]{margin-left:75%}.offset-xl-10[data-v-518166f2]{margin-left:83.33333%}.offset-xl-11[data-v-518166f2]{margin-left:91.66667%}}.table[data-v-518166f2]{width:100%;margin-bottom:16px;margin-bottom:1rem;color:#212529}.table td[data-v-518166f2],.table th[data-v-518166f2]{padding:12px;padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th[data-v-518166f2]{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody[data-v-518166f2]{border-top:2px solid #dee2e6}.table-sm td[data-v-518166f2],.table-sm th[data-v-518166f2]{padding:4.8px;padding:.3rem}.table-bordered[data-v-518166f2],.table-bordered td[data-v-518166f2],.table-bordered th[data-v-518166f2]{border:1px solid #dee2e6}.table-bordered thead td[data-v-518166f2],.table-bordered thead th[data-v-518166f2]{border-bottom-width:2px}.table-borderless tbody+tbody[data-v-518166f2],.table-borderless td[data-v-518166f2],.table-borderless th[data-v-518166f2],.table-borderless thead th[data-v-518166f2]{border:0}.table-striped tbody tr[data-v-518166f2]:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr[data-v-518166f2]:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary[data-v-518166f2],.table-primary>td[data-v-518166f2],.table-primary>th[data-v-518166f2]{background-color:#b8daff}.table-primary tbody+tbody[data-v-518166f2],.table-primary td[data-v-518166f2],.table-primary th[data-v-518166f2],.table-primary thead th[data-v-518166f2]{border-color:#7abaff}.table-hover .table-primary[data-v-518166f2]:hover,.table-hover .table-primary:hover>td[data-v-518166f2],.table-hover .table-primary:hover>th[data-v-518166f2]{background-color:#9fcdff}.table-secondary[data-v-518166f2],.table-secondary>td[data-v-518166f2],.table-secondary>th[data-v-518166f2]{background-color:#d6d8db}.table-secondary tbody+tbody[data-v-518166f2],.table-secondary td[data-v-518166f2],.table-secondary th[data-v-518166f2],.table-secondary thead th[data-v-518166f2]{border-color:#b3b7bb}.table-hover .table-secondary[data-v-518166f2]:hover,.table-hover .table-secondary:hover>td[data-v-518166f2],.table-hover .table-secondary:hover>th[data-v-518166f2]{background-color:#c8cbcf}.table-success[data-v-518166f2],.table-success>td[data-v-518166f2],.table-success>th[data-v-518166f2]{background-color:#c3e6cb}.table-success tbody+tbody[data-v-518166f2],.table-success td[data-v-518166f2],.table-success th[data-v-518166f2],.table-success thead th[data-v-518166f2]{border-color:#8fd19e}.table-hover .table-success[data-v-518166f2]:hover,.table-hover .table-success:hover>td[data-v-518166f2],.table-hover .table-success:hover>th[data-v-518166f2]{background-color:#b1dfbb}.table-info[data-v-518166f2],.table-info>td[data-v-518166f2],.table-info>th[data-v-518166f2]{background-color:#bee5eb}.table-info tbody+tbody[data-v-518166f2],.table-info td[data-v-518166f2],.table-info th[data-v-518166f2],.table-info thead th[data-v-518166f2]{border-color:#86cfda}.table-hover .table-info[data-v-518166f2]:hover,.table-hover .table-info:hover>td[data-v-518166f2],.table-hover .table-info:hover>th[data-v-518166f2]{background-color:#abdde5}.table-warning[data-v-518166f2],.table-warning>td[data-v-518166f2],.table-warning>th[data-v-518166f2]{background-color:#ffeeba}.table-warning tbody+tbody[data-v-518166f2],.table-warning td[data-v-518166f2],.table-warning th[data-v-518166f2],.table-warning thead th[data-v-518166f2]{border-color:#ffdf7e}.table-hover .table-warning[data-v-518166f2]:hover,.table-hover .table-warning:hover>td[data-v-518166f2],.table-hover .table-warning:hover>th[data-v-518166f2]{background-color:#ffe8a1}.table-danger[data-v-518166f2],.table-danger>td[data-v-518166f2],.table-danger>th[data-v-518166f2]{background-color:#f5c6cb}.table-danger tbody+tbody[data-v-518166f2],.table-danger td[data-v-518166f2],.table-danger th[data-v-518166f2],.table-danger thead th[data-v-518166f2]{border-color:#ed969e}.table-hover .table-danger[data-v-518166f2]:hover,.table-hover .table-danger:hover>td[data-v-518166f2],.table-hover .table-danger:hover>th[data-v-518166f2]{background-color:#f1b0b7}.table-light[data-v-518166f2],.table-light>td[data-v-518166f2],.table-light>th[data-v-518166f2]{background-color:#fdfdfe}.table-light tbody+tbody[data-v-518166f2],.table-light td[data-v-518166f2],.table-light th[data-v-518166f2],.table-light thead th[data-v-518166f2]{border-color:#fbfcfc}.table-hover .table-light[data-v-518166f2]:hover,.table-hover .table-light:hover>td[data-v-518166f2],.table-hover .table-light:hover>th[data-v-518166f2]{background-color:#ececf6}.table-dark[data-v-518166f2],.table-dark>td[data-v-518166f2],.table-dark>th[data-v-518166f2]{background-color:#c6c8ca}.table-dark tbody+tbody[data-v-518166f2],.table-dark td[data-v-518166f2],.table-dark th[data-v-518166f2],.table-dark thead th[data-v-518166f2]{border-color:#95999c}.table-hover .table-dark[data-v-518166f2]:hover,.table-hover .table-dark:hover>td[data-v-518166f2],.table-hover .table-dark:hover>th[data-v-518166f2]{background-color:#b9bbbe}.table-active[data-v-518166f2],.table-active>td[data-v-518166f2],.table-active>th[data-v-518166f2],.table-hover .table-active[data-v-518166f2]:hover,.table-hover .table-active:hover>td[data-v-518166f2],.table-hover .table-active:hover>th[data-v-518166f2]{background-color:rgba(0,0,0,.075)}.table .thead-dark th[data-v-518166f2]{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th[data-v-518166f2]{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark[data-v-518166f2]{color:#fff;background-color:#343a40}.table-dark td[data-v-518166f2],.table-dark th[data-v-518166f2],.table-dark thead th[data-v-518166f2]{border-color:#454d55}.table-dark.table-bordered[data-v-518166f2]{border:0}.table-dark.table-striped tbody tr[data-v-518166f2]:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr[data-v-518166f2]:hover{color:#fff;background-color:hsla(0,0%,100%,.075)}@media (max-width:575.98px){.table-responsive-sm[data-v-518166f2]{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered[data-v-518166f2]{border:0}}@media (max-width:767.98px){.table-responsive-md[data-v-518166f2]{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered[data-v-518166f2]{border:0}}@media (max-width:991.98px){.table-responsive-lg[data-v-518166f2]{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered[data-v-518166f2]{border:0}}@media (max-width:1199.98px){.table-responsive-xl[data-v-518166f2]{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered[data-v-518166f2]{border:0}}.table-responsive[data-v-518166f2]{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered[data-v-518166f2]{border:0}.form-control[data-v-518166f2]{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:6px 12px;padding:.375rem .75rem;font-size:16px;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control[data-v-518166f2]{-webkit-transition:none;transition:none}}.form-control[data-v-518166f2]::-ms-expand{background-color:transparent;border:0}.form-control[data-v-518166f2]:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control[data-v-518166f2]::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control[data-v-518166f2]::-moz-placeholder{color:#6c757d;opacity:1}.form-control[data-v-518166f2]::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control[data-v-518166f2]::placeholder{color:#6c757d;opacity:1}.form-control[data-v-518166f2]:disabled,.form-control[readonly][data-v-518166f2]{background-color:#e9ecef;opacity:1}select.form-control[data-v-518166f2]:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file[data-v-518166f2],.form-control-range[data-v-518166f2]{display:block;width:100%}.col-form-label[data-v-518166f2]{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg[data-v-518166f2]{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:20px;font-size:1.25rem;line-height:1.5}.col-form-label-sm[data-v-518166f2]{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:14px;font-size:.875rem;line-height:1.5}.form-control-plaintext[data-v-518166f2]{display:block;width:100%;padding-top:6px;padding-top:.375rem;padding-bottom:6px;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg[data-v-518166f2],.form-control-plaintext.form-control-sm[data-v-518166f2]{padding-right:0;padding-left:0}.form-control-sm[data-v-518166f2]{height:calc(1.5em + .5rem + 2px);padding:4px 8px;padding:.25rem .5rem;font-size:14px;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg[data-v-518166f2]{height:calc(1.5em + 1rem + 2px);padding:8px 16px;padding:.5rem 1rem;font-size:20px;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple][data-v-518166f2],select.form-control[size][data-v-518166f2],textarea.form-control[data-v-518166f2]{height:auto}.form-group[data-v-518166f2]{margin-bottom:16px;margin-bottom:1rem}.form-text[data-v-518166f2]{display:block;margin-top:4px;margin-top:.25rem}.form-row[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col[data-v-518166f2],.form-row>[class*=col-][data-v-518166f2]{padding-right:5px;padding-left:5px}.form-check[data-v-518166f2]{position:relative;display:block;padding-left:20px;padding-left:1.25rem}.form-check-input[data-v-518166f2]{position:absolute;margin-top:4.8px;margin-top:.3rem;margin-left:-20px;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label[data-v-518166f2]{color:#6c757d}.form-check-label[data-v-518166f2]{margin-bottom:0}.form-check-inline[data-v-518166f2]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:12px;margin-right:.75rem}.form-check-inline .form-check-input[data-v-518166f2]{position:static;margin-top:0;margin-right:5px;margin-right:.3125rem;margin-left:0}.valid-feedback[data-v-518166f2]{display:none;width:100%;margin-top:4px;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip[data-v-518166f2]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:4px 8px;padding:.25rem .5rem;margin-top:1.6px;margin-top:.1rem;font-size:14px;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.form-control.is-valid[data-v-518166f2],.was-validated .form-control[data-v-518166f2]:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:100% calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid[data-v-518166f2]:focus,.was-validated .form-control[data-v-518166f2]:valid:focus{border-color:#28a745;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.is-valid~.valid-feedback[data-v-518166f2],.form-control.is-valid~.valid-tooltip[data-v-518166f2],.was-validated .form-control:valid~.valid-feedback[data-v-518166f2],.was-validated .form-control:valid~.valid-tooltip[data-v-518166f2]{display:block}.was-validated textarea.form-control[data-v-518166f2]:valid,textarea.form-control.is-valid[data-v-518166f2]{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid[data-v-518166f2],.was-validated .custom-select[data-v-518166f2]:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-valid[data-v-518166f2]:focus,.was-validated .custom-select[data-v-518166f2]:valid:focus{border-color:#28a745;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.valid-feedback[data-v-518166f2],.custom-select.is-valid~.valid-tooltip[data-v-518166f2],.form-control-file.is-valid~.valid-feedback[data-v-518166f2],.form-control-file.is-valid~.valid-tooltip[data-v-518166f2],.was-validated .custom-select:valid~.valid-feedback[data-v-518166f2],.was-validated .custom-select:valid~.valid-tooltip[data-v-518166f2],.was-validated .form-control-file:valid~.valid-feedback[data-v-518166f2],.was-validated .form-control-file:valid~.valid-tooltip[data-v-518166f2]{display:block}.form-check-input.is-valid~.form-check-label[data-v-518166f2],.was-validated .form-check-input:valid~.form-check-label[data-v-518166f2]{color:#28a745}.form-check-input.is-valid~.valid-feedback[data-v-518166f2],.form-check-input.is-valid~.valid-tooltip[data-v-518166f2],.was-validated .form-check-input:valid~.valid-feedback[data-v-518166f2],.was-validated .form-check-input:valid~.valid-tooltip[data-v-518166f2]{display:block}.custom-control-input.is-valid~.custom-control-label[data-v-518166f2],.was-validated .custom-control-input:valid~.custom-control-label[data-v-518166f2]{color:#28a745}.custom-control-input.is-valid~.custom-control-label[data-v-518166f2]:before,.was-validated .custom-control-input:valid~.custom-control-label[data-v-518166f2]:before{border-color:#28a745}.custom-control-input.is-valid~.valid-feedback[data-v-518166f2],.custom-control-input.is-valid~.valid-tooltip[data-v-518166f2],.was-validated .custom-control-input:valid~.valid-feedback[data-v-518166f2],.was-validated .custom-control-input:valid~.valid-tooltip[data-v-518166f2]{display:block}.custom-control-input.is-valid:checked~.custom-control-label[data-v-518166f2]:before,.was-validated .custom-control-input:valid:checked~.custom-control-label[data-v-518166f2]:before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label[data-v-518166f2]:before,.was-validated .custom-control-input:valid:focus~.custom-control-label[data-v-518166f2]:before{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label[data-v-518166f2]:before,.custom-file-input.is-valid~.custom-file-label[data-v-518166f2],.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label[data-v-518166f2]:before,.was-validated .custom-file-input:valid~.custom-file-label[data-v-518166f2]{border-color:#28a745}.custom-file-input.is-valid~.valid-feedback[data-v-518166f2],.custom-file-input.is-valid~.valid-tooltip[data-v-518166f2],.was-validated .custom-file-input:valid~.valid-feedback[data-v-518166f2],.was-validated .custom-file-input:valid~.valid-tooltip[data-v-518166f2]{display:block}.custom-file-input.is-valid:focus~.custom-file-label[data-v-518166f2],.was-validated .custom-file-input:valid:focus~.custom-file-label[data-v-518166f2]{border-color:#28a745;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback[data-v-518166f2]{display:none;width:100%;margin-top:4px;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip[data-v-518166f2]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:4px 8px;padding:.25rem .5rem;margin-top:1.6px;margin-top:.1rem;font-size:14px;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-control.is-invalid[data-v-518166f2],.was-validated .form-control[data-v-518166f2]:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:100% calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid[data-v-518166f2]:focus,.was-validated .form-control[data-v-518166f2]:invalid:focus{border-color:#dc3545;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-control.is-invalid~.invalid-feedback[data-v-518166f2],.form-control.is-invalid~.invalid-tooltip[data-v-518166f2],.was-validated .form-control:invalid~.invalid-feedback[data-v-518166f2],.was-validated .form-control:invalid~.invalid-tooltip[data-v-518166f2]{display:block}.was-validated textarea.form-control[data-v-518166f2]:invalid,textarea.form-control.is-invalid[data-v-518166f2]{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid[data-v-518166f2],.was-validated .custom-select[data-v-518166f2]:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-invalid[data-v-518166f2]:focus,.was-validated .custom-select[data-v-518166f2]:invalid:focus{border-color:#dc3545;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback[data-v-518166f2],.custom-select.is-invalid~.invalid-tooltip[data-v-518166f2],.form-control-file.is-invalid~.invalid-feedback[data-v-518166f2],.form-control-file.is-invalid~.invalid-tooltip[data-v-518166f2],.was-validated .custom-select:invalid~.invalid-feedback[data-v-518166f2],.was-validated .custom-select:invalid~.invalid-tooltip[data-v-518166f2],.was-validated .form-control-file:invalid~.invalid-feedback[data-v-518166f2],.was-validated .form-control-file:invalid~.invalid-tooltip[data-v-518166f2]{display:block}.form-check-input.is-invalid~.form-check-label[data-v-518166f2],.was-validated .form-check-input:invalid~.form-check-label[data-v-518166f2]{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback[data-v-518166f2],.form-check-input.is-invalid~.invalid-tooltip[data-v-518166f2],.was-validated .form-check-input:invalid~.invalid-feedback[data-v-518166f2],.was-validated .form-check-input:invalid~.invalid-tooltip[data-v-518166f2]{display:block}.custom-control-input.is-invalid~.custom-control-label[data-v-518166f2],.was-validated .custom-control-input:invalid~.custom-control-label[data-v-518166f2]{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label[data-v-518166f2]:before,.was-validated .custom-control-input:invalid~.custom-control-label[data-v-518166f2]:before{border-color:#dc3545}.custom-control-input.is-invalid~.invalid-feedback[data-v-518166f2],.custom-control-input.is-invalid~.invalid-tooltip[data-v-518166f2],.was-validated .custom-control-input:invalid~.invalid-feedback[data-v-518166f2],.was-validated .custom-control-input:invalid~.invalid-tooltip[data-v-518166f2]{display:block}.custom-control-input.is-invalid:checked~.custom-control-label[data-v-518166f2]:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label[data-v-518166f2]:before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label[data-v-518166f2]:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label[data-v-518166f2]:before{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label[data-v-518166f2]:before,.custom-file-input.is-invalid~.custom-file-label[data-v-518166f2],.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label[data-v-518166f2]:before,.was-validated .custom-file-input:invalid~.custom-file-label[data-v-518166f2]{border-color:#dc3545}.custom-file-input.is-invalid~.invalid-feedback[data-v-518166f2],.custom-file-input.is-invalid~.invalid-tooltip[data-v-518166f2],.was-validated .custom-file-input:invalid~.invalid-feedback[data-v-518166f2],.was-validated .custom-file-input:invalid~.invalid-tooltip[data-v-518166f2]{display:block}.custom-file-input.is-invalid:focus~.custom-file-label[data-v-518166f2],.was-validated .custom-file-input:invalid:focus~.custom-file-label[data-v-518166f2]{border-color:#dc3545;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-inline .form-check[data-v-518166f2]{width:100%}@media (min-width:576px){.form-inline label[data-v-518166f2]{-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.form-inline .form-group[data-v-518166f2],.form-inline label[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;align-items:center;margin-bottom:0}.form-inline .form-group[data-v-518166f2]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center}.form-inline .form-control[data-v-518166f2]{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext[data-v-518166f2]{display:inline-block}.form-inline .custom-select[data-v-518166f2],.form-inline .input-group[data-v-518166f2]{width:auto}.form-inline .form-check[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input[data-v-518166f2]{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control[data-v-518166f2]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label[data-v-518166f2]{margin-bottom:0}}.btn[data-v-518166f2]{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:6px 12px;padding:.375rem .75rem;font-size:16px;font-size:1rem;line-height:1.5;border-radius:.25rem;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn[data-v-518166f2]{-webkit-transition:none;transition:none}}.btn[data-v-518166f2]:hover{color:#212529;text-decoration:none}.btn.focus[data-v-518166f2],.btn[data-v-518166f2]:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled[data-v-518166f2],.btn[data-v-518166f2]:disabled{opacity:.65}a.btn.disabled[data-v-518166f2],fieldset:disabled a.btn[data-v-518166f2]{pointer-events:none}.btn-primary[data-v-518166f2]{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary[data-v-518166f2]:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus[data-v-518166f2],.btn-primary[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(38,143,255,.5);box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled[data-v-518166f2],.btn-primary[data-v-518166f2]:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-primary[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-primary[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(38,143,255,.5);box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary[data-v-518166f2]{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary[data-v-518166f2]:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus[data-v-518166f2],.btn-secondary[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(130,138,145,.5);box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled[data-v-518166f2],.btn-secondary[data-v-518166f2]:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-secondary[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-secondary[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(130,138,145,.5);box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success[data-v-518166f2]{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success[data-v-518166f2]:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus[data-v-518166f2],.btn-success[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(72,180,97,.5);box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled[data-v-518166f2],.btn-success[data-v-518166f2]:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-success[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-success[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(72,180,97,.5);box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info[data-v-518166f2]{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info[data-v-518166f2]:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus[data-v-518166f2],.btn-info[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(58,176,195,.5);box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled[data-v-518166f2],.btn-info[data-v-518166f2]:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-info[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-info[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(58,176,195,.5);box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning[data-v-518166f2]{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning[data-v-518166f2]:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus[data-v-518166f2],.btn-warning[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(222,170,12,.5);box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled[data-v-518166f2],.btn-warning[data-v-518166f2]:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-warning[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle[data-v-518166f2]{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-warning[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(222,170,12,.5);box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger[data-v-518166f2]{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger[data-v-518166f2]:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus[data-v-518166f2],.btn-danger[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(225,83,97,.5);box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled[data-v-518166f2],.btn-danger[data-v-518166f2]:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-danger[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-danger[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(225,83,97,.5);box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light[data-v-518166f2]{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light[data-v-518166f2]:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus[data-v-518166f2],.btn-light[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(216,217,219,.5);box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled[data-v-518166f2],.btn-light[data-v-518166f2]:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-light[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle[data-v-518166f2]{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-light[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(216,217,219,.5);box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark[data-v-518166f2]{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark[data-v-518166f2]:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus[data-v-518166f2],.btn-dark[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(82,88,93,.5);box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled[data-v-518166f2],.btn-dark[data-v-518166f2]:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-dark[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-dark[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(82,88,93,.5);box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary[data-v-518166f2]{color:#007bff;border-color:#007bff}.btn-outline-primary[data-v-518166f2]:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus[data-v-518166f2],.btn-outline-primary[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled[data-v-518166f2],.btn-outline-primary[data-v-518166f2]:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-outline-primary[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-outline-primary[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary[data-v-518166f2]{color:#6c757d;border-color:#6c757d}.btn-outline-secondary[data-v-518166f2]:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus[data-v-518166f2],.btn-outline-secondary[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled[data-v-518166f2],.btn-outline-secondary[data-v-518166f2]:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-outline-secondary[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-outline-secondary[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success[data-v-518166f2]{color:#28a745;border-color:#28a745}.btn-outline-success[data-v-518166f2]:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus[data-v-518166f2],.btn-outline-success[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled[data-v-518166f2],.btn-outline-success[data-v-518166f2]:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-outline-success[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-outline-success[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info[data-v-518166f2]{color:#17a2b8;border-color:#17a2b8}.btn-outline-info[data-v-518166f2]:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus[data-v-518166f2],.btn-outline-info[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled[data-v-518166f2],.btn-outline-info[data-v-518166f2]:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-outline-info[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-outline-info[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning[data-v-518166f2]{color:#ffc107;border-color:#ffc107}.btn-outline-warning[data-v-518166f2]:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus[data-v-518166f2],.btn-outline-warning[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled[data-v-518166f2],.btn-outline-warning[data-v-518166f2]:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-outline-warning[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle[data-v-518166f2]{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-outline-warning[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger[data-v-518166f2]{color:#dc3545;border-color:#dc3545}.btn-outline-danger[data-v-518166f2]:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus[data-v-518166f2],.btn-outline-danger[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled[data-v-518166f2],.btn-outline-danger[data-v-518166f2]:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-outline-danger[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-outline-danger[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light[data-v-518166f2]{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light[data-v-518166f2]:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus[data-v-518166f2],.btn-outline-light[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled[data-v-518166f2],.btn-outline-light[data-v-518166f2]:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-outline-light[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle[data-v-518166f2]{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-outline-light[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark[data-v-518166f2]{color:#343a40;border-color:#343a40}.btn-outline-dark[data-v-518166f2]:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus[data-v-518166f2],.btn-outline-dark[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled[data-v-518166f2],.btn-outline-dark[data-v-518166f2]:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active[data-v-518166f2],.btn-outline-dark[data-v-518166f2]:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle[data-v-518166f2]{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active[data-v-518166f2]:focus,.btn-outline-dark[data-v-518166f2]:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle[data-v-518166f2]:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link[data-v-518166f2]{font-weight:400;color:#007bff;text-decoration:none}.btn-link[data-v-518166f2]:hover{color:#0056b3;text-decoration:underline}.btn-link.focus[data-v-518166f2],.btn-link[data-v-518166f2]:focus{text-decoration:underline;-webkit-box-shadow:none;box-shadow:none}.btn-link.disabled[data-v-518166f2],.btn-link[data-v-518166f2]:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn[data-v-518166f2],.btn-lg[data-v-518166f2]{padding:8px 16px;padding:.5rem 1rem;font-size:20px;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn[data-v-518166f2],.btn-sm[data-v-518166f2]{padding:4px 8px;padding:.25rem .5rem;font-size:14px;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block[data-v-518166f2]{display:block;width:100%}.btn-block+.btn-block[data-v-518166f2]{margin-top:8px;margin-top:.5rem}input[type=button].btn-block[data-v-518166f2],input[type=reset].btn-block[data-v-518166f2],input[type=submit].btn-block[data-v-518166f2]{width:100%}.fade[data-v-518166f2]{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade[data-v-518166f2]{-webkit-transition:none;transition:none}}.fade[data-v-518166f2]:not(.show){opacity:0}.collapse[data-v-518166f2]:not(.show){display:none}.collapsing[data-v-518166f2]{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing[data-v-518166f2]{-webkit-transition:none;transition:none}}.dropdown[data-v-518166f2],.dropleft[data-v-518166f2],.dropright[data-v-518166f2],.dropup[data-v-518166f2]{position:relative}.dropdown-toggle[data-v-518166f2]{white-space:nowrap}.dropdown-toggle[data-v-518166f2]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle[data-v-518166f2]:empty:after{margin-left:0}.dropdown-menu[data-v-518166f2]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;min-width:10rem;padding:8px 0;padding:.5rem 0;margin:2px 0 0;margin:.125rem 0 0;font-size:16px;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left[data-v-518166f2]{right:auto;left:0}.dropdown-menu-right[data-v-518166f2]{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left[data-v-518166f2]{right:auto;left:0}.dropdown-menu-sm-right[data-v-518166f2]{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left[data-v-518166f2]{right:auto;left:0}.dropdown-menu-md-right[data-v-518166f2]{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left[data-v-518166f2]{right:auto;left:0}.dropdown-menu-lg-right[data-v-518166f2]{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left[data-v-518166f2]{right:auto;left:0}.dropdown-menu-xl-right[data-v-518166f2]{right:0;left:auto}}.dropup .dropdown-menu[data-v-518166f2]{top:auto;bottom:100%;margin-top:0;margin-bottom:2px;margin-bottom:.125rem}.dropup .dropdown-toggle[data-v-518166f2]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle[data-v-518166f2]:empty:after{margin-left:0}.dropright .dropdown-menu[data-v-518166f2]{top:0;right:auto;left:100%;margin-top:0;margin-left:2px;margin-left:.125rem}.dropright .dropdown-toggle[data-v-518166f2]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle[data-v-518166f2]:empty:after{margin-left:0}.dropright .dropdown-toggle[data-v-518166f2]:after{vertical-align:0}.dropleft .dropdown-menu[data-v-518166f2]{top:0;right:100%;left:auto;margin-top:0;margin-right:2px;margin-right:.125rem}.dropleft .dropdown-toggle[data-v-518166f2]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle[data-v-518166f2]:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle[data-v-518166f2]:empty:after{margin-left:0}.dropleft .dropdown-toggle[data-v-518166f2]:before{vertical-align:0}.dropdown-menu[x-placement^=bottom][data-v-518166f2],.dropdown-menu[x-placement^=left][data-v-518166f2],.dropdown-menu[x-placement^=right][data-v-518166f2],.dropdown-menu[x-placement^=top][data-v-518166f2]{right:auto;bottom:auto}.dropdown-divider[data-v-518166f2]{height:0;margin:8px 0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item[data-v-518166f2]{display:block;width:100%;padding:4px 24px;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item[data-v-518166f2]:focus,.dropdown-item[data-v-518166f2]:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active[data-v-518166f2],.dropdown-item[data-v-518166f2]:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled[data-v-518166f2],.dropdown-item[data-v-518166f2]:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show[data-v-518166f2]{display:block}.dropdown-header[data-v-518166f2]{display:block;padding:8px 24px;padding:.5rem 1.5rem;margin-bottom:0;font-size:14px;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text[data-v-518166f2]{display:block;padding:4px 24px;padding:.25rem 1.5rem;color:#212529}.btn-group[data-v-518166f2],.btn-group-vertical[data-v-518166f2]{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn[data-v-518166f2],.btn-group>.btn[data-v-518166f2]{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.btn-group-vertical>.btn.active[data-v-518166f2],.btn-group-vertical>.btn[data-v-518166f2]:active,.btn-group-vertical>.btn[data-v-518166f2]:focus,.btn-group-vertical>.btn[data-v-518166f2]:hover,.btn-group>.btn.active[data-v-518166f2],.btn-group>.btn[data-v-518166f2]:active,.btn-group>.btn[data-v-518166f2]:focus,.btn-group>.btn[data-v-518166f2]:hover{z-index:1}.btn-toolbar[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group[data-v-518166f2]{width:auto}.btn-group>.btn-group[data-v-518166f2]:not(:first-child),.btn-group>.btn[data-v-518166f2]:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn[data-v-518166f2],.btn-group>.btn[data-v-518166f2]:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn[data-v-518166f2],.btn-group>.btn[data-v-518166f2]:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split[data-v-518166f2]{padding-right:9px;padding-right:.5625rem;padding-left:9px;padding-left:.5625rem}.dropdown-toggle-split[data-v-518166f2]:after,.dropright .dropdown-toggle-split[data-v-518166f2]:after,.dropup .dropdown-toggle-split[data-v-518166f2]:after{margin-left:0}.dropleft .dropdown-toggle-split[data-v-518166f2]:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split[data-v-518166f2],.btn-sm+.dropdown-toggle-split[data-v-518166f2]{padding-right:6px;padding-right:.375rem;padding-left:6px;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split[data-v-518166f2],.btn-lg+.dropdown-toggle-split[data-v-518166f2]{padding-right:12px;padding-right:.75rem;padding-left:12px;padding-left:.75rem}.btn-group-vertical[data-v-518166f2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btn-group-vertical>.btn[data-v-518166f2],.btn-group-vertical>.btn-group[data-v-518166f2]{width:100%}.btn-group-vertical>.btn-group[data-v-518166f2]:not(:first-child),.btn-group-vertical>.btn[data-v-518166f2]:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn[data-v-518166f2],.btn-group-vertical>.btn[data-v-518166f2]:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn[data-v-518166f2],.btn-group-vertical>.btn[data-v-518166f2]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn[data-v-518166f2],.btn-group-toggle>.btn-group>.btn[data-v-518166f2]{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox][data-v-518166f2],.btn-group-toggle>.btn-group>.btn input[type=radio][data-v-518166f2],.btn-group-toggle>.btn input[type=checkbox][data-v-518166f2],.btn-group-toggle>.btn input[type=radio][data-v-518166f2]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group[data-v-518166f2]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.custom-file[data-v-518166f2],.input-group>.custom-select[data-v-518166f2],.input-group>.form-control[data-v-518166f2],.input-group>.form-control-plaintext[data-v-518166f2]{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-file[data-v-518166f2],.input-group>.custom-file+.custom-select[data-v-518166f2],.input-group>.custom-file+.form-control[data-v-518166f2],.input-group>.custom-select+.custom-file[data-v-518166f2],.input-group>.custom-select+.custom-select[data-v-518166f2],.input-group>.custom-select+.form-control[data-v-518166f2],.input-group>.form-control+.custom-file[data-v-518166f2],.input-group>.form-control+.custom-select[data-v-518166f2],.input-group>.form-control+.form-control[data-v-518166f2],.input-group>.form-control-plaintext+.custom-file[data-v-518166f2],.input-group>.form-control-plaintext+.custom-select[data-v-518166f2],.input-group>.form-control-plaintext+.form-control[data-v-518166f2]{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label[data-v-518166f2],.input-group>.custom-select[data-v-518166f2]:focus,.input-group>.form-control[data-v-518166f2]:focus{z-index:3}.input-group>.custom-file .custom-file-input[data-v-518166f2]:focus{z-index:4}.input-group>.custom-select[data-v-518166f2]:not(:last-child),.input-group>.form-control[data-v-518166f2]:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select[data-v-518166f2]:not(:first-child),.input-group>.form-control[data-v-518166f2]:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label[data-v-518166f2],.input-group>.custom-file:not(:last-child) .custom-file-label[data-v-518166f2]:after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label[data-v-518166f2]{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append[data-v-518166f2],.input-group-prepend[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex}.input-group-append .btn[data-v-518166f2],.input-group-prepend .btn[data-v-518166f2]{position:relative;z-index:2}.input-group-append .btn[data-v-518166f2]:focus,.input-group-prepend .btn[data-v-518166f2]:focus{z-index:3}.input-group-append .btn+.btn[data-v-518166f2],.input-group-append .btn+.input-group-text[data-v-518166f2],.input-group-append .input-group-text+.btn[data-v-518166f2],.input-group-append .input-group-text+.input-group-text[data-v-518166f2],.input-group-prepend .btn+.btn[data-v-518166f2],.input-group-prepend .btn+.input-group-text[data-v-518166f2],.input-group-prepend .input-group-text+.btn[data-v-518166f2],.input-group-prepend .input-group-text+.input-group-text[data-v-518166f2]{margin-left:-1px}.input-group-prepend[data-v-518166f2]{margin-right:-1px}.input-group-append[data-v-518166f2]{margin-left:-1px}.input-group-text[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:6px 12px;padding:.375rem .75rem;margin-bottom:0;font-size:16px;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox][data-v-518166f2],.input-group-text input[type=radio][data-v-518166f2]{margin-top:0}.input-group-lg>.custom-select[data-v-518166f2],.input-group-lg>.form-control[data-v-518166f2]:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select[data-v-518166f2],.input-group-lg>.form-control[data-v-518166f2],.input-group-lg>.input-group-append>.btn[data-v-518166f2],.input-group-lg>.input-group-append>.input-group-text[data-v-518166f2],.input-group-lg>.input-group-prepend>.btn[data-v-518166f2],.input-group-lg>.input-group-prepend>.input-group-text[data-v-518166f2]{padding:8px 16px;padding:.5rem 1rem;font-size:20px;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select[data-v-518166f2],.input-group-sm>.form-control[data-v-518166f2]:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select[data-v-518166f2],.input-group-sm>.form-control[data-v-518166f2],.input-group-sm>.input-group-append>.btn[data-v-518166f2],.input-group-sm>.input-group-append>.input-group-text[data-v-518166f2],.input-group-sm>.input-group-prepend>.btn[data-v-518166f2],.input-group-sm>.input-group-prepend>.input-group-text[data-v-518166f2]{padding:4px 8px;padding:.25rem .5rem;font-size:14px;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select[data-v-518166f2],.input-group-sm>.custom-select[data-v-518166f2]{padding-right:28px;padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn[data-v-518166f2]:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text[data-v-518166f2]:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn[data-v-518166f2],.input-group>.input-group-append:not(:last-child)>.input-group-text[data-v-518166f2],.input-group>.input-group-prepend>.btn[data-v-518166f2],.input-group>.input-group-prepend>.input-group-text[data-v-518166f2]{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn[data-v-518166f2],.input-group>.input-group-append>.input-group-text[data-v-518166f2],.input-group>.input-group-prepend:first-child>.btn[data-v-518166f2]:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text[data-v-518166f2]:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn[data-v-518166f2],.input-group>.input-group-prepend:not(:first-child)>.input-group-text[data-v-518166f2]{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control[data-v-518166f2]{position:relative;display:block;min-height:24px;min-height:1.5rem;padding-left:24px;padding-left:1.5rem}.custom-control-inline[data-v-518166f2]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-right:16px;margin-right:1rem}.custom-control-input[data-v-518166f2]{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label[data-v-518166f2]:before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label[data-v-518166f2]:before{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label[data-v-518166f2]:before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label[data-v-518166f2]:before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label[data-v-518166f2]{color:#6c757d}.custom-control-input:disabled~.custom-control-label[data-v-518166f2]:before{background-color:#e9ecef}.custom-control-label[data-v-518166f2]{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label[data-v-518166f2]:before{pointer-events:none;background-color:#fff;border:1px solid #adb5bd}.custom-control-label[data-v-518166f2]:after,.custom-control-label[data-v-518166f2]:before{position:absolute;top:4px;top:.25rem;left:-24px;left:-1.5rem;display:block;width:16px;width:1rem;height:16px;height:1rem;content:\"\"}.custom-control-label[data-v-518166f2]:after{background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label[data-v-518166f2]:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label[data-v-518166f2]:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label[data-v-518166f2]:before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label[data-v-518166f2]:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label[data-v-518166f2]:before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label[data-v-518166f2]:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label[data-v-518166f2]:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label[data-v-518166f2]:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label[data-v-518166f2]:before{background-color:rgba(0,123,255,.5)}.custom-switch[data-v-518166f2]{padding-left:36px;padding-left:2.25rem}.custom-switch .custom-control-label[data-v-518166f2]:before{left:-36px;left:-2.25rem;width:28px;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label[data-v-518166f2]:after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-transform .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-transform .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label[data-v-518166f2]:after{-webkit-transition:none;transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label[data-v-518166f2]:after{background-color:#fff;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label[data-v-518166f2]:before{background-color:rgba(0,123,255,.5)}.custom-select[data-v-518166f2]{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:6px 28px 6px 12px;padding:.375rem 1.75rem .375rem .75rem;font-size:16px;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 12px center/8px 10px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select[data-v-518166f2]:focus{border-color:#80bdff;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select[data-v-518166f2]:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple][data-v-518166f2],.custom-select[size][data-v-518166f2]:not([size=\"1\"]){height:auto;padding-right:12px;padding-right:.75rem;background-image:none}.custom-select[data-v-518166f2]:disabled{color:#6c757d;background-color:#e9ecef}.custom-select[data-v-518166f2]::-ms-expand{display:none}.custom-select-sm[data-v-518166f2]{height:calc(1.5em + .5rem + 2px);padding-top:4px;padding-top:.25rem;padding-bottom:4px;padding-bottom:.25rem;padding-left:8px;padding-left:.5rem;font-size:14px;font-size:.875rem}.custom-select-lg[data-v-518166f2]{height:calc(1.5em + 1rem + 2px);padding-top:8px;padding-top:.5rem;padding-bottom:8px;padding-bottom:.5rem;padding-left:16px;padding-left:1rem;font-size:20px;font-size:1.25rem}.custom-file[data-v-518166f2]{display:inline-block;margin-bottom:0}.custom-file[data-v-518166f2],.custom-file-input[data-v-518166f2]{position:relative;width:100%;height:calc(1.5em + .75rem + 2px)}.custom-file-input[data-v-518166f2]{z-index:2;margin:0;opacity:0}.custom-file-input:focus~.custom-file-label[data-v-518166f2]{border-color:#80bdff;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label[data-v-518166f2]{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label[data-v-518166f2]:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse][data-v-518166f2]:after{content:attr(data-browse)}.custom-file-label[data-v-518166f2]{left:0;z-index:1;height:calc(1.5em + .75rem + 2px);font-weight:400;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label[data-v-518166f2],.custom-file-label[data-v-518166f2]:after{position:absolute;top:0;right:0;padding:6px 12px;padding:.375rem .75rem;line-height:1.5;color:#495057}.custom-file-label[data-v-518166f2]:after{bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range[data-v-518166f2]{width:100%;height:22.4px;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range[data-v-518166f2]:focus{outline:none}.custom-range[data-v-518166f2]:focus::-webkit-slider-thumb{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range[data-v-518166f2]:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range[data-v-518166f2]:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range[data-v-518166f2]::-moz-focus-outer{border:0}.custom-range[data-v-518166f2]::-webkit-slider-thumb{width:16px;width:1rem;height:16px;height:1rem;margin-top:-4px;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range[data-v-518166f2]::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range[data-v-518166f2]::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range[data-v-518166f2]::-webkit-slider-runnable-track{width:100%;height:8px;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range[data-v-518166f2]::-moz-range-thumb{width:16px;width:1rem;height:16px;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range[data-v-518166f2]::-moz-range-thumb{-webkit-transition:none;transition:none}}.custom-range[data-v-518166f2]::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range[data-v-518166f2]::-moz-range-track{width:100%;height:8px;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range[data-v-518166f2]::-ms-thumb{width:16px;width:1rem;height:16px;height:1rem;margin-top:0;margin-right:3.2px;margin-right:.2rem;margin-left:3.2px;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range[data-v-518166f2]::-ms-thumb{-webkit-transition:none;transition:none}}.custom-range[data-v-518166f2]::-ms-thumb:active{background-color:#b3d7ff}.custom-range[data-v-518166f2]::-ms-track{width:100%;height:8px;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:8px;border-width:.5rem}.custom-range[data-v-518166f2]::-ms-fill-lower,.custom-range[data-v-518166f2]::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem}.custom-range[data-v-518166f2]::-ms-fill-upper{margin-right:15px}.custom-range[data-v-518166f2]:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range[data-v-518166f2]:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range[data-v-518166f2]:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range[data-v-518166f2]:disabled::-moz-range-track{cursor:default}.custom-range[data-v-518166f2]:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label[data-v-518166f2]:before,.custom-file-label[data-v-518166f2],.custom-select[data-v-518166f2]{-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label[data-v-518166f2]:before,.custom-file-label[data-v-518166f2],.custom-select[data-v-518166f2]{-webkit-transition:none;transition:none}}.nav[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link[data-v-518166f2]{display:block;padding:8px 16px;padding:.5rem 1rem}.nav-link[data-v-518166f2]:focus,.nav-link[data-v-518166f2]:hover{text-decoration:none}.nav-link.disabled[data-v-518166f2]{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs[data-v-518166f2]{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item[data-v-518166f2]{margin-bottom:-1px}.nav-tabs .nav-link[data-v-518166f2]{border:1px solid transparent;border-top-left-radius:4px;border-top-left-radius:.25rem;border-top-right-radius:4px;border-top-right-radius:.25rem}.nav-tabs .nav-link[data-v-518166f2]:focus,.nav-tabs .nav-link[data-v-518166f2]:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled[data-v-518166f2]{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link[data-v-518166f2],.nav-tabs .nav-link.active[data-v-518166f2]{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu[data-v-518166f2]{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link[data-v-518166f2]{border-radius:.25rem}.nav-pills .nav-link.active[data-v-518166f2],.nav-pills .show>.nav-link[data-v-518166f2]{color:#fff;background-color:#007bff}.nav-fill .nav-item[data-v-518166f2]{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item[data-v-518166f2]{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane[data-v-518166f2]{display:none}.tab-content>.active[data-v-518166f2]{display:block}.navbar[data-v-518166f2]{position:relative;padding:8px 16px;padding:.5rem 1rem}.navbar[data-v-518166f2],.navbar>.container[data-v-518166f2],.navbar>.container-fluid[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand[data-v-518166f2]{display:inline-block;padding-top:5px;padding-top:.3125rem;padding-bottom:5px;padding-bottom:.3125rem;margin-right:16px;margin-right:1rem;font-size:20px;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand[data-v-518166f2]:focus,.navbar-brand[data-v-518166f2]:hover{text-decoration:none}.navbar-nav[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link[data-v-518166f2]{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu[data-v-518166f2]{position:static;float:none}.navbar-text[data-v-518166f2]{display:inline-block;padding-top:8px;padding-top:.5rem;padding-bottom:8px;padding-bottom:.5rem}.navbar-collapse[data-v-518166f2]{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar-toggler[data-v-518166f2]{padding:4px 12px;padding:.25rem .75rem;font-size:20px;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler[data-v-518166f2]:focus,.navbar-toggler[data-v-518166f2]:hover{text-decoration:none}.navbar-toggler-icon[data-v-518166f2]{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat 50%;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container[data-v-518166f2],.navbar-expand-sm>.container-fluid[data-v-518166f2]{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm[data-v-518166f2]{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm[data-v-518166f2],.navbar-expand-sm .navbar-nav[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal}.navbar-expand-sm .navbar-nav[data-v-518166f2]{-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu[data-v-518166f2]{position:absolute}.navbar-expand-sm .navbar-nav .nav-link[data-v-518166f2]{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container[data-v-518166f2],.navbar-expand-sm>.container-fluid[data-v-518166f2]{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler[data-v-518166f2]{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container[data-v-518166f2],.navbar-expand-md>.container-fluid[data-v-518166f2]{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md[data-v-518166f2]{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md[data-v-518166f2],.navbar-expand-md .navbar-nav[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal}.navbar-expand-md .navbar-nav[data-v-518166f2]{-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu[data-v-518166f2]{position:absolute}.navbar-expand-md .navbar-nav .nav-link[data-v-518166f2]{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container[data-v-518166f2],.navbar-expand-md>.container-fluid[data-v-518166f2]{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler[data-v-518166f2]{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container[data-v-518166f2],.navbar-expand-lg>.container-fluid[data-v-518166f2]{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg[data-v-518166f2]{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg[data-v-518166f2],.navbar-expand-lg .navbar-nav[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal}.navbar-expand-lg .navbar-nav[data-v-518166f2]{-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu[data-v-518166f2]{position:absolute}.navbar-expand-lg .navbar-nav .nav-link[data-v-518166f2]{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container[data-v-518166f2],.navbar-expand-lg>.container-fluid[data-v-518166f2]{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler[data-v-518166f2]{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container[data-v-518166f2],.navbar-expand-xl>.container-fluid[data-v-518166f2]{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl[data-v-518166f2]{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl[data-v-518166f2],.navbar-expand-xl .navbar-nav[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal}.navbar-expand-xl .navbar-nav[data-v-518166f2]{-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu[data-v-518166f2]{position:absolute}.navbar-expand-xl .navbar-nav .nav-link[data-v-518166f2]{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container[data-v-518166f2],.navbar-expand-xl>.container-fluid[data-v-518166f2]{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler[data-v-518166f2]{display:none}}.navbar-expand[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container[data-v-518166f2],.navbar-expand>.container-fluid[data-v-518166f2]{padding-right:0;padding-left:0}.navbar-expand .navbar-nav[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu[data-v-518166f2]{position:absolute}.navbar-expand .navbar-nav .nav-link[data-v-518166f2]{padding-right:8px;padding-right:.5rem;padding-left:8px;padding-left:.5rem}.navbar-expand>.container[data-v-518166f2],.navbar-expand>.container-fluid[data-v-518166f2]{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler[data-v-518166f2]{display:none}.navbar-light .navbar-brand[data-v-518166f2],.navbar-light .navbar-brand[data-v-518166f2]:focus,.navbar-light .navbar-brand[data-v-518166f2]:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link[data-v-518166f2]{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link[data-v-518166f2]:focus,.navbar-light .navbar-nav .nav-link[data-v-518166f2]:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled[data-v-518166f2]{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link[data-v-518166f2],.navbar-light .navbar-nav .nav-link.active[data-v-518166f2],.navbar-light .navbar-nav .nav-link.show[data-v-518166f2],.navbar-light .navbar-nav .show>.nav-link[data-v-518166f2]{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler[data-v-518166f2]{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon[data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text[data-v-518166f2]{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a[data-v-518166f2],.navbar-light .navbar-text a[data-v-518166f2]:focus,.navbar-light .navbar-text a[data-v-518166f2]:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand[data-v-518166f2],.navbar-dark .navbar-brand[data-v-518166f2]:focus,.navbar-dark .navbar-brand[data-v-518166f2]:hover{color:#fff}.navbar-dark .navbar-nav .nav-link[data-v-518166f2]{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link[data-v-518166f2]:focus,.navbar-dark .navbar-nav .nav-link[data-v-518166f2]:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled[data-v-518166f2]{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link[data-v-518166f2],.navbar-dark .navbar-nav .nav-link.active[data-v-518166f2],.navbar-dark .navbar-nav .nav-link.show[data-v-518166f2],.navbar-dark .navbar-nav .show>.nav-link[data-v-518166f2]{color:#fff}.navbar-dark .navbar-toggler[data-v-518166f2]{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon[data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text[data-v-518166f2]{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a[data-v-518166f2],.navbar-dark .navbar-text a[data-v-518166f2]:focus,.navbar-dark .navbar-text a[data-v-518166f2]:hover{color:#fff}.card[data-v-518166f2]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr[data-v-518166f2]{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item[data-v-518166f2]:first-child{border-top-left-radius:4px;border-top-left-radius:.25rem;border-top-right-radius:4px;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item[data-v-518166f2]:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:.25rem;border-bottom-left-radius:4px;border-bottom-left-radius:.25rem}.card-body[data-v-518166f2]{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:20px;padding:1.25rem}.card-title[data-v-518166f2]{margin-bottom:12px;margin-bottom:.75rem}.card-subtitle[data-v-518166f2]{margin-top:-6px;margin-top:-.375rem}.card-subtitle[data-v-518166f2],.card-text[data-v-518166f2]:last-child{margin-bottom:0}.card-link[data-v-518166f2]:hover{text-decoration:none}.card-link+.card-link[data-v-518166f2]{margin-left:20px;margin-left:1.25rem}.card-header[data-v-518166f2]{padding:12px 20px;padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header[data-v-518166f2]:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item[data-v-518166f2]:first-child{border-top:0}.card-footer[data-v-518166f2]{padding:12px 20px;padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer[data-v-518166f2]:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs[data-v-518166f2]{margin-bottom:-12px;margin-bottom:-.75rem;border-bottom:0}.card-header-pills[data-v-518166f2],.card-header-tabs[data-v-518166f2]{margin-right:-10px;margin-right:-.625rem;margin-left:-10px;margin-left:-.625rem}.card-img-overlay[data-v-518166f2]{position:absolute;top:0;right:0;bottom:0;left:0;padding:20px;padding:1.25rem}.card-img[data-v-518166f2]{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top[data-v-518166f2]{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom[data-v-518166f2]{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.card-deck .card[data-v-518166f2]{margin-bottom:15px}@media (min-width:576px){.card-deck[data-v-518166f2]{-webkit-box-orient:horizontal;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck[data-v-518166f2],.card-deck .card[data-v-518166f2]{-webkit-box-direction:normal}.card-deck .card[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 0%;flex:1 0 0%;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.card-group>.card[data-v-518166f2]{margin-bottom:15px}@media (min-width:576px){.card-group[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card[data-v-518166f2]{-webkit-box-flex:1;-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card[data-v-518166f2]{margin-left:0;border-left:0}.card-group>.card[data-v-518166f2]:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header[data-v-518166f2],.card-group>.card:not(:last-child) .card-img-top[data-v-518166f2]{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer[data-v-518166f2],.card-group>.card:not(:last-child) .card-img-bottom[data-v-518166f2]{border-bottom-right-radius:0}.card-group>.card[data-v-518166f2]:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header[data-v-518166f2],.card-group>.card:not(:first-child) .card-img-top[data-v-518166f2]{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer[data-v-518166f2],.card-group>.card:not(:first-child) .card-img-bottom[data-v-518166f2]{border-bottom-left-radius:0}}.card-columns .card[data-v-518166f2]{margin-bottom:12px;margin-bottom:.75rem}@media (min-width:576px){.card-columns[data-v-518166f2]{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card[data-v-518166f2]{display:inline-block;width:100%}}.accordion>.card[data-v-518166f2]{overflow:hidden}.accordion>.card:not(:first-of-type) .card-header[data-v-518166f2]:first-child{border-radius:0}.accordion>.card[data-v-518166f2]:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.accordion>.card[data-v-518166f2]:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card[data-v-518166f2]:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.accordion>.card .card-header[data-v-518166f2]{margin-bottom:-1px}.breadcrumb[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:12px 16px;padding:.75rem 1rem;margin-bottom:16px;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item[data-v-518166f2]{padding-left:8px;padding-left:.5rem}.breadcrumb-item+.breadcrumb-item[data-v-518166f2]:before{display:inline-block;padding-right:8px;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item[data-v-518166f2]:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active[data-v-518166f2]{color:#6c757d}.pagination[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link[data-v-518166f2]{position:relative;display:block;padding:8px 12px;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link[data-v-518166f2]:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link[data-v-518166f2]:focus{z-index:2;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link[data-v-518166f2]{margin-left:0;border-top-left-radius:4px;border-top-left-radius:.25rem;border-bottom-left-radius:4px;border-bottom-left-radius:.25rem}.page-item:last-child .page-link[data-v-518166f2]{border-top-right-radius:4px;border-top-right-radius:.25rem;border-bottom-right-radius:4px;border-bottom-right-radius:.25rem}.page-item.active .page-link[data-v-518166f2]{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link[data-v-518166f2]{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link[data-v-518166f2]{padding:12px 24px;padding:.75rem 1.5rem;font-size:20px;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link[data-v-518166f2]{border-top-left-radius:4.8px;border-top-left-radius:.3rem;border-bottom-left-radius:4.8px;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link[data-v-518166f2]{border-top-right-radius:4.8px;border-top-right-radius:.3rem;border-bottom-right-radius:4.8px;border-bottom-right-radius:.3rem}.pagination-sm .page-link[data-v-518166f2]{padding:4px 8px;padding:.25rem .5rem;font-size:14px;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link[data-v-518166f2]{border-top-left-radius:3.2px;border-top-left-radius:.2rem;border-bottom-left-radius:3.2px;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link[data-v-518166f2]{border-top-right-radius:3.2px;border-top-right-radius:.2rem;border-bottom-right-radius:3.2px;border-bottom-right-radius:.2rem}.badge[data-v-518166f2]{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge[data-v-518166f2]{-webkit-transition:none;transition:none}}a.badge[data-v-518166f2]:focus,a.badge[data-v-518166f2]:hover{text-decoration:none}.badge[data-v-518166f2]:empty{display:none}.btn .badge[data-v-518166f2]{position:relative;top:-1px}.badge-pill[data-v-518166f2]{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary[data-v-518166f2]{color:#fff;background-color:#007bff}a.badge-primary[data-v-518166f2]:focus,a.badge-primary[data-v-518166f2]:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus[data-v-518166f2],a.badge-primary[data-v-518166f2]:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary[data-v-518166f2]{color:#fff;background-color:#6c757d}a.badge-secondary[data-v-518166f2]:focus,a.badge-secondary[data-v-518166f2]:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus[data-v-518166f2],a.badge-secondary[data-v-518166f2]:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success[data-v-518166f2]{color:#fff;background-color:#28a745}a.badge-success[data-v-518166f2]:focus,a.badge-success[data-v-518166f2]:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus[data-v-518166f2],a.badge-success[data-v-518166f2]:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info[data-v-518166f2]{color:#fff;background-color:#17a2b8}a.badge-info[data-v-518166f2]:focus,a.badge-info[data-v-518166f2]:hover{color:#fff;background-color:#117a8b}a.badge-info.focus[data-v-518166f2],a.badge-info[data-v-518166f2]:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning[data-v-518166f2]{color:#212529;background-color:#ffc107}a.badge-warning[data-v-518166f2]:focus,a.badge-warning[data-v-518166f2]:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus[data-v-518166f2],a.badge-warning[data-v-518166f2]:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger[data-v-518166f2]{color:#fff;background-color:#dc3545}a.badge-danger[data-v-518166f2]:focus,a.badge-danger[data-v-518166f2]:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus[data-v-518166f2],a.badge-danger[data-v-518166f2]:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light[data-v-518166f2]{color:#212529;background-color:#f8f9fa}a.badge-light[data-v-518166f2]:focus,a.badge-light[data-v-518166f2]:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus[data-v-518166f2],a.badge-light[data-v-518166f2]:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark[data-v-518166f2]{color:#fff;background-color:#343a40}a.badge-dark[data-v-518166f2]:focus,a.badge-dark[data-v-518166f2]:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus[data-v-518166f2],a.badge-dark[data-v-518166f2]:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron[data-v-518166f2]{padding:32px 16px;padding:2rem 1rem;margin-bottom:32px;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron[data-v-518166f2]{padding:4rem 2rem}}.jumbotron-fluid[data-v-518166f2]{padding-right:0;padding-left:0;border-radius:0}.alert[data-v-518166f2]{position:relative;padding:12px 20px;padding:.75rem 1.25rem;margin-bottom:16px;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading[data-v-518166f2]{color:inherit}.alert-link[data-v-518166f2]{font-weight:700}.alert-dismissible[data-v-518166f2]{padding-right:64px;padding-right:4rem}.alert-dismissible .close[data-v-518166f2]{position:absolute;top:0;right:0;padding:12px 20px;padding:.75rem 1.25rem;color:inherit}.alert-primary[data-v-518166f2]{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr[data-v-518166f2]{border-top-color:#9fcdff}.alert-primary .alert-link[data-v-518166f2]{color:#002752}.alert-secondary[data-v-518166f2]{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr[data-v-518166f2]{border-top-color:#c8cbcf}.alert-secondary .alert-link[data-v-518166f2]{color:#202326}.alert-success[data-v-518166f2]{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr[data-v-518166f2]{border-top-color:#b1dfbb}.alert-success .alert-link[data-v-518166f2]{color:#0b2e13}.alert-info[data-v-518166f2]{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr[data-v-518166f2]{border-top-color:#abdde5}.alert-info .alert-link[data-v-518166f2]{color:#062c33}.alert-warning[data-v-518166f2]{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr[data-v-518166f2]{border-top-color:#ffe8a1}.alert-warning .alert-link[data-v-518166f2]{color:#533f03}.alert-danger[data-v-518166f2]{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr[data-v-518166f2]{border-top-color:#f1b0b7}.alert-danger .alert-link[data-v-518166f2]{color:#491217}.alert-light[data-v-518166f2]{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr[data-v-518166f2]{border-top-color:#ececf6}.alert-light .alert-link[data-v-518166f2]{color:#686868}.alert-dark[data-v-518166f2]{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr[data-v-518166f2]{border-top-color:#b9bbbe}.alert-dark .alert-link[data-v-518166f2]{color:#040505}@-webkit-keyframes progress-bar-stripes-data-v-518166f2{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes-data-v-518166f2{0%{background-position:1rem 0}to{background-position:0 0}}.progress[data-v-518166f2]{height:16px;height:1rem;overflow:hidden;font-size:12px;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress[data-v-518166f2],.progress-bar[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex}.progress-bar[data-v-518166f2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;-webkit-transition:width .6s ease;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar[data-v-518166f2]{-webkit-transition:none;transition:none}}.progress-bar-striped[data-v-518166f2]{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated[data-v-518166f2]{-webkit-animation:progress-bar-stripes-data-v-518166f2 1s linear infinite;animation:progress-bar-stripes-data-v-518166f2 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated[data-v-518166f2]{-webkit-animation:none;animation:none}}.media[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.media-body[data-v-518166f2]{-webkit-box-flex:1;-ms-flex:1;flex:1}.list-group[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action[data-v-518166f2]{width:100%;color:#495057;text-align:inherit}.list-group-item-action[data-v-518166f2]:focus,.list-group-item-action[data-v-518166f2]:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action[data-v-518166f2]:active{color:#212529;background-color:#e9ecef}.list-group-item[data-v-518166f2]{position:relative;display:block;padding:12px 20px;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item[data-v-518166f2]:first-child{border-top-left-radius:4px;border-top-left-radius:.25rem;border-top-right-radius:4px;border-top-right-radius:.25rem}.list-group-item[data-v-518166f2]:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-right-radius:.25rem;border-bottom-left-radius:4px;border-bottom-left-radius:.25rem}.list-group-item.disabled[data-v-518166f2],.list-group-item[data-v-518166f2]:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active[data-v-518166f2]{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-horizontal[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal .list-group-item[data-v-518166f2]{margin-right:-1px;margin-bottom:0}.list-group-horizontal .list-group-item[data-v-518166f2]:first-child{border-top-left-radius:4px;border-top-left-radius:.25rem;border-bottom-left-radius:4px;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal .list-group-item[data-v-518166f2]:last-child{margin-right:0;border-top-right-radius:4px;border-top-right-radius:.25rem;border-bottom-right-radius:4px;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}@media (min-width:576px){.list-group-horizontal-sm[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-sm .list-group-item[data-v-518166f2]{margin-right:-1px;margin-bottom:0}.list-group-horizontal-sm .list-group-item[data-v-518166f2]:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm .list-group-item[data-v-518166f2]:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:768px){.list-group-horizontal-md[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-md .list-group-item[data-v-518166f2]{margin-right:-1px;margin-bottom:0}.list-group-horizontal-md .list-group-item[data-v-518166f2]:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md .list-group-item[data-v-518166f2]:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:992px){.list-group-horizontal-lg[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-lg .list-group-item[data-v-518166f2]{margin-right:-1px;margin-bottom:0}.list-group-horizontal-lg .list-group-item[data-v-518166f2]:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg .list-group-item[data-v-518166f2]:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:1200px){.list-group-horizontal-xl[data-v-518166f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-xl .list-group-item[data-v-518166f2]{margin-right:-1px;margin-bottom:0}.list-group-horizontal-xl .list-group-item[data-v-518166f2]:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl .list-group-item[data-v-518166f2]:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}.list-group-flush .list-group-item[data-v-518166f2]{border-right:0;border-left:0;border-radius:0}.list-group-flush .list-group-item[data-v-518166f2]:last-child{margin-bottom:-1px}.list-group-flush:first-child .list-group-item[data-v-518166f2]:first-child{border-top:0}.list-group-flush:last-child .list-group-item[data-v-518166f2]:last-child{margin-bottom:0;border-bottom:0}.list-group-item-primary[data-v-518166f2]{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action[data-v-518166f2]:focus,.list-group-item-primary.list-group-item-action[data-v-518166f2]:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active[data-v-518166f2]{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary[data-v-518166f2]{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action[data-v-518166f2]:focus,.list-group-item-secondary.list-group-item-action[data-v-518166f2]:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active[data-v-518166f2]{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success[data-v-518166f2]{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action[data-v-518166f2]:focus,.list-group-item-success.list-group-item-action[data-v-518166f2]:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active[data-v-518166f2]{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info[data-v-518166f2]{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action[data-v-518166f2]:focus,.list-group-item-info.list-group-item-action[data-v-518166f2]:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active[data-v-518166f2]{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning[data-v-518166f2]{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action[data-v-518166f2]:focus,.list-group-item-warning.list-group-item-action[data-v-518166f2]:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active[data-v-518166f2]{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger[data-v-518166f2]{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action[data-v-518166f2]:focus,.list-group-item-danger.list-group-item-action[data-v-518166f2]:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active[data-v-518166f2]{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light[data-v-518166f2]{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action[data-v-518166f2]:focus,.list-group-item-light.list-group-item-action[data-v-518166f2]:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active[data-v-518166f2]{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark[data-v-518166f2]{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action[data-v-518166f2]:focus,.list-group-item-dark.list-group-item-action[data-v-518166f2]:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active[data-v-518166f2]{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close[data-v-518166f2]{float:right;font-size:24px;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close[data-v-518166f2]:hover{color:#000;text-decoration:none}.close[data-v-518166f2]:not(:disabled):not(.disabled):focus,.close[data-v-518166f2]:not(:disabled):not(.disabled):hover{opacity:.75}button.close[data-v-518166f2]{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled[data-v-518166f2]{pointer-events:none}.toast[data-v-518166f2]{max-width:350px;overflow:hidden;font-size:14px;font-size:.875rem;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);-webkit-box-shadow:0 .25rem .75rem rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast[data-v-518166f2]:not(:last-child){margin-bottom:12px;margin-bottom:.75rem}.toast.showing[data-v-518166f2]{opacity:1}.toast.show[data-v-518166f2]{display:block;opacity:1}.toast.hide[data-v-518166f2]{display:none}.toast-header[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:4px 12px;padding:.25rem .75rem;color:#6c757d;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body[data-v-518166f2]{padding:12px;padding:.75rem}.modal-open[data-v-518166f2]{overflow:hidden}.modal-open .modal[data-v-518166f2]{overflow-x:hidden;overflow-y:auto}.modal[data-v-518166f2]{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog[data-v-518166f2]{position:relative;width:auto;margin:8px;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog[data-v-518166f2]{-webkit-transition:-webkit-transform .3s ease-out;transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translateY(-50px);transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog[data-v-518166f2]{-webkit-transition:none;transition:none}}.modal.show .modal-dialog[data-v-518166f2]{-webkit-transform:none;transform:none}.modal-dialog-scrollable[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content[data-v-518166f2]{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer[data-v-518166f2],.modal-dialog-scrollable .modal-header[data-v-518166f2]{-ms-flex-negative:0;flex-shrink:0}.modal-dialog-scrollable .modal-body[data-v-518166f2]{overflow-y:auto}.modal-dialog-centered[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered[data-v-518166f2]:before{display:block;height:calc(100vh - 1rem);content:\"\"}.modal-dialog-centered.modal-dialog-scrollable[data-v-518166f2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content[data-v-518166f2]{max-height:none}.modal-dialog-centered.modal-dialog-scrollable[data-v-518166f2]:before{content:none}.modal-content[data-v-518166f2]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop[data-v-518166f2]{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade[data-v-518166f2]{opacity:0}.modal-backdrop.show[data-v-518166f2]{opacity:.5}.modal-header[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #dee2e6;border-top-left-radius:4.8px;border-top-left-radius:.3rem;border-top-right-radius:4.8px;border-top-right-radius:.3rem}.modal-header[data-v-518166f2],.modal-header .close[data-v-518166f2]{padding:16px 16px;padding:1rem 1rem}.modal-header .close[data-v-518166f2]{margin:-16px -16px -16px auto;margin:-1rem -1rem -1rem auto}.modal-title[data-v-518166f2]{margin-bottom:0;line-height:1.5}.modal-body[data-v-518166f2]{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:16px;padding:1rem}.modal-footer[data-v-518166f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:16px;padding:1rem;border-top:1px solid #dee2e6;border-bottom-right-radius:4.8px;border-bottom-right-radius:.3rem;border-bottom-left-radius:4.8px;border-bottom-left-radius:.3rem}.modal-footer[data-v-518166f2]>:not(:first-child){margin-left:4px;margin-left:.25rem}.modal-footer[data-v-518166f2]>:not(:last-child){margin-right:4px;margin-right:.25rem}.modal-scrollbar-measure[data-v-518166f2]{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog[data-v-518166f2]{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable[data-v-518166f2]{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content[data-v-518166f2]{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered[data-v-518166f2]{min-height:calc(100% - 3.5rem)}.modal-dialog-centered[data-v-518166f2]:before{height:calc(100vh - 3.5rem)}.modal-sm[data-v-518166f2]{max-width:300px}}@media (min-width:992px){.modal-lg[data-v-518166f2],.modal-xl[data-v-518166f2]{max-width:800px}}@media (min-width:1200px){.modal-xl[data-v-518166f2]{max-width:1140px}}.tooltip[data-v-518166f2]{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:14px;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show[data-v-518166f2]{opacity:.9}.tooltip .arrow[data-v-518166f2]{position:absolute;display:block;width:12.8px;width:.8rem;height:6.4px;height:.4rem}.tooltip .arrow[data-v-518166f2]:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top][data-v-518166f2],.bs-tooltip-top[data-v-518166f2],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top][data-v-518166f2],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top][data-v-518166f2],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top][data-v-518166f2],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top][data-v-518166f2],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top][data-v-518166f2],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top][data-v-518166f2],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top][data-v-518166f2],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top][data-v-518166f2]{padding:6.4px 0;padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2],.bs-tooltip-top .arrow[data-v-518166f2],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.bs-tooltip-top .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before{top:0;border-width:6.4px 6.4px 0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right][data-v-518166f2],.bs-tooltip-right[data-v-518166f2],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right][data-v-518166f2],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right][data-v-518166f2],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right][data-v-518166f2],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right][data-v-518166f2],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right][data-v-518166f2],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right][data-v-518166f2],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right][data-v-518166f2],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right][data-v-518166f2]{padding:0 6.4px;padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2],.bs-tooltip-right .arrow[data-v-518166f2],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]{left:0;width:6.4px;width:.4rem;height:12.8px;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.bs-tooltip-right .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before{right:0;border-width:6.4px 6.4px 6.4px 0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom][data-v-518166f2],.bs-tooltip-bottom[data-v-518166f2],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom][data-v-518166f2],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom][data-v-518166f2],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom][data-v-518166f2],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom][data-v-518166f2],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom][data-v-518166f2],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom][data-v-518166f2],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom][data-v-518166f2],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom][data-v-518166f2]{padding:6.4px 0;padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2],.bs-tooltip-bottom .arrow[data-v-518166f2],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.bs-tooltip-bottom .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before{bottom:0;border-width:0 6.4px 6.4px;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left][data-v-518166f2],.bs-tooltip-left[data-v-518166f2],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left][data-v-518166f2],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left][data-v-518166f2],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left][data-v-518166f2],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left][data-v-518166f2],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left][data-v-518166f2],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left][data-v-518166f2],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left][data-v-518166f2],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left][data-v-518166f2]{padding:0 6.4px;padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2],.bs-tooltip-left .arrow[data-v-518166f2],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]{right:0;width:6.4px;width:.4rem;height:12.8px;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.bs-tooltip-left .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before{left:0;border-width:6.4px 0 6.4px 6.4px;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner[data-v-518166f2]{max-width:200px;padding:4px 8px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover[data-v-518166f2]{top:0;left:0;z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:14px;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover[data-v-518166f2],.popover .arrow[data-v-518166f2]{position:absolute;display:block}.popover .arrow[data-v-518166f2]{width:16px;width:1rem;height:8px;height:.5rem;margin:0 4.8px;margin:0 .3rem}.popover .arrow[data-v-518166f2]:after,.popover .arrow[data-v-518166f2]:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.b-popover-danger.bs-popover-auto[x-placement^=top][data-v-518166f2],.b-popover-dark.bs-popover-auto[x-placement^=top][data-v-518166f2],.b-popover-info.bs-popover-auto[x-placement^=top][data-v-518166f2],.b-popover-light.bs-popover-auto[x-placement^=top][data-v-518166f2],.b-popover-primary.bs-popover-auto[x-placement^=top][data-v-518166f2],.b-popover-secondary.bs-popover-auto[x-placement^=top][data-v-518166f2],.b-popover-success.bs-popover-auto[x-placement^=top][data-v-518166f2],.b-popover-warning.bs-popover-auto[x-placement^=top][data-v-518166f2],.bs-popover-auto[x-placement^=top][data-v-518166f2],.bs-popover-top[data-v-518166f2]{margin-bottom:8px;margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2],.bs-popover-top>.arrow[data-v-518166f2]{bottom:calc(-.5rem + -1px)}.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:before,.bs-popover-top>.arrow[data-v-518166f2]:before{bottom:0;border-width:8px 8px 0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:after,.bs-popover-top>.arrow[data-v-518166f2]:after{bottom:1px;border-width:8px 8px 0;border-width:.5rem .5rem 0;border-top-color:#fff}.b-popover-danger.bs-popover-auto[x-placement^=right][data-v-518166f2],.b-popover-dark.bs-popover-auto[x-placement^=right][data-v-518166f2],.b-popover-info.bs-popover-auto[x-placement^=right][data-v-518166f2],.b-popover-light.bs-popover-auto[x-placement^=right][data-v-518166f2],.b-popover-primary.bs-popover-auto[x-placement^=right][data-v-518166f2],.b-popover-secondary.bs-popover-auto[x-placement^=right][data-v-518166f2],.b-popover-success.bs-popover-auto[x-placement^=right][data-v-518166f2],.b-popover-warning.bs-popover-auto[x-placement^=right][data-v-518166f2],.bs-popover-auto[x-placement^=right][data-v-518166f2],.bs-popover-right[data-v-518166f2]{margin-left:8px;margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2],.bs-popover-right>.arrow[data-v-518166f2]{left:calc(-.5rem + -1px);width:8px;width:.5rem;height:16px;height:1rem;margin:4.8px 0;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:before,.bs-popover-right>.arrow[data-v-518166f2]:before{left:0;border-width:8px 8px 8px 0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:after,.bs-popover-right>.arrow[data-v-518166f2]:after{left:1px;border-width:8px 8px 8px 0;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.b-popover-danger.bs-popover-auto[x-placement^=bottom][data-v-518166f2],.b-popover-dark.bs-popover-auto[x-placement^=bottom][data-v-518166f2],.b-popover-info.bs-popover-auto[x-placement^=bottom][data-v-518166f2],.b-popover-light.bs-popover-auto[x-placement^=bottom][data-v-518166f2],.b-popover-primary.bs-popover-auto[x-placement^=bottom][data-v-518166f2],.b-popover-secondary.bs-popover-auto[x-placement^=bottom][data-v-518166f2],.b-popover-success.bs-popover-auto[x-placement^=bottom][data-v-518166f2],.b-popover-warning.bs-popover-auto[x-placement^=bottom][data-v-518166f2],.bs-popover-auto[x-placement^=bottom][data-v-518166f2],.bs-popover-bottom[data-v-518166f2]{margin-top:8px;margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2],.bs-popover-bottom>.arrow[data-v-518166f2]{top:calc(-.5rem + -1px)}.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:before,.bs-popover-bottom>.arrow[data-v-518166f2]:before{top:0;border-width:0 8px 8px 8px;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:after,.bs-popover-bottom>.arrow[data-v-518166f2]:after{top:1px;border-width:0 8px 8px 8px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header[data-v-518166f2]:before,.bs-popover-bottom .popover-header[data-v-518166f2]:before{position:absolute;top:0;left:50%;display:block;width:16px;width:1rem;margin-left:-8px;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.b-popover-danger.bs-popover-auto[x-placement^=left][data-v-518166f2],.b-popover-dark.bs-popover-auto[x-placement^=left][data-v-518166f2],.b-popover-info.bs-popover-auto[x-placement^=left][data-v-518166f2],.b-popover-light.bs-popover-auto[x-placement^=left][data-v-518166f2],.b-popover-primary.bs-popover-auto[x-placement^=left][data-v-518166f2],.b-popover-secondary.bs-popover-auto[x-placement^=left][data-v-518166f2],.b-popover-success.bs-popover-auto[x-placement^=left][data-v-518166f2],.b-popover-warning.bs-popover-auto[x-placement^=left][data-v-518166f2],.bs-popover-auto[x-placement^=left][data-v-518166f2],.bs-popover-left[data-v-518166f2]{margin-right:8px;margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2],.bs-popover-left>.arrow[data-v-518166f2]{right:calc(-.5rem + -1px);width:8px;width:.5rem;height:16px;height:1rem;margin:4.8px 0;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:before,.bs-popover-left>.arrow[data-v-518166f2]:before{right:0;border-width:8px 0 8px 8px;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:after,.bs-popover-left>.arrow[data-v-518166f2]:after{right:1px;border-width:8px 0 8px 8px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header[data-v-518166f2]{padding:8px 12px;padding:.5rem .75rem;margin-bottom:0;font-size:16px;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header[data-v-518166f2]:empty{display:none}.popover-body[data-v-518166f2]{padding:8px 12px;padding:.5rem .75rem;color:#212529}.carousel[data-v-518166f2]{position:relative}.carousel.pointer-event[data-v-518166f2]{-ms-touch-action:pan-y;touch-action:pan-y}.carousel-inner[data-v-518166f2]{position:relative;width:100%;overflow:hidden}.carousel-inner[data-v-518166f2]:after{display:block;clear:both;content:\"\"}.carousel-item[data-v-518166f2]{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item[data-v-518166f2]{-webkit-transition:none;transition:none}}.carousel-item-next[data-v-518166f2],.carousel-item-prev[data-v-518166f2],.carousel-item.active[data-v-518166f2]{display:block}.active.carousel-item-right[data-v-518166f2],.carousel-item-next[data-v-518166f2]:not(.carousel-item-left){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-left[data-v-518166f2],.carousel-item-prev[data-v-518166f2]:not(.carousel-item-right){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item[data-v-518166f2]{opacity:0;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-left[data-v-518166f2],.carousel-fade .carousel-item-prev.carousel-item-right[data-v-518166f2],.carousel-fade .carousel-item.active[data-v-518166f2]{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left[data-v-518166f2],.carousel-fade .active.carousel-item-right[data-v-518166f2]{z-index:0;opacity:0;-webkit-transition:opacity 0s .6s;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left[data-v-518166f2],.carousel-fade .active.carousel-item-right[data-v-518166f2]{-webkit-transition:none;transition:none}}.carousel-control-next[data-v-518166f2],.carousel-control-prev[data-v-518166f2]{position:absolute;top:0;bottom:0;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;-webkit-transition:opacity .15s ease;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next[data-v-518166f2],.carousel-control-prev[data-v-518166f2]{-webkit-transition:none;transition:none}}.carousel-control-next[data-v-518166f2]:focus,.carousel-control-next[data-v-518166f2]:hover,.carousel-control-prev[data-v-518166f2]:focus,.carousel-control-prev[data-v-518166f2]:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev[data-v-518166f2]{left:0}.carousel-control-next[data-v-518166f2]{right:0}.carousel-control-next-icon[data-v-518166f2],.carousel-control-prev-icon[data-v-518166f2]{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-control-prev-icon[data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon[data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators[data-v-518166f2]{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li[data-v-518166f2]{-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;-webkit-transition:opacity .6s ease;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li[data-v-518166f2]{-webkit-transition:none;transition:none}}.carousel-indicators .active[data-v-518166f2]{opacity:1}.carousel-caption[data-v-518166f2]{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border-data-v-518166f2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-border-data-v-518166f2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.spinner-border[data-v-518166f2]{display:inline-block;width:32px;width:2rem;height:32px;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border-data-v-518166f2 .75s linear infinite;animation:spinner-border-data-v-518166f2 .75s linear infinite}.spinner-border-sm[data-v-518166f2]{width:16px;width:1rem;height:16px;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow-data-v-518166f2{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow-data-v-518166f2{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.spinner-grow[data-v-518166f2]{display:inline-block;width:32px;width:2rem;height:32px;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow-data-v-518166f2 .75s linear infinite;animation:spinner-grow-data-v-518166f2 .75s linear infinite}.spinner-grow-sm[data-v-518166f2]{width:16px;width:1rem;height:16px;height:1rem}.align-baseline[data-v-518166f2]{vertical-align:baseline!important}.align-top[data-v-518166f2]{vertical-align:top!important}.align-middle[data-v-518166f2]{vertical-align:middle!important}.align-bottom[data-v-518166f2]{vertical-align:bottom!important}.align-text-bottom[data-v-518166f2]{vertical-align:text-bottom!important}.align-text-top[data-v-518166f2]{vertical-align:text-top!important}.bg-primary[data-v-518166f2]{background-color:#007bff!important}a.bg-primary[data-v-518166f2]:focus,a.bg-primary[data-v-518166f2]:hover,button.bg-primary[data-v-518166f2]:focus,button.bg-primary[data-v-518166f2]:hover{background-color:#0062cc!important}.bg-secondary[data-v-518166f2]{background-color:#6c757d!important}a.bg-secondary[data-v-518166f2]:focus,a.bg-secondary[data-v-518166f2]:hover,button.bg-secondary[data-v-518166f2]:focus,button.bg-secondary[data-v-518166f2]:hover{background-color:#545b62!important}.bg-success[data-v-518166f2]{background-color:#28a745!important}a.bg-success[data-v-518166f2]:focus,a.bg-success[data-v-518166f2]:hover,button.bg-success[data-v-518166f2]:focus,button.bg-success[data-v-518166f2]:hover{background-color:#1e7e34!important}.bg-info[data-v-518166f2]{background-color:#17a2b8!important}a.bg-info[data-v-518166f2]:focus,a.bg-info[data-v-518166f2]:hover,button.bg-info[data-v-518166f2]:focus,button.bg-info[data-v-518166f2]:hover{background-color:#117a8b!important}.bg-warning[data-v-518166f2]{background-color:#ffc107!important}a.bg-warning[data-v-518166f2]:focus,a.bg-warning[data-v-518166f2]:hover,button.bg-warning[data-v-518166f2]:focus,button.bg-warning[data-v-518166f2]:hover{background-color:#d39e00!important}.bg-danger[data-v-518166f2]{background-color:#dc3545!important}a.bg-danger[data-v-518166f2]:focus,a.bg-danger[data-v-518166f2]:hover,button.bg-danger[data-v-518166f2]:focus,button.bg-danger[data-v-518166f2]:hover{background-color:#bd2130!important}.bg-light[data-v-518166f2]{background-color:#f8f9fa!important}a.bg-light[data-v-518166f2]:focus,a.bg-light[data-v-518166f2]:hover,button.bg-light[data-v-518166f2]:focus,button.bg-light[data-v-518166f2]:hover{background-color:#dae0e5!important}.bg-dark[data-v-518166f2]{background-color:#343a40!important}a.bg-dark[data-v-518166f2]:focus,a.bg-dark[data-v-518166f2]:hover,button.bg-dark[data-v-518166f2]:focus,button.bg-dark[data-v-518166f2]:hover{background-color:#1d2124!important}.bg-white[data-v-518166f2]{background-color:#fff!important}.bg-transparent[data-v-518166f2]{background-color:transparent!important}.border[data-v-518166f2]{border:1px solid #dee2e6!important}.border-top[data-v-518166f2]{border-top:1px solid #dee2e6!important}.border-right[data-v-518166f2]{border-right:1px solid #dee2e6!important}.border-bottom[data-v-518166f2]{border-bottom:1px solid #dee2e6!important}.border-left[data-v-518166f2]{border-left:1px solid #dee2e6!important}.border-0[data-v-518166f2]{border:0!important}.border-top-0[data-v-518166f2]{border-top:0!important}.border-right-0[data-v-518166f2]{border-right:0!important}.border-bottom-0[data-v-518166f2]{border-bottom:0!important}.border-left-0[data-v-518166f2]{border-left:0!important}.border-primary[data-v-518166f2]{border-color:#007bff!important}.border-secondary[data-v-518166f2]{border-color:#6c757d!important}.border-success[data-v-518166f2]{border-color:#28a745!important}.border-info[data-v-518166f2]{border-color:#17a2b8!important}.border-warning[data-v-518166f2]{border-color:#ffc107!important}.border-danger[data-v-518166f2]{border-color:#dc3545!important}.border-light[data-v-518166f2]{border-color:#f8f9fa!important}.border-dark[data-v-518166f2]{border-color:#343a40!important}.border-white[data-v-518166f2]{border-color:#fff!important}.rounded-sm[data-v-518166f2]{border-radius:.2rem!important}.rounded[data-v-518166f2]{border-radius:.25rem!important}.rounded-top[data-v-518166f2]{border-top-left-radius:4px!important;border-top-left-radius:.25rem!important}.rounded-right[data-v-518166f2],.rounded-top[data-v-518166f2]{border-top-right-radius:4px!important;border-top-right-radius:.25rem!important}.rounded-bottom[data-v-518166f2],.rounded-right[data-v-518166f2]{border-bottom-right-radius:4px!important;border-bottom-right-radius:.25rem!important}.rounded-bottom[data-v-518166f2],.rounded-left[data-v-518166f2]{border-bottom-left-radius:4px!important;border-bottom-left-radius:.25rem!important}.rounded-left[data-v-518166f2]{border-top-left-radius:4px!important;border-top-left-radius:.25rem!important}.rounded-lg[data-v-518166f2]{border-radius:.3rem!important}.rounded-circle[data-v-518166f2]{border-radius:50%!important}.rounded-pill[data-v-518166f2]{border-radius:50rem!important}.rounded-0[data-v-518166f2]{border-radius:0!important}.clearfix[data-v-518166f2]:after{display:block;clear:both;content:\"\"}.d-none[data-v-518166f2]{display:none!important}.d-inline[data-v-518166f2]{display:inline!important}.d-inline-block[data-v-518166f2]{display:inline-block!important}.d-block[data-v-518166f2]{display:block!important}.d-table[data-v-518166f2]{display:table!important}.d-table-row[data-v-518166f2]{display:table-row!important}.d-table-cell[data-v-518166f2]{display:table-cell!important}.d-flex[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-inline-flex[data-v-518166f2]{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none[data-v-518166f2]{display:none!important}.d-sm-inline[data-v-518166f2]{display:inline!important}.d-sm-inline-block[data-v-518166f2]{display:inline-block!important}.d-sm-block[data-v-518166f2]{display:block!important}.d-sm-table[data-v-518166f2]{display:table!important}.d-sm-table-row[data-v-518166f2]{display:table-row!important}.d-sm-table-cell[data-v-518166f2]{display:table-cell!important}.d-sm-flex[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex[data-v-518166f2]{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none[data-v-518166f2]{display:none!important}.d-md-inline[data-v-518166f2]{display:inline!important}.d-md-inline-block[data-v-518166f2]{display:inline-block!important}.d-md-block[data-v-518166f2]{display:block!important}.d-md-table[data-v-518166f2]{display:table!important}.d-md-table-row[data-v-518166f2]{display:table-row!important}.d-md-table-cell[data-v-518166f2]{display:table-cell!important}.d-md-flex[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex[data-v-518166f2]{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none[data-v-518166f2]{display:none!important}.d-lg-inline[data-v-518166f2]{display:inline!important}.d-lg-inline-block[data-v-518166f2]{display:inline-block!important}.d-lg-block[data-v-518166f2]{display:block!important}.d-lg-table[data-v-518166f2]{display:table!important}.d-lg-table-row[data-v-518166f2]{display:table-row!important}.d-lg-table-cell[data-v-518166f2]{display:table-cell!important}.d-lg-flex[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex[data-v-518166f2]{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none[data-v-518166f2]{display:none!important}.d-xl-inline[data-v-518166f2]{display:inline!important}.d-xl-inline-block[data-v-518166f2]{display:inline-block!important}.d-xl-block[data-v-518166f2]{display:block!important}.d-xl-table[data-v-518166f2]{display:table!important}.d-xl-table-row[data-v-518166f2]{display:table-row!important}.d-xl-table-cell[data-v-518166f2]{display:table-cell!important}.d-xl-flex[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex[data-v-518166f2]{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none[data-v-518166f2]{display:none!important}.d-print-inline[data-v-518166f2]{display:inline!important}.d-print-inline-block[data-v-518166f2]{display:inline-block!important}.d-print-block[data-v-518166f2]{display:block!important}.d-print-table[data-v-518166f2]{display:table!important}.d-print-table-row[data-v-518166f2]{display:table-row!important}.d-print-table-cell[data-v-518166f2]{display:table-cell!important}.d-print-flex[data-v-518166f2]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex[data-v-518166f2]{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}.embed-responsive[data-v-518166f2]{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive[data-v-518166f2]:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item[data-v-518166f2],.embed-responsive embed[data-v-518166f2],.embed-responsive iframe[data-v-518166f2],.embed-responsive object[data-v-518166f2],.embed-responsive video[data-v-518166f2]{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9[data-v-518166f2]:before{padding-top:42.85714%}.embed-responsive-16by9[data-v-518166f2]:before{padding-top:56.25%}.embed-responsive-4by3[data-v-518166f2]:before{padding-top:75%}.embed-responsive-1by1[data-v-518166f2]:before{padding-top:100%}.flex-row[data-v-518166f2]{-webkit-box-orient:horizontal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-column[data-v-518166f2],.flex-row[data-v-518166f2]{-webkit-box-direction:normal!important}.flex-column[data-v-518166f2]{-webkit-box-orient:vertical!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse[data-v-518166f2]{-webkit-box-orient:horizontal!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse[data-v-518166f2],.flex-row-reverse[data-v-518166f2]{-webkit-box-direction:reverse!important}.flex-column-reverse[data-v-518166f2]{-webkit-box-orient:vertical!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap[data-v-518166f2]{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap[data-v-518166f2]{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse[data-v-518166f2]{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-fill[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-grow-0[data-v-518166f2]{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important}.flex-grow-1[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important}.flex-shrink-0[data-v-518166f2]{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-shrink-1[data-v-518166f2]{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-start[data-v-518166f2]{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end[data-v-518166f2]{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center[data-v-518166f2]{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between[data-v-518166f2]{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around[data-v-518166f2]{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start[data-v-518166f2]{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end[data-v-518166f2]{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center[data-v-518166f2]{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-baseline[data-v-518166f2]{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch[data-v-518166f2]{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start[data-v-518166f2]{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end[data-v-518166f2]{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center[data-v-518166f2]{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between[data-v-518166f2]{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around[data-v-518166f2]{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch[data-v-518166f2]{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto[data-v-518166f2]{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start[data-v-518166f2]{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end[data-v-518166f2]{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center[data-v-518166f2]{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline[data-v-518166f2]{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch[data-v-518166f2]{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row[data-v-518166f2]{-webkit-box-orient:horizontal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column[data-v-518166f2],.flex-sm-row[data-v-518166f2]{-webkit-box-direction:normal!important}.flex-sm-column[data-v-518166f2]{-webkit-box-orient:vertical!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse[data-v-518166f2]{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse[data-v-518166f2]{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap[data-v-518166f2]{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap[data-v-518166f2]{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse[data-v-518166f2]{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-sm-fill[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-sm-grow-0[data-v-518166f2]{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important}.flex-sm-grow-1[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important}.flex-sm-shrink-0[data-v-518166f2]{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-sm-shrink-1[data-v-518166f2]{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-sm-start[data-v-518166f2]{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end[data-v-518166f2]{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center[data-v-518166f2]{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between[data-v-518166f2]{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around[data-v-518166f2]{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start[data-v-518166f2]{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end[data-v-518166f2]{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center[data-v-518166f2]{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline[data-v-518166f2]{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch[data-v-518166f2]{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start[data-v-518166f2]{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end[data-v-518166f2]{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center[data-v-518166f2]{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between[data-v-518166f2]{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around[data-v-518166f2]{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch[data-v-518166f2]{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto[data-v-518166f2]{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start[data-v-518166f2]{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end[data-v-518166f2]{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center[data-v-518166f2]{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline[data-v-518166f2]{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch[data-v-518166f2]{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row[data-v-518166f2]{-webkit-box-orient:horizontal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column[data-v-518166f2],.flex-md-row[data-v-518166f2]{-webkit-box-direction:normal!important}.flex-md-column[data-v-518166f2]{-webkit-box-orient:vertical!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse[data-v-518166f2]{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse[data-v-518166f2]{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap[data-v-518166f2]{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap[data-v-518166f2]{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse[data-v-518166f2]{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-md-fill[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-md-grow-0[data-v-518166f2]{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important}.flex-md-grow-1[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important}.flex-md-shrink-0[data-v-518166f2]{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-md-shrink-1[data-v-518166f2]{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-md-start[data-v-518166f2]{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end[data-v-518166f2]{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center[data-v-518166f2]{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between[data-v-518166f2]{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around[data-v-518166f2]{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start[data-v-518166f2]{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end[data-v-518166f2]{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center[data-v-518166f2]{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline[data-v-518166f2]{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch[data-v-518166f2]{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start[data-v-518166f2]{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end[data-v-518166f2]{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center[data-v-518166f2]{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between[data-v-518166f2]{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around[data-v-518166f2]{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch[data-v-518166f2]{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto[data-v-518166f2]{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start[data-v-518166f2]{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end[data-v-518166f2]{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center[data-v-518166f2]{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline[data-v-518166f2]{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch[data-v-518166f2]{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row[data-v-518166f2]{-webkit-box-orient:horizontal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column[data-v-518166f2],.flex-lg-row[data-v-518166f2]{-webkit-box-direction:normal!important}.flex-lg-column[data-v-518166f2]{-webkit-box-orient:vertical!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse[data-v-518166f2]{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse[data-v-518166f2]{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap[data-v-518166f2]{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap[data-v-518166f2]{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse[data-v-518166f2]{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-lg-fill[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-lg-grow-0[data-v-518166f2]{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important}.flex-lg-grow-1[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important}.flex-lg-shrink-0[data-v-518166f2]{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-lg-shrink-1[data-v-518166f2]{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-lg-start[data-v-518166f2]{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end[data-v-518166f2]{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center[data-v-518166f2]{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between[data-v-518166f2]{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around[data-v-518166f2]{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start[data-v-518166f2]{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end[data-v-518166f2]{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center[data-v-518166f2]{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline[data-v-518166f2]{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch[data-v-518166f2]{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start[data-v-518166f2]{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end[data-v-518166f2]{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center[data-v-518166f2]{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between[data-v-518166f2]{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around[data-v-518166f2]{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch[data-v-518166f2]{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto[data-v-518166f2]{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start[data-v-518166f2]{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end[data-v-518166f2]{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center[data-v-518166f2]{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline[data-v-518166f2]{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch[data-v-518166f2]{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row[data-v-518166f2]{-webkit-box-orient:horizontal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column[data-v-518166f2],.flex-xl-row[data-v-518166f2]{-webkit-box-direction:normal!important}.flex-xl-column[data-v-518166f2]{-webkit-box-orient:vertical!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse[data-v-518166f2]{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse[data-v-518166f2]{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap[data-v-518166f2]{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap[data-v-518166f2]{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse[data-v-518166f2]{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-xl-fill[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-xl-grow-0[data-v-518166f2]{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important}.flex-xl-grow-1[data-v-518166f2]{-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important}.flex-xl-shrink-0[data-v-518166f2]{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-xl-shrink-1[data-v-518166f2]{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-xl-start[data-v-518166f2]{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end[data-v-518166f2]{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center[data-v-518166f2]{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between[data-v-518166f2]{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around[data-v-518166f2]{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start[data-v-518166f2]{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end[data-v-518166f2]{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center[data-v-518166f2]{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline[data-v-518166f2]{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch[data-v-518166f2]{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start[data-v-518166f2]{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end[data-v-518166f2]{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center[data-v-518166f2]{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between[data-v-518166f2]{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around[data-v-518166f2]{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch[data-v-518166f2]{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto[data-v-518166f2]{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start[data-v-518166f2]{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end[data-v-518166f2]{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center[data-v-518166f2]{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline[data-v-518166f2]{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch[data-v-518166f2]{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.float-left[data-v-518166f2]{float:left!important}.float-right[data-v-518166f2]{float:right!important}.float-none[data-v-518166f2]{float:none!important}@media (min-width:576px){.float-sm-left[data-v-518166f2]{float:left!important}.float-sm-right[data-v-518166f2]{float:right!important}.float-sm-none[data-v-518166f2]{float:none!important}}@media (min-width:768px){.float-md-left[data-v-518166f2]{float:left!important}.float-md-right[data-v-518166f2]{float:right!important}.float-md-none[data-v-518166f2]{float:none!important}}@media (min-width:992px){.float-lg-left[data-v-518166f2]{float:left!important}.float-lg-right[data-v-518166f2]{float:right!important}.float-lg-none[data-v-518166f2]{float:none!important}}@media (min-width:1200px){.float-xl-left[data-v-518166f2]{float:left!important}.float-xl-right[data-v-518166f2]{float:right!important}.float-xl-none[data-v-518166f2]{float:none!important}}.overflow-auto[data-v-518166f2]{overflow:auto!important}.overflow-hidden[data-v-518166f2]{overflow:hidden!important}.position-static[data-v-518166f2]{position:static!important}.position-relative[data-v-518166f2]{position:relative!important}.position-absolute[data-v-518166f2]{position:absolute!important}.position-fixed[data-v-518166f2]{position:fixed!important}.position-sticky[data-v-518166f2]{position:-webkit-sticky!important;position:sticky!important}.fixed-top[data-v-518166f2]{top:0}.fixed-bottom[data-v-518166f2],.fixed-top[data-v-518166f2]{position:fixed;right:0;left:0;z-index:1030}.fixed-bottom[data-v-518166f2]{bottom:0}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top[data-v-518166f2]{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only[data-v-518166f2]{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable[data-v-518166f2]:active,.sr-only-focusable[data-v-518166f2]:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm[data-v-518166f2]{-webkit-box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow[data-v-518166f2]{-webkit-box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg[data-v-518166f2]{-webkit-box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important;box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none[data-v-518166f2]{-webkit-box-shadow:none!important;box-shadow:none!important}.w-25[data-v-518166f2]{width:25%!important}.w-50[data-v-518166f2]{width:50%!important}.w-75[data-v-518166f2]{width:75%!important}.w-100[data-v-518166f2]{width:100%!important}.w-auto[data-v-518166f2]{width:auto!important}.h-25[data-v-518166f2]{height:25%!important}.h-50[data-v-518166f2]{height:50%!important}.h-75[data-v-518166f2]{height:75%!important}.h-100[data-v-518166f2]{height:100%!important}.h-auto[data-v-518166f2]{height:auto!important}.mw-100[data-v-518166f2]{max-width:100%!important}.mh-100[data-v-518166f2]{max-height:100%!important}.min-vw-100[data-v-518166f2]{min-width:100vw!important}.min-vh-100[data-v-518166f2]{min-height:100vh!important}.vw-100[data-v-518166f2]{width:100vw!important}.vh-100[data-v-518166f2]{height:100vh!important}.stretched-link[data-v-518166f2]:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:transparent}.m-0[data-v-518166f2]{margin:0!important}.mt-0[data-v-518166f2],.my-0[data-v-518166f2]{margin-top:0!important}.mr-0[data-v-518166f2],.mx-0[data-v-518166f2]{margin-right:0!important}.mb-0[data-v-518166f2],.my-0[data-v-518166f2]{margin-bottom:0!important}.ml-0[data-v-518166f2],.mx-0[data-v-518166f2]{margin-left:0!important}.m-1[data-v-518166f2]{margin:4px!important;margin:.25rem!important}.mt-1[data-v-518166f2],.my-1[data-v-518166f2]{margin-top:4px!important;margin-top:.25rem!important}.mr-1[data-v-518166f2],.mx-1[data-v-518166f2]{margin-right:4px!important;margin-right:.25rem!important}.mb-1[data-v-518166f2],.my-1[data-v-518166f2]{margin-bottom:4px!important;margin-bottom:.25rem!important}.ml-1[data-v-518166f2],.mx-1[data-v-518166f2]{margin-left:4px!important;margin-left:.25rem!important}.m-2[data-v-518166f2]{margin:8px!important;margin:.5rem!important}.mt-2[data-v-518166f2],.my-2[data-v-518166f2]{margin-top:8px!important;margin-top:.5rem!important}.mr-2[data-v-518166f2],.mx-2[data-v-518166f2]{margin-right:8px!important;margin-right:.5rem!important}.mb-2[data-v-518166f2],.my-2[data-v-518166f2]{margin-bottom:8px!important;margin-bottom:.5rem!important}.ml-2[data-v-518166f2],.mx-2[data-v-518166f2]{margin-left:8px!important;margin-left:.5rem!important}.m-3[data-v-518166f2]{margin:16px!important;margin:1rem!important}.mt-3[data-v-518166f2],.my-3[data-v-518166f2]{margin-top:16px!important;margin-top:1rem!important}.mr-3[data-v-518166f2],.mx-3[data-v-518166f2]{margin-right:16px!important;margin-right:1rem!important}.mb-3[data-v-518166f2],.my-3[data-v-518166f2]{margin-bottom:16px!important;margin-bottom:1rem!important}.ml-3[data-v-518166f2],.mx-3[data-v-518166f2]{margin-left:16px!important;margin-left:1rem!important}.m-4[data-v-518166f2]{margin:24px!important;margin:1.5rem!important}.mt-4[data-v-518166f2],.my-4[data-v-518166f2]{margin-top:24px!important;margin-top:1.5rem!important}.mr-4[data-v-518166f2],.mx-4[data-v-518166f2]{margin-right:24px!important;margin-right:1.5rem!important}.mb-4[data-v-518166f2],.my-4[data-v-518166f2]{margin-bottom:24px!important;margin-bottom:1.5rem!important}.ml-4[data-v-518166f2],.mx-4[data-v-518166f2]{margin-left:24px!important;margin-left:1.5rem!important}.m-5[data-v-518166f2]{margin:48px!important;margin:3rem!important}.mt-5[data-v-518166f2],.my-5[data-v-518166f2]{margin-top:48px!important;margin-top:3rem!important}.mr-5[data-v-518166f2],.mx-5[data-v-518166f2]{margin-right:48px!important;margin-right:3rem!important}.mb-5[data-v-518166f2],.my-5[data-v-518166f2]{margin-bottom:48px!important;margin-bottom:3rem!important}.ml-5[data-v-518166f2],.mx-5[data-v-518166f2]{margin-left:48px!important;margin-left:3rem!important}.p-0[data-v-518166f2]{padding:0!important}.pt-0[data-v-518166f2],.py-0[data-v-518166f2]{padding-top:0!important}.pr-0[data-v-518166f2],.px-0[data-v-518166f2]{padding-right:0!important}.pb-0[data-v-518166f2],.py-0[data-v-518166f2]{padding-bottom:0!important}.pl-0[data-v-518166f2],.px-0[data-v-518166f2]{padding-left:0!important}.p-1[data-v-518166f2]{padding:4px!important;padding:.25rem!important}.pt-1[data-v-518166f2],.py-1[data-v-518166f2]{padding-top:4px!important;padding-top:.25rem!important}.pr-1[data-v-518166f2],.px-1[data-v-518166f2]{padding-right:4px!important;padding-right:.25rem!important}.pb-1[data-v-518166f2],.py-1[data-v-518166f2]{padding-bottom:4px!important;padding-bottom:.25rem!important}.pl-1[data-v-518166f2],.px-1[data-v-518166f2]{padding-left:4px!important;padding-left:.25rem!important}.p-2[data-v-518166f2]{padding:8px!important;padding:.5rem!important}.pt-2[data-v-518166f2],.py-2[data-v-518166f2]{padding-top:8px!important;padding-top:.5rem!important}.pr-2[data-v-518166f2],.px-2[data-v-518166f2]{padding-right:8px!important;padding-right:.5rem!important}.pb-2[data-v-518166f2],.py-2[data-v-518166f2]{padding-bottom:8px!important;padding-bottom:.5rem!important}.pl-2[data-v-518166f2],.px-2[data-v-518166f2]{padding-left:8px!important;padding-left:.5rem!important}.p-3[data-v-518166f2]{padding:16px!important;padding:1rem!important}.pt-3[data-v-518166f2],.py-3[data-v-518166f2]{padding-top:16px!important;padding-top:1rem!important}.pr-3[data-v-518166f2],.px-3[data-v-518166f2]{padding-right:16px!important;padding-right:1rem!important}.pb-3[data-v-518166f2],.py-3[data-v-518166f2]{padding-bottom:16px!important;padding-bottom:1rem!important}.pl-3[data-v-518166f2],.px-3[data-v-518166f2]{padding-left:16px!important;padding-left:1rem!important}.p-4[data-v-518166f2]{padding:24px!important;padding:1.5rem!important}.pt-4[data-v-518166f2],.py-4[data-v-518166f2]{padding-top:24px!important;padding-top:1.5rem!important}.pr-4[data-v-518166f2],.px-4[data-v-518166f2]{padding-right:24px!important;padding-right:1.5rem!important}.pb-4[data-v-518166f2],.py-4[data-v-518166f2]{padding-bottom:24px!important;padding-bottom:1.5rem!important}.pl-4[data-v-518166f2],.px-4[data-v-518166f2]{padding-left:24px!important;padding-left:1.5rem!important}.p-5[data-v-518166f2]{padding:48px!important;padding:3rem!important}.pt-5[data-v-518166f2],.py-5[data-v-518166f2]{padding-top:48px!important;padding-top:3rem!important}.pr-5[data-v-518166f2],.px-5[data-v-518166f2]{padding-right:48px!important;padding-right:3rem!important}.pb-5[data-v-518166f2],.py-5[data-v-518166f2]{padding-bottom:48px!important;padding-bottom:3rem!important}.pl-5[data-v-518166f2],.px-5[data-v-518166f2]{padding-left:48px!important;padding-left:3rem!important}.m-n1[data-v-518166f2]{margin:-4px!important;margin:-.25rem!important}.mt-n1[data-v-518166f2],.my-n1[data-v-518166f2]{margin-top:-4px!important;margin-top:-.25rem!important}.mr-n1[data-v-518166f2],.mx-n1[data-v-518166f2]{margin-right:-4px!important;margin-right:-.25rem!important}.mb-n1[data-v-518166f2],.my-n1[data-v-518166f2]{margin-bottom:-4px!important;margin-bottom:-.25rem!important}.ml-n1[data-v-518166f2],.mx-n1[data-v-518166f2]{margin-left:-4px!important;margin-left:-.25rem!important}.m-n2[data-v-518166f2]{margin:-8px!important;margin:-.5rem!important}.mt-n2[data-v-518166f2],.my-n2[data-v-518166f2]{margin-top:-8px!important;margin-top:-.5rem!important}.mr-n2[data-v-518166f2],.mx-n2[data-v-518166f2]{margin-right:-8px!important;margin-right:-.5rem!important}.mb-n2[data-v-518166f2],.my-n2[data-v-518166f2]{margin-bottom:-8px!important;margin-bottom:-.5rem!important}.ml-n2[data-v-518166f2],.mx-n2[data-v-518166f2]{margin-left:-8px!important;margin-left:-.5rem!important}.m-n3[data-v-518166f2]{margin:-16px!important;margin:-1rem!important}.mt-n3[data-v-518166f2],.my-n3[data-v-518166f2]{margin-top:-16px!important;margin-top:-1rem!important}.mr-n3[data-v-518166f2],.mx-n3[data-v-518166f2]{margin-right:-16px!important;margin-right:-1rem!important}.mb-n3[data-v-518166f2],.my-n3[data-v-518166f2]{margin-bottom:-16px!important;margin-bottom:-1rem!important}.ml-n3[data-v-518166f2],.mx-n3[data-v-518166f2]{margin-left:-16px!important;margin-left:-1rem!important}.m-n4[data-v-518166f2]{margin:-24px!important;margin:-1.5rem!important}.mt-n4[data-v-518166f2],.my-n4[data-v-518166f2]{margin-top:-24px!important;margin-top:-1.5rem!important}.mr-n4[data-v-518166f2],.mx-n4[data-v-518166f2]{margin-right:-24px!important;margin-right:-1.5rem!important}.mb-n4[data-v-518166f2],.my-n4[data-v-518166f2]{margin-bottom:-24px!important;margin-bottom:-1.5rem!important}.ml-n4[data-v-518166f2],.mx-n4[data-v-518166f2]{margin-left:-24px!important;margin-left:-1.5rem!important}.m-n5[data-v-518166f2]{margin:-48px!important;margin:-3rem!important}.mt-n5[data-v-518166f2],.my-n5[data-v-518166f2]{margin-top:-48px!important;margin-top:-3rem!important}.mr-n5[data-v-518166f2],.mx-n5[data-v-518166f2]{margin-right:-48px!important;margin-right:-3rem!important}.mb-n5[data-v-518166f2],.my-n5[data-v-518166f2]{margin-bottom:-48px!important;margin-bottom:-3rem!important}.ml-n5[data-v-518166f2],.mx-n5[data-v-518166f2]{margin-left:-48px!important;margin-left:-3rem!important}.m-auto[data-v-518166f2]{margin:auto!important}.mt-auto[data-v-518166f2],.my-auto[data-v-518166f2]{margin-top:auto!important}.mr-auto[data-v-518166f2],.mx-auto[data-v-518166f2]{margin-right:auto!important}.mb-auto[data-v-518166f2],.my-auto[data-v-518166f2]{margin-bottom:auto!important}.ml-auto[data-v-518166f2],.mx-auto[data-v-518166f2]{margin-left:auto!important}@media (min-width:576px){.m-sm-0[data-v-518166f2]{margin:0!important}.mt-sm-0[data-v-518166f2],.my-sm-0[data-v-518166f2]{margin-top:0!important}.mr-sm-0[data-v-518166f2],.mx-sm-0[data-v-518166f2]{margin-right:0!important}.mb-sm-0[data-v-518166f2],.my-sm-0[data-v-518166f2]{margin-bottom:0!important}.ml-sm-0[data-v-518166f2],.mx-sm-0[data-v-518166f2]{margin-left:0!important}.m-sm-1[data-v-518166f2]{margin:.25rem!important}.mt-sm-1[data-v-518166f2],.my-sm-1[data-v-518166f2]{margin-top:.25rem!important}.mr-sm-1[data-v-518166f2],.mx-sm-1[data-v-518166f2]{margin-right:.25rem!important}.mb-sm-1[data-v-518166f2],.my-sm-1[data-v-518166f2]{margin-bottom:.25rem!important}.ml-sm-1[data-v-518166f2],.mx-sm-1[data-v-518166f2]{margin-left:.25rem!important}.m-sm-2[data-v-518166f2]{margin:.5rem!important}.mt-sm-2[data-v-518166f2],.my-sm-2[data-v-518166f2]{margin-top:.5rem!important}.mr-sm-2[data-v-518166f2],.mx-sm-2[data-v-518166f2]{margin-right:.5rem!important}.mb-sm-2[data-v-518166f2],.my-sm-2[data-v-518166f2]{margin-bottom:.5rem!important}.ml-sm-2[data-v-518166f2],.mx-sm-2[data-v-518166f2]{margin-left:.5rem!important}.m-sm-3[data-v-518166f2]{margin:1rem!important}.mt-sm-3[data-v-518166f2],.my-sm-3[data-v-518166f2]{margin-top:1rem!important}.mr-sm-3[data-v-518166f2],.mx-sm-3[data-v-518166f2]{margin-right:1rem!important}.mb-sm-3[data-v-518166f2],.my-sm-3[data-v-518166f2]{margin-bottom:1rem!important}.ml-sm-3[data-v-518166f2],.mx-sm-3[data-v-518166f2]{margin-left:1rem!important}.m-sm-4[data-v-518166f2]{margin:1.5rem!important}.mt-sm-4[data-v-518166f2],.my-sm-4[data-v-518166f2]{margin-top:1.5rem!important}.mr-sm-4[data-v-518166f2],.mx-sm-4[data-v-518166f2]{margin-right:1.5rem!important}.mb-sm-4[data-v-518166f2],.my-sm-4[data-v-518166f2]{margin-bottom:1.5rem!important}.ml-sm-4[data-v-518166f2],.mx-sm-4[data-v-518166f2]{margin-left:1.5rem!important}.m-sm-5[data-v-518166f2]{margin:3rem!important}.mt-sm-5[data-v-518166f2],.my-sm-5[data-v-518166f2]{margin-top:3rem!important}.mr-sm-5[data-v-518166f2],.mx-sm-5[data-v-518166f2]{margin-right:3rem!important}.mb-sm-5[data-v-518166f2],.my-sm-5[data-v-518166f2]{margin-bottom:3rem!important}.ml-sm-5[data-v-518166f2],.mx-sm-5[data-v-518166f2]{margin-left:3rem!important}.p-sm-0[data-v-518166f2]{padding:0!important}.pt-sm-0[data-v-518166f2],.py-sm-0[data-v-518166f2]{padding-top:0!important}.pr-sm-0[data-v-518166f2],.px-sm-0[data-v-518166f2]{padding-right:0!important}.pb-sm-0[data-v-518166f2],.py-sm-0[data-v-518166f2]{padding-bottom:0!important}.pl-sm-0[data-v-518166f2],.px-sm-0[data-v-518166f2]{padding-left:0!important}.p-sm-1[data-v-518166f2]{padding:.25rem!important}.pt-sm-1[data-v-518166f2],.py-sm-1[data-v-518166f2]{padding-top:.25rem!important}.pr-sm-1[data-v-518166f2],.px-sm-1[data-v-518166f2]{padding-right:.25rem!important}.pb-sm-1[data-v-518166f2],.py-sm-1[data-v-518166f2]{padding-bottom:.25rem!important}.pl-sm-1[data-v-518166f2],.px-sm-1[data-v-518166f2]{padding-left:.25rem!important}.p-sm-2[data-v-518166f2]{padding:.5rem!important}.pt-sm-2[data-v-518166f2],.py-sm-2[data-v-518166f2]{padding-top:.5rem!important}.pr-sm-2[data-v-518166f2],.px-sm-2[data-v-518166f2]{padding-right:.5rem!important}.pb-sm-2[data-v-518166f2],.py-sm-2[data-v-518166f2]{padding-bottom:.5rem!important}.pl-sm-2[data-v-518166f2],.px-sm-2[data-v-518166f2]{padding-left:.5rem!important}.p-sm-3[data-v-518166f2]{padding:1rem!important}.pt-sm-3[data-v-518166f2],.py-sm-3[data-v-518166f2]{padding-top:1rem!important}.pr-sm-3[data-v-518166f2],.px-sm-3[data-v-518166f2]{padding-right:1rem!important}.pb-sm-3[data-v-518166f2],.py-sm-3[data-v-518166f2]{padding-bottom:1rem!important}.pl-sm-3[data-v-518166f2],.px-sm-3[data-v-518166f2]{padding-left:1rem!important}.p-sm-4[data-v-518166f2]{padding:1.5rem!important}.pt-sm-4[data-v-518166f2],.py-sm-4[data-v-518166f2]{padding-top:1.5rem!important}.pr-sm-4[data-v-518166f2],.px-sm-4[data-v-518166f2]{padding-right:1.5rem!important}.pb-sm-4[data-v-518166f2],.py-sm-4[data-v-518166f2]{padding-bottom:1.5rem!important}.pl-sm-4[data-v-518166f2],.px-sm-4[data-v-518166f2]{padding-left:1.5rem!important}.p-sm-5[data-v-518166f2]{padding:3rem!important}.pt-sm-5[data-v-518166f2],.py-sm-5[data-v-518166f2]{padding-top:3rem!important}.pr-sm-5[data-v-518166f2],.px-sm-5[data-v-518166f2]{padding-right:3rem!important}.pb-sm-5[data-v-518166f2],.py-sm-5[data-v-518166f2]{padding-bottom:3rem!important}.pl-sm-5[data-v-518166f2],.px-sm-5[data-v-518166f2]{padding-left:3rem!important}.m-sm-n1[data-v-518166f2]{margin:-.25rem!important}.mt-sm-n1[data-v-518166f2],.my-sm-n1[data-v-518166f2]{margin-top:-.25rem!important}.mr-sm-n1[data-v-518166f2],.mx-sm-n1[data-v-518166f2]{margin-right:-.25rem!important}.mb-sm-n1[data-v-518166f2],.my-sm-n1[data-v-518166f2]{margin-bottom:-.25rem!important}.ml-sm-n1[data-v-518166f2],.mx-sm-n1[data-v-518166f2]{margin-left:-.25rem!important}.m-sm-n2[data-v-518166f2]{margin:-.5rem!important}.mt-sm-n2[data-v-518166f2],.my-sm-n2[data-v-518166f2]{margin-top:-.5rem!important}.mr-sm-n2[data-v-518166f2],.mx-sm-n2[data-v-518166f2]{margin-right:-.5rem!important}.mb-sm-n2[data-v-518166f2],.my-sm-n2[data-v-518166f2]{margin-bottom:-.5rem!important}.ml-sm-n2[data-v-518166f2],.mx-sm-n2[data-v-518166f2]{margin-left:-.5rem!important}.m-sm-n3[data-v-518166f2]{margin:-1rem!important}.mt-sm-n3[data-v-518166f2],.my-sm-n3[data-v-518166f2]{margin-top:-1rem!important}.mr-sm-n3[data-v-518166f2],.mx-sm-n3[data-v-518166f2]{margin-right:-1rem!important}.mb-sm-n3[data-v-518166f2],.my-sm-n3[data-v-518166f2]{margin-bottom:-1rem!important}.ml-sm-n3[data-v-518166f2],.mx-sm-n3[data-v-518166f2]{margin-left:-1rem!important}.m-sm-n4[data-v-518166f2]{margin:-1.5rem!important}.mt-sm-n4[data-v-518166f2],.my-sm-n4[data-v-518166f2]{margin-top:-1.5rem!important}.mr-sm-n4[data-v-518166f2],.mx-sm-n4[data-v-518166f2]{margin-right:-1.5rem!important}.mb-sm-n4[data-v-518166f2],.my-sm-n4[data-v-518166f2]{margin-bottom:-1.5rem!important}.ml-sm-n4[data-v-518166f2],.mx-sm-n4[data-v-518166f2]{margin-left:-1.5rem!important}.m-sm-n5[data-v-518166f2]{margin:-3rem!important}.mt-sm-n5[data-v-518166f2],.my-sm-n5[data-v-518166f2]{margin-top:-3rem!important}.mr-sm-n5[data-v-518166f2],.mx-sm-n5[data-v-518166f2]{margin-right:-3rem!important}.mb-sm-n5[data-v-518166f2],.my-sm-n5[data-v-518166f2]{margin-bottom:-3rem!important}.ml-sm-n5[data-v-518166f2],.mx-sm-n5[data-v-518166f2]{margin-left:-3rem!important}.m-sm-auto[data-v-518166f2]{margin:auto!important}.mt-sm-auto[data-v-518166f2],.my-sm-auto[data-v-518166f2]{margin-top:auto!important}.mr-sm-auto[data-v-518166f2],.mx-sm-auto[data-v-518166f2]{margin-right:auto!important}.mb-sm-auto[data-v-518166f2],.my-sm-auto[data-v-518166f2]{margin-bottom:auto!important}.ml-sm-auto[data-v-518166f2],.mx-sm-auto[data-v-518166f2]{margin-left:auto!important}}@media (min-width:768px){.m-md-0[data-v-518166f2]{margin:0!important}.mt-md-0[data-v-518166f2],.my-md-0[data-v-518166f2]{margin-top:0!important}.mr-md-0[data-v-518166f2],.mx-md-0[data-v-518166f2]{margin-right:0!important}.mb-md-0[data-v-518166f2],.my-md-0[data-v-518166f2]{margin-bottom:0!important}.ml-md-0[data-v-518166f2],.mx-md-0[data-v-518166f2]{margin-left:0!important}.m-md-1[data-v-518166f2]{margin:.25rem!important}.mt-md-1[data-v-518166f2],.my-md-1[data-v-518166f2]{margin-top:.25rem!important}.mr-md-1[data-v-518166f2],.mx-md-1[data-v-518166f2]{margin-right:.25rem!important}.mb-md-1[data-v-518166f2],.my-md-1[data-v-518166f2]{margin-bottom:.25rem!important}.ml-md-1[data-v-518166f2],.mx-md-1[data-v-518166f2]{margin-left:.25rem!important}.m-md-2[data-v-518166f2]{margin:.5rem!important}.mt-md-2[data-v-518166f2],.my-md-2[data-v-518166f2]{margin-top:.5rem!important}.mr-md-2[data-v-518166f2],.mx-md-2[data-v-518166f2]{margin-right:.5rem!important}.mb-md-2[data-v-518166f2],.my-md-2[data-v-518166f2]{margin-bottom:.5rem!important}.ml-md-2[data-v-518166f2],.mx-md-2[data-v-518166f2]{margin-left:.5rem!important}.m-md-3[data-v-518166f2]{margin:1rem!important}.mt-md-3[data-v-518166f2],.my-md-3[data-v-518166f2]{margin-top:1rem!important}.mr-md-3[data-v-518166f2],.mx-md-3[data-v-518166f2]{margin-right:1rem!important}.mb-md-3[data-v-518166f2],.my-md-3[data-v-518166f2]{margin-bottom:1rem!important}.ml-md-3[data-v-518166f2],.mx-md-3[data-v-518166f2]{margin-left:1rem!important}.m-md-4[data-v-518166f2]{margin:1.5rem!important}.mt-md-4[data-v-518166f2],.my-md-4[data-v-518166f2]{margin-top:1.5rem!important}.mr-md-4[data-v-518166f2],.mx-md-4[data-v-518166f2]{margin-right:1.5rem!important}.mb-md-4[data-v-518166f2],.my-md-4[data-v-518166f2]{margin-bottom:1.5rem!important}.ml-md-4[data-v-518166f2],.mx-md-4[data-v-518166f2]{margin-left:1.5rem!important}.m-md-5[data-v-518166f2]{margin:3rem!important}.mt-md-5[data-v-518166f2],.my-md-5[data-v-518166f2]{margin-top:3rem!important}.mr-md-5[data-v-518166f2],.mx-md-5[data-v-518166f2]{margin-right:3rem!important}.mb-md-5[data-v-518166f2],.my-md-5[data-v-518166f2]{margin-bottom:3rem!important}.ml-md-5[data-v-518166f2],.mx-md-5[data-v-518166f2]{margin-left:3rem!important}.p-md-0[data-v-518166f2]{padding:0!important}.pt-md-0[data-v-518166f2],.py-md-0[data-v-518166f2]{padding-top:0!important}.pr-md-0[data-v-518166f2],.px-md-0[data-v-518166f2]{padding-right:0!important}.pb-md-0[data-v-518166f2],.py-md-0[data-v-518166f2]{padding-bottom:0!important}.pl-md-0[data-v-518166f2],.px-md-0[data-v-518166f2]{padding-left:0!important}.p-md-1[data-v-518166f2]{padding:.25rem!important}.pt-md-1[data-v-518166f2],.py-md-1[data-v-518166f2]{padding-top:.25rem!important}.pr-md-1[data-v-518166f2],.px-md-1[data-v-518166f2]{padding-right:.25rem!important}.pb-md-1[data-v-518166f2],.py-md-1[data-v-518166f2]{padding-bottom:.25rem!important}.pl-md-1[data-v-518166f2],.px-md-1[data-v-518166f2]{padding-left:.25rem!important}.p-md-2[data-v-518166f2]{padding:.5rem!important}.pt-md-2[data-v-518166f2],.py-md-2[data-v-518166f2]{padding-top:.5rem!important}.pr-md-2[data-v-518166f2],.px-md-2[data-v-518166f2]{padding-right:.5rem!important}.pb-md-2[data-v-518166f2],.py-md-2[data-v-518166f2]{padding-bottom:.5rem!important}.pl-md-2[data-v-518166f2],.px-md-2[data-v-518166f2]{padding-left:.5rem!important}.p-md-3[data-v-518166f2]{padding:1rem!important}.pt-md-3[data-v-518166f2],.py-md-3[data-v-518166f2]{padding-top:1rem!important}.pr-md-3[data-v-518166f2],.px-md-3[data-v-518166f2]{padding-right:1rem!important}.pb-md-3[data-v-518166f2],.py-md-3[data-v-518166f2]{padding-bottom:1rem!important}.pl-md-3[data-v-518166f2],.px-md-3[data-v-518166f2]{padding-left:1rem!important}.p-md-4[data-v-518166f2]{padding:1.5rem!important}.pt-md-4[data-v-518166f2],.py-md-4[data-v-518166f2]{padding-top:1.5rem!important}.pr-md-4[data-v-518166f2],.px-md-4[data-v-518166f2]{padding-right:1.5rem!important}.pb-md-4[data-v-518166f2],.py-md-4[data-v-518166f2]{padding-bottom:1.5rem!important}.pl-md-4[data-v-518166f2],.px-md-4[data-v-518166f2]{padding-left:1.5rem!important}.p-md-5[data-v-518166f2]{padding:3rem!important}.pt-md-5[data-v-518166f2],.py-md-5[data-v-518166f2]{padding-top:3rem!important}.pr-md-5[data-v-518166f2],.px-md-5[data-v-518166f2]{padding-right:3rem!important}.pb-md-5[data-v-518166f2],.py-md-5[data-v-518166f2]{padding-bottom:3rem!important}.pl-md-5[data-v-518166f2],.px-md-5[data-v-518166f2]{padding-left:3rem!important}.m-md-n1[data-v-518166f2]{margin:-.25rem!important}.mt-md-n1[data-v-518166f2],.my-md-n1[data-v-518166f2]{margin-top:-.25rem!important}.mr-md-n1[data-v-518166f2],.mx-md-n1[data-v-518166f2]{margin-right:-.25rem!important}.mb-md-n1[data-v-518166f2],.my-md-n1[data-v-518166f2]{margin-bottom:-.25rem!important}.ml-md-n1[data-v-518166f2],.mx-md-n1[data-v-518166f2]{margin-left:-.25rem!important}.m-md-n2[data-v-518166f2]{margin:-.5rem!important}.mt-md-n2[data-v-518166f2],.my-md-n2[data-v-518166f2]{margin-top:-.5rem!important}.mr-md-n2[data-v-518166f2],.mx-md-n2[data-v-518166f2]{margin-right:-.5rem!important}.mb-md-n2[data-v-518166f2],.my-md-n2[data-v-518166f2]{margin-bottom:-.5rem!important}.ml-md-n2[data-v-518166f2],.mx-md-n2[data-v-518166f2]{margin-left:-.5rem!important}.m-md-n3[data-v-518166f2]{margin:-1rem!important}.mt-md-n3[data-v-518166f2],.my-md-n3[data-v-518166f2]{margin-top:-1rem!important}.mr-md-n3[data-v-518166f2],.mx-md-n3[data-v-518166f2]{margin-right:-1rem!important}.mb-md-n3[data-v-518166f2],.my-md-n3[data-v-518166f2]{margin-bottom:-1rem!important}.ml-md-n3[data-v-518166f2],.mx-md-n3[data-v-518166f2]{margin-left:-1rem!important}.m-md-n4[data-v-518166f2]{margin:-1.5rem!important}.mt-md-n4[data-v-518166f2],.my-md-n4[data-v-518166f2]{margin-top:-1.5rem!important}.mr-md-n4[data-v-518166f2],.mx-md-n4[data-v-518166f2]{margin-right:-1.5rem!important}.mb-md-n4[data-v-518166f2],.my-md-n4[data-v-518166f2]{margin-bottom:-1.5rem!important}.ml-md-n4[data-v-518166f2],.mx-md-n4[data-v-518166f2]{margin-left:-1.5rem!important}.m-md-n5[data-v-518166f2]{margin:-3rem!important}.mt-md-n5[data-v-518166f2],.my-md-n5[data-v-518166f2]{margin-top:-3rem!important}.mr-md-n5[data-v-518166f2],.mx-md-n5[data-v-518166f2]{margin-right:-3rem!important}.mb-md-n5[data-v-518166f2],.my-md-n5[data-v-518166f2]{margin-bottom:-3rem!important}.ml-md-n5[data-v-518166f2],.mx-md-n5[data-v-518166f2]{margin-left:-3rem!important}.m-md-auto[data-v-518166f2]{margin:auto!important}.mt-md-auto[data-v-518166f2],.my-md-auto[data-v-518166f2]{margin-top:auto!important}.mr-md-auto[data-v-518166f2],.mx-md-auto[data-v-518166f2]{margin-right:auto!important}.mb-md-auto[data-v-518166f2],.my-md-auto[data-v-518166f2]{margin-bottom:auto!important}.ml-md-auto[data-v-518166f2],.mx-md-auto[data-v-518166f2]{margin-left:auto!important}}@media (min-width:992px){.m-lg-0[data-v-518166f2]{margin:0!important}.mt-lg-0[data-v-518166f2],.my-lg-0[data-v-518166f2]{margin-top:0!important}.mr-lg-0[data-v-518166f2],.mx-lg-0[data-v-518166f2]{margin-right:0!important}.mb-lg-0[data-v-518166f2],.my-lg-0[data-v-518166f2]{margin-bottom:0!important}.ml-lg-0[data-v-518166f2],.mx-lg-0[data-v-518166f2]{margin-left:0!important}.m-lg-1[data-v-518166f2]{margin:.25rem!important}.mt-lg-1[data-v-518166f2],.my-lg-1[data-v-518166f2]{margin-top:.25rem!important}.mr-lg-1[data-v-518166f2],.mx-lg-1[data-v-518166f2]{margin-right:.25rem!important}.mb-lg-1[data-v-518166f2],.my-lg-1[data-v-518166f2]{margin-bottom:.25rem!important}.ml-lg-1[data-v-518166f2],.mx-lg-1[data-v-518166f2]{margin-left:.25rem!important}.m-lg-2[data-v-518166f2]{margin:.5rem!important}.mt-lg-2[data-v-518166f2],.my-lg-2[data-v-518166f2]{margin-top:.5rem!important}.mr-lg-2[data-v-518166f2],.mx-lg-2[data-v-518166f2]{margin-right:.5rem!important}.mb-lg-2[data-v-518166f2],.my-lg-2[data-v-518166f2]{margin-bottom:.5rem!important}.ml-lg-2[data-v-518166f2],.mx-lg-2[data-v-518166f2]{margin-left:.5rem!important}.m-lg-3[data-v-518166f2]{margin:1rem!important}.mt-lg-3[data-v-518166f2],.my-lg-3[data-v-518166f2]{margin-top:1rem!important}.mr-lg-3[data-v-518166f2],.mx-lg-3[data-v-518166f2]{margin-right:1rem!important}.mb-lg-3[data-v-518166f2],.my-lg-3[data-v-518166f2]{margin-bottom:1rem!important}.ml-lg-3[data-v-518166f2],.mx-lg-3[data-v-518166f2]{margin-left:1rem!important}.m-lg-4[data-v-518166f2]{margin:1.5rem!important}.mt-lg-4[data-v-518166f2],.my-lg-4[data-v-518166f2]{margin-top:1.5rem!important}.mr-lg-4[data-v-518166f2],.mx-lg-4[data-v-518166f2]{margin-right:1.5rem!important}.mb-lg-4[data-v-518166f2],.my-lg-4[data-v-518166f2]{margin-bottom:1.5rem!important}.ml-lg-4[data-v-518166f2],.mx-lg-4[data-v-518166f2]{margin-left:1.5rem!important}.m-lg-5[data-v-518166f2]{margin:3rem!important}.mt-lg-5[data-v-518166f2],.my-lg-5[data-v-518166f2]{margin-top:3rem!important}.mr-lg-5[data-v-518166f2],.mx-lg-5[data-v-518166f2]{margin-right:3rem!important}.mb-lg-5[data-v-518166f2],.my-lg-5[data-v-518166f2]{margin-bottom:3rem!important}.ml-lg-5[data-v-518166f2],.mx-lg-5[data-v-518166f2]{margin-left:3rem!important}.p-lg-0[data-v-518166f2]{padding:0!important}.pt-lg-0[data-v-518166f2],.py-lg-0[data-v-518166f2]{padding-top:0!important}.pr-lg-0[data-v-518166f2],.px-lg-0[data-v-518166f2]{padding-right:0!important}.pb-lg-0[data-v-518166f2],.py-lg-0[data-v-518166f2]{padding-bottom:0!important}.pl-lg-0[data-v-518166f2],.px-lg-0[data-v-518166f2]{padding-left:0!important}.p-lg-1[data-v-518166f2]{padding:.25rem!important}.pt-lg-1[data-v-518166f2],.py-lg-1[data-v-518166f2]{padding-top:.25rem!important}.pr-lg-1[data-v-518166f2],.px-lg-1[data-v-518166f2]{padding-right:.25rem!important}.pb-lg-1[data-v-518166f2],.py-lg-1[data-v-518166f2]{padding-bottom:.25rem!important}.pl-lg-1[data-v-518166f2],.px-lg-1[data-v-518166f2]{padding-left:.25rem!important}.p-lg-2[data-v-518166f2]{padding:.5rem!important}.pt-lg-2[data-v-518166f2],.py-lg-2[data-v-518166f2]{padding-top:.5rem!important}.pr-lg-2[data-v-518166f2],.px-lg-2[data-v-518166f2]{padding-right:.5rem!important}.pb-lg-2[data-v-518166f2],.py-lg-2[data-v-518166f2]{padding-bottom:.5rem!important}.pl-lg-2[data-v-518166f2],.px-lg-2[data-v-518166f2]{padding-left:.5rem!important}.p-lg-3[data-v-518166f2]{padding:1rem!important}.pt-lg-3[data-v-518166f2],.py-lg-3[data-v-518166f2]{padding-top:1rem!important}.pr-lg-3[data-v-518166f2],.px-lg-3[data-v-518166f2]{padding-right:1rem!important}.pb-lg-3[data-v-518166f2],.py-lg-3[data-v-518166f2]{padding-bottom:1rem!important}.pl-lg-3[data-v-518166f2],.px-lg-3[data-v-518166f2]{padding-left:1rem!important}.p-lg-4[data-v-518166f2]{padding:1.5rem!important}.pt-lg-4[data-v-518166f2],.py-lg-4[data-v-518166f2]{padding-top:1.5rem!important}.pr-lg-4[data-v-518166f2],.px-lg-4[data-v-518166f2]{padding-right:1.5rem!important}.pb-lg-4[data-v-518166f2],.py-lg-4[data-v-518166f2]{padding-bottom:1.5rem!important}.pl-lg-4[data-v-518166f2],.px-lg-4[data-v-518166f2]{padding-left:1.5rem!important}.p-lg-5[data-v-518166f2]{padding:3rem!important}.pt-lg-5[data-v-518166f2],.py-lg-5[data-v-518166f2]{padding-top:3rem!important}.pr-lg-5[data-v-518166f2],.px-lg-5[data-v-518166f2]{padding-right:3rem!important}.pb-lg-5[data-v-518166f2],.py-lg-5[data-v-518166f2]{padding-bottom:3rem!important}.pl-lg-5[data-v-518166f2],.px-lg-5[data-v-518166f2]{padding-left:3rem!important}.m-lg-n1[data-v-518166f2]{margin:-.25rem!important}.mt-lg-n1[data-v-518166f2],.my-lg-n1[data-v-518166f2]{margin-top:-.25rem!important}.mr-lg-n1[data-v-518166f2],.mx-lg-n1[data-v-518166f2]{margin-right:-.25rem!important}.mb-lg-n1[data-v-518166f2],.my-lg-n1[data-v-518166f2]{margin-bottom:-.25rem!important}.ml-lg-n1[data-v-518166f2],.mx-lg-n1[data-v-518166f2]{margin-left:-.25rem!important}.m-lg-n2[data-v-518166f2]{margin:-.5rem!important}.mt-lg-n2[data-v-518166f2],.my-lg-n2[data-v-518166f2]{margin-top:-.5rem!important}.mr-lg-n2[data-v-518166f2],.mx-lg-n2[data-v-518166f2]{margin-right:-.5rem!important}.mb-lg-n2[data-v-518166f2],.my-lg-n2[data-v-518166f2]{margin-bottom:-.5rem!important}.ml-lg-n2[data-v-518166f2],.mx-lg-n2[data-v-518166f2]{margin-left:-.5rem!important}.m-lg-n3[data-v-518166f2]{margin:-1rem!important}.mt-lg-n3[data-v-518166f2],.my-lg-n3[data-v-518166f2]{margin-top:-1rem!important}.mr-lg-n3[data-v-518166f2],.mx-lg-n3[data-v-518166f2]{margin-right:-1rem!important}.mb-lg-n3[data-v-518166f2],.my-lg-n3[data-v-518166f2]{margin-bottom:-1rem!important}.ml-lg-n3[data-v-518166f2],.mx-lg-n3[data-v-518166f2]{margin-left:-1rem!important}.m-lg-n4[data-v-518166f2]{margin:-1.5rem!important}.mt-lg-n4[data-v-518166f2],.my-lg-n4[data-v-518166f2]{margin-top:-1.5rem!important}.mr-lg-n4[data-v-518166f2],.mx-lg-n4[data-v-518166f2]{margin-right:-1.5rem!important}.mb-lg-n4[data-v-518166f2],.my-lg-n4[data-v-518166f2]{margin-bottom:-1.5rem!important}.ml-lg-n4[data-v-518166f2],.mx-lg-n4[data-v-518166f2]{margin-left:-1.5rem!important}.m-lg-n5[data-v-518166f2]{margin:-3rem!important}.mt-lg-n5[data-v-518166f2],.my-lg-n5[data-v-518166f2]{margin-top:-3rem!important}.mr-lg-n5[data-v-518166f2],.mx-lg-n5[data-v-518166f2]{margin-right:-3rem!important}.mb-lg-n5[data-v-518166f2],.my-lg-n5[data-v-518166f2]{margin-bottom:-3rem!important}.ml-lg-n5[data-v-518166f2],.mx-lg-n5[data-v-518166f2]{margin-left:-3rem!important}.m-lg-auto[data-v-518166f2]{margin:auto!important}.mt-lg-auto[data-v-518166f2],.my-lg-auto[data-v-518166f2]{margin-top:auto!important}.mr-lg-auto[data-v-518166f2],.mx-lg-auto[data-v-518166f2]{margin-right:auto!important}.mb-lg-auto[data-v-518166f2],.my-lg-auto[data-v-518166f2]{margin-bottom:auto!important}.ml-lg-auto[data-v-518166f2],.mx-lg-auto[data-v-518166f2]{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0[data-v-518166f2]{margin:0!important}.mt-xl-0[data-v-518166f2],.my-xl-0[data-v-518166f2]{margin-top:0!important}.mr-xl-0[data-v-518166f2],.mx-xl-0[data-v-518166f2]{margin-right:0!important}.mb-xl-0[data-v-518166f2],.my-xl-0[data-v-518166f2]{margin-bottom:0!important}.ml-xl-0[data-v-518166f2],.mx-xl-0[data-v-518166f2]{margin-left:0!important}.m-xl-1[data-v-518166f2]{margin:.25rem!important}.mt-xl-1[data-v-518166f2],.my-xl-1[data-v-518166f2]{margin-top:.25rem!important}.mr-xl-1[data-v-518166f2],.mx-xl-1[data-v-518166f2]{margin-right:.25rem!important}.mb-xl-1[data-v-518166f2],.my-xl-1[data-v-518166f2]{margin-bottom:.25rem!important}.ml-xl-1[data-v-518166f2],.mx-xl-1[data-v-518166f2]{margin-left:.25rem!important}.m-xl-2[data-v-518166f2]{margin:.5rem!important}.mt-xl-2[data-v-518166f2],.my-xl-2[data-v-518166f2]{margin-top:.5rem!important}.mr-xl-2[data-v-518166f2],.mx-xl-2[data-v-518166f2]{margin-right:.5rem!important}.mb-xl-2[data-v-518166f2],.my-xl-2[data-v-518166f2]{margin-bottom:.5rem!important}.ml-xl-2[data-v-518166f2],.mx-xl-2[data-v-518166f2]{margin-left:.5rem!important}.m-xl-3[data-v-518166f2]{margin:1rem!important}.mt-xl-3[data-v-518166f2],.my-xl-3[data-v-518166f2]{margin-top:1rem!important}.mr-xl-3[data-v-518166f2],.mx-xl-3[data-v-518166f2]{margin-right:1rem!important}.mb-xl-3[data-v-518166f2],.my-xl-3[data-v-518166f2]{margin-bottom:1rem!important}.ml-xl-3[data-v-518166f2],.mx-xl-3[data-v-518166f2]{margin-left:1rem!important}.m-xl-4[data-v-518166f2]{margin:1.5rem!important}.mt-xl-4[data-v-518166f2],.my-xl-4[data-v-518166f2]{margin-top:1.5rem!important}.mr-xl-4[data-v-518166f2],.mx-xl-4[data-v-518166f2]{margin-right:1.5rem!important}.mb-xl-4[data-v-518166f2],.my-xl-4[data-v-518166f2]{margin-bottom:1.5rem!important}.ml-xl-4[data-v-518166f2],.mx-xl-4[data-v-518166f2]{margin-left:1.5rem!important}.m-xl-5[data-v-518166f2]{margin:3rem!important}.mt-xl-5[data-v-518166f2],.my-xl-5[data-v-518166f2]{margin-top:3rem!important}.mr-xl-5[data-v-518166f2],.mx-xl-5[data-v-518166f2]{margin-right:3rem!important}.mb-xl-5[data-v-518166f2],.my-xl-5[data-v-518166f2]{margin-bottom:3rem!important}.ml-xl-5[data-v-518166f2],.mx-xl-5[data-v-518166f2]{margin-left:3rem!important}.p-xl-0[data-v-518166f2]{padding:0!important}.pt-xl-0[data-v-518166f2],.py-xl-0[data-v-518166f2]{padding-top:0!important}.pr-xl-0[data-v-518166f2],.px-xl-0[data-v-518166f2]{padding-right:0!important}.pb-xl-0[data-v-518166f2],.py-xl-0[data-v-518166f2]{padding-bottom:0!important}.pl-xl-0[data-v-518166f2],.px-xl-0[data-v-518166f2]{padding-left:0!important}.p-xl-1[data-v-518166f2]{padding:.25rem!important}.pt-xl-1[data-v-518166f2],.py-xl-1[data-v-518166f2]{padding-top:.25rem!important}.pr-xl-1[data-v-518166f2],.px-xl-1[data-v-518166f2]{padding-right:.25rem!important}.pb-xl-1[data-v-518166f2],.py-xl-1[data-v-518166f2]{padding-bottom:.25rem!important}.pl-xl-1[data-v-518166f2],.px-xl-1[data-v-518166f2]{padding-left:.25rem!important}.p-xl-2[data-v-518166f2]{padding:.5rem!important}.pt-xl-2[data-v-518166f2],.py-xl-2[data-v-518166f2]{padding-top:.5rem!important}.pr-xl-2[data-v-518166f2],.px-xl-2[data-v-518166f2]{padding-right:.5rem!important}.pb-xl-2[data-v-518166f2],.py-xl-2[data-v-518166f2]{padding-bottom:.5rem!important}.pl-xl-2[data-v-518166f2],.px-xl-2[data-v-518166f2]{padding-left:.5rem!important}.p-xl-3[data-v-518166f2]{padding:1rem!important}.pt-xl-3[data-v-518166f2],.py-xl-3[data-v-518166f2]{padding-top:1rem!important}.pr-xl-3[data-v-518166f2],.px-xl-3[data-v-518166f2]{padding-right:1rem!important}.pb-xl-3[data-v-518166f2],.py-xl-3[data-v-518166f2]{padding-bottom:1rem!important}.pl-xl-3[data-v-518166f2],.px-xl-3[data-v-518166f2]{padding-left:1rem!important}.p-xl-4[data-v-518166f2]{padding:1.5rem!important}.pt-xl-4[data-v-518166f2],.py-xl-4[data-v-518166f2]{padding-top:1.5rem!important}.pr-xl-4[data-v-518166f2],.px-xl-4[data-v-518166f2]{padding-right:1.5rem!important}.pb-xl-4[data-v-518166f2],.py-xl-4[data-v-518166f2]{padding-bottom:1.5rem!important}.pl-xl-4[data-v-518166f2],.px-xl-4[data-v-518166f2]{padding-left:1.5rem!important}.p-xl-5[data-v-518166f2]{padding:3rem!important}.pt-xl-5[data-v-518166f2],.py-xl-5[data-v-518166f2]{padding-top:3rem!important}.pr-xl-5[data-v-518166f2],.px-xl-5[data-v-518166f2]{padding-right:3rem!important}.pb-xl-5[data-v-518166f2],.py-xl-5[data-v-518166f2]{padding-bottom:3rem!important}.pl-xl-5[data-v-518166f2],.px-xl-5[data-v-518166f2]{padding-left:3rem!important}.m-xl-n1[data-v-518166f2]{margin:-.25rem!important}.mt-xl-n1[data-v-518166f2],.my-xl-n1[data-v-518166f2]{margin-top:-.25rem!important}.mr-xl-n1[data-v-518166f2],.mx-xl-n1[data-v-518166f2]{margin-right:-.25rem!important}.mb-xl-n1[data-v-518166f2],.my-xl-n1[data-v-518166f2]{margin-bottom:-.25rem!important}.ml-xl-n1[data-v-518166f2],.mx-xl-n1[data-v-518166f2]{margin-left:-.25rem!important}.m-xl-n2[data-v-518166f2]{margin:-.5rem!important}.mt-xl-n2[data-v-518166f2],.my-xl-n2[data-v-518166f2]{margin-top:-.5rem!important}.mr-xl-n2[data-v-518166f2],.mx-xl-n2[data-v-518166f2]{margin-right:-.5rem!important}.mb-xl-n2[data-v-518166f2],.my-xl-n2[data-v-518166f2]{margin-bottom:-.5rem!important}.ml-xl-n2[data-v-518166f2],.mx-xl-n2[data-v-518166f2]{margin-left:-.5rem!important}.m-xl-n3[data-v-518166f2]{margin:-1rem!important}.mt-xl-n3[data-v-518166f2],.my-xl-n3[data-v-518166f2]{margin-top:-1rem!important}.mr-xl-n3[data-v-518166f2],.mx-xl-n3[data-v-518166f2]{margin-right:-1rem!important}.mb-xl-n3[data-v-518166f2],.my-xl-n3[data-v-518166f2]{margin-bottom:-1rem!important}.ml-xl-n3[data-v-518166f2],.mx-xl-n3[data-v-518166f2]{margin-left:-1rem!important}.m-xl-n4[data-v-518166f2]{margin:-1.5rem!important}.mt-xl-n4[data-v-518166f2],.my-xl-n4[data-v-518166f2]{margin-top:-1.5rem!important}.mr-xl-n4[data-v-518166f2],.mx-xl-n4[data-v-518166f2]{margin-right:-1.5rem!important}.mb-xl-n4[data-v-518166f2],.my-xl-n4[data-v-518166f2]{margin-bottom:-1.5rem!important}.ml-xl-n4[data-v-518166f2],.mx-xl-n4[data-v-518166f2]{margin-left:-1.5rem!important}.m-xl-n5[data-v-518166f2]{margin:-3rem!important}.mt-xl-n5[data-v-518166f2],.my-xl-n5[data-v-518166f2]{margin-top:-3rem!important}.mr-xl-n5[data-v-518166f2],.mx-xl-n5[data-v-518166f2]{margin-right:-3rem!important}.mb-xl-n5[data-v-518166f2],.my-xl-n5[data-v-518166f2]{margin-bottom:-3rem!important}.ml-xl-n5[data-v-518166f2],.mx-xl-n5[data-v-518166f2]{margin-left:-3rem!important}.m-xl-auto[data-v-518166f2]{margin:auto!important}.mt-xl-auto[data-v-518166f2],.my-xl-auto[data-v-518166f2]{margin-top:auto!important}.mr-xl-auto[data-v-518166f2],.mx-xl-auto[data-v-518166f2]{margin-right:auto!important}.mb-xl-auto[data-v-518166f2],.my-xl-auto[data-v-518166f2]{margin-bottom:auto!important}.ml-xl-auto[data-v-518166f2],.mx-xl-auto[data-v-518166f2]{margin-left:auto!important}}.text-monospace[data-v-518166f2]{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace!important}.text-justify[data-v-518166f2]{text-align:justify!important}.text-wrap[data-v-518166f2]{white-space:normal!important}.text-nowrap[data-v-518166f2]{white-space:nowrap!important}.text-truncate[data-v-518166f2]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left[data-v-518166f2]{text-align:left!important}.text-right[data-v-518166f2]{text-align:right!important}.text-center[data-v-518166f2]{text-align:center!important}@media (min-width:576px){.text-sm-left[data-v-518166f2]{text-align:left!important}.text-sm-right[data-v-518166f2]{text-align:right!important}.text-sm-center[data-v-518166f2]{text-align:center!important}}@media (min-width:768px){.text-md-left[data-v-518166f2]{text-align:left!important}.text-md-right[data-v-518166f2]{text-align:right!important}.text-md-center[data-v-518166f2]{text-align:center!important}}@media (min-width:992px){.text-lg-left[data-v-518166f2]{text-align:left!important}.text-lg-right[data-v-518166f2]{text-align:right!important}.text-lg-center[data-v-518166f2]{text-align:center!important}}@media (min-width:1200px){.text-xl-left[data-v-518166f2]{text-align:left!important}.text-xl-right[data-v-518166f2]{text-align:right!important}.text-xl-center[data-v-518166f2]{text-align:center!important}}.text-lowercase[data-v-518166f2]{text-transform:lowercase!important}.text-uppercase[data-v-518166f2]{text-transform:uppercase!important}.text-capitalize[data-v-518166f2]{text-transform:capitalize!important}.font-weight-light[data-v-518166f2]{font-weight:300!important}.font-weight-lighter[data-v-518166f2]{font-weight:lighter!important}.font-weight-normal[data-v-518166f2]{font-weight:400!important}.font-weight-bold[data-v-518166f2]{font-weight:700!important}.font-weight-bolder[data-v-518166f2]{font-weight:bolder!important}.font-italic[data-v-518166f2]{font-style:italic!important}.text-white[data-v-518166f2]{color:#fff!important}.text-primary[data-v-518166f2]{color:#007bff!important}a.text-primary[data-v-518166f2]:focus,a.text-primary[data-v-518166f2]:hover{color:#0056b3!important}.text-secondary[data-v-518166f2]{color:#6c757d!important}a.text-secondary[data-v-518166f2]:focus,a.text-secondary[data-v-518166f2]:hover{color:#494f54!important}.text-success[data-v-518166f2]{color:#28a745!important}a.text-success[data-v-518166f2]:focus,a.text-success[data-v-518166f2]:hover{color:#19692c!important}.text-info[data-v-518166f2]{color:#17a2b8!important}a.text-info[data-v-518166f2]:focus,a.text-info[data-v-518166f2]:hover{color:#0f6674!important}.text-warning[data-v-518166f2]{color:#ffc107!important}a.text-warning[data-v-518166f2]:focus,a.text-warning[data-v-518166f2]:hover{color:#ba8b00!important}.text-danger[data-v-518166f2]{color:#dc3545!important}a.text-danger[data-v-518166f2]:focus,a.text-danger[data-v-518166f2]:hover{color:#a71d2a!important}.text-light[data-v-518166f2]{color:#f8f9fa!important}a.text-light[data-v-518166f2]:focus,a.text-light[data-v-518166f2]:hover{color:#cbd3da!important}.text-dark[data-v-518166f2]{color:#343a40!important}a.text-dark[data-v-518166f2]:focus,a.text-dark[data-v-518166f2]:hover{color:#121416!important}.text-body[data-v-518166f2]{color:#212529!important}.text-muted[data-v-518166f2]{color:#6c757d!important}.text-black-50[data-v-518166f2]{color:rgba(0,0,0,.5)!important}.text-white-50[data-v-518166f2]{color:hsla(0,0%,100%,.5)!important}.text-hide[data-v-518166f2]{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none[data-v-518166f2]{text-decoration:none!important}.text-break[data-v-518166f2]{word-break:break-word!important;word-wrap:break-word!important}.text-reset[data-v-518166f2]{color:inherit!important}.visible[data-v-518166f2]{visibility:visible!important}.invisible[data-v-518166f2]{visibility:hidden!important}@media print{*[data-v-518166f2],[data-v-518166f2]:after,[data-v-518166f2]:before{text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}a[data-v-518166f2]:not(.btn){text-decoration:underline}abbr[title][data-v-518166f2]:after{content:\" (\" attr(title) \")\"}pre[data-v-518166f2]{white-space:pre-wrap!important}blockquote[data-v-518166f2],pre[data-v-518166f2]{border:1px solid #adb5bd;page-break-inside:avoid}thead[data-v-518166f2]{display:table-header-group}img[data-v-518166f2],tr[data-v-518166f2]{page-break-inside:avoid}h2[data-v-518166f2],h3[data-v-518166f2],p[data-v-518166f2]{orphans:3;widows:3}h2[data-v-518166f2],h3[data-v-518166f2]{page-break-after:avoid}@page{size:a3}.container[data-v-518166f2],body[data-v-518166f2]{min-width:992px!important}.navbar[data-v-518166f2]{display:none}.badge[data-v-518166f2]{border:1px solid #000}.table[data-v-518166f2]{border-collapse:collapse!important}.table td[data-v-518166f2],.table th[data-v-518166f2]{background-color:#fff!important}.table-bordered td[data-v-518166f2],.table-bordered th[data-v-518166f2]{border:1px solid #dee2e6!important}.table-dark[data-v-518166f2]{color:inherit}.table-dark tbody+tbody[data-v-518166f2],.table-dark td[data-v-518166f2],.table-dark th[data-v-518166f2],.table-dark thead th[data-v-518166f2]{border-color:#dee2e6}.table .thead-dark th[data-v-518166f2]{color:inherit;border-color:#dee2e6}}@media (max-width:575.98px){.bv-d-xs-down-none[data-v-518166f2]{display:none!important}}@media (max-width:767.98px){.bv-d-sm-down-none[data-v-518166f2]{display:none!important}}@media (max-width:991.98px){.bv-d-md-down-none[data-v-518166f2]{display:none!important}}@media (max-width:1199.98px){.bv-d-lg-down-none[data-v-518166f2]{display:none!important}}.bv-d-xl-down-none[data-v-518166f2]{display:none!important}.card-img-left[data-v-518166f2]{border-top-left-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-img-right[data-v-518166f2]{border-top-right-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret[data-v-518166f2]:before,.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret[data-v-518166f2]:after{display:none!important}.dropdown.b-dropdown .b-dropdown-form[data-v-518166f2]{display:inline-block;padding:4px 24px;padding:.25rem 1.5rem;width:100%;clear:both;font-weight:400}.dropdown.b-dropdown .b-dropdown-form[data-v-518166f2]:focus{outline:1px dotted!important;outline:5px auto -webkit-focus-ring-color!important}.dropdown.b-dropdown .b-dropdown-form.disabled[data-v-518166f2],.dropdown.b-dropdown .b-dropdown-form[data-v-518166f2]:disabled{outline:0!important;color:#6c757d;pointer-events:none}.b-dropdown-text[data-v-518166f2]{display:inline-block;padding:4px 24px;padding:.25rem 1.5rem;margin-bottom:0;width:100%;clear:both;font-weight:lighter}.custom-checkbox.b-custom-control-lg[data-v-518166f2],.input-group-lg .custom-checkbox[data-v-518166f2]{font-size:20px;font-size:1.25rem;line-height:1.5;padding-left:30px;padding-left:1.875rem}.custom-checkbox.b-custom-control-lg .custom-control-label[data-v-518166f2]:before,.input-group-lg .custom-checkbox .custom-control-label[data-v-518166f2]:before{top:5px;top:.3125rem;left:-30px;left:-1.875rem;width:20px;width:1.25rem;height:20px;height:1.25rem;border-radius:.3rem}.custom-checkbox.b-custom-control-lg .custom-control-label[data-v-518166f2]:after,.input-group-lg .custom-checkbox .custom-control-label[data-v-518166f2]:after{top:5px;top:.3125rem;left:-30px;left:-1.875rem;width:20px;width:1.25rem;height:20px;height:1.25rem;background-size:50% 50%}.custom-checkbox.b-custom-control-sm[data-v-518166f2],.input-group-sm .custom-checkbox[data-v-518166f2]{font-size:14px;font-size:.875rem;line-height:1.5;padding-left:21px;padding-left:1.3125rem}.custom-checkbox.b-custom-control-sm .custom-control-label[data-v-518166f2]:before,.input-group-sm .custom-checkbox .custom-control-label[data-v-518166f2]:before{top:3.5px;top:.21875rem;left:-21px;left:-1.3125rem;width:14px;width:.875rem;height:14px;height:.875rem;border-radius:.2rem}.custom-checkbox.b-custom-control-sm .custom-control-label[data-v-518166f2]:after,.input-group-sm .custom-checkbox .custom-control-label[data-v-518166f2]:after{top:3.5px;top:.21875rem;left:-21px;left:-1.3125rem;width:14px;width:.875rem;height:14px;height:.875rem;background-size:50% 50%}.custom-switch.b-custom-control-lg[data-v-518166f2],.input-group-lg .custom-switch[data-v-518166f2]{padding-left:45px;padding-left:2.8125rem}.custom-switch.b-custom-control-lg .custom-control-label[data-v-518166f2],.input-group-lg .custom-switch .custom-control-label[data-v-518166f2]{font-size:20px;font-size:1.25rem;line-height:1.5}.custom-switch.b-custom-control-lg .custom-control-label[data-v-518166f2]:before,.input-group-lg .custom-switch .custom-control-label[data-v-518166f2]:before{top:5px;top:.3125rem;height:20px;height:1.25rem;left:-45px;left:-2.8125rem;width:35px;width:2.1875rem;border-radius:.625rem}.custom-switch.b-custom-control-lg .custom-control-label[data-v-518166f2]:after,.input-group-lg .custom-switch .custom-control-label[data-v-518166f2]:after{top:calc(.3125rem + 2px);left:calc(-2.8125rem + 2px);width:calc(1.25rem - 4px);height:calc(1.25rem - 4px);border-radius:.625rem;background-size:50% 50%}.custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label[data-v-518166f2]:after,.input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label[data-v-518166f2]:after{-webkit-transform:translateX(.9375rem);transform:translateX(.9375rem)}.custom-switch.b-custom-control-sm[data-v-518166f2],.input-group-sm .custom-switch[data-v-518166f2]{padding-left:31.5px;padding-left:1.96875rem}.custom-switch.b-custom-control-sm .custom-control-label[data-v-518166f2],.input-group-sm .custom-switch .custom-control-label[data-v-518166f2]{font-size:14px;font-size:.875rem;line-height:1.5}.custom-switch.b-custom-control-sm .custom-control-label[data-v-518166f2]:before,.input-group-sm .custom-switch .custom-control-label[data-v-518166f2]:before{top:3.5px;top:.21875rem;left:-31.5px;left:-1.96875rem;width:24.5px;width:1.53125rem;height:14px;height:.875rem;border-radius:.4375rem}.custom-switch.b-custom-control-sm .custom-control-label[data-v-518166f2]:after,.input-group-sm .custom-switch .custom-control-label[data-v-518166f2]:after{top:calc(.21875rem + 2px);left:calc(-1.96875rem + 2px);width:calc(.875rem - 4px);height:calc(.875rem - 4px);border-radius:.4375rem;background-size:50% 50%}.custom-switch.b-custom-control-sm .custom-control-input:checked~.custom-control-label[data-v-518166f2]:after,.input-group-sm .custom-switch .custom-control-input:checked~.custom-control-label[data-v-518166f2]:after{-webkit-transform:translateX(.65625rem);transform:translateX(.65625rem)}.input-group>.input-group-append:last-child>.btn-group:not(:last-child):not(.dropdown-toggle)>.btn[data-v-518166f2],.input-group>.input-group-append:not(:last-child)>.btn-group>.btn[data-v-518166f2],.input-group>.input-group-prepend>.btn-group>.btn[data-v-518166f2]{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn-group>.btn[data-v-518166f2],.input-group>.input-group-prepend:first-child>.btn-group:not(:first-child)>.btn[data-v-518166f2],.input-group>.input-group-prepend:not(:first-child)>.btn-group>.btn[data-v-518166f2]{border-top-left-radius:0;border-bottom-left-radius:0}.b-custom-control-lg.custom-file[data-v-518166f2],.b-custom-control-lg .custom-file-input[data-v-518166f2],.b-custom-control-lg .custom-file-label[data-v-518166f2],.input-group-lg.custom-file[data-v-518166f2],.input-group-lg .custom-file-input[data-v-518166f2],.input-group-lg .custom-file-label[data-v-518166f2]{font-size:20px;font-size:1.25rem;height:calc(1.5em + 1rem + 2px)}.b-custom-control-lg .custom-file-label[data-v-518166f2],.b-custom-control-lg .custom-file-label[data-v-518166f2]:after,.input-group-lg .custom-file-label[data-v-518166f2],.input-group-lg .custom-file-label[data-v-518166f2]:after{padding:8px 16px;padding:.5rem 1rem;line-height:1.5}.b-custom-control-lg .custom-file-label[data-v-518166f2],.input-group-lg .custom-file-label[data-v-518166f2]{border-radius:.3rem}.b-custom-control-lg .custom-file-label[data-v-518166f2]:after,.input-group-lg .custom-file-label[data-v-518166f2]:after{font-size:inherit;height:calc(1.5em + 1rem);border-radius:0 .3rem .3rem 0}.b-custom-control-sm.custom-file[data-v-518166f2],.b-custom-control-sm .custom-file-input[data-v-518166f2],.b-custom-control-sm .custom-file-label[data-v-518166f2],.input-group-sm.custom-file[data-v-518166f2],.input-group-sm .custom-file-input[data-v-518166f2],.input-group-sm .custom-file-label[data-v-518166f2]{font-size:14px;font-size:.875rem;height:calc(1.5em + .5rem + 2px)}.b-custom-control-sm .custom-file-label[data-v-518166f2],.b-custom-control-sm .custom-file-label[data-v-518166f2]:after,.input-group-sm .custom-file-label[data-v-518166f2],.input-group-sm .custom-file-label[data-v-518166f2]:after{padding:4px 8px;padding:.25rem .5rem;line-height:1.5}.b-custom-control-sm .custom-file-label[data-v-518166f2],.input-group-sm .custom-file-label[data-v-518166f2]{border-radius:.2rem}.b-custom-control-sm .custom-file-label[data-v-518166f2]:after,.input-group-sm .custom-file-label[data-v-518166f2]:after{font-size:inherit;height:calc(1.5em + .5rem);border-radius:0 .2rem .2rem 0}.form-control.is-invalid[data-v-518166f2],.form-control.is-valid[data-v-518166f2],.was-validated .form-control[data-v-518166f2]:invalid,.was-validated .form-control[data-v-518166f2]:valid{background-position:right calc(.375em + .1875rem) center}input[type=color].form-control[data-v-518166f2]{height:calc(1.5em + .75rem + 2px);padding:2px 4px;padding:.125rem .25rem}.input-group-sm input[type=color].form-control[data-v-518166f2],input[type=color].form-control.form-control-sm[data-v-518166f2]{height:calc(1.5em + .5rem + 2px);padding:2px 4px;padding:.125rem .25rem}.input-group-lg input[type=color].form-control[data-v-518166f2],input[type=color].form-control.form-control-lg[data-v-518166f2]{height:calc(1.5em + 1rem + 2px);padding:2px 4px;padding:.125rem .25rem}input[type=color].form-control[data-v-518166f2]:disabled{background-color:#adb5bd;opacity:.65}.input-group>.custom-range[data-v-518166f2]{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-range[data-v-518166f2],.input-group>.custom-range+.custom-file[data-v-518166f2],.input-group>.custom-range+.custom-range[data-v-518166f2],.input-group>.custom-range+.custom-select[data-v-518166f2],.input-group>.custom-range+.form-control[data-v-518166f2],.input-group>.custom-range+.form-control-plaintext[data-v-518166f2],.input-group>.custom-select+.custom-range[data-v-518166f2],.input-group>.form-control+.custom-range[data-v-518166f2],.input-group>.form-control-plaintext+.custom-range[data-v-518166f2]{margin-left:-1px}.input-group>.custom-range[data-v-518166f2]:focus{z-index:3}.input-group>.custom-range[data-v-518166f2]:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-range[data-v-518166f2]:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-range[data-v-518166f2]{padding:0 12px;padding:0 .75rem;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;height:calc(1.5em + .75rem + 2px);border-radius:.25rem;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.input-group>.custom-range[data-v-518166f2]{-webkit-transition:none;transition:none}}.input-group>.custom-range[data-v-518166f2]:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.input-group>.custom-range[data-v-518166f2]:disabled,.input-group>.custom-range[readonly][data-v-518166f2]{background-color:#e9ecef}.input-group-lg>.custom-range[data-v-518166f2]{height:calc(1.5em + 1rem + 2px);padding:0 16px;padding:0 1rem;border-radius:.3rem}.input-group-sm>.custom-range[data-v-518166f2]{height:calc(1.5em + .5rem + 2px);padding:0 8px;padding:0 .5rem;border-radius:.2rem}.input-group .custom-range.is-valid[data-v-518166f2],.was-validated .input-group .custom-range[data-v-518166f2]:valid{border-color:#28a745}.input-group .custom-range.is-valid[data-v-518166f2]:focus,.was-validated .input-group .custom-range[data-v-518166f2]:valid:focus{border-color:#28a745;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-range.is-valid[data-v-518166f2]:focus::-webkit-slider-thumb,.was-validated .custom-range[data-v-518166f2]:valid:focus::-webkit-slider-thumb{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac;box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid[data-v-518166f2]:focus::-moz-range-thumb,.was-validated .custom-range[data-v-518166f2]:valid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid[data-v-518166f2]:focus::-ms-thumb,.was-validated .custom-range[data-v-518166f2]:valid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid[data-v-518166f2]::-webkit-slider-thumb,.was-validated .custom-range[data-v-518166f2]:valid::-webkit-slider-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid[data-v-518166f2]::-webkit-slider-thumb:active,.was-validated .custom-range[data-v-518166f2]:valid::-webkit-slider-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid[data-v-518166f2]::-webkit-slider-runnable-track,.was-validated .custom-range[data-v-518166f2]:valid::-webkit-slider-runnable-track{background-color:rgba(40,167,69,.35)}.custom-range.is-valid[data-v-518166f2]::-moz-range-thumb,.was-validated .custom-range[data-v-518166f2]:valid::-moz-range-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid[data-v-518166f2]::-moz-range-thumb:active,.was-validated .custom-range[data-v-518166f2]:valid::-moz-range-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid[data-v-518166f2]::-moz-range-track,.was-validated .custom-range[data-v-518166f2]:valid::-moz-range-track{background:rgba(40,167,69,.35)}.custom-range.is-valid~.valid-feedback[data-v-518166f2],.custom-range.is-valid~.valid-tooltip[data-v-518166f2],.was-validated .custom-range:valid~.valid-feedback[data-v-518166f2],.was-validated .custom-range:valid~.valid-tooltip[data-v-518166f2]{display:block}.custom-range.is-valid[data-v-518166f2]::-ms-thumb,.was-validated .custom-range[data-v-518166f2]:valid::-ms-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid[data-v-518166f2]::-ms-thumb:active,.was-validated .custom-range[data-v-518166f2]:valid::-ms-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid[data-v-518166f2]::-ms-track-lower,.custom-range.is-valid[data-v-518166f2]::-ms-track-upper,.was-validated .custom-range[data-v-518166f2]:valid::-ms-track-lower,.was-validated .custom-range[data-v-518166f2]:valid::-ms-track-upper{background:rgba(40,167,69,.35)}.input-group .custom-range.is-invalid[data-v-518166f2],.was-validated .input-group .custom-range[data-v-518166f2]:invalid{border-color:#dc3545}.input-group .custom-range.is-invalid[data-v-518166f2]:focus,.was-validated .input-group .custom-range[data-v-518166f2]:invalid:focus{border-color:#dc3545;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-range.is-invalid[data-v-518166f2]:focus::-webkit-slider-thumb,.was-validated .custom-range[data-v-518166f2]:invalid:focus::-webkit-slider-thumb{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1;box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid[data-v-518166f2]:focus::-moz-range-thumb,.was-validated .custom-range[data-v-518166f2]:invalid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid[data-v-518166f2]:focus::-ms-thumb,.was-validated .custom-range[data-v-518166f2]:invalid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid[data-v-518166f2]::-webkit-slider-thumb,.was-validated .custom-range[data-v-518166f2]:invalid::-webkit-slider-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid[data-v-518166f2]::-webkit-slider-thumb:active,.was-validated .custom-range[data-v-518166f2]:invalid::-webkit-slider-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid[data-v-518166f2]::-webkit-slider-runnable-track,.was-validated .custom-range[data-v-518166f2]:invalid::-webkit-slider-runnable-track{background-color:rgba(220,53,69,.35)}.custom-range.is-invalid[data-v-518166f2]::-moz-range-thumb,.was-validated .custom-range[data-v-518166f2]:invalid::-moz-range-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid[data-v-518166f2]::-moz-range-thumb:active,.was-validated .custom-range[data-v-518166f2]:invalid::-moz-range-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid[data-v-518166f2]::-moz-range-track,.was-validated .custom-range[data-v-518166f2]:invalid::-moz-range-track{background:rgba(220,53,69,.35)}.custom-range.is-invalid~.invalid-feedback[data-v-518166f2],.custom-range.is-invalid~.invalid-tooltip[data-v-518166f2],.was-validated .custom-range:invalid~.invalid-feedback[data-v-518166f2],.was-validated .custom-range:invalid~.invalid-tooltip[data-v-518166f2]{display:block}.custom-range.is-invalid[data-v-518166f2]::-ms-thumb,.was-validated .custom-range[data-v-518166f2]:invalid::-ms-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid[data-v-518166f2]::-ms-thumb:active,.was-validated .custom-range[data-v-518166f2]:invalid::-ms-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid[data-v-518166f2]::-ms-track-lower,.custom-range.is-invalid[data-v-518166f2]::-ms-track-upper,.was-validated .custom-range[data-v-518166f2]:invalid::-ms-track-lower,.was-validated .custom-range[data-v-518166f2]:invalid::-ms-track-upper{background:rgba(220,53,69,.35)}.custom-radio.b-custom-control-lg[data-v-518166f2],.input-group-lg .custom-radio[data-v-518166f2]{font-size:20px;font-size:1.25rem;line-height:1.5;padding-left:30px;padding-left:1.875rem}.custom-radio.b-custom-control-lg .custom-control-label[data-v-518166f2]:before,.input-group-lg .custom-radio .custom-control-label[data-v-518166f2]:before{top:5px;top:.3125rem;left:-30px;left:-1.875rem;width:20px;width:1.25rem;height:20px;height:1.25rem;border-radius:50%}.custom-radio.b-custom-control-lg .custom-control-label[data-v-518166f2]:after,.input-group-lg .custom-radio .custom-control-label[data-v-518166f2]:after{top:5px;top:.3125rem;left:-30px;left:-1.875rem;width:20px;width:1.25rem;height:20px;height:1.25rem;background:no-repeat 50%/50% 50%}.custom-radio.b-custom-control-sm[data-v-518166f2],.input-group-sm .custom-radio[data-v-518166f2]{font-size:14px;font-size:.875rem;line-height:1.5;padding-left:21px;padding-left:1.3125rem}.custom-radio.b-custom-control-sm .custom-control-label[data-v-518166f2]:before,.input-group-sm .custom-radio .custom-control-label[data-v-518166f2]:before{top:3.5px;top:.21875rem;left:-21px;left:-1.3125rem;width:14px;width:.875rem;height:14px;height:.875rem;border-radius:50%}.custom-radio.b-custom-control-sm .custom-control-label[data-v-518166f2]:after,.input-group-sm .custom-radio .custom-control-label[data-v-518166f2]:after{top:3.5px;top:.21875rem;left:-21px;left:-1.3125rem;width:14px;width:.875rem;height:14px;height:.875rem;background:no-repeat 50%/50% 50%}.modal-backdrop[data-v-518166f2]{opacity:.5}.popover.b-popover[data-v-518166f2]{display:block;opacity:1}.popover.b-popover.fade[data-v-518166f2]:not(.show){opacity:0}.popover.b-popover.show[data-v-518166f2]{opacity:1}.b-popover-primary.popover[data-v-518166f2]{background-color:#cce5ff;border-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:before,.b-popover-primary.bs-popover-top>.arrow[data-v-518166f2]:before{border-top-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:after,.b-popover-primary.bs-popover-top>.arrow[data-v-518166f2]:after{border-top-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:before,.b-popover-primary.bs-popover-right>.arrow[data-v-518166f2]:before{border-right-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:after,.b-popover-primary.bs-popover-right>.arrow[data-v-518166f2]:after{border-right-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:before,.b-popover-primary.bs-popover-bottom>.arrow[data-v-518166f2]:before{border-bottom-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header[data-v-518166f2]:before,.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:after,.b-popover-primary.bs-popover-bottom .popover-header[data-v-518166f2]:before,.b-popover-primary.bs-popover-bottom>.arrow[data-v-518166f2]:after{border-bottom-color:#bdddff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:before,.b-popover-primary.bs-popover-left>.arrow[data-v-518166f2]:before{border-left-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:after,.b-popover-primary.bs-popover-left>.arrow[data-v-518166f2]:after{border-left-color:#cce5ff}.b-popover-primary .popover-header[data-v-518166f2]{color:#212529;background-color:#bdddff;border-bottom-color:#a3d0ff}.b-popover-primary .popover-body[data-v-518166f2]{color:#004085}.b-popover-secondary.popover[data-v-518166f2]{background-color:#e2e3e5;border-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:before,.b-popover-secondary.bs-popover-top>.arrow[data-v-518166f2]:before{border-top-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:after,.b-popover-secondary.bs-popover-top>.arrow[data-v-518166f2]:after{border-top-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:before,.b-popover-secondary.bs-popover-right>.arrow[data-v-518166f2]:before{border-right-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:after,.b-popover-secondary.bs-popover-right>.arrow[data-v-518166f2]:after{border-right-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:before,.b-popover-secondary.bs-popover-bottom>.arrow[data-v-518166f2]:before{border-bottom-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header[data-v-518166f2]:before,.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:after,.b-popover-secondary.bs-popover-bottom .popover-header[data-v-518166f2]:before,.b-popover-secondary.bs-popover-bottom>.arrow[data-v-518166f2]:after{border-bottom-color:#dadbde}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:before,.b-popover-secondary.bs-popover-left>.arrow[data-v-518166f2]:before{border-left-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:after,.b-popover-secondary.bs-popover-left>.arrow[data-v-518166f2]:after{border-left-color:#e2e3e5}.b-popover-secondary .popover-header[data-v-518166f2]{color:#212529;background-color:#dadbde;border-bottom-color:#ccced2}.b-popover-secondary .popover-body[data-v-518166f2]{color:#383d41}.b-popover-success.popover[data-v-518166f2]{background-color:#d4edda;border-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:before,.b-popover-success.bs-popover-top>.arrow[data-v-518166f2]:before{border-top-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:after,.b-popover-success.bs-popover-top>.arrow[data-v-518166f2]:after{border-top-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:before,.b-popover-success.bs-popover-right>.arrow[data-v-518166f2]:before{border-right-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:after,.b-popover-success.bs-popover-right>.arrow[data-v-518166f2]:after{border-right-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:before,.b-popover-success.bs-popover-bottom>.arrow[data-v-518166f2]:before{border-bottom-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header[data-v-518166f2]:before,.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:after,.b-popover-success.bs-popover-bottom .popover-header[data-v-518166f2]:before,.b-popover-success.bs-popover-bottom>.arrow[data-v-518166f2]:after{border-bottom-color:#c9e8d1}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:before,.b-popover-success.bs-popover-left>.arrow[data-v-518166f2]:before{border-left-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:after,.b-popover-success.bs-popover-left>.arrow[data-v-518166f2]:after{border-left-color:#d4edda}.b-popover-success .popover-header[data-v-518166f2]{color:#212529;background-color:#c9e8d1;border-bottom-color:#b7e1c1}.b-popover-success .popover-body[data-v-518166f2]{color:#155724}.b-popover-info.popover[data-v-518166f2]{background-color:#d1ecf1;border-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:before,.b-popover-info.bs-popover-top>.arrow[data-v-518166f2]:before{border-top-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:after,.b-popover-info.bs-popover-top>.arrow[data-v-518166f2]:after{border-top-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:before,.b-popover-info.bs-popover-right>.arrow[data-v-518166f2]:before{border-right-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:after,.b-popover-info.bs-popover-right>.arrow[data-v-518166f2]:after{border-right-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:before,.b-popover-info.bs-popover-bottom>.arrow[data-v-518166f2]:before{border-bottom-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header[data-v-518166f2]:before,.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:after,.b-popover-info.bs-popover-bottom .popover-header[data-v-518166f2]:before,.b-popover-info.bs-popover-bottom>.arrow[data-v-518166f2]:after{border-bottom-color:#c5e7ed}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:before,.b-popover-info.bs-popover-left>.arrow[data-v-518166f2]:before{border-left-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:after,.b-popover-info.bs-popover-left>.arrow[data-v-518166f2]:after{border-left-color:#d1ecf1}.b-popover-info .popover-header[data-v-518166f2]{color:#212529;background-color:#c5e7ed;border-bottom-color:#b2dfe7}.b-popover-info .popover-body[data-v-518166f2]{color:#0c5460}.b-popover-warning.popover[data-v-518166f2]{background-color:#fff3cd;border-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:before,.b-popover-warning.bs-popover-top>.arrow[data-v-518166f2]:before{border-top-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:after,.b-popover-warning.bs-popover-top>.arrow[data-v-518166f2]:after{border-top-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:before,.b-popover-warning.bs-popover-right>.arrow[data-v-518166f2]:before{border-right-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:after,.b-popover-warning.bs-popover-right>.arrow[data-v-518166f2]:after{border-right-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:before,.b-popover-warning.bs-popover-bottom>.arrow[data-v-518166f2]:before{border-bottom-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header[data-v-518166f2]:before,.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:after,.b-popover-warning.bs-popover-bottom .popover-header[data-v-518166f2]:before,.b-popover-warning.bs-popover-bottom>.arrow[data-v-518166f2]:after{border-bottom-color:#ffefbe}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:before,.b-popover-warning.bs-popover-left>.arrow[data-v-518166f2]:before{border-left-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:after,.b-popover-warning.bs-popover-left>.arrow[data-v-518166f2]:after{border-left-color:#fff3cd}.b-popover-warning .popover-header[data-v-518166f2]{color:#212529;background-color:#ffefbe;border-bottom-color:#ffe9a4}.b-popover-warning .popover-body[data-v-518166f2]{color:#856404}.b-popover-danger.popover[data-v-518166f2]{background-color:#f8d7da;border-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:before,.b-popover-danger.bs-popover-top>.arrow[data-v-518166f2]:before{border-top-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:after,.b-popover-danger.bs-popover-top>.arrow[data-v-518166f2]:after{border-top-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:before,.b-popover-danger.bs-popover-right>.arrow[data-v-518166f2]:before{border-right-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:after,.b-popover-danger.bs-popover-right>.arrow[data-v-518166f2]:after{border-right-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:before,.b-popover-danger.bs-popover-bottom>.arrow[data-v-518166f2]:before{border-bottom-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header[data-v-518166f2]:before,.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:after,.b-popover-danger.bs-popover-bottom .popover-header[data-v-518166f2]:before,.b-popover-danger.bs-popover-bottom>.arrow[data-v-518166f2]:after{border-bottom-color:#f6cace}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:before,.b-popover-danger.bs-popover-left>.arrow[data-v-518166f2]:before{border-left-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:after,.b-popover-danger.bs-popover-left>.arrow[data-v-518166f2]:after{border-left-color:#f8d7da}.b-popover-danger .popover-header[data-v-518166f2]{color:#212529;background-color:#f6cace;border-bottom-color:#f2b4ba}.b-popover-danger .popover-body[data-v-518166f2]{color:#721c24}.b-popover-light.popover[data-v-518166f2]{background-color:#fefefe;border-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:before,.b-popover-light.bs-popover-top>.arrow[data-v-518166f2]:before{border-top-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:after,.b-popover-light.bs-popover-top>.arrow[data-v-518166f2]:after{border-top-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:before,.b-popover-light.bs-popover-right>.arrow[data-v-518166f2]:before{border-right-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:after,.b-popover-light.bs-popover-right>.arrow[data-v-518166f2]:after{border-right-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:before,.b-popover-light.bs-popover-bottom>.arrow[data-v-518166f2]:before{border-bottom-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header[data-v-518166f2]:before,.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:after,.b-popover-light.bs-popover-bottom .popover-header[data-v-518166f2]:before,.b-popover-light.bs-popover-bottom>.arrow[data-v-518166f2]:after{border-bottom-color:#f6f6f6}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:before,.b-popover-light.bs-popover-left>.arrow[data-v-518166f2]:before{border-left-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:after,.b-popover-light.bs-popover-left>.arrow[data-v-518166f2]:after{border-left-color:#fefefe}.b-popover-light .popover-header[data-v-518166f2]{color:#212529;background-color:#f6f6f6;border-bottom-color:#eaeaea}.b-popover-light .popover-body[data-v-518166f2]{color:#818182}.b-popover-dark.popover[data-v-518166f2]{background-color:#d6d8d9;border-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:before,.b-popover-dark.bs-popover-top>.arrow[data-v-518166f2]:before{border-top-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow[data-v-518166f2]:after,.b-popover-dark.bs-popover-top>.arrow[data-v-518166f2]:after{border-top-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:before,.b-popover-dark.bs-popover-right>.arrow[data-v-518166f2]:before{border-right-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow[data-v-518166f2]:after,.b-popover-dark.bs-popover-right>.arrow[data-v-518166f2]:after{border-right-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:before,.b-popover-dark.bs-popover-bottom>.arrow[data-v-518166f2]:before{border-bottom-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header[data-v-518166f2]:before,.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow[data-v-518166f2]:after,.b-popover-dark.bs-popover-bottom .popover-header[data-v-518166f2]:before,.b-popover-dark.bs-popover-bottom>.arrow[data-v-518166f2]:after{border-bottom-color:#ced0d2}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:before,.b-popover-dark.bs-popover-left>.arrow[data-v-518166f2]:before{border-left-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow[data-v-518166f2]:after,.b-popover-dark.bs-popover-left>.arrow[data-v-518166f2]:after{border-left-color:#d6d8d9}.b-popover-dark .popover-header[data-v-518166f2]{color:#212529;background-color:#ced0d2;border-bottom-color:#c1c4c5}.b-popover-dark .popover-body[data-v-518166f2]{color:#1b1e21}.table.b-table.b-table-fixed[data-v-518166f2]{table-layout:fixed}.table.b-table.b-table-no-border-collapse[data-v-518166f2]{border-collapse:separate;border-spacing:0}.table.b-table[aria-busy=true][data-v-518166f2]{opacity:.55}.table.b-table>tbody>tr.b-table-details>td[data-v-518166f2]{border-top:none!important}.table.b-table>caption[data-v-518166f2]{caption-side:bottom}.table.b-table.b-table-caption-top>caption[data-v-518166f2]{caption-side:top!important}.table.b-table>tbody>.table-active[data-v-518166f2],.table.b-table>tbody>.table-active>td[data-v-518166f2],.table.b-table>tbody>.table-active>th[data-v-518166f2]{background-color:rgba(0,0,0,.075)}.table.b-table.table-hover>tbody>tr.table-active:hover td[data-v-518166f2],.table.b-table.table-hover>tbody>tr.table-active:hover th[data-v-518166f2]{color:#212529;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.075)),to(rgba(0,0,0,.075)));background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table>tbody>.bg-active[data-v-518166f2],.table.b-table>tbody>.bg-active>td[data-v-518166f2],.table.b-table>tbody>.bg-active>th[data-v-518166f2]{background-color:hsla(0,0%,100%,.075)!important}.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover td[data-v-518166f2],.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover th[data-v-518166f2]{color:#fff;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.075)),to(hsla(0,0%,100%,.075)));background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}.b-table-sticky-header[data-v-518166f2],.table-responsive[data-v-518166f2],[class*=table-responsive-][data-v-518166f2]{margin-bottom:16px;margin-bottom:1rem}.b-table-sticky-header>.table[data-v-518166f2],.table-responsive>.table[data-v-518166f2],[class*=table-responsive-]>.table[data-v-518166f2]{margin-bottom:0}.b-table-sticky-header[data-v-518166f2]{overflow-y:auto;max-height:300px}@media print{.b-table-sticky-header[data-v-518166f2]{overflow-y:visible!important;max-height:none!important}}@supports ((position:-webkit-sticky) or (position:sticky)){.b-table-sticky-header>.table.b-table>thead>tr>th[data-v-518166f2]{position:-webkit-sticky;position:sticky;top:0;z-index:2}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column[data-v-518166f2],.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column[data-v-518166f2],.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column[data-v-518166f2],.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column[data-v-518166f2],.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column[data-v-518166f2],.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column[data-v-518166f2],[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column[data-v-518166f2],[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column[data-v-518166f2],[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column[data-v-518166f2]{position:-webkit-sticky;position:sticky;left:0}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column[data-v-518166f2],.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column[data-v-518166f2],[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column[data-v-518166f2]{z-index:5}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column[data-v-518166f2],.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column[data-v-518166f2],.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column[data-v-518166f2],.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column[data-v-518166f2],[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column[data-v-518166f2],[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column[data-v-518166f2]{z-index:2}.table.b-table>tbody>tr>.table-b-table-default[data-v-518166f2],.table.b-table>tfoot>tr>.table-b-table-default[data-v-518166f2],.table.b-table>thead>tr>.table-b-table-default[data-v-518166f2]{color:#212529;background-color:#fff}.table.b-table.table-dark>tbody>tr>.bg-b-table-default[data-v-518166f2],.table.b-table.table-dark>tfoot>tr>.bg-b-table-default[data-v-518166f2],.table.b-table.table-dark>thead>tr>.bg-b-table-default[data-v-518166f2]{color:#fff;background-color:#343a40}.table.b-table.table-striped>tbody>tr:nth-of-type(odd)>.table-b-table-default[data-v-518166f2]{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.05)),to(rgba(0,0,0,.05)));background-image:linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05));background-repeat:no-repeat}.table.b-table.table-striped.table-dark>tbody>tr:nth-of-type(odd)>.bg-b-table-default[data-v-518166f2]{background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.05)),to(hsla(0,0%,100%,.05)));background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,.05));background-repeat:no-repeat}.table.b-table.table-hover>tbody>tr:hover>.table-b-table-default[data-v-518166f2]{color:#212529;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.075)),to(rgba(0,0,0,.075)));background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table.table-hover.table-dark>tbody>tr:hover>.bg-b-table-default[data-v-518166f2]{color:#fff;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.075)),to(hsla(0,0%,100%,.075)));background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}}.table.b-table>tfoot>tr>[aria-sort][data-v-518166f2],.table.b-table>thead>tr>[aria-sort][data-v-518166f2]{cursor:pointer;background-image:none;background-repeat:no-repeat;background-size:.65em 1em}.table.b-table>tfoot>tr>[aria-sort][data-v-518166f2]:not(.b-table-sort-icon-left),.table.b-table>thead>tr>[aria-sort][data-v-518166f2]:not(.b-table-sort-icon-left){background-position:right 6px center;background-position:right .375rem center;padding-right:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort].b-table-sort-icon-left[data-v-518166f2],.table.b-table>thead>tr>[aria-sort].b-table-sort-icon-left[data-v-518166f2]{background-position:left 6px center;background-position:left .375rem center;padding-left:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort=none][data-v-518166f2],.table.b-table>thead>tr>[aria-sort=none][data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=ascending][data-v-518166f2],.table.b-table>thead>tr>[aria-sort=ascending][data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=descending][data-v-518166f2],.table.b-table>thead>tr>[aria-sort=descending][data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=none][data-v-518166f2],.table.b-table.table-dark>thead>tr>[aria-sort=none][data-v-518166f2],.table.b-table>.thead-dark>tr>[aria-sort=none][data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=ascending][data-v-518166f2],.table.b-table.table-dark>thead>tr>[aria-sort=ascending][data-v-518166f2],.table.b-table>.thead-dark>tr>[aria-sort=ascending][data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=descending][data-v-518166f2],.table.b-table.table-dark>thead>tr>[aria-sort=descending][data-v-518166f2],.table.b-table>.thead-dark>tr>[aria-sort=descending][data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=none][data-v-518166f2],.table.b-table>thead>tr>.table-dark[aria-sort=none][data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=ascending][data-v-518166f2],.table.b-table>thead>tr>.table-dark[aria-sort=ascending][data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=descending][data-v-518166f2],.table.b-table>thead>tr>.table-dark[aria-sort=descending][data-v-518166f2]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-sm>tfoot>tr>[aria-sort][data-v-518166f2]:not(.b-table-sort-icon-left),.table.b-table.table-sm>thead>tr>[aria-sort][data-v-518166f2]:not(.b-table-sort-icon-left){background-position:right 2.4px center;background-position:right .15rem center;padding-right:calc(.3rem + .65em)}.table.b-table.table-sm>tfoot>tr>[aria-sort].b-table-sort-icon-left[data-v-518166f2],.table.b-table.table-sm>thead>tr>[aria-sort].b-table-sort-icon-left[data-v-518166f2]{background-position:left 2.4px center;background-position:left .15rem center;padding-left:calc(.3rem + .65em)}.table.b-table.b-table-selectable>tbody>tr[data-v-518166f2]{cursor:pointer}.table.b-table.b-table-selectable.b-table-selecting.b-table-select-range>tbody>tr[data-v-518166f2]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:575.98px){.table.b-table.b-table-stacked-sm[data-v-518166f2]{display:block;width:100%}.table.b-table.b-table-stacked-sm>caption[data-v-518166f2],.table.b-table.b-table-stacked-sm>tbody[data-v-518166f2],.table.b-table.b-table-stacked-sm>tbody>tr[data-v-518166f2],.table.b-table.b-table-stacked-sm>tbody>tr>td[data-v-518166f2],.table.b-table.b-table-stacked-sm>tbody>tr>th[data-v-518166f2]{display:block}.table.b-table.b-table-stacked-sm>tfoot[data-v-518166f2],.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-top-row[data-v-518166f2],.table.b-table.b-table-stacked-sm>thead[data-v-518166f2],.table.b-table.b-table-stacked-sm>thead>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-sm>thead>tr.b-table-top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked-sm>caption[data-v-518166f2]{caption-side:top!important}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label][data-v-518166f2]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label][data-v-518166f2]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]>div[data-v-518166f2]{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr.bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-sm>tbody>tr.top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked-sm>tbody>tr[data-v-518166f2]>:first-child,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+td[data-v-518166f2],.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+th[data-v-518166f2]{border-top-width:3px}}@media (max-width:767.98px){.table.b-table.b-table-stacked-md[data-v-518166f2]{display:block;width:100%}.table.b-table.b-table-stacked-md>caption[data-v-518166f2],.table.b-table.b-table-stacked-md>tbody[data-v-518166f2],.table.b-table.b-table-stacked-md>tbody>tr[data-v-518166f2],.table.b-table.b-table-stacked-md>tbody>tr>td[data-v-518166f2],.table.b-table.b-table-stacked-md>tbody>tr>th[data-v-518166f2]{display:block}.table.b-table.b-table-stacked-md>tfoot[data-v-518166f2],.table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row[data-v-518166f2],.table.b-table.b-table-stacked-md>thead[data-v-518166f2],.table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-md>thead>tr.b-table-top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked-md>caption[data-v-518166f2]{caption-side:top!important}.table.b-table.b-table-stacked-md>tbody>tr>[data-label][data-v-518166f2]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-md>tbody>tr>[data-label][data-v-518166f2]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]>div[data-v-518166f2]{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-md>tbody>tr.bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-md>tbody>tr.top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked-md>tbody>tr[data-v-518166f2]>:first-child,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+td[data-v-518166f2],.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+th[data-v-518166f2]{border-top-width:3px}}@media (max-width:991.98px){.table.b-table.b-table-stacked-lg[data-v-518166f2]{display:block;width:100%}.table.b-table.b-table-stacked-lg>caption[data-v-518166f2],.table.b-table.b-table-stacked-lg>tbody[data-v-518166f2],.table.b-table.b-table-stacked-lg>tbody>tr[data-v-518166f2],.table.b-table.b-table-stacked-lg>tbody>tr>td[data-v-518166f2],.table.b-table.b-table-stacked-lg>tbody>tr>th[data-v-518166f2]{display:block}.table.b-table.b-table-stacked-lg>tfoot[data-v-518166f2],.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-top-row[data-v-518166f2],.table.b-table.b-table-stacked-lg>thead[data-v-518166f2],.table.b-table.b-table-stacked-lg>thead>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-lg>thead>tr.b-table-top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked-lg>caption[data-v-518166f2]{caption-side:top!important}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label][data-v-518166f2]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label][data-v-518166f2]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]>div[data-v-518166f2]{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr.bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-lg>tbody>tr.top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked-lg>tbody>tr[data-v-518166f2]>:first-child,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+td[data-v-518166f2],.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+th[data-v-518166f2]{border-top-width:3px}}@media (max-width:1199.98px){.table.b-table.b-table-stacked-xl[data-v-518166f2]{display:block;width:100%}.table.b-table.b-table-stacked-xl>caption[data-v-518166f2],.table.b-table.b-table-stacked-xl>tbody[data-v-518166f2],.table.b-table.b-table-stacked-xl>tbody>tr[data-v-518166f2],.table.b-table.b-table-stacked-xl>tbody>tr>td[data-v-518166f2],.table.b-table.b-table-stacked-xl>tbody>tr>th[data-v-518166f2]{display:block}.table.b-table.b-table-stacked-xl>tfoot[data-v-518166f2],.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-top-row[data-v-518166f2],.table.b-table.b-table-stacked-xl>thead[data-v-518166f2],.table.b-table.b-table-stacked-xl>thead>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-xl>thead>tr.b-table-top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked-xl>caption[data-v-518166f2]{caption-side:top!important}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label][data-v-518166f2]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label][data-v-518166f2]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]>div[data-v-518166f2]{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr.bottom-row[data-v-518166f2],.table.b-table.b-table-stacked-xl>tbody>tr.top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked-xl>tbody>tr[data-v-518166f2]>:first-child,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+td[data-v-518166f2],.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+th[data-v-518166f2]{border-top-width:3px}}.table.b-table.b-table-stacked[data-v-518166f2]{display:block;width:100%}.table.b-table.b-table-stacked>caption[data-v-518166f2],.table.b-table.b-table-stacked>tbody[data-v-518166f2],.table.b-table.b-table-stacked>tbody>tr[data-v-518166f2],.table.b-table.b-table-stacked>tbody>tr>td[data-v-518166f2],.table.b-table.b-table-stacked>tbody>tr>th[data-v-518166f2]{display:block}.table.b-table.b-table-stacked>tfoot[data-v-518166f2],.table.b-table.b-table-stacked>tfoot>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked>tfoot>tr.b-table-top-row[data-v-518166f2],.table.b-table.b-table-stacked>thead[data-v-518166f2],.table.b-table.b-table-stacked>thead>tr.b-table-bottom-row[data-v-518166f2],.table.b-table.b-table-stacked>thead>tr.b-table-top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked>caption[data-v-518166f2]{caption-side:top!important}.table.b-table.b-table-stacked>tbody>tr>[data-label][data-v-518166f2]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 8px 0 0;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked>tbody>tr>[data-label][data-v-518166f2]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked>tbody>tr>[data-label]>div[data-v-518166f2]{display:inline-block;width:60%;padding:0 0 0 8px;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked>tbody>tr.bottom-row[data-v-518166f2],.table.b-table.b-table-stacked>tbody>tr.top-row[data-v-518166f2]{display:none}.table.b-table.b-table-stacked>tbody>tr[data-v-518166f2]>:first-child,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+td[data-v-518166f2],.table.b-table.b-table-stacked>tbody>tr>[rowspan]+th[data-v-518166f2]{border-top-width:3px}.b-toast[data-v-518166f2]{display:block;position:relative;max-width:350px;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-clip:padding-box;z-index:1;border-radius:.25rem}.b-toast .toast[data-v-518166f2]{background-color:hsla(0,0%,100%,.85)}.b-toast[data-v-518166f2]:not(:last-child){margin-bottom:12px;margin-bottom:.75rem}.b-toast.b-toast-solid .toast[data-v-518166f2]{background-color:#fff}.b-toast .toast[data-v-518166f2]{opacity:1}.b-toast .toast.fade[data-v-518166f2]:not(.show){opacity:0}.b-toast .toast .toast-body[data-v-518166f2]{display:block}.b-toast-primary .toast[data-v-518166f2]{background-color:rgba(230,242,255,.85);border-color:rgba(184,218,255,.85);color:#004085}.b-toast-primary .toast .toast-header[data-v-518166f2]{color:#004085;background-color:rgba(204,229,255,.85);border-bottom-color:rgba(184,218,255,.85)}.b-toast-primary.b-toast-solid .toast[data-v-518166f2]{background-color:#e6f2ff}.b-toast-secondary .toast[data-v-518166f2]{background-color:rgba(239,240,241,.85);border-color:rgba(214,216,219,.85);color:#383d41}.b-toast-secondary .toast .toast-header[data-v-518166f2]{color:#383d41;background-color:rgba(226,227,229,.85);border-bottom-color:rgba(214,216,219,.85)}.b-toast-secondary.b-toast-solid .toast[data-v-518166f2]{background-color:#eff0f1}.b-toast-success .toast[data-v-518166f2]{background-color:rgba(230,245,233,.85);border-color:rgba(195,230,203,.85);color:#155724}.b-toast-success .toast .toast-header[data-v-518166f2]{color:#155724;background-color:rgba(212,237,218,.85);border-bottom-color:rgba(195,230,203,.85)}.b-toast-success.b-toast-solid .toast[data-v-518166f2]{background-color:#e6f5e9}.b-toast-info .toast[data-v-518166f2]{background-color:rgba(229,244,247,.85);border-color:rgba(190,229,235,.85);color:#0c5460}.b-toast-info .toast .toast-header[data-v-518166f2]{color:#0c5460;background-color:rgba(209,236,241,.85);border-bottom-color:rgba(190,229,235,.85)}.b-toast-info.b-toast-solid .toast[data-v-518166f2]{background-color:#e5f4f7}.b-toast-warning .toast[data-v-518166f2]{background-color:rgba(255,249,231,.85);border-color:rgba(255,238,186,.85);color:#856404}.b-toast-warning .toast .toast-header[data-v-518166f2]{color:#856404;background-color:rgba(255,243,205,.85);border-bottom-color:rgba(255,238,186,.85)}.b-toast-warning.b-toast-solid .toast[data-v-518166f2]{background-color:#fff9e7}.b-toast-danger .toast[data-v-518166f2]{background-color:rgba(252,237,238,.85);border-color:rgba(245,198,203,.85);color:#721c24}.b-toast-danger .toast .toast-header[data-v-518166f2]{color:#721c24;background-color:rgba(248,215,218,.85);border-bottom-color:rgba(245,198,203,.85)}.b-toast-danger.b-toast-solid .toast[data-v-518166f2]{background-color:#fcedee}.b-toast-light .toast[data-v-518166f2]{background-color:hsla(0,0%,100%,.85);border-color:rgba(253,253,254,.85);color:#818182}.b-toast-light .toast .toast-header[data-v-518166f2]{color:#818182;background-color:hsla(0,0%,99.6%,.85);border-bottom-color:rgba(253,253,254,.85)}.b-toast-light.b-toast-solid .toast[data-v-518166f2]{background-color:#fff}.b-toast-dark .toast[data-v-518166f2]{background-color:rgba(227,229,229,.85);border-color:rgba(198,200,202,.85);color:#1b1e21}.b-toast-dark .toast .toast-header[data-v-518166f2]{color:#1b1e21;background-color:rgba(214,216,217,.85);border-bottom-color:rgba(198,200,202,.85)}.b-toast-dark.b-toast-solid .toast[data-v-518166f2]{background-color:#e3e5e5}.b-toaster[data-v-518166f2]{z-index:1100}.b-toaster .b-toaster-slot[data-v-518166f2]{position:relative;display:block}.b-toaster .b-toaster-slot[data-v-518166f2]:empty{display:none!important}.b-toaster.b-toaster-bottom-center[data-v-518166f2],.b-toaster.b-toaster-bottom-full[data-v-518166f2],.b-toaster.b-toaster-bottom-left[data-v-518166f2],.b-toaster.b-toaster-bottom-right[data-v-518166f2],.b-toaster.b-toaster-top-center[data-v-518166f2],.b-toaster.b-toaster-top-full[data-v-518166f2],.b-toaster.b-toaster-top-left[data-v-518166f2],.b-toaster.b-toaster-top-right[data-v-518166f2]{position:fixed;left:8px;left:.5rem;right:8px;right:.5rem;margin:0;padding:0;height:0;overflow:visible}.b-toaster.b-toaster-bottom-center .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-bottom-full .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-bottom-left .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-center .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-full .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toaster-slot[data-v-518166f2]{position:absolute;max-width:350px;width:100%;left:0;right:0;padding:0;margin:0}.b-toaster.b-toaster-bottom-full .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast[data-v-518166f2],.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast[data-v-518166f2],.b-toaster.b-toaster-top-full .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast[data-v-518166f2],.b-toaster.b-toaster-top-full .b-toaster-slot .toast[data-v-518166f2]{width:100%;max-width:100%}.b-toaster.b-toaster-top-center[data-v-518166f2],.b-toaster.b-toaster-top-full[data-v-518166f2],.b-toaster.b-toaster-top-left[data-v-518166f2],.b-toaster.b-toaster-top-right[data-v-518166f2]{top:0}.b-toaster.b-toaster-top-center .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-full .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toaster-slot[data-v-518166f2]{top:8px;top:.5rem}.b-toaster.b-toaster-bottom-center[data-v-518166f2],.b-toaster.b-toaster-bottom-full[data-v-518166f2],.b-toaster.b-toaster-bottom-left[data-v-518166f2],.b-toaster.b-toaster-bottom-right[data-v-518166f2]{bottom:0}.b-toaster.b-toaster-bottom-center .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-bottom-full .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-bottom-left .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toaster-slot[data-v-518166f2]{bottom:8px;bottom:.5rem}.b-toaster.b-toaster-bottom-center .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-center .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toaster-slot[data-v-518166f2]{margin-left:auto}.b-toaster.b-toaster-bottom-center .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-bottom-left .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-center .b-toaster-slot[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toaster-slot[data-v-518166f2]{margin-right:auto}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active[data-v-518166f2],.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active[data-v-518166f2],.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toast.b-toaster-move[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toast.b-toaster-move[data-v-518166f2]{-webkit-transition:-webkit-transform .175s;transition:-webkit-transform .175s;transition:transform .175s;transition:transform .175s,-webkit-transform .175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade[data-v-518166f2],.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade[data-v-518166f2]{-webkit-transition-delay:.175s;transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active[data-v-518166f2]{position:absolute;-webkit-transition-delay:.175s;transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade[data-v-518166f2],.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade[data-v-518166f2],.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade[data-v-518166f2],.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade[data-v-518166f2]{-webkit-transition-delay:0s;transition-delay:0s}.tooltip.b-tooltip[data-v-518166f2]{display:block;opacity:.9}.tooltip.b-tooltip.fade[data-v-518166f2]:not(.show){opacity:0}.tooltip.b-tooltip.show[data-v-518166f2]{opacity:.9}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-primary.bs-tooltip-top .arrow[data-v-518166f2]:before{border-top-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-primary.bs-tooltip-right .arrow[data-v-518166f2]:before{border-right-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow[data-v-518166f2]:before{border-bottom-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-primary.bs-tooltip-left .arrow[data-v-518166f2]:before{border-left-color:#007bff}.tooltip.b-tooltip-primary .tooltip-inner[data-v-518166f2]{color:#fff;background-color:#007bff}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow[data-v-518166f2]:before{border-top-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow[data-v-518166f2]:before{border-right-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow[data-v-518166f2]:before{border-bottom-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow[data-v-518166f2]:before{border-left-color:#6c757d}.tooltip.b-tooltip-secondary .tooltip-inner[data-v-518166f2]{color:#fff;background-color:#6c757d}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-success.bs-tooltip-top .arrow[data-v-518166f2]:before{border-top-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-success.bs-tooltip-right .arrow[data-v-518166f2]:before{border-right-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow[data-v-518166f2]:before{border-bottom-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-success.bs-tooltip-left .arrow[data-v-518166f2]:before{border-left-color:#28a745}.tooltip.b-tooltip-success .tooltip-inner[data-v-518166f2]{color:#fff;background-color:#28a745}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-info.bs-tooltip-top .arrow[data-v-518166f2]:before{border-top-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-info.bs-tooltip-right .arrow[data-v-518166f2]:before{border-right-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow[data-v-518166f2]:before{border-bottom-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-info.bs-tooltip-left .arrow[data-v-518166f2]:before{border-left-color:#17a2b8}.tooltip.b-tooltip-info .tooltip-inner[data-v-518166f2]{color:#fff;background-color:#17a2b8}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-warning.bs-tooltip-top .arrow[data-v-518166f2]:before{border-top-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-warning.bs-tooltip-right .arrow[data-v-518166f2]:before{border-right-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow[data-v-518166f2]:before{border-bottom-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-warning.bs-tooltip-left .arrow[data-v-518166f2]:before{border-left-color:#ffc107}.tooltip.b-tooltip-warning .tooltip-inner[data-v-518166f2]{color:#212529;background-color:#ffc107}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-danger.bs-tooltip-top .arrow[data-v-518166f2]:before{border-top-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-danger.bs-tooltip-right .arrow[data-v-518166f2]:before{border-right-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow[data-v-518166f2]:before{border-bottom-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-danger.bs-tooltip-left .arrow[data-v-518166f2]:before{border-left-color:#dc3545}.tooltip.b-tooltip-danger .tooltip-inner[data-v-518166f2]{color:#fff;background-color:#dc3545}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-light.bs-tooltip-top .arrow[data-v-518166f2]:before{border-top-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-light.bs-tooltip-right .arrow[data-v-518166f2]:before{border-right-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow[data-v-518166f2]:before{border-bottom-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-light.bs-tooltip-left .arrow[data-v-518166f2]:before{border-left-color:#f8f9fa}.tooltip.b-tooltip-light .tooltip-inner[data-v-518166f2]{color:#212529;background-color:#f8f9fa}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-dark.bs-tooltip-top .arrow[data-v-518166f2]:before{border-top-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-dark.bs-tooltip-right .arrow[data-v-518166f2]:before{border-right-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow[data-v-518166f2]:before{border-bottom-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow[data-v-518166f2]:before,.tooltip.b-tooltip-dark.bs-tooltip-left .arrow[data-v-518166f2]:before{border-left-color:#343a40}.tooltip.b-tooltip-dark .tooltip-inner[data-v-518166f2]{color:#fff;background-color:#343a40}.Form[data-v-518166f2]{padding:1em;border:3px dashed #42b983}", ""]);

// exports


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "f28c":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ })

/******/ });
//# sourceMappingURL=vue-client-a.js.map
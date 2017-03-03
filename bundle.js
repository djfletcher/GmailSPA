/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__(1);
const Inbox = __webpack_require__(2);

const Routes = function(inbox, compose, sent) {
  this.inbox = inbox;
  this.compose = undefined;
  this.sent = undefined;
};

const routes = new Routes();
routes.inbox = new Inbox();

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector('.content');
  const router = new Router(content, routes);
  router.start();

  const sidebarLis = document.querySelectorAll(".sidebar-nav li");
  sidebarLis.forEach(sidebarLi => {
    sidebarLi.addEventListener("click", e => {
      e.preventDefault();
      const li = e.currentTarget;
      const innerText = li.textContent.toLowerCase();
      window.location.hash = innerText;
    });
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  activeRoute() {
    const hash = window.location.hash.replace('#', '');
    return this.routes[hash];
  }

  render() {
    this.node.innerHTML = "";
    const component = this.activeRoute();
    if (component) {
      this.node.appendChild(component.render());
    }
  }

}

module.exports = Router;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const Inbox = function() {
  this.render = function() {
    const ul = document.createElement('ul');
    ul.className = 'messages';
    ul.innerHTML = 'a-baballoo theres a message for you';
    return ul;
  };
};

module.exports = Inbox;


/***/ })
/******/ ]);
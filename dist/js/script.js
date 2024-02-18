/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/add-name-account.js":
/*!********************************************!*\
  !*** ./src/js/modules/add-name-account.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addNameAccount = insertLocationSelector => {
  const checkStoredName = localStorage.getItem('name'),
    btn = document.querySelector(insertLocationSelector);

  // eslint-disable-next-line no-unused-expressions
  checkStoredName ? btn.textContent = checkStoredName : btn.textContent = 'Войти';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNameAccount);

/***/ }),

/***/ "./src/js/modules/block-animation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/block-animation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const blockAnimation = delay => {
  setTimeout(() => {
    document.body.className = "";
  }, delay);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blockAnimation);

/***/ }),

/***/ "./src/js/modules/change-status-nav-menu.js":
/*!**************************************************!*\
  !*** ./src/js/modules/change-status-nav-menu.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const changeStatusNavMenu = () => {
  const menu = document.querySelector('.header');
  const promoCard = document.querySelector('main');
  const changeMenu = () => {
    if (window.scrollY >= promoCard.scrollTop + 1) {
      menu.classList.add('header__active');
    } else {
      menu.classList.remove('header__active');
    }
  };
  window.addEventListener('scroll', changeMenu);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeStatusNavMenu);

/***/ }),

/***/ "./src/js/modules/check-login.js":
/*!***************************************!*\
  !*** ./src/js/modules/check-login.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");

const checkLogin = () => {
  const accountNameLocation = document.querySelector('.btn__outline'),
    containerProductCard = document.querySelector('.category__product-cards');
  containerProductCard.addEventListener('click', e => {
    if (e.target && e.target.closest(".btn__product") && accountNameLocation.textContent === 'Войти') {
      e.preventDefault();
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', 'login');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkLogin);

/***/ }),

/***/ "./src/js/modules/login.js":
/*!*********************************!*\
  !*** ./src/js/modules/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_name_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-name-account */ "./src/js/modules/add-name-account.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


const login = () => {
  const form = document.querySelector('#login .modal__form'),
    name = document.querySelector('#login input[name="name"]'),
    pw = document.querySelector('#login input[name="password"]');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const checkStoredName = localStorage.getItem('name'),
      checkStoredPw = localStorage.getItem('pw');
    if (name.value === checkStoredName && pw.value === checkStoredPw) {
      (0,_add_name_account__WEBPACK_IMPORTED_MODULE_0__["default"])('.btn__outline');
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)('login');
    } else {
      alert('Такого логина или пароля не существует!');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
const calcScroll = () => {
  const div = document.createElement('div');
  div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `;
  document.body.append(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};
const openModal = (modalSelector, modalId) => {
  const modals = document.querySelectorAll(modalSelector),
    modal = document.getElementById(modalId),
    scroll = calcScroll(),
    animation = '--animation';
  document.body.style.overflow = 'hidden';
  modals.forEach(modal => {
    modal.classList.remove("open");
    modal.classList.add("close");
  });
  document.documentElement.style.setProperty(animation, 'fadeIn');
  modal.classList.remove("close");
  modal.classList.add("open");
  document.body.style.marginRight = `${scroll}px`;
};
const closeModal = modalId => {
  const modal = document.getElementById(modalId),
    animation = '--animation';
  document.body.style.overflow = '';
  document.documentElement.style.setProperty(animation, 'fadeOut');
  modal.addEventListener("animationend", () => {
    modal.classList.remove("open");
    modal.classList.add("close");
    document.body.style.marginRight = `0px`;
  }, {
    once: true
  });
};

/* let timerId = 0;

const showModalByTime = (modalSelector, modalId, time) => {
    timerId = setTimeout(() => {
        const modal = document.getElementById(modalId);

        if (getComputedStyle(modal).display === "none") openModal(modalSelector, modalId);
    }, time);

    return timerId;
}; */

const modal = (modalSelector, modalId, triggerSelector) => {
  const modal = document.getElementById(modalId);
  document.addEventListener('click', e => {
    if (e.target && e.target.closest(triggerSelector)) {
      e.preventDefault();
      openModal(modalSelector, modalId);
      /* clearTimeout(timerId); */
    }
  });

  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('cross') === '') {
      closeModal(modalId);
    }
  });
};


/***/ }),

/***/ "./src/js/modules/signup.js":
/*!**********************************!*\
  !*** ./src/js/modules/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_name_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-name-account */ "./src/js/modules/add-name-account.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


const signup = () => {
  const form = document.querySelector('#signup .modal__form'),
    name = document.querySelector('#signup input[name="name"]'),
    pw = document.querySelector('#signup input[name="password"]');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const checkStoredName = localStorage.getItem('name'),
      checkStoredPw = localStorage.getItem('pw');
    if (name.value === checkStoredName && pw.value === checkStoredPw) {
      alert('Вы уже зарегестрированы!');
    } else if (!checkStoredName) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('pw', pw.value);
      (0,_add_name_account__WEBPACK_IMPORTED_MODULE_0__["default"])('.btn__outline');
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)('signup');
    } else {
      alert('Ошибка!');
      console.log(`Имя: ${checkStoredName}`);
      console.log(`Пароль: ${checkStoredPw}`);
    }
  });
  document.querySelectorAll('h1, h2, h3').forEach(el => {
    el.innerHTML = el.innerHTML.replace(/а/ig, '$');
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signup);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_block_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/block-animation */ "./src/js/modules/block-animation.js");
/* harmony import */ var _modules_change_status_nav_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/change-status-nav-menu */ "./src/js/modules/change-status-nav-menu.js");
/* harmony import */ var _modules_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/signup */ "./src/js/modules/signup.js");
/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/login */ "./src/js/modules/login.js");
/* harmony import */ var _modules_add_name_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/add-name-account */ "./src/js/modules/add-name-account.js");
/* harmony import */ var _modules_check_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/check-login */ "./src/js/modules/check-login.js");







window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_add_name_account__WEBPACK_IMPORTED_MODULE_5__["default"])('.btn__outline');
  (0,_modules_block_animation__WEBPACK_IMPORTED_MODULE_1__["default"])(1000);
  (0,_modules_change_status_nav_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)('.modal', 'login', '[data-modal-trigger="login"]');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)('.modal', 'signup', '[data-modal-trigger="signup"]');
  /* showModalByTime('.modal', 'login', 15000); */
  (0,_modules_signup__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_login__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_check_login__WEBPACK_IMPORTED_MODULE_6__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
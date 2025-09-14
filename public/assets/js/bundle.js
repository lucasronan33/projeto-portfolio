/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/assets/js/animation-cmd.js":
/*!*********************************************!*\
  !*** ./frontend/assets/js/animation-cmd.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   windowCMD: () => (/* binding */ windowCMD)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var windowCMD = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var res, parser, doc, html, _html, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return fetch('/cmd');
        case 1:
          res = _context.v;
          parser = new DOMParser();
          _t = parser;
          _context.n = 2;
          return res.text();
        case 2:
          doc = _t.parseFromString.call(_t, _context.v, 'text/html');
          // console.log(doc)
          html = doc.body.firstElementChild;
          return _context.a(2, html);
        case 3:
          _context.p = 3;
          _t2 = _context.v;
          _html = _t2;
          return _context.a(2, _html);
      }
    }, _callee, null, [[0, 3]]);
  }));
  return function windowCMD() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./frontend/assets/js/contato.js":
/*!***************************************!*\
  !*** ./frontend/assets/js/contato.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contato: () => (/* binding */ contato)
/* harmony export */ });
function contato() {
  var form = document.querySelector('.content-window-contato');
  var enviaremail = document.querySelector('input[name="enviaremail"]');
  var inputs = document.querySelectorAll(['input[type="text"], input[name="email"]']);
  form.addEventListener('keydown', function (e) {
    if (enviaremail.value === 'node sendmail.js' && e.key === 'Enter') {
      console.log(e.key);
      form.submit();
    }
  });
  inputs.forEach(function (input) {
    // condicional para não selecionar o input de submit
    if (input.name !== 'enviaremail') {
      input.addEventListener('input', function (e) {
        input.style.width = input.value.length + "ch";
        input.style.background = 'rgba(0,0,0,0)';
        if (e.inputType === 'deleteContentBackward' && input.value.length < 1) {
          input.removeAttribute('style');
        }
      });
    }
  });
}
if (window.location.href === '/contato') contato();

/***/ }),

/***/ "./frontend/assets/js/filtros.js":
/*!***************************************!*\
  !*** ./frontend/assets/js/filtros.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filtros: () => (/* binding */ filtros)
/* harmony export */ });
document.addEventListener('DOMContentLoaded', filtros);
function filtros() {
  var divFiltros = document.querySelectorAll('.cel-filtros');
  var celGaleria = document.querySelectorAll('.cel-galeria');

  // estilização filtros, marca/desmarca checkbox oculta
  var tagsAtivas = [];
  divFiltros.forEach(function (divFiltro) {
    divFiltro.addEventListener('click', function () {
      var checkbox = divFiltro.querySelector('input');
      if (checkbox.checked === true) {
        checkbox.checked = false;
        var cleanTextDivFiltro = divFiltro.textContent.trim();
        tagsAtivas = tagsAtivas.filter(function (filtro) {
          if (filtro === cleanTextDivFiltro) {
            return false;
          }
          return true;
        });
        console.log('filtroDesmarcado: ', cleanTextDivFiltro);
        celGaleria.forEach(function (divGaleria) {
          tagsAtivas.forEach(function (tag) {
            if (divGaleria.className.includes(tag)) {
              divGaleria.style.display = 'flex';
            } else {
              divGaleria.style.display = 'none';
            }
          });
          if (tagsAtivas.length === 0) {
            divGaleria.style.display = 'flex';
          }
        });
        console.log('divGaleria (pos-if): ', tagsAtivas);
      } else {
        checkbox.checked = true;
        celGaleria.forEach(function (divGaleria) {
          var cleanTextDivFiltro = divFiltro.textContent.trim();
          if (!divGaleria.className.includes(cleanTextDivFiltro)) {
            !tagsAtivas.includes(cleanTextDivFiltro) ? tagsAtivas.push(cleanTextDivFiltro) : {};
            divGaleria.style.display = 'none';
          }
        });
        console.log('divsFiltradas: ', tagsAtivas);
      }
    });
  });

  // exibindo somente projetos com tags selecionadas
}

/***/ }),

/***/ "./frontend/assets/js/galeria-carrossel.js":
/*!*************************************************!*\
  !*** ./frontend/assets/js/galeria-carrossel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   galeria: () => (/* binding */ galeria)
/* harmony export */ });
function galeria() {
  var carrossel = document.querySelector('.carrossel-galeria-content');
  var celGaleria = document.querySelectorAll('.cel-galeria');
  var btnAvancar = document.querySelector('.btn-avancar');
  var btnVoltar = document.querySelector('.btn-voltar');
  if (carrossel) {
    window.addEventListener('resize', function () {
      displayCarrossel();
    });
    displayCarrossel();
    eventsCarrossel();
  } else {
    return;
  }
  function eventsCarrossel() {
    carrossel.addEventListener('scroll', function () {
      if (carrossel.scrollLeft > 0) {
        btnVoltar.style.display = 'flex';
      } else {
        btnVoltar.style.display = 'none';
      }
    });
    btnAvancar.addEventListener('click', function () {
      carrossel.scrollBy({
        left: carrossel.offsetWidth * 0.5,
        behavior: 'smooth'
      });
    });
    btnVoltar.addEventListener('click', function () {
      carrossel.scrollBy({
        left: -(carrossel.offsetWidth * 0.5),
        behavior: 'smooth'
      });
    });
  }
  function displayCarrossel() {
    if (window.innerWidth > window.innerHeight) {
      carrossel.style.overflowX = 'hidden';
      celGaleria.forEach(function (div) {
        div.style.width = '20vw';
      });
      btnAvancar.style.display = 'flex';
    } else {
      carrossel.style.overflowX = 'auto';
      celGaleria.forEach(function (div) {
        div.style.width = '45vw';
      });
      btnAvancar.style.display = 'none';
      btnVoltar.style.display = 'none';
    }
  }
}
document.addEventListener('DOMContentLoaded', galeria);

/***/ }),

/***/ "./frontend/assets/js/header-window.js":
/*!*********************************************!*\
  !*** ./frontend/assets/js/header-window.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerWindow: () => (/* binding */ headerWindow)
/* harmony export */ });
var contador = new Map();
function headerWindow() {
  var divControlesAba = document.querySelectorAll('.divControlesAba');
  divControlesAba.forEach(function (divPai) {
    divPai.querySelectorAll('div').forEach(function (div) {
      div.addEventListener('click', function (e) {
        // alert('Calma lá amigão, essa função ainda não estra pronta 🤨')

        var corpoPagina = divPai.parentNode.parentNode.childNodes;
        if (div.className === 'minimize') {
          console.log(corpoPagina[0].parentNode);
          corpoPagina[0].parentNode.classList.add('minimized-parent');
          corpoPagina.forEach(function (el) {
            if (el.classList && !el.classList.contains('header-window') && el.style.height !== '0px' && el.style.display !== 'none') {
              (function verificaMap() {
                contador.forEach(function (value, key) {
                  !document.body.contains(key) ? contador["delete"](key) : {};
                });
              })();
              el.classList.add('minimized');
              Object.assign(el.parentNode.style, {
                left: "".concat(contador.entries.length * 30, "%"),
                zIndex: "".concat(contador.size + 9)
              });
              el.parentNode.scrollIntoView({
                behavior: "smooth",
                block: "end"
              });
              if (el.style.display !== 'none') {
                contador.set(el.parentNode, el);
                console.log('contador: ', contador);
              }
              console.log('length: ', contador.entries.length);
            }
          });
        }
        if (div.className === 'maximize') {
          corpoPagina[0].parentNode.classList.remove('minimized-parent');
          corpoPagina.forEach(function (el) {
            if (el.classList && !el.classList.contains('header-window')) {
              // el.style.removeProperty('transform')
              // el.style.removeProperty('height')
              // el.parentNode.style.removeProperty('padding-bottom')
              // el.parentNode.style.removeProperty('height')

              // maximiza a pagina minimizada (remove os estilos inline adicionados)

              el.classList.remove('minimized');
            }
            el.parentNode.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            contador["delete"](el.parentNode);
          });
        }
      });
    });
  });
}

/***/ }),

/***/ "./frontend/assets/js/openTrabalho.js":
/*!********************************************!*\
  !*** ./frontend/assets/js/openTrabalho.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openTrabalho: () => (/* binding */ openTrabalho)
/* harmony export */ });
document.addEventListener('DOMContentLoaded', openTrabalho);
function openTrabalho() {
  document.querySelectorAll(".cel-galeria").forEach(function (div) {
    div.addEventListener("click", function () {
      var nome = div.dataset.nome;
      var img = div.dataset.img;
      var descricao = div.dataset.descricao;
      var github = div.dataset.linkgithub;
      var projeto = div.dataset.linkprojeto;
      criarSpan(nome, img, descricao, github, projeto);
    });
  });
  var celGaleria = document.querySelectorAll('.cel-galeria');
  celGaleria.forEach(function (divGaleria) {
    divGaleria.addEventListener('click', function (e) {});
  });
  function criarSpan(tituloDoProjeto, linkImg, descricaoProjeto, linkGithub, linkProjeto) {
    var divFundoSpan = document.createElement("span");
    divFundoSpan.classList.add("span-fullscreen");
    divFundoSpan.innerHTML = "\n      <div class=\"content-fullscreen\">\n\n      <div class=\"close\">\n        <svg width=\"55\" height=\"54\" viewBox=\"0 0 55 54\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M52.7367 1.86182L54.5033 3.63037L31.1136 26.9995L54.5023 50.3696L50.9691 53.9067L27.5765 30.5337L4.18494 53.9067L0.651733 50.3696L24.0394 26.9995L0.650757 3.63037L2.41736 1.86182L4.18494 0.0932617L27.5765 23.4653L50.9691 0.0932617L52.7367 1.86182Z\" fill=\"white\" />\n        </svg>\n      </div>\n\n        <div class=\"content-container\">\n          <h3>".concat(tituloDoProjeto, "</h3>\n          <img src=\"").concat(linkImg, "\" alt=\"\" srcset=\"\">\n\n          <content>\n          <div class=\"descricao-projeto\">\n            <b>Descri\xE7\xE3o do Projeto: </b>\n            <p>").concat(descricaoProjeto, "</p>\n          </div>\n\n          <div class=\"btn-links\">\n            <a href=\"").concat(linkGithub, "\" class=\"link-github\">\n              <button data-text=\"Ir ao GitHub\"></button>\n            </a>\n            <a href=\"").concat(linkProjeto, "\" class=\"link-projeto\">\n              <button data-text=\"Visitar Aplica\xE7\xE3o\"></button>\n            </a>\n          </div>\n          </content>\n        </div>\n      </div>\n    ");
    document.body.appendChild(divFundoSpan);
    document.body.classList.add('no-scroll');

    // fechar clicando fora do conteúdo
    divFundoSpan.addEventListener("click", function (event) {
      if (event.target === divFundoSpan) {
        divFundoSpan.remove();
        document.body.classList.remove('no-scroll');
      }
    });
    divFundoSpan.querySelector('.close').addEventListener('click', function () {
      divFundoSpan.remove();
      document.body.classList.remove('no-scroll');
    });
  }
}

/***/ }),

/***/ "./frontend/assets/js/sobre.js":
/*!*************************************!*\
  !*** ./frontend/assets/js/sobre.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sobre: () => (/* binding */ sobre)
/* harmony export */ });
function sobre() {
  var sobre = document.querySelector('.sobre');
  if (sobre) {
    resize();
  }
  if (sobre) {
    window.addEventListener('resize', function () {
      resize();
    });
    resize();
  } else {
    return;
  }
  function resize() {
    if (window.innerWidth > window.innerHeight) {
      document.querySelector('.sobreDesktop').style.display = 'flex';
      document.querySelector('.sobreMobile').style.display = 'none';
    } else {
      document.querySelector('.sobreMobile').style.display = 'flex';
      document.querySelector('.sobreDesktop').style.display = 'none';
    }
  }
}
document.addEventListener('DOMContentLoaded', sobre);

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./frontend/assets/js/lazyLoading.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-window.js */ "./frontend/assets/js/header-window.js");
/* harmony import */ var _sobre_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sobre.js */ "./frontend/assets/js/sobre.js");
/* harmony import */ var _contato_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contato.js */ "./frontend/assets/js/contato.js");
/* harmony import */ var _galeria_carrossel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./galeria-carrossel.js */ "./frontend/assets/js/galeria-carrossel.js");
/* harmony import */ var _filtros_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtros.js */ "./frontend/assets/js/filtros.js");
/* harmony import */ var _openTrabalho_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openTrabalho.js */ "./frontend/assets/js/openTrabalho.js");
/* harmony import */ var _animation_cmd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation-cmd.js */ "./frontend/assets/js/animation-cmd.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var observerMutations = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) {
          (0,_header_window_js__WEBPACK_IMPORTED_MODULE_0__.headerWindow)();
          if (node.matches('.sobre')) {
            (0,_sobre_js__WEBPACK_IMPORTED_MODULE_1__.sobre)();
          } else if (node.matches('.galeria')) {
            (0,_filtros_js__WEBPACK_IMPORTED_MODULE_4__.filtros)();
            (0,_openTrabalho_js__WEBPACK_IMPORTED_MODULE_5__.openTrabalho)();
            (0,_galeria_carrossel_js__WEBPACK_IMPORTED_MODULE_3__.galeria)();
          } else if (node.matches('.contato')) {
            (0,_contato_js__WEBPACK_IMPORTED_MODULE_2__.contato)();
          }
        }
      });
    }
  });
});
observerMutations.observe(document.body, {
  childList: true,
  subtree: true
});
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.lazy-section');

  // Armazenamos os timers de cada seção
  var timers = new Map();
  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      var section = entry.target;
      var url = section.getAttribute('data-url');

      // Se não houver timer para essa seção, cria um
      if (entry.isIntersecting && !timers.has(section)) {
        var timer = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var cmd, contentCMD, animation, lines;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                _context.n = 1;
                return (0,_animation_cmd_js__WEBPACK_IMPORTED_MODULE_6__.windowCMD)();
              case 1:
                cmd = _context.v;
                section.appendChild(cmd);
                contentCMD = section.querySelector('.content-animation');
                animation = section.querySelector('.divAnimation');
                contentCMD.appendChild(animation);

                // dispara a animação
                lines = section.querySelectorAll('.animate');
                animateLine(0, lines, url, section);

                // remove o timer depois da animação e para de observar
                timers["delete"](section);
                obs.unobserve(section);
              case 2:
                return _context.a(2);
            }
          }, _callee);
        })), 500); // 0,5s de espera

        timers.set(section, timer);
      } else {
        // Se a seção saiu da tela antes do tempo, cancela o timer
        if (timers.has(section)) {
          clearTimeout(timers.get(section));
          timers["delete"](section);
        }
      }
    });
  }, {
    threshold: 0.2
  }); //começa a carregar quando 20% da seção aparece na tela

  sections.forEach(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(section) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            setTimeout(function () {
              observer.observe(section);
            }, 1000);
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  function typeWriter(element, text) {
    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var callback = arguments.length > 3 ? arguments[3] : undefined;
    var i = 0;
    element.textContent = '';
    element.classList.add('cursor');
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;

        // recursão com delay para cada char
        setTimeout(typing, speed);
      } else {
        element.classList.remove('cursor'); // remove o cursor
        if (callback) callback(); // chama o proximo elemento
      }
    }
    typing();
  }
  function animateLine() {
    return _animateLine.apply(this, arguments);
  }
  function _animateLine() {
    _animateLine = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var index,
        element,
        url,
        section,
        line,
        text,
        _args4 = arguments;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            index = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 0;
            element = _args4.length > 1 ? _args4[1] : undefined;
            url = _args4.length > 2 ? _args4[2] : undefined;
            section = _args4.length > 3 ? _args4[3] : undefined;
            if (!(index >= element.length)) {
              _context4.n = 1;
              break;
            }
            element[index - 1].classList.add('blink');
            setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
              var html, _t;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    _context3.p = 0;
                    _context3.n = 1;
                    return fetchSection(url);
                  case 1:
                    html = _context3.v;
                    section.innerHTML = html;
                    return _context3.a(2, html);
                  case 2:
                    _context3.p = 2;
                    _t = _context3.v;
                    section.innerHTML = "<p> Erro ao carregar se\xE7\xE3o</p>";
                    console.log(_t);
                  case 3:
                    return _context3.a(2);
                }
              }, _callee3, null, [[0, 2]]);
            })), 750 * 2);
            return _context4.a(2);
          case 1:
            line = element[index];
            text = line.dataset.text;
            if (line.classList.contains('line')) {
              // mostra direto
              line.textContent = text;
              // espera um pouco e já pula pra próxima
              setTimeout(function () {
                animateLine(index + 1, element, url, section);
              }, 500);
            } else {
              typeWriter(line, text, 50, function () {
                // depois que a linha termina, chama a proxima
                animateLine(index + 1, element, url, section);
              });
            }
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return _animateLine.apply(this, arguments);
  }
  function fetchSection(_x2) {
    return _fetchSection.apply(this, arguments);
  }
  function _fetchSection() {
    _fetchSection = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(url) {
      var res, parser, doc, html, _html, _t2, _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return fetch(url);
          case 1:
            res = _context5.v;
            // converte o fetch para um elemento HTML
            parser = new DOMParser();
            _t2 = parser;
            _context5.n = 2;
            return res.text();
          case 2:
            doc = _t2.parseFromString.call(_t2, _context5.v, 'text/html');
            // retorna o elemento em string
            html = doc.body.firstElementChild.outerHTML;
            return _context5.a(2, html);
          case 3:
            _context5.p = 3;
            _t3 = _context5.v;
            console.log(_t3);
            _html = "<p> Erro ao carregar se\xE7\xE3o</p>";
            return _context5.a(2, _html);
        }
      }, _callee5, null, [[0, 3]]);
    }));
    return _fetchSection.apply(this, arguments);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Mathsqrt = Math.sqrt,
    _Mathpow = Math.pow,
    _Mathmax = Math.max,
    _Mathmin = Math.min,
    _Mathabs = Math.abs,
    _Mathround = Math.round;(function (n, a) {
  'object' == ( false ? 'undefined' : _typeof(exports)) && 'object' == ( false ? 'undefined' : _typeof(module)) ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 'object' == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? exports.materialComponentsMithril = a() : n.materialComponentsMithril = a();
})(undefined, function () {
  return function (t) {
    function n(d) {
      if (a[d]) return a[d].exports;var r = a[d] = { i: d, l: !1, exports: {} };return t[d].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }var a = {};return n.m = t, n.c = a, n.i = function (d) {
      return d;
    }, n.d = function (d, r, l) {
      n.o(d, r) || Object.defineProperty(d, r, { configurable: !1, enumerable: !0, get: l });
    }, n.n = function (d) {
      var r = d && d.__esModule ? function () {
        return d['default'];
      } : function () {
        return d;
      };return n.d(r, 'a', r), r;
    }, n.o = function (d, r) {
      return Object.prototype.hasOwnProperty.call(d, r);
    }, n.p = '', n(n.s = 22);
  }([function (t, n, a) {
    'use strict';
    function r(f, _) {
      return Object.keys(f).forEach(function (h) {
        _(h, f) || delete f[h];
      }), f;
    }Object.defineProperty(n, '__esModule', { value: !0 });var l = a(6),
        u = function (f) {
      return f && f.__esModule ? f : { default: f };
    }(l);n.default = function (f, _, h, b) {
      return (0, u.default)(f.attrs.tagName || _, r(r(Object.assign({}, f.attrs, { class: (f.attrs.class || '').split(' ').filter(function (C) {
          return C;
        }).concat(Object.keys(Object.assign(h, f.attrs.classNames || {})).filter(b || function () {
          return 1;
        })).filter(function (C, A, T) {
          return T.indexOf(C) === A;
        }).map(function (C) {
          return (f.attrs.classNames ? f.attrs.classNames[C] : '') || h[C];
        }).join(' ') }), function (C, A) {
        return (A.classNames ? !(A.classNames[C] || h[C]) : !h[C]) && 'tagName' !== C;
      }), function (C) {
        return 'classNames' !== C;
      }), f.children);
    };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (f) {
      return f && f.__esModule ? f : { default: f };
    }(r),
        u = a(4);n.default = { oncreate: function oncreate(_) {
        u.MDCRipple.attachTo(_.dom);
      }, view: function view(_) {
        return (0, l.default)(_, 'button', { mdcButton: 'mdc-button', mdcButtonAccent: 'mdc-button--accent', mdcButtonPrimary: 'mdc-button--primary', mdcButtonRaised: 'mdc-button--raised', mdcButtonDense: 'mdc-button--dense', mdcButtonCompact: 'mdc-button--compact', mdcButtonThemeDark: 'mdc-button--theme-dark' }, function (h) {
          return 'mdcButton' === h || _.attrs[h];
        });
      } };
  }, function (t, n) {
    'use strict';
    function d(u, f) {
      if (!(u instanceof f)) throw new TypeError('Cannot call a class as a function');
    }Object.defineProperty(n, '__esModule', { value: !0 });var r = function () {
      function u(f, _) {
        for (var b, h = 0; h < _.length; h++) {
          b = _[h], b.enumerable = b.enumerable || !1, b.configurable = !0, 'value' in b && (b.writable = !0), Object.defineProperty(f, b.key, b);
        }
      }return function (f, _, h) {
        return _ && u(f.prototype, _), h && u(f, h), f;
      };
    }(),
        l = function () {
      function u() {
        var f = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};d(this, u), this.adapter_ = f;
      }return r(u, null, [{ key: 'cssClasses', get: function get() {
          return {};
        } }, { key: 'strings', get: function get() {
          return {};
        } }, { key: 'numbers', get: function get() {
          return {};
        } }, { key: 'defaultAdapter', get: function get() {
          return {};
        } }]), r(u, [{ key: 'init', value: function value() {} }, { key: 'destroy', value: function value() {} }]), u;
    }();n.default = l;
  }, function (t, n, a) {
    'use strict';
    function d(u) {
      return u && u.__esModule ? u : { default: u };
    }Object.defineProperty(n, '__esModule', { value: !0 });var r = a(2);Object.defineProperty(n, 'MDCFoundation', { enumerable: !0, get: function get() {
        return d(r).default;
      } });var l = a(24);Object.defineProperty(n, 'MDCComponent', { enumerable: !0, get: function get() {
        return d(l).default;
      } });
  }, function (t, n, a) {
    'use strict';
    function r(S, w) {
      if (!(S instanceof w)) throw new TypeError('Cannot call a class as a function');
    }function l(S, w) {
      if (!S) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return w && ('object' == (typeof w === 'undefined' ? 'undefined' : _typeof(w)) || 'function' == typeof w) ? w : S;
    }function u(S, w) {
      if ('function' != typeof w && null !== w) throw new TypeError('Super expression must either be null or a function, not ' + (typeof w === 'undefined' ? 'undefined' : _typeof(w)));S.prototype = Object.create(w && w.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } }), w && (Object.setPrototypeOf ? Object.setPrototypeOf(S, w) : S.__proto__ = w);
    }Object.defineProperty(n, '__esModule', { value: !0 }), n.MDCRipple = n.MDCRippleFoundation = void 0;var f = function () {
      function S(w, E) {
        for (var I, D = 0; D < E.length; D++) {
          I = E[D], I.enumerable = I.enumerable || !1, I.configurable = !0, 'value' in I && (I.writable = !0), Object.defineProperty(w, I.key, I);
        }
      }return function (w, E, D) {
        return E && S(w.prototype, E), D && S(w, D), w;
      };
    }(),
        _ = a(3),
        h = a(26),
        b = function (S) {
      return S && S.__esModule ? S : { default: S };
    }(h),
        C = a(5),
        A = (0, C.getMatchesProperty)(HTMLElement.prototype);n.MDCRippleFoundation = b.default;n.MDCRipple = function (S) {
      function w() {
        return r(this, w), l(this, (w.__proto__ || Object.getPrototypeOf(w)).apply(this, arguments));
      }return u(w, S), f(w, [{ key: 'activate', value: function value() {
          this.foundation_.activate();
        } }, { key: 'deactivate', value: function value() {
          this.foundation_.deactivate();
        } }, { key: 'getDefaultFoundation', value: function value() {
          return new b.default(w.createAdapter(this));
        } }, { key: 'initialSyncWithDOM', value: function value() {
          this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
        } }, { key: 'unbounded', get: function get() {
          return this.unbounded_;
        }, set: function set(D) {
          var I = b.default.cssClasses.UNBOUNDED;this.unbounded_ = !!D, this.unbounded_ ? this.root_.classList.add(I) : this.root_.classList.remove(I);
        } }], [{ key: 'attachTo', value: function value(D) {
          var I = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              N = I.isUnbounded,
              P = void 0 === N ? void 0 : N,
              O = new w(D);return void 0 !== P && (O.unbounded = P), O;
        } }, { key: 'createAdapter', value: function value(D) {
          return { browserSupportsCssVars: function browserSupportsCssVars() {
              return (0, C.supportsCssVariables)(window);
            }, isUnbounded: function isUnbounded() {
              return D.unbounded;
            }, isSurfaceActive: function isSurfaceActive() {
              return D.root_[A](':active');
            }, addClass: function addClass(N) {
              return D.root_.classList.add(N);
            }, removeClass: function removeClass(N) {
              return D.root_.classList.remove(N);
            }, registerInteractionHandler: function registerInteractionHandler(N, P) {
              return D.root_.addEventListener(N, P);
            }, deregisterInteractionHandler: function deregisterInteractionHandler(N, P) {
              return D.root_.removeEventListener(N, P);
            }, registerResizeHandler: function registerResizeHandler(N) {
              return window.addEventListener('resize', N);
            }, deregisterResizeHandler: function deregisterResizeHandler(N) {
              return window.removeEventListener('resize', N);
            }, updateCssVariable: function updateCssVariable(N, P) {
              return D.root_.style.setProperty(N, P);
            }, computeBoundingRect: function computeBoundingRect() {
              return D.root_.getBoundingClientRect();
            }, getWindowPageOffset: function getWindowPageOffset() {
              return { x: window.pageXOffset, y: window.pageYOffset };
            } };
        } }]), w;
    }(_.MDCComponent);
  }, function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 }), n.supportsCssVariables = function (f) {
      var _ = f.CSS && 'function' == typeof f.CSS.supports;if (_) {
        var h = f.CSS.supports('--css-vars', 'yes'),
            b = f.CSS.supports('(--css-vars: yes)') && f.CSS.supports('color', '#00000000');return h || b;
      }
    }, n.getMatchesProperty = function (f) {
      return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (_) {
        return _ in f;
      }).pop();
    }, n.animateWithClass = function (f, _, h) {
      var b = !1,
          C = function A() {
        b || (b = !0, f.removeClass(_), f.deregisterInteractionHandler(h, A));
      };return f.registerInteractionHandler(h, C), f.addClass(_), C;
    }, n.getNormalizedEventCoords = function (f, _, h) {
      var S,
          w,
          b = _.x,
          C = _.y,
          A = b + h.left,
          T = C + h.top;return 'touchend' === f.type ? (S = f.changedTouches[0].pageX - A, w = f.changedTouches[0].pageY - T) : (S = f.pageX - A, w = f.pageY - T), { x: S, y: w };
    };
  }, function (t, n, a) {
    'use strict';
    (function (d, r) {
      var l = 'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator) ? function (u) {
        return typeof u === 'undefined' ? 'undefined' : _typeof(u);
      } : function (u) {
        return u && 'function' == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? 'symbol' : typeof u === 'undefined' ? 'undefined' : _typeof(u);
      };(function () {
        'use strict';
        function u(z, G, H, $, Y, q) {
          return { tag: z, key: G, attrs: H, children: $, text: Y, dom: q, domSize: void 0, state: void 0, _state: void 0, events: void 0, instance: void 0, skip: !1 };
        }function f(z) {
          for (var G, H = 'div', $ = [], Y = {}; G = C.exec(z);) {
            var q = G[1],
                W = G[2];if ('' === q && '' !== W) H = W;else if ('#' === q) Y.id = W;else if ('.' === q) $.push(W);else if ('[' === G[3][0]) {
              var X = G[6];X && (X = X.replace(/\\(["'])/g, '$1').replace(/\\\\/g, '\\')), 'class' === G[4] ? $.push(X) : Y[G[4]] = X || !0;
            }
          }return 0 < $.length && (Y.className = $.join(' ')), A[z] = { tag: H, attrs: Y };
        }function _(z, G, H) {
          var Y,
              q,
              $ = !1,
              W = G.className || G.class;for (var X in z.attrs) {
            T.call(z.attrs, X) && (G[X] = z.attrs[X]);
          }for (var X in null != W && (null != G.class && (G.class = void 0, G.className = W), null != z.attrs.className && (G.className = z.attrs.className + ' ' + W)), G) {
            if (T.call(G, X) && 'key' != X) {
              $ = !0;break;
            }
          }return Array.isArray(H) && 1 === H.length && null != H[0] && '#' === H[0].tag ? q = H[0].children : Y = H, u(z.tag, G.key, $ ? G : void 0, Y, q);
        }function h(z) {
          var $,
              G = arguments[1],
              H = 2;if (null == z || 'string' != typeof z && 'function' != typeof z && 'function' != typeof z.view) throw Error('The selector must be either a string or a component.');if ('string' == typeof z) var Y = A[z] || f(z);if (G ? ('object' !== ('undefined' == typeof G ? 'undefined' : l(G)) || null != G.tag || Array.isArray(G)) && (G = {}, H = 1) : G = {}, arguments.length === H + 1) $ = arguments[H], Array.isArray($) || ($ = [$]);else for ($ = []; H < arguments.length;) {
            $.push(arguments[H++]);
          }var q = u.normalizeChildren($);return 'string' == typeof z ? _(Y, G, q) : u(z, G.key, G, q);
        }function b(z) {
          var G = 16,
              H = 0,
              $ = null,
              Y = 'function' == typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;return function () {
            var q = Date.now();0 == H || q - H >= G ? (H = q, z()) : null == $ && ($ = Y(function () {
              $ = null, z(), H = Date.now();
            }, G - (q - H)));
          };
        }u.normalize = function (z) {
          return Array.isArray(z) ? u('[', void 0, void 0, u.normalizeChildren(z), void 0, void 0) : null != z && 'object' !== ('undefined' == typeof z ? 'undefined' : l(z)) ? u('#', void 0, void 0, !1 === z ? '' : z, void 0, void 0) : z;
        }, u.normalizeChildren = function (G) {
          for (var H = 0; H < G.length; H++) {
            G[H] = u.normalize(G[H]);
          }return G;
        };var C = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
            A = {},
            T = {}.hasOwnProperty;h.trust = function (z) {
          return null == z && (z = ''), u('<', void 0, void 0, z, void 0, void 0);
        }, h.fragment = function (z, G) {
          return u('[', z.key, z, u.normalizeChildren(G), void 0, void 0);
        };var S = h,
            w = function z(G) {
          function H(J, ee) {
            return function te(ne) {
              var ae;try {
                if (ee && null != ne && ('object' === ('undefined' == typeof ne ? 'undefined' : l(ne)) || 'function' == typeof ne) && 'function' == typeof (ae = ne.then)) {
                  if (ne === Y) throw new TypeError('Promise can\'t be resolved w/ itself');$(ae.bind(ne));
                } else Q(function () {
                  ee || 0 !== J.length || console.error('Possible unhandled promise rejection:', ne);for (var ie = 0; ie < J.length; ie++) {
                    J[ie](ne);
                  }q.length = 0, W.length = 0, Z.state = ee, Z.retry = function () {
                    te(ne);
                  };
                });
              } catch (ie) {
                K(ie);
              }
            };
          }function $(J) {
            function ee(ae) {
              return function (ie) {
                0 < te++ || ae(ie);
              };
            }var te = 0,
                ne = ee(K);try {
              J(ee(X), ne);
            } catch (ae) {
              ne(ae);
            }
          }if (!(this instanceof z)) throw new Error('Promise must be called with `new`');if ('function' != typeof G) throw new TypeError('executor must be a function');var Y = this,
              q = [],
              W = [],
              X = H(q, !0),
              K = H(W, !1),
              Z = Y._instance = { resolvers: q, rejectors: W },
              Q = 'function' == typeof d ? d : setTimeout;$(G);
        };if (w.prototype.then = function (z, G) {
          function H(K, Z, Q, J) {
            Z.push(function (ee) {
              if ('function' != typeof K) Q(ee);else try {
                q(K(ee));
              } catch (te) {
                W && W(te);
              }
            }), 'function' == typeof Y.retry && J === Y.state && Y.retry();
          }var q,
              W,
              $ = this,
              Y = $._instance,
              X = new w(function (K, Z) {
            q = K, W = Z;
          });return H(z, Y.resolvers, q, !0), H(G, Y.rejectors, W, !1), X;
        }, w.prototype.catch = function (z) {
          return this.then(null, z);
        }, w.resolve = function (z) {
          return z instanceof w ? z : new w(function (G) {
            G(z);
          });
        }, w.reject = function (z) {
          return new w(function (G, H) {
            H(z);
          });
        }, w.all = function (z) {
          return new w(function (G, H) {
            var $ = z.length,
                Y = 0,
                q = [];if (0 === z.length) G([]);else for (var W = 0; W < z.length; W++) {
              (function (X) {
                function K(Z) {
                  Y++, q[X] = Z, Y === $ && G(q);
                }null != z[X] && ('object' === l(z[X]) || 'function' == typeof z[X]) && 'function' == typeof z[X].then ? z[X].then(K, H) : K(z[X]);
              })(W);
            }
          });
        }, w.race = function (z) {
          return new w(function (G, H) {
            for (var $ = 0; $ < z.length; $++) {
              z[$].then(G, H);
            }
          });
        }, 'undefined' != typeof window) {
          'undefined' == typeof window.Promise && (window.Promise = w);var w = window.Promise;
        } else if ('undefined' != typeof r) {
          'undefined' == typeof r.Promise && (r.Promise = w);var w = r.Promise;
        } else ;var E = function E(G) {
          function H(q, W) {
            if (Array.isArray(W)) for (var X = 0; X < W.length; X++) {
              H(q + '[' + X + ']', W[X]);
            } else if ('[object Object]' === Object.prototype.toString.call(W)) for (var X in W) {
              H(q + '[' + X + ']', W[X]);
            } else $.push(encodeURIComponent(q) + (null != W && '' !== W ? '=' + encodeURIComponent(W) : ''));
          }if ('[object Object]' !== Object.prototype.toString.call(G)) return '';var $ = [];for (var Y in G) {
            H(Y, G[Y]);
          }return $.join('&');
        },
            D = /^file:\/\//i,
            N = function (G, H) {
          function Y() {
            function ae() {
              0 == --ie && 'function' == typeof ne && ne();
            }var ie = 0;return function de(re) {
              var oe = re.then;return re.then = function () {
                ie++;var se = oe.apply(re, arguments);return se.then(ae, function (le) {
                  if (ae(), 0 == ie) throw le;
                }), de(se);
              }, re;
            };
          }function q(ae, ie) {
            if ('string' == typeof ae) {
              var de = ae;ae = ie || {}, null == ae.url && (ae.url = de);
            }return ae;
          }function K(ae, ie) {
            if (null == ie) return ae;for (var oe, de = ae.match(/:[^\/]+/gi) || [], re = 0; re < de.length; re++) {
              oe = de[re].slice(1), null != ie[oe] && (ae = ae.replace(de[re], ie[oe]));
            }return ae;
          }function Z(ae, ie) {
            var de = E(ie);if ('' !== de) {
              var re = 0 > ae.indexOf('?') ? '?' : '&';ae += re + de;
            }return ae;
          }function Q(ae) {
            try {
              return '' === ae ? null : JSON.parse(ae);
            } catch (ie) {
              throw new Error(ae);
            }
          }function J(ae) {
            return ae.responseText;
          }function ee(ae, ie) {
            if ('function' == typeof ae) if (Array.isArray(ie)) for (var de = 0; de < ie.length; de++) {
              ie[de] = new ae(ie[de]);
            } else return new ae(ie);return ie;
          }var ne,
              te = 0;return { request: function request(ae, ie) {
              var de = Y();ae = q(ae, ie);var re = new H(function (oe, se) {
                null == ae.method && (ae.method = 'GET'), ae.method = ae.method.toUpperCase();var le = 'GET' === ae.method || 'TRACE' === ae.method ? !1 : 'boolean' != typeof ae.useBody || ae.useBody;'function' != typeof ae.serialize && (ae.serialize = 'undefined' != typeof FormData && ae.data instanceof FormData ? function (_e) {
                  return _e;
                } : JSON.stringify), 'function' != typeof ae.deserialize && (ae.deserialize = Q), 'function' != typeof ae.extract && (ae.extract = J), ae.url = K(ae.url, ae.data), le ? ae.data = ae.serialize(ae.data) : ae.url = Z(ae.url, ae.data);var ue = new G.XMLHttpRequest(),
                    ce = !1,
                    fe = ue.abort;for (var me in ue.abort = function () {
                  ce = !0, fe.call(ue);
                }, ue.open(ae.method, ae.url, 'boolean' != typeof ae.async || ae.async, 'string' == typeof ae.user ? ae.user : void 0, 'string' == typeof ae.password ? ae.password : void 0), ae.serialize === JSON.stringify && le && ue.setRequestHeader('Content-Type', 'application/json; charset=utf-8'), ae.deserialize === Q && ue.setRequestHeader('Accept', 'application/json, text/*'), ae.withCredentials && (ue.withCredentials = ae.withCredentials), ae.headers) {
                  ({}).hasOwnProperty.call(ae.headers, me) && ue.setRequestHeader(me, ae.headers[me]);
                }'function' == typeof ae.config && (ue = ae.config(ue, ae) || ue), ue.onreadystatechange = function () {
                  if (!ce && 4 === ue.readyState) try {
                    var _e = ae.extract === J ? ae.deserialize(ae.extract(ue, ae)) : ae.extract(ue, ae);if (200 <= ue.status && 300 > ue.status || 304 === ue.status || D.test(ae.url)) oe(ee(ae.type, _e));else {
                      var pe = new Error(ue.responseText);for (var he in _e) {
                        pe[he] = _e[he];
                      }se(pe);
                    }
                  } catch (ge) {
                    se(ge);
                  }
                }, le && null != ae.data ? ue.send(ae.data) : ue.send();
              });return !0 === ae.background ? re : de(re);
            }, jsonp: function jsonp(ae, ie) {
              var de = Y();ae = q(ae, ie);var re = new H(function (oe, se) {
                var le = ae.callbackName || '_mithril_' + _Mathround(1e16 * Math.random()) + '_' + te++,
                    ue = G.document.createElement('script');G[le] = function (ce) {
                  ue.parentNode.removeChild(ue), oe(ee(ae.type, ce)), delete G[le];
                }, ue.onerror = function () {
                  ue.parentNode.removeChild(ue), se(new Error('JSONP request failed')), delete G[le];
                }, null == ae.data && (ae.data = {}), ae.url = K(ae.url, ae.data), ae.data[ae.callbackKey || 'callback'] = le, ue.src = Z(ae.url, ae.data), G.document.documentElement.appendChild(ue);
              });return !0 === ae.background ? re : de(re);
            }, setCompletionCallback: function setCompletionCallback(ae) {
              ne = ae;
            } };
        }(window, w),
            P = function P(G) {
          function $(Me, Re, Le, Fe, Ue, Ve, Be) {
            for (var Ge, ze = Le; ze < Fe; ze++) {
              Ge = Re[ze], null != Ge && Y(Me, Ge, Ue, Be, Ve);
            }
          }function Y(Me, Re, Le, Fe, Ue) {
            var Ve = Re.tag;return 'string' == typeof Ve ? (Re.state = {}, null != Re.attrs && we(Re.attrs, Re, Le), '#' === Ve ? q(Me, Re, Ue) : '<' === Ve ? W(Me, Re, Ue) : '[' === Ve ? X(Me, Re, Le, Fe, Ue) : K(Me, Re, Le, Fe, Ue)) : Q(Me, Re, Le, Fe, Ue);
          }function q(Me, Re, Le) {
            return Re.dom = Ne.createTextNode(Re.children), ue(Me, Re.dom, Le), Re.dom;
          }function W(Me, Re, Le) {
            var Fe = Re.children.match(/^\s*?<(\w+)/im) || [],
                Ue = { caption: 'table', thead: 'table', tbody: 'table', tfoot: 'table', tr: 'tbody', th: 'tr', td: 'tr', colgroup: 'table', col: 'colgroup' }[Fe[1]] || 'div',
                Ve = Ne.createElement(Ue);Ve.innerHTML = Re.children, Re.dom = Ve.firstChild, Re.domSize = Ve.childNodes.length;for (var ze, Be = Ne.createDocumentFragment(); ze = Ve.firstChild;) {
              Be.appendChild(ze);
            }return ue(Me, Be, Le), Be;
          }function X(Me, Re, Le, Fe, Ue) {
            var Ve = Ne.createDocumentFragment();if (null != Re.children) {
              var Be = Re.children;$(Ve, Be, 0, Be.length, Le, null, Fe);
            }return Re.dom = Ve.firstChild, Re.domSize = Ve.childNodes.length, ue(Me, Ve, Ue), Ve;
          }function K(Me, Re, Le, Fe, Ue) {
            var Ve = Re.tag;switch (Re.tag) {case 'svg':
                Fe = 'http://www.w3.org/2000/svg';break;case 'math':
                Fe = 'http://www.w3.org/1998/Math/MathML';}var Be = Re.attrs,
                ze = Be && Be.is,
                Ge = Fe ? ze ? Ne.createElementNS(Fe, Ve, { is: ze }) : Ne.createElementNS(Fe, Ve) : ze ? Ne.createElement(Ve, { is: ze }) : Ne.createElement(Ve);if (Re.dom = Ge, null != Be && he(Re, Be, Fe), ue(Me, Ge, Ue), null != Re.attrs && null != Re.attrs.contenteditable) ce(Re);else if (null != Re.text && ('' === Re.text ? Re.children = [u('#', void 0, void 0, Re.text, void 0, void 0)] : Ge.textContent = Re.text), null != Re.children) {
              var He = Re.children;$(Ge, He, 0, He.length, Le, null, Fe), ve(Re);
            }return Ge;
          }function Z(Me, Re) {
            var Le;if ('function' == typeof Me.tag.view) {
              if (Me.state = Object.create(Me.tag), Le = Me.state.view, null != Le.$$reentrantLock$$) return Pe;Le.$$reentrantLock$$ = !0;
            } else {
              if (Me.state = void 0, Le = Me.tag, null != Le.$$reentrantLock$$) return Pe;Le.$$reentrantLock$$ = !0, Me.state = null != Me.tag.prototype && 'function' == typeof Me.tag.prototype.view ? new Me.tag(Me) : Me.tag(Me);
            }if (Me._state = Me.state, null != Me.attrs && we(Me.attrs, Me, Re), we(Me._state, Me, Re), Me.instance = u.normalize(Me._state.view.call(Me.state, Me)), Me.instance === Me) throw Error('A view cannot return the vnode it received as argument');Le.$$reentrantLock$$ = null;
          }function Q(Me, Re, Le, Fe, Ue) {
            if (Z(Re, Le), null != Re.instance) {
              var Ve = Y(Me, Re.instance, Le, Fe, Ue);return Re.dom = Re.instance.dom, Re.domSize = null == Re.dom ? 0 : Re.instance.domSize, ue(Me, Ve, Ue), Ve;
            }return Re.domSize = 0, Pe;
          }function J(Me, Re, Le, Fe, Ue, Ve, Be) {
            if (Re !== Le && (null != Re || null != Le)) if (null == Re) $(Me, Le, 0, Le.length, Ue, Ve, void 0);else if (null == Le) fe(Re, 0, Re.length, Le);else {
              if (Re.length === Le.length) {
                for (var ze = !1, Ge = 0; Ge < Le.length; Ge++) {
                  if (null != Le[Ge] && null != Re[Ge]) {
                    ze = null == Le[Ge].key && null == Re[Ge].key;break;
                  }
                }if (ze) {
                  for (var Ge = 0; Ge < Re.length; Ge++) {
                    if (Re[Ge] === Le[Ge]) continue;else null == Re[Ge] && null != Le[Ge] ? Y(Me, Le[Ge], Ue, Be, le(Re, Ge + 1, Ve)) : null == Le[Ge] ? fe(Re, Ge, Ge + 1, Le) : ee(Me, Re[Ge], Le[Ge], Ue, le(Re, Ge + 1, Ve), Fe, Be);
                  }return;
                }
              }if (Fe = Fe || re(Re, Le), Fe) {
                var He = Re.pool;Re = Re.concat(Re.pool);
              }for (var We, je = 0, $e = 0, Ye = Re.length - 1, qe = Le.length - 1; Ye >= je && qe >= $e;) {
                var Xe = Re[je],
                    Ke = Le[$e];if (Xe === Ke && !Fe) je++, $e++;else if (null == Xe) je++;else if (null == Ke) $e++;else if (Xe.key === Ke.key) {
                  var Ze = null != He && je >= Re.length - He.length || null == He && Fe;je++, $e++, ee(Me, Xe, Ke, Ue, le(Re, je, Ve), Ze, Be), Fe && Xe.tag === Ke.tag && ue(Me, se(Xe), Ve);
                } else {
                  var Xe = Re[Ye];if (Xe === Ke && !Fe) Ye--, $e++;else if (null == Xe) Ye--;else if (null == Ke) $e++;else if (Xe.key === Ke.key) {
                    var Ze = null != He && Ye >= Re.length - He.length || null == He && Fe;ee(Me, Xe, Ke, Ue, le(Re, Ye + 1, Ve), Ze, Be), (Fe || $e < qe) && ue(Me, se(Xe), le(Re, je, Ve)), Ye--, $e++;
                  } else break;
                }
              }for (; Ye >= je && qe >= $e;) {
                var Xe = Re[Ye],
                    Ke = Le[qe];if (Xe === Ke && !Fe) Ye--, qe--;else if (null == Xe) Ye--;else if (null == Ke) qe--;else if (Xe.key === Ke.key) {
                  var Ze = null != He && Ye >= Re.length - He.length || null == He && Fe;ee(Me, Xe, Ke, Ue, le(Re, Ye + 1, Ve), Ze, Be), Fe && Xe.tag === Ke.tag && ue(Me, se(Xe), Ve), null != Xe.dom && (Ve = Xe.dom), Ye--, qe--;
                } else {
                  if (We || (We = oe(Re, Ye)), null != Ke) {
                    var Qe = We[Ke.key];if (null != Qe) {
                      var Je = Re[Qe],
                          Ze = null != He && Qe >= Re.length - He.length || null == He && Fe;ee(Me, Je, Ke, Ue, le(Re, Ye + 1, Ve), Fe, Be), ue(Me, se(Je), Ve), Re[Qe].skip = !0, null != Je.dom && (Ve = Je.dom);
                    } else {
                      var et = Y(Me, Ke, Ue, void 0, Ve);Ve = et;
                    }
                  }qe--;
                }if (qe < $e) break;
              }$(Me, Le, $e, qe + 1, Ue, Ve, Be), fe(Re, je, Ye + 1, Le);
            }
          }function ee(Me, Re, Le, Fe, Ue, Ve, Be) {
            var ze = Re.tag,
                Ge = Le.tag;if (ze === Ge) {
              if (Le.state = Re.state, Le._state = Re._state, Le.events = Re.events, !Ve && De(Le, Re)) return;'string' == typeof ze ? (null != Le.attrs && (Ve ? (Le.state = {}, we(Le.attrs, Le, Fe)) : Ee(Le.attrs, Le, Fe)), '#' === ze ? te(Re, Le) : '<' === ze ? ne(Me, Re, Le, Ue) : '[' === ze ? ae(Me, Re, Le, Ve, Fe, Ue, Be) : ie(Re, Le, Ve, Fe, Be)) : de(Me, Re, Le, Fe, Ue, Ve, Be);
            } else me(Re, null), Y(Me, Le, Fe, Be, Ue);
          }function te(Me, Re) {
            Me.children.toString() !== Re.children.toString() && (Me.dom.nodeValue = Re.children), Re.dom = Me.dom;
          }function ne(Me, Re, Le, Fe) {
            Re.children === Le.children ? (Le.dom = Re.dom, Le.domSize = Re.domSize) : (se(Re), W(Me, Le, Fe));
          }function ae(Me, Re, Le, Fe, Ue, Ve, Be) {
            J(Me, Re.children, Le.children, Fe, Ue, Ve, Be);var ze = 0,
                Ge = Le.children;if (Le.dom = null, null != Ge) {
              for (var je, He = 0; He < Ge.length; He++) {
                je = Ge[He], null != je && null != je.dom && (null == Le.dom && (Le.dom = je.dom), ze += je.domSize || 1);
              }1 !== ze && (Le.domSize = ze);
            }
          }function ie(Me, Re, Le, Fe, Ue) {
            var Ve = Re.dom = Me.dom;switch (Re.tag) {case 'svg':
                Ue = 'http://www.w3.org/2000/svg';break;case 'math':
                Ue = 'http://www.w3.org/1998/Math/MathML';}'textarea' === Re.tag && (null == Re.attrs && (Re.attrs = {}), null != Re.text && (Re.attrs.value = Re.text, Re.text = void 0)), ye(Re, Me.attrs, Re.attrs, Ue), null != Re.attrs && null != Re.attrs.contenteditable ? ce(Re) : null != Me.text && null != Re.text && '' !== Re.text ? Me.text.toString() !== Re.text.toString() && (Me.dom.firstChild.nodeValue = Re.text) : (null != Me.text && (Me.children = [u('#', void 0, void 0, Me.text, void 0, Me.dom.firstChild)]), null != Re.text && (Re.children = [u('#', void 0, void 0, Re.text, void 0, void 0)]), J(Ve, Me.children, Re.children, Le, Fe, null, Ue));
          }function de(Me, Re, Le, Fe, Ue, Ve, Be) {
            if (Ve) Z(Le, Fe);else {
              if (Le.instance = u.normalize(Le._state.view.call(Le.state, Le)), Le.instance === Le) throw Error('A view cannot return the vnode it received as argument');null != Le.attrs && Ee(Le.attrs, Le, Fe), Ee(Le._state, Le, Fe);
            }null == Le.instance ? null == Re.instance ? (Le.dom = Re.dom, Le.domSize = Re.domSize) : (me(Re.instance, null), Le.dom = void 0, Le.domSize = 0) : (null == Re.instance ? Y(Me, Le.instance, Fe, Be, Ue) : ee(Me, Re.instance, Le.instance, Fe, Ue, Ve, Be), Le.dom = Le.instance.dom, Le.domSize = Le.instance.domSize);
          }function re(Me, Re) {
            if (null != Me.pool && _Mathabs(Me.pool.length - Re.length) <= _Mathabs(Me.length - Re.length)) {
              var Le = Me[0] && Me[0].children && Me[0].children.length || 0,
                  Fe = Me.pool[0] && Me.pool[0].children && Me.pool[0].children.length || 0,
                  Ue = Re[0] && Re[0].children && Re[0].children.length || 0;if (_Mathabs(Fe - Ue) <= _Mathabs(Le - Ue)) return !0;
            }return !1;
          }function oe(Me, Re) {
            for (var Ue, Le = {}, Fe = 0, Fe = 0; Fe < Re; Fe++) {
              if (Ue = Me[Fe], null != Ue) {
                var Ve = Ue.key;null != Ve && (Le[Ve] = Fe);
              }
            }return Le;
          }function se(Me) {
            var Re = Me.domSize;if (null != Re || null == Me.dom) {
              var Le = Ne.createDocumentFragment();if (0 < Re) {
                for (var Fe = Me.dom; --Re;) {
                  Le.appendChild(Fe.nextSibling);
                }Le.insertBefore(Fe, Le.firstChild);
              }return Le;
            }return Me.dom;
          }function le(Me, Re, Le) {
            for (; Re < Me.length; Re++) {
              if (null != Me[Re] && null != Me[Re].dom) return Me[Re].dom;
            }return Le;
          }function ue(Me, Re, Le) {
            Le && Le.parentNode ? Me.insertBefore(Re, Le) : Me.appendChild(Re);
          }function ce(Me) {
            var Re = Me.children;if (null != Re && 1 === Re.length && '<' === Re[0].tag) {
              var Le = Re[0].children;Me.dom.innerHTML !== Le && (Me.dom.innerHTML = Le);
            } else if (null != Me.text || null != Re && 0 !== Re.length) throw new Error('Child node of a contenteditable must be trusted');
          }function fe(Me, Re, Le, Fe) {
            for (var Ve, Ue = Re; Ue < Le; Ue++) {
              Ve = Me[Ue], null != Ve && (Ve.skip ? Ve.skip = !1 : me(Ve, Fe));
            }
          }function me(Me, Re) {
            function Le() {
              if (++Ue == Fe && (pe(Me), Me.dom)) {
                var Be = Me.domSize || 1;if (1 < Be) for (var ze = Me.dom; --Be;) {
                  _e(ze.nextSibling);
                }_e(Me.dom), null == Re || null != Me.domSize || Te(Me.attrs) || 'string' != typeof Me.tag || (Re.pool ? Re.pool.push(Me) : Re.pool = [Me]);
              }
            }var Fe = 1,
                Ue = 0;if (Me.attrs && 'function' == typeof Me.attrs.onbeforeremove) {
              var Ve = Me.attrs.onbeforeremove.call(Me.state, Me);null != Ve && 'function' == typeof Ve.then && (Fe++, Ve.then(Le, Le));
            }if ('string' != typeof Me.tag && 'function' == typeof Me._state.onbeforeremove) {
              var Ve = Me._state.onbeforeremove.call(Me.state, Me);null != Ve && 'function' == typeof Ve.then && (Fe++, Ve.then(Le, Le));
            }Le();
          }function _e(Me) {
            var Re = Me.parentNode;null != Re && Re.removeChild(Me);
          }function pe(Me) {
            if (Me.attrs && 'function' == typeof Me.attrs.onremove && Me.attrs.onremove.call(Me.state, Me), 'string' != typeof Me.tag && 'function' == typeof Me._state.onremove && Me._state.onremove.call(Me.state, Me), null != Me.instance) pe(Me.instance);else {
              var Re = Me.children;if (Array.isArray(Re)) for (var Fe, Le = 0; Le < Re.length; Le++) {
                Fe = Re[Le], null != Fe && pe(Fe);
              }
            }
          }function he(Me, Re, Le) {
            for (var Fe in Re) {
              ge(Me, Fe, null, Re[Fe], Le);
            }
          }function ge(Me, Re, Le, Fe, Ue) {
            var Ve = Me.dom;if ('key' !== Re && 'is' !== Re && (Le !== Fe || be(Me, Re) || 'object' === ('undefined' == typeof Fe ? 'undefined' : l(Fe))) && 'undefined' != typeof Fe && !Ce(Re)) {
              var Be = Re.indexOf(':');if (-1 < Be && 'xlink' === Re.substr(0, Be)) Ve.setAttributeNS('http://www.w3.org/1999/xlink', Re.slice(Be + 1), Fe);else if ('o' === Re[0] && 'n' === Re[1] && 'function' == typeof Fe) Se(Me, Re, Fe);else if ('style' === Re) xe(Ve, Le, Fe);else if (Re in Ve && !ke(Re) && void 0 === Ue && !Ae(Me)) {
                if ('input' === Me.tag && 'value' === Re && Me.dom.value == Fe && Me.dom === Ne.activeElement) return;if ('select' === Me.tag && 'value' === Re && Me.dom.value == Fe && Me.dom === Ne.activeElement) return;if ('option' === Me.tag && 'value' === Re && Me.dom.value == Fe) return;if ('input' === Me.tag && 'type' === Re) return void Ve.setAttribute(Re, Fe);Ve[Re] = Fe;
              } else 'boolean' == typeof Fe ? Fe ? Ve.setAttribute(Re, '') : Ve.removeAttribute(Re) : Ve.setAttribute('className' === Re ? 'class' : Re, Fe);
            }
          }function ve(Me) {
            var Re = Me.attrs;'select' === Me.tag && null != Re && ('value' in Re && ge(Me, 'value', null, Re.value, void 0), 'selectedIndex' in Re && ge(Me, 'selectedIndex', null, Re.selectedIndex, void 0));
          }function ye(Me, Re, Le, Fe) {
            if (null != Le) for (var Ue in Le) {
              ge(Me, Ue, Re && Re[Ue], Le[Ue], Fe);
            }if (null != Re) for (var Ue in Re) {
              null != Le && Ue in Le || ('className' == Ue && (Ue = 'class'), 'o' !== Ue[0] || 'n' !== Ue[1] || Ce(Ue) ? 'key' != Ue && Me.dom.removeAttribute(Ue) : Se(Me, Ue, void 0));
            }
          }function be(Me, Re) {
            return 'value' === Re || 'checked' === Re || 'selectedIndex' === Re || 'selected' === Re && Me.dom === Ne.activeElement;
          }function Ce(Me) {
            return 'oninit' === Me || 'oncreate' === Me || 'onupdate' === Me || 'onremove' === Me || 'onbeforeremove' === Me || 'onbeforeupdate' === Me;
          }function ke(Me) {
            return 'href' === Me || 'list' === Me || 'form' === Me || 'width' === Me || 'height' === Me;
          }function Ae(Me) {
            return Me.attrs.is || -1 < Me.tag.indexOf('-');
          }function Te(Me) {
            return null != Me && (Me.oncreate || Me.onupdate || Me.onbeforeremove || Me.onremove);
          }function xe(Me, Re, Le) {
            if (Re === Le && (Me.style.cssText = '', Re = null), null == Le) Me.style.cssText = '';else if ('string' == typeof Le) Me.style.cssText = Le;else {
              for (var Fe in 'string' == typeof Re && (Me.style.cssText = ''), Le) {
                Me.style[Fe] = Le[Fe];
              }if (null != Re && 'string' != typeof Re) for (var Fe in Re) {
                Fe in Le || (Me.style[Fe] = '');
              }
            }
          }function Se(Me, Re, Le) {
            var Fe = Me.dom,
                Ue = 'function' == typeof Oe ? function (Be) {
              var ze = Le.call(Fe, Be);return Oe.call(Fe, Be), ze;
            } : Le;if (Re in Fe) Fe[Re] = 'function' == typeof Le ? Ue : null;else {
              var Ve = Re.slice(2);if (void 0 === Me.events && (Me.events = {}), Me.events[Re] === Ue) return;null != Me.events[Re] && Fe.removeEventListener(Ve, Me.events[Re], !1), 'function' == typeof Le && (Me.events[Re] = Ue, Fe.addEventListener(Ve, Me.events[Re], !1));
            }
          }function we(Me, Re, Le) {
            'function' == typeof Me.oninit && Me.oninit.call(Re.state, Re), 'function' == typeof Me.oncreate && Le.push(Me.oncreate.bind(Re.state, Re));
          }function Ee(Me, Re, Le) {
            'function' == typeof Me.onupdate && Le.push(Me.onupdate.bind(Re.state, Re));
          }function De(Me, Re) {
            var Le, Fe;return null != Me.attrs && 'function' == typeof Me.attrs.onbeforeupdate && (Le = Me.attrs.onbeforeupdate.call(Me.state, Me, Re)), 'string' != typeof Me.tag && 'function' == typeof Me._state.onbeforeupdate && (Fe = Me._state.onbeforeupdate.call(Me.state, Me, Re)), void 0 === Le && void 0 === Fe || Le || Fe ? !1 : (Me.dom = Re.dom, Me.domSize = Re.domSize, Me.instance = Re.instance, !0);
          }var Oe,
              Ne = G.document,
              Pe = Ne.createDocumentFragment();return { render: function render(Me, Re) {
              if (!Me) throw new Error('Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.');var Le = [],
                  Fe = Ne.activeElement;null == Me.vnodes && (Me.textContent = ''), Array.isArray(Re) || (Re = [Re]), J(Me, Me.vnodes, u.normalizeChildren(Re), !1, Le, null, void 0), Me.vnodes = Re;for (var Ue = 0; Ue < Le.length; Ue++) {
                Le[Ue]();
              }Ne.activeElement !== Fe && Fe.focus();
            }, setEventCallback: function setEventCallback(Me) {
              return Oe = Me;
            } };
        },
            M = function (G) {
          function $(X) {
            var K = W.indexOf(X);-1 < K && W.splice(K, 2);
          }function Y() {
            for (var X = 1; X < W.length; X += 2) {
              W[X]();
            }
          }var q = P(G);q.setEventCallback(function (X) {
            !1 !== X.redraw && Y();
          });var W = [];return { subscribe: function subscribe(X, K) {
              $(X), W.push(X, b(K));
            }, unsubscribe: $, redraw: Y, render: q.render };
        }(window);N.setCompletionCallback(M.redraw);S.mount = function (G) {
          return function (H, $) {
            if (null === $) return G.render(H, []), void G.unsubscribe(H);if (null == $.view && 'function' != typeof $) throw new Error('m.mount(element, component) expects a component, not a vnode');G.subscribe(H, function () {
              G.render(H, u($));
            }), G.redraw();
          };
        }(M);var F = function F(G) {
          if ('' === G || null == G) return {};'?' === G.charAt(0) && (G = G.slice(1));for (var H = G.split('&'), $ = {}, Y = {}, q = 0; q < H.length; q++) {
            var W = H[q].split('='),
                X = decodeURIComponent(W[0]),
                K = 2 === W.length ? decodeURIComponent(W[1]) : '';'true' === K ? K = !0 : 'false' === K && (K = !1);var Z = X.split(/\]\[?|\[/),
                Q = $;-1 < X.indexOf('[') && Z.pop();for (var J = 0; J < Z.length; J++) {
              var ee = Z[J],
                  te = Z[J + 1],
                  ne = '' == te || !isNaN(parseInt(te, 10)),
                  ae = J === Z.length - 1;if ('' === ee) {
                var X = Z.slice(0, J).join();null == Y[X] && (Y[X] = 0), ee = Y[X]++;
              }null == Q[ee] && (Q[ee] = ae ? K : ne ? [] : {}), Q = Q[ee];
            }
          }return $;
        },
            U = function U(G) {
          function H(Z) {
            var Q = G.location[Z].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);return 'pathname' === Z && '/' !== Q[0] && (Q = '/' + Q), Q;
          }function $(Z) {
            return function () {
              null != X || (X = W(function () {
                X = null, Z();
              }));
            };
          }function Y(Z, Q, J) {
            var ee = Z.indexOf('?'),
                te = Z.indexOf('#'),
                ne = -1 < ee ? ee : -1 < te ? te : Z.length;if (-1 < ee) {
              var ae = -1 < te ? te : Z.length,
                  ie = F(Z.slice(ee + 1, ae));for (var de in ie) {
                Q[de] = ie[de];
              }
            }if (-1 < te) {
              var re = F(Z.slice(te + 1));for (var de in re) {
                J[de] = re[de];
              }
            }return Z.slice(0, ne);
          }var X,
              q = 'function' == typeof G.history.pushState,
              W = 'function' == typeof d ? d : setTimeout,
              K = { prefix: '#!' };return K.getPath = function () {
            var Z = K.prefix.charAt(0);return '#' === Z ? H('hash').slice(K.prefix.length) : '?' === Z ? H('search').slice(K.prefix.length) + H('hash') : H('pathname').slice(K.prefix.length) + H('search') + H('hash');
          }, K.setPath = function (Z, Q, J) {
            var ee = {},
                te = {};if (Z = Y(Z, ee, te), null != Q) {
              for (var ne in Q) {
                ee[ne] = Q[ne];
              }Z = Z.replace(/:([^\/]+)/g, function (oe, se) {
                return delete ee[se], Q[se];
              });
            }var ae = E(ee);ae && (Z += '?' + ae);var ie = E(te);if (ie && (Z += '#' + ie), q) {
              var de = J ? J.state : null,
                  re = J ? J.title : null;G.onpopstate(), J && J.replace ? G.history.replaceState(de, re, K.prefix + Z) : G.history.pushState(de, re, K.prefix + Z);
            } else G.location.href = K.prefix + Z;
          }, K.defineRoutes = function (Z, Q, J) {
            function ee() {
              var te = K.getPath(),
                  ne = {},
                  ae = Y(te, ne, ne),
                  ie = G.history.state;if (null != ie) for (var de in ie) {
                ne[de] = ie[de];
              }for (var re in Z) {
                var oe = new RegExp('^' + re.replace(/:[^\/]+?\.{3}/g, '(.*?)').replace(/:[^\/]+/g, '([^\\/]+)') + '/?$');if (oe.test(ae)) return void ae.replace(oe, function () {
                  for (var se = re.match(/:[^\/]+/g) || [], le = [].slice.call(arguments, 1, -2), ue = 0; ue < se.length; ue++) {
                    ne[se[ue].replace(/:|\./g, '')] = decodeURIComponent(le[ue]);
                  }Q(Z[re], ne, te, re);
                });
              }J(te, ne);
            }q ? G.onpopstate = $(ee) : '#' === K.prefix.charAt(0) && (G.onhashchange = ee), ee();
          }, K;
        };S.route = function (G, H) {
          var q,
              W,
              X,
              K,
              _Z,
              $ = U(G),
              Y = function Y(ee) {
            return ee;
          },
              Q = function Q(ee, te, ne) {
            if (null == ee) throw new Error('Ensure the DOM element that was passed to `m.route` is not undefined');var ae = function ae() {
              null != q && H.render(ee, q(u(W, X.key, X)));
            },
                ie = function ie(re) {
              if (re !== te) $.setPath(te, null, { replace: !0 });else throw new Error('Could not resolve default route ' + te);
            };$.defineRoutes(ne, function (de, re, oe) {
              var se = _Z = function Z(ue, ce) {
                se !== _Z || (W = null != ce && ('function' == typeof ce.view || 'function' == typeof ce) ? ce : 'div', X = re, K = oe, _Z = null, q = (ue.render || Y).bind(ue), ae());
              };de.view || 'function' == typeof de ? se({}, de) : de.onmatch ? w.resolve(de.onmatch(re, oe)).then(function (le) {
                se(de, le);
              }, ie) : se(de, 'div');
            }, ie), H.subscribe(ee, ae);
          };return Q.set = function (J, ee, te) {
            null != _Z && (te = { replace: !0 }), _Z = null, $.setPath(J, ee, te);
          }, Q.get = function () {
            return K;
          }, Q.prefix = function (J) {
            $.prefix = J;
          }, Q.link = function (J) {
            J.dom.setAttribute('href', $.prefix + J.attrs.href), J.dom.onclick = function (ee) {
              if (!(ee.ctrlKey || ee.metaKey || ee.shiftKey || 2 === ee.which)) {
                ee.preventDefault(), ee.redraw = !1;var te = this.getAttribute('href');0 === te.indexOf($.prefix) && (te = te.slice($.prefix.length)), Q.set(te, void 0, void 0);
              }
            };
          }, Q.param = function (J) {
            return 'undefined' != typeof X && 'undefined' != typeof J ? X[J] : X;
          }, Q;
        }(window, M), S.withAttr = function (z, G, H) {
          return function ($) {
            G.call(H || this, z in $.currentTarget ? $.currentTarget[z] : $.currentTarget.getAttribute(z));
          };
        };var B = P(window);S.render = B.render, S.redraw = M.redraw, S.request = N.request, S.jsonp = N.jsonp, S.parseQueryString = F, S.buildQueryString = E, S.version = '1.1.0', S.vnode = u, t.exports = S;
      })();
    }).call(n, a(29).setImmediate, a(7));
  }, function (t) {
    'use strict';
    var d = 'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator) ? function (l) {
      return typeof l === 'undefined' ? 'undefined' : _typeof(l);
    } : function (l) {
      return l && 'function' == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l === 'undefined' ? 'undefined' : _typeof(l);
    },
        r;r = function () {
      return this;
    }();try {
      r = r || Function('return this')() || (1, eval)('this');
    } catch (l) {
      'object' === ('undefined' == typeof window ? 'undefined' : d(window)) && (r = window);
    }t.exports = r;
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, '', { mdcCard: 'mdc-card', mdcCardThemeDark: 'mdc-card--theme-dark' }, function (_) {
          return 'mdcCard' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    function d(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }Object.defineProperty(n, '__esModule', { value: !0 });var r = a(6),
        l = d(r),
        u = a(1),
        f = d(u);n.default = { view: function view(h) {
        return (0, l.default)(f.default, Object.assign({ mdcButtonCompact: !0, mdcCardAction: !0, classNames: Object.assign({ mdcCardAction: 'mdc-card__action' }, h.attrs.classNames) }, h.attrs), h.children);
      } };
  }, function (t, n, a) {
    'use strict';
    function r(f, _) {
      return _ === f.attrs.type || f.attrs[_];
    }Object.defineProperty(n, '__esModule', { value: !0 });var l = a(0),
        u = function (f) {
      return f && f.__esModule ? f : { default: f };
    }(l);n.default = { view: function view(_) {
        return (0, u.default)(_, r(_, 'mdcCardHorizontalBlock') ? '' : 'section', { mdcCardMedia: 'mdc-card__media', mdcCardActions: 'mdc-card__actions', mdcCardActionsVertical: 'mdc-card__actions--vertical', mdcCardPrimary: 'mdc-card__primary', mdcCardSupportingText: 'mdc-card__supporting-text', mdcCardHorizontalBlock: 'mdc-card__horizontal-block' }, function (h) {
          return r(_, h);
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'h2', { mdcCardSubtitle: 'mdc-card__subtitle' });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'h1', { mdcCardTitle: 'mdc-card__title', mdcCardTitleLarge: 'mdc-card__title--large' }, function (_) {
          return 'mdcCardTitle' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'ul', { mdcList: 'mdc-list', mdcListDense: 'mdc-list--dense', mdcListAvatarList: 'mdc-list--avatar-list', mdcListTwoLine: 'mdc-list--two-line', mdcListThemeDark: 'mdc-list--theme-dark' }, function (_) {
          return 'mdcList' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'li', { mdcListDivider: 'mdc-list-divider', mdcListDividerInset: 'mdc-list-divider--inset' }, function (_) {
          return 'mdcListDivider' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, '', { mdcListGroup: 'mdc-list-group' });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'h3', { mdcListGroupSubheader: 'mdc-list-group__subheader' });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (f) {
      return f && f.__esModule ? f : { default: f };
    }(r),
        u = a(4);n.default = { oncreate: function oncreate(_) {
        u.MDCRipple.attachTo(_.dom);
      }, view: function view(_) {
        return (0, l.default)(_, 'li', { mdcListItem: 'mdc-list-item' });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'span', { mdcListItemText: 'mdc-list-item__text', mdcListItemTextPrimary: 'mdc-list-item__text__primary', mdcListItemTextSecondary: 'mdc-list-item__text__secondary', mdcListItemStartDetail: 'mdc-list-item__start-detail', mdcListItemEndDetail: 'mdc-list-item__end-detail' }, function (_) {
          return f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'header', { mdcToolbar: 'mdc-toolbar', mdcToolbarFixed: 'mdc-toolbar--fixed' }, function (_) {
          return 'mdcToolbar' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'section', { mdcToolbarSection: 'mdc-toolbar__section', mdcToolbarSectionAlignStart: 'mdc-toolbar__section--align-start', mdcToolbarSectionAlignEnd: 'mdc-toolbar__section--align-end' }, function (_) {
          return 'mdcToolbarSection' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'span', { mdcToolbarTitle: 'mdc-toolbar__title' });
      } };
  }, function (t, n, a) {
    'use strict';
    function d(q) {
      return q && q.__esModule ? q : { default: q };
    }Object.defineProperty(n, '__esModule', { value: !0 }), n.listDivider = n.listGroupSubheader = n.listGroup = n.listItemContent = n.listItem = n.list = n.cardSubtitle = n.cardTitle = n.cardBlock = n.cardActionButton = n.card = n.toolbarTitle = n.toolbarSection = n.toolbar = n.button = void 0;var r = a(1),
        l = d(r),
        u = a(19),
        f = d(u),
        _ = a(21),
        h = d(_),
        b = a(20),
        C = d(b),
        A = a(8),
        T = d(A),
        S = a(9),
        w = d(S),
        E = a(10),
        D = d(E),
        I = a(12),
        N = d(I),
        P = a(11),
        O = d(P),
        M = a(13),
        R = d(M),
        L = a(17),
        F = d(L),
        U = a(18),
        V = d(U),
        B = a(15),
        z = d(B),
        G = a(16),
        H = d(G),
        $ = a(14),
        Y = d($);n.button = l.default, n.toolbar = f.default, n.toolbarSection = C.default, n.toolbarTitle = h.default, n.card = T.default, n.cardActionButton = w.default, n.cardBlock = D.default, n.cardTitle = N.default, n.cardSubtitle = O.default, n.list = R.default, n.listItem = F.default, n.listItemContent = V.default, n.listGroup = z.default, n.listGroupSubheader = H.default, n.listDivider = Y.default;
  }, function (t, n) {
    'use strict';
    function d(C) {
      return C.document !== void 0 && 'function' == typeof C.document.createElement;
    }function r(C) {
      return C in h || C in b;
    }function l(C, A, T) {
      return 'animationstart' === C || 'animationend' === C || 'animationiteration' === C ? 'animation' in T.style ? A[C].noPrefix : A[C].webkitPrefix : 'transitionend' === C ? 'transition' in T.style ? A[C].noPrefix : A[C].webkitPrefix : A[C].noPrefix;
    }function u(C, A) {
      if (!d(C) || !r(A)) return A;var T = A in h ? h : b,
          S = C.document.createElement('div'),
          w = '';return w = T === h ? l(A, T, S) : T[A].noPrefix in S.style ? T[A].noPrefix : T[A].webkitPrefix, w;
    }Object.defineProperty(n, '__esModule', { value: !0 }), n.getCorrectEventName = function (C, A) {
      return u(C, A);
    }, n.getCorrectPropertyName = function (C, A) {
      return u(C, A);
    };var h = { animationstart: { noPrefix: 'animationstart', webkitPrefix: 'webkitAnimationStart' }, animationend: { noPrefix: 'animationend', webkitPrefix: 'webkitAnimationEnd' }, animationiteration: { noPrefix: 'animationiteration', webkitPrefix: 'webkitAnimationIteration' }, transitionend: { noPrefix: 'transitionend', webkitPrefix: 'webkitTransitionEnd' } },
        b = { animation: { noPrefix: 'animation', webkitPrefix: '-webkit-animation' }, transform: { noPrefix: 'transform', webkitPrefix: '-webkit-transform' }, transition: { noPrefix: 'transition', webkitPrefix: '-webkit-transition' } };
  }, function (t, n, a) {
    'use strict';
    function r(h, b) {
      if (!(h instanceof b)) throw new TypeError('Cannot call a class as a function');
    }Object.defineProperty(n, '__esModule', { value: !0 });var l = function () {
      function h(b, C) {
        for (var T, A = 0; A < C.length; A++) {
          T = C[A], T.enumerable = T.enumerable || !1, T.configurable = !0, 'value' in T && (T.writable = !0), Object.defineProperty(b, T.key, T);
        }
      }return function (b, C, A) {
        return C && h(b.prototype, C), A && h(b, A), b;
      };
    }(),
        u = a(2),
        f = function (h) {
      return h && h.__esModule ? h : { default: h };
    }(u),
        _ = function () {
      function h(b) {
        var C = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;r(this, h), this.root_ = b;for (var A = arguments.length, T = Array(2 < A ? A - 2 : 0), S = 2; S < A; S++) {
          T[S - 2] = arguments[S];
        }this.initialize.apply(this, T), this.foundation_ = void 0 === C ? this.getDefaultFoundation() : C, this.foundation_.init(), this.initialSyncWithDOM();
      }return l(h, null, [{ key: 'attachTo', value: function value(C) {
          return new h(C, new f.default());
        } }]), l(h, [{ key: 'initialize', value: function value() {} }, { key: 'getDefaultFoundation', value: function value() {
          throw new Error('Subclasses must override getDefaultFoundation to return a properly configured foundation class');
        } }, { key: 'initialSyncWithDOM', value: function value() {} }, { key: 'destroy', value: function value() {
          this.foundation_.destroy();
        } }, { key: 'listen', value: function value(C, A) {
          this.root_.addEventListener(C, A);
        } }, { key: 'unlisten', value: function value(C, A) {
          this.root_.removeEventListener(C, A);
        } }, { key: 'emit', value: function value(C, A) {
          var T;'function' == typeof CustomEvent ? T = new CustomEvent(C, { detail: A }) : (T = document.createEvent('CustomEvent'), T.initCustomEvent(C, !1, !1, A)), this.root_.dispatchEvent(T);
        } }]), h;
    }();n.default = _;
  }, function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var d = n.ROOT = 'mdc-ripple',
        r = n.UPGRADED = d + '-upgraded',
        l = n.cssClasses = { ROOT: r, UNBOUNDED: r + '--unbounded', BG_ACTIVE: r + '--background-active', BG_BOUNDED_ACTIVE_FILL: r + '--background-bounded-active-fill', FG_BOUNDED_ACTIVE_FILL: r + '--foreground-bounded-active-fill', FG_UNBOUNDED_ACTIVATION: r + '--foreground-unbounded-activation', FG_UNBOUNDED_DEACTIVATION: r + '--foreground-unbounded-deactivation' },
        u = n.strings = { VAR_SURFACE_WIDTH: '--' + d + '-surface-width', VAR_SURFACE_HEIGHT: '--' + d + '-surface-height', VAR_FG_SIZE: '--' + d + '-fg-size', VAR_FG_UNBOUNDED_OPACITY_DURATION: '--' + d + '-fg-unbounded-opacity-duration', VAR_FG_UNBOUNDED_TRANSFORM_DURATION: '--' + d + '-fg-unbounded-transform-duration', VAR_LEFT: '--' + d + '-left', VAR_TOP: '--' + d + '-top', VAR_TRANSLATE_END: '--' + d + '-translate-end', VAR_FG_APPROX_XF: '--' + d + '-fg-approx-xf', VAR_FG_SCALE: '--' + d + '-fg-scale', VAR_FG_TRANSLATE_START: '--' + d + '-fg-translate-start', VAR_FG_TRANSLATE_END: '--' + d + '-fg-translate-end' },
        f = n.numbers = { FG_TRANSFORM_DELAY_MS: 80, OPACITY_DURATION_DIVISOR: 3, ACTIVE_OPACITY_DURATION_MS: 110, MIN_OPACITY_DURATION_MS: 200, UNBOUNDED_TRANSFORM_DURATION_MS: 200, PADDING: 10, INITIAL_ORIGIN_SCALE: 0.6 };
  }, function (t, n, a) {
    'use strict';
    function d(T, S) {
      if (!(T instanceof S)) throw new TypeError('Cannot call a class as a function');
    }function r(T, S) {
      if (!T) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return S && ('object' == (typeof S === 'undefined' ? 'undefined' : _typeof(S)) || 'function' == typeof S) ? S : T;
    }function l(T, S) {
      if ('function' != typeof S && null !== S) throw new TypeError('Super expression must either be null or a function, not ' + (typeof S === 'undefined' ? 'undefined' : _typeof(S)));T.prototype = Object.create(S && S.prototype, { constructor: { value: T, enumerable: !1, writable: !0, configurable: !0 } }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(T, S) : T.__proto__ = S);
    }Object.defineProperty(n, '__esModule', { value: !0 });var u = function () {
      function T(S, w) {
        for (var D, E = 0; E < w.length; E++) {
          D = w[E], D.enumerable = D.enumerable || !1, D.configurable = !0, 'value' in D && (D.writable = !0), Object.defineProperty(S, D.key, D);
        }
      }return function (S, w, E) {
        return w && T(S.prototype, w), E && T(S, E), S;
      };
    }(),
        f = a(3),
        _ = a(23),
        h = a(25),
        b = a(5),
        C = { mouseup: 'mousedown', pointerup: 'pointerdown', touchend: 'touchstart', keyup: 'keydown', blur: 'focus' },
        A = function (T) {
      function S(w) {
        d(this, S);var E = r(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, Object.assign(S.defaultAdapter, w)));return E.layoutFrame_ = 0, E.frame_ = { width: 0, height: 0 }, E.activationState_ = E.defaultActivationState_(), E.xfDuration_ = 0, E.initialSize_ = 0, E.maxRadius_ = 0, E.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }], E.listeners_ = { activate: function activate(I) {
            return E.activate_(I);
          }, deactivate: function deactivate(I) {
            return E.deactivate_(I);
          }, focus: function focus() {
            return requestAnimationFrame(function () {
              return E.adapter_.addClass(S.cssClasses.BG_ACTIVE);
            });
          }, blur: function blur() {
            return requestAnimationFrame(function () {
              return E.adapter_.removeClass(S.cssClasses.BG_ACTIVE);
            });
          } }, E.unboundedOpacityFadeTimer_ = 0, E.resizeHandler_ = function () {
          return E.layout();
        }, E.cancelBgBounded_ = function () {}, E.cancelFgBounded_ = function () {}, E.cancelFgUnbounded_ = function () {}, E.unboundedCoords_ = { left: 0, top: 0 }, E.fgScale_ = 0, E;
      }return l(S, T), u(S, [{ key: 'isSupported_', get: function get() {
          return this.adapter_.browserSupportsCssVars();
        } }], [{ key: 'cssClasses', get: function get() {
          return h.cssClasses;
        } }, { key: 'strings', get: function get() {
          return h.strings;
        } }, { key: 'numbers', get: function get() {
          return h.numbers;
        } }, { key: 'defaultAdapter', get: function get() {
          return { browserSupportsCssVars: function browserSupportsCssVars() {}, isUnbounded: function isUnbounded() {}, isSurfaceActive: function isSurfaceActive() {}, addClass: function addClass() {}, removeClass: function removeClass() {}, registerInteractionHandler: function registerInteractionHandler() {}, deregisterInteractionHandler: function deregisterInteractionHandler() {}, registerResizeHandler: function registerResizeHandler() {}, deregisterResizeHandler: function deregisterResizeHandler() {}, updateCssVariable: function updateCssVariable() {}, computeBoundingRect: function computeBoundingRect() {}, getWindowPageOffset: function getWindowPageOffset() {} };
        } }]), u(S, [{ key: 'defaultActivationState_', value: function value() {
          return { isActivated: !1, wasActivatedByPointer: !1, wasElementMadeActive: !1, activationStartTime: 0, activationEvent: null };
        } }, { key: 'init', value: function value() {
          var E = this;if (this.isSupported_) {
            this.addEventListeners_();var D = S.cssClasses,
                I = D.ROOT,
                N = D.UNBOUNDED;requestAnimationFrame(function () {
              E.adapter_.addClass(I), E.adapter_.isUnbounded() && E.adapter_.addClass(N), E.layoutInternal_();
            });
          }
        } }, { key: 'addEventListeners_', value: function value() {
          var E = this;this.listenerInfos_.forEach(function (D) {
            Object.keys(D).forEach(function (I) {
              E.adapter_.registerInteractionHandler(D[I], E.listeners_[I]);
            });
          }), this.adapter_.registerResizeHandler(this.resizeHandler_);
        } }, { key: 'activate_', value: function value(E) {
          var D = this,
              I = this.activationState_;I.isActivated || (I.isActivated = !0, I.isProgrammatic = null === E, I.activationEvent = E, I.wasActivatedByPointer = !I.isProgrammatic && ('mousedown' === E.type || 'touchstart' === E.type || 'pointerdown' === E.type), I.activationStartTime = Date.now(), requestAnimationFrame(function () {
            I.wasElementMadeActive = E && 'keydown' === E.type ? D.adapter_.isSurfaceActive() : !0, I.wasElementMadeActive ? D.animateActivation_() : D.activationState_ = D.defaultActivationState_();
          }));
        } }, { key: 'activate', value: function value() {
          this.activate_(null);
        } }, { key: 'animateActivation_', value: function value() {
          var E = this,
              D = S.cssClasses,
              I = D.BG_ACTIVE,
              N = D.BG_BOUNDED_ACTIVE_FILL,
              P = D.FG_UNBOUNDED_DEACTIVATION,
              O = D.FG_BOUNDED_ACTIVE_FILL;[N, P, O].forEach(function (M) {
            return E.adapter_.removeClass(M);
          }), this.cancelBgBounded_(), this.cancelFgBounded_(), this.cancelFgUnbounded_(), this.unboundedOpacityFadeTimer_ && (clearTimeout(this.unboundedOpacityFadeTimer_), this.unboundedOpacityFadeTimer_ = 0), this.adapter_.addClass(I), this.adapter_.isUnbounded() && this.animateUnboundedActivation_();
        } }, { key: 'animateUnboundedActivation_', value: function value() {
          var E = S.cssClasses.FG_UNBOUNDED_ACTIVATION;this.adapter_.addClass(E);
        } }, { key: 'deactivate_', value: function value(E) {
          var D = this,
              I = this.activationState_;if (I.isActivated) {
            if (I.isProgrammatic) return requestAnimationFrame(function () {
              return D.animateDeactivation_(null, Object.assign({}, I));
            }), void (this.activationState_ = this.defaultActivationState_());var N = C[E.type],
                P = I.activationEvent.type,
                O = N === P,
                M = O;I.wasActivatedByPointer && (M = 'mouseup' === E.type);var R = Object.assign({}, I);O && requestAnimationFrame(function () {
              return D.animateDeactivation_(E, R);
            }), M && (this.activationState_ = this.defaultActivationState_());
          }
        } }, { key: 'deactivate', value: function value() {
          this.deactivate_(null);
        } }, { key: 'animateDeactivation_', value: function value(E, D) {
          var I = D.wasActivatedByPointer,
              N = D.wasElementMadeActive,
              P = D.activationStartTime,
              O = D.isProgrammatic,
              M = S.cssClasses.BG_ACTIVE;if (I || N) {
            this.adapter_.removeClass(M);var R = !O && ('touchend' === E.type || 'pointerup' === E.type || 'mouseup' === E.type);this.adapter_.isUnbounded() ? this.animateUnboundedDeactivation_(this.getUnboundedDeactivationInfo_(P)) : this.animateBoundedDeactivation_(E, R);
          }
        } }, { key: 'animateUnboundedDeactivation_', value: function value(E) {
          var D = this,
              I = E.opacityDuration,
              N = E.transformDuration,
              P = E.approxCurScale,
              O = S.cssClasses,
              M = O.FG_UNBOUNDED_ACTIVATION,
              R = O.FG_UNBOUNDED_DEACTIVATION,
              L = S.strings,
              F = L.VAR_FG_UNBOUNDED_OPACITY_DURATION,
              U = L.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
              V = L.VAR_FG_APPROX_XF;this.adapter_.updateCssVariable(V, 'scale(' + P + ')'), this.adapter_.updateCssVariable(F, I + 'ms'), this.adapter_.updateCssVariable(U, N + 'ms'), this.adapter_.addClass(R), this.adapter_.removeClass(M), this.unboundedOpacityFadeTimer_ = setTimeout(function () {
            D.adapter_.removeClass(R);
          }, I);
        } }, { key: 'getUnboundedDeactivationInfo_', value: function value(E) {
          var D = Date.now() - E,
              I = S.numbers,
              N = I.FG_TRANSFORM_DELAY_MS,
              P = I.OPACITY_DURATION_DIVISOR,
              O = I.ACTIVE_OPACITY_DURATION_MS,
              M = I.UNBOUNDED_TRANSFORM_DURATION_MS,
              R = I.MIN_OPACITY_DURATION_MS,
              L = 0;if (D > N) {
            var F = _Mathmin((D - N) / this.xfDuration_, 1);L = F * this.fgScale_;
          }var V = _Mathmin(D / O, 1),
              B = _Mathmax(R, 1e3 * V / P);return { transformDuration: M, opacityDuration: B, approxCurScale: L };
        } }, { key: 'animateBoundedDeactivation_', value: function value(E, D) {
          var I;I = D ? (0, b.getNormalizedEventCoords)(E, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()) : { x: this.frame_.width / 2, y: this.frame_.height / 2 }, I = { x: I.x - this.initialSize_ / 2, y: I.y - this.initialSize_ / 2 };var N = { x: this.frame_.width / 2 - this.initialSize_ / 2, y: this.frame_.height / 2 - this.initialSize_ / 2 },
              P = S.strings,
              O = P.VAR_FG_TRANSLATE_START,
              M = P.VAR_FG_TRANSLATE_END,
              R = S.cssClasses,
              L = R.BG_BOUNDED_ACTIVE_FILL,
              F = R.FG_BOUNDED_ACTIVE_FILL;this.adapter_.updateCssVariable(O, I.x + 'px, ' + I.y + 'px'), this.adapter_.updateCssVariable(M, N.x + 'px, ' + N.y + 'px'), this.cancelBgBounded_ = (0, b.animateWithClass)(this.adapter_, L, (0, _.getCorrectEventName)(window, 'transitionend')), this.cancelFgBounded_ = (0, b.animateWithClass)(this.adapter_, F, (0, _.getCorrectEventName)(window, 'animationend'));
        } }, { key: 'destroy', value: function value() {
          var E = this;if (this.isSupported_) {
            this.removeEventListeners_();var D = S.cssClasses,
                I = D.ROOT,
                N = D.UNBOUNDED;requestAnimationFrame(function () {
              E.adapter_.removeClass(I), E.adapter_.removeClass(N), E.removeCssVars_();
            });
          }
        } }, { key: 'removeEventListeners_', value: function value() {
          var E = this;this.listenerInfos_.forEach(function (D) {
            Object.keys(D).forEach(function (I) {
              E.adapter_.deregisterInteractionHandler(D[I], E.listeners_[I]);
            });
          }), this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        } }, { key: 'removeCssVars_', value: function value() {
          var E = this,
              D = S.strings;Object.keys(D).forEach(function (I) {
            0 === I.indexOf('VAR_') && E.adapter_.updateCssVariable(D[I], null);
          });
        } }, { key: 'layout', value: function value() {
          var E = this;this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function () {
            E.layoutInternal_(), E.layoutFrame_ = 0;
          });
        } }, { key: 'layoutInternal_', value: function value() {
          this.frame_ = this.adapter_.computeBoundingRect();var E = _Mathmax(this.frame_.height, this.frame_.width),
              D = _Mathsqrt(_Mathpow(this.frame_.width, 2) + _Mathpow(this.frame_.height, 2));this.initialSize_ = E * S.numbers.INITIAL_ORIGIN_SCALE, this.maxRadius_ = D + S.numbers.PADDING, this.fgScale_ = this.maxRadius_ / this.initialSize_, this.xfDuration_ = 1e3 * _Mathsqrt(this.maxRadius_ / 1024), this.updateLayoutCssVars_();
        } }, { key: 'updateLayoutCssVars_', value: function value() {
          var E = S.strings,
              D = E.VAR_SURFACE_WIDTH,
              I = E.VAR_SURFACE_HEIGHT,
              N = E.VAR_FG_SIZE,
              P = E.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
              O = E.VAR_LEFT,
              M = E.VAR_TOP,
              R = E.VAR_FG_SCALE;this.adapter_.updateCssVariable(D, this.frame_.width + 'px'), this.adapter_.updateCssVariable(I, this.frame_.height + 'px'), this.adapter_.updateCssVariable(N, this.initialSize_ + 'px'), this.adapter_.updateCssVariable(P, this.xfDuration_ + 'ms'), this.adapter_.updateCssVariable(R, this.fgScale_), this.adapter_.isUnbounded() && (this.unboundedCoords_ = { left: _Mathround(this.frame_.width / 2 - this.initialSize_ / 2), top: _Mathround(this.frame_.height / 2 - this.initialSize_ / 2) }, this.adapter_.updateCssVariable(O, this.unboundedCoords_.left + 'px'), this.adapter_.updateCssVariable(M, this.unboundedCoords_.top + 'px'));
        } }]), S;
    }(f.MDCFoundation);n.default = A;
  }, function (t) {
    'use strict';
    function d() {
      throw new Error('setTimeout has not been defined');
    }function r() {
      throw new Error('clearTimeout has not been defined');
    }function l(I) {
      if (A === setTimeout) return setTimeout(I, 0);if ((A === d || !A) && setTimeout) return A = setTimeout, setTimeout(I, 0);try {
        return A(I, 0);
      } catch (N) {
        try {
          return A.call(null, I, 0);
        } catch (P) {
          return A.call(this, I, 0);
        }
      }
    }function u(I) {
      if (T === clearTimeout) return clearTimeout(I);if ((T === r || !T) && clearTimeout) return T = clearTimeout, clearTimeout(I);try {
        return T(I);
      } catch (N) {
        try {
          return T.call(null, I);
        } catch (P) {
          return T.call(this, I);
        }
      }
    }function f() {
      w && E && (w = !1, E.length ? S = E.concat(S) : D = -1, S.length && _());
    }function _() {
      if (!w) {
        var I = l(f);w = !0;for (var N = S.length; N;) {
          for (E = S, S = []; ++D < N;) {
            E && E[D].run();
          }D = -1, N = S.length;
        }E = null, w = !1, u(I);
      }
    }function h(I, N) {
      this.fun = I, this.array = N;
    }function b() {}var C = t.exports = {},
        A,
        T;(function () {
      try {
        A = 'function' == typeof setTimeout ? setTimeout : d;
      } catch (I) {
        A = d;
      }try {
        T = 'function' == typeof clearTimeout ? clearTimeout : r;
      } catch (I) {
        T = r;
      }
    })();var S = [],
        w = !1,
        E,
        D = -1;C.nextTick = function (I) {
      var N = Array(arguments.length - 1);if (1 < arguments.length) for (var P = 1; P < arguments.length; P++) {
        N[P - 1] = arguments[P];
      }S.push(new h(I, N)), 1 !== S.length || w || l(_);
    }, h.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, C.title = 'browser', C.browser = !0, C.env = {}, C.argv = [], C.version = '', C.versions = {}, C.on = b, C.addListener = b, C.once = b, C.off = b, C.removeListener = b, C.removeAllListeners = b, C.emit = b, C.binding = function () {
      throw new Error('process.binding is not supported');
    }, C.cwd = function () {
      return '/';
    }, C.chdir = function () {
      throw new Error('process.chdir is not supported');
    }, C.umask = function () {
      return 0;
    };
  }, function (t, n, a) {
    'use strict';
    (function (d, r) {
      (function (l, u) {
        'use strict';
        function f(R) {
          'function' != typeof R && (R = new Function('' + R));for (var L = Array(arguments.length - 1), F = 0; F < L.length; F++) {
            L[F] = arguments[F + 1];
          }var U = { callback: R, args: L };return I[D] = U, O(D), D++;
        }function _(R) {
          delete I[R];
        }function h(R) {
          var L = R.callback,
              F = R.args;switch (F.length) {case 0:
              L();break;case 1:
              L(F[0]);break;case 2:
              L(F[0], F[1]);break;case 3:
              L(F[0], F[1], F[2]);break;default:
              L.apply(u, F);}
        }function b(R) {
          if (N) setTimeout(b, 0, R);else {
            var L = I[R];if (L) {
              N = !0;try {
                h(L);
              } finally {
                _(R), N = !1;
              }
            }
          }
        }function C() {
          O = function O(L) {
            r.nextTick(function () {
              b(L);
            });
          };
        }function A() {
          if (l.postMessage && !l.importScripts) {
            var R = !0,
                L = l.onmessage;return l.onmessage = function () {
              R = !1;
            }, l.postMessage('', '*'), l.onmessage = L, R;
          }
        }function T() {
          var R = 'setImmediate$' + Math.random() + '$',
              L = function L(U) {
            U.source === l && 'string' == typeof U.data && 0 === U.data.indexOf(R) && b(+U.data.slice(R.length));
          };l.addEventListener ? l.addEventListener('message', L, !1) : l.attachEvent('onmessage', L), O = function O(U) {
            l.postMessage(R + U, '*');
          };
        }function S() {
          var R = new MessageChannel();R.port1.onmessage = function (L) {
            var F = L.data;b(F);
          }, O = function O(F) {
            R.port2.postMessage(F);
          };
        }function w() {
          var R = P.documentElement;O = function O(F) {
            var U = P.createElement('script');U.onreadystatechange = function () {
              b(F), U.onreadystatechange = null, R.removeChild(U), U = null;
            }, R.appendChild(U);
          };
        }function E() {
          O = function O(L) {
            setTimeout(b, 0, L);
          };
        }if (!l.setImmediate) {
          var O,
              D = 1,
              I = {},
              N = !1,
              P = l.document,
              M = Object.getPrototypeOf && Object.getPrototypeOf(l);M = M && M.setTimeout ? M : l, '[object process]' === {}.toString.call(l.process) ? C() : A() ? T() : l.MessageChannel ? S() : P && 'onreadystatechange' in P.createElement('script') ? w() : E(), M.setImmediate = f, M.clearImmediate = _;
        }
      })('undefined' == typeof self ? 'undefined' == typeof d ? void 0 : d : self);
    }).call(n, a(7), a(27));
  }, function (t, n, a) {
    'use strict';
    function d(l, u) {
      this._id = l, this._clearFn = u;
    }var r = Function.prototype.apply;n.setTimeout = function () {
      return new d(r.call(setTimeout, window, arguments), clearTimeout);
    }, n.setInterval = function () {
      return new d(r.call(setInterval, window, arguments), clearInterval);
    }, n.clearTimeout = n.clearInterval = function (l) {
      l && l.close();
    }, d.prototype.unref = d.prototype.ref = function () {}, d.prototype.close = function () {
      this._clearFn.call(window, this._id);
    }, n.enroll = function (l, u) {
      clearTimeout(l._idleTimeoutId), l._idleTimeout = u;
    }, n.unenroll = function (l) {
      clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
    }, n._unrefActive = n.active = function (l) {
      clearTimeout(l._idleTimeoutId);var u = l._idleTimeout;0 <= u && (l._idleTimeoutId = setTimeout(function () {
        l._onTimeout && l._onTimeout();
      }, u));
    }, a(28), n.setImmediate = setImmediate, n.clearImmediate = clearImmediate;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).setImmediate, __webpack_require__(0).clearImmediate, __webpack_require__(6)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bundle = __webpack_require__(1);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
function defaultClearTimeout() {
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
})();
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
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
    while (len) {
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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ]);
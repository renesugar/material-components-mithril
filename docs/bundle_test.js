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
    }, n.p = '', n(n.s = 16);
  }([function (t, n, a) {
    'use strict';
    function r(f, h) {
      return Object.keys(f).forEach(function (b, C) {
        h(b, C, f) || delete f[b];
      }), f;
    }Object.defineProperty(n, '__esModule', { value: !0 });var l = a(5),
        u = function (f) {
      return f && f.__esModule ? f : { default: f };
    }(l);n.default = function (f, h, b, C) {
      return (0, u.default)(f.attrs.tag || h, r(Object.assign({}, f.attrs, { class: (f.attrs.class || '').split(' ').filter(function (A) {
          return A;
        }).concat(Object.keys(Object.assign(b, f.attrs.classNames || {})).filter(C || function () {
          return 1;
        })).filter(function (A, T, S) {
          return S.indexOf(A) === T;
        }).map(function (A) {
          return (f.attrs.classNames ? f.attrs.classNames[A] : '') || b[A];
        }).join(' ') }), function (A, T, S) {
        return S.classNames ? !S.classNames[A] : !b[A];
      }), f.children);
    };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (f) {
      return f && f.__esModule ? f : { default: f };
    }(r),
        u = a(21);n.default = { oncreate: function oncreate(h) {
        u.MDCRipple.attachTo(h.dom);
      }, view: function view(h) {
        return (0, l.default)(h, 'button', { mdcButton: 'mdc-button', mdcButtonAccent: 'mdc-button--accent', mdcButtonPrimary: 'mdc-button--primary', mdcButtonRaised: 'mdc-button--raised', mdcButtonDense: 'mdc-button--dense', mdcButtonCompact: 'mdc-button--compact' }, function (b) {
          return 'mdcButton' === b || h.attrs[b];
        });
      } };
  }, function (t, n) {
    'use strict';
    function d(u, f) {
      if (!(u instanceof f)) throw new TypeError('Cannot call a class as a function');
    }Object.defineProperty(n, '__esModule', { value: !0 });var r = function () {
      function u(f, h) {
        for (var C, b = 0; b < h.length; b++) {
          C = h[b], C.enumerable = C.enumerable || !1, C.configurable = !0, 'value' in C && (C.writable = !0), Object.defineProperty(f, C.key, C);
        }
      }return function (f, h, b) {
        return h && u(f.prototype, h), b && u(f, b), f;
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
      } });var l = a(18);Object.defineProperty(n, 'MDCComponent', { enumerable: !0, get: function get() {
        return d(l).default;
      } });
  }, function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 }), n.supportsCssVariables = function (f) {
      var h = f.CSS && 'function' == typeof f.CSS.supports;if (h) {
        var b = f.CSS.supports('--css-vars', 'yes'),
            C = f.CSS.supports('(--css-vars: yes)') && f.CSS.supports('color', '#00000000');return b || C;
      }
    }, n.getMatchesProperty = function (f) {
      return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (h) {
        return h in f;
      }).pop();
    }, n.animateWithClass = function (f, h, b) {
      var C = !1,
          A = function T() {
        C || (C = !0, f.removeClass(h), f.deregisterInteractionHandler(b, T));
      };return f.registerInteractionHandler(b, A), f.addClass(h), A;
    }, n.getNormalizedEventCoords = function (f, h, b) {
      var E,
          w,
          C = h.x,
          A = h.y,
          T = C + b.left,
          S = A + b.top;return 'touchend' === f.type ? (E = f.changedTouches[0].pageX - T, w = f.changedTouches[0].pageY - S) : (E = f.pageX - T, w = f.pageY - S), { x: E, y: w };
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
        function u(G, H, $, Y, q, W) {
          return { tag: G, key: H, attrs: $, children: Y, text: q, dom: W, domSize: void 0, state: void 0, _state: void 0, events: void 0, instance: void 0, skip: !1 };
        }function f(G) {
          for (var H, $ = 'div', Y = [], q = {}; H = A.exec(G);) {
            var W = H[1],
                X = H[2];if ('' === W && '' !== X) $ = X;else if ('#' === W) q.id = X;else if ('.' === W) Y.push(X);else if ('[' === H[3][0]) {
              var K = H[6];K && (K = K.replace(/\\(["'])/g, '$1').replace(/\\\\/g, '\\')), 'class' === H[4] ? Y.push(K) : q[H[4]] = K || !0;
            }
          }return 0 < Y.length && (q.className = Y.join(' ')), T[G] = { tag: $, attrs: q };
        }function h(G, H, $) {
          var q,
              W,
              Y = !1,
              X = H.className || H.class;for (var K in G.attrs) {
            S.call(G.attrs, K) && (H[K] = G.attrs[K]);
          }for (var K in null != X && (null != H.class && (H.class = void 0, H.className = X), null != G.attrs.className && (H.className = G.attrs.className + ' ' + X)), H) {
            if (S.call(H, K) && 'key' != K) {
              Y = !0;break;
            }
          }return Array.isArray($) && 1 === $.length && null != $[0] && '#' === $[0].tag ? W = $[0].children : q = $, u(G.tag, H.key, Y ? H : void 0, q, W);
        }function b(G) {
          var Y,
              H = arguments[1],
              $ = 2;if (null == G || 'string' != typeof G && 'function' != typeof G && 'function' != typeof G.view) throw Error('The selector must be either a string or a component.');if ('string' == typeof G) var q = T[G] || f(G);if (H ? ('object' !== ('undefined' == typeof H ? 'undefined' : l(H)) || null != H.tag || Array.isArray(H)) && (H = {}, $ = 1) : H = {}, arguments.length === $ + 1) Y = arguments[$], Array.isArray(Y) || (Y = [Y]);else for (Y = []; $ < arguments.length;) {
            Y.push(arguments[$++]);
          }var W = u.normalizeChildren(Y);return 'string' == typeof G ? h(q, H, W) : u(G, H.key, H, W);
        }function C(G) {
          var H = 16,
              $ = 0,
              Y = null,
              q = 'function' == typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;return function () {
            var W = Date.now();0 == $ || W - $ >= H ? ($ = W, G()) : null == Y && (Y = q(function () {
              Y = null, G(), $ = Date.now();
            }, H - (W - $)));
          };
        }u.normalize = function (G) {
          return Array.isArray(G) ? u('[', void 0, void 0, u.normalizeChildren(G), void 0, void 0) : null != G && 'object' !== ('undefined' == typeof G ? 'undefined' : l(G)) ? u('#', void 0, void 0, !1 === G ? '' : G, void 0, void 0) : G;
        }, u.normalizeChildren = function (H) {
          for (var $ = 0; $ < H.length; $++) {
            H[$] = u.normalize(H[$]);
          }return H;
        };var A = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
            T = {},
            S = {}.hasOwnProperty;b.trust = function (G) {
          return null == G && (G = ''), u('<', void 0, void 0, G, void 0, void 0);
        }, b.fragment = function (G, H) {
          return u('[', G.key, G, u.normalizeChildren(H), void 0, void 0);
        };var E = b,
            w = function G(H) {
          function $(ee, te) {
            return function ne(ae) {
              var ie;try {
                if (te && null != ae && ('object' === ('undefined' == typeof ae ? 'undefined' : l(ae)) || 'function' == typeof ae) && 'function' == typeof (ie = ae.then)) {
                  if (ae === q) throw new TypeError('Promise can\'t be resolved w/ itself');Y(ie.bind(ae));
                } else J(function () {
                  te || 0 !== ee.length || console.error('Possible unhandled promise rejection:', ae);for (var de = 0; de < ee.length; de++) {
                    ee[de](ae);
                  }W.length = 0, X.length = 0, Z.state = te, Z.retry = function () {
                    ne(ae);
                  };
                });
              } catch (de) {
                Q(de);
              }
            };
          }function Y(ee) {
            function te(ie) {
              return function (de) {
                0 < ne++ || ie(de);
              };
            }var ne = 0,
                ae = te(Q);try {
              ee(te(K), ae);
            } catch (ie) {
              ae(ie);
            }
          }if (!(this instanceof G)) throw new Error('Promise must be called with `new`');if ('function' != typeof H) throw new TypeError('executor must be a function');var q = this,
              W = [],
              X = [],
              K = $(W, !0),
              Q = $(X, !1),
              Z = q._instance = { resolvers: W, rejectors: X },
              J = 'function' == typeof d ? d : setTimeout;Y(H);
        };if (w.prototype.then = function (G, H) {
          function $(Q, Z, J, ee) {
            Z.push(function (te) {
              if ('function' != typeof Q) J(te);else try {
                W(Q(te));
              } catch (ne) {
                X && X(ne);
              }
            }), 'function' == typeof q.retry && ee === q.state && q.retry();
          }var W,
              X,
              Y = this,
              q = Y._instance,
              K = new w(function (Q, Z) {
            W = Q, X = Z;
          });return $(G, q.resolvers, W, !0), $(H, q.rejectors, X, !1), K;
        }, w.prototype.catch = function (G) {
          return this.then(null, G);
        }, w.resolve = function (G) {
          return G instanceof w ? G : new w(function (H) {
            H(G);
          });
        }, w.reject = function (G) {
          return new w(function (H, $) {
            $(G);
          });
        }, w.all = function (G) {
          return new w(function (H, $) {
            var Y = G.length,
                q = 0,
                W = [];if (0 === G.length) H([]);else for (var X = 0; X < G.length; X++) {
              (function (K) {
                function Q(Z) {
                  q++, W[K] = Z, q === Y && H(W);
                }null != G[K] && ('object' === l(G[K]) || 'function' == typeof G[K]) && 'function' == typeof G[K].then ? G[K].then(Q, $) : Q(G[K]);
              })(X);
            }
          });
        }, w.race = function (G) {
          return new w(function (H, $) {
            for (var Y = 0; Y < G.length; Y++) {
              G[Y].then(H, $);
            }
          });
        }, 'undefined' != typeof window) {
          'undefined' == typeof window.Promise && (window.Promise = w);var w = window.Promise;
        } else if ('undefined' != typeof r) {
          'undefined' == typeof r.Promise && (r.Promise = w);var w = r.Promise;
        } else ;var D = function D(H) {
          function $(W, X) {
            if (Array.isArray(X)) for (var K = 0; K < X.length; K++) {
              $(W + '[' + K + ']', X[K]);
            } else if ('[object Object]' === Object.prototype.toString.call(X)) for (var K in X) {
              $(W + '[' + K + ']', X[K]);
            } else Y.push(encodeURIComponent(W) + (null != X && '' !== X ? '=' + encodeURIComponent(X) : ''));
          }if ('[object Object]' !== Object.prototype.toString.call(H)) return '';var Y = [];for (var q in H) {
            $(q, H[q]);
          }return Y.join('&');
        },
            N = /^file:\/\//i,
            O = function (H, $) {
          function q() {
            function ie() {
              0 == --de && 'function' == typeof ae && ae();
            }var de = 0;return function re(oe) {
              var se = oe.then;return oe.then = function () {
                de++;var le = se.apply(oe, arguments);return le.then(ie, function (ue) {
                  if (ie(), 0 == de) throw ue;
                }), re(le);
              }, oe;
            };
          }function W(ie, de) {
            if ('string' == typeof ie) {
              var re = ie;ie = de || {}, null == ie.url && (ie.url = re);
            }return ie;
          }function Q(ie, de) {
            if (null == de) return ie;for (var se, re = ie.match(/:[^\/]+/gi) || [], oe = 0; oe < re.length; oe++) {
              se = re[oe].slice(1), null != de[se] && (ie = ie.replace(re[oe], de[se]));
            }return ie;
          }function Z(ie, de) {
            var re = D(de);if ('' !== re) {
              var oe = 0 > ie.indexOf('?') ? '?' : '&';ie += oe + re;
            }return ie;
          }function J(ie) {
            try {
              return '' === ie ? null : JSON.parse(ie);
            } catch (de) {
              throw new Error(ie);
            }
          }function ee(ie) {
            return ie.responseText;
          }function te(ie, de) {
            if ('function' == typeof ie) if (Array.isArray(de)) for (var re = 0; re < de.length; re++) {
              de[re] = new ie(de[re]);
            } else return new ie(de);return de;
          }var ae,
              ne = 0;return { request: function request(ie, de) {
              var re = q();ie = W(ie, de);var oe = new $(function (se, le) {
                null == ie.method && (ie.method = 'GET'), ie.method = ie.method.toUpperCase();var ue = 'GET' === ie.method || 'TRACE' === ie.method ? !1 : 'boolean' != typeof ie.useBody || ie.useBody;'function' != typeof ie.serialize && (ie.serialize = 'undefined' != typeof FormData && ie.data instanceof FormData ? function (_e) {
                  return _e;
                } : JSON.stringify), 'function' != typeof ie.deserialize && (ie.deserialize = J), 'function' != typeof ie.extract && (ie.extract = ee), ie.url = Q(ie.url, ie.data), ue ? ie.data = ie.serialize(ie.data) : ie.url = Z(ie.url, ie.data);var ce = new H.XMLHttpRequest(),
                    fe = !1,
                    me = ce.abort;for (var pe in ce.abort = function () {
                  fe = !0, me.call(ce);
                }, ce.open(ie.method, ie.url, 'boolean' != typeof ie.async || ie.async, 'string' == typeof ie.user ? ie.user : void 0, 'string' == typeof ie.password ? ie.password : void 0), ie.serialize === JSON.stringify && ue && ce.setRequestHeader('Content-Type', 'application/json; charset=utf-8'), ie.deserialize === J && ce.setRequestHeader('Accept', 'application/json, text/*'), ie.withCredentials && (ce.withCredentials = ie.withCredentials), ie.headers) {
                  ({}).hasOwnProperty.call(ie.headers, pe) && ce.setRequestHeader(pe, ie.headers[pe]);
                }'function' == typeof ie.config && (ce = ie.config(ce, ie) || ce), ce.onreadystatechange = function () {
                  if (!fe && 4 === ce.readyState) try {
                    var _e = ie.extract === ee ? ie.deserialize(ie.extract(ce, ie)) : ie.extract(ce, ie);if (200 <= ce.status && 300 > ce.status || 304 === ce.status || N.test(ie.url)) se(te(ie.type, _e));else {
                      var he = new Error(ce.responseText);for (var ge in _e) {
                        he[ge] = _e[ge];
                      }le(he);
                    }
                  } catch (ye) {
                    le(ye);
                  }
                }, ue && null != ie.data ? ce.send(ie.data) : ce.send();
              });return !0 === ie.background ? oe : re(oe);
            }, jsonp: function jsonp(ie, de) {
              var re = q();ie = W(ie, de);var oe = new $(function (se, le) {
                var ue = ie.callbackName || '_mithril_' + _Mathround(1e16 * Math.random()) + '_' + ne++,
                    ce = H.document.createElement('script');H[ue] = function (fe) {
                  ce.parentNode.removeChild(ce), se(te(ie.type, fe)), delete H[ue];
                }, ce.onerror = function () {
                  ce.parentNode.removeChild(ce), le(new Error('JSONP request failed')), delete H[ue];
                }, null == ie.data && (ie.data = {}), ie.url = Q(ie.url, ie.data), ie.data[ie.callbackKey || 'callback'] = ue, ce.src = Z(ie.url, ie.data), H.document.documentElement.appendChild(ce);
              });return !0 === ie.background ? oe : re(oe);
            }, setCompletionCallback: function setCompletionCallback(ie) {
              ae = ie;
            } };
        }(window, w),
            P = function P(H) {
          function Y(Me, Fe, Ue, Ve, Be, ze, Le) {
            for (var He, Ge = Ue; Ge < Ve; Ge++) {
              He = Fe[Ge], null != He && q(Me, He, Be, Le, ze);
            }
          }function q(Me, Fe, Ue, Ve, Be) {
            var ze = Fe.tag;return 'string' == typeof ze ? (Fe.state = {}, null != Fe.attrs && we(Fe.attrs, Fe, Ue), '#' === ze ? W(Me, Fe, Be) : '<' === ze ? X(Me, Fe, Be) : '[' === ze ? K(Me, Fe, Ue, Ve, Be) : Q(Me, Fe, Ue, Ve, Be)) : J(Me, Fe, Ue, Ve, Be);
          }function W(Me, Fe, Ue) {
            return Fe.dom = Oe.createTextNode(Fe.children), ce(Me, Fe.dom, Ue), Fe.dom;
          }function X(Me, Fe, Ue) {
            var Ve = Fe.children.match(/^\s*?<(\w+)/im) || [],
                Be = { caption: 'table', thead: 'table', tbody: 'table', tfoot: 'table', tr: 'tbody', th: 'tr', td: 'tr', colgroup: 'table', col: 'colgroup' }[Ve[1]] || 'div',
                ze = Oe.createElement(Be);ze.innerHTML = Fe.children, Fe.dom = ze.firstChild, Fe.domSize = ze.childNodes.length;for (var Ge, Le = Oe.createDocumentFragment(); Ge = ze.firstChild;) {
              Le.appendChild(Ge);
            }return ce(Me, Le, Ue), Le;
          }function K(Me, Fe, Ue, Ve, Be) {
            var ze = Oe.createDocumentFragment();if (null != Fe.children) {
              var Le = Fe.children;Y(ze, Le, 0, Le.length, Ue, null, Ve);
            }return Fe.dom = ze.firstChild, Fe.domSize = ze.childNodes.length, ce(Me, ze, Be), ze;
          }function Q(Me, Fe, Ue, Ve, Be) {
            var ze = Fe.tag;switch (Fe.tag) {case 'svg':
                Ve = 'http://www.w3.org/2000/svg';break;case 'math':
                Ve = 'http://www.w3.org/1998/Math/MathML';}var Le = Fe.attrs,
                Ge = Le && Le.is,
                He = Ve ? Ge ? Oe.createElementNS(Ve, ze, { is: Ge }) : Oe.createElementNS(Ve, ze) : Ge ? Oe.createElement(ze, { is: Ge }) : Oe.createElement(ze);if (Fe.dom = He, null != Le && ge(Fe, Le, Ve), ce(Me, He, Be), null != Fe.attrs && null != Fe.attrs.contenteditable) fe(Fe);else if (null != Fe.text && ('' === Fe.text ? Fe.children = [u('#', void 0, void 0, Fe.text, void 0, void 0)] : He.textContent = Fe.text), null != Fe.children) {
              var je = Fe.children;Y(He, je, 0, je.length, Ue, null, Ve), ve(Fe);
            }return He;
          }function Z(Me, Fe) {
            var Ue;if ('function' == typeof Me.tag.view) {
              if (Me.state = Object.create(Me.tag), Ue = Me.state.view, null != Ue.$$reentrantLock$$) return Pe;Ue.$$reentrantLock$$ = !0;
            } else {
              if (Me.state = void 0, Ue = Me.tag, null != Ue.$$reentrantLock$$) return Pe;Ue.$$reentrantLock$$ = !0, Me.state = null != Me.tag.prototype && 'function' == typeof Me.tag.prototype.view ? new Me.tag(Me) : Me.tag(Me);
            }if (Me._state = Me.state, null != Me.attrs && we(Me.attrs, Me, Fe), we(Me._state, Me, Fe), Me.instance = u.normalize(Me._state.view.call(Me.state, Me)), Me.instance === Me) throw Error('A view cannot return the vnode it received as argument');Ue.$$reentrantLock$$ = null;
          }function J(Me, Fe, Ue, Ve, Be) {
            if (Z(Fe, Ue), null != Fe.instance) {
              var ze = q(Me, Fe.instance, Ue, Ve, Be);return Fe.dom = Fe.instance.dom, Fe.domSize = null == Fe.dom ? 0 : Fe.instance.domSize, ce(Me, ze, Be), ze;
            }return Fe.domSize = 0, Pe;
          }function ee(Me, Fe, Ue, Ve, Be, ze, Le) {
            if (Fe !== Ue && (null != Fe || null != Ue)) if (null == Fe) Y(Me, Ue, 0, Ue.length, Be, ze, void 0);else if (null == Ue) me(Fe, 0, Fe.length, Ue);else {
              if (Fe.length === Ue.length) {
                for (var Ge = !1, He = 0; He < Ue.length; He++) {
                  if (null != Ue[He] && null != Fe[He]) {
                    Ge = null == Ue[He].key && null == Fe[He].key;break;
                  }
                }if (Ge) {
                  for (var He = 0; He < Fe.length; He++) {
                    if (Fe[He] === Ue[He]) continue;else null == Fe[He] && null != Ue[He] ? q(Me, Ue[He], Be, Le, ue(Fe, He + 1, ze)) : null == Ue[He] ? me(Fe, He, He + 1, Ue) : te(Me, Fe[He], Ue[He], Be, ue(Fe, He + 1, ze), Ve, Le);
                  }return;
                }
              }if (Ve = Ve || oe(Fe, Ue), Ve) {
                var je = Fe.pool;Fe = Fe.concat(Fe.pool);
              }for (var Xe, $e = 0, Ye = 0, qe = Fe.length - 1, We = Ue.length - 1; qe >= $e && We >= Ye;) {
                var Ke = Fe[$e],
                    Qe = Ue[Ye];if (Ke === Qe && !Ve) $e++, Ye++;else if (null == Ke) $e++;else if (null == Qe) Ye++;else if (Ke.key === Qe.key) {
                  var Ze = null != je && $e >= Fe.length - je.length || null == je && Ve;$e++, Ye++, te(Me, Ke, Qe, Be, ue(Fe, $e, ze), Ze, Le), Ve && Ke.tag === Qe.tag && ce(Me, le(Ke), ze);
                } else {
                  var Ke = Fe[qe];if (Ke === Qe && !Ve) qe--, Ye++;else if (null == Ke) qe--;else if (null == Qe) Ye++;else if (Ke.key === Qe.key) {
                    var Ze = null != je && qe >= Fe.length - je.length || null == je && Ve;te(Me, Ke, Qe, Be, ue(Fe, qe + 1, ze), Ze, Le), (Ve || Ye < We) && ce(Me, le(Ke), ue(Fe, $e, ze)), qe--, Ye++;
                  } else break;
                }
              }for (; qe >= $e && We >= Ye;) {
                var Ke = Fe[qe],
                    Qe = Ue[We];if (Ke === Qe && !Ve) qe--, We--;else if (null == Ke) qe--;else if (null == Qe) We--;else if (Ke.key === Qe.key) {
                  var Ze = null != je && qe >= Fe.length - je.length || null == je && Ve;te(Me, Ke, Qe, Be, ue(Fe, qe + 1, ze), Ze, Le), Ve && Ke.tag === Qe.tag && ce(Me, le(Ke), ze), null != Ke.dom && (ze = Ke.dom), qe--, We--;
                } else {
                  if (Xe || (Xe = se(Fe, qe)), null != Qe) {
                    var Je = Xe[Qe.key];if (null != Je) {
                      var et = Fe[Je],
                          Ze = null != je && Je >= Fe.length - je.length || null == je && Ve;te(Me, et, Qe, Be, ue(Fe, qe + 1, ze), Ve, Le), ce(Me, le(et), ze), Fe[Je].skip = !0, null != et.dom && (ze = et.dom);
                    } else {
                      var tt = q(Me, Qe, Be, void 0, ze);ze = tt;
                    }
                  }We--;
                }if (We < Ye) break;
              }Y(Me, Ue, Ye, We + 1, Be, ze, Le), me(Fe, $e, qe + 1, Ue);
            }
          }function te(Me, Fe, Ue, Ve, Be, ze, Le) {
            var Ge = Fe.tag,
                He = Ue.tag;if (Ge === He) {
              if (Ue.state = Fe.state, Ue._state = Fe._state, Ue.events = Fe.events, !ze && Ne(Ue, Fe)) return;'string' == typeof Ge ? (null != Ue.attrs && (ze ? (Ue.state = {}, we(Ue.attrs, Ue, Ve)) : De(Ue.attrs, Ue, Ve)), '#' === Ge ? ne(Fe, Ue) : '<' === Ge ? ae(Me, Fe, Ue, Be) : '[' === Ge ? ie(Me, Fe, Ue, ze, Ve, Be, Le) : de(Fe, Ue, ze, Ve, Le)) : re(Me, Fe, Ue, Ve, Be, ze, Le);
            } else pe(Fe, null), q(Me, Ue, Ve, Le, Be);
          }function ne(Me, Fe) {
            Me.children.toString() !== Fe.children.toString() && (Me.dom.nodeValue = Fe.children), Fe.dom = Me.dom;
          }function ae(Me, Fe, Ue, Ve) {
            Fe.children === Ue.children ? (Ue.dom = Fe.dom, Ue.domSize = Fe.domSize) : (le(Fe), X(Me, Ue, Ve));
          }function ie(Me, Fe, Ue, Ve, Be, ze, Le) {
            ee(Me, Fe.children, Ue.children, Ve, Be, ze, Le);var Ge = 0,
                He = Ue.children;if (Ue.dom = null, null != He) {
              for (var $e, je = 0; je < He.length; je++) {
                $e = He[je], null != $e && null != $e.dom && (null == Ue.dom && (Ue.dom = $e.dom), Ge += $e.domSize || 1);
              }1 !== Ge && (Ue.domSize = Ge);
            }
          }function de(Me, Fe, Ue, Ve, Be) {
            var ze = Fe.dom = Me.dom;switch (Fe.tag) {case 'svg':
                Be = 'http://www.w3.org/2000/svg';break;case 'math':
                Be = 'http://www.w3.org/1998/Math/MathML';}'textarea' === Fe.tag && (null == Fe.attrs && (Fe.attrs = {}), null != Fe.text && (Fe.attrs.value = Fe.text, Fe.text = void 0)), be(Fe, Me.attrs, Fe.attrs, Be), null != Fe.attrs && null != Fe.attrs.contenteditable ? fe(Fe) : null != Me.text && null != Fe.text && '' !== Fe.text ? Me.text.toString() !== Fe.text.toString() && (Me.dom.firstChild.nodeValue = Fe.text) : (null != Me.text && (Me.children = [u('#', void 0, void 0, Me.text, void 0, Me.dom.firstChild)]), null != Fe.text && (Fe.children = [u('#', void 0, void 0, Fe.text, void 0, void 0)]), ee(ze, Me.children, Fe.children, Ue, Ve, null, Be));
          }function re(Me, Fe, Ue, Ve, Be, ze, Le) {
            if (ze) Z(Ue, Ve);else {
              if (Ue.instance = u.normalize(Ue._state.view.call(Ue.state, Ue)), Ue.instance === Ue) throw Error('A view cannot return the vnode it received as argument');null != Ue.attrs && De(Ue.attrs, Ue, Ve), De(Ue._state, Ue, Ve);
            }null == Ue.instance ? null == Fe.instance ? (Ue.dom = Fe.dom, Ue.domSize = Fe.domSize) : (pe(Fe.instance, null), Ue.dom = void 0, Ue.domSize = 0) : (null == Fe.instance ? q(Me, Ue.instance, Ve, Le, Be) : te(Me, Fe.instance, Ue.instance, Ve, Be, ze, Le), Ue.dom = Ue.instance.dom, Ue.domSize = Ue.instance.domSize);
          }function oe(Me, Fe) {
            if (null != Me.pool && _Mathabs(Me.pool.length - Fe.length) <= _Mathabs(Me.length - Fe.length)) {
              var Ue = Me[0] && Me[0].children && Me[0].children.length || 0,
                  Ve = Me.pool[0] && Me.pool[0].children && Me.pool[0].children.length || 0,
                  Be = Fe[0] && Fe[0].children && Fe[0].children.length || 0;if (_Mathabs(Ve - Be) <= _Mathabs(Ue - Be)) return !0;
            }return !1;
          }function se(Me, Fe) {
            for (var Be, Ue = {}, Ve = 0, Ve = 0; Ve < Fe; Ve++) {
              if (Be = Me[Ve], null != Be) {
                var ze = Be.key;null != ze && (Ue[ze] = Ve);
              }
            }return Ue;
          }function le(Me) {
            var Fe = Me.domSize;if (null != Fe || null == Me.dom) {
              var Ue = Oe.createDocumentFragment();if (0 < Fe) {
                for (var Ve = Me.dom; --Fe;) {
                  Ue.appendChild(Ve.nextSibling);
                }Ue.insertBefore(Ve, Ue.firstChild);
              }return Ue;
            }return Me.dom;
          }function ue(Me, Fe, Ue) {
            for (; Fe < Me.length; Fe++) {
              if (null != Me[Fe] && null != Me[Fe].dom) return Me[Fe].dom;
            }return Ue;
          }function ce(Me, Fe, Ue) {
            Ue && Ue.parentNode ? Me.insertBefore(Fe, Ue) : Me.appendChild(Fe);
          }function fe(Me) {
            var Fe = Me.children;if (null != Fe && 1 === Fe.length && '<' === Fe[0].tag) {
              var Ue = Fe[0].children;Me.dom.innerHTML !== Ue && (Me.dom.innerHTML = Ue);
            } else if (null != Me.text || null != Fe && 0 !== Fe.length) throw new Error('Child node of a contenteditable must be trusted');
          }function me(Me, Fe, Ue, Ve) {
            for (var ze, Be = Fe; Be < Ue; Be++) {
              ze = Me[Be], null != ze && (ze.skip ? ze.skip = !1 : pe(ze, Ve));
            }
          }function pe(Me, Fe) {
            function Ue() {
              if (++Be == Ve && (he(Me), Me.dom)) {
                var Le = Me.domSize || 1;if (1 < Le) for (var Ge = Me.dom; --Le;) {
                  _e(Ge.nextSibling);
                }_e(Me.dom), null == Fe || null != Me.domSize || xe(Me.attrs) || 'string' != typeof Me.tag || (Fe.pool ? Fe.pool.push(Me) : Fe.pool = [Me]);
              }
            }var Ve = 1,
                Be = 0;if (Me.attrs && 'function' == typeof Me.attrs.onbeforeremove) {
              var ze = Me.attrs.onbeforeremove.call(Me.state, Me);null != ze && 'function' == typeof ze.then && (Ve++, ze.then(Ue, Ue));
            }if ('string' != typeof Me.tag && 'function' == typeof Me._state.onbeforeremove) {
              var ze = Me._state.onbeforeremove.call(Me.state, Me);null != ze && 'function' == typeof ze.then && (Ve++, ze.then(Ue, Ue));
            }Ue();
          }function _e(Me) {
            var Fe = Me.parentNode;null != Fe && Fe.removeChild(Me);
          }function he(Me) {
            if (Me.attrs && 'function' == typeof Me.attrs.onremove && Me.attrs.onremove.call(Me.state, Me), 'string' != typeof Me.tag && 'function' == typeof Me._state.onremove && Me._state.onremove.call(Me.state, Me), null != Me.instance) he(Me.instance);else {
              var Fe = Me.children;if (Array.isArray(Fe)) for (var Ve, Ue = 0; Ue < Fe.length; Ue++) {
                Ve = Fe[Ue], null != Ve && he(Ve);
              }
            }
          }function ge(Me, Fe, Ue) {
            for (var Ve in Fe) {
              ye(Me, Ve, null, Fe[Ve], Ue);
            }
          }function ye(Me, Fe, Ue, Ve, Be) {
            var ze = Me.dom;if ('key' !== Fe && 'is' !== Fe && (Ue !== Ve || Ce(Me, Fe) || 'object' === ('undefined' == typeof Ve ? 'undefined' : l(Ve))) && 'undefined' != typeof Ve && !ke(Fe)) {
              var Le = Fe.indexOf(':');if (-1 < Le && 'xlink' === Fe.substr(0, Le)) ze.setAttributeNS('http://www.w3.org/1999/xlink', Fe.slice(Le + 1), Ve);else if ('o' === Fe[0] && 'n' === Fe[1] && 'function' == typeof Ve) Ee(Me, Fe, Ve);else if ('style' === Fe) Se(ze, Ue, Ve);else if (Fe in ze && !Ae(Fe) && void 0 === Be && !Te(Me)) {
                if ('input' === Me.tag && 'value' === Fe && Me.dom.value == Ve && Me.dom === Oe.activeElement) return;if ('select' === Me.tag && 'value' === Fe && Me.dom.value == Ve && Me.dom === Oe.activeElement) return;if ('option' === Me.tag && 'value' === Fe && Me.dom.value == Ve) return;if ('input' === Me.tag && 'type' === Fe) return void ze.setAttribute(Fe, Ve);ze[Fe] = Ve;
              } else 'boolean' == typeof Ve ? Ve ? ze.setAttribute(Fe, '') : ze.removeAttribute(Fe) : ze.setAttribute('className' === Fe ? 'class' : Fe, Ve);
            }
          }function ve(Me) {
            var Fe = Me.attrs;'select' === Me.tag && null != Fe && ('value' in Fe && ye(Me, 'value', null, Fe.value, void 0), 'selectedIndex' in Fe && ye(Me, 'selectedIndex', null, Fe.selectedIndex, void 0));
          }function be(Me, Fe, Ue, Ve) {
            if (null != Ue) for (var Be in Ue) {
              ye(Me, Be, Fe && Fe[Be], Ue[Be], Ve);
            }if (null != Fe) for (var Be in Fe) {
              null != Ue && Be in Ue || ('className' == Be && (Be = 'class'), 'o' !== Be[0] || 'n' !== Be[1] || ke(Be) ? 'key' != Be && Me.dom.removeAttribute(Be) : Ee(Me, Be, void 0));
            }
          }function Ce(Me, Fe) {
            return 'value' === Fe || 'checked' === Fe || 'selectedIndex' === Fe || 'selected' === Fe && Me.dom === Oe.activeElement;
          }function ke(Me) {
            return 'oninit' === Me || 'oncreate' === Me || 'onupdate' === Me || 'onremove' === Me || 'onbeforeremove' === Me || 'onbeforeupdate' === Me;
          }function Ae(Me) {
            return 'href' === Me || 'list' === Me || 'form' === Me || 'width' === Me || 'height' === Me;
          }function Te(Me) {
            return Me.attrs.is || -1 < Me.tag.indexOf('-');
          }function xe(Me) {
            return null != Me && (Me.oncreate || Me.onupdate || Me.onbeforeremove || Me.onremove);
          }function Se(Me, Fe, Ue) {
            if (Fe === Ue && (Me.style.cssText = '', Fe = null), null == Ue) Me.style.cssText = '';else if ('string' == typeof Ue) Me.style.cssText = Ue;else {
              for (var Ve in 'string' == typeof Fe && (Me.style.cssText = ''), Ue) {
                Me.style[Ve] = Ue[Ve];
              }if (null != Fe && 'string' != typeof Fe) for (var Ve in Fe) {
                Ve in Ue || (Me.style[Ve] = '');
              }
            }
          }function Ee(Me, Fe, Ue) {
            var Ve = Me.dom,
                Be = 'function' == typeof Re ? function (Le) {
              var Ge = Ue.call(Ve, Le);return Re.call(Ve, Le), Ge;
            } : Ue;if (Fe in Ve) Ve[Fe] = 'function' == typeof Ue ? Be : null;else {
              var ze = Fe.slice(2);if (void 0 === Me.events && (Me.events = {}), Me.events[Fe] === Be) return;null != Me.events[Fe] && Ve.removeEventListener(ze, Me.events[Fe], !1), 'function' == typeof Ue && (Me.events[Fe] = Be, Ve.addEventListener(ze, Me.events[Fe], !1));
            }
          }function we(Me, Fe, Ue) {
            'function' == typeof Me.oninit && Me.oninit.call(Fe.state, Fe), 'function' == typeof Me.oncreate && Ue.push(Me.oncreate.bind(Fe.state, Fe));
          }function De(Me, Fe, Ue) {
            'function' == typeof Me.onupdate && Ue.push(Me.onupdate.bind(Fe.state, Fe));
          }function Ne(Me, Fe) {
            var Ue, Ve;return null != Me.attrs && 'function' == typeof Me.attrs.onbeforeupdate && (Ue = Me.attrs.onbeforeupdate.call(Me.state, Me, Fe)), 'string' != typeof Me.tag && 'function' == typeof Me._state.onbeforeupdate && (Ve = Me._state.onbeforeupdate.call(Me.state, Me, Fe)), void 0 === Ue && void 0 === Ve || Ue || Ve ? !1 : (Me.dom = Fe.dom, Me.domSize = Fe.domSize, Me.instance = Fe.instance, !0);
          }var Re,
              Oe = H.document,
              Pe = Oe.createDocumentFragment();return { render: function render(Me, Fe) {
              if (!Me) throw new Error('Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.');var Ue = [],
                  Ve = Oe.activeElement;null == Me.vnodes && (Me.textContent = ''), Array.isArray(Fe) || (Fe = [Fe]), ee(Me, Me.vnodes, u.normalizeChildren(Fe), !1, Ue, null, void 0), Me.vnodes = Fe;for (var Be = 0; Be < Ue.length; Be++) {
                Ue[Be]();
              }Oe.activeElement !== Ve && Ve.focus();
            }, setEventCallback: function setEventCallback(Me) {
              return Re = Me;
            } };
        },
            M = function (H) {
          function Y(K) {
            var Q = X.indexOf(K);-1 < Q && X.splice(Q, 2);
          }function q() {
            for (var K = 1; K < X.length; K += 2) {
              X[K]();
            }
          }var W = P(H);W.setEventCallback(function (K) {
            !1 !== K.redraw && q();
          });var X = [];return { subscribe: function subscribe(K, Q) {
              Y(K), X.push(K, C(Q));
            }, unsubscribe: Y, redraw: q, render: W.render };
        }(window);O.setCompletionCallback(M.redraw);E.mount = function (H) {
          return function ($, Y) {
            if (null === Y) return H.render($, []), void H.unsubscribe($);if (null == Y.view && 'function' != typeof Y) throw new Error('m.mount(element, component) expects a component, not a vnode');H.subscribe($, function () {
              H.render($, u(Y));
            }), H.redraw();
          };
        }(M);var V = function V(H) {
          if ('' === H || null == H) return {};'?' === H.charAt(0) && (H = H.slice(1));for (var $ = H.split('&'), Y = {}, q = {}, W = 0; W < $.length; W++) {
            var X = $[W].split('='),
                K = decodeURIComponent(X[0]),
                Q = 2 === X.length ? decodeURIComponent(X[1]) : '';'true' === Q ? Q = !0 : 'false' === Q && (Q = !1);var Z = K.split(/\]\[?|\[/),
                J = Y;-1 < K.indexOf('[') && Z.pop();for (var ee = 0; ee < Z.length; ee++) {
              var te = Z[ee],
                  ne = Z[ee + 1],
                  ae = '' == ne || !isNaN(parseInt(ne, 10)),
                  ie = ee === Z.length - 1;if ('' === te) {
                var K = Z.slice(0, ee).join();null == q[K] && (q[K] = 0), te = q[K]++;
              }null == J[te] && (J[te] = ie ? Q : ae ? [] : {}), J = J[te];
            }
          }return Y;
        },
            B = function B(H) {
          function $(Z) {
            var J = H.location[Z].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);return 'pathname' === Z && '/' !== J[0] && (J = '/' + J), J;
          }function Y(Z) {
            return function () {
              null != K || (K = X(function () {
                K = null, Z();
              }));
            };
          }function q(Z, J, ee) {
            var te = Z.indexOf('?'),
                ne = Z.indexOf('#'),
                ae = -1 < te ? te : -1 < ne ? ne : Z.length;if (-1 < te) {
              var ie = -1 < ne ? ne : Z.length,
                  de = V(Z.slice(te + 1, ie));for (var re in de) {
                J[re] = de[re];
              }
            }if (-1 < ne) {
              var oe = V(Z.slice(ne + 1));for (var re in oe) {
                ee[re] = oe[re];
              }
            }return Z.slice(0, ae);
          }var K,
              W = 'function' == typeof H.history.pushState,
              X = 'function' == typeof d ? d : setTimeout,
              Q = { prefix: '#!' };return Q.getPath = function () {
            var Z = Q.prefix.charAt(0);return '#' === Z ? $('hash').slice(Q.prefix.length) : '?' === Z ? $('search').slice(Q.prefix.length) + $('hash') : $('pathname').slice(Q.prefix.length) + $('search') + $('hash');
          }, Q.setPath = function (Z, J, ee) {
            var te = {},
                ne = {};if (Z = q(Z, te, ne), null != J) {
              for (var ae in J) {
                te[ae] = J[ae];
              }Z = Z.replace(/:([^\/]+)/g, function (se, le) {
                return delete te[le], J[le];
              });
            }var ie = D(te);ie && (Z += '?' + ie);var de = D(ne);if (de && (Z += '#' + de), W) {
              var re = ee ? ee.state : null,
                  oe = ee ? ee.title : null;H.onpopstate(), ee && ee.replace ? H.history.replaceState(re, oe, Q.prefix + Z) : H.history.pushState(re, oe, Q.prefix + Z);
            } else H.location.href = Q.prefix + Z;
          }, Q.defineRoutes = function (Z, J, ee) {
            function te() {
              var ne = Q.getPath(),
                  ae = {},
                  ie = q(ne, ae, ae),
                  de = H.history.state;if (null != de) for (var re in de) {
                ae[re] = de[re];
              }for (var oe in Z) {
                var se = new RegExp('^' + oe.replace(/:[^\/]+?\.{3}/g, '(.*?)').replace(/:[^\/]+/g, '([^\\/]+)') + '/?$');if (se.test(ie)) return void ie.replace(se, function () {
                  for (var le = oe.match(/:[^\/]+/g) || [], ue = [].slice.call(arguments, 1, -2), ce = 0; ce < le.length; ce++) {
                    ae[le[ce].replace(/:|\./g, '')] = decodeURIComponent(ue[ce]);
                  }J(Z[oe], ae, ne, oe);
                });
              }ee(ne, ae);
            }W ? H.onpopstate = Y(te) : '#' === Q.prefix.charAt(0) && (H.onhashchange = te), te();
          }, Q;
        };E.route = function (H, $) {
          var W,
              X,
              K,
              Q,
              _Z,
              Y = B(H),
              q = function q(te) {
            return te;
          },
              J = function J(te, ne, ae) {
            if (null == te) throw new Error('Ensure the DOM element that was passed to `m.route` is not undefined');var ie = function ie() {
              null != W && $.render(te, W(u(X, K.key, K)));
            },
                de = function de(oe) {
              if (oe !== ne) Y.setPath(ne, null, { replace: !0 });else throw new Error('Could not resolve default route ' + ne);
            };Y.defineRoutes(ae, function (re, oe, se) {
              var le = _Z = function Z(ce, fe) {
                le !== _Z || (X = null != fe && ('function' == typeof fe.view || 'function' == typeof fe) ? fe : 'div', K = oe, Q = se, _Z = null, W = (ce.render || q).bind(ce), ie());
              };re.view || 'function' == typeof re ? le({}, re) : re.onmatch ? w.resolve(re.onmatch(oe, se)).then(function (ue) {
                le(re, ue);
              }, de) : le(re, 'div');
            }, de), $.subscribe(te, ie);
          };return J.set = function (ee, te, ne) {
            null != _Z && (ne = { replace: !0 }), _Z = null, Y.setPath(ee, te, ne);
          }, J.get = function () {
            return Q;
          }, J.prefix = function (ee) {
            Y.prefix = ee;
          }, J.link = function (ee) {
            ee.dom.setAttribute('href', Y.prefix + ee.attrs.href), ee.dom.onclick = function (te) {
              if (!(te.ctrlKey || te.metaKey || te.shiftKey || 2 === te.which)) {
                te.preventDefault(), te.redraw = !1;var ne = this.getAttribute('href');0 === ne.indexOf(Y.prefix) && (ne = ne.slice(Y.prefix.length)), J.set(ne, void 0, void 0);
              }
            };
          }, J.param = function (ee) {
            return 'undefined' != typeof K && 'undefined' != typeof ee ? K[ee] : K;
          }, J;
        }(window, M), E.withAttr = function (G, H, $) {
          return function (Y) {
            H.call($ || this, G in Y.currentTarget ? Y.currentTarget[G] : Y.currentTarget.getAttribute(G));
          };
        };var L = P(window);E.render = L.render, E.redraw = M.redraw, E.request = O.request, E.jsonp = O.jsonp, E.parseQueryString = V, E.buildQueryString = D, E.version = '1.1.0', E.vnode = u, t.exports = E;
      })();
    }).call(n, a(24).setImmediate, a(6));
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
        return (0, l.default)(f, '', { mdcCard: 'mdc-card', mdcCardThemeDark: 'mdc-card--theme-dark', mdcCardHorizontalBlock: 'mdc-card__horizontal-block' }, function (h) {
          return 'mdcCard' === h && !f.attrs.mdcCardHrizontalBlock || f.attrs[h];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    function d(h) {
      return h && h.__esModule ? h : { default: h };
    }Object.defineProperty(n, '__esModule', { value: !0 });var r = a(5),
        l = d(r),
        u = a(1),
        f = d(u);n.default = { view: function view(b) {
        return (0, l.default)(f.default, Object.assign({ mdcButtonCompact: !0, classNames: Object.assign({ mdcCardAction: 'mdc-card__action' }, b.attrs.classNames) }, b.attrs), b.children);
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'section', { mdcCardMedia: 'mdc-card__media', mdcCardActions: 'mdc-card__actions', mdcCardActionsVertical: 'mdc-card__actions--vertical', mdcCardPrimary: 'mdc-card__primary', mdcCardSupportingText: 'mdc-card__supporting-text' }, function (h) {
          return h === f.attrs.type || f.attrs[h];
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
        return (0, l.default)(f, 'h1', { mdcCardTitle: 'mdc-card__title', mdcCardTitleLarge: 'mdc-card__title--large' }, function (h) {
          return 'mdcCardTitle' === h || f.attrs[h];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'header', { mdcToolbar: 'mdc-toolbar', mdcToolbarFixed: 'mdc-toolbar--fixed' }, function (h) {
          return 'mdcToolbar' === h || f.attrs[h];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, '', { mdcToolbarRow: 'mdc-toolbar__row' });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'section', { mdcToolbarSection: 'mdc-toolbar__section', mdcToolbarSectionAlignStart: 'mdc-toolbar__section--align-start', mdcToolbarSectionAlignEnd: 'mdc-toolbar__section--align-end' }, function (h) {
          return 'mdcToolbarSection' === h || f.attrs[h];
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
    function d(U) {
      return U && U.__esModule ? U : { default: U };
    }Object.defineProperty(n, '__esModule', { value: !0 }), n.cardSubtitle = n.cardTitle = n.cardBlock = n.cardActionButton = n.card = n.toolbarTitle = n.toolbar = n.button = void 0;var r = a(1),
        l = d(r),
        u = a(12),
        f = d(u),
        h = a(15),
        b = d(h),
        C = a(13),
        A = d(C),
        T = a(14),
        S = d(T),
        E = a(7),
        w = d(E),
        D = a(8),
        N = d(D),
        I = a(9),
        O = d(I),
        P = a(11),
        R = d(P),
        M = a(10),
        F = d(M);n.button = l.default, n.toolbar = f.default, n.toolbarTitle = b.default, n.card = w.default, n.cardActionButton = N.default, n.cardBlock = O.default, n.cardTitle = R.default, n.cardSubtitle = F.default;
  }, function (t, n) {
    'use strict';
    function d(A) {
      return A.document !== void 0 && 'function' == typeof A.document.createElement;
    }function r(A) {
      return A in b || A in C;
    }function l(A, T, S) {
      return 'animationstart' === A || 'animationend' === A || 'animationiteration' === A ? 'animation' in S.style ? T[A].noPrefix : T[A].webkitPrefix : 'transitionend' === A ? 'transition' in S.style ? T[A].noPrefix : T[A].webkitPrefix : T[A].noPrefix;
    }function u(A, T) {
      if (!d(A) || !r(T)) return T;var S = T in b ? b : C,
          E = A.document.createElement('div'),
          w = '';return w = S === b ? l(T, S, E) : S[T].noPrefix in E.style ? S[T].noPrefix : S[T].webkitPrefix, w;
    }Object.defineProperty(n, '__esModule', { value: !0 }), n.getCorrectEventName = function (A, T) {
      return u(A, T);
    }, n.getCorrectPropertyName = function (A, T) {
      return u(A, T);
    };var b = { animationstart: { noPrefix: 'animationstart', webkitPrefix: 'webkitAnimationStart' }, animationend: { noPrefix: 'animationend', webkitPrefix: 'webkitAnimationEnd' }, animationiteration: { noPrefix: 'animationiteration', webkitPrefix: 'webkitAnimationIteration' }, transitionend: { noPrefix: 'transitionend', webkitPrefix: 'webkitTransitionEnd' } },
        C = { animation: { noPrefix: 'animation', webkitPrefix: '-webkit-animation' }, transform: { noPrefix: 'transform', webkitPrefix: '-webkit-transform' }, transition: { noPrefix: 'transition', webkitPrefix: '-webkit-transition' } };
  }, function (t, n, a) {
    'use strict';
    function r(b, C) {
      if (!(b instanceof C)) throw new TypeError('Cannot call a class as a function');
    }Object.defineProperty(n, '__esModule', { value: !0 });var l = function () {
      function b(C, A) {
        for (var S, T = 0; T < A.length; T++) {
          S = A[T], S.enumerable = S.enumerable || !1, S.configurable = !0, 'value' in S && (S.writable = !0), Object.defineProperty(C, S.key, S);
        }
      }return function (C, A, T) {
        return A && b(C.prototype, A), T && b(C, T), C;
      };
    }(),
        u = a(2),
        f = function (b) {
      return b && b.__esModule ? b : { default: b };
    }(u),
        h = function () {
      function b(C) {
        var A = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;r(this, b), this.root_ = C;for (var T = arguments.length, S = Array(2 < T ? T - 2 : 0), E = 2; E < T; E++) {
          S[E - 2] = arguments[E];
        }this.initialize.apply(this, S), this.foundation_ = void 0 === A ? this.getDefaultFoundation() : A, this.foundation_.init(), this.initialSyncWithDOM();
      }return l(b, null, [{ key: 'attachTo', value: function value(A) {
          return new b(A, new f.default());
        } }]), l(b, [{ key: 'initialize', value: function value() {} }, { key: 'getDefaultFoundation', value: function value() {
          throw new Error('Subclasses must override getDefaultFoundation to return a properly configured foundation class');
        } }, { key: 'initialSyncWithDOM', value: function value() {} }, { key: 'destroy', value: function value() {
          this.foundation_.destroy();
        } }, { key: 'listen', value: function value(A, T) {
          this.root_.addEventListener(A, T);
        } }, { key: 'unlisten', value: function value(A, T) {
          this.root_.removeEventListener(A, T);
        } }, { key: 'emit', value: function value(A, T) {
          var S;'function' == typeof CustomEvent ? S = new CustomEvent(A, { detail: T }) : (S = document.createEvent('CustomEvent'), S.initCustomEvent(A, !1, !1, T)), this.root_.dispatchEvent(S);
        } }]), b;
    }();n.default = h;
  }, function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var d = n.ROOT = 'mdc-ripple',
        r = n.UPGRADED = d + '-upgraded',
        l = n.cssClasses = { ROOT: r, UNBOUNDED: r + '--unbounded', BG_ACTIVE: r + '--background-active', BG_BOUNDED_ACTIVE_FILL: r + '--background-bounded-active-fill', FG_BOUNDED_ACTIVE_FILL: r + '--foreground-bounded-active-fill', FG_UNBOUNDED_ACTIVATION: r + '--foreground-unbounded-activation', FG_UNBOUNDED_DEACTIVATION: r + '--foreground-unbounded-deactivation' },
        u = n.strings = { VAR_SURFACE_WIDTH: '--' + d + '-surface-width', VAR_SURFACE_HEIGHT: '--' + d + '-surface-height', VAR_FG_SIZE: '--' + d + '-fg-size', VAR_FG_UNBOUNDED_OPACITY_DURATION: '--' + d + '-fg-unbounded-opacity-duration', VAR_FG_UNBOUNDED_TRANSFORM_DURATION: '--' + d + '-fg-unbounded-transform-duration', VAR_LEFT: '--' + d + '-left', VAR_TOP: '--' + d + '-top', VAR_TRANSLATE_END: '--' + d + '-translate-end', VAR_FG_APPROX_XF: '--' + d + '-fg-approx-xf', VAR_FG_SCALE: '--' + d + '-fg-scale', VAR_FG_TRANSLATE_START: '--' + d + '-fg-translate-start', VAR_FG_TRANSLATE_END: '--' + d + '-fg-translate-end' },
        f = n.numbers = { FG_TRANSFORM_DELAY_MS: 80, OPACITY_DURATION_DIVISOR: 3, ACTIVE_OPACITY_DURATION_MS: 110, MIN_OPACITY_DURATION_MS: 200, UNBOUNDED_TRANSFORM_DURATION_MS: 200, PADDING: 10, INITIAL_ORIGIN_SCALE: 0.6 };
  }, function (t, n, a) {
    'use strict';
    function d(S, E) {
      if (!(S instanceof E)) throw new TypeError('Cannot call a class as a function');
    }function r(S, E) {
      if (!S) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return E && ('object' == (typeof E === 'undefined' ? 'undefined' : _typeof(E)) || 'function' == typeof E) ? E : S;
    }function l(S, E) {
      if ('function' != typeof E && null !== E) throw new TypeError('Super expression must either be null or a function, not ' + (typeof E === 'undefined' ? 'undefined' : _typeof(E)));S.prototype = Object.create(E && E.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(S, E) : S.__proto__ = E);
    }Object.defineProperty(n, '__esModule', { value: !0 });var u = function () {
      function S(E, w) {
        for (var N, D = 0; D < w.length; D++) {
          N = w[D], N.enumerable = N.enumerable || !1, N.configurable = !0, 'value' in N && (N.writable = !0), Object.defineProperty(E, N.key, N);
        }
      }return function (E, w, D) {
        return w && S(E.prototype, w), D && S(E, D), E;
      };
    }(),
        f = a(3),
        h = a(17),
        b = a(19),
        C = a(4),
        A = { mouseup: 'mousedown', pointerup: 'pointerdown', touchend: 'touchstart', keyup: 'keydown', blur: 'focus' },
        T = function (S) {
      function E(w) {
        d(this, E);var D = r(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, Object.assign(E.defaultAdapter, w)));return D.layoutFrame_ = 0, D.frame_ = { width: 0, height: 0 }, D.activationState_ = D.defaultActivationState_(), D.xfDuration_ = 0, D.initialSize_ = 0, D.maxRadius_ = 0, D.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }], D.listeners_ = { activate: function activate(I) {
            return D.activate_(I);
          }, deactivate: function deactivate(I) {
            return D.deactivate_(I);
          }, focus: function focus() {
            return requestAnimationFrame(function () {
              return D.adapter_.addClass(E.cssClasses.BG_ACTIVE);
            });
          }, blur: function blur() {
            return requestAnimationFrame(function () {
              return D.adapter_.removeClass(E.cssClasses.BG_ACTIVE);
            });
          } }, D.unboundedOpacityFadeTimer_ = 0, D.resizeHandler_ = function () {
          return D.layout();
        }, D.cancelBgBounded_ = function () {}, D.cancelFgBounded_ = function () {}, D.cancelFgUnbounded_ = function () {}, D.unboundedCoords_ = { left: 0, top: 0 }, D.fgScale_ = 0, D;
      }return l(E, S), u(E, [{ key: 'isSupported_', get: function get() {
          return this.adapter_.browserSupportsCssVars();
        } }], [{ key: 'cssClasses', get: function get() {
          return b.cssClasses;
        } }, { key: 'strings', get: function get() {
          return b.strings;
        } }, { key: 'numbers', get: function get() {
          return b.numbers;
        } }, { key: 'defaultAdapter', get: function get() {
          return { browserSupportsCssVars: function browserSupportsCssVars() {}, isUnbounded: function isUnbounded() {}, isSurfaceActive: function isSurfaceActive() {}, addClass: function addClass() {}, removeClass: function removeClass() {}, registerInteractionHandler: function registerInteractionHandler() {}, deregisterInteractionHandler: function deregisterInteractionHandler() {}, registerResizeHandler: function registerResizeHandler() {}, deregisterResizeHandler: function deregisterResizeHandler() {}, updateCssVariable: function updateCssVariable() {}, computeBoundingRect: function computeBoundingRect() {}, getWindowPageOffset: function getWindowPageOffset() {} };
        } }]), u(E, [{ key: 'defaultActivationState_', value: function value() {
          return { isActivated: !1, wasActivatedByPointer: !1, wasElementMadeActive: !1, activationStartTime: 0, activationEvent: null };
        } }, { key: 'init', value: function value() {
          var D = this;if (this.isSupported_) {
            this.addEventListeners_();var N = E.cssClasses,
                I = N.ROOT,
                O = N.UNBOUNDED;requestAnimationFrame(function () {
              D.adapter_.addClass(I), D.adapter_.isUnbounded() && D.adapter_.addClass(O), D.layoutInternal_();
            });
          }
        } }, { key: 'addEventListeners_', value: function value() {
          var D = this;this.listenerInfos_.forEach(function (N) {
            Object.keys(N).forEach(function (I) {
              D.adapter_.registerInteractionHandler(N[I], D.listeners_[I]);
            });
          }), this.adapter_.registerResizeHandler(this.resizeHandler_);
        } }, { key: 'activate_', value: function value(D) {
          var N = this,
              I = this.activationState_;I.isActivated || (I.isActivated = !0, I.isProgrammatic = null === D, I.activationEvent = D, I.wasActivatedByPointer = !I.isProgrammatic && ('mousedown' === D.type || 'touchstart' === D.type || 'pointerdown' === D.type), I.activationStartTime = Date.now(), requestAnimationFrame(function () {
            I.wasElementMadeActive = D && 'keydown' === D.type ? N.adapter_.isSurfaceActive() : !0, I.wasElementMadeActive ? N.animateActivation_() : N.activationState_ = N.defaultActivationState_();
          }));
        } }, { key: 'activate', value: function value() {
          this.activate_(null);
        } }, { key: 'animateActivation_', value: function value() {
          var D = this,
              N = E.cssClasses,
              I = N.BG_ACTIVE,
              O = N.BG_BOUNDED_ACTIVE_FILL,
              P = N.FG_UNBOUNDED_DEACTIVATION,
              R = N.FG_BOUNDED_ACTIVE_FILL;[O, P, R].forEach(function (M) {
            return D.adapter_.removeClass(M);
          }), this.cancelBgBounded_(), this.cancelFgBounded_(), this.cancelFgUnbounded_(), this.unboundedOpacityFadeTimer_ && (clearTimeout(this.unboundedOpacityFadeTimer_), this.unboundedOpacityFadeTimer_ = 0), this.adapter_.addClass(I), this.adapter_.isUnbounded() && this.animateUnboundedActivation_();
        } }, { key: 'animateUnboundedActivation_', value: function value() {
          var D = E.cssClasses.FG_UNBOUNDED_ACTIVATION;this.adapter_.addClass(D);
        } }, { key: 'deactivate_', value: function value(D) {
          var N = this,
              I = this.activationState_;if (I.isActivated) {
            if (I.isProgrammatic) return requestAnimationFrame(function () {
              return N.animateDeactivation_(null, Object.assign({}, I));
            }), void (this.activationState_ = this.defaultActivationState_());var O = A[D.type],
                P = I.activationEvent.type,
                R = O === P,
                M = R;I.wasActivatedByPointer && (M = 'mouseup' === D.type);var F = Object.assign({}, I);R && requestAnimationFrame(function () {
              return N.animateDeactivation_(D, F);
            }), M && (this.activationState_ = this.defaultActivationState_());
          }
        } }, { key: 'deactivate', value: function value() {
          this.deactivate_(null);
        } }, { key: 'animateDeactivation_', value: function value(D, N) {
          var I = N.wasActivatedByPointer,
              O = N.wasElementMadeActive,
              P = N.activationStartTime,
              R = N.isProgrammatic,
              M = E.cssClasses.BG_ACTIVE;if (I || O) {
            this.adapter_.removeClass(M);var F = !R && ('touchend' === D.type || 'pointerup' === D.type || 'mouseup' === D.type);this.adapter_.isUnbounded() ? this.animateUnboundedDeactivation_(this.getUnboundedDeactivationInfo_(P)) : this.animateBoundedDeactivation_(D, F);
          }
        } }, { key: 'animateUnboundedDeactivation_', value: function value(D) {
          var N = this,
              I = D.opacityDuration,
              O = D.transformDuration,
              P = D.approxCurScale,
              R = E.cssClasses,
              M = R.FG_UNBOUNDED_ACTIVATION,
              F = R.FG_UNBOUNDED_DEACTIVATION,
              U = E.strings,
              V = U.VAR_FG_UNBOUNDED_OPACITY_DURATION,
              B = U.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
              z = U.VAR_FG_APPROX_XF;this.adapter_.updateCssVariable(z, 'scale(' + P + ')'), this.adapter_.updateCssVariable(V, I + 'ms'), this.adapter_.updateCssVariable(B, O + 'ms'), this.adapter_.addClass(F), this.adapter_.removeClass(M), this.unboundedOpacityFadeTimer_ = setTimeout(function () {
            N.adapter_.removeClass(F);
          }, I);
        } }, { key: 'getUnboundedDeactivationInfo_', value: function value(D) {
          var N = Date.now() - D,
              I = E.numbers,
              O = I.FG_TRANSFORM_DELAY_MS,
              P = I.OPACITY_DURATION_DIVISOR,
              R = I.ACTIVE_OPACITY_DURATION_MS,
              M = I.UNBOUNDED_TRANSFORM_DURATION_MS,
              F = I.MIN_OPACITY_DURATION_MS,
              U = 0;if (N > O) {
            var V = _Mathmin((N - O) / this.xfDuration_, 1);U = V * this.fgScale_;
          }var z = _Mathmin(N / R, 1),
              L = _Mathmax(F, 1e3 * z / P);return { transformDuration: M, opacityDuration: L, approxCurScale: U };
        } }, { key: 'animateBoundedDeactivation_', value: function value(D, N) {
          var I;I = N ? (0, C.getNormalizedEventCoords)(D, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()) : { x: this.frame_.width / 2, y: this.frame_.height / 2 }, I = { x: I.x - this.initialSize_ / 2, y: I.y - this.initialSize_ / 2 };var O = { x: this.frame_.width / 2 - this.initialSize_ / 2, y: this.frame_.height / 2 - this.initialSize_ / 2 },
              P = E.strings,
              R = P.VAR_FG_TRANSLATE_START,
              M = P.VAR_FG_TRANSLATE_END,
              F = E.cssClasses,
              U = F.BG_BOUNDED_ACTIVE_FILL,
              V = F.FG_BOUNDED_ACTIVE_FILL;this.adapter_.updateCssVariable(R, I.x + 'px, ' + I.y + 'px'), this.adapter_.updateCssVariable(M, O.x + 'px, ' + O.y + 'px'), this.cancelBgBounded_ = (0, C.animateWithClass)(this.adapter_, U, (0, h.getCorrectEventName)(window, 'transitionend')), this.cancelFgBounded_ = (0, C.animateWithClass)(this.adapter_, V, (0, h.getCorrectEventName)(window, 'animationend'));
        } }, { key: 'destroy', value: function value() {
          var D = this;if (this.isSupported_) {
            this.removeEventListeners_();var N = E.cssClasses,
                I = N.ROOT,
                O = N.UNBOUNDED;requestAnimationFrame(function () {
              D.adapter_.removeClass(I), D.adapter_.removeClass(O), D.removeCssVars_();
            });
          }
        } }, { key: 'removeEventListeners_', value: function value() {
          var D = this;this.listenerInfos_.forEach(function (N) {
            Object.keys(N).forEach(function (I) {
              D.adapter_.deregisterInteractionHandler(N[I], D.listeners_[I]);
            });
          }), this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        } }, { key: 'removeCssVars_', value: function value() {
          var D = this,
              N = E.strings;Object.keys(N).forEach(function (I) {
            0 === I.indexOf('VAR_') && D.adapter_.updateCssVariable(N[I], null);
          });
        } }, { key: 'layout', value: function value() {
          var D = this;this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function () {
            D.layoutInternal_(), D.layoutFrame_ = 0;
          });
        } }, { key: 'layoutInternal_', value: function value() {
          this.frame_ = this.adapter_.computeBoundingRect();var D = _Mathmax(this.frame_.height, this.frame_.width),
              N = _Mathsqrt(_Mathpow(this.frame_.width, 2) + _Mathpow(this.frame_.height, 2));this.initialSize_ = D * E.numbers.INITIAL_ORIGIN_SCALE, this.maxRadius_ = N + E.numbers.PADDING, this.fgScale_ = this.maxRadius_ / this.initialSize_, this.xfDuration_ = 1e3 * _Mathsqrt(this.maxRadius_ / 1024), this.updateLayoutCssVars_();
        } }, { key: 'updateLayoutCssVars_', value: function value() {
          var D = E.strings,
              N = D.VAR_SURFACE_WIDTH,
              I = D.VAR_SURFACE_HEIGHT,
              O = D.VAR_FG_SIZE,
              P = D.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
              R = D.VAR_LEFT,
              M = D.VAR_TOP,
              F = D.VAR_FG_SCALE;this.adapter_.updateCssVariable(N, this.frame_.width + 'px'), this.adapter_.updateCssVariable(I, this.frame_.height + 'px'), this.adapter_.updateCssVariable(O, this.initialSize_ + 'px'), this.adapter_.updateCssVariable(P, this.xfDuration_ + 'ms'), this.adapter_.updateCssVariable(F, this.fgScale_), this.adapter_.isUnbounded() && (this.unboundedCoords_ = { left: _Mathround(this.frame_.width / 2 - this.initialSize_ / 2), top: _Mathround(this.frame_.height / 2 - this.initialSize_ / 2) }, this.adapter_.updateCssVariable(R, this.unboundedCoords_.left + 'px'), this.adapter_.updateCssVariable(M, this.unboundedCoords_.top + 'px'));
        } }]), E;
    }(f.MDCFoundation);n.default = T;
  }, function (t, n, a) {
    'use strict';
    function r(E, w) {
      if (!(E instanceof w)) throw new TypeError('Cannot call a class as a function');
    }function l(E, w) {
      if (!E) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return w && ('object' == (typeof w === 'undefined' ? 'undefined' : _typeof(w)) || 'function' == typeof w) ? w : E;
    }function u(E, w) {
      if ('function' != typeof w && null !== w) throw new TypeError('Super expression must either be null or a function, not ' + (typeof w === 'undefined' ? 'undefined' : _typeof(w)));E.prototype = Object.create(w && w.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } }), w && (Object.setPrototypeOf ? Object.setPrototypeOf(E, w) : E.__proto__ = w);
    }Object.defineProperty(n, '__esModule', { value: !0 }), n.MDCRipple = n.MDCRippleFoundation = void 0;var f = function () {
      function E(w, D) {
        for (var I, N = 0; N < D.length; N++) {
          I = D[N], I.enumerable = I.enumerable || !1, I.configurable = !0, 'value' in I && (I.writable = !0), Object.defineProperty(w, I.key, I);
        }
      }return function (w, D, N) {
        return D && E(w.prototype, D), N && E(w, N), w;
      };
    }(),
        h = a(3),
        b = a(20),
        C = function (E) {
      return E && E.__esModule ? E : { default: E };
    }(b),
        A = a(4),
        T = (0, A.getMatchesProperty)(HTMLElement.prototype);n.MDCRippleFoundation = C.default;n.MDCRipple = function (E) {
      function w() {
        return r(this, w), l(this, (w.__proto__ || Object.getPrototypeOf(w)).apply(this, arguments));
      }return u(w, E), f(w, [{ key: 'activate', value: function value() {
          this.foundation_.activate();
        } }, { key: 'deactivate', value: function value() {
          this.foundation_.deactivate();
        } }, { key: 'getDefaultFoundation', value: function value() {
          return new C.default(w.createAdapter(this));
        } }, { key: 'initialSyncWithDOM', value: function value() {
          this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
        } }, { key: 'unbounded', get: function get() {
          return this.unbounded_;
        }, set: function set(N) {
          var I = C.default.cssClasses.UNBOUNDED;this.unbounded_ = !!N, this.unbounded_ ? this.root_.classList.add(I) : this.root_.classList.remove(I);
        } }], [{ key: 'attachTo', value: function value(N) {
          var I = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              O = I.isUnbounded,
              P = void 0 === O ? void 0 : O,
              R = new w(N);return void 0 !== P && (R.unbounded = P), R;
        } }, { key: 'createAdapter', value: function value(N) {
          return { browserSupportsCssVars: function browserSupportsCssVars() {
              return (0, A.supportsCssVariables)(window);
            }, isUnbounded: function isUnbounded() {
              return N.unbounded;
            }, isSurfaceActive: function isSurfaceActive() {
              return N.root_[T](':active');
            }, addClass: function addClass(O) {
              return N.root_.classList.add(O);
            }, removeClass: function removeClass(O) {
              return N.root_.classList.remove(O);
            }, registerInteractionHandler: function registerInteractionHandler(O, P) {
              return N.root_.addEventListener(O, P);
            }, deregisterInteractionHandler: function deregisterInteractionHandler(O, P) {
              return N.root_.removeEventListener(O, P);
            }, registerResizeHandler: function registerResizeHandler(O) {
              return window.addEventListener('resize', O);
            }, deregisterResizeHandler: function deregisterResizeHandler(O) {
              return window.removeEventListener('resize', O);
            }, updateCssVariable: function updateCssVariable(O, P) {
              return N.root_.style.setProperty(O, P);
            }, computeBoundingRect: function computeBoundingRect() {
              return N.root_.getBoundingClientRect();
            }, getWindowPageOffset: function getWindowPageOffset() {
              return { x: window.pageXOffset, y: window.pageYOffset };
            } };
        } }]), w;
    }(h.MDCComponent);
  }, function (t) {
    'use strict';
    function d() {
      throw new Error('setTimeout has not been defined');
    }function r() {
      throw new Error('clearTimeout has not been defined');
    }function l(I) {
      if (T === setTimeout) return setTimeout(I, 0);if ((T === d || !T) && setTimeout) return T = setTimeout, setTimeout(I, 0);try {
        return T(I, 0);
      } catch (O) {
        try {
          return T.call(null, I, 0);
        } catch (P) {
          return T.call(this, I, 0);
        }
      }
    }function u(I) {
      if (S === clearTimeout) return clearTimeout(I);if ((S === r || !S) && clearTimeout) return S = clearTimeout, clearTimeout(I);try {
        return S(I);
      } catch (O) {
        try {
          return S.call(null, I);
        } catch (P) {
          return S.call(this, I);
        }
      }
    }function f() {
      w && D && (w = !1, D.length ? E = D.concat(E) : N = -1, E.length && h());
    }function h() {
      if (!w) {
        var I = l(f);w = !0;for (var O = E.length; O;) {
          for (D = E, E = []; ++N < O;) {
            D && D[N].run();
          }N = -1, O = E.length;
        }D = null, w = !1, u(I);
      }
    }function b(I, O) {
      this.fun = I, this.array = O;
    }function C() {}var A = t.exports = {},
        T,
        S;(function () {
      try {
        T = 'function' == typeof setTimeout ? setTimeout : d;
      } catch (I) {
        T = d;
      }try {
        S = 'function' == typeof clearTimeout ? clearTimeout : r;
      } catch (I) {
        S = r;
      }
    })();var E = [],
        w = !1,
        D,
        N = -1;A.nextTick = function (I) {
      var O = Array(arguments.length - 1);if (1 < arguments.length) for (var P = 1; P < arguments.length; P++) {
        O[P - 1] = arguments[P];
      }E.push(new b(I, O)), 1 !== E.length || w || l(h);
    }, b.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, A.title = 'browser', A.browser = !0, A.env = {}, A.argv = [], A.version = '', A.versions = {}, A.on = C, A.addListener = C, A.once = C, A.off = C, A.removeListener = C, A.removeAllListeners = C, A.emit = C, A.binding = function () {
      throw new Error('process.binding is not supported');
    }, A.cwd = function () {
      return '/';
    }, A.chdir = function () {
      throw new Error('process.chdir is not supported');
    }, A.umask = function () {
      return 0;
    };
  }, function (t, n, a) {
    'use strict';
    (function (d, r) {
      (function (l, u) {
        'use strict';
        function f(F) {
          'function' != typeof F && (F = new Function('' + F));for (var U = Array(arguments.length - 1), V = 0; V < U.length; V++) {
            U[V] = arguments[V + 1];
          }var B = { callback: F, args: U };return I[N] = B, R(N), N++;
        }function h(F) {
          delete I[F];
        }function b(F) {
          var U = F.callback,
              V = F.args;switch (V.length) {case 0:
              U();break;case 1:
              U(V[0]);break;case 2:
              U(V[0], V[1]);break;case 3:
              U(V[0], V[1], V[2]);break;default:
              U.apply(u, V);}
        }function C(F) {
          if (O) setTimeout(C, 0, F);else {
            var U = I[F];if (U) {
              O = !0;try {
                b(U);
              } finally {
                h(F), O = !1;
              }
            }
          }
        }function A() {
          R = function R(U) {
            r.nextTick(function () {
              C(U);
            });
          };
        }function T() {
          if (l.postMessage && !l.importScripts) {
            var F = !0,
                U = l.onmessage;return l.onmessage = function () {
              F = !1;
            }, l.postMessage('', '*'), l.onmessage = U, F;
          }
        }function S() {
          var F = 'setImmediate$' + Math.random() + '$',
              U = function U(B) {
            B.source === l && 'string' == typeof B.data && 0 === B.data.indexOf(F) && C(+B.data.slice(F.length));
          };l.addEventListener ? l.addEventListener('message', U, !1) : l.attachEvent('onmessage', U), R = function R(B) {
            l.postMessage(F + B, '*');
          };
        }function E() {
          var F = new MessageChannel();F.port1.onmessage = function (U) {
            var V = U.data;C(V);
          }, R = function R(V) {
            F.port2.postMessage(V);
          };
        }function w() {
          var F = P.documentElement;R = function R(V) {
            var B = P.createElement('script');B.onreadystatechange = function () {
              C(V), B.onreadystatechange = null, F.removeChild(B), B = null;
            }, F.appendChild(B);
          };
        }function D() {
          R = function R(U) {
            setTimeout(C, 0, U);
          };
        }if (!l.setImmediate) {
          var R,
              N = 1,
              I = {},
              O = !1,
              P = l.document,
              M = Object.getPrototypeOf && Object.getPrototypeOf(l);M = M && M.setTimeout ? M : l, '[object process]' === {}.toString.call(l.process) ? A() : T() ? S() : l.MessageChannel ? E() : P && 'onreadystatechange' in P.createElement('script') ? w() : D(), M.setImmediate = f, M.clearImmediate = h;
        }
      })('undefined' == typeof self ? 'undefined' == typeof d ? void 0 : d : self);
    }).call(n, a(6), a(22));
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
    }, a(23), n.setImmediate = setImmediate, n.clearImmediate = clearImmediate;
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
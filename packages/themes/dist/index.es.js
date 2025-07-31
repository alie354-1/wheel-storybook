import Ge, { createContext as Ir, useContext as Dr, useState as Q, useCallback as ce, useEffect as qr } from "react";
var ee = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Lr() {
  if (qe) return Y;
  qe = 1;
  var r = Ge, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, h, x) {
    var v, _ = {}, j = null, H = null;
    x !== void 0 && (j = "" + x), h.key !== void 0 && (j = "" + h.key), h.ref !== void 0 && (H = h.ref);
    for (v in h) n.call(h, v) && !o.hasOwnProperty(v) && (_[v] = h[v]);
    if (c && c.defaultProps) for (v in h = c.defaultProps, h) _[v] === void 0 && (_[v] = h[v]);
    return { $$typeof: e, type: c, key: j, ref: H, props: _, _owner: i.current };
  }
  return Y.Fragment = t, Y.jsx = l, Y.jsxs = l, Y;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Nr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ge, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), q = Symbol.iterator, z = "@@iterator";
    function rr(a) {
      if (a === null || typeof a != "object")
        return null;
      var s = q && a[q] || a[z];
      return typeof s == "function" ? s : null;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(a) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
          u[d - 1] = arguments[d];
        tr("error", a, u);
      }
    }
    function tr(a, s, u) {
      {
        var d = L.ReactDebugCurrentFrame, p = d.getStackAddendum();
        p !== "" && (s += "%s", u = u.concat([p]));
        var m = u.map(function(b) {
          return String(b);
        });
        m.unshift("Warning: " + s), Function.prototype.apply.call(console[a], console, m);
      }
    }
    var ar = !1, nr = !1, ir = !1, sr = !1, or = !1, ge;
    ge = Symbol.for("react.module.reference");
    function fr(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || or || a === i || a === x || a === v || sr || a === H || ar || nr || ir || typeof a == "object" && a !== null && (a.$$typeof === j || a.$$typeof === _ || a.$$typeof === l || a.$$typeof === c || a.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === ge || a.getModuleId !== void 0));
    }
    function ur(a, s, u) {
      var d = a.displayName;
      if (d)
        return d;
      var p = s.displayName || s.name || "";
      return p !== "" ? u + "(" + p + ")" : u;
    }
    function be(a) {
      return a.displayName || "Context";
    }
    function F(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case x:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var s = a;
            return be(s) + ".Consumer";
          case l:
            var u = a;
            return be(u._context) + ".Provider";
          case h:
            return ur(a, a.render, "ForwardRef");
          case _:
            var d = a.displayName || null;
            return d !== null ? d : F(a.type) || "Memo";
          case j: {
            var p = a, m = p._payload, b = p._init;
            try {
              return F(b(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, U = 0, pe, me, ye, ve, _e, xe, we;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function lr() {
      {
        if (U === 0) {
          pe = console.log, me = console.info, ye = console.warn, ve = console.error, _e = console.group, xe = console.groupCollapsed, we = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        U++;
      }
    }
    function cr() {
      {
        if (U--, U === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, a, {
              value: pe
            }),
            info: I({}, a, {
              value: me
            }),
            warn: I({}, a, {
              value: ye
            }),
            error: I({}, a, {
              value: ve
            }),
            group: I({}, a, {
              value: _e
            }),
            groupCollapsed: I({}, a, {
              value: xe
            }),
            groupEnd: I({}, a, {
              value: we
            })
          });
        }
        U < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = L.ReactCurrentDispatcher, ne;
    function J(a, s, u) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (p) {
            var d = p.stack.trim().match(/\n( *(at )?)/);
            ne = d && d[1] || "";
          }
        return `
` + ne + a;
      }
    }
    var ie = !1, X;
    {
      var dr = typeof WeakMap == "function" ? WeakMap : Map;
      X = new dr();
    }
    function Ee(a, s) {
      if (!a || ie)
        return "";
      {
        var u = X.get(a);
        if (u !== void 0)
          return u;
      }
      var d;
      ie = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = ae.current, ae.current = null, lr();
      try {
        if (s) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (k) {
              d = k;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (k) {
              d = k;
            }
            a.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            d = k;
          }
          a();
        }
      } catch (k) {
        if (k && d && typeof k.stack == "string") {
          for (var g = k.stack.split(`
`), T = d.stack.split(`
`), w = g.length - 1, S = T.length - 1; w >= 1 && S >= 0 && g[w] !== T[S]; )
            S--;
          for (; w >= 1 && S >= 0; w--, S--)
            if (g[w] !== T[S]) {
              if (w !== 1 || S !== 1)
                do
                  if (w--, S--, S < 0 || g[w] !== T[S]) {
                    var A = `
` + g[w].replace(" at new ", " at ");
                    return a.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", a.displayName)), typeof a == "function" && X.set(a, A), A;
                  }
                while (w >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ae.current = m, cr(), Error.prepareStackTrace = p;
      }
      var W = a ? a.displayName || a.name : "", D = W ? J(W) : "";
      return typeof a == "function" && X.set(a, D), D;
    }
    function hr(a, s, u) {
      return Ee(a, !1);
    }
    function gr(a) {
      var s = a.prototype;
      return !!(s && s.isReactComponent);
    }
    function K(a, s, u) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Ee(a, gr(a));
      if (typeof a == "string")
        return J(a);
      switch (a) {
        case x:
          return J("Suspense");
        case v:
          return J("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case h:
            return hr(a.render);
          case _:
            return K(a.type, s, u);
          case j: {
            var d = a, p = d._payload, m = d._init;
            try {
              return K(m(p), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, Re = {}, Te = L.ReactDebugCurrentFrame;
    function Z(a) {
      if (a) {
        var s = a._owner, u = K(a.type, a._source, s ? s.type : null);
        Te.setExtraStackFrame(u);
      } else
        Te.setExtraStackFrame(null);
    }
    function br(a, s, u, d, p) {
      {
        var m = Function.call.bind(B);
        for (var b in a)
          if (m(a, b)) {
            var g = void 0;
            try {
              if (typeof a[b] != "function") {
                var T = Error((d || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              g = a[b](s, b, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              g = w;
            }
            g && !(g instanceof Error) && (Z(p), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, b, typeof g), Z(null)), g instanceof Error && !(g.message in Re) && (Re[g.message] = !0, Z(p), R("Failed %s type: %s", u, g.message), Z(null));
          }
      }
    }
    var pr = Array.isArray;
    function se(a) {
      return pr(a);
    }
    function mr(a) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return u;
      }
    }
    function yr(a) {
      try {
        return ke(a), !1;
      } catch {
        return !0;
      }
    }
    function ke(a) {
      return "" + a;
    }
    function Ce(a) {
      if (yr(a))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(a)), ke(a);
    }
    var Me = L.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, Oe;
    function _r(a) {
      if (B.call(a, "ref")) {
        var s = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function xr(a) {
      if (B.call(a, "key")) {
        var s = Object.getOwnPropertyDescriptor(a, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function wr(a, s) {
      typeof a.ref == "string" && Me.current;
    }
    function Sr(a, s) {
      {
        var u = function() {
          Ae || (Ae = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Er(a, s) {
      {
        var u = function() {
          Oe || (Oe = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Rr = function(a, s, u, d, p, m, b) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: a,
        key: s,
        ref: u,
        props: b,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Tr(a, s, u, d, p) {
      {
        var m, b = {}, g = null, T = null;
        u !== void 0 && (Ce(u), g = "" + u), xr(s) && (Ce(s.key), g = "" + s.key), _r(s) && (T = s.ref, wr(s, p));
        for (m in s)
          B.call(s, m) && !vr.hasOwnProperty(m) && (b[m] = s[m]);
        if (a && a.defaultProps) {
          var w = a.defaultProps;
          for (m in w)
            b[m] === void 0 && (b[m] = w[m]);
        }
        if (g || T) {
          var S = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          g && Sr(b, S), T && Er(b, S);
        }
        return Rr(a, g, T, p, d, Me.current, b);
      }
    }
    var oe = L.ReactCurrentOwner, Pe = L.ReactDebugCurrentFrame;
    function N(a) {
      if (a) {
        var s = a._owner, u = K(a.type, a._source, s ? s.type : null);
        Pe.setExtraStackFrame(u);
      } else
        Pe.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function ue(a) {
      return typeof a == "object" && a !== null && a.$$typeof === e;
    }
    function je() {
      {
        if (oe.current) {
          var a = F(oe.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function kr(a) {
      return "";
    }
    var He = {};
    function Cr(a) {
      {
        var s = je();
        if (!s) {
          var u = typeof a == "string" ? a : a.displayName || a.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function $e(a, s) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var u = Cr(s);
        if (He[u])
          return;
        He[u] = !0;
        var d = "";
        a && a._owner && a._owner !== oe.current && (d = " It was passed a child from " + F(a._owner.type) + "."), N(a), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), N(null);
      }
    }
    function Fe(a, s) {
      {
        if (typeof a != "object")
          return;
        if (se(a))
          for (var u = 0; u < a.length; u++) {
            var d = a[u];
            ue(d) && $e(d, s);
          }
        else if (ue(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var p = rr(a);
          if (typeof p == "function" && p !== a.entries)
            for (var m = p.call(a), b; !(b = m.next()).done; )
              ue(b.value) && $e(b.value, s);
        }
      }
    }
    function Mr(a) {
      {
        var s = a.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === _))
          u = s.propTypes;
        else
          return;
        if (u) {
          var d = F(s);
          br(u, a.props, "prop", d, a);
        } else if (s.PropTypes !== void 0 && !fe) {
          fe = !0;
          var p = F(s);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(a) {
      {
        for (var s = Object.keys(a.props), u = 0; u < s.length; u++) {
          var d = s[u];
          if (d !== "children" && d !== "key") {
            N(a), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), N(null);
            break;
          }
        }
        a.ref !== null && (N(a), R("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var Ie = {};
    function De(a, s, u, d, p, m) {
      {
        var b = fr(a);
        if (!b) {
          var g = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = kr();
          T ? g += T : g += je();
          var w;
          a === null ? w = "null" : se(a) ? w = "array" : a !== void 0 && a.$$typeof === e ? (w = "<" + (F(a.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : w = typeof a, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, g);
        }
        var S = Tr(a, s, u, p, m);
        if (S == null)
          return S;
        if (b) {
          var A = s.children;
          if (A !== void 0)
            if (d)
              if (se(A)) {
                for (var W = 0; W < A.length; W++)
                  Fe(A[W], a);
                Object.freeze && Object.freeze(A);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(A, a);
        }
        if (B.call(s, "key")) {
          var D = F(a), k = Object.keys(s).filter(function(Fr) {
            return Fr !== "key";
          }), le = k.length > 0 ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[D + le]) {
            var $r = k.length > 0 ? "{" + k.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, D, $r, D), Ie[D + le] = !0;
          }
        }
        return a === n ? Ar(S) : Mr(S), S;
      }
    }
    function Or(a, s, u) {
      return De(a, s, u, !0);
    }
    function Pr(a, s, u) {
      return De(a, s, u, !1);
    }
    var jr = Pr, Hr = Or;
    V.Fragment = n, V.jsx = jr, V.jsxs = Hr;
  }()), V;
}
var Ne;
function Wr() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? ee.exports = Lr() : ee.exports = Nr()), ee.exports;
}
var zr = Wr();
const Je = {
  50: "#e0e7ff",
  100: "#c7d2fe",
  200: "#a5b4fc",
  300: "#818cf8",
  400: "#6366f1",
  500: "#1e1b4b",
  // Base midnight blue
  600: "#312e81",
  700: "#3730a3",
  800: "#4338ca",
  900: "#0f0c29"
}, Xe = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fde68a",
  300: "#fcd34d",
  400: "var(--warning)",
  500: "var(--warning)",
  // Base amber
  600: "#d97706",
  700: "#b45309",
  800: "#92400e",
  900: "#78350f"
}, Ur = {
  50: "#e8f4fd",
  100: "#d1e9fb",
  200: "#a3d3f7",
  300: "#75bdf3",
  400: "#47a6ef",
  500: "#6366f1",
  // Blend of primary and secondary
  600: "#1273bc",
  700: "#0e568d",
  800: "#0a395e",
  900: "#051d2f"
}, Br = {
  50: "#f3faf7",
  100: "#def7ec",
  200: "#bcf0da",
  300: "#84e1bc",
  400: "#31c48d",
  500: "#0e9f6e",
  600: "#057a55",
  700: "#046c4e",
  800: "#03543f",
  900: "#014737"
}, Yr = {
  50: "#fdfdea",
  100: "#fdf6b2",
  200: "#fce96a",
  300: "#faca15",
  400: "#e3a008",
  500: "#c27803",
  600: "#9f580a",
  700: "#8e4b10",
  800: "#723b13",
  900: "#633112"
}, Vr = {
  50: "#fdf2f2",
  100: "#fde8e8",
  200: "#fbd5d5",
  300: "#f8b4b4",
  400: "#f98080",
  500: "#f05252",
  600: "#e02424",
  700: "#c81e1e",
  800: "#9b1c1c",
  900: "#771d1d"
}, Gr = {
  50: "#e8f4fd",
  100: "#d1e9fb",
  200: "#a3d3f7",
  300: "#75bdf3",
  400: "#47a6ef",
  500: "#1a90eb",
  600: "#1273bc",
  700: "#0e568d",
  800: "#0a395e",
  900: "#051d2f"
}, Jr = {
  50: "var(--bg-secondary)",
  100: "var(--bg-secondary)",
  200: "var(--border-default)",
  300: "var(--border-default)",
  400: "var(--text-disabled)",
  500: "var(--text-secondary)",
  600: "var(--text-secondary)",
  700: "var(--text-secondary)",
  800: "var(--text-primary)",
  900: "var(--text-primary)"
}, Xr = {
  // Background colors
  bgPrimary: "var(--bg-secondary)",
  bgSecondary: "var(--bg-secondary)",
  bgTertiary: "var(--border-default)",
  bgCard: "var(--bg-primary)",
  bgModal: "#ffffff",
  bgHover: "rgba(0, 0, 0, 0.05)",
  bgActive: "var(--shadow-color-light)",
  bgDisabled: "var(--border-default)",
  // Text colors
  textPrimary: "#1e1b4b",
  // Updated to midnight blue
  textSecondary: "var(--text-secondary)",
  textTertiary: "var(--text-disabled)",
  textDisabled: "var(--border-default)",
  textInverted: "var(--bg-primary)",
  textLink: "#3730a3",
  // Updated to midnight blue
  textLinkHover: "var(--warning)",
  // Updated to amber
  // Border colors
  borderDefault: "var(--border-default)",
  borderFocus: "#3730a3",
  // Updated to midnight blue
  borderDisabled: "var(--border-default)",
  // Other semantic colors
  shadow: "var(--shadow-color-light)",
  overlay: "var(--overlay-background)",
  // Gradient backgrounds
  bgGradientPrimary: "linear-gradient(135deg, #0f0c29 0%, #1e1b4b 25%, #312e81 50%, #d97706 75%, var(--warning) 100%)",
  bgGradientMidnight: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%)",
  bgGradientAmber: "linear-gradient(135deg, var(--warning) 0%, #d97706 100%)",
  bgGradientJourney: "linear-gradient(135deg, var(--warning) 0%, #d97706 50%, #b45309 100%)"
}, Kr = {
  fonts: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    serif: "Georgia, Cambria, 'Times New Roman', Times, serif",
    mono: "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    md: "1.125rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "1.875rem",
    "3xl": "2.25rem",
    "4xl": "3rem",
    "5xl": "4rem"
  },
  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  }
}, Zr = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, Qr = {
  width: {
    none: "0",
    thin: "1px",
    base: "2px",
    thick: "4px",
    thicker: "8px"
  },
  radius: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "9999px"
  },
  styles: {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
    double: "double"
  }
}, et = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 var(--shadow-color-light), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px var(--shadow-color-light), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px var(--shadow-color-light), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px var(--shadow-color-light), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 3px rgba(55, 48, 163, 0.5)"
  // Updated to midnight blue
}, rt = {
  durations: {
    fastest: "50ms",
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slowest: "500ms"
  },
  easings: {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out"
  },
  transitions: {
    default: "all 200ms ease",
    slow: "all 300ms ease",
    fast: "all 100ms ease"
  },
  keyframes: {
    spin: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
    ping: "@keyframes ping { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(2); opacity: 0; } }",
    pulse: "@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }",
    bounce: "@keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }",
    ambient: "@keyframes ambient { 0% { opacity: 0.8; transform: scale(1); } 100% { opacity: 1; transform: scale(1.05); } }"
  }
}, tt = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, at = {
  hide: -1,
  auto: 0,
  base: 1,
  dropdown: 1e3,
  sticky: 1100,
  fixed: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700
}, E = {
  // Metadata
  id: "default",
  name: "THE WHEEL Default Theme",
  description: "The default theme for The Wheel",
  version: "1.0.0",
  author: "The Wheel Team",
  isPublic: !0,
  // Core theme properties
  colors: {
    primary: Je,
    secondary: Xe,
    accent: Ur,
    success: Br,
    warning: Yr,
    danger: Vr,
    info: Gr,
    neutral: Jr
  },
  semanticColors: Xr,
  typography: Kr,
  spacing: Zr,
  borders: Qr,
  shadows: et,
  animations: rt,
  breakpoints: tt,
  zIndices: at,
  // Custom settings
  custom: {
    assets: {
      logoUrl: "/logos/wheel_logo_primary.svg"
    }
  }
}, Ot = {
  ...E,
  name: "Platform Hero",
  description: "A bold theme for landing pages and hero sections",
  semanticColors: {
    ...E.semanticColors,
    bgPrimary: "linear-gradient(135deg, #0f0c29 0%, #1e1b4b 25%, #312e81 50%, #d97706 75%, var(--warning) 100%)",
    bgModal: "#1e1b4b",
    textPrimary: "var(--bg-primary)",
    textSecondary: "#e0e0e0",
    textTertiary: "#a0a0a0",
    borderDefault: "#3d3d3d"
  },
  custom: {
    ...E.custom,
    assets: {
      logoUrl: "/logos/wheel_logo_stacked.svg"
    }
  }
}, Pt = {
  ...E,
  name: "Founder Dashboard",
  description: "A dark theme for founder dashboards",
  semanticColors: {
    ...E.semanticColors,
    bgPrimary: "#121212",
    bgSecondary: "#1e1e1e",
    bgTertiary: "#2d2d2d",
    bgCard: "#2d2d2d",
    bgModal: "#1e1e1e",
    textPrimary: "var(--bg-primary)",
    textSecondary: "#e0e0e0",
    textTertiary: "#a0a0a0",
    borderDefault: "#3d3d3d"
  },
  custom: {
    ...E.custom,
    assets: {
      logoUrl: "/logos/wheel_logo_dashboard.svg"
    }
  }
}, jt = {
  ...E,
  name: "VC Portal",
  description: "A professional light theme for VC portals",
  semanticColors: {
    ...E.semanticColors,
    bgPrimary: "var(--bg-primary)",
    bgSecondary: "#f8fafc",
    bgTertiary: "#f1f5f9",
    bgCard: "var(--bg-primary)",
    bgModal: "#ffffff",
    textPrimary: "#1e1b4b",
    textSecondary: "#334155",
    textTertiary: "#64748b",
    borderDefault: "#e2e8f0"
  },
  custom: {
    ...E.custom,
    assets: {
      logoUrl: "/logos/wheel_logo_vc_portfolio.svg"
    }
  }
}, Ht = {
  ...E,
  name: "Journey Energy",
  description: "An energetic theme for journey milestones",
  colors: {
    ...E.colors,
    primary: Xe,
    // Use amber as primary
    secondary: Je
    // Use midnight blue as secondary
  },
  semanticColors: {
    ...E.semanticColors,
    bgPrimary: "linear-gradient(135deg, var(--warning) 0%, #d97706 50%, #b45309 100%)",
    bgModal: "#b45309",
    textPrimary: "var(--bg-primary)",
    textSecondary: "#fef3c7",
    textTertiary: "var(--warning)",
    borderDefault: "#b45309"
  },
  custom: {
    ...E.custom,
    assets: {
      logoUrl: "/logos/wheel_logo_journey_energy.svg"
    }
  }
};
function re(r) {
  "@babel/helpers - typeof";
  return re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, re(r);
}
var nt = /^\s+/, it = /\s+$/;
function f(r, e) {
  if (r = r || "", e = e || {}, r instanceof f)
    return r;
  if (!(this instanceof f))
    return new f(r, e);
  var t = st(r);
  this._originalInput = r, this._r = t.r, this._g = t.g, this._b = t.b, this._a = t.a, this._roundA = Math.round(100 * this._a) / 100, this._format = e.format || t.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = t.ok;
}
f.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var e = this.toRgb();
    return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
  },
  getLuminance: function() {
    var e = this.toRgb(), t, n, i, o, l, c;
    return t = e.r / 255, n = e.g / 255, i = e.b / 255, t <= 0.03928 ? o = t / 12.92 : o = Math.pow((t + 0.055) / 1.055, 2.4), n <= 0.03928 ? l = n / 12.92 : l = Math.pow((n + 0.055) / 1.055, 2.4), i <= 0.03928 ? c = i / 12.92 : c = Math.pow((i + 0.055) / 1.055, 2.4), 0.2126 * o + 0.7152 * l + 0.0722 * c;
  },
  setAlpha: function(e) {
    return this._a = Ke(e), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var e = ze(this._r, this._g, this._b);
    return {
      h: e.h * 360,
      s: e.s,
      v: e.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var e = ze(this._r, this._g, this._b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), i = Math.round(e.v * 100);
    return this._a == 1 ? "hsv(" + t + ", " + n + "%, " + i + "%)" : "hsva(" + t + ", " + n + "%, " + i + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var e = We(this._r, this._g, this._b);
    return {
      h: e.h * 360,
      s: e.s,
      l: e.l,
      a: this._a
    };
  },
  toHslString: function() {
    var e = We(this._r, this._g, this._b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), i = Math.round(e.l * 100);
    return this._a == 1 ? "hsl(" + t + ", " + n + "%, " + i + "%)" : "hsla(" + t + ", " + n + "%, " + i + "%, " + this._roundA + ")";
  },
  toHex: function(e) {
    return Ue(this._r, this._g, this._b, e);
  },
  toHexString: function(e) {
    return "#" + this.toHex(e);
  },
  toHex8: function(e) {
    return lt(this._r, this._g, this._b, this._a, e);
  },
  toHex8String: function(e) {
    return "#" + this.toHex8(e);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(y(this._r, 255) * 100) + "%",
      g: Math.round(y(this._g, 255) * 100) + "%",
      b: Math.round(y(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(y(this._r, 255) * 100) + "%, " + Math.round(y(this._g, 255) * 100) + "%, " + Math.round(y(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(y(this._r, 255) * 100) + "%, " + Math.round(y(this._g, 255) * 100) + "%, " + Math.round(y(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : wt[Ue(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(e) {
    var t = "#" + Be(this._r, this._g, this._b, this._a), n = t, i = this._gradientType ? "GradientType = 1, " : "";
    if (e) {
      var o = f(e);
      n = "#" + Be(o._r, o._g, o._b, o._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + i + "startColorstr=" + t + ",endColorstr=" + n + ")";
  },
  toString: function(e) {
    var t = !!e;
    e = e || this._format;
    var n = !1, i = this._a < 1 && this._a >= 0, o = !t && i && (e === "hex" || e === "hex6" || e === "hex3" || e === "hex4" || e === "hex8" || e === "name");
    return o ? e === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (n = this.toRgbString()), e === "prgb" && (n = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (n = this.toHexString()), e === "hex3" && (n = this.toHexString(!0)), e === "hex4" && (n = this.toHex8String(!0)), e === "hex8" && (n = this.toHex8String()), e === "name" && (n = this.toName()), e === "hsl" && (n = this.toHslString()), e === "hsv" && (n = this.toHsvString()), n || this.toHexString());
  },
  clone: function() {
    return f(this.toString());
  },
  _applyModification: function(e, t) {
    var n = e.apply(null, [this].concat([].slice.call(t)));
    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
  },
  lighten: function() {
    return this._applyModification(gt, arguments);
  },
  brighten: function() {
    return this._applyModification(bt, arguments);
  },
  darken: function() {
    return this._applyModification(pt, arguments);
  },
  desaturate: function() {
    return this._applyModification(ct, arguments);
  },
  saturate: function() {
    return this._applyModification(dt, arguments);
  },
  greyscale: function() {
    return this._applyModification(ht, arguments);
  },
  spin: function() {
    return this._applyModification(mt, arguments);
  },
  _applyCombination: function(e, t) {
    return e.apply(null, [this].concat([].slice.call(t)));
  },
  analogous: function() {
    return this._applyCombination(_t, arguments);
  },
  complement: function() {
    return this._applyCombination(yt, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(xt, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(vt, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Ye, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Ye, [4]);
  }
};
f.fromRatio = function(r, e) {
  if (re(r) == "object") {
    var t = {};
    for (var n in r)
      r.hasOwnProperty(n) && (n === "a" ? t[n] = r[n] : t[n] = G(r[n]));
    r = t;
  }
  return f(r, e);
};
function st(r) {
  var e = {
    r: 0,
    g: 0,
    b: 0
  }, t = 1, n = null, i = null, o = null, l = !1, c = !1;
  return typeof r == "string" && (r = Tt(r)), re(r) == "object" && ($(r.r) && $(r.g) && $(r.b) ? (e = ot(r.r, r.g, r.b), l = !0, c = String(r.r).substr(-1) === "%" ? "prgb" : "rgb") : $(r.h) && $(r.s) && $(r.v) ? (n = G(r.s), i = G(r.v), e = ut(r.h, n, i), l = !0, c = "hsv") : $(r.h) && $(r.s) && $(r.l) && (n = G(r.s), o = G(r.l), e = ft(r.h, n, o), l = !0, c = "hsl"), r.hasOwnProperty("a") && (t = r.a)), t = Ke(t), {
    ok: l,
    format: r.format || c,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: t
  };
}
function ot(r, e, t) {
  return {
    r: y(r, 255) * 255,
    g: y(e, 255) * 255,
    b: y(t, 255) * 255
  };
}
function We(r, e, t) {
  r = y(r, 255), e = y(e, 255), t = y(t, 255);
  var n = Math.max(r, e, t), i = Math.min(r, e, t), o, l, c = (n + i) / 2;
  if (n == i)
    o = l = 0;
  else {
    var h = n - i;
    switch (l = c > 0.5 ? h / (2 - n - i) : h / (n + i), n) {
      case r:
        o = (e - t) / h + (e < t ? 6 : 0);
        break;
      case e:
        o = (t - r) / h + 2;
        break;
      case t:
        o = (r - e) / h + 4;
        break;
    }
    o /= 6;
  }
  return {
    h: o,
    s: l,
    l: c
  };
}
function ft(r, e, t) {
  var n, i, o;
  r = y(r, 360), e = y(e, 100), t = y(t, 100);
  function l(x, v, _) {
    return _ < 0 && (_ += 1), _ > 1 && (_ -= 1), _ < 1 / 6 ? x + (v - x) * 6 * _ : _ < 1 / 2 ? v : _ < 2 / 3 ? x + (v - x) * (2 / 3 - _) * 6 : x;
  }
  if (e === 0)
    n = i = o = t;
  else {
    var c = t < 0.5 ? t * (1 + e) : t + e - t * e, h = 2 * t - c;
    n = l(h, c, r + 1 / 3), i = l(h, c, r), o = l(h, c, r - 1 / 3);
  }
  return {
    r: n * 255,
    g: i * 255,
    b: o * 255
  };
}
function ze(r, e, t) {
  r = y(r, 255), e = y(e, 255), t = y(t, 255);
  var n = Math.max(r, e, t), i = Math.min(r, e, t), o, l, c = n, h = n - i;
  if (l = n === 0 ? 0 : h / n, n == i)
    o = 0;
  else {
    switch (n) {
      case r:
        o = (e - t) / h + (e < t ? 6 : 0);
        break;
      case e:
        o = (t - r) / h + 2;
        break;
      case t:
        o = (r - e) / h + 4;
        break;
    }
    o /= 6;
  }
  return {
    h: o,
    s: l,
    v: c
  };
}
function ut(r, e, t) {
  r = y(r, 360) * 6, e = y(e, 100), t = y(t, 100);
  var n = Math.floor(r), i = r - n, o = t * (1 - e), l = t * (1 - i * e), c = t * (1 - (1 - i) * e), h = n % 6, x = [t, l, o, o, c, t][h], v = [c, t, t, l, o, o][h], _ = [o, o, c, t, t, l][h];
  return {
    r: x * 255,
    g: v * 255,
    b: _ * 255
  };
}
function Ue(r, e, t, n) {
  var i = [P(Math.round(r).toString(16)), P(Math.round(e).toString(16)), P(Math.round(t).toString(16))];
  return n && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function lt(r, e, t, n, i) {
  var o = [P(Math.round(r).toString(16)), P(Math.round(e).toString(16)), P(Math.round(t).toString(16)), P(Ze(n))];
  return i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Be(r, e, t, n) {
  var i = [P(Ze(n)), P(Math.round(r).toString(16)), P(Math.round(e).toString(16)), P(Math.round(t).toString(16))];
  return i.join("");
}
f.equals = function(r, e) {
  return !r || !e ? !1 : f(r).toRgbString() == f(e).toRgbString();
};
f.random = function() {
  return f.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function ct(r, e) {
  e = e === 0 ? 0 : e || 10;
  var t = f(r).toHsl();
  return t.s -= e / 100, t.s = te(t.s), f(t);
}
function dt(r, e) {
  e = e === 0 ? 0 : e || 10;
  var t = f(r).toHsl();
  return t.s += e / 100, t.s = te(t.s), f(t);
}
function ht(r) {
  return f(r).desaturate(100);
}
function gt(r, e) {
  e = e === 0 ? 0 : e || 10;
  var t = f(r).toHsl();
  return t.l += e / 100, t.l = te(t.l), f(t);
}
function bt(r, e) {
  e = e === 0 ? 0 : e || 10;
  var t = f(r).toRgb();
  return t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(e / 100)))), t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(e / 100)))), t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(e / 100)))), f(t);
}
function pt(r, e) {
  e = e === 0 ? 0 : e || 10;
  var t = f(r).toHsl();
  return t.l -= e / 100, t.l = te(t.l), f(t);
}
function mt(r, e) {
  var t = f(r).toHsl(), n = (t.h + e) % 360;
  return t.h = n < 0 ? 360 + n : n, f(t);
}
function yt(r) {
  var e = f(r).toHsl();
  return e.h = (e.h + 180) % 360, f(e);
}
function Ye(r, e) {
  if (isNaN(e) || e <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var t = f(r).toHsl(), n = [f(r)], i = 360 / e, o = 1; o < e; o++)
    n.push(f({
      h: (t.h + o * i) % 360,
      s: t.s,
      l: t.l
    }));
  return n;
}
function vt(r) {
  var e = f(r).toHsl(), t = e.h;
  return [f(r), f({
    h: (t + 72) % 360,
    s: e.s,
    l: e.l
  }), f({
    h: (t + 216) % 360,
    s: e.s,
    l: e.l
  })];
}
function _t(r, e, t) {
  e = e || 6, t = t || 30;
  var n = f(r).toHsl(), i = 360 / t, o = [f(r)];
  for (n.h = (n.h - (i * e >> 1) + 720) % 360; --e; )
    n.h = (n.h + i) % 360, o.push(f(n));
  return o;
}
function xt(r, e) {
  e = e || 6;
  for (var t = f(r).toHsv(), n = t.h, i = t.s, o = t.v, l = [], c = 1 / e; e--; )
    l.push(f({
      h: n,
      s: i,
      v: o
    })), o = (o + c) % 1;
  return l;
}
f.mix = function(r, e, t) {
  t = t === 0 ? 0 : t || 50;
  var n = f(r).toRgb(), i = f(e).toRgb(), o = t / 100, l = {
    r: (i.r - n.r) * o + n.r,
    g: (i.g - n.g) * o + n.g,
    b: (i.b - n.b) * o + n.b,
    a: (i.a - n.a) * o + n.a
  };
  return f(l);
};
f.readability = function(r, e) {
  var t = f(r), n = f(e);
  return (Math.max(t.getLuminance(), n.getLuminance()) + 0.05) / (Math.min(t.getLuminance(), n.getLuminance()) + 0.05);
};
f.isReadable = function(r, e, t) {
  var n = f.readability(r, e), i, o;
  switch (o = !1, i = kt(t), i.level + i.size) {
    case "AAsmall":
    case "AAAlarge":
      o = n >= 4.5;
      break;
    case "AAlarge":
      o = n >= 3;
      break;
    case "AAAsmall":
      o = n >= 7;
      break;
  }
  return o;
};
f.mostReadable = function(r, e, t) {
  var n = null, i = 0, o, l, c, h;
  t = t || {}, l = t.includeFallbackColors, c = t.level, h = t.size;
  for (var x = 0; x < e.length; x++)
    o = f.readability(r, e[x]), o > i && (i = o, n = f(e[x]));
  return f.isReadable(r, n, {
    level: c,
    size: h
  }) || !l ? n : (t.includeFallbackColors = !1, f.mostReadable(r, ["#fff", "#000"], t));
};
var he = f.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, wt = f.hexNames = St(he);
function St(r) {
  var e = {};
  for (var t in r)
    r.hasOwnProperty(t) && (e[r[t]] = t);
  return e;
}
function Ke(r) {
  return r = parseFloat(r), (isNaN(r) || r < 0 || r > 1) && (r = 1), r;
}
function y(r, e) {
  Et(r) && (r = "100%");
  var t = Rt(r);
  return r = Math.min(e, Math.max(0, parseFloat(r))), t && (r = parseInt(r * e, 10) / 100), Math.abs(r - e) < 1e-6 ? 1 : r % e / parseFloat(e);
}
function te(r) {
  return Math.min(1, Math.max(0, r));
}
function M(r) {
  return parseInt(r, 16);
}
function Et(r) {
  return typeof r == "string" && r.indexOf(".") != -1 && parseFloat(r) === 1;
}
function Rt(r) {
  return typeof r == "string" && r.indexOf("%") != -1;
}
function P(r) {
  return r.length == 1 ? "0" + r : "" + r;
}
function G(r) {
  return r <= 1 && (r = r * 100 + "%"), r;
}
function Ze(r) {
  return Math.round(parseFloat(r) * 255).toString(16);
}
function Ve(r) {
  return M(r) / 255;
}
var O = function() {
  var r = "[-\\+]?\\d+%?", e = "[-\\+]?\\d*\\.\\d+%?", t = "(?:" + e + ")|(?:" + r + ")", n = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?", i = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(t),
    rgb: new RegExp("rgb" + n),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + n),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + n),
    hsva: new RegExp("hsva" + i),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function $(r) {
  return !!O.CSS_UNIT.exec(r);
}
function Tt(r) {
  r = r.replace(nt, "").replace(it, "").toLowerCase();
  var e = !1;
  if (he[r])
    r = he[r], e = !0;
  else if (r == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var t;
  return (t = O.rgb.exec(r)) ? {
    r: t[1],
    g: t[2],
    b: t[3]
  } : (t = O.rgba.exec(r)) ? {
    r: t[1],
    g: t[2],
    b: t[3],
    a: t[4]
  } : (t = O.hsl.exec(r)) ? {
    h: t[1],
    s: t[2],
    l: t[3]
  } : (t = O.hsla.exec(r)) ? {
    h: t[1],
    s: t[2],
    l: t[3],
    a: t[4]
  } : (t = O.hsv.exec(r)) ? {
    h: t[1],
    s: t[2],
    v: t[3]
  } : (t = O.hsva.exec(r)) ? {
    h: t[1],
    s: t[2],
    v: t[3],
    a: t[4]
  } : (t = O.hex8.exec(r)) ? {
    r: M(t[1]),
    g: M(t[2]),
    b: M(t[3]),
    a: Ve(t[4]),
    format: e ? "name" : "hex8"
  } : (t = O.hex6.exec(r)) ? {
    r: M(t[1]),
    g: M(t[2]),
    b: M(t[3]),
    format: e ? "name" : "hex"
  } : (t = O.hex4.exec(r)) ? {
    r: M(t[1] + "" + t[1]),
    g: M(t[2] + "" + t[2]),
    b: M(t[3] + "" + t[3]),
    a: Ve(t[4] + "" + t[4]),
    format: e ? "name" : "hex8"
  } : (t = O.hex3.exec(r)) ? {
    r: M(t[1] + "" + t[1]),
    g: M(t[2] + "" + t[2]),
    b: M(t[3] + "" + t[3]),
    format: e ? "name" : "hex"
  } : !1;
}
function kt(r) {
  var e, t;
  return r = r || {
    level: "AA",
    size: "small"
  }, e = (r.level || "AA").toUpperCase(), t = (r.size || "small").toLowerCase(), e !== "AA" && e !== "AAA" && (e = "AA"), t !== "small" && t !== "large" && (t = "small"), {
    level: e,
    size: t
  };
}
function de(r, e) {
  var n, i, o;
  const t = JSON.parse(JSON.stringify(r));
  if (e.id && (t.id = e.id), e.name && (t.name = e.name), e.description && (t.description = e.description), e.version && (t.version = e.version), e.author && (t.author = e.author), e.isPublic !== void 0 && (t.isPublic = e.isPublic), e.colors && Object.keys(e.colors).forEach((l) => {
    var h;
    const c = (h = e.colors) == null ? void 0 : h[l];
    c && (t.colors[l] ? t.colors[l] = {
      ...t.colors[l],
      ...c
    } : t.colors[l] = { ...c });
  }), e.semanticColors && (t.semanticColors = { ...t.semanticColors, ...e.semanticColors }), e.typography && (t.typography = {
    fonts: { ...t.typography.fonts, ...e.typography.fonts },
    fontSizes: { ...t.typography.fontSizes, ...e.typography.fontSizes },
    fontWeights: { ...t.typography.fontWeights, ...e.typography.fontWeights },
    lineHeights: { ...t.typography.lineHeights, ...e.typography.lineHeights },
    letterSpacings: { ...t.typography.letterSpacings, ...e.typography.letterSpacings }
  }), e.spacing && (t.spacing = { ...t.spacing, ...e.spacing }), e.borders && (t.borders = {
    width: { ...t.borders.width, ...e.borders.width },
    radius: { ...t.borders.radius, ...e.borders.radius },
    styles: e.borders.styles ? {
      ...t.borders.styles || {},
      ...e.borders.styles,
      // Ensure required properties are present
      solid: e.borders.styles.solid || ((n = t.borders.styles) == null ? void 0 : n.solid) || "solid"
    } : t.borders.styles || { solid: "solid" }
  }), e.shadows && (t.shadows = { ...t.shadows, ...e.shadows }), e.animations && t.animations) {
    const l = e.animations.easings ? {
      ...t.animations.easings,
      ...e.animations.easings,
      // Ensure required properties are present with non-undefined values
      ease: e.animations.easings.ease || t.animations.easings.ease || "ease"
    } : t.animations.easings, c = e.animations.transitions ? {
      ...t.animations.transitions,
      ...e.animations.transitions,
      // Ensure required properties are present with non-undefined values
      default: ((i = e.animations.transitions) == null ? void 0 : i.default) || ((o = t.animations.transitions) == null ? void 0 : o.default) || "all 0.3s ease"
    } : t.animations.transitions;
    t.animations = {
      durations: { ...t.animations.durations, ...e.animations.durations },
      easings: l,
      transitions: c,
      keyframes: { ...t.animations.keyframes, ...e.animations.keyframes }
    };
  } else if (e.animations) {
    const l = {
      ease: "ease",
      linear: "linear",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out"
    }, c = {
      default: "all 0.3s ease"
    };
    t.animations = {
      ...e.animations,
      easings: e.animations.easings ? { ...l, ...e.animations.easings } : l,
      transitions: e.animations.transitions ? { ...c, ...e.animations.transitions } : c
    };
  }
  return e.breakpoints && (t.breakpoints = { ...t.breakpoints, ...e.breakpoints }), e.zIndices && (t.zIndices = { ...t.zIndices, ...e.zIndices }), e.custom && (t.custom || (t.custom = {}), e.custom.assets && (t.custom.assets || (t.custom.assets = {}), t.custom.assets = { ...t.custom.assets, ...e.custom.assets }), e.custom.components && (t.custom.components || (t.custom.components = {}), t.custom.components = { ...t.custom.components, ...e.custom.components }), e.custom.css && (t.custom.css = e.custom.css), e.custom.javascript && (t.custom.javascript = e.custom.javascript)), t;
}
function $t(r) {
  if (!r) throw new Error("Theme is required");
  if (typeof r != "object") throw new Error("Theme must be an object");
  if (!r.name) throw new Error("Theme name is required");
  if (!r.colors) throw new Error("Theme colors are required");
  if (!r.semanticColors) throw new Error("Theme semantic colors are required");
  if (!r.typography) throw new Error("Theme typography is required");
  if (!r.borders) throw new Error("Theme borders are required");
  if (!r.colors.primary) throw new Error("Primary color is required");
  if (!r.colors.secondary) throw new Error("Secondary color is required");
  if (!r.colors.accent) throw new Error("Accent color is required");
  if (!r.semanticColors.bgPrimary) throw new Error("Background primary color is required");
  if (!r.semanticColors.textPrimary) throw new Error("Text primary color is required");
  if (!r.semanticColors.bgCard) throw new Error("Card background color is required");
  if (!r.semanticColors.borderDefault) throw new Error("Border default color is required");
  if (!r.typography.fonts || !r.typography.fonts.sans)
    throw new Error("Sans font is required");
  if (!r.typography.fontSizes || !r.typography.fontSizes.base)
    throw new Error("Base font size is required");
  if (!r.typography.fontWeights || r.typography.fontWeights.normal === void 0 || r.typography.fontWeights.bold === void 0)
    throw new Error("Normal and bold font weights are required");
  if (!r.typography.lineHeights || !r.typography.lineHeights.normal)
    throw new Error("Normal line height is required");
  if (!r.typography.letterSpacings || !r.typography.letterSpacings.normal)
    throw new Error("Normal letter spacing is required");
  if (!r.borders.width || !r.borders.width.base)
    throw new Error("Base border width is required");
  if (!r.borders.radius || !r.borders.radius.base)
    throw new Error("Base border radius is required");
  return r;
}
function Ft(r) {
  const e = f(r);
  return {
    50: f.mix(e, f("var(--bg-primary)"), 90).toHexString(),
    100: f.mix(e, f("var(--bg-primary)"), 80).toHexString(),
    200: f.mix(e, f("var(--bg-primary)"), 60).toHexString(),
    300: f.mix(e, f("var(--bg-primary)"), 40).toHexString(),
    400: f.mix(e, f("var(--bg-primary)"), 20).toHexString(),
    // 500 is the base color, provided by the caller
    600: f.mix(e, f("var(--text-primary)"), 10).toHexString(),
    700: f.mix(e, f("var(--text-primary)"), 20).toHexString(),
    800: f.mix(e, f("var(--text-primary)"), 30).toHexString(),
    900: f.mix(e, f("var(--text-primary)"), 40).toHexString()
  };
}
function Ct(r) {
  var t;
  let e = `:root {
`;
  return Object.entries(r.colors).forEach(([n, i]) => {
    Object.entries(i).forEach(([o, l]) => {
      e += `  --color-${n}-${o}: ${l};
`;
    });
  }), Object.entries(r.semanticColors).forEach(([n, i]) => {
    i && (e += `  --${C(n)}: ${i};
`);
  }), Object.entries(r.typography.fonts).forEach(([n, i]) => {
    i && (e += `  --font-${n}: ${i};
`);
  }), Object.entries(r.typography.fontSizes).forEach(([n, i]) => {
    i && (e += `  --font-size-${C(n)}: ${i};
`);
  }), Object.entries(r.typography.fontWeights).forEach(([n, i]) => {
    i && (e += `  --font-weight-${C(n)}: ${i};
`);
  }), Object.entries(r.typography.lineHeights).forEach(([n, i]) => {
    i && (e += `  --line-height-${C(n)}: ${i};
`);
  }), Object.entries(r.typography.letterSpacings).forEach(([n, i]) => {
    i && (e += `  --letter-spacing-${C(n)}: ${i};
`);
  }), r.spacing && Object.entries(r.spacing).forEach(([n, i]) => {
    i && (e += `  --spacing-${n}: ${i};
`);
  }), Object.entries(r.borders.width).forEach(([n, i]) => {
    i && (e += `  --border-width-${C(n)}: ${i};
`);
  }), Object.entries(r.borders.radius).forEach(([n, i]) => {
    i && (e += `  --border-radius-${C(n)}: ${i};
`);
  }), r.borders.styles && Object.entries(r.borders.styles).forEach(([n, i]) => {
    i && (e += `  --border-style-${C(n)}: ${i};
`);
  }), r.shadows && Object.entries(r.shadows).forEach(([n, i]) => {
    i && (e += `  --shadow-${C(n)}: ${i};
`);
  }), r.animations && (Object.entries(r.animations.durations).forEach(([n, i]) => {
    i && (e += `  --duration-${C(n)}: ${i};
`);
  }), Object.entries(r.animations.easings).forEach(([n, i]) => {
    i && (e += `  --easing-${C(n)}: ${i};
`);
  }), r.animations.transitions && Object.entries(r.animations.transitions).forEach(([n, i]) => {
    i && (e += `  --transition-${C(n)}: ${i};
`);
  })), r.zIndices && Object.entries(r.zIndices).forEach(([n, i]) => {
    i !== void 0 && (e += `  --z-index-${C(n)}: ${i};
`);
  }), r.breakpoints && Object.entries(r.breakpoints).forEach(([n, i]) => {
    i && (e += `  --breakpoint-${C(n)}: ${i};
`);
  }), (t = r.custom) != null && t.css && (e += `
  /* Custom CSS */
${r.custom.css}
`), e += `}
`, e;
}
function Mt(r, e) {
  var n, i, o;
  const t = { ...r };
  return e.mode === "dark" && ((n = r.custom) != null && n.darkMode) ? de(t, r.custom.darkMode) : e.mode === "high-contrast" && ((i = r.custom) != null && i.highContrast) ? de(t, r.custom.highContrast) : e.customMode && ((o = r.custom) != null && o[e.customMode]) ? de(t, r.custom[e.customMode]) : t;
}
function C(r) {
  return r.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
}
function Qe(r) {
  return {
    primaryColor: r.colors.primary[500],
    secondaryColor: r.colors.secondary[500],
    backgroundColor: r.semanticColors.bgPrimary,
    textColor: r.semanticColors.textPrimary
  };
}
const er = Ir({
  theme: E,
  setTheme: () => {
  },
  mode: "light",
  setMode: () => {
  },
  legacyTheme: Qe(E),
  applyTheme: () => {
  },
  resetTheme: () => {
  },
  isLoading: !1,
  error: null
}), It = () => Dr(er), Dt = ({ children: r }) => {
  const [e, t] = Q(E), [n, i] = Q("light"), [
    o
    /* setIsLoading */
  ] = Q(!1), [l, c] = Q(null), h = Mt(e, n), x = Qe(h), v = ce(() => {
    const H = Ct(h), q = document.getElementById("wheel-theme-styles");
    if (q)
      q.innerHTML = H;
    else {
      const z = document.createElement("style");
      z.id = "wheel-theme-styles", z.innerHTML = H, document.head.appendChild(z);
    }
  }, [h]), _ = ce((H) => {
    try {
      t(H);
    } catch {
      c("Invalid theme format");
    }
  }, []), j = ce(() => {
    t(E), i("light");
  }, []);
  return qr(() => {
    v();
  }, [v]), /* @__PURE__ */ zr.jsx(
    er.Provider,
    {
      value: {
        theme: e,
        setTheme: _,
        mode: n,
        setMode: i,
        legacyTheme: x,
        applyTheme: v,
        resetTheme: j,
        isLoading: o,
        error: l
      },
      children: r
    }
  );
};
export {
  Dt as ThemeProvider,
  E as defaultTheme,
  Pt as founderDashboardTheme,
  Ft as generateColorScale,
  Mt as getEffectiveTheme,
  Ht as journeyEnergyTheme,
  de as mergeThemes,
  Ot as platformHeroTheme,
  Ct as themeToCSS,
  It as useTheme,
  $t as validateTheme,
  jt as vcPortalTheme
};

import ze, { forwardRef as Ar, createElement as Yt, useState as I, useRef as Ae, useEffect as Ge, useCallback as D, useMemo as de } from "react";
import { cn as Z } from "@wheel/shared";
import { Button as ee, Logo as zr, Badge as Ve, Avatar as Ye, Icon as xe, Spinner as Ke, EmptyState as We, Input as ar, Checkbox as Wt } from "@wheel/ui";
var ft = { exports: {} }, dt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function Dr() {
  if (qt) return dt;
  qt = 1;
  var t = ze, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(d, i, h) {
    var x, m = {}, y = null, T = null;
    h !== void 0 && (y = "" + h), i.key !== void 0 && (y = "" + i.key), i.ref !== void 0 && (T = i.ref);
    for (x in i) n.call(i, x) && !a.hasOwnProperty(x) && (m[x] = i[x]);
    if (d && d.defaultProps) for (x in i = d.defaultProps, i) m[x] === void 0 && (m[x] = i[x]);
    return { $$typeof: r, type: d, key: y, ref: T, props: m, _owner: l.current };
  }
  return dt.Fragment = s, dt.jsx = o, dt.jsxs = o, dt;
}
var ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function _r() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ze, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), d = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), E = Symbol.iterator, S = "@@iterator";
    function w(c) {
      if (c === null || typeof c != "object")
        return null;
      var F = E && c[E] || c[S];
      return typeof F == "function" ? F : null;
    }
    var z = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(c) {
      {
        for (var F = arguments.length, G = new Array(F > 1 ? F - 1 : 0), te = 1; te < F; te++)
          G[te - 1] = arguments[te];
        C("error", c, G);
      }
    }
    function C(c, F, G) {
      {
        var te = z.ReactDebugCurrentFrame, ie = te.getStackAddendum();
        ie !== "" && (F += "%s", G = G.concat([ie]));
        var ce = G.map(function(oe) {
          return String(oe);
        });
        ce.unshift("Warning: " + F), Function.prototype.apply.call(console[c], console, ce);
      }
    }
    var f = !1, u = !1, j = !1, P = !1, k = !1, g;
    g = Symbol.for("react.module.reference");
    function M(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === a || k || c === l || c === h || c === x || P || c === T || f || u || j || typeof c == "object" && c !== null && (c.$$typeof === y || c.$$typeof === m || c.$$typeof === o || c.$$typeof === d || c.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === g || c.getModuleId !== void 0));
    }
    function B(c, F, G) {
      var te = c.displayName;
      if (te)
        return te;
      var ie = F.displayName || F.name || "";
      return ie !== "" ? G + "(" + ie + ")" : G;
    }
    function W(c) {
      return c.displayName || "Context";
    }
    function N(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case n:
          return "Fragment";
        case s:
          return "Portal";
        case a:
          return "Profiler";
        case l:
          return "StrictMode";
        case h:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case d:
            var F = c;
            return W(F) + ".Consumer";
          case o:
            var G = c;
            return W(G._context) + ".Provider";
          case i:
            return B(c, c.render, "ForwardRef");
          case m:
            var te = c.displayName || null;
            return te !== null ? te : N(c.type) || "Memo";
          case y: {
            var ie = c, ce = ie._payload, oe = ie._init;
            try {
              return N(oe(ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, p = 0, v, A, b, _, H, $, J;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function le() {
      {
        if (p === 0) {
          v = console.log, A = console.info, b = console.warn, _ = console.error, H = console.group, $ = console.groupCollapsed, J = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        p++;
      }
    }
    function he() {
      {
        if (p--, p === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, c, {
              value: v
            }),
            info: L({}, c, {
              value: A
            }),
            warn: L({}, c, {
              value: b
            }),
            error: L({}, c, {
              value: _
            }),
            group: L({}, c, {
              value: H
            }),
            groupCollapsed: L({}, c, {
              value: $
            }),
            groupEnd: L({}, c, {
              value: J
            })
          });
        }
        p < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = z.ReactCurrentDispatcher, re;
    function fe(c, F, G) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (ie) {
            var te = ie.stack.trim().match(/\n( *(at )?)/);
            re = te && te[1] || "";
          }
        return `
` + re + c;
      }
    }
    var ge = !1, je;
    {
      var U = typeof WeakMap == "function" ? WeakMap : Map;
      je = new U();
    }
    function q(c, F) {
      if (!c || ge)
        return "";
      {
        var G = je.get(c);
        if (G !== void 0)
          return G;
      }
      var te;
      ge = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = Ee.current, Ee.current = null, le();
      try {
        if (F) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (Te) {
              te = Te;
            }
            Reflect.construct(c, [], oe);
          } else {
            try {
              oe.call();
            } catch (Te) {
              te = Te;
            }
            c.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            te = Te;
          }
          c();
        }
      } catch (Te) {
        if (Te && te && typeof Te.stack == "string") {
          for (var ne = Te.stack.split(`
`), Se = te.stack.split(`
`), pe = ne.length - 1, ye = Se.length - 1; pe >= 1 && ye >= 0 && ne[pe] !== Se[ye]; )
            ye--;
          for (; pe >= 1 && ye >= 0; pe--, ye--)
            if (ne[pe] !== Se[ye]) {
              if (pe !== 1 || ye !== 1)
                do
                  if (pe--, ye--, ye < 0 || ne[pe] !== Se[ye]) {
                    var Fe = `
` + ne[pe].replace(" at new ", " at ");
                    return c.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", c.displayName)), typeof c == "function" && je.set(c, Fe), Fe;
                  }
                while (pe >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        ge = !1, Ee.current = ce, he(), Error.prepareStackTrace = ie;
      }
      var Ze = c ? c.displayName || c.name : "", Ue = Ze ? fe(Ze) : "";
      return typeof c == "function" && je.set(c, Ue), Ue;
    }
    function we(c, F, G) {
      return q(c, !1);
    }
    function Pe(c) {
      var F = c.prototype;
      return !!(F && F.isReactComponent);
    }
    function De(c, F, G) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return q(c, Pe(c));
      if (typeof c == "string")
        return fe(c);
      switch (c) {
        case h:
          return fe("Suspense");
        case x:
          return fe("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case i:
            return we(c.render);
          case m:
            return De(c.type, F, G);
          case y: {
            var te = c, ie = te._payload, ce = te._init;
            try {
              return De(ce(ie), F, G);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, Oe = {}, qe = z.ReactDebugCurrentFrame;
    function Ie(c) {
      if (c) {
        var F = c._owner, G = De(c.type, c._source, F ? F.type : null);
        qe.setExtraStackFrame(G);
      } else
        qe.setExtraStackFrame(null);
    }
    function st(c, F, G, te, ie) {
      {
        var ce = Function.call.bind(ue);
        for (var oe in c)
          if (ce(c, oe)) {
            var ne = void 0;
            try {
              if (typeof c[oe] != "function") {
                var Se = Error((te || "React class") + ": " + G + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Se.name = "Invariant Violation", Se;
              }
              ne = c[oe](F, oe, te, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pe) {
              ne = pe;
            }
            ne && !(ne instanceof Error) && (Ie(ie), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", G, oe, typeof ne), Ie(null)), ne instanceof Error && !(ne.message in Oe) && (Oe[ne.message] = !0, Ie(ie), R("Failed %s type: %s", G, ne.message), Ie(null));
          }
      }
    }
    var at = Array.isArray;
    function Re(c) {
      return at(c);
    }
    function nt(c) {
      {
        var F = typeof Symbol == "function" && Symbol.toStringTag, G = F && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return G;
      }
    }
    function lt(c) {
      try {
        return He(c), !1;
      } catch {
        return !0;
      }
    }
    function He(c) {
      return "" + c;
    }
    function ot(c) {
      if (lt(c))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nt(c)), He(c);
    }
    var Je = z.ReactCurrentOwner, O = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ae, me;
    function Ne(c) {
      if (ue.call(c, "ref")) {
        var F = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function V(c) {
      if (ue.call(c, "key")) {
        var F = Object.getOwnPropertyDescriptor(c, "key").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function Q(c, F) {
      typeof c.ref == "string" && Je.current;
    }
    function be(c, F) {
      {
        var G = function() {
          ae || (ae = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        G.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function ke(c, F) {
      {
        var G = function() {
          me || (me = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        G.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var _e = function(c, F, G, te, ie, ce, oe) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: c,
        key: F,
        ref: G,
        props: oe,
        // Record the component responsible for creating this element.
        _owner: ce
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function it(c, F, G, te, ie) {
      {
        var ce, oe = {}, ne = null, Se = null;
        G !== void 0 && (ot(G), ne = "" + G), V(F) && (ot(F.key), ne = "" + F.key), Ne(F) && (Se = F.ref, Q(F, ie));
        for (ce in F)
          ue.call(F, ce) && !O.hasOwnProperty(ce) && (oe[ce] = F[ce]);
        if (c && c.defaultProps) {
          var pe = c.defaultProps;
          for (ce in pe)
            oe[ce] === void 0 && (oe[ce] = pe[ce]);
        }
        if (ne || Se) {
          var ye = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          ne && be(oe, ye), Se && ke(oe, ye);
        }
        return _e(c, ne, Se, ie, te, Je.current, oe);
      }
    }
    var ct = z.ReactCurrentOwner, Ot = z.ReactDebugCurrentFrame;
    function Qe(c) {
      if (c) {
        var F = c._owner, G = De(c.type, c._source, F ? F.type : null);
        Ot.setExtraStackFrame(G);
      } else
        Ot.setExtraStackFrame(null);
    }
    var vt;
    vt = !1;
    function jt(c) {
      return typeof c == "object" && c !== null && c.$$typeof === r;
    }
    function Lt() {
      {
        if (ct.current) {
          var c = N(ct.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Nr(c) {
      return "";
    }
    var It = {};
    function kr(c) {
      {
        var F = Lt();
        if (!F) {
          var G = typeof c == "string" ? c : c.displayName || c.name;
          G && (F = `

Check the top-level render call using <` + G + ">.");
        }
        return F;
      }
    }
    function Bt(c, F) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var G = kr(F);
        if (It[G])
          return;
        It[G] = !0;
        var te = "";
        c && c._owner && c._owner !== ct.current && (te = " It was passed a child from " + N(c._owner.type) + "."), Qe(c), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, te), Qe(null);
      }
    }
    function Vt(c, F) {
      {
        if (typeof c != "object")
          return;
        if (Re(c))
          for (var G = 0; G < c.length; G++) {
            var te = c[G];
            jt(te) && Bt(te, F);
          }
        else if (jt(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var ie = w(c);
          if (typeof ie == "function" && ie !== c.entries)
            for (var ce = ie.call(c), oe; !(oe = ce.next()).done; )
              jt(oe.value) && Bt(oe.value, F);
        }
      }
    }
    function Cr(c) {
      {
        var F = c.type;
        if (F == null || typeof F == "string")
          return;
        var G;
        if (typeof F == "function")
          G = F.propTypes;
        else if (typeof F == "object" && (F.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        F.$$typeof === m))
          G = F.propTypes;
        else
          return;
        if (G) {
          var te = N(F);
          st(G, c.props, "prop", te, c);
        } else if (F.PropTypes !== void 0 && !vt) {
          vt = !0;
          var ie = N(F);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sr(c) {
      {
        for (var F = Object.keys(c.props), G = 0; G < F.length; G++) {
          var te = F[G];
          if (te !== "children" && te !== "key") {
            Qe(c), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), Qe(null);
            break;
          }
        }
        c.ref !== null && (Qe(c), R("Invalid attribute `ref` supplied to `React.Fragment`."), Qe(null));
      }
    }
    var Gt = {};
    function Kt(c, F, G, te, ie, ce) {
      {
        var oe = M(c);
        if (!oe) {
          var ne = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = Nr();
          Se ? ne += Se : ne += Lt();
          var pe;
          c === null ? pe = "null" : Re(c) ? pe = "array" : c !== void 0 && c.$$typeof === r ? (pe = "<" + (N(c.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof c, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, ne);
        }
        var ye = it(c, F, G, ie, ce);
        if (ye == null)
          return ye;
        if (oe) {
          var Fe = F.children;
          if (Fe !== void 0)
            if (te)
              if (Re(Fe)) {
                for (var Ze = 0; Ze < Fe.length; Ze++)
                  Vt(Fe[Ze], c);
                Object.freeze && Object.freeze(Fe);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vt(Fe, c);
        }
        if (ue.call(F, "key")) {
          var Ue = N(c), Te = Object.keys(F).filter(function(Pr) {
            return Pr !== "key";
          }), wt = Te.length > 0 ? "{key: someKey, " + Te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Gt[Ue + wt]) {
            var $r = Te.length > 0 ? "{" + Te.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wt, Ue, $r, Ue), Gt[Ue + wt] = !0;
          }
        }
        return c === n ? Sr(ye) : Cr(ye), ye;
      }
    }
    function Er(c, F, G) {
      return Kt(c, F, G, !0);
    }
    function Tr(c, F, G) {
      return Kt(c, F, G, !1);
    }
    var Rr = Tr, Fr = Er;
    ut.Fragment = n, ut.jsx = Rr, ut.jsxs = Fr;
  }()), ut;
}
var Jt;
function Mr() {
  return Jt || (Jt = 1, process.env.NODE_ENV === "production" ? ft.exports = Dr() : ft.exports = _r()), ft.exports;
}
var e = Mr();
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Or = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), $e = (t, r) => {
  const s = Ar(
    ({
      color: n = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: d = "",
      children: i,
      ...h
    }, x) => Yt(
      "svg",
      {
        ref: x,
        ...Or,
        width: l,
        height: l,
        stroke: n,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Lr(t)}`, d].join(" "),
        ...h
      },
      [
        ...r.map(([m, y]) => Yt(m, y)),
        ...Array.isArray(i) ? i : [i]
      ]
    )
  );
  return s.displayName = `${t}`, s;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = $e("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = $e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = $e("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = $e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = $e("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = $e("Home", [
  ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }],
  ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = $e("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = $e("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = $e("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = $e("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = $e("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = $e("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), pa = ({
  context: t = "neutral",
  workspaces: r = [],
  currentWorkspace: s,
  onWorkspaceChange: n,
  user: l,
  notifications: a = [],
  onNotificationClick: o,
  primaryActions: d = [],
  secondaryActions: i = [],
  responsive: h = !0,
  onMobileMenuClick: x,
  onSearch: m,
  showSearch: y = !0,
  onSignOut: T,
  className: E
}) => {
  const [S, w] = I(!1), [z, R] = I(!1), [C, f] = I(""), u = {
    consultant: "bg-blue-50 border-blue-200",
    client: "bg-green-50 border-green-200",
    admin: "bg-gray-50 border-gray-200",
    expert: "bg-purple-50 border-purple-200",
    "tool-creator": "bg-orange-50 border-orange-200",
    founder: "bg-amber-50 border-amber-200",
    neutral: "bg-white border-gray-200"
  }, j = a.filter((g) => !g.read).length, P = (g) => {
    g.preventDefault(), m && C.trim() && m(C.trim());
  }, k = (g) => {
    o && o(g), R(!1);
  };
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: Z(
        "border-b shadow-sm transition-colors duration-200",
        u[t],
        E
      ),
      role: "banner",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
              h && x && /* @__PURE__ */ e.jsx(
                ee,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: x,
                  className: "lg:hidden",
                  "aria-label": "Open mobile menu",
                  children: /* @__PURE__ */ e.jsx(Wr, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                zr,
                {
                  variant: "full",
                  size: "sm",
                  className: "transition-transform hover:scale-105"
                }
              ),
              r.length > 0 && s && n && /* @__PURE__ */ e.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ e.jsx("div", { className: "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg", children: s.name }) })
            ] }),
            y && m && /* @__PURE__ */ e.jsx("div", { className: "hidden lg:flex flex-1 max-w-md mx-8", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: P, className: "relative w-full", children: [
              /* @__PURE__ */ e.jsx(qr, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: C,
                  onChange: (g) => f(g.target.value),
                  className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                  "aria-label": "Search"
                }
              )
            ] }) }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              d.map((g) => /* @__PURE__ */ e.jsxs(
                ee,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: g.onClick,
                  disabled: g.disabled,
                  className: "hidden md:flex",
                  "aria-label": g.label,
                  children: [
                    g.icon && /* @__PURE__ */ e.jsx(g.icon, { className: "w-4 h-4" }),
                    /* @__PURE__ */ e.jsx("span", { className: "ml-2", children: g.label }),
                    g.badge && g.badge > 0 && /* @__PURE__ */ e.jsx(Ve, { variant: "secondary", className: "ml-2", children: g.badge })
                  ]
                },
                g.id
              )),
              /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ e.jsxs(
                  ee,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => R(!z),
                    className: "relative",
                    "aria-label": `Notifications ${j > 0 ? `(${j} unread)` : ""}`,
                    children: [
                      /* @__PURE__ */ e.jsx(Ir, { className: "w-5 h-5" }),
                      j > 0 && /* @__PURE__ */ e.jsx(
                        Ve,
                        {
                          variant: "error",
                          className: "absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center p-0",
                          children: j > 9 ? "9+" : j
                        }
                      )
                    ]
                  }
                ),
                z && /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ e.jsx("h3", { className: "font-semibold text-gray-900", children: "Notifications" }) }),
                  a.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center text-gray-500", children: "No notifications" }) : /* @__PURE__ */ e.jsx("div", { className: "py-2", children: a.slice(0, 10).map((g) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => k(g),
                      className: Z(
                        "w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0",
                        !g.read && "bg-blue-50"
                      ),
                      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ e.jsx("div", { className: Z(
                          "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                          g.read ? "bg-gray-300" : "bg-blue-500"
                        ) }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ e.jsx("p", { className: "font-medium text-gray-900 text-sm", children: g.title }),
                          /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 text-sm truncate", children: g.message }),
                          /* @__PURE__ */ e.jsx("p", { className: "text-gray-400 text-xs mt-1", children: g.timestamp.toLocaleDateString() })
                        ] })
                      ] })
                    },
                    g.id
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                ee,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "hidden md:flex",
                  "aria-label": "Settings",
                  children: /* @__PURE__ */ e.jsx(Ut, { className: "w-5 h-5" })
                }
              ),
              l && /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ e.jsxs(
                  ee,
                  {
                    variant: "ghost",
                    onClick: () => w(!S),
                    className: "flex items-center gap-2 px-2",
                    "aria-label": "User menu",
                    "aria-expanded": S,
                    children: [
                      /* @__PURE__ */ e.jsx(
                        Ye,
                        {
                          src: l.avatar,
                          alt: l.name,
                          fallback: l.name.charAt(0),
                          size: "sm"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs("div", { className: "text-left hidden lg:block", children: [
                        /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray-900", children: l.name }),
                        /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: l.role })
                      ] }),
                      /* @__PURE__ */ e.jsx(Br, { className: "w-4 h-4 text-gray-400" })
                    ]
                  }
                ),
                S && /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "p-4 border-b border-gray-200", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "font-medium text-gray-900", children: l.name }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: l.email })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "py-2", children: [
                    /* @__PURE__ */ e.jsxs("button", { className: "flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left", children: [
                      /* @__PURE__ */ e.jsx(Hr, { className: "w-4 h-4" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Profile" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("button", { className: "flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left", children: [
                      /* @__PURE__ */ e.jsx(Ut, { className: "w-4 h-4" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Settings" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("button", { className: "flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left", children: [
                      /* @__PURE__ */ e.jsx(Gr, { className: "w-4 h-4" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Help" })
                    ] }),
                    /* @__PURE__ */ e.jsx("hr", { className: "my-1" }),
                    T && /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        onClick: T,
                        className: "flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left",
                        children: [
                          /* @__PURE__ */ e.jsx(Yr, { className: "w-4 h-4" }),
                          /* @__PURE__ */ e.jsx("span", { children: "Sign Out" })
                        ]
                      }
                    )
                  ] })
                ] })
              ] })
            ] })
          ] }),
          r.length > 0 && s && n && /* @__PURE__ */ e.jsx("div", { className: "md:hidden mt-3", children: /* @__PURE__ */ e.jsx("div", { className: "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg", children: s.name }) })
        ] }),
        (S || z) && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "fixed inset-0 z-40",
            onClick: () => {
              w(!1), R(!1);
            },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}, Xt = {
  consultant: "text-blue-600 hover:text-blue-700 border-blue-200",
  client: "text-green-600 hover:text-green-700 border-green-200",
  admin: "text-red-600 hover:text-red-700 border-red-200",
  expert: "text-purple-600 hover:text-purple-700 border-purple-200",
  "tool-creator": "text-orange-600 hover:text-orange-700 border-orange-200",
  founder: "text-amber-600 hover:text-amber-700 border-amber-200",
  neutral: "text-gray-600 hover:text-gray-700 border-gray-200"
}, ya = ({
  context: t = "neutral",
  items: r,
  maxItems: s = 5,
  separator: n,
  onItemClick: l,
  responsive: a = !0,
  generateFromPath: o = !1,
  workspaceScoped: d = !1,
  className: i,
  showHome: h = !0,
  ...x
}) => {
  const m = ze.useMemo(() => {
    if (r.length <= s)
      return r;
    const S = r[0], w = r.slice(-(s - 2));
    return [
      S,
      { id: "ellipsis", label: "...", disabled: !0 },
      ...w
    ];
  }, [r, s]), y = (S) => {
    S.disabled || S.id === "ellipsis" || l == null || l(S);
  }, T = () => n || /* @__PURE__ */ e.jsx(nr, { className: "h-4 w-4 text-gray-400" }), E = (S, w) => {
    const z = "inline-flex items-center gap-1 text-sm transition-colors";
    if (S.disabled || S.id === "ellipsis")
      return Z(z, "text-gray-400 cursor-default");
    if (w)
      return Z(z, "text-gray-900 font-medium cursor-default");
    const R = Xt[S.workspaceContext || t];
    return Z(
      z,
      "hover:underline cursor-pointer",
      R
    );
  };
  return /* @__PURE__ */ e.jsx(
    "nav",
    {
      className: Z(
        "flex items-center space-x-1 text-sm",
        a && "flex-wrap",
        i
      ),
      "aria-label": "Breadcrumb",
      ...x,
      children: /* @__PURE__ */ e.jsxs("ol", { className: "flex items-center space-x-1", children: [
        h && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("li", { children: /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => l == null ? void 0 : l({ id: "home", label: "Home", path: "/" }),
              className: Z(
                "inline-flex items-center text-sm transition-colors hover:underline",
                Xt[t]
              ),
              "aria-label": "Home",
              children: /* @__PURE__ */ e.jsx(Kr, { className: "h-4 w-4" })
            }
          ) }),
          m.length > 0 && /* @__PURE__ */ e.jsx("li", { className: "flex items-center", children: T() })
        ] }),
        m.map((S, w) => {
          const z = w === m.length - 1;
          return /* @__PURE__ */ e.jsxs(ze.Fragment, { children: [
            /* @__PURE__ */ e.jsx("li", { children: S.path && !S.disabled && !z ? /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => y(S),
                className: E(S, z),
                "aria-current": z ? "page" : void 0,
                children: [
                  S.icon && /* @__PURE__ */ e.jsx("span", { className: "h-4 w-4", "aria-hidden": "true", children: S.icon }),
                  /* @__PURE__ */ e.jsx("span", { className: a ? "truncate max-w-[120px] sm:max-w-none" : "", children: S.label })
                ]
              }
            ) : /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: E(S, z),
                "aria-current": z ? "page" : void 0,
                children: [
                  S.icon && /* @__PURE__ */ e.jsx("span", { className: "h-4 w-4", "aria-hidden": "true", children: S.icon }),
                  /* @__PURE__ */ e.jsx("span", { className: a ? "truncate max-w-[120px] sm:max-w-none" : "", children: S.label })
                ]
              }
            ) }),
            !z && /* @__PURE__ */ e.jsx("li", { className: "flex items-center", "aria-hidden": "true", children: T() })
          ] }, S.id);
        })
      ] })
    }
  );
}, Ur = {
  consultant: {
    active: "border-blue-500 text-blue-600",
    inactive: "text-gray-500 hover:text-blue-600 hover:border-blue-300",
    background: "bg-blue-50"
  },
  client: {
    active: "border-green-500 text-green-600",
    inactive: "text-gray-500 hover:text-green-600 hover:border-green-300",
    background: "bg-green-50"
  },
  admin: {
    active: "border-red-500 text-red-600",
    inactive: "text-gray-500 hover:text-red-600 hover:border-red-300",
    background: "bg-red-50"
  },
  expert: {
    active: "border-purple-500 text-purple-600",
    inactive: "text-gray-500 hover:text-purple-600 hover:border-purple-300",
    background: "bg-purple-50"
  },
  "tool-creator": {
    active: "border-orange-500 text-orange-600",
    inactive: "text-gray-500 hover:text-orange-600 hover:border-orange-300",
    background: "bg-orange-50"
  },
  founder: {
    active: "border-amber-500 text-amber-600",
    inactive: "text-gray-500 hover:text-amber-600 hover:border-amber-300",
    background: "bg-amber-50"
  },
  neutral: {
    active: "border-gray-500 text-gray-900",
    inactive: "text-gray-500 hover:text-gray-700 hover:border-gray-300",
    background: "bg-gray-50"
  }
}, Nt = {
  line: {
    tabList: "border-b border-gray-200",
    tab: "border-b-2 border-transparent px-4 py-2",
    activeTab: "border-b-2"
  },
  card: {
    tabList: "bg-gray-100 p-1 rounded-lg",
    tab: "px-3 py-1.5 rounded-md",
    activeTab: "bg-white shadow-sm"
  },
  pill: {
    tabList: "space-x-1",
    tab: "px-3 py-1.5 rounded-full",
    activeTab: "shadow-sm"
  }
}, Xr = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, va = ({
  context: t = "neutral",
  tabs: r,
  activeTab: s,
  onTabChange: n,
  onTabClose: l,
  variant: a = "line",
  size: o = "md",
  scrollable: d = !0,
  responsive: i = !0,
  lazy: h = !1,
  permissions: x = [],
  className: m,
  tabListClassName: y,
  tabPanelClassName: T,
  showContent: E = !0,
  ...S
}) => {
  var H;
  const [w, z] = I(s || ((H = r[0]) == null ? void 0 : H.id)), [R, C] = I(!1), [f, u] = I(!1), [j, P] = I(!1), k = Ae(null), [g, M] = I(/* @__PURE__ */ new Set([w])), B = s || w, W = ze.useMemo(() => r.filter(($) => $.permission ? x.includes($.permission) : !0), [r, x]), N = ze.useCallback(() => {
    if (!k.current || !d) return;
    const { scrollLeft: $, scrollWidth: J, clientWidth: X } = k.current;
    u($ > 0), P($ < J - X - 1), C(J > X);
  }, [d]);
  Ge(() => {
    N();
    const $ = () => N();
    return window.addEventListener("resize", $), () => window.removeEventListener("resize", $);
  }, [N, W]), Ge(() => {
    h && B && !g.has(B) && M(($) => /* @__PURE__ */ new Set([...$, B]));
  }, [B, h, g]);
  const L = ($) => {
    if ($.disabled) return;
    const J = $.id;
    z(J), n == null || n($), h && !g.has(J) && M((X) => /* @__PURE__ */ new Set([...X, J]));
  }, p = ($, J) => {
    J.stopPropagation(), l == null || l($);
  }, v = ($) => {
    if (!k.current) return;
    const J = 200, X = $ === "left" ? k.current.scrollLeft - J : k.current.scrollLeft + J;
    k.current.scrollTo({
      left: X,
      behavior: "smooth"
    }), setTimeout(N, 300);
  }, A = ($, J) => {
    const X = Z(
      "inline-flex items-center gap-2 font-medium transition-all duration-200 cursor-pointer",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      Xr[o],
      Nt[a].tab
    );
    if ($.disabled)
      return Z(X, "opacity-50 cursor-not-allowed text-gray-400");
    const le = Ur[$.workspaceContext || t];
    return J ? Z(
      X,
      Nt[a].activeTab,
      le.active,
      a === "card" || a === "pill" ? le.background : ""
    ) : Z(X, le.inactive);
  }, b = ($) => $ ? /* @__PURE__ */ e.jsx("span", { className: Z(
    "inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-xs font-medium",
    "bg-red-100 text-red-800 min-w-[1.25rem] h-5"
  ), children: $ > 99 ? "99+" : $ }) : null, _ = W.find(($) => $.id === B);
  return /* @__PURE__ */ e.jsxs("div", { className: Z("w-full", m), ...S, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      R && f && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => v("left"),
          className: Z(
            "absolute left-0 top-0 z-10 h-full px-2 bg-white shadow-md",
            "flex items-center justify-center hover:bg-gray-50",
            "border-r border-gray-200"
          ),
          "aria-label": "Scroll tabs left",
          children: /* @__PURE__ */ e.jsx(Vr, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: k,
          className: Z(
            "flex overflow-x-auto scrollbar-hide",
            Nt[a].tabList,
            d && R && f && "pl-10",
            d && R && j && "pr-10",
            y
          ),
          role: "tablist",
          onScroll: N,
          children: W.map(($) => {
            const J = $.id === B;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                role: "tab",
                "aria-selected": J,
                "aria-controls": `tabpanel-${$.id}`,
                tabIndex: J ? 0 : -1,
                className: A($, J),
                onClick: () => L($),
                disabled: $.disabled,
                children: [
                  $.icon && /* @__PURE__ */ e.jsx("span", { className: "h-4 w-4 flex-shrink-0", "aria-hidden": "true", children: $.icon }),
                  /* @__PURE__ */ e.jsx("span", { className: i ? "truncate max-w-[120px] sm:max-w-none" : "", children: $.label }),
                  $.badge && b($.badge),
                  $.closable && /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: (X) => p($, X),
                      className: Z(
                        "ml-1 p-0.5 rounded hover:bg-gray-200 transition-colors",
                        "focus:outline-none focus:ring-1 focus:ring-gray-400"
                      ),
                      "aria-label": `Close ${$.label} tab`,
                      children: /* @__PURE__ */ e.jsx(Jr, { className: "h-3 w-3" })
                    }
                  )
                ]
              },
              $.id
            );
          })
        }
      ),
      R && j && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => v("right"),
          className: Z(
            "absolute right-0 top-0 z-10 h-full px-2 bg-white shadow-md",
            "flex items-center justify-center hover:bg-gray-50",
            "border-l border-gray-200"
          ),
          "aria-label": "Scroll tabs right",
          children: /* @__PURE__ */ e.jsx(nr, { className: "h-4 w-4" })
        }
      )
    ] }),
    E && _ && /* @__PURE__ */ e.jsx(
      "div",
      {
        role: "tabpanel",
        id: `tabpanel-${_.id}`,
        "aria-labelledby": `tab-${_.id}`,
        className: Z("mt-4", T),
        children: h ? g.has(_.id) && _.content : _.content
      }
    )
  ] });
}, ja = ({
  workspace: t,
  context: r = "neutral",
  user: s,
  permissions: n = [],
  features: l = [],
  onNavigate: a,
  onWorkspaceChange: o,
  responsive: d = !0,
  collapsed: i = !1,
  className: h
}) => {
  var C, f;
  const [x, m] = I(/* @__PURE__ */ new Set()), y = D((u) => u.filter((j) => !(j.permission && !n.includes(j.permission) || j.workspaceContext && j.workspaceContext !== r && j.workspaceContext !== "neutral" || j.disabled)).map((j) => ({
    ...j,
    children: j.children ? y(j.children) : void 0
  })), [n, r]), T = D(() => {
    const u = "transition-colors duration-200";
    switch (r) {
      case "consultant":
        return `${u} bg-blue-50 border-blue-200 text-blue-900`;
      case "client":
        return `${u} bg-green-50 border-green-200 text-green-900`;
      case "admin":
        return `${u} bg-gray-50 border-gray-200 text-gray-900`;
      case "expert":
        return `${u} bg-purple-50 border-purple-200 text-purple-900`;
      case "tool-creator":
        return `${u} bg-orange-50 border-orange-200 text-orange-900`;
      case "founder":
        return `${u} bg-amber-50 border-amber-200 text-amber-900`;
      default:
        return `${u} bg-white border-gray-200 text-gray-900`;
    }
  }, [r]), E = D((u) => {
    m((j) => {
      const P = new Set(j);
      return P.has(u) ? P.delete(u) : P.add(u), P;
    });
  }, []), S = D((u) => {
    u.children && u.children.length > 0 ? E(u.id) : u.path && a && a(u.path);
  }, [a, E]), w = D((u, j = 0) => {
    const P = u.children && u.children.length > 0, k = x.has(u.id), g = P ? y(u.children) : [];
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => S(u),
          className: Z(
            "w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
            "hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2",
            j > 0 && "ml-4 text-xs",
            u.active && "bg-opacity-100 font-semibold",
            !u.active && "hover:bg-gray-100",
            i && j === 0 && "justify-center px-2"
          ),
          style: { paddingLeft: i ? void 0 : `${0.75 + j * 1}rem` },
          "aria-expanded": P ? k : void 0,
          "aria-label": u.label,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
              u.icon && /* @__PURE__ */ e.jsx("span", { className: "flex-shrink-0 w-4 h-4", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("div", { className: "w-4 h-4 bg-current opacity-60 rounded-sm" }) }),
              !i && /* @__PURE__ */ e.jsx("span", { className: "truncate", children: u.label })
            ] }),
            !i && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-1", children: [
              u.badge && u.badge > 0 && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full", children: u.badge > 99 ? "99+" : u.badge }),
              P && /* @__PURE__ */ e.jsx("span", { className: Z(
                "flex-shrink-0 w-4 h-4 transition-transform duration-200",
                k && "transform rotate-90"
              ), children: /* @__PURE__ */ e.jsx("div", { className: "w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent" }) })
            ] })
          ]
        }
      ),
      P && k && !i && /* @__PURE__ */ e.jsx("div", { className: "mt-1 space-y-1", children: g.map((M) => w(M, j + 1)) })
    ] }, u.id);
  }, [x, y, S, i]), z = y(t.navigation), R = l.filter(
    (u) => u.enabled && (!u.permission || n.includes(u.permission)) && (!u.workspaceContext || u.workspaceContext === r || u.workspaceContext === "neutral")
  );
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: Z(
        "flex flex-col h-full border-r",
        T(),
        d && "lg:w-64",
        i ? "w-16" : "w-64",
        h
      ),
      "aria-label": `${t.name} navigation`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: Z(
          "flex items-center justify-between p-4 border-b border-current border-opacity-20",
          i && "justify-center px-2"
        ), children: [
          !i && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            ((C = t.branding) == null ? void 0 : C.logo) && /* @__PURE__ */ e.jsx(
              "img",
              {
                src: t.branding.logo,
                alt: `${t.name} logo`,
                className: "w-8 h-8 rounded"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-semibold truncate", children: t.name }),
              /* @__PURE__ */ e.jsx("p", { className: "text-xs opacity-75 capitalize", children: t.type })
            ] })
          ] }),
          ((f = t.branding) == null ? void 0 : f.logo) && i && /* @__PURE__ */ e.jsx(
            "img",
            {
              src: t.branding.logo,
              alt: `${t.name} logo`,
              className: "w-8 h-8 rounded"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-2 space-y-1", children: z.map((u) => w(u)) }),
        R.length > 0 && !i && /* @__PURE__ */ e.jsxs("div", { className: "border-t border-current border-opacity-20 p-2", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wide opacity-75 mb-2", children: "Features" }),
          /* @__PURE__ */ e.jsx("div", { className: "space-y-1", children: R.map((u) => /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: "flex items-center justify-between px-3 py-1 text-xs",
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "truncate", children: u.name }),
                /* @__PURE__ */ e.jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full" })
              ]
            },
            u.id
          )) })
        ] }),
        !i && /* @__PURE__ */ e.jsx("div", { className: "border-t border-current border-opacity-20 p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
          s.avatar ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: s.avatar,
              alt: s.name,
              className: "w-8 h-8 rounded-full"
            }
          ) : /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 bg-current bg-opacity-20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-xs font-semibold", children: s.name.charAt(0).toUpperCase() }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium truncate", children: s.name }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs opacity-75 truncate", children: s.role })
          ] })
        ] }) })
      ]
    }
  );
}, wa = ({
  client: t,
  projects: r,
  currentProject: s,
  onProjectChange: n,
  onNavigate: l,
  permissions: a = [],
  responsive: o = !0,
  notifications: d = [],
  className: i
}) => {
  const [h, x] = I("overview"), m = d.filter((C) => !C.read).length, y = s || r[0], T = D((C, f) => {
    x(f), l && l(C);
  }, [l]), E = D((C) => {
    n && n(C);
  }, [n]), S = D((C) => {
    switch (C) {
      case "active":
        return "text-green-600 bg-green-100";
      case "completed":
        return "text-blue-600 bg-blue-100";
      case "on-hold":
        return "text-yellow-600 bg-yellow-100";
      case "cancelled":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  }, []), w = D((C) => {
    switch (C) {
      case "urgent":
        return "text-red-600";
      case "high":
        return "text-orange-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  }, []), R = [
    {
      id: "overview",
      label: "Project Overview",
      icon: "home",
      path: "/overview",
      description: "View project status and updates"
    },
    {
      id: "documents",
      label: "Documents",
      icon: "file",
      path: "/documents",
      description: "Access project files and deliverables",
      badge: y ? Math.floor(Math.random() * 10) + 1 : 0
    },
    {
      id: "communications",
      label: "Messages",
      icon: "message",
      path: "/messages",
      description: "Communicate with your consultant",
      badge: m
    },
    {
      id: "timeline",
      label: "Timeline",
      icon: "calendar",
      path: "/timeline",
      description: "View project milestones and deadlines"
    },
    {
      id: "billing",
      label: "Billing",
      icon: "credit-card",
      path: "/billing",
      description: "View invoices and payment history",
      permission: "billing"
    },
    {
      id: "feedback",
      label: "Feedback",
      icon: "star",
      path: "/feedback",
      description: "Provide feedback and reviews"
    }
  ].filter(
    (C) => !C.permission || a.includes(C.permission)
  );
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: Z(
        "flex flex-col h-full bg-green-50 border-r border-green-200 text-green-900",
        o && "lg:w-80",
        "w-80",
        i
      ),
      "aria-label": "Client navigation",
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-green-200", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
          t.avatar ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: t.avatar,
              alt: t.name,
              className: "w-12 h-12 rounded-full border-2 border-green-300"
            }
          ) : /* @__PURE__ */ e.jsx("div", { className: "w-12 h-12 bg-green-200 rounded-full flex items-center justify-center border-2 border-green-300", children: /* @__PURE__ */ e.jsx("span", { className: "text-lg font-semibold text-green-700", children: t.name.charAt(0).toUpperCase() }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-green-900 truncate", children: t.name }),
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-green-700 truncate", children: t.company }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center mt-1", children: [
              /* @__PURE__ */ e.jsx("div", { className: Z(
                "w-2 h-2 rounded-full mr-2",
                t.status === "active" ? "bg-green-500" : t.status === "pending" ? "bg-yellow-500" : "bg-gray-400"
              ) }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-green-600 capitalize", children: t.status })
            ] })
          ] })
        ] }) }),
        r.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "p-4 border-b border-green-200", children: [
          /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-green-800 mb-2", children: "Current Project" }),
          /* @__PURE__ */ e.jsx(
            "select",
            {
              value: (y == null ? void 0 : y.id) || "",
              onChange: (C) => {
                const f = r.find((u) => u.id === C.target.value);
                f && E(f);
              },
              className: "w-full px-3 py-2 text-sm border border-green-300 rounded-md bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500",
              children: r.map((C) => /* @__PURE__ */ e.jsx("option", { value: C.id, children: C.name }, C.id))
            }
          ),
          y && /* @__PURE__ */ e.jsxs("div", { className: "mt-3 p-3 bg-white rounded-md border border-green-200", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: Z(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                S(y.status)
              ), children: y.status.replace("-", " ") }),
              /* @__PURE__ */ e.jsxs("span", { className: Z(
                "text-xs font-medium",
                w(y.priority)
              ), children: [
                y.priority,
                " priority"
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "mb-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs text-green-700 mb-1", children: [
                /* @__PURE__ */ e.jsx("span", { children: "Progress" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  y.progress,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "w-full bg-green-200 rounded-full h-2", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "bg-green-600 h-2 rounded-full transition-all duration-300",
                  style: { width: `${y.progress}%` }
                }
              ) })
            ] }),
            y.dueDate && /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-green-600", children: [
              "Due: ",
              new Date(y.dueDate).toLocaleDateString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-2", children: R.map((C) => /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => T(C.path, C.id),
            className: Z(
              "w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors duration-200",
              "hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
              h === C.id ? "bg-green-200 text-green-900 font-medium" : "text-green-800 hover:text-green-900"
            ),
            "aria-label": C.label,
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 w-5 h-5 mt-0.5", children: /* @__PURE__ */ e.jsx("div", { className: "w-5 h-5 bg-current opacity-60 rounded-sm" }) }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium truncate", children: C.label }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-xs opacity-75 truncate", children: C.description })
                ] })
              ] }),
              C.badge && C.badge > 0 && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full ml-2", children: C.badge > 99 ? "99+" : C.badge })
            ]
          },
          C.id
        )) }),
        /* @__PURE__ */ e.jsxs("div", { className: "border-t border-green-200 p-4", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-green-800 mb-3", children: "Quick Actions" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => T("/support", "support"),
                className: "w-full flex items-center space-x-2 px-3 py-2 text-sm text-green-700 hover:text-green-900 hover:bg-green-100 rounded-md transition-colors duration-200",
                children: [
                  /* @__PURE__ */ e.jsx("div", { className: "w-4 h-4 bg-current opacity-60 rounded-sm" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Contact Support" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => T("/help", "help"),
                className: "w-full flex items-center space-x-2 px-3 py-2 text-sm text-green-700 hover:text-green-900 hover:bg-green-100 rounded-md transition-colors duration-200",
                children: [
                  /* @__PURE__ */ e.jsx("div", { className: "w-4 h-4 bg-current opacity-60 rounded-sm" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Help Center" })
                ]
              }
            )
          ] })
        ] }),
        d.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "border-t border-green-200 p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-green-800", children: "Recent Updates" }),
            m > 0 && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full", children: m })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: d.slice(0, 3).map((C) => /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: Z(
                "p-2 rounded-md text-xs",
                C.read ? "bg-green-100 text-green-700" : "bg-white text-green-800 border border-green-200"
              ),
              children: [
                /* @__PURE__ */ e.jsx("p", { className: "font-medium truncate", children: C.title }),
                /* @__PURE__ */ e.jsx("p", { className: "opacity-75 truncate", children: C.message })
              ]
            },
            C.id
          )) }),
          d.length > 3 && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => T("/notifications", "notifications"),
              className: "w-full mt-2 text-xs text-green-600 hover:text-green-800 text-center",
              children: "View all notifications"
            }
          )
        ] })
      ]
    }
  );
}, Na = ({
  consultant: t,
  clients: r,
  activeWorkspaces: s,
  onClientSelect: n,
  onWorkspaceSelect: l,
  onNavigate: a,
  permissions: o = [],
  responsive: d = !0,
  analytics: i,
  className: h
}) => {
  const [x, m] = I("dashboard"), [y, T] = I(/* @__PURE__ */ new Set(["clients"])), E = D((f, u) => {
    m(u), a && a(f);
  }, [a]), S = D((f) => {
    T((u) => {
      const j = new Set(u);
      return j.has(f) ? j.delete(f) : j.add(f), j;
    });
  }, []), w = D((f) => {
    switch (f) {
      case "active":
        return "bg-green-500";
      case "busy":
        return "bg-red-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  }, []), z = D((f) => {
    switch (f) {
      case "urgent":
        return "text-red-600 bg-red-100";
      case "high":
        return "text-orange-600 bg-orange-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  }, []), C = [
    {
      id: "main",
      title: "Main",
      items: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: "dashboard",
          path: "/dashboard",
          description: "Overview and key metrics"
        },
        {
          id: "calendar",
          label: "Calendar",
          icon: "calendar",
          path: "/calendar",
          description: "Schedule and appointments",
          badge: 3
          // Upcoming appointments
        },
        {
          id: "tasks",
          label: "Tasks",
          icon: "check-square",
          path: "/tasks",
          description: "Action items and to-dos",
          badge: 8
          // Pending tasks
        }
      ]
    },
    {
      id: "clients",
      title: "Client Management",
      expandable: !0,
      items: [
        {
          id: "clients-overview",
          label: "All Clients",
          icon: "users",
          path: "/clients",
          description: "Manage client relationships",
          badge: r.length
        },
        {
          id: "active-projects",
          label: "Active Projects",
          icon: "folder",
          path: "/projects/active",
          description: "Current project work",
          badge: s.length
        },
        {
          id: "proposals",
          label: "Proposals",
          icon: "file-text",
          path: "/proposals",
          description: "Pending and sent proposals",
          permission: "proposals"
        },
        {
          id: "contracts",
          label: "Contracts",
          icon: "file-signature",
          path: "/contracts",
          description: "Client agreements",
          permission: "contracts"
        }
      ]
    },
    {
      id: "business",
      title: "Business Operations",
      expandable: !0,
      items: [
        {
          id: "billing",
          label: "Billing & Invoices",
          icon: "credit-card",
          path: "/billing",
          description: "Financial management",
          permission: "billing",
          badge: 2
          // Pending invoices
        },
        {
          id: "time-tracking",
          label: "Time Tracking",
          icon: "clock",
          path: "/time",
          description: "Log and manage time",
          permission: "time-tracking"
        },
        {
          id: "analytics",
          label: "Analytics",
          icon: "chart",
          path: "/analytics",
          description: "Performance insights",
          permission: "analytics"
        },
        {
          id: "reports",
          label: "Reports",
          icon: "bar-chart",
          path: "/reports",
          description: "Business reports",
          permission: "reports"
        }
      ]
    },
    {
      id: "tools",
      title: "Tools & Resources",
      expandable: !0,
      items: [
        {
          id: "knowledge-base",
          label: "Knowledge Base",
          icon: "book",
          path: "/knowledge",
          description: "Resources and documentation"
        },
        {
          id: "templates",
          label: "Templates",
          icon: "layout",
          path: "/templates",
          description: "Reusable templates"
        },
        {
          id: "integrations",
          label: "Integrations",
          icon: "link",
          path: "/integrations",
          description: "Connected services",
          permission: "integrations"
        }
      ]
    }
  ].map((f) => ({
    ...f,
    items: f.items.filter(
      (u) => !u.permission || o.includes(u.permission)
    )
  })).filter((f) => f.items.length > 0);
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: Z(
        "flex flex-col h-full bg-blue-50 border-r border-blue-200 text-blue-900",
        d && "lg:w-80",
        "w-80",
        h
      ),
      "aria-label": "Consultant navigation",
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-blue-200", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
            t.avatar ? /* @__PURE__ */ e.jsx(
              "img",
              {
                src: t.avatar,
                alt: t.name,
                className: "w-12 h-12 rounded-full border-2 border-blue-300"
              }
            ) : /* @__PURE__ */ e.jsx("div", { className: "w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center border-2 border-blue-300", children: /* @__PURE__ */ e.jsx("span", { className: "text-lg font-semibold text-blue-700", children: t.name.charAt(0).toUpperCase() }) }),
            /* @__PURE__ */ e.jsx("div", { className: Z(
              "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white",
              w(t.status)
            ) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-blue-900 truncate", children: t.name }),
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-blue-700 truncate", children: t.title }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1 mt-1", children: [
              t.specialties.slice(0, 2).map((f) => /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800",
                  children: f
                },
                f
              )),
              t.specialties.length > 2 && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-blue-600", children: [
                "+",
                t.specialties.length - 2,
                " more"
              ] })
            ] })
          ] })
        ] }) }),
        i && /* @__PURE__ */ e.jsxs("div", { className: "p-4 border-b border-blue-200", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-blue-800 mb-3", children: "Quick Stats" }),
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "bg-white p-3 rounded-md border border-blue-200", children: [
              /* @__PURE__ */ e.jsx("p", { className: "text-xs text-blue-600", children: "Active Clients" }),
              /* @__PURE__ */ e.jsx("p", { className: "text-lg font-semibold text-blue-900", children: i.activeClients })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-white p-3 rounded-md border border-blue-200", children: [
              /* @__PURE__ */ e.jsx("p", { className: "text-xs text-blue-600", children: "This Month" }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-lg font-semibold text-blue-900", children: [
                i.hoursThisMonth,
                "h"
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-white p-3 rounded-md border border-blue-200", children: [
              /* @__PURE__ */ e.jsx("p", { className: "text-xs text-blue-600", children: "Revenue" }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-lg font-semibold text-blue-900", children: [
                "$",
                i.totalRevenue.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-white p-3 rounded-md border border-blue-200", children: [
              /* @__PURE__ */ e.jsx("p", { className: "text-xs text-blue-600", children: "Satisfaction" }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-lg font-semibold text-blue-900", children: [
                i.clientSatisfaction,
                "%"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-6", children: C.map((f) => /* @__PURE__ */ e.jsxs("div", { children: [
          f.expandable ? /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => S(f.id),
              className: "w-full flex items-center justify-between mb-3 text-sm font-medium text-blue-800 hover:text-blue-900",
              children: [
                /* @__PURE__ */ e.jsx("span", { children: f.title }),
                /* @__PURE__ */ e.jsx("span", { className: Z(
                  "w-4 h-4 transition-transform duration-200",
                  y.has(f.id) && "transform rotate-90"
                ), children: /* @__PURE__ */ e.jsx("div", { className: "w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent" }) })
              ]
            }
          ) : /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-blue-800 mb-3", children: f.title }),
          (!f.expandable || y.has(f.id)) && /* @__PURE__ */ e.jsx("div", { className: "space-y-1", children: f.items.map((u) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => E(u.path, u.id),
              className: Z(
                "w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors duration-200",
                "hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                x === u.id ? "bg-blue-200 text-blue-900 font-medium" : "text-blue-800 hover:text-blue-900"
              ),
              "aria-label": u.label,
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 w-5 h-5 mt-0.5", children: /* @__PURE__ */ e.jsx("div", { className: "w-5 h-5 bg-current opacity-60 rounded-sm" }) }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium truncate", children: u.label }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-xs opacity-75 truncate", children: u.description })
                  ] })
                ] }),
                u.badge && u.badge > 0 && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full ml-2", children: u.badge > 99 ? "99+" : u.badge })
              ]
            },
            u.id
          )) })
        ] }, f.id)) }),
        r.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "border-t border-blue-200 p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-blue-800", children: "Recent Clients" }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => E("/clients", "clients-overview"),
                className: "text-xs text-blue-600 hover:text-blue-800",
                children: "View all"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "space-y-2 max-h-40 overflow-y-auto", children: r.slice(0, 4).map((f) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => n && n(f),
              className: "w-full flex items-center space-x-3 p-2 text-left rounded-md hover:bg-blue-100 transition-colors duration-200",
              children: [
                f.avatar ? /* @__PURE__ */ e.jsx(
                  "img",
                  {
                    src: f.avatar,
                    alt: f.name,
                    className: "w-8 h-8 rounded-full"
                  }
                ) : /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-xs font-semibold text-blue-700", children: f.name.charAt(0).toUpperCase() }) }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-blue-900 truncate", children: f.name }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-xs text-blue-600 truncate", children: f.company })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: Z(
                  "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                  z(f.priority)
                ), children: f.priority })
              ]
            },
            f.id
          )) })
        ] }),
        s.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "border-t border-blue-200 p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-blue-800", children: "Active Workspaces" }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-blue-600", children: [
              s.length,
              " active"
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: s.slice(0, 3).map((f) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => l && l(f),
              className: "w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-blue-100 transition-colors duration-200",
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-blue-900 truncate", children: f.name }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-blue-600", children: [
                    f.hoursLogged,
                    "h logged"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-medium text-blue-900", children: [
                    "$",
                    f.revenue.toLocaleString()
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { className: Z(
                    "w-2 h-2 rounded-full",
                    f.status === "active" ? "bg-green-500" : f.status === "paused" ? "bg-yellow-500" : "bg-gray-400"
                  ) })
                ] })
              ]
            },
            f.id
          )) })
        ] })
      ]
    }
  );
}, ka = ({
  context: t = "neutral",
  items: r,
  currentPath: s,
  onItemClick: n,
  collapsible: l = !0,
  defaultCollapsed: a = !1,
  onCollapseChange: o,
  permissions: d = [],
  responsive: i = !0,
  className: h
}) => {
  const [x, m] = I(a), [y, T] = I(/* @__PURE__ */ new Set()), E = D(() => {
    const u = !x;
    m(u), o == null || o(u);
  }, [x, o]), S = D((u) => {
    T((j) => {
      const P = new Set(j);
      return P.has(u) ? P.delete(u) : P.add(u), P;
    });
  }, []), w = D((u) => u.filter((j) => !(j.permission && !d.includes(j.permission) || j.workspaceContext && j.workspaceContext !== t)).map((j) => ({
    ...j,
    children: j.children ? w(j.children) : void 0
  })), [d, t]), z = w(r), R = D((u, j) => {
    if (j.preventDefault(), !u.disabled) {
      if (u.children && u.children.length > 0) {
        S(u.id);
        return;
      }
      n == null || n(u);
    }
  }, [n, S]), C = D((u) => u.active ? !0 : s && u.path ? s === u.path || s.startsWith(u.path + "/") : !1, [s]), f = D((u, j = 0) => {
    const P = C(u), k = y.has(u.id), g = u.children && u.children.length > 0;
    return /* @__PURE__ */ e.jsxs("div", { className: "navigation-item", children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: (M) => R(u, M),
          disabled: u.disabled,
          className: Z(
            "w-full flex items-center gap-3 px-3 py-2 text-left transition-colors duration-200",
            "hover:bg-gray-100 dark:hover:bg-gray-800",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
            {
              "bg-blue-50 text-blue-700 border-r-2 border-blue-700 dark:bg-blue-900/20 dark:text-blue-300": P,
              "text-gray-700 dark:text-gray-300": !P && !u.disabled,
              "text-gray-400 dark:text-gray-600 cursor-not-allowed": u.disabled,
              "pl-6": j > 0,
              "pl-9": j > 1
            },
            // Workspace context styling
            {
              "border-l-4 border-l-blue-500": t === "consultant" && P,
              "border-l-4 border-l-green-500": t === "client" && P,
              "border-l-4 border-l-purple-500": t === "admin" && P
            }
          ),
          "aria-expanded": g ? k : void 0,
          "aria-current": P ? "page" : void 0,
          children: [
            u.icon && !x && /* @__PURE__ */ e.jsx(
              xe,
              {
                name: u.icon,
                size: "sm",
                className: Z(
                  "flex-shrink-0",
                  {
                    "text-blue-700 dark:text-blue-300": P,
                    "text-gray-500 dark:text-gray-400": !P
                  }
                )
              }
            ),
            x && u.icon && /* @__PURE__ */ e.jsx(
              xe,
              {
                name: u.icon,
                size: "sm",
                className: Z(
                  "flex-shrink-0 mx-auto",
                  {
                    "text-blue-700 dark:text-blue-300": P,
                    "text-gray-500 dark:text-gray-400": !P
                  }
                )
              }
            ),
            !x && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx("span", { className: "flex-1 truncate", children: u.label }),
              u.badge && u.badge > 0 && /* @__PURE__ */ e.jsx("span", { className: Z(
                "inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full",
                {
                  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200": P,
                  "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200": !P
                }
              ), children: u.badge > 99 ? "99+" : u.badge }),
              g && /* @__PURE__ */ e.jsx(
                xe,
                {
                  name: k ? "ChevronDown" : "ChevronRight",
                  size: "sm",
                  className: "flex-shrink-0 text-gray-400"
                }
              )
            ] })
          ]
        }
      ),
      g && k && !x && /* @__PURE__ */ e.jsx("div", { className: "ml-3 border-l border-gray-200 dark:border-gray-700", children: u.children.map((M) => f(M, j + 1)) })
    ] }, u.id);
  }, [x, y, R, C, t]);
  return Ge(() => {
    if (!i) return;
    const u = () => {
      window.innerWidth < 768 && m(!0);
    };
    return window.addEventListener("resize", u), u(), () => window.removeEventListener("resize", u);
  }, [i]), /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: Z(
        "flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700",
        "transition-all duration-300 ease-in-out",
        {
          "w-64": !x,
          "w-16": x
        },
        // Workspace context styling
        {
          "border-r-blue-200 dark:border-r-blue-800": t === "consultant",
          "border-r-green-200 dark:border-r-green-800": t === "client",
          "border-r-purple-200 dark:border-r-purple-800": t === "admin"
        },
        h
      ),
      role: "navigation",
      "aria-label": "Side navigation",
      children: [
        l && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700", children: [
          !x && /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 truncate", children: "Navigation" }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: E,
              className: Z(
                "p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",
                "focus:outline-none focus:ring-2 focus:ring-blue-500",
                {
                  "mx-auto": x
                }
              ),
              "aria-label": x ? "Expand navigation" : "Collapse navigation",
              children: /* @__PURE__ */ e.jsx(
                xe,
                {
                  name: x ? "ChevronRight" : "ChevronLeft",
                  size: "sm",
                  className: "text-gray-500 dark:text-gray-400"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto py-2", children: z.map((u) => f(u)) }),
        /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 p-3", children: x ? /* @__PURE__ */ e.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-400 mx-auto" }) : /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-500 dark:text-gray-400 text-center", children: [
          t.charAt(0).toUpperCase() + t.slice(1),
          " Workspace"
        ] }) })
      ]
    }
  );
}, Ca = ({
  context: t = "neutral",
  items: r,
  currentPath: s,
  onItemClick: n,
  workspaces: l = [],
  currentWorkspace: a,
  onWorkspaceChange: o,
  user: d,
  bottomSheet: i = !1,
  swipeGestures: h = !0,
  isOpen: x = !1,
  onToggle: m,
  className: y
}) => {
  const [T, E] = I(/* @__PURE__ */ new Set()), [S, w] = I(!1), [z, R] = I(null), [C, f] = I(null), u = D((p) => {
    E((v) => {
      const A = new Set(v);
      return A.has(p) ? A.delete(p) : A.add(p), A;
    });
  }, []), j = D((p, v) => {
    if (v.preventDefault(), !p.disabled) {
      if (p.children && p.children.length > 0) {
        u(p.id);
        return;
      }
      n == null || n(p), m == null || m(!1);
    }
  }, [n, u, m]), P = D((p) => p.active ? !0 : s && p.path ? s === p.path || s.startsWith(p.path + "/") : !1, [s]), k = D((p) => {
    o == null || o(p), w(!1);
  }, [o]), g = 50, M = D((p) => {
    h && (f(null), R(p.targetTouches[0].clientX));
  }, [h]), B = D((p) => {
    h && f(p.targetTouches[0].clientX);
  }, [h]), W = D(() => {
    if (!h || !z || !C) return;
    const p = z - C, v = p > g, A = p < -g;
    v && x ? m == null || m(!1) : A && !x && (m == null || m(!0));
  }, [h, z, C, x, m, g]), N = D(() => {
    m == null || m(!1);
  }, [m]);
  Ge(() => (x ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [x]);
  const L = D((p, v = 0) => {
    const A = P(p), b = T.has(p.id), _ = p.children && p.children.length > 0;
    return /* @__PURE__ */ e.jsxs("div", { className: "navigation-item", children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: (H) => j(p, H),
          disabled: p.disabled,
          className: Z(
            "w-full flex items-center gap-4 px-4 py-3 text-left transition-colors duration-200",
            "hover:bg-gray-100 dark:hover:bg-gray-800",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
            "text-base font-medium",
            {
              "bg-blue-50 text-blue-700 border-r-4 border-blue-700 dark:bg-blue-900/20 dark:text-blue-300": A,
              "text-gray-700 dark:text-gray-300": !A && !p.disabled,
              "text-gray-400 dark:text-gray-600 cursor-not-allowed": p.disabled,
              "pl-8": v > 0,
              "pl-12": v > 1
            },
            // Workspace context styling
            {
              "border-r-blue-500": t === "consultant" && A,
              "border-r-green-500": t === "client" && A,
              "border-r-purple-500": t === "admin" && A
            }
          ),
          "aria-expanded": _ ? b : void 0,
          "aria-current": A ? "page" : void 0,
          children: [
            p.icon && /* @__PURE__ */ e.jsx(
              xe,
              {
                name: p.icon,
                size: "md",
                className: Z(
                  "flex-shrink-0",
                  {
                    "text-blue-700 dark:text-blue-300": A,
                    "text-gray-500 dark:text-gray-400": !A
                  }
                )
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "flex-1 truncate", children: p.label }),
            p.badge && p.badge > 0 && /* @__PURE__ */ e.jsx("span", { className: Z(
              "inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full",
              {
                "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200": A,
                "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200": !A
              }
            ), children: p.badge > 99 ? "99+" : p.badge }),
            _ && /* @__PURE__ */ e.jsx(
              xe,
              {
                name: b ? "ChevronDown" : "ChevronRight",
                size: "sm",
                className: "flex-shrink-0 text-gray-400"
              }
            )
          ]
        }
      ),
      _ && b && /* @__PURE__ */ e.jsx("div", { className: "border-l-2 border-gray-200 dark:border-gray-700 ml-6", children: p.children.map((H) => L(H, v + 1)) })
    ] }, p.id);
  }, [T, j, P, t]);
  return x ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: N,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: Z(
          "fixed inset-y-0 left-0 z-50 w-80 max-w-sm bg-white dark:bg-gray-900",
          "transform transition-transform duration-300 ease-in-out",
          "flex flex-col shadow-xl",
          {
            "bottom-0 top-auto rounded-t-xl": i
          },
          // Workspace context styling
          {
            "border-r-2 border-r-blue-200 dark:border-r-blue-800": t === "consultant",
            "border-r-2 border-r-green-200 dark:border-r-green-800": t === "client",
            "border-r-2 border-r-purple-200 dark:border-r-purple-800": t === "admin"
          },
          y
        ),
        onTouchStart: M,
        onTouchMove: B,
        onTouchEnd: W,
        role: "navigation",
        "aria-label": "Mobile navigation",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e.jsx("div", { className: Z(
                "w-3 h-3 rounded-full",
                {
                  "bg-blue-500": t === "consultant",
                  "bg-green-500": t === "client",
                  "bg-purple-500": t === "admin",
                  "bg-gray-500": t === "neutral"
                }
              ) }),
              /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: (a == null ? void 0 : a.name) || "Navigation" })
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => m == null ? void 0 : m(!1),
                className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",
                "aria-label": "Close navigation",
                children: /* @__PURE__ */ e.jsx(xe, { name: "X", size: "sm", className: "text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          (d || l.length > 0) && /* @__PURE__ */ e.jsxs("div", { className: "p-4 border-b border-gray-200 dark:border-gray-700", children: [
            d && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center", children: d.avatar ? /* @__PURE__ */ e.jsx("img", { src: d.avatar, alt: d.name, className: "w-8 h-8 rounded-full" }) : /* @__PURE__ */ e.jsx(xe, { name: "User", size: "sm", className: "text-gray-600 dark:text-gray-300" }) }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray-900 dark:text-gray-100 truncate", children: d.name }),
                /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 truncate", children: d.role })
              ] })
            ] }),
            l.length > 0 && /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => w(!S),
                className: "w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Switch Workspace" }),
                  /* @__PURE__ */ e.jsx(
                    xe,
                    {
                      name: S ? "ChevronUp" : "ChevronDown",
                      size: "sm",
                      className: "text-gray-400"
                    }
                  )
                ]
              }
            ),
            S && l.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-2 space-y-1", children: l.map((p) => /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => k(p),
                className: Z(
                  "w-full flex items-center gap-3 p-2 rounded-md text-left transition-colors",
                  "hover:bg-gray-100 dark:hover:bg-gray-800",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500",
                  {
                    "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300": (a == null ? void 0 : a.id) === p.id,
                    "text-gray-700 dark:text-gray-300": (a == null ? void 0 : a.id) !== p.id
                  }
                ),
                children: [
                  /* @__PURE__ */ e.jsx("div", { className: Z(
                    "w-2 h-2 rounded-full",
                    {
                      "bg-blue-500": p.type === "consultant",
                      "bg-green-500": p.type === "client",
                      "bg-purple-500": p.type === "admin"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium truncate", children: p.name })
                ]
              },
              p.id
            )) })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto py-2", children: r.map((p) => L(p)) }),
          /* @__PURE__ */ e.jsxs("div", { className: "border-t border-gray-200 dark:border-gray-700 p-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-500 dark:text-gray-400 text-center", children: [
              t.charAt(0).toUpperCase() + t.slice(1),
              " Workspace"
            ] }),
            h && /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-400 dark:text-gray-500 text-center mt-1", children: "Swipe left to close" })
          ] })
        ]
      }
    )
  ] }) : null;
}, xt = (t = "neutral") => ({
  consultant: {
    primary: "bg-blue-600 text-white",
    secondary: "bg-blue-50 text-blue-900 border-blue-200",
    accent: "text-blue-600",
    hover: "hover:bg-blue-50"
  },
  client: {
    primary: "bg-green-600 text-white",
    secondary: "bg-green-50 text-green-900 border-green-200",
    accent: "text-green-600",
    hover: "hover:bg-green-50"
  },
  admin: {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-50 text-purple-900 border-purple-200",
    accent: "text-purple-600",
    hover: "hover:bg-purple-50"
  },
  expert: {
    primary: "bg-orange-600 text-white",
    secondary: "bg-orange-50 text-orange-900 border-orange-200",
    accent: "text-orange-600",
    hover: "hover:bg-orange-50"
  },
  "tool-creator": {
    primary: "bg-indigo-600 text-white",
    secondary: "bg-indigo-50 text-indigo-900 border-indigo-200",
    accent: "text-indigo-600",
    hover: "hover:bg-indigo-50"
  },
  founder: {
    primary: "bg-red-600 text-white",
    secondary: "bg-red-50 text-red-900 border-red-200",
    accent: "text-red-600",
    hover: "hover:bg-red-50"
  },
  neutral: {
    primary: "bg-gray-600 text-white",
    secondary: "bg-gray-50 text-gray-900 border-gray-200",
    accent: "text-gray-600",
    hover: "hover:bg-gray-50"
  }
})[t], Qr = (t = [], r) => r ? t.includes(r) || t.includes("*") : !0, Zr = (t, r = [], s = "neutral") => t.filter((n) => !(!Qr(r, n.permission) || n.workspaceContext && !n.workspaceContext.includes(s) || n.hidden)), es = (t, r, s) => [...t].sort((n, l) => {
  const a = pt(n, r), o = pt(l, r);
  if (a == null) return s === "asc" ? 1 : -1;
  if (o == null) return s === "asc" ? -1 : 1;
  if (typeof a == "string" && typeof o == "string")
    return s === "asc" ? a.localeCompare(o) : o.localeCompare(a);
  if (typeof a == "number" && typeof o == "number")
    return s === "asc" ? a - o : o - a;
  if (a instanceof Date && o instanceof Date)
    return s === "asc" ? a.getTime() - o.getTime() : o.getTime() - a.getTime();
  const d = String(a), i = String(o);
  return s === "asc" ? d.localeCompare(i) : i.localeCompare(d);
}), $t = (t, r, s) => {
  let n = [...t];
  if (s && s.trim()) {
    const l = s.toLowerCase();
    n = n.filter(
      (a) => Object.values(a).some(
        (o) => String(o).toLowerCase().includes(l)
      )
    );
  }
  return Object.entries(r).forEach(([l, a]) => {
    a != null && a !== "" && (n = n.filter((o) => {
      const d = pt(o, l);
      return Array.isArray(a) ? a.includes(d) : typeof a == "string" ? String(d).toLowerCase().includes(a.toLowerCase()) : d === a;
    }));
  }), n;
}, pt = (t, r) => r.split(".").reduce((s, n) => s == null ? void 0 : s[n], t), Pt = (t, r, s) => {
  const n = (r - 1) * s, l = n + s;
  return {
    data: t.slice(n, l),
    total: t.length,
    totalPages: Math.ceil(t.length / s)
  };
}, Me = (t, r) => r ? r(t) : typeof t == "object" && t !== null && "id" in t ? String(t.id) : JSON.stringify(t), At = (t, r, s = "checkbox") => s === "radio" ? [r] : t.indexOf(r) > -1 ? t.filter((l) => l !== r) : [...t, r], zt = (t, r, s, n, l = 5) => {
  const a = Math.floor(n / r), o = Math.min(
    t - 1,
    Math.ceil((n + s) / r)
  ), d = Math.max(0, a - l), i = Math.min(t - 1, o + l);
  return {
    start: d,
    end: i,
    visibleStart: a,
    visibleEnd: o,
    totalHeight: t * r,
    offsetY: d * r
  };
}, ts = (t, r, s) => r !== t ? "none" : s === "asc" ? "ascending" : "descending", Dt = (t, r) => {
  let s;
  return (...n) => {
    clearTimeout(s), s = setTimeout(() => t(...n), r);
  };
}, rs = (t, r) => t == null ? "" : r.render ? String(t) : t instanceof Date ? t.toLocaleDateString() : typeof t == "number" ? t.toLocaleString() : typeof t == "boolean" ? t ? "Yes" : "No" : String(t), Sa = ({
  activities: t,
  loading: r = !1,
  context: s = "neutral",
  permissions: n = [],
  grouped: l = !1,
  onActivityClick: a,
  onUserClick: o,
  realTimeUpdates: d = !1,
  onNewActivity: i,
  userFilters: h = [],
  typeFilters: x = [],
  onFilterChange: m,
  infiniteScroll: y = !1,
  onLoadMore: T,
  hasMore: E = !1,
  maxHeight: S,
  showAvatars: w = !0,
  showTimestamps: z = !0,
  className: R = "",
  style: C
}) => {
  const [f, u] = I({}), j = xt(s), P = de(() => {
    let v = t;
    return f.users && f.users.length > 0 && (v = v.filter(
      (A) => f.users.includes(A.user.id)
    )), f.types && f.types.length > 0 && (v = v.filter(
      (A) => f.types.includes(A.type)
    )), f.dateRange && (v = v.filter((A) => {
      const b = new Date(A.timestamp);
      return b >= f.dateRange.start && b <= f.dateRange.end;
    })), f.unreadOnly && (v = v.filter((A) => !A.read)), v;
  }, [t, f]), k = de(() => {
    if (!l)
      return { "All Activities": P };
    const v = {};
    return P.forEach((A) => {
      const b = new Date(A.timestamp), _ = /* @__PURE__ */ new Date(), H = new Date(_);
      H.setDate(H.getDate() - 1);
      let $;
      b.toDateString() === _.toDateString() ? $ = "Today" : b.toDateString() === H.toDateString() ? $ = "Yesterday" : $ = b.toLocaleDateString(), v[$] || (v[$] = []), v[$].push(A);
    }), Object.keys(v).forEach((A) => {
      v[A].sort((b, _) => new Date(_.timestamp).getTime() - new Date(b.timestamp).getTime());
    }), v;
  }, [P, l]), g = D((v) => {
    u(v), m == null || m(v);
  }, [m]), M = D((v) => {
    a == null || a(v);
  }, [a]), B = D((v) => {
    o == null || o(v);
  }, [o]);
  ze.useEffect(() => {
    if (d && i)
      return () => {
      };
  }, [d, i]);
  const W = (v) => {
    const A = {
      create: "➕",
      update: "✏️",
      delete: "🗑️",
      comment: "💬",
      like: "👍",
      share: "🔗",
      view: "👁️",
      download: "⬇️",
      upload: "⬆️",
      login: "🔑",
      logout: "🚪",
      error: "❌",
      warning: "⚠️",
      success: "✅",
      info: "ℹ️"
    }, b = {
      create: "bg-green-500",
      update: "bg-blue-500",
      delete: "bg-red-500",
      comment: "bg-purple-500",
      like: "bg-pink-500",
      share: "bg-indigo-500",
      view: "bg-gray-500",
      download: "bg-teal-500",
      upload: "bg-orange-500",
      login: "bg-emerald-500",
      logout: "bg-slate-500",
      error: "bg-red-500",
      warning: "bg-yellow-500",
      success: "bg-green-500",
      info: "bg-blue-500"
    };
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `
          w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
          ${b[v.type] || j.primary}
        `,
        children: A[v.type] || "•"
      }
    );
  }, N = (v) => {
    const A = new Date(v), _ = (/* @__PURE__ */ new Date()).getTime() - A.getTime(), H = Math.floor(_ / 6e4), $ = Math.floor(H / 60), J = Math.floor($ / 24);
    return H < 1 ? "Just now" : H < 60 ? `${H}m ago` : $ < 24 ? `${$}h ago` : J < 7 ? `${J}d ago` : A.toLocaleDateString();
  }, L = (v) => !v.workspaceContext || v.workspaceContext === s || n.includes("view_all_activities") ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `
          flex gap-3 p-3 rounded-lg transition-colors
          ${a ? "cursor-pointer hover:bg-gray-50" : ""}
          ${v.read ? "" : "bg-blue-50 border-l-4 border-blue-500"}
        `,
      onClick: () => M(v),
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", children: W(v) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e.jsx("p", { className: "text-gray-900 text-sm font-medium", children: v.title }),
              v.description && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 mt-1", children: v.description }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mt-2 text-xs text-gray-500", children: [
                z && /* @__PURE__ */ e.jsx("span", { children: N(v.timestamp) }),
                w && v.user && /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1 cursor-pointer hover:text-gray-700",
                    onClick: (b) => {
                      b.stopPropagation(), B(v.user);
                    },
                    children: [
                      v.user.avatar && /* @__PURE__ */ e.jsx(
                        Ye,
                        {
                          src: v.user.avatar,
                          alt: v.user.name,
                          size: "xs"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: v.user.name }),
                      v.user.role && /* @__PURE__ */ e.jsxs("span", { className: "text-gray-400", children: [
                        "(",
                        v.user.role,
                        ")"
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "capitalize", children: v.type.replace(/_/g, " ") }),
                v.target && /* @__PURE__ */ e.jsxs("span", { children: [
                  "→ ",
                  v.target.name
                ] })
              ] })
            ] }),
            !v.read && /* @__PURE__ */ e.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1" })
          ] }),
          v.metadata && Object.keys(v.metadata).length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-2 border-t border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-2 text-xs", children: Object.entries(v.metadata).slice(0, 4).map(([b, _]) => /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("span", { className: "font-medium text-gray-600", children: [
              b.replace(/_/g, " ").replace(/\b\w/g, (H) => H.toUpperCase()),
              ":"
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "ml-1 text-gray-900", children: typeof _ == "object" ? JSON.stringify(_) : String(_) })
          ] }, b)) }) })
        ] })
      ]
    },
    v.id
  ) : null, p = (v, A) => /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
    l && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-3 px-3", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "font-semibold text-gray-900 text-sm", children: v }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-500", children: [
        A.length,
        " activit",
        A.length !== 1 ? "ies" : "y"
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-1", children: A.map((b) => L(b)) })
  ] }, v);
  return r ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center p-8", children: [
    /* @__PURE__ */ e.jsx(Ke, { size: "lg" }),
    /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-gray-600", children: "Loading activities..." })
  ] }) : P.length === 0 ? /* @__PURE__ */ e.jsx(
    We,
    {
      title: "No activities found",
      description: Object.keys(f).length > 0 ? "No activities match your current filters." : "There are no activities to display.",
      actions: Object.keys(f).length > 0 ? /* @__PURE__ */ e.jsx(ee, { onClick: () => g({}), children: "Clear filters" }) : void 0
    }
  ) : /* @__PURE__ */ e.jsxs("div", { className: `${R}`, style: C, children: [
    (h.length > 0 || x.length > 0) && /* @__PURE__ */ e.jsxs("div", { className: "mb-4 p-3 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ e.jsx("h4", { className: "font-medium text-gray-900 mb-2 text-sm", children: "Filters" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        h.length > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600 mb-1 block", children: "Users:" }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: h.map((v) => {
            var A;
            return /* @__PURE__ */ e.jsx(
              ee,
              {
                variant: (A = f.users) != null && A.includes(v.id) ? "primary" : "outline",
                size: "sm",
                onClick: () => {
                  const b = f.users || [], H = b.includes(v.id) ? b.filter(($) => $ !== v.id) : [...b, v.id];
                  g({
                    ...f,
                    users: H.length > 0 ? H : void 0
                  });
                },
                children: v.name
              },
              v.id
            );
          }) })
        ] }),
        x.length > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600 mb-1 block", children: "Types:" }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: x.map((v) => {
            var A;
            return /* @__PURE__ */ e.jsx(
              ee,
              {
                variant: (A = f.types) != null && A.includes(v) ? "primary" : "outline",
                size: "sm",
                onClick: () => {
                  const b = f.types || [], H = b.includes(v) ? b.filter(($) => $ !== v) : [...b, v];
                  g({
                    ...f,
                    types: H.length > 0 ? H : void 0
                  });
                },
                children: v.replace(/_/g, " ").replace(/\b\w/g, (b) => b.toUpperCase())
              },
              v
            );
          }) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: f.unreadOnly ? "primary" : "outline",
            size: "sm",
            onClick: () => {
              g({
                ...f,
                unreadOnly: !f.unreadOnly
              });
            },
            children: "Unread only"
          }
        ) })
      ] }),
      Object.keys(f).length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-2 border-t border-gray-200", children: /* @__PURE__ */ e.jsx(
        ee,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => g({}),
          children: "Clear all filters"
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `
          bg-white border border-gray-200 rounded-lg
          ${S ? "overflow-y-auto" : ""}
        `,
        style: { maxHeight: S },
        children: [
          Object.entries(k).map(
            ([v, A]) => p(v, A)
          ),
          y && E && /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center", children: /* @__PURE__ */ e.jsx(
            ee,
            {
              variant: "outline",
              onClick: T,
              disabled: r,
              children: r ? "Loading..." : "Load more"
            }
          ) })
        ]
      }
    ),
    d && /* @__PURE__ */ e.jsxs("div", { className: "mt-3 flex items-center justify-center text-xs text-gray-500", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" }),
      "Live updates enabled"
    ] })
  ] });
}, Ea = ({
  data: t,
  loading: r = !1,
  context: s = "neutral",
  permissions: n = [],
  columns: l = "auto",
  gap: a = "md",
  itemHeight: o = "auto",
  renderCard: d,
  minCardWidth: i = 280,
  maxCardWidth: h = 400,
  aspectRatio: x,
  pagination: m,
  filtering: y,
  selection: T,
  virtualScrolling: E,
  sortable: S = !1,
  sortOptions: w = [],
  onSort: z,
  draggable: R = !1,
  onDragStart: C,
  onDragEnd: f,
  masonry: u = !1,
  masonryBreakpoints: j,
  onItemClick: P,
  onItemDoubleClick: k,
  infiniteScroll: g = !1,
  onLoadMore: M,
  hasMore: B = !1,
  responsive: W = !0,
  className: N = "",
  style: L
}) => {
  const [p, v] = I(""), [A, b] = I((T == null ? void 0 : T.selectedKeys) || []), [_, H] = I((m == null ? void 0 : m.page) || 1), [$, J] = I((m == null ? void 0 : m.pageSize) || 12), [X, le] = I(0), [he, Ee] = I(""), [re, fe] = I("asc"), [ge, je] = I(null), U = Ae(null), q = Ae(null), we = Ae(null), Pe = xt(s), De = D(
    Dt((V) => {
      v(V), H(1), y != null && y.onSearch && y.onSearch(V);
    }, 300),
    [y]
  ), ue = de(() => {
    let V = [...t];
    if ((y == null ? void 0 : y.enabled) !== !1 && p && (V = $t(V, {}, p)), he && z ? z(he, re) : he && V.sort((Q, be) => {
      const ke = Q[he], _e = be[he];
      return ke < _e ? re === "asc" ? -1 : 1 : ke > _e ? re === "asc" ? 1 : -1 : 0;
    }), (m == null ? void 0 : m.enabled) !== !1 && !(E != null && E.enabled) && !g) {
      const Q = Pt(V, _, $);
      return {
        data: Q.data,
        total: Q.total,
        totalPages: Q.totalPages,
        filteredTotal: V.length
      };
    }
    return {
      data: V,
      total: V.length,
      totalPages: 1,
      filteredTotal: V.length
    };
  }, [t, p, he, re, _, $, y, m, E, g, z]), Oe = de(() => {
    if (typeof l == "number")
      return {
        columns: `repeat(${l}, 1fr)`,
        autoFit: !1
      };
    const V = a === "sm" ? 8 : a === "md" ? 16 : a === "lg" ? 24 : typeof a == "number" ? a : 16;
    return u ? {
      columns: "auto",
      autoFit: !0,
      gap: V,
      masonry: !0
    } : {
      columns: `repeat(auto-fit, minmax(${i}px, 1fr))`,
      autoFit: !0,
      gap: V
    };
  }, [l, a, i, u]), qe = de(() => {
    if (!(E != null && E.enabled) || !U.current || o === "auto")
      return null;
    const V = U.current.clientHeight, Q = typeof o == "number" ? o : 200;
    return zt(
      ue.data.length,
      Q,
      V,
      X,
      E.overscan
    );
  }, [E, ue.data.length, X, o]), Ie = D((V) => {
    if (!(T != null && T.enabled)) return;
    const Q = At(A, V, T.type);
    if (b(Q), T.onSelectionChange) {
      const be = ue.data.filter(
        (ke) => Q.includes(Me(ke, T.getRowKey))
      );
      T.onSelectionChange(Q, be);
    }
  }, [A, T, ue.data]), st = D((V, Q) => {
    P == null || P(V, Q);
  }, [P]), at = D((V, Q) => {
    k == null || k(V, Q);
  }, [k]), Re = D((V) => {
    const Q = he === V && re === "asc" ? "desc" : "asc";
    Ee(V), fe(Q);
  }, [he, re]), nt = D((V, Q) => {
    R && (je({ item: V, index: Q }), C == null || C(V, Q));
  }, [R, C]), lt = D((V, Q, be) => {
    R && (je(null), f == null || f(V, Q, be));
  }, [R, f]), He = D((V) => {
    E != null && E.enabled && (le(V.currentTarget.scrollTop), E.onScroll && E.onScroll(V.currentTarget.scrollTop));
  }, [E]);
  ze.useEffect(() => {
    if (!g || !we.current || !B) return;
    const V = new IntersectionObserver(
      (Q) => {
        Q[0].isIntersecting && M && M();
      },
      { threshold: 0.1 }
    );
    return V.observe(we.current), q.current = V, () => {
      q.current && q.current.disconnect();
    };
  }, [g, B, M]);
  const Je = typeof a == "string" ? {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6"
  }[a] : "", O = (V, Q) => {
    const be = Me(V, T == null ? void 0 : T.getRowKey), ke = A.includes(be), _e = (ge == null ? void 0 : ge.item) === V;
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `
          ${W ? "w-full" : ""}
          ${P ? "cursor-pointer" : ""}
          ${_e ? "opacity-50" : ""}
          ${ke ? "ring-2 ring-blue-500" : ""}
          transition-all duration-150 hover:scale-[1.02]
        `,
        style: {
          height: o === "auto" ? "auto" : o,
          maxWidth: h,
          aspectRatio: x ? `${x}` : void 0
        },
        draggable: R,
        onDragStart: () => nt(V, Q),
        onDragEnd: () => lt(V, (ge == null ? void 0 : ge.index) || 0, Q),
        onClick: () => st(V, Q),
        onDoubleClick: () => at(V, Q),
        children: /* @__PURE__ */ e.jsxs("div", { className: "relative h-full", children: [
          (T == null ? void 0 : T.enabled) && /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 right-2 z-10", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: T.type === "radio" ? "radio" : "checkbox",
              checked: ke,
              onChange: () => Ie(be),
              className: "w-4 h-4",
              onClick: (it) => it.stopPropagation()
            }
          ) }),
          d(V, Q, s)
        ] })
      },
      be
    );
  }, ae = () => {
    if (!qe) return null;
    const { start: V, end: Q, totalHeight: be, offsetY: ke } = qe, _e = ue.data.slice(V, Q + 1);
    return /* @__PURE__ */ e.jsx("div", { style: { height: be, position: "relative" }, children: /* @__PURE__ */ e.jsx("div", { style: { transform: `translateY(${ke}px)` }, children: /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${Je}`,
        style: {
          gridTemplateColumns: Oe.columns,
          gap: typeof a == "number" ? `${a}px` : void 0
        },
        children: _e.map((it, ct) => O(it, V + ct))
      }
    ) }) });
  }, me = () => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5",
      style: {
        columnGap: typeof a == "number" ? `${a}px` : void 0
      },
      children: ue.data.map((V, Q) => /* @__PURE__ */ e.jsx("div", { className: "break-inside-avoid mb-4", children: O(V, Q) }, Me(V, T == null ? void 0 : T.getRowKey)))
    }
  ), Ne = () => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `grid ${Je}`,
      style: {
        gridTemplateColumns: Oe.columns,
        gap: typeof a == "number" ? `${a}px` : void 0
      },
      children: ue.data.map((V, Q) => O(V, Q))
    }
  );
  return r ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center p-8", children: [
    /* @__PURE__ */ e.jsx(Ke, { size: "lg" }),
    /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-gray-600", children: "Loading..." })
  ] }) : ue.data.length === 0 ? /* @__PURE__ */ e.jsx(
    We,
    {
      title: "No items found",
      description: p ? "No results found for your search." : "There are no items to display.",
      actions: p ? /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => v(""),
          className: `px-4 py-2 rounded-md ${Pe.primary} hover:opacity-90 transition-opacity`,
          children: "Clear search"
        }
      ) : void 0
    }
  ) : /* @__PURE__ */ e.jsxs("div", { className: `${N}`, style: L, children: [
    ((y == null ? void 0 : y.enabled) !== !1 || S || A.length > 0) && /* @__PURE__ */ e.jsx("div", { className: "mb-6 space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4 flex-1", children: [
        (y == null ? void 0 : y.enabled) !== !1 && /* @__PURE__ */ e.jsx("div", { className: "flex-1 max-w-md", children: /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: (y == null ? void 0 : y.searchPlaceholder) || "Search items...",
            onChange: (V) => De(V.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          }
        ) }),
        S && w.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Sort by:" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: he,
              onChange: (V) => Re(V.target.value),
              className: "px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", children: "Default" }),
                w.map((V) => /* @__PURE__ */ e.jsx("option", { value: V.key, children: V.label }, V.key))
              ]
            }
          ),
          he && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => fe(re === "asc" ? "desc" : "asc"),
              className: "p-2 text-gray-500 hover:text-gray-700",
              title: `Sort ${re === "asc" ? "descending" : "ascending"}`,
              children: re === "asc" ? "↑" : "↓"
            }
          )
        ] })
      ] }),
      A.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-600", children: [
        A.length,
        " selected"
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: U,
        className: `
          ${E != null && E.enabled ? "overflow-auto" : ""}
          ${W ? "w-full" : ""}
        `,
        style: {
          maxHeight: E != null && E.enabled ? 600 : void 0
        },
        onScroll: He,
        children: [
          E != null && E.enabled ? ae() : u ? me() : Ne(),
          g && B && /* @__PURE__ */ e.jsx("div", { ref: we, className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(Ke, { size: "md" }) })
        ]
      }
    ),
    (m == null ? void 0 : m.enabled) !== !1 && !(E != null && E.enabled) && !g && ue.totalPages > 1 && /* @__PURE__ */ e.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-700", children: [
        "Showing ",
        (_ - 1) * $ + 1,
        " to ",
        Math.min(_ * $, ue.filteredTotal),
        " of ",
        ue.filteredTotal,
        " results"
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => H(Math.max(1, _ - 1)),
            disabled: _ === 1,
            className: `
                px-3 py-1 text-sm border rounded-md
                ${_ === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"}
              `,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-gray-700 px-3", children: [
          "Page ",
          _,
          " of ",
          ue.totalPages
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => H(Math.min(ue.totalPages, _ + 1)),
            disabled: _ === ue.totalPages,
            className: `
                px-3 py-1 text-sm border rounded-md
                ${_ === ue.totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"}
              `,
            children: "Next"
          }
        )
      ] })
    ] })
  ] });
}, Ta = ({
  data: t,
  loading: r = !1,
  context: s = "neutral",
  permissions: n = [],
  columns: l = "auto",
  gap: a = "md",
  itemHeight: o = "auto",
  cardComponent: d,
  pagination: i,
  filtering: h,
  selection: x,
  virtualScrolling: m,
  onItemClick: y,
  onItemDoubleClick: T,
  infiniteScroll: E = !1,
  onLoadMore: S,
  hasMore: w = !1,
  responsive: z = !0,
  className: R = "",
  style: C
}) => {
  const [f, u] = I(""), [j, P] = I((x == null ? void 0 : x.selectedKeys) || []), [k, g] = I((i == null ? void 0 : i.page) || 1), [M, B] = I((i == null ? void 0 : i.pageSize) || 12), [W, N] = I(0), L = Ae(null), p = Ae(null), v = Ae(null), A = xt(s), b = D(
    Dt((U) => {
      u(U), g(1), h != null && h.onSearch && h.onSearch(U);
    }, 300),
    [h]
  ), _ = de(() => {
    let U = [...t];
    if ((h == null ? void 0 : h.enabled) !== !1 && f && (U = $t(U, {}, f)), (i == null ? void 0 : i.enabled) !== !1 && !(m != null && m.enabled) && !E) {
      const q = Pt(U, k, M);
      return {
        data: q.data,
        total: q.total,
        totalPages: q.totalPages,
        filteredTotal: U.length
      };
    }
    return {
      data: U,
      total: U.length,
      totalPages: 1,
      filteredTotal: U.length
    };
  }, [t, f, k, M, h, i, m, E]), H = de(() => {
    if (!(m != null && m.enabled) || !L.current || o === "auto")
      return null;
    const U = L.current.clientHeight, q = typeof o == "number" ? o : 200;
    return zt(
      _.data.length,
      q,
      U,
      W,
      m.overscan
    );
  }, [m, _.data.length, W, o]), $ = de(() => {
    if (typeof l == "number")
      return {
        columns: `repeat(${l}, 1fr)`,
        autoFit: !1
      };
    const U = 280, q = a === "sm" ? 8 : a === "md" ? 16 : a === "lg" ? 24 : typeof a == "number" ? a : 16;
    return {
      columns: `repeat(auto-fit, minmax(${U}px, 1fr))`,
      autoFit: !0,
      gap: q
    };
  }, [l, a]), J = D((U) => {
    if (!(x != null && x.enabled)) return;
    const q = At(j, U, x.type);
    if (P(q), x.onSelectionChange) {
      const we = _.data.filter(
        (Pe) => q.includes(Me(Pe, x.getRowKey))
      );
      x.onSelectionChange(q, we);
    }
  }, [j, x, _.data]), X = D((U, q) => {
    y == null || y(U, q);
  }, [y]), le = D((U, q) => {
    T == null || T(U, q);
  }, [T]), he = D((U) => {
    m != null && m.enabled && (N(U.currentTarget.scrollTop), m.onScroll && m.onScroll(U.currentTarget.scrollTop));
  }, [m]);
  ze.useEffect(() => {
    if (!E || !v.current || !w) return;
    const U = new IntersectionObserver(
      (q) => {
        q[0].isIntersecting && S && S();
      },
      { threshold: 0.1 }
    );
    return U.observe(v.current), p.current = U, () => {
      p.current && p.current.disconnect();
    };
  }, [E, w, S]);
  const re = typeof a == "string" ? {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6"
  }[a] : "", fe = (U, q) => {
    const we = Me(U, x == null ? void 0 : x.getRowKey), Pe = j.includes(we);
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `
          ${z ? "w-full" : ""}
          ${y ? "cursor-pointer" : ""}
          transition-transform duration-150 hover:scale-[1.02]
        `,
        onClick: () => X(U, q),
        onDoubleClick: () => le(U, q),
        style: {
          height: o === "auto" ? "auto" : o
        },
        children: /* @__PURE__ */ e.jsx(
          d,
          {
            item: U,
            context: s,
            selected: Pe,
            onSelect: x != null && x.enabled ? () => J(we) : void 0
          }
        )
      },
      we
    );
  }, ge = () => {
    if (!H) return null;
    const { start: U, end: q, totalHeight: we, offsetY: Pe } = H, De = _.data.slice(U, q + 1);
    return /* @__PURE__ */ e.jsx("div", { style: { height: we, position: "relative" }, children: /* @__PURE__ */ e.jsx("div", { style: { transform: `translateY(${Pe}px)` }, children: /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${re}`,
        style: {
          gridTemplateColumns: $.columns,
          gap: typeof a == "number" ? `${a}px` : void 0
        },
        children: De.map((ue, Oe) => fe(ue, U + Oe))
      }
    ) }) });
  }, je = () => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `grid ${re}`,
      style: {
        gridTemplateColumns: $.columns,
        gap: typeof a == "number" ? `${a}px` : void 0
      },
      children: _.data.map((U, q) => fe(U, q))
    }
  );
  return r ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center p-8", children: [
    /* @__PURE__ */ e.jsx(Ke, { size: "lg" }),
    /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-gray-600", children: "Loading..." })
  ] }) : _.data.length === 0 ? /* @__PURE__ */ e.jsx(
    We,
    {
      title: "No items found",
      description: f ? "No results found for your search." : "There are no items to display.",
      actions: f ? /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => u(""),
          className: `px-4 py-2 rounded-md ${A.primary} hover:opacity-90 transition-opacity`,
          children: "Clear search"
        }
      ) : void 0
    }
  ) : /* @__PURE__ */ e.jsxs("div", { className: `${R}`, style: C, children: [
    (h == null ? void 0 : h.enabled) !== !1 && /* @__PURE__ */ e.jsx("div", { className: "mb-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex-1 max-w-md", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          placeholder: (h == null ? void 0 : h.searchPlaceholder) || "Search items...",
          onChange: (U) => b(U.target.value),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        }
      ) }),
      j.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-600", children: [
        j.length,
        " selected"
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: L,
        className: `
          ${m != null && m.enabled ? "overflow-auto" : ""}
          ${z ? "w-full" : ""}
        `,
        style: {
          maxHeight: m != null && m.enabled ? 600 : void 0
        },
        onScroll: he,
        children: [
          m != null && m.enabled ? ge() : je(),
          E && w && /* @__PURE__ */ e.jsx("div", { ref: v, className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(Ke, { size: "md" }) })
        ]
      }
    ),
    (i == null ? void 0 : i.enabled) !== !1 && !(m != null && m.enabled) && !E && _.totalPages > 1 && /* @__PURE__ */ e.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-700", children: [
        "Showing ",
        (k - 1) * M + 1,
        " to ",
        Math.min(k * M, _.filteredTotal),
        " of ",
        _.filteredTotal,
        " results"
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => g(Math.max(1, k - 1)),
            disabled: k === 1,
            className: `
                px-3 py-1 text-sm border rounded-md
                ${k === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"}
              `,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-gray-700 px-3", children: [
          "Page ",
          k,
          " of ",
          _.totalPages
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => g(Math.min(_.totalPages, k + 1)),
            disabled: k === _.totalPages,
            className: `
                px-3 py-1 text-sm border rounded-md
                ${k === _.totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"}
              `,
            children: "Next"
          }
        )
      ] })
    ] })
  ] });
}, Ra = ({
  data: t,
  columns: r,
  loading: s = !1,
  context: n = "neutral",
  permissions: l = [],
  pagination: a,
  sorting: o,
  filtering: d,
  selection: i,
  bulkActions: h = [],
  virtualScrolling: x,
  onRowClick: m,
  onRowDoubleClick: y,
  onCellClick: T,
  size: E = "md",
  variant: S = "default",
  responsive: w = !0,
  stickyHeader: z = !1,
  maxHeight: R,
  expandable: C,
  exportable: f = !1,
  onExport: u,
  ariaLabel: j,
  ariaLabelledBy: P,
  className: k = "",
  style: g
}) => {
  const [M, B] = I(o == null ? void 0 : o.field), [W, N] = I((o == null ? void 0 : o.direction) || "asc"), [L, p] = I(""), [v, A] = I({}), [b, _] = I((i == null ? void 0 : i.selectedKeys) || []), [H, $] = I((C == null ? void 0 : C.expandedRowKeys) || []), [J, X] = I((a == null ? void 0 : a.page) || 1), [le, he] = I((a == null ? void 0 : a.pageSize) || 10), [Ee, re] = I(0), fe = Ae(null), ge = Ae(null), je = xt(n), U = de(() => Zr(r, l, n), [r, l, n]), q = de(() => {
    let O = [...t];
    if ((d == null ? void 0 : d.enabled) !== !1 && (O = $t(O, v, L)), M && (o != null && o.onSort) ? o.onSort(M, W) : M && (O = es(O, M, W)), (a == null ? void 0 : a.enabled) !== !1 && !(x != null && x.enabled)) {
      const ae = Pt(O, J, le);
      return {
        data: ae.data,
        total: ae.total,
        totalPages: ae.totalPages,
        filteredTotal: O.length
      };
    }
    return {
      data: O,
      total: O.length,
      totalPages: 1,
      filteredTotal: O.length
    };
  }, [t, v, L, M, W, J, le, d, o, a, x]), we = de(() => {
    if (!(x != null && x.enabled) || !fe.current)
      return null;
    const O = fe.current.clientHeight, ae = x.itemHeight || 48;
    return zt(
      q.data.length,
      ae,
      O,
      Ee,
      x.overscan
    );
  }, [x, q.data.length, Ee]), Pe = D(
    Dt((O) => {
      p(O), X(1), d != null && d.onSearch && d.onSearch(O);
    }, 300),
    [d]
  ), De = D((O) => {
    const ae = U.find((Ne) => String(Ne.key) === O);
    if (!(ae != null && ae.sortable)) return;
    const me = M === O && W === "asc" ? "desc" : "asc";
    B(O), N(me), o != null && o.onSort && o.onSort(O, me);
  }, [U, M, W, o]), ue = D((O) => {
    if (!(i != null && i.enabled)) return;
    const ae = At(b, O, i.type);
    if (_(ae), i.onSelectionChange) {
      const me = q.data.filter(
        (Ne) => ae.includes(Me(Ne, i.getRowKey))
      );
      i.onSelectionChange(ae, me);
    }
  }, [b, i, q.data]), Oe = D(() => {
    if (!(i != null && i.enabled) || i.type === "radio") return;
    const O = q.data.map((me) => Me(me, i.getRowKey)), ae = b.length === O.length ? [] : O;
    if (_(ae), i.onSelectionChange) {
      const me = ae.length > 0 ? q.data : [];
      i.onSelectionChange(ae, me);
    }
  }, [b, i, q.data]), qe = D((O) => {
    const ae = h.find((Ne) => Ne.id === O);
    if (!ae) return;
    const me = q.data.filter(
      (Ne) => b.includes(Me(Ne, i == null ? void 0 : i.getRowKey))
    );
    ae.confirmMessage && !window.confirm(ae.confirmMessage) || ae.onClick(me);
  }, [h, q.data, b, i]), Ie = D(() => {
    if (!f || !u) return;
    const O = b.length > 0 ? q.data.filter((ae) => b.includes(Me(ae, i == null ? void 0 : i.getRowKey))) : q.data;
    u(O);
  }, [f, u, q.data, b, i]), st = D((O) => {
    x != null && x.enabled && (re(O.currentTarget.scrollTop), x.onScroll && x.onScroll(O.currentTarget.scrollTop));
  }, [x]), at = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }, Re = {
    sm: "px-2 py-1",
    md: "px-3 py-2",
    lg: "px-4 py-3"
  }, nt = {
    default: "",
    striped: "[&>tbody>tr:nth-child(odd)]:bg-gray-50",
    bordered: "border border-gray-200"
  }, lt = () => /* @__PURE__ */ e.jsx(
    "thead",
    {
      ref: ge,
      className: `bg-gray-50 ${z ? "sticky top-0 z-10" : ""}`,
      children: /* @__PURE__ */ e.jsxs("tr", { children: [
        (i == null ? void 0 : i.enabled) && /* @__PURE__ */ e.jsx("th", { className: `${Re[E]} w-12`, children: i.type === "checkbox" && i.selectAll !== !1 && /* @__PURE__ */ e.jsx(
          Wt,
          {
            checked: b.length === q.data.length && q.data.length > 0,
            onChange: Oe,
            "aria-label": "Select all rows"
          }
        ) }),
        U.map((O) => /* @__PURE__ */ e.jsx(
          "th",
          {
            className: `
              ${Re[E]}
              text-left font-medium text-gray-900
              ${O.sortable ? "cursor-pointer hover:bg-gray-100" : ""}
              ${O.align === "center" ? "text-center" : ""}
              ${O.align === "right" ? "text-right" : ""}
            `,
            style: {
              width: O.width,
              minWidth: O.minWidth,
              maxWidth: O.maxWidth
            },
            onClick: () => O.sortable && De(String(O.key)),
            "aria-sort": ts(String(O.key), M, W),
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
              O.headerRender ? O.headerRender() : O.title,
              O.sortable && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ e.jsx(
                  "span",
                  {
                    className: `text-xs ${M === String(O.key) && W === "asc" ? "text-blue-600" : "text-gray-400"}`,
                    children: "▲"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "span",
                  {
                    className: `text-xs -mt-1 ${M === String(O.key) && W === "desc" ? "text-blue-600" : "text-gray-400"}`,
                    children: "▼"
                  }
                )
              ] }),
              O.filterable && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-400", children: "🔍" })
            ] })
          },
          String(O.key)
        )),
        C && /* @__PURE__ */ e.jsx("th", { className: `${Re[E]} w-12`, children: /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Expand" }) })
      ] })
    }
  ), He = (O, ae) => {
    const me = Me(O, i == null ? void 0 : i.getRowKey), Ne = b.includes(me), V = H.includes(me);
    return /* @__PURE__ */ e.jsxs(ze.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        "tr",
        {
          className: `
            ${Ne ? je.secondary : "hover:bg-gray-50"}
            ${m ? "cursor-pointer" : ""}
            transition-colors duration-150
          `,
          onClick: () => m == null ? void 0 : m(O, ae),
          onDoubleClick: () => y == null ? void 0 : y(O, ae),
          children: [
            (i == null ? void 0 : i.enabled) && /* @__PURE__ */ e.jsx("td", { className: Re[E], children: /* @__PURE__ */ e.jsx(
              Wt,
              {
                checked: Ne,
                onChange: () => ue(me),
                "aria-label": `Select row ${ae + 1}`
              }
            ) }),
            U.map((Q) => {
              const be = pt(O, String(Q.key));
              return /* @__PURE__ */ e.jsx(
                "td",
                {
                  className: `
                  ${Re[E]}
                  ${Q.align === "center" ? "text-center" : ""}
                  ${Q.align === "right" ? "text-right" : ""}
                  ${T ? "cursor-pointer" : ""}
                `,
                  onClick: (ke) => {
                    ke.stopPropagation(), T == null || T(be, O, Q);
                  },
                  children: Q.render ? Q.render(be, O, ae) : rs(be, Q)
                },
                String(Q.key)
              );
            }),
            C && /* @__PURE__ */ e.jsx("td", { className: Re[E], children: /* @__PURE__ */ e.jsx(
              ee,
              {
                variant: "ghost",
                size: "sm",
                onClick: (Q) => {
                  var ke;
                  Q.stopPropagation();
                  const be = H.includes(me) ? H.filter((_e) => _e !== me) : [...H, me];
                  $(be), (ke = C.onExpand) == null || ke.call(C, !V, O);
                },
                "aria-label": V ? "Collapse row" : "Expand row",
                children: V ? /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: "▲" }) : /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: "▼" })
              }
            ) })
          ]
        }
      ),
      C && V && /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: U.length + (i != null && i.enabled ? 1 : 0) + 1,
          className: "p-0",
          children: /* @__PURE__ */ e.jsx("div", { className: "bg-gray-50 p-4", children: C.expandedRowRender(O) })
        }
      ) })
    ] }, me);
  }, ot = () => {
    if (!we) return null;
    const { start: O, end: ae, totalHeight: me, offsetY: Ne } = we, V = q.data.slice(O, ae + 1);
    return /* @__PURE__ */ e.jsxs("tbody", { style: { height: me }, children: [
      /* @__PURE__ */ e.jsx("tr", { style: { height: Ne }, children: /* @__PURE__ */ e.jsx("td", { colSpan: U.length + (i != null && i.enabled ? 1 : 0) + (C ? 1 : 0) }) }),
      V.map((Q, be) => He(Q, O + be))
    ] });
  }, Je = () => /* @__PURE__ */ e.jsx("tbody", { children: q.data.map((O, ae) => He(O, ae)) });
  return s ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center p-8", children: [
    /* @__PURE__ */ e.jsx(Ke, { size: "lg" }),
    /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-gray-600", children: "Loading..." })
  ] }) : q.data.length === 0 ? /* @__PURE__ */ e.jsx(
    We,
    {
      title: "No data available",
      description: L ? "No results found for your search." : "There are no items to display.",
      actions: L ? /* @__PURE__ */ e.jsx(ee, { onClick: () => p(""), children: "Clear search" }) : void 0
    }
  ) : /* @__PURE__ */ e.jsxs("div", { className: `${k}`, style: g, children: [
    ((d == null ? void 0 : d.enabled) !== !1 || h.length > 0 || f) && /* @__PURE__ */ e.jsxs("div", { className: "mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex flex-1 items-center gap-4", children: (d == null ? void 0 : d.searchable) !== !1 && /* @__PURE__ */ e.jsx("div", { className: "flex-1 max-w-sm", children: /* @__PURE__ */ e.jsx(
        ar,
        {
          name: "search",
          placeholder: (d == null ? void 0 : d.searchPlaceholder) || "Search...",
          onChange: (O) => Pe(O.target.value),
          className: "w-full"
        }
      ) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        b.length > 0 && h.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-gray-600", children: [
            b.length,
            " selected"
          ] }),
          h.map((O) => /* @__PURE__ */ e.jsx(
            ee,
            {
              variant: O.variant || "secondary",
              size: "sm",
              onClick: () => qe(O.id),
              disabled: O.disabled,
              children: O.label
            },
            O.id
          ))
        ] }),
        f && /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "outline",
            size: "sm",
            onClick: Ie,
            children: "Export"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: fe,
        className: `
          overflow-auto border border-gray-200 rounded-lg
          ${R ? "" : "max-h-96"}
        `,
        style: { maxHeight: R },
        onScroll: st,
        children: /* @__PURE__ */ e.jsxs(
          "table",
          {
            className: `
            min-w-full divide-y divide-gray-200
            ${at[E]}
            ${nt[S]}
          `,
            "aria-label": j,
            "aria-labelledby": P,
            children: [
              lt(),
              x != null && x.enabled ? ot() : Je()
            ]
          }
        )
      }
    ),
    (a == null ? void 0 : a.enabled) !== !1 && !(x != null && x.enabled) && q.totalPages > 1 && /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-700", children: [
        "Showing ",
        (J - 1) * le + 1,
        " to ",
        Math.min(J * le, q.filteredTotal),
        " of ",
        q.filteredTotal,
        " results"
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "outline",
            size: "sm",
            onClick: () => X(Math.max(1, J - 1)),
            disabled: J === 1,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-gray-700", children: [
          "Page ",
          J,
          " of ",
          q.totalPages
        ] }),
        /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "outline",
            size: "sm",
            onClick: () => X(Math.min(q.totalPages, J + 1)),
            disabled: J === q.totalPages,
            children: "Next"
          }
        )
      ] })
    ] })
  ] });
}, Fa = ({
  events: t,
  loading: r = !1,
  context: s = "neutral",
  permissions: n = [],
  groupBy: l = "date",
  filtering: a = [],
  onEventClick: o,
  onFilterChange: d,
  realTimeUpdates: i = !1,
  onNewEvent: h,
  responsive: x = !0,
  maxHeight: m,
  showTime: y = !0,
  showUser: T = !0,
  className: E = "",
  style: S
}) => {
  const [w, z] = I(a), [R, C] = I(/* @__PURE__ */ new Set()), f = xt(s), u = de(() => w.length === 0 ? t : t.filter((N) => w.every((L) => {
    var p;
    switch (L.type) {
      case "user":
        return ((p = N.user) == null ? void 0 : p.id) === L.value;
      case "type":
        return N.type === L.value;
      case "status":
        return N.status === L.value;
      case "date":
        const v = new Date(N.timestamp), A = new Date(L.value);
        return v.toDateString() === A.toDateString();
      default:
        return !0;
    }
  })), [t, w]), j = de(() => {
    if (l === "none")
      return { "All Events": u };
    const N = {};
    return u.forEach((L) => {
      var v;
      let p;
      switch (l) {
        case "date":
          p = new Date(L.timestamp).toDateString();
          break;
        case "type":
          p = L.type;
          break;
        case "user":
          p = ((v = L.user) == null ? void 0 : v.name) || "Unknown User";
          break;
        default:
          p = "All Events";
      }
      N[p] || (N[p] = []), N[p].push(L);
    }), Object.keys(N).forEach((L) => {
      N[L].sort((p, v) => new Date(v.timestamp).getTime() - new Date(p.timestamp).getTime());
    }), N;
  }, [u, l]), P = D((N) => {
    z(N), d == null || d(N);
  }, [d]), k = D((N) => {
    o == null || o(N);
  }, [o]), g = D((N) => {
    const L = new Set(R);
    L.has(N) ? L.delete(N) : L.add(N), C(L);
  }, [R]);
  ze.useEffect(() => {
    if (i && h)
      return () => {
      };
  }, [i, h]);
  const M = (N) => {
    if (N.icon)
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `
            w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
            ${N.color ? "" : f.primary}
          `,
          style: { backgroundColor: N.color },
          children: N.icon
        }
      );
    const L = {
      pending: "bg-yellow-500",
      completed: "bg-green-500",
      failed: "bg-red-500",
      cancelled: "bg-gray-500"
    }, p = {
      pending: "⏳",
      completed: "✓",
      failed: "✗",
      cancelled: "⊘"
    };
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `
          w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
          ${N.status ? L[N.status] : f.primary}
        `,
        children: N.status ? p[N.status] : "•"
      }
    );
  }, B = (N, L) => !N.workspaceContext || N.workspaceContext === s || n.includes("view_all_events") ? /* @__PURE__ */ e.jsxs("div", { className: "relative flex gap-4 pb-6", children: [
    !L && /* @__PURE__ */ e.jsx("div", { className: "absolute left-4 top-8 w-0.5 h-full bg-gray-200" }),
    /* @__PURE__ */ e.jsx("div", { className: "relative z-10", children: M(N) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `
              bg-white border border-gray-200 rounded-lg p-4 shadow-sm
              ${o ? "cursor-pointer hover:shadow-md transition-shadow" : ""}
            `,
        onClick: () => k(N),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between gap-4 mb-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e.jsx("h4", { className: "font-medium text-gray-900 truncate", children: N.title }),
              N.description && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 mt-1", children: N.description })
            ] }),
            N.status && /* @__PURE__ */ e.jsx(
              Ve,
              {
                variant: N.status === "completed" ? "success" : N.status === "failed" ? "error" : N.status === "cancelled" ? "secondary" : "warning",
                size: "sm",
                children: N.status
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4 text-xs text-gray-500", children: [
            y && /* @__PURE__ */ e.jsx("span", { children: new Date(N.timestamp).toLocaleString() }),
            T && N.user && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              N.user.avatar && /* @__PURE__ */ e.jsx(
                Ye,
                {
                  src: N.user.avatar,
                  alt: N.user.name,
                  size: "xs"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: N.user.name })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "capitalize", children: N.type })
          ] }),
          N.metadata && Object.keys(N.metadata).length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-3 pt-3 border-t border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-2 text-xs", children: Object.entries(N.metadata).map(([v, A]) => /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("span", { className: "font-medium text-gray-600", children: [
              v.replace(/_/g, " ").replace(/\b\w/g, (b) => b.toUpperCase()),
              ":"
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "ml-1 text-gray-900", children: typeof A == "object" ? JSON.stringify(A) : String(A) })
          ] }, v)) }) })
        ]
      }
    ) })
  ] }, N.id) : null, W = (N, L) => {
    const p = R.has(N) || l === "none";
    return /* @__PURE__ */ e.jsxs("div", { className: "mb-6", children: [
      l !== "none" && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: N }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-gray-500", children: [
            L.length,
            " event",
            L.length !== 1 ? "s" : ""
          ] }),
          /* @__PURE__ */ e.jsx(
            ee,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => g(N),
              children: p ? "▲" : "▼"
            }
          )
        ] })
      ] }),
      p && /* @__PURE__ */ e.jsx("div", { className: "space-y-0", children: L.map(
        (v, A) => B(v, A === L.length - 1)
      ) })
    ] }, N);
  };
  return r ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center p-8", children: [
    /* @__PURE__ */ e.jsx(Ke, { size: "lg" }),
    /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-gray-600", children: "Loading timeline..." })
  ] }) : u.length === 0 ? /* @__PURE__ */ e.jsx(
    We,
    {
      title: "No events found",
      description: w.length > 0 ? "No events match your current filters." : "There are no events to display.",
      actions: w.length > 0 ? /* @__PURE__ */ e.jsx(ee, { onClick: () => P([]), children: "Clear filters" }) : void 0
    }
  ) : /* @__PURE__ */ e.jsxs("div", { className: `${E}`, style: S, children: [
    a.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "mb-6 p-4 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ e.jsx("h4", { className: "font-medium text-gray-900 mb-3", children: "Filters" }),
      /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-2", children: a.map((N) => /* @__PURE__ */ e.jsx(
        ee,
        {
          variant: w.some((L) => L.type === N.type && L.value === N.value) ? "primary" : "outline",
          size: "sm",
          onClick: () => {
            const L = w.some(
              (p) => p.type === N.type && p.value === N.value
            );
            P(
              L ? w.filter(
                (p) => !(p.type === N.type && p.value === N.value)
              ) : [...w, N]
            );
          },
          children: N.label
        },
        `${N.type}-${N.value}`
      )) }),
      w.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-3 pt-3 border-t border-gray-200", children: /* @__PURE__ */ e.jsx(
        ee,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => P([]),
          children: "Clear all filters"
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `
          ${x ? "w-full" : ""}
          ${m ? "overflow-y-auto" : ""}
        `,
        style: { maxHeight: m },
        children: Object.entries(j).map(
          ([N, L]) => W(N, L)
        )
      }
    ),
    i && /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex items-center justify-center text-sm text-gray-500", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" }),
      "Live updates enabled"
    ] })
  ] });
};
function ss(t, r, s = {}, n) {
  if (!t.validation) return null;
  for (const l of t.validation) {
    if (l.workspaceContext && n && l.workspaceContext !== n)
      continue;
    const a = as(l, r, t, s);
    if (a) return a;
  }
  return null;
}
function as(t, r, s, n) {
  switch (t.type) {
    case "required":
      if (r == null || r === "")
        return t.message || `${s.label} is required`;
      break;
    case "minLength":
      if (typeof r == "string" && r.length < t.value)
        return t.message || `${s.label} must be at least ${t.value} characters`;
      break;
    case "maxLength":
      if (typeof r == "string" && r.length > t.value)
        return t.message || `${s.label} must be no more than ${t.value} characters`;
      break;
    case "pattern":
      if (typeof r == "string" && !new RegExp(t.value).test(r))
        return t.message || `${s.label} format is invalid`;
      break;
    case "email":
      if (typeof r == "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r))
        return t.message || `${s.label} must be a valid email address`;
      break;
    case "url":
      try {
        new URL(r);
      } catch {
        return t.message || `${s.label} must be a valid URL`;
      }
      break;
    case "number":
      if (isNaN(Number(r)))
        return t.message || `${s.label} must be a valid number`;
      break;
    case "custom":
      if (typeof t.value == "function") {
        const a = t.value(r, n, s);
        if (a !== !0)
          return typeof a == "string" ? a : t.message;
      }
      break;
  }
  return null;
}
function Et(t, r, s) {
  const n = {};
  for (const l of t) {
    const a = ss(l, r[l.name], r, s);
    a && (n[l.name] = a);
  }
  return n;
}
function lr(t, r) {
  let s = !0, n = t.required || !1, l = !1, a = !1;
  if (!t.conditional)
    return { visible: s, required: n, disabled: l, readonly: a };
  for (const o of t.conditional) {
    const d = r[o.field];
    if (ns(o, d))
      switch (o.action) {
        case "show":
          s = !0;
          break;
        case "hide":
          s = !1;
          break;
        case "required":
          n = !0;
          break;
        case "disabled":
          l = !0;
          break;
        case "readonly":
          a = !0;
          break;
      }
  }
  return { visible: s, required: n, disabled: l, readonly: a };
}
function ns(t, r) {
  switch (t.operator) {
    case "equals":
      return r === t.value;
    case "not_equals":
      return r !== t.value;
    case "contains":
      return typeof r == "string" && r.includes(t.value);
    case "greater_than":
      return Number(r) > Number(t.value);
    case "less_than":
      return Number(r) < Number(t.value);
    case "in":
      return Array.isArray(t.value) && t.value.includes(r);
    case "not_in":
      return Array.isArray(t.value) && !t.value.includes(r);
    default:
      return !1;
  }
}
function ls(t, r = [], s) {
  return t.filter((n) => !(n.workspaceContext && s && n.workspaceContext !== s || n.permission && !r.includes(n.permission)));
}
function ht(t, r, s = [], n) {
  return ls(t, s, n).filter((a) => {
    const { visible: o } = lr(a, r);
    return o;
  });
}
function os(t, r, s = [], n) {
  const a = ht(t, r, s, n).filter((d) => {
    const { required: i } = lr(d, r);
    return i;
  });
  if (a.length === 0) return 100;
  const o = a.filter((d) => {
    const i = r[d.name];
    return i != null && i !== "";
  });
  return Math.round(o.length / a.length * 100);
}
function _t(t, r) {
  let s;
  return (...n) => {
    clearTimeout(s), s = setTimeout(() => t(...n), r);
  };
}
function yt(t) {
  if (t === null || typeof t != "object") return t;
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof Array) return t.map((r) => yt(r));
  if (typeof t == "object") {
    const r = {};
    for (const s in t)
      t.hasOwnProperty(s) && (r[s] = yt(t[s]));
    return r;
  }
  return t;
}
function is(t, r) {
  return (r ? `${r}-${t}` : t).replace(/[^a-zA-Z0-9-_]/g, "-").toLowerCase();
}
function or(t, r) {
  return JSON.stringify(t) !== JSON.stringify(r);
}
function $a({
  context: t = "neutral",
  schema: r,
  initialData: s = {},
  onSubmit: n,
  onChange: l,
  onValidationChange: a,
  template: o,
  workspaceId: d,
  autoSave: i = !1,
  autoSaveInterval: h = 2e3,
  collaborative: x = !1,
  readonly: m = !1,
  permissions: y = [],
  className: T = "",
  loading: E = !1,
  disabled: S = !1
}) {
  var v, A;
  const [w, z] = I({
    data: { ...s },
    errors: {},
    touched: {},
    isValid: !0,
    isSubmitting: !1,
    isDirty: !1,
    lastSaved: void 0
  }), [R, C] = I("idle"), f = Ae({ ...s });
  Ae();
  const u = de(
    () => ht(r.fields, w.data, y, t),
    [r.fields, w.data, y, t]
  ), j = de(
    () => os(u, w.data, y, t),
    [u, w.data, y, t]
  ), P = D((b) => {
    const _ = Et(u, b, t), H = Object.keys(_).length === 0;
    return { errors: _, isValid: H };
  }, [u, t]), k = D((b, _) => {
    m || S || z((H) => {
      const $ = { ...H.data, [b]: _ }, { errors: J, isValid: X } = P($), le = or($, f.current), he = {
        ...H,
        data: $,
        errors: J,
        isValid: X,
        isDirty: le,
        touched: { ...H.touched, [b]: !0 }
      };
      return l == null || l($), a == null || a(J), he;
    });
  }, [m, S, P, l, a]), g = de(
    () => _t(async (b) => {
      if (!(!i || m))
        try {
          C("saving"), await new Promise((_) => setTimeout(_, 500)), f.current = yt(b), z((_) => ({ ..._, lastSaved: /* @__PURE__ */ new Date(), isDirty: !1 })), C("saved"), setTimeout(() => C("idle"), 2e3);
        } catch (_) {
          console.error("Auto-save failed:", _), C("error"), setTimeout(() => C("idle"), 3e3);
        }
    }, h),
    [i, h, m]
  );
  Ge(() => {
    i && w.isDirty && !w.isSubmitting && g(w.data);
  }, [i, w.isDirty, w.isSubmitting, w.data, g]);
  const M = D(async (b) => {
    if (b.preventDefault(), m || S || w.isSubmitting) return;
    const { errors: _, isValid: H } = P(w.data);
    if (z(($) => ({
      ...$,
      errors: _,
      isValid: H,
      isSubmitting: !0,
      touched: u.reduce((J, X) => ({ ...J, [X.name]: !0 }), {})
    })), H && n)
      try {
        await n(w.data), f.current = yt(w.data), z(($) => ({ ...$, isDirty: !1, lastSaved: /* @__PURE__ */ new Date() }));
      } catch ($) {
        console.error("Form submission failed:", $);
      }
    z(($) => ({ ...$, isSubmitting: !1 }));
  }, [m, S, w.isSubmitting, w.data, P, u, n]), B = D(() => {
    m || S || (z({
      data: { ...s },
      errors: {},
      touched: {},
      isValid: !0,
      isSubmitting: !1,
      isDirty: !1,
      lastSaved: void 0
    }), f.current = { ...s });
  }, [m, S, s]), W = D((b) => {
    const _ = is(b.name, d), H = w.data[b.name] || "", $ = w.errors[b.name], J = w.touched[b.name];
    return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e.jsxs("label", { htmlFor: _, className: "block text-sm font-medium text-gray-700", children: [
        b.label,
        b.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: _,
          name: b.name,
          type: b.type || "text",
          placeholder: b.placeholder,
          value: H,
          disabled: S || m,
          onChange: (X) => k(b.name, X.target.value),
          className: `
            w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${J && $ ? "border-red-500" : "border-gray-300"}
            ${S || m ? "bg-gray-50 cursor-not-allowed" : "bg-white"}
          `,
          ...b.props
        }
      ),
      J && $ && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-600", children: $ })
    ] }, b.name);
  }, [w.data, w.errors, w.touched, S, m, d, k]), N = () => {
    if (!i) return null;
    const b = {
      idle: "",
      saving: "Saving...",
      saved: "Saved",
      error: "Save failed"
    }, _ = {
      idle: "text-gray-500",
      saving: "text-blue-500",
      saved: "text-green-500",
      error: "text-red-500"
    };
    return /* @__PURE__ */ e.jsxs("div", { className: `text-sm ${_[R]} transition-colors duration-200`, children: [
      b[R],
      w.lastSaved && R === "idle" && /* @__PURE__ */ e.jsxs("span", { className: "text-gray-400 ml-2", children: [
        "Last saved: ",
        w.lastSaved.toLocaleTimeString()
      ] })
    ] });
  }, L = () => {
    var J, X, le;
    const b = ((J = r.layout) == null ? void 0 : J.type) || "single-column", _ = ((X = r.layout) == null ? void 0 : X.spacing) || "normal", H = {
      compact: "space-y-3",
      normal: "space-y-4",
      relaxed: "space-y-6"
    }, $ = {
      "single-column": "grid grid-cols-1",
      "two-column": "grid grid-cols-1 md:grid-cols-2 gap-x-6",
      grid: `grid grid-cols-1 md:grid-cols-${((le = r.layout) == null ? void 0 : le.columns) || 2} gap-x-6`,
      tabs: "space-y-4",
      accordion: "space-y-2"
    };
    return /* @__PURE__ */ e.jsx("div", { className: `${$[b]} ${H[_]}`, children: u.map(W) });
  }, p = () => `bg-white border border-gray-200 rounded-lg shadow-sm ${{
    consultant: "border-blue-200 focus-within:border-blue-500",
    client: "border-green-200 focus-within:border-green-500",
    admin: "border-purple-200 focus-within:border-purple-500",
    expert: "border-orange-200 focus-within:border-orange-500",
    "tool-creator": "border-indigo-200 focus-within:border-indigo-500",
    founder: "border-red-200 focus-within:border-red-500",
    neutral: "border-gray-200 focus-within:border-gray-500"
  }[t]}`;
  return /* @__PURE__ */ e.jsxs("div", { className: `form-builder ${T}`, children: [
    (((v = r.metadata) == null ? void 0 : v.title) || j < 100 || i) && /* @__PURE__ */ e.jsxs("div", { className: "mb-6", children: [
      ((A = r.metadata) == null ? void 0 : A.title) && /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: r.metadata.title }),
        r.metadata.description && /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 mt-1", children: r.metadata.description })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-600", children: [
            "Progress: ",
            j,
            "%"
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "w-32 bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "bg-blue-500 h-2 rounded-full transition-all duration-300",
              style: { width: `${j}%` }
            }
          ) })
        ] }),
        N()
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: M, className: p(), children: [
      /* @__PURE__ */ e.jsx("div", { className: "p-6", children: E ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center py-12", children: [
        /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" }),
        /* @__PURE__ */ e.jsx("span", { className: "ml-3 text-gray-600", children: "Loading form..." })
      ] }) : L() }),
      !m && /* @__PURE__ */ e.jsx("div", { className: "px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center space-x-3", children: w.isDirty && /* @__PURE__ */ e.jsx("span", { className: "text-sm text-orange-600", children: "You have unsaved changes" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e.jsx(
            ee,
            {
              type: "button",
              variant: "secondary",
              onClick: B,
              disabled: S || w.isSubmitting || !w.isDirty,
              children: "Reset"
            }
          ),
          /* @__PURE__ */ e.jsx(
            ee,
            {
              type: "submit",
              variant: "primary",
              disabled: S || w.isSubmitting || !w.isValid,
              isLoading: w.isSubmitting,
              children: w.isSubmitting ? "Submitting..." : "Submit"
            }
          )
        ] })
      ] }) })
    ] }),
    x && /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-sm text-gray-500", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }),
      /* @__PURE__ */ e.jsx("span", { children: "Collaborative editing enabled" })
    ] }) })
  ] });
}
function cs(t, r = {}) {
  const [s, n] = I(t), [l, a] = I(!1), [o, d] = I(!1), [i, h] = I(!1), [x, m] = I(null), y = de(() => r.autoSave ? _t((R) => {
    h(!0), setTimeout(() => {
      h(!1), m(/* @__PURE__ */ new Date()), d(!1);
    }, 500);
  }, r.autoSaveInterval || 2e3) : null, [r.autoSave, r.autoSaveInterval]), T = D((R) => {
    if (!s) return;
    const C = { ...s, ...R };
    n(C), d(!0), r.onTemplateChange && r.onTemplateChange(C), y && y(C);
  }, [s, r, y]), E = D(async () => {
    if (!(!s || !o)) {
      h(!0);
      try {
        r.onTemplateSave && r.onTemplateSave(s), m(/* @__PURE__ */ new Date()), d(!1);
      } finally {
        h(!1);
      }
    }
  }, [s, o, r]), S = D(() => {
    a(!0);
  }, []), w = D(() => {
    a(!1);
  }, []), z = D(() => {
    n(t), a(!1), d(!1);
  }, [t]);
  return {
    currentTemplate: s,
    isEditing: l,
    isDirty: o,
    isSaving: i,
    lastSaved: x,
    updateTemplate: T,
    saveTemplate: E,
    startEditing: S,
    stopEditing: w,
    cancelEditing: z
  };
}
function ds({
  metadata: t,
  onMetadataChange: r,
  context: s,
  disabled: n = !1
}) {
  var a;
  const l = (o, d) => {
    r({
      ...t,
      [o]: d
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Template Name *" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: t.name,
            onChange: (o) => l("name", o.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Enter template name",
            disabled: n
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Category" }),
        /* @__PURE__ */ e.jsxs(
          "select",
          {
            value: t.category,
            onChange: (o) => l("category", o.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            disabled: n,
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "general", children: "General" }),
              /* @__PURE__ */ e.jsx("option", { value: "onboarding", children: "Onboarding" }),
              /* @__PURE__ */ e.jsx("option", { value: "survey", children: "Survey" }),
              /* @__PURE__ */ e.jsx("option", { value: "application", children: "Application" }),
              /* @__PURE__ */ e.jsx("option", { value: "feedback", children: "Feedback" }),
              /* @__PURE__ */ e.jsx("option", { value: "registration", children: "Registration" }),
              /* @__PURE__ */ e.jsx("option", { value: "contact", children: "Contact" }),
              /* @__PURE__ */ e.jsx("option", { value: "custom", children: "Custom" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Description" }),
      /* @__PURE__ */ e.jsx(
        "textarea",
        {
          value: t.description || "",
          onChange: (o) => l("description", o.target.value),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          placeholder: "Describe what this template is for",
          rows: 3,
          disabled: n
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Version" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: t.version,
            onChange: (o) => l("version", o.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "1.0.0",
            disabled: n
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Author" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: t.author || "",
            onChange: (o) => l("author", o.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Template author",
            disabled: n
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Estimated Time (minutes)" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "number",
            value: t.estimatedTime || "",
            onChange: (o) => l("estimatedTime", parseInt(o.target.value) || void 0),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "5",
            min: "1",
            disabled: n
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Tags" }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          value: ((a = t.tags) == null ? void 0 : a.join(", ")) || "",
          onChange: (o) => l("tags", o.target.value.split(",").map((d) => d.trim()).filter(Boolean)),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          placeholder: "tag1, tag2, tag3",
          disabled: n
        }
      ),
      /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Separate tags with commas" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            checked: t.isPublic || !1,
            onChange: (o) => l("isPublic", o.target.checked),
            className: "mr-2",
            disabled: n
          }
        ),
        /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: "Make template public" })
      ] }),
      /* @__PURE__ */ e.jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            checked: t.isShared || !1,
            onChange: (o) => l("isShared", o.target.checked),
            className: "mr-2",
            disabled: n
          }
        ),
        /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: "Allow sharing" })
      ] })
    ] })
  ] });
}
function Qt({ template: t, context: r }) {
  const s = de(() => ht(t.fields, {}, [], r), [t.fields, r]);
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "border-b border-gray-200 pb-4", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900", children: t.metadata.name }),
      t.metadata.description && /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 mt-1", children: t.metadata.description }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4 mt-2 text-sm text-gray-500", children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Category: ",
          t.metadata.category
        ] }),
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Version: ",
          t.metadata.version
        ] }),
        t.metadata.estimatedTime && /* @__PURE__ */ e.jsxs("span", { children: [
          "Est. time: ",
          t.metadata.estimatedTime,
          " min"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ e.jsxs("h4", { className: "font-medium text-gray-900", children: [
        "Form Fields (",
        s.length,
        ")"
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 gap-4", children: s.map((n, l) => /* @__PURE__ */ e.jsxs("div", { className: "border border-gray-200 rounded-md p-3", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "font-medium text-sm text-gray-900", children: [
            n.label,
            n.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded", children: n.type })
        ] }),
        n.placeholder && /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500", children: [
          "Placeholder: ",
          n.placeholder
        ] }),
        n.validation && /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500", children: [
          "Validation: ",
          JSON.stringify(n.validation)
        ] })
      ] }, n.name)) })
    ] }),
    t.metadata.tags && t.metadata.tags.length > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Tags" }),
      /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-2", children: t.metadata.tags.map((n, l) => /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
          children: n
        },
        l
      )) })
    ] })
  ] });
}
function Pa({
  context: t = "neutral",
  template: r,
  mode: s = "view",
  onTemplateChange: n,
  onTemplateSave: l,
  onTemplateUse: a,
  onTemplateShare: o,
  onTemplateDelete: d,
  autoSave: i = !1,
  autoSaveInterval: h = 2e3,
  permissions: x = [],
  className: m = "",
  loading: y = !1,
  disabled: T = !1
}) {
  const E = { type: "neutral" }, S = t || (E == null ? void 0 : E.type), {
    currentTemplate: w,
    isEditing: z,
    isDirty: R,
    isSaving: C,
    lastSaved: f,
    updateTemplate: u,
    saveTemplate: j,
    startEditing: P,
    cancelEditing: k
  } = cs(r || null, {
    autoSave: i,
    autoSaveInterval: h,
    onTemplateChange: n,
    onTemplateSave: l,
    context: S,
    permissions: x
  }), g = D((L) => {
    u({ metadata: L });
  }, [u]), M = D(() => {
    w && a && a(w);
  }, [w, a]), B = D(() => {
    w && o && o(w);
  }, [w, o]), W = D(() => {
    w && d && d(w);
  }, [w, d]), N = `
    bg-white rounded-lg shadow-sm border border-gray-200 p-6
    ${m}
  `;
  return y ? /* @__PURE__ */ e.jsx("div", { className: N, children: /* @__PURE__ */ e.jsxs("div", { className: "animate-pulse space-y-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-gray-200 rounded w-1/4" }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-gray-200 rounded" }),
      /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-gray-200 rounded w-5/6" })
    ] })
  ] }) }) : w ? /* @__PURE__ */ e.jsxs("div", { className: N, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: s === "edit" || z ? "Edit Template" : "Template" }),
        f && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500", children: [
          "Last saved: ",
          f.toLocaleTimeString()
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
        s === "view" && !z && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            ee,
            {
              variant: "secondary",
              onClick: M,
              disabled: T,
              children: "Use Template"
            }
          ),
          w.metadata.isShared && /* @__PURE__ */ e.jsx(
            ee,
            {
              variant: "ghost",
              onClick: B,
              disabled: T,
              children: "Share"
            }
          ),
          /* @__PURE__ */ e.jsx(
            ee,
            {
              variant: "ghost",
              onClick: P,
              disabled: T,
              children: "Edit"
            }
          )
        ] }),
        (s === "edit" || z) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            ee,
            {
              variant: "ghost",
              onClick: k,
              disabled: T || C,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e.jsx(
            ee,
            {
              variant: "primary",
              onClick: j,
              disabled: T || !R || C,
              isLoading: C,
              children: "Save"
            }
          )
        ] }),
        s === "view" && !z && d && /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "ghost",
            onClick: W,
            disabled: T,
            className: "text-red-600 hover:text-red-700",
            children: "Delete"
          }
        )
      ] })
    ] }),
    s === "edit" || z ? /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Template Information" }),
        /* @__PURE__ */ e.jsx(
          ds,
          {
            metadata: w.metadata,
            onMetadataChange: g,
            context: S,
            disabled: T || C
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Form Preview" }),
        /* @__PURE__ */ e.jsx(
          Qt,
          {
            template: w,
            context: S
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsx(
      Qt,
      {
        template: w,
        context: S
      }
    ),
    i && C && /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-xs text-gray-500 text-center", children: "Saving..." })
  ] }) : /* @__PURE__ */ e.jsx("div", { className: N, children: /* @__PURE__ */ e.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ e.jsx("div", { className: "text-gray-500", children: "No template selected" }) }) });
}
function us(t, r = {}, s = {}) {
  const [n, l] = I(0), [a, o] = I({
    data: r,
    errors: {},
    touched: {},
    isValid: !1,
    isSubmitting: !1,
    isDirty: !1,
    currentStep: 0
  }), d = t.length, i = n === 0, h = n === d - 1, x = t[n], m = de(() => x ? ht(
    x.fields,
    a.data,
    s.permissions,
    s.context
  ) : [], [x, a.data, s.permissions, s.context]), y = D(() => {
    if (!x) return !0;
    const g = Et(
      m,
      a.data,
      s.context
    );
    return o((M) => ({
      ...M,
      errors: { ...M.errors, ...g },
      isValid: Object.keys(g).length === 0
    })), Object.keys(g).length === 0;
  }, [x, m, a.data, s.context]), T = de(() => {
    if (h) return !1;
    const g = Et(
      m,
      a.data,
      s.context
    );
    return Object.keys(g).length === 0;
  }, [h, m, a.data, s.context]), E = !i, S = de(() => s.autoSave ? _t((g) => {
    o((M) => ({
      ...M,
      lastSaved: /* @__PURE__ */ new Date()
    }));
  }, s.autoSaveInterval || 2e3) : null, [s.autoSave, s.autoSaveInterval]), w = D((g, M) => {
    o((B) => {
      const W = { ...B.data, [g]: M }, N = {
        ...B,
        data: W,
        touched: { ...B.touched, [g]: !0 },
        isDirty: or(W, r)
      };
      return S && S(W), N;
    });
  }, [S, r]), z = D((g, M) => {
    o((B) => ({
      ...B,
      errors: { ...B.errors, [g]: M }
    }));
  }, []), R = D((g) => {
    o((M) => {
      const B = { ...M.errors };
      return delete B[g], {
        ...M,
        errors: B
      };
    });
  }, []), C = D(() => {
    if (!T) return;
    const g = Math.min(n + 1, d - 1);
    l(g), o((M) => ({ ...M, currentStep: g })), s.onStepChange && s.onStepChange(g, a.data);
  }, [T, n, d, a.data, s]), f = D(() => {
    if (!E) return;
    const g = Math.max(n - 1, 0);
    l(g), o((M) => ({ ...M, currentStep: g })), s.onStepChange && s.onStepChange(g, a.data);
  }, [E, n, a.data, s]), u = D((g) => {
    g < 0 || g >= d || (l(g), o((M) => ({ ...M, currentStep: g })), s.onStepChange && s.onStepChange(g, a.data));
  }, [d, a.data, s]), j = D(() => y(), [y]), P = D(() => {
    l(0), o({
      data: r,
      errors: {},
      touched: {},
      isValid: !1,
      isSubmitting: !1,
      isDirty: !1,
      currentStep: 0
    });
  }, [r]), k = D(() => {
    !h || !T || (o((g) => ({ ...g, isSubmitting: !0 })), s.onComplete && s.onComplete(a.data));
  }, [h, T, a.data, s]);
  return {
    formState: a,
    setValue: w,
    setError: z,
    clearError: R,
    validate: j,
    reset: P,
    submit: k,
    currentStep: n,
    totalSteps: d,
    canGoNext: T,
    canGoPrevious: E,
    nextStep: C,
    previousStep: f,
    goToStep: u,
    isFirstStep: i,
    isLastStep: h
  };
}
function ms({ steps: t, currentStep: r, completedSteps: s, context: n }) {
  const l = (o) => s.includes(o) ? "completed" : o === r ? "current" : o < r ? "completed" : "upcoming", a = (o) => {
    const d = l(o), i = "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors";
    switch (d) {
      case "completed":
        return `${i} bg-green-500 text-white`;
      case "current":
        return `${i} bg-blue-500 text-white ring-2 ring-blue-200`;
      case "upcoming":
        return `${i} bg-gray-200 text-gray-500`;
      default:
        return i;
    }
  };
  return /* @__PURE__ */ e.jsx("div", { className: "mb-8", children: /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: t.map((o, d) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: a(d), children: s.includes(d) ? /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) : /* @__PURE__ */ e.jsx("span", { children: d + 1 }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-2 text-center", children: [
        /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-900", children: o.title }),
        o.estimatedTime && /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-500", children: [
          o.estimatedTime,
          " min"
        ] })
      ] })
    ] }),
    d < t.length - 1 && /* @__PURE__ */ e.jsx("div", { className: "flex-1 mx-4 h-0.5 bg-gray-200", children: /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "h-full bg-blue-500 transition-all duration-300",
        style: {
          width: d < r ? "100%" : "0%"
        }
      }
    ) })
  ] }, o.id)) }) });
}
function xs({
  step: t,
  formData: r,
  errors: s,
  onFieldChange: n,
  context: l,
  permissions: a
}) {
  const o = ht(t.fields, r, a, l);
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
    t.description && /* @__PURE__ */ e.jsx("div", { className: "text-gray-600 mb-6", children: t.description }),
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 gap-6", children: o.map((d) => /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "block text-sm font-medium text-gray-700", children: [
        d.label,
        d.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: d.type || "text",
          value: r[d.name] || "",
          onChange: (i) => n(d.name, i.target.value),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          placeholder: d.placeholder,
          disabled: d.disabled || !1
        }
      ),
      s[d.name] && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-600", children: s[d.name] })
    ] }, d.name)) })
  ] });
}
function Aa({
  context: t = "neutral",
  steps: r,
  initialData: s = {},
  currentStep: n,
  onStepChange: l,
  onComplete: a,
  onCancel: o,
  template: d,
  workspaceId: i,
  autoSave: h = !1,
  autoSaveInterval: x = 2e3,
  showProgress: m = !0,
  allowStepSkip: y = !1,
  allowStepBack: T = !0,
  permissions: E = [],
  className: S = "",
  loading: w = !1,
  disabled: z = !1
}) {
  const R = { type: "neutral" }, C = t || (R == null ? void 0 : R.type), f = n !== void 0, {
    formState: u,
    setValue: j,
    clearError: P,
    validate: k,
    submit: g,
    currentStep: M,
    totalSteps: B,
    canGoNext: W,
    canGoPrevious: N,
    nextStep: L,
    previousStep: p,
    isLastStep: v
  } = us(r, s, {
    autoSave: h,
    autoSaveInterval: x,
    onStepChange: l,
    onComplete: a,
    context: C,
    permissions: E
  }), A = f ? n : M, b = f ? () => l == null ? void 0 : l(A + 1, u.data) : L, _ = f ? () => l == null ? void 0 : l(A - 1, u.data) : p, [H, $] = I([]);
  Ge(() => {
    A > 0 && !H.includes(A - 1) && $((fe) => [...fe, A - 1]);
  }, [A, H]);
  const J = r[A];
  if (!J)
    return /* @__PURE__ */ e.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ e.jsx("div", { className: "text-red-600", children: "Invalid step configuration" }) });
  const X = Math.round((A + 1) / B * 100), le = (fe, ge) => {
    j(fe, ge), P(fe);
  }, he = () => {
    k() && b();
  }, Ee = () => {
    k() && g();
  }, re = `
    bg-white rounded-lg shadow-sm border border-gray-200 p-6
    ${S}
  `;
  return w ? /* @__PURE__ */ e.jsx("div", { className: re, children: /* @__PURE__ */ e.jsxs("div", { className: "animate-pulse space-y-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-gray-200 rounded w-1/4" }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-gray-200 rounded" }),
      /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-gray-200 rounded w-5/6" })
    ] })
  ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: re, children: [
    m && /* @__PURE__ */ e.jsx(
      ms,
      {
        steps: r,
        currentStep: A,
        completedSteps: H,
        context: C
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: J.title }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-500", children: [
          "Step ",
          A + 1,
          " of ",
          B,
          " (",
          X,
          "%)"
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "bg-blue-500 h-2 rounded-full transition-all duration-300",
          style: { width: `${X}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx(
      xs,
      {
        step: J,
        formData: u.data,
        errors: u.errors,
        onFieldChange: le,
        context: C,
        permissions: E
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mt-8 pt-6 border-t border-gray-200", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
        T && N && /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "secondary",
            onClick: _,
            disabled: z || u.isSubmitting,
            children: "Previous"
          }
        ),
        o && /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "ghost",
            onClick: o,
            disabled: z || u.isSubmitting,
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
        y && !v && /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "ghost",
            onClick: b,
            disabled: z || u.isSubmitting,
            children: "Skip"
          }
        ),
        v ? /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "primary",
            onClick: Ee,
            disabled: z || !W || u.isSubmitting,
            isLoading: u.isSubmitting,
            children: "Complete"
          }
        ) : /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "primary",
            onClick: he,
            disabled: z || !W || u.isSubmitting,
            children: "Next"
          }
        )
      ] })
    ] }),
    h && u.lastSaved && /* @__PURE__ */ e.jsxs("div", { className: "mt-4 text-xs text-gray-500 text-center", children: [
      "Last saved: ",
      u.lastSaved.toLocaleTimeString()
    ] })
  ] });
}
function ir(t) {
  var r, s, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var l = t.length;
    for (r = 0; r < l; r++) t[r] && (s = ir(t[r])) && (n && (n += " "), n += s);
  } else for (s in t) t[s] && (n && (n += " "), n += s);
  return n;
}
function hs() {
  for (var t, r, s = 0, n = "", l = arguments.length; s < l; s++) (t = arguments[s]) && (r = ir(t)) && (n && (n += " "), n += r);
  return n;
}
const Mt = "-", fs = (t) => {
  const r = bs(t), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (o) => {
      const d = o.split(Mt);
      return d[0] === "" && d.length !== 1 && d.shift(), cr(d, r) || gs(o);
    },
    getConflictingClassGroupIds: (o, d) => {
      const i = s[o] || [];
      return d && n[o] ? [...i, ...n[o]] : i;
    }
  };
}, cr = (t, r) => {
  var o;
  if (t.length === 0)
    return r.classGroupId;
  const s = t[0], n = r.nextPart.get(s), l = n ? cr(t.slice(1), n) : void 0;
  if (l)
    return l;
  if (r.validators.length === 0)
    return;
  const a = t.join(Mt);
  return (o = r.validators.find(({
    validator: d
  }) => d(a))) == null ? void 0 : o.classGroupId;
}, Zt = /^\[(.+)\]$/, gs = (t) => {
  if (Zt.test(t)) {
    const r = Zt.exec(t)[1], s = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, bs = (t) => {
  const {
    theme: r,
    classGroups: s
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const l in s)
    Tt(s[l], n, l, r);
  return n;
}, Tt = (t, r, s, n) => {
  t.forEach((l) => {
    if (typeof l == "string") {
      const a = l === "" ? r : er(r, l);
      a.classGroupId = s;
      return;
    }
    if (typeof l == "function") {
      if (ps(l)) {
        Tt(l(n), r, s, n);
        return;
      }
      r.validators.push({
        validator: l,
        classGroupId: s
      });
      return;
    }
    Object.entries(l).forEach(([a, o]) => {
      Tt(o, er(r, a), s, n);
    });
  });
}, er = (t, r) => {
  let s = t;
  return r.split(Mt).forEach((n) => {
    s.nextPart.has(n) || s.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(n);
  }), s;
}, ps = (t) => t.isThemeGetter, ys = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const l = (a, o) => {
    s.set(a, o), r++, r > t && (r = 0, n = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let o = s.get(a);
      if (o !== void 0)
        return o;
      if ((o = n.get(a)) !== void 0)
        return l(a, o), o;
    },
    set(a, o) {
      s.has(a) ? s.set(a, o) : l(a, o);
    }
  };
}, Rt = "!", Ft = ":", vs = Ft.length, js = (t) => {
  const {
    prefix: r,
    experimentalParseClassName: s
  } = t;
  let n = (l) => {
    const a = [];
    let o = 0, d = 0, i = 0, h;
    for (let E = 0; E < l.length; E++) {
      let S = l[E];
      if (o === 0 && d === 0) {
        if (S === Ft) {
          a.push(l.slice(i, E)), i = E + vs;
          continue;
        }
        if (S === "/") {
          h = E;
          continue;
        }
      }
      S === "[" ? o++ : S === "]" ? o-- : S === "(" ? d++ : S === ")" && d--;
    }
    const x = a.length === 0 ? l : l.substring(i), m = ws(x), y = m !== x, T = h && h > i ? h - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: y,
      baseClassName: m,
      maybePostfixModifierPosition: T
    };
  };
  if (r) {
    const l = r + Ft, a = n;
    n = (o) => o.startsWith(l) ? a(o.substring(l.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (s) {
    const l = n;
    n = (a) => s({
      className: a,
      parseClassName: l
    });
  }
  return n;
}, ws = (t) => t.endsWith(Rt) ? t.substring(0, t.length - 1) : t.startsWith(Rt) ? t.substring(1) : t, Ns = (t) => {
  const r = Object.fromEntries(t.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const l = [];
    let a = [];
    return n.forEach((o) => {
      o[0] === "[" || r[o] ? (l.push(...a.sort(), o), a = []) : a.push(o);
    }), l.push(...a.sort()), l;
  };
}, ks = (t) => ({
  cache: ys(t.cacheSize),
  parseClassName: js(t),
  sortModifiers: Ns(t),
  ...fs(t)
}), Cs = /\s+/, Ss = (t, r) => {
  const {
    parseClassName: s,
    getClassGroupId: n,
    getConflictingClassGroupIds: l,
    sortModifiers: a
  } = r, o = [], d = t.trim().split(Cs);
  let i = "";
  for (let h = d.length - 1; h >= 0; h -= 1) {
    const x = d[h], {
      isExternal: m,
      modifiers: y,
      hasImportantModifier: T,
      baseClassName: E,
      maybePostfixModifierPosition: S
    } = s(x);
    if (m) {
      i = x + (i.length > 0 ? " " + i : i);
      continue;
    }
    let w = !!S, z = n(w ? E.substring(0, S) : E);
    if (!z) {
      if (!w) {
        i = x + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (z = n(E), !z) {
        i = x + (i.length > 0 ? " " + i : i);
        continue;
      }
      w = !1;
    }
    const R = a(y).join(":"), C = T ? R + Rt : R, f = C + z;
    if (o.includes(f))
      continue;
    o.push(f);
    const u = l(z, w);
    for (let j = 0; j < u.length; ++j) {
      const P = u[j];
      o.push(C + P);
    }
    i = x + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Es() {
  let t = 0, r, s, n = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (s = dr(r)) && (n && (n += " "), n += s);
  return n;
}
const dr = (t) => {
  if (typeof t == "string")
    return t;
  let r, s = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (r = dr(t[n])) && (s && (s += " "), s += r);
  return s;
};
function Ts(t, ...r) {
  let s, n, l, a = o;
  function o(i) {
    const h = r.reduce((x, m) => m(x), t());
    return s = ks(h), n = s.cache.get, l = s.cache.set, a = d, d(i);
  }
  function d(i) {
    const h = n(i);
    if (h)
      return h;
    const x = Ss(i, s);
    return l(i, x), x;
  }
  return function() {
    return a(Es.apply(null, arguments));
  };
}
const ve = (t) => {
  const r = (s) => s[t] || [];
  return r.isThemeGetter = !0, r;
}, ur = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, mr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Rs = /^\d+\/\d+$/, Fs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $s = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ps = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, As = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, et = (t) => Rs.test(t), se = (t) => !!t && !Number.isNaN(Number(t)), Be = (t) => !!t && Number.isInteger(Number(t)), kt = (t) => t.endsWith("%") && se(t.slice(0, -1)), Le = (t) => Fs.test(t), Ds = () => !0, _s = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $s.test(t) && !Ps.test(t)
), xr = () => !1, Ms = (t) => As.test(t), Os = (t) => zs.test(t), Ls = (t) => !K(t) && !Y(t), Is = (t) => tt(t, gr, xr), K = (t) => ur.test(t), Xe = (t) => tt(t, br, _s), Ct = (t) => tt(t, Ys, se), tr = (t) => tt(t, hr, xr), Bs = (t) => tt(t, fr, Os), gt = (t) => tt(t, pr, Ms), Y = (t) => mr.test(t), mt = (t) => rt(t, br), Vs = (t) => rt(t, Ws), rr = (t) => rt(t, hr), Gs = (t) => rt(t, gr), Ks = (t) => rt(t, fr), bt = (t) => rt(t, pr, !0), tt = (t, r, s) => {
  const n = ur.exec(t);
  return n ? n[1] ? r(n[1]) : s(n[2]) : !1;
}, rt = (t, r, s = !1) => {
  const n = mr.exec(t);
  return n ? n[1] ? r(n[1]) : s : !1;
}, hr = (t) => t === "position" || t === "percentage", fr = (t) => t === "image" || t === "url", gr = (t) => t === "length" || t === "size" || t === "bg-size", br = (t) => t === "length", Ys = (t) => t === "number", Ws = (t) => t === "family-name", pr = (t) => t === "shadow", qs = () => {
  const t = ve("color"), r = ve("font"), s = ve("text"), n = ve("font-weight"), l = ve("tracking"), a = ve("leading"), o = ve("breakpoint"), d = ve("container"), i = ve("spacing"), h = ve("radius"), x = ve("shadow"), m = ve("inset-shadow"), y = ve("text-shadow"), T = ve("drop-shadow"), E = ve("blur"), S = ve("perspective"), w = ve("aspect"), z = ve("ease"), R = ve("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], f = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], u = () => [...f(), Y, K], j = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], k = () => [Y, K, i], g = () => [et, "full", "auto", ...k()], M = () => [Be, "none", "subgrid", Y, K], B = () => ["auto", {
    span: ["full", Be, Y, K]
  }, Be, Y, K], W = () => [Be, "auto", Y, K], N = () => ["auto", "min", "max", "fr", Y, K], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], p = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], v = () => ["auto", ...k()], A = () => [et, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], b = () => [t, Y, K], _ = () => [...f(), rr, tr, {
    position: [Y, K]
  }], H = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], $ = () => ["auto", "cover", "contain", Gs, Is, {
    size: [Y, K]
  }], J = () => [kt, mt, Xe], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    Y,
    K
  ], le = () => ["", se, mt, Xe], he = () => ["solid", "dashed", "dotted", "double"], Ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], re = () => [se, kt, rr, tr], fe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    Y,
    K
  ], ge = () => ["none", se, Y, K], je = () => ["none", se, Y, K], U = () => [se, Y, K], q = () => [et, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Le],
      breakpoint: [Le],
      color: [Ds],
      container: [Le],
      "drop-shadow": [Le],
      ease: ["in", "out", "in-out"],
      font: [Ls],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Le],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Le],
      shadow: [Le],
      spacing: ["px", se],
      text: [Le],
      "text-shadow": [Le],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", et, K, Y, w]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [se, K, Y, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: u()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: g()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": g()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": g()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: g()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: g()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: g()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: g()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: g()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: g()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Be, "auto", Y, K]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [et, "full", "auto", d, ...k()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [se, et, "auto", "initial", "none", K]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", se, Y, K]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", se, Y, K]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Be, "first", "last", "none", Y, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": M()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: B()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": M()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: B()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": N()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": N()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: k()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": k()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": k()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...L(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...p(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...p()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...L()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...p(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...p(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": L()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...p(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...p()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: k()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: k()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: k()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: k()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: k()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: k()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: k()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: k()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: k()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: v()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: v()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: v()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: v()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: v()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: v()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: v()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: v()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: v()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": k()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": k()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: A()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...A()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...A()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...A()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...A()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...A()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...A()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", s, mt, Xe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, Y, Ct]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", kt, K]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Vs, K, r]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [l, Y, K]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [se, "none", Y, Ct]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...k()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y, K]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Y, K]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: b()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: b()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...he(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [se, "from-font", "auto", Y, Xe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: b()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [se, "auto", Y, K]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y, K]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Y, K]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: _()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: H()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: $()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Be, Y, K],
          radial: ["", Y, K],
          conic: [Be, Y, K]
        }, Ks, Bs]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: b()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: J()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: J()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: J()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: b()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: b()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: X()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": X()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": X()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": X()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": X()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": X()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": X()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": X()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": X()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": X()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": X()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": X()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": X()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": X()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": X()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: le()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": le()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": le()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": le()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": le()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": le()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": le()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": le()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": le()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": le()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": le()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...he(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...he(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: b()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": b()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": b()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": b()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": b()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": b()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": b()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": b()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": b()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: b()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...he(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [se, Y, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", se, mt, Xe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: b()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          bt,
          gt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: b()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, bt, gt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": b()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: le()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: b()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [se, Xe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": b()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": le()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": b()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, bt, gt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": b()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [se, Y, K]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ee()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [se]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": re()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": re()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": b()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": b()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": re()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": re()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": b()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": b()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": re()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": re()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": b()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": b()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": re()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": re()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": b()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": b()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": re()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": re()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": b()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": b()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": re()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": re()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": b()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": b()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": re()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": re()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": b()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": b()
      }],
      "mask-image-radial": [{
        "mask-radial": [Y, K]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": re()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": re()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": b()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": b()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": f()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [se]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": re()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": re()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": b()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": b()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: _()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: H()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: $()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", Y, K]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Y,
          K
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: fe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [se, Y, K]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [se, Y, K]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          T,
          bt,
          gt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": b()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", se, Y, K]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [se, Y, K]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", se, Y, K]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [se, Y, K]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", se, Y, K]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Y,
          K
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": fe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [se, Y, K]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [se, Y, K]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", se, Y, K]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [se, Y, K]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", se, Y, K]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [se, Y, K]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [se, Y, K]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", se, Y, K]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": k()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": k()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": k()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Y, K]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [se, "initial", Y, K]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", z, Y, K]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [se, Y, K]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", R, Y, K]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [S, Y, K]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": u()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ge()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ge()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ge()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ge()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: je()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": je()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": je()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": je()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: U()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": U()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": U()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Y, K, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: u()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: q()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": q()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": q()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": q()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: b()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: b()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y, K]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Y, K]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...b()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [se, mt, Xe, Ct]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...b()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Hs = /* @__PURE__ */ Ts(qs);
function Ce(...t) {
  return Hs(hs(t));
}
const Js = () => ({
  socket: {
    on: (t, r) => {
    },
    off: (t) => {
    },
    emit: (t, r) => {
    }
  }
}), yr = (t) => {
  const s = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), n = Math.floor(s / 6e4), l = Math.floor(s / 36e5), a = Math.floor(s / 864e5);
  return n < 1 ? "Just now" : n < 60 ? `${n}m ago` : l < 24 ? `${l}h ago` : a < 7 ? `${a}d ago` : t.toLocaleDateString();
}, Us = ({
  chats: t,
  selectedChat: r,
  onChatSelect: s,
  context: n = "consultant",
  currentUser: l
}) => {
  const [a, o] = I(""), d = de(() => a ? t.filter(
    (h) => {
      var x;
      return ((x = h.name) == null ? void 0 : x.toLowerCase().includes(a.toLowerCase())) || h.participants.some((m) => m.name.toLowerCase().includes(a.toLowerCase()));
    }
  ) : t, [t, a]), i = (h) => ({
    consultant: "border-l-blue-500 bg-blue-50",
    client: "border-l-green-500 bg-green-50",
    admin: "border-l-purple-500 bg-purple-50",
    expert: "border-l-orange-500 bg-orange-50",
    tool_creator: "border-l-indigo-500 bg-indigo-50",
    founder: "border-l-red-500 bg-red-50",
    neutral: "border-l-gray-500 bg-gray-50"
  })[h] || "border-l-gray-500 bg-gray-50";
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full bg-white border-r border-gray-200", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ e.jsx(xe, { name: "Search", className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" }),
      /* @__PURE__ */ e.jsx(
        ar,
        {
          name: "search",
          placeholder: "Search conversations...",
          value: a,
          onChange: (h) => o(h.target.value),
          className: "pl-10"
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto", children: d.length === 0 ? /* @__PURE__ */ e.jsx(
      We,
      {
        title: a ? "No conversations found" : "No conversations yet",
        description: "Start a new conversation to get started"
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: "space-y-1 p-2", children: d.map((h) => {
      var x, m, y, T, E;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => s(h),
          className: Ce(
            "flex items-center p-3 rounded-lg cursor-pointer transition-colors border-l-4",
            (r == null ? void 0 : r.id) === h.id ? i(n) : "border-l-transparent hover:bg-gray-50"
          ),
          children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 mr-3", children: h.type === "direct" ? /* @__PURE__ */ e.jsx(
              Ye,
              {
                src: ((x = h.participants.find((S) => S.id !== l.id)) == null ? void 0 : x.avatar) || ((m = h.participants[0]) == null ? void 0 : m.avatar),
                alt: ((y = h.participants.find((S) => S.id !== l.id)) == null ? void 0 : y.name) || ((T = h.participants[0]) == null ? void 0 : T.name),
                size: "md"
              }
            ) : /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx(xe, { name: "Users", className: "w-5 h-5 text-gray-600" }) }) }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-gray-900 truncate", children: h.name || h.participants.filter((S) => S.id !== l.id).map((S) => S.name).join(", ") }),
                h.lastMessage && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-500", children: yr(h.lastMessage.timestamp) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 truncate", children: ((E = h.lastMessage) == null ? void 0 : E.content) || "No messages yet" }),
                h.unreadCount > 0 && /* @__PURE__ */ e.jsx(Ve, { variant: "primary", size: "sm", children: h.unreadCount })
              ] })
            ] })
          ]
        },
        h.id
      );
    }) }) })
  ] });
}, Xs = ({ chat: t, context: r = "consultant", currentUser: s }) => {
  var l, a, o, d;
  const n = (i) => ({
    consultant: "text-blue-600",
    client: "text-green-600",
    admin: "text-purple-600",
    expert: "text-orange-600",
    tool_creator: "text-indigo-600",
    founder: "text-red-600",
    neutral: "text-gray-600"
  })[i] || "text-gray-600";
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 bg-white", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 mr-3", children: t.type === "direct" ? /* @__PURE__ */ e.jsx(
        Ye,
        {
          src: ((l = t.participants.find((i) => i.id !== s.id)) == null ? void 0 : l.avatar) || ((a = t.participants[0]) == null ? void 0 : a.avatar),
          alt: ((o = t.participants.find((i) => i.id !== s.id)) == null ? void 0 : o.name) || ((d = t.participants[0]) == null ? void 0 : d.name),
          size: "md"
        }
      ) : /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx(xe, { name: "Users", className: "w-5 h-5 text-gray-600" }) }) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: t.name || t.participants.filter((i) => i.id !== s.id).map((i) => i.name).join(", ") }),
        /* @__PURE__ */ e.jsxs("p", { className: Ce("text-sm", n(r)), children: [
          t.participants.length,
          " participant",
          t.participants.length !== 1 ? "s" : ""
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ e.jsx(ee, { variant: "ghost", size: "sm", children: /* @__PURE__ */ e.jsx(xe, { name: "Phone", className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(ee, { variant: "ghost", size: "sm", children: /* @__PURE__ */ e.jsx(xe, { name: "Video", className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(ee, { variant: "ghost", size: "sm", children: /* @__PURE__ */ e.jsx(xe, { name: "Info", className: "w-4 h-4" }) })
    ] })
  ] });
}, Qs = ({
  messages: t,
  currentUser: r,
  context: s = "consultant",
  onMessageReply: n,
  onMessageReact: l,
  loading: a
}) => {
  const o = (d) => ({
    consultant: "bg-blue-500",
    client: "bg-green-500",
    admin: "bg-purple-500",
    expert: "bg-orange-500",
    tool_creator: "bg-indigo-500",
    founder: "bg-red-500",
    neutral: "bg-gray-500"
  })[d] || "bg-gray-500";
  return a ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(Ke, { size: "lg" }) }) : t.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(
    We,
    {
      title: "No messages yet",
      description: "Start the conversation!"
    }
  ) }) : /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: t.map((d) => {
    const i = d.sender.id === r.id;
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: Ce(
          "flex",
          i ? "justify-end" : "justify-start"
        ),
        children: /* @__PURE__ */ e.jsxs("div", { className: Ce("flex max-w-xs lg:max-w-md", i ? "flex-row-reverse" : "flex-row"), children: [
          !i && /* @__PURE__ */ e.jsx(
            Ye,
            {
              src: d.sender.avatar,
              alt: d.sender.name,
              size: "sm",
              className: "flex-shrink-0 mr-2"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: Ce("flex flex-col", i ? "items-end" : "items-start"), children: [
            !i && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-500 mb-1", children: d.sender.name }),
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: Ce(
                  "px-4 py-2 rounded-lg",
                  i ? Ce("text-white", o(s)) : "bg-gray-100 text-gray-900"
                ),
                children: [
                  /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: d.content }),
                  d.attachments && d.attachments.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-2 space-y-1", children: d.attachments.map((h) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 text-xs", children: [
                    /* @__PURE__ */ e.jsx(xe, { name: "Paperclip", className: "w-3 h-3" }),
                    /* @__PURE__ */ e.jsx("span", { children: h.name })
                  ] }, h.id)) })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center mt-1 space-x-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-500", children: yr(d.timestamp) }),
              d.status === "read" && i && /* @__PURE__ */ e.jsx(xe, { name: "CheckCheck", className: "w-3 h-3 text-blue-500" }),
              d.reactions && d.reactions.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex space-x-1", children: d.reactions.map((h, x) => /* @__PURE__ */ e.jsxs("span", { className: "text-xs bg-gray-200 px-1 rounded", children: [
                h.emoji,
                " ",
                h.users.length
              ] }, x)) })
            ] })
          ] })
        ] })
      },
      d.id
    );
  }) });
}, Zs = ({
  onSend: t,
  onTyping: r,
  context: s = "consultant",
  placeholder: n = "Type a message...",
  disabled: l
}) => {
  const [a, o] = I(""), [d, i] = I([]), h = () => {
    (a.trim() || d.length > 0) && (t(a.trim(), d), o(""), i([]));
  }, x = (y) => {
    y.key === "Enter" && !y.shiftKey && (y.preventDefault(), h());
  }, m = (y) => ({
    consultant: "text-blue-600 hover:text-blue-700",
    client: "text-green-600 hover:text-green-700",
    admin: "text-purple-600 hover:text-purple-700",
    expert: "text-orange-600 hover:text-orange-700",
    tool_creator: "text-indigo-600 hover:text-indigo-700",
    founder: "text-red-600 hover:text-red-700",
    neutral: "text-gray-600 hover:text-gray-700"
  })[y] || "text-gray-600 hover:text-gray-700";
  return /* @__PURE__ */ e.jsx("div", { className: "p-4 border-t border-gray-200 bg-white", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-end space-x-2", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ e.jsx(
        "textarea",
        {
          value: a,
          onChange: (y) => {
            o(y.target.value), r == null || r();
          },
          onKeyPress: x,
          placeholder: n,
          disabled: l,
          className: "w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          rows: 1,
          style: { minHeight: "44px", maxHeight: "120px" }
        }
      ),
      d.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: d.map((y, T) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded text-sm", children: [
        /* @__PURE__ */ e.jsx(xe, { name: "Paperclip", className: "w-3 h-3" }),
        /* @__PURE__ */ e.jsx("span", { children: y.name }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => i((E) => E.filter((S, w) => w !== T)),
            className: "text-gray-500 hover:text-red-500",
            children: /* @__PURE__ */ e.jsx(xe, { name: "X", className: "w-3 h-3" })
          }
        )
      ] }, T)) })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "file",
          multiple: !0,
          onChange: (y) => {
            y.target.files && i((T) => [...T, ...Array.from(y.target.files)]);
          },
          className: "hidden",
          id: "file-upload"
        }
      ),
      /* @__PURE__ */ e.jsx(
        ee,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => {
            var y;
            return (y = document.getElementById("file-upload")) == null ? void 0 : y.click();
          },
          disabled: l,
          children: /* @__PURE__ */ e.jsx(xe, { name: "Paperclip", className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsx(
        ee,
        {
          onClick: h,
          disabled: l || !a.trim() && d.length === 0,
          className: Ce("px-4 py-2", m(s)),
          children: /* @__PURE__ */ e.jsx(xe, { name: "Send", className: "w-4 h-4" })
        }
      )
    ] })
  ] }) });
}, za = ({
  workspace: t,
  currentUser: r,
  chatId: s,
  context: n = "consultant",
  onMessageSend: l,
  onChatSelect: a,
  showSidebar: o = !0,
  showSearch: d = !0,
  permissions: i = [],
  className: h
}) => {
  const [x, m] = I(null), [y, T] = I([]), [E, S] = I([]), [w, z] = I(!1), { socket: R } = Js();
  Ge(() => {
    const g = [
      {
        id: "1",
        type: "direct",
        participants: [
          r,
          { id: "2", name: "John Doe", email: "john@example.com", avatar: "/avatars/john.jpg" }
        ],
        unreadCount: 2,
        workspace: t.id,
        createdAt: /* @__PURE__ */ new Date(),
        lastMessage: {
          id: "1",
          content: "Hey, how are you?",
          sender: { id: "2", name: "John Doe", email: "john@example.com" },
          timestamp: /* @__PURE__ */ new Date(),
          chatId: "1",
          status: "read"
        }
      }
    ];
    if (S(g), s) {
      const M = g.find((B) => B.id === s);
      M && m(M);
    }
  }, [t.id, r, s]), Ge(() => (R.on("message:new", C), R.on("message:update", f), R.on("typing:start", u), R.on("typing:stop", j), () => {
    R.off("message:new"), R.off("message:update"), R.off("typing:start"), R.off("typing:stop");
  }), [R]);
  const C = (g) => {
    T((M) => [...M, g]);
  }, f = (g) => {
    T((M) => M.map((B) => B.id === g.id ? g : B));
  }, u = (g) => {
  }, j = (g) => {
  }, P = (g) => {
    m(g), a == null || a(g), z(!0), setTimeout(() => {
      const M = [
        {
          id: "1",
          content: "Hey, how are you?",
          sender: g.participants.find((B) => B.id !== r.id) || g.participants[0],
          timestamp: new Date(Date.now() - 36e5),
          chatId: g.id,
          status: "read"
        },
        {
          id: "2",
          content: "I'm doing well, thanks! How about you?",
          sender: r,
          timestamp: new Date(Date.now() - 3e6),
          chatId: g.id,
          status: "read"
        }
      ];
      T(M), z(!1);
    }, 500);
  }, k = (g, M) => {
    if (!x) return;
    const B = {
      id: Date.now().toString(),
      content: g,
      sender: r,
      timestamp: /* @__PURE__ */ new Date(),
      chatId: x.id,
      status: "sending",
      attachments: M == null ? void 0 : M.map((W) => ({
        id: Date.now().toString(),
        name: W.name,
        type: W.type,
        size: W.size,
        url: URL.createObjectURL(W)
      }))
    };
    T((W) => [...W, B]), l == null || l(B), setTimeout(() => {
      T((W) => W.map(
        (N) => N.id === B.id ? { ...N, status: "sent" } : N
      ));
    }, 1e3);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: Ce("flex h-full bg-white rounded-lg shadow-lg overflow-hidden", h), children: [
    o && /* @__PURE__ */ e.jsx("div", { className: "w-80 flex-shrink-0", children: /* @__PURE__ */ e.jsx(
      Us,
      {
        chats: E,
        selectedChat: x,
        onChatSelect: P,
        context: n,
        currentUser: r
      }
    ) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col", children: x ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        Xs,
        {
          chat: x,
          context: n,
          currentUser: r
        }
      ),
      /* @__PURE__ */ e.jsx(
        Qs,
        {
          messages: y,
          currentUser: r,
          context: n,
          loading: w
        }
      ),
      /* @__PURE__ */ e.jsx(
        Zs,
        {
          onSend: k,
          context: n,
          placeholder: "Type a message...",
          disabled: !1
        }
      )
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(
      We,
      {
        title: "Select a conversation",
        description: "Choose a conversation from the sidebar to start chatting"
      }
    ) }) })
  ] });
}, sr = {
  consultant: {
    primary: "#8B5CF6",
    secondary: "#A78BFA",
    accent: "#C4B5FD",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  },
  client: {
    primary: "#3B82F6",
    secondary: "#60A5FA",
    accent: "#93C5FD",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  },
  admin: {
    primary: "#EF4444",
    secondary: "#F87171",
    accent: "#FCA5A5",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  },
  expert: {
    primary: "#10B981",
    secondary: "#34D399",
    accent: "#6EE7B7",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  },
  tool_creator: {
    primary: "#F59E0B",
    secondary: "#FBBF24",
    accent: "#FCD34D",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  },
  founder: {
    primary: "#7C3AED",
    secondary: "#8B5CF6",
    accent: "#A78BFA",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  },
  neutral: {
    primary: "#6B7280",
    secondary: "#9CA3AF",
    accent: "#D1D5DB",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  }
}, vr = (t = "neutral") => sr[t] || sr.neutral, ea = (t) => {
  const s = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), n = Math.floor(s / 6e4), l = Math.floor(s / 36e5), a = Math.floor(s / 864e5);
  return n < 1 ? "just now" : n < 60 ? `${n}m ago` : l < 24 ? `${l}h ago` : a < 7 ? `${a}d ago` : t.toLocaleDateString();
}, ta = (t, r) => {
  switch (t) {
    case "urgent":
      return r.error;
    case "high":
      return r.warning;
    case "medium":
      return r.primary;
    case "low":
    default:
      return r.textSecondary;
  }
}, jr = ({
  onSubmit: t,
  onCancel: r,
  placeholder: s = "Write a comment...",
  autoFocus: n = !1,
  className: l
}) => {
  const [a, o] = I(""), [d, i] = I(!1), h = D(async (m) => {
    if (m.preventDefault(), !(!a.trim() || d)) {
      i(!0);
      try {
        await t(a.trim()), o("");
      } finally {
        i(!1);
      }
    }
  }, [a, t, d]), x = D((m) => {
    m.key === "Enter" && (m.metaKey || m.ctrlKey) && h(m), m.key === "Escape" && r && r();
  }, [h, r]);
  return /* @__PURE__ */ e.jsxs("form", { onSubmit: h, className: Ce("space-y-3", l), children: [
    /* @__PURE__ */ e.jsx(
      "textarea",
      {
        value: a,
        onChange: (m) => o(m.target.value),
        onKeyDown: x,
        placeholder: s,
        autoFocus: n,
        rows: 3,
        className: "w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-500", children: "Press Cmd+Enter to submit" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
        r && /* @__PURE__ */ e.jsx(
          ee,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: r,
            disabled: d,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ e.jsx(
          ee,
          {
            type: "submit",
            size: "sm",
            disabled: !a.trim() || d,
            children: d ? "Posting..." : "Comment"
          }
        )
      ] })
    ] })
  ] });
}, wr = ({
  comment: t,
  currentUser: r,
  context: s = "neutral",
  depth: n = 0,
  onReply: l,
  onResolve: a,
  onEdit: o,
  onDelete: d,
  onReact: i,
  allowReplies: h = !0,
  allowResolution: x = !0,
  allowEditing: m = !0,
  permissions: y = []
}) => {
  const [T, E] = I(!1), [S, w] = I(!1), [z, R] = I(t.content), [C, f] = I(!1), u = vr(s), j = t.author.id === (r == null ? void 0 : r.id), P = h && y.includes("comment:reply"), k = x && (y.includes("comment:resolve") || j), g = m && (y.includes("comment:edit") || j), M = y.includes("comment:delete") || j, B = D((p) => {
    l && (l(t.id, p), E(!1));
  }, [t.id, l]), W = D(() => {
    o && z.trim() !== t.content && o(t.id, z.trim()), w(!1);
  }, [t.id, t.content, z, o]), N = D((p) => {
    i && i(t.id, p);
  }, [t.id, i]), L = t.priority ? ta(t.priority, u) : void 0;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: Ce(
        "group relative",
        n > 0 && "ml-8 border-l-2 border-gray-100 pl-4"
      ),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [
        t.priority && t.priority !== "low" && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute -left-1 top-3 w-2 h-2 rounded-full",
            style: { backgroundColor: L }
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-3", children: [
          /* @__PURE__ */ e.jsx(
            Ye,
            {
              src: t.author.avatar,
              alt: t.author.name,
              size: "sm",
              className: "flex-shrink-0"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 mb-1", children: [
              /* @__PURE__ */ e.jsx("span", { className: "font-medium text-sm text-gray-900", children: t.author.name }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-500", children: ea(t.timestamp) }),
              t.edited && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-400", children: "(edited)" }),
              t.resolved && /* @__PURE__ */ e.jsx(Ve, { variant: "success", size: "sm", children: "Resolved" }),
              t.priority && t.priority !== "low" && /* @__PURE__ */ e.jsx(
                Ve,
                {
                  variant: "secondary",
                  size: "sm",
                  className: "border",
                  children: t.priority
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "mb-2", children: S ? /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  value: z,
                  onChange: (p) => R(p.target.value),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500",
                  rows: 3
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ e.jsx(ee, { size: "sm", onClick: W, children: "Save" }),
                /* @__PURE__ */ e.jsx(
                  ee,
                  {
                    size: "sm",
                    variant: "ghost",
                    onClick: () => {
                      w(!1), R(t.content);
                    },
                    children: "Cancel"
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-700 whitespace-pre-wrap", children: t.content }) }),
            t.tags && t.tags.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 mb-2", children: t.tags.map((p) => /* @__PURE__ */ e.jsx(Ve, { variant: "secondary", size: "sm", children: p }, p)) }),
            t.reactions && t.reactions.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex items-center space-x-1 mb-2", children: t.reactions.map((p) => /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => N(p.emoji),
                className: "flex items-center space-x-1 px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-xs",
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: p.emoji }),
                  /* @__PURE__ */ e.jsx("span", { children: p.users.length })
                ]
              },
              p.emoji
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: Ce(
              "flex items-center space-x-3 text-xs text-gray-500 transition-opacity",
              C ? "opacity-100" : "opacity-0"
            ), children: [
              P && !t.resolved && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => E(!0),
                  className: "hover:text-gray-700",
                  children: "Reply"
                }
              ),
              g && !t.resolved && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => w(!0),
                  className: "hover:text-gray-700",
                  children: "Edit"
                }
              ),
              k && !t.resolved && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => a == null ? void 0 : a(t.id),
                  className: "hover:text-gray-700",
                  children: "Resolve"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => N("👍"),
                  className: "hover:text-gray-700",
                  children: "👍"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => N("❤️"),
                  className: "hover:text-gray-700",
                  children: "❤️"
                }
              ),
              M && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => d == null ? void 0 : d(t.id),
                  className: "hover:text-red-600",
                  children: "Delete"
                }
              )
            ] }),
            T && /* @__PURE__ */ e.jsx("div", { className: "mt-3", children: /* @__PURE__ */ e.jsx(
              jr,
              {
                onSubmit: B,
                onCancel: () => E(!1),
                placeholder: "Write a reply...",
                autoFocus: !0
              }
            ) }),
            t.replies && t.replies.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-4", children: t.replies.map((p) => /* @__PURE__ */ e.jsx(
              wr,
              {
                comment: p,
                currentUser: r,
                context: s,
                depth: n + 1,
                onReply: l,
                onResolve: a,
                onEdit: o,
                onDelete: d,
                onReact: i,
                allowReplies: h,
                allowResolution: x,
                allowEditing: m,
                permissions: y
              },
              p.id
            )) })
          ] })
        ] })
      ]
    }
  );
}, Da = ({
  comments: t,
  parentId: r,
  parentType: s,
  currentUser: n,
  context: l = "neutral",
  onCommentAdd: a,
  onCommentReply: o,
  onCommentResolve: d,
  onCommentEdit: i,
  onCommentDelete: h,
  onCommentReact: x,
  allowReplies: m = !0,
  allowResolution: y = !0,
  allowEditing: T = !0,
  permissions: E = [],
  className: S
}) => {
  const [w, z] = I(!1), [R, C] = I("all"), f = vr(l), u = de(() => t.map((B) => ({
    ...B,
    status: "active"
  })), [t]), j = de(() => u.filter((B) => {
    switch (R) {
      case "unresolved":
        return !B.resolved;
      case "resolved":
        return B.resolved;
      default:
        return !0;
    }
  }), [u, R]), P = de(() => [...j].sort(
    (B, W) => new Date(B.timestamp).getTime() - new Date(W.timestamp).getTime()
  ), [j]), k = D((B) => {
    if (a) {
      const W = {
        content: B,
        author: n,
        workspaceId: n.workspace || "",
        resolved: !1,
        status: "active"
      };
      a(W), z(!1);
    }
  }, [n, a]), g = D((B, W) => {
    if (o) {
      const N = {
        content: W,
        author: n,
        parentId: B,
        workspaceId: n.workspace || "",
        resolved: !1,
        status: "active"
      };
      o(B, N);
    }
  }, [n, o]), M = E.includes("comment:create");
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: Ce("space-y-4", S),
      style: { "--comment-primary": f.primary },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ e.jsxs("h3", { className: "text-lg font-medium text-gray-900", children: [
              "Comments (",
              u.length,
              ")"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => C("all"),
                  className: Ce(
                    "px-3 py-1 text-sm rounded-md transition-colors",
                    R === "all" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900"
                  ),
                  children: "All"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => C("unresolved"),
                  className: Ce(
                    "px-3 py-1 text-sm rounded-md transition-colors",
                    R === "unresolved" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900"
                  ),
                  children: "Open"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => C("resolved"),
                  className: Ce(
                    "px-3 py-1 text-sm rounded-md transition-colors",
                    R === "resolved" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900"
                  ),
                  children: "Resolved"
                }
              )
            ] })
          ] }),
          M && /* @__PURE__ */ e.jsxs(
            ee,
            {
              size: "sm",
              onClick: () => z(!0),
              disabled: w,
              children: [
                /* @__PURE__ */ e.jsx(xe, { name: "Plus", className: "w-4 h-4 mr-1" }),
                "Add Comment"
              ]
            }
          )
        ] }),
        w && /* @__PURE__ */ e.jsx("div", { className: "border border-gray-200 rounded-lg p-4", children: /* @__PURE__ */ e.jsx(
          jr,
          {
            onSubmit: k,
            onCancel: () => z(!1),
            autoFocus: !0
          }
        ) }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-6", children: P.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "text-center py-8 text-gray-500", children: R === "all" ? "No comments yet. Be the first to comment!" : `No ${R} comments.` }) : P.map((B) => /* @__PURE__ */ e.jsx(
          wr,
          {
            comment: B,
            currentUser: n,
            context: l,
            onReply: g,
            onResolve: d,
            onEdit: i,
            onDelete: h,
            onReact: x,
            allowReplies: m,
            allowResolution: y,
            allowEditing: T,
            permissions: E
          },
          B.id
        )) })
      ]
    }
  );
}, ra = {
  system: "System",
  chat: "Chat",
  comment: "Comments",
  task: "Tasks",
  billing: "Billing",
  general: "General"
}, sa = {
  info: { icon: "Info", color: "blue" },
  success: { icon: "CheckCircle", color: "green" },
  warning: { icon: "AlertTriangle", color: "yellow" },
  error: { icon: "AlertCircle", color: "red" },
  mention: { icon: "AtSign", color: "purple" },
  update: { icon: "RefreshCw", color: "blue" }
}, aa = (t) => {
  const s = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), n = Math.floor(s / 6e4), l = Math.floor(s / 36e5), a = Math.floor(s / 864e5);
  return n < 1 ? "Just now" : n < 60 ? `${n}m ago` : l < 24 ? `${l}h ago` : a < 7 ? `${a}d ago` : t.toLocaleDateString();
}, na = (t) => {
  const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate()), n = new Date(s.getTime() - 864e5), l = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  return l.getTime() === s.getTime() ? "Today" : l.getTime() === n.getTime() ? "Yesterday" : t.toLocaleDateString();
}, la = ({ children: t, context: r }) => /* @__PURE__ */ e.jsx("div", { className: `
    notification-center
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-700
    rounded-lg shadow-lg
    w-96 max-h-96 overflow-hidden
    ${r === "consultant" ? "border-blue-200 dark:border-blue-800" : ""}
    ${r === "client" ? "border-green-200 dark:border-green-800" : ""}
    ${r === "admin" ? "border-purple-200 dark:border-purple-800" : ""}
    ${r === "expert" ? "border-orange-200 dark:border-orange-800" : ""}
    ${r === "tool_creator" ? "border-pink-200 dark:border-pink-800" : ""}
    ${r === "founder" ? "border-yellow-200 dark:border-yellow-800" : ""}
  `, children: t }), oa = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "notification-header p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between", children: t }), ia = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "header-actions flex items-center gap-2", children: t }), ca = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "notification-filters p-2 border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-1", children: t }), St = ({
  children: t,
  active: r,
  onClick: s
}) => /* @__PURE__ */ e.jsx(
  "button",
  {
    onClick: s,
    className: `
      filter-button px-3 py-1 rounded-full text-sm font-medium transition-colors
      ${r ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"}
    `,
    children: t
  }
), da = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "notification-list max-h-80 overflow-y-auto", children: t }), ua = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "notification-group", children: t }), ma = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "date-header px-4 py-2 bg-gray-50 dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 sticky top-0", children: t }), xa = ({
  notification: t,
  onClick: r,
  onMarkAsRead: s,
  context: n
}) => {
  const l = sa[t.type];
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
        notification-item p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer
        hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors
        ${t.read ? "" : "bg-blue-50 dark:bg-blue-950"}
      `,
      onClick: r,
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ e.jsx("div", { className: `
          notification-icon flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          ${l.color === "blue" ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400" : ""}
          ${l.color === "green" ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" : ""}
          ${l.color === "yellow" ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400" : ""}
          ${l.color === "red" ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400" : ""}
          ${l.color === "purple" ? "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400" : ""}
        `, children: /* @__PURE__ */ e.jsx(xe, { name: l.icon, size: "sm" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray-900 dark:text-gray-100 truncate", children: t.title }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: t.message })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 ml-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: aa(t.timestamp) }),
              !t.read && /* @__PURE__ */ e.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" })
            ] })
          ] }),
          t.sender && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
            /* @__PURE__ */ e.jsx(
              Ye,
              {
                src: t.sender.avatar,
                alt: t.sender.name,
                size: "xs",
                fallback: t.sender.name.charAt(0)
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: t.sender.name })
          ] }),
          t.actions && t.actions.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex gap-2 mt-3", children: t.actions.map((a) => /* @__PURE__ */ e.jsx(
            ee,
            {
              variant: a.type === "primary" ? "primary" : "secondary",
              size: "sm",
              onClick: (o) => {
                o.stopPropagation();
              },
              children: a.label
            },
            a.id
          )) })
        ] })
      ] })
    }
  );
}, ha = ({ message: t, context: r }) => /* @__PURE__ */ e.jsxs("div", { className: "empty-state p-8 text-center", children: [
  /* @__PURE__ */ e.jsx(xe, { name: "Bell", size: "lg", className: "mx-auto mb-4 text-gray-400" }),
  /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: t })
] }), _a = ({
  notifications: t,
  currentUser: r,
  context: s = "neutral",
  onNotificationClick: n,
  onMarkAsRead: l,
  onMarkAllAsRead: a,
  onClearAll: o,
  showFilters: d = !0,
  showSettings: i = !0,
  permissions: h = []
}) => {
  const [x, m] = I("all"), [y, T] = I(!1), E = (j) => h.includes(j), S = de(() => {
    let j = t;
    return x === "unread" ? j = j.filter((P) => !P.read) : x !== "all" && (j = j.filter((P) => P.category === x)), j.sort((P, k) => k.timestamp.getTime() - P.timestamp.getTime());
  }, [t, x]), w = de(() => S.reduce((j, P) => {
    const k = na(P.timestamp);
    return j[k] || (j[k] = []), j[k].push(P), j;
  }, {}), [S]), z = D((j) => {
    !j.read && l && l(j.id), n && n(j);
  }, [l, n]), R = D((j) => {
    l && l(j);
  }, [l]), C = D(() => {
    a && a();
  }, [a]), f = D(() => {
    o && o();
  }, [o]), u = t.filter((j) => !j.read).length;
  return /* @__PURE__ */ e.jsxs(la, { context: s, children: [
    /* @__PURE__ */ e.jsxs(oa, { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: "Notifications" }),
        u > 0 && /* @__PURE__ */ e.jsx(Ve, { variant: "primary", size: "sm", children: u })
      ] }),
      /* @__PURE__ */ e.jsxs(ia, { children: [
        u > 0 && /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "ghost",
            size: "sm",
            onClick: C,
            children: "Mark all as read"
          }
        ),
        t.length > 0 && E("notification:clear") && /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "ghost",
            size: "sm",
            onClick: f,
            children: "Clear all"
          }
        ),
        i && /* @__PURE__ */ e.jsx(
          ee,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => T(!0),
            children: /* @__PURE__ */ e.jsx(xe, { name: "Settings", size: "sm" })
          }
        )
      ] })
    ] }),
    d && /* @__PURE__ */ e.jsxs(ca, { children: [
      /* @__PURE__ */ e.jsx(
        St,
        {
          active: x === "all",
          onClick: () => m("all"),
          children: "All"
        }
      ),
      /* @__PURE__ */ e.jsxs(
        St,
        {
          active: x === "unread",
          onClick: () => m("unread"),
          children: [
            "Unread ",
            u > 0 && `(${u})`
          ]
        }
      ),
      Object.entries(ra).map(([j, P]) => {
        const k = t.filter((g) => g.category === j).length;
        return k > 0 ? /* @__PURE__ */ e.jsxs(
          St,
          {
            active: x === j,
            onClick: () => m(j),
            children: [
              P,
              " (",
              k,
              ")"
            ]
          },
          j
        ) : null;
      })
    ] }),
    /* @__PURE__ */ e.jsx(da, { children: Object.keys(w).length === 0 ? /* @__PURE__ */ e.jsx(
      ha,
      {
        message: x === "unread" ? "No unread notifications" : "No notifications",
        context: s
      }
    ) : Object.entries(w).map(([j, P]) => /* @__PURE__ */ e.jsxs(ua, { children: [
      /* @__PURE__ */ e.jsx(ma, { children: j }),
      P.map((k) => /* @__PURE__ */ e.jsx(
        xa,
        {
          notification: k,
          onClick: () => z(k),
          onMarkAsRead: () => R(k.id),
          context: s
        },
        k.id
      ))
    ] }, j)) })
  ] });
};
export {
  Sa as ActivityFeed,
  ya as BreadcrumbNav,
  Ea as CardGrid,
  za as ChatInterface,
  wa as ClientNav,
  Da as CommentThread,
  Na as ConsultantNav,
  Ta as DataGrid,
  Ra as DataTable,
  $a as FormBuilder,
  Pa as FormTemplate,
  Aa as FormWizard,
  Ca as MobileNav,
  _a as NotificationCenter,
  ka as SideNavigation,
  va as TabNavigation,
  Fa as Timeline,
  pa as TopNavigation,
  ja as WorkspaceNav
};

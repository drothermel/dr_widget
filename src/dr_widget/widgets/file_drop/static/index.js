var Js = Object.defineProperty;
var Qs = Object.getPrototypeOf;
var $s = Reflect.get;
var Ki = (e) => {
  throw TypeError(e);
};
var ea = (e, t, r) => t in e ? Js(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var $ = (e, t, r) => ea(e, typeof t != "symbol" ? t + "" : t, r), Bn = (e, t, r) => t.has(e) || Ki("Cannot " + r);
var u = (e, t, r) => (Bn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), F = (e, t, r) => t.has(e) ? Ki("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), N = (e, t, r, n) => (Bn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Y = (e, t, r) => (Bn(e, t, "access private method"), r);
var Yi = (e, t, r) => $s(Qs(e), r, t);
var wi = Array.isArray, ta = Array.prototype.indexOf, xi = Array.from, ra = Object.defineProperty, It = Object.getOwnPropertyDescriptor, na = Object.getOwnPropertyDescriptors, ia = Object.prototype, oa = Array.prototype, To = Object.getPrototypeOf, qi = Object.isExtensible;
function Sr(e) {
  return typeof e == "function";
}
const ue = () => {
};
function sa(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Co() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function aa(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const Ce = 2, ki = 4, Tn = 8, xt = 16, kt = 32, Zt = 64, Cn = 128, Se = 1024, Ge = 2048, Et = 4096, Ve = 8192, bt = 16384, Ei = 32768, yt = 65536, Xi = 1 << 17, la = 1 << 18, kr = 1 << 19, Po = 1 << 20, Ke = 256, hn = 512, vn = 32768, qn = 1 << 21, Ai = 1 << 22, Yt = 1 << 23, Rt = Symbol("$state"), Mo = Symbol("legacy props"), ca = Symbol(""), rr = new class extends Error {
  constructor() {
    super(...arguments);
    $(this, "name", "StaleReactionError");
    $(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ua(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function fa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function da(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ha() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function va(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function pa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ga(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ma() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ba() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _a() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ya() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Pn = 1, Mn = 2, zo = 4, wa = 8, xa = 16, ka = 1, Ea = 4, Aa = 8, Sa = 16, Ta = 1, Ca = 2, ye = Symbol(), Pa = "http://www.w3.org/1999/xhtml", Ma = "http://www.w3.org/2000/svg", Io = "@attach";
function za() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ia() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ra = !1;
function Ro(e) {
  return e === this.v;
}
function Fa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Fo(e) {
  return !Fa(e, this.v);
}
let xe = null;
function gr(e) {
  xe = e;
}
function Zi(e) {
  return (
    /** @type {T} */
    Si().get(e)
  );
}
function Na(e, t) {
  return Si().set(e, t), t;
}
function Oa(e) {
  return Si().has(e);
}
function q(e, t = !1, r) {
  xe = {
    p: xe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function X(e) {
  var t = (
    /** @type {ComponentContext} */
    xe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      $o(n);
  }
  return t.i = !0, xe = t.p, /** @type {T} */
  {};
}
function No() {
  return !0;
}
function Si(e) {
  return xe === null && ua(), xe.c ?? (xe.c = new Map(ja(xe) || void 0));
}
function ja(e) {
  let t = e.p;
  for (; t !== null; ) {
    const r = t.c;
    if (r !== null)
      return r;
    t = t.p;
  }
  return null;
}
let nr = [];
function La() {
  var e = nr;
  nr = [], sa(e);
}
function Jt(e) {
  if (nr.length === 0) {
    var t = nr;
    queueMicrotask(() => {
      t === nr && La();
    });
  }
  nr.push(e);
}
function Oo(e) {
  var t = U;
  if (t === null)
    return G.f |= Yt, e;
  if (t.f & Ei)
    mr(e, t);
  else {
    if (!(t.f & Cn))
      throw e;
    t.b.error(e);
  }
}
function mr(e, t) {
  for (; t !== null; ) {
    if (t.f & Cn)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e;
}
const tn = /* @__PURE__ */ new Set();
let de = null, we = null, St = [], Ti = null, Xn = !1;
var ar, lr, Bt, Wt, Or, cr, ur, Ae, Zn, Vt, jo, Lo;
const yn = class yn {
  constructor() {
    F(this, Ae);
    $(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    $(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    $(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    F(this, ar, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    F(this, lr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    F(this, Bt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    F(this, Wt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    F(this, Or, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    F(this, cr, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    F(this, ur, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    $(this, "skipped_effects", /* @__PURE__ */ new Set());
    $(this, "is_fork", !1);
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var n;
    St = [], this.apply();
    var r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const i of t)
      Y(this, Ae, Zn).call(this, i, r);
    this.is_fork || Y(this, Ae, jo).call(this), u(this, Wt) > 0 || this.is_fork ? (Y(this, Ae, Vt).call(this, r.effects), Y(this, Ae, Vt).call(this, r.render_effects), Y(this, Ae, Vt).call(this, r.block_effects)) : (de = null, Ji(r.render_effects), Ji(r.effects), (n = u(this, Or)) == null || n.resolve()), we = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    this.previous.has(t) || this.previous.set(t, r), this.current.set(t, t.v), we == null || we.set(t, t.v);
  }
  activate() {
    de = this;
  }
  deactivate() {
    de = null, we = null;
  }
  flush() {
    if (this.activate(), St.length > 0) {
      if (Va(), de !== null && de !== this)
        return;
    } else u(this, Bt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of u(this, lr)) t(this);
    u(this, lr).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    N(this, Bt, u(this, Bt) + 1), t && N(this, Wt, u(this, Wt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    N(this, Bt, u(this, Bt) - 1), t && N(this, Wt, u(this, Wt) - 1), this.revive();
  }
  revive() {
    for (const t of u(this, cr))
      Te(t, Ge), Xt(t);
    for (const t of u(this, ur))
      Te(t, Et), Xt(t);
    N(this, cr, []), N(this, ur, []), this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    u(this, ar).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    u(this, lr).add(t);
  }
  settled() {
    return (u(this, Or) ?? N(this, Or, Co())).promise;
  }
  static ensure() {
    if (de === null) {
      const t = de = new yn();
      tn.add(de), yn.enqueue(() => {
        de === t && t.flush();
      });
    }
    return de;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Jt(t);
  }
  apply() {
  }
};
ar = new WeakMap(), lr = new WeakMap(), Bt = new WeakMap(), Wt = new WeakMap(), Or = new WeakMap(), cr = new WeakMap(), ur = new WeakMap(), Ae = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Zn = function(t, r) {
  var f;
  t.f ^= Se;
  for (var n = t.first; n !== null; ) {
    var i = n.f, o = (i & (kt | Zt)) !== 0, s = o && (i & Se) !== 0, c = s || (i & Ve) !== 0 || this.skipped_effects.has(n);
    if (n.f & Cn && ((f = n.b) != null && f.is_pending()) && (r = {
      parent: r,
      effect: n,
      effects: [],
      render_effects: [],
      block_effects: []
    }), !c && n.fn !== null) {
      o ? n.f ^= Se : i & ki ? r.effects.push(n) : Xr(n) && (n.f & xt && r.block_effects.push(n), Fr(n));
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      l === r.effect && (Y(this, Ae, Vt).call(this, r.effects), Y(this, Ae, Vt).call(this, r.render_effects), Y(this, Ae, Vt).call(this, r.block_effects), r = /** @type {EffectTarget} */
      r.parent), n = l.next, l = l.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Vt = function(t) {
  for (const r of t)
    (r.f & Ge ? u(this, cr) : u(this, ur)).push(r), Te(r, Se);
}, jo = function() {
  if (u(this, Wt) === 0) {
    for (const t of u(this, ar)) t();
    u(this, ar).clear();
  }
  u(this, Bt) === 0 && Y(this, Ae, Lo).call(this);
}, Lo = function() {
  var i;
  if (tn.size > 1) {
    this.previous.clear();
    var t = we, r = !0, n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const o of tn) {
      if (o === this) {
        r = !1;
        continue;
      }
      const s = [];
      for (const [a, l] of this.current) {
        if (o.current.has(a))
          if (r && l !== o.current.get(a))
            o.current.set(a, l);
          else
            continue;
        s.push(a);
      }
      if (s.length === 0)
        continue;
      const c = [...o.current.keys()].filter((a) => !this.current.has(a));
      if (c.length > 0) {
        const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (const f of s)
          Vo(f, c, a, l);
        if (St.length > 0) {
          de = o, o.apply();
          for (const f of St)
            Y(i = o, Ae, Zn).call(i, f, n);
          St = [], o.deactivate();
        }
      }
    }
    de = null, we = t;
  }
  this.committed = !0, tn.delete(this);
};
let pt = yn;
function Va() {
  var e = or;
  Xn = !0;
  try {
    var t = 0;
    for (eo(!0); St.length > 0; ) {
      var r = pt.ensure();
      if (t++ > 1e3) {
        var n, i;
        Ga();
      }
      r.process(St), Ft.clear();
    }
  } finally {
    Xn = !1, eo(e), Ti = null;
  }
}
function Ga() {
  try {
    pa();
  } catch (e) {
    mr(e, Ti);
  }
}
let qe = null;
function Ji(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (bt | Ve)) && Xr(n) && (qe = /* @__PURE__ */ new Set(), Fr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? ns(n) : n.fn = null), (qe == null ? void 0 : qe.size) > 0)) {
        Ft.clear();
        for (const i of qe) {
          if (i.f & (bt | Ve)) continue;
          const o = [i];
          let s = i.parent;
          for (; s !== null; )
            qe.has(s) && (qe.delete(s), o.push(s)), s = s.parent;
          for (let c = o.length - 1; c >= 0; c--) {
            const a = o[c];
            a.f & (bt | Ve) || Fr(a);
          }
        }
        qe.clear();
      }
    }
    qe = null;
  }
}
function Vo(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      o & Ce ? Vo(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : o & (Ai | xt) && !(o & Ge) && // we may have scheduled this one already
      Go(i, t, n) && (Te(i, Ge), Xt(
        /** @type {Effect} */
        i
      ));
    }
}
function Go(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if (i.f & Ce && Go(
        /** @type {Derived} */
        i,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Xt(e) {
  for (var t = Ti = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Xn && t === U && r & xt)
      return;
    if (r & (Zt | kt)) {
      if (!(r & Se)) return;
      t.f ^= Se;
    }
  }
  St.push(t);
}
function Ci(e) {
  let t = 0, r = Nt(0), n;
  return () => {
    rl() && (C(r), es(() => (t === 0 && (n = yr(() => e(() => st(r)))), t += 1, () => {
      Jt(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, st(r));
      });
    })));
  };
}
var Da = yt | kr | Cn;
function Ba(e, t, r) {
  new Wa(e, t, r);
}
var We, Ue, yi, et, Ut, tt, He, Ie, rt, ft, Tt, Ht, Ct, Kt, Pt, wn, ge, Ua, Ha, Jn, cn, un, Qn;
class Wa {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    F(this, ge);
    /** @type {Boundary | null} */
    $(this, "parent");
    F(this, We, !1);
    /** @type {TemplateNode} */
    F(this, Ue);
    /** @type {TemplateNode | null} */
    F(this, yi, null);
    /** @type {BoundaryProps} */
    F(this, et);
    /** @type {((anchor: Node) => void)} */
    F(this, Ut);
    /** @type {Effect} */
    F(this, tt);
    /** @type {Effect | null} */
    F(this, He, null);
    /** @type {Effect | null} */
    F(this, Ie, null);
    /** @type {Effect | null} */
    F(this, rt, null);
    /** @type {DocumentFragment | null} */
    F(this, ft, null);
    /** @type {TemplateNode | null} */
    F(this, Tt, null);
    F(this, Ht, 0);
    F(this, Ct, 0);
    F(this, Kt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    F(this, Pt, null);
    F(this, wn, Ci(() => (N(this, Pt, Nt(u(this, Ht))), () => {
      N(this, Pt, null);
    })));
    N(this, Ue, t), N(this, et, r), N(this, Ut, n), this.parent = /** @type {Effect} */
    U.b, N(this, We, !!u(this, et).pending), N(this, tt, Ot(() => {
      U.b = this;
      {
        var i = Y(this, ge, Jn).call(this);
        try {
          N(this, He, je(() => n(i)));
        } catch (o) {
          this.error(o);
        }
        u(this, Ct) > 0 ? Y(this, ge, un).call(this) : N(this, We, !1);
      }
      return () => {
        var o;
        (o = u(this, Tt)) == null || o.remove();
      };
    }, Da));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return u(this, We) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!u(this, et).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    Y(this, ge, Qn).call(this, t), N(this, Ht, u(this, Ht) + t), u(this, Pt) && br(u(this, Pt), u(this, Ht));
  }
  get_effect_pending() {
    return u(this, wn).call(this), C(
      /** @type {Source<number>} */
      u(this, Pt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = u(this, et).onerror;
    let n = u(this, et).failed;
    if (u(this, Kt) || !r && !n)
      throw t;
    u(this, He) && (pe(u(this, He)), N(this, He, null)), u(this, Ie) && (pe(u(this, Ie)), N(this, Ie, null)), u(this, rt) && (pe(u(this, rt)), N(this, rt, null));
    var i = !1, o = !1;
    const s = () => {
      if (i) {
        Ia();
        return;
      }
      i = !0, o && ya(), pt.ensure(), N(this, Ht, 0), u(this, rt) !== null && ir(u(this, rt), () => {
        N(this, rt, null);
      }), N(this, We, this.has_pending_snippet()), N(this, He, Y(this, ge, cn).call(this, () => (N(this, Kt, !1), je(() => u(this, Ut).call(this, u(this, Ue)))))), u(this, Ct) > 0 ? Y(this, ge, un).call(this) : N(this, We, !1);
    };
    var c = G;
    try {
      Re(null), o = !0, r == null || r(t, s), o = !1;
    } catch (a) {
      mr(a, u(this, tt) && u(this, tt).parent);
    } finally {
      Re(c);
    }
    n && Jt(() => {
      N(this, rt, Y(this, ge, cn).call(this, () => {
        pt.ensure(), N(this, Kt, !0);
        try {
          return je(() => {
            n(
              u(this, Ue),
              () => t,
              () => s
            );
          });
        } catch (a) {
          return mr(
            a,
            /** @type {Effect} */
            u(this, tt).parent
          ), null;
        } finally {
          N(this, Kt, !1);
        }
      }));
    });
  }
}
We = new WeakMap(), Ue = new WeakMap(), yi = new WeakMap(), et = new WeakMap(), Ut = new WeakMap(), tt = new WeakMap(), He = new WeakMap(), Ie = new WeakMap(), rt = new WeakMap(), ft = new WeakMap(), Tt = new WeakMap(), Ht = new WeakMap(), Ct = new WeakMap(), Kt = new WeakMap(), Pt = new WeakMap(), wn = new WeakMap(), ge = new WeakSet(), Ua = function() {
  try {
    N(this, He, je(() => u(this, Ut).call(this, u(this, Ue))));
  } catch (t) {
    this.error(t);
  }
  N(this, We, !1);
}, Ha = function() {
  const t = u(this, et).pending;
  t && (N(this, Ie, je(() => t(u(this, Ue)))), pt.enqueue(() => {
    var r = Y(this, ge, Jn).call(this);
    N(this, He, Y(this, ge, cn).call(this, () => (pt.ensure(), je(() => u(this, Ut).call(this, r))))), u(this, Ct) > 0 ? Y(this, ge, un).call(this) : (ir(
      /** @type {Effect} */
      u(this, Ie),
      () => {
        N(this, Ie, null);
      }
    ), N(this, We, !1));
  }));
}, Jn = function() {
  var t = u(this, Ue);
  return u(this, We) && (N(this, Tt, wt()), u(this, Ue).before(u(this, Tt)), t = u(this, Tt)), t;
}, /**
 * @param {() => Effect | null} fn
 */
cn = function(t) {
  var r = U, n = G, i = xe;
  at(u(this, tt)), Re(u(this, tt)), gr(u(this, tt).ctx);
  try {
    return t();
  } catch (o) {
    return Oo(o), null;
  } finally {
    at(r), Re(n), gr(i);
  }
}, un = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    u(this, et).pending
  );
  u(this, He) !== null && (N(this, ft, document.createDocumentFragment()), u(this, ft).append(
    /** @type {TemplateNode} */
    u(this, Tt)
  ), ss(u(this, He), u(this, ft))), u(this, Ie) === null && N(this, Ie, je(() => t(u(this, Ue))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Qn = function(t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && Y(r = this.parent, ge, Qn).call(r, t);
    return;
  }
  N(this, Ct, u(this, Ct) + t), u(this, Ct) === 0 && (N(this, We, !1), u(this, Ie) && ir(u(this, Ie), () => {
    N(this, Ie, null);
  }), u(this, ft) && (u(this, Ue).before(u(this, ft)), N(this, ft, null)));
};
function Do(e, t, r, n) {
  const i = zn;
  if (r.length === 0 && e.length === 0) {
    n(t.map(i));
    return;
  }
  var o = de, s = (
    /** @type {Effect} */
    U
  ), c = Ka();
  function a() {
    Promise.all(r.map((l) => /* @__PURE__ */ Ya(l))).then((l) => {
      c();
      try {
        n([...t.map(i), ...l]);
      } catch (f) {
        s.f & bt || mr(f, s);
      }
      o == null || o.deactivate(), pn();
    }).catch((l) => {
      mr(l, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    c();
    try {
      return a();
    } finally {
      o == null || o.deactivate(), pn();
    }
  }) : a();
}
function Ka() {
  var e = U, t = G, r = xe, n = de;
  return function(o = !0) {
    at(e), Re(t), gr(r), o && (n == null || n.activate());
  };
}
function pn() {
  at(null), Re(null), gr(null);
}
// @__NO_SIDE_EFFECTS__
function zn(e) {
  var t = Ce | Ge, r = G !== null && G.f & Ce ? (
    /** @type {Derived} */
    G
  ) : null;
  return U === null || r !== null && r.f & Ke ? t |= Ke : U.f |= kr, {
    ctx: xe,
    deps: null,
    effects: null,
    equals: Ro,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ye
    ),
    wv: 0,
    parent: r ?? U,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
  let r = (
    /** @type {Effect | null} */
    U
  );
  r === null && fa();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Nt(
    /** @type {V} */
    ye
  ), s = !G, c = /* @__PURE__ */ new Map();
  return ol(() => {
    var v;
    var a = Co();
    i = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject).then(() => {
        l === de && l.committed && l.deactivate(), pn();
      });
    } catch (p) {
      a.reject(p), pn();
    }
    var l = (
      /** @type {Batch} */
      de
    );
    if (s) {
      var f = !n.is_pending();
      n.update_pending_count(1), l.increment(f), (v = c.get(l)) == null || v.reject(rr), c.delete(l), c.set(l, a);
    }
    const h = (p, d = void 0) => {
      if (l.activate(), d)
        d !== rr && (o.f |= Yt, br(o, d));
      else {
        o.f & Yt && (o.f ^= Yt), br(o, p);
        for (const [g, m] of c) {
          if (c.delete(g), g === l) break;
          m.reject(rr);
        }
      }
      s && (n.update_pending_count(-1), l.decrement(f));
    };
    a.promise.then(h, (p) => h(null, p || "unknown"));
  }), In(() => {
    for (const a of c.values())
      a.reject(rr);
  }), new Promise((a) => {
    function l(f) {
      function h() {
        f === i ? a(o) : l(i);
      }
      f.then(h, h);
    }
    l(i);
  });
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  const t = /* @__PURE__ */ zn(e);
  return as(t), t;
}
// @__NO_SIDE_EFFECTS__
function Bo(e) {
  const t = /* @__PURE__ */ zn(e);
  return t.equals = Fo, t;
}
function Wo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      pe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function qa(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Ce))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Pi(e) {
  var t, r = U;
  at(qa(e));
  try {
    e.f &= ~vn, Wo(e), t = fs(e);
  } finally {
    at(r);
  }
  return t;
}
function Uo(e) {
  var t = Pi(e);
  if (e.equals(t) || (e.v = t, e.wv = cs()), !Qt)
    if (we !== null)
      we.set(e, e.v);
    else {
      var r = (zt || e.f & Ke) && e.deps !== null ? Et : Se;
      Te(e, r);
    }
}
let $n = /* @__PURE__ */ new Set();
const Ft = /* @__PURE__ */ new Map();
let Ho = !1;
function Nt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ro,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const r = Nt(e);
  return as(r), r;
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t = !1, r = !0) {
  const n = Nt(e);
  return t || (n.equals = Fo), n;
}
function ne(e, t, r = !1) {
  G !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || G.f & Xi) && No() && G.f & (Ce | xt | Ai | Xi) && !(Me != null && Me.includes(e)) && _a();
  let n = r ? gt(t) : t;
  return br(e, n);
}
function br(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Qt ? Ft.set(e, t) : Ft.set(e, r), e.v = t;
    var n = pt.ensure();
    n.capture(e, r), e.f & Ce && (e.f & Ge && Pi(
      /** @type {Derived} */
      e
    ), Te(e, e.f & Ke ? Et : Se)), e.wv = cs(), Ko(e, Ge), U !== null && U.f & Se && !(U.f & (kt | Zt)) && (Be === null ? ll([e]) : Be.push(e)), !n.is_fork && $n.size > 0 && !Ho && Za();
  }
  return t;
}
function Za() {
  Ho = !1;
  const e = Array.from($n);
  for (const t of e)
    t.f & Se && Te(t, Et), Xr(t) && Fr(t);
  $n.clear();
}
function st(e) {
  ne(e, e.v + 1);
}
function Ko(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var o = r[i], s = o.f, c = (s & Ge) === 0;
      c && Te(o, t), s & Ce ? s & vn || (o.f |= vn, Ko(
        /** @type {Derived} */
        o,
        Et
      )) : c && (s & xt && qe !== null && qe.add(
        /** @type {Effect} */
        o
      ), Xt(
        /** @type {Effect} */
        o
      ));
    }
}
function gt(e) {
  if (typeof e != "object" || e === null || Rt in e)
    return e;
  const t = To(e);
  if (t !== ia && t !== oa)
    return e;
  var r = /* @__PURE__ */ new Map(), n = wi(e), i = /* @__PURE__ */ Ee(0), o = _t, s = (c) => {
    if (_t === o)
      return c();
    var a = G, l = _t;
    Re(null), ro(o);
    var f = c();
    return Re(a), ro(l), f;
  };
  return n && r.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, a, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && ma();
        var f = r.get(a);
        return f === void 0 ? f = s(() => {
          var h = /* @__PURE__ */ Ee(l.value);
          return r.set(a, h), h;
        }) : ne(f, l.value, !0), !0;
      },
      deleteProperty(c, a) {
        var l = r.get(a);
        if (l === void 0) {
          if (a in c) {
            const f = s(() => /* @__PURE__ */ Ee(ye));
            r.set(a, f), st(i);
          }
        } else
          ne(l, ye), st(i);
        return !0;
      },
      get(c, a, l) {
        var p;
        if (a === Rt)
          return e;
        var f = r.get(a), h = a in c;
        if (f === void 0 && (!h || (p = It(c, a)) != null && p.writable) && (f = s(() => {
          var d = gt(h ? c[a] : ye), g = /* @__PURE__ */ Ee(d);
          return g;
        }), r.set(a, f)), f !== void 0) {
          var v = C(f);
          return v === ye ? void 0 : v;
        }
        return Reflect.get(c, a, l);
      },
      getOwnPropertyDescriptor(c, a) {
        var l = Reflect.getOwnPropertyDescriptor(c, a);
        if (l && "value" in l) {
          var f = r.get(a);
          f && (l.value = C(f));
        } else if (l === void 0) {
          var h = r.get(a), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== ye)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return l;
      },
      has(c, a) {
        var v;
        if (a === Rt)
          return !0;
        var l = r.get(a), f = l !== void 0 && l.v !== ye || Reflect.has(c, a);
        if (l !== void 0 || U !== null && (!f || (v = It(c, a)) != null && v.writable)) {
          l === void 0 && (l = s(() => {
            var p = f ? gt(c[a]) : ye, d = /* @__PURE__ */ Ee(p);
            return d;
          }), r.set(a, l));
          var h = C(l);
          if (h === ye)
            return !1;
        }
        return f;
      },
      set(c, a, l, f) {
        var y;
        var h = r.get(a), v = a in c;
        if (n && a === "length")
          for (var p = l; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var d = r.get(p + "");
            d !== void 0 ? ne(d, ye) : p in c && (d = s(() => /* @__PURE__ */ Ee(ye)), r.set(p + "", d));
          }
        if (h === void 0)
          (!v || (y = It(c, a)) != null && y.writable) && (h = s(() => /* @__PURE__ */ Ee(void 0)), ne(h, gt(l)), r.set(a, h));
        else {
          v = h.v !== ye;
          var g = s(() => gt(l));
          ne(h, g);
        }
        var m = Reflect.getOwnPropertyDescriptor(c, a);
        if (m != null && m.set && m.set.call(f, l), !v) {
          if (n && typeof a == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), x = Number(a);
            Number.isInteger(x) && x >= _.v && ne(_, x + 1);
          }
          st(i);
        }
        return !0;
      },
      ownKeys(c) {
        C(i);
        var a = Reflect.ownKeys(c).filter((h) => {
          var v = r.get(h);
          return v === void 0 || v.v !== ye;
        });
        for (var [l, f] of r)
          f.v !== ye && !(l in c) && a.push(l);
        return a;
      },
      setPrototypeOf() {
        ba();
      }
    }
  );
}
function Qi(e) {
  try {
    if (e !== null && typeof e == "object" && Rt in e)
      return e[Rt];
  } catch {
  }
  return e;
}
function Ja(e, t) {
  return Object.is(Qi(e), Qi(t));
}
var $i, Yo, qo, Xo;
function Qa() {
  if ($i === void 0) {
    $i = window, Yo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    qo = It(t, "firstChild").get, Xo = It(t, "nextSibling").get, qi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), qi(r) && (r.__t = void 0);
  }
}
function wt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  return qo.call(e);
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  return Xo.call(e);
}
function W(e, t) {
  return /* @__PURE__ */ _r(e);
}
function H(e, t = !1) {
  {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ _r(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ qr(r) : r;
  }
}
function ie(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ qr(n);
  return n;
}
function $a(e) {
  e.textContent = "";
}
function Zo() {
  return !1;
}
function el(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Jt(() => {
      document.activeElement === r && e.focus();
    });
  }
}
function Mi(e) {
  var t = G, r = U;
  Re(null), at(null);
  try {
    return e();
  } finally {
    Re(t), at(r);
  }
}
function Jo(e) {
  U === null && G === null && va(), G !== null && G.f & Ke && U === null && ha(), Qt && da();
}
function tl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function lt(e, t, r, n = !0) {
  var i = U;
  i !== null && i.f & Ve && (e |= Ve);
  var o = {
    ctx: xe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ge,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      Fr(o), o.f |= Ei;
    } catch (a) {
      throw pe(o), a;
    }
  else t !== null && Xt(o);
  if (n) {
    var s = o;
    if (r && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & kr) && (s = s.first, e & xt && e & yt && s !== null && (s.f |= yt)), s !== null && (s.parent = i, i !== null && tl(s, i), G !== null && G.f & Ce && !(e & Zt))) {
      var c = (
        /** @type {Derived} */
        G
      );
      (c.effects ?? (c.effects = [])).push(s);
    }
  }
  return o;
}
function rl() {
  return G !== null && !Ze;
}
function In(e) {
  const t = lt(Tn, null, !1);
  return Te(t, Se), t.teardown = e, t;
}
function Qo(e) {
  Jo();
  var t = (
    /** @type {Effect} */
    U.f
  ), r = !G && (t & kt) !== 0 && (t & Ei) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      xe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return $o(e);
}
function $o(e) {
  return lt(ki | Po, e, !1);
}
function nl(e) {
  return Jo(), lt(Tn | Po, e, !0);
}
function il(e) {
  pt.ensure();
  const t = lt(Zt | kr, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? ir(t, () => {
      pe(t), n(void 0);
    }) : (pe(t), n(void 0));
  });
}
function zi(e) {
  return lt(ki, e, !1);
}
function ol(e) {
  return lt(Ai | kr, e, !0);
}
function es(e, t = 0) {
  return lt(Tn | t, e, !0);
}
function Dt(e, t = [], r = [], n = []) {
  Do(n, t, r, (i) => {
    lt(Tn, () => e(...i.map(C)), !0);
  });
}
function Ot(e, t = 0) {
  var r = lt(xt | t, e, !0);
  return r;
}
function je(e, t = !0) {
  return lt(kt | kr, e, !0, t);
}
function ts(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qt, n = G;
    to(!0), Re(null);
    try {
      t.call(null);
    } finally {
      to(r), Re(n);
    }
  }
}
function rs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Mi(() => {
      i.abort(rr);
    });
    var n = r.next;
    r.f & Zt ? r.parent = null : pe(r, t), r = n;
  }
}
function sl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & kt || pe(t), t = r;
  }
}
function pe(e, t = !0) {
  var r = !1;
  (t || e.f & la) && e.nodes_start !== null && e.nodes_end !== null && (al(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), rs(e, t && !r), gn(e, 0), Te(e, bt);
  var n = e.transitions;
  if (n !== null)
    for (const o of n)
      o.stop();
  ts(e);
  var i = e.parent;
  i !== null && i.first !== null && ns(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function al(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qr(e)
    );
    e.remove(), e = r;
  }
}
function ns(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ir(e, t, r = !0) {
  var n = [];
  Ii(e, n, !0), is(n, () => {
    r && pe(e), t && t();
  });
}
function is(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Ii(e, t, r) {
  if (!(e.f & Ve)) {
    if (e.f ^= Ve, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var i = n.next, o = (n.f & yt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & kt) !== 0 && (e.f & xt) !== 0;
      Ii(n, t, o ? r : !1), n = i;
    }
  }
}
function Ri(e) {
  os(e, !0);
}
function os(e, t) {
  if (e.f & Ve) {
    e.f ^= Ve, e.f & Se || (Te(e, Ge), Xt(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & yt) !== 0 || (r.f & kt) !== 0;
      os(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function ss(e, t) {
  for (var r = e.nodes_start, n = e.nodes_end; r !== null; ) {
    var i = r === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qr(r)
    );
    t.append(r), r = i;
  }
}
let or = !1;
function eo(e) {
  or = e;
}
let Qt = !1;
function to(e) {
  Qt = e;
}
let G = null, Ze = !1;
function Re(e) {
  G = e;
}
let U = null;
function at(e) {
  U = e;
}
let Me = null;
function as(e) {
  G !== null && (Me === null ? Me = [e] : Me.push(e));
}
let Pe = null, Ne = 0, Be = null;
function ll(e) {
  Be = e;
}
let ls = 1, Rr = 0, _t = Rr;
function ro(e) {
  _t = e;
}
let zt = !1;
function cs() {
  return ++ls;
}
function Xr(e) {
  var h;
  var t = e.f;
  if (t & Ge)
    return !0;
  if (t & Et) {
    var r = e.deps, n = (t & Ke) !== 0;
    if (t & Ce && (e.f &= ~vn), r !== null) {
      var i, o, s = (t & hn) !== 0, c = n && U !== null && !zt, a = r.length;
      if ((s || c) && (U === null || !(U.f & bt))) {
        var l = (
          /** @type {Derived} */
          e
        ), f = l.parent;
        for (i = 0; i < a; i++)
          o = r[i], (s || !((h = o == null ? void 0 : o.reactions) != null && h.includes(l))) && (o.reactions ?? (o.reactions = [])).push(l);
        s && (l.f ^= hn), c && f !== null && !(f.f & Ke) && (l.f ^= Ke);
      }
      for (i = 0; i < a; i++)
        if (o = r[i], Xr(
          /** @type {Derived} */
          o
        ) && Uo(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!n || U !== null && !zt) && Te(e, Se);
  }
  return !1;
}
function us(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Me != null && Me.includes(e)))
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      o.f & Ce ? us(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? Te(o, Ge) : o.f & Se && Te(o, Et), Xt(
        /** @type {Effect} */
        o
      ));
    }
}
function fs(e) {
  var g;
  var t = Pe, r = Ne, n = Be, i = G, o = zt, s = Me, c = xe, a = Ze, l = _t, f = e.f;
  Pe = /** @type {null | Value[]} */
  null, Ne = 0, Be = null, zt = (f & Ke) !== 0 && (Ze || !or || G === null), G = f & (kt | Zt) ? null : e, Me = null, gr(e.ctx), Ze = !1, _t = ++Rr, e.ac !== null && (Mi(() => {
    e.ac.abort(rr);
  }), e.ac = null);
  try {
    e.f |= qn;
    var h = (
      /** @type {Function} */
      e.fn
    ), v = h(), p = e.deps;
    if (Pe !== null) {
      var d;
      if (gn(e, Ne), p !== null && Ne > 0)
        for (p.length = Ne + Pe.length, d = 0; d < Pe.length; d++)
          p[Ne + d] = Pe[d];
      else
        e.deps = p = Pe;
      if (!zt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      f & Ce && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (d = Ne; d < p.length; d++)
          ((g = p[d]).reactions ?? (g.reactions = [])).push(e);
    } else p !== null && Ne < p.length && (gn(e, Ne), p.length = Ne);
    if (No() && Be !== null && !Ze && p !== null && !(e.f & (Ce | Et | Ge)))
      for (d = 0; d < /** @type {Source[]} */
      Be.length; d++)
        us(
          Be[d],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Rr++, Be !== null && (n === null ? n = Be : n.push(.../** @type {Source[]} */
    Be))), e.f & Yt && (e.f ^= Yt), v;
  } catch (m) {
    return Oo(m);
  } finally {
    e.f ^= qn, Pe = t, Ne = r, Be = n, G = i, zt = o, Me = s, gr(c), Ze = a, _t = l;
  }
}
function cl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ta.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & Ce && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Pe === null || !Pe.includes(t)) && (Te(t, Et), t.f & (Ke | hn) || (t.f ^= hn), Wo(
    /** @type {Derived} **/
    t
  ), gn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function gn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      cl(e, r[n]);
}
function Fr(e) {
  var t = e.f;
  if (!(t & bt)) {
    Te(e, Se);
    var r = U, n = or;
    U = e, or = !0;
    try {
      t & xt ? sl(e) : rs(e), ts(e);
      var i = fs(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ls;
      var o;
    } finally {
      or = n, U = r;
    }
  }
}
function C(e) {
  var t = e.f, r = (t & Ce) !== 0;
  if (G !== null && !Ze) {
    var n = U !== null && (U.f & bt) !== 0;
    if (!n && !(Me != null && Me.includes(e))) {
      var i = G.deps;
      if (G.f & qn)
        e.rv < Rr && (e.rv = Rr, Pe === null && i !== null && i[Ne] === e ? Ne++ : Pe === null ? Pe = [e] : (!zt || !Pe.includes(e)) && Pe.push(e));
      else {
        (G.deps ?? (G.deps = [])).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [G] : o.includes(G) || o.push(G);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), c = s.parent;
    c !== null && !(c.f & Ke) && (s.f ^= Ke);
  }
  if (Qt) {
    if (Ft.has(e))
      return Ft.get(e);
    if (r) {
      s = /** @type {Derived} */
      e;
      var a = s.v;
      return (!(s.f & Se) && s.reactions !== null || ds(s)) && (a = Pi(s)), Ft.set(s, a), a;
    }
  } else if (r) {
    if (s = /** @type {Derived} */
    e, we != null && we.has(s))
      return we.get(s);
    Xr(s) && Uo(s);
  }
  if (we != null && we.has(e))
    return we.get(e);
  if (e.f & Yt)
    throw e.v;
  return e.v;
}
function ds(e) {
  if (e.v === ye) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ft.has(t) || t.f & Ce && ds(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function yr(e) {
  var t = Ze;
  try {
    return Ze = !0, e();
  } finally {
    Ze = t;
  }
}
const ul = -7169;
function Te(e, t) {
  e.f = e.f & ul | t;
}
function fl() {
  return Symbol(Io);
}
function dl(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const hl = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function vl(e) {
  return hl.includes(e);
}
const pl = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function gl(e) {
  return e = e.toLowerCase(), pl[e] ?? e;
}
const ml = ["touchstart", "touchmove"];
function bl(e) {
  return ml.includes(e);
}
const hs = /* @__PURE__ */ new Set(), ei = /* @__PURE__ */ new Set();
function Fi(e, t, r, n = {}) {
  function i(o) {
    if (n.capture || Mr.call(t, o), !o.cancelBubble)
      return Mi(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Jt(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function no(e, t, r, n = {}) {
  var i = Fi(t, e, r, n);
  return () => {
    e.removeEventListener(t, i, n);
  };
}
function io(e, t, r, n, i) {
  var o = { capture: n, passive: i }, s = Fi(e, t, r, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && In(() => {
    t.removeEventListener(e, s, o);
  });
}
function _l(e) {
  for (var t = 0; t < e.length; t++)
    hs.add(e[t]);
  for (var r of ei)
    r(e);
}
let oo = null;
function Mr(e) {
  var m;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  oo = e;
  var s = 0, c = oo === e && e.__root;
  if (c) {
    var a = i.indexOf(c);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var l = i.indexOf(t);
    if (l === -1)
      return;
    a <= l && (s = a);
  }
  if (o = /** @type {Element} */
  i[s] || e.target, o !== t) {
    ra(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var f = G, h = U;
    Re(null), at(null);
    try {
      for (var v, p = []; o !== null; ) {
        var d = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var g = o["__" + n];
          g != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && g.call(o, e);
        } catch (_) {
          v ? p.push(_) : v = _;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        o = d;
      }
      if (v) {
        for (let _ of p)
          queueMicrotask(() => {
            throw _;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(f), at(h);
    }
  }
}
function vs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function wr(e, t) {
  var r = (
    /** @type {Effect} */
    U
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function D(e, t) {
  var r = (t & Ta) !== 0, n = (t & Ca) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = vs(o ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ _r(i)));
    var s = (
      /** @type {TemplateNode} */
      n || Yo ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _r(s)
      ), a = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      wr(c, a);
    } else
      wr(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function yl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        vs(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ _r(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ _r(c);
    }
    var a = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return wr(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function wl(e, t) {
  return /* @__PURE__ */ yl(e, t, "svg");
}
function mt(e = "") {
  {
    var t = wt(e + "");
    return wr(t, t), t;
  }
}
function oe() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = wt();
  return e.append(t, r), wr(t, r), e;
}
function A(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Rn() {
  var e;
  return (e = window.__svelte ?? (window.__svelte = {})).uid ?? (e.uid = 1), `c${window.__svelte.uid++}`;
}
function qt(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function xl(e, t) {
  return kl(e, t);
}
const er = /* @__PURE__ */ new Map();
function kl(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: s = !0 }) {
  Qa();
  var c = /* @__PURE__ */ new Set(), a = (h) => {
    for (var v = 0; v < h.length; v++) {
      var p = h[v];
      if (!c.has(p)) {
        c.add(p);
        var d = bl(p);
        t.addEventListener(p, Mr, { passive: d });
        var g = er.get(p);
        g === void 0 ? (document.addEventListener(p, Mr, { passive: d }), er.set(p, 1)) : er.set(p, g + 1);
      }
    }
  };
  a(xi(hs)), ei.add(a);
  var l = void 0, f = il(() => {
    var h = r ?? t.appendChild(wt());
    return Ba(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (v) => {
        if (o) {
          q({});
          var p = (
            /** @type {ComponentContext} */
            xe
          );
          p.c = o;
        }
        i && (n.$$events = i), l = e(v, n) || {}, o && X();
      }
    ), () => {
      var d;
      for (var v of c) {
        t.removeEventListener(v, Mr);
        var p = (
          /** @type {number} */
          er.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, Mr), er.delete(v)) : er.set(v, p);
      }
      ei.delete(a), h !== r && ((d = h.parentNode) == null || d.removeChild(h));
    };
  });
  return ti.set(l, f), l;
}
let ti = /* @__PURE__ */ new WeakMap();
function El(e, t) {
  const r = ti.get(e);
  return r ? (ti.delete(e), r(t)) : Promise.resolve();
}
var Xe, nt, Oe, jr, Lr, xn;
class Fn {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    $(this, "anchor");
    /** @type {Map<Batch, Key>} */
    F(this, Xe, /* @__PURE__ */ new Map());
    /** @type {Map<Key, Effect>} */
    F(this, nt, /* @__PURE__ */ new Map());
    /** @type {Map<Key, Branch>} */
    F(this, Oe, /* @__PURE__ */ new Map());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    F(this, jr, !0);
    F(this, Lr, () => {
      var t = (
        /** @type {Batch} */
        de
      );
      if (u(this, Xe).has(t)) {
        var r = (
          /** @type {Key} */
          u(this, Xe).get(t)
        ), n = u(this, nt).get(r);
        if (n)
          Ri(n);
        else {
          var i = u(this, Oe).get(r);
          i && (u(this, nt).set(r, i.effect), u(this, Oe).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [o, s] of u(this, Xe)) {
          if (u(this, Xe).delete(o), o === t)
            break;
          const c = u(this, Oe).get(s);
          c && (pe(c.effect), u(this, Oe).delete(s));
        }
        for (const [o, s] of u(this, nt)) {
          if (o === r) continue;
          const c = () => {
            if (Array.from(u(this, Xe).values()).includes(o)) {
              var l = document.createDocumentFragment();
              ss(s, l), l.append(wt()), u(this, Oe).set(o, { effect: s, fragment: l });
            } else
              pe(s);
            u(this, nt).delete(o);
          };
          u(this, jr) || !n ? ir(s, c, !1) : c();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    F(this, xn, (t) => {
      u(this, Xe).delete(t);
      const r = Array.from(u(this, Xe).values());
      for (const [n, i] of u(this, Oe))
        r.includes(n) || (pe(i.effect), u(this, Oe).delete(n));
    });
    this.anchor = t, N(this, jr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      de
    ), i = Zo();
    if (r && !u(this, nt).has(t) && !u(this, Oe).has(t))
      if (i) {
        var o = document.createDocumentFragment(), s = wt();
        o.append(s), u(this, Oe).set(t, {
          effect: je(() => r(s)),
          fragment: o
        });
      } else
        u(this, nt).set(
          t,
          je(() => r(this.anchor))
        );
    if (u(this, Xe).set(n, t), i) {
      for (const [c, a] of u(this, nt))
        c === t ? n.skipped_effects.delete(a) : n.skipped_effects.add(a);
      for (const [c, a] of u(this, Oe))
        c === t ? n.skipped_effects.delete(a.effect) : n.skipped_effects.add(a.effect);
      n.oncommit(u(this, Lr)), n.ondiscard(u(this, xn));
    } else
      u(this, Lr).call(this);
  }
}
Xe = new WeakMap(), nt = new WeakMap(), Oe = new WeakMap(), jr = new WeakMap(), Lr = new WeakMap(), xn = new WeakMap();
function Le(e, t, r = !1) {
  var n = new Fn(e), i = r ? yt : 0;
  function o(s, c) {
    n.ensure(s, c);
  }
  Ot(() => {
    var s = !1;
    t((c, a = !0) => {
      s = !0, o(a, c);
    }), s || o(!1, null);
  }, i);
}
function Al(e, t) {
  return t;
}
function Sl(e, t, r) {
  for (var n = e.items, i = [], o = t.length, s = 0; s < o; s++)
    Ii(t[s].e, i, !0);
  var c = o > 0 && i.length === 0 && r !== null;
  if (c) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    $a(a), a.append(
      /** @type {Element} */
      r
    ), n.clear(), $e(e, t[0].prev, t[o - 1].next);
  }
  is(i, () => {
    for (var l = 0; l < o; l++) {
      var f = t[l];
      c || (n.delete(f.k), $e(e, f.prev, f.next)), pe(f.e, !c);
    }
  });
}
function ps(e, t, r, n, i, o = null) {
  var s = e, c = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & zo) !== 0;
  if (a) {
    var l = (
      /** @type {Element} */
      e
    );
    s = l.appendChild(wt());
  }
  var f = null, h = !1, v = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ Bo(() => {
    var _ = r();
    return wi(_) ? _ : _ == null ? [] : xi(_);
  }), d, g;
  function m() {
    Tl(
      g,
      d,
      c,
      v,
      s,
      i,
      t,
      n,
      r
    ), o !== null && (d.length === 0 ? f ? Ri(f) : f = je(() => o(s)) : f !== null && ir(f, () => {
      f = null;
    }));
  }
  Ot(() => {
    g ?? (g = /** @type {Effect} */
    U), d = /** @type {V[]} */
    C(p);
    var _ = d.length;
    if (!(h && _ === 0)) {
      h = _ === 0;
      var x, y, b, k;
      if (Zo()) {
        var E = /* @__PURE__ */ new Set(), S = (
          /** @type {Batch} */
          de
        );
        for (y = 0; y < _; y += 1) {
          b = d[y], k = n(b, y);
          var T = c.items.get(k) ?? v.get(k);
          T ? t & (Pn | Mn) && gs(T, b, y, t) : (x = ms(
            null,
            c,
            null,
            null,
            b,
            k,
            y,
            i,
            t,
            r,
            !0
          ), v.set(k, x)), E.add(k);
        }
        for (const [Z, be] of c.items)
          E.has(Z) || S.skipped_effects.add(be.e);
        S.oncommit(m);
      } else
        m();
      C(p);
    }
  });
}
function Tl(e, t, r, n, i, o, s, c, a) {
  var L, K, J, re;
  var l = (s & wa) !== 0, f = (s & (Pn | Mn)) !== 0, h = t.length, v = r.items, p = r.first, d = p, g, m = null, _, x = [], y = [], b, k, E, S;
  if (l)
    for (S = 0; S < h; S += 1)
      b = t[S], k = c(b, S), E = v.get(k), E !== void 0 && ((L = E.a) == null || L.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(E));
  for (S = 0; S < h; S += 1) {
    if (b = t[S], k = c(b, S), E = v.get(k), E === void 0) {
      var T = n.get(k);
      if (T !== void 0) {
        n.delete(k), v.set(k, T);
        var Z = m ? m.next : d;
        $e(r, m, T), $e(r, T, Z), Wn(T, Z, i), m = T;
      } else {
        var be = d ? (
          /** @type {TemplateNode} */
          d.e.nodes_start
        ) : i;
        m = ms(
          be,
          r,
          m,
          m === null ? r.first : m.next,
          b,
          k,
          S,
          o,
          s,
          a
        );
      }
      v.set(k, m), x = [], y = [], d = m.next;
      continue;
    }
    if (f && gs(E, b, S, s), E.e.f & Ve && (Ri(E.e), l && ((K = E.a) == null || K.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(E))), E !== d) {
      if (g !== void 0 && g.has(E)) {
        if (x.length < y.length) {
          var _e = y[0], ae;
          m = _e.prev;
          var De = x[0], j = x[x.length - 1];
          for (ae = 0; ae < x.length; ae += 1)
            Wn(x[ae], _e, i);
          for (ae = 0; ae < y.length; ae += 1)
            g.delete(y[ae]);
          $e(r, De.prev, j.next), $e(r, m, De), $e(r, j, _e), d = _e, m = j, S -= 1, x = [], y = [];
        } else
          g.delete(E), Wn(E, d, i), $e(r, E.prev, E.next), $e(r, E, m === null ? r.first : m.next), $e(r, m, E), m = E;
        continue;
      }
      for (x = [], y = []; d !== null && d.k !== k; )
        d.e.f & Ve || (g ?? (g = /* @__PURE__ */ new Set())).add(d), y.push(d), d = d.next;
      if (d === null)
        continue;
      E = d;
    }
    x.push(E), m = E, d = E.next;
  }
  if (d !== null || g !== void 0) {
    for (var z = g === void 0 ? [] : xi(g); d !== null; )
      d.e.f & Ve || z.push(d), d = d.next;
    var R = z.length;
    if (R > 0) {
      var I = s & zo && h === 0 ? i : null;
      if (l) {
        for (S = 0; S < R; S += 1)
          (J = z[S].a) == null || J.measure();
        for (S = 0; S < R; S += 1)
          (re = z[S].a) == null || re.fix();
      }
      Sl(r, z, I);
    }
  }
  l && Jt(() => {
    var B;
    if (_ !== void 0)
      for (E of _)
        (B = E.a) == null || B.apply();
  }), e.first = r.first && r.first.e, e.last = m && m.e;
  for (var w of n.values())
    pe(w.e);
  n.clear();
}
function gs(e, t, r, n) {
  n & Pn && br(e.v, t), n & Mn ? br(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function ms(e, t, r, n, i, o, s, c, a, l, f) {
  var h = (a & Pn) !== 0, v = (a & xa) === 0, p = h ? v ? /* @__PURE__ */ Xa(i, !1, !1) : Nt(i) : i, d = a & Mn ? Nt(s) : s, g = {
    i: d,
    v: p,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var m = document.createDocumentFragment();
      m.append(e = wt());
    }
    return g.e = je(() => c(
      /** @type {Node} */
      e,
      p,
      d,
      l
    ), Ra), g.e.prev = r && r.e, g.e.next = n && n.e, r === null ? f || (t.first = g) : (r.next = g, r.e.next = g.e), n !== null && (n.prev = g, n.e.prev = g.e), g;
  } finally {
  }
}
function Wn(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, o = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); o !== null && o !== n; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qr(o)
    );
    i.before(o), o = s;
  }
}
function $e(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Q(e, t, ...r) {
  var n = new Fn(e);
  Ot(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((o) => i(o, ...r)));
  }, yt);
}
function ee(e, t, r) {
  var n = new Fn(e);
  Ot(() => {
    var i = t() ?? null;
    n.ensure(i, i && ((o) => r(o, i)));
  }, yt);
}
function bs(e, t, r, n, i, o) {
  var s = null, c = (
    /** @type {TemplateNode} */
    e
  ), a = new Fn(c, !1);
  Ot(() => {
    const l = t() || null;
    var f = r || l === "svg" ? Ma : null;
    if (l === null) {
      a.ensure(null, null);
      return;
    }
    return a.ensure(l, (h) => {
      if (l) {
        if (s = f ? document.createElementNS(f, l) : document.createElement(l), wr(s, s), n) {
          var v = (
            /** @type {TemplateNode} */
            s.appendChild(wt())
          );
          n(s, v);
        }
        U.nodes_end = s, h.before(s);
      }
    }), () => {
    };
  }, yt), In(() => {
  });
}
function Cl(e, t) {
  var r = void 0, n;
  Ot(() => {
    r !== (r = t()) && (n && (pe(n), n = null), r && (n = je(() => {
      zi(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function _s(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = _s(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function sr() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = _s(e)) && (n && (n += " "), n += t);
  return n;
}
function ys(e) {
  return typeof e == "object" ? sr(e) : e ?? "";
}
const so = [...` 	
\r\f \v\uFEFF`];
function Pl(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var o = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var c = s + o;
          (s === 0 || so.includes(n[s - 1])) && (c === n.length || so.includes(n[c])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(c + 1) : s = c;
        }
  }
  return n === "" ? null : n;
}
function ao(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var o = e[i];
    o != null && o !== "" && (n += " " + i + ": " + o + r);
  }
  return n;
}
function Un(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ml(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var o = !1, s = 0, c = !1, a = [];
      n && a.push(...Object.keys(n).map(Un)), i && a.push(...Object.keys(i).map(Un));
      var l = 0, f = -1;
      const g = e.length;
      for (var h = 0; h < g; h++) {
        var v = e[h];
        if (c ? v === "/" && e[h - 1] === "*" && (c = !1) : o ? o === v && (o = !1) : v === "/" && e[h + 1] === "*" ? c = !0 : v === '"' || v === "'" ? o = v : v === "(" ? s++ : v === ")" && s--, !c && o === !1 && s === 0) {
          if (v === ":" && f === -1)
            f = h;
          else if (v === ";" || h === g - 1) {
            if (f !== -1) {
              var p = Un(e.substring(l, f).trim());
              if (!a.includes(p)) {
                v !== ";" && h++;
                var d = e.substring(l, h).trim();
                r += " " + d + ";";
              }
            }
            l = h + 1, f = -1;
          }
        }
      }
    }
    return n && (r += ao(n)), i && (r += ao(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function ws(e, t, r, n, i, o) {
  var s = e.__className;
  if (s !== r || s === void 0) {
    var c = Pl(r, n, o);
    c == null ? e.removeAttribute("class") : t ? e.className = c : e.setAttribute("class", c), e.__className = r;
  } else if (o && i !== o)
    for (var a in o) {
      var l = !!o[a];
      (i == null || l !== !!i[a]) && e.classList.toggle(a, l);
    }
  return o;
}
function Hn(e, t = {}, r, n) {
  for (var i in r) {
    var o = r[i];
    t[i] !== o && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, n));
  }
}
function zl(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var o = Ml(t, n);
    o == null ? e.removeAttribute("style") : e.style.cssText = o, e.__style = t;
  } else n && (Array.isArray(n) ? (Hn(e, r == null ? void 0 : r[0], n[0]), Hn(e, r == null ? void 0 : r[1], n[1], "important")) : Hn(e, r, n));
  return n;
}
function ri(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!wi(t))
      return za();
    for (var n of e.options)
      n.selected = t.includes(lo(n));
    return;
  }
  for (n of e.options) {
    var i = lo(n);
    if (Ja(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Il(e) {
  var t = new MutationObserver(() => {
    ri(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), In(() => {
    t.disconnect();
  });
}
function lo(e) {
  return "__value" in e ? e.__value : e.value;
}
const Tr = Symbol("class"), Cr = Symbol("style"), xs = Symbol("is custom element"), ks = Symbol("is html");
function Rl(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function mn(e, t, r, n) {
  var i = Es(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[ca] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && As(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Fl(e, t, r, n, i = !1, o = !1) {
  var s = Es(e), c = s[xs], a = !s[ks], l = t || {}, f = e.tagName === "OPTION";
  for (var h in t)
    h in r || (r[h] = null);
  r.class ? r.class = ys(r.class) : r[Tr] && (r.class = null), r[Cr] && (r.style ?? (r.style = null));
  var v = As(e);
  for (const y in r) {
    let b = r[y];
    if (f && y === "value" && b == null) {
      e.value = e.__value = "", l[y] = b;
      continue;
    }
    if (y === "class") {
      var p = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      ws(e, p, b, n, t == null ? void 0 : t[Tr], r[Tr]), l[y] = b, l[Tr] = r[Tr];
      continue;
    }
    if (y === "style") {
      zl(e, b, t == null ? void 0 : t[Cr], r[Cr]), l[y] = b, l[Cr] = r[Cr];
      continue;
    }
    var d = l[y];
    if (!(b === d && !(b === void 0 && e.hasAttribute(y)))) {
      l[y] = b;
      var g = y[0] + y[1];
      if (g !== "$$")
        if (g === "on") {
          const k = {}, E = "$$" + y;
          let S = y.slice(2);
          var m = vl(S);
          if (dl(S) && (S = S.slice(0, -7), k.capture = !0), !m && d) {
            if (b != null) continue;
            e.removeEventListener(S, l[E], k), l[E] = null;
          }
          if (b != null)
            if (m)
              e[`__${S}`] = b, _l([S]);
            else {
              let T = function(Z) {
                l[y].call(this, Z);
              };
              l[E] = Fi(S, e, T, k);
            }
          else m && (e[`__${S}`] = void 0);
        } else if (y === "style")
          mn(e, y, b);
        else if (y === "autofocus")
          el(
            /** @type {HTMLElement} */
            e,
            !!b
          );
        else if (!c && (y === "__value" || y === "value" && b != null))
          e.value = e.__value = b;
        else if (y === "selected" && f)
          Rl(
            /** @type {HTMLOptionElement} */
            e,
            b
          );
        else {
          var _ = y;
          a || (_ = gl(_));
          var x = _ === "defaultValue" || _ === "defaultChecked";
          if (b == null && !c && !x)
            if (s[y] = null, _ === "value" || _ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const E = t === void 0;
              if (_ === "value") {
                let S = k.defaultValue;
                k.removeAttribute(_), k.defaultValue = S, k.value = k.__value = E ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute(_), k.defaultChecked = S, k.checked = E ? S : !1;
              }
            } else
              e.removeAttribute(y);
          else x || v.includes(_) && (c || typeof b != "string") ? (e[_] = b, _ in s && (s[_] = ye)) : typeof b != "function" && mn(e, _, b);
        }
    }
  }
  return l;
}
function me(e, t, r = [], n = [], i = [], o, s = !1, c = !1) {
  Do(i, r, n, (a) => {
    var l = void 0, f = {}, h = e.nodeName === "SELECT", v = !1;
    if (Ot(() => {
      var d = t(...a.map(C)), g = Fl(
        e,
        l,
        d,
        o,
        s,
        c
      );
      v && h && "value" in d && ri(
        /** @type {HTMLSelectElement} */
        e,
        d.value
      );
      for (let _ of Object.getOwnPropertySymbols(f))
        d[_] || pe(f[_]);
      for (let _ of Object.getOwnPropertySymbols(d)) {
        var m = d[_];
        _.description === Io && (!l || m !== l[_]) && (f[_] && pe(f[_]), f[_] = je(() => Cl(e, () => m))), g[_] = m;
      }
      l = g;
    }), h) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      zi(() => {
        ri(
          p,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Il(p);
      });
    }
    v = !0;
  });
}
function Es(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [xs]: e.nodeName.includes("-"),
      [ks]: e.namespaceURI === Pa
    })
  );
}
var co = /* @__PURE__ */ new Map();
function As(e) {
  var t = e.getAttribute("is") || e.nodeName, r = co.get(t);
  if (r) return r;
  co.set(t, r = []);
  for (var n, i = e, o = Element.prototype; o !== i; ) {
    n = na(i);
    for (var s in n)
      n[s].set && r.push(s);
    i = To(i);
  }
  return r;
}
function uo(e, t) {
  return e === t || (e == null ? void 0 : e[Rt]) === t;
}
function Qe(e = {}, t, r, n) {
  return zi(() => {
    var i, o;
    return es(() => {
      i = o, o = [], yr(() => {
        e !== r(...o) && (t(e, ...o), i && uo(r(...i), e) && t(null, ...i));
      });
    }), () => {
      Jt(() => {
        o && uo(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
let rn = !1;
function Nl(e) {
  var t = rn;
  try {
    return rn = !1, [e(), rn];
  } finally {
    rn = t;
  }
}
const Ol = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function te(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    Ol
  );
}
const jl = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Sr(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      Sr(i) && (i = i());
      const o = It(i, t);
      if (o && o.set)
        return o.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Sr(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = It(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === Rt || t === Mo) return !1;
    for (let r of e.props)
      if (Sr(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (Sr(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function jt(...e) {
  return new Proxy({ props: e }, jl);
}
function O(e, t, r, n) {
  var x;
  var i = (r & Aa) !== 0, o = (r & Sa) !== 0, s = (
    /** @type {V} */
    n
  ), c = !0, a = () => (c && (c = !1, s = o ? yr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s), l;
  if (i) {
    var f = Rt in e || Mo in e;
    l = ((x = It(e, t)) == null ? void 0 : x.set) ?? (f && t in e ? (y) => e[t] = y : void 0);
  }
  var h, v = !1;
  i ? [h, v] = Nl(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = a(), l && (ga(), l(h)));
  var p;
  if (p = () => {
    var y = (
      /** @type {V} */
      e[t]
    );
    return y === void 0 ? a() : (c = !0, y);
  }, !(r & Ea))
    return p;
  if (l) {
    var d = e.$$legacy;
    return (
      /** @type {() => V} */
      function(y, b) {
        return arguments.length > 0 ? ((!b || d || v) && l(b ? p() : y), y) : p();
      }
    );
  }
  var g = !1, m = (r & ka ? zn : Bo)(() => (g = !1, p()));
  i && C(m);
  var _ = (
    /** @type {Effect} */
    U
  );
  return (
    /** @type {() => V} */
    function(y, b) {
      if (arguments.length > 0) {
        const k = b ? C(m) : i ? gt(y) : y;
        return ne(m, k), g = !0, s !== void 0 && (s = k), y;
      }
      return Qt && g || _.f & bt ? m.v : C(m);
    }
  );
}
var it, ot, dt, kn, Je, zr, fn;
const Di = class Di extends Map {
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(r) {
    super();
    F(this, Je);
    /** @type {Map<K, Source<number>>} */
    F(this, it, /* @__PURE__ */ new Map());
    F(this, ot, /* @__PURE__ */ Ee(0));
    F(this, dt, /* @__PURE__ */ Ee(0));
    F(this, kn, _t || -1);
    if (r) {
      for (var [n, i] of r)
        super.set(n, i);
      u(this, dt).v = super.size;
    }
  }
  /** @param {K} key */
  has(r) {
    var n = u(this, it), i = n.get(r);
    if (i === void 0) {
      var o = super.get(r);
      if (o !== void 0)
        i = Y(this, Je, zr).call(this, 0), n.set(r, i);
      else
        return C(u(this, ot)), !1;
    }
    return C(i), !0;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(r, n) {
    Y(this, Je, fn).call(this), super.forEach(r, n);
  }
  /** @param {K} key */
  get(r) {
    var n = u(this, it), i = n.get(r);
    if (i === void 0) {
      var o = super.get(r);
      if (o !== void 0)
        i = Y(this, Je, zr).call(this, 0), n.set(r, i);
      else {
        C(u(this, ot));
        return;
      }
    }
    return C(i), super.get(r);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(r, n) {
    var h;
    var i = u(this, it), o = i.get(r), s = super.get(r), c = super.set(r, n), a = u(this, ot);
    if (o === void 0)
      o = Y(this, Je, zr).call(this, 0), i.set(r, o), ne(u(this, dt), super.size), st(a);
    else if (s !== n) {
      st(o);
      var l = a.reactions === null ? null : new Set(a.reactions), f = l === null || !((h = o.reactions) != null && h.every(
        (v) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(v)
        )
      ));
      f && st(a);
    }
    return c;
  }
  /** @param {K} key */
  delete(r) {
    var n = u(this, it), i = n.get(r), o = super.delete(r);
    return i !== void 0 && (n.delete(r), ne(u(this, dt), super.size), ne(i, -1), st(u(this, ot))), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var r = u(this, it);
      ne(u(this, dt), 0);
      for (var n of r.values())
        ne(n, -1);
      st(u(this, ot)), r.clear();
    }
  }
  keys() {
    return C(u(this, ot)), super.keys();
  }
  values() {
    return Y(this, Je, fn).call(this), super.values();
  }
  entries() {
    return Y(this, Je, fn).call(this), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return C(u(this, dt)), super.size;
  }
};
it = new WeakMap(), ot = new WeakMap(), dt = new WeakMap(), kn = new WeakMap(), Je = new WeakSet(), /**
 * If the source is being created inside the same reaction as the SvelteMap instance,
 * we use `state` so that it will not be a dependency of the reaction. Otherwise we
 * use `source` so it will be.
 *
 * @template T
 * @param {T} value
 * @returns {Source<T>}
 */
zr = function(r) {
  return _t === u(this, kn) ? /* @__PURE__ */ Ee(r) : Nt(r);
}, fn = function() {
  C(u(this, ot));
  var r = u(this, it);
  if (u(this, dt).v !== r.size) {
    for (var n of Yi(Di.prototype, this, "keys").call(this))
      if (!r.has(n)) {
        var i = Y(this, Je, zr).call(this, 0);
        r.set(n, i);
      }
  }
  for ([, i] of u(this, it))
    C(i);
};
let bn = Di;
function Ll(e) {
  let t = {};
  return new Proxy(
    /** @type{any} */
    {},
    {
      get(r, n) {
        return n in t || (t[n] = Ci((i) => (e.on(`change:${n}`, i), () => e.off(`change:${n}`, i)))), t[n](), e.get(n);
      },
      set(r, n, i) {
        return e.set(n, i), e.save_changes(), !0;
      }
    }
  );
}
function Vl(e) {
  return () => {
    let t;
    return {
      initialize({ model: r }) {
        t = Ll(r);
      },
      /** @type {import("@anywidget/types").Render<T>} */
      render({ model: r, el: n }) {
        let i = xl(e, {
          target: n,
          props: { model: r, bindings: t }
        });
        return () => El(i);
      }
    };
  };
}
const Gl = "5";
var So;
typeof window < "u" && ((So = window.__svelte ?? (window.__svelte = {})).v ?? (So.v = /* @__PURE__ */ new Set())).add(Gl);
function Dl(e) {
  return typeof e == "function";
}
function Bl(e) {
  return e !== null && typeof e == "object";
}
const Wl = ["string", "number", "bigint", "boolean"];
function ni(e) {
  return e == null || Wl.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((t) => ni(t)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
const xr = Symbol("box"), Nn = Symbol("is-writable");
function ve(e, t) {
  const r = /* @__PURE__ */ se(e);
  return t ? {
    [xr]: !0,
    [Nn]: !0,
    get current() {
      return C(r);
    },
    set current(n) {
      t(n);
    }
  } : {
    [xr]: !0,
    get current() {
      return e();
    }
  };
}
function Zr(e) {
  return Bl(e) && xr in e;
}
function Ni(e) {
  return Zr(e) && Nn in e;
}
function Ul(e) {
  return Zr(e) ? e : Dl(e) ? ve(e) : Yl(e);
}
function Hl(e) {
  return Object.entries(e).reduce(
    (t, [r, n]) => Zr(n) ? (Ni(n) ? Object.defineProperty(t, r, {
      get() {
        return n.current;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(i) {
        n.current = i;
      }
    }) : Object.defineProperty(t, r, {
      get() {
        return n.current;
      }
    }), t) : Object.assign(t, { [r]: n }),
    {}
  );
}
function Kl(e) {
  return Ni(e) ? {
    [xr]: !0,
    get current() {
      return e.current;
    }
  } : e;
}
function Yl(e) {
  let t = /* @__PURE__ */ Ee(gt(e));
  return {
    [xr]: !0,
    [Nn]: !0,
    get current() {
      return C(t);
    },
    set current(r) {
      ne(t, r, !0);
    }
  };
}
function $t(e) {
  let t = /* @__PURE__ */ Ee(gt(e));
  return {
    [xr]: !0,
    [Nn]: !0,
    get current() {
      return C(t);
    },
    set current(r) {
      ne(t, r, !0);
    }
  };
}
$t.from = Ul;
$t.with = ve;
$t.flatten = Hl;
$t.readonly = Kl;
$t.isBox = Zr;
$t.isWritableBox = Ni;
function ql(...e) {
  return function(t) {
    var r;
    for (const n of e)
      if (n) {
        if (t.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, t) : (r = n.current) == null || r.call(this, t);
      }
  };
}
var fo = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Xl = /\n/g, Zl = /^\s*/, Jl = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Ql = /^:\s*/, $l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, ec = /^[;\s]*/, tc = /^\s+|\s+$/g, rc = `
`, ho = "/", vo = "*", Gt = "", nc = "comment", ic = "declaration";
function oc(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var r = 1, n = 1;
  function i(d) {
    var g = d.match(Xl);
    g && (r += g.length);
    var m = d.lastIndexOf(rc);
    n = ~m ? d.length - m : n + d.length;
  }
  function o() {
    var d = { line: r, column: n };
    return function(g) {
      return g.position = new s(d), l(), g;
    };
  }
  function s(d) {
    this.start = d, this.end = { line: r, column: n }, this.source = t.source;
  }
  s.prototype.content = e;
  function c(d) {
    var g = new Error(
      t.source + ":" + r + ":" + n + ": " + d
    );
    if (g.reason = d, g.filename = t.source, g.line = r, g.column = n, g.source = e, !t.silent) throw g;
  }
  function a(d) {
    var g = d.exec(e);
    if (g) {
      var m = g[0];
      return i(m), e = e.slice(m.length), g;
    }
  }
  function l() {
    a(Zl);
  }
  function f(d) {
    var g;
    for (d = d || []; g = h(); )
      g !== !1 && d.push(g);
    return d;
  }
  function h() {
    var d = o();
    if (!(ho != e.charAt(0) || vo != e.charAt(1))) {
      for (var g = 2; Gt != e.charAt(g) && (vo != e.charAt(g) || ho != e.charAt(g + 1)); )
        ++g;
      if (g += 2, Gt === e.charAt(g - 1))
        return c("End of comment missing");
      var m = e.slice(2, g - 2);
      return n += 2, i(m), e = e.slice(g), n += 2, d({
        type: nc,
        comment: m
      });
    }
  }
  function v() {
    var d = o(), g = a(Jl);
    if (g) {
      if (h(), !a(Ql)) return c("property missing ':'");
      var m = a($l), _ = d({
        type: ic,
        property: po(g[0].replace(fo, Gt)),
        value: m ? po(m[0].replace(fo, Gt)) : Gt
      });
      return a(ec), _;
    }
  }
  function p() {
    var d = [];
    f(d);
    for (var g; g = v(); )
      g !== !1 && (d.push(g), f(d));
    return d;
  }
  return l(), p();
}
function po(e) {
  return e ? e.replace(tc, Gt) : Gt;
}
function sc(e, t) {
  let r = null;
  if (!e || typeof e != "string")
    return r;
  const n = oc(e), i = typeof t == "function";
  return n.forEach((o) => {
    if (o.type !== "declaration")
      return;
    const { property: s, value: c } = o;
    i ? t(s, c, o) : c && (r = r || {}, r[s] = c);
  }), r;
}
const ac = /\d/, lc = ["-", "_", "/", "."];
function cc(e = "") {
  if (!ac.test(e))
    return e !== e.toLowerCase();
}
function uc(e) {
  const t = [];
  let r = "", n, i;
  for (const o of e) {
    const s = lc.includes(o);
    if (s === !0) {
      t.push(r), r = "", n = void 0;
      continue;
    }
    const c = cc(o);
    if (i === !1) {
      if (n === !1 && c === !0) {
        t.push(r), r = o, n = c;
        continue;
      }
      if (n === !0 && c === !1 && r.length > 1) {
        const a = r.at(-1);
        t.push(r.slice(0, Math.max(0, r.length - 1))), r = a + o, n = c;
        continue;
      }
    }
    r += o, n = c, i = s;
  }
  return t.push(r), t;
}
function Ss(e) {
  return e ? uc(e).map((t) => dc(t)).join("") : "";
}
function fc(e) {
  return hc(Ss(e || ""));
}
function dc(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function hc(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function nn(e) {
  if (!e)
    return {};
  const t = {};
  function r(n, i) {
    if (n.startsWith("-moz-") || n.startsWith("-webkit-") || n.startsWith("-ms-") || n.startsWith("-o-")) {
      t[Ss(n)] = i;
      return;
    }
    if (n.startsWith("--")) {
      t[n] = i;
      return;
    }
    t[fc(n)] = i;
  }
  return sc(e, r), t;
}
function vc(...e) {
  return (...t) => {
    for (const r of e)
      typeof r == "function" && r(...t);
  };
}
function pc(e, t) {
  const r = RegExp(e, "g");
  return (n) => {
    if (typeof n != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof n}`);
    return n.match(r) ? n.replace(r, t) : n;
  };
}
const gc = pc(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function mc(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${gc(t)}: ${e[t]};`).join(`
`);
}
function bc(e = {}) {
  return mc(e).replace(`
`, " ");
}
const _c = [
  "onabort",
  "onanimationcancel",
  "onanimationend",
  "onanimationiteration",
  "onanimationstart",
  "onauxclick",
  "onbeforeinput",
  "onbeforetoggle",
  "onblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncompositionend",
  "oncompositionstart",
  "oncompositionupdate",
  "oncontextlost",
  "oncontextmenu",
  "oncontextrestored",
  "oncopy",
  "oncuechange",
  "oncut",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onfocusin",
  "onfocusout",
  "onformdata",
  "ongotpointercapture",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onlostpointercapture",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onpaste",
  "onpause",
  "onplay",
  "onplaying",
  "onpointercancel",
  "onpointerdown",
  "onpointerenter",
  "onpointerleave",
  "onpointermove",
  "onpointerout",
  "onpointerover",
  "onpointerup",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onscrollend",
  "onsecuritypolicyviolation",
  "onseeked",
  "onseeking",
  "onselect",
  "onselectionchange",
  "onselectstart",
  "onslotchange",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "ontouchcancel",
  "ontouchend",
  "ontouchmove",
  "ontouchstart",
  "ontransitioncancel",
  "ontransitionend",
  "ontransitionrun",
  "ontransitionstart",
  "onvolumechange",
  "onwaiting",
  "onwebkitanimationend",
  "onwebkitanimationiteration",
  "onwebkitanimationstart",
  "onwebkittransitionend",
  "onwheel"
], yc = new Set(_c);
function wc(e) {
  return yc.has(e);
}
function On(...e) {
  const t = { ...e[0] };
  for (let r = 1; r < e.length; r++) {
    const n = e[r];
    if (n) {
      for (const i of Object.keys(n)) {
        const o = t[i], s = n[i], c = typeof o == "function", a = typeof s == "function";
        if (c && wc(i)) {
          const l = o, f = s;
          t[i] = ql(l, f);
        } else if (c && a)
          t[i] = vc(o, s);
        else if (i === "class") {
          const l = ni(o), f = ni(s);
          l && f ? t[i] = sr(o, s) : l ? t[i] = sr(o) : f && (t[i] = sr(s));
        } else if (i === "style") {
          const l = typeof o == "object", f = typeof s == "object", h = typeof o == "string", v = typeof s == "string";
          if (l && f)
            t[i] = { ...o, ...s };
          else if (l && v) {
            const p = nn(s);
            t[i] = { ...o, ...p };
          } else if (h && f) {
            const p = nn(o);
            t[i] = { ...p, ...s };
          } else if (h && v) {
            const p = nn(o), d = nn(s);
            t[i] = { ...p, ...d };
          } else l ? t[i] = o : f ? t[i] = s : h ? t[i] = o : v && (t[i] = s);
        } else
          t[i] = s !== void 0 ? s : o;
      }
      for (const i of Object.getOwnPropertySymbols(n)) {
        const o = t[i], s = n[i];
        t[i] = s !== void 0 ? s : o;
      }
    }
  }
  return typeof t.style == "object" && (t.style = bc(t.style).replaceAll(`
`, " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
const xc = typeof window < "u" ? window : void 0;
function kc(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot; ) {
    const r = t.shadowRoot.activeElement;
    if (r === t)
      break;
    t = r;
  }
  return t;
}
var fr, Vr;
class Ec {
  constructor(t = {}) {
    F(this, fr);
    F(this, Vr);
    const { window: r = xc, document: n = r == null ? void 0 : r.document } = t;
    r !== void 0 && (N(this, fr, n), N(this, Vr, Ci((i) => {
      const o = no(r, "focusin", i), s = no(r, "focusout", i);
      return () => {
        o(), s();
      };
    })));
  }
  get current() {
    var t;
    return (t = u(this, Vr)) == null || t.call(this), u(this, fr) ? kc(u(this, fr)) : null;
  }
}
fr = new WeakMap(), Vr = new WeakMap();
new Ec();
var Gr, ht;
class Ac {
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(t) {
    F(this, Gr);
    F(this, ht);
    N(this, Gr, t), N(this, ht, Symbol(t));
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return u(this, ht);
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return Oa(u(this, ht));
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const t = Zi(u(this, ht));
    if (t === void 0)
      throw new Error(`Context "${u(this, Gr)}" not found`);
    return t;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(t) {
    const r = Zi(u(this, ht));
    return r === void 0 ? t : r;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(t) {
    return Na(u(this, ht), t);
  }
}
Gr = new WeakMap(), ht = new WeakMap();
function Sc(e, t) {
  switch (e) {
    case "post":
      Qo(t);
      break;
    case "pre":
      nl(t);
      break;
  }
}
function Ts(e, t, r, n = {}) {
  const { lazy: i = !1 } = n;
  let o = !i, s = Array.isArray(e) ? [] : void 0;
  Sc(t, () => {
    const c = Array.isArray(e) ? e.map((l) => l()) : e();
    if (!o) {
      o = !0, s = c;
      return;
    }
    const a = yr(() => r(c, s));
    return s = c, a;
  });
}
function Oi(e, t, r) {
  Ts(e, "post", t, r);
}
function Tc(e, t, r) {
  Ts(e, "pre", t, r);
}
Oi.pre = Tc;
function jn(e, t) {
  return {
    [fl()]: (r) => Zr(e) ? (e.current = r, yr(() => t == null ? void 0 : t(r)), () => {
      "isConnected" in r && r.isConnected || (e.current = null);
    }) : (e(r), yr(() => t == null ? void 0 : t(r)), () => {
      "isConnected" in r && r.isConnected || e(null);
    })
  };
}
function Cc(e) {
  return e ? "true" : "false";
}
function Cs(e) {
  return e ? "" : void 0;
}
function Ps(e) {
  return e ? !0 : void 0;
}
var dr, Dr;
class Pc {
  constructor(t) {
    F(this, dr);
    F(this, Dr);
    $(this, "attrs");
    N(this, dr, t.getVariant ? t.getVariant() : null), N(this, Dr, u(this, dr) ? `data-${u(this, dr)}-` : `data-${t.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map((r) => [r, this.getAttr(r)]));
  }
  getAttr(t, r) {
    return r ? `data-${r}-${t}` : `${u(this, Dr)}${t}`;
  }
  selector(t, r) {
    return `[${this.getAttr(t, r)}]`;
  }
}
dr = new WeakMap(), Dr = new WeakMap();
function Mc(e) {
  const t = new Pc(e);
  return {
    ...t.attrs,
    selector: t.selector,
    getAttr: t.getAttr
  };
}
const ii = "ArrowDown", ji = "ArrowLeft", Li = "ArrowRight", oi = "ArrowUp", zc = "End", Ic = "Enter", Rc = "Home", Fc = " ";
function Nc(e) {
  return window.getComputedStyle(e).getPropertyValue("direction");
}
function Oc(e = "ltr", t = "horizontal") {
  return {
    horizontal: e === "rtl" ? ji : Li,
    vertical: ii
  }[t];
}
function jc(e = "ltr", t = "horizontal") {
  return {
    horizontal: e === "rtl" ? Li : ji,
    vertical: oi
  }[t];
}
function Lc(e = "ltr", t = "horizontal") {
  return ["ltr", "rtl"].includes(e) || (e = "ltr"), ["horizontal", "vertical"].includes(t) || (t = "horizontal"), {
    nextKey: Oc(e, t),
    prevKey: jc(e, t)
  };
}
function Vc(e) {
  return e instanceof HTMLElement;
}
var ke, vt;
class Gc {
  constructor(t) {
    F(this, ke);
    F(this, vt, $t(null));
    N(this, ke, t);
  }
  getCandidateNodes() {
    return u(this, ke).rootNode.current ? u(this, ke).candidateSelector ? Array.from(u(this, ke).rootNode.current.querySelectorAll(u(this, ke).candidateSelector)) : u(this, ke).candidateAttr ? Array.from(u(this, ke).rootNode.current.querySelectorAll(`[${u(this, ke).candidateAttr}]:not([data-disabled])`)) : [] : [];
  }
  focusFirstCandidate() {
    var r;
    const t = this.getCandidateNodes();
    t.length && ((r = t[0]) == null || r.focus());
  }
  handleKeydown(t, r, n = !1) {
    var d, g;
    const i = u(this, ke).rootNode.current;
    if (!i || !t)
      return;
    const o = this.getCandidateNodes();
    if (!o.length)
      return;
    const s = o.indexOf(t), c = Nc(i), { nextKey: a, prevKey: l } = Lc(c, u(this, ke).orientation.current), f = u(this, ke).loop.current, h = {
      [a]: s + 1,
      [l]: s - 1,
      [Rc]: 0,
      [zc]: o.length - 1
    };
    if (n) {
      const m = a === ii ? Li : ii, _ = l === oi ? ji : oi;
      h[m] = s + 1, h[_] = s - 1;
    }
    let v = h[r.key];
    if (v === void 0)
      return;
    r.preventDefault(), v < 0 && f ? v = o.length - 1 : v === o.length && f && (v = 0);
    const p = o[v];
    if (p)
      return p.focus(), u(this, vt).current = p.id, (g = (d = u(this, ke)).onCandidateFocus) == null || g.call(d, p), p;
  }
  getTabIndex(t) {
    const r = this.getCandidateNodes(), n = u(this, vt).current !== null;
    return t && !n && r[0] === t ? (u(this, vt).current = t.id, 0) : (t == null ? void 0 : t.id) === u(this, vt).current ? 0 : -1;
  }
  setCurrentTabStopId(t) {
    u(this, vt).current = t;
  }
  focusCurrentTabStop() {
    var n;
    const t = u(this, vt).current;
    if (!t)
      return;
    const r = (n = u(this, ke).rootNode.current) == null ? void 0 : n.querySelector(`#${t}`);
    !r || !Vc(r) || r.focus();
  }
}
ke = new WeakMap(), vt = new WeakMap();
function Dc() {
}
function Ln(e, t) {
  return `bits-${e}`;
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function Bc(e = "bits") {
  return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
const Nr = Mc({
  component: "tabs",
  parts: ["root", "list", "trigger", "content"]
}), Vn = new Ac("Tabs.Root");
var Br, Wr;
const Bi = class Bi {
  constructor(t) {
    $(this, "opts");
    $(this, "attachment");
    $(this, "rovingFocusGroup");
    F(this, Br, /* @__PURE__ */ Ee(gt([])));
    $(this, "valueToTriggerId", new bn());
    $(this, "valueToContentId", new bn());
    F(this, Wr, /* @__PURE__ */ se(() => ({
      id: this.opts.id.current,
      "data-orientation": this.opts.orientation.current,
      [Nr.root]: "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = jn(t.ref), this.rovingFocusGroup = new Gc({
      candidateAttr: Nr.trigger,
      rootNode: this.opts.ref,
      loop: this.opts.loop,
      orientation: this.opts.orientation
    });
  }
  static create(t) {
    return Vn.set(new Bi(t));
  }
  get triggerIds() {
    return C(u(this, Br));
  }
  set triggerIds(t) {
    ne(u(this, Br), t, !0);
  }
  registerTrigger(t, r) {
    return this.triggerIds.push(t), this.valueToTriggerId.set(r, t), () => {
      this.triggerIds = this.triggerIds.filter((n) => n !== t), this.valueToTriggerId.delete(r);
    };
  }
  registerContent(t, r) {
    return this.valueToContentId.set(r, t), () => {
      this.valueToContentId.delete(r);
    };
  }
  setValue(t) {
    this.opts.value.current = t;
  }
  get props() {
    return C(u(this, Wr));
  }
  set props(t) {
    ne(u(this, Wr), t);
  }
};
Br = new WeakMap(), Wr = new WeakMap();
let si = Bi;
var En, Ur;
const Wi = class Wi {
  constructor(t, r) {
    $(this, "opts");
    $(this, "root");
    $(this, "attachment");
    F(this, En, /* @__PURE__ */ se(() => this.root.opts.disabled.current));
    F(this, Ur, /* @__PURE__ */ se(() => ({
      id: this.opts.id.current,
      role: "tablist",
      "aria-orientation": this.root.opts.orientation.current,
      "data-orientation": this.root.opts.orientation.current,
      [Nr.list]: "",
      "data-disabled": Cs(C(u(this, En))),
      ...this.attachment
    })));
    this.opts = t, this.root = r, this.attachment = jn(t.ref);
  }
  static create(t) {
    return new Wi(t, Vn.get());
  }
  get props() {
    return C(u(this, Ur));
  }
  set props(t) {
    ne(u(this, Ur), t);
  }
};
En = new WeakMap(), Ur = new WeakMap();
let ai = Wi;
var hr, vr, Mt, An, pr, dn, Hr;
const Ui = class Ui {
  constructor(t, r) {
    F(this, pr);
    $(this, "opts");
    $(this, "root");
    $(this, "attachment");
    F(this, hr, /* @__PURE__ */ Ee(0));
    F(this, vr, /* @__PURE__ */ se(() => this.root.opts.value.current === this.opts.value.current));
    F(this, Mt, /* @__PURE__ */ se(() => this.opts.disabled.current || this.root.opts.disabled.current));
    F(this, An, /* @__PURE__ */ se(() => this.root.valueToContentId.get(this.opts.value.current)));
    F(this, Hr, /* @__PURE__ */ se(() => ({
      id: this.opts.id.current,
      role: "tab",
      "data-state": Ms(C(u(this, vr))),
      "data-value": this.opts.value.current,
      "data-orientation": this.root.opts.orientation.current,
      "data-disabled": Cs(C(u(this, Mt))),
      "aria-selected": Cc(C(u(this, vr))),
      "aria-controls": C(u(this, An)),
      [Nr.trigger]: "",
      disabled: Ps(C(u(this, Mt))),
      tabindex: C(u(this, hr)),
      //
      onclick: this.onclick,
      onfocus: this.onfocus,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = t, this.root = r, this.attachment = jn(t.ref), Oi([() => this.opts.id.current, () => this.opts.value.current], ([n, i]) => this.root.registerTrigger(n, i)), Qo(() => {
      this.root.triggerIds.length, C(u(this, vr)) || !this.root.opts.value.current ? ne(u(this, hr), 0) : ne(u(this, hr), -1);
    }), this.onfocus = this.onfocus.bind(this), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
  }
  static create(t) {
    return new Ui(t, Vn.get());
  }
  onfocus(t) {
    this.root.opts.activationMode.current !== "automatic" || C(u(this, Mt)) || Y(this, pr, dn).call(this);
  }
  onclick(t) {
    C(u(this, Mt)) || Y(this, pr, dn).call(this);
  }
  onkeydown(t) {
    if (!C(u(this, Mt))) {
      if (t.key === Fc || t.key === Ic) {
        t.preventDefault(), Y(this, pr, dn).call(this);
        return;
      }
      this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, t);
    }
  }
  get props() {
    return C(u(this, Hr));
  }
  set props(t) {
    ne(u(this, Hr), t);
  }
};
hr = new WeakMap(), vr = new WeakMap(), Mt = new WeakMap(), An = new WeakMap(), pr = new WeakSet(), dn = function() {
  this.root.opts.value.current !== this.opts.value.current && this.root.setValue(this.opts.value.current);
}, Hr = new WeakMap();
let li = Ui;
var Kr, Sn, Yr;
const Hi = class Hi {
  constructor(t, r) {
    $(this, "opts");
    $(this, "root");
    $(this, "attachment");
    F(this, Kr, /* @__PURE__ */ se(() => this.root.opts.value.current === this.opts.value.current));
    F(this, Sn, /* @__PURE__ */ se(() => this.root.valueToTriggerId.get(this.opts.value.current)));
    F(this, Yr, /* @__PURE__ */ se(() => ({
      id: this.opts.id.current,
      role: "tabpanel",
      hidden: Ps(!C(u(this, Kr))),
      tabindex: 0,
      "data-value": this.opts.value.current,
      "data-state": Ms(C(u(this, Kr))),
      "aria-labelledby": C(u(this, Sn)),
      "data-orientation": this.root.opts.orientation.current,
      [Nr.content]: "",
      ...this.attachment
    })));
    this.opts = t, this.root = r, this.attachment = jn(t.ref), Oi([() => this.opts.id.current, () => this.opts.value.current], ([n, i]) => this.root.registerContent(n, i));
  }
  static create(t) {
    return new Hi(t, Vn.get());
  }
  get props() {
    return C(u(this, Yr));
  }
  set props(t) {
    ne(u(this, Yr), t);
  }
};
Kr = new WeakMap(), Sn = new WeakMap(), Yr = new WeakMap();
let ci = Hi;
function Ms(e) {
  return e ? "active" : "inactive";
}
var Wc = /* @__PURE__ */ D("<div><!></div>");
function Uc(e, t) {
  const r = Rn();
  q(t, !0);
  let n = O(t, "id", 19, () => Ln(r)), i = O(t, "ref", 15, null), o = O(t, "value", 15, ""), s = O(t, "onValueChange", 3, Dc), c = O(t, "orientation", 3, "horizontal"), a = O(t, "loop", 3, !0), l = O(t, "activationMode", 3, "automatic"), f = O(t, "disabled", 3, !1), h = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "value",
    "onValueChange",
    "orientation",
    "loop",
    "activationMode",
    "disabled",
    "children",
    "child"
  ]);
  const v = si.create({
    id: ve(() => n()),
    value: ve(() => o(), (x) => {
      o(x), s()(x);
    }),
    orientation: ve(() => c()),
    loop: ve(() => a()),
    activationMode: ve(() => l()),
    disabled: ve(() => f()),
    ref: ve(() => i(), (x) => i(x))
  }), p = /* @__PURE__ */ se(() => On(h, v.props));
  var d = oe(), g = H(d);
  {
    var m = (x) => {
      var y = oe(), b = H(y);
      Q(b, () => t.child, () => ({ props: C(p) })), A(x, y);
    }, _ = (x) => {
      var y = Wc();
      me(y, () => ({ ...C(p) }));
      var b = W(y);
      Q(b, () => t.children ?? ue), A(x, y);
    };
    Le(g, (x) => {
      t.child ? x(m) : x(_, !1);
    });
  }
  A(e, d), X();
}
var Hc = /* @__PURE__ */ D("<div><!></div>");
function Kc(e, t) {
  const r = Rn();
  q(t, !0);
  let n = O(t, "id", 19, () => Ln(r)), i = O(t, "ref", 15, null), o = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "ref",
    "value"
  ]);
  const s = ci.create({
    value: ve(() => t.value),
    id: ve(() => n()),
    ref: ve(() => i(), (v) => i(v))
  }), c = /* @__PURE__ */ se(() => On(o, s.props));
  var a = oe(), l = H(a);
  {
    var f = (v) => {
      var p = oe(), d = H(p);
      Q(d, () => t.child, () => ({ props: C(c) })), A(v, p);
    }, h = (v) => {
      var p = Hc();
      me(p, () => ({ ...C(c) }));
      var d = W(p);
      Q(d, () => t.children ?? ue), A(v, p);
    };
    Le(l, (v) => {
      t.child ? v(f) : v(h, !1);
    });
  }
  A(e, a), X();
}
var Yc = /* @__PURE__ */ D("<div><!></div>");
function qc(e, t) {
  const r = Rn();
  q(t, !0);
  let n = O(t, "id", 19, () => Ln(r)), i = O(t, "ref", 15, null), o = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "id",
    "ref"
  ]);
  const s = ai.create({
    id: ve(() => n()),
    ref: ve(() => i(), (v) => i(v))
  }), c = /* @__PURE__ */ se(() => On(o, s.props));
  var a = oe(), l = H(a);
  {
    var f = (v) => {
      var p = oe(), d = H(p);
      Q(d, () => t.child, () => ({ props: C(c) })), A(v, p);
    }, h = (v) => {
      var p = Yc();
      me(p, () => ({ ...C(c) }));
      var d = W(p);
      Q(d, () => t.children ?? ue), A(v, p);
    };
    Le(l, (v) => {
      t.child ? v(f) : v(h, !1);
    });
  }
  A(e, a), X();
}
var Xc = /* @__PURE__ */ D("<button><!></button>");
function Zc(e, t) {
  const r = Rn();
  q(t, !0);
  let n = O(t, "disabled", 3, !1), i = O(t, "id", 19, () => Ln(r)), o = O(t, "type", 3, "button"), s = O(t, "ref", 15, null), c = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "disabled",
    "id",
    "type",
    "value",
    "ref"
  ]);
  const a = li.create({
    id: ve(() => i()),
    disabled: ve(() => n() ?? !1),
    value: ve(() => t.value),
    ref: ve(() => s(), (d) => s(d))
  }), l = /* @__PURE__ */ se(() => On(c, a.props, { type: o() }));
  var f = oe(), h = H(f);
  {
    var v = (d) => {
      var g = oe(), m = H(g);
      Q(m, () => t.child, () => ({ props: C(l) })), A(d, g);
    }, p = (d) => {
      var g = Xc();
      me(g, () => ({ ...C(l) }));
      var m = W(g);
      Q(m, () => t.children ?? ue), A(d, g);
    };
    Le(h, (d) => {
      t.child ? d(v) : d(p, !1);
    });
  }
  A(e, f), X();
}
const Vi = "-", Jc = (e) => {
  const t = $c(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const c = s.split(Vi);
      return c[0] === "" && c.length !== 1 && c.shift(), zs(c, t) || Qc(s);
    },
    getConflictingClassGroupIds: (s, c) => {
      const a = r[s] || [];
      return c && n[s] ? [...a, ...n[s]] : a;
    }
  };
}, zs = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? zs(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(Vi);
  return (s = t.validators.find(({
    validator: c
  }) => c(o))) == null ? void 0 : s.classGroupId;
}, go = /^\[(.+)\]$/, Qc = (e) => {
  if (go.test(e)) {
    const t = go.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, $c = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in r)
    ui(r[i], n, i, t);
  return n;
}, ui = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : mo(t, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (eu(i)) {
        ui(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([o, s]) => {
      ui(s, mo(t, o), r, n);
    });
  });
}, mo = (e, t) => {
  let r = e;
  return t.split(Vi).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, eu = (e) => e.isThemeGetter, tu = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (o, s) => {
    r.set(o, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let s = r.get(o);
      if (s !== void 0)
        return s;
      if ((s = n.get(o)) !== void 0)
        return i(o, s), s;
    },
    set(o, s) {
      r.has(o) ? r.set(o, s) : i(o, s);
    }
  };
}, fi = "!", di = ":", ru = di.length, nu = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (i) => {
    const o = [];
    let s = 0, c = 0, a = 0, l;
    for (let d = 0; d < i.length; d++) {
      let g = i[d];
      if (s === 0 && c === 0) {
        if (g === di) {
          o.push(i.slice(a, d)), a = d + ru;
          continue;
        }
        if (g === "/") {
          l = d;
          continue;
        }
      }
      g === "[" ? s++ : g === "]" ? s-- : g === "(" ? c++ : g === ")" && c--;
    }
    const f = o.length === 0 ? i : i.substring(a), h = iu(f), v = h !== f, p = l && l > a ? l - a : void 0;
    return {
      modifiers: o,
      hasImportantModifier: v,
      baseClassName: h,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const i = t + di, o = n;
    n = (s) => s.startsWith(i) ? o(s.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const i = n;
    n = (o) => r({
      className: o,
      parseClassName: i
    });
  }
  return n;
}, iu = (e) => e.endsWith(fi) ? e.substring(0, e.length - 1) : e.startsWith(fi) ? e.substring(1) : e, ou = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const i = [];
    let o = [];
    return n.forEach((s) => {
      s[0] === "[" || t[s] ? (i.push(...o.sort(), s), o = []) : o.push(s);
    }), i.push(...o.sort()), i;
  };
}, su = (e) => ({
  cache: tu(e.cacheSize),
  parseClassName: nu(e),
  sortModifiers: ou(e),
  ...Jc(e)
}), au = /\s+/, lu = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: o
  } = t, s = [], c = e.trim().split(au);
  let a = "";
  for (let l = c.length - 1; l >= 0; l -= 1) {
    const f = c[l], {
      isExternal: h,
      modifiers: v,
      hasImportantModifier: p,
      baseClassName: d,
      maybePostfixModifierPosition: g
    } = r(f);
    if (h) {
      a = f + (a.length > 0 ? " " + a : a);
      continue;
    }
    let m = !!g, _ = n(m ? d.substring(0, g) : d);
    if (!_) {
      if (!m) {
        a = f + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (_ = n(d), !_) {
        a = f + (a.length > 0 ? " " + a : a);
        continue;
      }
      m = !1;
    }
    const x = o(v).join(":"), y = p ? x + fi : x, b = y + _;
    if (s.includes(b))
      continue;
    s.push(b);
    const k = i(_, m);
    for (let E = 0; E < k.length; ++E) {
      const S = k[E];
      s.push(y + S);
    }
    a = f + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function cu() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Is(t)) && (n && (n += " "), n += r);
  return n;
}
const Is = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Is(e[n])) && (r && (r += " "), r += t);
  return r;
};
function hi(e, ...t) {
  let r, n, i, o = s;
  function s(a) {
    const l = t.reduce((f, h) => h(f), e());
    return r = su(l), n = r.cache.get, i = r.cache.set, o = c, c(a);
  }
  function c(a) {
    const l = n(a);
    if (l)
      return l;
    const f = lu(a, r);
    return i(a, f), f;
  }
  return function() {
    return o(cu.apply(null, arguments));
  };
}
const fe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Rs = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Fs = /^\((?:(\w[\w-]*):)?(.+)\)$/i, uu = /^\d+\/\d+$/, fu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, du = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, vu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, pu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, tr = (e) => uu.test(e), V = (e) => !!e && !Number.isNaN(Number(e)), At = (e) => !!e && Number.isInteger(Number(e)), Kn = (e) => e.endsWith("%") && V(e.slice(0, -1)), ct = (e) => fu.test(e), gu = () => !0, mu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  du.test(e) && !hu.test(e)
), Ns = () => !1, bu = (e) => vu.test(e), _u = (e) => pu.test(e), yu = (e) => !P(e) && !M(e), wu = (e) => Er(e, Ls, Ns), P = (e) => Rs.test(e), Lt = (e) => Er(e, Vs, mu), Yn = (e) => Er(e, Su, V), bo = (e) => Er(e, Os, Ns), xu = (e) => Er(e, js, _u), on = (e) => Er(e, Gs, bu), M = (e) => Fs.test(e), Pr = (e) => Ar(e, Vs), ku = (e) => Ar(e, Tu), _o = (e) => Ar(e, Os), Eu = (e) => Ar(e, Ls), Au = (e) => Ar(e, js), sn = (e) => Ar(e, Gs, !0), Er = (e, t, r) => {
  const n = Rs.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Ar = (e, t, r = !1) => {
  const n = Fs.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Os = (e) => e === "position" || e === "percentage", js = (e) => e === "image" || e === "url", Ls = (e) => e === "length" || e === "size" || e === "bg-size", Vs = (e) => e === "length", Su = (e) => e === "number", Tu = (e) => e === "family-name", Gs = (e) => e === "shadow", vi = () => {
  const e = fe("color"), t = fe("font"), r = fe("text"), n = fe("font-weight"), i = fe("tracking"), o = fe("leading"), s = fe("breakpoint"), c = fe("container"), a = fe("spacing"), l = fe("radius"), f = fe("shadow"), h = fe("inset-shadow"), v = fe("text-shadow"), p = fe("drop-shadow"), d = fe("blur"), g = fe("perspective"), m = fe("aspect"), _ = fe("ease"), x = fe("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], b = () => [
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
  ], k = () => [...b(), M, P], E = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], T = () => [M, P, a], Z = () => [tr, "full", "auto", ...T()], be = () => [At, "none", "subgrid", M, P], _e = () => ["auto", {
    span: ["full", At, M, P]
  }, At, M, P], ae = () => [At, "auto", M, P], De = () => ["auto", "min", "max", "fr", M, P], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], R = () => ["auto", ...T()], I = () => [tr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...T()], w = () => [e, M, P], L = () => [...b(), _o, bo, {
    position: [M, P]
  }], K = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], J = () => ["auto", "cover", "contain", Eu, wu, {
    size: [M, P]
  }], re = () => [Kn, Pr, Lt], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    M,
    P
  ], le = () => ["", V, Pr, Lt], he = () => ["solid", "dashed", "dotted", "double"], Ye = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ce = () => [V, Kn, _o, bo], Jr = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    d,
    M,
    P
  ], Qr = () => ["none", V, M, P], $r = () => ["none", V, M, P], Dn = () => [V, M, P], en = () => [tr, "full", ...T()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ct],
      breakpoint: [ct],
      color: [gu],
      container: [ct],
      "drop-shadow": [ct],
      ease: ["in", "out", "in-out"],
      font: [yu],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ct],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ct],
      shadow: [ct],
      spacing: ["px", V],
      text: [ct],
      "text-shadow": [ct],
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
        aspect: ["auto", "square", tr, P, M, m]
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
        columns: [V, P, M, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
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
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
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
        inset: Z()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Z()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Z()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Z()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Z()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Z()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Z()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Z()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Z()
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
        z: [At, "auto", M, P]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [tr, "full", "auto", c, ...T()]
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
        flex: [V, tr, "auto", "initial", "none", P]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", V, M, P]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", V, M, P]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [At, "first", "last", "none", M, P]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": be()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: _e()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ae()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": be()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: _e()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ae()
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
        "auto-cols": De()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": De()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: T()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": T()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": T()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...j(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...j()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": j()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: T()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: T()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: T()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: T()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: T()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: T()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: T()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: T()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: T()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: R()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: R()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: R()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: R()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: R()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: R()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: R()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: R()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: R()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": T()
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
        "space-y": T()
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
        size: I()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...I()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...I()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...I()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...I()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...I()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...I()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Pr, Lt]
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
        font: [n, M, Yn]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Kn, P]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ku, P, t]
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
        tracking: [i, M, P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [V, "none", M, Yn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...T()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", M, P]
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
        list: ["disc", "decimal", "none", M, P]
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
        placeholder: w()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: w()
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
        decoration: [V, "from-font", "auto", M, Lt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: w()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [V, "auto", M, P]
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
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M, P]
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
        content: ["none", M, P]
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
        bg: L()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: K()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: J()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, At, M, P],
          radial: ["", M, P],
          conic: [At, M, P]
        }, Au, xu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: w()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: re()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: re()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: re()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: w()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: w()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: B()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": B()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": B()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": B()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": B()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": B()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": B()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": B()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": B()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": B()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": B()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": B()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": B()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": B()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": B()
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
        border: w()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": w()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": w()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": w()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": w()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": w()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": w()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": w()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": w()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: w()
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
        "outline-offset": [V, M, P]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", V, Pr, Lt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: w()
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
          f,
          sn,
          on
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: w()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, sn, on]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": w()
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
        ring: w()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [V, Lt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": w()
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
        "inset-ring": w()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", v, sn, on]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": w()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [V, M, P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ye(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ye()
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
        "mask-linear": [V]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ce()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ce()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": w()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": w()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ce()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ce()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": w()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": w()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ce()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ce()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": w()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": w()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ce()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ce()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": w()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": w()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ce()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ce()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": w()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": w()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ce()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ce()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": w()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": w()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ce()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ce()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": w()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": w()
      }],
      "mask-image-radial": [{
        "mask-radial": [M, P]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ce()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ce()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": w()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": w()
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
        "mask-radial-at": b()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [V]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ce()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ce()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": w()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": w()
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
        mask: L()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: K()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: J()
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
        mask: ["none", M, P]
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
          M,
          P
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Jr()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [V, M, P]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [V, M, P]
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
          p,
          sn,
          on
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": w()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", V, M, P]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [V, M, P]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", V, M, P]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [V, M, P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", V, M, P]
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
          M,
          P
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Jr()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [V, M, P]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [V, M, P]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", V, M, P]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [V, M, P]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", V, M, P]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [V, M, P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [V, M, P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", V, M, P]
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
        "border-spacing": T()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": T()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": T()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", M, P]
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
        duration: [V, "initial", M, P]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, M, P]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [V, M, P]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, M, P]
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
        perspective: [g, M, P]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Qr()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Qr()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Qr()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Qr()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: $r()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": $r()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": $r()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": $r()
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
        skew: Dn()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Dn()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Dn()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [M, P, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
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
        translate: en()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": en()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": en()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": en()
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
        accent: w()
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
        caret: w()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M, P]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        "will-change": ["auto", "scroll", "contents", "transform", M, P]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...w()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [V, Pr, Lt, Yn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...w()]
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
}, Cu = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: i = {},
  override: o = {}
}) => (Ir(e, "cacheSize", t), Ir(e, "prefix", r), Ir(e, "experimentalParseClassName", n), an(e.theme, o.theme), an(e.classGroups, o.classGroups), an(e.conflictingClassGroups, o.conflictingClassGroups), an(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Ir(e, "orderSensitiveModifiers", o.orderSensitiveModifiers), ln(e.theme, i.theme), ln(e.classGroups, i.classGroups), ln(e.conflictingClassGroups, i.conflictingClassGroups), ln(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Ds(e, i, "orderSensitiveModifiers"), e), Ir = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, an = (e, t) => {
  if (t)
    for (const r in t)
      Ir(e, r, t[r]);
}, ln = (e, t) => {
  if (t)
    for (const r in t)
      Ds(e, t, r);
}, Ds = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, Pu = (e, ...t) => typeof e == "function" ? hi(vi, e, ...t) : hi(() => Cu(vi(), e), ...t), Gi = /* @__PURE__ */ hi(vi);
function Fe(...e) {
  return Gi(sr(e));
}
function Mu(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = O(t, "value", 15, ""), i = /* @__PURE__ */ te(t, ["$$slots", "$$events", "$$legacy", "ref", "value", "class"]);
  var o = oe(), s = H(o);
  {
    let c = /* @__PURE__ */ se(() => Fe("flex flex-col gap-2", t.class));
    ee(s, () => Uc, (a, l) => {
      l(a, jt(
        {
          "data-slot": "tabs",
          get class() {
            return C(c);
          }
        },
        () => i,
        {
          get ref() {
            return r();
          },
          set ref(f) {
            r(f);
          },
          get value() {
            return n();
          },
          set value(f) {
            n(f);
          }
        }
      ));
    });
  }
  A(e, o), X();
}
function yo(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var i = oe(), o = H(i);
  {
    let s = /* @__PURE__ */ se(() => Fe("flex-1 outline-none", t.class));
    ee(o, () => Kc, (c, a) => {
      a(c, jt(
        {
          "data-slot": "tabs-content",
          get class() {
            return C(s);
          }
        },
        () => n,
        {
          get ref() {
            return r();
          },
          set ref(l) {
            r(l);
          }
        }
      ));
    });
  }
  A(e, i), X();
}
function zu(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var i = oe(), o = H(i);
  {
    let s = /* @__PURE__ */ se(() => Fe("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", t.class));
    ee(o, () => qc, (c, a) => {
      a(c, jt(
        {
          "data-slot": "tabs-list",
          get class() {
            return C(s);
          }
        },
        () => n,
        {
          get ref() {
            return r();
          },
          set ref(l) {
            r(l);
          }
        }
      ));
    });
  }
  A(e, i), X();
}
function wo(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var i = oe(), o = H(i);
  {
    let s = /* @__PURE__ */ se(() => Fe("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 text-sm font-medium transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class));
    ee(o, () => Zc, (c, a) => {
      a(c, jt(
        {
          "data-slot": "tabs-trigger",
          get class() {
            return C(s);
          }
        },
        () => n,
        {
          get ref() {
            return r();
          },
          set ref(l) {
            r(l);
          }
        }
      ));
    });
  }
  A(e, i), X();
}
var Iu = /* @__PURE__ */ D("<div><!></div>");
function Bs(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var i = Iu();
  me(i, (s) => ({ "data-slot": "card", class: s, ...n }), [
    () => Fe("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", t.class)
  ]);
  var o = W(i);
  Q(o, () => t.children ?? ue), Qe(i, (s) => r(s), () => r()), A(e, i), X();
}
var Ru = /* @__PURE__ */ D("<div><!></div>");
function Ws(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var i = Ru();
  me(i, (s) => ({ "data-slot": "card-content", class: s, ...n }), [() => Fe("px-6", t.class)]);
  var o = W(i);
  Q(o, () => t.children ?? ue), Qe(i, (s) => r(s), () => r()), A(e, i), X();
}
var Fu = /* @__PURE__ */ D("<p><!></p>");
function Us(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var i = Fu();
  me(i, (s) => ({ "data-slot": "card-description", class: s, ...n }), [() => Fe("text-muted-foreground text-sm", t.class)]);
  var o = W(i);
  Q(o, () => t.children ?? ue), Qe(i, (s) => r(s), () => r()), A(e, i), X();
}
var Nu = /* @__PURE__ */ D("<div><!></div>");
function Hs(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var i = Nu();
  me(i, (s) => ({ "data-slot": "card-header", class: s, ...n }), [
    () => Fe("@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6", t.class)
  ]);
  var o = W(i);
  Q(o, () => t.children ?? ue), Qe(i, (s) => r(s), () => r()), A(e, i), X();
}
var Ou = /* @__PURE__ */ D("<div><!></div>");
function Ks(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var i = Ou();
  me(i, (s) => ({ "data-slot": "card-title", class: s, ...n }), [() => Fe("font-semibold leading-none", t.class)]);
  var o = W(i);
  Q(o, () => t.children ?? ue), Qe(i, (s) => r(s), () => r()), A(e, i), X();
}
function Ys(...e) {
  return Gi(sr(e));
}
/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const ju = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var Lu = /* @__PURE__ */ wl("<svg><!><!></svg>");
function Gn(e, t) {
  q(t, !0);
  const r = O(t, "color", 3, "currentColor"), n = O(t, "size", 3, 24), i = O(t, "strokeWidth", 3, 2), o = O(t, "absoluteStrokeWidth", 3, !1), s = O(t, "iconNode", 19, () => []), c = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "children"
  ]);
  var a = Lu();
  me(
    a,
    (h) => ({
      ...ju,
      ...c,
      width: n(),
      height: n(),
      stroke: r(),
      "stroke-width": h,
      class: [
        "lucide-icon lucide",
        t.name && `lucide-${t.name}`,
        t.class
      ]
    }),
    [
      () => o() ? Number(i()) * 24 / Number(n()) : i()
    ]
  );
  var l = W(a);
  ps(l, 17, s, Al, (h, v) => {
    var p = /* @__PURE__ */ se(() => aa(C(v), 2));
    let d = () => C(p)[0], g = () => C(p)[1];
    var m = oe(), _ = H(m);
    bs(_, d, !0, (x, y) => {
      me(x, () => ({ ...g() }));
    }), A(h, m);
  });
  var f = ie(l);
  Q(f, () => t.children ?? ue), A(e, a), X();
}
function Vu(e, t) {
  q(t, !0);
  /**
   * @license @lucide/svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ te(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "M12 3v12" }],
    ["path", { d: "m17 8-5-5-5 5" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]
  ];
  Gn(e, jt(
    { name: "upload" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, o) => {
        var s = oe(), c = H(s);
        Q(c, () => t.children ?? ue), A(i, s);
      },
      $$slots: { default: !0 }
    }
  )), X();
}
var Gu = /* @__PURE__ */ D("<span> </span>"), Du = /* @__PURE__ */ D("<span> </span>"), Bu = /* @__PURE__ */ D("<span> </span>"), Wu = /* @__PURE__ */ D('<span class="text-muted-foreground/75 text-sm"><!> <!> <!></span>'), Uu = /* @__PURE__ */ D(`<div class="flex flex-col place-items-center justify-center gap-2"><div class="border-border text-muted-foreground flex size-14 place-items-center justify-center rounded-full border border-dashed"><!></div> <div class="flex flex-col gap-0.5 text-center"><span class="text-muted-foreground font-medium">Drag 'n' drop files here, or click to select files</span> <!></div></div>`), Hu = /* @__PURE__ */ D("<label><!> <input/></label>");
function Ku(e, t) {
  q(t, !0);
  let r = O(t, "id", 19, Bc), n = O(t, "disabled", 3, !1), i = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "children",
    "maxFiles",
    "maxFileSize",
    "fileCount",
    "disabled",
    "onUpload",
    "onFileRejected",
    "accept",
    "class"
  ]);
  t.maxFiles !== void 0 && t.fileCount === void 0 && console.warn("Make sure to provide FileDropZone with `fileCount` when using the `maxFiles` prompt");
  let o = /* @__PURE__ */ Ee(!1);
  const s = async (m) => {
    var x;
    if (n() || !C(f)) return;
    m.preventDefault();
    const _ = Array.from(((x = m.dataTransfer) == null ? void 0 : x.files) ?? []);
    await l(_);
  }, c = async (m) => {
    if (n()) return;
    const _ = m.currentTarget.files;
    _ && (await l(Array.from(_)), m.target.value = "");
  }, a = (m, _) => {
    if (t.maxFileSize !== void 0 && m.size > t.maxFileSize) return "Maximum file size exceeded";
    if (t.maxFiles !== void 0 && _ > t.maxFiles) return "Maximum files uploaded";
    if (!t.accept) return;
    const x = t.accept.split(",").map((E) => E.trim().toLowerCase()), y = m.type.toLowerCase(), b = m.name.toLowerCase();
    if (!x.some((E) => {
      if (y.startsWith("."))
        return b.endsWith(E);
      if (E.endsWith("/*")) {
        const S = E.slice(0, E.indexOf("/*"));
        return y.startsWith(S + "/");
      }
      return y === E;
    })) return "File type not allowed";
  }, l = async (m) => {
    var x;
    ne(o, !0);
    const _ = [];
    for (let y = 0; y < m.length; y++) {
      const b = m[y], k = a(b, (t.fileCount ?? 0) + y + 1);
      if (k) {
        (x = t.onFileRejected) == null || x.call(t, { file: b, reason: k });
        continue;
      }
      _.push(b);
    }
    await t.onUpload(_), ne(o, !1);
  }, f = /* @__PURE__ */ se(() => !n() && !C(o) && !(t.maxFiles !== void 0 && t.fileCount !== void 0 && t.fileCount >= t.maxFiles));
  var h = Hu(), v = W(h);
  {
    var p = (m) => {
      var _ = oe(), x = H(_);
      Q(x, () => t.children), A(m, _);
    }, d = (m) => {
      var _ = Uu(), x = W(_), y = W(x);
      Vu(y, { class: "size-7" });
      var b = ie(x, 2), k = ie(W(b), 2);
      {
        var E = (S) => {
          var T = Wu(), Z = W(T);
          {
            var be = (z) => {
              var R = Gu(), I = W(R);
              Dt(() => qt(I, `You can upload ${t.maxFiles ?? ""} files`)), A(z, R);
            };
            Le(Z, (z) => {
              t.maxFiles && z(be);
            });
          }
          var _e = ie(Z, 2);
          {
            var ae = (z) => {
              var R = Du(), I = W(R);
              Dt((w) => qt(I, `(up to ${w ?? ""} each)`), [() => pi(t.maxFileSize)]), A(z, R);
            };
            Le(_e, (z) => {
              t.maxFiles && t.maxFileSize && z(ae);
            });
          }
          var De = ie(_e, 2);
          {
            var j = (z) => {
              var R = Bu(), I = W(R);
              Dt((w) => qt(I, `Maximum size ${w ?? ""}`), [() => pi(t.maxFileSize)]), A(z, R);
            };
            Le(De, (z) => {
              t.maxFileSize && !t.maxFiles && z(j);
            });
          }
          A(S, T);
        };
        Le(k, (S) => {
          (t.maxFiles || t.maxFileSize) && S(E);
        });
      }
      A(m, _);
    };
    Le(v, (m) => {
      t.children ? m(p) : m(d, !1);
    });
  }
  var g = ie(v, 2);
  me(
    g,
    () => ({
      ...i,
      disabled: !C(f),
      id: r(),
      accept: t.accept,
      multiple: t.maxFiles === void 0 || t.maxFiles - (t.fileCount ?? 0) > 1,
      type: "file",
      onchange: c,
      class: "hidden"
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  ), Dt(
    (m) => {
      mn(h, "for", r()), mn(h, "aria-disabled", !C(f)), ws(h, 1, m);
    },
    [
      () => ys(Ys("border-border hover:bg-accent/25 flex h-48 w-full place-items-center justify-center rounded-lg border-2 border-dashed p-6 transition-all hover:cursor-pointer aria-disabled:opacity-50 aria-disabled:hover:cursor-not-allowed", t.class))
    ]
  ), io("dragover", h, (m) => m.preventDefault()), io("drop", h, s), A(e, h), X();
}
const pi = (e) => e < gi ? `${e.toFixed(0)} B` : e < mi ? `${(e / gi).toFixed(0)} KB` : e < xo ? `${(e / mi).toFixed(0)} MB` : `${(e / xo).toFixed(0)} GB`, gi = 1024, mi = 1024 * gi, xo = 1024 * mi;
var Yu = /\s+/g, bi = (e) => typeof e != "string" || !e ? e : e.replace(Yu, " ").trim(), _n = (...e) => {
  let t = [], r = (n) => {
    if (!n && n !== 0 && n !== 0n) return;
    if (Array.isArray(n)) {
      for (let o = 0, s = n.length; o < s; o++) r(n[o]);
      return;
    }
    let i = typeof n;
    if (i === "string" || i === "number" || i === "bigint") {
      if (i === "number" && n !== n) return;
      t.push(String(n));
    } else if (i === "object") {
      let o = Object.keys(n);
      for (let s = 0, c = o.length; s < c; s++) {
        let a = o[s];
        n[a] && t.push(a);
      }
    }
  };
  for (let n = 0, i = e.length; n < i; n++) {
    let o = e[n];
    o != null && r(o);
  }
  return t.length > 0 ? bi(t.join(" ")) : void 0;
}, ko = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, ze = (e) => {
  if (!e || typeof e != "object") return !0;
  for (let t in e) return !1;
  return !0;
}, qu = (e, t) => {
  if (e === t) return !0;
  if (!e || !t) return !1;
  let r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++) {
    let o = r[i];
    if (!n.includes(o) || e[o] !== t[o]) return !1;
  }
  return !0;
}, Eo = (e, t) => {
  for (let r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
    let n = t[r];
    r in e ? e[r] = _n(e[r], n) : e[r] = n;
  }
  return e;
}, qs = (e, t) => {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    Array.isArray(n) ? qs(n, t) : n && t.push(n);
  }
}, Xs = (...e) => {
  let t = [];
  qs(e, t);
  let r = [];
  for (let n = 0; n < t.length; n++) t[n] && r.push(t[n]);
  return r;
}, _i = (e, t) => {
  let r = {};
  for (let n in e) {
    let i = e[n];
    if (n in t) {
      let o = t[n];
      Array.isArray(i) || Array.isArray(o) ? r[n] = Xs(o, i) : typeof i == "object" && typeof o == "object" && i && o ? r[n] = _i(i, o) : r[n] = o + " " + i;
    } else r[n] = i;
  }
  for (let n in t) n in e || (r[n] = t[n]);
  return r;
}, Xu = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 };
function Zu() {
  let e = null, t = {}, r = !1;
  return { get cachedTwMerge() {
    return e;
  }, set cachedTwMerge(n) {
    e = n;
  }, get cachedTwMergeConfig() {
    return t;
  }, set cachedTwMergeConfig(n) {
    t = n;
  }, get didTwMergeConfigChange() {
    return r;
  }, set didTwMergeConfigChange(n) {
    r = n;
  }, reset() {
    e = null, t = {}, r = !1;
  } };
}
var ut = Zu(), Ju = (e) => {
  let t = (r, n) => {
    let { extend: i = null, slots: o = {}, variants: s = {}, compoundVariants: c = [], compoundSlots: a = [], defaultVariants: l = {} } = r, f = { ...Xu, ...n }, h = i != null && i.base ? _n(i.base, r == null ? void 0 : r.base) : r == null ? void 0 : r.base, v = i != null && i.variants && !ze(i.variants) ? _i(s, i.variants) : s, p = i != null && i.defaultVariants && !ze(i.defaultVariants) ? { ...i.defaultVariants, ...l } : l;
    !ze(f.twMergeConfig) && !qu(f.twMergeConfig, ut.cachedTwMergeConfig) && (ut.didTwMergeConfigChange = !0, ut.cachedTwMergeConfig = f.twMergeConfig);
    let d = ze(i == null ? void 0 : i.slots), g = ze(o) ? {} : { base: _n(r == null ? void 0 : r.base, d && (i == null ? void 0 : i.base)), ...o }, m = d ? g : Eo({ ...i == null ? void 0 : i.slots }, ze(g) ? { base: r == null ? void 0 : r.base } : g), _ = ze(i == null ? void 0 : i.compoundVariants) ? c : Xs(i == null ? void 0 : i.compoundVariants, c), x = (b) => {
      if (ze(v) && ze(o) && d) return e(h, b == null ? void 0 : b.class, b == null ? void 0 : b.className)(f);
      if (_ && !Array.isArray(_)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof _}`);
      if (a && !Array.isArray(a)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);
      let k = (j, z, R = [], I) => {
        let w = R;
        if (typeof z == "string") {
          let L = bi(z).split(" ");
          for (let K = 0; K < L.length; K++) w.push(`${j}:${L[K]}`);
        } else if (Array.isArray(z)) for (let L = 0; L < z.length; L++) w.push(`${j}:${z[L]}`);
        else if (typeof z == "object" && typeof I == "string" && I in z) {
          let L = z[I];
          if (L && typeof L == "string") {
            let K = bi(L).split(" "), J = [];
            for (let re = 0; re < K.length; re++) J.push(`${j}:${K[re]}`);
            w[I] = w[I] ? w[I].concat(J) : J;
          } else if (Array.isArray(L) && L.length > 0) {
            let K = [];
            for (let J = 0; J < L.length; J++) K.push(`${j}:${L[J]}`);
            w[I] = K;
          }
        }
        return w;
      }, E = (j, z = v, R = null, I = null) => {
        let w = z[j];
        if (!w || ze(w)) return null;
        let L = (I == null ? void 0 : I[j]) ?? (b == null ? void 0 : b[j]);
        if (L === null) return null;
        let K = ko(L), J = Array.isArray(f.responsiveVariants) && f.responsiveVariants.length > 0 || f.responsiveVariants === !0, re = p == null ? void 0 : p[j], B = [];
        if (typeof K == "object" && J) for (let [Ye, ce] of Object.entries(K)) {
          let Jr = w[ce];
          if (Ye === "initial") {
            re = ce;
            continue;
          }
          Array.isArray(f.responsiveVariants) && !f.responsiveVariants.includes(Ye) || (B = k(Ye, Jr, B, R));
        }
        let le = K != null && typeof K != "object" ? K : ko(re), he = w[le || "false"];
        return typeof B == "object" && typeof R == "string" && B[R] ? Eo(B, he) : B.length > 0 ? (B.push(he), R === "base" ? B.join(" ") : B) : he;
      }, S = () => {
        if (!v) return null;
        let j = Object.keys(v), z = [];
        for (let R = 0; R < j.length; R++) {
          let I = E(j[R], v);
          I && z.push(I);
        }
        return z;
      }, T = (j, z) => {
        if (!v || typeof v != "object") return null;
        let R = [];
        for (let I in v) {
          let w = E(I, v, j, z), L = j === "base" && typeof w == "string" ? w : w && w[j];
          L && R.push(L);
        }
        return R;
      }, Z = {};
      for (let j in b) {
        let z = b[j];
        z !== void 0 && (Z[j] = z);
      }
      let be = (j, z) => {
        var I;
        let R = typeof (b == null ? void 0 : b[j]) == "object" ? { [j]: (I = b[j]) == null ? void 0 : I.initial } : {};
        return { ...p, ...Z, ...R, ...z };
      }, _e = (j = [], z) => {
        let R = [], I = j.length;
        for (let w = 0; w < I; w++) {
          let { class: L, className: K, ...J } = j[w], re = !0, B = be(null, z);
          for (let le in J) {
            let he = J[le], Ye = B[le];
            if (Array.isArray(he)) {
              if (!he.includes(Ye)) {
                re = !1;
                break;
              }
            } else {
              if ((he == null || he === !1) && (Ye == null || Ye === !1)) continue;
              if (Ye !== he) {
                re = !1;
                break;
              }
            }
          }
          re && (L && R.push(L), K && R.push(K));
        }
        return R;
      }, ae = (j) => {
        let z = _e(_, j);
        if (!Array.isArray(z)) return z;
        let R = {}, I = e;
        for (let w = 0; w < z.length; w++) {
          let L = z[w];
          if (typeof L == "string") R.base = I(R.base, L)(f);
          else if (typeof L == "object") for (let K in L) R[K] = I(R[K], L[K])(f);
        }
        return R;
      }, De = (j) => {
        if (a.length < 1) return null;
        let z = {}, R = be(null, j);
        for (let I = 0; I < a.length; I++) {
          let { slots: w = [], class: L, className: K, ...J } = a[I];
          if (!ze(J)) {
            let re = !0;
            for (let B in J) {
              let le = R[B], he = J[B];
              if (le === void 0 || (Array.isArray(he) ? !he.includes(le) : he !== le)) {
                re = !1;
                break;
              }
            }
            if (!re) continue;
          }
          for (let re = 0; re < w.length; re++) {
            let B = w[re];
            z[B] || (z[B] = []), z[B].push([L, K]);
          }
        }
        return z;
      };
      if (!ze(o) || !d) {
        let j = {};
        if (typeof m == "object" && !ze(m)) {
          let z = e;
          for (let R in m) j[R] = (I) => {
            let w = ae(I), L = De(I);
            return z(m[R], T(R, I), w ? w[R] : void 0, L ? L[R] : void 0, I == null ? void 0 : I.class, I == null ? void 0 : I.className)(f);
          };
        }
        return j;
      }
      return e(h, S(), _e(_), b == null ? void 0 : b.class, b == null ? void 0 : b.className)(f);
    }, y = () => {
      if (!(!v || typeof v != "object")) return Object.keys(v);
    };
    return x.variantKeys = y(), x.extend = i, x.base = h, x.slots = m, x.variants = v, x.defaultVariants = p, x.compoundSlots = a, x.compoundVariants = _, x;
  };
  return { tv: t, createTV: (r) => (n, i) => t(n, i ? _i(r, i) : r) };
}, Qu = (e) => ze(e) ? Gi : Pu({ ...e, extend: { theme: e.theme, classGroups: e.classGroups, conflictingClassGroupModifiers: e.conflictingClassGroupModifiers, conflictingClassGroups: e.conflictingClassGroups, ...e.extend } }), $u = (...e) => (t) => {
  let r = _n(e);
  return !r || !t.twMerge ? r : ((!ut.cachedTwMerge || ut.didTwMergeConfigChange) && (ut.didTwMergeConfigChange = !1, ut.cachedTwMerge = Qu(ut.cachedTwMergeConfig)), ut.cachedTwMerge(r) || void 0);
}, { tv: Zs } = Ju($u);
function ef(e, t) {
  q(t, !0);
  /**
   * @license @lucide/svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ te(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }]];
  Gn(e, jt(
    { name: "loader-circle" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, o) => {
        var s = oe(), c = H(s);
        Q(c, () => t.children ?? ue), A(i, s);
      },
      $$slots: { default: !0 }
    }
  )), X();
}
const tf = Zs({
  base: "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-md text-sm font-medium whitespace-nowrap outline-hidden transition-all select-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xs",
      destructive: "bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 text-white shadow-2xs",
      outline: "bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 border shadow-2xs",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-2xs",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
var rf = /* @__PURE__ */ D('<div class="absolute flex size-full place-items-center justify-center bg-inherit"><div class="flex animate-spin place-items-center justify-center"><!></div></div> <span class="sr-only">Loading</span>', 1), nf = /* @__PURE__ */ D("<!> <!>", 1);
function Ao(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = O(t, "variant", 3, "default"), i = O(t, "size", 3, "default"), o = O(t, "href", 3, void 0), s = O(t, "type", 3, "button"), c = O(t, "loading", 7, !1), a = O(t, "disabled", 3, !1), l = O(t, "tabindex", 3, 0), f = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "variant",
    "size",
    "href",
    "type",
    "loading",
    "disabled",
    "tabindex",
    "onclick",
    "onClickPromise",
    "class",
    "children"
  ]);
  var h = oe(), v = H(h);
  bs(v, () => o() ? "a" : "button", !1, (p, d) => {
    Qe(p, (b) => r(b), () => r());
    var g = async (b) => {
      var k;
      (k = t.onclick) == null || k.call(t, b), s() !== void 0 && t.onClickPromise && (c(!0), await t.onClickPromise(b), c(!1));
    };
    me(
      p,
      (b) => ({
        ...f,
        "data-slot": "button",
        type: o() ? void 0 : s(),
        href: o() && !a() ? o() : void 0,
        disabled: o() ? void 0 : a() || c(),
        "aria-disabled": o() ? a() : void 0,
        role: o() && a() ? "link" : void 0,
        tabindex: o() && a() ? -1 : l(),
        class: b,
        onclick: g
      }),
      [
        () => Ys(tf({ variant: n(), size: i() }), t.class)
      ]
    );
    var m = nf(), _ = H(m);
    {
      var x = (b) => {
        var k = rf(), E = H(k), S = W(E), T = W(S);
        ef(T, { class: "size-4" }), A(b, k);
      };
      Le(_, (b) => {
        s() !== void 0 && c() && b(x);
      });
    }
    var y = ie(_, 2);
    Q(y, () => t.children ?? ue), A(d, m);
  }), A(e, h), X();
}
function of(e, t) {
  q(t, !0);
  /**
   * @license @lucide/svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ te(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "m12.5 17-.5-1-.5 1h1z" }],
    [
      "path",
      {
        d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
      }
    ],
    ["circle", { cx: "15", cy: "12", r: "1" }],
    ["circle", { cx: "9", cy: "12", r: "1" }]
  ];
  Gn(e, jt(
    { name: "skull" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, o) => {
        var s = oe(), c = H(s);
        Q(c, () => t.children ?? ue), A(i, s);
      },
      $$slots: { default: !0 }
    }
  )), X();
}
function sf(e, t) {
  q(t, !0);
  /**
   * @license @lucide/svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ te(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "M18 6 6 18" }],
    ["path", { d: "m6 6 12 12" }]
  ];
  Gn(e, jt(
    { name: "x" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, o) => {
        var s = oe(), c = H(s);
        Q(c, () => t.children ?? ue), A(i, s);
      },
      $$slots: { default: !0 }
    }
  )), X();
}
var af = /* @__PURE__ */ D('<span class="sr-only">Remove</span> <!>', 1), lf = /* @__PURE__ */ D('<div class="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3 text-sm shadow-sm dark:border-zinc-700 dark:bg-zinc-900"><div><p class="font-medium text-zinc-800 dark:text-zinc-100"> </p> <p class="text-xs text-zinc-500 dark:text-zinc-400"> </p></div> <div class="flex gap-2"><!> <!></div></div>');
function cf(e, t) {
  q(t, !0);
  var r = lf(), n = W(r), i = W(n), o = W(i), s = ie(i, 2), c = W(s), a = ie(n, 2), l = W(a);
  Ao(l, {
    variant: "ghost",
    class: "w-30 bg-slate-50 shadow-sm",
    get onclick() {
      return t.onLoad;
    },
    children: (h, v) => {
      var p = mt("Load");
      A(h, p);
    },
    $$slots: { default: !0 }
  });
  var f = ie(l, 2);
  Ao(f, {
    variant: "ghost",
    size: "icon",
    class: "bg-red-100 shadow-sm",
    get onclick() {
      return t.onRemove;
    },
    children: (h, v) => {
      var p = af(), d = ie(H(p), 2);
      sf(d, { class: "size-4" }), A(h, p);
    },
    $$slots: { default: !0 }
  }), Dt(
    (h) => {
      qt(o, t.file.name), qt(c, `${h ?? ""} · ${(t.file.type || "unknown type") ?? ""}`);
    },
    [() => pi(t.file.size)]
  ), A(e, r), X();
}
var uf = /* @__PURE__ */ D('<div class="space-y-3"></div>'), ff = /* @__PURE__ */ D('<p class="text-sm text-zinc-500 dark:text-zinc-400"> </p>');
function df(e, t) {
  q(t, !0);
  const r = O(t, "files", 19, () => []), n = O(t, "emptyMessage", 3, "No files selected yet. Use the drop zone above to add some.");
  var i = oe(), o = H(i);
  {
    var s = (a) => {
      var l = uf();
      ps(l, 23, r, (f) => f.name + f.size + f.type, (f, h, v) => {
        cf(f, {
          get file() {
            return C(h);
          },
          onLoad: () => t.onLoad(C(v)),
          onRemove: () => t.onRemove(C(v))
        });
      }), A(a, l);
    }, c = (a) => {
      var l = ff(), f = W(l);
      Dt(() => qt(f, n())), A(a, l);
    };
    Le(o, (a) => {
      r().length > 0 ? a(s) : a(c, !1);
    });
  }
  A(e, i), X();
}
var hf = /* @__PURE__ */ D("<!> <!>", 1), vf = /* @__PURE__ */ D('<div class="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-500/40 dark:bg-red-950/40 dark:text-red-200"><strong class="font-semibold">Upload error:</strong> <span class="ml-2"> </span></div>'), pf = /* @__PURE__ */ D('<div class="space-y-4"><!> <!> <!></div>'), gf = /* @__PURE__ */ D("<!> <!>", 1);
function mf(e, t) {
  q(t, !0);
  const r = O(t, "files", 19, () => []);
  var n = oe(), i = H(n);
  ee(i, () => Bs, (o, s) => {
    s(o, {
      children: (c, a) => {
        var l = gf(), f = H(l);
        ee(f, () => Hs, (v, p) => {
          p(v, {
            children: (d, g) => {
              var m = hf(), _ = H(m);
              ee(_, () => Ks, (y, b) => {
                b(y, {
                  children: (k, E) => {
                    var S = mt("Browse Configs");
                    A(k, S);
                  },
                  $$slots: { default: !0 }
                });
              });
              var x = ie(_, 2);
              ee(x, () => Us, (y, b) => {
                b(y, {
                  children: (k, E) => {
                    var S = mt("Select a config file to view before loading.");
                    A(k, S);
                  },
                  $$slots: { default: !0 }
                });
              }), A(d, m);
            },
            $$slots: { default: !0 }
          });
        });
        var h = ie(f, 2);
        ee(h, () => Ws, (v, p) => {
          p(v, {
            children: (d, g) => {
              var m = pf(), _ = W(m);
              Ku(_, {
                get maxFiles() {
                  return t.maxFiles;
                },
                get fileCount() {
                  return r().length;
                },
                get onUpload() {
                  return t.onUpload;
                },
                get onFileRejected() {
                  return t.onFileRejected;
                }
              });
              var x = ie(_, 2);
              {
                var y = (k) => {
                  var E = vf(), S = ie(W(E), 2), T = W(S);
                  Dt(() => qt(T, t.error)), A(k, E);
                };
                Le(x, (k) => {
                  t.error && k(y);
                });
              }
              var b = ie(x, 2);
              df(b, {
                get files() {
                  return r();
                },
                get onLoad() {
                  return t.onLoad;
                },
                get onRemove() {
                  return t.onRemove;
                }
              }), A(d, m);
            },
            $$slots: { default: !0 }
          });
        }), A(c, l);
      },
      $$slots: { default: !0 }
    });
  }), A(e, n), X();
}
var bf = /* @__PURE__ */ D("<div><!></div>");
function _f(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var i = bf();
  me(i, (s) => ({ "data-slot": "empty", class: s, ...n }), [
    () => Fe("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12", t.class)
  ]);
  var o = W(i);
  Q(o, () => t.children ?? ue), Qe(i, (s) => r(s), () => r()), A(e, i), X();
}
var yf = /* @__PURE__ */ D("<div><!></div>");
function wf(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var i = yf();
  me(i, (s) => ({ "data-slot": "empty-header", class: s, ...n }), [
    () => Fe("flex max-w-sm flex-col items-center gap-2 text-center", t.class)
  ]);
  var o = W(i);
  Q(o, () => t.children ?? ue), Qe(i, (s) => r(s), () => r()), A(e, i), X();
}
const xf = Zs({
  base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
    }
  },
  defaultVariants: { variant: "default" }
});
var kf = /* @__PURE__ */ D("<div><!></div>");
function Ef(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = O(t, "variant", 3, "default"), i = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children",
    "variant"
  ]);
  var o = kf();
  me(
    o,
    (c) => ({
      "data-slot": "empty-icon",
      "data-variant": n(),
      class: c,
      ...i
    }),
    [
      () => Fe(xf({ variant: n() }), t.class)
    ]
  );
  var s = W(o);
  Q(s, () => t.children ?? ue), Qe(o, (c) => r(c), () => r()), A(e, o), X();
}
var Af = /* @__PURE__ */ D("<div><!></div>");
function Sf(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var i = Af();
  me(i, (s) => ({ "data-slot": "empty-title", class: s, ...n }), [
    () => Fe("text-lg font-medium tracking-tight", t.class)
  ]);
  var o = W(i);
  Q(o, () => t.children ?? ue), Qe(i, (s) => r(s), () => r()), A(e, i), X();
}
var Tf = /* @__PURE__ */ D("<div><!></div>");
function Cf(e, t) {
  q(t, !0);
  let r = O(t, "ref", 15, null), n = /* @__PURE__ */ te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var i = Tf();
  me(i, (s) => ({ "data-slot": "empty-description", class: s, ...n }), [
    () => Fe("text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4", t.class)
  ]);
  var o = W(i);
  Q(o, () => t.children ?? ue), Qe(i, (s) => r(s), () => r()), A(e, i), X();
}
var Pf = /* @__PURE__ */ D("<!> <!>", 1), Mf = /* @__PURE__ */ D("<!> <!> <!>", 1), zf = /* @__PURE__ */ D('<div class="space-y-4"><!> <!></div>'), If = /* @__PURE__ */ D("<!> <!>", 1);
function Rf(e, t) {
  q(t, !0);
  var r = oe(), n = H(r);
  ee(n, () => Bs, (i, o) => {
    o(i, {
      children: (s, c) => {
        var a = If(), l = H(a);
        ee(l, () => Hs, (h, v) => {
          v(h, {
            children: (p, d) => {
              var g = Pf(), m = H(g);
              ee(m, () => Ks, (x, y) => {
                y(x, {
                  children: (b, k) => {
                    var E = mt("Save Config");
                    A(b, E);
                  },
                  $$slots: { default: !0 }
                });
              });
              var _ = ie(m, 2);
              ee(_, () => Us, (x, y) => {
                y(x, {
                  children: (b, k) => {
                    var E = mt("Select a config file to save.");
                    A(b, E);
                  },
                  $$slots: { default: !0 }
                });
              }), A(p, g);
            },
            $$slots: { default: !0 }
          });
        });
        var f = ie(l, 2);
        ee(f, () => Ws, (h, v) => {
          v(h, {
            children: (p, d) => {
              var g = zf(), m = W(g);
              {
                var _ = (y) => {
                  var b = oe(), k = H(b);
                  Q(k, () => t.children.default), A(y, b);
                };
                Le(m, (y) => {
                  var b;
                  (b = t.children) != null && b.default && y(_);
                });
              }
              var x = ie(m, 2);
              ee(x, () => _f, (y, b) => {
                b(y, {
                  children: (k, E) => {
                    var S = oe(), T = H(S);
                    ee(T, () => wf, (Z, be) => {
                      be(Z, {
                        children: (_e, ae) => {
                          var De = Mf(), j = H(De);
                          ee(j, () => Ef, (I, w) => {
                            w(I, {
                              variant: "icon",
                              children: (L, K) => {
                                of(L, {});
                              },
                              $$slots: { default: !0 }
                            });
                          });
                          var z = ie(j, 2);
                          ee(z, () => Sf, (I, w) => {
                            w(I, {
                              children: (L, K) => {
                                var J = mt("No Config");
                                A(L, J);
                              },
                              $$slots: { default: !0 }
                            });
                          });
                          var R = ie(z, 2);
                          ee(R, () => Cf, (I, w) => {
                            w(I, {
                              children: (L, K) => {
                                var J = mt(`It seems you don't have a config file loaded, please load a config file to
            get started.`);
                                A(L, J);
                              },
                              $$slots: { default: !0 }
                            });
                          }), A(_e, De);
                        },
                        $$slots: { default: !0 }
                      });
                    }), A(k, S);
                  },
                  $$slots: { default: !0 }
                });
              }), A(p, g);
            },
            $$slots: { default: !0 }
          });
        }), A(s, a);
      },
      $$slots: { default: !0 }
    });
  }), A(e, r), X();
}
function Ff({
  bindings: e,
  maxFilesProp: t
}) {
  const r = () => {
    if (!(e != null && e.files)) return [];
    try {
      const a = JSON.parse(e.files);
      return Array.isArray(a) ? a.filter(
        (l) => l && typeof l.name == "string" && typeof l.size == "number" && typeof l.type == "string"
      ).map((l) => ({
        name: l.name,
        size: l.size,
        type: l.type
      })) : [];
    } catch {
      return [];
    }
  }, n = (a) => {
    e.files = JSON.stringify(a), e.file_count = a.length;
  };
  return {
    bindings: e,
    readBoundFiles: r,
    writeBoundFiles: n,
    maxFiles: () => t ?? (e == null ? void 0 : e.max_files) ?? 5,
    handleUpload: async (a) => {
      const f = [...r()];
      for (const h of a)
        f.some(
          (p) => p.name === h.name && p.size === h.size && p.type === h.type
        ) || f.push({
          name: h.name,
          size: h.size,
          type: h.type
        });
      n(f), e.error = "";
    },
    handleFileRejected: ({ reason: a, file: l }) => {
      e.error = `${l.name}: ${a}`;
    },
    removeFile: (a) => {
      const l = r();
      l.splice(a, 1), n(l), l.length === 0 && (e.error = "");
    }
  };
}
var Nf = /* @__PURE__ */ D("<!> <!>", 1), Of = /* @__PURE__ */ D('<p class="text-sm text-zinc-500 dark:text-zinc-400">TBD – hook into notebook persistence.</p>'), jf = /* @__PURE__ */ D("<!> <!> <!>", 1), Lf = /* @__PURE__ */ D('<div class="space-y-6"><div class="flex w-full flex-col gap-6"><!></div></div>');
function Vf(e, t) {
  q(t, !0);
  const r = Ff({ bindings: t.bindings, maxFilesProp: t.maxFiles }), n = /* @__PURE__ */ se(() => r.readBoundFiles()), i = /* @__PURE__ */ se(() => r.maxFiles()), o = (l) => {
    r.removeFile(l);
  };
  var s = Lf(), c = W(s), a = W(c);
  ee(a, () => Mu, (l, f) => {
    f(l, {
      value: "find",
      children: (h, v) => {
        var p = jf(), d = H(p);
        ee(d, () => zu, (_, x) => {
          x(_, {
            children: (y, b) => {
              var k = Nf(), E = H(k);
              ee(E, () => wo, (T, Z) => {
                Z(T, {
                  value: "find",
                  children: (be, _e) => {
                    var ae = mt("Browse Configs");
                    A(be, ae);
                  },
                  $$slots: { default: !0 }
                });
              });
              var S = ie(E, 2);
              ee(S, () => wo, (T, Z) => {
                Z(T, {
                  value: "save",
                  children: (be, _e) => {
                    var ae = mt("Save Config");
                    A(be, ae);
                  },
                  $$slots: { default: !0 }
                });
              }), A(y, k);
            },
            $$slots: { default: !0 }
          });
        });
        var g = ie(d, 2);
        ee(g, () => yo, (_, x) => {
          x(_, {
            value: "find",
            children: (y, b) => {
              mf(y, {
                get files() {
                  return C(n);
                },
                get error() {
                  return t.bindings.error;
                },
                get maxFiles() {
                  return C(i);
                },
                get onUpload() {
                  return r.handleUpload;
                },
                get onFileRejected() {
                  return r.handleFileRejected;
                },
                get onRemove() {
                  return r.removeFile;
                },
                onLoad: o
              });
            },
            $$slots: { default: !0 }
          });
        });
        var m = ie(g, 2);
        ee(m, () => yo, (_, x) => {
          x(_, {
            value: "save",
            children: (y, b) => {
              Rf(y, {
                children: (k, E) => {
                  var S = Of();
                  A(k, S);
                },
                $$slots: { default: !0 }
              });
            },
            $$slots: { default: !0 }
          });
        }), A(h, p);
      },
      $$slots: { default: !0 }
    });
  }), A(e, s), X();
}
const Bf = Vl(Vf);
export {
  Bf as default
};

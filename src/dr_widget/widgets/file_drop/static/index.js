var Hi = Object.defineProperty;
var mn = (e) => {
  throw TypeError(e);
};
var Ki = (e, t, r) => t in e ? Hi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ee = (e, t, r) => Ki(e, typeof t != "symbol" ? t + "" : t, r), zr = (e, t, r) => t.has(e) || mn("Cannot " + r);
var u = (e, t, r) => (zr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), P = (e, t, r) => t.has(e) ? mn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), T = (e, t, r, n) => (zr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), D = (e, t, r) => (zr(e, t, "access private method"), r);
var Xr = Array.isArray, Ji = Array.prototype.indexOf, Qr = Array.from, Zi = Object.defineProperty, Je = Object.getOwnPropertyDescriptor, Xi = Object.getOwnPropertyDescriptors, Qi = Object.prototype, $i = Array.prototype, Ln = Object.getPrototypeOf, gn = Object.isExtensible;
function Gt(e) {
  return typeof e == "function";
}
const Dn = () => {
};
function eo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function jn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function to(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const Q = 2, $r = 4, en = 8, je = 16, $e = 32, ht = 64, yr = 128, Z = 1024, ce = 2048, Ge = 4096, fe = 8192, De = 16384, Gn = 32768, Xe = 65536, bn = 1 << 17, ro = 1 << 18, Ft = 1 << 19, no = 1 << 20, we = 256, hr = 512, pr = 32768, Rr = 1 << 21, tn = 1 << 22, lt = 1 << 23, ft = Symbol("$state"), Bn = Symbol("legacy props"), io = Symbol(""), bt = new class extends Error {
  constructor() {
    super(...arguments);
    Ee(this, "name", "StaleReactionError");
    Ee(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function oo() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function so() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ao(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function lo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function fo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function co() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function uo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const xr = 1, kr = 2, Vn = 4, ho = 8, po = 16, vo = 1, mo = 4, go = 8, bo = 16, _o = 2, Y = Symbol(), wo = "http://www.w3.org/1999/xhtml", yo = "http://www.w3.org/2000/svg", xo = "@attach";
function ko() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Eo() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let So = !1;
function Un(e) {
  return e === this.v;
}
function Ao(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Wn(e) {
  return !Ao(e, this.v);
}
let ye = null;
function Tt(e) {
  ye = e;
}
function $t(e, t = !1, r) {
  ye = {
    p: ye,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function er(e) {
  var t = (
    /** @type {ComponentContext} */
    ye
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Yo(n);
  }
  return t.i = !0, ye = t.p, /** @type {T} */
  {};
}
function qn() {
  return !0;
}
let _t = [];
function Co() {
  var e = _t;
  _t = [], eo(e);
}
function Pt(e) {
  if (_t.length === 0) {
    var t = _t;
    queueMicrotask(() => {
      t === _t && Co();
    });
  }
  _t.push(e);
}
function Yn(e) {
  var t = F;
  if (t === null)
    return I.f |= lt, e;
  if (t.f & Gn)
    Mt(e, t);
  else {
    if (!(t.f & yr))
      throw e;
    t.b.error(e);
  }
}
function Mt(e, t) {
  for (; t !== null; ) {
    if (t.f & yr)
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
const ar = /* @__PURE__ */ new Set();
let G = null, H = null, Ue = [], rn = null, Nr = !1;
var St, At, nt, it, Zt, Ct, zt, J, Or, tt, Hn, Kn;
const br = class br {
  constructor() {
    P(this, J);
    Ee(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Ee(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ee(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    P(this, St, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    P(this, At, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    P(this, nt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    P(this, it, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    P(this, Zt, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    P(this, Ct, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    P(this, zt, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Ee(this, "skipped_effects", /* @__PURE__ */ new Set());
    Ee(this, "is_fork", !1);
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var n;
    Ue = [], this.apply();
    var r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const i of t)
      D(this, J, Or).call(this, i, r);
    this.is_fork || D(this, J, Hn).call(this), u(this, it) > 0 || this.is_fork ? (D(this, J, tt).call(this, r.effects), D(this, J, tt).call(this, r.render_effects), D(this, J, tt).call(this, r.block_effects)) : (G = null, _n(r.render_effects), _n(r.effects), (n = u(this, Zt)) == null || n.resolve()), H = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    this.previous.has(t) || this.previous.set(t, r), this.current.set(t, t.v), H == null || H.set(t, t.v);
  }
  activate() {
    G = this;
  }
  deactivate() {
    G = null, H = null;
  }
  flush() {
    if (this.activate(), Ue.length > 0) {
      if (zo(), G !== null && G !== this)
        return;
    } else u(this, nt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of u(this, At)) t(this);
    u(this, At).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    T(this, nt, u(this, nt) + 1), t && T(this, it, u(this, it) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    T(this, nt, u(this, nt) - 1), t && T(this, it, u(this, it) - 1), this.revive();
  }
  revive() {
    for (const t of u(this, Ct))
      X(t, ce), ut(t);
    for (const t of u(this, zt))
      X(t, Ge), ut(t);
    T(this, Ct, []), T(this, zt, []), this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    u(this, St).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    u(this, At).add(t);
  }
  settled() {
    return (u(this, Zt) ?? T(this, Zt, jn())).promise;
  }
  static ensure() {
    if (G === null) {
      const t = G = new br();
      ar.add(G), br.enqueue(() => {
        G === t && t.flush();
      });
    }
    return G;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Pt(t);
  }
  apply() {
  }
};
St = new WeakMap(), At = new WeakMap(), nt = new WeakMap(), it = new WeakMap(), Zt = new WeakMap(), Ct = new WeakMap(), zt = new WeakMap(), J = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Or = function(t, r) {
  var c;
  t.f ^= Z;
  for (var n = t.first; n !== null; ) {
    var i = n.f, o = (i & ($e | ht)) !== 0, s = o && (i & Z) !== 0, f = s || (i & fe) !== 0 || this.skipped_effects.has(n);
    if (n.f & yr && ((c = n.b) != null && c.is_pending()) && (r = {
      parent: r,
      effect: n,
      effects: [],
      render_effects: [],
      block_effects: []
    }), !f && n.fn !== null) {
      o ? n.f ^= Z : i & $r ? r.effects.push(n) : rr(n) && (n.f & je && r.block_effects.push(n), Jt(n));
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      l === r.effect && (D(this, J, tt).call(this, r.effects), D(this, J, tt).call(this, r.render_effects), D(this, J, tt).call(this, r.block_effects), r = /** @type {EffectTarget} */
      r.parent), n = l.next, l = l.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
tt = function(t) {
  for (const r of t)
    (r.f & ce ? u(this, Ct) : u(this, zt)).push(r), X(r, Z);
}, Hn = function() {
  if (u(this, it) === 0) {
    for (const t of u(this, St)) t();
    u(this, St).clear();
  }
  u(this, nt) === 0 && D(this, J, Kn).call(this);
}, Kn = function() {
  var i;
  if (ar.size > 1) {
    this.previous.clear();
    var t = H, r = !0, n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const o of ar) {
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
      const f = [...o.current.keys()].filter((a) => !this.current.has(a));
      if (f.length > 0) {
        const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (const c of s)
          Jn(c, f, a, l);
        if (Ue.length > 0) {
          G = o, o.apply();
          for (const c of Ue)
            D(i = o, J, Or).call(i, c, n);
          Ue = [], o.deactivate();
        }
      }
    }
    G = null, H = t;
  }
  this.committed = !0, ar.delete(this);
};
let Le = br;
function zo() {
  var e = kt;
  Nr = !0;
  try {
    var t = 0;
    for (xn(!0); Ue.length > 0; ) {
      var r = Le.ensure();
      if (t++ > 1e3) {
        var n, i;
        To();
      }
      r.process(Ue), Ze.clear();
    }
  } finally {
    Nr = !1, xn(e), rn = null;
  }
}
function To() {
  try {
    so();
  } catch (e) {
    Mt(e, rn);
  }
}
let me = null;
function _n(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (De | fe)) && rr(n) && (me = /* @__PURE__ */ new Set(), Jt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? ui(n) : n.fn = null), (me == null ? void 0 : me.size) > 0)) {
        Ze.clear();
        for (const i of me) {
          if (i.f & (De | fe)) continue;
          const o = [i];
          let s = i.parent;
          for (; s !== null; )
            me.has(s) && (me.delete(s), o.push(s)), s = s.parent;
          for (let f = o.length - 1; f >= 0; f--) {
            const a = o[f];
            a.f & (De | fe) || Jt(a);
          }
        }
        me.clear();
      }
    }
    me = null;
  }
}
function Jn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      o & Q ? Jn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : o & (tn | je) && !(o & ce) && // we may have scheduled this one already
      Zn(i, t, n) && (X(i, ce), ut(
        /** @type {Effect} */
        i
      ));
    }
}
function Zn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if (i.f & Q && Zn(
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
function ut(e) {
  for (var t = rn = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Nr && t === F && r & je)
      return;
    if (r & (ht | $e)) {
      if (!(r & Z)) return;
      t.f ^= Z;
    }
  }
  Ue.push(t);
}
function Xn(e) {
  let t = 0, r = dt(0), n;
  return () => {
    qo() && (R(r), Jo(() => (t === 0 && (n = yi(() => e(() => Yt(r)))), t += 1, () => {
      Pt(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Yt(r));
      });
    })));
  };
}
var Mo = Xe | Ft | yr;
function Io(e, t, r) {
  new Fo(e, t, r);
}
var he, pe, Zr, Ae, ot, Ce, ve, ne, ze, Oe, qe, st, Ye, at, He, _r, W, Po, Ro, Lr, ur, dr, Dr;
class Fo {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    P(this, W);
    /** @type {Boundary | null} */
    Ee(this, "parent");
    P(this, he, !1);
    /** @type {TemplateNode} */
    P(this, pe);
    /** @type {TemplateNode | null} */
    P(this, Zr, null);
    /** @type {BoundaryProps} */
    P(this, Ae);
    /** @type {((anchor: Node) => void)} */
    P(this, ot);
    /** @type {Effect} */
    P(this, Ce);
    /** @type {Effect | null} */
    P(this, ve, null);
    /** @type {Effect | null} */
    P(this, ne, null);
    /** @type {Effect | null} */
    P(this, ze, null);
    /** @type {DocumentFragment | null} */
    P(this, Oe, null);
    /** @type {TemplateNode | null} */
    P(this, qe, null);
    P(this, st, 0);
    P(this, Ye, 0);
    P(this, at, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    P(this, He, null);
    P(this, _r, Xn(() => (T(this, He, dt(u(this, st))), () => {
      T(this, He, null);
    })));
    T(this, pe, t), T(this, Ae, r), T(this, ot, n), this.parent = /** @type {Effect} */
    F.b, T(this, he, !!u(this, Ae).pending), T(this, Ce, pt(() => {
      F.b = this;
      {
        var i = D(this, W, Lr).call(this);
        try {
          T(this, ve, le(() => n(i)));
        } catch (o) {
          this.error(o);
        }
        u(this, Ye) > 0 ? D(this, W, dr).call(this) : T(this, he, !1);
      }
      return () => {
        var o;
        (o = u(this, qe)) == null || o.remove();
      };
    }, Mo));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return u(this, he) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!u(this, Ae).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    D(this, W, Dr).call(this, t), T(this, st, u(this, st) + t), u(this, He) && It(u(this, He), u(this, st));
  }
  get_effect_pending() {
    return u(this, _r).call(this), R(
      /** @type {Source<number>} */
      u(this, He)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = u(this, Ae).onerror;
    let n = u(this, Ae).failed;
    if (u(this, at) || !r && !n)
      throw t;
    u(this, ve) && (U(u(this, ve)), T(this, ve, null)), u(this, ne) && (U(u(this, ne)), T(this, ne, null)), u(this, ze) && (U(u(this, ze)), T(this, ze, null));
    var i = !1, o = !1;
    const s = () => {
      if (i) {
        Eo();
        return;
      }
      i = !0, o && uo(), Le.ensure(), T(this, st, 0), u(this, ze) !== null && xt(u(this, ze), () => {
        T(this, ze, null);
      }), T(this, he, this.has_pending_snippet()), T(this, ve, D(this, W, ur).call(this, () => (T(this, at, !1), le(() => u(this, ot).call(this, u(this, pe)))))), u(this, Ye) > 0 ? D(this, W, dr).call(this) : T(this, he, !1);
    };
    var f = I;
    try {
      ie(null), o = !0, r == null || r(t, s), o = !1;
    } catch (a) {
      Mt(a, u(this, Ce) && u(this, Ce).parent);
    } finally {
      ie(f);
    }
    n && Pt(() => {
      T(this, ze, D(this, W, ur).call(this, () => {
        Le.ensure(), T(this, at, !0);
        try {
          return le(() => {
            n(
              u(this, pe),
              () => t,
              () => s
            );
          });
        } catch (a) {
          return Mt(
            a,
            /** @type {Effect} */
            u(this, Ce).parent
          ), null;
        } finally {
          T(this, at, !1);
        }
      }));
    });
  }
}
he = new WeakMap(), pe = new WeakMap(), Zr = new WeakMap(), Ae = new WeakMap(), ot = new WeakMap(), Ce = new WeakMap(), ve = new WeakMap(), ne = new WeakMap(), ze = new WeakMap(), Oe = new WeakMap(), qe = new WeakMap(), st = new WeakMap(), Ye = new WeakMap(), at = new WeakMap(), He = new WeakMap(), _r = new WeakMap(), W = new WeakSet(), Po = function() {
  try {
    T(this, ve, le(() => u(this, ot).call(this, u(this, pe))));
  } catch (t) {
    this.error(t);
  }
  T(this, he, !1);
}, Ro = function() {
  const t = u(this, Ae).pending;
  t && (T(this, ne, le(() => t(u(this, pe)))), Le.enqueue(() => {
    var r = D(this, W, Lr).call(this);
    T(this, ve, D(this, W, ur).call(this, () => (Le.ensure(), le(() => u(this, ot).call(this, r))))), u(this, Ye) > 0 ? D(this, W, dr).call(this) : (xt(
      /** @type {Effect} */
      u(this, ne),
      () => {
        T(this, ne, null);
      }
    ), T(this, he, !1));
  }));
}, Lr = function() {
  var t = u(this, pe);
  return u(this, he) && (T(this, qe, Qe()), u(this, pe).before(u(this, qe)), t = u(this, qe)), t;
}, /**
 * @param {() => Effect | null} fn
 */
ur = function(t) {
  var r = F, n = I, i = ye;
  Ie(u(this, Ce)), ie(u(this, Ce)), Tt(u(this, Ce).ctx);
  try {
    return t();
  } catch (o) {
    return Yn(o), null;
  } finally {
    Ie(r), ie(n), Tt(i);
  }
}, dr = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    u(this, Ae).pending
  );
  u(this, ve) !== null && (T(this, Oe, document.createDocumentFragment()), u(this, Oe).append(
    /** @type {TemplateNode} */
    u(this, qe)
  ), pi(u(this, ve), u(this, Oe))), u(this, ne) === null && T(this, ne, le(() => t(u(this, pe))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Dr = function(t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && D(r = this.parent, W, Dr).call(r, t);
    return;
  }
  T(this, Ye, u(this, Ye) + t), u(this, Ye) === 0 && (T(this, he, !1), u(this, ne) && xt(u(this, ne), () => {
    T(this, ne, null);
  }), u(this, Oe) && (u(this, pe).before(u(this, Oe)), T(this, Oe, null)));
};
function Qn(e, t, r, n) {
  const i = Er;
  if (r.length === 0 && e.length === 0) {
    n(t.map(i));
    return;
  }
  var o = G, s = (
    /** @type {Effect} */
    F
  ), f = No();
  function a() {
    Promise.all(r.map((l) => /* @__PURE__ */ Oo(l))).then((l) => {
      f();
      try {
        n([...t.map(i), ...l]);
      } catch (c) {
        s.f & De || Mt(c, s);
      }
      o == null || o.deactivate(), vr();
    }).catch((l) => {
      Mt(l, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    f();
    try {
      return a();
    } finally {
      o == null || o.deactivate(), vr();
    }
  }) : a();
}
function No() {
  var e = F, t = I, r = ye, n = G;
  return function(o = !0) {
    Ie(e), ie(t), Tt(r), o && (n == null || n.activate());
  };
}
function vr() {
  Ie(null), ie(null), Tt(null);
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  var t = Q | ce, r = I !== null && I.f & Q ? (
    /** @type {Derived} */
    I
  ) : null;
  return F === null || r !== null && r.f & we ? t |= we : F.f |= Ft, {
    ctx: ye,
    deps: null,
    effects: null,
    equals: Un,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Y
    ),
    wv: 0,
    parent: r ?? F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Oo(e, t) {
  let r = (
    /** @type {Effect | null} */
    F
  );
  r === null && oo();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = dt(
    /** @type {V} */
    Y
  ), s = !I, f = /* @__PURE__ */ new Map();
  return Ko(() => {
    var g;
    var a = jn();
    i = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject).then(() => {
        l === G && l.committed && l.deactivate(), vr();
      });
    } catch (b) {
      a.reject(b), vr();
    }
    var l = (
      /** @type {Batch} */
      G
    );
    if (s) {
      var c = !n.is_pending();
      n.update_pending_count(1), l.increment(c), (g = f.get(l)) == null || g.reject(bt), f.delete(l), f.set(l, a);
    }
    const p = (b, h = void 0) => {
      if (l.activate(), h)
        h !== bt && (o.f |= lt, It(o, h));
      else {
        o.f & lt && (o.f ^= lt), It(o, b);
        for (const [_, m] of f) {
          if (f.delete(_), _ === l) break;
          m.reject(bt);
        }
      }
      s && (n.update_pending_count(-1), l.decrement(c));
    };
    a.promise.then(p, (b) => p(null, b || "unknown"));
  }), Sr(() => {
    for (const a of f.values())
      a.reject(bt);
  }), new Promise((a) => {
    function l(c) {
      function p() {
        c === i ? a(o) : l(i);
      }
      c.then(p, p);
    }
    l(i);
  });
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  const t = /* @__PURE__ */ Er(e);
  return vi(t), t;
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  const t = /* @__PURE__ */ Er(e);
  return t.equals = Wn, t;
}
function ei(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      U(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Lo(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Q))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function nn(e) {
  var t, r = F;
  Ie(Lo(e));
  try {
    e.f &= ~pr, ei(e), t = _i(e);
  } finally {
    Ie(r);
  }
  return t;
}
function ti(e) {
  var t = nn(e);
  if (e.equals(t) || (e.v = t, e.wv = gi()), !Rt)
    if (H !== null)
      H.set(e, e.v);
    else {
      var r = (Ke || e.f & we) && e.deps !== null ? Ge : Z;
      X(e, r);
    }
}
let jr = /* @__PURE__ */ new Set();
const Ze = /* @__PURE__ */ new Map();
let ri = !1;
function dt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Un,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  const r = dt(e);
  return vi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Do(e, t = !1, r = !0) {
  const n = dt(e);
  return t || (n.equals = Wn), n;
}
function Me(e, t, r = !1) {
  I !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!_e || I.f & bn) && qn() && I.f & (Q | je | tn | bn) && !(re != null && re.includes(e)) && co();
  let n = r ? wt(t) : t;
  return It(e, n);
}
function It(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Rt ? Ze.set(e, t) : Ze.set(e, r), e.v = t;
    var n = Le.ensure();
    n.capture(e, r), e.f & Q && (e.f & ce && nn(
      /** @type {Derived} */
      e
    ), X(e, e.f & we ? Ge : Z)), e.wv = gi(), ni(e, ce), F !== null && F.f & Z && !(F.f & ($e | ht)) && (de === null ? Qo([e]) : de.push(e)), !n.is_fork && jr.size > 0 && !ri && jo();
  }
  return t;
}
function jo() {
  ri = !1;
  const e = Array.from(jr);
  for (const t of e)
    t.f & Z && X(t, Ge), rr(t) && Jt(t);
  jr.clear();
}
function Yt(e) {
  Me(e, e.v + 1);
}
function ni(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var o = r[i], s = o.f, f = (s & ce) === 0;
      f && X(o, t), s & Q ? s & pr || (o.f |= pr, ni(
        /** @type {Derived} */
        o,
        Ge
      )) : f && (s & je && me !== null && me.add(
        /** @type {Effect} */
        o
      ), ut(
        /** @type {Effect} */
        o
      ));
    }
}
function wt(e) {
  if (typeof e != "object" || e === null || ft in e)
    return e;
  const t = Ln(e);
  if (t !== Qi && t !== $i)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Xr(e), i = /* @__PURE__ */ Ne(0), o = ct, s = (f) => {
    if (ct === o)
      return f();
    var a = I, l = ct;
    ie(null), En(o);
    var c = f();
    return ie(a), En(l), c;
  };
  return n && r.set("length", /* @__PURE__ */ Ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, a, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && lo();
        var c = r.get(a);
        return c === void 0 ? c = s(() => {
          var p = /* @__PURE__ */ Ne(l.value);
          return r.set(a, p), p;
        }) : Me(c, l.value, !0), !0;
      },
      deleteProperty(f, a) {
        var l = r.get(a);
        if (l === void 0) {
          if (a in f) {
            const c = s(() => /* @__PURE__ */ Ne(Y));
            r.set(a, c), Yt(i);
          }
        } else
          Me(l, Y), Yt(i);
        return !0;
      },
      get(f, a, l) {
        var b;
        if (a === ft)
          return e;
        var c = r.get(a), p = a in f;
        if (c === void 0 && (!p || (b = Je(f, a)) != null && b.writable) && (c = s(() => {
          var h = wt(p ? f[a] : Y), _ = /* @__PURE__ */ Ne(h);
          return _;
        }), r.set(a, c)), c !== void 0) {
          var g = R(c);
          return g === Y ? void 0 : g;
        }
        return Reflect.get(f, a, l);
      },
      getOwnPropertyDescriptor(f, a) {
        var l = Reflect.getOwnPropertyDescriptor(f, a);
        if (l && "value" in l) {
          var c = r.get(a);
          c && (l.value = R(c));
        } else if (l === void 0) {
          var p = r.get(a), g = p == null ? void 0 : p.v;
          if (p !== void 0 && g !== Y)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return l;
      },
      has(f, a) {
        var g;
        if (a === ft)
          return !0;
        var l = r.get(a), c = l !== void 0 && l.v !== Y || Reflect.has(f, a);
        if (l !== void 0 || F !== null && (!c || (g = Je(f, a)) != null && g.writable)) {
          l === void 0 && (l = s(() => {
            var b = c ? wt(f[a]) : Y, h = /* @__PURE__ */ Ne(b);
            return h;
          }), r.set(a, l));
          var p = R(l);
          if (p === Y)
            return !1;
        }
        return c;
      },
      set(f, a, l, c) {
        var v;
        var p = r.get(a), g = a in f;
        if (n && a === "length")
          for (var b = l; b < /** @type {Source<number>} */
          p.v; b += 1) {
            var h = r.get(b + "");
            h !== void 0 ? Me(h, Y) : b in f && (h = s(() => /* @__PURE__ */ Ne(Y)), r.set(b + "", h));
          }
        if (p === void 0)
          (!g || (v = Je(f, a)) != null && v.writable) && (p = s(() => /* @__PURE__ */ Ne(void 0)), Me(p, wt(l)), r.set(a, p));
        else {
          g = p.v !== Y;
          var _ = s(() => wt(l));
          Me(p, _);
        }
        var m = Reflect.getOwnPropertyDescriptor(f, a);
        if (m != null && m.set && m.set.call(c, l), !g) {
          if (n && typeof a == "string") {
            var d = (
              /** @type {Source<number>} */
              r.get("length")
            ), k = Number(a);
            Number.isInteger(k) && k >= d.v && Me(d, k + 1);
          }
          Yt(i);
        }
        return !0;
      },
      ownKeys(f) {
        R(i);
        var a = Reflect.ownKeys(f).filter((p) => {
          var g = r.get(p);
          return g === void 0 || g.v !== Y;
        });
        for (var [l, c] of r)
          c.v !== Y && !(l in f) && a.push(l);
        return a;
      },
      setPrototypeOf() {
        fo();
      }
    }
  );
}
function wn(e) {
  try {
    if (e !== null && typeof e == "object" && ft in e)
      return e[ft];
  } catch {
  }
  return e;
}
function Go(e, t) {
  return Object.is(wn(e), wn(t));
}
var yn, ii, oi, si;
function Bo() {
  if (yn === void 0) {
    yn = window, ii = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    oi = Je(t, "firstChild").get, si = Je(t, "nextSibling").get, gn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), gn(r) && (r.__t = void 0);
  }
}
function Qe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return oi.call(e);
}
// @__NO_SIDE_EFFECTS__
function tr(e) {
  return si.call(e);
}
function K(e, t) {
  return /* @__PURE__ */ Ht(e);
}
function on(e, t = !1) {
  {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ht(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ tr(r) : r;
  }
}
function be(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ tr(n);
  return n;
}
function Vo(e) {
  e.textContent = "";
}
function ai() {
  return !1;
}
function Uo(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Pt(() => {
      document.activeElement === r && e.focus();
    });
  }
}
function sn(e) {
  var t = I, r = F;
  ie(null), Ie(null);
  try {
    return e();
  } finally {
    ie(t), Ie(r);
  }
}
function Wo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Be(e, t, r, n = !0) {
  var i = F;
  i !== null && i.f & fe && (e |= fe);
  var o = {
    ctx: ye,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ce,
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
      Jt(o), o.f |= Gn;
    } catch (a) {
      throw U(o), a;
    }
  else t !== null && ut(o);
  if (n) {
    var s = o;
    if (r && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Ft) && (s = s.first, e & je && e & Xe && s !== null && (s.f |= Xe)), s !== null && (s.parent = i, i !== null && Wo(s, i), I !== null && I.f & Q && !(e & ht))) {
      var f = (
        /** @type {Derived} */
        I
      );
      (f.effects ?? (f.effects = [])).push(s);
    }
  }
  return o;
}
function qo() {
  return I !== null && !_e;
}
function Sr(e) {
  const t = Be(en, null, !1);
  return X(t, Z), t.teardown = e, t;
}
function Yo(e) {
  return Be($r | no, e, !1);
}
function Ho(e) {
  Le.ensure();
  const t = Be(ht | Ft, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? xt(t, () => {
      U(t), n(void 0);
    }) : (U(t), n(void 0));
  });
}
function li(e) {
  return Be($r, e, !1);
}
function Ko(e) {
  return Be(tn | Ft, e, !0);
}
function Jo(e, t = 0) {
  return Be(en | t, e, !0);
}
function yt(e, t = [], r = [], n = []) {
  Qn(n, t, r, (i) => {
    Be(en, () => e(...i.map(R)), !0);
  });
}
function pt(e, t = 0) {
  var r = Be(je | t, e, !0);
  return r;
}
function le(e, t = !0) {
  return Be($e | Ft, e, !0, t);
}
function fi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Rt, n = I;
    kn(!0), ie(null);
    try {
      t.call(null);
    } finally {
      kn(r), ie(n);
    }
  }
}
function ci(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && sn(() => {
      i.abort(bt);
    });
    var n = r.next;
    r.f & ht ? r.parent = null : U(r, t), r = n;
  }
}
function Zo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & $e || U(t), t = r;
  }
}
function U(e, t = !0) {
  var r = !1;
  (t || e.f & ro) && e.nodes_start !== null && e.nodes_end !== null && (Xo(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), ci(e, t && !r), mr(e, 0), X(e, De);
  var n = e.transitions;
  if (n !== null)
    for (const o of n)
      o.stop();
  fi(e);
  var i = e.parent;
  i !== null && i.first !== null && ui(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Xo(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tr(e)
    );
    e.remove(), e = r;
  }
}
function ui(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function xt(e, t, r = !0) {
  var n = [];
  an(e, n, !0), di(n, () => {
    r && U(e), t && t();
  });
}
function di(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function an(e, t, r) {
  if (!(e.f & fe)) {
    if (e.f ^= fe, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var i = n.next, o = (n.f & Xe) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & $e) !== 0 && (e.f & je) !== 0;
      an(n, t, o ? r : !1), n = i;
    }
  }
}
function ln(e) {
  hi(e, !0);
}
function hi(e, t) {
  if (e.f & fe) {
    e.f ^= fe, e.f & Z || (X(e, ce), ut(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Xe) !== 0 || (r.f & $e) !== 0;
      hi(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function pi(e, t) {
  for (var r = e.nodes_start, n = e.nodes_end; r !== null; ) {
    var i = r === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tr(r)
    );
    t.append(r), r = i;
  }
}
let kt = !1;
function xn(e) {
  kt = e;
}
let Rt = !1;
function kn(e) {
  Rt = e;
}
let I = null, _e = !1;
function ie(e) {
  I = e;
}
let F = null;
function Ie(e) {
  F = e;
}
let re = null;
function vi(e) {
  I !== null && (re === null ? re = [e] : re.push(e));
}
let ee = null, se = 0, de = null;
function Qo(e) {
  de = e;
}
let mi = 1, Kt = 0, ct = Kt;
function En(e) {
  ct = e;
}
let Ke = !1;
function gi() {
  return ++mi;
}
function rr(e) {
  var p;
  var t = e.f;
  if (t & ce)
    return !0;
  if (t & Ge) {
    var r = e.deps, n = (t & we) !== 0;
    if (t & Q && (e.f &= ~pr), r !== null) {
      var i, o, s = (t & hr) !== 0, f = n && F !== null && !Ke, a = r.length;
      if ((s || f) && (F === null || !(F.f & De))) {
        var l = (
          /** @type {Derived} */
          e
        ), c = l.parent;
        for (i = 0; i < a; i++)
          o = r[i], (s || !((p = o == null ? void 0 : o.reactions) != null && p.includes(l))) && (o.reactions ?? (o.reactions = [])).push(l);
        s && (l.f ^= hr), f && c !== null && !(c.f & we) && (l.f ^= we);
      }
      for (i = 0; i < a; i++)
        if (o = r[i], rr(
          /** @type {Derived} */
          o
        ) && ti(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!n || F !== null && !Ke) && X(e, Z);
  }
  return !1;
}
function bi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(re != null && re.includes(e)))
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      o.f & Q ? bi(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? X(o, ce) : o.f & Z && X(o, Ge), ut(
        /** @type {Effect} */
        o
      ));
    }
}
function _i(e) {
  var _;
  var t = ee, r = se, n = de, i = I, o = Ke, s = re, f = ye, a = _e, l = ct, c = e.f;
  ee = /** @type {null | Value[]} */
  null, se = 0, de = null, Ke = (c & we) !== 0 && (_e || !kt || I === null), I = c & ($e | ht) ? null : e, re = null, Tt(e.ctx), _e = !1, ct = ++Kt, e.ac !== null && (sn(() => {
    e.ac.abort(bt);
  }), e.ac = null);
  try {
    e.f |= Rr;
    var p = (
      /** @type {Function} */
      e.fn
    ), g = p(), b = e.deps;
    if (ee !== null) {
      var h;
      if (mr(e, se), b !== null && se > 0)
        for (b.length = se + ee.length, h = 0; h < ee.length; h++)
          b[se + h] = ee[h];
      else
        e.deps = b = ee;
      if (!Ke || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & Q && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = se; h < b.length; h++)
          ((_ = b[h]).reactions ?? (_.reactions = [])).push(e);
    } else b !== null && se < b.length && (mr(e, se), b.length = se);
    if (qn() && de !== null && !_e && b !== null && !(e.f & (Q | Ge | ce)))
      for (h = 0; h < /** @type {Source[]} */
      de.length; h++)
        bi(
          de[h],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Kt++, de !== null && (n === null ? n = de : n.push(.../** @type {Source[]} */
    de))), e.f & lt && (e.f ^= lt), g;
  } catch (m) {
    return Yn(m);
  } finally {
    e.f ^= Rr, ee = t, se = r, de = n, I = i, Ke = o, re = s, Tt(f), _e = a, ct = l;
  }
}
function $o(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ji.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & Q && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ee === null || !ee.includes(t)) && (X(t, Ge), t.f & (we | hr) || (t.f ^= hr), ei(
    /** @type {Derived} **/
    t
  ), mr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function mr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      $o(e, r[n]);
}
function Jt(e) {
  var t = e.f;
  if (!(t & De)) {
    X(e, Z);
    var r = F, n = kt;
    F = e, kt = !0;
    try {
      t & je ? Zo(e) : ci(e), fi(e);
      var i = _i(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = mi;
      var o;
    } finally {
      kt = n, F = r;
    }
  }
}
function R(e) {
  var t = e.f, r = (t & Q) !== 0;
  if (I !== null && !_e) {
    var n = F !== null && (F.f & De) !== 0;
    if (!n && !(re != null && re.includes(e))) {
      var i = I.deps;
      if (I.f & Rr)
        e.rv < Kt && (e.rv = Kt, ee === null && i !== null && i[se] === e ? se++ : ee === null ? ee = [e] : (!Ke || !ee.includes(e)) && ee.push(e));
      else {
        (I.deps ?? (I.deps = [])).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [I] : o.includes(I) || o.push(I);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), f = s.parent;
    f !== null && !(f.f & we) && (s.f ^= we);
  }
  if (Rt) {
    if (Ze.has(e))
      return Ze.get(e);
    if (r) {
      s = /** @type {Derived} */
      e;
      var a = s.v;
      return (!(s.f & Z) && s.reactions !== null || wi(s)) && (a = nn(s)), Ze.set(s, a), a;
    }
  } else if (r) {
    if (s = /** @type {Derived} */
    e, H != null && H.has(s))
      return H.get(s);
    rr(s) && ti(s);
  }
  if (H != null && H.has(e))
    return H.get(e);
  if (e.f & lt)
    throw e.v;
  return e.v;
}
function wi(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ze.has(t) || t.f & Q && wi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function yi(e) {
  var t = _e;
  try {
    return _e = !0, e();
  } finally {
    _e = t;
  }
}
const es = -7169;
function X(e, t) {
  e.f = e.f & es | t;
}
function ts(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const rs = [
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
function ns(e) {
  return rs.includes(e);
}
const is = {
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
function os(e) {
  return e = e.toLowerCase(), is[e] ?? e;
}
const ss = ["touchstart", "touchmove"];
function as(e) {
  return ss.includes(e);
}
const xi = /* @__PURE__ */ new Set(), Gr = /* @__PURE__ */ new Set();
function ki(e, t, r, n = {}) {
  function i(o) {
    if (n.capture || Wt.call(t, o), !o.cancelBubble)
      return sn(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Pt(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function Sn(e, t, r, n, i) {
  var o = { capture: n, passive: i }, s = ki(e, t, r, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Sr(() => {
    t.removeEventListener(e, s, o);
  });
}
function Ei(e) {
  for (var t = 0; t < e.length; t++)
    xi.add(e[t]);
  for (var r of Gr)
    r(e);
}
let An = null;
function Wt(e) {
  var m;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  An = e;
  var s = 0, f = An === e && e.__root;
  if (f) {
    var a = i.indexOf(f);
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
    Zi(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var c = I, p = F;
    ie(null), Ie(null);
    try {
      for (var g, b = []; o !== null; ) {
        var h = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var _ = o["__" + n];
          _ != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && _.call(o, e);
        } catch (d) {
          g ? b.push(d) : g = d;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        o = h;
      }
      if (g) {
        for (let d of b)
          queueMicrotask(() => {
            throw d;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ie(c), Ie(p);
    }
  }
}
function Si(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ar(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  var r = (t & _o) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = Si(i ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ Ht(n));
    var o = (
      /** @type {TemplateNode} */
      r || ii ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Ar(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function ls(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        Si(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Ht(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ Ht(f);
    }
    var a = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return Ar(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function fs(e, t) {
  return /* @__PURE__ */ ls(e, t, "svg");
}
function fn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Qe();
  return e.append(t, r), Ar(t, r), e;
}
function te(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Et(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function cs(e, t) {
  return us(e, t);
}
const mt = /* @__PURE__ */ new Map();
function us(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: s = !0 }) {
  Bo();
  var f = /* @__PURE__ */ new Set(), a = (p) => {
    for (var g = 0; g < p.length; g++) {
      var b = p[g];
      if (!f.has(b)) {
        f.add(b);
        var h = as(b);
        t.addEventListener(b, Wt, { passive: h });
        var _ = mt.get(b);
        _ === void 0 ? (document.addEventListener(b, Wt, { passive: h }), mt.set(b, 1)) : mt.set(b, _ + 1);
      }
    }
  };
  a(Qr(xi)), Gr.add(a);
  var l = void 0, c = Ho(() => {
    var p = r ?? t.appendChild(Qe());
    return Io(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (g) => {
        if (o) {
          $t({});
          var b = (
            /** @type {ComponentContext} */
            ye
          );
          b.c = o;
        }
        i && (n.$$events = i), l = e(g, n) || {}, o && er();
      }
    ), () => {
      var h;
      for (var g of f) {
        t.removeEventListener(g, Wt);
        var b = (
          /** @type {number} */
          mt.get(g)
        );
        --b === 0 ? (document.removeEventListener(g, Wt), mt.delete(g)) : mt.set(g, b);
      }
      Gr.delete(a), p !== r && ((h = p.parentNode) == null || h.removeChild(p));
    };
  });
  return Br.set(l, c), l;
}
let Br = /* @__PURE__ */ new WeakMap();
function ds(e, t) {
  const r = Br.get(e);
  return r ? (Br.delete(e), r(t)) : Promise.resolve();
}
var ge, Te, ae, Xt, Qt, wr;
class cn {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ee(this, "anchor");
    /** @type {Map<Batch, Key>} */
    P(this, ge, /* @__PURE__ */ new Map());
    /** @type {Map<Key, Effect>} */
    P(this, Te, /* @__PURE__ */ new Map());
    /** @type {Map<Key, Branch>} */
    P(this, ae, /* @__PURE__ */ new Map());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    P(this, Xt, !0);
    P(this, Qt, () => {
      var t = (
        /** @type {Batch} */
        G
      );
      if (u(this, ge).has(t)) {
        var r = (
          /** @type {Key} */
          u(this, ge).get(t)
        ), n = u(this, Te).get(r);
        if (n)
          ln(n);
        else {
          var i = u(this, ae).get(r);
          i && (u(this, Te).set(r, i.effect), u(this, ae).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [o, s] of u(this, ge)) {
          if (u(this, ge).delete(o), o === t)
            break;
          const f = u(this, ae).get(s);
          f && (U(f.effect), u(this, ae).delete(s));
        }
        for (const [o, s] of u(this, Te)) {
          if (o === r) continue;
          const f = () => {
            if (Array.from(u(this, ge).values()).includes(o)) {
              var l = document.createDocumentFragment();
              pi(s, l), l.append(Qe()), u(this, ae).set(o, { effect: s, fragment: l });
            } else
              U(s);
            u(this, Te).delete(o);
          };
          u(this, Xt) || !n ? xt(s, f, !1) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    P(this, wr, (t) => {
      u(this, ge).delete(t);
      const r = Array.from(u(this, ge).values());
      for (const [n, i] of u(this, ae))
        r.includes(n) || (U(i.effect), u(this, ae).delete(n));
    });
    this.anchor = t, T(this, Xt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      G
    ), i = ai();
    if (r && !u(this, Te).has(t) && !u(this, ae).has(t))
      if (i) {
        var o = document.createDocumentFragment(), s = Qe();
        o.append(s), u(this, ae).set(t, {
          effect: le(() => r(s)),
          fragment: o
        });
      } else
        u(this, Te).set(
          t,
          le(() => r(this.anchor))
        );
    if (u(this, ge).set(n, t), i) {
      for (const [f, a] of u(this, Te))
        f === t ? n.skipped_effects.delete(a) : n.skipped_effects.add(a);
      for (const [f, a] of u(this, ae))
        f === t ? n.skipped_effects.delete(a.effect) : n.skipped_effects.add(a.effect);
      n.oncommit(u(this, Qt)), n.ondiscard(u(this, wr));
    } else
      u(this, Qt).call(this);
  }
}
ge = new WeakMap(), Te = new WeakMap(), ae = new WeakMap(), Xt = new WeakMap(), Qt = new WeakMap(), wr = new WeakMap();
function rt(e, t, r = !1) {
  var n = new cn(e), i = r ? Xe : 0;
  function o(s, f) {
    n.ensure(s, f);
  }
  pt(() => {
    var s = !1;
    t((f, a = !0) => {
      s = !0, o(a, f);
    }), s || o(!1, null);
  }, i);
}
function hs(e, t) {
  return t;
}
function ps(e, t, r) {
  for (var n = e.items, i = [], o = t.length, s = 0; s < o; s++)
    an(t[s].e, i, !0);
  var f = o > 0 && i.length === 0 && r !== null;
  if (f) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Vo(a), a.append(
      /** @type {Element} */
      r
    ), n.clear(), Se(e, t[0].prev, t[o - 1].next);
  }
  di(i, () => {
    for (var l = 0; l < o; l++) {
      var c = t[l];
      f || (n.delete(c.k), Se(e, c.prev, c.next)), U(c.e, !f);
    }
  });
}
function Ai(e, t, r, n, i, o = null) {
  var s = e, f = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & Vn) !== 0;
  if (a) {
    var l = (
      /** @type {Element} */
      e
    );
    s = l.appendChild(Qe());
  }
  var c = null, p = !1, g = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ $n(() => {
    var d = r();
    return Xr(d) ? d : d == null ? [] : Qr(d);
  }), h, _;
  function m() {
    vs(
      _,
      h,
      f,
      g,
      s,
      i,
      t,
      n,
      r
    ), o !== null && (h.length === 0 ? c ? ln(c) : c = le(() => o(s)) : c !== null && xt(c, () => {
      c = null;
    }));
  }
  pt(() => {
    _ ?? (_ = /** @type {Effect} */
    F), h = /** @type {V[]} */
    R(b);
    var d = h.length;
    if (!(p && d === 0)) {
      p = d === 0;
      var k, v, w, z;
      if (ai()) {
        var E = /* @__PURE__ */ new Set(), A = (
          /** @type {Batch} */
          G
        );
        for (v = 0; v < d; v += 1) {
          w = h[v], z = n(w, v);
          var S = f.items.get(z) ?? g.get(z);
          S ? t & (xr | kr) && Ci(S, w, v, t) : (k = zi(
            null,
            f,
            null,
            null,
            w,
            z,
            v,
            i,
            t,
            r,
            !0
          ), g.set(z, k)), E.add(z);
        }
        for (const [L, ke] of f.items)
          E.has(L) || A.skipped_effects.add(ke.e);
        A.oncommit(m);
      } else
        m();
      R(b);
    }
  });
}
function vs(e, t, r, n, i, o, s, f, a) {
  var Lt, Dt, jt, vt;
  var l = (s & ho) !== 0, c = (s & (xr | kr)) !== 0, p = t.length, g = r.items, b = r.first, h = b, _, m = null, d, k = [], v = [], w, z, E, A;
  if (l)
    for (A = 0; A < p; A += 1)
      w = t[A], z = f(w, A), E = g.get(z), E !== void 0 && ((Lt = E.a) == null || Lt.measure(), (d ?? (d = /* @__PURE__ */ new Set())).add(E));
  for (A = 0; A < p; A += 1) {
    if (w = t[A], z = f(w, A), E = g.get(z), E === void 0) {
      var S = n.get(z);
      if (S !== void 0) {
        n.delete(z), g.set(z, S);
        var L = m ? m.next : h;
        Se(r, m, S), Se(r, S, L), Tr(S, L, i), m = S;
      } else {
        var ke = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        m = zi(
          ke,
          r,
          m,
          m === null ? r.first : m.next,
          w,
          z,
          A,
          o,
          s,
          a
        );
      }
      g.set(z, m), k = [], v = [], h = m.next;
      continue;
    }
    if (c && Ci(E, w, A, s), E.e.f & fe && (ln(E.e), l && ((Dt = E.a) == null || Dt.unfix(), (d ?? (d = /* @__PURE__ */ new Set())).delete(E))), E !== h) {
      if (_ !== void 0 && _.has(E)) {
        if (k.length < v.length) {
          var ue = v[0], q;
          m = ue.prev;
          var Fe = k[0], Pe = k[k.length - 1];
          for (q = 0; q < k.length; q += 1)
            Tr(k[q], ue, i);
          for (q = 0; q < v.length; q += 1)
            _.delete(v[q]);
          Se(r, Fe.prev, Pe.next), Se(r, m, Fe), Se(r, Pe, ue), h = ue, m = Pe, A -= 1, k = [], v = [];
        } else
          _.delete(E), Tr(E, h, i), Se(r, E.prev, E.next), Se(r, E, m === null ? r.first : m.next), Se(r, m, E), m = E;
        continue;
      }
      for (k = [], v = []; h !== null && h.k !== z; )
        h.e.f & fe || (_ ?? (_ = /* @__PURE__ */ new Set())).add(h), v.push(h), h = h.next;
      if (h === null)
        continue;
      E = h;
    }
    k.push(E), m = E, h = E.next;
  }
  if (h !== null || _ !== void 0) {
    for (var N = _ === void 0 ? [] : Qr(_); h !== null; )
      h.e.f & fe || N.push(h), h = h.next;
    var O = N.length;
    if (O > 0) {
      var $ = s & Vn && p === 0 ? i : null;
      if (l) {
        for (A = 0; A < O; A += 1)
          (jt = N[A].a) == null || jt.measure();
        for (A = 0; A < O; A += 1)
          (vt = N[A].a) == null || vt.fix();
      }
      ps(r, N, $);
    }
  }
  l && Pt(() => {
    var B;
    if (d !== void 0)
      for (E of d)
        (B = E.a) == null || B.apply();
  }), e.first = r.first && r.first.e, e.last = m && m.e;
  for (var C of n.values())
    U(C.e);
  n.clear();
}
function Ci(e, t, r, n) {
  n & xr && It(e.v, t), n & kr ? It(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function zi(e, t, r, n, i, o, s, f, a, l, c) {
  var p = (a & xr) !== 0, g = (a & po) === 0, b = p ? g ? /* @__PURE__ */ Do(i, !1, !1) : dt(i) : i, h = a & kr ? dt(s) : s, _ = {
    i: h,
    v: b,
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
      m.append(e = Qe());
    }
    return _.e = le(() => f(
      /** @type {Node} */
      e,
      b,
      h,
      l
    ), So), _.e.prev = r && r.e, _.e.next = n && n.e, r === null ? c || (t.first = _) : (r.next = _, r.e.next = _.e), n !== null && (n.prev = _, n.e.prev = _.e), _;
  } finally {
  }
}
function Tr(e, t, r) {
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
      /* @__PURE__ */ tr(o)
    );
    i.before(o), o = s;
  }
}
function Se(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function un(e, t, ...r) {
  var n = new cn(e);
  pt(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((o) => i(o, ...r)));
  }, Xe);
}
function ms(e, t, r, n, i, o) {
  var s = null, f = (
    /** @type {TemplateNode} */
    e
  ), a = new cn(f, !1);
  pt(() => {
    const l = t() || null;
    var c = yo;
    if (l === null) {
      a.ensure(null, null);
      return;
    }
    return a.ensure(l, (p) => {
      if (l) {
        if (s = document.createElementNS(c, l), Ar(s, s), n) {
          var g = (
            /** @type {TemplateNode} */
            s.appendChild(Qe())
          );
          n(s, g);
        }
        F.nodes_end = s, p.before(s);
      }
    }), () => {
    };
  }, Xe), Sr(() => {
  });
}
function gs(e, t) {
  var r = void 0, n;
  pt(() => {
    r !== (r = t()) && (n && (U(n), n = null), r && (n = le(() => {
      li(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function Ti(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Ti(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Mi() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Ti(e)) && (n && (n += " "), n += t);
  return n;
}
function Ii(e) {
  return typeof e == "object" ? Mi(e) : e ?? "";
}
const Cn = [...` 	
\r\f \v\uFEFF`];
function bs(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var o = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var f = s + o;
          (s === 0 || Cn.includes(n[s - 1])) && (f === n.length || Cn.includes(n[f])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(f + 1) : s = f;
        }
  }
  return n === "" ? null : n;
}
function zn(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var o = e[i];
    o != null && o !== "" && (n += " " + i + ": " + o + r);
  }
  return n;
}
function Mr(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function _s(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var o = !1, s = 0, f = !1, a = [];
      n && a.push(...Object.keys(n).map(Mr)), i && a.push(...Object.keys(i).map(Mr));
      var l = 0, c = -1;
      const _ = e.length;
      for (var p = 0; p < _; p++) {
        var g = e[p];
        if (f ? g === "/" && e[p - 1] === "*" && (f = !1) : o ? o === g && (o = !1) : g === "/" && e[p + 1] === "*" ? f = !0 : g === '"' || g === "'" ? o = g : g === "(" ? s++ : g === ")" && s--, !f && o === !1 && s === 0) {
          if (g === ":" && c === -1)
            c = p;
          else if (g === ";" || p === _ - 1) {
            if (c !== -1) {
              var b = Mr(e.substring(l, c).trim());
              if (!a.includes(b)) {
                g !== ";" && p++;
                var h = e.substring(l, p).trim();
                r += " " + h + ";";
              }
            }
            l = p + 1, c = -1;
          }
        }
      }
    }
    return n && (r += zn(n)), i && (r += zn(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function Fi(e, t, r, n, i, o) {
  var s = e.__className;
  if (s !== r || s === void 0) {
    var f = bs(r, n, o);
    f == null ? e.removeAttribute("class") : t ? e.className = f : e.setAttribute("class", f), e.__className = r;
  } else if (o && i !== o)
    for (var a in o) {
      var l = !!o[a];
      (i == null || l !== !!i[a]) && e.classList.toggle(a, l);
    }
  return o;
}
function Ir(e, t = {}, r, n) {
  for (var i in r) {
    var o = r[i];
    t[i] !== o && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, n));
  }
}
function ws(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var o = _s(t, n);
    o == null ? e.removeAttribute("style") : e.style.cssText = o, e.__style = t;
  } else n && (Array.isArray(n) ? (Ir(e, r == null ? void 0 : r[0], n[0]), Ir(e, r == null ? void 0 : r[1], n[1], "important")) : Ir(e, r, n));
  return n;
}
function Vr(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Xr(t))
      return ko();
    for (var n of e.options)
      n.selected = t.includes(Tn(n));
    return;
  }
  for (n of e.options) {
    var i = Tn(n);
    if (Go(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function ys(e) {
  var t = new MutationObserver(() => {
    Vr(e, e.__value);
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
  }), Sr(() => {
    t.disconnect();
  });
}
function Tn(e) {
  return "__value" in e ? e.__value : e.value;
}
const Bt = Symbol("class"), Vt = Symbol("style"), Pi = Symbol("is custom element"), Ri = Symbol("is html");
function xs(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function gr(e, t, r, n) {
  var i = Ni(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[io] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Oi(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ks(e, t, r, n, i = !1, o = !1) {
  var s = Ni(e), f = s[Pi], a = !s[Ri], l = t || {}, c = e.tagName === "OPTION";
  for (var p in t)
    p in r || (r[p] = null);
  r.class ? r.class = Ii(r.class) : r[Bt] && (r.class = null), r[Vt] && (r.style ?? (r.style = null));
  var g = Oi(e);
  for (const v in r) {
    let w = r[v];
    if (c && v === "value" && w == null) {
      e.value = e.__value = "", l[v] = w;
      continue;
    }
    if (v === "class") {
      var b = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Fi(e, b, w, n, t == null ? void 0 : t[Bt], r[Bt]), l[v] = w, l[Bt] = r[Bt];
      continue;
    }
    if (v === "style") {
      ws(e, w, t == null ? void 0 : t[Vt], r[Vt]), l[v] = w, l[Vt] = r[Vt];
      continue;
    }
    var h = l[v];
    if (!(w === h && !(w === void 0 && e.hasAttribute(v)))) {
      l[v] = w;
      var _ = v[0] + v[1];
      if (_ !== "$$")
        if (_ === "on") {
          const z = {}, E = "$$" + v;
          let A = v.slice(2);
          var m = ns(A);
          if (ts(A) && (A = A.slice(0, -7), z.capture = !0), !m && h) {
            if (w != null) continue;
            e.removeEventListener(A, l[E], z), l[E] = null;
          }
          if (w != null)
            if (m)
              e[`__${A}`] = w, Ei([A]);
            else {
              let S = function(L) {
                l[v].call(this, L);
              };
              l[E] = ki(A, e, S, z);
            }
          else m && (e[`__${A}`] = void 0);
        } else if (v === "style")
          gr(e, v, w);
        else if (v === "autofocus")
          Uo(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!f && (v === "__value" || v === "value" && w != null))
          e.value = e.__value = w;
        else if (v === "selected" && c)
          xs(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var d = v;
          a || (d = os(d));
          var k = d === "defaultValue" || d === "defaultChecked";
          if (w == null && !f && !k)
            if (s[v] = null, d === "value" || d === "checked") {
              let z = (
                /** @type {HTMLInputElement} */
                e
              );
              const E = t === void 0;
              if (d === "value") {
                let A = z.defaultValue;
                z.removeAttribute(d), z.defaultValue = A, z.value = z.__value = E ? A : null;
              } else {
                let A = z.defaultChecked;
                z.removeAttribute(d), z.defaultChecked = A, z.checked = E ? A : !1;
              }
            } else
              e.removeAttribute(v);
          else k || g.includes(d) && (f || typeof w != "string") ? (e[d] = w, d in s && (s[d] = Y)) : typeof w != "function" && gr(e, d, w);
        }
    }
  }
  return l;
}
function Ur(e, t, r = [], n = [], i = [], o, s = !1, f = !1) {
  Qn(i, r, n, (a) => {
    var l = void 0, c = {}, p = e.nodeName === "SELECT", g = !1;
    if (pt(() => {
      var h = t(...a.map(R)), _ = ks(
        e,
        l,
        h,
        o,
        s,
        f
      );
      g && p && "value" in h && Vr(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let d of Object.getOwnPropertySymbols(c))
        h[d] || U(c[d]);
      for (let d of Object.getOwnPropertySymbols(h)) {
        var m = h[d];
        d.description === xo && (!l || m !== l[d]) && (c[d] && U(c[d]), c[d] = le(() => gs(e, () => m))), _[d] = m;
      }
      l = _;
    }), p) {
      var b = (
        /** @type {HTMLSelectElement} */
        e
      );
      li(() => {
        Vr(
          b,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), ys(b);
      });
    }
    g = !0;
  });
}
function Ni(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Pi]: e.nodeName.includes("-"),
      [Ri]: e.namespaceURI === wo
    })
  );
}
var Mn = /* @__PURE__ */ new Map();
function Oi(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Mn.get(t);
  if (r) return r;
  Mn.set(t, r = []);
  for (var n, i = e, o = Element.prototype; o !== i; ) {
    n = Xi(i);
    for (var s in n)
      n[s].set && r.push(s);
    i = Ln(i);
  }
  return r;
}
let lr = !1;
function Es(e) {
  var t = lr;
  try {
    return lr = !1, [e(), lr];
  } finally {
    lr = t;
  }
}
const Ss = {
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
function dn(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    Ss
  );
}
const As = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Gt(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      Gt(i) && (i = i());
      const o = Je(i, t);
      if (o && o.set)
        return o.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Gt(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = Je(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === ft || t === Bn) return !1;
    for (let r of e.props)
      if (Gt(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (Gt(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function Cs(...e) {
  return new Proxy({ props: e }, As);
}
function We(e, t, r, n) {
  var k;
  var i = (r & go) !== 0, o = (r & bo) !== 0, s = (
    /** @type {V} */
    n
  ), f = !0, a = () => (f && (f = !1, s = o ? yi(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s), l;
  if (i) {
    var c = ft in e || Bn in e;
    l = ((k = Je(e, t)) == null ? void 0 : k.set) ?? (c && t in e ? (v) => e[t] = v : void 0);
  }
  var p, g = !1;
  i ? [p, g] = Es(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && n !== void 0 && (p = a(), l && (ao(), l(p)));
  var b;
  if (b = () => {
    var v = (
      /** @type {V} */
      e[t]
    );
    return v === void 0 ? a() : (f = !0, v);
  }, !(r & mo))
    return b;
  if (l) {
    var h = e.$$legacy;
    return (
      /** @type {() => V} */
      function(v, w) {
        return arguments.length > 0 ? ((!w || h || g) && l(w ? b() : v), v) : b();
      }
    );
  }
  var _ = !1, m = (r & vo ? Er : $n)(() => (_ = !1, b()));
  i && R(m);
  var d = (
    /** @type {Effect} */
    F
  );
  return (
    /** @type {() => V} */
    function(v, w) {
      if (arguments.length > 0) {
        const z = w ? R(m) : i ? wt(v) : v;
        return Me(m, z), _ = !0, s !== void 0 && (s = z), v;
      }
      return Rt && _ || d.f & De ? m.v : R(m);
    }
  );
}
function zs(e) {
  let t = {};
  return new Proxy(
    /** @type{any} */
    {},
    {
      get(r, n) {
        return n in t || (t[n] = Xn((i) => (e.on(`change:${n}`, i), () => e.off(`change:${n}`, i)))), t[n](), e.get(n);
      },
      set(r, n, i) {
        return e.set(n, i), e.save_changes(), !0;
      }
    }
  );
}
function Ts(e) {
  return () => {
    let t;
    return {
      initialize({ model: r }) {
        t = zs(r);
      },
      /** @type {import("@anywidget/types").Render<T>} */
      render({ model: r, el: n }) {
        let i = cs(e, {
          target: n,
          props: { model: r, bindings: t }
        });
        return () => ds(i);
      }
    };
  };
}
const Ms = "5";
var On;
typeof window < "u" && ((On = window.__svelte ?? (window.__svelte = {})).v ?? (On.v = /* @__PURE__ */ new Set())).add(Ms);
const hn = "-", Is = (e) => {
  const t = Ps(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const f = s.split(hn);
      return f[0] === "" && f.length !== 1 && f.shift(), Li(f, t) || Fs(s);
    },
    getConflictingClassGroupIds: (s, f) => {
      const a = r[s] || [];
      return f && n[s] ? [...a, ...n[s]] : a;
    }
  };
}, Li = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? Li(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(hn);
  return (s = t.validators.find(({
    validator: f
  }) => f(o))) == null ? void 0 : s.classGroupId;
}, In = /^\[(.+)\]$/, Fs = (e) => {
  if (In.test(e)) {
    const t = In.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ps = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in r)
    Wr(r[i], n, i, t);
  return n;
}, Wr = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : Fn(t, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (Rs(i)) {
        Wr(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([o, s]) => {
      Wr(s, Fn(t, o), r, n);
    });
  });
}, Fn = (e, t) => {
  let r = e;
  return t.split(hn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Rs = (e) => e.isThemeGetter, Ns = (e) => {
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
}, qr = "!", Yr = ":", Os = Yr.length, Ls = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (i) => {
    const o = [];
    let s = 0, f = 0, a = 0, l;
    for (let h = 0; h < i.length; h++) {
      let _ = i[h];
      if (s === 0 && f === 0) {
        if (_ === Yr) {
          o.push(i.slice(a, h)), a = h + Os;
          continue;
        }
        if (_ === "/") {
          l = h;
          continue;
        }
      }
      _ === "[" ? s++ : _ === "]" ? s-- : _ === "(" ? f++ : _ === ")" && f--;
    }
    const c = o.length === 0 ? i : i.substring(a), p = Ds(c), g = p !== c, b = l && l > a ? l - a : void 0;
    return {
      modifiers: o,
      hasImportantModifier: g,
      baseClassName: p,
      maybePostfixModifierPosition: b
    };
  };
  if (t) {
    const i = t + Yr, o = n;
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
}, Ds = (e) => e.endsWith(qr) ? e.substring(0, e.length - 1) : e.startsWith(qr) ? e.substring(1) : e, js = (e) => {
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
}, Gs = (e) => ({
  cache: Ns(e.cacheSize),
  parseClassName: Ls(e),
  sortModifiers: js(e),
  ...Is(e)
}), Bs = /\s+/, Vs = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: o
  } = t, s = [], f = e.trim().split(Bs);
  let a = "";
  for (let l = f.length - 1; l >= 0; l -= 1) {
    const c = f[l], {
      isExternal: p,
      modifiers: g,
      hasImportantModifier: b,
      baseClassName: h,
      maybePostfixModifierPosition: _
    } = r(c);
    if (p) {
      a = c + (a.length > 0 ? " " + a : a);
      continue;
    }
    let m = !!_, d = n(m ? h.substring(0, _) : h);
    if (!d) {
      if (!m) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (d = n(h), !d) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      m = !1;
    }
    const k = o(g).join(":"), v = b ? k + qr : k, w = v + d;
    if (s.includes(w))
      continue;
    s.push(w);
    const z = i(d, m);
    for (let E = 0; E < z.length; ++E) {
      const A = z[E];
      s.push(v + A);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Us() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Di(t)) && (n && (n += " "), n += r);
  return n;
}
const Di = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Di(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Ws(e, ...t) {
  let r, n, i, o = s;
  function s(a) {
    const l = t.reduce((c, p) => p(c), e());
    return r = Gs(l), n = r.cache.get, i = r.cache.set, o = f, f(a);
  }
  function f(a) {
    const l = n(a);
    if (l)
      return l;
    const c = Vs(a, r);
    return i(a, c), c;
  }
  return function() {
    return o(Us.apply(null, arguments));
  };
}
const j = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, ji = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gi = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qs = /^\d+\/\d+$/, Ys = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Hs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ks = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Js = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Zs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, gt = (e) => qs.test(e), M = (e) => !!e && !Number.isNaN(Number(e)), Ve = (e) => !!e && Number.isInteger(Number(e)), Fr = (e) => e.endsWith("%") && M(e.slice(0, -1)), Re = (e) => Ys.test(e), Xs = () => !0, Qs = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Hs.test(e) && !Ks.test(e)
), Bi = () => !1, $s = (e) => Js.test(e), ea = (e) => Zs.test(e), ta = (e) => !y(e) && !x(e), ra = (e) => Nt(e, Wi, Bi), y = (e) => ji.test(e), et = (e) => Nt(e, qi, Qs), Pr = (e) => Nt(e, aa, M), Pn = (e) => Nt(e, Vi, Bi), na = (e) => Nt(e, Ui, ea), fr = (e) => Nt(e, Yi, $s), x = (e) => Gi.test(e), Ut = (e) => Ot(e, qi), ia = (e) => Ot(e, la), Rn = (e) => Ot(e, Vi), oa = (e) => Ot(e, Wi), sa = (e) => Ot(e, Ui), cr = (e) => Ot(e, Yi, !0), Nt = (e, t, r) => {
  const n = ji.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Ot = (e, t, r = !1) => {
  const n = Gi.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Vi = (e) => e === "position" || e === "percentage", Ui = (e) => e === "image" || e === "url", Wi = (e) => e === "length" || e === "size" || e === "bg-size", qi = (e) => e === "length", aa = (e) => e === "number", la = (e) => e === "family-name", Yi = (e) => e === "shadow", fa = () => {
  const e = j("color"), t = j("font"), r = j("text"), n = j("font-weight"), i = j("tracking"), o = j("leading"), s = j("breakpoint"), f = j("container"), a = j("spacing"), l = j("radius"), c = j("shadow"), p = j("inset-shadow"), g = j("text-shadow"), b = j("drop-shadow"), h = j("blur"), _ = j("perspective"), m = j("aspect"), d = j("ease"), k = j("animate"), v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => [
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
  ], z = () => [...w(), x, y], E = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], S = () => [x, y, a], L = () => [gt, "full", "auto", ...S()], ke = () => [Ve, "none", "subgrid", x, y], ue = () => ["auto", {
    span: ["full", Ve, x, y]
  }, Ve, x, y], q = () => [Ve, "auto", x, y], Fe = () => ["auto", "min", "max", "fr", x, y], Pe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], N = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...S()], $ = () => [gt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], C = () => [e, x, y], Lt = () => [...w(), Rn, Pn, {
    position: [x, y]
  }], Dt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], jt = () => ["auto", "cover", "contain", oa, ra, {
    size: [x, y]
  }], vt = () => [Fr, Ut, et], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    x,
    y
  ], oe = () => ["", M, Ut, et], nr = () => ["solid", "dashed", "dotted", "double"], pn = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => [M, Fr, Rn, Pn], vn = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    x,
    y
  ], ir = () => ["none", M, x, y], or = () => ["none", M, x, y], Cr = () => [M, x, y], sr = () => [gt, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Re],
      breakpoint: [Re],
      color: [Xs],
      container: [Re],
      "drop-shadow": [Re],
      ease: ["in", "out", "in-out"],
      font: [ta],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Re],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Re],
      shadow: [Re],
      spacing: ["px", M],
      text: [Re],
      "text-shadow": [Re],
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
        aspect: ["auto", "square", gt, y, x, m]
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
        columns: [M, y, x, f]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": v()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": v()
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
        object: z()
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
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
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
        inset: L()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: L()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [Ve, "auto", x, y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [gt, "full", "auto", f, ...S()]
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
        flex: [M, gt, "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", M, x, y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", M, x, y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ve, "first", "last", "none", x, y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ke()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ue()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ke()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ue()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
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
        "auto-cols": Fe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Fe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Pe(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...N(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...N()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Pe()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...N(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...N(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Pe()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...N(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...N()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: S()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: O()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": S()
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
        "space-y": S()
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
        size: $()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [f, "screen", ...$()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          f,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...$()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          f,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...$()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...$()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...$()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...$()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ut, et]
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
        font: [n, x, Pr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Fr, y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ia, y, t]
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
        tracking: [i, x, y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [M, "none", x, Pr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...S()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", x, y]
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
        list: ["disc", "decimal", "none", x, y]
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
        placeholder: C()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: C()
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
        decoration: [...nr(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [M, "from-font", "auto", x, et]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: C()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [M, "auto", x, y]
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
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x, y]
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
        content: ["none", x, y]
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
        bg: Lt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Dt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: jt()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ve, x, y],
          radial: ["", x, y],
          conic: [Ve, x, y]
        }, sa, na]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: C()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: vt()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: vt()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: vt()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: C()
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
        border: oe()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": oe()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": oe()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": oe()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": oe()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": oe()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": oe()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": oe()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": oe()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": oe()
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
        "divide-y": oe()
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
        border: [...nr(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...nr(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: C()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": C()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": C()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": C()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": C()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": C()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": C()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": C()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": C()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: C()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...nr(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [M, x, y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", M, Ut, et]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: C()
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
          c,
          cr,
          fr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: C()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, cr, fr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": C()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: oe()
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
        ring: C()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [M, et]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": C()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": oe()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": C()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, cr, fr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [M, x, y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...pn(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": pn()
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
        "mask-linear": [M]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": V()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": V()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": V()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": V()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": V()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": V()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": V()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": V()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": V()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": V()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": V()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": V()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": V()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": V()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [x, y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": V()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": V()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": C()
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
        "mask-radial-at": w()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [M]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": V()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": V()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": C()
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
        mask: Lt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Dt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: jt()
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
        mask: ["none", x, y]
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
          x,
          y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: vn()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [M, x, y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [M, x, y]
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
          b,
          cr,
          fr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", M, x, y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [M, x, y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", M, x, y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [M, x, y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", M, x, y]
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
          x,
          y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": vn()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [M, x, y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [M, x, y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", M, x, y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [M, x, y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", M, x, y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [M, x, y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [M, x, y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", M, x, y]
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
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", x, y]
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
        duration: [M, "initial", x, y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", d, x, y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [M, x, y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, x, y]
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
        perspective: [_, x, y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": z()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ir()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ir()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ir()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ir()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: or()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": or()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": or()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": or()
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
        skew: Cr()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Cr()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Cr()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [x, y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: z()
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
        translate: sr()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": sr()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": sr()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": sr()
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
        accent: C()
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
        caret: C()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x, y]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        "will-change": ["auto", "scroll", "contents", "transform", x, y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [M, Ut, et, Pr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...C()]
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
}, ca = /* @__PURE__ */ Ws(fa);
function ua(...e) {
  return ca(Mi(e));
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
const da = {
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
var ha = /* @__PURE__ */ fs("<svg><!><!></svg>");
function pa(e, t) {
  $t(t, !0);
  const r = We(t, "color", 3, "currentColor"), n = We(t, "size", 3, 24), i = We(t, "strokeWidth", 3, 2), o = We(t, "absoluteStrokeWidth", 3, !1), s = We(t, "iconNode", 19, () => []), f = /* @__PURE__ */ dn(t, [
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
  var a = ha();
  Ur(
    a,
    (p) => ({
      ...da,
      ...f,
      width: n(),
      height: n(),
      stroke: r(),
      "stroke-width": p,
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
  var l = K(a);
  Ai(l, 17, s, hs, (p, g) => {
    var b = /* @__PURE__ */ qt(() => to(R(g), 2));
    let h = () => R(b)[0], _ = () => R(b)[1];
    var m = fn(), d = on(m);
    ms(d, h, !0, (k, v) => {
      Ur(k, () => ({ ..._() }));
    }), te(p, m);
  });
  var c = be(l);
  un(c, () => t.children ?? Dn), te(e, a), er();
}
function va(e, t) {
  $t(t, !0);
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
  let r = /* @__PURE__ */ dn(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "M12 3v12" }],
    ["path", { d: "m17 8-5-5-5 5" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]
  ];
  pa(e, Cs(
    { name: "upload" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, o) => {
        var s = fn(), f = on(s);
        un(f, () => t.children ?? Dn), te(i, s);
      },
      $$slots: { default: !0 }
    }
  )), er();
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function ma(e = "bits") {
  return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
var ga = /* @__PURE__ */ xe("<span> </span>"), ba = /* @__PURE__ */ xe("<span> </span>"), _a = /* @__PURE__ */ xe("<span> </span>"), wa = /* @__PURE__ */ xe('<span class="text-muted-foreground/75 text-sm"><!> <!> <!></span>'), ya = /* @__PURE__ */ xe(`<div class="flex flex-col place-items-center justify-center gap-2"><div class="border-border text-muted-foreground flex size-14 place-items-center justify-center rounded-full border border-dashed"><!></div> <div class="flex flex-col gap-0.5 text-center"><span class="text-muted-foreground font-medium">Drag 'n' drop files here, or click to select files</span> <!></div></div>`), xa = /* @__PURE__ */ xe("<label><!> <input/></label>");
function ka(e, t) {
  $t(t, !0);
  let r = We(t, "id", 19, ma), n = We(t, "disabled", 3, !1), i = /* @__PURE__ */ dn(t, [
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
  let o = /* @__PURE__ */ Ne(!1);
  const s = async (m) => {
    var k;
    if (n() || !R(c)) return;
    m.preventDefault();
    const d = Array.from(((k = m.dataTransfer) == null ? void 0 : k.files) ?? []);
    await l(d);
  }, f = async (m) => {
    if (n()) return;
    const d = m.currentTarget.files;
    d && (await l(Array.from(d)), m.target.value = "");
  }, a = (m, d) => {
    if (t.maxFileSize !== void 0 && m.size > t.maxFileSize) return "Maximum file size exceeded";
    if (t.maxFiles !== void 0 && d > t.maxFiles) return "Maximum files uploaded";
    if (!t.accept) return;
    const k = t.accept.split(",").map((E) => E.trim().toLowerCase()), v = m.type.toLowerCase(), w = m.name.toLowerCase();
    if (!k.some((E) => {
      if (v.startsWith("."))
        return w.endsWith(E);
      if (E.endsWith("/*")) {
        const A = E.slice(0, E.indexOf("/*"));
        return v.startsWith(A + "/");
      }
      return v === E;
    })) return "File type not allowed";
  }, l = async (m) => {
    var k;
    Me(o, !0);
    const d = [];
    for (let v = 0; v < m.length; v++) {
      const w = m[v], z = a(w, (t.fileCount ?? 0) + v + 1);
      if (z) {
        (k = t.onFileRejected) == null || k.call(t, { file: w, reason: z });
        continue;
      }
      d.push(w);
    }
    await t.onUpload(d), Me(o, !1);
  }, c = /* @__PURE__ */ qt(() => !n() && !R(o) && !(t.maxFiles !== void 0 && t.fileCount !== void 0 && t.fileCount >= t.maxFiles));
  var p = xa(), g = K(p);
  {
    var b = (m) => {
      var d = fn(), k = on(d);
      un(k, () => t.children), te(m, d);
    }, h = (m) => {
      var d = ya(), k = K(d), v = K(k);
      va(v, { class: "size-7" });
      var w = be(k, 2), z = be(K(w), 2);
      {
        var E = (A) => {
          var S = wa(), L = K(S);
          {
            var ke = (N) => {
              var O = ga(), $ = K(O);
              yt(() => Et($, `You can upload ${t.maxFiles ?? ""} files`)), te(N, O);
            };
            rt(L, (N) => {
              t.maxFiles && N(ke);
            });
          }
          var ue = be(L, 2);
          {
            var q = (N) => {
              var O = ba(), $ = K(O);
              yt((C) => Et($, `(up to ${C ?? ""} each)`), [() => Hr(t.maxFileSize)]), te(N, O);
            };
            rt(ue, (N) => {
              t.maxFiles && t.maxFileSize && N(q);
            });
          }
          var Fe = be(ue, 2);
          {
            var Pe = (N) => {
              var O = _a(), $ = K(O);
              yt((C) => Et($, `Maximum size ${C ?? ""}`), [() => Hr(t.maxFileSize)]), te(N, O);
            };
            rt(Fe, (N) => {
              t.maxFileSize && !t.maxFiles && N(Pe);
            });
          }
          te(A, S);
        };
        rt(z, (A) => {
          (t.maxFiles || t.maxFileSize) && A(E);
        });
      }
      te(m, d);
    };
    rt(g, (m) => {
      t.children ? m(b) : m(h, !1);
    });
  }
  var _ = be(g, 2);
  Ur(
    _,
    () => ({
      ...i,
      disabled: !R(c),
      id: r(),
      accept: t.accept,
      multiple: t.maxFiles === void 0 || t.maxFiles - (t.fileCount ?? 0) > 1,
      type: "file",
      onchange: f,
      class: "hidden"
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  ), yt(
    (m) => {
      gr(p, "for", r()), gr(p, "aria-disabled", !R(c)), Fi(p, 1, m);
    },
    [
      () => Ii(ua("border-border hover:bg-accent/25 flex h-48 w-full place-items-center justify-center rounded-lg border-2 border-dashed p-6 transition-all hover:cursor-pointer aria-disabled:opacity-50 aria-disabled:hover:cursor-not-allowed", t.class))
    ]
  ), Sn("dragover", p, (m) => m.preventDefault()), Sn("drop", p, s), te(e, p), er();
}
const Hr = (e) => e < Kr ? `${e.toFixed(0)} B` : e < Jr ? `${(e / Kr).toFixed(0)} KB` : e < Nn ? `${(e / Jr).toFixed(0)} MB` : `${(e / Nn).toFixed(0)} GB`, Kr = 1024, Jr = 1024 * Kr, Nn = 1024 * Jr;
var Ea = /* @__PURE__ */ xe('<div class="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-500/40 dark:bg-red-950/40 dark:text-red-200"><strong class="font-semibold">Upload error:</strong> <span class="ml-2"> </span></div>'), Sa = /* @__PURE__ */ xe('<div class="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3 text-sm shadow-sm dark:border-zinc-700 dark:bg-zinc-900"><div><p class="font-medium text-zinc-800 dark:text-zinc-100"> </p> <p class="text-xs text-zinc-500 dark:text-zinc-400"> </p></div> <button type="button" class="inline-flex items-center rounded-md border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800">Remove</button></div>'), Aa = /* @__PURE__ */ xe('<div class="space-y-3"></div>'), Ca = /* @__PURE__ */ xe('<p class="text-sm text-zinc-500 dark:text-zinc-400">No files selected yet. Use the drop zone above to add some.</p>'), za = /* @__PURE__ */ xe('<div class="space-y-6"><!> <!> <!></div>');
function Ta(e, t) {
  $t(t, !0);
  const r = We(t, "bindings", 7), n = /* @__PURE__ */ qt(() => () => {
    var d;
    return t.maxFiles ?? ((d = r()) == null ? void 0 : d.max_files) ?? 5;
  }), i = /* @__PURE__ */ qt(a), o = async (d) => {
    const v = [...a()];
    for (const w of d)
      v.some((E) => E.name === w.name && E.size === w.size && E.type === w.type) || v.push({ name: w.name, size: w.size, type: w.type });
    l(v), r().error = "";
  }, s = ({ reason: d, file: k }) => {
    r().error = `${k.name}: ${d}`;
  };
  function f(d) {
    const k = a();
    k.splice(d, 1), l(k), k.length === 0 && (r().error = "");
  }
  function a() {
    var d;
    if (!((d = r()) != null && d.files)) return [];
    try {
      const k = JSON.parse(r().files);
      return Array.isArray(k) ? k.filter((v) => v && typeof v.name == "string" && typeof v.size == "number" && typeof v.type == "string").map((v) => ({ name: v.name, size: v.size, type: v.type })) : [];
    } catch {
      return [];
    }
  }
  function l(d) {
    r().files = JSON.stringify(d), r().file_count = d.length;
  }
  var c = za(), p = K(c);
  {
    let d = /* @__PURE__ */ qt(() => R(n)());
    ka(p, {
      get maxFiles() {
        return R(d);
      },
      get fileCount() {
        return R(i).length;
      },
      onUpload: o,
      onFileRejected: s
    });
  }
  var g = be(p, 2);
  {
    var b = (d) => {
      var k = Ea(), v = be(K(k), 2), w = K(v);
      yt(() => Et(w, r().error)), te(d, k);
    };
    rt(g, (d) => {
      r().error && d(b);
    });
  }
  var h = be(g, 2);
  {
    var _ = (d) => {
      var k = Aa();
      Ai(k, 23, () => R(i), (v) => v.name + v.size + v.type, (v, w, z) => {
        var E = Sa(), A = K(E), S = K(A), L = K(S), ke = be(S, 2), ue = K(ke), q = be(A, 2);
        q.__click = () => f(R(z)), yt(
          (Fe) => {
            Et(L, R(w).name), Et(ue, `${Fe ?? ""} · ${(R(w).type || "unknown type") ?? ""}`);
          },
          [() => Hr(R(w).size)]
        ), te(v, E);
      }), te(d, k);
    }, m = (d) => {
      var k = Ca();
      te(d, k);
    };
    rt(h, (d) => {
      R(i).length > 0 ? d(_) : d(m, !1);
    });
  }
  te(e, c), er();
}
Ei(["click"]);
const Fa = Ts(Ta);
export {
  Fa as default
};

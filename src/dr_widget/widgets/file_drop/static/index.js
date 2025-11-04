var Bi = Object.defineProperty;
var hn = (e) => {
  throw TypeError(e);
};
var Ui = (e, t, r) => t in e ? Bi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => Ui(e, typeof t != "symbol" ? t + "" : t, r), yr = (e, t, r) => t.has(e) || hn("Cannot " + r);
var u = (e, t, r) => (yr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), z = (e, t, r) => t.has(e) ? hn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), S = (e, t, r, n) => (yr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), N = (e, t, r) => (yr(e, t, "access private method"), r);
var Wr = Array.isArray, Wi = Array.prototype.indexOf, qr = Array.from, qi = Object.defineProperty, We = Object.getOwnPropertyDescriptor, Yi = Object.getOwnPropertyDescriptors, Hi = Object.prototype, Ki = Array.prototype, Nn = Object.getPrototypeOf, pn = Object.isExtensible;
function zt(e) {
  return typeof e == "function";
}
const On = () => {
};
function Zi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ln() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function Ji(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const Z = 2, Yr = 4, Hr = 8, Ne = 16, He = 32, ut = 64, vr = 128, H = 1024, ae = 2048, Oe = 4096, se = 8192, Fe = 16384, Dn = 32768, Ye = 65536, vn = 1 << 17, Xi = 1 << 18, Ct = 1 << 19, Qi = 1 << 20, me = 256, ar = 512, lr = 32768, Tr = 1 << 21, Kr = 1 << 22, it = 1 << 23, ot = Symbol("$state"), jn = Symbol("legacy props"), $i = Symbol(""), mt = new class extends Error {
  constructor() {
    super(...arguments);
    _e(this, "name", "StaleReactionError");
    _e(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function eo() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function to() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ro(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function no() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function io() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function oo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function so() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ao = 1, lo = 2, fo = 16, uo = 1, co = 4, ho = 8, po = 16, vo = 2, W = Symbol(), mo = "http://www.w3.org/1999/xhtml", go = "http://www.w3.org/2000/svg", bo = "@attach";
function _o() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function wo() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let yo = !1;
function Gn(e) {
  return e === this.v;
}
function xo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Vn(e) {
  return !xo(e, this.v);
}
let ge = null;
function St(e) {
  ge = e;
}
function qt(e, t = !1, r) {
  ge = {
    p: ge,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Yt(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Bo(n);
  }
  return t.i = !0, ge = t.p, /** @type {T} */
  {};
}
function Bn() {
  return !0;
}
let gt = [];
function ko() {
  var e = gt;
  gt = [], Zi(e);
}
function Ht(e) {
  if (gt.length === 0) {
    var t = gt;
    queueMicrotask(() => {
      t === gt && ko();
    });
  }
  gt.push(e);
}
function Un(e) {
  var t = P;
  if (t === null)
    return M.f |= it, e;
  if (t.f & Dn)
    At(e, t);
  else {
    if (!(t.f & vr))
      throw e;
    t.b.error(e);
  }
}
function At(e, t) {
  for (; t !== null; ) {
    if (t.f & vr)
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
const er = /* @__PURE__ */ new Set();
let j = null, q = null, je = [], Zr = null, Mr = !1;
var yt, xt, $e, et, Bt, kt, Et, Y, Pr, Qe, Wn, qn;
const dr = class dr {
  constructor() {
    z(this, Y);
    _e(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    _e(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    _e(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    z(this, yt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    z(this, xt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    z(this, $e, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    z(this, et, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    z(this, Bt, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    z(this, kt, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    z(this, Et, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    _e(this, "skipped_effects", /* @__PURE__ */ new Set());
    _e(this, "is_fork", !1);
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var n;
    je = [], this.apply();
    var r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const i of t)
      N(this, Y, Pr).call(this, i, r);
    this.is_fork || N(this, Y, Wn).call(this), u(this, et) > 0 || this.is_fork ? (N(this, Y, Qe).call(this, r.effects), N(this, Y, Qe).call(this, r.render_effects), N(this, Y, Qe).call(this, r.block_effects)) : (j = null, mn(r.render_effects), mn(r.effects), (n = u(this, Bt)) == null || n.resolve()), q = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    this.previous.has(t) || this.previous.set(t, r), this.current.set(t, t.v), q == null || q.set(t, t.v);
  }
  activate() {
    j = this;
  }
  deactivate() {
    j = null, q = null;
  }
  flush() {
    if (this.activate(), je.length > 0) {
      if (Eo(), j !== null && j !== this)
        return;
    } else u(this, $e) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of u(this, xt)) t(this);
    u(this, xt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    S(this, $e, u(this, $e) + 1), t && S(this, et, u(this, et) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    S(this, $e, u(this, $e) - 1), t && S(this, et, u(this, et) - 1), this.revive();
  }
  revive() {
    for (const t of u(this, kt))
      K(t, ae), at(t);
    for (const t of u(this, Et))
      K(t, Oe), at(t);
    S(this, kt, []), S(this, Et, []), this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    u(this, yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    u(this, xt).add(t);
  }
  settled() {
    return (u(this, Bt) ?? S(this, Bt, Ln())).promise;
  }
  static ensure() {
    if (j === null) {
      const t = j = new dr();
      er.add(j), dr.enqueue(() => {
        j === t && t.flush();
      });
    }
    return j;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Ht(t);
  }
  apply() {
  }
};
yt = new WeakMap(), xt = new WeakMap(), $e = new WeakMap(), et = new WeakMap(), Bt = new WeakMap(), kt = new WeakMap(), Et = new WeakMap(), Y = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Pr = function(t, r) {
  var c;
  t.f ^= H;
  for (var n = t.first; n !== null; ) {
    var i = n.f, o = (i & (He | ut)) !== 0, s = o && (i & H) !== 0, l = s || (i & se) !== 0 || this.skipped_effects.has(n);
    if (n.f & vr && ((c = n.b) != null && c.is_pending()) && (r = {
      parent: r,
      effect: n,
      effects: [],
      render_effects: [],
      block_effects: []
    }), !l && n.fn !== null) {
      o ? n.f ^= H : i & Yr ? r.effects.push(n) : Zt(n) && (n.f & Ne && r.block_effects.push(n), Vt(n));
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var f = n.parent;
    for (n = n.next; n === null && f !== null; )
      f === r.effect && (N(this, Y, Qe).call(this, r.effects), N(this, Y, Qe).call(this, r.render_effects), N(this, Y, Qe).call(this, r.block_effects), r = /** @type {EffectTarget} */
      r.parent), n = f.next, f = f.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Qe = function(t) {
  for (const r of t)
    (r.f & ae ? u(this, kt) : u(this, Et)).push(r), K(r, H);
}, Wn = function() {
  if (u(this, et) === 0) {
    for (const t of u(this, yt)) t();
    u(this, yt).clear();
  }
  u(this, $e) === 0 && N(this, Y, qn).call(this);
}, qn = function() {
  var i;
  if (er.size > 1) {
    this.previous.clear();
    var t = q, r = !0, n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const o of er) {
      if (o === this) {
        r = !1;
        continue;
      }
      const s = [];
      for (const [a, f] of this.current) {
        if (o.current.has(a))
          if (r && f !== o.current.get(a))
            o.current.set(a, f);
          else
            continue;
        s.push(a);
      }
      if (s.length === 0)
        continue;
      const l = [...o.current.keys()].filter((a) => !this.current.has(a));
      if (l.length > 0) {
        const a = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const c of s)
          Yn(c, l, a, f);
        if (je.length > 0) {
          j = o, o.apply();
          for (const c of je)
            N(i = o, Y, Pr).call(i, c, n);
          je = [], o.deactivate();
        }
      }
    }
    j = null, q = t;
  }
  this.committed = !0, er.delete(this);
};
let Re = dr;
function Eo() {
  var e = wt;
  Mr = !0;
  try {
    var t = 0;
    for (_n(!0); je.length > 0; ) {
      var r = Re.ensure();
      if (t++ > 1e3) {
        var n, i;
        So();
      }
      r.process(je), qe.clear();
    }
  } finally {
    Mr = !1, _n(e), Zr = null;
  }
}
function So() {
  try {
    to();
  } catch (e) {
    At(e, Zr);
  }
}
let he = null;
function mn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (Fe | se)) && Zt(n) && (he = /* @__PURE__ */ new Set(), Vt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? li(n) : n.fn = null), (he == null ? void 0 : he.size) > 0)) {
        qe.clear();
        for (const i of he) {
          if (i.f & (Fe | se)) continue;
          const o = [i];
          let s = i.parent;
          for (; s !== null; )
            he.has(s) && (he.delete(s), o.push(s)), s = s.parent;
          for (let l = o.length - 1; l >= 0; l--) {
            const a = o[l];
            a.f & (Fe | se) || Vt(a);
          }
        }
        he.clear();
      }
    }
    he = null;
  }
}
function Yn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      o & Z ? Yn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : o & (Kr | Ne) && !(o & ae) && // we may have scheduled this one already
      Hn(i, t, n) && (K(i, ae), at(
        /** @type {Effect} */
        i
      ));
    }
}
function Hn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if (i.f & Z && Hn(
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
function at(e) {
  for (var t = Zr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Mr && t === P && r & Ne)
      return;
    if (r & (ut | He)) {
      if (!(r & H)) return;
      t.f ^= H;
    }
  }
  je.push(t);
}
function Kn(e) {
  let t = 0, r = lt(0), n;
  return () => {
    Vo() && (O(r), qo(() => (t === 0 && (n = bi(() => e(() => Lt(r)))), t += 1, () => {
      Ht(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Lt(r));
      });
    })));
  };
}
var Ao = Ye | Ct | vr;
function Co(e, t, r) {
  new To(e, t, r);
}
var fe, ue, Ur, xe, tt, ke, ce, $, Ee, ze, Ge, rt, Ve, nt, Be, hr, U, Mo, Po, zr, or, sr, Ir;
class To {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    z(this, U);
    /** @type {Boundary | null} */
    _e(this, "parent");
    z(this, fe, !1);
    /** @type {TemplateNode} */
    z(this, ue);
    /** @type {TemplateNode | null} */
    z(this, Ur, null);
    /** @type {BoundaryProps} */
    z(this, xe);
    /** @type {((anchor: Node) => void)} */
    z(this, tt);
    /** @type {Effect} */
    z(this, ke);
    /** @type {Effect | null} */
    z(this, ce, null);
    /** @type {Effect | null} */
    z(this, $, null);
    /** @type {Effect | null} */
    z(this, Ee, null);
    /** @type {DocumentFragment | null} */
    z(this, ze, null);
    /** @type {TemplateNode | null} */
    z(this, Ge, null);
    z(this, rt, 0);
    z(this, Ve, 0);
    z(this, nt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    z(this, Be, null);
    z(this, hr, Kn(() => (S(this, Be, lt(u(this, rt))), () => {
      S(this, Be, null);
    })));
    S(this, ue, t), S(this, xe, r), S(this, tt, n), this.parent = /** @type {Effect} */
    P.b, S(this, fe, !!u(this, xe).pending), S(this, ke, ct(() => {
      P.b = this;
      {
        var i = N(this, U, zr).call(this);
        try {
          S(this, ce, oe(() => n(i)));
        } catch (o) {
          this.error(o);
        }
        u(this, Ve) > 0 ? N(this, U, sr).call(this) : S(this, fe, !1);
      }
      return () => {
        var o;
        (o = u(this, Ge)) == null || o.remove();
      };
    }, Ao));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return u(this, fe) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!u(this, xe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    N(this, U, Ir).call(this, t), S(this, rt, u(this, rt) + t), u(this, Be) && Dt(u(this, Be), u(this, rt));
  }
  get_effect_pending() {
    return u(this, hr).call(this), O(
      /** @type {Source<number>} */
      u(this, Be)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = u(this, xe).onerror;
    let n = u(this, xe).failed;
    if (u(this, nt) || !r && !n)
      throw t;
    u(this, ce) && (B(u(this, ce)), S(this, ce, null)), u(this, $) && (B(u(this, $)), S(this, $, null)), u(this, Ee) && (B(u(this, Ee)), S(this, Ee, null));
    var i = !1, o = !1;
    const s = () => {
      if (i) {
        wo();
        return;
      }
      i = !0, o && so(), Re.ensure(), S(this, rt, 0), u(this, Ee) !== null && _t(u(this, Ee), () => {
        S(this, Ee, null);
      }), S(this, fe, this.has_pending_snippet()), S(this, ce, N(this, U, or).call(this, () => (S(this, nt, !1), oe(() => u(this, tt).call(this, u(this, ue)))))), u(this, Ve) > 0 ? N(this, U, sr).call(this) : S(this, fe, !1);
    };
    var l = M;
    try {
      ee(null), o = !0, r == null || r(t, s), o = !1;
    } catch (a) {
      At(a, u(this, ke) && u(this, ke).parent);
    } finally {
      ee(l);
    }
    n && Ht(() => {
      S(this, Ee, N(this, U, or).call(this, () => {
        Re.ensure(), S(this, nt, !0);
        try {
          return oe(() => {
            n(
              u(this, ue),
              () => t,
              () => s
            );
          });
        } catch (a) {
          return At(
            a,
            /** @type {Effect} */
            u(this, ke).parent
          ), null;
        } finally {
          S(this, nt, !1);
        }
      }));
    });
  }
}
fe = new WeakMap(), ue = new WeakMap(), Ur = new WeakMap(), xe = new WeakMap(), tt = new WeakMap(), ke = new WeakMap(), ce = new WeakMap(), $ = new WeakMap(), Ee = new WeakMap(), ze = new WeakMap(), Ge = new WeakMap(), rt = new WeakMap(), Ve = new WeakMap(), nt = new WeakMap(), Be = new WeakMap(), hr = new WeakMap(), U = new WeakSet(), Mo = function() {
  try {
    S(this, ce, oe(() => u(this, tt).call(this, u(this, ue))));
  } catch (t) {
    this.error(t);
  }
  S(this, fe, !1);
}, Po = function() {
  const t = u(this, xe).pending;
  t && (S(this, $, oe(() => t(u(this, ue)))), Re.enqueue(() => {
    var r = N(this, U, zr).call(this);
    S(this, ce, N(this, U, or).call(this, () => (Re.ensure(), oe(() => u(this, tt).call(this, r))))), u(this, Ve) > 0 ? N(this, U, sr).call(this) : (_t(
      /** @type {Effect} */
      u(this, $),
      () => {
        S(this, $, null);
      }
    ), S(this, fe, !1));
  }));
}, zr = function() {
  var t = u(this, ue);
  return u(this, fe) && (S(this, Ge, ft()), u(this, ue).before(u(this, Ge)), t = u(this, Ge)), t;
}, /**
 * @param {() => Effect | null} fn
 */
or = function(t) {
  var r = P, n = M, i = ge;
  Ce(u(this, ke)), ee(u(this, ke)), St(u(this, ke).ctx);
  try {
    return t();
  } catch (o) {
    return Un(o), null;
  } finally {
    Ce(r), ee(n), St(i);
  }
}, sr = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    u(this, xe).pending
  );
  u(this, ce) !== null && (S(this, ze, document.createDocumentFragment()), u(this, ze).append(
    /** @type {TemplateNode} */
    u(this, Ge)
  ), ci(u(this, ce), u(this, ze))), u(this, $) === null && S(this, $, oe(() => t(u(this, ue))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Ir = function(t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && N(r = this.parent, U, Ir).call(r, t);
    return;
  }
  S(this, Ve, u(this, Ve) + t), u(this, Ve) === 0 && (S(this, fe, !1), u(this, $) && _t(u(this, $), () => {
    S(this, $, null);
  }), u(this, ze) && (u(this, ue).before(u(this, ze)), S(this, ze, null)));
};
function Zn(e, t, r, n) {
  const i = mr;
  if (r.length === 0 && e.length === 0) {
    n(t.map(i));
    return;
  }
  var o = j, s = (
    /** @type {Effect} */
    P
  ), l = zo();
  function a() {
    Promise.all(r.map((f) => /* @__PURE__ */ Io(f))).then((f) => {
      l();
      try {
        n([...t.map(i), ...f]);
      } catch (c) {
        s.f & Fe || At(c, s);
      }
      o == null || o.deactivate(), fr();
    }).catch((f) => {
      At(f, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    l();
    try {
      return a();
    } finally {
      o == null || o.deactivate(), fr();
    }
  }) : a();
}
function zo() {
  var e = P, t = M, r = ge, n = j;
  return function(o = !0) {
    Ce(e), ee(t), St(r), o && (n == null || n.activate());
  };
}
function fr() {
  Ce(null), ee(null), St(null);
}
// @__NO_SIDE_EFFECTS__
function mr(e) {
  var t = Z | ae, r = M !== null && M.f & Z ? (
    /** @type {Derived} */
    M
  ) : null;
  return P === null || r !== null && r.f & me ? t |= me : P.f |= Ct, {
    ctx: ge,
    deps: null,
    effects: null,
    equals: Gn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      W
    ),
    wv: 0,
    parent: r ?? P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Io(e, t) {
  let r = (
    /** @type {Effect | null} */
    P
  );
  r === null && eo();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = lt(
    /** @type {V} */
    W
  ), s = !M, l = /* @__PURE__ */ new Map();
  return Wo(() => {
    var d;
    var a = Ln();
    i = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject).then(() => {
        f === j && f.committed && f.deactivate(), fr();
      });
    } catch (v) {
      a.reject(v), fr();
    }
    var f = (
      /** @type {Batch} */
      j
    );
    if (s) {
      var c = !n.is_pending();
      n.update_pending_count(1), f.increment(c), (d = l.get(f)) == null || d.reject(mt), l.delete(f), l.set(f, a);
    }
    const h = (v, p = void 0) => {
      if (f.activate(), p)
        p !== mt && (o.f |= it, Dt(o, p));
      else {
        o.f & it && (o.f ^= it), Dt(o, v);
        for (const [g, _] of l) {
          if (l.delete(g), g === f) break;
          _.reject(mt);
        }
      }
      s && (n.update_pending_count(-1), f.decrement(c));
    };
    a.promise.then(h, (v) => h(null, v || "unknown"));
  }), gr(() => {
    for (const a of l.values())
      a.reject(mt);
  }), new Promise((a) => {
    function f(c) {
      function h() {
        c === i ? a(o) : f(i);
      }
      c.then(h, h);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  const t = /* @__PURE__ */ mr(e);
  return di(t), t;
}
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  const t = /* @__PURE__ */ mr(e);
  return t.equals = Vn, t;
}
function Xn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      B(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Ro(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Z))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Xr(e) {
  var t, r = P;
  Ce(Ro(e));
  try {
    e.f &= ~lr, Xn(e), t = mi(e);
  } finally {
    Ce(r);
  }
  return t;
}
function Qn(e) {
  var t = Xr(e);
  if (e.equals(t) || (e.v = t, e.wv = pi()), !Tt)
    if (q !== null)
      q.set(e, e.v);
    else {
      var r = (Ue || e.f & me) && e.deps !== null ? Oe : H;
      K(e, r);
    }
}
let Rr = /* @__PURE__ */ new Set();
const qe = /* @__PURE__ */ new Map();
let $n = !1;
function lt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Gn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  const r = lt(e);
  return di(r), r;
}
// @__NO_SIDE_EFFECTS__
function Fo(e, t = !1, r = !0) {
  const n = lt(e);
  return t || (n.equals = Vn), n;
}
function Ae(e, t, r = !1) {
  M !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ve || M.f & vn) && Bn() && M.f & (Z | Ne | Kr | vn) && !(Q != null && Q.includes(e)) && oo();
  let n = r ? bt(t) : t;
  return Dt(e, n);
}
function Dt(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Tt ? qe.set(e, t) : qe.set(e, r), e.v = t;
    var n = Re.ensure();
    n.capture(e, r), e.f & Z && (e.f & ae && Xr(
      /** @type {Derived} */
      e
    ), K(e, e.f & me ? Oe : H)), e.wv = pi(), ei(e, ae), P !== null && P.f & H && !(P.f & (He | ut)) && (le === null ? Ko([e]) : le.push(e)), !n.is_fork && Rr.size > 0 && !$n && No();
  }
  return t;
}
function No() {
  $n = !1;
  const e = Array.from(Rr);
  for (const t of e)
    t.f & H && K(t, Oe), Zt(t) && Vt(t);
  Rr.clear();
}
function Lt(e) {
  Ae(e, e.v + 1);
}
function ei(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var o = r[i], s = o.f, l = (s & ae) === 0;
      l && K(o, t), s & Z ? s & lr || (o.f |= lr, ei(
        /** @type {Derived} */
        o,
        Oe
      )) : l && (s & Ne && he !== null && he.add(
        /** @type {Effect} */
        o
      ), at(
        /** @type {Effect} */
        o
      ));
    }
}
function bt(e) {
  if (typeof e != "object" || e === null || ot in e)
    return e;
  const t = Nn(e);
  if (t !== Hi && t !== Ki)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Wr(e), i = /* @__PURE__ */ Pe(0), o = st, s = (l) => {
    if (st === o)
      return l();
    var a = M, f = st;
    ee(null), yn(o);
    var c = l();
    return ee(a), yn(f), c;
  };
  return n && r.set("length", /* @__PURE__ */ Pe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, a, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && no();
        var c = r.get(a);
        return c === void 0 ? c = s(() => {
          var h = /* @__PURE__ */ Pe(f.value);
          return r.set(a, h), h;
        }) : Ae(c, f.value, !0), !0;
      },
      deleteProperty(l, a) {
        var f = r.get(a);
        if (f === void 0) {
          if (a in l) {
            const c = s(() => /* @__PURE__ */ Pe(W));
            r.set(a, c), Lt(i);
          }
        } else
          Ae(f, W), Lt(i);
        return !0;
      },
      get(l, a, f) {
        var v;
        if (a === ot)
          return e;
        var c = r.get(a), h = a in l;
        if (c === void 0 && (!h || (v = We(l, a)) != null && v.writable) && (c = s(() => {
          var p = bt(h ? l[a] : W), g = /* @__PURE__ */ Pe(p);
          return g;
        }), r.set(a, c)), c !== void 0) {
          var d = O(c);
          return d === W ? void 0 : d;
        }
        return Reflect.get(l, a, f);
      },
      getOwnPropertyDescriptor(l, a) {
        var f = Reflect.getOwnPropertyDescriptor(l, a);
        if (f && "value" in f) {
          var c = r.get(a);
          c && (f.value = O(c));
        } else if (f === void 0) {
          var h = r.get(a), d = h == null ? void 0 : h.v;
          if (h !== void 0 && d !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return f;
      },
      has(l, a) {
        var d;
        if (a === ot)
          return !0;
        var f = r.get(a), c = f !== void 0 && f.v !== W || Reflect.has(l, a);
        if (f !== void 0 || P !== null && (!c || (d = We(l, a)) != null && d.writable)) {
          f === void 0 && (f = s(() => {
            var v = c ? bt(l[a]) : W, p = /* @__PURE__ */ Pe(v);
            return p;
          }), r.set(a, f));
          var h = O(f);
          if (h === W)
            return !1;
        }
        return c;
      },
      set(l, a, f, c) {
        var m;
        var h = r.get(a), d = a in l;
        if (n && a === "length")
          for (var v = f; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var p = r.get(v + "");
            p !== void 0 ? Ae(p, W) : v in l && (p = s(() => /* @__PURE__ */ Pe(W)), r.set(v + "", p));
          }
        if (h === void 0)
          (!d || (m = We(l, a)) != null && m.writable) && (h = s(() => /* @__PURE__ */ Pe(void 0)), Ae(h, bt(f)), r.set(a, h));
        else {
          d = h.v !== W;
          var g = s(() => bt(f));
          Ae(h, g);
        }
        var _ = Reflect.getOwnPropertyDescriptor(l, a);
        if (_ != null && _.set && _.set.call(c, f), !d) {
          if (n && typeof a == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), A = Number(a);
            Number.isInteger(A) && A >= b.v && Ae(b, A + 1);
          }
          Lt(i);
        }
        return !0;
      },
      ownKeys(l) {
        O(i);
        var a = Reflect.ownKeys(l).filter((h) => {
          var d = r.get(h);
          return d === void 0 || d.v !== W;
        });
        for (var [f, c] of r)
          c.v !== W && !(f in l) && a.push(f);
        return a;
      },
      setPrototypeOf() {
        io();
      }
    }
  );
}
function gn(e) {
  try {
    if (e !== null && typeof e == "object" && ot in e)
      return e[ot];
  } catch {
  }
  return e;
}
function Oo(e, t) {
  return Object.is(gn(e), gn(t));
}
var bn, ti, ri, ni;
function Lo() {
  if (bn === void 0) {
    bn = window, ti = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ri = We(t, "firstChild").get, ni = We(t, "nextSibling").get, pn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), pn(r) && (r.__t = void 0);
  }
}
function ft(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return ri.call(e);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return ni.call(e);
}
function we(e, t) {
  return /* @__PURE__ */ jt(e);
}
function Qr(e, t = !1) {
  {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ jt(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Kt(r) : r;
  }
}
function vt(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Kt(n);
  return n;
}
function Do(e) {
  e.textContent = "";
}
function ii() {
  return !1;
}
function jo(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Ht(() => {
      document.activeElement === r && e.focus();
    });
  }
}
function $r(e) {
  var t = M, r = P;
  ee(null), Ce(null);
  try {
    return e();
  } finally {
    ee(t), Ce(r);
  }
}
function Go(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Le(e, t, r, n = !0) {
  var i = P;
  i !== null && i.f & se && (e |= se);
  var o = {
    ctx: ge,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ae,
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
      Vt(o), o.f |= Dn;
    } catch (a) {
      throw B(o), a;
    }
  else t !== null && at(o);
  if (n) {
    var s = o;
    if (r && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Ct) && (s = s.first, e & Ne && e & Ye && s !== null && (s.f |= Ye)), s !== null && (s.parent = i, i !== null && Go(s, i), M !== null && M.f & Z && !(e & ut))) {
      var l = (
        /** @type {Derived} */
        M
      );
      (l.effects ?? (l.effects = [])).push(s);
    }
  }
  return o;
}
function Vo() {
  return M !== null && !ve;
}
function gr(e) {
  const t = Le(Hr, null, !1);
  return K(t, H), t.teardown = e, t;
}
function Bo(e) {
  return Le(Yr | Qi, e, !1);
}
function Uo(e) {
  Re.ensure();
  const t = Le(ut | Ct, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? _t(t, () => {
      B(t), n(void 0);
    }) : (B(t), n(void 0));
  });
}
function oi(e) {
  return Le(Yr, e, !1);
}
function Wo(e) {
  return Le(Kr | Ct, e, !0);
}
function qo(e, t = 0) {
  return Le(Hr | t, e, !0);
}
function tr(e, t = [], r = [], n = []) {
  Zn(n, t, r, (i) => {
    Le(Hr, () => e(...i.map(O)), !0);
  });
}
function ct(e, t = 0) {
  var r = Le(Ne | t, e, !0);
  return r;
}
function oe(e, t = !0) {
  return Le(He | Ct, e, !0, t);
}
function si(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Tt, n = M;
    wn(!0), ee(null);
    try {
      t.call(null);
    } finally {
      wn(r), ee(n);
    }
  }
}
function ai(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && $r(() => {
      i.abort(mt);
    });
    var n = r.next;
    r.f & ut ? r.parent = null : B(r, t), r = n;
  }
}
function Yo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & He || B(t), t = r;
  }
}
function B(e, t = !0) {
  var r = !1;
  (t || e.f & Xi) && e.nodes_start !== null && e.nodes_end !== null && (Ho(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), ai(e, t && !r), ur(e, 0), K(e, Fe);
  var n = e.transitions;
  if (n !== null)
    for (const o of n)
      o.stop();
  si(e);
  var i = e.parent;
  i !== null && i.first !== null && li(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Ho(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Kt(e)
    );
    e.remove(), e = r;
  }
}
function li(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function _t(e, t, r = !0) {
  var n = [];
  en(e, n, !0), fi(n, () => {
    r && B(e), t && t();
  });
}
function fi(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function en(e, t, r) {
  if (!(e.f & se)) {
    if (e.f ^= se, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var i = n.next, o = (n.f & Ye) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & He) !== 0 && (e.f & Ne) !== 0;
      en(n, t, o ? r : !1), n = i;
    }
  }
}
function tn(e) {
  ui(e, !0);
}
function ui(e, t) {
  if (e.f & se) {
    e.f ^= se, e.f & H || (K(e, ae), at(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ye) !== 0 || (r.f & He) !== 0;
      ui(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function ci(e, t) {
  for (var r = e.nodes_start, n = e.nodes_end; r !== null; ) {
    var i = r === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Kt(r)
    );
    t.append(r), r = i;
  }
}
let wt = !1;
function _n(e) {
  wt = e;
}
let Tt = !1;
function wn(e) {
  Tt = e;
}
let M = null, ve = !1;
function ee(e) {
  M = e;
}
let P = null;
function Ce(e) {
  P = e;
}
let Q = null;
function di(e) {
  M !== null && (Q === null ? Q = [e] : Q.push(e));
}
let X = null, ne = 0, le = null;
function Ko(e) {
  le = e;
}
let hi = 1, Gt = 0, st = Gt;
function yn(e) {
  st = e;
}
let Ue = !1;
function pi() {
  return ++hi;
}
function Zt(e) {
  var h;
  var t = e.f;
  if (t & ae)
    return !0;
  if (t & Oe) {
    var r = e.deps, n = (t & me) !== 0;
    if (t & Z && (e.f &= ~lr), r !== null) {
      var i, o, s = (t & ar) !== 0, l = n && P !== null && !Ue, a = r.length;
      if ((s || l) && (P === null || !(P.f & Fe))) {
        var f = (
          /** @type {Derived} */
          e
        ), c = f.parent;
        for (i = 0; i < a; i++)
          o = r[i], (s || !((h = o == null ? void 0 : o.reactions) != null && h.includes(f))) && (o.reactions ?? (o.reactions = [])).push(f);
        s && (f.f ^= ar), l && c !== null && !(c.f & me) && (f.f ^= me);
      }
      for (i = 0; i < a; i++)
        if (o = r[i], Zt(
          /** @type {Derived} */
          o
        ) && Qn(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!n || P !== null && !Ue) && K(e, H);
  }
  return !1;
}
function vi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Q != null && Q.includes(e)))
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      o.f & Z ? vi(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? K(o, ae) : o.f & H && K(o, Oe), at(
        /** @type {Effect} */
        o
      ));
    }
}
function mi(e) {
  var g;
  var t = X, r = ne, n = le, i = M, o = Ue, s = Q, l = ge, a = ve, f = st, c = e.f;
  X = /** @type {null | Value[]} */
  null, ne = 0, le = null, Ue = (c & me) !== 0 && (ve || !wt || M === null), M = c & (He | ut) ? null : e, Q = null, St(e.ctx), ve = !1, st = ++Gt, e.ac !== null && ($r(() => {
    e.ac.abort(mt);
  }), e.ac = null);
  try {
    e.f |= Tr;
    var h = (
      /** @type {Function} */
      e.fn
    ), d = h(), v = e.deps;
    if (X !== null) {
      var p;
      if (ur(e, ne), v !== null && ne > 0)
        for (v.length = ne + X.length, p = 0; p < X.length; p++)
          v[ne + p] = X[p];
      else
        e.deps = v = X;
      if (!Ue || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & Z && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (p = ne; p < v.length; p++)
          ((g = v[p]).reactions ?? (g.reactions = [])).push(e);
    } else v !== null && ne < v.length && (ur(e, ne), v.length = ne);
    if (Bn() && le !== null && !ve && v !== null && !(e.f & (Z | Oe | ae)))
      for (p = 0; p < /** @type {Source[]} */
      le.length; p++)
        vi(
          le[p],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Gt++, le !== null && (n === null ? n = le : n.push(.../** @type {Source[]} */
    le))), e.f & it && (e.f ^= it), d;
  } catch (_) {
    return Un(_);
  } finally {
    e.f ^= Tr, X = t, ne = r, le = n, M = i, Ue = o, Q = s, St(l), ve = a, st = f;
  }
}
function Zo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Wi.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & Z && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (X === null || !X.includes(t)) && (K(t, Oe), t.f & (me | ar) || (t.f ^= ar), Xn(
    /** @type {Derived} **/
    t
  ), ur(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ur(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Zo(e, r[n]);
}
function Vt(e) {
  var t = e.f;
  if (!(t & Fe)) {
    K(e, H);
    var r = P, n = wt;
    P = e, wt = !0;
    try {
      t & Ne ? Yo(e) : ai(e), si(e);
      var i = mi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = hi;
      var o;
    } finally {
      wt = n, P = r;
    }
  }
}
function O(e) {
  var t = e.f, r = (t & Z) !== 0;
  if (M !== null && !ve) {
    var n = P !== null && (P.f & Fe) !== 0;
    if (!n && !(Q != null && Q.includes(e))) {
      var i = M.deps;
      if (M.f & Tr)
        e.rv < Gt && (e.rv = Gt, X === null && i !== null && i[ne] === e ? ne++ : X === null ? X = [e] : (!Ue || !X.includes(e)) && X.push(e));
      else {
        (M.deps ?? (M.deps = [])).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [M] : o.includes(M) || o.push(M);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), l = s.parent;
    l !== null && !(l.f & me) && (s.f ^= me);
  }
  if (Tt) {
    if (qe.has(e))
      return qe.get(e);
    if (r) {
      s = /** @type {Derived} */
      e;
      var a = s.v;
      return (!(s.f & H) && s.reactions !== null || gi(s)) && (a = Xr(s)), qe.set(s, a), a;
    }
  } else if (r) {
    if (s = /** @type {Derived} */
    e, q != null && q.has(s))
      return q.get(s);
    Zt(s) && Qn(s);
  }
  if (q != null && q.has(e))
    return q.get(e);
  if (e.f & it)
    throw e.v;
  return e.v;
}
function gi(e) {
  if (e.v === W) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qe.has(t) || t.f & Z && gi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function bi(e) {
  var t = ve;
  try {
    return ve = !0, e();
  } finally {
    ve = t;
  }
}
const Jo = -7169;
function K(e, t) {
  e.f = e.f & Jo | t;
}
function Xo(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Qo = [
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
function $o(e) {
  return Qo.includes(e);
}
const es = {
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
function ts(e) {
  return e = e.toLowerCase(), es[e] ?? e;
}
const rs = ["touchstart", "touchmove"];
function ns(e) {
  return rs.includes(e);
}
const _i = /* @__PURE__ */ new Set(), Fr = /* @__PURE__ */ new Set();
function wi(e, t, r, n = {}) {
  function i(o) {
    if (n.capture || Ot.call(t, o), !o.cancelBubble)
      return $r(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ht(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function xn(e, t, r, n, i) {
  var o = { capture: n, passive: i }, s = wi(e, t, r, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && gr(() => {
    t.removeEventListener(e, s, o);
  });
}
function is(e) {
  for (var t = 0; t < e.length; t++)
    _i.add(e[t]);
  for (var r of Fr)
    r(e);
}
let kn = null;
function Ot(e) {
  var _;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  kn = e;
  var s = 0, l = kn === e && e.__root;
  if (l) {
    var a = i.indexOf(l);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    a <= f && (s = a);
  }
  if (o = /** @type {Element} */
  i[s] || e.target, o !== t) {
    qi(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var c = M, h = P;
    ee(null), Ce(null);
    try {
      for (var d, v = []; o !== null; ) {
        var p = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var g = o["__" + n];
          g != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && g.call(o, e);
        } catch (b) {
          d ? v.push(b) : d = b;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        o = p;
      }
      if (d) {
        for (let b of v)
          queueMicrotask(() => {
            throw b;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ee(c), Ce(h);
    }
  }
}
function yi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function br(e, t) {
  var r = (
    /** @type {Effect} */
    P
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ke(e, t) {
  var r = (t & vo) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = yi(i ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ jt(n));
    var o = (
      /** @type {TemplateNode} */
      r || ti ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return br(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function os(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        yi(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ jt(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ jt(l);
    }
    var a = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return br(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function ss(e, t) {
  return /* @__PURE__ */ os(e, t, "svg");
}
function rn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ft();
  return e.append(t, r), br(t, r), e;
}
function de(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function xr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function as(e, t) {
  return ls(e, t);
}
const ht = /* @__PURE__ */ new Map();
function ls(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: s = !0 }) {
  Lo();
  var l = /* @__PURE__ */ new Set(), a = (h) => {
    for (var d = 0; d < h.length; d++) {
      var v = h[d];
      if (!l.has(v)) {
        l.add(v);
        var p = ns(v);
        t.addEventListener(v, Ot, { passive: p });
        var g = ht.get(v);
        g === void 0 ? (document.addEventListener(v, Ot, { passive: p }), ht.set(v, 1)) : ht.set(v, g + 1);
      }
    }
  };
  a(qr(_i)), Fr.add(a);
  var f = void 0, c = Uo(() => {
    var h = r ?? t.appendChild(ft());
    return Co(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        if (o) {
          qt({});
          var v = (
            /** @type {ComponentContext} */
            ge
          );
          v.c = o;
        }
        i && (n.$$events = i), f = e(d, n) || {}, o && Yt();
      }
    ), () => {
      var p;
      for (var d of l) {
        t.removeEventListener(d, Ot);
        var v = (
          /** @type {number} */
          ht.get(d)
        );
        --v === 0 ? (document.removeEventListener(d, Ot), ht.delete(d)) : ht.set(d, v);
      }
      Fr.delete(a), h !== r && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Nr.set(f, c), f;
}
let Nr = /* @__PURE__ */ new WeakMap();
function fs(e, t) {
  const r = Nr.get(e);
  return r ? (Nr.delete(e), r(t)) : Promise.resolve();
}
var pe, Se, ie, Ut, Wt, pr;
class nn {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    _e(this, "anchor");
    /** @type {Map<Batch, Key>} */
    z(this, pe, /* @__PURE__ */ new Map());
    /** @type {Map<Key, Effect>} */
    z(this, Se, /* @__PURE__ */ new Map());
    /** @type {Map<Key, Branch>} */
    z(this, ie, /* @__PURE__ */ new Map());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    z(this, Ut, !0);
    z(this, Wt, () => {
      var t = (
        /** @type {Batch} */
        j
      );
      if (u(this, pe).has(t)) {
        var r = (
          /** @type {Key} */
          u(this, pe).get(t)
        ), n = u(this, Se).get(r);
        if (n)
          tn(n);
        else {
          var i = u(this, ie).get(r);
          i && (u(this, Se).set(r, i.effect), u(this, ie).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [o, s] of u(this, pe)) {
          if (u(this, pe).delete(o), o === t)
            break;
          const l = u(this, ie).get(s);
          l && (B(l.effect), u(this, ie).delete(s));
        }
        for (const [o, s] of u(this, Se)) {
          if (o === r) continue;
          const l = () => {
            if (Array.from(u(this, pe).values()).includes(o)) {
              var f = document.createDocumentFragment();
              ci(s, f), f.append(ft()), u(this, ie).set(o, { effect: s, fragment: f });
            } else
              B(s);
            u(this, Se).delete(o);
          };
          u(this, Ut) || !n ? _t(s, l, !1) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    z(this, pr, (t) => {
      u(this, pe).delete(t);
      const r = Array.from(u(this, pe).values());
      for (const [n, i] of u(this, ie))
        r.includes(n) || (B(i.effect), u(this, ie).delete(n));
    });
    this.anchor = t, S(this, Ut, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      j
    ), i = ii();
    if (r && !u(this, Se).has(t) && !u(this, ie).has(t))
      if (i) {
        var o = document.createDocumentFragment(), s = ft();
        o.append(s), u(this, ie).set(t, {
          effect: oe(() => r(s)),
          fragment: o
        });
      } else
        u(this, Se).set(
          t,
          oe(() => r(this.anchor))
        );
    if (u(this, pe).set(n, t), i) {
      for (const [l, a] of u(this, Se))
        l === t ? n.skipped_effects.delete(a) : n.skipped_effects.add(a);
      for (const [l, a] of u(this, ie))
        l === t ? n.skipped_effects.delete(a.effect) : n.skipped_effects.add(a.effect);
      n.oncommit(u(this, Wt)), n.ondiscard(u(this, pr));
    } else
      u(this, Wt).call(this);
  }
}
pe = new WeakMap(), Se = new WeakMap(), ie = new WeakMap(), Ut = new WeakMap(), Wt = new WeakMap(), pr = new WeakMap();
function It(e, t, r = !1) {
  var n = new nn(e), i = r ? Ye : 0;
  function o(s, l) {
    n.ensure(s, l);
  }
  ct(() => {
    var s = !1;
    t((l, a = !0) => {
      s = !0, o(a, l);
    }), s || o(!1, null);
  }, i);
}
function us(e, t) {
  return t;
}
function cs(e, t, r) {
  for (var n = e.items, i = [], o = t.length, s = 0; s < o; s++)
    en(t[s].e, i, !0);
  var l = o > 0 && i.length === 0 && r !== null;
  if (l) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Do(a), a.append(
      /** @type {Element} */
      r
    ), n.clear(), ye(e, t[0].prev, t[o - 1].next);
  }
  fi(i, () => {
    for (var f = 0; f < o; f++) {
      var c = t[f];
      l || (n.delete(c.k), ye(e, c.prev, c.next)), B(c.e, !l);
    }
  });
}
function ds(e, t, r, n, i, o = null) {
  var s = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = null, f = !1, c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Jn(() => {
    var g = r();
    return Wr(g) ? g : g == null ? [] : qr(g);
  }), d, v;
  function p() {
    hs(
      v,
      d,
      l,
      c,
      s,
      i,
      t,
      n,
      r
    ), o !== null && (d.length === 0 ? a ? tn(a) : a = oe(() => o(s)) : a !== null && _t(a, () => {
      a = null;
    }));
  }
  ct(() => {
    v ?? (v = /** @type {Effect} */
    P), d = /** @type {V[]} */
    O(h);
    var g = d.length;
    if (!(f && g === 0)) {
      f = g === 0;
      var _, b, A, m;
      if (ii()) {
        var x = /* @__PURE__ */ new Set(), C = (
          /** @type {Batch} */
          j
        );
        for (b = 0; b < g; b += 1) {
          A = d[b], m = n(A, b);
          var R = l.items.get(m) ?? c.get(m);
          R ? xi(R, A, b) : (_ = ki(
            null,
            l,
            null,
            null,
            A,
            m,
            b,
            i,
            t,
            r,
            !0
          ), c.set(m, _)), x.add(m);
        }
        for (const [I, k] of l.items)
          x.has(I) || C.skipped_effects.add(k.e);
        C.oncommit(p);
      } else
        p();
      O(h);
    }
  });
}
function hs(e, t, r, n, i, o, s, l, a) {
  var f = t.length, c = r.items, h = r.first, d = h, v, p = null, g = [], _ = [], b, A, m, x;
  for (x = 0; x < f; x += 1) {
    if (b = t[x], A = l(b, x), m = c.get(A), m === void 0) {
      var C = n.get(A);
      if (C !== void 0) {
        n.delete(A), c.set(A, C);
        var R = p ? p.next : d;
        ye(r, p, C), ye(r, C, R), kr(C, R, i), p = C;
      } else {
        var I = d ? (
          /** @type {TemplateNode} */
          d.e.nodes_start
        ) : i;
        p = ki(
          I,
          r,
          p,
          p === null ? r.first : p.next,
          b,
          A,
          x,
          o,
          s,
          a
        );
      }
      c.set(A, p), g = [], _ = [], d = p.next;
      continue;
    }
    if (xi(m, b, x), m.e.f & se && tn(m.e), m !== d) {
      if (v !== void 0 && v.has(m)) {
        if (g.length < _.length) {
          var k = _[0], F;
          p = k.prev;
          var Ze = g[0], Te = g[g.length - 1];
          for (F = 0; F < g.length; F += 1)
            kr(g[F], k, i);
          for (F = 0; F < _.length; F += 1)
            v.delete(_[F]);
          ye(r, Ze.prev, Te.next), ye(r, p, Ze), ye(r, Te, k), d = k, p = Te, x -= 1, g = [], _ = [];
        } else
          v.delete(m), kr(m, d, i), ye(r, m.prev, m.next), ye(r, m, p === null ? r.first : p.next), ye(r, p, m), p = m;
        continue;
      }
      for (g = [], _ = []; d !== null && d.k !== A; )
        d.e.f & se || (v ?? (v = /* @__PURE__ */ new Set())).add(d), _.push(d), d = d.next;
      if (d === null)
        continue;
      m = d;
    }
    g.push(m), p = m, d = m.next;
  }
  if (d !== null || v !== void 0) {
    for (var be = v === void 0 ? [] : qr(v); d !== null; )
      d.e.f & se || be.push(d), d = d.next;
    var dt = be.length;
    if (dt > 0) {
      var Je = null;
      cs(r, be, Je);
    }
  }
  e.first = r.first && r.first.e, e.last = p && p.e;
  for (var L of n.values())
    B(L.e);
  n.clear();
}
function xi(e, t, r, n) {
  Dt(e.v, t), e.i = r;
}
function ki(e, t, r, n, i, o, s, l, a, f, c) {
  var h = (a & ao) !== 0, d = (a & fo) === 0, v = h ? d ? /* @__PURE__ */ Fo(i, !1, !1) : lt(i) : i, p = a & lo ? lt(s) : s, g = {
    i: p,
    v,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var _ = document.createDocumentFragment();
      _.append(e = ft());
    }
    return g.e = oe(() => l(
      /** @type {Node} */
      e,
      v,
      p,
      f
    ), yo), g.e.prev = r && r.e, g.e.next = n && n.e, r === null ? c || (t.first = g) : (r.next = g, r.e.next = g.e), n !== null && (n.prev = g, n.e.prev = g.e), g;
  } finally {
  }
}
function kr(e, t, r) {
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
      /* @__PURE__ */ Kt(o)
    );
    i.before(o), o = s;
  }
}
function ye(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function on(e, t, ...r) {
  var n = new nn(e);
  ct(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((o) => i(o, ...r)));
  }, Ye);
}
function ps(e, t, r, n, i, o) {
  var s = null, l = (
    /** @type {TemplateNode} */
    e
  ), a = new nn(l, !1);
  ct(() => {
    const f = t() || null;
    var c = go;
    if (f === null) {
      a.ensure(null, null);
      return;
    }
    return a.ensure(f, (h) => {
      if (f) {
        if (s = document.createElementNS(c, f), br(s, s), n) {
          var d = (
            /** @type {TemplateNode} */
            s.appendChild(ft())
          );
          n(s, d);
        }
        P.nodes_end = s, h.before(s);
      }
    }), () => {
    };
  }, Ye), gr(() => {
  });
}
function vs(e, t) {
  var r = void 0, n;
  ct(() => {
    r !== (r = t()) && (n && (B(n), n = null), r && (n = oe(() => {
      oi(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function Ei(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Ei(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Si() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Ei(e)) && (n && (n += " "), n += t);
  return n;
}
function Ai(e) {
  return typeof e == "object" ? Si(e) : e ?? "";
}
const En = [...` 	
\r\f \v\uFEFF`];
function ms(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var o = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var l = s + o;
          (s === 0 || En.includes(n[s - 1])) && (l === n.length || En.includes(n[l])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(l + 1) : s = l;
        }
  }
  return n === "" ? null : n;
}
function Sn(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var o = e[i];
    o != null && o !== "" && (n += " " + i + ": " + o + r);
  }
  return n;
}
function Er(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function gs(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var o = !1, s = 0, l = !1, a = [];
      n && a.push(...Object.keys(n).map(Er)), i && a.push(...Object.keys(i).map(Er));
      var f = 0, c = -1;
      const g = e.length;
      for (var h = 0; h < g; h++) {
        var d = e[h];
        if (l ? d === "/" && e[h - 1] === "*" && (l = !1) : o ? o === d && (o = !1) : d === "/" && e[h + 1] === "*" ? l = !0 : d === '"' || d === "'" ? o = d : d === "(" ? s++ : d === ")" && s--, !l && o === !1 && s === 0) {
          if (d === ":" && c === -1)
            c = h;
          else if (d === ";" || h === g - 1) {
            if (c !== -1) {
              var v = Er(e.substring(f, c).trim());
              if (!a.includes(v)) {
                d !== ";" && h++;
                var p = e.substring(f, h).trim();
                r += " " + p + ";";
              }
            }
            f = h + 1, c = -1;
          }
        }
      }
    }
    return n && (r += Sn(n)), i && (r += Sn(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function Ci(e, t, r, n, i, o) {
  var s = e.__className;
  if (s !== r || s === void 0) {
    var l = ms(r, n, o);
    l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l), e.__className = r;
  } else if (o && i !== o)
    for (var a in o) {
      var f = !!o[a];
      (i == null || f !== !!i[a]) && e.classList.toggle(a, f);
    }
  return o;
}
function Sr(e, t = {}, r, n) {
  for (var i in r) {
    var o = r[i];
    t[i] !== o && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, n));
  }
}
function bs(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var o = gs(t, n);
    o == null ? e.removeAttribute("style") : e.style.cssText = o, e.__style = t;
  } else n && (Array.isArray(n) ? (Sr(e, r == null ? void 0 : r[0], n[0]), Sr(e, r == null ? void 0 : r[1], n[1], "important")) : Sr(e, r, n));
  return n;
}
function Or(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Wr(t))
      return _o();
    for (var n of e.options)
      n.selected = t.includes(An(n));
    return;
  }
  for (n of e.options) {
    var i = An(n);
    if (Oo(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function _s(e) {
  var t = new MutationObserver(() => {
    Or(e, e.__value);
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
  }), gr(() => {
    t.disconnect();
  });
}
function An(e) {
  return "__value" in e ? e.__value : e.value;
}
const Rt = Symbol("class"), Ft = Symbol("style"), Ti = Symbol("is custom element"), Mi = Symbol("is html");
function ws(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function cr(e, t, r, n) {
  var i = Pi(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[$i] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && zi(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ys(e, t, r, n, i = !1, o = !1) {
  var s = Pi(e), l = s[Ti], a = !s[Mi], f = t || {}, c = e.tagName === "OPTION";
  for (var h in t)
    h in r || (r[h] = null);
  r.class ? r.class = Ai(r.class) : r[Rt] && (r.class = null), r[Ft] && (r.style ?? (r.style = null));
  var d = zi(e);
  for (const m in r) {
    let x = r[m];
    if (c && m === "value" && x == null) {
      e.value = e.__value = "", f[m] = x;
      continue;
    }
    if (m === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ci(e, v, x, n, t == null ? void 0 : t[Rt], r[Rt]), f[m] = x, f[Rt] = r[Rt];
      continue;
    }
    if (m === "style") {
      bs(e, x, t == null ? void 0 : t[Ft], r[Ft]), f[m] = x, f[Ft] = r[Ft];
      continue;
    }
    var p = f[m];
    if (!(x === p && !(x === void 0 && e.hasAttribute(m)))) {
      f[m] = x;
      var g = m[0] + m[1];
      if (g !== "$$")
        if (g === "on") {
          const C = {}, R = "$$" + m;
          let I = m.slice(2);
          var _ = $o(I);
          if (Xo(I) && (I = I.slice(0, -7), C.capture = !0), !_ && p) {
            if (x != null) continue;
            e.removeEventListener(I, f[R], C), f[R] = null;
          }
          if (x != null)
            if (_)
              e[`__${I}`] = x, is([I]);
            else {
              let k = function(F) {
                f[m].call(this, F);
              };
              f[R] = wi(I, e, k, C);
            }
          else _ && (e[`__${I}`] = void 0);
        } else if (m === "style")
          cr(e, m, x);
        else if (m === "autofocus")
          jo(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!l && (m === "__value" || m === "value" && x != null))
          e.value = e.__value = x;
        else if (m === "selected" && c)
          ws(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var b = m;
          a || (b = ts(b));
          var A = b === "defaultValue" || b === "defaultChecked";
          if (x == null && !l && !A)
            if (s[m] = null, b === "value" || b === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const R = t === void 0;
              if (b === "value") {
                let I = C.defaultValue;
                C.removeAttribute(b), C.defaultValue = I, C.value = C.__value = R ? I : null;
              } else {
                let I = C.defaultChecked;
                C.removeAttribute(b), C.defaultChecked = I, C.checked = R ? I : !1;
              }
            } else
              e.removeAttribute(m);
          else A || d.includes(b) && (l || typeof x != "string") ? (e[b] = x, b in s && (s[b] = W)) : typeof x != "function" && cr(e, b, x);
        }
    }
  }
  return f;
}
function Lr(e, t, r = [], n = [], i = [], o, s = !1, l = !1) {
  Zn(i, r, n, (a) => {
    var f = void 0, c = {}, h = e.nodeName === "SELECT", d = !1;
    if (ct(() => {
      var p = t(...a.map(O)), g = ys(
        e,
        f,
        p,
        o,
        s,
        l
      );
      d && h && "value" in p && Or(
        /** @type {HTMLSelectElement} */
        e,
        p.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        p[b] || B(c[b]);
      for (let b of Object.getOwnPropertySymbols(p)) {
        var _ = p[b];
        b.description === bo && (!f || _ !== f[b]) && (c[b] && B(c[b]), c[b] = oe(() => vs(e, () => _))), g[b] = _;
      }
      f = g;
    }), h) {
      var v = (
        /** @type {HTMLSelectElement} */
        e
      );
      oi(() => {
        Or(
          v,
          /** @type {Record<string | symbol, any>} */
          f.value,
          !0
        ), _s(v);
      });
    }
    d = !0;
  });
}
function Pi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ti]: e.nodeName.includes("-"),
      [Mi]: e.namespaceURI === mo
    })
  );
}
var Cn = /* @__PURE__ */ new Map();
function zi(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Cn.get(t);
  if (r) return r;
  Cn.set(t, r = []);
  for (var n, i = e, o = Element.prototype; o !== i; ) {
    n = Yi(i);
    for (var s in n)
      n[s].set && r.push(s);
    i = Nn(i);
  }
  return r;
}
let rr = !1;
function xs(e) {
  var t = rr;
  try {
    return rr = !1, [e(), rr];
  } finally {
    rr = t;
  }
}
const ks = {
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
function sn(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    ks
  );
}
const Es = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (zt(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      zt(i) && (i = i());
      const o = We(i, t);
      if (o && o.set)
        return o.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (zt(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = We(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === ot || t === jn) return !1;
    for (let r of e.props)
      if (zt(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (zt(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function Ss(...e) {
  return new Proxy({ props: e }, Es);
}
function Ie(e, t, r, n) {
  var A;
  var i = (r & ho) !== 0, o = (r & po) !== 0, s = (
    /** @type {V} */
    n
  ), l = !0, a = () => (l && (l = !1, s = o ? bi(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s), f;
  if (i) {
    var c = ot in e || jn in e;
    f = ((A = We(e, t)) == null ? void 0 : A.set) ?? (c && t in e ? (m) => e[t] = m : void 0);
  }
  var h, d = !1;
  i ? [h, d] = xs(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = a(), f && (ro(), f(h)));
  var v;
  if (v = () => {
    var m = (
      /** @type {V} */
      e[t]
    );
    return m === void 0 ? a() : (l = !0, m);
  }, !(r & co))
    return v;
  if (f) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(m, x) {
        return arguments.length > 0 ? ((!x || p || d) && f(x ? v() : m), m) : v();
      }
    );
  }
  var g = !1, _ = (r & uo ? mr : Jn)(() => (g = !1, v()));
  i && O(_);
  var b = (
    /** @type {Effect} */
    P
  );
  return (
    /** @type {() => V} */
    function(m, x) {
      if (arguments.length > 0) {
        const C = x ? O(_) : i ? bt(m) : m;
        return Ae(_, C), g = !0, s !== void 0 && (s = C), m;
      }
      return Tt && g || b.f & Fe ? _.v : O(_);
    }
  );
}
function As(e) {
  let t = {};
  return new Proxy(
    /** @type{any} */
    {},
    {
      get(r, n) {
        return n in t || (t[n] = Kn((i) => (e.on(`change:${n}`, i), () => e.off(`change:${n}`, i)))), t[n](), e.get(n);
      },
      set(r, n, i) {
        return e.set(n, i), e.save_changes(), !0;
      }
    }
  );
}
function Cs(e) {
  return () => {
    let t;
    return {
      initialize({ model: r }) {
        t = As(r);
      },
      /** @type {import("@anywidget/types").Render<T>} */
      render({ model: r, el: n }) {
        let i = as(e, {
          target: n,
          props: { model: r, bindings: t }
        });
        return () => fs(i);
      }
    };
  };
}
const Ts = "5";
var Fn;
typeof window < "u" && ((Fn = window.__svelte ?? (window.__svelte = {})).v ?? (Fn.v = /* @__PURE__ */ new Set())).add(Ts);
const an = "-", Ms = (e) => {
  const t = zs(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(an);
      return l[0] === "" && l.length !== 1 && l.shift(), Ii(l, t) || Ps(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const a = r[s] || [];
      return l && n[s] ? [...a, ...n[s]] : a;
    }
  };
}, Ii = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? Ii(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(an);
  return (s = t.validators.find(({
    validator: l
  }) => l(o))) == null ? void 0 : s.classGroupId;
}, Tn = /^\[(.+)\]$/, Ps = (e) => {
  if (Tn.test(e)) {
    const t = Tn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, zs = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in r)
    Dr(r[i], n, i, t);
  return n;
}, Dr = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : Mn(t, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (Is(i)) {
        Dr(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([o, s]) => {
      Dr(s, Mn(t, o), r, n);
    });
  });
}, Mn = (e, t) => {
  let r = e;
  return t.split(an).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Is = (e) => e.isThemeGetter, Rs = (e) => {
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
}, jr = "!", Gr = ":", Fs = Gr.length, Ns = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (i) => {
    const o = [];
    let s = 0, l = 0, a = 0, f;
    for (let p = 0; p < i.length; p++) {
      let g = i[p];
      if (s === 0 && l === 0) {
        if (g === Gr) {
          o.push(i.slice(a, p)), a = p + Fs;
          continue;
        }
        if (g === "/") {
          f = p;
          continue;
        }
      }
      g === "[" ? s++ : g === "]" ? s-- : g === "(" ? l++ : g === ")" && l--;
    }
    const c = o.length === 0 ? i : i.substring(a), h = Os(c), d = h !== c, v = f && f > a ? f - a : void 0;
    return {
      modifiers: o,
      hasImportantModifier: d,
      baseClassName: h,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const i = t + Gr, o = n;
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
}, Os = (e) => e.endsWith(jr) ? e.substring(0, e.length - 1) : e.startsWith(jr) ? e.substring(1) : e, Ls = (e) => {
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
}, Ds = (e) => ({
  cache: Rs(e.cacheSize),
  parseClassName: Ns(e),
  sortModifiers: Ls(e),
  ...Ms(e)
}), js = /\s+/, Gs = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: o
  } = t, s = [], l = e.trim().split(js);
  let a = "";
  for (let f = l.length - 1; f >= 0; f -= 1) {
    const c = l[f], {
      isExternal: h,
      modifiers: d,
      hasImportantModifier: v,
      baseClassName: p,
      maybePostfixModifierPosition: g
    } = r(c);
    if (h) {
      a = c + (a.length > 0 ? " " + a : a);
      continue;
    }
    let _ = !!g, b = n(_ ? p.substring(0, g) : p);
    if (!b) {
      if (!_) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (b = n(p), !b) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      _ = !1;
    }
    const A = o(d).join(":"), m = v ? A + jr : A, x = m + b;
    if (s.includes(x))
      continue;
    s.push(x);
    const C = i(b, _);
    for (let R = 0; R < C.length; ++R) {
      const I = C[R];
      s.push(m + I);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Vs() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ri(t)) && (n && (n += " "), n += r);
  return n;
}
const Ri = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ri(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Bs(e, ...t) {
  let r, n, i, o = s;
  function s(a) {
    const f = t.reduce((c, h) => h(c), e());
    return r = Ds(f), n = r.cache.get, i = r.cache.set, o = l, l(a);
  }
  function l(a) {
    const f = n(a);
    if (f)
      return f;
    const c = Gs(a, r);
    return i(a, c), c;
  }
  return function() {
    return o(Vs.apply(null, arguments));
  };
}
const D = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Fi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ni = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Us = /^\d+\/\d+$/, Ws = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ys = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Hs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ks = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pt = (e) => Us.test(e), T = (e) => !!e && !Number.isNaN(Number(e)), De = (e) => !!e && Number.isInteger(Number(e)), Ar = (e) => e.endsWith("%") && T(e.slice(0, -1)), Me = (e) => Ws.test(e), Zs = () => !0, Js = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qs.test(e) && !Ys.test(e)
), Oi = () => !1, Xs = (e) => Hs.test(e), Qs = (e) => Ks.test(e), $s = (e) => !w(e) && !y(e), ea = (e) => Mt(e, ji, Oi), w = (e) => Fi.test(e), Xe = (e) => Mt(e, Gi, Js), Cr = (e) => Mt(e, oa, T), Pn = (e) => Mt(e, Li, Oi), ta = (e) => Mt(e, Di, Qs), nr = (e) => Mt(e, Vi, Xs), y = (e) => Ni.test(e), Nt = (e) => Pt(e, Gi), ra = (e) => Pt(e, sa), zn = (e) => Pt(e, Li), na = (e) => Pt(e, ji), ia = (e) => Pt(e, Di), ir = (e) => Pt(e, Vi, !0), Mt = (e, t, r) => {
  const n = Fi.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Pt = (e, t, r = !1) => {
  const n = Ni.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Li = (e) => e === "position" || e === "percentage", Di = (e) => e === "image" || e === "url", ji = (e) => e === "length" || e === "size" || e === "bg-size", Gi = (e) => e === "length", oa = (e) => e === "number", sa = (e) => e === "family-name", Vi = (e) => e === "shadow", aa = () => {
  const e = D("color"), t = D("font"), r = D("text"), n = D("font-weight"), i = D("tracking"), o = D("leading"), s = D("breakpoint"), l = D("container"), a = D("spacing"), f = D("radius"), c = D("shadow"), h = D("inset-shadow"), d = D("text-shadow"), v = D("drop-shadow"), p = D("blur"), g = D("perspective"), _ = D("aspect"), b = D("ease"), A = D("animate"), m = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
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
  ], C = () => [...x(), y, w], R = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], k = () => [y, w, a], F = () => [pt, "full", "auto", ...k()], Ze = () => [De, "none", "subgrid", y, w], Te = () => ["auto", {
    span: ["full", De, y, w]
  }, De, y, w], be = () => [De, "auto", y, w], dt = () => ["auto", "min", "max", "fr", y, w], Je = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], L = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], G = () => ["auto", ...k()], te = () => [pt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], E = () => [e, y, w], ln = () => [...x(), zn, Pn, {
    position: [y, w]
  }], fn = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], un = () => ["auto", "cover", "contain", na, ea, {
    size: [y, w]
  }], _r = () => [Ar, Nt, Xe], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    y,
    w
  ], re = () => ["", T, Nt, Xe], Jt = () => ["solid", "dashed", "dotted", "double"], cn = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => [T, Ar, zn, Pn], dn = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    y,
    w
  ], Xt = () => ["none", T, y, w], Qt = () => ["none", T, y, w], wr = () => [T, y, w], $t = () => [pt, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Me],
      breakpoint: [Me],
      color: [Zs],
      container: [Me],
      "drop-shadow": [Me],
      ease: ["in", "out", "in-out"],
      font: [$s],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Me],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Me],
      shadow: [Me],
      spacing: ["px", T],
      text: [Me],
      "text-shadow": [Me],
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
        aspect: ["auto", "square", pt, w, y, _]
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
        columns: [T, w, y, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": m()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": m()
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
        object: C()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        inset: F()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: F()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
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
        z: [De, "auto", y, w]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [pt, "full", "auto", l, ...k()]
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
        flex: [T, pt, "auto", "initial", "none", w]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", T, y, w]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", T, y, w]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [De, "first", "last", "none", y, w]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Ze()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Te()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": be()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": be()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Ze()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Te()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": be()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": be()
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
        "auto-cols": dt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": dt()
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
        justify: [...Je(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...L(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...L()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Je()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...L(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...L(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Je()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...L(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...L()]
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
        m: G()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: G()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: G()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: G()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: G()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: G()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: G()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: G()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: G()
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
        size: te()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...te()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...te()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...te()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...te()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...te()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...te()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Nt, Xe]
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
        font: [n, y, Cr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ar, w]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ra, w, t]
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
        tracking: [i, y, w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [T, "none", y, Cr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...k()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", y, w]
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
        list: ["disc", "decimal", "none", y, w]
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
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [...Jt(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [T, "from-font", "auto", y, Xe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [T, "auto", y, w]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", y, w]
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
        content: ["none", y, w]
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
        bg: ln()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: fn()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: un()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, De, y, w],
          radial: ["", y, w],
          conic: [De, y, w]
        }, ia, ta]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: _r()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: _r()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: _r()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: J()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": J()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": J()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": J()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": J()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": J()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": J()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": J()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": J()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": J()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": J()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": J()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": J()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": J()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": J()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: re()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": re()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": re()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": re()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": re()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": re()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": re()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": re()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": re()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": re()
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
        "divide-y": re()
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
        border: [...Jt(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Jt(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Jt(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [T, y, w]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", T, Nt, Xe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
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
          ir,
          nr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, ir, nr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: re()
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
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [T, Xe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": re()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", d, ir, nr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [T, y, w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...cn(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": cn()
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
        "mask-linear": [T]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": V()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": V()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": V()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": V()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": V()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": V()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": V()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": V()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": V()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": V()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": V()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": V()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": V()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": V()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [y, w]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": V()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": V()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
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
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [T]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": V()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": V()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
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
        mask: ln()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: fn()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: un()
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
        mask: ["none", y, w]
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
          y,
          w
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: dn()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [T, y, w]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [T, y, w]
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
          v,
          ir,
          nr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", T, y, w]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [T, y, w]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", T, y, w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [T, y, w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", T, y, w]
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
          y,
          w
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": dn()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [T, y, w]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [T, y, w]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", T, y, w]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [T, y, w]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", T, y, w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [T, y, w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T, y, w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", T, y, w]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", y, w]
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
        duration: [T, "initial", y, w]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, y, w]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [T, y, w]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", A, y, w]
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
        perspective: [g, y, w]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": C()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Xt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Xt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Xt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Xt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Qt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Qt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Qt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Qt()
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
        skew: wr()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": wr()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": wr()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [y, w, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: C()
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
        translate: $t()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": $t()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": $t()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": $t()
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
        accent: E()
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
        caret: E()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", y, w]
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
        "will-change": ["auto", "scroll", "contents", "transform", y, w]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [T, Nt, Xe, Cr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
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
}, la = /* @__PURE__ */ Bs(aa);
function fa(...e) {
  return la(Si(e));
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
const ua = {
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
var ca = /* @__PURE__ */ ss("<svg><!><!></svg>");
function da(e, t) {
  qt(t, !0);
  const r = Ie(t, "color", 3, "currentColor"), n = Ie(t, "size", 3, 24), i = Ie(t, "strokeWidth", 3, 2), o = Ie(t, "absoluteStrokeWidth", 3, !1), s = Ie(t, "iconNode", 19, () => []), l = /* @__PURE__ */ sn(t, [
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
  var a = ca();
  Lr(
    a,
    (h) => ({
      ...ua,
      ...l,
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
  var f = we(a);
  ds(f, 17, s, us, (h, d) => {
    var v = /* @__PURE__ */ Jr(() => Ji(O(d), 2));
    let p = () => O(v)[0], g = () => O(v)[1];
    var _ = rn(), b = Qr(_);
    ps(b, p, !0, (A, m) => {
      Lr(A, () => ({ ...g() }));
    }), de(h, _);
  });
  var c = vt(f);
  on(c, () => t.children ?? On), de(e, a), Yt();
}
function ha(e, t) {
  qt(t, !0);
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
  let r = /* @__PURE__ */ sn(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "M12 3v12" }],
    ["path", { d: "m17 8-5-5-5 5" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]
  ];
  da(e, Ss(
    { name: "upload" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, o) => {
        var s = rn(), l = Qr(s);
        on(l, () => t.children ?? On), de(i, s);
      },
      $$slots: { default: !0 }
    }
  )), Yt();
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function pa(e = "bits") {
  return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
var va = /* @__PURE__ */ Ke("<span> </span>"), ma = /* @__PURE__ */ Ke("<span> </span>"), ga = /* @__PURE__ */ Ke("<span> </span>"), ba = /* @__PURE__ */ Ke('<span class="text-muted-foreground/75 text-sm"><!> <!> <!></span>'), _a = /* @__PURE__ */ Ke(`<div class="flex flex-col place-items-center justify-center gap-2"><div class="border-border text-muted-foreground flex size-14 place-items-center justify-center rounded-full border border-dashed"><!></div> <div class="flex flex-col gap-0.5 text-center"><span class="text-muted-foreground font-medium">Drag 'n' drop files here, or click to select files</span> <!></div></div>`), wa = /* @__PURE__ */ Ke("<label><!> <input/></label>");
function ya(e, t) {
  qt(t, !0);
  let r = Ie(t, "id", 19, pa), n = Ie(t, "disabled", 3, !1), i = /* @__PURE__ */ sn(t, [
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
  let o = /* @__PURE__ */ Pe(!1);
  const s = async (_) => {
    var A;
    if (n() || !O(c)) return;
    _.preventDefault();
    const b = Array.from(((A = _.dataTransfer) == null ? void 0 : A.files) ?? []);
    await f(b);
  }, l = async (_) => {
    if (n()) return;
    const b = _.currentTarget.files;
    b && (await f(Array.from(b)), _.target.value = "");
  }, a = (_, b) => {
    if (t.maxFileSize !== void 0 && _.size > t.maxFileSize) return "Maximum file size exceeded";
    if (t.maxFiles !== void 0 && b > t.maxFiles) return "Maximum files uploaded";
    if (!t.accept) return;
    const A = t.accept.split(",").map((R) => R.trim().toLowerCase()), m = _.type.toLowerCase(), x = _.name.toLowerCase();
    if (!A.some((R) => {
      if (m.startsWith("."))
        return x.endsWith(R);
      if (R.endsWith("/*")) {
        const I = R.slice(0, R.indexOf("/*"));
        return m.startsWith(I + "/");
      }
      return m === R;
    })) return "File type not allowed";
  }, f = async (_) => {
    var A;
    Ae(o, !0);
    const b = [];
    for (let m = 0; m < _.length; m++) {
      const x = _[m], C = a(x, (t.fileCount ?? 0) + m + 1);
      if (C) {
        (A = t.onFileRejected) == null || A.call(t, { file: x, reason: C });
        continue;
      }
      b.push(x);
    }
    await t.onUpload(b), Ae(o, !1);
  }, c = /* @__PURE__ */ Jr(() => !n() && !O(o) && !(t.maxFiles !== void 0 && t.fileCount !== void 0 && t.fileCount >= t.maxFiles));
  var h = wa(), d = we(h);
  {
    var v = (_) => {
      var b = rn(), A = Qr(b);
      on(A, () => t.children), de(_, b);
    }, p = (_) => {
      var b = _a(), A = we(b), m = we(A);
      ha(m, { class: "size-7" });
      var x = vt(A, 2), C = vt(we(x), 2);
      {
        var R = (I) => {
          var k = ba(), F = we(k);
          {
            var Ze = (L) => {
              var G = va(), te = we(G);
              tr(() => xr(te, `You can upload ${t.maxFiles ?? ""} files`)), de(L, G);
            };
            It(F, (L) => {
              t.maxFiles && L(Ze);
            });
          }
          var Te = vt(F, 2);
          {
            var be = (L) => {
              var G = ma(), te = we(G);
              tr((E) => xr(te, `(up to ${E ?? ""} each)`), [() => In(t.maxFileSize)]), de(L, G);
            };
            It(Te, (L) => {
              t.maxFiles && t.maxFileSize && L(be);
            });
          }
          var dt = vt(Te, 2);
          {
            var Je = (L) => {
              var G = ga(), te = we(G);
              tr((E) => xr(te, `Maximum size ${E ?? ""}`), [() => In(t.maxFileSize)]), de(L, G);
            };
            It(dt, (L) => {
              t.maxFileSize && !t.maxFiles && L(Je);
            });
          }
          de(I, k);
        };
        It(C, (I) => {
          (t.maxFiles || t.maxFileSize) && I(R);
        });
      }
      de(_, b);
    };
    It(d, (_) => {
      t.children ? _(v) : _(p, !1);
    });
  }
  var g = vt(d, 2);
  Lr(
    g,
    () => ({
      ...i,
      disabled: !O(c),
      id: r(),
      accept: t.accept,
      multiple: t.maxFiles === void 0 || t.maxFiles - (t.fileCount ?? 0) > 1,
      type: "file",
      onchange: l,
      class: "hidden"
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  ), tr(
    (_) => {
      cr(h, "for", r()), cr(h, "aria-disabled", !O(c)), Ci(h, 1, _);
    },
    [
      () => Ai(fa("border-border hover:bg-accent/25 flex h-48 w-full place-items-center justify-center rounded-lg border-2 border-dashed p-6 transition-all hover:cursor-pointer aria-disabled:opacity-50 aria-disabled:hover:cursor-not-allowed", t.class))
    ]
  ), xn("dragover", h, (_) => _.preventDefault()), xn("drop", h, s), de(e, h), Yt();
}
const In = (e) => e < Vr ? `${e.toFixed(0)} B` : e < Br ? `${(e / Vr).toFixed(0)} KB` : e < Rn ? `${(e / Br).toFixed(0)} MB` : `${(e / Rn).toFixed(0)} GB`, Vr = 1024, Br = 1024 * Vr, Rn = 1024 * Br;
var xa = /* @__PURE__ */ Ke('<div class="text-center py-8"><p>Drop files here</p></div>'), ka = /* @__PURE__ */ Ke('<div class="p-6"><!></div>');
function Ea(e, t) {
  qt(t, !0);
  const r = Ie(t, "bindings", 7);
  Ie(t, "maxFiles", 3, 5);
  async function n(s) {
    r().file_count = s.length, r().files = JSON.stringify(s.map((l) => ({ name: l.name, size: l.size, type: l.type })));
  }
  var i = ka(), o = we(i);
  {
    let s = /* @__PURE__ */ Jr(() => {
      var l;
      return ((l = r()) == null ? void 0 : l.file_count) ?? 0;
    });
    ya(o, {
      maxFiles: 5,
      get fileCount() {
        return O(s);
      },
      onUpload: n,
      children: (l, a) => {
        var f = xa();
        de(l, f);
      },
      $$slots: { default: !0 }
    });
  }
  de(e, i), Yt();
}
const Ca = Cs(Ea);
export {
  Ca as default
};

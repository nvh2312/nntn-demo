/**
 * TinyMCE version 6.2.0 (2022-09-08)
 */
!(function () {
  "use strict";
  var e = function (e) {
      if (null === e) return "null";
      if (void 0 === e) return "undefined";
      var t = typeof e;
      return "object" === t &&
        (Array.prototype.isPrototypeOf(e) ||
          (e.constructor && "Array" === e.constructor.name))
        ? "array"
        : "object" === t &&
          (String.prototype.isPrototypeOf(e) ||
            (e.constructor && "String" === e.constructor.name))
        ? "string"
        : t;
    },
    t = function (e) {
      return { eq: e };
    },
    n = t(function (e, t) {
      return e === t;
    }),
    o = function (e) {
      return t(function (t, n) {
        if (t.length !== n.length) return !1;
        for (var o = t.length, r = 0; r < o; r++)
          if (!e.eq(t[r], n[r])) return !1;
        return !0;
      });
    },
    r = function (e) {
      return t(function (r, s) {
        var a = Object.keys(r),
          i = Object.keys(s);
        if (
          !(function (e, n) {
            return (function (e, n) {
              return t(function (t, o) {
                return e.eq(n(t), n(o));
              });
            })(o(e), function (e) {
              return (function (e, t) {
                return Array.prototype.slice.call(e).sort(t);
              })(e, n);
            });
          })(n).eq(a, i)
        )
          return !1;
        for (var l = a.length, d = 0; d < l; d++) {
          var c = a[d];
          if (!e.eq(r[c], s[c])) return !1;
        }
        return !0;
      });
    },
    s = t(function (t, n) {
      if (t === n) return !0;
      var a = e(t);
      return (
        a === e(n) &&
        ((function (e) {
          return (
            -1 !==
            [
              "undefined",
              "boolean",
              "number",
              "string",
              "function",
              "xml",
              "null",
            ].indexOf(e)
          );
        })(a)
          ? t === n
          : "array" === a
          ? o(s).eq(t, n)
          : "object" === a && r(s).eq(t, n))
      );
    });
  const a = Object.getPrototypeOf,
    i = (e, t, n) => {
      var o;
      return (
        !!n(e, t.prototype) ||
        (null === (o = e.constructor) || void 0 === o ? void 0 : o.name) ===
          t.name
      );
    },
    l = (e) => (t) =>
      ((e) => {
        const t = typeof e;
        return null === e
          ? "null"
          : "object" === t && Array.isArray(e)
          ? "array"
          : "object" === t && i(e, String, (e, t) => t.isPrototypeOf(e))
          ? "string"
          : t;
      })(t) === e,
    d = (e) => (t) => typeof t === e,
    c = (e) => (t) => e === t,
    u = (e, t) => f(e) && i(e, t, (e, t) => a(e) === t),
    m = l("string"),
    f = l("object"),
    g = (e) => u(e, Object),
    p = l("array"),
    h = c(null),
    b = d("boolean"),
    v = c(void 0),
    y = (e) => null == e,
    C = (e) => !y(e),
    w = d("function"),
    x = d("number"),
    k = (e, t) => {
      if (p(e)) {
        for (let n = 0, o = e.length; n < o; ++n) if (!t(e[n])) return !1;
        return !0;
      }
      return !1;
    },
    S = () => {},
    _ =
      (e, t) =>
      (...n) =>
        e(t.apply(null, n)),
    E = (e, t) => (n) => e(t(n)),
    N = (e) => () => e,
    R = (e) => e,
    A = (e, t) => e === t;
  function O(e, ...t) {
    return (...n) => {
      const o = t.concat(n);
      return e.apply(null, o);
    };
  }
  const T = (e) => (t) => !e(t),
    B = (e) => e(),
    D = (e) => {
      e();
    },
    P = N(!1),
    L = N(!0);
  class M {
    constructor(e, t) {
      (this.tag = e), (this.value = t);
    }
    static some(e) {
      return new M(!0, e);
    }
    static none() {
      return M.singletonNone;
    }
    fold(e, t) {
      return this.tag ? t(this.value) : e();
    }
    isSome() {
      return this.tag;
    }
    isNone() {
      return !this.tag;
    }
    map(e) {
      return this.tag ? M.some(e(this.value)) : M.none();
    }
    bind(e) {
      return this.tag ? e(this.value) : M.none();
    }
    exists(e) {
      return this.tag && e(this.value);
    }
    forall(e) {
      return !this.tag || e(this.value);
    }
    filter(e) {
      return !this.tag || e(this.value) ? this : M.none();
    }
    getOr(e) {
      return this.tag ? this.value : e;
    }
    or(e) {
      return this.tag ? this : e;
    }
    getOrThunk(e) {
      return this.tag ? this.value : e();
    }
    orThunk(e) {
      return this.tag ? this : e();
    }
    getOrDie(e) {
      if (this.tag) return this.value;
      throw new Error(null != e ? e : "Called getOrDie on None");
    }
    static from(e) {
      return C(e) ? M.some(e) : M.none();
    }
    getOrNull() {
      return this.tag ? this.value : null;
    }
    getOrUndefined() {
      return this.value;
    }
    each(e) {
      this.tag && e(this.value);
    }
    toArray() {
      return this.tag ? [this.value] : [];
    }
    toString() {
      return this.tag ? `some(${this.value})` : "none()";
    }
  }
  M.singletonNone = new M(!1);
  const I = Array.prototype.slice,
    F = Array.prototype.indexOf,
    U = Array.prototype.push,
    z = (e, t) => F.call(e, t),
    j = (e, t) => z(e, t) > -1,
    H = (e, t) => {
      for (let n = 0, o = e.length; n < o; n++) if (t(e[n], n)) return !0;
      return !1;
    },
    $ = (e, t) => {
      const n = e.length,
        o = new Array(n);
      for (let r = 0; r < n; r++) {
        const n = e[r];
        o[r] = t(n, r);
      }
      return o;
    },
    V = (e, t) => {
      for (let n = 0, o = e.length; n < o; n++) t(e[n], n);
    },
    q = (e, t) => {
      for (let n = e.length - 1; n >= 0; n--) t(e[n], n);
    },
    W = (e, t) => {
      const n = [],
        o = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const s = e[r];
        (t(s, r) ? n : o).push(s);
      }
      return { pass: n, fail: o };
    },
    K = (e, t) => {
      const n = [];
      for (let o = 0, r = e.length; o < r; o++) {
        const r = e[o];
        t(r, o) && n.push(r);
      }
      return n;
    },
    G = (e, t, n) => (
      q(e, (e, o) => {
        n = t(n, e, o);
      }),
      n
    ),
    Y = (e, t, n) => (
      V(e, (e, o) => {
        n = t(n, e, o);
      }),
      n
    ),
    X = (e, t, n) => {
      for (let o = 0, r = e.length; o < r; o++) {
        const r = e[o];
        if (t(r, o)) return M.some(r);
        if (n(r, o)) break;
      }
      return M.none();
    },
    Q = (e, t) => X(e, t, P),
    J = (e, t) => {
      for (let n = 0, o = e.length; n < o; n++)
        if (t(e[n], n)) return M.some(n);
      return M.none();
    },
    Z = (e) => {
      const t = [];
      for (let n = 0, o = e.length; n < o; ++n) {
        if (!p(e[n]))
          throw new Error(
            "Arr.flatten item " + n + " was not an array, input: " + e
          );
        U.apply(t, e[n]);
      }
      return t;
    },
    ee = (e, t) => Z($(e, t)),
    te = (e, t) => {
      for (let n = 0, o = e.length; n < o; ++n)
        if (!0 !== t(e[n], n)) return !1;
      return !0;
    },
    ne = (e) => {
      const t = I.call(e, 0);
      return t.reverse(), t;
    },
    oe = (e, t) => K(e, (e) => !j(t, e)),
    re = (e, t) => {
      const n = {};
      for (let o = 0, r = e.length; o < r; o++) {
        const r = e[o];
        n[String(r)] = t(r, o);
      }
      return n;
    },
    se = (e, t) => {
      const n = I.call(e, 0);
      return n.sort(t), n;
    },
    ae = (e, t) => (t >= 0 && t < e.length ? M.some(e[t]) : M.none()),
    ie = (e) => ae(e, 0),
    le = (e) => ae(e, e.length - 1),
    de = w(Array.from) ? Array.from : (e) => I.call(e),
    ce = (e, t) => {
      for (let n = 0; n < e.length; n++) {
        const o = t(e[n], n);
        if (o.isSome()) return o;
      }
      return M.none();
    },
    ue = Object.keys,
    me = Object.hasOwnProperty,
    fe = (e, t) => {
      const n = ue(e);
      for (let o = 0, r = n.length; o < r; o++) {
        const r = n[o];
        t(e[r], r);
      }
    },
    ge = (e, t) => pe(e, (e, n) => ({ k: n, v: t(e, n) })),
    pe = (e, t) => {
      const n = {};
      return (
        fe(e, (e, o) => {
          const r = t(e, o);
          n[r.k] = r.v;
        }),
        n
      );
    },
    he = (e) => (t, n) => {
      e[n] = t;
    },
    be = (e, t, n, o) => {
      fe(e, (e, r) => {
        (t(e, r) ? n : o)(e, r);
      });
    },
    ve = (e, t) => {
      const n = {};
      return be(e, t, he(n), S), n;
    },
    ye = (e, t) => {
      const n = [];
      return (
        fe(e, (e, o) => {
          n.push(t(e, o));
        }),
        n
      );
    },
    Ce = (e) => ye(e, R),
    we = (e, t) => (xe(e, t) ? M.from(e[t]) : M.none()),
    xe = (e, t) => me.call(e, t),
    ke = (e, t) => xe(e, t) && void 0 !== e[t] && null !== e[t],
    Se = (e) => {
      const t = {};
      return (
        V(e, (e) => {
          t[e] = {};
        }),
        ue(t)
      );
    },
    _e = (e) => void 0 !== e.length,
    Ee = Array.isArray,
    Ne = (e, t, n) => {
      if (!e) return !1;
      if (((n = n || e), _e(e))) {
        for (let o = 0, r = e.length; o < r; o++)
          if (!1 === t.call(n, e[o], o, e)) return !1;
      } else
        for (const o in e)
          if (xe(e, o) && !1 === t.call(n, e[o], o, e)) return !1;
      return !0;
    },
    Re = (e, t) => {
      const n = [];
      return (
        Ne(e, (o, r) => {
          n.push(t(o, r, e));
        }),
        n
      );
    },
    Ae = (e, t) => {
      const n = [];
      return (
        Ne(e, (o, r) => {
          (t && !t(o, r, e)) || n.push(o);
        }),
        n
      );
    },
    Oe = (e, t, n, o) => {
      let r = v(n) ? e[0] : n;
      for (let n = 0; n < e.length; n++) r = t.call(o, r, e[n], n);
      return r;
    },
    Te = (e, t, n) => {
      for (let o = 0, r = e.length; o < r; o++)
        if (t.call(n, e[o], o, e)) return o;
      return -1;
    },
    Be = (e) => e[e.length - 1],
    De = (e) => {
      let t,
        n = !1;
      return (...o) => (n || ((n = !0), (t = e.apply(null, o))), t);
    },
    Pe = () => Le(0, 0),
    Le = (e, t) => ({ major: e, minor: t }),
    Me = {
      nu: Le,
      detect: (e, t) => {
        const n = String(t).toLowerCase();
        return 0 === e.length
          ? Pe()
          : ((e, t) => {
              const n = ((e, t) => {
                for (let n = 0; n < e.length; n++) {
                  const o = e[n];
                  if (o.test(t)) return o;
                }
              })(e, t);
              if (!n) return { major: 0, minor: 0 };
              const o = (e) => Number(t.replace(n, "$" + e));
              return Le(o(1), o(2));
            })(e, n);
      },
      unknown: Pe,
    },
    Ie = (e, t) => {
      const n = String(t).toLowerCase();
      return Q(e, (e) => e.search(n));
    },
    Fe = (e, t, n) =>
      "" === t || (e.length >= t.length && e.substr(n, n + t.length) === t),
    Ue = (e, t, n = 0, o) => {
      const r = e.indexOf(t, n);
      return -1 !== r && (!!v(o) || r + t.length <= o);
    },
    ze = (e, t) => Fe(e, t, 0),
    je = (e, t) => Fe(e, t, e.length - t.length),
    He = (e) => (t) => t.replace(e, ""),
    $e = He(/^\s+|\s+$/g),
    Ve = He(/^\s+/g),
    qe = He(/\s+$/g),
    We = (e) => e.length > 0,
    Ke = (e) => !We(e),
    Ge = (e, t = 10) => {
      const n = parseInt(e, t);
      return isNaN(n) ? M.none() : M.some(n);
    },
    Ye = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
    Xe = (e) => (t) => Ue(t, e),
    Qe = [
      {
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: (e) =>
          Ue(e, "edge/") &&
          Ue(e, "chrome") &&
          Ue(e, "safari") &&
          Ue(e, "applewebkit"),
      },
      {
        name: "Chromium",
        brand: "Chromium",
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ye],
        search: (e) => Ue(e, "chrome") && !Ue(e, "chromeframe"),
      },
      {
        name: "IE",
        versionRegexes: [
          /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
          /.*?rv:([0-9]+)\.([0-9]+).*/,
        ],
        search: (e) => Ue(e, "msie") || Ue(e, "trident"),
      },
      {
        name: "Opera",
        versionRegexes: [Ye, /.*?opera\/([0-9]+)\.([0-9]+).*/],
        search: Xe("opera"),
      },
      {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: Xe("firefox"),
      },
      {
        name: "Safari",
        versionRegexes: [Ye, /.*?cpu os ([0-9]+)_([0-9]+).*/],
        search: (e) =>
          (Ue(e, "safari") || Ue(e, "mobile/")) && Ue(e, "applewebkit"),
      },
    ],
    Je = [
      {
        name: "Windows",
        search: Xe("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/],
      },
      {
        name: "iOS",
        search: (e) => Ue(e, "iphone") || Ue(e, "ipad"),
        versionRegexes: [
          /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
          /.*cpu os ([0-9]+)_([0-9]+).*/,
          /.*cpu iphone os ([0-9]+)_([0-9]+).*/,
        ],
      },
      {
        name: "Android",
        search: Xe("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/],
      },
      {
        name: "macOS",
        search: Xe("mac os x"),
        versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/],
      },
      { name: "Linux", search: Xe("linux"), versionRegexes: [] },
      { name: "Solaris", search: Xe("sunos"), versionRegexes: [] },
      { name: "FreeBSD", search: Xe("freebsd"), versionRegexes: [] },
      {
        name: "ChromeOS",
        search: Xe("cros"),
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/],
      },
    ],
    Ze = { browsers: N(Qe), oses: N(Je) },
    et = "Edge",
    tt = "Chromium",
    nt = "Opera",
    ot = "Firefox",
    rt = "Safari",
    st = (e) => {
      const t = e.current,
        n = e.version,
        o = (e) => () => t === e;
      return {
        current: t,
        version: n,
        isEdge: o(et),
        isChromium: o(tt),
        isIE: o("IE"),
        isOpera: o(nt),
        isFirefox: o(ot),
        isSafari: o(rt),
      };
    },
    at = () => st({ current: void 0, version: Me.unknown() }),
    it = st,
    lt = (N(et), N(tt), N("IE"), N(nt), N(ot), N(rt), "Windows"),
    dt = "Android",
    ct = "Linux",
    ut = "macOS",
    mt = "Solaris",
    ft = "FreeBSD",
    gt = "ChromeOS",
    pt = (e) => {
      const t = e.current,
        n = e.version,
        o = (e) => () => t === e;
      return {
        current: t,
        version: n,
        isWindows: o(lt),
        isiOS: o("iOS"),
        isAndroid: o(dt),
        isMacOS: o(ut),
        isLinux: o(ct),
        isSolaris: o(mt),
        isFreeBSD: o(ft),
        isChromeOS: o(gt),
      };
    },
    ht = () => pt({ current: void 0, version: Me.unknown() }),
    bt = pt,
    vt =
      (N(lt),
      N("iOS"),
      N(dt),
      N(ct),
      N(ut),
      N(mt),
      N(ft),
      N(gt),
      (e) => window.matchMedia(e).matches);
  let yt = De(() =>
    ((e, t, n) => {
      const o = Ze.browsers(),
        r = Ze.oses(),
        s = t
          .bind((e) =>
            ((e, t) =>
              ce(t.brands, (t) => {
                const n = t.brand.toLowerCase();
                return Q(e, (e) => {
                  var t;
                  return (
                    n ===
                    (null === (t = e.brand) || void 0 === t
                      ? void 0
                      : t.toLowerCase())
                  );
                }).map((e) => ({
                  current: e.name,
                  version: Me.nu(parseInt(t.version, 10), 0),
                }));
              }))(o, e)
          )
          .orThunk(() =>
            ((e, t) =>
              Ie(e, t).map((e) => {
                const n = Me.detect(e.versionRegexes, t);
                return { current: e.name, version: n };
              }))(o, e)
          )
          .fold(at, it),
        a = ((e, t) =>
          Ie(e, t).map((e) => {
            const n = Me.detect(e.versionRegexes, t);
            return { current: e.name, version: n };
          }))(r, e).fold(ht, bt),
        i = ((e, t, n, o) => {
          const r = e.isiOS() && !0 === /ipad/i.test(n),
            s = e.isiOS() && !r,
            a = e.isiOS() || e.isAndroid(),
            i = a || o("(pointer:coarse)"),
            l = r || (!s && a && o("(min-device-width:768px)")),
            d = s || (a && !l),
            c = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n),
            u = !d && !l && !c;
          return {
            isiPad: N(r),
            isiPhone: N(s),
            isTablet: N(l),
            isPhone: N(d),
            isTouch: N(i),
            isAndroid: e.isAndroid,
            isiOS: e.isiOS,
            isWebView: N(c),
            isDesktop: N(u),
          };
        })(a, s, e, n);
      return { browser: s, os: a, deviceType: i };
    })(navigator.userAgent, M.from(navigator.userAgentData), vt)
  );
  const Ct = () => yt(),
    wt = navigator.userAgent,
    xt = Ct(),
    kt = xt.browser,
    St = xt.os,
    _t = xt.deviceType,
    Et = -1 !== wt.indexOf("Windows Phone"),
    Nt = {
      transparentSrc:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      documentMode: kt.isIE() ? document.documentMode || 7 : 10,
      cacheSuffix: null,
      container: null,
      canHaveCSP: !kt.isIE(),
      windowsPhone: Et,
      browser: {
        current: kt.current,
        version: kt.version,
        isChromium: kt.isChromium,
        isEdge: kt.isEdge,
        isFirefox: kt.isFirefox,
        isIE: kt.isIE,
        isOpera: kt.isOpera,
        isSafari: kt.isSafari,
      },
      os: {
        current: St.current,
        version: St.version,
        isAndroid: St.isAndroid,
        isChromeOS: St.isChromeOS,
        isFreeBSD: St.isFreeBSD,
        isiOS: St.isiOS,
        isLinux: St.isLinux,
        isMacOS: St.isMacOS,
        isSolaris: St.isSolaris,
        isWindows: St.isWindows,
      },
      deviceType: {
        isDesktop: _t.isDesktop,
        isiPad: _t.isiPad,
        isiPhone: _t.isiPhone,
        isPhone: _t.isPhone,
        isTablet: _t.isTablet,
        isTouch: _t.isTouch,
        isWebView: _t.isWebView,
      },
    },
    Rt = /^\s*|\s*$/g,
    At = (e) => (y(e) ? "" : ("" + e).replace(Rt, "")),
    Ot = function (e, t, n, o) {
      (o = o || this),
        e &&
          (n && (e = e[n]),
          Ne(e, (e, r) => !1 !== t.call(o, e, r, n) && (Ot(e, t, n, o), !0)));
    },
    Tt = {
      trim: At,
      isArray: Ee,
      is: (e, t) =>
        t ? !("array" !== t || !Ee(e)) || typeof e === t : void 0 !== e,
      toArray: (e) => {
        if (Ee(e)) return e;
        {
          const t = [];
          for (let n = 0, o = e.length; n < o; n++) t[n] = e[n];
          return t;
        }
      },
      makeMap: (e, t, n = {}) => {
        const o = m(e) ? e.split(t || ",") : e || [];
        let r = o.length;
        for (; r--; ) n[o[r]] = {};
        return n;
      },
      each: Ne,
      map: Re,
      grep: Ae,
      inArray: (e, t) => {
        if (e)
          for (let n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
        return -1;
      },
      hasOwn: xe,
      extend: (e, ...t) => {
        for (let n = 0; n < t.length; n++) {
          const o = t[n];
          for (const t in o)
            if (xe(o, t)) {
              const n = o[t];
              void 0 !== n && (e[t] = n);
            }
        }
        return e;
      },
      walk: Ot,
      resolve: (e, t = window) => {
        const n = e.split(".");
        for (let e = 0, o = n.length; e < o && (t = t[n[e]]); e++);
        return t;
      },
      explode: (e, t) => (p(e) ? e : "" === e ? [] : Re(e.split(t || ","), At)),
      _addCacheSuffix: (e) => {
        const t = Nt.cacheSuffix;
        return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
      },
    },
    Bt = (e, t, n = A) => e.exists((e) => n(e, t)),
    Dt = (e, t, n) =>
      e.isSome() && t.isSome()
        ? M.some(n(e.getOrDie(), t.getOrDie()))
        : M.none(),
    Pt = (e, t) => (e ? M.some(t) : M.none());
  "undefined" != typeof window ? window : Function("return this;")();
  const Lt = (e) => e.dom.nodeName.toLowerCase(),
    Mt = (e) => e.dom.nodeType,
    It = (e) => (t) => Mt(t) === e,
    Ft = It(1),
    Ut = It(3),
    zt = It(9),
    jt = It(11),
    Ht = (e) => (t) => Ft(t) && Lt(t) === e,
    $t = (e, t, n) => {
      if (!(m(n) || b(n) || x(n)))
        throw (
          (console.error(
            "Invalid call to Attribute.set. Key ",
            t,
            ":: Value ",
            n,
            ":: Element ",
            e
          ),
          new Error("Attribute value was not simple"))
        );
      e.setAttribute(t, n + "");
    },
    Vt = (e, t, n) => {
      $t(e.dom, t, n);
    },
    qt = (e, t) => {
      const n = e.dom;
      fe(t, (e, t) => {
        $t(n, t, e);
      });
    },
    Wt = (e, t) => {
      const n = e.dom.getAttribute(t);
      return null === n ? void 0 : n;
    },
    Kt = (e, t) => M.from(Wt(e, t)),
    Gt = (e, t) => {
      const n = e.dom;
      return !(!n || !n.hasAttribute) && n.hasAttribute(t);
    },
    Yt = (e, t) => {
      e.dom.removeAttribute(t);
    },
    Xt = (e) => Y(e.dom.attributes, (e, t) => ((e[t.name] = t.value), e), {}),
    Qt = (e, t) => {
      const n = Wt(e, t);
      return void 0 === n || "" === n ? [] : n.split(" ");
    },
    Jt = (e) => void 0 !== e.dom.classList,
    Zt = (e) => Qt(e, "class"),
    en = (e, t) =>
      ((e, t, n) => {
        const o = Qt(e, t).concat([n]);
        return Vt(e, t, o.join(" ")), !0;
      })(e, "class", t),
    tn = (e, t) =>
      ((e, t, n) => {
        const o = K(Qt(e, t), (e) => e !== n);
        return o.length > 0 ? Vt(e, t, o.join(" ")) : Yt(e, t), !1;
      })(e, "class", t),
    nn = (e, t) => {
      Jt(e) ? e.dom.classList.add(t) : en(e, t);
    },
    on = (e) => {
      0 === (Jt(e) ? e.dom.classList : Zt(e)).length && Yt(e, "class");
    },
    rn = (e, t) => {
      Jt(e) ? e.dom.classList.remove(t) : tn(e, t), on(e);
    },
    sn = (e, t) => Jt(e) && e.dom.classList.contains(t),
    an = (e) => void 0 !== e.style && w(e.style.getPropertyValue),
    ln = (e) => {
      if (null == e) throw new Error("Node cannot be null or undefined");
      return { dom: e };
    },
    dn = (e, t) => {
      const n = (t || document).createElement("div");
      if (((n.innerHTML = e), !n.hasChildNodes() || n.childNodes.length > 1)) {
        const t = "HTML does not have a single root node";
        throw (console.error(t, e), new Error(t));
      }
      return ln(n.childNodes[0]);
    },
    cn = (e, t) => {
      const n = (t || document).createElement(e);
      return ln(n);
    },
    un = (e, t) => {
      const n = (t || document).createTextNode(e);
      return ln(n);
    },
    mn = ln,
    fn = (e, t, n) => M.from(e.dom.elementFromPoint(t, n)).map(ln),
    gn = (e, t) => {
      const n = [],
        o = (e) => (n.push(e), t(e));
      let r = t(e);
      do {
        r = r.bind(o);
      } while (r.isSome());
      return n;
    },
    pn = (e, t) => {
      const n = e.dom;
      if (1 !== n.nodeType) return !1;
      {
        const e = n;
        if (void 0 !== e.matches) return e.matches(t);
        if (void 0 !== e.msMatchesSelector) return e.msMatchesSelector(t);
        if (void 0 !== e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
        if (void 0 !== e.mozMatchesSelector) return e.mozMatchesSelector(t);
        throw new Error("Browser lacks native selectors");
      }
    },
    hn = (e) =>
      (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) ||
      0 === e.childElementCount,
    bn = (e, t) => e.dom === t.dom,
    vn = (e, t) => {
      const n = e.dom,
        o = t.dom;
      return n !== o && n.contains(o);
    },
    yn = (e) => mn(e.dom.ownerDocument),
    Cn = (e) => (zt(e) ? e : yn(e)),
    wn = (e) => mn(Cn(e).dom.defaultView),
    xn = (e) => M.from(e.dom.parentNode).map(mn),
    kn = (e) => M.from(e.dom.previousSibling).map(mn),
    Sn = (e) => M.from(e.dom.nextSibling).map(mn),
    _n = (e) => ne(gn(e, kn)),
    En = (e) => gn(e, Sn),
    Nn = (e) => $(e.dom.childNodes, mn),
    Rn = (e, t) => {
      const n = e.dom.childNodes;
      return M.from(n[t]).map(mn);
    },
    An = (e) => Rn(e, 0),
    On = (e) => Rn(e, e.dom.childNodes.length - 1),
    Tn = (e) => e.dom.childNodes.length,
    Bn = (e) => jt(e) && C(e.dom.host),
    Dn = w(Element.prototype.attachShadow) && w(Node.prototype.getRootNode),
    Pn = N(Dn),
    Ln = Dn ? (e) => mn(e.dom.getRootNode()) : Cn,
    Mn = (e) =>
      Bn(e)
        ? e
        : ((e) => {
            const t = e.dom.head;
            if (null == t) throw new Error("Head is not available yet");
            return mn(t);
          })(Cn(e)),
    In = (e) => mn(e.dom.host),
    Fn = (e) => {
      if (Pn() && C(e.target)) {
        const t = mn(e.target);
        if (Ft(t) && Un(t) && e.composed && e.composedPath) {
          const t = e.composedPath();
          if (t) return ie(t);
        }
      }
      return M.from(e.target);
    },
    Un = (e) => C(e.dom.shadowRoot),
    zn = (e) => {
      const t = Ut(e) ? e.dom.parentNode : e.dom;
      if (null == t || null === t.ownerDocument) return !1;
      const n = t.ownerDocument;
      return ((e) => {
        const t = Ln(e);
        return Bn(t) ? M.some(t) : M.none();
      })(mn(t)).fold(() => n.body.contains(t), E(zn, In));
    },
    jn = (e, t, n) => {
      if (!m(n))
        throw (
          (console.error(
            "Invalid call to CSS.set. Property ",
            t,
            ":: Value ",
            n,
            ":: Element ",
            e
          ),
          new Error("CSS value must be a string: " + n))
        );
      an(e) && e.style.setProperty(t, n);
    },
    Hn = (e, t, n) => {
      const o = e.dom;
      jn(o, t, n);
    },
    $n = (e, t) => {
      const n = e.dom;
      fe(t, (e, t) => {
        jn(n, t, e);
      });
    },
    Vn = (e, t) => {
      const n = e.dom,
        o = window.getComputedStyle(n).getPropertyValue(t);
      return "" !== o || zn(e) ? o : qn(n, t);
    },
    qn = (e, t) => (an(e) ? e.style.getPropertyValue(t) : ""),
    Wn = (e, t) => {
      const n = e.dom,
        o = qn(n, t);
      return M.from(o).filter((e) => e.length > 0);
    },
    Kn = (e) => {
      const t = {},
        n = e.dom;
      if (an(n))
        for (let e = 0; e < n.style.length; e++) {
          const o = n.style.item(e);
          t[o] = n.style[o];
        }
      return t;
    },
    Gn = (e, t) => {
      ((e, t) => {
        an(e) && e.style.removeProperty(t);
      })(e.dom, t),
        Bt(Kt(e, "style").map($e), "") && Yt(e, "style");
    },
    Yn = (e, t) => {
      xn(e).each((n) => {
        n.dom.insertBefore(t.dom, e.dom);
      });
    },
    Xn = (e, t) => {
      Sn(e).fold(
        () => {
          xn(e).each((e) => {
            Jn(e, t);
          });
        },
        (e) => {
          Yn(e, t);
        }
      );
    },
    Qn = (e, t) => {
      An(e).fold(
        () => {
          Jn(e, t);
        },
        (n) => {
          e.dom.insertBefore(t.dom, n.dom);
        }
      );
    },
    Jn = (e, t) => {
      e.dom.appendChild(t.dom);
    },
    Zn = (e, t) => {
      V(t, (t) => {
        Jn(e, t);
      });
    },
    eo = (e) => {
      (e.dom.textContent = ""),
        V(Nn(e), (e) => {
          to(e);
        });
    },
    to = (e) => {
      const t = e.dom;
      null !== t.parentNode && t.parentNode.removeChild(t);
    },
    no = (e) => {
      const t = Nn(e);
      var n, o;
      t.length > 0 &&
        ((n = e),
        V((o = t), (e, t) => {
          const r = 0 === t ? n : o[t - 1];
          Xn(r, e);
        })),
        to(e);
    },
    oo = (e) => e.dom.innerHTML,
    ro = (e, t) => {
      const n = yn(e).dom,
        o = mn(n.createDocumentFragment()),
        r = ((e, t) => {
          const n = (t || document).createElement("div");
          return (n.innerHTML = e), Nn(mn(n));
        })(t, n);
      Zn(o, r), eo(e), Jn(e, o);
    },
    so = (e, t, n, o) =>
      ((e, t, n, o, r) => {
        const s = ((e, t) => (n) => {
          e(n) &&
            t(
              ((e) => {
                const t = mn(Fn(e).getOr(e.target)),
                  n = () => e.stopPropagation(),
                  o = () => e.preventDefault(),
                  r = _(o, n);
                return ((e, t, n, o, r, s, a) => ({
                  target: e,
                  x: t,
                  y: n,
                  stop: o,
                  prevent: r,
                  kill: s,
                  raw: a,
                }))(t, e.clientX, e.clientY, n, o, r, e);
              })(n)
            );
        })(n, o);
        return (
          e.dom.addEventListener(t, s, false), { unbind: O(ao, e, t, s, false) }
        );
      })(e, t, n, o),
    ao = (e, t, n, o) => {
      e.dom.removeEventListener(t, n, o);
    },
    io = (e, t) => ({ left: e, top: t, translate: (n, o) => io(e + n, t + o) }),
    lo = io,
    co = (e, t) => (void 0 !== e ? e : void 0 !== t ? t : 0),
    uo = (e) => {
      const t = e.dom,
        n = t.ownerDocument.body;
      return n === t
        ? lo(n.offsetLeft, n.offsetTop)
        : zn(e)
        ? ((e) => {
            const t = e.getBoundingClientRect();
            return lo(t.left, t.top);
          })(t)
        : lo(0, 0);
    },
    mo = (e) => {
      const t = void 0 !== e ? e.dom : document,
        n = t.body.scrollLeft || t.documentElement.scrollLeft,
        o = t.body.scrollTop || t.documentElement.scrollTop;
      return lo(n, o);
    },
    fo = (e, t, n) => {
      const o = (void 0 !== n ? n.dom : document).defaultView;
      o && o.scrollTo(e, t);
    },
    go = (e, t) => {
      Ct().browser.isSafari() && w(e.dom.scrollIntoViewIfNeeded)
        ? e.dom.scrollIntoViewIfNeeded(!1)
        : e.dom.scrollIntoView(t);
    },
    po = (e, t, n, o) => ({
      x: e,
      y: t,
      width: n,
      height: o,
      right: e + n,
      bottom: t + o,
    }),
    ho = (e) => {
      const t = void 0 === e ? window : e,
        n = t.document,
        o = mo(mn(n));
      return ((e) => {
        const t = void 0 === e ? window : e;
        return Ct().browser.isFirefox() ? M.none() : M.from(t.visualViewport);
      })(t).fold(
        () => {
          const e = t.document.documentElement,
            n = e.clientWidth,
            r = e.clientHeight;
          return po(o.left, o.top, n, r);
        },
        (e) =>
          po(
            Math.max(e.pageLeft, o.left),
            Math.max(e.pageTop, o.top),
            e.width,
            e.height
          )
      );
    },
    bo = (e) => (t) => !!t && t.nodeType === e,
    vo = (e) => !!e && !Object.getPrototypeOf(e),
    yo = bo(1),
    Co = (e) => {
      const t = e.toLowerCase();
      return (e) => C(e) && e.nodeName.toLowerCase() === t;
    },
    wo = (e) => {
      const t = e.map((e) => e.toLowerCase());
      return (e) => {
        if (e && e.nodeName) {
          const n = e.nodeName.toLowerCase();
          return j(t, n);
        }
        return !1;
      };
    },
    xo = (e, t) => {
      const n = t.toLowerCase().split(" ");
      return (t) => {
        if (yo(t)) {
          const o = t.ownerDocument.defaultView;
          if (o)
            for (let r = 0; r < n.length; r++) {
              const s = o.getComputedStyle(t, null);
              if ((s ? s.getPropertyValue(e) : null) === n[r]) return !0;
            }
        }
        return !1;
      };
    },
    ko = (e) => (t) => yo(t) && t.hasAttribute(e),
    So = (e) => yo(e) && e.hasAttribute("data-mce-bogus"),
    _o = (e) => yo(e) && "TABLE" === e.tagName,
    Eo = (e) => (t) => {
      if (yo(t)) {
        if (t.contentEditable === e) return !0;
        if (t.getAttribute("data-mce-contenteditable") === e) return !0;
      }
      return !1;
    },
    No = wo(["textarea", "input"]),
    Ro = bo(3),
    Ao = bo(4),
    Oo = bo(7),
    To = bo(8),
    Bo = bo(9),
    Do = bo(11),
    Po = Co("br"),
    Lo = Co("img"),
    Mo = Eo("true"),
    Io = Eo("false"),
    Fo = wo(["td", "th"]),
    Uo = wo(["td", "th", "caption"]),
    zo = wo(["video", "audio", "object", "embed"]),
    jo = Co("li"),
    Ho = Ct().browser,
    $o = (e) => Q(e, Ft),
    Vo = (e, t) => e.children && j(e.children, t);
  var qo = (e, t, n, o, r) =>
    e(n, o) ? M.some(n) : w(r) && r(n) ? M.none() : t(n, o, r);
  const Wo = (e, t, n) => {
      let o = e.dom;
      const r = w(n) ? n : P;
      for (; o.parentNode; ) {
        o = o.parentNode;
        const e = mn(o);
        if (t(e)) return M.some(e);
        if (r(e)) break;
      }
      return M.none();
    },
    Ko = (e, t, n) => qo((e, t) => t(e), Wo, e, t, n),
    Go = (e, t, n) => Wo(e, (e) => pn(e, t), n),
    Yo = (e, t) =>
      ((e, t) => {
        const n = void 0 === t ? document : t.dom;
        return hn(n) ? M.none() : M.from(n.querySelector(e)).map(mn);
      })(t, e),
    Xo = (e, t, n) => qo((e, t) => pn(e, t), Go, e, t, n),
    Qo = (e, t = {}) => {
      let n = 0;
      const o = {},
        r = mn(e),
        s = Cn(r),
        a = t.maxLoadTime || 5e3,
        i = (i) =>
          new Promise((l, d) => {
            let c;
            const u = Tt._addCacheSuffix(i),
              m = ((e) =>
                we(o, e).getOrThunk(() => ({
                  id: "mce-u" + n++,
                  passed: [],
                  failed: [],
                  count: 0,
                })))(u);
            (o[u] = m), m.count++;
            const f = (e, t) => {
                V(e, D),
                  (m.status = t),
                  (m.passed = []),
                  (m.failed = []),
                  c && ((c.onload = null), (c.onerror = null), (c = null));
              },
              g = () => f(m.passed, 2),
              p = () => f(m.failed, 3),
              h = () => {
                var t;
                (t = h),
                  (() => {
                    const t = e.styleSheets;
                    let n = t.length;
                    for (; n--; ) {
                      const e = t[n].ownerNode;
                      if (e && c && e.id === c.id) return g(), !0;
                    }
                    return !1;
                  })() || (Date.now() - v < a ? setTimeout(t) : p());
              };
            if ((l && m.passed.push(l), d && m.failed.push(d), 1 === m.status))
              return;
            if (2 === m.status) return void g();
            if (3 === m.status) return void p();
            m.status = 1;
            const b = cn("link", s.dom);
            qt(b, { rel: "stylesheet", type: "text/css", id: m.id });
            const v = Date.now();
            var y;
            t.contentCssCors && Vt(b, "crossOrigin", "anonymous"),
              t.referrerPolicy && Vt(b, "referrerpolicy", t.referrerPolicy),
              (c = b.dom),
              (c.onload = h),
              (c.onerror = p),
              (y = b),
              Jn(Mn(r), y),
              Vt(b, "href", u);
          }),
        l = (e) => {
          const t = Tt._addCacheSuffix(e);
          we(o, t).each((e) => {
            0 == --e.count &&
              (delete o[t],
              ((e) => {
                const t = Mn(r);
                Yo(t, "#" + e).each(to);
              })(e.id));
          });
        };
      return {
        load: i,
        loadAll: (e) =>
          Promise.allSettled($(e, (e) => i(e).then(N(e)))).then((e) => {
            const t = W(e, (e) => "fulfilled" === e.status);
            return t.fail.length > 0
              ? Promise.reject($(t.fail, (e) => e.reason))
              : $(t.pass, (e) => e.value);
          }),
        unload: l,
        unloadAll: (e) => {
          V(e, (e) => {
            l(e);
          });
        },
        _setReferrerPolicy: (e) => {
          t.referrerPolicy = e;
        },
      };
    },
    Jo = (() => {
      const e = new WeakMap();
      return {
        forElement: (t, n) => {
          const o = Ln(t).dom;
          return M.from(e.get(o)).getOrThunk(() => {
            const t = Qo(o, n);
            return e.set(o, t), t;
          });
        },
      };
    })();
  class Zo {
    constructor(e, t) {
      (this.node = e),
        (this.rootNode = t),
        (this.current = this.current.bind(this)),
        (this.next = this.next.bind(this)),
        (this.prev = this.prev.bind(this)),
        (this.prev2 = this.prev2.bind(this));
    }
    current() {
      return this.node;
    }
    next(e) {
      return (
        (this.node = this.findSibling(
          this.node,
          "firstChild",
          "nextSibling",
          e
        )),
        this.node
      );
    }
    prev(e) {
      return (
        (this.node = this.findSibling(
          this.node,
          "lastChild",
          "previousSibling",
          e
        )),
        this.node
      );
    }
    prev2(e) {
      return (this.node = this.findPreviousNode(this.node, e)), this.node;
    }
    findSibling(e, t, n, o) {
      if (e) {
        if (!o && e[t]) return e[t];
        if (e !== this.rootNode) {
          let t = e[n];
          if (t) return t;
          for (let o = e.parentNode; o && o !== this.rootNode; o = o.parentNode)
            if (((t = o[n]), t)) return t;
        }
      }
    }
    findPreviousNode(e, t) {
      if (e) {
        const n = e.previousSibling;
        if (this.rootNode && n === this.rootNode) return;
        if (n) {
          if (!t)
            for (let e = n.lastChild; e; e = e.lastChild)
              if (!e.lastChild) return e;
          return n;
        }
        const o = e.parentNode;
        if (o && o !== this.rootNode) return o;
      }
    }
  }
  const er = ["pre"].concat(["h1", "h2", "h3", "h4", "h5", "h6"]),
    tr = (e) => {
      let t;
      return (n) => ((t = t || re(e, L)), xe(t, Lt(n)));
    },
    nr = tr([
      "article",
      "aside",
      "details",
      "div",
      "dt",
      "figcaption",
      "footer",
      "form",
      "fieldset",
      "header",
      "hgroup",
      "html",
      "main",
      "nav",
      "section",
      "summary",
      "body",
      "p",
      "dl",
      "multicol",
      "dd",
      "figure",
      "address",
      "center",
      "blockquote",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "listing",
      "xmp",
      "pre",
      "plaintext",
      "menu",
      "dir",
      "ul",
      "ol",
      "li",
      "hr",
      "table",
      "tbody",
      "thead",
      "tfoot",
      "th",
      "tr",
      "td",
      "caption",
    ]),
    or = (e) => Ft(e) && !nr(e),
    rr = (e) => Ft(e) && "br" === Lt(e),
    sr = tr([
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "div",
      "address",
      "pre",
      "form",
      "blockquote",
      "center",
      "dir",
      "fieldset",
      "header",
      "footer",
      "article",
      "section",
      "hgroup",
      "aside",
      "nav",
      "figure",
    ]),
    ar = tr(["ul", "ol", "dl"]),
    ir = tr(["li", "dd", "dt"]),
    lr = tr(["thead", "tbody", "tfoot"]),
    dr = tr(["td", "th"]),
    cr = tr(["pre", "script", "textarea", "style"]),
    ur = tr(er),
    mr = (e) => ur(e) || or(e),
    fr = (e, t, n) => Go(e, t, n).isSome(),
    gr = "\ufeff",
    pr = "\xa0",
    hr = (e) => e === gr,
    br = (e, t) => {
      let n = [];
      return (
        V(Nn(e), (e) => {
          t(e) && (n = n.concat([e])), (n = n.concat(br(e, t)));
        }),
        n
      );
    },
    vr = (e, t) =>
      ((e, t) => {
        const n = void 0 === t ? document : t.dom;
        return hn(n) ? [] : $(n.querySelectorAll(e), mn);
      })(t, e),
    yr = ((e, t) => {
      const n = (t) => (e(t) ? M.from(t.dom.nodeValue) : M.none());
      return {
        get: (t) => {
          if (!e(t)) throw new Error("Can only get text value of a text node");
          return n(t).getOr("");
        },
        getOption: n,
        set: (t, n) => {
          if (!e(t))
            throw new Error("Can only set raw text value of a text node");
          t.dom.nodeValue = n;
        },
      };
    })(Ut),
    Cr = (e) => yr.get(e),
    wr = (e) => yr.getOption(e),
    xr = () => {
      const e = cn("br");
      return Vt(e, "data-mce-bogus", "1"), e;
    },
    kr = (e) => {
      eo(e), Jn(e, xr());
    },
    Sr = (e) => {
      On(e).each((t) => {
        kn(t).each((n) => {
          nr(e) && rr(t) && nr(n) && to(t);
        });
      });
    },
    _r = gr,
    Er = hr,
    Nr = (e) => e.replace(/\uFEFF/g, ""),
    Rr = yo,
    Ar = Ro,
    Or = (e) => (
      Ar(e) && (e = e.parentNode), Rr(e) && e.hasAttribute("data-mce-caret")
    ),
    Tr = (e) => Ar(e) && Er(e.data),
    Br = (e) => Or(e) || Tr(e),
    Dr = (e) => e.firstChild !== e.lastChild || !Po(e.firstChild),
    Pr = (e) => {
      const t = e.container();
      return (
        !!Ro(t) &&
        (t.data.charAt(e.offset()) === _r ||
          (e.isAtStart() && Tr(t.previousSibling)))
      );
    },
    Lr = (e) => {
      const t = e.container();
      return (
        !!Ro(t) &&
        (t.data.charAt(e.offset() - 1) === _r ||
          (e.isAtEnd() && Tr(t.nextSibling)))
      );
    },
    Mr = (e) => Ar(e) && e.data[0] === _r,
    Ir = (e) => Ar(e) && e.data[e.data.length - 1] === _r,
    Fr = (e) =>
      e && e.hasAttribute("data-mce-caret")
        ? (((e) => {
            var t;
            const n = e.getElementsByTagName("br"),
              o = n[n.length - 1];
            So(o) &&
              (null === (t = o.parentNode) || void 0 === t || t.removeChild(o));
          })(e),
          e.removeAttribute("data-mce-caret"),
          e.removeAttribute("data-mce-bogus"),
          e.removeAttribute("style"),
          e.removeAttribute("data-mce-style"),
          e.removeAttribute("_moz_abspos"),
          e)
        : null,
    Ur = (e) => Or(e.startContainer),
    zr = Mo,
    jr = Io,
    Hr = Po,
    $r = Ro,
    Vr = wo(["script", "style", "textarea"]),
    qr = wo([
      "img",
      "input",
      "textarea",
      "hr",
      "iframe",
      "video",
      "audio",
      "object",
      "embed",
    ]),
    Wr = wo(["table"]),
    Kr = Br,
    Gr = (e) =>
      !Kr(e) && ($r(e) ? !Vr(e.parentNode) : qr(e) || Hr(e) || Wr(e) || Yr(e)),
    Yr = (e) =>
      !((e) => yo(e) && "true" === e.getAttribute("unselectable"))(e) && jr(e),
    Xr = (e, t) =>
      Gr(e) &&
      ((e, t) => {
        for (let n = e.parentNode; n && n !== t; n = n.parentNode) {
          if (Yr(n)) return !1;
          if (zr(n)) return !0;
        }
        return !0;
      })(e, t),
    Qr = /^[ \t\r\n]*$/,
    Jr = (e) => Qr.test(e),
    Zr = (e) => "\n" === e || "\r" === e,
    es = (e, t = 4, n = !0, o = !0) => {
      const r = ((e, t) => (t <= 0 ? "" : new Array(t + 1).join(" ")))(0, t),
        s = e.replace(/\t/g, r),
        a = Y(
          s,
          (e, t) =>
            ((e) => -1 !== " \f\t\v".indexOf(e))(t) || t === pr
              ? e.pcIsSpace ||
                ("" === e.str && n) ||
                (e.str.length === s.length - 1 && o) ||
                ((e, t) => t < e.length && t >= 0 && Zr(e[t]))(
                  s,
                  e.str.length + 1
                )
                ? { pcIsSpace: !1, str: e.str + pr }
                : { pcIsSpace: !0, str: e.str + " " }
              : { pcIsSpace: Zr(t), str: e.str + t },
          { pcIsSpace: !1, str: "" }
        );
      return a.str;
    },
    ts = (e, t) =>
      (Gr(e) &&
        !((e, t) =>
          Ro(e) &&
          Jr(e.data) &&
          !((e, t) => {
            const n = mn(t),
              o = mn(e);
            return fr(o, "pre,code", O(bn, n));
          })(e, t))(e, t)) ||
      ((e) =>
        yo(e) &&
        "A" === e.nodeName &&
        !e.hasAttribute("href") &&
        (e.hasAttribute("name") || e.hasAttribute("id")))(e) ||
      ns(e),
    ns = ko("data-mce-bookmark"),
    os = ko("data-mce-bogus"),
    rs =
      ("data-mce-bogus",
      "all",
      (e) => yo(e) && "all" === e.getAttribute("data-mce-bogus"));
  const ss = (e, t = !0) =>
      ((e, t) => {
        let n = 0;
        if (ts(e, e)) return !1;
        {
          let o = e.firstChild;
          if (!o) return !0;
          const r = new Zo(o, e);
          do {
            if (t) {
              if (rs(o)) {
                o = r.next(!0);
                continue;
              }
              if (os(o)) {
                o = r.next();
                continue;
              }
            }
            if (Po(o)) n++, (o = r.next());
            else {
              if (ts(o, e)) return !1;
              o = r.next();
            }
          } while (o);
          return n <= 1;
        }
      })(e.dom, t),
    as = (e, t) => C(e) && (ts(e, t) || or(mn(e))),
    is = (e) =>
      ((e) => "span" === e.nodeName.toLowerCase())(e) &&
      "bookmark" === e.getAttribute("data-mce-type"),
    ls = (e, t, n) => {
      var o;
      const r = n || t;
      if (yo(t) && is(t)) return t;
      const s = t.childNodes;
      for (let t = s.length - 1; t >= 0; t--) ls(e, s[t], r);
      if (yo(t)) {
        const e = t.childNodes;
        1 === e.length &&
          is(e[0]) &&
          (null === (o = t.parentNode) ||
            void 0 === o ||
            o.insertBefore(e[0], t));
      }
      return (
        ((e) => Do(e) || Bo(e))(t) ||
          ts(t, r) ||
          ((e) => !!yo(e) && e.childNodes.length > 0)(t) ||
          ((e, t) =>
            Ro(e) &&
            e.data.length > 0 &&
            ((e, t) => {
              const n = new Zo(e, t).prev(!1),
                o = new Zo(e, t).next(!1),
                r = v(n) || as(n, t),
                s = v(o) || as(o, t);
              return r && s;
            })(e, t))(t, r) ||
          e.remove(t),
        t
      );
    },
    ds = Tt.makeMap,
    cs =
      /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    us = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    ms = /[<>&\"\']/g,
    fs = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
    gs = {
      128: "\u20ac",
      130: "\u201a",
      131: "\u0192",
      132: "\u201e",
      133: "\u2026",
      134: "\u2020",
      135: "\u2021",
      136: "\u02c6",
      137: "\u2030",
      138: "\u0160",
      139: "\u2039",
      140: "\u0152",
      142: "\u017d",
      145: "\u2018",
      146: "\u2019",
      147: "\u201c",
      148: "\u201d",
      149: "\u2022",
      150: "\u2013",
      151: "\u2014",
      152: "\u02dc",
      153: "\u2122",
      154: "\u0161",
      155: "\u203a",
      156: "\u0153",
      158: "\u017e",
      159: "\u0178",
    },
    ps = {
      '"': "&quot;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "`": "&#96;",
    },
    hs = {
      "&lt;": "<",
      "&gt;": ">",
      "&amp;": "&",
      "&quot;": '"',
      "&apos;": "'",
    },
    bs = (e, t) => {
      const n = {};
      if (e) {
        const o = e.split(",");
        t = t || 10;
        for (let e = 0; e < o.length; e += 2) {
          const r = String.fromCharCode(parseInt(o[e], t));
          if (!ps[r]) {
            const t = "&" + o[e + 1] + ";";
            (n[r] = t), (n[t] = r);
          }
        }
        return n;
      }
    },
    vs = bs(
      "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
      32
    ),
    ys = (e, t) => e.replace(t ? cs : us, (e) => ps[e] || e),
    Cs = (e, t) =>
      e.replace(t ? cs : us, (e) =>
        e.length > 1
          ? "&#" +
            (1024 * (e.charCodeAt(0) - 55296) +
              (e.charCodeAt(1) - 56320) +
              65536) +
            ";"
          : ps[e] || "&#" + e.charCodeAt(0) + ";"
      ),
    ws = (e, t, n) => {
      const o = n || vs;
      return e.replace(t ? cs : us, (e) => ps[e] || o[e] || e);
    },
    xs = {
      encodeRaw: ys,
      encodeAllRaw: (e) => ("" + e).replace(ms, (e) => ps[e] || e),
      encodeNumeric: Cs,
      encodeNamed: ws,
      getEncodeFunc: (e, t) => {
        const n = bs(t) || vs,
          o = ds(e.replace(/\+/g, ","));
        return o.named && o.numeric
          ? (e, t) =>
              e.replace(t ? cs : us, (e) =>
                void 0 !== ps[e]
                  ? ps[e]
                  : void 0 !== n[e]
                  ? n[e]
                  : e.length > 1
                  ? "&#" +
                    (1024 * (e.charCodeAt(0) - 55296) +
                      (e.charCodeAt(1) - 56320) +
                      65536) +
                    ";"
                  : "&#" + e.charCodeAt(0) + ";"
              )
          : o.named
          ? t
            ? (e, t) => ws(e, t, n)
            : ws
          : o.numeric
          ? Cs
          : ys;
      },
      decode: (e) =>
        e.replace(fs, (e, t) =>
          t
            ? (t =
                "x" === t.charAt(0).toLowerCase()
                  ? parseInt(t.substr(1), 16)
                  : parseInt(t, 10)) > 65535
              ? ((t -= 65536),
                String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
              : gs[t] || String.fromCharCode(t)
            : hs[e] ||
              vs[e] ||
              ((e) => {
                const t = cn("div").dom;
                return (t.innerHTML = e), t.textContent || t.innerText || e;
              })(e)
        ),
    },
    ks = {},
    Ss = {},
    _s = {},
    Es = Tt.makeMap,
    Ns = Tt.each,
    Rs = Tt.extend,
    As = Tt.explode,
    Os = Tt.inArray,
    Ts = (e, t) => ((e = Tt.trim(e)) ? e.split(t || " ") : []),
    Bs = (e, t = {}) => {
      const n = Es(e, " ", Es(e.toUpperCase(), " "));
      return Rs(n, t);
    },
    Ds = (e) =>
      Bs(
        "td th li dt dd figcaption caption details summary",
        e.getTextBlockElements()
      ),
    Ps = (e, t) => {
      if (e) {
        const n = {};
        return (
          m(e) && (e = { "*": e }),
          Ns(e, (e, o) => {
            n[o] = n[o.toUpperCase()] =
              "map" === t ? Es(e, /[, ]/) : As(e, /[, ]/);
          }),
          n
        );
      }
    },
    Ls = (e = {}) => {
      var t;
      const n = {},
        o = {};
      let r = [];
      const s = {},
        a = {},
        i = (t, n, o) => {
          const r = e[t];
          if (r) return Es(r, /[, ]/, Es(r.toUpperCase(), /[, ]/));
          {
            let e = Ss[t];
            return e || ((e = Bs(n, o)), (Ss[t] = e)), e;
          }
        },
        l = null !== (t = e.schema) && void 0 !== t ? t : "html5",
        d = ((e) => {
          const t = {};
          let n, o, r, s;
          const a = (e, o = "", r = "") => {
              const s = Ts(r),
                a = Ts(e);
              let i = a.length;
              for (; i--; ) {
                const e = Ts([n, o].join(" "));
                t[a[i]] = {
                  attributes: re(e, () => ({})),
                  attributesOrder: e,
                  children: re(s, N(_s)),
                };
              }
            },
            i = (e, n) => {
              const o = Ts(e),
                r = Ts(n);
              let s = o.length;
              for (; s--; ) {
                const e = t[o[s]];
                for (let t = 0, n = r.length; t < n; t++)
                  (e.attributes[r[t]] = {}), e.attributesOrder.push(r[t]);
              }
            };
          if (ks[e]) return ks[e];
          if (
            ((n = "id accesskey class dir lang style tabindex title role"),
            (o =
              "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
            (r =
              "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
            "html4" !== e &&
              ((n +=
                " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
              (o +=
                " article aside details dialog figure main header footer hgroup section nav"),
              (r +=
                " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
            "html5-strict" !== e)
          ) {
            n += " xml:lang";
            const e = "acronym applet basefont big font strike tt";
            (r = [r, e].join(" ")),
              Ns(Ts(e), (e) => {
                a(e, "", r);
              });
            const t = "center dir isindex noframes";
            (o = [o, t].join(" ")),
              (s = [o, r].join(" ")),
              Ns(Ts(t), (e) => {
                a(e, "", s);
              });
          }
          return (
            (s = s || [o, r].join(" ")),
            a("html", "manifest", "head body"),
            a("head", "", "base command link meta noscript script style title"),
            a("title hr noscript br"),
            a("base", "href target"),
            a("link", "href rel media hreflang type sizes hreflang"),
            a("meta", "name http-equiv content charset"),
            a("style", "media type scoped"),
            a("script", "src async defer type charset"),
            a(
              "body",
              "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",
              s
            ),
            a("address dt dd div caption", "", s),
            a(
              "h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn",
              "",
              r
            ),
            a("blockquote", "cite", s),
            a("ol", "reversed start type", "li"),
            a("ul", "", "li"),
            a("li", "value", s),
            a("dl", "", "dt dd"),
            a("a", "href target rel media hreflang type", r),
            a("q", "cite", r),
            a("ins del", "cite datetime", s),
            a("img", "src sizes srcset alt usemap ismap width height"),
            a("iframe", "src name width height", s),
            a("embed", "src type width height"),
            a(
              "object",
              "data type typemustmatch name usemap form width height",
              [s, "param"].join(" ")
            ),
            a("param", "name value"),
            a("map", "name", [s, "area"].join(" ")),
            a("area", "alt coords shape href target rel media hreflang type"),
            a(
              "table",
              "border",
              "caption colgroup thead tfoot tbody tr" +
                ("html4" === e ? " col" : "")
            ),
            a("colgroup", "span", "col"),
            a("col", "span"),
            a("tbody thead tfoot", "", "tr"),
            a("tr", "", "td th"),
            a("td", "colspan rowspan headers", s),
            a("th", "colspan rowspan headers scope abbr", s),
            a(
              "form",
              "accept-charset action autocomplete enctype method name novalidate target",
              s
            ),
            a("fieldset", "disabled form name", [s, "legend"].join(" ")),
            a("label", "form for", r),
            a(
              "input",
              "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
            ),
            a(
              "button",
              "disabled form formaction formenctype formmethod formnovalidate formtarget name type value",
              "html4" === e ? s : r
            ),
            a(
              "select",
              "disabled form multiple name required size",
              "option optgroup"
            ),
            a("optgroup", "disabled label", "option"),
            a("option", "disabled label selected value"),
            a(
              "textarea",
              "cols dirname disabled form maxlength name readonly required rows wrap"
            ),
            a("menu", "type label", [s, "li"].join(" ")),
            a("noscript", "", s),
            "html4" !== e &&
              (a("wbr"),
              a("ruby", "", [r, "rt rp"].join(" ")),
              a("figcaption", "", s),
              a("mark rt rp summary bdi", "", r),
              a("canvas", "width height", s),
              a(
                "video",
                "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",
                [s, "track source"].join(" ")
              ),
              a(
                "audio",
                "src crossorigin preload autoplay mediagroup loop muted controls buffered volume",
                [s, "track source"].join(" ")
              ),
              a("picture", "", "img source"),
              a("source", "src srcset type media sizes"),
              a("track", "kind src srclang label default"),
              a("datalist", "", [r, "option"].join(" ")),
              a("article section nav aside main header footer", "", s),
              a("hgroup", "", "h1 h2 h3 h4 h5 h6"),
              a("figure", "", [s, "figcaption"].join(" ")),
              a("time", "datetime", r),
              a("dialog", "open", s),
              a(
                "command",
                "type label icon disabled checked radiogroup command"
              ),
              a("output", "for form name", r),
              a("progress", "value max", r),
              a("meter", "value min max low high optimum", r),
              a("details", "open", [s, "summary"].join(" ")),
              a("keygen", "autofocus challenge disabled form keytype name")),
            "html5-strict" !== e &&
              (i("script", "language xml:space"),
              i("style", "xml:space"),
              i(
                "object",
                "declare classid code codebase codetype archive standby align border hspace vspace"
              ),
              i("embed", "align name hspace vspace"),
              i("param", "valuetype type"),
              i("a", "charset name rev shape coords"),
              i("br", "clear"),
              i(
                "applet",
                "codebase archive code object alt name width height align hspace vspace"
              ),
              i("img", "name longdesc align border hspace vspace"),
              i(
                "iframe",
                "longdesc frameborder marginwidth marginheight scrolling align"
              ),
              i("font basefont", "size color face"),
              i("input", "usemap align"),
              i("select"),
              i("textarea"),
              i("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
              i("ul", "type compact"),
              i("li", "type"),
              i("ol dl menu dir", "compact"),
              i("pre", "width xml:space"),
              i("hr", "align noshade size width"),
              i("isindex", "prompt"),
              i(
                "table",
                "summary width frame rules cellspacing cellpadding align bgcolor"
              ),
              i("col", "width align char charoff valign"),
              i("colgroup", "width align char charoff valign"),
              i("thead", "align char charoff valign"),
              i("tr", "align char charoff valign bgcolor"),
              i(
                "th",
                "axis align char charoff valign nowrap bgcolor width height"
              ),
              i("form", "accept"),
              i(
                "td",
                "abbr axis scope align char charoff valign nowrap bgcolor width height"
              ),
              i("tfoot", "align char charoff valign"),
              i("tbody", "align char charoff valign"),
              i("area", "nohref"),
              i("body", "background bgcolor text link vlink alink")),
            "html4" !== e &&
              (i("input button select textarea", "autofocus"),
              i("input textarea", "placeholder"),
              i("a", "download"),
              i("link script img", "crossorigin"),
              i("img", "loading"),
              i("iframe", "sandbox seamless allow allowfullscreen loading")),
            "html4" !== e &&
              V([t.video, t.audio], (e) => {
                delete e.children.audio, delete e.children.video;
              }),
            Ns(Ts("a form meter progress dfn"), (e) => {
              t[e] && delete t[e].children[e];
            }),
            delete t.caption.children.table,
            delete t.script,
            (ks[e] = t),
            t
          );
        })(l);
      !1 === e.verify_html && (e.valid_elements = "*[*]");
      const c = Ps(e.valid_styles),
        u = Ps(e.invalid_styles, "map"),
        m = Ps(e.valid_classes, "map"),
        f = i(
          "whitespace_elements",
          "pre script noscript style textarea video audio iframe object code"
        ),
        g = i(
          "self_closing_elements",
          "colgroup dd dt li option p td tfoot th thead tr"
        ),
        p = i(
          "void_elements",
          "area base basefont br col frame hr img input isindex link meta param embed source wbr track"
        ),
        h = i(
          "boolean_attributes",
          "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"
        ),
        b = "td th iframe video audio object script code",
        v = i("non_empty_elements", b + " pre", p),
        y = i("move_caret_before_on_enter_elements", b + " table", p),
        C = i(
          "text_block_elements",
          "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"
        ),
        w = i(
          "block_elements",
          "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",
          C
        ),
        x = i(
          "text_inline_elements",
          "span strong b em i font s strike u var cite dfn code mark q sup sub samp"
        );
      Ns(
        "script noscript iframe noframes noembed title style textarea xmp plaintext".split(
          " "
        ),
        (e) => {
          a[e] = new RegExp("</" + e + "[^>]*>", "gi");
        }
      );
      const k = (e) => new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$"),
        S = (e) => {
          const t =
              /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
            o = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/,
            s = /[*?+]/;
          if (e) {
            const a = Ts(e, ",");
            let i, l;
            n["@"] && ((i = n["@"].attributes), (l = n["@"].attributesOrder));
            for (let e = 0, d = a.length; e < d; e++) {
              let d = t.exec(a[e]);
              if (d) {
                const e = d[1],
                  t = d[2],
                  a = d[3],
                  c = d[5],
                  u = {},
                  m = [],
                  f = { attributes: u, attributesOrder: m };
                if (
                  ("#" === e && (f.paddEmpty = !0),
                  "-" === e && (f.removeEmpty = !0),
                  "!" === d[4] && (f.removeEmptyAttrs = !0),
                  i &&
                    (fe(i, (e, t) => {
                      u[t] = e;
                    }),
                    l && m.push(...l)),
                  c)
                ) {
                  const e = Ts(c, "|");
                  for (let t = 0, n = e.length; t < n; t++)
                    if (((d = o.exec(e[t])), d)) {
                      const e = {},
                        t = d[1],
                        n = d[2].replace(/[\\:]:/g, ":"),
                        o = d[3],
                        r = d[4];
                      if (
                        ("!" === t &&
                          ((f.attributesRequired = f.attributesRequired || []),
                          f.attributesRequired.push(n),
                          (e.required = !0)),
                        "-" === t)
                      ) {
                        delete u[n], m.splice(Os(m, n), 1);
                        continue;
                      }
                      if (
                        (o &&
                          ("=" === o &&
                            ((f.attributesDefault = f.attributesDefault || []),
                            f.attributesDefault.push({ name: n, value: r }),
                            (e.defaultValue = r)),
                          "~" === o &&
                            ((f.attributesForced = f.attributesForced || []),
                            f.attributesForced.push({ name: n, value: r }),
                            (e.forcedValue = r)),
                          "<" === o && (e.validValues = Es(r, "?"))),
                        s.test(n))
                      ) {
                        const t = e;
                        (f.attributePatterns = f.attributePatterns || []),
                          (t.pattern = k(n)),
                          f.attributePatterns.push(t);
                      } else u[n] || m.push(n), (u[n] = e);
                    }
                }
                if (
                  (i || "@" !== t || ((i = u), (l = m)),
                  a && ((f.outputName = t), (n[a] = f)),
                  s.test(t))
                ) {
                  const e = f;
                  (e.pattern = k(t)), r.push(e);
                } else n[t] = f;
              }
            }
          }
        },
        _ = (e) => {
          (r = []),
            V(ue(n), (e) => {
              delete n[e];
            }),
            S(e),
            Ns(d, (e, t) => {
              o[t] = e.children;
            });
        },
        E = (e) => {
          const t = /^(~)?(.+)$/;
          e &&
            (delete Ss.text_block_elements,
            delete Ss.block_elements,
            Ns(Ts(e, ","), (e) => {
              const r = t.exec(e);
              if (r) {
                const e = "~" === r[1],
                  t = e ? "span" : "div",
                  a = r[2];
                if (
                  ((o[a] = o[t]),
                  (s[a] = t),
                  (v[a.toUpperCase()] = {}),
                  (v[a] = {}),
                  e || ((w[a.toUpperCase()] = {}), (w[a] = {})),
                  !n[a])
                ) {
                  let e = n[t];
                  (e = Rs({}, e)),
                    delete e.removeEmptyAttrs,
                    delete e.removeEmpty,
                    (n[a] = e);
                }
                Ns(o, (e, n) => {
                  e[t] && ((o[n] = e = Rs({}, o[n])), (e[a] = e[t]));
                });
              }
            }));
        },
        R = (e) => {
          const t =
            /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
          delete ks[l],
            e &&
              Ns(Ts(e, ","), (e) => {
                const n = t.exec(e);
                if (n) {
                  const e = n[1];
                  let t;
                  (t = e ? o[n[2]] : (o[n[2]] = { "#comment": {} })),
                    (t = o[n[2]]),
                    Ns(Ts(n[3], "|"), (n) => {
                      "-" === e ? delete t[n] : (t[n] = {});
                    });
                }
              });
        },
        A = (e) => {
          const t = n[e];
          if (t) return t;
          let o = r.length;
          for (; o--; ) {
            const t = r[o];
            if (t.pattern.test(e)) return t;
          }
        };
      e.valid_elements
        ? _(e.valid_elements)
        : (Ns(d, (e, t) => {
            (n[t] = {
              attributes: e.attributes,
              attributesOrder: e.attributesOrder,
            }),
              (o[t] = e.children);
          }),
          Ns(Ts("strong/b em/i"), (e) => {
            const t = Ts(e, "/");
            n[t[1]].outputName = t[0];
          }),
          Ns(x, (t, o) => {
            n[o] &&
              (e.padd_empty_block_inline_children &&
                (n[o].paddInEmptyBlock = !0),
              (n[o].removeEmpty = !0));
          }),
          Ns(Ts("ol ul blockquote a table tbody"), (e) => {
            n[e] && (n[e].removeEmpty = !0);
          }),
          Ns(
            Ts("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
            (e) => {
              n[e].paddEmpty = !0;
            }
          ),
          Ns(Ts("span"), (e) => {
            n[e].removeEmptyAttrs = !0;
          })),
        E(e.custom_elements),
        R(e.valid_children),
        S(e.extended_valid_elements),
        R("+ol[ul|ol],+ul[ul|ol]"),
        Ns(
          {
            dd: "dl",
            dt: "dl",
            li: "ul ol",
            td: "tr",
            th: "tr",
            tr: "tbody thead tfoot",
            tbody: "table",
            thead: "table",
            tfoot: "table",
            legend: "fieldset",
            area: "map",
            param: "video audio object",
          },
          (e, t) => {
            n[t] && (n[t].parentsRequired = Ts(e));
          }
        ),
        e.invalid_elements &&
          Ns(As(e.invalid_elements), (e) => {
            n[e] && delete n[e];
          }),
        A("span") || S("span[!data-mce-type|*]");
      const O = N(c),
        T = N(u),
        B = N(m),
        D = N(h),
        P = N(w),
        L = N(C),
        M = N(x),
        I = N(Object.seal(p)),
        F = N(g),
        U = N(v),
        z = N(y),
        j = N(f),
        H = N(Object.seal(a)),
        $ = N(s);
      return {
        type: l,
        children: o,
        elements: n,
        getValidStyles: O,
        getValidClasses: B,
        getBlockElements: P,
        getInvalidStyles: T,
        getVoidElements: I,
        getTextBlockElements: L,
        getTextInlineElements: M,
        getBoolAttrs: D,
        getElementRule: A,
        getSelfClosingElements: F,
        getNonEmptyElements: U,
        getMoveCaretBeforeOnEnterElements: z,
        getWhitespaceElements: j,
        getSpecialElements: H,
        isValidChild: (e, t) => {
          const n = o[e.toLowerCase()];
          return !(!n || !n[t.toLowerCase()]);
        },
        isValid: (e, t) => {
          const n = A(e);
          if (n) {
            if (!t) return !0;
            {
              if (n.attributes[t]) return !0;
              const e = n.attributePatterns;
              if (e) {
                let n = e.length;
                for (; n--; ) if (e[n].pattern.test(t)) return !0;
              }
            }
          }
          return !1;
        },
        getCustomElements: $,
        addValidElements: S,
        setValidElements: _,
        addCustomElements: E,
        addValidChildren: R,
      };
    },
    Ms = (e = {}, t) => {
      const n =
          /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
        o = /\s*([^:]+):\s*([^;]+);?/g,
        r = /\s+$/,
        s = {};
      let a, i;
      t && ((a = t.getValidStyles()), (i = t.getInvalidStyles()));
      const l = "\\\" \\' \\; \\: ; : \ufeff".split(" ");
      for (let e = 0; e < l.length; e++)
        (s[l[e]] = "\ufeff" + e), (s["\ufeff" + e] = l[e]);
      const d = {
        parse: (t) => {
          const a = {};
          let i = !1;
          const l = e.url_converter,
            c = e.url_converter_scope || d,
            u = (e, t, n) => {
              const o = a[e + "-top" + t];
              if (!o) return;
              const r = a[e + "-right" + t];
              if (!r) return;
              const s = a[e + "-bottom" + t];
              if (!s) return;
              const i = a[e + "-left" + t];
              if (!i) return;
              const l = [o, r, s, i];
              let d = l.length - 1;
              for (; d-- && l[d] === l[d + 1]; );
              (d > -1 && n) ||
                ((a[e + t] = -1 === d ? l[0] : l.join(" ")),
                delete a[e + "-top" + t],
                delete a[e + "-right" + t],
                delete a[e + "-bottom" + t],
                delete a[e + "-left" + t]);
            },
            m = (e) => {
              const t = a[e];
              if (!t) return;
              const n = t.split(" ");
              let o = n.length;
              for (; o--; ) if (n[o] !== n[0]) return !1;
              return (a[e] = n[0]), !0;
            },
            f = (e) => ((i = !0), s[e]),
            g = (e, t) => (
              i && (e = e.replace(/\uFEFF[0-9]/g, (e) => s[e])),
              t || (e = e.replace(/\\([\'\";:])/g, "$1")),
              e
            ),
            p = (e) => String.fromCharCode(parseInt(e.slice(1), 16)),
            h = (e) => e.replace(/\\[0-9a-f]+/gi, p),
            b = (t, n, o, r, s, a) => {
              if ((s = s || a))
                return "'" + (s = g(s)).replace(/\'/g, "\\'") + "'";
              if (((n = g(n || o || r || "")), !e.allow_script_urls)) {
                const t = n.replace(/[\s\r\n]+/g, "");
                if (/(java|vb)script:/i.test(t)) return "";
                if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(t))
                  return "";
              }
              return (
                l && (n = l.call(c, n, "style")),
                "url('" + n.replace(/\'/g, "\\'") + "')"
              );
            };
          if (t) {
            let s;
            for (
              t = (t = t.replace(/[\u0000-\u001F]/g, ""))
                .replace(/\\[\"\';:\uFEFF]/g, f)
                .replace(/\"[^\"]+\"|\'[^\']+\'/g, (e) =>
                  e.replace(/[;:]/g, f)
                );
              (s = o.exec(t));

            ) {
              o.lastIndex = s.index + s[0].length;
              let t = s[1].replace(r, "").toLowerCase(),
                l = s[2].replace(r, "");
              if (t && l) {
                if (
                  ((t = h(t)),
                  (l = h(l)),
                  -1 !== t.indexOf("\ufeff") || -1 !== t.indexOf('"'))
                )
                  continue;
                if (
                  !e.allow_script_urls &&
                  ("behavior" === t || /expression\s*\(|\/\*|\*\//.test(l))
                )
                  continue;
                "font-weight" === t && "700" === l
                  ? (l = "bold")
                  : ("color" !== t && "background-color" !== t) ||
                    (l = l.toLowerCase()),
                  (l = l.replace(n, b)),
                  (a[t] = i ? g(l, !0) : l);
              }
            }
            u("border", "", !0),
              u("border", "-width"),
              u("border", "-color"),
              u("border", "-style"),
              u("padding", ""),
              u("margin", ""),
              "border",
              (y = "border-style"),
              (C = "border-color"),
              m((v = "border-width")) &&
                m(y) &&
                m(C) &&
                ((a.border = a[v] + " " + a[y] + " " + a[C]),
                delete a[v],
                delete a[y],
                delete a[C]),
              "medium none" === a.border && delete a.border,
              "none" === a["border-image"] && delete a["border-image"];
          }
          var v, y, C;
          return a;
        },
        serialize: (e, t) => {
          let n = "";
          const o = (t, o) => {
            const r = o[t];
            if (r)
              for (let t = 0, o = r.length; t < o; t++) {
                const o = r[t],
                  s = e[o];
                s && (n += (n.length > 0 ? " " : "") + o + ": " + s + ";");
              }
          };
          return (
            t && a
              ? (o("*", a), o(t, a))
              : fe(e, (e, o) => {
                  e &&
                    ((e, t) => {
                      if (!i || !t) return !0;
                      let n = i["*"];
                      return !((n && n[e]) || ((n = i[t]), n && n[e]));
                    })(o, t) &&
                    (n += (n.length > 0 ? " " : "") + o + ": " + e + ";");
                }),
            n
          );
        },
      };
      return d;
    },
    Is = {
      keyLocation: !0,
      layerX: !0,
      layerY: !0,
      returnValue: !0,
      webkitMovementX: !0,
      webkitMovementY: !0,
      keyIdentifier: !0,
      mozPressure: !0,
    },
    Fs = (e, t) => {
      const n = null != t ? t : {};
      for (const t in e) xe(Is, t) || (n[t] = e[t]);
      return C(e.composedPath) && (n.composedPath = () => e.composedPath()), n;
    },
    Us = (e, t, n, o) => {
      var r;
      const s = Fs(t, o);
      return (
        (s.type = e),
        y(s.target) &&
          (s.target = null !== (r = s.srcElement) && void 0 !== r ? r : n),
        ((e) =>
          y(e.preventDefault) ||
          ((e) => e instanceof Event || w(e.initEvent))(e))(t) &&
          ((s.preventDefault = () => {
            (s.defaultPrevented = !0),
              (s.isDefaultPrevented = L),
              w(t.preventDefault) && t.preventDefault();
          }),
          (s.stopPropagation = () => {
            (s.cancelBubble = !0),
              (s.isPropagationStopped = L),
              w(t.stopPropagation) && t.stopPropagation();
          }),
          (s.stopImmediatePropagation = () => {
            (s.isImmediatePropagationStopped = L), s.stopPropagation();
          }),
          ((e) => e.isDefaultPrevented === L || e.isDefaultPrevented === P)(
            s
          ) ||
            ((s.isDefaultPrevented = !0 === s.defaultPrevented ? L : P),
            (s.isPropagationStopped = !0 === s.cancelBubble ? L : P),
            (s.isImmediatePropagationStopped = P))),
        s
      );
    },
    zs = /^(?:mouse|contextmenu)|click/,
    js = (e, t, n, o) => {
      e.addEventListener(t, n, o || !1);
    },
    Hs = (e, t, n, o) => {
      e.removeEventListener(t, n, o || !1);
    },
    $s = (e, t) => {
      const n = Us(e.type, e, document, t);
      if (((e) => C(e) && zs.test(e.type))(e) && v(e.pageX) && !v(e.clientX)) {
        const t = n.target.ownerDocument || document,
          o = t.documentElement,
          r = t.body,
          s = n;
        (s.pageX =
          e.clientX +
          ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
          ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
          (s.pageY =
            e.clientY +
            ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
            ((o && o.clientTop) || (r && r.clientTop) || 0));
      }
      return n;
    },
    Vs = (e, t, n) => {
      const o = e.document,
        r = { type: "ready" };
      if (n.domLoaded) return void t(r);
      const s = () => {
        Hs(e, "DOMContentLoaded", s),
          Hs(e, "load", s),
          n.domLoaded || ((n.domLoaded = !0), t(r)),
          (e = null);
      };
      "complete" === o.readyState || ("interactive" === o.readyState && o.body)
        ? s()
        : js(e, "DOMContentLoaded", s),
        n.domLoaded || js(e, "load", s);
    };
  class qs {
    constructor() {
      (this.domLoaded = !1),
        (this.events = {}),
        (this.count = 1),
        (this.expando = "mce-data-" + (+new Date()).toString(32)),
        (this.hasFocusIn = "onfocusin" in document.documentElement),
        (this.count = 1);
    }
    bind(e, t, n, o) {
      const r = this;
      let s;
      const a = window,
        i = (e) => {
          r.executeHandlers($s(e || a.event), l);
        };
      if (!e || Ro(e) || To(e)) return n;
      let l;
      e[r.expando]
        ? (l = e[r.expando])
        : ((l = r.count++), (e[r.expando] = l), (r.events[l] = {})),
        (o = o || e);
      const d = t.split(" ");
      let c = d.length;
      for (; c--; ) {
        let t = d[c],
          u = i,
          m = !1,
          f = !1;
        "DOMContentLoaded" === t && (t = "ready"),
          r.domLoaded && "ready" === t && "complete" === e.readyState
            ? n.call(o, $s({ type: t }))
            : (r.hasFocusIn ||
                ("focusin" !== t && "focusout" !== t) ||
                ((m = !0),
                (f = "focusin" === t ? "focus" : "blur"),
                (u = (e) => {
                  const t = $s(e || a.event);
                  (t.type = "focus" === t.type ? "focusin" : "focusout"),
                    r.executeHandlers(t, l);
                })),
              (s = r.events[l][t]),
              s
                ? "ready" === t && r.domLoaded
                  ? n($s({ type: t }))
                  : s.push({ func: n, scope: o })
                : ((r.events[l][t] = s = [{ func: n, scope: o }]),
                  (s.fakeName = f),
                  (s.capture = m),
                  (s.nativeHandler = u),
                  "ready" === t ? Vs(e, u, r) : js(e, f || t, u, m)));
      }
      return (e = s = null), n;
    }
    unbind(e, t, n) {
      if (!e || Ro(e) || To(e)) return this;
      const o = e[this.expando];
      if (o) {
        let r = this.events[o];
        if (t) {
          const o = t.split(" ");
          let s = o.length;
          for (; s--; ) {
            const t = o[s],
              a = r[t];
            if (a) {
              if (n) {
                let e = a.length;
                for (; e--; )
                  if (a[e].func === n) {
                    const n = a.nativeHandler,
                      o = a.fakeName,
                      s = a.capture,
                      i = a.slice(0, e).concat(a.slice(e + 1));
                    (i.nativeHandler = n),
                      (i.fakeName = o),
                      (i.capture = s),
                      (r[t] = i);
                  }
              }
              (n && 0 !== a.length) ||
                (delete r[t],
                Hs(e, a.fakeName || t, a.nativeHandler, a.capture));
            }
          }
        } else
          fe(r, (t, n) => {
            Hs(e, t.fakeName || n, t.nativeHandler, t.capture);
          }),
            (r = {});
        for (const e in r) if (xe(r, e)) return this;
        delete this.events[o];
        try {
          delete e[this.expando];
        } catch (t) {
          e[this.expando] = null;
        }
      }
      return this;
    }
    fire(e, t, n) {
      return this.dispatch(e, t, n);
    }
    dispatch(e, t, n) {
      if (!e || Ro(e) || To(e)) return this;
      const o = $s({ type: t, target: e }, n);
      do {
        const t = e[this.expando];
        t && this.executeHandlers(o, t),
          (e =
            e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow);
      } while (e && !o.isPropagationStopped());
      return this;
    }
    clean(e) {
      if (!e || Ro(e) || To(e)) return this;
      if (
        (e[this.expando] && this.unbind(e),
        e.getElementsByTagName || (e = e.document),
        e && e.getElementsByTagName)
      ) {
        this.unbind(e);
        const t = e.getElementsByTagName("*");
        let n = t.length;
        for (; n--; ) (e = t[n]), e[this.expando] && this.unbind(e);
      }
      return this;
    }
    destroy() {
      this.events = {};
    }
    cancel(e) {
      return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
    }
    executeHandlers(e, t) {
      const n = this.events[t],
        o = n && n[e.type];
      if (o)
        for (let t = 0, n = o.length; t < n; t++) {
          const n = o[t];
          if (
            (n && !1 === n.func.call(n.scope, e) && e.preventDefault(),
            e.isImmediatePropagationStopped())
          )
            return;
        }
    }
  }
  qs.Event = new qs();
  const Ws = Tt.each,
    Ks = Tt.grep,
    Gs = "data-mce-style",
    Ys = Tt.makeMap(
      "fill-opacity font-weight line-height opacity orphans widows z-index zoom",
      " "
    ),
    Xs = (e, t, n) => {
      y(n) || "" === n ? Yt(e, t) : Vt(e, t, n);
    },
    Qs = (e) => e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()),
    Js = (e, t) => {
      let n = 0;
      if (e)
        for (
          let o = e.nodeType, r = e.previousSibling;
          r;
          r = r.previousSibling
        ) {
          const e = r.nodeType;
          (!t || !Ro(r) || (e !== o && r.data.length)) && (n++, (o = e));
        }
      return n;
    },
    Zs = (e, t) => {
      const n = Wt(t, "style"),
        o = e.serialize(e.parse(n), Lt(t));
      Xs(t, Gs, o);
    },
    ea = (e, t, n) => {
      const o = Qs(t);
      y(n) || "" === n
        ? Gn(e, o)
        : Hn(
            e,
            o,
            ((e, t) => (x(e) ? (xe(Ys, t) ? e + "" : e + "px") : e))(n, o)
          );
    },
    ta = (e, t = {}) => {
      const n = {},
        o = window,
        r = {};
      let s = 0;
      const a = Jo.forElement(mn(e), {
          contentCssCors: t.contentCssCors,
          referrerPolicy: t.referrerPolicy,
        }),
        i = [],
        l = t.schema ? t.schema : Ls({}),
        d = Ms(
          {
            url_converter: t.url_converter,
            url_converter_scope: t.url_converter_scope,
          },
          t.schema
        ),
        c = t.ownEvents ? new qs() : qs.Event,
        u = l.getBlockElements(),
        f = (t) => (t && e && m(t) ? e.getElementById(t) : t),
        g = (e) => {
          const t = f(e);
          return C(t) ? mn(t) : null;
        },
        h = (e, t, n = "") => {
          let o;
          const r = g(e);
          if (C(r) && Ft(r)) {
            const e = Y[t];
            o = e && e.get ? e.get(r.dom, t) : Wt(r, t);
          }
          return C(o) ? o : n;
        },
        b = (e) => {
          const t = f(e);
          return y(t) ? [] : t.attributes;
        },
        v = (e, n, o) => {
          T(e, (e) => {
            if (yo(e)) {
              const r = mn(e),
                s = "" === o ? null : o,
                a = Wt(r, n),
                i = Y[n];
              i && i.set ? i.set(r.dom, s, n) : Xs(r, n, s),
                a !== s &&
                  t.onSetAttrib &&
                  t.onSetAttrib({ attrElm: r.dom, attrName: n, attrValue: s });
            }
          });
        },
        x = () => t.root_element || e.body,
        k = (t, n) =>
          ((e, t, n) => {
            let o = 0,
              r = 0;
            const s = e.ownerDocument;
            if (((n = n || e), t)) {
              if (
                n === e &&
                t.getBoundingClientRect &&
                "static" === Vn(mn(e), "position")
              ) {
                const n = t.getBoundingClientRect();
                return (
                  (o =
                    n.left +
                    (s.documentElement.scrollLeft || e.scrollLeft) -
                    s.documentElement.clientLeft),
                  (r =
                    n.top +
                    (s.documentElement.scrollTop || e.scrollTop) -
                    s.documentElement.clientTop),
                  { x: o, y: r }
                );
              }
              let a = t;
              for (; a && a !== n && a.nodeType && !Vo(a, n); ) {
                const e = a;
                (o += e.offsetLeft || 0),
                  (r += e.offsetTop || 0),
                  (a = e.offsetParent);
              }
              for (a = t.parentNode; a && a !== n && a.nodeType && !Vo(a, n); )
                (o -= a.scrollLeft || 0),
                  (r -= a.scrollTop || 0),
                  (a = a.parentNode);
              r += ((e) =>
                Ho.isFirefox() && "table" === Lt(e)
                  ? $o(Nn(e))
                      .filter((e) => "caption" === Lt(e))
                      .bind((e) =>
                        $o(En(e)).map((t) => {
                          const n = t.dom.offsetTop,
                            o = e.dom.offsetTop,
                            r = e.dom.offsetHeight;
                          return n <= o ? -r : 0;
                        })
                      )
                      .getOr(0)
                  : 0)(mn(t));
            }
            return { x: o, y: r };
          })(e.body, f(t), n),
        _ = (e, t, n) => {
          const o = f(e);
          if (!y(o) && yo(o))
            return n
              ? Vn(mn(o), Qs(t))
              : ("float" ===
                  (t = t.replace(/-(\D)/g, (e, t) => t.toUpperCase())) &&
                  (t = "cssFloat"),
                o.style ? o.style[t] : void 0);
        },
        E = (e) => {
          const t = f(e);
          if (!t) return { w: 0, h: 0 };
          let n = _(t, "width"),
            o = _(t, "height");
          return (
            (n && -1 !== n.indexOf("px")) || (n = "0"),
            (o && -1 !== o.indexOf("px")) || (o = "0"),
            {
              w: parseInt(n, 10) || t.offsetWidth || t.clientWidth,
              h: parseInt(o, 10) || t.offsetHeight || t.clientHeight,
            }
          );
        },
        R = (e, t) => {
          if (!e) return !1;
          const n = p(e) ? e : [e];
          return H(n, (e) => pn(mn(e), t));
        },
        A = (e, t, n, o) => {
          const r = [];
          let s = f(e);
          o = void 0 === o;
          const a = n || ("BODY" !== x().nodeName ? x().parentNode : null);
          if (m(t))
            if ("*" === t) t = yo;
            else {
              const e = t;
              t = (t) => R(t, e);
            }
          for (; s && !(s === a || y(s.nodeType) || Bo(s) || Do(s)); ) {
            if (!t || t(s)) {
              if (!o) return [s];
              r.push(s);
            }
            s = s.parentNode;
          }
          return o ? r : null;
        },
        O = (e, t, n) => {
          let o = t;
          if (e) {
            m(t) && (o = (e) => R(e, t));
            for (let t = e[n]; t; t = t[n]) if (w(o) && o(t)) return t;
          }
          return null;
        },
        T = function (e, t, n) {
          const o = null != n ? n : this;
          if (p(e)) {
            const n = [];
            return (
              Ws(e, (e, r) => {
                const s = f(e);
                s && n.push(t.call(o, s, r));
              }),
              n
            );
          }
          {
            const n = f(e);
            return !!n && t.call(o, n);
          }
        },
        B = (e, t) => {
          T(e, (e) => {
            fe(t, (t, n) => {
              v(e, n, t);
            });
          });
        },
        D = (e, t) => {
          T(e, (e) => {
            const n = mn(e);
            ro(n, t);
          });
        },
        P = (t, n, o, r, s) =>
          T(t, (t) => {
            const a = m(n) ? e.createElement(n) : n;
            return (
              C(o) && B(a, o),
              r && (!m(r) && r.nodeType ? a.appendChild(r) : m(r) && D(a, r)),
              s ? a : t.appendChild(a)
            );
          }),
        L = (t, n, o) => P(e.createElement(t), t, n, o, !0),
        M = xs.encodeAllRaw,
        I = (e, t) =>
          T(e, (e) => {
            const n = mn(e);
            return (
              t &&
                V(Nn(n), (e) => {
                  Ut(e) && 0 === e.dom.length ? to(e) : Yn(n, e);
                }),
              to(n),
              n.dom
            );
          }),
        F = (e, t, n) => {
          T(e, (e) => {
            if (yo(e)) {
              const o = mn(e),
                r = t.split(" ");
              V(r, (e) => {
                C(n)
                  ? (n ? nn : rn)(o, e)
                  : ((e, t) => {
                      const n = Jt(e)
                        ? e.dom.classList.toggle(t)
                        : ((e, t) => (j(Zt(e), t) ? tn(e, t) : en(e, t)))(e, t);
                      on(e);
                    })(o, e);
              });
            }
          });
        },
        U = (e, t, n) =>
          T(t, (o) => {
            var r;
            const s = p(t) ? e.cloneNode(!0) : e;
            return (
              n &&
                Ws(Ks(o.childNodes), (e) => {
                  s.appendChild(e);
                }),
              null === (r = o.parentNode) ||
                void 0 === r ||
                r.replaceChild(s, o),
              o
            );
          }),
        z = (e) => {
          if (yo(e)) {
            const t =
              "a" === e.nodeName.toLowerCase() && !h(e, "href") && h(e, "id");
            if (h(e, "name") || h(e, "data-mce-bookmark") || t) return !0;
          }
          return !1;
        },
        $ = () => e.createRange(),
        q = (n, r, s, a) => {
          if (p(n)) {
            let e = n.length;
            const t = [];
            for (; e--; ) t[e] = q(n[e], r, s, a);
            return t;
          }
          return (
            !t.collect || (n !== e && n !== o) || i.push([n, r, s, a]),
            c.bind(n, r, s, a || G)
          );
        },
        W = (t, n, r) => {
          if (p(t)) {
            let e = t.length;
            const o = [];
            for (; e--; ) o[e] = W(t[e], n, r);
            return o;
          }
          if (i.length > 0 && (t === e || t === o)) {
            let e = i.length;
            for (; e--; ) {
              const [o, s, a] = i[e];
              t !== o || (n && n !== s) || (r && r !== a) || c.unbind(o, s, a);
            }
          }
          return c.unbind(t, n, r);
        },
        K = (e) => {
          if (e && yo(e)) {
            const t = e.getAttribute("data-mce-contenteditable");
            return t && "inherit" !== t
              ? t
              : "inherit" !== e.contentEditable
              ? e.contentEditable
              : null;
          }
          return null;
        },
        G = {
          doc: e,
          settings: t,
          win: o,
          files: r,
          stdMode: !0,
          boxModel: !0,
          styleSheetLoader: a,
          boundEvents: i,
          styles: d,
          schema: l,
          events: c,
          isBlock: (e) => (m(e) ? xe(u, e) : yo(e) && xe(u, e.nodeName)),
          root: null,
          clone: (e, t) => e.cloneNode(t),
          getRoot: x,
          getViewPort: (e) => {
            const t = ho(e);
            return { x: t.x, y: t.y, w: t.width, h: t.height };
          },
          getRect: (e) => {
            const t = f(e),
              n = k(t),
              o = E(t);
            return { x: n.x, y: n.y, w: o.w, h: o.h };
          },
          getSize: E,
          getParent: (e, t, n) => {
            const o = A(e, t, n, !1);
            return o && o.length > 0 ? o[0] : null;
          },
          getParents: A,
          get: f,
          getNext: (e, t) => O(e, t, "nextSibling"),
          getPrev: (e, t) => O(e, t, "previousSibling"),
          select: (n, o) => {
            var r, s;
            const a =
              null !==
                (s =
                  null !== (r = f(o)) && void 0 !== r ? r : t.root_element) &&
              void 0 !== s
                ? s
                : e;
            return w(a.querySelectorAll) ? de(a.querySelectorAll(n)) : [];
          },
          is: R,
          add: P,
          create: L,
          createHTML: (e, t, n = "") => {
            let o = "<" + e;
            for (const e in t)
              ke(t, e) && (o += " " + e + '="' + M(t[e]) + '"');
            return Ke(n) && xe(l.getVoidElements(), e)
              ? o + " />"
              : o + ">" + n + "</" + e + ">";
          },
          createFragment: (t) => {
            const n = e.createElement("div"),
              o = e.createDocumentFragment();
            let r;
            for (o.appendChild(n), t && (n.innerHTML = t); (r = n.firstChild); )
              o.appendChild(r);
            return o.removeChild(n), o;
          },
          remove: I,
          setStyle: (e, n, o) => {
            T(e, (e) => {
              const r = mn(e);
              ea(r, n, o), t.update_styles && Zs(d, r);
            });
          },
          getStyle: _,
          setStyles: (e, n) => {
            T(e, (e) => {
              const o = mn(e);
              fe(n, (e, t) => {
                ea(o, t, e);
              }),
                t.update_styles && Zs(d, o);
            });
          },
          removeAllAttribs: (e) =>
            T(e, (e) => {
              const t = e.attributes;
              for (let n = t.length - 1; n >= 0; n--)
                e.removeAttributeNode(t.item(n));
            }),
          setAttrib: v,
          setAttribs: B,
          getAttrib: h,
          getPos: k,
          parseStyle: (e) => d.parse(e),
          serializeStyle: (e, t) => d.serialize(e, t),
          addStyle: (t) => {
            if (G !== ta.DOM && e === document) {
              if (n[t]) return;
              n[t] = !0;
            }
            let o = e.getElementById("mceDefaultStyles");
            if (!o) {
              (o = e.createElement("style")),
                (o.id = "mceDefaultStyles"),
                (o.type = "text/css");
              const t = e.head;
              t.firstChild ? t.insertBefore(o, t.firstChild) : t.appendChild(o);
            }
            o.styleSheet
              ? (o.styleSheet.cssText += t)
              : o.appendChild(e.createTextNode(t));
          },
          loadCSS: (e) => {
            e || (e = ""),
              V(e.split(","), (e) => {
                (r[e] = !0), a.load(e).catch(S);
              });
          },
          addClass: (e, t) => {
            F(e, t, !0);
          },
          removeClass: (e, t) => {
            F(e, t, !1);
          },
          hasClass: (e, t) => {
            const n = g(e),
              o = t.split(" ");
            return C(n) && te(o, (e) => sn(n, e));
          },
          toggleClass: F,
          show: (e) => {
            T(e, (e) => Gn(mn(e), "display"));
          },
          hide: (e) => {
            T(e, (e) => Hn(mn(e), "display", "none"));
          },
          isHidden: (e) => {
            const t = g(e);
            return C(t) && Bt(Wn(t, "display"), "none");
          },
          uniqueId: (e) => (e || "mce_") + s++,
          setHTML: D,
          getOuterHTML: (e) => {
            const t = g(e);
            return C(t)
              ? yo(t.dom)
                ? t.dom.outerHTML
                : ((e) => {
                    const t = cn("div"),
                      n = mn(e.dom.cloneNode(!0));
                    return Jn(t, n), oo(t);
                  })(t)
              : "";
          },
          setOuterHTML: (e, t) => {
            T(e, (e) => {
              yo(e) && (e.outerHTML = t);
            });
          },
          decode: xs.decode,
          encode: M,
          insertAfter: (e, t) => {
            const n = f(t);
            return T(e, (e) => {
              const t = null == n ? void 0 : n.parentNode,
                o = null == n ? void 0 : n.nextSibling;
              return t && (o ? t.insertBefore(e, o) : t.appendChild(e)), e;
            });
          },
          replace: U,
          rename: (e, t) => {
            if (e.nodeName !== t.toUpperCase()) {
              const n = L(t);
              return (
                Ws(b(e), (t) => {
                  v(n, t.nodeName, h(e, t.nodeName));
                }),
                U(n, e, !0),
                n
              );
            }
            return e;
          },
          findCommonAncestor: (e, t) => {
            let n = e;
            for (; n; ) {
              let e = t;
              for (; e && n !== e; ) e = e.parentNode;
              if (n === e) break;
              n = n.parentNode;
            }
            return !n && e.ownerDocument ? e.ownerDocument.documentElement : n;
          },
          run: T,
          getAttribs: b,
          isEmpty: (e, t) => {
            let n = 0;
            if (z(e)) return !1;
            const o = e.firstChild;
            if (o) {
              const r = new Zo(o, e),
                s = l ? l.getWhitespaceElements() : {},
                a = t || (l ? l.getNonEmptyElements() : null);
              let i = o;
              do {
                if (yo(i)) {
                  const e = i.getAttribute("data-mce-bogus");
                  if (e) {
                    i = r.next("all" === e);
                    continue;
                  }
                  const t = i.nodeName.toLowerCase();
                  if (a && a[t]) {
                    if ("br" === t) {
                      n++, (i = r.next());
                      continue;
                    }
                    return !1;
                  }
                  if (z(i)) return !1;
                }
                if (To(i)) return !1;
                if (Ro(i) && !Jr(i.data)) return !1;
                if (
                  Ro(i) &&
                  i.parentNode &&
                  s[i.parentNode.nodeName] &&
                  Jr(i.data)
                )
                  return !1;
                i = r.next();
              } while (i);
            }
            return n <= 1;
          },
          createRng: $,
          nodeIndex: Js,
          split: (e, t, n) => {
            let o,
              r,
              s = $();
            if (e && t && e.parentNode && t.parentNode) {
              const a = e.parentNode;
              return (
                s.setStart(a, Js(e)),
                s.setEnd(t.parentNode, Js(t)),
                (o = s.extractContents()),
                (s = $()),
                s.setStart(t.parentNode, Js(t) + 1),
                s.setEnd(a, Js(e) + 1),
                (r = s.extractContents()),
                a.insertBefore(ls(G, o), e),
                n ? a.insertBefore(n, e) : a.insertBefore(t, e),
                a.insertBefore(ls(G, r), e),
                I(e),
                n || t
              );
            }
          },
          bind: q,
          unbind: W,
          fire: (e, t, n) => c.dispatch(e, t, n),
          dispatch: (e, t, n) => c.dispatch(e, t, n),
          getContentEditable: K,
          getContentEditableParent: (e) => {
            const t = x();
            let n = null;
            for (
              let o = e;
              o && o !== t && ((n = K(o)), null === n);
              o = o.parentNode
            );
            return n;
          },
          destroy: () => {
            if (i.length > 0) {
              let e = i.length;
              for (; e--; ) {
                const [t, n, o] = i[e];
                c.unbind(t, n, o);
              }
            }
            fe(r, (e, t) => {
              a.unload(t), delete r[t];
            });
          },
          isChildOf: (e, t) => e === t || t.contains(e),
          dumpRng: (e) =>
            "startContainer: " +
            e.startContainer.nodeName +
            ", startOffset: " +
            e.startOffset +
            ", endContainer: " +
            e.endContainer.nodeName +
            ", endOffset: " +
            e.endOffset,
        },
        Y = ((e, t, n) => {
          const o = t.keep_values,
            r = {
              set: (e, o, r) => {
                const s = mn(e);
                w(t.url_converter) &&
                  C(o) &&
                  (o = t.url_converter.call(
                    t.url_converter_scope || n(),
                    String(o),
                    r,
                    e
                  )),
                  Xs(s, "data-mce-" + r, o),
                  Xs(s, r, o);
              },
              get: (e, t) => {
                const n = mn(e);
                return Wt(n, "data-mce-" + t) || Wt(n, t);
              },
            },
            s = {
              style: {
                set: (t, n) => {
                  const r = mn(t);
                  o && Xs(r, Gs, n), Yt(r, "style"), m(n) && $n(r, e.parse(n));
                },
                get: (t) => {
                  const n = mn(t),
                    o = Wt(n, Gs) || Wt(n, "style");
                  return e.serialize(e.parse(o), Lt(n));
                },
              },
            };
          return o && (s.href = s.src = r), s;
        })(d, t, N(G));
      return G;
    };
  (ta.DOM = ta(document)), (ta.nodeIndex = Js);
  const na = ta.DOM;
  class oa {
    constructor(e = {}) {
      (this.states = {}),
        (this.queue = []),
        (this.scriptLoadedCallbacks = {}),
        (this.queueLoadedCallbacks = []),
        (this.loading = !1),
        (this.settings = e);
    }
    _setReferrerPolicy(e) {
      this.settings.referrerPolicy = e;
    }
    loadScript(e) {
      return new Promise((t, n) => {
        const o = na;
        let r;
        const s = () => {
            o.remove(a), r && (r.onerror = r.onload = r = null);
          },
          a = o.uniqueId();
        (r = document.createElement("script")),
          (r.id = a),
          (r.type = "text/javascript"),
          (r.src = Tt._addCacheSuffix(e)),
          this.settings.referrerPolicy &&
            o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy),
          (r.onload = () => {
            s(), t();
          }),
          (r.onerror = () => {
            s(), n("Failed to load script: " + e);
          }),
          (
            document.getElementsByTagName("head")[0] || document.body
          ).appendChild(r);
      });
    }
    isDone(e) {
      return 2 === this.states[e];
    }
    markDone(e) {
      this.states[e] = 2;
    }
    add(e) {
      const t = this;
      return (
        t.queue.push(e),
        void 0 === t.states[e] && (t.states[e] = 0),
        new Promise((n, o) => {
          t.scriptLoadedCallbacks[e] || (t.scriptLoadedCallbacks[e] = []),
            t.scriptLoadedCallbacks[e].push({ resolve: n, reject: o });
        })
      );
    }
    load(e) {
      return this.add(e);
    }
    remove(e) {
      delete this.states[e], delete this.scriptLoadedCallbacks[e];
    }
    loadQueue() {
      const e = this.queue;
      return (this.queue = []), this.loadScripts(e);
    }
    loadScripts(e) {
      const t = this,
        n = (e, n) => {
          we(t.scriptLoadedCallbacks, n).each((t) => {
            V(t, (t) => t[e](n));
          }),
            delete t.scriptLoadedCallbacks[n];
        },
        o = (e) => {
          const t = K(e, (e) => "rejected" === e.status);
          return t.length > 0
            ? Promise.reject(ee(t, ({ reason: e }) => (p(e) ? e : [e])))
            : Promise.resolve();
        },
        r = (e) =>
          Promise.allSettled(
            $(e, (e) =>
              2 === t.states[e]
                ? (n("resolve", e), Promise.resolve())
                : 3 === t.states[e]
                ? (n("reject", e), Promise.reject(e))
                : ((t.states[e] = 1),
                  t.loadScript(e).then(
                    () => {
                      (t.states[e] = 2), n("resolve", e);
                      const s = t.queue;
                      return s.length > 0
                        ? ((t.queue = []), r(s).then(o))
                        : Promise.resolve();
                    },
                    () => ((t.states[e] = 3), n("reject", e), Promise.reject(e))
                  ))
            )
          ),
        s = (e) => (
          (t.loading = !0),
          r(e).then((e) => {
            t.loading = !1;
            const n = t.queueLoadedCallbacks.shift();
            return M.from(n).each(D), o(e);
          })
        ),
        a = Se(e);
      return t.loading
        ? new Promise((e, n) => {
            t.queueLoadedCallbacks.push(() => s(a).then(e, n));
          })
        : s(a);
    }
  }
  oa.ScriptLoader = new oa();
  const ra = (e) => {
      let t = e;
      return {
        get: () => t,
        set: (e) => {
          t = e;
        },
      };
    },
    sa = {},
    aa = ra("en"),
    ia = () => we(sa, aa.get()),
    la = {
      getData: () => ge(sa, (e) => ({ ...e })),
      setCode: (e) => {
        e && aa.set(e);
      },
      getCode: () => aa.get(),
      add: (e, t) => {
        let n = sa[e];
        n || (sa[e] = n = {}),
          fe(t, (e, t) => {
            n[t.toLowerCase()] = e;
          });
      },
      translate: (e) => {
        const t = ia().getOr({}),
          n = (e) =>
            w(e) ? Object.prototype.toString.call(e) : o(e) ? "" : "" + e,
          o = (e) => "" === e || null == e,
          r = (e) => {
            const o = n(e);
            return we(t, o.toLowerCase()).map(n).getOr(o);
          },
          s = (e) => e.replace(/{context:\w+}$/, "");
        if (o(e)) return "";
        if (f((a = e)) && xe(a, "raw")) return n(e.raw);
        var a;
        if (((e) => p(e) && e.length > 1)(e)) {
          const t = e.slice(1);
          return s(
            r(e[0]).replace(/\{([0-9]+)\}/g, (e, o) => (xe(t, o) ? n(t[o]) : e))
          );
        }
        return s(r(e));
      },
      isRtl: () =>
        ia()
          .bind((e) => we(e, "_dir"))
          .exists((e) => "rtl" === e),
      hasCode: (e) => xe(sa, e),
    },
    da = () => {
      const e = [],
        t = {},
        n = {},
        o = [],
        r = (e, t) => {
          const n = K(o, (n) => n.name === e && n.state === t);
          V(n, (e) => e.resolve());
        },
        s = (e) => xe(t, e),
        a = (e, n) => {
          const o = la.getCode();
          !o ||
            (n && -1 === ("," + (n || "") + ",").indexOf("," + o + ",")) ||
            oa.ScriptLoader.add(t[e] + "/langs/" + o + ".js");
        },
        i = (e, t = "added") =>
          ("added" === t && ((e) => xe(n, e))(e)) || ("loaded" === t && s(e))
            ? Promise.resolve()
            : new Promise((n) => {
                o.push({ name: e, state: t, resolve: n });
              });
      return {
        items: e,
        urls: t,
        lookup: n,
        get: (e) => {
          if (n[e]) return n[e].instance;
        },
        requireLangPack: (e, t) => {
          !1 !== da.languageLoad &&
            (s(e) ? a(e, t) : i(e, "loaded").then(() => a(e, t)));
        },
        add: (t, o) => (e.push(o), (n[t] = { instance: o }), r(t, "added"), o),
        remove: (e) => {
          delete t[e], delete n[e];
        },
        createUrl: (e, t) =>
          m(t)
            ? m(e)
              ? { prefix: "", resource: t, suffix: "" }
              : { prefix: e.prefix, resource: t, suffix: e.suffix }
            : t,
        load: (e, o) => {
          if (t[e]) return Promise.resolve();
          let s = m(o) ? o : o.prefix + o.resource + o.suffix;
          0 !== s.indexOf("/") &&
            -1 === s.indexOf("://") &&
            (s = da.baseURL + "/" + s),
            (t[e] = s.substring(0, s.lastIndexOf("/")));
          const a = () => (r(e, "loaded"), Promise.resolve());
          return n[e] ? a() : oa.ScriptLoader.add(s).then(a);
        },
        waitFor: i,
      };
    };
  (da.languageLoad = !0),
    (da.baseURL = ""),
    (da.PluginManager = da()),
    (da.ThemeManager = da()),
    (da.ModelManager = da());
  const ca = (e) => {
      const t = ra(M.none()),
        n = () => t.get().each((e) => clearInterval(e));
      return {
        clear: () => {
          n(), t.set(M.none());
        },
        isSet: () => t.get().isSome(),
        get: () => t.get(),
        set: (o) => {
          n(), t.set(M.some(setInterval(o, e)));
        },
      };
    },
    ua = () => {
      const e = ((e) => {
        const t = ra(M.none()),
          n = () => t.get().each(e);
        return {
          clear: () => {
            n(), t.set(M.none());
          },
          isSet: () => t.get().isSome(),
          get: () => t.get(),
          set: (e) => {
            n(), t.set(M.some(e));
          },
        };
      })(S);
      return { ...e, on: (t) => e.get().each(t) };
    },
    ma = (e, t) => {
      let n = null;
      return {
        cancel: () => {
          h(n) || (clearTimeout(n), (n = null));
        },
        throttle: (...o) => {
          h(n) &&
            (n = setTimeout(() => {
              (n = null), e.apply(null, o);
            }, t));
        },
      };
    },
    fa = (e, t) => {
      let n = null;
      const o = () => {
        h(n) || (clearTimeout(n), (n = null));
      };
      return {
        cancel: o,
        throttle: (...r) => {
          o(),
            (n = setTimeout(() => {
              (n = null), e.apply(null, r);
            }, t));
        },
      };
    },
    ga = N("mce-annotation"),
    pa = N("data-mce-annotation"),
    ha = N("data-mce-annotation-uid"),
    ba = N("data-mce-annotation-active"),
    va = N("data-mce-annotation-classes"),
    ya = N("data-mce-annotation-attrs"),
    Ca = (e) => (t) => bn(t, e),
    wa = (e, t) => {
      const n = e.selection.getRng(),
        o = mn(n.startContainer),
        r = mn(e.getBody()),
        s = t.fold(
          () => "." + ga(),
          (e) => `[${pa()}="${e}"]`
        ),
        a = Rn(o, n.startOffset).getOr(o);
      return Xo(a, s, Ca(r)).bind((t) =>
        Kt(t, `${ha()}`).bind((n) =>
          Kt(t, `${pa()}`).map((t) => {
            const o = ka(e, n);
            return { uid: n, name: t, elements: o };
          })
        )
      );
    },
    xa = (e, t) =>
      Gt(e, "data-mce-bogus") || fr(e, '[data-mce-bogus="all"]', Ca(t)),
    ka = (e, t) => {
      const n = mn(e.getBody()),
        o = vr(n, `[${ha()}="${t}"]`);
      return K(o, (e) => !xa(e, n));
    },
    Sa = (e, t) => {
      const n = mn(e.getBody()),
        o = vr(n, `[${pa()}="${t}"]`),
        r = {};
      return (
        V(o, (e) => {
          if (!xa(e, n)) {
            const t = Wt(e, ha()),
              n = we(r, t).getOr([]);
            r[t] = n.concat([e]);
          }
        }),
        r
      );
    };
  let _a = 0;
  const Ea = (e) => {
      const t = new Date().getTime(),
        n = Math.floor(1e9 * Math.random());
      return _a++, e + "_" + n + _a + String(t);
    },
    Na = (e, t) => mn(e.dom.cloneNode(t)),
    Ra = (e) => Na(e, !1),
    Aa = (e) => Na(e, !0),
    Oa = (e, t, n = P) => {
      const o = new Zo(e, t),
        r = (e) => {
          let t;
          do {
            t = o[e]();
          } while (t && !Ro(t) && !n(t));
          return M.from(t).filter(Ro);
        };
      return {
        current: () => M.from(o.current()).filter(Ro),
        next: () => r("next"),
        prev: () => r("prev"),
        prev2: () => r("prev2"),
      };
    },
    Ta = (e, t) => {
      const n = t || ((t) => e.isBlock(t) || Po(t) || Io(t)),
        o = (e, t, n, r) => {
          if (Ro(e)) {
            const n = r(e, t, e.data);
            if (-1 !== n) return M.some({ container: e, offset: n });
          }
          return n().bind((e) => o(e.container, e.offset, n, r));
        };
      return {
        backwards: (t, r, s, a) => {
          const i = Oa(t, null != a ? a : e.getRoot(), n);
          return o(
            t,
            r,
            () => i.prev().map((e) => ({ container: e, offset: e.length })),
            s
          ).getOrNull();
        },
        forwards: (t, r, s, a) => {
          const i = Oa(t, null != a ? a : e.getRoot(), n);
          return o(
            t,
            r,
            () => i.next().map((e) => ({ container: e, offset: 0 })),
            s
          ).getOrNull();
        },
      };
    },
    Ba = Math.round,
    Da = (e) =>
      e
        ? {
            left: Ba(e.left),
            top: Ba(e.top),
            bottom: Ba(e.bottom),
            right: Ba(e.right),
            width: Ba(e.width),
            height: Ba(e.height),
          }
        : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 },
    Pa = (e, t) => (
      (e = Da(e)),
      t || (e.left = e.left + e.width),
      (e.right = e.left),
      (e.width = 0),
      e
    ),
    La = (e, t, n) => e >= 0 && e <= Math.min(t.height, n.height) / 2,
    Ma = (e, t) => {
      const n = Math.min(t.height / 2, e.height / 2);
      return (
        e.bottom - n < t.top ||
        (!(e.top > t.bottom) && La(t.top - e.bottom, e, t))
      );
    },
    Ia = (e, t) =>
      e.top > t.bottom || (!(e.bottom < t.top) && La(t.bottom - e.top, e, t)),
    Fa = (e, t, n) => {
      const o = Math.max(Math.min(t, e.left + e.width), e.left),
        r = Math.max(Math.min(n, e.top + e.height), e.top);
      return Math.sqrt((t - o) * (t - o) + (n - r) * (n - r));
    },
    Ua = (e) => {
      const t = e.startContainer,
        n = e.startOffset;
      return t === e.endContainer && t.hasChildNodes() && e.endOffset === n + 1
        ? t.childNodes[n]
        : null;
    },
    za = (e, t) => {
      if (yo(e) && e.hasChildNodes()) {
        const n = e.childNodes,
          o = ((e, t, n) => Math.min(Math.max(e, 0), n))(t, 0, n.length - 1);
        return n[o];
      }
      return e;
    },
    ja = new RegExp(
      "[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"
    ),
    Ha = (e) => m(e) && e.charCodeAt(0) >= 768 && ja.test(e),
    $a = yo,
    Va = Gr,
    qa = xo("display", "block table"),
    Wa = xo("float", "left right"),
    Ka = (
      (...e) =>
      (t) => {
        for (let n = 0; n < e.length; n++) if (!e[n](t)) return !1;
        return !0;
      }
    )($a, Va, T(Wa)),
    Ga = T(xo("white-space", "pre pre-line pre-wrap")),
    Ya = Ro,
    Xa = Po,
    Qa = ta.nodeIndex,
    Ja = (e, t) => (t < 0 && yo(e) && e.hasChildNodes() ? void 0 : za(e, t)),
    Za = (e) => (e ? e.createRange() : ta.DOM.createRng()),
    ei = (e) => m(e) && /[\r\n\t ]/.test(e),
    ti = (e) => !!e.setStart && !!e.setEnd,
    ni = (e) => {
      const t = e.startContainer,
        n = e.startOffset;
      if (ei(e.toString()) && Ga(t.parentNode) && Ro(t)) {
        const e = t.data;
        if (ei(e[n - 1]) || ei(e[n + 1])) return !0;
      }
      return !1;
    },
    oi = (e) => 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom,
    ri = (e) => {
      var t;
      let n;
      const o = e.getClientRects();
      return (
        (n = o.length > 0 ? Da(o[0]) : Da(e.getBoundingClientRect())),
        !ti(e) && Xa(e) && oi(n)
          ? ((e) => {
              const t = e.ownerDocument,
                n = Za(t),
                o = t.createTextNode(pr),
                r = e.parentNode;
              r.insertBefore(o, e), n.setStart(o, 0), n.setEnd(o, 1);
              const s = Da(n.getBoundingClientRect());
              return r.removeChild(o), s;
            })(e)
          : oi(n) &&
            ti(e) &&
            null !==
              (t = ((e) => {
                const t = e.startContainer,
                  n = e.endContainer,
                  o = e.startOffset,
                  r = e.endOffset;
                if (t === n && Ro(n) && 0 === o && 1 === r) {
                  const t = e.cloneRange();
                  return t.setEndAfter(n), ri(t);
                }
                return null;
              })(e)) &&
            void 0 !== t
          ? t
          : n
      );
    },
    si = (e, t) => {
      const n = Pa(e, t);
      return (n.width = 1), (n.right = n.left + 1), n;
    },
    ai = (e, t, n) => {
      const o = () => (
        n ||
          (n = ((e) => {
            const t = [],
              n = (e) => {
                var n, o;
                0 !== e.height &&
                  ((t.length > 0 &&
                    ((n = e),
                    (o = t[t.length - 1]),
                    n.left === o.left &&
                      n.top === o.top &&
                      n.bottom === o.bottom &&
                      n.right === o.right)) ||
                    t.push(e));
              },
              o = (e, t) => {
                const o = Za(e.ownerDocument);
                if (t < e.data.length) {
                  if (Ha(e.data[t])) return;
                  if (
                    Ha(e.data[t - 1]) &&
                    (o.setStart(e, t), o.setEnd(e, t + 1), !ni(o))
                  )
                    return void n(si(ri(o), !1));
                }
                t > 0 &&
                  (o.setStart(e, t - 1),
                  o.setEnd(e, t),
                  ni(o) || n(si(ri(o), !1))),
                  t < e.data.length &&
                    (o.setStart(e, t),
                    o.setEnd(e, t + 1),
                    ni(o) || n(si(ri(o), !0)));
              },
              r = e.container(),
              s = e.offset();
            if (Ya(r)) return o(r, s), t;
            if ($a(r))
              if (e.isAtEnd()) {
                const e = Ja(r, s);
                Ya(e) && o(e, e.data.length),
                  Ka(e) && !Xa(e) && n(si(ri(e), !1));
              } else {
                const a = Ja(r, s);
                if ((Ya(a) && o(a, 0), Ka(a) && e.isAtEnd()))
                  return n(si(ri(a), !1)), t;
                const i = Ja(e.container(), e.offset() - 1);
                Ka(i) &&
                  !Xa(i) &&
                  (qa(i) || qa(a) || !Ka(a)) &&
                  n(si(ri(i), !1)),
                  Ka(a) && n(si(ri(a), !0));
              }
            return t;
          })(ai(e, t))),
        n
      );
      return {
        container: N(e),
        offset: N(t),
        toRange: () => {
          const n = Za(e.ownerDocument);
          return n.setStart(e, t), n.setEnd(e, t), n;
        },
        getClientRects: o,
        isVisible: () => o().length > 0,
        isAtStart: () => (Ya(e), 0 === t),
        isAtEnd: () => (Ya(e) ? t >= e.data.length : t >= e.childNodes.length),
        isEqual: (n) => n && e === n.container() && t === n.offset(),
        getNode: (n) => Ja(e, n ? t - 1 : t),
      };
    };
  (ai.fromRangeStart = (e) => ai(e.startContainer, e.startOffset)),
    (ai.fromRangeEnd = (e) => ai(e.endContainer, e.endOffset)),
    (ai.after = (e) => ai(e.parentNode, Qa(e) + 1)),
    (ai.before = (e) => ai(e.parentNode, Qa(e))),
    (ai.isAbove = (e, t) =>
      Dt(ie(t.getClientRects()), le(e.getClientRects()), Ma).getOr(!1)),
    (ai.isBelow = (e, t) =>
      Dt(le(t.getClientRects()), ie(e.getClientRects()), Ia).getOr(!1)),
    (ai.isAtStart = (e) => !!e && e.isAtStart()),
    (ai.isAtEnd = (e) => !!e && e.isAtEnd()),
    (ai.isTextPosition = (e) => !!e && Ro(e.container())),
    (ai.isElementPosition = (e) => !ai.isTextPosition(e));
  const ii = (e, t) => {
      Ro(t) && 0 === t.data.length && e.remove(t);
    },
    li = (e, t, n) => {
      Do(n)
        ? ((e, t, n) => {
            const o = M.from(n.firstChild),
              r = M.from(n.lastChild);
            t.insertNode(n),
              o.each((t) => ii(e, t.previousSibling)),
              r.each((t) => ii(e, t.nextSibling));
          })(e, t, n)
        : ((e, t, n) => {
            t.insertNode(n), ii(e, n.previousSibling), ii(e, n.nextSibling);
          })(e, t, n);
    },
    di = Ro,
    ci = So,
    ui = ta.nodeIndex,
    mi = (e) => {
      const t = e.parentNode;
      return ci(t) ? mi(t) : t;
    },
    fi = (e) =>
      e
        ? Oe(
            e.childNodes,
            (e, t) => (
              ci(t) && "BR" !== t.nodeName ? (e = e.concat(fi(t))) : e.push(t),
              e
            ),
            []
          )
        : [],
    gi = (e) => (t) => e === t,
    pi = (e) =>
      (di(e) ? "text()" : e.nodeName.toLowerCase()) +
      "[" +
      ((e) => {
        let t, n;
        (t = fi(mi(e))), (n = Te(t, gi(e), e)), (t = t.slice(0, n + 1));
        const o = Oe(t, (e, n, o) => (di(n) && di(t[o - 1]) && e++, e), 0);
        return (t = Ae(t, wo([e.nodeName]))), (n = Te(t, gi(e), e)), n - o;
      })(e) +
      "]",
    hi = (e, t) => {
      let n,
        o = [],
        r = t.container(),
        s = t.offset();
      if (di(r))
        n = ((e, t) => {
          let n = e;
          for (; (n = n.previousSibling) && di(n); ) t += n.data.length;
          return t;
        })(r, s);
      else {
        const e = r.childNodes;
        s >= e.length ? ((n = "after"), (s = e.length - 1)) : (n = "before"),
          (r = e[s]);
      }
      o.push(pi(r));
      let a = ((e, t, n) => {
        const o = [];
        for (let n = t.parentNode; n && n !== e; n = n.parentNode) o.push(n);
        return o;
      })(e, r);
      return (
        (a = Ae(a, T(So))),
        (o = o.concat(Re(a, (e) => pi(e)))),
        o.reverse().join("/") + "," + n
      );
    },
    bi = (e, t) => {
      if (!t) return null;
      const n = t.split(","),
        o = n[0].split("/"),
        r = n.length > 1 ? n[1] : "before",
        s = Oe(
          o,
          (e, t) => {
            const n = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
            return n
              ? ("text()" === n[1] && (n[1] = "#text"),
                ((e, t, n) => {
                  let o = fi(e);
                  return (
                    (o = Ae(o, (e, t) => !di(e) || !di(o[t - 1]))),
                    (o = Ae(o, wo([t]))),
                    o[n]
                  );
                })(e, n[1], parseInt(n[2], 10)))
              : null;
          },
          e
        );
      if (!s) return null;
      if (!di(s) && s.parentNode) {
        let e;
        return (e = "after" === r ? ui(s) + 1 : ui(s)), ai(s.parentNode, e);
      }
      return ((e, t) => {
        let n = e,
          o = 0;
        for (; di(n); ) {
          const r = n.data.length;
          if (t >= o && t <= o + r) {
            (e = n), (t -= o);
            break;
          }
          if (!di(n.nextSibling)) {
            (e = n), (t = r);
            break;
          }
          (o += r), (n = n.nextSibling);
        }
        return di(e) && t > e.data.length && (t = e.data.length), ai(e, t);
      })(s, parseInt(r, 10));
    },
    vi = Io,
    yi = (e, t, n, o, r) => {
      const s = r ? o.startContainer : o.endContainer;
      let a = r ? o.startOffset : o.endOffset;
      const i = [],
        l = e.getRoot();
      if (Ro(s))
        i.push(
          n
            ? ((e, t, n) => {
                let o = e(t.data.slice(0, n)).length;
                for (
                  let n = t.previousSibling;
                  n && Ro(n);
                  n = n.previousSibling
                )
                  o += e(n.data).length;
                return o;
              })(t, s, a)
            : a
        );
      else {
        let t = 0;
        const o = s.childNodes;
        a >= o.length && o.length && ((t = 1), (a = Math.max(0, o.length - 1))),
          i.push(e.nodeIndex(o[a], n) + t);
      }
      for (let t = s; t && t !== l; t = t.parentNode) i.push(e.nodeIndex(t, n));
      return i;
    },
    Ci = (e, t, n) => {
      let o = 0;
      return (
        Tt.each(e.select(t), (e) =>
          "all" === e.getAttribute("data-mce-bogus")
            ? void 0
            : e !== n && void o++
        ),
        o
      );
    },
    wi = (e, t) => {
      let n = t ? e.startContainer : e.endContainer,
        o = t ? e.startOffset : e.endOffset;
      if (yo(n) && "TR" === n.nodeName) {
        const r = n.childNodes;
        (n = r[Math.min(t ? o : o - 1, r.length - 1)]),
          n &&
            ((o = t ? 0 : n.childNodes.length),
            t ? e.setStart(n, o) : e.setEnd(n, o));
      }
    },
    xi = (e) => (wi(e, !0), wi(e, !1), e),
    ki = (e, t) => {
      if (yo(e) && ((e = za(e, t)), vi(e))) return e;
      if (Br(e)) {
        Ro(e) && Or(e) && (e = e.parentNode);
        let t = e.previousSibling;
        if (vi(t)) return t;
        if (((t = e.nextSibling), vi(t))) return t;
      }
    },
    Si = (e, t, n) => {
      const o = n.getNode(),
        r = n.getRng();
      if ("IMG" === o.nodeName || vi(o)) {
        const e = o.nodeName;
        return { name: e, index: Ci(n.dom, e, o) };
      }
      const s = ((e) =>
        ki(e.startContainer, e.startOffset) || ki(e.endContainer, e.endOffset))(
        r
      );
      if (s) {
        const e = s.tagName;
        return { name: e, index: Ci(n.dom, e, s) };
      }
      return ((e, t, n, o) => {
        const r = t.dom,
          s = yi(r, e, n, o, !0),
          a = t.isForward(),
          i = Ur(o) ? { isFakeCaret: !0 } : {};
        return t.isCollapsed()
          ? { start: s, forward: a, ...i }
          : { start: s, end: yi(r, e, n, o, !1), forward: a, ...i };
      })(e, n, t, r);
    },
    _i = (e, t, n) => {
      const o = {
        "data-mce-type": "bookmark",
        id: t,
        style: "overflow:hidden;line-height:0px",
      };
      return n ? e.create("span", o, "&#xFEFF;") : e.create("span", o);
    },
    Ei = (e, t) => {
      const n = e.dom;
      let o = e.getRng();
      const r = n.uniqueId(),
        s = e.isCollapsed(),
        a = e.getNode(),
        i = a.nodeName,
        l = e.isForward();
      if ("IMG" === i) return { name: i, index: Ci(n, i, a) };
      const d = xi(o.cloneRange());
      if (!s) {
        d.collapse(!1);
        const e = _i(n, r + "_end", t);
        li(n, d, e);
      }
      (o = xi(o)), o.collapse(!0);
      const c = _i(n, r + "_start", t);
      return (
        li(n, o, c),
        e.moveToBookmark({ id: r, keep: !0, forward: l }),
        { id: r, forward: l }
      );
    },
    Ni = O(Si, R, !0),
    Ri = (e) => {
      const t = (t) => t(e),
        n = N(e),
        o = () => r,
        r = {
          tag: !0,
          inner: e,
          fold: (t, n) => n(e),
          isValue: L,
          isError: P,
          map: (t) => Oi.value(t(e)),
          mapError: o,
          bind: t,
          exists: t,
          forall: t,
          getOr: n,
          or: o,
          getOrThunk: n,
          orThunk: o,
          getOrDie: n,
          each: (t) => {
            t(e);
          },
          toOptional: () => M.some(e),
        };
      return r;
    },
    Ai = (e) => {
      const t = () => n,
        n = {
          tag: !1,
          inner: e,
          fold: (t, n) => t(e),
          isValue: P,
          isError: L,
          map: t,
          mapError: (t) => Oi.error(t(e)),
          bind: t,
          exists: P,
          forall: L,
          getOr: R,
          or: R,
          getOrThunk: B,
          orThunk: B,
          getOrDie:
            ((o = String(e)),
            () => {
              throw new Error(o);
            }),
          each: S,
          toOptional: M.none,
        };
      var o;
      return n;
    },
    Oi = {
      value: Ri,
      error: Ai,
      fromOption: (e, t) => e.fold(() => Ai(t), Ri),
    },
    Ti = (e) => {
      if (!p(e)) throw new Error("cases must be an array");
      if (0 === e.length) throw new Error("there must be at least one case");
      const t = [],
        n = {};
      return (
        V(e, (o, r) => {
          const s = ue(o);
          if (1 !== s.length) throw new Error("one and only one name per case");
          const a = s[0],
            i = o[a];
          if (void 0 !== n[a]) throw new Error("duplicate key detected:" + a);
          if ("cata" === a)
            throw new Error("cannot have a case named cata (sorry)");
          if (!p(i)) throw new Error("case arguments must be an array");
          t.push(a),
            (n[a] = (...n) => {
              const o = n.length;
              if (o !== i.length)
                throw new Error(
                  "Wrong number of arguments to case " +
                    a +
                    ". Expected " +
                    i.length +
                    " (" +
                    i +
                    "), got " +
                    o
                );
              return {
                fold: (...t) => {
                  if (t.length !== e.length)
                    throw new Error(
                      "Wrong number of arguments to fold. Expected " +
                        e.length +
                        ", got " +
                        t.length
                    );
                  return t[r].apply(null, n);
                },
                match: (e) => {
                  const o = ue(e);
                  if (t.length !== o.length)
                    throw new Error(
                      "Wrong number of arguments to match. Expected: " +
                        t.join(",") +
                        "\nActual: " +
                        o.join(",")
                    );
                  if (!te(t, (e) => j(o, e)))
                    throw new Error(
                      "Not all branches were specified when using match. Specified: " +
                        o.join(", ") +
                        "\nRequired: " +
                        t.join(", ")
                    );
                  return e[a].apply(null, n);
                },
                log: (e) => {
                  console.log(e, {
                    constructors: t,
                    constructor: a,
                    params: n,
                  });
                },
              };
            });
        }),
        n
      );
    };
  Ti([
    { bothErrors: ["error1", "error2"] },
    { firstError: ["error1", "value2"] },
    { secondError: ["value1", "error2"] },
    { bothValues: ["value1", "value2"] },
  ]);
  const Bi = (e) => "inline-command" === e.type || "inline-format" === e.type,
    Di = (e) => "block-command" === e.type || "block-format" === e.type,
    Pi = (e) => {
      const t = (t) => Oi.error({ message: t, pattern: e }),
        n = (n, o, r) => {
          if (void 0 !== e.format) {
            let r;
            if (p(e.format)) {
              if (!te(e.format, m))
                return t(
                  n + " pattern has non-string items in the `format` array"
                );
              r = e.format;
            } else {
              if (!m(e.format))
                return t(n + " pattern has non-string `format` parameter");
              r = [e.format];
            }
            return Oi.value(o(r));
          }
          return void 0 !== e.cmd
            ? m(e.cmd)
              ? Oi.value(r(e.cmd, e.value))
              : t(n + " pattern has non-string `cmd` parameter")
            : t(n + " pattern is missing both `format` and `cmd` parameters");
        };
      if (!f(e)) return t("Raw pattern is not an object");
      if (!m(e.start)) return t("Raw pattern is missing `start` parameter");
      if (void 0 !== e.end) {
        if (!m(e.end))
          return t("Inline pattern has non-string `end` parameter");
        if (0 === e.start.length && 0 === e.end.length)
          return t("Inline pattern has empty `start` and `end` parameters");
        let o = e.start,
          r = e.end;
        return (
          0 === r.length && ((r = o), (o = "")),
          n(
            "Inline",
            (e) => ({ type: "inline-format", start: o, end: r, format: e }),
            (e, t) => ({
              type: "inline-command",
              start: o,
              end: r,
              cmd: e,
              value: t,
            })
          )
        );
      }
      return void 0 !== e.replacement
        ? m(e.replacement)
          ? 0 === e.start.length
            ? t("Replacement pattern has empty `start` parameter")
            : Oi.value({
                type: "inline-command",
                start: "",
                end: e.start,
                cmd: "mceInsertContent",
                value: e.replacement,
              })
          : t("Replacement pattern has non-string `replacement` parameter")
        : 0 === e.start.length
        ? t("Block pattern has empty `start` parameter")
        : n(
            "Block",
            (t) => ({ type: "block-format", start: e.start, format: t[0] }),
            (t, n) => ({
              type: "block-command",
              start: e.start,
              cmd: t,
              value: n,
            })
          );
    },
    Li = (e) => K(e, Di),
    Mi = (e) => K(e, Bi),
    Ii = (e) => {
      const t = ((e) => {
        const t = [],
          n = [];
        return (
          V(e, (e) => {
            e.fold(
              (e) => {
                t.push(e);
              },
              (e) => {
                n.push(e);
              }
            );
          }),
          { errors: t, values: n }
        );
      })($(e, Pi));
      return V(t.errors, (e) => console.error(e.message, e.pattern)), t.values;
    },
    Fi = Ct().deviceType,
    Ui = Fi.isTouch(),
    zi = ta.DOM,
    ji = (e) => u(e, RegExp),
    Hi = (e) => (t) => t.options.get(e),
    $i = (e) => m(e) || f(e),
    Vi =
      (e, t = "") =>
      (n) => {
        const o = m(n);
        if (o) {
          if (-1 !== n.indexOf("=")) {
            const r = ((e) => {
              const t =
                e.indexOf("=") > 0
                  ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/)
                  : e.split(",");
              return Y(
                t,
                (e, t) => {
                  const n = t.split("="),
                    o = n[0],
                    r = n.length > 1 ? n[1] : o;
                  return (e[$e(o)] = $e(r)), e;
                },
                {}
              );
            })(n);
            return { value: we(r, e.id).getOr(t), valid: o };
          }
          return { value: n, valid: o };
        }
        return { valid: !1, message: "Must be a string." };
      },
    qi = Hi("iframe_attrs"),
    Wi = Hi("doctype"),
    Ki = Hi("document_base_url"),
    Gi = Hi("body_id"),
    Yi = Hi("body_class"),
    Xi = Hi("content_security_policy"),
    Qi = Hi("br_in_pre"),
    Ji = Hi("forced_root_block"),
    Zi = Hi("forced_root_block_attrs"),
    el = Hi("newline_behavior"),
    tl = Hi("br_newline_selector"),
    nl = Hi("no_newline_selector"),
    ol = Hi("keep_styles"),
    rl = Hi("end_container_on_empty_block"),
    sl = Hi("automatic_uploads"),
    al = Hi("images_reuse_filename"),
    il = Hi("images_replace_blob_uris"),
    ll = Hi("icons"),
    dl = Hi("icons_url"),
    cl = Hi("images_upload_url"),
    ul = Hi("images_upload_base_path"),
    ml = Hi("images_upload_credentials"),
    fl = Hi("images_upload_handler"),
    gl = Hi("content_css_cors"),
    pl = Hi("referrer_policy"),
    hl = Hi("language"),
    bl = Hi("language_url"),
    vl = Hi("indent_use_margin"),
    yl = Hi("indentation"),
    Cl = Hi("content_css"),
    wl = Hi("content_style"),
    xl = Hi("font_css"),
    kl = Hi("directionality"),
    Sl = Hi("inline_boundaries_selector"),
    _l = Hi("object_resizing"),
    El = Hi("resize_img_proportional"),
    Nl = Hi("placeholder"),
    Rl = Hi("event_root"),
    Al = Hi("service_message"),
    Ol = Hi("theme"),
    Tl = Hi("theme_url"),
    Bl = Hi("model"),
    Dl = Hi("model_url"),
    Pl = Hi("inline_boundaries"),
    Ll = Hi("formats"),
    Ml = Hi("preview_styles"),
    Il = Hi("format_empty_lines"),
    Fl = Hi("format_noneditable_selector"),
    Ul = Hi("custom_ui_selector"),
    zl = Hi("inline"),
    jl = Hi("hidden_input"),
    Hl = Hi("submit_patch"),
    $l = Hi("add_form_submit_trigger"),
    Vl = Hi("add_unload_trigger"),
    ql = Hi("custom_undo_redo_levels"),
    Wl = Hi("disable_nodechange"),
    Kl = Hi("readonly"),
    Gl = Hi("content_css_cors"),
    Yl = Hi("plugins"),
    Xl = Hi("external_plugins"),
    Ql = Hi("block_unsupported_drop"),
    Jl = Hi("visual"),
    Zl = Hi("visual_table_class"),
    ed = Hi("visual_anchor_class"),
    td = Hi("iframe_aria_text"),
    nd = Hi("setup"),
    od = Hi("init_instance_callback"),
    rd = Hi("urlconverter_callback"),
    sd = Hi("auto_focus"),
    ad = Hi("browser_spellcheck"),
    id = Hi("protect"),
    ld = Hi("paste_block_drop"),
    dd = Hi("paste_data_images"),
    cd = Hi("paste_preprocess"),
    ud = Hi("paste_postprocess"),
    md = Hi("paste_webkit_styles"),
    fd = Hi("paste_remove_styles_if_webkit"),
    gd = Hi("paste_merge_formats"),
    pd = Hi("smart_paste"),
    hd = Hi("paste_as_text"),
    bd = Hi("paste_tab_spaces"),
    vd = Hi("allow_html_data_urls"),
    yd = Hi("text_patterns"),
    Cd = Hi("text_patterns_lookup"),
    wd = Hi("noneditable_class"),
    xd = Hi("editable_class"),
    kd = Hi("noneditable_regexp"),
    Sd = Hi("preserve_cdata"),
    _d = (e) => Tt.explode(e.options.get("images_file_types")),
    Ed = Hi("table_tab_navigation"),
    Nd = yo,
    Rd = Ro,
    Ad = (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    Od = (e) => {
      const t = Nr(e);
      return { count: e.length - t.length, text: t };
    },
    Td = (e) => {
      let t;
      for (; -1 !== (t = e.data.lastIndexOf(_r)); ) e.deleteData(t, 1);
    },
    Bd = (e, t) => (Pd(e), t),
    Dd = (e, t) =>
      ai.isTextPosition(t)
        ? ((e, t) =>
            Rd(e) && t.container() === e
              ? ((e, t) => {
                  const n = Od(e.data.substr(0, t.offset())),
                    o = Od(e.data.substr(t.offset()));
                  return (n.text + o.text).length > 0
                    ? (Td(e), ai(e, t.offset() - n.count))
                    : t;
                })(e, t)
              : Bd(e, t))(e, t)
        : ((e, t) =>
            t.container() === e.parentNode
              ? ((e, t) => {
                  const n = t.container(),
                    o = ((e, t) => {
                      const n = z(e, t);
                      return -1 === n ? M.none() : M.some(n);
                    })(de(n.childNodes), e)
                      .map((e) => (e < t.offset() ? ai(n, t.offset() - 1) : t))
                      .getOr(t);
                  return Pd(e), o;
                })(e, t)
              : Bd(e, t))(e, t),
    Pd = (e) => {
      Nd(e) && Br(e) && (Dr(e) ? e.removeAttribute("data-mce-caret") : Ad(e)),
        Rd(e) && (Td(e), 0 === e.data.length && Ad(e));
    },
    Ld = Io,
    Md = zo,
    Id = Fo,
    Fd = (e, t, n) => {
      const o = Pa(t.getBoundingClientRect(), n);
      let r, s;
      if ("BODY" === e.tagName) {
        const t = e.ownerDocument.documentElement;
        (r = e.scrollLeft || t.scrollLeft), (s = e.scrollTop || t.scrollTop);
      } else {
        const t = e.getBoundingClientRect();
        (r = e.scrollLeft - t.left), (s = e.scrollTop - t.top);
      }
      (o.left += r),
        (o.right += r),
        (o.top += s),
        (o.bottom += s),
        (o.width = 1);
      let a = t.offsetWidth - t.clientWidth;
      return a > 0 && (n && (a *= -1), (o.left += a), (o.right += a)), o;
    },
    Ud = (e, t, n, o) => {
      const r = ua();
      let s, a;
      const i = Ji(e),
        l = e.dom,
        d = () => {
          ((e) => {
            var t, n;
            const o = vr(
              mn(e),
              "*[contentEditable=false],video,audio,embed,object"
            );
            for (let e = 0; e < o.length; e++) {
              const r = o[e].dom;
              let s = r.previousSibling;
              if (Ir(s)) {
                const e = s.data;
                1 === e.length
                  ? null === (t = s.parentNode) ||
                    void 0 === t ||
                    t.removeChild(s)
                  : s.deleteData(e.length - 1, 1);
              }
              (s = r.nextSibling),
                Mr(s) &&
                  (1 === s.data.length
                    ? null === (n = s.parentNode) ||
                      void 0 === n ||
                      n.removeChild(s)
                    : s.deleteData(0, 1));
            }
          })(t),
            a && (Pd(a), (a = null)),
            r.on((e) => {
              l.remove(e.caret), r.clear();
            }),
            s && (clearInterval(s), (s = void 0));
        };
      return {
        show: (e, c) => {
          let u;
          if ((d(), Id(c))) return null;
          if (!n(c))
            return (
              (a = ((e, t) => {
                var n;
                const o = (
                    null !== (n = e.ownerDocument) && void 0 !== n
                      ? n
                      : document
                  ).createTextNode(_r),
                  r = e.parentNode;
                if (t) {
                  const t = e.previousSibling;
                  if (Ar(t)) {
                    if (Br(t)) return t;
                    if (Ir(t)) return t.splitText(t.data.length - 1);
                  }
                  null == r || r.insertBefore(o, e);
                } else {
                  const t = e.nextSibling;
                  if (Ar(t)) {
                    if (Br(t)) return t;
                    if (Mr(t)) return t.splitText(1), t;
                  }
                  e.nextSibling
                    ? null == r || r.insertBefore(o, e.nextSibling)
                    : null == r || r.appendChild(o);
                }
                return o;
              })(c, e)),
              (u = c.ownerDocument.createRange()),
              jd(a.nextSibling)
                ? (u.setStart(a, 0), u.setEnd(a, 0))
                : (u.setStart(a, 1), u.setEnd(a, 1)),
              u
            );
          {
            const n = ((e, t, n) => {
                var o;
                const r = (
                  null !== (o = t.ownerDocument) && void 0 !== o ? o : document
                ).createElement(e);
                r.setAttribute("data-mce-caret", n ? "before" : "after"),
                  r.setAttribute("data-mce-bogus", "all"),
                  r.appendChild(xr().dom);
                const s = t.parentNode;
                return (
                  n
                    ? null == s || s.insertBefore(r, t)
                    : t.nextSibling
                    ? null == s || s.insertBefore(r, t.nextSibling)
                    : null == s || s.appendChild(r),
                  r
                );
              })(i, c, e),
              d = Fd(t, c, e);
            l.setStyle(n, "top", d.top), (a = n);
            const m = l.create("div", {
              class: "mce-visual-caret",
              "data-mce-bogus": "all",
            });
            l.setStyles(m, { ...d }),
              l.add(t, m),
              r.set({ caret: m, element: c, before: e }),
              e && l.addClass(m, "mce-visual-caret-before"),
              (s = setInterval(() => {
                r.on((e) => {
                  o()
                    ? l.toggleClass(e.caret, "mce-visual-caret-hidden")
                    : l.addClass(e.caret, "mce-visual-caret-hidden");
                });
              }, 500)),
              (u = c.ownerDocument.createRange()),
              u.setStart(n, 0),
              u.setEnd(n, 0);
          }
          return u;
        },
        hide: d,
        getCss: () =>
          ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}",
        reposition: () => {
          r.on((e) => {
            const n = Fd(t, e.element, e.before);
            l.setStyles(e.caret, { ...n });
          });
        },
        destroy: () => clearInterval(s),
      };
    },
    zd = () => Nt.browser.isFirefox(),
    jd = (e) => Ld(e) || Md(e),
    Hd = (e) => jd(e) || (_o(e) && zd()),
    $d = Mo,
    Vd = Io,
    qd = zo,
    Wd = xo("display", "block table table-cell table-caption list-item"),
    Kd = Br,
    Gd = Or,
    Yd = yo,
    Xd = Ro,
    Qd = Gr,
    Jd = (e) => e > 0,
    Zd = (e) => e < 0,
    ec = (e, t) => {
      let n;
      for (; (n = e(t)); ) if (!Gd(n)) return n;
      return null;
    },
    tc = (e, t, n, o, r) => {
      const s = new Zo(e, o),
        a = Vd(e) || Gd(e);
      let i;
      if (Zd(t)) {
        if (a && ((i = ec(s.prev.bind(s), !0)), n(i))) return i;
        for (; (i = ec(s.prev.bind(s), r)); ) if (n(i)) return i;
      }
      if (Jd(t)) {
        if (a && ((i = ec(s.next.bind(s), !0)), n(i))) return i;
        for (; (i = ec(s.next.bind(s), r)); ) if (n(i)) return i;
      }
      return null;
    },
    nc = (e, t) => {
      for (; e && e !== t; ) {
        if (Wd(e)) return e;
        e = e.parentNode;
      }
      return null;
    },
    oc = (e, t, n) => nc(e.container(), n) === nc(t.container(), n),
    rc = (e, t) => {
      if (!t) return M.none();
      const n = t.container(),
        o = t.offset();
      return Yd(n) ? M.from(n.childNodes[o + e]) : M.none();
    },
    sc = (e, t) => {
      var n;
      const o = (
        null !== (n = t.ownerDocument) && void 0 !== n ? n : document
      ).createRange();
      return (
        e
          ? (o.setStartBefore(t), o.setEndBefore(t))
          : (o.setStartAfter(t), o.setEndAfter(t)),
        o
      );
    },
    ac = (e, t, n) => nc(t, e) === nc(n, e),
    ic = (e, t, n) => {
      const o = e ? "previousSibling" : "nextSibling";
      let r = n;
      for (; r && r !== t; ) {
        let e = r[o];
        if ((e && Kd(e) && (e = e[o]), Vd(e) || qd(e))) {
          if (ac(t, e, r)) return e;
          break;
        }
        if (Qd(e)) break;
        r = r.parentNode;
      }
      return null;
    },
    lc = O(sc, !0),
    dc = O(sc, !1),
    cc = (e, t, n) => {
      let o;
      const r = O(ic, !0, t),
        s = O(ic, !1, t),
        a = n.startContainer,
        i = n.startOffset;
      if (Or(a)) {
        const e = Xd(a) ? a.parentNode : a,
          t = e.getAttribute("data-mce-caret");
        if ("before" === t && ((o = e.nextSibling), Hd(o))) return lc(o);
        if ("after" === t && ((o = e.previousSibling), Hd(o))) return dc(o);
      }
      if (!n.collapsed) return n;
      if (Ro(a)) {
        if (Kd(a)) {
          if (1 === e) {
            if (((o = s(a)), o)) return lc(o);
            if (((o = r(a)), o)) return dc(o);
          }
          if (-1 === e) {
            if (((o = r(a)), o)) return dc(o);
            if (((o = s(a)), o)) return lc(o);
          }
          return n;
        }
        if (Ir(a) && i >= a.data.length - 1)
          return 1 === e && ((o = s(a)), o) ? lc(o) : n;
        if (Mr(a) && i <= 1) return -1 === e && ((o = r(a)), o) ? dc(o) : n;
        if (i === a.data.length) return (o = s(a)), o ? lc(o) : n;
        if (0 === i) return (o = r(a)), o ? dc(o) : n;
      }
      return n;
    },
    uc = (e, t) => rc(e ? 0 : -1, t).filter(Vd),
    mc = (e, t, n) => {
      const o = cc(e, t, n);
      return -1 === e ? ai.fromRangeStart(o) : ai.fromRangeEnd(o);
    },
    fc = (e) => M.from(e.getNode()).map(mn),
    gc = (e, t) => {
      let n = t;
      for (; (n = e(n)); ) if (n.isVisible()) return n;
      return n;
    },
    pc = (e, t) => {
      const n = oc(e, t);
      return !(n || !Po(e.getNode())) || n;
    };
  var hc;
  !(function (e) {
    (e[(e.Backwards = -1)] = "Backwards"), (e[(e.Forwards = 1)] = "Forwards");
  })(hc || (hc = {}));
  const bc = Io,
    vc = Ro,
    yc = yo,
    Cc = Po,
    wc = Gr,
    xc = (e) =>
      qr(e) ||
      ((e) =>
        !!Yr(e) &&
        !Y(de(e.getElementsByTagName("*")), (e, t) => e || zr(t), !1))(e),
    kc = Xr,
    Sc = (e, t) =>
      e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null,
    _c = (e, t) => {
      if (Jd(e)) {
        if (wc(t.previousSibling) && !vc(t.previousSibling))
          return ai.before(t);
        if (vc(t)) return ai(t, 0);
      }
      if (Zd(e)) {
        if (wc(t.nextSibling) && !vc(t.nextSibling)) return ai.after(t);
        if (vc(t)) return ai(t, t.data.length);
      }
      return Zd(e) ? (Cc(t) ? ai.before(t) : ai.after(t)) : ai.before(t);
    },
    Ec = (e, t, n) => {
      let o, r, s, a;
      if (!yc(n) || !t) return null;
      if (t.isEqual(ai.after(n)) && n.lastChild) {
        if (
          ((a = ai.after(n.lastChild)),
          Zd(e) && wc(n.lastChild) && yc(n.lastChild))
        )
          return Cc(n.lastChild) ? ai.before(n.lastChild) : a;
      } else a = t;
      const i = a.container();
      let l = a.offset();
      if (vc(i)) {
        if (Zd(e) && l > 0) return ai(i, --l);
        if (Jd(e) && l < i.length) return ai(i, ++l);
        o = i;
      } else {
        if (Zd(e) && l > 0 && ((r = Sc(i, l - 1)), wc(r)))
          return !xc(r) && ((s = tc(r, e, kc, r)), s)
            ? vc(s)
              ? ai(s, s.data.length)
              : ai.after(s)
            : vc(r)
            ? ai(r, r.data.length)
            : ai.before(r);
        if (Jd(e) && l < i.childNodes.length && ((r = Sc(i, l)), wc(r)))
          return Cc(r)
            ? ((e, t) => {
                const n = t.nextSibling;
                return n && wc(n)
                  ? vc(n)
                    ? ai(n, 0)
                    : ai.before(n)
                  : Ec(hc.Forwards, ai.after(t), e);
              })(n, r)
            : !xc(r) && ((s = tc(r, e, kc, r)), s)
            ? vc(s)
              ? ai(s, 0)
              : ai.before(s)
            : vc(r)
            ? ai(r, 0)
            : ai.after(r);
        o = r || a.getNode();
      }
      if (
        o &&
        ((Jd(e) && a.isAtEnd()) || (Zd(e) && a.isAtStart())) &&
        ((o = tc(o, e, L, n, !0)), kc(o, n))
      )
        return _c(e, o);
      r = o ? tc(o, e, kc, n) : o;
      const d = Be(
        K(
          ((e, t) => {
            const n = [];
            let o = e;
            for (; o && o !== t; ) n.push(o), (o = o.parentNode);
            return n;
          })(i, n),
          bc
        )
      );
      return !d || (r && d.contains(r))
        ? r
          ? _c(e, r)
          : null
        : ((a = Jd(e) ? ai.after(d) : ai.before(d)), a);
    },
    Nc = (e) => ({
      next: (t) => Ec(hc.Forwards, t, e),
      prev: (t) => Ec(hc.Backwards, t, e),
    }),
    Rc = (e) => (ai.isTextPosition(e) ? 0 === e.offset() : Gr(e.getNode())),
    Ac = (e) => {
      if (ai.isTextPosition(e)) {
        const t = e.container();
        return e.offset() === t.data.length;
      }
      return Gr(e.getNode(!0));
    },
    Oc = (e, t) =>
      !ai.isTextPosition(e) &&
      !ai.isTextPosition(t) &&
      e.getNode() === t.getNode(!0),
    Tc = (e, t, n) => {
      const o = Nc(t);
      return M.from(e ? o.next(n) : o.prev(n));
    },
    Bc = (e, t, n) =>
      Tc(e, t, n).bind((o) =>
        oc(n, o, t) &&
        ((e, t, n) => {
          return e
            ? !Oc(t, n) &&
                ((o = t), !(!ai.isTextPosition(o) && Po(o.getNode()))) &&
                Ac(t) &&
                Rc(n)
            : !Oc(n, t) && Rc(t) && Ac(n);
          var o;
        })(e, n, o)
          ? Tc(e, t, o)
          : M.some(o)
      ),
    Dc = (e, t, n, o) =>
      Bc(e, t, n).bind((n) => (o(n) ? Dc(e, t, n, o) : M.some(n))),
    Pc = (e, t) => {
      const n = e ? t.firstChild : t.lastChild;
      return Ro(n)
        ? M.some(ai(n, e ? 0 : n.data.length))
        : n
        ? Gr(n)
          ? M.some(e ? ai.before(n) : Po((o = n)) ? ai.before(o) : ai.after(o))
          : ((e, t, n) => {
              const o = e ? ai.before(n) : ai.after(n);
              return Tc(e, t, o);
            })(e, t, n)
        : M.none();
      var o;
    },
    Lc = O(Tc, !0),
    Mc = O(Tc, !1),
    Ic = O(Pc, !0),
    Fc = O(Pc, !1),
    Uc = "_mce_caret",
    zc = (e) => yo(e) && e.id === Uc,
    jc = (e, t) => {
      let n = t;
      for (; n && n !== e; ) {
        if (zc(n)) return n;
        n = n.parentNode;
      }
      return null;
    },
    Hc = (e) => xe(e, "name"),
    $c = (e) => Tt.isArray(e.start),
    Vc = (e) => !(!Hc(e) && b(e.forward)) || e.forward,
    qc = (e, t) => (
      yo(t) &&
        e.isBlock(t) &&
        !t.innerHTML &&
        (t.innerHTML = '<br data-mce-bogus="1" />'),
      t
    ),
    Wc = (e, t) =>
      Fc(e).fold(
        P,
        (e) => (
          t.setStart(e.container(), e.offset()),
          t.setEnd(e.container(), e.offset()),
          !0
        )
      ),
    Kc = (e, t, n) =>
      !(
        !((e) => !e.hasChildNodes())(t) ||
        !jc(e, t) ||
        (((e, t) => {
          var n;
          const o = (
            null !== (n = e.ownerDocument) && void 0 !== n ? n : document
          ).createTextNode(_r);
          e.appendChild(o), t.setStart(o, 0), t.setEnd(o, 0);
        })(t, n),
        0)
      ),
    Gc = (e, t, n, o) => {
      const r = n[t ? "start" : "end"],
        s = e.getRoot();
      if (r) {
        let e = s,
          n = r[0];
        for (let t = r.length - 1; e && t >= 1; t--) {
          const n = e.childNodes;
          if (Kc(s, e, o)) return !0;
          if (r[t] > n.length - 1) return !!Kc(s, e, o) || Wc(e, o);
          e = n[r[t]];
        }
        Ro(e) && (n = Math.min(r[0], e.data.length)),
          yo(e) && (n = Math.min(r[0], e.childNodes.length)),
          t ? o.setStart(e, n) : o.setEnd(e, n);
      }
      return !0;
    },
    Yc = (e) => Ro(e) && e.data.length > 0,
    Xc = (e, t, n) => {
      const o = e.get(n.id + "_" + t),
        r = null == o ? void 0 : o.parentNode,
        s = n.keep;
      if (o && r) {
        let a, i;
        if (
          ("start" === t
            ? s
              ? o.hasChildNodes()
                ? ((a = o.firstChild), (i = 1))
                : Yc(o.nextSibling)
                ? ((a = o.nextSibling), (i = 0))
                : Yc(o.previousSibling)
                ? ((a = o.previousSibling), (i = o.previousSibling.data.length))
                : ((a = r), (i = e.nodeIndex(o) + 1))
              : ((a = r), (i = e.nodeIndex(o)))
            : s
            ? o.hasChildNodes()
              ? ((a = o.firstChild), (i = 1))
              : Yc(o.previousSibling)
              ? ((a = o.previousSibling), (i = o.previousSibling.data.length))
              : ((a = r), (i = e.nodeIndex(o)))
            : ((a = r), (i = e.nodeIndex(o))),
          !s)
        ) {
          const r = o.previousSibling,
            s = o.nextSibling;
          let l;
          for (
            Tt.each(Tt.grep(o.childNodes), (e) => {
              Ro(e) && (e.data = e.data.replace(/\uFEFF/g, ""));
            });
            (l = e.get(n.id + "_" + t));

          )
            e.remove(l, !0);
          if (Ro(s) && Ro(r) && !Nt.browser.isOpera()) {
            const t = r.data.length;
            r.appendData(s.data), e.remove(s), (a = r), (i = t);
          }
        }
        return M.some(ai(a, i));
      }
      return M.none();
    },
    Qc = (e, t, n) =>
      ((e, t, n = !1) =>
        2 === t
          ? Si(Nr, n, e)
          : 3 === t
          ? ((e) => {
              const t = e.getRng();
              return {
                start: hi(e.dom.getRoot(), ai.fromRangeStart(t)),
                end: hi(e.dom.getRoot(), ai.fromRangeEnd(t)),
                forward: e.isForward(),
              };
            })(e)
          : t
          ? ((e) => ({ rng: e.getRng(), forward: e.isForward() }))(e)
          : Ei(e, !1))(e, t, n),
    Jc = (e, t) => {
      ((e, t) => {
        const n = e.dom;
        if (t) {
          if ($c(t))
            return ((e, t) => {
              const n = e.createRng();
              return Gc(e, !0, t, n) && Gc(e, !1, t, n)
                ? M.some({ range: n, forward: Vc(t) })
                : M.none();
            })(n, t);
          if (((e) => m(e.start))(t))
            return ((e, t) => {
              const n = M.from(bi(e.getRoot(), t.start)),
                o = M.from(bi(e.getRoot(), t.end));
              return Dt(n, o, (n, o) => {
                const r = e.createRng();
                return (
                  r.setStart(n.container(), n.offset()),
                  r.setEnd(o.container(), o.offset()),
                  { range: r, forward: Vc(t) }
                );
              });
            })(n, t);
          if (((e) => xe(e, "id"))(t))
            return ((e, t) => {
              const n = Xc(e, "start", t),
                o = Xc(e, "end", t);
              return Dt(n, o.or(n), (n, o) => {
                const r = e.createRng();
                return (
                  r.setStart(qc(e, n.container()), n.offset()),
                  r.setEnd(qc(e, o.container()), o.offset()),
                  { range: r, forward: Vc(t) }
                );
              });
            })(n, t);
          if (Hc(t))
            return ((e, t) =>
              M.from(e.select(t.name)[t.index]).map((t) => {
                const n = e.createRng();
                return n.selectNode(t), { range: n, forward: !0 };
              }))(n, t);
          if (((e) => xe(e, "rng"))(t))
            return M.some({ range: t.rng, forward: Vc(t) });
        }
        return M.none();
      })(e, t).each(({ range: t, forward: n }) => {
        e.setRng(t, n);
      });
    },
    Zc = (e) =>
      yo(e) &&
      "SPAN" === e.tagName &&
      "bookmark" === e.getAttribute("data-mce-type"),
    eu = (pr, (e) => "\xa0" === e);
  const tu = (e) => "" !== e && -1 !== " \f\n\r\t\v".indexOf(e),
    nu = (e) => !tu(e) && !eu(e) && !hr(e),
    ou = (e) => {
      const t = e.toString(16);
      return (1 === t.length ? "0" + t : t).toUpperCase();
    },
    ru = (e) => ((e) => ({ value: e }))(ou(e.red) + ou(e.green) + ou(e.blue)),
    su = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
    au =
      /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
    iu = (e, t, n, o) => ({ red: e, green: t, blue: n, alpha: o }),
    lu = (e, t, n, o) => {
      const r = parseInt(e, 10),
        s = parseInt(t, 10),
        a = parseInt(n, 10),
        i = parseFloat(o);
      return iu(r, s, a, i);
    },
    du = (e) =>
      ((e) => {
        if ("transparent" === e) return M.some(iu(0, 0, 0, 0));
        const t = su.exec(e);
        if (null !== t) return M.some(lu(t[1], t[2], t[3], "1"));
        const n = au.exec(e);
        return null !== n ? M.some(lu(n[1], n[2], n[3], n[4])) : M.none();
      })(e)
        .map(ru)
        .map((e) => "#" + e.value)
        .getOr(e),
    cu = (e) => {
      const t = [];
      if (e) for (let n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
      return t;
    },
    uu = (e, t) => {
      const n = vr(t, "td[data-mce-selected],th[data-mce-selected]");
      return n.length > 0
        ? n
        : ((e) =>
            K(
              ((e) =>
                ee(e, (e) => {
                  const t = Ua(e);
                  return t ? [mn(t)] : [];
                }))(e),
              dr
            ))(e);
    },
    mu = (e) => uu(cu(e.selection.getSel()), mn(e.getBody())),
    fu = (e, t) => Go(e, "table", t),
    gu = (e) => An(e).fold(N([e]), (t) => [e].concat(gu(t))),
    pu = (e) =>
      On(e).fold(N([e]), (t) =>
        "br" === Lt(t)
          ? kn(t)
              .map((t) => [e].concat(pu(t)))
              .getOr([])
          : [e].concat(pu(t))
      ),
    hu = (e, t) =>
      Dt(
        ((e) => {
          const t = e.startContainer,
            n = e.startOffset;
          return Ro(t)
            ? 0 === n
              ? M.some(mn(t))
              : M.none()
            : M.from(t.childNodes[n]).map(mn);
        })(t),
        ((e) => {
          const t = e.endContainer,
            n = e.endOffset;
          return Ro(t)
            ? n === t.data.length
              ? M.some(mn(t))
              : M.none()
            : M.from(t.childNodes[n - 1]).map(mn);
        })(t),
        (t, n) => {
          const o = Q(gu(e), O(bn, t)),
            r = Q(pu(e), O(bn, n));
          return o.isSome() && r.isSome();
        }
      ).getOr(!1),
    bu = (e, t, n, o) => {
      const r = n,
        s = new Zo(n, r),
        a = ve(
          e.schema.getMoveCaretBeforeOnEnterElements(),
          (e, t) => !j(["td", "th", "table"], t.toLowerCase())
        );
      let i = n;
      do {
        if (Ro(i) && 0 !== Tt.trim(i.data).length)
          return void (o ? t.setStart(i, 0) : t.setEnd(i, i.data.length));
        if (a[i.nodeName])
          return void (o
            ? t.setStartBefore(i)
            : "BR" === i.nodeName
            ? t.setEndBefore(i)
            : t.setEndAfter(i));
      } while ((i = o ? s.next() : s.prev()));
      "BODY" === r.nodeName &&
        (o ? t.setStart(r, 0) : t.setEnd(r, r.childNodes.length));
    },
    vu = (e) => {
      const t = e.selection.getSel();
      return C(t) && t.rangeCount > 0;
    },
    yu = (e, t) => {
      const n = mu(e);
      n.length > 0
        ? V(n, (n) => {
            const o = n.dom,
              r = e.dom.createRng();
            r.setStartBefore(o), r.setEndAfter(o), t(r, !0);
          })
        : t(e.selection.getRng(), !1);
    },
    Cu = (e, t, n) => {
      const o = Ei(e, t);
      n(o), e.moveToBookmark(o);
    },
    wu = (e) => x(null == e ? void 0 : e.nodeType),
    xu = (e) => yo(e) && !Zc(e) && !zc(e) && !So(e),
    ku = (e) => !0 === e.isContentEditable,
    Su = (e, t, n) => {
      const { selection: o, dom: r } = e,
        s = o.getNode(),
        a = Io(s);
      Cu(o, !0, () => {
        t();
      }),
        a && Io(s) && r.isChildOf(s, e.getBody())
          ? e.selection.select(s)
          : n(o.getStart()) && _u(r, o);
    },
    _u = (e, t) => {
      var n, o;
      const r = t.getRng(),
        { startContainer: s, startOffset: a } = r;
      if (
        !((e, t) => {
          if (xu(t) && !/^(TD|TH)$/.test(t.nodeName)) {
            const n = e.getAttrib(t, "data-mce-selected"),
              o = parseInt(n, 10);
            return !isNaN(o) && o > 0;
          }
          return !1;
        })(e, t.getNode()) &&
        yo(s)
      ) {
        const i = s.childNodes,
          l = e.getRoot();
        let d;
        if (a < i.length) {
          const t = i[a];
          d = new Zo(
            t,
            null !== (n = e.getParent(t, e.isBlock)) && void 0 !== n ? n : l
          );
        } else {
          const t = i[i.length - 1];
          (d = new Zo(
            t,
            null !== (o = e.getParent(t, e.isBlock)) && void 0 !== o ? o : l
          )),
            d.next(!0);
        }
        for (let n = d.current(); n; n = d.next()) {
          if ("false" === e.getContentEditable(n)) return;
          if (Ro(n) && !Au(n)) return r.setStart(n, 0), void t.setRng(r);
        }
      }
    },
    Eu = (e, t, n) => {
      if (e) {
        const o = t ? "nextSibling" : "previousSibling";
        for (e = n ? e : e[o]; e; e = e[o]) if (yo(e) || !Au(e)) return e;
      }
    },
    Nu = (e, t) => (
      wu(t) && (t = t.nodeName),
      !!e.schema.getTextBlockElements()[t.toLowerCase()]
    ),
    Ru = (e, t, n) => e.schema.isValidChild(t, n),
    Au = (e, t = !1) => {
      if (C(e) && Ro(e)) {
        const n = t ? e.data.replace(/ /g, "\xa0") : e.data;
        return Jr(n);
      }
      return !1;
    },
    Ou = (e, t) => {
      const n = e.dom;
      return (
        xu(t) &&
        "false" === n.getContentEditable(t) &&
        ((e, t) => {
          const n = "[data-mce-cef-wrappable]",
            o = Fl(e),
            r = Ke(o) ? n : `${n},${o}`;
          return pn(mn(t), r);
        })(e, t) &&
        0 === n.select('[contenteditable="true"]', t).length
      );
    },
    Tu = (e, t) =>
      w(e)
        ? e(t)
        : (C(t) && (e = e.replace(/%(\w+)/g, (e, n) => t[n] || e)), e),
    Bu = (e, t) => (
      (t = t || ""),
      (e = "" + ((e = e || "").nodeName || e)),
      (t = "" + (t.nodeName || t)),
      e.toLowerCase() === t.toLowerCase()
    ),
    Du = (e, t) => {
      if (y(e)) return null;
      {
        let n = String(e);
        return (
          ("color" !== t && "backgroundColor" !== t) || (n = du(n)),
          "fontWeight" === t && 700 === e && (n = "bold"),
          "fontFamily" === t &&
            (n = n.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
          n
        );
      }
    },
    Pu = (e, t, n) => {
      const o = e.getStyle(t, n);
      return Du(o, n);
    },
    Lu = (e, t) => {
      let n;
      return (
        e.getParent(
          t,
          (t) =>
            !!yo(t) &&
            ((n = e.getStyle(t, "text-decoration")), !!n && "none" !== n)
        ),
        n
      );
    },
    Mu = (e, t, n) => e.getParents(t, n, e.getRoot()),
    Iu = (e, t, n) => {
      const o = e.formatter.get(t);
      return C(o) && H(o, n);
    },
    Fu = (e) => ke(e, "block"),
    Uu = (e) => ke(e, "selector"),
    zu = (e) => ke(e, "inline"),
    ju = (e) => Uu(e) && !1 !== e.expand && !zu(e),
    Hu = Zc,
    $u = Mu,
    Vu = Au,
    qu = Nu,
    Wu = (e, t) => {
      let n = t;
      for (; n; ) {
        if (yo(n) && e.getContentEditable(n))
          return "false" === e.getContentEditable(n) ? n : t;
        n = n.parentNode;
      }
      return t;
    },
    Ku = (e, t, n, o) => {
      const r = t.data;
      for (let t = n; e ? t >= 0 : t < r.length; e ? t-- : t++)
        if (o(r.charAt(t))) return e ? t + 1 : t;
      return -1;
    },
    Gu = (e, t, n) => Ku(e, t, n, (e) => eu(e) || tu(e)),
    Yu = (e, t, n) => Ku(e, t, n, nu),
    Xu = (e, t, n, o, r, s) => {
      let a;
      const i = e.getParent(n, e.isBlock) || t,
        l = (t, n, o) => {
          const s = Ta(e),
            l = r ? s.backwards : s.forwards;
          return M.from(
            l(
              t,
              n,
              (e, t) => (Hu(e.parentNode) ? -1 : ((a = e), o(r, e, t))),
              i
            )
          );
        };
      return l(n, o, Gu)
        .bind((e) =>
          s ? l(e.container, e.offset + (r ? -1 : 0), Yu) : M.some(e)
        )
        .orThunk(() =>
          a ? M.some({ container: a, offset: r ? 0 : a.length }) : M.none()
        );
    },
    Qu = (e, t, n, o, r) => {
      const s = o[r];
      Ro(o) && Ke(o.data) && s && (o = s);
      const a = $u(e, o);
      for (let o = 0; o < a.length; o++)
        for (let r = 0; r < t.length; r++) {
          const s = t[r];
          if (
            (!C(s.collapsed) || s.collapsed === n.collapsed) &&
            Uu(s) &&
            e.is(a[o], s.selector)
          )
            return a[o];
        }
      return o;
    },
    Ju = (e, t, n, o) => {
      var r;
      let s = n;
      const a = e.dom,
        i = a.getRoot(),
        l = t[0];
      if ((Fu(l) && (s = l.wrapper ? null : a.getParent(n, l.block, i)), !s)) {
        const t =
          null !== (r = a.getParent(n, "LI,TD,TH")) && void 0 !== r ? r : i;
        s = a.getParent(
          Ro(n) ? n.parentNode : n,
          (t) => t !== i && qu(e, t),
          t
        );
      }
      if (
        (s && Fu(l) && l.wrapper && (s = $u(a, s, "ul,ol").reverse()[0] || s),
        !s)
      )
        for (
          s = n;
          s && s[o] && !a.isBlock(s[o]) && ((s = s[o]), !Bu(s, "br"));

        );
      return s || n;
    },
    Zu = (e, t, n, o) => {
      const r = n.parentNode;
      return (
        !C(n[o]) && (!(r !== t && !y(r) && !e.isBlock(r)) || Zu(e, t, r, o))
      );
    },
    em = (e, t, n, o, r) => {
      let s = n;
      const a = r ? "previousSibling" : "nextSibling",
        i = e.getRoot();
      if (Ro(n) && !Vu(n) && (r ? o > 0 : o < n.data.length)) return n;
      for (; s; ) {
        if (!t[0].block_expand && e.isBlock(s)) return s;
        for (let t = s[a]; t; t = t[a]) {
          const n = Ro(t) && !Zu(e, i, t, a);
          if (
            !Hu(t) &&
            (!Po((l = t)) ||
              !l.getAttribute("data-mce-bogus") ||
              l.nextSibling) &&
            !Vu(t, n)
          )
            return s;
        }
        if (s === i || s.parentNode === i) {
          n = s;
          break;
        }
        s = s.parentNode;
      }
      var l;
      return n;
    },
    tm = (e) => Hu(e.parentNode) || Hu(e),
    nm = (e, t, n, o = !1) => {
      let {
        startContainer: r,
        startOffset: s,
        endContainer: a,
        endOffset: i,
      } = t;
      const l = e.dom,
        d = n[0];
      return (
        yo(r) && r.hasChildNodes() && ((r = za(r, s)), Ro(r) && (s = 0)),
        yo(a) &&
          a.hasChildNodes() &&
          ((a = za(a, t.collapsed ? i : i - 1)), Ro(a) && (i = a.data.length)),
        (r = Wu(l, r)),
        (a = Wu(l, a)),
        tm(r) &&
          ((r = Hu(r) ? r : r.parentNode),
          (r = t.collapsed ? r.previousSibling || r : r.nextSibling || r),
          Ro(r) && (s = t.collapsed ? r.length : 0)),
        tm(a) &&
          ((a = Hu(a) ? a : a.parentNode),
          (a = t.collapsed ? a.nextSibling || a : a.previousSibling || a),
          Ro(a) && (i = t.collapsed ? 0 : a.length)),
        t.collapsed &&
          (Xu(l, e.getBody(), r, s, !0, o).each(
            ({ container: e, offset: t }) => {
              (r = e), (s = t);
            }
          ),
          Xu(l, e.getBody(), a, i, !1, o).each(
            ({ container: e, offset: t }) => {
              (a = e), (i = t);
            }
          )),
        (zu(d) || d.block_expand) &&
          ((zu(d) && Ro(r) && 0 !== s) || (r = em(l, n, r, s, !0)),
          (zu(d) && Ro(a) && i !== a.data.length) || (a = em(l, n, a, i, !1))),
        ju(d) &&
          ((r = Qu(l, n, t, r, "previousSibling")),
          (a = Qu(l, n, t, a, "nextSibling"))),
        (Fu(d) || Uu(d)) &&
          ((r = Ju(e, n, r, "previousSibling")),
          (a = Ju(e, n, a, "nextSibling")),
          Fu(d) &&
            (l.isBlock(r) || (r = em(l, n, r, s, !0)),
            l.isBlock(a) || (a = em(l, n, a, i, !1)))),
        yo(r) && r.parentNode && ((s = l.nodeIndex(r)), (r = r.parentNode)),
        yo(a) && a.parentNode && ((i = l.nodeIndex(a) + 1), (a = a.parentNode)),
        { startContainer: r, startOffset: s, endContainer: a, endOffset: i }
      );
    },
    om = (e, t, n) => {
      var o;
      const r = t.startOffset,
        s = za(t.startContainer, r),
        a = t.endOffset,
        i = za(t.endContainer, a - 1),
        l = (e) => {
          const t = e[0];
          Ro(t) && t === s && r >= t.data.length && e.splice(0, 1);
          const n = e[e.length - 1];
          return (
            0 === a &&
              e.length > 0 &&
              n === i &&
              Ro(n) &&
              e.splice(e.length - 1, 1),
            e
          );
        },
        d = (e, t, n) => {
          const o = [];
          for (; e && e !== n; e = e[t]) o.push(e);
          return o;
        },
        c = (t, n) => e.getParent(t, (e) => e.parentNode === n, n),
        u = (e, t, o) => {
          const r = o ? "nextSibling" : "previousSibling";
          for (let s = e, a = s.parentNode; s && s !== t; s = a) {
            a = s.parentNode;
            const t = d(s === e ? s : s[r], r);
            t.length && (o || t.reverse(), n(l(t)));
          }
        };
      if (s === i) return n(l([s]));
      const m =
        null !== (o = e.findCommonAncestor(s, i)) && void 0 !== o
          ? o
          : e.getRoot();
      if (e.isChildOf(s, i)) return u(s, m, !0);
      if (e.isChildOf(i, s)) return u(i, m);
      const f = c(s, m) || s,
        g = c(i, m) || i;
      u(s, f, !0);
      const p = d(
        f === s ? f : f.nextSibling,
        "nextSibling",
        g === i ? g.nextSibling : g
      );
      p.length && n(l(p)), u(i, g);
    },
    rm = [
      'pre[class*=language-][contenteditable="false"]',
      "figure.image",
      "div[data-ephox-embed-iri]",
      "div.tiny-pageembed",
      "div.mce-toc",
      "div[data-mce-toc]",
    ],
    sm = (e, t, n, o, r, s) => {
      const { uid: a = t, ...i } = n;
      nn(e, ga()), Vt(e, `${ha()}`, a), Vt(e, `${pa()}`, o);
      const { attributes: l = {}, classes: d = [] } = r(a, i);
      if (
        (qt(e, l),
        ((e, t) => {
          V(t, (t) => {
            nn(e, t);
          });
        })(e, d),
        s)
      ) {
        d.length > 0 && Vt(e, `${va()}`, d.join(","));
        const t = ue(l);
        t.length > 0 && Vt(e, `${ya()}`, t.join(","));
      }
    },
    am = (e, t, n, o, r) => {
      const s = cn("span", e);
      return sm(s, t, n, o, r, !1), s;
    },
    im = (e, t, n, o, r, s) => {
      const a = [],
        i = am(e.getDoc(), n, s, o, r),
        l = ua(),
        d = () => {
          l.clear();
        },
        c = (e) => {
          V(e, u);
        },
        u = (t) => {
          switch (
            ((e, t, n, o) =>
              xn(t).fold(
                () => "skipping",
                (r) =>
                  "br" === o || ((e) => Ut(e) && Cr(e) === _r)(t)
                    ? "valid"
                    : ((e) => Ft(e) && sn(e, ga()))(t)
                    ? "existing"
                    : zc(t.dom)
                    ? "caret"
                    : H(rm, (e) => pn(t, e))
                    ? "valid-block"
                    : Ru(e, n, o) && Ru(e, Lt(r), n)
                    ? "valid"
                    : "invalid-child"
              ))(e, t, "span", Lt(t))
          ) {
            case "invalid-child": {
              d();
              const e = Nn(t);
              c(e), d();
              break;
            }
            case "valid-block":
              d(), sm(t, n, s, o, r, !0);
              break;
            case "valid": {
              const e = l.get().getOrThunk(() => {
                const e = Ra(i);
                return a.push(e), l.set(e), e;
              });
              ((e, t) => {
                Yn(e, t), Jn(t, e);
              })(t, e);
              break;
            }
          }
        };
      return (
        om(e.dom, t, (e) => {
          d(),
            ((e) => {
              const t = $(e, mn);
              c(t);
            })(e);
        }),
        a
      );
    },
    lm = (e) => {
      const t = (() => {
        const e = {};
        return {
          register: (t, n) => {
            e[t] = { name: t, settings: n };
          },
          lookup: (t) => we(e, t).map((e) => e.settings),
          getNames: () => ue(e),
        };
      })();
      ((e, t) => {
        const n = pa(),
          o = (e) => M.from(e.attr(n)).bind(t.lookup),
          r = (e) => {
            var t, n;
            e.attr(ha(), null), e.attr(pa(), null), e.attr(ba(), null);
            const o = M.from(e.attr(ya()))
                .map((e) => e.split(","))
                .getOr([]),
              r = M.from(e.attr(va()))
                .map((e) => e.split(","))
                .getOr([]);
            V(o, (t) => e.attr(t, null));
            const s =
                null !==
                  (n =
                    null === (t = e.attr("class")) || void 0 === t
                      ? void 0
                      : t.split(" ")) && void 0 !== n
                  ? n
                  : [],
              a = oe(s, [ga()].concat(r));
            e.attr("class", a.length > 0 ? a.join(" ") : null),
              e.attr(va(), null),
              e.attr(ya(), null);
          };
        e.serializer.addTempAttr(ba()),
          e.serializer.addAttributeFilter(n, (e) => {
            for (const t of e)
              o(t).each((e) => {
                !1 === e.persistent && ("span" === t.name ? t.unwrap() : r(t));
              });
          });
      })(e, t);
      const n = ((e, t) => {
          const n = ra({}),
            o = () => ({ listeners: [], previous: ua() }),
            r = (e, t) => {
              s(e, (e) => (t(e), e));
            },
            s = (e, t) => {
              const r = n.get(),
                s = t(we(r, e).getOrThunk(o));
              (r[e] = s), n.set(r);
            },
            a = (t, n) => {
              V(ka(e, t), (e) => {
                n ? Vt(e, ba(), "true") : Yt(e, ba());
              });
            },
            i = fa(() => {
              const n = se(t.getNames());
              V(n, (t) => {
                s(t, (n) => {
                  const o = n.previous.get();
                  return (
                    wa(e, M.some(t)).fold(
                      () => {
                        o.each((e) => {
                          ((e) => {
                            r(e, (t) => {
                              V(t.listeners, (t) => t(!1, e));
                            });
                          })(t),
                            n.previous.clear(),
                            a(e, !1);
                        });
                      },
                      ({ uid: e, name: t, elements: s }) => {
                        Bt(o, e) ||
                          (o.each((e) => a(e, !1)),
                          ((e, t, n) => {
                            r(e, (o) => {
                              V(o.listeners, (o) =>
                                o(!0, e, { uid: t, nodes: $(n, (e) => e.dom) })
                              );
                            });
                          })(t, e, s),
                          n.previous.set(e),
                          a(e, !0));
                      }
                    ),
                    { previous: n.previous, listeners: n.listeners }
                  );
                });
              });
            }, 30);
          return (
            e.on("remove", () => {
              i.cancel();
            }),
            e.on("NodeChange", () => {
              i.throttle();
            }),
            {
              addListener: (e, t) => {
                s(e, (e) => ({
                  previous: e.previous,
                  listeners: e.listeners.concat([t]),
                }));
              },
            }
          );
        })(e, t),
        o = Ht("span"),
        r = (e) => {
          V(e, (e) => {
            o(e)
              ? no(e)
              : ((e) => {
                  rn(e, ga()),
                    Yt(e, `${ha()}`),
                    Yt(e, `${pa()}`),
                    Yt(e, `${ba()}`);
                  const t = Kt(e, `${ya()}`)
                      .map((e) => e.split(","))
                      .getOr([]),
                    n = Kt(e, `${va()}`)
                      .map((e) => e.split(","))
                      .getOr([]);
                  var o;
                  V(t, (t) => Yt(e, t)),
                    (o = e),
                    V(n, (e) => {
                      rn(o, e);
                    }),
                    Yt(e, `${va()}`),
                    Yt(e, `${ya()}`);
                })(e);
          });
        };
      return {
        register: (e, n) => {
          t.register(e, n);
        },
        annotate: (n, o) => {
          t.lookup(n).each((t) => {
            ((e, t, n, o) => {
              e.undoManager.transact(() => {
                const r = e.selection,
                  s = r.getRng(),
                  a = mu(e).length > 0,
                  i = Ea("mce-annotation");
                if (
                  (s.collapsed &&
                    !a &&
                    ((e, t) => {
                      const n = nm(e, t, [{ inline: "span" }]);
                      t.setStart(n.startContainer, n.startOffset),
                        t.setEnd(n.endContainer, n.endOffset),
                        e.selection.setRng(t);
                    })(e, s),
                  r.getRng().collapsed && !a)
                ) {
                  const s = am(e.getDoc(), i, o, t, n.decorate);
                  ro(s, pr), r.getRng().insertNode(s.dom), r.select(s.dom);
                } else
                  Cu(r, !1, () => {
                    yu(e, (r) => {
                      im(e, r, i, t, n.decorate, o);
                    });
                  });
              });
            })(e, n, t, o);
          });
        },
        annotationChanged: (e, t) => {
          n.addListener(e, t);
        },
        remove: (t) => {
          const n = e.selection.getBookmark();
          wa(e, M.some(t)).each(({ elements: e }) => {
            r(e);
          }),
            e.selection.moveToBookmark(n);
        },
        removeAll: (t) => {
          const n = e.selection.getBookmark();
          fe(Sa(e, t), (e, t) => {
            r(e);
          }),
            e.selection.moveToBookmark(n);
        },
        getAll: (t) => {
          const n = Sa(e, t);
          return ge(n, (e) => $(e, (e) => e.dom));
        },
      };
    },
    dm = (e) => ({ getBookmark: O(Qc, e), moveToBookmark: O(Jc, e) });
  dm.isBookmarkNode = Zc;
  const cm = (e, t, n) =>
      !n.collapsed &&
      H(n.getClientRects(), (n) =>
        ((e, t, n) =>
          t >= e.left && t <= e.right && n >= e.top && n <= e.bottom)(n, e, t)
      ),
    um = (e, t, n) => {
      e.dispatch(t, n);
    },
    mm = (e, t, n, o) => {
      e.dispatch("FormatApply", { format: t, node: n, vars: o });
    },
    fm = (e, t, n, o) => {
      e.dispatch("FormatRemove", { format: t, node: n, vars: o });
    },
    gm = (e, t) => e.dispatch("SetContent", t),
    pm = (e, t) => e.dispatch("GetContent", t),
    hm = (e, t) => e.dispatch("PastePlainTextToggle", { state: t }),
    bm = {
      BACKSPACE: 8,
      DELETE: 46,
      DOWN: 40,
      ENTER: 13,
      ESC: 27,
      LEFT: 37,
      RIGHT: 39,
      SPACEBAR: 32,
      TAB: 9,
      UP: 38,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      modifierPressed: (e) =>
        e.shiftKey || e.ctrlKey || e.altKey || bm.metaKeyPressed(e),
      metaKeyPressed: (e) =>
        Nt.os.isMacOS() || Nt.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey,
    },
    vm = "data-mce-selected",
    ym = Math.abs,
    Cm = Math.round,
    wm = {
      nw: [0, 0, -1, -1],
      ne: [1, 0, 1, -1],
      se: [1, 1, 1, 1],
      sw: [0, 1, -1, 1],
    },
    xm = (e, t) => {
      const n = t.dom,
        o = t.getDoc(),
        r = document,
        s = t.getBody();
      let a, i, l, d, c, u, m, f, g, p, h, b, v, y, w;
      const x = (e) => C(e) && (Lo(e) || n.is(e, "figure.image")),
        k = (e) => zo(e) || n.hasClass(e, "mce-preview-object"),
        S = (e) => {
          const n = e.target;
          ((e, t) => {
            if (
              ((e) => "longpress" === e.type || 0 === e.type.indexOf("touch"))(
                e
              )
            ) {
              const n = e.touches[0];
              return x(e.target) && !cm(n.clientX, n.clientY, t);
            }
            return x(e.target) && !cm(e.clientX, e.clientY, t);
          })(e, t.selection.getRng()) &&
            !e.isDefaultPrevented() &&
            t.selection.select(n);
        },
        _ = (e) =>
          n.hasClass(e, "mce-preview-object") && C(e.firstElementChild)
            ? [e, e.firstElementChild]
            : n.is(e, "figure.image")
            ? [e.querySelector("img")]
            : [e],
        E = (e) => {
          const o = _l(t);
          return (
            !!o &&
            "false" !== e.getAttribute("data-mce-resize") &&
            e !== t.getBody() &&
            (n.hasClass(e, "mce-preview-object") && C(e.firstElementChild)
              ? pn(mn(e.firstElementChild), o)
              : pn(mn(e), o))
          );
        },
        N = (e, o, r) => {
          if (C(r)) {
            const s = _(e);
            V(s, (e) => {
              e.style[o] || !t.schema.isValid(e.nodeName.toLowerCase(), o)
                ? n.setStyle(e, o, r)
                : n.setAttrib(e, o, "" + r);
            });
          }
        },
        R = (e, t, n) => {
          N(e, "width", t), N(e, "height", n);
        },
        A = (e) => {
          let o, r, c, C, S;
          (o = e.screenX - u),
            (r = e.screenY - m),
            (b = o * d[2] + f),
            (v = r * d[3] + g),
            (b = b < 5 ? 5 : b),
            (v = v < 5 ? 5 : v),
            (c =
              (x(a) || k(a)) && !1 !== El(t)
                ? !bm.modifierPressed(e)
                : bm.modifierPressed(e)),
            c &&
              (ym(o) > ym(r)
                ? ((v = Cm(b * p)), (b = Cm(v / p)))
                : ((b = Cm(v / p)), (v = Cm(b * p)))),
            R(i, b, v),
            (C = d.startPos.x + o),
            (S = d.startPos.y + r),
            (C = C > 0 ? C : 0),
            (S = S > 0 ? S : 0),
            n.setStyles(l, { left: C, top: S, display: "block" }),
            (l.innerHTML = b + " &times; " + v),
            d[2] < 0 &&
              i.clientWidth <= b &&
              n.setStyle(i, "left", void 0 + (f - b)),
            d[3] < 0 &&
              i.clientHeight <= v &&
              n.setStyle(i, "top", void 0 + (g - v)),
            (o = s.scrollWidth - y),
            (r = s.scrollHeight - w),
            o + r !== 0 && n.setStyles(l, { left: C - o, top: S - r }),
            h ||
              (((e, t, n, o, r) => {
                e.dispatch("ObjectResizeStart", {
                  target: t,
                  width: n,
                  height: o,
                  origin: r,
                });
              })(t, a, f, g, "corner-" + d.name),
              (h = !0));
        },
        O = () => {
          const e = h;
          (h = !1),
            e && (N(a, "width", b), N(a, "height", v)),
            n.unbind(o, "mousemove", A),
            n.unbind(o, "mouseup", O),
            r !== o && (n.unbind(r, "mousemove", A), n.unbind(r, "mouseup", O)),
            n.remove(i),
            n.remove(l),
            n.remove(c),
            T(a),
            e &&
              (((e, t, n, o, r) => {
                e.dispatch("ObjectResized", {
                  target: t,
                  width: n,
                  height: o,
                  origin: r,
                });
              })(t, a, b, v, "corner-" + d.name),
              n.setAttrib(a, "style", n.getAttrib(a, "style"))),
            t.nodeChanged();
        },
        T = (e) => {
          M();
          const h = n.getPos(e, s),
            C = h.x,
            x = h.y,
            S = e.getBoundingClientRect(),
            N = S.width || S.right - S.left,
            T = S.height || S.bottom - S.top;
          a !== e && (D(), (a = e), (b = v = 0));
          const B = t.dispatch("ObjectSelected", { target: e });
          E(e) && !B.isDefaultPrevented()
            ? fe(wm, (e, t) => {
                let h = n.get("mceResizeHandle" + t);
                h && n.remove(h),
                  (h = n.add(s, "div", {
                    id: "mceResizeHandle" + t,
                    "data-mce-bogus": "all",
                    class: "mce-resizehandle",
                    unselectable: !0,
                    style: "cursor:" + t + "-resize; margin:0; padding:0",
                  })),
                  n.bind(h, "mousedown", (h) => {
                    h.stopImmediatePropagation(),
                      h.preventDefault(),
                      ((h) => {
                        const b = _(a)[0];
                        var v;
                        (u = h.screenX),
                          (m = h.screenY),
                          (f = b.clientWidth),
                          (g = b.clientHeight),
                          (p = g / f),
                          (d = e),
                          (d.name = t),
                          (d.startPos = { x: N * e[0] + C, y: T * e[1] + x }),
                          (y = s.scrollWidth),
                          (w = s.scrollHeight),
                          (c = n.add(s, "div", {
                            class: "mce-resize-backdrop",
                            "data-mce-bogus": "all",
                          })),
                          n.setStyles(c, {
                            position: "fixed",
                            left: "0",
                            top: "0",
                            width: "100%",
                            height: "100%",
                          }),
                          (i = k((v = a))
                            ? n.create("img", { src: Nt.transparentSrc })
                            : v.cloneNode(!0)),
                          n.addClass(i, "mce-clonedresizable"),
                          n.setAttrib(i, "data-mce-bogus", "all"),
                          (i.contentEditable = "false"),
                          n.setStyles(i, { left: C, top: x, margin: 0 }),
                          R(i, N, T),
                          i.removeAttribute(vm),
                          s.appendChild(i),
                          n.bind(o, "mousemove", A),
                          n.bind(o, "mouseup", O),
                          r !== o &&
                            (n.bind(r, "mousemove", A),
                            n.bind(r, "mouseup", O)),
                          (l = n.add(
                            s,
                            "div",
                            {
                              class: "mce-resize-helper",
                              "data-mce-bogus": "all",
                            },
                            f + " &times; " + g
                          ));
                      })(h);
                  }),
                  (e.elm = h),
                  n.setStyles(h, {
                    left: N * e[0] + C - h.offsetWidth / 2,
                    top: T * e[1] + x - h.offsetHeight / 2,
                  });
              })
            : D(!1);
        },
        B = ma(T, 0),
        D = (e = !0) => {
          B.cancel(),
            M(),
            a && e && a.removeAttribute(vm),
            fe(wm, (e, t) => {
              const o = n.get("mceResizeHandle" + t);
              o && (n.unbind(o), n.remove(o));
            });
        },
        P = (e, t) => n.isChildOf(e, t),
        L = (o) => {
          if (h || t.removed || t.composing) return;
          const r = "mousedown" === o.type ? o.target : e.getNode(),
            a = Xo(
              mn(r),
              "table,img,figure.image,hr,video,span.mce-preview-object"
            )
              .map((e) => e.dom)
              .getOrUndefined(),
            i = C(a) ? n.getAttrib(a, vm, "1") : "1";
          if (
            (V(
              n.select("img[data-mce-selected],hr[data-mce-selected]"),
              (e) => {
                e.removeAttribute(vm);
              }
            ),
            C(a) && P(a, s))
          ) {
            I();
            const t = e.getStart(!0);
            if (P(t, a) && P(e.getEnd(!0), a))
              return n.setAttrib(a, vm, i), void B.throttle(a);
          }
          D();
        },
        M = () => {
          fe(wm, (e) => {
            e.elm && (n.unbind(e.elm), delete e.elm);
          });
        },
        I = () => {
          try {
            t.getDoc().execCommand("enableObjectResizing", !1, "false");
          } catch (e) {}
        };
      return (
        t.on("init", () => {
          I(),
            t.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", L),
            t.on("keyup compositionend", (e) => {
              a && "TABLE" === a.nodeName && L(e);
            }),
            t.on("hide blur", D),
            t.on("contextmenu longpress", S, !0);
        }),
        t.on("remove", M),
        {
          isResizable: E,
          showResizeRect: T,
          hideResizeRect: D,
          updateResizeRect: L,
          destroy: () => {
            B.cancel(), (a = i = c = null);
          },
        }
      );
    },
    km = (e, t, n) => {
      const o = e.document.createRange();
      var r;
      return (
        (r = o),
        t.fold(
          (e) => {
            r.setStartBefore(e.dom);
          },
          (e, t) => {
            r.setStart(e.dom, t);
          },
          (e) => {
            r.setStartAfter(e.dom);
          }
        ),
        ((e, t) => {
          t.fold(
            (t) => {
              e.setEndBefore(t.dom);
            },
            (t, n) => {
              e.setEnd(t.dom, n);
            },
            (t) => {
              e.setEndAfter(t.dom);
            }
          );
        })(o, n),
        o
      );
    },
    Sm = (e, t, n, o, r) => {
      const s = e.document.createRange();
      return s.setStart(t.dom, n), s.setEnd(o.dom, r), s;
    },
    _m = Ti([
      { ltr: ["start", "soffset", "finish", "foffset"] },
      { rtl: ["start", "soffset", "finish", "foffset"] },
    ]),
    Em = (e, t, n) =>
      t(mn(n.startContainer), n.startOffset, mn(n.endContainer), n.endOffset);
  _m.ltr, _m.rtl;
  const Nm = (e, t, n, o) => ({ start: e, soffset: t, finish: n, foffset: o }),
    Rm = document.caretPositionFromPoint
      ? (e, t, n) => {
          var o, r;
          return M.from(
            null === (r = (o = e.dom).caretPositionFromPoint) || void 0 === r
              ? void 0
              : r.call(o, t, n)
          ).bind((t) => {
            if (null === t.offsetNode) return M.none();
            const n = e.dom.createRange();
            return n.setStart(t.offsetNode, t.offset), n.collapse(), M.some(n);
          });
        }
      : document.caretRangeFromPoint
      ? (e, t, n) => {
          var o, r;
          return M.from(
            null === (r = (o = e.dom).caretRangeFromPoint) || void 0 === r
              ? void 0
              : r.call(o, t, n)
          );
        }
      : M.none,
    Am = Ti([
      { before: ["element"] },
      { on: ["element", "offset"] },
      { after: ["element"] },
    ]),
    Om = {
      before: Am.before,
      on: Am.on,
      after: Am.after,
      cata: (e, t, n, o) => e.fold(t, n, o),
      getStart: (e) => e.fold(R, R, R),
    },
    Tm = Ti([
      { domRange: ["rng"] },
      { relative: ["startSitu", "finishSitu"] },
      { exact: ["start", "soffset", "finish", "foffset"] },
    ]),
    Bm = {
      domRange: Tm.domRange,
      relative: Tm.relative,
      exact: Tm.exact,
      exactFromRange: (e) => Tm.exact(e.start, e.soffset, e.finish, e.foffset),
      getWin: (e) => {
        const t = ((e) =>
          e.match({
            domRange: (e) => mn(e.startContainer),
            relative: (e, t) => Om.getStart(e),
            exact: (e, t, n, o) => e,
          }))(e);
        return wn(t);
      },
      range: Nm,
    },
    Dm = (e, t) => {
      const n = Lt(e);
      return "input" === n
        ? Om.after(e)
        : j(["br", "img"], n)
        ? 0 === t
          ? Om.before(e)
          : Om.after(e)
        : Om.on(e, t);
    },
    Pm = (e, t) => {
      const n = e.fold(Om.before, Dm, Om.after),
        o = t.fold(Om.before, Dm, Om.after);
      return Bm.relative(n, o);
    },
    Lm = (e, t, n, o) => {
      const r = Dm(e, t),
        s = Dm(n, o);
      return Bm.relative(r, s);
    },
    Mm = (e, t) => {
      const n = (t || document).createDocumentFragment();
      return (
        V(e, (e) => {
          n.appendChild(e.dom);
        }),
        mn(n)
      );
    },
    Im = (e) => {
      const t = Bm.getWin(e).dom,
        n = (e, n, o, r) => Sm(t, e, n, o, r),
        o = ((e) =>
          e.match({
            domRange: (e) => {
              const t = mn(e.startContainer),
                n = mn(e.endContainer);
              return Lm(t, e.startOffset, n, e.endOffset);
            },
            relative: Pm,
            exact: Lm,
          }))(e);
      return ((e, t) => {
        const n = ((e, t) =>
          t.match({
            domRange: (e) => ({ ltr: N(e), rtl: M.none }),
            relative: (t, n) => ({
              ltr: De(() => km(e, t, n)),
              rtl: De(() => M.some(km(e, n, t))),
            }),
            exact: (t, n, o, r) => ({
              ltr: De(() => Sm(e, t, n, o, r)),
              rtl: De(() => M.some(Sm(e, o, r, t, n))),
            }),
          }))(e, t);
        return ((e, t) => {
          const n = t.ltr();
          return n.collapsed
            ? t
                .rtl()
                .filter((e) => !1 === e.collapsed)
                .map((e) =>
                  _m.rtl(
                    mn(e.endContainer),
                    e.endOffset,
                    mn(e.startContainer),
                    e.startOffset
                  )
                )
                .getOrThunk(() => Em(0, _m.ltr, n))
            : Em(0, _m.ltr, n);
        })(0, n);
      })(t, o).match({ ltr: n, rtl: n });
    },
    Fm = (e, t, n) =>
      ((e, t, n) =>
        ((e, t, n) => {
          const o = mn(e.document);
          return Rm(o, t, n).map((e) =>
            Nm(
              mn(e.startContainer),
              e.startOffset,
              mn(e.endContainer),
              e.endOffset
            )
          );
        })(e, t, n))(wn(mn(n)).dom, e, t)
        .map((e) => {
          const t = n.createRange();
          return (
            t.setStart(e.start.dom, e.soffset),
            t.setEnd(e.finish.dom, e.foffset),
            t
          );
        })
        .getOrUndefined(),
    Um = (e, t) =>
      C(e) &&
      C(t) &&
      e.startContainer === t.startContainer &&
      e.startOffset === t.startOffset &&
      e.endContainer === t.endContainer &&
      e.endOffset === t.endOffset,
    zm = (e, t, n) =>
      null !==
      ((e, t, n) => {
        let o = e;
        for (; o && o !== t; ) {
          if (n(o)) return o;
          o = o.parentNode;
        }
        return null;
      })(e, t, n),
    jm = (e, t, n) => zm(e, t, (e) => e.nodeName === n),
    Hm = (e, t) => Br(e) && !zm(e, t, zc),
    $m = (e, t, n) => {
      const o = t.parentNode;
      if (o) {
        const r = new Zo(t, e.getParent(o, e.isBlock) || e.getRoot());
        let s;
        for (; (s = r[n ? "prev" : "next"]()); ) if (Po(s)) return !0;
      }
      return !1;
    },
    Vm = (e, t, n, o, r) => {
      const s = e.getRoot(),
        a = e.schema.getNonEmptyElements(),
        i = r.parentNode;
      let l, d;
      if (!i) return M.none();
      const c = e.getParent(i, e.isBlock) || s;
      if (o && Po(r) && t && e.isEmpty(c)) return M.some(ai(i, e.nodeIndex(r)));
      const u = new Zo(r, c);
      for (; (d = u[o ? "prev" : "next"]()); ) {
        if ("false" === e.getContentEditableParent(d) || Hm(d, s))
          return M.none();
        if (Ro(d) && d.data.length > 0)
          return jm(d, s, "A")
            ? M.none()
            : M.some(ai(d, o ? d.data.length : 0));
        if (e.isBlock(d) || a[d.nodeName.toLowerCase()]) return M.none();
        l = d;
      }
      return To(l) ? M.none() : n && l ? M.some(ai(l, 0)) : M.none();
    },
    qm = (e, t, n, o) => {
      const r = e.getRoot();
      let s,
        a = !1,
        i = n ? o.startContainer : o.endContainer,
        l = n ? o.startOffset : o.endOffset;
      const d = yo(i) && l === i.childNodes.length,
        c = e.schema.getNonEmptyElements();
      let u = n;
      if (Br(i)) return M.none();
      if (
        (yo(i) && l > i.childNodes.length - 1 && (u = !1),
        Bo(i) && ((i = r), (l = 0)),
        i === r)
      ) {
        if (u && ((s = i.childNodes[l > 0 ? l - 1 : 0]), s)) {
          if (Br(s)) return M.none();
          if (c[s.nodeName] || _o(s)) return M.none();
        }
        if (i.hasChildNodes()) {
          if (
            ((l = Math.min(!u && l > 0 ? l - 1 : l, i.childNodes.length - 1)),
            (i = i.childNodes[l]),
            (l = Ro(i) && d ? i.data.length : 0),
            !t && i === r.lastChild && _o(i))
          )
            return M.none();
          if (
            ((e, t) => {
              let n = t;
              for (; n && n !== e; ) {
                if (Io(n)) return !0;
                n = n.parentNode;
              }
              return !1;
            })(r, i) ||
            Br(i)
          )
            return M.none();
          if (i.hasChildNodes() && !_o(i)) {
            s = i;
            const t = new Zo(i, r);
            do {
              if (Io(s) || Br(s)) {
                a = !1;
                break;
              }
              if (Ro(s) && s.data.length > 0) {
                (l = u ? 0 : s.data.length), (i = s), (a = !0);
                break;
              }
              if (c[s.nodeName.toLowerCase()] && !Uo(s)) {
                (l = e.nodeIndex(s)), (i = s.parentNode), u || l++, (a = !0);
                break;
              }
            } while ((s = u ? t.next() : t.prev()));
          }
        }
      }
      return (
        t &&
          (Ro(i) &&
            0 === l &&
            Vm(e, d, t, !0, i).each((e) => {
              (i = e.container()), (l = e.offset()), (a = !0);
            }),
          yo(i) &&
            ((s = i.childNodes[l]),
            s || (s = i.childNodes[l - 1]),
            !s ||
              !Po(s) ||
              ((e, t) => {
                var n;
                return (
                  "A" ===
                  (null === (n = e.previousSibling) || void 0 === n
                    ? void 0
                    : n.nodeName)
                );
              })(s) ||
              $m(e, s, !1) ||
              $m(e, s, !0) ||
              Vm(e, d, t, !0, s).each((e) => {
                (i = e.container()), (l = e.offset()), (a = !0);
              }))),
        u &&
          !t &&
          Ro(i) &&
          l === i.data.length &&
          Vm(e, d, t, !1, i).each((e) => {
            (i = e.container()), (l = e.offset()), (a = !0);
          }),
        a && i ? M.some(ai(i, l)) : M.none()
      );
    },
    Wm = (e, t) => {
      const n = t.collapsed,
        o = t.cloneRange(),
        r = ai.fromRangeStart(t);
      return (
        qm(e, n, !0, o).each((e) => {
          (n && ai.isAbove(r, e)) || o.setStart(e.container(), e.offset());
        }),
        n ||
          qm(e, n, !1, o).each((e) => {
            o.setEnd(e.container(), e.offset());
          }),
        n && o.collapse(!0),
        Um(t, o) ? M.none() : M.some(o)
      );
    },
    Km = (e, t) => e.splitText(t),
    Gm = (e) => {
      let t = e.startContainer,
        n = e.startOffset,
        o = e.endContainer,
        r = e.endOffset;
      if (t === o && Ro(t)) {
        if (n > 0 && n < t.data.length)
          if (((o = Km(t, n)), (t = o.previousSibling), r > n)) {
            r -= n;
            const e = Km(o, r).previousSibling;
            (t = o = e), (r = e.data.length), (n = 0);
          } else r = 0;
      } else if (
        (Ro(t) && n > 0 && n < t.data.length && ((t = Km(t, n)), (n = 0)),
        Ro(o) && r > 0 && r < o.data.length)
      ) {
        const e = Km(o, r).previousSibling;
        (o = e), (r = e.data.length);
      }
      return {
        startContainer: t,
        startOffset: n,
        endContainer: o,
        endOffset: r,
      };
    },
    Ym = (e) => ({
      walk: (t, n) => om(e, t, n),
      split: Gm,
      normalize: (t) =>
        Wm(e, t).fold(
          P,
          (e) => (
            t.setStart(e.startContainer, e.startOffset),
            t.setEnd(e.endContainer, e.endOffset),
            !0
          )
        ),
    });
  (Ym.compareRanges = Um),
    (Ym.getCaretRangeFromPoint = Fm),
    (Ym.getSelectedNode = Ua),
    (Ym.getNode = za);
  const Xm = ((e, t) => {
      const n = (t) => {
          const n = ((e) => {
            const t = e.dom;
            return zn(e) ? t.getBoundingClientRect().height : t.offsetHeight;
          })(t);
          if (n <= 0 || null === n) {
            const n = Vn(t, e);
            return parseFloat(n) || 0;
          }
          return n;
        },
        o = (e, t) =>
          Y(
            t,
            (t, n) => {
              const o = Vn(e, n),
                r = void 0 === o ? 0 : parseInt(o, 10);
              return isNaN(r) ? t : t + r;
            },
            0
          );
      return {
        set: (t, n) => {
          if (!x(n) && !n.match(/^[0-9]+$/))
            throw new Error(
              e + ".set accepts only positive integer values. Value was " + n
            );
          const o = t.dom;
          an(o) && (o.style[e] = n + "px");
        },
        get: n,
        getOuter: n,
        aggregate: o,
        max: (e, t, n) => {
          const r = o(e, n);
          return t > r ? t - r : 0;
        },
      };
    })("height"),
    Qm = () => mn(document),
    Jm = (e, t) =>
      e.view(t).fold(N([]), (t) => {
        const n = e.owner(t),
          o = Jm(e, n);
        return [t].concat(o);
      });
  var Zm = Object.freeze({
    __proto__: null,
    view: (e) => {
      var t;
      return (
        e.dom === document
          ? M.none()
          : M.from(
              null === (t = e.dom.defaultView) || void 0 === t
                ? void 0
                : t.frameElement
            )
      ).map(mn);
    },
    owner: (e) => Cn(e),
  });
  const ef = (e) => "textarea" === Lt(e),
    tf = (e, t) => {
      const n = ((e) => {
          const t = e.dom.ownerDocument,
            n = t.body,
            o = t.defaultView,
            r = t.documentElement;
          if (n === e.dom) return lo(n.offsetLeft, n.offsetTop);
          const s = co(null == o ? void 0 : o.pageYOffset, r.scrollTop),
            a = co(null == o ? void 0 : o.pageXOffset, r.scrollLeft),
            i = co(r.clientTop, n.clientTop),
            l = co(r.clientLeft, n.clientLeft);
          return uo(e).translate(a - l, s - i);
        })(e),
        o = ((e) => Xm.get(e))(e);
      return { element: e, bottom: n.top + o, height: o, pos: n, cleanup: t };
    },
    nf = (e, t, n, o) => {
      af(e, (r, s) => rf(e, t, n, o), n);
    },
    of = (e, t, n, o, r) => {
      const s = { elm: o.element.dom, alignToTop: r };
      ((e, t) => e.dispatch("ScrollIntoView", t).isDefaultPrevented())(e, s) ||
        (n(t, mo(t).top, o, r),
        ((e, t) => {
          e.dispatch("AfterScrollIntoView", t);
        })(e, s));
    },
    rf = (e, t, n, o) => {
      const r = mn(e.getBody()),
        s = mn(e.getDoc());
      r.dom.offsetWidth;
      const a = ((e, t) => {
        const n = ((e, t) => {
            const n = Nn(e);
            if (0 === n.length || ef(e)) return { element: e, offset: t };
            if (t < n.length && !ef(n[t])) return { element: n[t], offset: 0 };
            {
              const o = n[n.length - 1];
              return ef(o)
                ? { element: e, offset: t }
                : "img" === Lt(o)
                ? { element: o, offset: 1 }
                : Ut(o)
                ? { element: o, offset: Cr(o).length }
                : { element: o, offset: Nn(o).length };
            }
          })(e, t),
          o = dn(
            '<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>'
          );
        return Yn(n.element, o), tf(o, () => to(o));
      })(mn(n.startContainer), n.startOffset);
      of(e, s, t, a, o), a.cleanup();
    },
    sf = (e, t, n, o) => {
      const r = mn(e.getDoc());
      of(e, r, n, ((e) => tf(mn(e), S))(t), o);
    },
    af = (e, t, n) => {
      const o = n.startContainer,
        r = n.startOffset,
        s = n.endContainer,
        a = n.endOffset;
      t(mn(o), mn(s));
      const i = e.dom.createRng();
      i.setStart(o, r), i.setEnd(s, a), e.selection.setRng(n);
    },
    lf = (e, t, n, o) => {
      const r = e.pos;
      if (n) fo(r.left, r.top, o);
      else {
        const n = r.top - t + e.height;
        fo(r.left, n, o);
      }
    },
    df = (e, t, n, o, r) => {
      const s = n + t,
        a = o.pos.top,
        i = o.bottom,
        l = i - a >= n;
      a < t
        ? lf(o, n, !1 !== r, e)
        : a > s
        ? lf(o, n, l ? !1 !== r : !0 === r, e)
        : i > s && !l && lf(o, n, !0 === r, e);
    },
    cf = (e, t, n, o) => {
      const r = wn(e).dom.innerHeight;
      df(e, t, r, n, o);
    },
    uf = (e, t, n, o) => {
      const r = wn(e).dom.innerHeight;
      df(e, t, r, n, o);
      const s = ((e) => {
          const t = Qm(),
            n = mo(t),
            o = ((e, t) => {
              const n = t.owner(e);
              return Jm(t, n);
            })(e, Zm),
            r = uo(e),
            s = G(
              o,
              (e, t) => {
                const n = uo(t);
                return { left: e.left + n.left, top: e.top + n.top };
              },
              { left: 0, top: 0 }
            );
          return lo(s.left + r.left + n.left, s.top + r.top + n.top);
        })(n.element),
        a = ho(window);
      s.top < a.y
        ? go(n.element, !1 !== o)
        : s.top > a.bottom && go(n.element, !0 === o);
    },
    mf = (e, t, n) => nf(e, cf, t, n),
    ff = (e, t, n) => sf(e, t, cf, n),
    gf = (e, t, n) => nf(e, uf, t, n),
    pf = (e, t, n) => sf(e, t, uf, n),
    hf = (e, t, n) => {
      (e.inline ? mf : gf)(e, t, n);
    },
    bf = (e) => e.dom.focus(),
    vf = (e) => {
      const t = Ln(e).dom;
      return e.dom === t.activeElement;
    },
    yf = (e = Qm()) => M.from(e.dom.activeElement).map(mn),
    Cf = (e, t) => {
      const n = Ut(t) ? Cr(t).length : Nn(t).length + 1;
      return e > n ? n : e < 0 ? 0 : e;
    },
    wf = (e) =>
      Bm.range(
        e.start,
        Cf(e.soffset, e.start),
        e.finish,
        Cf(e.foffset, e.finish)
      ),
    xf = (e, t) => !vo(t.dom) && (vn(e, t) || bn(e, t)),
    kf = (e) => (t) => xf(e, t.start) && xf(e, t.finish),
    Sf = (e) =>
      Bm.range(
        mn(e.startContainer),
        e.startOffset,
        mn(e.endContainer),
        e.endOffset
      ),
    _f = (e) => {
      const t = document.createRange();
      try {
        return (
          t.setStart(e.start.dom, e.soffset),
          t.setEnd(e.finish.dom, e.foffset),
          M.some(t)
        );
      } catch (e) {
        return M.none();
      }
    },
    Ef = (e) => {
      const t = ((e) => e.inline)(e)
        ? ((n = mn(e.getBody())),
          ((e) => {
            const t = e.getSelection();
            return (
              t && 0 !== t.rangeCount ? M.from(t.getRangeAt(0)) : M.none()
            ).map(Sf);
          })(wn(n).dom).filter(kf(n)))
        : M.none();
      var n;
      e.bookmark = t.isSome() ? t : e.bookmark;
    },
    Nf = (e) =>
      (e.bookmark ? e.bookmark : M.none())
        .bind((t) => {
          return (
            (n = mn(e.getBody())), (o = t), M.from(o).filter(kf(n)).map(wf)
          );
          var n, o;
        })
        .bind(_f),
    Rf = {
      isEditorUIElement: (e) => {
        const t = e.className.toString();
        return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
      },
    },
    Af = {
      setEditorTimeout: (e, t, n) =>
        ((e, t) => (x(t) || (t = 0), setTimeout(e, t)))(() => {
          e.removed || t();
        }, n),
      setEditorInterval: (e, t, n) => {
        const o = ((e, t) => (x(t) || (t = 0), setInterval(e, t)))(() => {
          e.removed ? clearInterval(o) : t();
        }, n);
        return o;
      },
    };
  let Of;
  const Tf = ta.DOM,
    Bf = (e, t) => {
      const n = Ul(e),
        o = Tf.getParent(
          t,
          (t) =>
            ((e) => yo(e) && Rf.isEditorUIElement(e))(t) ||
            (!!n && e.dom.is(t, n))
        );
      return null !== o;
    },
    Df = (e, t) => {
      const n = t.editor;
      ((e) => {
        const t = ma(() => {
          Ef(e);
        }, 0);
        e.on("init", () => {
          e.inline &&
            ((e, t) => {
              const n = () => {
                t.throttle();
              };
              ta.DOM.bind(document, "mouseup", n),
                e.on("remove", () => {
                  ta.DOM.unbind(document, "mouseup", n);
                });
            })(e, t),
            ((e, t) => {
              ((e, t) => {
                e.on("mouseup touchend", (e) => {
                  t.throttle();
                });
              })(e, t),
                e.on("keyup NodeChange AfterSetSelectionRange", (t) => {
                  ((e) => "nodechange" === e.type && e.selectionChange)(t) ||
                    Ef(e);
                });
            })(e, t);
        }),
          e.on("remove", () => {
            t.cancel();
          });
      })(n),
        n.on("focusin", () => {
          const t = e.focusedEditor;
          t !== n &&
            (t && t.dispatch("blur", { focusedEditor: n }),
            e.setActive(n),
            (e.focusedEditor = n),
            n.dispatch("focus", { blurredEditor: t }),
            n.focus(!0));
        }),
        n.on("focusout", () => {
          Af.setEditorTimeout(n, () => {
            const t = e.focusedEditor;
            Bf(
              n,
              ((e) => {
                try {
                  const t = Ln(mn(e.getElement()));
                  return yf(t).fold(
                    () => document.body,
                    (e) => e.dom
                  );
                } catch (e) {
                  return document.body;
                }
              })(n)
            ) ||
              t !== n ||
              (n.dispatch("blur", { focusedEditor: null }),
              (e.focusedEditor = null));
          });
        }),
        Of ||
          ((Of = (t) => {
            const n = e.activeEditor;
            n &&
              Fn(t).each((t) => {
                const o = t;
                o.ownerDocument === document &&
                  (o === document.body ||
                    Bf(n, o) ||
                    e.focusedEditor !== n ||
                    (n.dispatch("blur", { focusedEditor: null }),
                    (e.focusedEditor = null)));
              });
          }),
          Tf.bind(document, "focusin", Of));
    },
    Pf = (e, t) => {
      e.focusedEditor === t.editor && (e.focusedEditor = null),
        !e.activeEditor &&
          Of &&
          (Tf.unbind(document, "focusin", Of), (Of = null));
    },
    Lf = (e, t) => {
      ((e, t) =>
        ((e) =>
          e.collapsed
            ? M.from(za(e.startContainer, e.startOffset)).map(mn)
            : M.none())(t).bind((t) =>
          lr(t) ? M.some(t) : vn(e, t) ? M.none() : M.some(e)
        ))(mn(e.getBody()), t)
        .bind((e) => Ic(e.dom))
        .fold(
          () => {
            e.selection.normalize();
          },
          (t) => e.selection.setRng(t.toRange())
        );
    },
    Mf = (e) => {
      if (e.setActive)
        try {
          e.setActive();
        } catch (t) {
          e.focus();
        }
      else e.focus();
    },
    If = (e) =>
      e.inline
        ? ((e) => {
            const t = e.getBody();
            return (
              t &&
              ((n = mn(t)),
              vf(n) ||
                ((o = n),
                yf(Ln(o)).filter((e) => o.dom.contains(e.dom))).isSome())
            );
            var n, o;
          })(e)
        : ((e) => C(e.iframeElement) && vf(mn(e.iframeElement)))(e),
    Ff = (e) => e.editorManager.setActive(e),
    Uf = (e, t, n, o, r) => {
      const s = n ? t.startContainer : t.endContainer,
        a = n ? t.startOffset : t.endOffset;
      return M.from(s)
        .map(mn)
        .map((e) => (o && t.collapsed ? e : Rn(e, r(e, a)).getOr(e)))
        .bind((e) => (Ft(e) ? M.some(e) : xn(e).filter(Ft)))
        .map((e) => e.dom)
        .getOr(e);
    },
    zf = (e, t, n = !1) => Uf(e, t, !0, n, (e, t) => Math.min(Tn(e), t)),
    jf = (e, t, n = !1) => Uf(e, t, !1, n, (e, t) => (t > 0 ? t - 1 : t)),
    Hf = (e, t) => {
      const n = e;
      for (; e && Ro(e) && 0 === e.length; )
        e = t ? e.nextSibling : e.previousSibling;
      return e || n;
    },
    $f = (e, t) =>
      $(t, (t) => {
        const n = e.dispatch("GetSelectionRange", { range: t });
        return n.range !== t ? n.range : t;
      }),
    Vf = ["img", "br"],
    qf = (e) => {
      const t = wr(e)
        .filter((e) => 0 !== e.trim().length || e.indexOf(pr) > -1)
        .isSome();
      return t || j(Vf, Lt(e));
    },
    Wf = "[data-mce-autocompleter]",
    Kf = (e, t) => {
      if (Gf(mn(e.getBody())).isNone()) {
        const o = dn(
          '<span data-mce-autocompleter="1" data-mce-bogus="1"></span>',
          e.getDoc()
        );
        Jn(o, mn(t.extractContents())),
          t.insertNode(o.dom),
          xn(o).each((e) => e.dom.normalize()),
          ((n = o),
          ((e, t) => {
            const n = (e) => {
              const o = Nn(e);
              for (let e = o.length - 1; e >= 0; e--) {
                const r = o[e];
                if (t(r)) return M.some(r);
                const s = n(r);
                if (s.isSome()) return s;
              }
              return M.none();
            };
            return n(e);
          })(n, qf)).map((t) => {
            e.selection.setCursorLocation(
              t.dom,
              ((e) =>
                "img" === Lt(e)
                  ? 1
                  : wr(e).fold(
                      () => Nn(e).length,
                      (e) => e.length
                    ))(t)
            );
          });
      }
      var n;
    },
    Gf = (e) => Yo(e, Wf),
    Yf = {
      "#text": 3,
      "#comment": 8,
      "#cdata": 4,
      "#pi": 7,
      "#doctype": 10,
      "#document-fragment": 11,
    },
    Xf = (e, t, n) => {
      const o = n ? "lastChild" : "firstChild",
        r = n ? "prev" : "next";
      if (e[o]) return e[o];
      if (e !== t) {
        let n = e[r];
        if (n) return n;
        for (let o = e.parent; o && o !== t; o = o.parent)
          if (((n = o[r]), n)) return n;
      }
    },
    Qf = (e) => {
      var t;
      const n = null !== (t = e.value) && void 0 !== t ? t : "";
      if (!Jr(n)) return !1;
      const o = e.parent;
      return !o || ("span" === o.name && !o.attr("style")) || !/^[ ]+$/.test(n);
    },
    Jf = (e) => {
      const t = "a" === e.name && !e.attr("href") && e.attr("id");
      return (
        e.attr("name") ||
        (e.attr("id") && !e.firstChild) ||
        e.attr("data-mce-bookmark") ||
        t
      );
    };
  class Zf {
    constructor(e, t) {
      (this.name = e),
        (this.type = t),
        1 === t && ((this.attributes = []), (this.attributes.map = {}));
    }
    static create(e, t) {
      const n = new Zf(e, Yf[e] || 1);
      return (
        t &&
          fe(t, (e, t) => {
            n.attr(t, e);
          }),
        n
      );
    }
    replace(e) {
      const t = this;
      return e.parent && e.remove(), t.insert(e, t), t.remove(), t;
    }
    attr(e, t) {
      const n = this;
      if (!m(e))
        return (
          C(e) &&
            fe(e, (e, t) => {
              n.attr(t, e);
            }),
          n
        );
      const o = n.attributes;
      if (o) {
        if (void 0 !== t) {
          if (null === t) {
            if (e in o.map) {
              delete o.map[e];
              let t = o.length;
              for (; t--; ) if (o[t].name === e) return o.splice(t, 1), n;
            }
            return n;
          }
          if (e in o.map) {
            let n = o.length;
            for (; n--; )
              if (o[n].name === e) {
                o[n].value = t;
                break;
              }
          } else o.push({ name: e, value: t });
          return (o.map[e] = t), n;
        }
        return o.map[e];
      }
    }
    clone() {
      const e = this,
        t = new Zf(e.name, e.type),
        n = e.attributes;
      if (n) {
        const e = [];
        e.map = {};
        for (let t = 0, o = n.length; t < o; t++) {
          const o = n[t];
          "id" !== o.name &&
            ((e[e.length] = { name: o.name, value: o.value }),
            (e.map[o.name] = o.value));
        }
        t.attributes = e;
      }
      return (t.value = e.value), t;
    }
    wrap(e) {
      const t = this;
      return t.parent && (t.parent.insert(e, t), e.append(t)), t;
    }
    unwrap() {
      const e = this;
      for (let t = e.firstChild; t; ) {
        const n = t.next;
        e.insert(t, e, !0), (t = n);
      }
      e.remove();
    }
    remove() {
      const e = this,
        t = e.parent,
        n = e.next,
        o = e.prev;
      return (
        t &&
          (t.firstChild === e
            ? ((t.firstChild = n), n && (n.prev = null))
            : o && (o.next = n),
          t.lastChild === e
            ? ((t.lastChild = o), o && (o.next = null))
            : n && (n.prev = o),
          (e.parent = e.next = e.prev = null)),
        e
      );
    }
    append(e) {
      const t = this;
      e.parent && e.remove();
      const n = t.lastChild;
      return (
        n
          ? ((n.next = e), (e.prev = n), (t.lastChild = e))
          : (t.lastChild = t.firstChild = e),
        (e.parent = t),
        e
      );
    }
    insert(e, t, n) {
      e.parent && e.remove();
      const o = t.parent || this;
      return (
        n
          ? (t === o.firstChild
              ? (o.firstChild = e)
              : t.prev && (t.prev.next = e),
            (e.prev = t.prev),
            (e.next = t),
            (t.prev = e))
          : (t === o.lastChild
              ? (o.lastChild = e)
              : t.next && (t.next.prev = e),
            (e.next = t.next),
            (e.prev = t),
            (t.next = e)),
        (e.parent = o),
        e
      );
    }
    getAll(e) {
      const t = this,
        n = [];
      for (let o = t.firstChild; o; o = Xf(o, t)) o.name === e && n.push(o);
      return n;
    }
    children() {
      const e = [];
      for (let t = this.firstChild; t; t = t.next) e.push(t);
      return e;
    }
    empty() {
      const e = this;
      if (e.firstChild) {
        const t = [];
        for (let n = e.firstChild; n; n = Xf(n, e)) t.push(n);
        let n = t.length;
        for (; n--; ) {
          const e = t[n];
          e.parent = e.firstChild = e.lastChild = e.next = e.prev = null;
        }
      }
      return (e.firstChild = e.lastChild = null), e;
    }
    isEmpty(e, t = {}, n) {
      var o;
      const r = this;
      let s = r.firstChild;
      if (Jf(r)) return !1;
      if (s)
        do {
          if (1 === s.type) {
            if (s.attr("data-mce-bogus")) continue;
            if (e[s.name]) return !1;
            if (Jf(s)) return !1;
          }
          if (8 === s.type) return !1;
          if (3 === s.type && !Qf(s)) return !1;
          if (
            3 === s.type &&
            s.parent &&
            t[s.parent.name] &&
            Jr(null !== (o = s.value) && void 0 !== o ? o : "")
          )
            return !1;
          if (n && n(s)) return !1;
        } while ((s = Xf(s, r)));
      return !0;
    }
    walk(e) {
      return Xf(this, null, e);
    }
  }
  const eg = (e, t, n = 0) => {
      const o = e.toLowerCase();
      if (
        -1 !== o.indexOf("[if ", n) &&
        ((e, t) =>
          /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t)))(o, n)
      ) {
        const e = o.indexOf("[endif]", n);
        return o.indexOf(">", e);
      }
      if (t) {
        const e = o.indexOf(">", n);
        return -1 !== e ? e : o.length;
      }
      {
        const t = /--!?>/g;
        t.lastIndex = n;
        const r = t.exec(e);
        return r ? r.index + r[0].length : o.length;
      }
    },
    tg = (e, t, n) => {
      const o = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g,
        r =
          /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g,
        s = e.getVoidElements();
      let a = 1,
        i = n;
      for (; 0 !== a; )
        for (o.lastIndex = i; ; ) {
          const e = o.exec(t);
          if (null === e) return i;
          if ("!" === e[1]) {
            i = ze(e[2], "--")
              ? eg(t, !1, e.index + "!--".length)
              : eg(t, !0, e.index + 1);
            break;
          }
          {
            r.lastIndex = o.lastIndex;
            const n = r.exec(t);
            if (h(n) || n.index !== o.lastIndex) continue;
            "/" === e[1] ? (a -= 1) : xe(s, e[2]) || (a += 1),
              (i = o.lastIndex + n[0].length);
            break;
          }
        }
      return i;
    },
    ng = (e, t) => {
      const n = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
        o = e.schema;
      let r = ((e, t) => {
        const n = new RegExp(
          ["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"),
          "gi"
        );
        return t.replace(n, "");
      })(e.getTempAttrs(), t);
      const s = o.getVoidElements();
      let a;
      for (; (a = n.exec(r)); ) {
        const e = n.lastIndex,
          t = a[0].length;
        let i;
        (i = s[a[1]] ? e : tg(o, r, e)),
          (r = r.substring(0, e - t) + r.substring(i)),
          (n.lastIndex = e - t);
      }
      return Nr(r);
    },
    og = ng,
    rg = (e, t, n) => {
      let o;
      return (
        (o =
          "raw" === t.format
            ? Tt.trim(og(e.serializer, n.innerHTML))
            : "text" === t.format
            ? ((e, t) => {
                const n = e.getDoc(),
                  o = Ln(mn(e.getBody())),
                  r = cn("div", n);
                Vt(r, "data-mce-bogus", "all"),
                  $n(r, { position: "fixed", left: "-9999999px", top: "0" }),
                  ro(r, t.innerHTML);
                const s = vr(r, "[data-mce-bogus]");
                V(s, (e) => {
                  "all" === Wt(e, "data-mce-bogus")
                    ? to(e)
                    : rr(e)
                    ? (Yn(e, un(gr)), to(e))
                    : no(e);
                });
                const a = ((e) => (Bn(e) ? e : mn(Cn(e).dom.body)))(o);
                Jn(a, r);
                const i = Nr(r.dom.innerText);
                return to(r), i;
              })(e, n)
            : "tree" === t.format
            ? e.serializer.serialize(n, t)
            : ((e, t) => {
                const n = Ji(e),
                  o = new RegExp(
                    `^(<${n}[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/${n}>[\r\n]*|<br \\/>[\r\n]*)$`
                  );
                return t.replace(o, "");
              })(e, e.serializer.serialize(n, t))),
        "text" !== t.format && !cr(mn(n)) && m(o) ? Tt.trim(o) : o
      );
    },
    sg = Tt.makeMap,
    ag = (e) => {
      const t = [],
        n = (e = e || {}).indent,
        o = sg(e.indent_before || ""),
        r = sg(e.indent_after || ""),
        s = xs.getEncodeFunc(e.entity_encoding || "raw", e.entities),
        a = "xhtml" !== e.element_format;
      return {
        start: (e, i, l) => {
          if (n && o[e] && t.length > 0) {
            const e = t[t.length - 1];
            e.length > 0 && "\n" !== e && t.push("\n");
          }
          if ((t.push("<", e), i))
            for (let e = 0, n = i.length; e < n; e++) {
              const n = i[e];
              t.push(" ", n.name, '="', s(n.value, !0), '"');
            }
          if (
            ((t[t.length] = !l || a ? ">" : " />"),
            l && n && r[e] && t.length > 0)
          ) {
            const e = t[t.length - 1];
            e.length > 0 && "\n" !== e && t.push("\n");
          }
        },
        end: (e) => {
          let o;
          t.push("</", e, ">"),
            n &&
              r[e] &&
              t.length > 0 &&
              ((o = t[t.length - 1]),
              o.length > 0 && "\n" !== o && t.push("\n"));
        },
        text: (e, n) => {
          e.length > 0 && (t[t.length] = n ? e : s(e));
        },
        cdata: (e) => {
          t.push("<![CDATA[", e, "]]>");
        },
        comment: (e) => {
          t.push("\x3c!--", e, "--\x3e");
        },
        pi: (e, o) => {
          o ? t.push("<?", e, " ", s(o), "?>") : t.push("<?", e, "?>"),
            n && t.push("\n");
        },
        doctype: (e) => {
          t.push("<!DOCTYPE", e, ">", n ? "\n" : "");
        },
        reset: () => {
          t.length = 0;
        },
        getContent: () => t.join("").replace(/\n$/, ""),
      };
    },
    ig = (e = {}, t = Ls()) => {
      const n = ag(e);
      return (
        (e.validate = !("validate" in e) || e.validate),
        {
          serialize: (o) => {
            const r = e.validate,
              s = {
                3: (e) => {
                  var t;
                  n.text(
                    null !== (t = e.value) && void 0 !== t ? t : "",
                    e.raw
                  );
                },
                8: (e) => {
                  var t;
                  n.comment(null !== (t = e.value) && void 0 !== t ? t : "");
                },
                7: (e) => {
                  n.pi(e.name, e.value);
                },
                10: (e) => {
                  var t;
                  n.doctype(null !== (t = e.value) && void 0 !== t ? t : "");
                },
                4: (e) => {
                  var t;
                  n.cdata(null !== (t = e.value) && void 0 !== t ? t : "");
                },
                11: (e) => {
                  let t = e;
                  if ((t = t.firstChild))
                    do {
                      a(t);
                    } while ((t = t.next));
                },
              };
            n.reset();
            const a = (e) => {
              var o;
              const i = s[e.type];
              if (i) i(e);
              else {
                const s = e.name,
                  i = s in t.getVoidElements();
                let l = e.attributes;
                if (r && l && l.length > 1) {
                  const n = [];
                  n.map = {};
                  const o = t.getElementRule(e.name);
                  if (o) {
                    for (let e = 0, t = o.attributesOrder.length; e < t; e++) {
                      const t = o.attributesOrder[e];
                      if (t in l.map) {
                        const e = l.map[t];
                        (n.map[t] = e), n.push({ name: t, value: e });
                      }
                    }
                    for (let e = 0, t = l.length; e < t; e++) {
                      const t = l[e].name;
                      if (!(t in n.map)) {
                        const e = l.map[t];
                        (n.map[t] = e), n.push({ name: t, value: e });
                      }
                    }
                    l = n;
                  }
                }
                if ((n.start(s, l, i), !i)) {
                  let t = e.firstChild;
                  if (t) {
                    ("pre" !== s && "textarea" !== s) ||
                      3 !== t.type ||
                      "\n" !==
                        (null === (o = t.value) || void 0 === o
                          ? void 0
                          : o[0]) ||
                      n.text("\n", !0);
                    do {
                      a(t);
                    } while ((t = t.next));
                  }
                  n.end(s);
                }
              }
            };
            return (
              1 !== o.type || e.inner
                ? 3 === o.type
                  ? s[3](o)
                  : s[11](o)
                : a(o),
              n.getContent()
            );
          },
        }
      );
    },
    lg = new Set();
  V(
    [
      "margin",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin-bottom",
      "padding",
      "padding-left",
      "padding-right",
      "padding-top",
      "padding-bottom",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "background",
      "background-attachment",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "float",
      "position",
      "left",
      "right",
      "top",
      "bottom",
      "z-index",
      "display",
      "transform",
      "width",
      "max-width",
      "min-width",
      "height",
      "max-height",
      "min-height",
      "overflow",
      "overflow-x",
      "overflow-y",
      "text-overflow",
      "vertical-align",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
    ],
    (e) => {
      lg.add(e);
    }
  );
  const dg = ["font", "text-decoration", "text-emphasis"],
    cg = (e, t) => ue(e.parseStyle(e.getAttrib(t, "style"))),
    ug = (e, t, n) => {
      const o = cg(e, t),
        r = cg(e, n),
        s = (o) => {
          var r, s;
          const a = null !== (r = e.getStyle(t, o)) && void 0 !== r ? r : "",
            i = null !== (s = e.getStyle(n, o)) && void 0 !== s ? s : "";
          return We(a) && We(i) && a !== i;
        };
      return H(o, (e) => {
        const t = (t) => H(t, (t) => t === e);
        if (!t(r) && t(dg)) {
          const e = K(r, (e) => H(dg, (t) => ze(e, t)));
          return H(e, s);
        }
        return s(e);
      });
    },
    mg = (e, t, n) =>
      M.from(n.container())
        .filter(Ro)
        .exists((o) => {
          const r = e ? 0 : -1;
          return t(o.data.charAt(n.offset() + r));
        }),
    fg = O(mg, !0, tu),
    gg = O(mg, !1, tu),
    pg = (e) => {
      const t = e.container();
      return (
        Ro(t) &&
        (0 === t.data.length || (Er(t.data) && dm.isBookmarkNode(t.parentNode)))
      );
    },
    hg = (e, t) => (n) =>
      rc(e ? 0 : -1, n)
        .filter(t)
        .isSome(),
    bg = (e) => Lo(e) && "block" === Vn(mn(e), "display"),
    vg = (e) =>
      Io(e) && !((e) => yo(e) && "all" === e.getAttribute("data-mce-bogus"))(e),
    yg = hg(!0, bg),
    Cg = hg(!1, bg),
    wg = hg(!0, zo),
    xg = hg(!1, zo),
    kg = hg(!0, _o),
    Sg = hg(!1, _o),
    _g = hg(!0, vg),
    Eg = hg(!1, vg),
    Ng = (e, t) =>
      ((e, t, n) => {
        return vn(t, e)
          ? ((o = ((e, t) => {
              const n = w(t) ? t : P;
              let o = e.dom;
              const r = [];
              for (; null !== o.parentNode && void 0 !== o.parentNode; ) {
                const e = o.parentNode,
                  t = mn(e);
                if ((r.push(t), !0 === n(t))) break;
                o = e;
              }
              return r;
            })(e, (e) => n(e) || bn(e, t))),
            o.slice(0, -1))
          : [];
        var o;
      })(e, t, P),
    Rg = (e, t) => [e].concat(Ng(e, t)),
    Ag = (e, t, n) => Dc(e, t, n, pg),
    Og = (e, t) => Q(Rg(mn(t.container()), e), nr),
    Tg = (e, t, n) =>
      Ag(e, t.dom, n).forall((e) =>
        Og(t, n).fold(
          () => !oc(e, n, t.dom),
          (o) => !oc(e, n, t.dom) && vn(o, mn(e.container()))
        )
      ),
    Bg = (e, t, n) =>
      Og(t, n).fold(
        () => Ag(e, t.dom, n).forall((e) => !oc(e, n, t.dom)),
        (t) => Ag(e, t.dom, n).isNone()
      ),
    Dg = O(Bg, !1),
    Pg = O(Bg, !0),
    Lg = O(Tg, !1),
    Mg = O(Tg, !0),
    Ig = (e) => fc(e).exists(rr),
    Fg = (e, t, n) => {
      const o = K(Rg(mn(n.container()), t), nr),
        r = ie(o).getOr(t);
      return Tc(e, r.dom, n).filter(Ig);
    },
    Ug = (e, t) => fc(t).exists(rr) || Fg(!0, e, t).isSome(),
    zg = (e, t) =>
      ((e) => M.from(e.getNode(!0)).map(mn))(t).exists(rr) ||
      Fg(!1, e, t).isSome(),
    jg = O(Fg, !1),
    Hg = O(Fg, !0),
    $g = (e) => ai.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd(),
    Vg = (e, t) => {
      const n = K(Rg(mn(t.container()), e), nr);
      return ie(n).getOr(e);
    },
    qg = (e, t) => ($g(t) ? gg(t) : gg(t) || Mc(Vg(e, t).dom, t).exists(gg)),
    Wg = (e, t) => ($g(t) ? fg(t) : fg(t) || Lc(Vg(e, t).dom, t).exists(fg)),
    Kg = (e) =>
      fc(e)
        .bind((e) => Ko(e, Ft))
        .exists((e) =>
          ((e) => j(["pre", "pre-wrap"], e))(Vn(e, "white-space"))
        ),
    Gg = (e, t) => (n) => {
      return (o = new Zo(n, e)[t]()), C(o) && Io(o) && Wd(o);
      var o;
    },
    Yg = (e, t) =>
      !Kg(t) &&
      (Dg(e, t) ||
        Lg(e, t) ||
        zg(e, t) ||
        qg(e, t) ||
        ((e, t) => {
          const n = Mc(e.dom, t).getOr(t),
            o = Gg(e.dom, "prev");
          return t.isAtStart() && (o(t.container()) || o(n.container()));
        })(e, t)),
    Xg = (e, t) =>
      !Kg(t) &&
      (Pg(e, t) ||
        Mg(e, t) ||
        Ug(e, t) ||
        Wg(e, t) ||
        ((e, t) => {
          const n = Lc(e.dom, t).getOr(t),
            o = Gg(e.dom, "next");
          return t.isAtEnd() && (o(t.container()) || o(n.container()));
        })(e, t)),
    Qg = (e, t) =>
      Yg(e, t) ||
      Xg(
        e,
        ((e) => {
          const t = e.container(),
            n = e.offset();
          return Ro(t) && n < t.data.length ? ai(t, n + 1) : e;
        })(t)
      ),
    Jg = (e, t) => eu(e.charAt(t)),
    Zg = (e, t) => tu(e.charAt(t)),
    ep = (e, t, n) => {
      const o = t.data,
        r = ai(t, 0);
      return n || !Jg(o, 0) || Qg(e, r)
        ? !!(n && Zg(o, 0) && Yg(e, r)) && ((t.data = pr + o.slice(1)), !0)
        : ((t.data = " " + o.slice(1)), !0);
    },
    tp = (e, t, n) => {
      const o = t.data,
        r = ai(t, o.length - 1);
      return n || !Jg(o, o.length - 1) || Qg(e, r)
        ? !!(n && Zg(o, o.length - 1) && Xg(e, r)) &&
            ((t.data = o.slice(0, -1) + pr), !0)
        : ((t.data = o.slice(0, -1) + " "), !0);
    },
    np = (e, t) => {
      const n = t.container();
      if (!Ro(n)) return M.none();
      if (
        ((e) => {
          const t = e.container();
          return Ro(t) && Ue(t.data, pr);
        })(t)
      ) {
        const o =
          ep(e, n, !1) ||
          ((e) => {
            const t = e.data,
              n = ((e) => {
                const t = e.split("");
                return $(t, (e, n) =>
                  eu(e) &&
                  n > 0 &&
                  n < t.length - 1 &&
                  nu(t[n - 1]) &&
                  nu(t[n + 1])
                    ? " "
                    : e
                ).join("");
              })(t);
            return n !== t && ((e.data = n), !0);
          })(n) ||
          tp(e, n, !1);
        return Pt(o, t);
      }
      if (Qg(e, t)) {
        const o = ep(e, n, !0) || tp(e, n, !0);
        return Pt(o, t);
      }
      return M.none();
    },
    op = (e, t, n) => {
      if (0 === n) return;
      const o = mn(e),
        r = Wo(o, nr).getOr(o),
        s = e.data.slice(t, t + n),
        a = t + n >= e.data.length && Xg(r, ai(e, e.data.length)),
        i = 0 === t && Yg(r, ai(e, 0));
      e.replaceData(t, n, es(s, 4, i, a));
    },
    rp = (e, t) => {
      const n = e.data.slice(t),
        o = n.length - Ve(n).length;
      op(e, t, o);
    },
    sp = (e, t) => {
      const n = e.data.slice(0, t),
        o = n.length - qe(n).length;
      op(e, t - o, o);
    },
    ap = (e, t, n, o = !0) => {
      const r = qe(e.data).length,
        s = o ? e : t,
        a = o ? t : e;
      return (
        o ? s.appendData(a.data) : s.insertData(0, a.data),
        to(mn(a)),
        n && rp(s, r),
        s
      );
    },
    ip = (e, t) =>
      ((e, t) => {
        const n = e.container(),
          o = e.offset();
        return (
          !ai.isTextPosition(e) &&
          n === t.parentNode &&
          o > ai.before(t).offset()
        );
      })(t, e)
        ? ai(t.container(), t.offset() - 1)
        : t,
    lp = (e) => {
      return Gr(e.previousSibling)
        ? M.some(
            ((t = e.previousSibling),
            Ro(t) ? ai(t, t.data.length) : ai.after(t))
          )
        : e.previousSibling
        ? Fc(e.previousSibling)
        : M.none();
      var t;
    },
    dp = (e) => {
      return Gr(e.nextSibling)
        ? M.some(((t = e.nextSibling), Ro(t) ? ai(t, 0) : ai.before(t)))
        : e.nextSibling
        ? Ic(e.nextSibling)
        : M.none();
      var t;
    },
    cp = (e, t, n) =>
      ((e, t, n) =>
        e
          ? ((e, t) =>
              dp(t)
                .orThunk(() => lp(t))
                .orThunk(() =>
                  ((e, t) =>
                    Lc(e, ai.after(t)).orThunk(() => Mc(e, ai.before(t))))(e, t)
                ))(t, n)
          : ((e, t) =>
              lp(t)
                .orThunk(() => dp(t))
                .orThunk(() =>
                  ((e, t) =>
                    M.from(t.previousSibling ? t.previousSibling : t.parentNode)
                      .bind((t) => Mc(e, ai.before(t)))
                      .orThunk(() => Lc(e, ai.after(t))))(e, t)
                ))(t, n))(e, t, n).map(O(ip, n)),
    up = (e, t, n) => {
      n.fold(
        () => {
          e.focus();
        },
        (n) => {
          e.selection.setRng(n.toRange(), t);
        }
      );
    },
    mp = (e, t) => t && xe(e.schema.getBlockElements(), Lt(t)),
    fp = (e) => {
      if (ss(e)) {
        const t = dn('<br data-mce-bogus="1">');
        return eo(e), Jn(e, t), M.some(ai.before(t.dom));
      }
      return M.none();
    },
    gp = (e, t, n, o = !0) => {
      const r = cp(t, e.getBody(), n.dom),
        s = Wo(n, O(mp, e), ((a = e.getBody()), (e) => e.dom === a));
      var a;
      const i = ((e, t, n) => {
        const o = kn(e).filter(Ut),
          r = Sn(e).filter(Ut);
        return (
          to(e),
          ((s = o),
          (a = r),
          (i = t),
          (l = (e, t, o) => {
            const r = e.dom,
              s = t.dom,
              a = r.data.length;
            return ap(r, s, n), o.container() === s ? ai(r, a) : o;
          }),
          s.isSome() && a.isSome() && i.isSome()
            ? M.some(l(s.getOrDie(), a.getOrDie(), i.getOrDie()))
            : M.none()).orThunk(
            () => (
              n &&
                (o.each((e) => sp(e.dom, e.dom.length)),
                r.each((e) => rp(e.dom, 0))),
              t
            )
          )
        );
        var s, a, i, l;
      })(n, r, ((e, t) => xe(e.schema.getTextInlineElements(), Lt(t)))(e, n));
      e.dom.isEmpty(e.getBody())
        ? (e.setContent(""), e.selection.setCursorLocation())
        : s.bind(fp).fold(
            () => {
              o && up(e, t, i);
            },
            (n) => {
              o && up(e, t, M.some(n));
            }
          );
    },
    pp = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
    hp = (e, t) => pn(mn(t), Sl(e)),
    bp = (e, t, n) => {
      const o = ((e, t, n) => K(ta.DOM.getParents(n.container(), "*", t), e))(
        e,
        t,
        n
      );
      return M.from(o[o.length - 1]);
    },
    vp = (e, t) => {
      const n = t.container(),
        o = t.offset();
      return e
        ? Tr(n)
          ? Ro(n.nextSibling)
            ? ai(n.nextSibling, 0)
            : ai.after(n)
          : Pr(t)
          ? ai(n, o + 1)
          : t
        : Tr(n)
        ? Ro(n.previousSibling)
          ? ai(n.previousSibling, n.previousSibling.data.length)
          : ai.before(n)
        : Lr(t)
        ? ai(n, o - 1)
        : t;
    },
    yp = O(vp, !0),
    Cp = O(vp, !1),
    wp = (e, t) => {
      const n = (e) => e.stopImmediatePropagation();
      e.on("beforeinput input", n, !0),
        e.getDoc().execCommand(t),
        e.off("beforeinput input", n);
    },
    xp = (e) => wp(e, "Delete"),
    kp = (e) => sr(e) || ir(e),
    Sp = (e, t) =>
      vn(e, t)
        ? Ko(
            t,
            kp,
            (
              (e) => (t) =>
                Bt(xn(t), e, bn)
            )(e)
          )
        : M.none(),
    _p = (e, t = !0) => {
      e.dom.isEmpty(e.getBody()) && e.setContent("", { no_selection: !t });
    },
    Ep = (e) => {
      var t;
      return (8 === Mt((t = e)) || "#comment" === Lt(t) ? kn(e) : On(e))
        .bind(Ep)
        .orThunk(() => M.some(e));
    },
    Np = (e, t, n, o = !0) => {
      var r;
      t.deleteContents();
      const s = Ep(n).getOr(n),
        a = mn(
          null !== (r = e.dom.getParent(s.dom, e.dom.isBlock)) && void 0 !== r
            ? r
            : n.dom
        );
      if (
        (a.dom === e.getBody()
          ? _p(e, o)
          : ss(a) && (kr(a), o && e.selection.setCursorLocation(a.dom, 0)),
        !bn(n, a))
      ) {
        const e = Bt(xn(a), n)
          ? []
          : xn((i = a))
              .map(Nn)
              .map((e) => K(e, (e) => !bn(i, e)))
              .getOr([]);
        V(e.concat(Nn(n)), (e) => {
          bn(e, a) || vn(e, a) || !ss(e) || to(e);
        });
      }
      var i;
    },
    Rp = (e) => vr(e, "td,th"),
    Ap = (e, t) => ({ start: e, end: t }),
    Op = Ti([
      { singleCellTable: ["rng", "cell"] },
      { fullTable: ["table"] },
      { partialTable: ["cells", "outsideDetails"] },
      { multiTable: ["startTableCells", "endTableCells", "betweenRng"] },
    ]),
    Tp = (e, t) => Xo(mn(e), "td,th", t),
    Bp = (e) => !bn(e.start, e.end),
    Dp = (e, t) =>
      fu(e.start, t).bind((n) => fu(e.end, t).bind((e) => Pt(bn(n, e), n))),
    Pp = (e) => (t) =>
      Dp(t, e).map((e) =>
        ((e, t, n) => ({ rng: e, table: t, cells: n }))(t, e, Rp(e))
      ),
    Lp = (e, t, n, o) => {
      if (n.collapsed || !e.forall(Bp)) return M.none();
      if (t.isSameTable) {
        const t = e.bind(Pp(o));
        return M.some({ start: t, end: t });
      }
      {
        const e = Tp(n.startContainer, o),
          t = Tp(n.endContainer, o),
          r = e
            .bind(
              (
                (e) => (t) =>
                  fu(t, e).bind((e) => le(Rp(e)).map((e) => Ap(t, e)))
              )(o)
            )
            .bind(Pp(o)),
          s = t
            .bind(
              (
                (e) => (t) =>
                  fu(t, e).bind((e) => ie(Rp(e)).map((e) => Ap(e, t)))
              )(o)
            )
            .bind(Pp(o));
        return M.some({ start: r, end: s });
      }
    },
    Mp = (e, t) => J(e, (e) => bn(e, t)),
    Ip = (e) =>
      Dt(Mp(e.cells, e.rng.start), Mp(e.cells, e.rng.end), (t, n) =>
        e.cells.slice(t, n + 1)
      ),
    Fp = (e, t) => {
      const { startTable: n, endTable: o } = t,
        r = e.cloneRange();
      return (
        n.each((e) => r.setStartAfter(e.dom)),
        o.each((e) => r.setEndBefore(e.dom)),
        r
      );
    },
    Up = (e, t) => {
      const n = (
          (e) => (t) =>
            bn(e, t)
        )(e),
        o = ((e, t) => {
          const n = Tp(e.startContainer, t),
            o = Tp(e.endContainer, t);
          return Dt(n, o, Ap);
        })(t, n),
        r = ((e, t) => {
          const n = (e) => fu(mn(e), t),
            o = n(e.startContainer),
            r = n(e.endContainer),
            s = o.isSome(),
            a = r.isSome(),
            i = Dt(o, r, bn).getOr(!1);
          return {
            startTable: o,
            endTable: r,
            isStartInTable: s,
            isEndInTable: a,
            isSameTable: i,
            isMultiTable: !i && s && a,
          };
        })(t, n);
      return ((e, t, n) =>
        e.exists(
          (e) =>
            ((e, t) =>
              !Bp(e) &&
              Dp(e, t).exists((e) => {
                const t = e.dom.rows;
                return 1 === t.length && 1 === t[0].cells.length;
              }))(e, n) && hu(e.start, t)
        ))(o, t, n)
        ? o.map((e) => Op.singleCellTable(t, e.start))
        : r.isMultiTable
        ? ((e, t, n, o) =>
            Lp(e, t, n, o).bind(({ start: e, end: o }) => {
              const r = e.bind(Ip).getOr([]),
                s = o.bind(Ip).getOr([]);
              if (r.length > 0 && s.length > 0) {
                const e = Fp(n, t);
                return M.some(Op.multiTable(r, s, e));
              }
              return M.none();
            }))(o, r, t, n)
        : ((e, t, n, o) =>
            Lp(e, t, n, o)
              .bind(({ start: e, end: t }) => e.or(t))
              .bind((e) => {
                const { isSameTable: o } = t,
                  r = Ip(e).getOr([]);
                if (o && e.cells.length === r.length)
                  return M.some(Op.fullTable(e.table));
                if (r.length > 0) {
                  if (o) return M.some(Op.partialTable(r, M.none()));
                  {
                    const e = Fp(n, t);
                    return M.some(Op.partialTable(r, M.some({ ...t, rng: e })));
                  }
                }
                return M.none();
              }))(o, r, t, n);
    },
    zp = (e) =>
      V(e, (e) => {
        Yt(e, "contenteditable"), kr(e);
      }),
    jp = (e, t, n, o) => {
      const r = n.cloneRange();
      o
        ? (r.setStart(n.startContainer, n.startOffset),
          r.setEndAfter(t.dom.lastChild))
        : (r.setStartBefore(t.dom.firstChild),
          r.setEnd(n.endContainer, n.endOffset)),
        qp(e, r, t, !1).each((e) => e());
    },
    Hp = (e) => {
      const t = mu(e),
        n = mn(e.selection.getNode());
      Fo(n.dom) && ss(n)
        ? e.selection.setCursorLocation(n.dom, 0)
        : e.selection.collapse(!0),
        t.length > 1 &&
          H(t, (e) => bn(e, n)) &&
          Vt(n, "data-mce-selected", "1");
    },
    $p = (e, t, n) =>
      M.some(() => {
        const o = e.selection.getRng(),
          r = n
            .bind(({ rng: n, isStartInTable: r }) => {
              const s = ((e, t) =>
                M.from(e.dom.getParent(t, e.dom.isBlock)).map(mn))(
                e,
                r ? n.endContainer : n.startContainer
              );
              n.deleteContents(),
                ((e, t, n) => {
                  n.each((n) => {
                    t
                      ? to(n)
                      : (kr(n), e.selection.setCursorLocation(n.dom, 0));
                  });
                })(e, r, s.filter(ss));
              const a = r ? t[0] : t[t.length - 1];
              return (
                jp(e, a, o, r),
                ss(a) ? M.none() : M.some(r ? t.slice(1) : t.slice(0, -1))
              );
            })
            .getOr(t);
        zp(r), Hp(e);
      }),
    Vp = (e, t, n, o) =>
      M.some(() => {
        const r = e.selection.getRng(),
          s = t[0],
          a = n[n.length - 1];
        jp(e, s, r, !0), jp(e, a, r, !1);
        const i = ss(s) ? t : t.slice(1),
          l = ss(a) ? n : n.slice(0, -1);
        zp(i.concat(l)), o.deleteContents(), Hp(e);
      }),
    qp = (e, t, n, o = !0) =>
      M.some(() => {
        Np(e, t, n, o);
      }),
    Wp = (e, t) => M.some(() => gp(e, !1, t)),
    Kp = (e, t) => Q(Rg(t, e), dr),
    Gp = (e, t) => Q(Rg(t, e), Ht("caption")),
    Yp = (e, t) =>
      M.some(() => {
        kr(t), e.selection.setCursorLocation(t.dom, 0);
      }),
    Xp = (e, t) => (e ? kg(t) : Sg(t)),
    Qp = (e, t, n) => {
      const o = mn(e.getBody());
      return Gp(o, n).fold(
        () =>
          ((e, t, n, o) => {
            const r = ai.fromRangeStart(e.selection.getRng());
            return Kp(n, o).bind((o) =>
              ss(o)
                ? Yp(e, o)
                : ((e, t, n, o, r) =>
                    Bc(n, e.getBody(), r).bind((e) =>
                      Kp(t, mn(e.getNode())).bind((e) =>
                        bn(e, o) ? M.none() : M.some(S)
                      )
                    ))(e, n, t, o, r)
            );
          })(e, t, o, n).orThunk(() =>
            Pt(
              ((e, t) => {
                const n = ai.fromRangeStart(e.selection.getRng());
                return (
                  Xp(t, n) || Tc(t, e.getBody(), n).exists((e) => Xp(t, e))
                );
              })(e, t),
              S
            )
          ),
        (n) =>
          ((e, t, n, o) => {
            const r = ai.fromRangeStart(e.selection.getRng());
            return ss(o)
              ? Yp(e, o)
              : ((e, t, n, o, r) =>
                  Bc(n, e.getBody(), r).fold(
                    () => M.some(S),
                    (s) =>
                      ((e, t, n, o) =>
                        Ic(e.dom)
                          .bind((r) =>
                            Fc(e.dom).map((e) =>
                              t
                                ? n.isEqual(r) && o.isEqual(e)
                                : n.isEqual(e) && o.isEqual(r)
                            )
                          )
                          .getOr(!0))(o, n, r, s)
                        ? ((e, t) => Yp(e, t))(e, o)
                        : ((e, t, n) =>
                            Gp(e, mn(n.getNode())).fold(
                              () => M.some(S),
                              (e) => Pt(!bn(e, t), S)
                            ))(t, o, s)
                  ))(e, n, t, o, r);
          })(e, t, o, n)
      );
    },
    Jp = (e, t) => {
      const n = mn(e.selection.getStart(!0)),
        o = mu(e);
      return e.selection.isCollapsed() && 0 === o.length
        ? Qp(e, t, n)
        : ((e, t, n) => {
            const o = mn(e.getBody()),
              r = e.selection.getRng();
            return 0 !== n.length
              ? $p(e, n, M.none())
              : ((e, t, n, o) =>
                  Gp(t, o).fold(
                    () =>
                      ((e, t, n) =>
                        Up(t, n).bind((t) =>
                          t.fold(O(qp, e), O(Wp, e), O($p, e), O(Vp, e))
                        ))(e, t, n),
                    (t) => ((e, t) => Yp(e, t))(e, t)
                  ))(e, o, r, t);
          })(e, n, o);
    },
    Zp = (e, t) => {
      let n = t;
      for (; n && n !== e; ) {
        if (Mo(n) || Io(n)) return n;
        n = n.parentNode;
      }
      return null;
    },
    eh = ["data-ephox-", "data-mce-", "data-alloy-", "data-snooker-", "_"],
    th = Tt.each,
    nh = (e) => {
      const t = e.dom,
        n = new Set(e.serializer.getTempAttrs()),
        o = (e) => H(eh, (t) => ze(e, t)) || n.has(e);
      return {
        compare: (e, n) => {
          if (e.nodeName !== n.nodeName || e.nodeType !== n.nodeType) return !1;
          const r = (e) => {
              const n = {};
              return (
                th(t.getAttribs(e), (r) => {
                  const s = r.nodeName.toLowerCase();
                  "style" === s || o(s) || (n[s] = t.getAttrib(e, s));
                }),
                n
              );
            },
            s = (e, t) => {
              for (const n in e)
                if (xe(e, n)) {
                  const o = t[n];
                  if (v(o)) return !1;
                  if (e[n] !== o) return !1;
                  delete t[n];
                }
              for (const e in t) if (xe(t, e)) return !1;
              return !0;
            };
          if (yo(e) && yo(n)) {
            if (!s(r(e), r(n))) return !1;
            if (
              !s(
                t.parseStyle(t.getAttrib(e, "style")),
                t.parseStyle(t.getAttrib(n, "style"))
              )
            )
              return !1;
          }
          return !Zc(e) && !Zc(n);
        },
        isAttributeInternal: o,
      };
    },
    oh = (e, t, n, o) => {
      const r = n.name;
      for (let t = 0, s = e.length; t < s; t++) {
        const s = e[t];
        if (s.name === r) {
          const e = o.nodes[r];
          e ? e.nodes.push(n) : (o.nodes[r] = { filter: s, nodes: [n] });
        }
      }
      if (n.attributes)
        for (let e = 0, r = t.length; e < r; e++) {
          const r = t[e],
            s = r.name;
          if (s in n.attributes.map) {
            const e = o.attributes[s];
            e ? e.nodes.push(n) : (o.attributes[s] = { filter: r, nodes: [n] });
          }
        }
    },
    rh = (e, t) => {
      const n = (e, n) => {
        fe(e, (e) => {
          const o = de(e.nodes);
          V(e.filter.callbacks, (r) => {
            for (let t = o.length - 1; t >= 0; t--) {
              const r = o[t];
              ((n
                ? void 0 !== r.attr(e.filter.name)
                : r.name === e.filter.name) &&
                !y(r.parent)) ||
                o.splice(t, 1);
            }
            o.length > 0 && r(o, e.filter.name, t);
          });
        });
      };
      n(e.nodes, !1), n(e.attributes, !0);
    },
    sh = (e, t, n, o = {}) => {
      const r = ((e, t, n) => {
        const o = { nodes: {}, attributes: {} };
        return (
          n.firstChild &&
            ((n, r) => {
              let s = n;
              for (; (s = s.walk()); ) oh(e, t, s, o);
            })(n),
          o
        );
      })(e, t, n);
      rh(r, o);
    },
    ah = (e, t, n, o) => {
      if (t.insert && n[o.name]) {
        const e = new Zf("br", 1);
        e.attr("data-mce-bogus", "1"), o.empty().append(e);
      } else o.empty().append(new Zf("#text", 3)).value = pr;
    },
    ih = (e, t) => {
      const n = null == e ? void 0 : e.firstChild;
      return C(n) && n === e.lastChild && n.name === t;
    },
    lh = (e, t, n, o) =>
      o.isEmpty(t, n, (t) =>
        ((e, t) => {
          const n = e.getElementRule(t.name);
          return !0 === (null == n ? void 0 : n.paddEmpty);
        })(e, t)
      ),
    dh = (e, t, n = e.parent) => {
      if (t.getSpecialElements()[e.name]) e.empty().remove();
      else {
        const o = e.children();
        for (const e of o) n && !t.isValidChild(n.name, e.name) && dh(e, t, n);
        e.unwrap();
      }
    },
    ch = (e, t, n = S) => {
      const o = t.getTextBlockElements(),
        r = t.getNonEmptyElements(),
        s = t.getWhitespaceElements(),
        a = Tt.makeMap("tr,td,th,tbody,thead,tfoot,table"),
        i = new Set();
      for (let l = 0; l < e.length; l++) {
        const d = e[l];
        let c, u, m;
        if (!d.parent || i.has(d)) continue;
        if (o[d.name] && "li" === d.parent.name) {
          let e = d.next;
          for (; e && o[e.name]; )
            (e.name = "li"),
              i.add(e),
              d.parent.insert(e, d.parent),
              (e = e.next);
          d.unwrap();
          continue;
        }
        const f = [d];
        for (
          c = d.parent;
          c && !t.isValidChild(c.name, d.name) && !a[c.name];
          c = c.parent
        )
          f.push(c);
        if (c && f.length > 1)
          if (t.isValidChild(c.name, d.name)) {
            f.reverse(), (u = f[0].clone()), n(u);
            let e = u;
            for (let o = 0; o < f.length - 1; o++) {
              t.isValidChild(e.name, f[o].name)
                ? ((m = f[o].clone()), n(m), e.append(m))
                : (m = e);
              for (let e = f[o].firstChild; e && e !== f[o + 1]; ) {
                const t = e.next;
                m.append(e), (e = t);
              }
              e = m;
            }
            lh(t, r, s, u)
              ? c.insert(d, f[0], !0)
              : (c.insert(u, f[0], !0), c.insert(d, u)),
              (c = f[0]),
              (lh(t, r, s, c) || ih(c, "br")) && c.empty().remove();
          } else dh(d, t);
        else if (d.parent) {
          if ("li" === d.name) {
            let e = d.prev;
            if (e && ("ul" === e.name || "ol" === e.name)) {
              e.append(d);
              continue;
            }
            if (
              ((e = d.next),
              e && ("ul" === e.name || "ol" === e.name) && e.firstChild)
            ) {
              e.insert(d, e.firstChild, !0);
              continue;
            }
            const t = new Zf("ul", 1);
            n(t), d.wrap(t);
            continue;
          }
          if (
            t.isValidChild(d.parent.name, "div") &&
            t.isValidChild("div", d.name)
          ) {
            const e = new Zf("div", 1);
            n(e), d.wrap(e);
          } else dh(d, t);
        }
      }
    },
    uh = (e) =>
      e.collapsed
        ? e
        : ((e) => {
            const t = ai.fromRangeStart(e),
              n = ai.fromRangeEnd(e),
              o = e.commonAncestorContainer;
            return Tc(!1, o, n)
              .map((r) =>
                !oc(t, n, o) && oc(t, r, o)
                  ? ((e, t, n, o) => {
                      const r = document.createRange();
                      return r.setStart(e, t), r.setEnd(n, o), r;
                    })(t.container(), t.offset(), r.container(), r.offset())
                  : e
              )
              .getOr(e);
          })(e),
    mh = (e, t) => {
      let n = t.firstChild,
        o = t.lastChild;
      return (
        n && "meta" === n.name && (n = n.next),
        o && "mce_marker" === o.attr("id") && (o = o.prev),
        ((e, t) => {
          const n = e.getNonEmptyElements();
          return (
            C(t) &&
            (t.isEmpty(n) ||
              ((e, t) =>
                e.getBlockElements()[t.name] &&
                ((e) => C(e.firstChild) && e.firstChild === e.lastChild)(t) &&
                ((e) => "br" === e.name || e.value === pr)(t.firstChild))(e, t))
          );
        })(e, o) && (o = null == o ? void 0 : o.prev),
        !(!n || n !== o || ("ul" !== n.name && "ol" !== n.name))
      );
    },
    fh = (e) => {
      return e.length > 0 &&
        (!(n = e[e.length - 1]).firstChild ||
          (C(null == (t = n) ? void 0 : t.firstChild) &&
            t.firstChild === t.lastChild &&
            ((e) => e.data === pr || Po(e))(t.firstChild)))
        ? e.slice(0, -1)
        : e;
      var t, n;
    },
    gh = (e, t) => {
      const n = e.getParent(t, e.isBlock);
      return n && "LI" === n.nodeName ? n : null;
    },
    ph = (e, t) => {
      const n = ai.after(e),
        o = Nc(t).prev(n);
      return o ? o.toRange() : null;
    },
    hh = (e, t, n, o) => {
      const r = ((e, t, n) => {
          const o = t.serialize(n);
          return ((e) => {
            var t, n;
            const o = e.firstChild,
              r = e.lastChild;
            return (
              o &&
                "META" === o.nodeName &&
                (null === (t = o.parentNode) ||
                  void 0 === t ||
                  t.removeChild(o)),
              r &&
                "mce_marker" === r.id &&
                (null === (n = r.parentNode) ||
                  void 0 === n ||
                  n.removeChild(r)),
              e
            );
          })(e.createFragment(o));
        })(t, e, o),
        s = gh(t, n.startContainer),
        a = fh(
          ((i = r.firstChild),
          K(
            null !== (l = null == i ? void 0 : i.childNodes) && void 0 !== l
              ? l
              : [],
            (e) => "LI" === e.nodeName
          ))
        );
      var i, l;
      const d = t.getRoot(),
        c = (e) => {
          const o = ai.fromRangeStart(n),
            r = Nc(t.getRoot()),
            a = 1 === e ? r.prev(o) : r.next(o),
            i = null == a ? void 0 : a.getNode();
          return !i || gh(t, i) !== s;
        };
      return s
        ? c(1)
          ? ((e, t, n) => {
              const o = e.parentNode;
              return (
                o &&
                  Tt.each(t, (t) => {
                    o.insertBefore(t, e);
                  }),
                ((e, t) => {
                  const n = ai.before(e),
                    o = Nc(t).next(n);
                  return o ? o.toRange() : null;
                })(e, n)
              );
            })(s, a, d)
          : c(2)
          ? ((e, t, n, o) => (o.insertAfter(t.reverse(), e), ph(t[0], n)))(
              s,
              a,
              d,
              t
            )
          : ((e, t, n, o) => {
              const r = ((e, t) => {
                  const n = t.cloneRange(),
                    o = t.cloneRange();
                  return (
                    n.setStartBefore(e),
                    o.setEndAfter(e),
                    [n.cloneContents(), o.cloneContents()]
                  );
                })(e, o),
                s = e.parentNode;
              return (
                s &&
                  (s.insertBefore(r[0], e),
                  Tt.each(t, (t) => {
                    s.insertBefore(t, e);
                  }),
                  s.insertBefore(r[1], e),
                  s.removeChild(e)),
                ph(t[t.length - 1], n)
              );
            })(s, a, d, n)
        : null;
    },
    bh = ["pre"],
    vh = Fo,
    yh = (e, t, n) => {
      var o, r, s;
      const a = e.selection,
        i = e.dom,
        l = e.parser,
        d = n.merge,
        c = ig({ validate: !0 }, e.schema),
        u = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
      -1 === t.indexOf("{$caret}") && (t += "{$caret}"),
        (t = t.replace(/\{\$caret\}/, u));
      let m = a.getRng();
      const f = m.startContainer,
        g = e.getBody();
      f === g &&
        a.isCollapsed() &&
        i.isBlock(g.firstChild) &&
        ((e, t) => C(t) && !e.schema.getVoidElements()[t.nodeName])(
          e,
          g.firstChild
        ) &&
        i.isEmpty(g.firstChild) &&
        ((m = i.createRng()),
        m.setStart(g.firstChild, 0),
        m.setEnd(g.firstChild, 0),
        a.setRng(m)),
        a.isCollapsed() ||
          ((e) => {
            const t = e.dom,
              n = uh(e.selection.getRng());
            e.selection.setRng(n);
            const o = t.getParent(n.startContainer, vh);
            ((e, t, n) =>
              !!C(n) && n === e.getParent(t.endContainer, vh) && hu(mn(n), t))(
              t,
              n,
              o
            )
              ? qp(e, n, mn(o))
              : e.getDoc().execCommand("Delete", !1);
          })(e);
      const p = a.getNode(),
        h = { context: p.nodeName.toLowerCase(), data: n.data, insert: !0 },
        b = l.parse(t, h);
      if (!0 === n.paste && mh(e.schema, b) && ((e, t) => !!gh(e, t))(i, p))
        return (m = hh(c, i, a.getRng(), b)), m && a.setRng(m), t;
      !0 === n.paste &&
        ((e, t, n, o) => {
          var r;
          const s = t.firstChild,
            a = t.lastChild,
            i = s === ("bookmark" === a.attr("data-mce-type") ? a.prev : a),
            l = j(bh, s.name);
          if (i && l) {
            const t = "false" !== s.attr("contenteditable"),
              a =
                (null === (r = e.getParent(n, e.isBlock)) || void 0 === r
                  ? void 0
                  : r.nodeName.toLowerCase()) === s.name,
              i = M.from(Zp(o, n)).forall(Mo);
            return t && a && i;
          }
          return !1;
        })(i, b, p, e.getBody()) &&
        (null === (o = b.firstChild) || void 0 === o || o.unwrap()),
        ((e) => {
          let t = e;
          for (; (t = t.walk()); )
            1 === t.type && t.attr("data-mce-fragment", "1");
        })(b);
      let v = b.lastChild;
      if (v && "mce_marker" === v.attr("id")) {
        const t = v;
        for (v = v.prev; v; v = v.walk(!0))
          if (3 === v.type || !i.isBlock(v.name)) {
            v.parent &&
              e.schema.isValidChild(v.parent.name, "span") &&
              v.parent.insert(t, v, "br" === v.name);
            break;
          }
      }
      if ((e._selectionOverrides.showBlockCaretContainer(p), h.invalid)) {
        e.selection.setContent(u);
        let n,
          o = a.getNode();
        const d = e.getBody();
        for (Bo(o) ? (o = n = d) : (n = o); n && n !== d; )
          (o = n), (n = n.parentNode);
        t = o === d ? d.innerHTML : i.getOuterHTML(o);
        const m = l.parse(t);
        for (let e = m; e; e = e.walk())
          if ("mce_marker" === e.attr("id")) {
            e.replace(b);
            break;
          }
        const f = b.children(),
          g =
            null !==
              (s = null === (r = b.parent) || void 0 === r ? void 0 : r.name) &&
            void 0 !== s
              ? s
              : m.name;
        b.unwrap();
        const p = K(f, (t) => !e.schema.isValidChild(g, t.name));
        ch(p, e.schema),
          sh(l.getNodeFilters(), l.getAttributeFilters(), m),
          (t = c.serialize(m)),
          o === d ? i.setHTML(d, t) : i.setOuterHTML(o, t);
      } else
        (t = c.serialize(b)),
          ((e, t, n) => {
            var o;
            if ("all" === n.getAttribute("data-mce-bogus"))
              null === (o = n.parentNode) ||
                void 0 === o ||
                o.insertBefore(e.dom.createFragment(t), n);
            else {
              const o = n.firstChild,
                r = n.lastChild;
              !o || (o === r && "BR" === o.nodeName)
                ? e.dom.setHTML(n, t)
                : e.selection.setContent(t, { no_events: !0 });
            }
          })(e, t, p);
      var y;
      return (
        ((e, t) => {
          const n = e.schema.getTextInlineElements(),
            o = e.dom;
          if (t) {
            const t = e.getBody(),
              r = nh(e);
            Tt.each(o.select("*[data-mce-fragment]"), (e) => {
              if (
                C(n[e.nodeName.toLowerCase()]) &&
                ((e, t) => te(cg(e, t), (e) => !((e) => lg.has(e))(e)))(o, e)
              )
                for (
                  let n = e.parentElement;
                  C(n) && n !== t && !ug(o, e, n);
                  n = n.parentElement
                )
                  if (r.compare(n, e)) {
                    o.remove(e, !0);
                    break;
                  }
            });
          }
        })(e, d),
        ((e, t) => {
          var n, o, r;
          let s;
          const a = e.dom,
            i = e.selection;
          if (!t) return;
          i.scrollIntoView(t);
          const l = Zp(e.getBody(), t);
          if (l && "false" === a.getContentEditable(l))
            return a.remove(t), void i.select(l);
          let d = a.createRng();
          const c = t.previousSibling;
          if (Ro(c)) {
            d.setStart(
              c,
              null !==
                (o =
                  null === (n = c.nodeValue) || void 0 === n
                    ? void 0
                    : n.length) && void 0 !== o
                ? o
                : 0
            );
            const e = t.nextSibling;
            Ro(e) &&
              (c.appendData(e.data),
              null === (r = e.parentNode) || void 0 === r || r.removeChild(e));
          } else d.setStartBefore(t), d.setEndBefore(t);
          const u = a.getParent(t, a.isBlock);
          a.remove(t),
            u &&
              a.isEmpty(u) &&
              (eo(mn(u)),
              d.setStart(u, 0),
              d.setEnd(u, 0),
              vh(u) ||
              ((e) => !!e.getAttribute("data-mce-fragment"))(u) ||
              !(s = ((t) => {
                let n = ai.fromRangeStart(t);
                return (
                  (n = Nc(e.getBody()).next(n)),
                  null == n ? void 0 : n.toRange()
                );
              })(d))
                ? a.add(u, a.create("br", { "data-mce-bogus": "1" }))
                : ((d = s), a.remove(u))),
            i.setRng(d);
        })(e, i.get("mce_marker")),
        (y = e.getBody()),
        Tt.each(y.getElementsByTagName("*"), (e) => {
          e.removeAttribute("data-mce-fragment");
        }),
        ((e, t) => {
          M.from(e.getParent(t, "td,th")).map(mn).each(Sr);
        })(i, a.getStart()),
        t
      );
    },
    Ch = (e) => e instanceof Zf,
    wh = (e, t, n) => {
      e.dom.setHTML(e.getBody(), t),
        !0 !== n &&
          ((e) => {
            If(e) &&
              Ic(e.getBody()).each((t) => {
                const n = t.getNode(),
                  o = _o(n) ? Ic(n).getOr(t) : t;
                e.selection.setRng(o.toRange());
              });
          })(e);
    },
    xh = (e, t) =>
      ((e, t) => {
        const n = e.dom;
        return n.parentNode
          ? ((e, t) => Q(e.dom.childNodes, (e) => t(mn(e))).map(mn))(
              mn(n.parentNode),
              (n) => !bn(e, n) && t(n)
            )
          : M.none();
      })(e, t).isSome(),
    kh = (e) => (w(e) ? e : P),
    Sh = (e, t, n) => {
      const o = t(e),
        r = kh(n);
      return o.orThunk(() =>
        r(e)
          ? M.none()
          : ((e, t, n) => {
              let o = e.dom;
              const r = kh(n);
              for (; o.parentNode; ) {
                o = o.parentNode;
                const e = mn(o),
                  n = t(e);
                if (n.isSome()) return n;
                if (r(e)) break;
              }
              return M.none();
            })(e, t, r)
      );
    },
    _h = Bu,
    Eh = (e, t, n) => {
      const o = e.formatter.get(n);
      if (o)
        for (let n = 0; n < o.length; n++) {
          const r = o[n];
          if (Uu(r) && !1 === r.inherit && e.dom.is(t, r.selector)) return !0;
        }
      return !1;
    },
    Nh = (e, t, n, o, r) => {
      const s = e.dom.getRoot();
      if (t === s) return !1;
      const a = e.dom.getParent(
        t,
        (t) => !!Eh(e, t, n) || t.parentNode === s || !!Oh(e, t, n, o, !0)
      );
      return !!Oh(e, a, n, o, r);
    },
    Rh = (e, t, n) =>
      !(!zu(n) || !_h(t, n.inline)) ||
      !(!Fu(n) || !_h(t, n.block)) ||
      (!!Uu(n) && yo(t) && e.is(t, n.selector)),
    Ah = (e, t, n, o, r, s) => {
      const a = n[o],
        i = "attributes" === o;
      if (w(n.onmatch)) return n.onmatch(t, n, o);
      if (a)
        if (_e(a)) {
          for (let n = 0; n < a.length; n++)
            if (i ? e.getAttrib(t, a[n]) : Pu(e, t, a[n])) return !0;
        } else
          for (const o in a)
            if (xe(a, o)) {
              const l = i ? e.getAttrib(t, o) : Pu(e, t, o),
                d = Tu(a[o], s),
                c = y(l) || Ke(l);
              if (c && y(d)) continue;
              if (r && c && !n.exact) return !1;
              if ((!r || n.exact) && !_h(l, Du(d, o))) return !1;
            }
      return !0;
    },
    Oh = (e, t, n, o, r) => {
      const s = e.formatter.get(n),
        a = e.dom;
      if (s && yo(t))
        for (let n = 0; n < s.length; n++) {
          const i = s[n];
          if (
            Rh(e.dom, t, i) &&
            Ah(a, t, i, "attributes", r, o) &&
            Ah(a, t, i, "styles", r, o)
          ) {
            const n = i.classes;
            if (n)
              for (let r = 0; r < n.length; r++)
                if (!e.dom.hasClass(t, Tu(n[r], o))) return;
            return i;
          }
        }
    },
    Th = (e, t, n, o, r) => {
      if (o) return Nh(e, o, t, n, r);
      if (((o = e.selection.getNode()), Nh(e, o, t, n, r))) return !0;
      const s = e.selection.getStart();
      return !(s === o || !Nh(e, s, t, n, r));
    },
    Bh = _r,
    Dh = (e) =>
      ((e) => {
        const t = [];
        let n = e;
        for (; n; ) {
          if ((Ro(n) && n.data !== Bh) || n.childNodes.length > 1) return [];
          yo(n) && t.push(n), (n = n.firstChild);
        }
        return t;
      })(e).length > 0,
    Ph = (e) => {
      if (e) {
        const t = new Zo(e, e);
        for (let e = t.current(); e; e = t.next()) if (Ro(e)) return e;
      }
      return null;
    },
    Lh = (e) => {
      const t = cn("span");
      return (
        qt(t, {
          id: Uc,
          "data-mce-bogus": "1",
          "data-mce-type": "format-caret",
        }),
        e && Jn(t, un(Bh)),
        t
      );
    },
    Mh = (e, t, n = !0) => {
      const o = e.dom,
        r = e.selection;
      if (Dh(t)) gp(e, !1, mn(t), n);
      else {
        const e = r.getRng(),
          n = o.getParent(t, o.isBlock),
          s = e.startContainer,
          a = e.startOffset,
          i = e.endContainer,
          l = e.endOffset,
          d = ((e) => {
            const t = Ph(e);
            return t && t.data.charAt(0) === Bh && t.deleteData(0, 1), t;
          })(t);
        o.remove(t, !0),
          s === d && a > 0 && e.setStart(d, a - 1),
          i === d && l > 0 && e.setEnd(d, l - 1),
          n && o.isEmpty(n) && kr(mn(n)),
          r.setRng(e);
      }
    },
    Ih = (e, t, n = !0) => {
      const o = e.dom,
        r = e.selection;
      if (t) Mh(e, t, n);
      else if (!(t = jc(e.getBody(), r.getStart())))
        for (; (t = o.get(Uc)); ) Mh(e, t, !1);
    },
    Fh = (e, t) => (e.appendChild(t), t),
    Uh = (e, t) => {
      var n;
      const o = G(e, (e, t) => Fh(e, t.cloneNode(!1)), t),
        r = null !== (n = o.ownerDocument) && void 0 !== n ? n : document;
      return Fh(o, r.createTextNode(Bh));
    },
    zh = (e, t, n, o) => {
      const a = e.dom,
        i = e.selection;
      let l = !1;
      const d = e.formatter.get(t);
      if (!d) return;
      const c = i.getRng(),
        u = c.startContainer,
        m = c.startOffset;
      let f = u;
      Ro(u) && (m !== u.data.length && (l = !0), (f = f.parentNode));
      const g = [];
      let h;
      for (; f; ) {
        if (Oh(e, f, t, n, o)) {
          h = f;
          break;
        }
        f.nextSibling && (l = !0), g.push(f), (f = f.parentNode);
      }
      if (h)
        if (l) {
          const r = i.getBookmark();
          c.collapse(!0);
          let s = nm(e, c, d, !0);
          (s = Gm(s)), e.formatter.remove(t, n, s, o), i.moveToBookmark(r);
        } else {
          const l = jc(e.getBody(), h),
            d = Lh(!1).dom;
          ((e, t, n) => {
            var o, r;
            const s = e.dom,
              a = s.getParent(n, O(Nu, e));
            a && s.isEmpty(a)
              ? null === (o = n.parentNode) ||
                void 0 === o ||
                o.replaceChild(t, n)
              : (((e) => {
                  const t = vr(e, "br"),
                    n = K(
                      ((e) => {
                        const t = [];
                        let n = e.dom;
                        for (; n; ) t.push(mn(n)), (n = n.lastChild);
                        return t;
                      })(e).slice(-1),
                      rr
                    );
                  t.length === n.length && V(n, to);
                })(mn(n)),
                s.isEmpty(n)
                  ? null === (r = n.parentNode) ||
                    void 0 === r ||
                    r.replaceChild(t, n)
                  : s.insertAfter(t, n));
          })(e, d, null != l ? l : h);
          const c = ((e, t, n, o, a, i) => {
              const l = e.formatter,
                d = e.dom,
                c = K(ue(l.get()), (e) => e !== o && !Ue(e, "removeformat")),
                u = ((e, t, n) =>
                  Y(
                    n,
                    (n, o) => {
                      const r = ((e, t) =>
                        Iu(e, t, (e) => {
                          const t = (e) =>
                            w(e) || (e.length > 1 && "%" === e.charAt(0));
                          return H(["styles", "attributes"], (n) =>
                            we(e, n).exists((e) => {
                              const n = p(e) ? e : Ce(e);
                              return H(n, t);
                            })
                          );
                        }))(e, o);
                      return e.formatter.matchNode(t, o, {}, r)
                        ? n.concat([o])
                        : n;
                    },
                    []
                  ))(e, n, c);
              if (
                K(
                  u,
                  (t) =>
                    !((e, t, n) => {
                      const o = [
                          "inline",
                          "block",
                          "selector",
                          "attributes",
                          "styles",
                          "classes",
                        ],
                        a = (e) => ve(e, (e, t) => H(o, (e) => e === t));
                      return Iu(e, t, (t) => {
                        const o = a(t);
                        return Iu(e, n, (e) => {
                          const t = a(e);
                          return ((e, t, n = s) => r(n).eq(e, t))(o, t);
                        });
                      });
                    })(e, t, o)
                ).length > 0
              ) {
                const e = n.cloneNode(!1);
                return (
                  d.add(t, e), l.remove(o, a, e, i), d.remove(e), M.some(e)
                );
              }
              return M.none();
            })(e, d, h, t, n, o),
            u = Uh(g.concat(c.toArray()), d);
          l && Mh(e, l, !1),
            i.setCursorLocation(u, 1),
            a.isEmpty(h) && a.remove(h);
        }
    },
    jh = (e, t) => {
      const n = e.schema.getTextInlineElements();
      return xe(n, Lt(t)) && !zc(t.dom) && !So(t.dom);
    },
    Hh = {},
    $h = wo(["pre"]);
  Hh.pre || (Hh.pre = []),
    Hh.pre.push((e) => {
      if (!e.selection.getRng().collapsed) {
        const t = e.selection.getSelectedBlocks(),
          n = K(
            K(t, $h),
            ((e) => (t) => {
              const n = t.previousSibling;
              return $h(n) && j(e, n);
            })(t)
          );
        V(n, (e) => {
          ((e, t) => {
            const n = mn(t),
              o = Cn(n).dom;
            to(n), Zn(mn(e), [cn("br", o), cn("br", o), ...Nn(n)]);
          })(e.previousSibling, e);
        });
      }
    });
  const Vh = ["fontWeight", "fontStyle", "color", "fontSize", "fontFamily"],
    qh = (e, t) => {
      const n = e.get(t);
      return p(n)
        ? Q(
            n,
            (e) =>
              zu(e) &&
              "span" === e.inline &&
              ((e) => f(e.styles) && H(ue(e.styles), (e) => j(Vh, e)))(e)
          )
        : M.none();
    },
    Wh = (e, t) => Mc(t, ai.fromRangeStart(e)).isNone(),
    Kh = (e, t) =>
      !1 ===
      Lc(t, ai.fromRangeEnd(e)).exists(
        (e) => !Po(e.getNode()) || Lc(t, e).isSome()
      ),
    Gh = (e) => (t) => jo(t) && "false" !== e.getContentEditableParent(t),
    Yh = (e) => K(e.getSelectedBlocks(), Gh(e.dom)),
    Xh = Tt.each,
    Qh = (e) => yo(e) && !Zc(e) && !zc(e) && !So(e),
    Jh = (e, t) => {
      for (let n = e; n; n = n[t]) {
        if (Ro(n) && We(n.data)) return e;
        if (yo(n) && !Zc(n)) return n;
      }
      return e;
    },
    Zh = (e, t, n) => {
      const o = nh(e),
        r = yo(t) && ku(t),
        s = yo(n) && ku(n);
      if (r && s) {
        const r = Jh(t, "previousSibling"),
          s = Jh(n, "nextSibling");
        if (o.compare(r, s)) {
          for (let e = r.nextSibling; e && e !== s; ) {
            const t = e;
            (e = e.nextSibling), r.appendChild(t);
          }
          return (
            e.dom.remove(s),
            Tt.each(Tt.grep(s.childNodes), (e) => {
              r.appendChild(e);
            }),
            r
          );
        }
      }
      return n;
    },
    eb = (e, t, n, o) => {
      var r;
      if (o && !1 !== t.merge_siblings) {
        const t = null !== (r = Zh(e, Eu(o), o)) && void 0 !== r ? r : o;
        Zh(e, t, Eu(t, !0));
      }
    },
    tb = (e, t, n) => {
      Xh(e.childNodes, (e) => {
        Qh(e) && (t(e) && n(e), e.hasChildNodes() && tb(e, t, n));
      });
    },
    nb = (e, t) => (n) => !(!n || !Pu(e, n, t)),
    ob = (e, t, n) => (o) => {
      e.setStyle(o, t, n),
        "" === o.getAttribute("style") && o.removeAttribute("style"),
        ((e, t) => {
          "SPAN" === t.nodeName &&
            0 === e.getAttribs(t).length &&
            e.remove(t, !0);
        })(e, o);
    },
    rb = Ti([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
    sb = /^(src|href|style)$/,
    ab = Tt.each,
    ib = Bu,
    lb = (e, t, n) => e.isChildOf(t, n) && t !== n && !e.isBlock(n),
    db = (e, t, n) => {
      let o = t[n ? "startContainer" : "endContainer"],
        r = t[n ? "startOffset" : "endOffset"];
      if (yo(o)) {
        const e = o.childNodes.length - 1;
        !n && r && r--, (o = o.childNodes[r > e ? e : r]);
      }
      return (
        Ro(o) &&
          n &&
          r >= o.data.length &&
          (o = new Zo(o, e.getBody()).next() || o),
        Ro(o) && !n && 0 === r && (o = new Zo(o, e.getBody()).prev() || o),
        o
      );
    },
    cb = (e, t) => {
      const n = t ? "firstChild" : "lastChild",
        o = e[n];
      return ((e) => /^(TR|TH|TD)$/.test(e.nodeName))(e) && o
        ? ("TR" === e.nodeName && o[n]) || o
        : e;
    },
    ub = (e, t, n, o) => {
      var r;
      const s = e.create(n, o);
      return (
        null === (r = t.parentNode) || void 0 === r || r.insertBefore(s, t),
        s.appendChild(t),
        s
      );
    },
    mb = (e, t, n, o, r) => {
      const s = mn(t),
        a = mn(e.create(o, r)),
        i = n ? En(s) : _n(s);
      return Zn(a, i), n ? (Yn(s, a), Qn(a, s)) : (Xn(s, a), Jn(a, s)), a.dom;
    },
    fb = (e, t, n) =>
      x(e) ? { name: t, value: null } : { name: e, value: Tu(t, n) },
    gb = (e, t) => {
      "" === e.getAttrib(t, "style") &&
        (t.removeAttribute("style"), t.removeAttribute("data-mce-style"));
    },
    pb = (e, t, n, o, r) => {
      let s = !1;
      ab(n.styles, (a, i) => {
        const { name: l, value: d } = fb(i, a, o),
          c = Du(d, l);
        (n.remove_similar || h(d) || !yo(r) || ib(Pu(e, r, l), c)) &&
          e.setStyle(t, l, ""),
          (s = !0);
      }),
        s && gb(e, t);
    },
    hb = (e, t, n, o, r) => {
      const s = e.dom,
        a = nh(e);
      if (!t.ceFalseOverride && o && "false" === s.getContentEditableParent(o))
        return rb.keep();
      if (o && !Rh(s, o, t) && !((e, t) => t.links && "A" === e.nodeName)(o, t))
        return rb.keep();
      const i = o,
        l = t.preserve_attributes;
      if (zu(t) && "all" === t.remove && p(l)) {
        const e = K(s.getAttribs(i), (e) => j(l, e.name.toLowerCase()));
        if (
          (s.removeAllAttribs(i),
          V(e, (e) => s.setAttrib(i, e.name, e.value)),
          e.length > 0)
        )
          return rb.rename("span");
      }
      if ("all" !== t.remove) {
        pb(s, i, t, n, r),
          ab(t.attributes, (e, o) => {
            const { name: a, value: l } = fb(o, e, n);
            if (
              t.remove_similar ||
              h(l) ||
              !yo(r) ||
              ib(s.getAttrib(r, a), l)
            ) {
              if ("class" === a) {
                const e = s.getAttrib(i, a);
                if (e) {
                  let t = "";
                  if (
                    (V(e.split(/\s+/), (e) => {
                      /mce\-\w+/.test(e) && (t += (t ? " " : "") + e);
                    }),
                    t)
                  )
                    return void s.setAttrib(i, a, t);
                }
              }
              if (
                (sb.test(a) && i.removeAttribute("data-mce-" + a),
                "style" === a &&
                  wo(["li"])(i) &&
                  "none" === s.getStyle(i, "list-style-type"))
              )
                return (
                  i.removeAttribute(a),
                  void s.setStyle(i, "list-style-type", "none")
                );
              "class" === a && i.removeAttribute("className"),
                i.removeAttribute(a);
            }
          }),
          ab(t.classes, (e) => {
            (e = Tu(e, n)), (yo(r) && !s.hasClass(r, e)) || s.removeClass(i, e);
          });
        const e = s.getAttribs(i);
        for (let t = 0; t < e.length; t++) {
          const n = e[t].nodeName;
          if (!a.isAttributeInternal(n)) return rb.keep();
        }
      }
      return "none" !== t.remove
        ? (((e, t, n) => {
            const o = t.parentNode;
            let r;
            const s = e.dom,
              a = Ji(e);
            Fu(n) &&
              o === s.getRoot() &&
              ((n.list_block && ib(t, n.list_block)) ||
                V(de(t.childNodes), (t) => {
                  Ru(e, a, t.nodeName.toLowerCase())
                    ? r
                      ? r.appendChild(t)
                      : ((r = ub(s, t, a)), s.setAttribs(r, Zi(e)))
                    : (r = null);
                })),
              (((e) => Uu(e) && zu(e) && Bt(we(e, "mixed"), !0))(n) &&
                !ib(n.inline, t)) ||
                s.remove(t, !0);
          })(e, i, t),
          rb.removed())
        : rb.keep();
    },
    bb = (e, t, n, o, r) =>
      hb(e, t, n, o, r).fold(P, (t) => (e.dom.rename(o, t), !0), L),
    vb = (e, t, n, o) =>
      hb(e, t, n, o, o).fold(
        N(o),
        (t) => (e.dom.createFragment().appendChild(o), e.dom.rename(o, t)),
        N(null)
      ),
    yb = (e, t, n, o, r) => {
      const s = e.formatter.get(t),
        a = s[0],
        i = e.dom,
        l = e.selection,
        d = (o) => {
          const i = ((e, t, n, o, r) => {
            let s;
            return (
              t.parentNode &&
                V(Mu(e.dom, t.parentNode).reverse(), (t) => {
                  if (!s && yo(t) && "_start" !== t.id && "_end" !== t.id) {
                    const a = Oh(e, t, n, o, r);
                    a && !1 !== a.split && (s = t);
                  }
                }),
              s
            );
          })(e, o, t, n, r);
          return ((e, t, n, o, r, s, a, i) => {
            var l, d;
            let c, u;
            const m = e.dom;
            if (n) {
              const s = n.parentNode;
              for (let n = o.parentNode; n && n !== s; n = n.parentNode) {
                let o = m.clone(n, !1);
                for (
                  let n = 0;
                  n < t.length && ((o = vb(e, t[n], i, o)), null !== o);
                  n++
                );
                o && (c && o.appendChild(c), u || (u = o), (c = o));
              }
              (a.mixed && m.isBlock(n)) ||
                (o = null !== (l = m.split(n, o)) && void 0 !== l ? l : o),
                c &&
                  u &&
                  (null === (d = r.parentNode) ||
                    void 0 === d ||
                    d.insertBefore(c, r),
                  u.appendChild(r),
                  zu(a) && eb(e, a, 0, c));
            }
            return o;
          })(e, s, i, o, o, 0, a, n);
        },
        c = (t) => H(s, (o) => bb(e, o, n, t, t)),
        u = (t) => {
          const n = de(t.childNodes),
            o = c(t) || H(s, (e) => Rh(i, t, e)),
            r = t.parentNode;
          if ((!o && C(r) && ju(a) && c(r), a.deep && n.length))
            for (let e = 0; e < n.length; e++) u(n[e]);
          V(["underline", "line-through", "overline"], (n) => {
            yo(t) &&
              e.dom.getStyle(t, "text-decoration") === n &&
              t.parentNode &&
              Lu(i, t.parentNode) === n &&
              bb(
                e,
                {
                  deep: !1,
                  exact: !0,
                  inline: "span",
                  styles: { textDecoration: n },
                },
                void 0,
                t
              );
          });
        },
        m = (e) => {
          const t = i.get(e ? "_start" : "_end");
          if (t) {
            let n = t[e ? "firstChild" : "lastChild"];
            return (
              ((e) => Zc(e) && yo(e) && ("_start" === e.id || "_end" === e.id))(
                n
              ) && (n = n[e ? "firstChild" : "lastChild"]),
              Ro(n) &&
                0 === n.data.length &&
                (n = e
                  ? t.previousSibling || t.nextSibling
                  : t.nextSibling || t.previousSibling),
              i.remove(t, !0),
              n
            );
          }
          return null;
        },
        f = (t) => {
          let n,
            o,
            r = nm(e, t, s, t.collapsed);
          if (a.split) {
            if (((r = Gm(r)), (n = db(e, r, !0)), (o = db(e, r)), n !== o)) {
              if (((n = cb(n, !0)), (o = cb(o, !1)), lb(i, n, o))) {
                const e = M.from(n.firstChild).getOr(n);
                return (
                  d(
                    mb(i, e, !0, "span", {
                      id: "_start",
                      "data-mce-type": "bookmark",
                    })
                  ),
                  void m(!0)
                );
              }
              if (lb(i, o, n)) {
                const e = M.from(o.lastChild).getOr(o);
                return (
                  d(
                    mb(i, e, !1, "span", {
                      id: "_end",
                      "data-mce-type": "bookmark",
                    })
                  ),
                  void m(!1)
                );
              }
              (n = ub(i, n, "span", {
                id: "_start",
                "data-mce-type": "bookmark",
              })),
                (o = ub(i, o, "span", {
                  id: "_end",
                  "data-mce-type": "bookmark",
                }));
              const e = i.createRng();
              e.setStartAfter(n),
                e.setEndBefore(o),
                om(i, e, (e) => {
                  V(e, (e) => {
                    Zc(e) || Zc(e.parentNode) || d(e);
                  });
                }),
                d(n),
                d(o),
                (n = m(!0)),
                (o = m());
            } else n = o = d(n);
            (r.startContainer = n.parentNode ? n.parentNode : n),
              (r.startOffset = i.nodeIndex(n)),
              (r.endContainer = o.parentNode ? o.parentNode : o),
              (r.endOffset = i.nodeIndex(o) + 1);
          }
          om(i, r, (e) => {
            V(e, u);
          });
        };
      if (o) {
        if (wu(o)) {
          const e = i.createRng();
          e.setStartBefore(o), e.setEndAfter(o), f(e);
        } else f(o);
        fm(e, t, o, n);
      } else
        l.isCollapsed() && zu(a) && !mu(e).length
          ? zh(e, t, n, r)
          : (Su(
              e,
              () => yu(e, f),
              (o) => zu(a) && Th(e, t, n, o)
            ),
            e.nodeChanged()),
          ((e, t, n) => {
            "removeformat" === t
              ? V(Yh(e.selection), (t) => {
                  V(Vh, (n) => e.dom.setStyle(t, n, "")), gb(e.dom, t);
                })
              : qh(e.formatter, t).each((t) => {
                  V(Yh(e.selection), (o) => pb(e.dom, o, t, n, null));
                });
          })(e, t, n),
          fm(e, t, o, n);
    },
    Cb = Tt.each,
    wb = Tt.each,
    xb = (e, t, n, o) => {
      if (
        (wb(n.styles, (n, r) => {
          e.setStyle(t, r, Tu(n, o));
        }),
        n.styles)
      ) {
        const n = e.getAttrib(t, "style");
        n && e.setAttrib(t, "data-mce-style", n);
      }
    },
    kb = (e, t, n, o) => {
      const r = e.formatter.get(t),
        s = r[0],
        a = !o && e.selection.isCollapsed(),
        i = e.dom,
        l = e.selection,
        d = (e, t = s) => {
          w(t.onformat) && t.onformat(e, t, n, o),
            xb(i, e, t, n),
            wb(t.attributes, (t, o) => {
              i.setAttrib(e, o, Tu(t, n));
            }),
            wb(t.classes, (t) => {
              const o = Tu(t, n);
              i.hasClass(e, o) || i.addClass(e, o);
            });
        },
        c = (e, t) => {
          let n = !1;
          return (
            wb(
              e,
              (e) =>
                !(
                  !Uu(e) ||
                  (("false" !== i.getContentEditable(t) || e.ceFalseOverride) &&
                    (!C(e.collapsed) || e.collapsed === a) &&
                    i.is(t, e.selector) &&
                    !zc(t) &&
                    (d(t, e), (n = !0), 1))
                )
            ),
            n
          );
        },
        u = (e) => {
          if (m(e)) {
            const t = i.create(e);
            return d(t), t;
          }
          return null;
        },
        f = (o, a, i) => {
          const l = [];
          let m = !0;
          const f = s.inline || s.block,
            g = u(f);
          om(o, a, (a) => {
            let u;
            const p = (a) => {
              let h = !1,
                b = m,
                v = !1;
              const y = a.nodeName.toLowerCase(),
                w = a.parentNode,
                x = w.nodeName.toLowerCase(),
                k = o.getContentEditable(a);
              C(k) && ((b = m), (m = "true" === k), (h = !0), (v = Ou(e, a)));
              const S = m && !h;
              if (
                Po(a) &&
                !((e, t, n, o) => {
                  if (Il(e) && zu(t) && n.parentNode) {
                    const t = Ds(e.schema),
                      r = xh(mn(n), (e) => zc(e.dom));
                    return ke(t, o) && ss(mn(n.parentNode), !1) && !r;
                  }
                  return !1;
                })(e, s, a, x)
              )
                return (u = null), void (Fu(s) && o.remove(a));
              if (
                ((o) =>
                  ((e) => Fu(e) && !0 === e.wrapper)(s) && Oh(e, o, t, n))(a)
              )
                u = null;
              else {
                if (
                  ((t, n, o) => {
                    const r =
                      ((e) => Fu(e) && !0 !== e.wrapper)(s) &&
                      Nu(e, t) &&
                      Ru(e, n, f);
                    return o && r;
                  })(y, x, S)
                ) {
                  const e = o.rename(a, f);
                  return d(e), l.push(e), void (u = null);
                }
                if (Uu(s)) {
                  let e = c(r, a);
                  if ((!e && C(w) && ju(s) && (e = c(r, w)), !zu(s) || e))
                    return void (u = null);
                }
                C(g) &&
                ((t, n, r, a) => {
                  const l = t.nodeName.toLowerCase(),
                    d = Ru(e, f, l) && Ru(e, n, f),
                    c = !i && Ro(t) && Er(t.data),
                    u = zc(t),
                    m = !zu(s) || !o.isBlock(t);
                  return (r || a) && d && !c && !u && m;
                })(a, x, S, v)
                  ? (u ||
                      ((u = o.clone(g, !1)), w.insertBefore(u, a), l.push(u)),
                    v && h && (m = b),
                    u.appendChild(a))
                  : ((u = null),
                    V(de(a.childNodes), p),
                    h && (m = b),
                    (u = null));
              }
            };
            V(a, p);
          }),
            !0 === s.links &&
              V(l, (e) => {
                const t = (e) => {
                  "A" === e.nodeName && d(e, s), V(de(e.childNodes), t);
                };
                t(e);
              }),
            V(l, (a) => {
              const i = ((e) => {
                let t = 0;
                return (
                  V(e.childNodes, (e) => {
                    ((e) => C(e) && Ro(e) && 0 === e.length)(e) || Zc(e) || t++;
                  }),
                  t
                );
              })(a);
              (!(l.length > 1) && o.isBlock(a)) || 0 !== i
                ? (zu(s) || (Fu(s) && s.wrapper)) &&
                  (s.exact ||
                    1 !== i ||
                    (a = ((e) => {
                      const t = Q(e.childNodes, xu).filter(
                        (e) =>
                          "false" !== o.getContentEditable(e) && Rh(o, e, s)
                      );
                      return t
                        .map((t) => {
                          const n = o.clone(t, !1);
                          return d(n), o.replace(n, e, !0), o.remove(t, !0), n;
                        })
                        .getOr(e);
                    })(a)),
                  ((e, t, n, o) => {
                    Cb(t, (t) => {
                      zu(t) &&
                        Cb(e.dom.select(t.inline, o), (o) => {
                          Qh(o) && bb(e, t, n, o, t.exact ? o : null);
                        }),
                        ((e, t, n) => {
                          if (t.clear_child_styles) {
                            const o = t.links ? "*:not(a)" : "*";
                            Xh(e.select(o, n), (n) => {
                              Qh(n) &&
                                ku(n) &&
                                Xh(t.styles, (t, o) => {
                                  e.setStyle(n, o, "");
                                });
                            });
                          }
                        })(e.dom, t, o);
                    });
                  })(e, r, n, a),
                  ((e, t, n, o, r) => {
                    const s = r.parentNode;
                    (Oh(e, s, n, o) && bb(e, t, o, r)) ||
                      (t.merge_with_parents &&
                        s &&
                        e.dom.getParent(
                          s,
                          (s) => !!Oh(e, s, n, o) && (bb(e, t, o, r), !0)
                        ));
                  })(e, s, t, n, a),
                  ((e, t, n, o) => {
                    if (t.styles && t.styles.backgroundColor) {
                      const r = nb(e, "fontSize");
                      tb(
                        o,
                        (e) => r(e) && ku(e),
                        ob(
                          e,
                          "backgroundColor",
                          Tu(t.styles.backgroundColor, n)
                        )
                      );
                    }
                  })(o, s, n, a),
                  ((e, t, n, o) => {
                    const r = (t) => {
                      if (yo(t) && yo(t.parentNode) && ku(t)) {
                        const n = Lu(e, t.parentNode);
                        e.getStyle(t, "color") && n
                          ? e.setStyle(t, "text-decoration", n)
                          : e.getStyle(t, "text-decoration") === n &&
                            e.setStyle(t, "text-decoration", null);
                      }
                    };
                    t.styles &&
                      (t.styles.color || t.styles.textDecoration) &&
                      (Tt.walk(o, r, "childNodes"), r(o));
                  })(o, s, 0, a),
                  ((e, t, n, o) => {
                    if (zu(t) && ("sub" === t.inline || "sup" === t.inline)) {
                      const n = nb(e, "fontSize");
                      tb(o, (e) => n(e) && ku(e), ob(e, "fontSize", ""));
                      const r = K(
                        e.select("sup" === t.inline ? "sub" : "sup", o),
                        ku
                      );
                      e.remove(r, !0);
                    }
                  })(o, s, 0, a),
                  eb(e, s, 0, a))
                : o.remove(a, !0);
            });
        },
        g = wu(o) ? o : l.getNode();
      if ("false" === i.getContentEditable(g) && !Ou(e, g))
        return c(r, (o = g)), void mm(e, t, o, n);
      if (s) {
        if (o)
          if (wu(o)) {
            if (!c(r, o)) {
              const t = i.createRng();
              t.setStartBefore(o), t.setEndAfter(o), f(i, nm(e, t, r), !0);
            }
          } else f(i, o, !0);
        else
          a && zu(s) && !mu(e).length
            ? ((e, t, n) => {
                let o;
                const r = e.selection,
                  s = e.formatter.get(t);
                if (!s) return;
                const a = r.getRng();
                let i = a.startOffset;
                const l = a.startContainer.nodeValue;
                o = jc(e.getBody(), r.getStart());
                const d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                if (
                  l &&
                  i > 0 &&
                  i < l.length &&
                  d.test(l.charAt(i)) &&
                  d.test(l.charAt(i - 1))
                ) {
                  const o = r.getBookmark();
                  a.collapse(!0);
                  let i = nm(e, a, s);
                  (i = Gm(i)), e.formatter.apply(t, n, i), r.moveToBookmark(o);
                } else {
                  let s = o ? Ph(o) : null;
                  (o && (null == s ? void 0 : s.data) === Bh) ||
                    ((c = e.getDoc()),
                    (u = Lh(!0).dom),
                    (o = c.importNode(u, !0)),
                    (s = o.firstChild),
                    a.insertNode(o),
                    (i = 1)),
                    e.formatter.apply(t, n, o),
                    r.setCursorLocation(s, i);
                }
                var c, u;
              })(e, t, n)
            : (l.setRng(uh(l.getRng())),
              Su(
                e,
                () => {
                  yu(e, (t, n) => {
                    const o = n ? t : nm(e, t, r);
                    f(i, o, !1);
                  });
                },
                L
              ),
              e.nodeChanged()),
            qh(e.formatter, t).each((t) => {
              V(
                ((e) =>
                  K(
                    ((e) => {
                      const t = e.getSelectedBlocks(),
                        n = e.getRng();
                      if (e.isCollapsed()) return [];
                      if (1 === t.length)
                        return Wh(n, t[0]) && Kh(n, t[0]) ? t : [];
                      {
                        const e = ie(t)
                            .filter((e) => Wh(n, e))
                            .toArray(),
                          o = le(t)
                            .filter((e) => Kh(n, e))
                            .toArray(),
                          r = t.slice(1, -1);
                        return e.concat(r).concat(o);
                      }
                    })(e),
                    Gh(e.dom)
                  ))(e.selection),
                (e) => xb(i, e, t, n)
              );
            });
        ((e, t) => {
          xe(Hh, e) &&
            V(Hh[e], (e) => {
              e(t);
            });
        })(t, e);
      }
      mm(e, t, o, n);
    },
    Sb = (e) => xe(e, "vars"),
    _b = (e) => e.selection.getStart(),
    Eb = (e, t, n, o, r) =>
      X(
        t,
        (t) => {
          const s = e.formatter.matchNode(t, n, null != r ? r : {}, o);
          return !v(s);
        },
        (t) => !!Eh(e, t, n) || (!o && C(e.formatter.matchNode(t, n, r, !0)))
      ),
    Nb = (e, t) => {
      const n = null != t ? t : _b(e);
      return K(Mu(e.dom, n), (e) => yo(e) && !So(e));
    },
    Rb = (e, t, n) => {
      const o = Nb(e, t);
      fe(n, (n, r) => {
        const s = (n) => {
          const s = Eb(e, o, r, n.similar, Sb(n) ? n.vars : void 0),
            a = s.isSome();
          if (n.state.get() !== a) {
            n.state.set(a);
            const e = s.getOr(t);
            Sb(n)
              ? n.callback(a, { node: e, format: r, parents: o })
              : V(n.callbacks, (t) => t(a, { node: e, format: r, parents: o }));
          }
        };
        V([n.withSimilar, n.withoutSimilar], s), V(n.withVars, s);
      });
    };
  function Ab(e) {
    return (
      (Ab =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      Ab(e)
    );
  }
  function Ob(e, t) {
    return (
      (Ob =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        }),
      Ob(e, t)
    );
  }
  function Tb() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function Bb(e, t, n) {
    return (
      (Bb = Tb()
        ? Reflect.construct
        : function (e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var r = new (Function.bind.apply(e, o))();
            return n && Ob(r, n.prototype), r;
          }),
      Bb.apply(null, arguments)
    );
  }
  function Db(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Pb(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Pb(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Pb(e, t)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Pb(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  var Lb = Object.hasOwnProperty,
    Mb = Object.setPrototypeOf,
    Ib = Object.isFrozen,
    Fb = Object.getPrototypeOf,
    Ub = Object.getOwnPropertyDescriptor,
    zb = Object.freeze,
    jb = Object.seal,
    Hb = Object.create,
    $b = "undefined" != typeof Reflect && Reflect,
    Vb = $b.apply,
    qb = $b.construct;
  Vb ||
    (Vb = function (e, t, n) {
      return e.apply(t, n);
    }),
    zb ||
      (zb = function (e) {
        return e;
      }),
    jb ||
      (jb = function (e) {
        return e;
      }),
    qb ||
      (qb = function (e, t) {
        return Bb(e, Db(t));
      });
  var Wb,
    Kb = ov(Array.prototype.forEach),
    Gb = ov(Array.prototype.pop),
    Yb = ov(Array.prototype.push),
    Xb = ov(String.prototype.toLowerCase),
    Qb = ov(String.prototype.match),
    Jb = ov(String.prototype.replace),
    Zb = ov(String.prototype.indexOf),
    ev = ov(String.prototype.trim),
    tv = ov(RegExp.prototype.test),
    nv =
      ((Wb = TypeError),
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return qb(Wb, t);
      });
  function ov(e) {
    return function (t) {
      for (
        var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1;
        r < n;
        r++
      )
        o[r - 1] = arguments[r];
      return Vb(e, t, o);
    };
  }
  function rv(e, t) {
    Mb && Mb(e, null);
    for (var n = t.length; n--; ) {
      var o = t[n];
      if ("string" == typeof o) {
        var r = Xb(o);
        r !== o && (Ib(t) || (t[n] = r), (o = r));
      }
      e[o] = !0;
    }
    return e;
  }
  function sv(e) {
    var t,
      n = Hb(null);
    for (t in e) Vb(Lb, e, [t]) && (n[t] = e[t]);
    return n;
  }
  function av(e, t) {
    for (; null !== e; ) {
      var n = Ub(e, t);
      if (n) {
        if (n.get) return ov(n.get);
        if ("function" == typeof n.value) return ov(n.value);
      }
      e = Fb(e);
    }
    return function (e) {
      return console.warn("fallback value for", e), null;
    };
  }
  var iv = zb([
      "a",
      "abbr",
      "acronym",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "content",
      "data",
      "datalist",
      "dd",
      "decorator",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "nobr",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
    ]),
    lv = zb([
      "svg",
      "a",
      "altglyph",
      "altglyphdef",
      "altglyphitem",
      "animatecolor",
      "animatemotion",
      "animatetransform",
      "circle",
      "clippath",
      "defs",
      "desc",
      "ellipse",
      "filter",
      "font",
      "g",
      "glyph",
      "glyphref",
      "hkern",
      "image",
      "line",
      "lineargradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialgradient",
      "rect",
      "stop",
      "style",
      "switch",
      "symbol",
      "text",
      "textpath",
      "title",
      "tref",
      "tspan",
      "view",
      "vkern",
    ]),
    dv = zb([
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
    ]),
    cv = zb([
      "animate",
      "color-profile",
      "cursor",
      "discard",
      "fedropshadow",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "foreignobject",
      "hatch",
      "hatchpath",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "missing-glyph",
      "script",
      "set",
      "solidcolor",
      "unknown",
      "use",
    ]),
    uv = zb([
      "math",
      "menclose",
      "merror",
      "mfenced",
      "mfrac",
      "mglyph",
      "mi",
      "mlabeledtr",
      "mmultiscripts",
      "mn",
      "mo",
      "mover",
      "mpadded",
      "mphantom",
      "mroot",
      "mrow",
      "ms",
      "mspace",
      "msqrt",
      "mstyle",
      "msub",
      "msup",
      "msubsup",
      "mtable",
      "mtd",
      "mtext",
      "mtr",
      "munder",
      "munderover",
    ]),
    mv = zb([
      "maction",
      "maligngroup",
      "malignmark",
      "mlongdiv",
      "mscarries",
      "mscarry",
      "msgroup",
      "mstack",
      "msline",
      "msrow",
      "semantics",
      "annotation",
      "annotation-xml",
      "mprescripts",
      "none",
    ]),
    fv = zb(["#text"]),
    gv = zb([
      "accept",
      "action",
      "align",
      "alt",
      "autocapitalize",
      "autocomplete",
      "autopictureinpicture",
      "autoplay",
      "background",
      "bgcolor",
      "border",
      "capture",
      "cellpadding",
      "cellspacing",
      "checked",
      "cite",
      "class",
      "clear",
      "color",
      "cols",
      "colspan",
      "controls",
      "controlslist",
      "coords",
      "crossorigin",
      "datetime",
      "decoding",
      "default",
      "dir",
      "disabled",
      "disablepictureinpicture",
      "disableremoteplayback",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "face",
      "for",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "id",
      "inputmode",
      "integrity",
      "ismap",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "loop",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "multiple",
      "muted",
      "name",
      "nonce",
      "noshade",
      "novalidate",
      "nowrap",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "playsinline",
      "poster",
      "preload",
      "pubdate",
      "radiogroup",
      "readonly",
      "rel",
      "required",
      "rev",
      "reversed",
      "role",
      "rows",
      "rowspan",
      "spellcheck",
      "scope",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "srclang",
      "start",
      "src",
      "srcset",
      "step",
      "style",
      "summary",
      "tabindex",
      "title",
      "translate",
      "type",
      "usemap",
      "valign",
      "value",
      "width",
      "xmlns",
      "slot",
    ]),
    pv = zb([
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "ascent",
      "attributename",
      "attributetype",
      "azimuth",
      "basefrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "class",
      "clip",
      "clippathunits",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "cx",
      "cy",
      "d",
      "dx",
      "dy",
      "diffuseconstant",
      "direction",
      "display",
      "divisor",
      "dur",
      "edgemode",
      "elevation",
      "end",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterunits",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyphref",
      "gradientunits",
      "gradienttransform",
      "height",
      "href",
      "id",
      "image-rendering",
      "in",
      "in2",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kerning",
      "keypoints",
      "keysplines",
      "keytimes",
      "lang",
      "lengthadjust",
      "letter-spacing",
      "kernelmatrix",
      "kernelunitlength",
      "lighting-color",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerheight",
      "markerunits",
      "markerwidth",
      "maskcontentunits",
      "maskunits",
      "max",
      "mask",
      "media",
      "method",
      "mode",
      "min",
      "name",
      "numoctaves",
      "offset",
      "operator",
      "opacity",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "paint-order",
      "path",
      "pathlength",
      "patterncontentunits",
      "patterntransform",
      "patternunits",
      "points",
      "preservealpha",
      "preserveaspectratio",
      "primitiveunits",
      "r",
      "rx",
      "ry",
      "radius",
      "refx",
      "refy",
      "repeatcount",
      "repeatdur",
      "restart",
      "result",
      "rotate",
      "scale",
      "seed",
      "shape-rendering",
      "specularconstant",
      "specularexponent",
      "spreadmethod",
      "startoffset",
      "stddeviation",
      "stitchtiles",
      "stop-color",
      "stop-opacity",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke",
      "stroke-width",
      "style",
      "surfacescale",
      "systemlanguage",
      "tabindex",
      "targetx",
      "targety",
      "transform",
      "transform-origin",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textlength",
      "type",
      "u1",
      "u2",
      "unicode",
      "values",
      "viewbox",
      "visibility",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "width",
      "word-spacing",
      "wrap",
      "writing-mode",
      "xchannelselector",
      "ychannelselector",
      "x",
      "x1",
      "x2",
      "xmlns",
      "y",
      "y1",
      "y2",
      "z",
      "zoomandpan",
    ]),
    hv = zb([
      "accent",
      "accentunder",
      "align",
      "bevelled",
      "close",
      "columnsalign",
      "columnlines",
      "columnspan",
      "denomalign",
      "depth",
      "dir",
      "display",
      "displaystyle",
      "encoding",
      "fence",
      "frame",
      "height",
      "href",
      "id",
      "largeop",
      "length",
      "linethickness",
      "lspace",
      "lquote",
      "mathbackground",
      "mathcolor",
      "mathsize",
      "mathvariant",
      "maxsize",
      "minsize",
      "movablelimits",
      "notation",
      "numalign",
      "open",
      "rowalign",
      "rowlines",
      "rowspacing",
      "rowspan",
      "rspace",
      "rquote",
      "scriptlevel",
      "scriptminsize",
      "scriptsizemultiplier",
      "selection",
      "separator",
      "separators",
      "stretchy",
      "subscriptshift",
      "supscriptshift",
      "symmetric",
      "voffset",
      "width",
      "xmlns",
    ]),
    bv = zb([
      "xlink:href",
      "xml:id",
      "xlink:title",
      "xml:space",
      "xmlns:xlink",
    ]),
    vv = jb(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    yv = jb(/<%[\w\W]*|[\w\W]*%>/gm),
    Cv = jb(/^data-[\-\w.\u00B7-\uFFFF]/),
    wv = jb(/^aria-[\-\w]+$/),
    xv = jb(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    kv = jb(/^(?:\w+script|data):/i),
    Sv = jb(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    _v = jb(/^html$/i),
    Ev = function () {
      return "undefined" == typeof window ? null : window;
    },
    Nv = function (e, t) {
      if ("object" !== Ab(e) || "function" != typeof e.createPolicy)
        return null;
      var n = null,
        o = "data-tt-policy-suffix";
      t.currentScript &&
        t.currentScript.hasAttribute(o) &&
        (n = t.currentScript.getAttribute(o));
      var r = "dompurify" + (n ? "#" + n : "");
      try {
        return e.createPolicy(r, {
          createHTML: function (e) {
            return e;
          },
        });
      } catch (e) {
        return (
          console.warn("TrustedTypes policy " + r + " could not be created."),
          null
        );
      }
    },
    Rv = (function e() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ev(),
        n = function (t) {
          return e(t);
        };
      if (
        ((n.version = "2.3.8"),
        (n.removed = []),
        !t || !t.document || 9 !== t.document.nodeType)
      )
        return (n.isSupported = !1), n;
      var o = t.document,
        r = t.document,
        s = t.DocumentFragment,
        a = t.HTMLTemplateElement,
        i = t.Node,
        l = t.Element,
        d = t.NodeFilter,
        c = t.NamedNodeMap,
        u = void 0 === c ? t.NamedNodeMap || t.MozNamedAttrMap : c,
        m = t.HTMLFormElement,
        f = t.DOMParser,
        g = t.trustedTypes,
        p = l.prototype,
        h = av(p, "cloneNode"),
        b = av(p, "nextSibling"),
        v = av(p, "childNodes"),
        y = av(p, "parentNode");
      if ("function" == typeof a) {
        var C = r.createElement("template");
        C.content && C.content.ownerDocument && (r = C.content.ownerDocument);
      }
      var w = Nv(g, o),
        x = w ? w.createHTML("") : "",
        k = r,
        S = k.implementation,
        _ = k.createNodeIterator,
        E = k.createDocumentFragment,
        N = k.getElementsByTagName,
        R = o.importNode,
        A = {};
      try {
        A = sv(r).documentMode ? r.documentMode : {};
      } catch (e) {}
      var O = {};
      n.isSupported =
        "function" == typeof y &&
        S &&
        void 0 !== S.createHTMLDocument &&
        9 !== A;
      var T,
        B,
        D = vv,
        P = yv,
        L = Cv,
        M = wv,
        I = kv,
        F = Sv,
        U = xv,
        z = null,
        j = rv({}, [].concat(Db(iv), Db(lv), Db(dv), Db(uv), Db(fv))),
        H = null,
        $ = rv({}, [].concat(Db(gv), Db(pv), Db(hv), Db(bv))),
        V = Object.seal(
          Object.create(null, {
            tagNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            attributeNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            allowCustomizedBuiltInElements: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: !1,
            },
          })
        ),
        q = null,
        W = null,
        K = !0,
        G = !0,
        Y = !1,
        X = !1,
        Q = !1,
        J = !1,
        Z = !1,
        ee = !1,
        te = !1,
        ne = !1,
        oe = !0,
        re = !0,
        se = !1,
        ae = {},
        ie = null,
        le = rv({}, [
          "annotation-xml",
          "audio",
          "colgroup",
          "desc",
          "foreignobject",
          "head",
          "iframe",
          "math",
          "mi",
          "mn",
          "mo",
          "ms",
          "mtext",
          "noembed",
          "noframes",
          "noscript",
          "plaintext",
          "script",
          "style",
          "svg",
          "template",
          "thead",
          "title",
          "video",
          "xmp",
        ]),
        de = null,
        ce = rv({}, ["audio", "video", "img", "source", "image", "track"]),
        ue = null,
        me = rv({}, [
          "alt",
          "class",
          "for",
          "id",
          "label",
          "name",
          "pattern",
          "placeholder",
          "role",
          "summary",
          "title",
          "value",
          "style",
          "xmlns",
        ]),
        fe = "http://www.w3.org/1998/Math/MathML",
        ge = "http://www.w3.org/2000/svg",
        pe = "http://www.w3.org/1999/xhtml",
        he = pe,
        be = !1,
        ve = ["application/xhtml+xml", "text/html"],
        ye = "text/html",
        Ce = null,
        we = r.createElement("form"),
        xe = function (e) {
          return e instanceof RegExp || e instanceof Function;
        },
        ke = function (e) {
          (Ce && Ce === e) ||
            ((e && "object" === Ab(e)) || (e = {}),
            (e = sv(e)),
            (z = "ALLOWED_TAGS" in e ? rv({}, e.ALLOWED_TAGS) : j),
            (H = "ALLOWED_ATTR" in e ? rv({}, e.ALLOWED_ATTR) : $),
            (ue =
              "ADD_URI_SAFE_ATTR" in e ? rv(sv(me), e.ADD_URI_SAFE_ATTR) : me),
            (de =
              "ADD_DATA_URI_TAGS" in e ? rv(sv(ce), e.ADD_DATA_URI_TAGS) : ce),
            (ie = "FORBID_CONTENTS" in e ? rv({}, e.FORBID_CONTENTS) : le),
            (q = "FORBID_TAGS" in e ? rv({}, e.FORBID_TAGS) : {}),
            (W = "FORBID_ATTR" in e ? rv({}, e.FORBID_ATTR) : {}),
            (ae = "USE_PROFILES" in e && e.USE_PROFILES),
            (K = !1 !== e.ALLOW_ARIA_ATTR),
            (G = !1 !== e.ALLOW_DATA_ATTR),
            (Y = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
            (X = e.SAFE_FOR_TEMPLATES || !1),
            (Q = e.WHOLE_DOCUMENT || !1),
            (ee = e.RETURN_DOM || !1),
            (te = e.RETURN_DOM_FRAGMENT || !1),
            (ne = e.RETURN_TRUSTED_TYPE || !1),
            (Z = e.FORCE_BODY || !1),
            (oe = !1 !== e.SANITIZE_DOM),
            (re = !1 !== e.KEEP_CONTENT),
            (se = e.IN_PLACE || !1),
            (U = e.ALLOWED_URI_REGEXP || U),
            (he = e.NAMESPACE || pe),
            e.CUSTOM_ELEMENT_HANDLING &&
              xe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
              (V.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              xe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
              (V.attributeNameCheck =
                e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              "boolean" ==
                typeof e.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements &&
              (V.allowCustomizedBuiltInElements =
                e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            (T = T =
              -1 === ve.indexOf(e.PARSER_MEDIA_TYPE)
                ? ye
                : e.PARSER_MEDIA_TYPE),
            (B =
              "application/xhtml+xml" === T
                ? function (e) {
                    return e;
                  }
                : Xb),
            X && (G = !1),
            te && (ee = !0),
            ae &&
              ((z = rv({}, Db(fv))),
              (H = []),
              !0 === ae.html && (rv(z, iv), rv(H, gv)),
              !0 === ae.svg && (rv(z, lv), rv(H, pv), rv(H, bv)),
              !0 === ae.svgFilters && (rv(z, dv), rv(H, pv), rv(H, bv)),
              !0 === ae.mathMl && (rv(z, uv), rv(H, hv), rv(H, bv))),
            e.ADD_TAGS && (z === j && (z = sv(z)), rv(z, e.ADD_TAGS)),
            e.ADD_ATTR && (H === $ && (H = sv(H)), rv(H, e.ADD_ATTR)),
            e.ADD_URI_SAFE_ATTR && rv(ue, e.ADD_URI_SAFE_ATTR),
            e.FORBID_CONTENTS &&
              (ie === le && (ie = sv(ie)), rv(ie, e.FORBID_CONTENTS)),
            re && (z["#text"] = !0),
            Q && rv(z, ["html", "head", "body"]),
            z.table && (rv(z, ["tbody"]), delete q.tbody),
            zb && zb(e),
            (Ce = e));
        },
        Se = rv({}, ["mi", "mo", "mn", "ms", "mtext"]),
        _e = rv({}, ["foreignobject", "desc", "title", "annotation-xml"]),
        Ee = rv({}, ["title", "style", "font", "a", "script"]),
        Ne = rv({}, lv);
      rv(Ne, dv), rv(Ne, cv);
      var Re = rv({}, uv);
      rv(Re, mv);
      var Ae = function (e) {
          var t = y(e);
          (t && t.tagName) || (t = { namespaceURI: pe, tagName: "template" });
          var n = Xb(e.tagName),
            o = Xb(t.tagName);
          return e.namespaceURI === ge
            ? t.namespaceURI === pe
              ? "svg" === n
              : t.namespaceURI === fe
              ? "svg" === n && ("annotation-xml" === o || Se[o])
              : Boolean(Ne[n])
            : e.namespaceURI === fe
            ? t.namespaceURI === pe
              ? "math" === n
              : t.namespaceURI === ge
              ? "math" === n && _e[o]
              : Boolean(Re[n])
            : e.namespaceURI === pe &&
              !(t.namespaceURI === ge && !_e[o]) &&
              !(t.namespaceURI === fe && !Se[o]) &&
              !Re[n] &&
              (Ee[n] || !Ne[n]);
        },
        Oe = function (e) {
          Yb(n.removed, { element: e });
          try {
            e.parentNode.removeChild(e);
          } catch (t) {
            try {
              e.outerHTML = x;
            } catch (t) {
              e.remove();
            }
          }
        },
        Te = function (e, t) {
          try {
            Yb(n.removed, { attribute: t.getAttributeNode(e), from: t });
          } catch (e) {
            Yb(n.removed, { attribute: null, from: t });
          }
          if ((t.removeAttribute(e), "is" === e && !H[e]))
            if (ee || te)
              try {
                Oe(t);
              } catch (e) {}
            else
              try {
                t.setAttribute(e, "");
              } catch (e) {}
        },
        Be = function (e) {
          var t, n;
          if (Z) e = "<remove></remove>" + e;
          else {
            var o = Qb(e, /^[\r\n\t ]+/);
            n = o && o[0];
          }
          "application/xhtml+xml" === T &&
            (e =
              '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
              e +
              "</body></html>");
          var s = w ? w.createHTML(e) : e;
          if (he === pe)
            try {
              t = new f().parseFromString(s, T);
            } catch (e) {}
          if (!t || !t.documentElement) {
            t = S.createDocument(he, "template", null);
            try {
              t.documentElement.innerHTML = be ? "" : s;
            } catch (e) {}
          }
          var a = t.body || t.documentElement;
          return (
            e &&
              n &&
              a.insertBefore(r.createTextNode(n), a.childNodes[0] || null),
            he === pe
              ? N.call(t, Q ? "html" : "body")[0]
              : Q
              ? t.documentElement
              : a
          );
        },
        De = function (e) {
          return _.call(
            e.ownerDocument || e,
            e,
            d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT,
            null,
            !1
          );
        },
        Pe = function (e) {
          return (
            e instanceof m &&
            ("string" != typeof e.nodeName ||
              "string" != typeof e.textContent ||
              "function" != typeof e.removeChild ||
              !(e.attributes instanceof u) ||
              "function" != typeof e.removeAttribute ||
              "function" != typeof e.setAttribute ||
              "string" != typeof e.namespaceURI ||
              "function" != typeof e.insertBefore)
          );
        },
        Le = function (e) {
          return "object" === Ab(i)
            ? e instanceof i
            : e &&
                "object" === Ab(e) &&
                "number" == typeof e.nodeType &&
                "string" == typeof e.nodeName;
        },
        Me = function (e, t, o) {
          O[e] &&
            Kb(O[e], function (e) {
              e.call(n, t, o, Ce);
            });
        },
        Ie = function (e) {
          var t;
          if ((Me("beforeSanitizeElements", e, null), Pe(e))) return Oe(e), !0;
          if (tv(/[\u0080-\uFFFF]/, e.nodeName)) return Oe(e), !0;
          var o = B(e.nodeName);
          if (
            (Me("uponSanitizeElement", e, { tagName: o, allowedTags: z }),
            e.hasChildNodes() &&
              !Le(e.firstElementChild) &&
              (!Le(e.content) || !Le(e.content.firstElementChild)) &&
              tv(/<[/\w]/g, e.innerHTML) &&
              tv(/<[/\w]/g, e.textContent))
          )
            return Oe(e), !0;
          if ("select" === o && tv(/<template/i, e.innerHTML)) return Oe(e), !0;
          if (!z[o] || q[o]) {
            if (!q[o] && Ue(o)) {
              if (V.tagNameCheck instanceof RegExp && tv(V.tagNameCheck, o))
                return !1;
              if (V.tagNameCheck instanceof Function && V.tagNameCheck(o))
                return !1;
            }
            if (re && !ie[o]) {
              var r = y(e) || e.parentNode,
                s = v(e) || e.childNodes;
              if (s && r)
                for (var a = s.length - 1; a >= 0; --a)
                  r.insertBefore(h(s[a], !0), b(e));
            }
            return Oe(e), !0;
          }
          return e instanceof l && !Ae(e)
            ? (Oe(e), !0)
            : ("noscript" !== o && "noembed" !== o) ||
              !tv(/<\/no(script|embed)/i, e.innerHTML)
            ? (X &&
                3 === e.nodeType &&
                ((t = e.textContent),
                (t = Jb(t, D, " ")),
                (t = Jb(t, P, " ")),
                e.textContent !== t &&
                  (Yb(n.removed, { element: e.cloneNode() }),
                  (e.textContent = t))),
              Me("afterSanitizeElements", e, null),
              !1)
            : (Oe(e), !0);
        },
        Fe = function (e, t, n) {
          if (oe && ("id" === t || "name" === t) && (n in r || n in we))
            return !1;
          if (G && !W[t] && tv(L, t));
          else if (K && tv(M, t));
          else if (!H[t] || W[t]) {
            if (
              !(
                (Ue(e) &&
                  ((V.tagNameCheck instanceof RegExp &&
                    tv(V.tagNameCheck, e)) ||
                    (V.tagNameCheck instanceof Function &&
                      V.tagNameCheck(e))) &&
                  ((V.attributeNameCheck instanceof RegExp &&
                    tv(V.attributeNameCheck, t)) ||
                    (V.attributeNameCheck instanceof Function &&
                      V.attributeNameCheck(t)))) ||
                ("is" === t &&
                  V.allowCustomizedBuiltInElements &&
                  ((V.tagNameCheck instanceof RegExp &&
                    tv(V.tagNameCheck, n)) ||
                    (V.tagNameCheck instanceof Function && V.tagNameCheck(n))))
              )
            )
              return !1;
          } else if (ue[t]);
          else if (tv(U, Jb(n, F, "")));
          else if (
            ("src" !== t && "xlink:href" !== t && "href" !== t) ||
            "script" === e ||
            0 !== Zb(n, "data:") ||
            !de[e]
          )
            if (Y && !tv(I, Jb(n, F, "")));
            else if (n) return !1;
          return !0;
        },
        Ue = function (e) {
          return e.indexOf("-") > 0;
        },
        ze = function (e) {
          var t, n, o, r;
          Me("beforeSanitizeAttributes", e, null);
          var s = e.attributes;
          if (s) {
            var a = {
              attrName: "",
              attrValue: "",
              keepAttr: !0,
              allowedAttributes: H,
            };
            for (r = s.length; r--; ) {
              var i = (t = s[r]),
                l = i.name,
                d = i.namespaceURI;
              (n = "value" === l ? t.value : ev(t.value)), (o = B(l));
              var c = n;
              if (
                ((a.attrName = o),
                (a.attrValue = n),
                (a.keepAttr = !0),
                (a.forceKeepAttr = void 0),
                Me("uponSanitizeAttribute", e, a),
                (n = a.attrValue),
                !a.forceKeepAttr)
              )
                if (a.keepAttr)
                  if (tv(/\/>/i, n)) Te(l, e);
                  else {
                    X && ((n = Jb(n, D, " ")), (n = Jb(n, P, " ")));
                    var u = B(e.nodeName);
                    if (Fe(u, o, n)) {
                      if (n !== c)
                        try {
                          d ? e.setAttributeNS(d, l, n) : e.setAttribute(l, n);
                        } catch (t) {
                          Te(l, e);
                        }
                    } else Te(l, e);
                  }
                else Te(l, e);
            }
            Me("afterSanitizeAttributes", e, null);
          }
        },
        je = function e(t) {
          var n,
            o = De(t);
          for (Me("beforeSanitizeShadowDOM", t, null); (n = o.nextNode()); )
            Me("uponSanitizeShadowNode", n, null),
              Ie(n) || (n.content instanceof s && e(n.content), ze(n));
          Me("afterSanitizeShadowDOM", t, null);
        };
      return (
        (n.sanitize = function (e, r) {
          var a, l, d, c, u;
          if (
            ((be = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Le(e))
          ) {
            if ("function" != typeof e.toString)
              throw nv("toString is not a function");
            if ("string" != typeof (e = e.toString()))
              throw nv("dirty is not a string, aborting");
          }
          if (!n.isSupported) {
            if (
              "object" === Ab(t.toStaticHTML) ||
              "function" == typeof t.toStaticHTML
            ) {
              if ("string" == typeof e) return t.toStaticHTML(e);
              if (Le(e)) return t.toStaticHTML(e.outerHTML);
            }
            return e;
          }
          if (
            (J || ke(r),
            (n.removed = []),
            "string" == typeof e && (se = !1),
            se)
          ) {
            if (e.nodeName) {
              var m = B(e.nodeName);
              if (!z[m] || q[m])
                throw nv(
                  "root node is forbidden and cannot be sanitized in-place"
                );
            }
          } else if (e instanceof i)
            (1 ===
              (l = (a = Be("\x3c!----\x3e")).ownerDocument.importNode(e, !0))
                .nodeType &&
              "BODY" === l.nodeName) ||
            "HTML" === l.nodeName
              ? (a = l)
              : a.appendChild(l);
          else {
            if (!ee && !X && !Q && -1 === e.indexOf("<"))
              return w && ne ? w.createHTML(e) : e;
            if (!(a = Be(e))) return ee ? null : ne ? x : "";
          }
          a && Z && Oe(a.firstChild);
          for (var f = De(se ? e : a); (d = f.nextNode()); )
            (3 === d.nodeType && d === c) ||
              Ie(d) ||
              (d.content instanceof s && je(d.content), ze(d), (c = d));
          if (((c = null), se)) return e;
          if (ee) {
            if (te)
              for (u = E.call(a.ownerDocument); a.firstChild; )
                u.appendChild(a.firstChild);
            else u = a;
            return H.shadowroot && (u = R.call(o, u, !0)), u;
          }
          var g = Q ? a.outerHTML : a.innerHTML;
          return (
            Q &&
              z["!doctype"] &&
              a.ownerDocument &&
              a.ownerDocument.doctype &&
              a.ownerDocument.doctype.name &&
              tv(_v, a.ownerDocument.doctype.name) &&
              (g = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + g),
            X && ((g = Jb(g, D, " ")), (g = Jb(g, P, " "))),
            w && ne ? w.createHTML(g) : g
          );
        }),
        (n.setConfig = function (e) {
          ke(e), (J = !0);
        }),
        (n.clearConfig = function () {
          (Ce = null), (J = !1);
        }),
        (n.isValidAttribute = function (e, t, n) {
          Ce || ke({});
          var o = B(e),
            r = B(t);
          return Fe(o, r, n);
        }),
        (n.addHook = function (e, t) {
          "function" == typeof t && ((O[e] = O[e] || []), Yb(O[e], t));
        }),
        (n.removeHook = function (e) {
          if (O[e]) return Gb(O[e]);
        }),
        (n.removeHooks = function (e) {
          O[e] && (O[e] = []);
        }),
        (n.removeAllHooks = function () {
          O = {};
        }),
        n
      );
    })();
  const Av = Tt.explode,
    Ov = () => {
      const e = {};
      return {
        addFilter: (t, n) => {
          V(Av(t), (t) => {
            xe(e, t) || (e[t] = { name: t, callbacks: [] }),
              e[t].callbacks.push(n);
          });
        },
        getFilters: () => Ce(e),
        removeFilter: (t, n) => {
          V(Av(t), (t) => {
            if (xe(e, t))
              if (C(n)) {
                const o = e[t],
                  r = K(o.callbacks, (e) => e !== n);
                r.length > 0 ? (o.callbacks = r) : delete e[t];
              } else delete e[t];
          });
        },
      };
    },
    Tv = (e, t, n) => {
      var o;
      const r = Ms();
      t.convert_fonts_to_spans &&
        ((e, t, n) => {
          e.addNodeFilter("font", (e) => {
            V(e, (e) => {
              const o = t.parse(e.attr("style")),
                r = e.attr("color"),
                s = e.attr("face"),
                a = e.attr("size");
              r && (o.color = r),
                s && (o["font-family"] = s),
                a &&
                  Ge(a).each((e) => {
                    o["font-size"] = n[e - 1];
                  }),
                (e.name = "span"),
                e.attr("style", t.serialize(o)),
                ((e, t) => {
                  V(["color", "face", "size"], (t) => {
                    e.attr(t, null);
                  });
                })(e);
            });
          });
        })(
          e,
          r,
          Tt.explode(
            null !== (o = t.font_size_legacy_values) && void 0 !== o ? o : ""
          )
        ),
        ((e, t, n) => {
          e.addNodeFilter("strike", (e) => {
            const o = "html4" !== t.type;
            V(e, (e) => {
              if (o) e.name = "s";
              else {
                const t = n.parse(e.attr("style"));
                (t["text-decoration"] = "line-through"),
                  (e.name = "span"),
                  e.attr("style", n.serialize(t));
              }
            });
          });
        })(e, n, r);
    },
    Bv = (e) => {
      const [t, ...n] = e.split(","),
        o = n.join(","),
        r = /data:([^/]+\/[^;]+)(;.+)?/.exec(t);
      if (r) {
        const e = ";base64" === r[2],
          t = e
            ? ((e) => {
                const t = /([a-z0-9+\/=\s]+)/i.exec(e);
                return t ? t[1] : "";
              })(o)
            : decodeURIComponent(o);
        return M.some({ type: r[1], data: t, base64Encoded: e });
      }
      return M.none();
    },
    Dv = (e, t, n = !0) => {
      let o = t;
      if (n)
        try {
          o = atob(t);
        } catch (e) {
          return M.none();
        }
      const r = new Uint8Array(o.length);
      for (let e = 0; e < r.length; e++) r[e] = o.charCodeAt(e);
      return M.some(new Blob([r], { type: e }));
    },
    Pv = (e) =>
      new Promise((t, n) => {
        const o = new FileReader();
        (o.onloadend = () => {
          t(o.result);
        }),
          (o.onerror = () => {
            var e;
            n(null === (e = o.error) || void 0 === e ? void 0 : e.message);
          }),
          o.readAsDataURL(e);
      });
  let Lv = 0;
  const Mv = (e, t, n) =>
      Bv(e).bind(({ data: e, type: o, base64Encoded: r }) => {
        if (t && !r) return M.none();
        {
          const t = r ? e : btoa(e);
          return n(t, o);
        }
      }),
    Iv = (e, t, n) => {
      const o = e.create("blobid" + Lv++, t, n);
      return e.add(o), o;
    },
    Fv = (e, t, n = !1) =>
      Mv(t, n, (t, n) =>
        M.from(e.getByData(t, n)).orThunk(() =>
          Dv(n, t).map((n) => Iv(e, n, t))
        )
      ),
    Uv = Tt.each,
    zv = Tt.trim,
    jv = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor",
    ],
    Hv = { ftp: 21, http: 80, https: 443, mailto: 25 },
    $v = ["img", "video"],
    Vv = (e, t, n) => {
      const o = ((e) => {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return unescape(e);
        }
      })(t);
      return (
        !e.allow_script_urls &&
        (!!/((java|vb)script|mhtml):/i.test(o) ||
          (!e.allow_html_data_urls &&
            (/^data:image\//i.test(o)
              ? ((e, t) => (C(e) ? !e : !C(t) || !j($v, t)))(
                  e.allow_svg_data_urls,
                  n
                ) && /^data:image\/svg\+xml/i.test(o)
              : /^data:/i.test(o))))
      );
    };
  class qv {
    constructor(e, t = {}) {
      (this.path = ""), (this.directory = ""), (e = zv(e)), (this.settings = t);
      const n = t.base_uri,
        o = this;
      if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e))
        return void (o.source = e);
      const r = 0 === e.indexOf("//");
      if (
        (0 !== e.indexOf("/") ||
          r ||
          (e = ((n && n.protocol) || "http") + "://mce_host" + e),
        !/^[\w\-]*:?\/\//.test(e))
      ) {
        const t = n ? n.path : new qv(document.location.href).directory;
        if ("" === (null == n ? void 0 : n.protocol))
          e = "//mce_host" + o.toAbsPath(t, e);
        else {
          const r = /([^#?]*)([#?]?.*)/.exec(e);
          r &&
            (e =
              ((n && n.protocol) || "http") +
              "://mce_host" +
              o.toAbsPath(t, r[1]) +
              r[2]);
        }
      }
      e = e.replace(/@@/g, "(mce_at)");
      const s =
        /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
          e
        );
      s &&
        Uv(jv, (e, t) => {
          let n = s[t];
          n && (n = n.replace(/\(mce_at\)/g, "@@")), (o[e] = n);
        }),
        n &&
          (o.protocol || (o.protocol = n.protocol),
          o.userInfo || (o.userInfo = n.userInfo),
          o.port || "mce_host" !== o.host || (o.port = n.port),
          (o.host && "mce_host" !== o.host) || (o.host = n.host),
          (o.source = "")),
        r && (o.protocol = "");
    }
    static parseDataUri(e) {
      let t;
      const n = decodeURIComponent(e).split(","),
        o = /data:([^;]+)/.exec(n[0]);
      return o && (t = o[1]), { type: t, data: n[1] };
    }
    static isDomSafe(e, t, n = {}) {
      if (n.allow_script_urls) return !0;
      {
        const o = xs.decode(e).replace(/[\s\u0000-\u001F]+/g, "");
        return !Vv(n, o, t);
      }
    }
    static getDocumentBaseUrl(e) {
      var t;
      let n;
      return (
        (n =
          0 !== e.protocol.indexOf("http") && "file:" !== e.protocol
            ? null !== (t = e.href) && void 0 !== t
              ? t
              : ""
            : e.protocol + "//" + e.host + e.pathname),
        /^[^:]+:\/\/\/?[^\/]+\//.test(n) &&
          ((n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
          /[\/\\]$/.test(n) || (n += "/")),
        n
      );
    }
    setPath(e) {
      const t = /^(.*?)\/?(\w+)?$/.exec(e);
      t && ((this.path = t[0]), (this.directory = t[1]), (this.file = t[2])),
        (this.source = ""),
        this.getURI();
    }
    toRelative(e) {
      if ("./" === e) return e;
      const t = new qv(e, { base_uri: this });
      if (
        ("mce_host" !== t.host && this.host !== t.host && t.host) ||
        this.port !== t.port ||
        (this.protocol !== t.protocol && "" !== t.protocol)
      )
        return t.getURI();
      const n = this.getURI(),
        o = t.getURI();
      if (
        n === o ||
        ("/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === o)
      )
        return n;
      let r = this.toRelPath(this.path, t.path);
      return (
        t.query && (r += "?" + t.query), t.anchor && (r += "#" + t.anchor), r
      );
    }
    toAbsolute(e, t) {
      const n = new qv(e, { base_uri: this });
      return n.getURI(t && this.isSameOrigin(n));
    }
    isSameOrigin(e) {
      if (this.host == e.host && this.protocol == e.protocol) {
        if (this.port == e.port) return !0;
        const t = this.protocol ? Hv[this.protocol] : null;
        if (t && (this.port || t) == (e.port || t)) return !0;
      }
      return !1;
    }
    toRelPath(e, t) {
      let n,
        o,
        r = 0,
        s = "";
      const a = e.substring(0, e.lastIndexOf("/")).split("/"),
        i = t.split("/");
      if (a.length >= i.length)
        for (n = 0, o = a.length; n < o; n++)
          if (n >= i.length || a[n] !== i[n]) {
            r = n + 1;
            break;
          }
      if (a.length < i.length)
        for (n = 0, o = i.length; n < o; n++)
          if (n >= a.length || a[n] !== i[n]) {
            r = n + 1;
            break;
          }
      if (1 === r) return t;
      for (n = 0, o = a.length - (r - 1); n < o; n++) s += "../";
      for (n = r - 1, o = i.length; n < o; n++)
        s += n !== r - 1 ? "/" + i[n] : i[n];
      return s;
    }
    toAbsPath(e, t) {
      let n = 0;
      const o = /\/$/.test(t) ? "/" : "",
        r = e.split("/"),
        s = t.split("/"),
        a = [];
      Uv(r, (e) => {
        e && a.push(e);
      });
      const i = [];
      for (let e = s.length - 1; e >= 0; e--)
        0 !== s[e].length &&
          "." !== s[e] &&
          (".." !== s[e] ? (n > 0 ? n-- : i.push(s[e])) : n++);
      const l = a.length - n;
      let d;
      return (
        (d =
          l <= 0
            ? ne(i).join("/")
            : a.slice(0, l).join("/") + "/" + ne(i).join("/")),
        0 !== d.indexOf("/") && (d = "/" + d),
        o && d.lastIndexOf("/") !== d.length - 1 && (d += o),
        d
      );
    }
    getURI(e = !1) {
      let t;
      return (
        (this.source && !e) ||
          ((t = ""),
          e ||
            (this.protocol ? (t += this.protocol + "://") : (t += "//"),
            this.userInfo && (t += this.userInfo + "@"),
            this.host && (t += this.host),
            this.port && (t += ":" + this.port)),
          this.path && (t += this.path),
          this.query && (t += "?" + this.query),
          this.anchor && (t += "#" + this.anchor),
          (this.source = t)),
        this.source
      );
    }
  }
  const Wv = Tt.makeMap,
    Kv = Tt.extend,
    Gv = {
      IN_PLACE: !0,
      ALLOW_UNKNOWN_PROTOCOLS: !0,
      ALLOWED_TAGS: ["#comment", "#cdata-section", "body"],
      ALLOWED_ATTR: [],
    },
    Yv = Tt.makeMap(
      "src,href,data,background,action,formaction,poster,xlink:href"
    ),
    Xv = "data-mce-type",
    Qv = (e, t) => {
      const n = Rv(),
        o = t.getSpecialElements(),
        r = e.validate;
      let s = 0;
      return (
        n.addHook("uponSanitizeElement", (n, a) => {
          var i, l, d;
          8 === n.nodeType &&
            !e.allow_conditional_comments &&
            /^\[if/i.test(
              null !== (i = n.nodeValue) && void 0 !== i ? i : ""
            ) &&
            (n.nodeValue = " " + n.nodeValue);
          const c = a.tagName;
          if (1 !== n.nodeType || "body" === c) return;
          const u = mn(n),
            f = c.toLowerCase(),
            g = Gt(u, Xv),
            p = Wt(u, "data-mce-bogus");
          if (!g && m(p)) return void ("all" === p ? to(u) : no(u));
          const h = t.getElementRule(f);
          if (!r || h) {
            if (((a.allowedTags[c] = !0), r && h && !g)) {
              if (
                (V(
                  null !== (l = h.attributesForced) && void 0 !== l ? l : [],
                  (e) => {
                    Vt(
                      u,
                      e.name,
                      "{$uid}" === e.value ? "mce_" + s++ : e.value
                    );
                  }
                ),
                V(
                  null !== (d = h.attributesDefault) && void 0 !== d ? d : [],
                  (e) => {
                    Gt(u, e.name) ||
                      Vt(
                        u,
                        e.name,
                        "{$uid}" === e.value ? "mce_" + s++ : e.value
                      );
                  }
                ),
                h.attributesRequired &&
                  !H(h.attributesRequired, (e) => Gt(u, e)))
              )
                return void no(u);
              if (
                h.removeEmptyAttrs &&
                ((e) => {
                  const t = e.dom.attributes;
                  return null == t || 0 === t.length;
                })(u)
              )
                return void no(u);
              h.outputName &&
                h.outputName !== f &&
                ((e, t) => {
                  const n = ((e, t) => {
                    const n = cn(t),
                      o = Xt(e);
                    return qt(n, o), n;
                  })(e, t);
                  Xn(e, n);
                  const o = Nn(e);
                  Zn(n, o), to(e);
                })(u, h.outputName);
            }
          } else xe(o, f) ? to(u) : no(u);
        }),
        n.addHook("uponSanitizeAttribute", (n, o) => {
          const s = n.tagName.toLowerCase(),
            { attrName: a, attrValue: i } = o;
          (o.keepAttr =
            !r || t.isValid(s, a) || ze(a, "data-") || ze(a, "aria-")),
            a in Yv && Vv(e, i, s) && (o.keepAttr = !1),
            o.keepAttr
              ? ((o.allowedAttributes[a] = !0),
                a in t.getBoolAttrs() && (o.attrValue = a),
                e.allow_svg_data_urls &&
                  ze(i, "data:image/svg+xml") &&
                  (o.forceKeepAttr = !0))
              : !n.hasAttribute(Xv) ||
                ("id" !== a && "class" !== a && "style" !== a) ||
                (o.forceKeepAttr = !0);
        }),
        n
      );
    },
    Jv = (e, t, n) => {
      const o = e.name,
        r = o in n && "title" !== o && "textarea" !== o,
        s = t.childNodes;
      for (let t = 0, o = s.length; t < o; t++) {
        const o = s[t],
          a = new Zf(o.nodeName.toLowerCase(), o.nodeType);
        if (yo(o)) {
          const e = o.attributes;
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            a.attr(n.name, n.value);
          }
        } else
          Ro(o)
            ? ((a.value = o.data), r && (a.raw = !0))
            : (To(o) || Ao(o) || Oo(o)) && (a.value = o.data);
        Jv(a, o, n), e.append(a);
      }
    },
    Zv = (e = {}, t = Ls()) => {
      const n = Ov(),
        o = Ov(),
        r = { validate: !0, root_name: "body", ...e },
        s = new DOMParser(),
        a = Qv(r, t),
        i = n.addFilter,
        l = n.getFilters,
        d = n.removeFilter,
        c = o.addFilter,
        u = o.getFilters,
        m = o.removeFilter,
        f = {
          schema: t,
          addAttributeFilter: c,
          getAttributeFilters: u,
          removeAttributeFilter: m,
          addNodeFilter: i,
          getNodeFilters: l,
          removeNodeFilter: d,
          parse: (e, n = {}) => {
            var o;
            const i = r.validate,
              d = null !== (o = n.context) && void 0 !== o ? o : r.root_name,
              c = ((e, n, o = "html") => {
                const i = "xhtml" === o ? "application/xhtml+xml" : "text/html",
                  l = xe(t.getSpecialElements(), n.toLowerCase()),
                  d = l ? `<${n}>${e}</${n}>` : e,
                  c =
                    "xhtml" === o
                      ? `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${d}</body></html>`
                      : `<body>${d}</body>`,
                  u = s.parseFromString(c, i).body;
                return (
                  a.sanitize(
                    u,
                    ((e, t) => {
                      const n = { ...Gv };
                      return (
                        (n.PARSER_MEDIA_TYPE = t),
                        e.allow_script_urls
                          ? (n.ALLOWED_URI_REGEXP = /.*/)
                          : e.allow_html_data_urls &&
                            (n.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i),
                        n
                      );
                    })(r, i)
                  ),
                  (a.removed = []),
                  l ? u.firstChild : u
                );
              })(e, d, n.format),
              m = new Zf(d, 11);
            Jv(m, c, t.getSpecialElements());
            const [f, g] = ((e, t, n, o) => {
                const r = n.validate,
                  s = t.getNonEmptyElements(),
                  a = t.getWhitespaceElements(),
                  i = Kv(
                    Wv("script,style,head,html,body,title,meta,param"),
                    t.getBlockElements()
                  ),
                  l = Ds(t),
                  d = /[ \t\r\n]+/g,
                  c = /^[ \t\r\n]+/,
                  u = /[ \t\r\n]+$/,
                  m = (e) => {
                    let t = e.parent;
                    for (; C(t); ) {
                      if (t.name in a) return !0;
                      t = t.parent;
                    }
                    return !1;
                  },
                  f = (t, n) => {
                    const r = n ? t.prev : t.next;
                    return (
                      !C(r) &&
                      !y(t.parent) &&
                      t.parent.name in i &&
                      (t.parent !== e || !0 === o.isRootContent)
                    );
                  };
                return [
                  (e) => {
                    var t;
                    if (3 === e.type && !m(e)) {
                      let n = null !== (t = e.value) && void 0 !== t ? t : "";
                      (n = n.replace(d, " ")),
                        (((e, t) => C(e) && (e.name in t || "br" === e.name))(
                          e.prev,
                          i
                        ) ||
                          f(e, !0)) &&
                          (n = n.replace(c, "")),
                        0 === n.length ? e.remove() : (e.value = n);
                    }
                  },
                  (e) => {
                    var n;
                    if (1 === e.type) {
                      const n = t.getElementRule(e.name);
                      if (r && n) {
                        const r = lh(t, s, a, e);
                        n.paddInEmptyBlock &&
                        r &&
                        ((e) => {
                          let n = e;
                          for (; C(n); ) {
                            if (n.name in l) return lh(t, s, a, n);
                            n = n.parent;
                          }
                          return !1;
                        })(e)
                          ? ah(0, o, i, e)
                          : n.removeEmpty && r
                          ? i[e.name]
                            ? e.remove()
                            : e.unwrap()
                          : n.paddEmpty &&
                            (r ||
                              ((e) => {
                                var t;
                                return (
                                  ih(e, "#text") &&
                                  (null ===
                                    (t = null == e ? void 0 : e.firstChild) ||
                                  void 0 === t
                                    ? void 0
                                    : t.value) === pr
                                );
                              })(e)) &&
                            ah(0, o, i, e);
                      }
                    } else if (3 === e.type && !m(e)) {
                      let t = null !== (n = e.value) && void 0 !== n ? n : "";
                      ((e.next && i[e.next.name]) || f(e, !1)) &&
                        (t = t.replace(u, "")),
                        0 === t.length ? e.remove() : (e.value = t);
                    }
                  },
                ];
              })(m, t, r, n),
              p = [],
              h = i
                ? (e) =>
                    ((e, n) => {
                      const o = e.parent;
                      o &&
                        t.children[e.name] &&
                        !t.isValidChild(o.name, e.name) &&
                        n.push(e);
                    })(e, p)
                : S,
              b = { nodes: {}, attributes: {} },
              v = (e) => oh(l(), u(), e, b);
            if (
              (((e, t, n) => {
                const o = [];
                for (let n = e, r = n; n; r = n, n = n.walk()) {
                  const s = n;
                  V(t, (e) => e(s)),
                    y(s.parent) && s !== e ? (n = r) : o.push(s);
                }
                for (let e = o.length - 1; e >= 0; e--) {
                  const t = o[e];
                  V(n, (e) => e(t));
                }
              })(m, [f, v], [g, h]),
              p.reverse(),
              i && p.length > 0)
            )
              if (n.context) {
                const { pass: e, fail: o } = W(p, (e) => e.parent === m);
                ch(o, t, v), (n.invalid = e.length > 0);
              } else ch(p, t, v);
            const w = ((e, t) => {
              var n;
              const o =
                null !== (n = t.forced_root_block) && void 0 !== n
                  ? n
                  : e.forced_root_block;
              return !1 === o ? "" : !0 === o ? "p" : o;
            })(r, n);
            return (
              w &&
                ("body" === m.name || n.isRootContent) &&
                ((e, n) => {
                  const o = Kv(
                      Wv("script,style,head,html,body,title,meta,param"),
                      t.getBlockElements()
                    ),
                    s = /^[ \t\r\n]+/,
                    a = /[ \t\r\n]+$/;
                  let i = e.firstChild,
                    l = null;
                  const d = (e) => {
                    var t, n;
                    e &&
                      ((i = e.firstChild),
                      i &&
                        3 === i.type &&
                        (i.value =
                          null === (t = i.value) || void 0 === t
                            ? void 0
                            : t.replace(s, "")),
                      (i = e.lastChild),
                      i &&
                        3 === i.type &&
                        (i.value =
                          null === (n = i.value) || void 0 === n
                            ? void 0
                            : n.replace(a, "")));
                  };
                  if (t.isValidChild(e.name, n.toLowerCase())) {
                    for (; i; ) {
                      const t = i.next;
                      3 === i.type ||
                      (1 === i.type &&
                        "p" !== i.name &&
                        !o[i.name] &&
                        !i.attr(Xv))
                        ? (l ||
                            ((l = new Zf(n, 1)),
                            l.attr(r.forced_root_block_attrs),
                            e.insert(l, i)),
                          l.append(i))
                        : (d(l), (l = null)),
                        (i = t);
                    }
                    d(l);
                  }
                })(m, w),
              n.invalid || rh(b, n),
              m
            );
          },
        };
      return (
        ((e, t) => {
          const n = e.schema;
          t.remove_trailing_brs &&
            e.addNodeFilter("br", (e, t, o) => {
              const r = Tt.extend({}, n.getBlockElements()),
                s = n.getNonEmptyElements(),
                a = n.getWhitespaceElements();
              r.body = 1;
              for (let t = 0, i = e.length; t < i; t++) {
                let i = e[t],
                  l = i.parent;
                if (l && r[l.name] && i === l.lastChild) {
                  let e = i.prev;
                  for (; e; ) {
                    const t = e.name;
                    if (
                      "span" !== t ||
                      "bookmark" !== e.attr("data-mce-type")
                    ) {
                      "br" === t && (i = null);
                      break;
                    }
                    e = e.prev;
                  }
                  if (i && (i.remove(), lh(n, s, a, l))) {
                    const e = n.getElementRule(l.name);
                    e &&
                      (e.removeEmpty
                        ? l.remove()
                        : e.paddEmpty && ah(0, o, r, l));
                  }
                } else {
                  let e = i;
                  for (
                    ;
                    l &&
                    l.firstChild === e &&
                    l.lastChild === e &&
                    ((e = l), !r[l.name]);

                  )
                    l = l.parent;
                  if (e === l) {
                    const e = new Zf("#text", 3);
                    (e.value = pr), i.replace(e);
                  }
                }
              }
            }),
            e.addAttributeFilter("href", (e) => {
              let n = e.length;
              const o = (e) => {
                const t = e ? Tt.trim(e) : "";
                return /\b(noopener)\b/g.test(t)
                  ? t
                  : ((e) =>
                      e
                        .split(" ")
                        .filter((e) => e.length > 0)
                        .concat(["noopener"])
                        .sort()
                        .join(" "))(t);
              };
              if (!t.allow_unsafe_link_target)
                for (; n--; ) {
                  const t = e[n];
                  "a" === t.name &&
                    "_blank" === t.attr("target") &&
                    t.attr("rel", o(t.attr("rel")));
                }
            }),
            t.allow_html_in_named_anchor ||
              e.addAttributeFilter("id,name", (e) => {
                let t,
                  n,
                  o,
                  r,
                  s = e.length;
                for (; s--; )
                  if (
                    ((r = e[s]),
                    "a" === r.name && r.firstChild && !r.attr("href"))
                  )
                    for (o = r.parent, t = r.lastChild; t && o; )
                      (n = t.prev), o.insert(t, r), (t = n);
              }),
            t.fix_list_elements &&
              e.addNodeFilter("ul,ol", (e) => {
                let t,
                  n,
                  o = e.length;
                for (; o--; )
                  if (
                    ((t = e[o]),
                    (n = t.parent),
                    n && ("ul" === n.name || "ol" === n.name))
                  )
                    if (t.prev && "li" === t.prev.name) t.prev.append(t);
                    else {
                      const e = new Zf("li", 1);
                      e.attr("style", "list-style-type: none"), t.wrap(e);
                    }
              });
          const o = n.getValidClasses();
          t.validate &&
            o &&
            e.addAttributeFilter("class", (e) => {
              var t;
              let n = e.length;
              for (; n--; ) {
                const r = e[n],
                  s = null !== (t = r.attr("class")) && void 0 !== t ? t : "",
                  a = Tt.explode(s, " ");
                let i = "";
                for (let e = 0; e < a.length; e++) {
                  const t = a[e];
                  let n = !1,
                    s = o["*"];
                  s && s[t] && (n = !0),
                    (s = o[r.name]),
                    !n && s && s[t] && (n = !0),
                    n && (i && (i += " "), (i += t));
                }
                i.length || (i = null), r.attr("class", i);
              }
            }),
            ((e, t) => {
              const { blob_cache: n } = t;
              if (n) {
                const t = (e) => {
                  const t = e.attr("src");
                  ((e) =>
                    e.attr("src") === Nt.transparentSrc ||
                    C(e.attr("data-mce-placeholder")))(e) ||
                    ((e) => C(e.attr("data-mce-bogus")))(e) ||
                    y(t) ||
                    Fv(n, t, !0).each((t) => {
                      e.attr("src", t.blobUri());
                    });
                };
                e.addAttributeFilter("src", (e) => V(e, t));
              }
            })(e, t);
        })(f, r),
        ((e, t, n) => {
          t.inline_styles && Tv(e, t, n);
        })(f, r, t),
        f
      );
    },
    ey = (e, t) => {
      const n = ((e) => (Ch(e) ? ig({ validate: !1 }).serialize(e) : e))(e),
        o = t(n);
      if (o.isDefaultPrevented()) return o;
      if (Ch(e)) {
        if (o.content !== n) {
          const t = Zv({ validate: !1, forced_root_block: !1 }).parse(
            o.content,
            { context: e.name }
          );
          return { ...o, content: t };
        }
        return { ...o, content: e };
      }
      return o;
    },
    ty = (e, t) => {
      if (t.no_events) return Oi.value(t);
      {
        const n = ((e, t) => e.dispatch("BeforeGetContent", t))(e, t);
        return n.isDefaultPrevented()
          ? Oi.error(pm(e, { content: "", ...n }).content)
          : Oi.value(n);
      }
    },
    ny = (e, t, n) =>
      n.no_events ? t : ey(t, (t) => pm(e, { ...n, content: t })).content,
    oy = (e, t) => {
      if (t.no_events) return Oi.value(t);
      {
        const n = ey(t.content, (n) =>
          ((e, t) => e.dispatch("BeforeSetContent", t))(e, { ...t, content: n })
        );
        return n.isDefaultPrevented()
          ? (gm(e, n), Oi.error(void 0))
          : Oi.value(n);
      }
    },
    ry = (e, t, n) => {
      n.no_events || gm(e, { ...n, content: t });
    },
    sy = (e, t, n) => ({ element: e, width: t, rows: n }),
    ay = (e, t) => ({ element: e, cells: t }),
    iy = (e, t) => ({ x: e, y: t }),
    ly = (e, t) => Kt(e, t).bind(Ge).getOr(1),
    dy = (e, t, n) => {
      const o = e.rows;
      return !!(o[n] ? o[n].cells : [])[t];
    },
    cy = (e) => Y(e, (e, t) => (t.cells.length > e ? t.cells.length : e), 0),
    uy = (e, t) => {
      const n = e.rows;
      for (let e = 0; e < n.length; e++) {
        const o = n[e].cells;
        for (let n = 0; n < o.length; n++)
          if (bn(o[n], t)) return M.some(iy(n, e));
      }
      return M.none();
    },
    my = (e, t, n, o, r) => {
      const s = [],
        a = e.rows;
      for (let e = n; e <= r; e++) {
        const n = a[e].cells,
          r = t < o ? n.slice(t, o + 1) : n.slice(o, t + 1);
        s.push(ay(a[e].element, r));
      }
      return s;
    },
    fy = (e) =>
      ((e, t) => {
        const n = Ra(e.element),
          o = cn("tbody");
        return Zn(o, t), Jn(n, o), n;
      })(
        e,
        ((e) =>
          $(e.rows, (e) => {
            const t = $(e.cells, (e) => {
                const t = Aa(e);
                return Yt(t, "colspan"), Yt(t, "rowspan"), t;
              }),
              n = Ra(e.element);
            return Zn(n, t), n;
          }))(e)
      ),
    gy = (e, t) => {
      const n = mn(t.commonAncestorContainer),
        o = Rg(n, e),
        r = K(o, mr),
        s = ((e, t) =>
          Q(e, (e) => "li" === Lt(e) && hu(e, t)).fold(N([]), (t) =>
            ((e) => Q(e, (e) => "ul" === Lt(e) || "ol" === Lt(e)))(e)
              .map((e) => {
                const t = cn(Lt(e)),
                  n = ve(Kn(e), (e, t) => ze(t, "list-style"));
                return $n(t, n), [cn("li"), t];
              })
              .getOr([])
          ))(o, t),
        a = r.concat(
          s.length
            ? s
            : ((e) =>
                ir(e)
                  ? xn(e)
                      .filter(ar)
                      .fold(N([]), (t) => [e, t])
                  : ar(e)
                  ? [e]
                  : [])(n)
        );
      return $(a, Ra);
    },
    py = () => Mm([]),
    hy = (e, t) =>
      ((e, t) => Go(t, "table", O(bn, e)))(e, t[0])
        .bind((e) => {
          const n = t[0],
            o = t[t.length - 1],
            r = ((e) => {
              const t = sy(Ra(e), 0, []);
              return (
                V(vr(e, "tr"), (e, n) => {
                  V(vr(e, "td,th"), (o, r) => {
                    ((e, t, n, o, r) => {
                      const s = ly(r, "rowspan"),
                        a = ly(r, "colspan"),
                        i = e.rows;
                      for (let e = n; e < n + s; e++) {
                        i[e] || (i[e] = ay(Aa(o), []));
                        for (let o = t; o < t + a; o++)
                          i[e].cells[o] = e === n && o === t ? r : Ra(r);
                      }
                    })(
                      t,
                      ((e, t, n) => {
                        for (; dy(e, t, n); ) t++;
                        return t;
                      })(t, r, n),
                      n,
                      e,
                      o
                    );
                  });
                }),
                sy(t.element, cy(t.rows), t.rows)
              );
            })(e);
          return ((e, t, n) =>
            uy(e, t).bind((t) =>
              uy(e, n).map((n) =>
                ((e, t, n) => {
                  const o = t.x,
                    r = t.y,
                    s = n.x,
                    a = n.y,
                    i = r < a ? my(e, o, r, s, a) : my(e, o, a, s, r);
                  return sy(e.element, cy(i), i);
                })(e, t, n)
              )
            ))(r, n, o).map((e) => Mm([fy(e)]));
        })
        .getOrThunk(py),
    by = (e, t) => {
      const n = uu(t, e);
      return n.length > 0
        ? hy(e, n)
        : ((e, t) =>
            t.length > 0 && t[0].collapsed
              ? py()
              : ((e, t) =>
                  ((e, t) => {
                    const n = Y(t, (e, t) => (Jn(t, e), t), e);
                    return t.length > 0 ? Mm([n]) : n;
                  })(mn(t.cloneContents()), gy(e, t)))(e, t[0]))(e, t);
    },
    vy = (e, t) => t >= 0 && t < e.length && tu(e.charAt(t)),
    yy = (e) => Nr(e.innerText),
    Cy = (e) =>
      yo(e)
        ? e.outerHTML
        : Ro(e)
        ? xs.encodeRaw(e.data, !1)
        : To(e)
        ? "\x3c!--" + e.data + "--\x3e"
        : "",
    wy = (e, t) => (
      ((e, t) => {
        let n = 0;
        V(e, (e) => {
          0 === e[0]
            ? n++
            : 1 === e[0]
            ? (((e, t, n) => {
                const o = ((e) => {
                  let t;
                  const n = document.createElement("div"),
                    o = document.createDocumentFragment();
                  for (e && (n.innerHTML = e); (t = n.firstChild); )
                    o.appendChild(t);
                  return o;
                })(t);
                if (e.hasChildNodes() && n < e.childNodes.length) {
                  const t = e.childNodes[n];
                  e.insertBefore(o, t);
                } else e.appendChild(o);
              })(t, e[1], n),
              n++)
            : 2 === e[0] &&
              ((e, t) => {
                if (e.hasChildNodes() && t < e.childNodes.length) {
                  const n = e.childNodes[t];
                  e.removeChild(n);
                }
              })(t, n);
        });
      })(
        ((e, t) => {
          const n = e.length + t.length + 2,
            o = new Array(n),
            r = new Array(n),
            s = (n, o, r, a, l) => {
              const d = i(n, o, r, a);
              if (
                null === d ||
                (d.start === o && d.diag === o - a) ||
                (d.end === n && d.diag === n - r)
              ) {
                let s = n,
                  i = r;
                for (; s < o || i < a; )
                  s < o && i < a && e[s] === t[i]
                    ? (l.push([0, e[s]]), ++s, ++i)
                    : o - n > a - r
                    ? (l.push([2, e[s]]), ++s)
                    : (l.push([1, t[i]]), ++i);
              } else {
                s(n, d.start, r, d.start - d.diag, l);
                for (let t = d.start; t < d.end; ++t) l.push([0, e[t]]);
                s(d.end, o, d.end - d.diag, a, l);
              }
            },
            a = (n, o, r, s) => {
              let a = n;
              for (; a - o < s && a < r && e[a] === t[a - o]; ) ++a;
              return ((e, t, n) => ({ start: e, end: t, diag: n }))(n, a, o);
            },
            i = (n, s, i, l) => {
              const d = s - n,
                c = l - i;
              if (0 === d || 0 === c) return null;
              const u = d - c,
                m = c + d,
                f = (m % 2 == 0 ? m : m + 1) / 2;
              let g, p, h, b, v;
              for (o[1 + f] = n, r[1 + f] = s + 1, g = 0; g <= f; ++g) {
                for (p = -g; p <= g; p += 2) {
                  for (
                    h = p + f,
                      p === -g || (p !== g && o[h - 1] < o[h + 1])
                        ? (o[h] = o[h + 1])
                        : (o[h] = o[h - 1] + 1),
                      b = o[h],
                      v = b - n + i - p;
                    b < s && v < l && e[b] === t[v];

                  )
                    (o[h] = ++b), ++v;
                  if (
                    u % 2 != 0 &&
                    u - g <= p &&
                    p <= u + g &&
                    r[h - u] <= o[h]
                  )
                    return a(r[h - u], p + n - i, s, l);
                }
                for (p = u - g; p <= u + g; p += 2) {
                  for (
                    h = p + f - u,
                      p === u - g || (p !== u + g && r[h + 1] <= r[h - 1])
                        ? (r[h] = r[h + 1] - 1)
                        : (r[h] = r[h - 1]),
                      b = r[h] - 1,
                      v = b - n + i - p;
                    b >= n && v >= i && e[b] === t[v];

                  )
                    (r[h] = b--), v--;
                  if (u % 2 == 0 && -g <= p && p <= g && r[h] <= o[h + u])
                    return a(r[h], p + n - i, s, l);
                }
              }
              return null;
            },
            l = [];
          return s(0, e.length, 0, t.length, l), l;
        })($(de(t.childNodes), Cy), e),
        t
      ),
      t
    ),
    xy = De(() => document.implementation.createHTMLDocument("undo")),
    ky = (e) => {
      const t =
        ((n = e.getBody()), K($(de(n.childNodes), Cy), (e) => e.length > 0));
      var n;
      const o = ee(t, (t) => {
          const n = ng(e.serializer, t);
          return n.length > 0 ? [n] : [];
        }),
        r = o.join("");
      return ((e) => -1 !== e.indexOf("</iframe>"))(r)
        ? ((e) => ({
            type: "fragmented",
            fragments: e,
            content: "",
            bookmark: null,
            beforeBookmark: null,
          }))(o)
        : ((e) => ({
            type: "complete",
            fragments: null,
            content: e,
            bookmark: null,
            beforeBookmark: null,
          }))(r);
    },
    Sy = (e, t, n) => {
      const o = n ? t.beforeBookmark : t.bookmark;
      "fragmented" === t.type
        ? wy(t.fragments, e.getBody())
        : e.setContent(t.content, {
            format: "raw",
            no_selection: !C(o) || !$c(o) || !o.isFakeCaret,
          }),
        o && e.selection.moveToBookmark(o);
    },
    _y = (e) => ("fragmented" === e.type ? e.fragments.join("") : e.content),
    Ey = (e) => {
      const t = cn("body", xy());
      return ro(t, _y(e)), V(vr(t, "*[data-mce-bogus]"), no), oo(t);
    },
    Ny = (e, t) =>
      !(!e || !t) &&
      (!!((e, t) => _y(e) === _y(t))(e, t) ||
        ((e, t) => Ey(e) === Ey(t))(e, t)),
    Ry = (e) => 0 === e.get(),
    Ay = (e, t, n) => {
      Ry(n) && (e.typing = t);
    },
    Oy = (e, t) => {
      e.typing && (Ay(e, !1, t), e.add());
    },
    Ty = (e) => ({
      init: { bindEvents: S },
      undoManager: {
        beforeChange: (t, n) =>
          ((e, t, n) => {
            Ry(t) && n.set(Ni(e.selection));
          })(e, t, n),
        add: (t, n, o, r, s, a) =>
          ((e, t, n, o, r, s, a) => {
            const i = ky(e),
              l = Tt.extend(s || {}, i);
            if (!Ry(o) || e.removed) return null;
            const d = t.data[n.get()];
            if (
              e
                .dispatch("BeforeAddUndo", {
                  level: l,
                  lastLevel: d,
                  originalEvent: a,
                })
                .isDefaultPrevented()
            )
              return null;
            if (d && Ny(d, l)) return null;
            t.data[n.get()] &&
              r.get().each((e) => {
                t.data[n.get()].beforeBookmark = e;
              });
            const c = ql(e);
            if (c && t.data.length > c) {
              for (let e = 0; e < t.data.length - 1; e++)
                t.data[e] = t.data[e + 1];
              t.data.length--, n.set(t.data.length);
            }
            (l.bookmark = Ni(e.selection)),
              n.get() < t.data.length - 1 && (t.data.length = n.get() + 1),
              t.data.push(l),
              n.set(t.data.length - 1);
            const u = { level: l, lastLevel: d, originalEvent: a };
            return (
              n.get() > 0
                ? (e.setDirty(!0),
                  e.dispatch("AddUndo", u),
                  e.dispatch("change", u))
                : e.dispatch("AddUndo", u),
              l
            );
          })(e, t, n, o, r, s, a),
        undo: (t, n, o) =>
          ((e, t, n, o) => {
            let r;
            return (
              t.typing && (t.add(), (t.typing = !1), Ay(t, !1, n)),
              o.get() > 0 &&
                (o.set(o.get() - 1),
                (r = t.data[o.get()]),
                Sy(e, r, !0),
                e.setDirty(!0),
                e.dispatch("Undo", { level: r })),
              r
            );
          })(e, t, n, o),
        redo: (t, n) =>
          ((e, t, n) => {
            let o;
            return (
              t.get() < n.length - 1 &&
                (t.set(t.get() + 1),
                (o = n[t.get()]),
                Sy(e, o, !1),
                e.setDirty(!0),
                e.dispatch("Redo", { level: o })),
              o
            );
          })(e, t, n),
        clear: (t, n) =>
          ((e, t, n) => {
            (t.data = []), n.set(0), (t.typing = !1), e.dispatch("ClearUndos");
          })(e, t, n),
        reset: (e) =>
          ((e) => {
            e.clear(), e.add();
          })(e),
        hasUndo: (t, n) =>
          ((e, t, n) =>
            n.get() > 0 || (t.typing && t.data[0] && !Ny(ky(e), t.data[0])))(
            e,
            t,
            n
          ),
        hasRedo: (e, t) =>
          ((e, t) => t.get() < e.data.length - 1 && !e.typing)(e, t),
        transact: (e, t, n) =>
          ((e, t, n) => (Oy(e, t), e.beforeChange(), e.ignore(n), e.add()))(
            e,
            t,
            n
          ),
        ignore: (e, t) =>
          ((e, t) => {
            try {
              e.set(e.get() + 1), t();
            } finally {
              e.set(e.get() - 1);
            }
          })(e, t),
        extra: (t, n, o, r) =>
          ((e, t, n, o, r) => {
            if (t.transact(o)) {
              const o = t.data[n.get()].bookmark,
                s = t.data[n.get() - 1];
              Sy(e, s, !0),
                t.transact(r) && (t.data[n.get() - 1].beforeBookmark = o);
            }
          })(e, t, n, o, r),
      },
      formatter: {
        match: (t, n, o, r) => Th(e, t, n, o, r),
        matchAll: (t, n) =>
          ((e, t, n) => {
            const o = [],
              r = {},
              s = e.selection.getStart();
            return (
              e.dom.getParent(
                s,
                (s) => {
                  for (let a = 0; a < t.length; a++) {
                    const i = t[a];
                    !r[i] && Oh(e, s, i, n) && ((r[i] = !0), o.push(i));
                  }
                },
                e.dom.getRoot()
              ),
              o
            );
          })(e, t, n),
        matchNode: (t, n, o, r) => Oh(e, t, n, o, r),
        canApply: (t) =>
          ((e, t) => {
            const n = e.formatter.get(t),
              o = e.dom;
            if (n) {
              const t = e.selection.getStart(),
                r = Mu(o, t);
              for (let e = n.length - 1; e >= 0; e--) {
                const t = n[e];
                if (!Uu(t)) return !0;
                for (let e = r.length - 1; e >= 0; e--)
                  if (o.is(r[e], t.selector)) return !0;
              }
            }
            return !1;
          })(e, t),
        closest: (t) =>
          ((e, t) => {
            const n = (t) => bn(t, mn(e.getBody()));
            return M.from(e.selection.getStart(!0))
              .bind((o) =>
                Sh(
                  mn(o),
                  (n) =>
                    ce(t, (t) =>
                      ((t, n) => (Oh(e, t.dom, n) ? M.some(n) : M.none()))(n, t)
                    ),
                  n
                )
              )
              .getOrNull();
          })(e, t),
        apply: (t, n, o) => kb(e, t, n, o),
        remove: (t, n, o, r) => yb(e, t, n, o, r),
        toggle: (t, n, o) =>
          ((e, t, n, o) => {
            const r = e.formatter.get(t);
            r &&
              (!Th(e, t, n, o) || ("toggle" in r[0] && !r[0].toggle)
                ? kb(e, t, n, o)
                : yb(e, t, n, o));
          })(e, t, n, o),
        formatChanged: (t, n, o, r, s) =>
          ((e, t, n, o, r, s) => (
            ((e, t, n, o, r, s) => {
              const a = t.get();
              V(n.split(","), (t) => {
                const n = we(a, t).getOrThunk(() => {
                    const e = {
                      withSimilar: {
                        state: ra(!1),
                        similar: !0,
                        callbacks: [],
                      },
                      withoutSimilar: {
                        state: ra(!1),
                        similar: !1,
                        callbacks: [],
                      },
                      withVars: [],
                    };
                    return (a[t] = e), e;
                  }),
                  i = () => {
                    const n = Nb(e);
                    return Eb(e, n, t, r, s).isSome();
                  };
                if (v(s)) {
                  const e = r ? n.withSimilar : n.withoutSimilar;
                  e.callbacks.push(o),
                    1 === e.callbacks.length && e.state.set(i());
                } else
                  n.withVars.push({
                    state: ra(i()),
                    similar: r,
                    vars: s,
                    callback: o,
                  });
              }),
                t.set(a);
            })(e, t, n, o, r, s),
            {
              unbind: () =>
                ((e, t, n) => {
                  const o = e.get();
                  V(t.split(","), (e) =>
                    we(o, e).each((t) => {
                      o[e] = {
                        withSimilar: {
                          ...t.withSimilar,
                          callbacks: K(t.withSimilar.callbacks, (e) => e !== n),
                        },
                        withoutSimilar: {
                          ...t.withoutSimilar,
                          callbacks: K(
                            t.withoutSimilar.callbacks,
                            (e) => e !== n
                          ),
                        },
                        withVars: K(t.withVars, (e) => e.callback !== n),
                      };
                    })
                  ),
                    e.set(o);
                })(t, n, o),
            }
          ))(e, t, n, o, r, s),
      },
      editor: {
        getContent: (t) =>
          ((e, t) =>
            M.from(e.getBody()).fold(
              N("tree" === t.format ? new Zf("body", 11) : ""),
              (n) => rg(e, t, n)
            ))(e, t),
        setContent: (t, n) =>
          ((e, t, n) =>
            M.from(e.getBody())
              .map((o) =>
                Ch(t)
                  ? ((e, t, n, o) => {
                      sh(
                        e.parser.getNodeFilters(),
                        e.parser.getAttributeFilters(),
                        n
                      );
                      const r = ig({ validate: !1 }, e.schema).serialize(n),
                        s = cr(mn(t)) ? r : Tt.trim(r);
                      return wh(e, s, o.no_selection), { content: n, html: s };
                    })(e, o, t, n)
                  : ((e, t, n, o) => {
                      if (0 === n.length || /^\s+$/.test(n)) {
                        const r = '<br data-mce-bogus="1">';
                        "TABLE" === t.nodeName
                          ? (n = "<tr><td>" + r + "</td></tr>")
                          : /^(UL|OL)$/.test(t.nodeName) &&
                            (n = "<li>" + r + "</li>");
                        const s = Ji(e);
                        return (
                          e.schema.isValidChild(
                            t.nodeName.toLowerCase(),
                            s.toLowerCase()
                          )
                            ? ((n = r), (n = e.dom.createHTML(s, Zi(e), n)))
                            : n || (n = r),
                          wh(e, n, o.no_selection),
                          { content: n, html: n }
                        );
                      }
                      {
                        "raw" !== o.format &&
                          (n = ig({ validate: !1 }, e.schema).serialize(
                            e.parser.parse(n, { isRootContent: !0, insert: !0 })
                          ));
                        const r = cr(mn(t)) ? n : Tt.trim(n);
                        return (
                          wh(e, r, o.no_selection), { content: r, html: r }
                        );
                      }
                    })(e, o, t, n)
              )
              .getOr({ content: t, html: Ch(n.content) ? "" : n.content }))(
            e,
            t,
            n
          ),
        insertContent: (t, n) => yh(e, t, n),
        addVisual: (t) =>
          ((e, t) => {
            const n = e.dom,
              o = C(t) ? t : e.getBody();
            V(n.select("table,a", o), (t) => {
              switch (t.nodeName) {
                case "TABLE":
                  const o = Zl(e),
                    r = n.getAttrib(t, "border");
                  (r && "0" !== r) || !e.hasVisual
                    ? n.removeClass(t, o)
                    : n.addClass(t, o);
                  break;
                case "A":
                  if (!n.getAttrib(t, "href")) {
                    const o = n.getAttrib(t, "name") || t.id,
                      r = ed(e);
                    o && e.hasVisual ? n.addClass(t, r) : n.removeClass(t, r);
                  }
              }
            }),
              e.dispatch("VisualAid", { element: t, hasVisual: e.hasVisual });
          })(e, t),
      },
      selection: {
        getContent: (t, n) =>
          ((e, t, n = {}) => {
            const o = ((e, t) => ({
              ...e,
              format: t,
              get: !0,
              selection: !0,
              getInner: !0,
            }))(n, t);
            return ty(e, o).fold(R, (t) => {
              const n = ((e, t) => {
                if ("text" === t.format)
                  return ((e) =>
                    M.from(e.selection.getRng())
                      .map((t) => {
                        var n;
                        const o = M.from(
                            e.dom.getParent(
                              t.commonAncestorContainer,
                              e.dom.isBlock
                            )
                          ),
                          r = e.getBody(),
                          s = ((e) =>
                            e
                              .map((e) => e.nodeName)
                              .getOr("div")
                              .toLowerCase())(o),
                          a = e.dom.add(
                            r,
                            s,
                            {
                              "data-mce-bogus": "all",
                              style: "overflow: hidden; opacity: 0;",
                            },
                            t.cloneContents()
                          ),
                          i = yy(a),
                          l = Nr(
                            null !== (n = a.textContent) && void 0 !== n
                              ? n
                              : ""
                          );
                        if (
                          (e.dom.remove(a), vy(l, 0) || vy(l, l.length - 1))
                        ) {
                          const e = o.getOr(r),
                            t = yy(e),
                            n = t.indexOf(i);
                          return -1 === n
                            ? i
                            : (vy(t, n - 1) ? " " : "") +
                                i +
                                (vy(t, n + i.length) ? " " : "");
                        }
                        return i;
                      })
                      .getOr(""))(e);
                {
                  const n = ((e, t) => {
                    const n = e.selection.getRng(),
                      o = e.dom.create("body"),
                      r = e.selection.getSel(),
                      s = $f(e, cu(r)),
                      a = t.contextual
                        ? by(mn(e.getBody()), s).dom
                        : n.cloneContents();
                    return (
                      a && o.appendChild(a),
                      e.selection.serializer.serialize(o, t)
                    );
                  })(e, t);
                  return "tree" === t.format
                    ? n
                    : e.selection.isCollapsed()
                    ? ""
                    : n;
                }
              })(e, t);
              return ny(e, n, t);
            });
          })(e, t, n),
      },
      autocompleter: {
        addDecoration: (t) => Kf(e, t),
        removeDecoration: () =>
          ((e, t) =>
            Gf(t).each((t) => {
              const n = e.selection.getBookmark();
              no(t), e.selection.moveToBookmark(n);
            }))(e, mn(e.getBody())),
      },
      raw: { getModel: () => M.none() },
    }),
    By = (e) => xe(e.plugins, "rtc"),
    Dy = (e) => (e.rtcInstance ? e.rtcInstance : Ty(e)),
    Py = (e) => {
      const t = e.rtcInstance;
      if (t) return t;
      throw new Error("Failed to get RTC instance not yet initialized.");
    },
    Ly = (e) => Py(e).init.bindEvents(),
    My = (e) => (0 === e.dom.length ? (to(e), M.none()) : M.some(e)),
    Iy = (e, t, n, o) => {
      e.bind(
        (e) => (
          (o ? sp : rp)(e.dom, o ? e.dom.length : 0),
          t.filter(Ut).map((t) =>
            ((e, t, n, o) => {
              const r = e.dom,
                s = t.dom,
                a = o ? r.length : s.length;
              o
                ? (ap(r, s, !1, !o), n.setStart(s, a))
                : (ap(s, r, !1, !o), n.setEnd(s, a));
            })(e, t, n, o)
          )
        )
      ).orThunk(() => {
        const e = ((e, t) =>
          e.filter((e) => dm.isBookmarkNode(e.dom)).bind(t ? Sn : kn))(t, o)
          .or(t)
          .filter(Ut);
        return e.map((e) =>
          ((e, t) => {
            xn(e).each((n) => {
              const o = e.dom;
              t && Yg(n, ai(o, 0))
                ? rp(o, 0)
                : !t && Xg(n, ai(o, o.length)) && sp(o, o.length);
            });
          })(e, o)
        );
      });
    },
    Fy = (e, t, n) => {
      if (xe(e, t)) {
        const o = K(e[t], (e) => e !== n);
        0 === o.length ? delete e[t] : (e[t] = o);
      }
    };
  const Uy = (e) => !(!e || !e.ownerDocument) && vn(mn(e.ownerDocument), mn(e)),
    zy = (e, t, n, o) => {
      let r, s;
      const { selectorChangedWithUnbind: a } = ((e, t) => {
          let n, o;
          const r = (t, n) => Q(n, (n) => e.is(n, t)),
            s = (t) => e.getParents(t, void 0, e.getRoot());
          return {
            selectorChangedWithUnbind: (e, a) => (
              n ||
                ((n = {}),
                (o = {}),
                t.on("NodeChange", (e) => {
                  const t = e.element,
                    a = s(t),
                    i = {};
                  fe(n, (e, t) => {
                    r(t, a).each((n) => {
                      o[t] ||
                        (V(e, (e) => {
                          e(!0, { node: n, selector: t, parents: a });
                        }),
                        (o[t] = e)),
                        (i[t] = e);
                    });
                  }),
                    fe(o, (e, n) => {
                      i[n] ||
                        (delete o[n],
                        V(e, (e) => {
                          e(!1, { node: t, selector: n, parents: a });
                        }));
                    });
                })),
              n[e] || (n[e] = []),
              n[e].push(a),
              r(e, s(t.selection.getStart())).each(() => {
                o[e] = n[e];
              }),
              {
                unbind: () => {
                  Fy(n, e, a), Fy(o, e, a);
                },
              }
            ),
          };
        })(e, o),
        i = (e, t) =>
          ((e, t, n = {}) => {
            const o = ((e, t) => ({
              format: "html",
              ...e,
              set: !0,
              selection: !0,
              content: t,
            }))(n, t);
            oy(e, o).each((t) => {
              const n = ((e, t) => {
                  if ("raw" !== t.format) {
                    const n = e.selection.getRng(),
                      o = e.dom.getParent(
                        n.commonAncestorContainer,
                        e.dom.isBlock
                      ),
                      r = o ? { context: o.nodeName.toLowerCase() } : {},
                      s = e.parser.parse(t.content, {
                        forced_root_block: !1,
                        ...r,
                        ...t,
                      });
                    return ig({ validate: !1 }, e.schema).serialize(s);
                  }
                  return t.content;
                })(e, t),
                o = e.selection.getRng();
              ((e, t) => {
                const n = M.from(t.firstChild).map(mn),
                  o = M.from(t.lastChild).map(mn);
                e.deleteContents(), e.insertNode(t);
                const r = n.bind(kn).filter(Ut).bind(My),
                  s = o.bind(Sn).filter(Ut).bind(My);
                Iy(r, n, e, !0), Iy(s, o, e, !1), e.collapse(!1);
              })(o, o.createContextualFragment(n)),
                e.selection.setRng(o),
                hf(e, o),
                ry(e, n, t);
            });
          })(o, e, t),
        l = (e) => {
          const t = c();
          t.collapse(!!e), u(t);
        },
        d = () => (t.getSelection ? t.getSelection() : t.document.selection),
        c = () => {
          let n;
          const a = (e, t, n) => {
              try {
                return t.compareBoundaryPoints(e, n);
              } catch (e) {
                return -1;
              }
            },
            i = t.document;
          if (C(o.bookmark) && !If(o)) {
            const e = Nf(o);
            if (e.isSome())
              return e.map((e) => $f(o, [e])[0]).getOr(i.createRange());
          }
          try {
            const e = d();
            e &&
              !vo(e.anchorNode) &&
              ((n = e.rangeCount > 0 ? e.getRangeAt(0) : i.createRange()),
              (n = $f(o, [n])[0]));
          } catch (e) {}
          if (
            (n || (n = i.createRange()), Bo(n.startContainer) && n.collapsed)
          ) {
            const t = e.getRoot();
            n.setStart(t, 0), n.setEnd(t, 0);
          }
          return (
            r &&
              s &&
              (0 === a(n.START_TO_START, n, r) && 0 === a(n.END_TO_END, n, r)
                ? (n = s)
                : ((r = null), (s = null))),
            n
          );
        },
        u = (e, t) => {
          if (!((e) => !!e && Uy(e.startContainer) && Uy(e.endContainer))(e))
            return;
          const n = d();
          if (
            ((e = o.dispatch("SetSelectionRange", {
              range: e,
              forward: t,
            }).range),
            n)
          ) {
            s = e;
            try {
              n.removeAllRanges(), n.addRange(e);
            } catch (e) {}
            !1 === t &&
              n.extend &&
              (n.collapse(e.endContainer, e.endOffset),
              n.extend(e.startContainer, e.startOffset)),
              (r = n.rangeCount > 0 ? n.getRangeAt(0) : null);
          }
          if (
            !e.collapsed &&
            e.startContainer === e.endContainer &&
            (null == n ? void 0 : n.setBaseAndExtent) &&
            e.endOffset - e.startOffset < 2 &&
            e.startContainer.hasChildNodes()
          ) {
            const t = e.startContainer.childNodes[e.startOffset];
            t &&
              "IMG" === t.nodeName &&
              (n.setBaseAndExtent(
                e.startContainer,
                e.startOffset,
                e.endContainer,
                e.endOffset
              ),
              (n.anchorNode === e.startContainer &&
                n.focusNode === e.endContainer) ||
                n.setBaseAndExtent(t, 0, t, 1));
          }
          o.dispatch("AfterSetSelectionRange", { range: e, forward: t });
        },
        m = () => {
          const t = d(),
            n = null == t ? void 0 : t.anchorNode,
            o = null == t ? void 0 : t.focusNode;
          if (!t || !n || !o || vo(n) || vo(o)) return !0;
          const r = e.createRng(),
            s = e.createRng();
          try {
            r.setStart(n, t.anchorOffset),
              r.collapse(!0),
              s.setStart(o, t.focusOffset),
              s.collapse(!0);
          } catch (e) {
            return !0;
          }
          return r.compareBoundaryPoints(r.START_TO_START, s) <= 0;
        },
        f = {
          dom: e,
          win: t,
          serializer: n,
          editor: o,
          collapse: l,
          setCursorLocation: (t, n) => {
            const r = e.createRng();
            C(t) && C(n)
              ? (r.setStart(t, n), r.setEnd(t, n), u(r), l(!1))
              : (bu(e, r, o.getBody(), !0), u(r));
          },
          getContent: (e) =>
            ((e, t = {}) =>
              ((e, t, n) => Py(e).selection.getContent(t, n))(
                e,
                t.format ? t.format : "html",
                t
              ))(o, e),
          setContent: i,
          getBookmark: (e, t) => g.getBookmark(e, t),
          moveToBookmark: (e) => g.moveToBookmark(e),
          select: (t, n) => (
            ((e, t, n) =>
              M.from(t).bind((t) =>
                M.from(t.parentNode).map((o) => {
                  const r = e.nodeIndex(t),
                    s = e.createRng();
                  return (
                    s.setStart(o, r),
                    s.setEnd(o, r + 1),
                    n && (bu(e, s, t, !0), bu(e, s, t, !1)),
                    s
                  );
                })
              ))(e, t, n).each(u),
            t
          ),
          isCollapsed: () => {
            const e = c(),
              t = d();
            return (
              !(!e || e.item) &&
              (e.compareEndPoints
                ? 0 === e.compareEndPoints("StartToEnd", e)
                : !t || e.collapsed)
            );
          },
          isForward: m,
          setNode: (t) => (i(e.getOuterHTML(t)), t),
          getNode: () =>
            ((e, t) => {
              if (!t) return e;
              let n = t.startContainer,
                o = t.endContainer;
              const r = t.startOffset,
                s = t.endOffset;
              let a = t.commonAncestorContainer;
              t.collapsed ||
                (n === o &&
                  s - r < 2 &&
                  n.hasChildNodes() &&
                  (a = n.childNodes[r]),
                Ro(n) &&
                  Ro(o) &&
                  ((n = n.length === r ? Hf(n.nextSibling, !0) : n.parentNode),
                  (o = 0 === s ? Hf(o.previousSibling, !1) : o.parentNode),
                  n && n === o && (a = n)));
              const i = Ro(a) ? a.parentNode : a;
              return yo(i) ? i : e;
            })(o.getBody(), c()),
          getSel: d,
          setRng: u,
          getRng: c,
          getStart: (e) => zf(o.getBody(), c(), e),
          getEnd: (e) => jf(o.getBody(), c(), e),
          getSelectedBlocks: (t, n) =>
            ((e, t, n, o) => {
              const r = [],
                s = e.getRoot(),
                a = e.getParent(n || zf(s, t, t.collapsed), e.isBlock),
                i = e.getParent(o || jf(s, t, t.collapsed), e.isBlock);
              if ((a && a !== s && r.push(a), a && i && a !== i)) {
                let t = a;
                const n = new Zo(a, s);
                for (; (t = n.next()) && t !== i; ) e.isBlock(t) && r.push(t);
              }
              return i && a !== i && i !== s && r.push(i), r;
            })(e, c(), t, n),
          normalize: () => {
            const t = c(),
              n = d();
            if (!(cu(n).length > 1) && vu(o)) {
              const n = Wm(e, t);
              return (
                n.each((e) => {
                  u(e, m());
                }),
                n.getOr(t)
              );
            }
            return t;
          },
          selectorChanged: (e, t) => (a(e, t), f),
          selectorChangedWithUnbind: a,
          getScrollContainer: () => {
            let t,
              n = e.getRoot();
            for (; n && "BODY" !== n.nodeName; ) {
              if (n.scrollHeight > n.clientHeight) {
                t = n;
                break;
              }
              n = n.parentNode;
            }
            return t;
          },
          scrollIntoView: (e, t) => {
            C(e)
              ? ((e, t, n) => {
                  (e.inline ? ff : pf)(e, t, n);
                })(o, e, t)
              : hf(o, c(), t);
          },
          placeCaretAt: (e, t) => u(Fm(e, t, o.getDoc())),
          getBoundingClientRect: () => {
            const e = c();
            return e.collapsed
              ? ai.fromRangeStart(e).getClientRects()[0]
              : e.getBoundingClientRect();
          },
          destroy: () => {
            (t = r = s = null), p.destroy();
          },
        },
        g = dm(f),
        p = xm(f, o);
      return (f.bookmarkManager = g), (f.controlSelection = p), f;
    },
    jy = (e, t, n) => {
      -1 === Tt.inArray(t, n) &&
        (e.addAttributeFilter(n, (e, t) => {
          let n = e.length;
          for (; n--; ) e[n].attr(t, null);
        }),
        t.push(n));
    },
    Hy = (e, t) => {
      const n = ["data-mce-selected"],
        o = t && t.dom ? t.dom : ta.DOM,
        r = t && t.schema ? t.schema : Ls(e);
      (e.entity_encoding = e.entity_encoding || "named"),
        (e.remove_trailing_brs =
          !("remove_trailing_brs" in e) || e.remove_trailing_brs);
      const s = Zv(e, r);
      return (
        ((e, t, n) => {
          e.addAttributeFilter("data-mce-tabindex", (e, t) => {
            let n = e.length;
            for (; n--; ) {
              const o = e[n];
              o.attr("tabindex", o.attr("data-mce-tabindex")), o.attr(t, null);
            }
          }),
            e.addAttributeFilter("src,href,style", (e, o) => {
              const r = "data-mce-" + o,
                s = t.url_converter,
                a = t.url_converter_scope;
              let i = e.length;
              for (; i--; ) {
                const t = e[i];
                let l = t.attr(r);
                void 0 !== l
                  ? (t.attr(o, l.length > 0 ? l : null), t.attr(r, null))
                  : ((l = t.attr(o)),
                    "style" === o
                      ? (l = n.serializeStyle(n.parseStyle(l), t.name))
                      : s && (l = s.call(a, l, o, t.name)),
                    t.attr(o, l.length > 0 ? l : null));
              }
            }),
            e.addAttributeFilter("class", (e) => {
              let t = e.length;
              for (; t--; ) {
                const n = e[t];
                let o = n.attr("class");
                o &&
                  ((o = o.replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")),
                  n.attr("class", o.length > 0 ? o : null));
              }
            }),
            e.addAttributeFilter("data-mce-type", (e, t, n) => {
              let o = e.length;
              for (; o--; ) {
                const t = e[o];
                if ("bookmark" === t.attr("data-mce-type") && !n.cleanup) {
                  const e = M.from(t.firstChild).exists((e) => {
                    var t;
                    return !Er(null !== (t = e.value) && void 0 !== t ? t : "");
                  });
                  e ? t.unwrap() : t.remove();
                }
              }
            }),
            e.addNodeFilter("noscript", (e) => {
              var t;
              let n = e.length;
              for (; n--; ) {
                const o = e[n].firstChild;
                o &&
                  (o.value = xs.decode(
                    null !== (t = o.value) && void 0 !== t ? t : ""
                  ));
              }
            }),
            e.addNodeFilter("script,style", (e, n) => {
              var o;
              const r = (e) =>
                e
                  .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                  .replace(/^[\r\n]*|[\r\n]*$/g, "")
                  .replace(
                    /^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,
                    ""
                  )
                  .replace(
                    /\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,
                    ""
                  );
              let s = e.length;
              for (; s--; ) {
                const a = e[s],
                  i = a.firstChild,
                  l =
                    null !== (o = null == i ? void 0 : i.value) && void 0 !== o
                      ? o
                      : "";
                if ("script" === n) {
                  const e = a.attr("type");
                  e &&
                    a.attr(
                      "type",
                      "mce-no/type" === e ? null : e.replace(/^mce\-/, "")
                    ),
                    "xhtml" === t.element_format &&
                      i &&
                      l.length > 0 &&
                      (i.value = "// <![CDATA[\n" + r(l) + "\n// ]]>");
                } else
                  "xhtml" === t.element_format &&
                    i &&
                    l.length > 0 &&
                    (i.value = "\x3c!--\n" + r(l) + "\n--\x3e");
              }
            }),
            e.addNodeFilter("#comment", (e) => {
              let o = e.length;
              for (; o--; ) {
                const r = e[o],
                  s = r.value;
                t.preserve_cdata &&
                0 === (null == s ? void 0 : s.indexOf("[CDATA["))
                  ? ((r.name = "#cdata"),
                    (r.type = 4),
                    (r.value = n.decode(s.replace(/^\[CDATA\[|\]\]$/g, ""))))
                  : 0 === (null == s ? void 0 : s.indexOf("mce:protected ")) &&
                    ((r.name = "#text"),
                    (r.type = 3),
                    (r.raw = !0),
                    (r.value = unescape(s).substr(14)));
              }
            }),
            e.addNodeFilter("xml:namespace,input", (e, t) => {
              let n = e.length;
              for (; n--; ) {
                const o = e[n];
                7 === o.type
                  ? o.remove()
                  : 1 === o.type &&
                    ("input" !== t || o.attr("type") || o.attr("type", "text"));
              }
            }),
            e.addAttributeFilter("data-mce-type", (t) => {
              V(t, (t) => {
                "format-caret" === t.attr("data-mce-type") &&
                  (t.isEmpty(e.schema.getNonEmptyElements())
                    ? t.remove()
                    : t.unwrap());
              });
            }),
            e.addAttributeFilter(
              "data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",
              (e, t) => {
                let n = e.length;
                for (; n--; ) e[n].attr(t, null);
              }
            );
        })(s, e, o),
        {
          schema: r,
          addNodeFilter: s.addNodeFilter,
          addAttributeFilter: s.addAttributeFilter,
          serialize: (n, a = {}) => {
            const i = { format: "html", ...a },
              l = ((e, t, n) =>
                ((e, t) =>
                  C(e) && e.hasEventListeners("PreProcess") && !t.no_events)(
                  e,
                  n
                )
                  ? ((e, t, n) => {
                      let o;
                      const r = e.dom;
                      let s = t.cloneNode(!0);
                      const a = document.implementation;
                      if (a.createHTMLDocument) {
                        const e = a.createHTMLDocument("");
                        Tt.each(
                          "BODY" === s.nodeName ? s.childNodes : [s],
                          (t) => {
                            e.body.appendChild(e.importNode(t, !0));
                          }
                        ),
                          (s =
                            "BODY" !== s.nodeName ? e.body.firstChild : e.body),
                          (o = r.doc),
                          (r.doc = e);
                      }
                      return (
                        ((e, t) => {
                          e.dispatch("PreProcess", t);
                        })(e, { ...n, node: s }),
                        o && (r.doc = o),
                        s
                      );
                    })(e, t, n)
                  : t)(t, n, i),
              d = ((e, t, n) => {
                const o = Nr(n.getInner ? t.innerHTML : e.getOuterHTML(t));
                return n.selection || cr(mn(t)) ? o : Tt.trim(o);
              })(o, l, i),
              c = ((e, t, n) => {
                const o = n.selection ? { forced_root_block: !1, ...n } : n,
                  r = e.parse(t, o);
                return (
                  ((e) => {
                    const t = (e) => "br" === (null == e ? void 0 : e.name),
                      n = e.lastChild;
                    if (t(n)) {
                      const e = n.prev;
                      t(e) && (n.remove(), e.remove());
                    }
                  })(r),
                  r
                );
              })(s, d, i);
            return "tree" === i.format
              ? c
              : ((e, t, n, o, r) => {
                  const s = ((e, t, n) => ig(e, t).serialize(n))(t, n, o);
                  return ((e, t, n) => {
                    if (!t.no_events && e) {
                      const o = ((e, t) => e.dispatch("PostProcess", t))(e, {
                        ...t,
                        content: n,
                      });
                      return o.content;
                    }
                    return n;
                  })(e, r, s);
                })(t, e, r, c, i);
          },
          addRules: r.addValidElements,
          setRules: r.setValidElements,
          addTempAttr: O(jy, s, n),
          getTempAttrs: N(n),
          getNodeFilters: s.getNodeFilters,
          getAttributeFilters: s.getAttributeFilters,
          removeNodeFilter: s.removeNodeFilter,
          removeAttributeFilter: s.removeAttributeFilter,
        }
      );
    },
    $y = (e, t) => {
      const n = Hy(e, t);
      return {
        schema: n.schema,
        addNodeFilter: n.addNodeFilter,
        addAttributeFilter: n.addAttributeFilter,
        serialize: n.serialize,
        addRules: n.addRules,
        setRules: n.setRules,
        addTempAttr: n.addTempAttr,
        getTempAttrs: n.getTempAttrs,
        getNodeFilters: n.getNodeFilters,
        getAttributeFilters: n.getAttributeFilters,
        removeNodeFilter: n.removeNodeFilter,
        removeAttributeFilter: n.removeAttributeFilter,
      };
    },
    Vy = (e, t, n = {}) => {
      const o = ((e, t) => ({ format: "html", ...e, set: !0, content: t }))(
        n,
        t
      );
      return oy(e, o)
        .map((t) => {
          const n = ((e, t, n) => Dy(e).editor.setContent(t, n))(
            e,
            t.content,
            t
          );
          return ry(e, n.html, t), n.content;
        })
        .getOr(t);
    },
    qy =
      "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(
        ","
      ),
    Wy =
      "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(
        ","
      ),
    Ky = (e) => {
      const t = K(qy, (t) => xe(e, t)),
        n = e.forced_root_block;
      return (
        (!1 !== n && "" !== n) || t.push("forced_root_block (false only)"),
        se(t)
      );
    },
    Gy = (e) => {
      const t = Tt.makeMap(e.plugins, " "),
        n = K(Wy, (e) => xe(t, e));
      return se(n);
    },
    Yy = ta.DOM,
    Xy = (e) => M.from(e).each((e) => e.destroy()),
    Qy = (() => {
      const e = {};
      return {
        add: (t, n) => {
          e[t] = n;
        },
        get: (t) => (e[t] ? e[t] : { icons: {} }),
        has: (t) => xe(e, t),
      };
    })(),
    Jy = da.ModelManager,
    Zy = (e, t) => t.dom[e],
    eC = (e, t) => parseInt(Vn(t, e), 10),
    tC = O(Zy, "clientWidth"),
    nC = O(Zy, "clientHeight"),
    oC = O(eC, "margin-top"),
    rC = O(eC, "margin-left"),
    sC = (e) => {
      const t = [],
        n = () => {
          const t = e.theme;
          return t && t.getNotificationManagerImpl
            ? t.getNotificationManagerImpl()
            : (() => {
                const e = () => {
                  throw new Error(
                    "Theme did not provide a NotificationManager implementation."
                  );
                };
                return { open: e, close: e, getArgs: e };
              })();
        },
        o = () => M.from(t[0]),
        r = () => {
          V(t, (e) => {
            e.reposition();
          });
        },
        s = (e) => {
          J(t, (t) => t === e).each((e) => {
            t.splice(e, 1);
          });
        },
        a = (a, i = !0) =>
          e.removed ||
          !((e) => {
            return ((t = e.inline ? e.getBody() : e.getContentAreaContainer()),
            M.from(t).map(mn))
              .map(zn)
              .getOr(!1);
            var t;
          })(e)
            ? {}
            : (i && e.dispatch("BeforeOpenNotification", { notification: a }),
              Q(t, (e) => {
                return (
                  (t = n().getArgs(e)),
                  (o = a),
                  !(
                    t.type !== o.type ||
                    t.text !== o.text ||
                    t.progressBar ||
                    t.timeout ||
                    o.progressBar ||
                    o.timeout
                  )
                );
                var t, o;
              }).getOrThunk(() => {
                e.editorManager.setActive(e);
                const i = n().open(a, () => {
                  s(i),
                    r(),
                    o().fold(
                      () => e.focus(),
                      (e) => bf(mn(e.getEl()))
                    );
                });
                return (
                  ((e) => {
                    t.push(e);
                  })(i),
                  r(),
                  e.dispatch("OpenNotification", { notification: { ...i } }),
                  i
                );
              })),
        i = N(t);
      return (
        ((e) => {
          e.on("SkinLoaded", () => {
            const t = Al(e);
            t && a({ text: t, type: "warning", timeout: 0 }, !1), r();
          }),
            e.on("show ResizeEditor ResizeWindow NodeChange", () => {
              requestAnimationFrame(r);
            }),
            e.on("remove", () => {
              V(t.slice(), (e) => {
                n().close(e);
              });
            });
        })(e),
        {
          open: a,
          close: () => {
            o().each((e) => {
              n().close(e), s(e), r();
            });
          },
          getNotifications: i,
        }
      );
    },
    aC = da.PluginManager,
    iC = da.ThemeManager,
    lC = (e) => {
      let t = [];
      const n = () => {
          const t = e.theme;
          return t && t.getWindowManagerImpl
            ? t.getWindowManagerImpl()
            : (() => {
                const e = () => {
                  throw new Error(
                    "Theme did not provide a WindowManager implementation."
                  );
                };
                return { open: e, openUrl: e, alert: e, confirm: e, close: e };
              })();
        },
        o =
          (e, t) =>
          (...n) =>
            t ? t.apply(e, n) : void 0,
        r = (n) => {
          ((t) => {
            e.dispatch("CloseWindow", { dialog: t });
          })(n),
            (t = K(t, (e) => e !== n)),
            0 === t.length && e.focus();
        },
        s = (n) => {
          e.editorManager.setActive(e), Ef(e), e.ui.show();
          const o = n();
          return (
            ((n) => {
              t.push(n),
                ((t) => {
                  e.dispatch("OpenWindow", { dialog: t });
                })(n);
            })(o),
            o
          );
        };
      return (
        e.on("remove", () => {
          V(t, (e) => {
            n().close(e);
          });
        }),
        {
          open: (e, t) => s(() => n().open(e, t, r)),
          openUrl: (e) => s(() => n().openUrl(e, r)),
          alert: (e, t, r) => {
            const s = n();
            s.alert(e, o(r || s, t));
          },
          confirm: (e, t, r) => {
            const s = n();
            s.confirm(e, o(r || s, t));
          },
          close: () => {
            M.from(t[t.length - 1]).each((e) => {
              n().close(e), r(e);
            });
          },
        }
      );
    },
    dC = (e, t) => {
      e.notificationManager.open({ type: "error", text: t });
    },
    cC = (e, t) => {
      e._skinLoaded
        ? dC(e, t)
        : e.on("SkinLoaded", () => {
            dC(e, t);
          });
    },
    uC = (e, t, n) => {
      um(e, t, { message: n }), console.error(n);
    },
    mC = (e, t, n) =>
      n
        ? `Failed to load ${e}: ${n} from url ${t}`
        : `Failed to load ${e} url: ${t}`,
    fC = (e, ...t) => {
      const n = window.console;
      n && (n.error ? n.error(e, ...t) : n.log(e, ...t));
    },
    gC = (e, t) => {
      const n = e.editorManager.baseURL + "/skins/content",
        o = `content${e.editorManager.suffix}.css`;
      return $(t, (t) =>
        ((e) => /^[a-z0-9\-]+$/i.test(e))(t) && !e.inline
          ? `${n}/${t}/${o}`
          : e.documentBaseURI.toAbsolute(t)
      );
    },
    pC = L,
    hC = (e, t) => {
      const n = {};
      return {
        findAll: (o, r = L) => {
          const s = K(
              ((e) => (e ? de(e.getElementsByTagName("img")) : []))(o),
              (t) => {
                const n = t.src;
                return (
                  !t.hasAttribute("data-mce-bogus") &&
                  !t.hasAttribute("data-mce-placeholder") &&
                  !(!n || n === Nt.transparentSrc) &&
                  (ze(n, "blob:")
                    ? !e.isUploaded(n) && r(t)
                    : !!ze(n, "data:") && r(t))
                );
              }
            ),
            a = $(s, (e) => {
              const o = e.src;
              if (xe(n, o))
                return n[o].then((t) =>
                  m(t) ? t : { image: e, blobInfo: t.blobInfo }
                );
              {
                const r = ((e, t) => {
                  const n = () => Promise.reject("Invalid data URI");
                  if (ze(t, "blob:")) {
                    const s = e.getByUri(t);
                    return C(s)
                      ? Promise.resolve(s)
                      : ((o = t),
                        ze(o, "blob:")
                          ? ((e) =>
                              fetch(e)
                                .then((e) =>
                                  e.ok ? e.blob() : Promise.reject()
                                )
                                .catch(() =>
                                  Promise.reject(
                                    `Cannot convert ${e} to Blob. Resource might not exist or is inaccessible.`
                                  )
                                ))(o)
                          : ze(o, "data:")
                          ? ((r = o),
                            new Promise((e, t) => {
                              Bv(r)
                                .bind(
                                  ({ type: e, data: t, base64Encoded: n }) =>
                                    Dv(e, t, n)
                                )
                                .fold(() => t("Invalid data URI"), e);
                            }))
                          : Promise.reject("Unknown URI format")).then((t) =>
                          Pv(t).then((o) =>
                            Mv(o, !1, (n) => M.some(Iv(e, t, n))).getOrThunk(n)
                          )
                        );
                  }
                  var o, r;
                  return ze(t, "data:")
                    ? Fv(e, t).fold(n, (e) => Promise.resolve(e))
                    : Promise.reject("Unknown image data format");
                })(t, o)
                  .then((t) => (delete n[o], { image: e, blobInfo: t }))
                  .catch((e) => (delete n[o], e));
                return (n[o] = r), r;
              }
            });
          return Promise.all(a);
        },
      };
    },
    bC = () => {
      let e = {};
      const t = (e, t) => ({ status: e, resultUri: t }),
        n = (t) => t in e;
      return {
        hasBlobUri: n,
        getResultUri: (t) => {
          const n = e[t];
          return n ? n.resultUri : null;
        },
        isPending: (t) => !!n(t) && 1 === e[t].status,
        isUploaded: (t) => !!n(t) && 2 === e[t].status,
        markPending: (n) => {
          e[n] = t(1, null);
        },
        markUploaded: (n, o) => {
          e[n] = t(2, o);
        },
        removeFailed: (t) => {
          delete e[t];
        },
        destroy: () => {
          e = {};
        },
      };
    };
  let vC = 0;
  const yC = (e, t) => {
      const n = {},
        o = (e, n) =>
          new Promise((o, r) => {
            const s = new XMLHttpRequest();
            s.open("POST", t.url),
              (s.withCredentials = t.credentials),
              (s.upload.onprogress = (e) => {
                n((e.loaded / e.total) * 100);
              }),
              (s.onerror = () => {
                r(
                  "Image upload failed due to a XHR Transport error. Code: " +
                    s.status
                );
              }),
              (s.onload = () => {
                if (s.status < 200 || s.status >= 300)
                  return void r("HTTP Error: " + s.status);
                const e = JSON.parse(s.responseText);
                var n, a;
                e && m(e.location)
                  ? o(
                      ((n = t.basePath),
                      (a = e.location),
                      n ? n.replace(/\/$/, "") + "/" + a.replace(/^\//, "") : a)
                    )
                  : r("Invalid JSON: " + s.responseText);
              });
            const a = new FormData();
            a.append("file", e.blob(), e.filename()), s.send(a);
          }),
        r = w(t.handler) ? t.handler : o,
        s = (e, t) => ({ url: t, blobInfo: e, status: !0 }),
        a = (e, t) => ({ url: "", blobInfo: e, status: !1, error: t }),
        i = (e, t) => {
          Tt.each(n[e], (e) => {
            e(t);
          }),
            delete n[e];
        };
      return {
        upload: (l, d) =>
          t.url || r !== o
            ? ((t, o) => (
                (t = Tt.grep(t, (t) => !e.isUploaded(t.blobUri()))),
                Promise.all(
                  Tt.map(t, (t) =>
                    e.isPending(t.blobUri())
                      ? ((e) => {
                          const t = e.blobUri();
                          return new Promise((e) => {
                            (n[t] = n[t] || []), n[t].push(e);
                          });
                        })(t)
                      : ((t, n, o) => (
                          e.markPending(t.blobUri()),
                          new Promise((r) => {
                            let l, d;
                            try {
                              const c = () => {
                                  l && (l.close(), (d = S));
                                },
                                u = (n) => {
                                  c(),
                                    e.markUploaded(t.blobUri(), n),
                                    i(t.blobUri(), s(t, n)),
                                    r(s(t, n));
                                },
                                f = (n) => {
                                  c(),
                                    e.removeFailed(t.blobUri()),
                                    i(t.blobUri(), a(t, n)),
                                    r(a(t, n));
                                };
                              (d = (e) => {
                                e < 0 ||
                                  e > 100 ||
                                  M.from(l)
                                    .orThunk(() => M.from(o).map(B))
                                    .each((t) => {
                                      (l = t), t.progressBar.value(e);
                                    });
                              }),
                                n(t, d).then(u, (e) => {
                                  f(m(e) ? { message: e } : e);
                                });
                            } catch (e) {
                              r(a(t, e));
                            }
                          })
                        ))(t, r, o)
                  )
                )
              ))(l, d)
            : new Promise((e) => {
                e([]);
              }),
      };
    },
    CC = (e) => () =>
      e.notificationManager.open({
        text: e.translate("Image uploading..."),
        type: "info",
        timeout: -1,
        progressBar: !0,
      }),
    wC = (e, t) =>
      yC(t, {
        url: cl(e),
        basePath: ul(e),
        credentials: ml(e),
        handler: fl(e),
      }),
    xC = (e) => {
      const t = (() => {
        let e = [];
        const t = (e) => {
            if (!e.blob || !e.base64)
              throw new Error(
                "blob and base64 representations of the image are required for BlobInfo to be created"
              );
            const t =
                e.id ||
                "blobid" +
                  vC++ +
                  (() => {
                    const e = () =>
                      Math.round(4294967295 * Math.random()).toString(36);
                    return (
                      "s" + new Date().getTime().toString(36) + e() + e() + e()
                    );
                  })(),
              n = e.name || t,
              o = e.blob;
            var r;
            return {
              id: N(t),
              name: N(n),
              filename: N(
                e.filename ||
                  n +
                    "." +
                    ((r = o.type),
                    {
                      "image/jpeg": "jpg",
                      "image/jpg": "jpg",
                      "image/gif": "gif",
                      "image/png": "png",
                      "image/apng": "apng",
                      "image/avif": "avif",
                      "image/svg+xml": "svg",
                      "image/webp": "webp",
                      "image/bmp": "bmp",
                      "image/tiff": "tiff",
                    }[r.toLowerCase()] || "dat")
              ),
              blob: N(o),
              base64: N(e.base64),
              blobUri: N(e.blobUri || URL.createObjectURL(o)),
              uri: N(e.uri),
            };
          },
          n = (t) => Q(e, t).getOrUndefined(),
          o = (e) => n((t) => t.id() === e);
        return {
          create: (e, n, o, r, s) => {
            if (m(e))
              return t({ id: e, name: r, filename: s, blob: n, base64: o });
            if (f(e)) return t(e);
            throw new Error("Unknown input type");
          },
          add: (t) => {
            o(t.id()) || e.push(t);
          },
          get: o,
          getByUri: (e) => n((t) => t.blobUri() === e),
          getByData: (e, t) =>
            n((n) => n.base64() === e && n.blob().type === t),
          findFirst: n,
          removeByUri: (t) => {
            e = K(
              e,
              (e) => e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1)
            );
          },
          destroy: () => {
            V(e, (e) => {
              URL.revokeObjectURL(e.blobUri());
            }),
              (e = []);
          },
        };
      })();
      let n, o;
      const r = bC(),
        s = [],
        a = (t) => (n) => e.selection ? t(n) : [],
        i = (e, t, n) => {
          let o = 0;
          do {
            (o = e.indexOf(t, o)),
              -1 !== o &&
                ((e = e.substring(0, o) + n + e.substr(o + t.length)),
                (o += n.length - t.length + 1));
          } while (-1 !== o);
          return e;
        },
        l = (e, t, n) => {
          const o = `src="${n}"${
            n === Nt.transparentSrc ? ' data-mce-placeholder="1"' : ""
          }`;
          return (
            (e = i(e, `src="${t}"`, o)),
            i(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
          );
        },
        d = (t, n) => {
          V(e.undoManager.data, (e) => {
            "fragmented" === e.type
              ? (e.fragments = $(e.fragments, (e) => l(e, t, n)))
              : (e.content = l(e.content, t, n));
          });
        },
        c = () => (
          n || (n = wC(e, r)),
          p().then(
            a((o) => {
              const r = $(o, (e) => e.blobInfo);
              return n.upload(r, CC(e)).then(
                a((n) => {
                  const r = [];
                  let s = !1;
                  const a = $(n, (n, a) => {
                    const { blobInfo: i, image: l } = o[a];
                    let c = !1;
                    return (
                      n.status && il(e)
                        ? (n.url && !Ue(l.src, n.url) && (s = !0),
                          t.removeByUri(l.src),
                          By(e) ||
                            ((t, n) => {
                              const o = e.convertURL(n, "src");
                              var r;
                              d(t.src, n),
                                qt(mn(t), {
                                  src: al(e)
                                    ? ((r = n),
                                      r +
                                        (-1 === r.indexOf("?") ? "?" : "&") +
                                        new Date().getTime())
                                    : n,
                                  "data-mce-src": o,
                                });
                            })(l, n.url))
                        : n.error &&
                          (n.error.remove &&
                            (d(l.src, Nt.transparentSrc), r.push(l), (c = !0)),
                          ((e, t) => {
                            cC(
                              e,
                              la.translate(["Failed to upload image: {0}", t])
                            );
                          })(e, n.error.message)),
                      {
                        element: l,
                        status: n.status,
                        uploadUri: n.url,
                        blobInfo: i,
                        removed: c,
                      }
                    );
                  });
                  return (
                    r.length > 0 && !By(e)
                      ? e.undoManager.transact(() => {
                          V(r, (n) => {
                            e.dom.remove(n), t.removeByUri(n.src);
                          });
                        })
                      : s && e.undoManager.dispatchChange(),
                    a
                  );
                })
              );
            })
          )
        ),
        u = () => (sl(e) ? c() : Promise.resolve([])),
        g = (e) => te(s, (t) => t(e)),
        p = () => (
          o || (o = hC(r, t)),
          o.findAll(e.getBody(), g).then(
            a((t) => {
              const n = K(t, (t) => !m(t) || (cC(e, t), !1));
              return (
                By(e) ||
                  V(n, (e) => {
                    d(e.image.src, e.blobInfo.blobUri()),
                      (e.image.src = e.blobInfo.blobUri()),
                      e.image.removeAttribute("data-mce-src");
                  }),
                n
              );
            })
          )
        ),
        h = (n) =>
          n.replace(/src="(blob:[^"]+)"/g, (n, o) => {
            const s = r.getResultUri(o);
            if (s) return 'src="' + s + '"';
            let a = t.getByUri(o);
            return (
              a ||
                (a = Y(
                  e.editorManager.get(),
                  (e, t) =>
                    e ||
                    (t.editorUpload && t.editorUpload.blobCache.getByUri(o)),
                  void 0
                )),
              a
                ? 'src="data:' + a.blob().type + ";base64," + a.base64() + '"'
                : n
            );
          });
      return (
        e.on("SetContent", () => {
          sl(e) ? u() : p();
        }),
        e.on("RawSaveContent", (e) => {
          e.content = h(e.content);
        }),
        e.on("GetContent", (e) => {
          e.source_view ||
            "raw" === e.format ||
            "tree" === e.format ||
            (e.content = h(e.content));
        }),
        e.on("PostRender", () => {
          e.parser.addNodeFilter("img", (e) => {
            V(e, (e) => {
              const n = e.attr("src");
              if (!n || t.getByUri(n)) return;
              const o = r.getResultUri(n);
              o && e.attr("src", o);
            });
          });
        }),
        {
          blobCache: t,
          addFilter: (e) => {
            s.push(e);
          },
          uploadImages: c,
          uploadImagesAuto: u,
          scanForImages: p,
          destroy: () => {
            t.destroy(), r.destroy(), (o = n = null);
          },
        }
      );
    },
    kC = { remove_similar: !0, inherit: !1 },
    SC = { selector: "td,th", ...kC },
    _C = {
      tablecellbackgroundcolor: {
        styles: { backgroundColor: "%value" },
        ...SC,
      },
      tablecellverticalalign: { styles: { "vertical-align": "%value" }, ...SC },
      tablecellbordercolor: { styles: { borderColor: "%value" }, ...SC },
      tablecellclass: { classes: ["%value"], ...SC },
      tableclass: { selector: "table", classes: ["%value"], ...kC },
      tablecellborderstyle: { styles: { borderStyle: "%value" }, ...SC },
      tablecellborderwidth: { styles: { borderWidth: "%value" }, ...SC },
    },
    EC = N(_C),
    NC = Tt.each,
    RC = ta.DOM,
    AC = (e) => C(e) && f(e),
    OC = (e, t) => {
      const n = (t && t.schema) || Ls({}),
        o = (e) => {
          const t = m(e) ? { name: e, classes: [], attrs: {} } : e,
            n = RC.create(t.name);
          return (
            ((e, t) => {
              t.classes.length > 0 && RC.addClass(e, t.classes.join(" ")),
                RC.setAttribs(e, t.attrs);
            })(n, t),
            n
          );
        },
        r = (e, t, s) => {
          let a;
          const i = t[0],
            l = AC(i) ? i.name : void 0,
            d = ((e, t) => {
              const o = n.getElementRule(e.nodeName.toLowerCase()),
                r = null == o ? void 0 : o.parentsRequired;
              return !(!r || !r.length) && (t && j(r, t) ? t : r[0]);
            })(e, l);
          if (d) l === d ? ((a = i), (t = t.slice(1))) : (a = d);
          else if (i) (a = i), (t = t.slice(1));
          else if (!s) return e;
          const c = a ? o(a) : RC.create("div");
          c.appendChild(e),
            s &&
              Tt.each(s, (t) => {
                const n = o(t);
                c.insertBefore(n, e);
              });
          const u = AC(a) ? a.siblings : void 0;
          return r(c, t, u);
        },
        s = RC.create("div");
      if (e.length > 0) {
        const t = e[0],
          n = o(t),
          a = AC(t) ? t.siblings : void 0;
        s.appendChild(r(n, e.slice(1), a));
      }
      return s;
    },
    TC = (e) => {
      let t = "div";
      const n = { name: t, classes: [], attrs: {}, selector: (e = Tt.trim(e)) };
      return (
        "*" !== e &&
          (t = e.replace(
            /(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,
            (e, t, o, r, s) => {
              switch (t) {
                case "#":
                  n.attrs.id = o;
                  break;
                case ".":
                  n.classes.push(o);
                  break;
                case ":":
                  -1 !==
                    Tt.inArray(
                      "checked disabled enabled read-only required".split(" "),
                      o
                    ) && (n.attrs[o] = o);
              }
              if ("[" === r) {
                const e = s.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                e && (n.attrs[e[1]] = e[2]);
              }
              return "";
            }
          )),
        (n.name = t || "div"),
        n
      );
    },
    BC = (e, t) => {
      let n = "",
        o = Ml(e);
      if ("" === o) return "";
      const r = (e) => (m(e) ? e.replace(/%(\w+)/g, "") : ""),
        s = (t, n) => RC.getStyle(null != n ? n : e.getBody(), t, !0);
      if (m(t)) {
        const n = e.formatter.get(t);
        if (!n) return "";
        t = n[0];
      }
      if ("preview" in t) {
        const e = t.preview;
        if (!1 === e) return "";
        o = e || o;
      }
      let a,
        i = t.block || t.inline || "span";
      const l =
        ((d = t.selector),
        m(d)
          ? ((d = (d = d.split(/\s*,\s*/)[0]).replace(
              /\s*(~\+|~|\+|>)\s*/g,
              "$1"
            )),
            Tt.map(d.split(/(?:>|\s+(?![^\[\]]+\]))/), (e) => {
              const t = Tt.map(e.split(/(?:~\+|~|\+)/), TC),
                n = t.pop();
              return t.length && (n.siblings = t), n;
            }).reverse())
          : []);
      var d;
      l.length > 0
        ? (l[0].name || (l[0].name = i), (i = t.selector), (a = OC(l, e)))
        : (a = OC([i], e));
      const c = RC.select(i, a)[0] || a.firstChild;
      NC(t.styles, (e, t) => {
        const n = r(e);
        n && RC.setStyle(c, t, n);
      }),
        NC(t.attributes, (e, t) => {
          const n = r(e);
          n && RC.setAttrib(c, t, n);
        }),
        NC(t.classes, (e) => {
          const t = r(e);
          RC.hasClass(c, t) || RC.addClass(c, t);
        }),
        e.dispatch("PreviewFormats"),
        RC.setStyles(a, { position: "absolute", left: -65535 }),
        e.getBody().appendChild(a);
      const u = s("fontSize"),
        f = /px$/.test(u) ? parseInt(u, 10) : 0;
      return (
        NC(o.split(" "), (e) => {
          let t = s(e, c);
          if (
            !(
              ("background-color" === e &&
                /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) &&
                ((t = s(e)), "#ffffff" === du(t).toLowerCase())) ||
              ("color" === e && "#000000" === du(t).toLowerCase())
            )
          ) {
            if ("font-size" === e && /em|%$/.test(t)) {
              if (0 === f) return;
              t = (parseFloat(t) / (/%$/.test(t) ? 100 : 1)) * f + "px";
            }
            "border" === e && t && (n += "padding:0 2px;"),
              (n += e + ":" + t + ";");
          }
        }),
        e.dispatch("AfterPreviewFormats"),
        RC.remove(a),
        n
      );
    },
    DC = (e) => {
      const t = ((e) => {
          const t = {},
            n = (e, o) => {
              e &&
                (m(e)
                  ? (p(o) || (o = [o]),
                    V(o, (e) => {
                      v(e.deep) && (e.deep = !Uu(e)),
                        v(e.split) && (e.split = !Uu(e) || zu(e)),
                        v(e.remove) && Uu(e) && !zu(e) && (e.remove = "none"),
                        Uu(e) &&
                          zu(e) &&
                          ((e.mixed = !0), (e.block_expand = !0)),
                        m(e.classes) && (e.classes = e.classes.split(/\s+/));
                    }),
                    (t[e] = o))
                  : fe(e, (e, t) => {
                      n(t, e);
                    }));
            };
          return (
            n(
              ((e) => {
                const t = e.dom,
                  n = e.schema.type,
                  o = {
                    valigntop: [
                      { selector: "td,th", styles: { verticalAlign: "top" } },
                    ],
                    valignmiddle: [
                      {
                        selector: "td,th",
                        styles: { verticalAlign: "middle" },
                      },
                    ],
                    valignbottom: [
                      {
                        selector: "td,th",
                        styles: { verticalAlign: "bottom" },
                      },
                    ],
                    alignleft: [
                      {
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-left",
                        ceFalseOverride: !0,
                        preview: "font-family font-size",
                      },
                      {
                        selector:
                          "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                        styles: { textAlign: "left" },
                        inherit: !1,
                        preview: !1,
                      },
                      {
                        selector: "img,audio,video",
                        collapsed: !1,
                        styles: { float: "left" },
                        preview: "font-family font-size",
                      },
                      {
                        selector: "table",
                        collapsed: !1,
                        styles: { marginLeft: "0px", marginRight: "auto" },
                        onformat: (e) => {
                          t.setStyle(e, "float", null);
                        },
                        preview: "font-family font-size",
                      },
                      {
                        selector: ".mce-preview-object,[data-ephox-embed-iri]",
                        ceFalseOverride: !0,
                        styles: { float: "left" },
                      },
                    ],
                    aligncenter: [
                      {
                        selector:
                          "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                        styles: { textAlign: "center" },
                        inherit: !1,
                        preview: "font-family font-size",
                      },
                      {
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-center",
                        ceFalseOverride: !0,
                        preview: "font-family font-size",
                      },
                      {
                        selector: "img,audio,video",
                        collapsed: !1,
                        styles: {
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        },
                        preview: !1,
                      },
                      {
                        selector: "table",
                        collapsed: !1,
                        styles: { marginLeft: "auto", marginRight: "auto" },
                        preview: "font-family font-size",
                      },
                      {
                        selector: ".mce-preview-object",
                        ceFalseOverride: !0,
                        styles: {
                          display: "table",
                          marginLeft: "auto",
                          marginRight: "auto",
                        },
                        preview: !1,
                      },
                      {
                        selector: "[data-ephox-embed-iri]",
                        ceFalseOverride: !0,
                        styles: { marginLeft: "auto", marginRight: "auto" },
                        preview: !1,
                      },
                    ],
                    alignright: [
                      {
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-right",
                        ceFalseOverride: !0,
                        preview: "font-family font-size",
                      },
                      {
                        selector:
                          "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                        styles: { textAlign: "right" },
                        inherit: !1,
                        preview: "font-family font-size",
                      },
                      {
                        selector: "img,audio,video",
                        collapsed: !1,
                        styles: { float: "right" },
                        preview: "font-family font-size",
                      },
                      {
                        selector: "table",
                        collapsed: !1,
                        styles: { marginRight: "0px", marginLeft: "auto" },
                        onformat: (e) => {
                          t.setStyle(e, "float", null);
                        },
                        preview: "font-family font-size",
                      },
                      {
                        selector: ".mce-preview-object,[data-ephox-embed-iri]",
                        ceFalseOverride: !0,
                        styles: { float: "right" },
                        preview: !1,
                      },
                    ],
                    alignjustify: [
                      {
                        selector:
                          "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                        styles: { textAlign: "justify" },
                        inherit: !1,
                        preview: "font-family font-size",
                      },
                    ],
                    bold: [
                      {
                        inline: "strong",
                        remove: "all",
                        preserve_attributes: ["class", "style"],
                      },
                      { inline: "span", styles: { fontWeight: "bold" } },
                      {
                        inline: "b",
                        remove: "all",
                        preserve_attributes: ["class", "style"],
                      },
                    ],
                    italic: [
                      {
                        inline: "em",
                        remove: "all",
                        preserve_attributes: ["class", "style"],
                      },
                      { inline: "span", styles: { fontStyle: "italic" } },
                      {
                        inline: "i",
                        remove: "all",
                        preserve_attributes: ["class", "style"],
                      },
                    ],
                    underline: [
                      {
                        inline: "span",
                        styles: { textDecoration: "underline" },
                        exact: !0,
                      },
                      {
                        inline: "u",
                        remove: "all",
                        preserve_attributes: ["class", "style"],
                      },
                    ],
                    strikethrough: (() => {
                      const e = {
                          inline: "span",
                          styles: { textDecoration: "line-through" },
                          exact: !0,
                        },
                        t = {
                          inline: "strike",
                          remove: "all",
                          preserve_attributes: ["class", "style"],
                        },
                        o = {
                          inline: "s",
                          remove: "all",
                          preserve_attributes: ["class", "style"],
                        };
                      return "html4" !== n ? [o, e, t] : [e, o, t];
                    })(),
                    forecolor: {
                      inline: "span",
                      styles: { color: "%value" },
                      links: !0,
                      remove_similar: !0,
                      clear_child_styles: !0,
                    },
                    hilitecolor: {
                      inline: "span",
                      styles: { backgroundColor: "%value" },
                      links: !0,
                      remove_similar: !0,
                      clear_child_styles: !0,
                    },
                    fontname: {
                      inline: "span",
                      toggle: !1,
                      styles: { fontFamily: "%value" },
                      clear_child_styles: !0,
                    },
                    fontsize: {
                      inline: "span",
                      toggle: !1,
                      styles: { fontSize: "%value" },
                      clear_child_styles: !0,
                    },
                    lineheight: {
                      selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
                      styles: { lineHeight: "%value" },
                    },
                    fontsize_class: {
                      inline: "span",
                      attributes: { class: "%value" },
                    },
                    blockquote: {
                      block: "blockquote",
                      wrapper: !0,
                      remove: "all",
                    },
                    subscript: { inline: "sub" },
                    superscript: { inline: "sup" },
                    code: { inline: "code" },
                    link: {
                      inline: "a",
                      selector: "a",
                      remove: "all",
                      split: !0,
                      deep: !0,
                      onmatch: (e, t, n) => yo(e) && e.hasAttribute("href"),
                      onformat: (e, n, o) => {
                        Tt.each(o, (n, o) => {
                          t.setAttrib(e, o, n);
                        });
                      },
                    },
                    lang: {
                      inline: "span",
                      clear_child_styles: !0,
                      remove_similar: !0,
                      attributes: {
                        lang: "%value",
                        "data-mce-lang": (e) => {
                          var t;
                          return null !==
                            (t = null == e ? void 0 : e.customValue) &&
                            void 0 !== t
                            ? t
                            : null;
                        },
                      },
                    },
                    removeformat: [
                      {
                        selector:
                          "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0,
                      },
                      {
                        selector: "span",
                        attributes: ["style", "class"],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0,
                      },
                      {
                        selector: "*",
                        attributes: ["style", "class"],
                        split: !1,
                        expand: !1,
                        deep: !0,
                      },
                    ],
                  };
                return (
                  Tt.each(
                    "p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(
                      /\s/
                    ),
                    (e) => {
                      o[e] = { block: e, remove: "all" };
                    }
                  ),
                  o
                );
              })(e)
            ),
            n(EC()),
            n(Ll(e)),
            {
              get: (e) => (C(e) ? t[e] : t),
              has: (e) => xe(t, e),
              register: n,
              unregister: (e) => (e && t[e] && delete t[e], t),
            }
          );
        })(e),
        n = ra({});
      return (
        ((e) => {
          e.addShortcut("meta+b", "", "Bold"),
            e.addShortcut("meta+i", "", "Italic"),
            e.addShortcut("meta+u", "", "Underline");
          for (let t = 1; t <= 6; t++)
            e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
          e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
            e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
            e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
        })(e),
        ((e) => {
          e.on("mouseup keydown", (t) => {
            ((e, t) => {
              const n = e.selection,
                o = e.getBody();
              Ih(e, null, !1),
                (8 !== t && 46 !== t) ||
                  !n.isCollapsed() ||
                  n.getStart().innerHTML !== Bh ||
                  Ih(e, jc(o, n.getStart())),
                (37 !== t && 39 !== t) || Ih(e, jc(o, n.getStart()));
            })(e, t.keyCode);
          });
        })(e),
        By(e) ||
          ((e, t) => {
            e.set({}),
              t.on("NodeChange", (n) => {
                Rb(t, n.element, e.get());
              }),
              t.on("FormatApply FormatRemove", (n) => {
                const o = M.from(n.node)
                  .map((e) => (wu(e) ? e : e.startContainer))
                  .bind((e) => (yo(e) ? M.some(e) : M.from(e.parentElement)))
                  .getOrThunk(() => _b(t));
                Rb(t, o, e.get());
              });
          })(n, e),
        {
          get: t.get,
          has: t.has,
          register: t.register,
          unregister: t.unregister,
          apply: (t, n, o) => {
            ((e, t, n, o) => {
              Py(e).formatter.apply(t, n, o);
            })(e, t, n, o);
          },
          remove: (t, n, o, r) => {
            ((e, t, n, o, r) => {
              Py(e).formatter.remove(t, n, o, r);
            })(e, t, n, o, r);
          },
          toggle: (t, n, o) => {
            ((e, t, n, o) => {
              Py(e).formatter.toggle(t, n, o);
            })(e, t, n, o);
          },
          match: (t, n, o, r) =>
            ((e, t, n, o, r) => Py(e).formatter.match(t, n, o, r))(
              e,
              t,
              n,
              o,
              r
            ),
          closest: (t) => ((e, t) => Py(e).formatter.closest(t))(e, t),
          matchAll: (t, n) =>
            ((e, t, n) => Py(e).formatter.matchAll(t, n))(e, t, n),
          matchNode: (t, n, o, r) =>
            ((e, t, n, o, r) => Py(e).formatter.matchNode(t, n, o, r))(
              e,
              t,
              n,
              o,
              r
            ),
          canApply: (t) => ((e, t) => Py(e).formatter.canApply(t))(e, t),
          formatChanged: (t, o, r, s) =>
            ((e, t, n, o, r, s) =>
              Py(e).formatter.formatChanged(t, n, o, r, s))(e, n, t, o, r, s),
          getCssText: O(BC, e),
        }
      );
    },
    PC = (e) => {
      switch (e.toLowerCase()) {
        case "undo":
        case "redo":
        case "mcefocus":
          return !0;
        default:
          return !1;
      }
    },
    LC = (e) => {
      const t = ua(),
        n = ra(0),
        o = ra(0),
        r = {
          data: [],
          typing: !1,
          beforeChange: () => {
            ((e, t, n) => {
              Py(e).undoManager.beforeChange(t, n);
            })(e, n, t);
          },
          add: (s, a) =>
            ((e, t, n, o, r, s, a) => Py(e).undoManager.add(t, n, o, r, s, a))(
              e,
              r,
              o,
              n,
              t,
              s,
              a
            ),
          dispatchChange: () => {
            e.setDirty(!0);
            const t = ky(e);
            (t.bookmark = Ni(e.selection)),
              e.dispatch("change", {
                level: t,
                lastLevel: ae(r.data, o.get()).getOrUndefined(),
              });
          },
          undo: () =>
            ((e, t, n, o) => Py(e).undoManager.undo(t, n, o))(e, r, n, o),
          redo: () => ((e, t, n) => Py(e).undoManager.redo(t, n))(e, o, r.data),
          clear: () => {
            ((e, t, n) => {
              Py(e).undoManager.clear(t, n);
            })(e, r, o);
          },
          reset: () => {
            ((e, t) => {
              Py(e).undoManager.reset(t);
            })(e, r);
          },
          hasUndo: () =>
            ((e, t, n) => Py(e).undoManager.hasUndo(t, n))(e, r, o),
          hasRedo: () =>
            ((e, t, n) => Py(e).undoManager.hasRedo(t, n))(e, r, o),
          transact: (t) =>
            ((e, t, n, o) => Py(e).undoManager.transact(t, n, o))(e, r, n, t),
          ignore: (t) => {
            ((e, t, n) => {
              Py(e).undoManager.ignore(t, n);
            })(e, n, t);
          },
          extra: (t, n) => {
            ((e, t, n, o, r) => {
              Py(e).undoManager.extra(t, n, o, r);
            })(e, r, o, t, n);
          },
        };
      return (
        By(e) ||
          ((e, t, n) => {
            const o = ra(!1),
              r = (e) => {
                Ay(t, !1, n), t.add({}, e);
              };
            e.on("init", () => {
              t.add();
            }),
              e.on("BeforeExecCommand", (e) => {
                const o = e.command;
                PC(o) || (Oy(t, n), t.beforeChange());
              }),
              e.on("ExecCommand", (e) => {
                const t = e.command;
                PC(t) || r(e);
              }),
              e.on("ObjectResizeStart cut", () => {
                t.beforeChange();
              }),
              e.on("SaveContent ObjectResized blur", r),
              e.on("dragend", r),
              e.on("keyup", (n) => {
                const s = n.keyCode;
                n.isDefaultPrevented() ||
                  (((s >= 33 && s <= 36) ||
                    (s >= 37 && s <= 40) ||
                    45 === s ||
                    n.ctrlKey) &&
                    (r(), e.nodeChanged()),
                  (46 !== s && 8 !== s) || e.nodeChanged(),
                  o.get() &&
                    t.typing &&
                    !Ny(ky(e), t.data[0]) &&
                    (e.isDirty() || e.setDirty(!0),
                    e.dispatch("TypingUndo"),
                    o.set(!1),
                    e.nodeChanged()));
              }),
              e.on("keydown", (e) => {
                const s = e.keyCode;
                if (e.isDefaultPrevented()) return;
                if ((s >= 33 && s <= 36) || (s >= 37 && s <= 40) || 45 === s)
                  return void (t.typing && r(e));
                const a = (e.ctrlKey && !e.altKey) || e.metaKey;
                !(s < 16 || s > 20) ||
                  224 === s ||
                  91 === s ||
                  t.typing ||
                  a ||
                  (t.beforeChange(), Ay(t, !0, n), t.add({}, e), o.set(!0));
              }),
              e.on("mousedown", (e) => {
                t.typing && r(e);
              }),
              e.on("input", (e) => {
                var t;
                e.inputType &&
                  ("insertReplacementText" === e.inputType ||
                    ("insertText" === (t = e).inputType && null === t.data) ||
                    ((e) =>
                      "insertFromPaste" === e.inputType ||
                      "insertFromDrop" === e.inputType)(e)) &&
                  r(e);
              }),
              e.on("AddUndo Undo Redo ClearUndos", (t) => {
                t.isDefaultPrevented() || e.nodeChanged();
              });
          })(e, r, n),
        ((e) => {
          e.addShortcut("meta+z", "", "Undo"),
            e.addShortcut("meta+y,meta+shift+z", "", "Redo");
        })(e),
        r
      );
    },
    MC = [
      9,
      27,
      bm.HOME,
      bm.END,
      19,
      20,
      44,
      144,
      145,
      33,
      34,
      45,
      16,
      17,
      18,
      91,
      92,
      93,
      bm.DOWN,
      bm.UP,
      bm.LEFT,
      bm.RIGHT,
    ].concat(Nt.browser.isFirefox() ? [224] : []),
    IC = "data-mce-placeholder",
    FC = (e) => "keydown" === e.type || "keyup" === e.type,
    UC = (e) => {
      const t = e.keyCode;
      return t === bm.BACKSPACE || t === bm.DELETE;
    },
    zC = (e, t) => ({ from: e, to: t }),
    jC = (e, t) => {
      const n = mn(e),
        o = mn(t.container());
      return Sp(n, o).map((e) => ((e, t) => ({ block: e, position: t }))(e, t));
    },
    HC = (e) => {
      const t = Nn(e);
      return J(t, nr).fold(N(t), (e) => t.slice(0, e));
    },
    $C = (e) => {
      const t = HC(e);
      return V(t, to), t;
    },
    VC = (e, t) => {
      const n = Rg(t, e);
      return Q(n.reverse(), (e) => ss(e)).each(to);
    },
    qC = (e, t, n, o) => {
      if (ss(n)) return kr(n), Ic(n.dom);
      0 === K(_n(o), (e) => !ss(e)).length && ss(t) && Yn(o, cn("br"));
      const r = Mc(n.dom, ai.before(o.dom));
      return (
        V($C(t), (e) => {
          Yn(o, e);
        }),
        VC(e, t),
        r
      );
    },
    WC = (e, t, n) => {
      if (ss(n)) return to(n), ss(t) && kr(t), Ic(t.dom);
      const o = Fc(n.dom);
      return (
        V($C(t), (e) => {
          Jn(n, e);
        }),
        VC(e, t),
        o
      );
    },
    KC = (e, t) => {
      Pc(e, t.dom)
        .bind((e) => M.from(e.getNode()))
        .map(mn)
        .filter(rr)
        .each(to);
    },
    GC = (e, t, n) => (
      KC(!0, t),
      KC(!1, n),
      ((e, t) =>
        vn(t, e)
          ? ((e, t) => {
              const n = Rg(t, e);
              return M.from(n[n.length - 1]);
            })(t, e)
          : M.none())(t, n).fold(O(WC, e, t, n), O(qC, e, t, n))
    ),
    YC = (e, t, n, o) => (t ? GC(e, o, n) : GC(e, n, o)),
    XC = (e, t) => {
      const n = mn(e.getBody()),
        o = ((e, t, n) =>
          n.collapsed
            ? ((e, t, n) => {
                const o = jC(e, ai.fromRangeStart(n)),
                  r = o.bind((n) =>
                    Tc(t, e, n.position).bind((n) =>
                      jC(e, n).map((n) =>
                        ((e, t, n) =>
                          Po(n.position.getNode()) && !ss(n.block)
                            ? Pc(!1, n.block.dom)
                                .bind((o) =>
                                  o.isEqual(n.position)
                                    ? Tc(t, e, o).bind((t) => jC(e, t))
                                    : M.some(n)
                                )
                                .getOr(n)
                            : n)(e, t, n)
                      )
                    )
                  );
                return Dt(o, r, zC).filter(
                  (e) =>
                    ((e) => !bn(e.from.block, e.to.block))(e) &&
                    ((e) =>
                      xn(e.from.block)
                        .bind((t) => xn(e.to.block).filter((e) => bn(t, e)))
                        .isSome())(e) &&
                    ((e) =>
                      !1 === Io(e.from.block.dom) && !1 === Io(e.to.block.dom))(
                      e
                    )
                );
              })(e, t, n)
            : M.none())(n.dom, t, e.selection.getRng()).map((o) => () => {
          YC(n, t, o.from.block, o.to.block).each((t) => {
            e.selection.setRng(t.toRange());
          });
        });
      return o;
    },
    QC = (e, t) => {
      const n = mn(t),
        o = O(bn, e);
      return Wo(n, dr, o).isSome();
    },
    JC = (e) => {
      const t = mn(e.getBody());
      return ((e, t) => {
        const n = Mc(e.dom, ai.fromRangeStart(t)).isNone(),
          o = Lc(e.dom, ai.fromRangeEnd(t)).isNone();
        return (
          !((e, t) => QC(e, t.startContainer) || QC(e, t.endContainer))(e, t) &&
          n &&
          o
        );
      })(t, e.selection.getRng())
        ? ((e) =>
            M.some(() => {
              e.setContent(""), e.selection.setCursorLocation();
            }))(e)
        : ((e, t) => {
            const n = t.getRng();
            return Dt(
              Sp(e, mn(n.startContainer)),
              Sp(e, mn(n.endContainer)),
              (o, r) =>
                bn(o, r)
                  ? M.none()
                  : M.some(() => {
                      n.deleteContents(),
                        YC(e, !0, o, r).each((e) => {
                          t.setRng(e.toRange());
                        });
                    })
            ).getOr(M.none());
          })(t, e.selection);
    },
    ZC = (e, t) => (e.selection.isCollapsed() ? M.none() : JC(e)),
    ew = (e, t, n, o, r) => M.from(t._selectionOverrides.showCaret(e, n, o, r)),
    tw = (e, t) =>
      e.dispatch("BeforeObjectSelected", { target: t }).isDefaultPrevented()
        ? M.none()
        : M.some(
            ((e) => {
              const t = e.ownerDocument.createRange();
              return t.selectNode(e), t;
            })(t)
          ),
    nw = (e, t, n) =>
      t.collapsed
        ? ((e, t, n) => {
            const o = cc(1, e.getBody(), t),
              r = ai.fromRangeStart(o),
              s = r.getNode();
            if (jd(s)) return ew(1, e, s, !r.isAtEnd(), !1);
            const a = r.getNode(!0);
            if (jd(a)) return ew(1, e, a, !1, !1);
            const i = Zp(e.dom.getRoot(), r.getNode());
            return jd(i) ? ew(1, e, i, !1, n) : M.none();
          })(e, t, n).getOr(t)
        : t,
    ow = (e) => _g(e) || wg(e),
    rw = (e) => Eg(e) || xg(e),
    sw = (e, t, n, o, r, s) => {
      ew(o, e, s.getNode(!r), r, !0).each((n) => {
        if (t.collapsed) {
          const e = t.cloneRange();
          r
            ? e.setEnd(n.startContainer, n.startOffset)
            : e.setStart(n.endContainer, n.endOffset),
            e.deleteContents();
        } else t.deleteContents();
        e.selection.setRng(n);
      }),
        ((e, t) => {
          Ro(t) && 0 === t.data.length && e.remove(t);
        })(e.dom, n);
    },
    aw = (e, t) =>
      ((e, t) => {
        const n = e.selection.getRng();
        if (!Ro(n.commonAncestorContainer)) return M.none();
        const o = t ? hc.Forwards : hc.Backwards,
          r = Nc(e.getBody()),
          s = O(gc, t ? r.next : r.prev),
          a = t ? ow : rw,
          i = mc(o, e.getBody(), n),
          l = s(i),
          d = l ? vp(t, l) : l;
        if (!d || !pc(i, d)) return M.none();
        if (a(d)) return M.some(() => sw(e, n, i.getNode(), o, t, d));
        const c = s(d);
        return c && a(c) && pc(d, c)
          ? M.some(() => sw(e, n, i.getNode(), o, t, c))
          : M.none();
      })(e, t),
    iw = (e, t) => {
      const n = e.getBody();
      return t ? Ic(n).filter(_g) : Fc(n).filter(Eg);
    },
    lw = (e) => {
      const t = e.selection.getRng();
      return (
        !t.collapsed &&
        (iw(e, !0).exists((e) => e.isEqual(ai.fromRangeStart(t))) ||
          iw(e, !1).exists((e) => e.isEqual(ai.fromRangeEnd(t))))
      );
    },
    dw = Ti([
      { remove: ["element"] },
      { moveToElement: ["element"] },
      { moveToPosition: ["position"] },
    ]),
    cw = (e, t, n) =>
      Tc(t, e, n).bind((o) => {
        return (
          (r = o.getNode()),
          (C(r) && (dr(mn(r)) || ir(mn(r)))) ||
          ((e, t, n, o) => {
            const r = (t) => or(mn(t)) && !oc(n, o, e);
            return uc(!t, n).fold(() => uc(t, o).fold(P, r), r);
          })(e, t, n, o)
            ? M.none()
            : (t && Io(o.getNode())) || (!t && Io(o.getNode(!0)))
            ? ((e, t, n, o) => {
                const r = o.getNode(!t);
                return Sp(mn(e), mn(n.getNode()))
                  .map((e) => (ss(e) ? dw.remove(e.dom) : dw.moveToElement(r)))
                  .orThunk(() => M.some(dw.moveToElement(r)));
              })(e, t, n, o)
            : (t && Eg(n)) || (!t && _g(n))
            ? M.some(dw.moveToPosition(o))
            : M.none()
        );
        var r;
      }),
    uw = (e, t) => M.from(Zp(e.getBody(), t)),
    mw = (e, t) => {
      const n = e.selection.getNode();
      return uw(e, n)
        .filter(Io)
        .fold(
          () =>
            ((e, t, n) => {
              const o = cc(t ? 1 : -1, e, n),
                r = ai.fromRangeStart(o),
                s = mn(e);
              return !t && Eg(r)
                ? M.some(dw.remove(r.getNode(!0)))
                : t && _g(r)
                ? M.some(dw.remove(r.getNode()))
                : !t && _g(r) && zg(s, r)
                ? jg(s, r).map((e) => dw.remove(e.getNode()))
                : t && Eg(r) && Ug(s, r)
                ? Hg(s, r).map((e) => dw.remove(e.getNode()))
                : ((e, t, n) =>
                    ((e, t) => {
                      const n = t.getNode(!e),
                        o = e ? "after" : "before";
                      return yo(n) && n.getAttribute("data-mce-caret") === o;
                    })(t, n)
                      ? ((e, t) =>
                          y(t)
                            ? M.none()
                            : e && Io(t.nextSibling)
                            ? M.some(dw.moveToElement(t.nextSibling))
                            : !e && Io(t.previousSibling)
                            ? M.some(dw.moveToElement(t.previousSibling))
                            : M.none())(t, n.getNode(!t)).orThunk(() =>
                          cw(e, t, n)
                        )
                      : cw(e, t, n).bind((t) =>
                          ((e, t, n) =>
                            n.fold(
                              (e) => M.some(dw.remove(e)),
                              (e) => M.some(dw.moveToElement(e)),
                              (n) =>
                                oc(t, n, e)
                                  ? M.none()
                                  : M.some(dw.moveToPosition(n))
                            ))(e, n, t)
                        ))(e, t, r);
            })(e.getBody(), t, e.selection.getRng()).map(
              (n) => () =>
                n.fold(
                  ((e, t) => (n) => (
                    e._selectionOverrides.hideFakeCaret(), gp(e, t, mn(n)), !0
                  ))(e, t),
                  ((e, t) => (n) => {
                    const o = t ? ai.before(n) : ai.after(n);
                    return e.selection.setRng(o.toRange()), !0;
                  })(e, t),
                  ((e) => (t) => (e.selection.setRng(t.toRange()), !0))(e)
                )
            ),
          () => M.some(S)
        );
    },
    fw = (e) => {
      const t = e.dom,
        n = e.selection,
        o = Zp(e.getBody(), n.getNode());
      if (Mo(o) && t.isBlock(o) && t.isEmpty(o)) {
        const e = t.create("br", { "data-mce-bogus": "1" });
        t.setHTML(o, ""), o.appendChild(e), n.setRng(ai.before(e).toRange());
      }
      return !0;
    },
    gw = (e, t) =>
      e.selection.isCollapsed()
        ? mw(e, t)
        : ((e, t) => {
            const n = e.selection.getNode();
            return Io(n) && !Fo(n)
              ? uw(e, n.parentNode)
                  .filter(Io)
                  .fold(
                    () =>
                      M.some(() => {
                        var n;
                        (n = mn(e.getBody())),
                          V(vr(n, ".mce-offscreen-selection"), to),
                          gp(e, t, mn(e.selection.getNode())),
                          _p(e);
                      }),
                    () => M.some(S)
                  )
              : lw(e)
              ? M.some(() => {
                  Np(e, e.selection.getRng(), mn(e.getBody()));
                })
              : M.none();
          })(e, t),
    pw = (e, t) =>
      e.selection.isCollapsed()
        ? ((e, t) => {
            const n = ai.fromRangeStart(e.selection.getRng());
            return Tc(t, e.getBody(), n)
              .filter((e) => (t ? yg(e) : Cg(e)))
              .bind((e) => rc(t ? 0 : -1, e))
              .map((t) => () => e.selection.select(t));
          })(e, t)
        : M.none(),
    hw = Ro,
    bw = (e) => hw(e) && e.data[0] === _r,
    vw = (e) => hw(e) && e.data[e.data.length - 1] === _r,
    yw = (e) => {
      var t;
      return (
        null !== (t = e.ownerDocument) && void 0 !== t ? t : document
      ).createTextNode(_r);
    },
    Cw = (e, t) =>
      e
        ? ((e) => {
            var t;
            if (hw(e.previousSibling))
              return (
                vw(e.previousSibling) || e.previousSibling.appendData(_r),
                e.previousSibling
              );
            if (hw(e)) return bw(e) || e.insertData(0, _r), e;
            {
              const n = yw(e);
              return (
                null === (t = e.parentNode) ||
                  void 0 === t ||
                  t.insertBefore(n, e),
                n
              );
            }
          })(t)
        : ((e) => {
            var t, n;
            if (hw(e.nextSibling))
              return (
                bw(e.nextSibling) || e.nextSibling.insertData(0, _r),
                e.nextSibling
              );
            if (hw(e)) return vw(e) || e.appendData(_r), e;
            {
              const o = yw(e);
              return (
                e.nextSibling
                  ? null === (t = e.parentNode) ||
                    void 0 === t ||
                    t.insertBefore(o, e.nextSibling)
                  : null === (n = e.parentNode) ||
                    void 0 === n ||
                    n.appendChild(o),
                o
              );
            }
          })(t),
    ww = O(Cw, !0),
    xw = O(Cw, !1),
    kw = (e, t) =>
      Ro(e.container()) ? Cw(t, e.container()) : Cw(t, e.getNode()),
    Sw = (e, t) => {
      const n = t.get();
      return n && e.container() === n && Tr(n);
    },
    _w = (e, t) =>
      t.fold(
        (t) => {
          Pd(e.get());
          const n = ww(t);
          return e.set(n), M.some(ai(n, n.length - 1));
        },
        (t) =>
          Ic(t).map((t) => {
            if (Sw(t, e)) {
              const t = e.get();
              return ai(t, 1);
            }
            {
              Pd(e.get());
              const n = kw(t, !0);
              return e.set(n), ai(n, 1);
            }
          }),
        (t) =>
          Fc(t).map((t) => {
            if (Sw(t, e)) {
              const t = e.get();
              return ai(t, t.length - 1);
            }
            {
              Pd(e.get());
              const n = kw(t, !1);
              return e.set(n), ai(n, n.length - 1);
            }
          }),
        (t) => {
          Pd(e.get());
          const n = xw(t);
          return e.set(n), M.some(ai(n, 1));
        }
      ),
    Ew = (e, t) => {
      for (let n = 0; n < e.length; n++) {
        const o = e[n].apply(null, t);
        if (o.isSome()) return o;
      }
      return M.none();
    },
    Nw = Ti([
      { before: ["element"] },
      { start: ["element"] },
      { end: ["element"] },
      { after: ["element"] },
    ]),
    Rw = (e, t) => nc(t, e) || e,
    Aw = (e, t, n) => {
      const o = yp(n),
        r = Rw(t, o.container());
      return bp(e, r, o).fold(
        () =>
          Lc(r, o)
            .bind(O(bp, e, r))
            .map((e) => Nw.before(e)),
        M.none
      );
    },
    Ow = (e, t) => null === jc(e, t),
    Tw = (e, t, n) => bp(e, t, n).filter(O(Ow, t)),
    Bw = (e, t, n) => {
      const o = Cp(n);
      return Tw(e, t, o).bind((e) =>
        Mc(e, o).isNone() ? M.some(Nw.start(e)) : M.none()
      );
    },
    Dw = (e, t, n) => {
      const o = yp(n);
      return Tw(e, t, o).bind((e) =>
        Lc(e, o).isNone() ? M.some(Nw.end(e)) : M.none()
      );
    },
    Pw = (e, t, n) => {
      const o = Cp(n),
        r = Rw(t, o.container());
      return bp(e, r, o).fold(
        () =>
          Mc(r, o)
            .bind(O(bp, e, r))
            .map((e) => Nw.after(e)),
        M.none
      );
    },
    Lw = (e) => {
      return (
        (t = Iw(e)),
        !(
          "rtl" === ta.DOM.getStyle(t, "direction", !0) ||
          ((e) => pp.test(e))(
            null !== (n = t.textContent) && void 0 !== n ? n : ""
          )
        )
      );
      var t, n;
    },
    Mw = (e, t, n) => Ew([Aw, Bw, Dw, Pw], [e, t, n]).filter(Lw),
    Iw = (e) => e.fold(R, R, R, R),
    Fw = (e) => e.fold(N("before"), N("start"), N("end"), N("after")),
    Uw = (e) => e.fold(Nw.before, Nw.before, Nw.after, Nw.after),
    zw = (e) => e.fold(Nw.start, Nw.start, Nw.end, Nw.end),
    jw = (e, t, n, o, r, s) =>
      Dt(bp(t, n, o), bp(t, n, r), (t, o) =>
        t !== o &&
        ((e, t, n) => {
          const o = nc(t, e),
            r = nc(n, e);
          return C(o) && o === r;
        })(n, t, o)
          ? Nw.after(e ? t : o)
          : s
      ).getOr(s),
    Hw = (e, t) =>
      e.fold(L, (e) => {
        return (o = t), !(Fw((n = e)) === Fw(o) && Iw(n) === Iw(o));
        var n, o;
      }),
    $w = (e, t) =>
      e
        ? t.fold(_(M.some, Nw.start), M.none, _(M.some, Nw.after), M.none)
        : t.fold(M.none, _(M.some, Nw.before), M.none, _(M.some, Nw.end)),
    Vw = (e, t, n) => {
      const o = e ? 1 : -1;
      return (
        t.setRng(ai(n.container(), n.offset() + o).toRange()),
        t.getSel().modify("move", e ? "forward" : "backward", "word"),
        !0
      );
    };
  var qw;
  !(function (e) {
    (e[(e.Br = 0)] = "Br"),
      (e[(e.Block = 1)] = "Block"),
      (e[(e.Wrap = 2)] = "Wrap"),
      (e[(e.Eol = 3)] = "Eol");
  })(qw || (qw = {}));
  const Ww = (e, t) => (e === hc.Backwards ? ne(t) : t),
    Kw = (e, t, n) => (e === hc.Forwards ? t.next(n) : t.prev(n)),
    Gw = (e, t, n, o) =>
      Po(o.getNode(t === hc.Forwards))
        ? qw.Br
        : !1 === oc(n, o)
        ? qw.Block
        : qw.Wrap,
    Yw = (e, t, n, o) => {
      const r = Nc(n);
      let s = o;
      const a = [];
      for (; s; ) {
        const n = Kw(t, r, s);
        if (!n) break;
        if (Po(n.getNode(!1)))
          return t === hc.Forwards
            ? {
                positions: Ww(t, a).concat([n]),
                breakType: qw.Br,
                breakAt: M.some(n),
              }
            : { positions: Ww(t, a), breakType: qw.Br, breakAt: M.some(n) };
        if (n.isVisible()) {
          if (e(s, n)) {
            const e = Gw(0, t, s, n);
            return { positions: Ww(t, a), breakType: e, breakAt: M.some(n) };
          }
          a.push(n), (s = n);
        } else s = n;
      }
      return { positions: Ww(t, a), breakType: qw.Eol, breakAt: M.none() };
    },
    Xw = (e, t, n, o) =>
      t(n, o)
        .breakAt.map((o) => {
          const r = t(n, o).positions;
          return e === hc.Backwards ? r.concat(o) : [o].concat(r);
        })
        .getOr([]),
    Qw = (e, t) =>
      Y(
        e,
        (e, n) =>
          e.fold(
            () => M.some(n),
            (o) =>
              Dt(ie(o.getClientRects()), ie(n.getClientRects()), (e, r) => {
                const s = Math.abs(t - e.left);
                return Math.abs(t - r.left) <= s ? n : o;
              }).or(e)
          ),
        M.none()
      ),
    Jw = (e, t) => ie(t.getClientRects()).bind((t) => Qw(e, t.left)),
    Zw = O(Yw, ai.isAbove, -1),
    ex = O(Yw, ai.isBelow, 1),
    tx = O(Xw, -1, Zw),
    nx = O(Xw, 1, ex),
    ox = (e, t) => Jw(tx(e, t), t),
    rx = (e, t) => Jw(nx(e, t), t),
    sx = Io,
    ax = (e, t) => Math.abs(e.left - t),
    ix = (e, t) => Math.abs(e.right - t),
    lx = (e, t) =>
      Oe(e, (e, n) => {
        const o = Math.min(ax(e, t), ix(e, t)),
          r = Math.min(ax(n, t), ix(n, t));
        return (r === o && ke(n, "node") && sx(n.node)) || r < o ? n : e;
      }),
    dx = (e) => {
      const t = (t) =>
        $(t, (t) => {
          const n = Da(t);
          return (n.node = e), n;
        });
      if (yo(e)) return t(e.getClientRects());
      if (Ro(e)) {
        const n = e.ownerDocument.createRange();
        return (
          n.setStart(e, 0), n.setEnd(e, e.data.length), t(n.getClientRects())
        );
      }
      return [];
    },
    cx = (e) => ee(e, dx);
  var ux;
  !(function (e) {
    (e[(e.Up = -1)] = "Up"), (e[(e.Down = 1)] = "Down");
  })(ux || (ux = {}));
  const mx = (e, t, n, o, r, s) => {
      let a = 0;
      const i = [],
        l = (o) => {
          let s = cx([o]);
          -1 === e && (s = s.reverse());
          for (let e = 0; e < s.length; e++) {
            const o = s[e];
            if (!n(o, d)) {
              if ((i.length > 0 && t(o, Be(i)) && a++, (o.line = a), r(o)))
                return !0;
              i.push(o);
            }
          }
          return !1;
        },
        d = Be(s.getClientRects());
      if (!d) return i;
      const c = s.getNode();
      return (
        c &&
          (l(c),
          ((e, t, n, o) => {
            let r = o;
            for (; (r = tc(r, e, Xr, t)); ) if (n(r)) return;
          })(e, o, l, c)),
        i
      );
    },
    fx = O(mx, ux.Up, Ma, Ia),
    gx = O(mx, ux.Down, Ia, Ma),
    px = (e) => Be(e.getClientRects()),
    hx = (e) => (t) => ((e, t) => t.line > e)(e, t),
    bx = (e) => (t) => ((e, t) => t.line === e)(e, t),
    vx = (e, t) => {
      e.selection.setRng(t), hf(e, e.selection.getRng());
    },
    yx = (e, t, n) => M.some(nw(e, t, n)),
    Cx = (e, t, n, o, r, s) => {
      const a = t === hc.Forwards,
        i = Nc(e.getBody()),
        l = O(gc, a ? i.next : i.prev),
        d = a ? o : r;
      if (!n.collapsed) {
        const o = Ua(n);
        if (s(o)) return ew(t, e, o, t === hc.Backwards, !1);
        if (lw(e)) {
          const e = n.cloneRange();
          return e.collapse(t === hc.Backwards), M.from(e);
        }
      }
      const c = mc(t, e.getBody(), n);
      if (d(c)) return tw(e, c.getNode(!a));
      let u = l(c);
      const m = Ur(n);
      if (!u) return m ? M.some(n) : M.none();
      if (((u = vp(a, u)), d(u))) return ew(t, e, u.getNode(!a), a, !1);
      const f = l(u);
      return f && d(f) && pc(u, f)
        ? ew(t, e, f.getNode(!a), a, !1)
        : m
        ? yx(e, u.toRange(), !1)
        : M.none();
    },
    wx = (e, t, n, o, r, s) => {
      const a = mc(t, e.getBody(), n),
        i = Be(a.getClientRects()),
        l = t === ux.Down,
        d = e.getBody();
      if (!i) return M.none();
      if (lw(e)) {
        const e = l ? ai.fromRangeEnd(n) : ai.fromRangeStart(n);
        return (l ? rx : ox)(d, e)
          .orThunk(() => M.from(e))
          .map((e) => e.toRange());
      }
      const c = (l ? gx : fx)(d, hx(1), a),
        u = K(c, bx(1)),
        m = i.left,
        f = lx(u, m);
      if (f && s(f.node)) {
        const n = Math.abs(m - f.left),
          o = Math.abs(m - f.right);
        return ew(t, e, f.node, n < o, !1);
      }
      let g;
      if (((g = o(a) ? a.getNode() : r(a) ? a.getNode(!0) : Ua(n)), g)) {
        const n = ((e, t, n, o) => {
          const r = Nc(t);
          let s, a, i, l;
          const d = [];
          let c = 0;
          1 === e
            ? ((s = r.next), (a = Ia), (i = Ma), (l = ai.after(o)))
            : ((s = r.prev), (a = Ma), (i = Ia), (l = ai.before(o)));
          const u = px(l);
          do {
            if (!l.isVisible()) continue;
            const e = px(l);
            if (i(e, u)) continue;
            d.length > 0 && a(e, Be(d)) && c++;
            const t = Da(e);
            if (((t.position = l), (t.line = c), n(t))) return d;
            d.push(t);
          } while ((l = s(l)));
          return d;
        })(t, d, hx(1), g);
        let o = lx(K(n, bx(1)), m);
        if (o) return yx(e, o.position.toRange(), !1);
        if (((o = Be(K(n, bx(0)))), o)) return yx(e, o.position.toRange(), !1);
      }
      return 0 === u.length
        ? xx(e, l)
            .filter(l ? r : o)
            .map((t) => nw(e, t.toRange(), !1))
        : M.none();
    },
    xx = (e, t) => {
      const n = e.selection.getRng(),
        o = t ? ai.fromRangeEnd(n) : ai.fromRangeStart(n),
        r =
          ((s = o.container()),
          (a = e.getBody()),
          Wo(
            mn(s),
            (e) => $d(e.dom),
            (e) => e.dom === a
          )
            .map((e) => e.dom)
            .getOr(a));
      var s, a;
      if (t) {
        const e = ex(r, o);
        return le(e.positions);
      }
      {
        const e = Zw(r, o);
        return ie(e.positions);
      }
    },
    kx = (e, t, n) =>
      xx(e, t)
        .filter(n)
        .exists((t) => (e.selection.setRng(t.toRange()), !0)),
    Sx = (e, t) => {
      const n = e.dom.createRng();
      n.setStart(t.container(), t.offset()),
        n.setEnd(t.container(), t.offset()),
        e.selection.setRng(n);
    },
    _x = (e, t) => {
      e
        ? t.setAttribute("data-mce-selected", "inline-boundary")
        : t.removeAttribute("data-mce-selected");
    },
    Ex = (e, t, n) => _w(t, n).map((t) => (Sx(e, t), n)),
    Nx = (e, t, n) => {
      const o = e.getBody(),
        r = ((e, t, n) => {
          const o = ai.fromRangeStart(e);
          if (e.collapsed) return o;
          {
            const r = ai.fromRangeEnd(e);
            return n ? Mc(t, r).getOr(r) : Lc(t, o).getOr(o);
          }
        })(e.selection.getRng(), o, n);
      return ((e, t, n, o) => {
        const r = vp(e, o),
          s = Mw(t, n, r);
        return Mw(t, n, r)
          .bind(O($w, e))
          .orThunk(() =>
            ((e, t, n, o, r) => {
              const s = vp(e, r);
              return Tc(e, n, s)
                .map(O(vp, e))
                .fold(
                  () => o.map(Uw),
                  (r) => Mw(t, n, r).map(O(jw, e, t, n, s, r)).filter(O(Hw, o))
                )
                .filter(Lw);
            })(e, t, n, s, o)
          );
      })(n, O(hp, e), o, r).bind((n) => Ex(e, t, n));
    },
    Rx = (e, t, n) => !!Pl(e) && Nx(e, t, n).isSome(),
    Ax = (e, t, n) =>
      !!Pl(t) &&
      ((e, t) => {
        const n = t.selection.getRng(),
          o = e ? ai.fromRangeEnd(n) : ai.fromRangeStart(n);
        return (
          !!((e) => w(e.selection.getSel().modify))(t) &&
          (e && Pr(o)
            ? Vw(!0, t.selection, o)
            : !(e || !Lr(o)) && Vw(!1, t.selection, o))
        );
      })(e, t),
    Ox = (e) => {
      const t = ra(null),
        n = O(hp, e);
      return (
        e.on("NodeChange", (o) => {
          Pl(e) &&
            (((e, t, n) => {
              const o = $(
                  vr(mn(t.getRoot()), '*[data-mce-selected="inline-boundary"]'),
                  (e) => e.dom
                ),
                r = K(o, e),
                s = K(n, e);
              V(oe(r, s), O(_x, !1)), V(oe(s, r), O(_x, !0));
            })(n, e.dom, o.parents),
            ((e, t) => {
              const n = t.get();
              if (e.selection.isCollapsed() && !e.composing && n) {
                const o = ai.fromRangeStart(e.selection.getRng());
                ai.isTextPosition(o) &&
                  !((e) => Pr(e) || Lr(e))(o) &&
                  (Sx(e, Dd(n, o)), t.set(null));
              }
            })(e, t),
            ((e, t, n, o) => {
              if (t.selection.isCollapsed()) {
                const r = K(o, e);
                V(r, (o) => {
                  const r = ai.fromRangeStart(t.selection.getRng());
                  Mw(e, t.getBody(), r).bind((e) => Ex(t, n, e));
                });
              }
            })(n, e, t, o.parents));
        }),
        t
      );
    },
    Tx = O(Ax, !0),
    Bx = O(Ax, !1),
    Dx = (e, t, n) => {
      if (Pl(e)) {
        const o = xx(e, t).getOrThunk(() => {
          const n = e.selection.getRng();
          return t ? ai.fromRangeEnd(n) : ai.fromRangeStart(n);
        });
        return Mw(O(hp, e), e.getBody(), o).exists((t) => {
          const o = Uw(t);
          return _w(n, o).exists((t) => (Sx(e, t), !0));
        });
      }
      return !1;
    },
    Px = (e, t) => (n) => _w(t, n).map((t) => () => Sx(e, t)),
    Lx = (e, t, n, o) => {
      const r = e.getBody(),
        s = O(hp, e);
      e.undoManager.ignore(() => {
        e.selection.setRng(
          ((e, t) => {
            const n = document.createRange();
            return (
              n.setStart(e.container(), e.offset()),
              n.setEnd(t.container(), t.offset()),
              n
            );
          })(n, o)
        ),
          xp(e),
          Mw(s, r, ai.fromRangeStart(e.selection.getRng()))
            .map(zw)
            .bind(Px(e, t))
            .each(D);
      }),
        e.nodeChanged();
    },
    Mx = (e, t, n) => {
      if (e.selection.isCollapsed() && Pl(e)) {
        const o = ai.fromRangeStart(e.selection.getRng());
        return ((e, t, n, o) => {
          const r = ((e, t) => nc(t, e) || e)(e.getBody(), o.container()),
            s = O(hp, e),
            a = Mw(s, r, o);
          return a
            .bind((e) =>
              n
                ? e.fold(N(M.some(zw(e))), M.none, N(M.some(Uw(e))), M.none)
                : e.fold(M.none, N(M.some(Uw(e))), M.none, N(M.some(zw(e))))
            )
            .map(Px(e, t))
            .getOrThunk(() => {
              const i = Bc(n, r, o),
                l = i.bind((e) => Mw(s, r, e));
              return Dt(a, l, () =>
                bp(s, r, o).bind((t) =>
                  ((e) =>
                    Dt(Ic(e), Fc(e), (t, n) => {
                      const o = vp(!0, t),
                        r = vp(!1, n);
                      return Lc(e, o).forall((e) => e.isEqual(r));
                    }).getOr(!0))(t)
                    ? M.some(() => {
                        gp(e, n, mn(t));
                      })
                    : M.none()
                )
              ).getOrThunk(() =>
                l.bind(() =>
                  i.map((r) => () => {
                    n ? Lx(e, t, o, r) : Lx(e, t, r, o);
                  })
                )
              );
            });
        })(e, t, n, o);
      }
      return M.none();
    },
    Ix = (e) => 1 === Tn(e),
    Fx = (e, t) => {
      const n = mn(e.getBody()),
        o = mn(e.selection.getStart()),
        r = K(
          ((e, t) => {
            const n = Rg(t, e);
            return J(n, nr).fold(N(n), (e) => n.slice(0, e));
          })(n, o),
          Ix
        );
      return le(r).bind((n) => {
        const o = ai.fromRangeStart(e.selection.getRng());
        return !((e, t, n) =>
          Dt(Ic(n), Fc(n), (o, r) => {
            const s = vp(!0, o),
              a = vp(!1, r),
              i = vp(!1, t);
            return e
              ? Lc(n, i).exists((e) => e.isEqual(a) && t.isEqual(s))
              : Mc(n, i).exists((e) => e.isEqual(s) && t.isEqual(a));
          }).getOr(!0))(t, o, n.dom) ||
          (zc((s = n).dom) && Dh(s.dom))
          ? M.none()
          : M.some(() =>
              ((e, t, n, o) => {
                const r = O(jh, t),
                  s = $(K(o, r), (e) => e.dom);
                if (0 === s.length) gp(t, e, n);
                else {
                  const e = ((e, t) => {
                    const n = Lh(!1),
                      o = Uh(t, n.dom);
                    return Yn(mn(e), n), to(mn(e)), ai(o, 0);
                  })(n.dom, s);
                  t.selection.setRng(e.toRange());
                }
              })(t, e, n, r)
            );
        var s;
      });
    },
    Ux = (e, t) => (e.selection.isCollapsed() ? Fx(e, t) : M.none()),
    zx = (e, t, n) =>
      C(n)
        ? M.some(() => {
            e._selectionOverrides.hideFakeCaret(), gp(e, t, mn(n));
          })
        : M.none(),
    jx = (e, t) =>
      e.selection.isCollapsed()
        ? ((e, t) => {
            const n = t ? wg : xg,
              o = t ? hc.Forwards : hc.Backwards,
              r = mc(o, e.getBody(), e.selection.getRng());
            return n(r)
              ? zx(e, t, r.getNode(!t))
              : M.from(vp(t, r))
                  .filter((e) => n(e) && pc(r, e))
                  .bind((n) => zx(e, t, n.getNode(!t)));
          })(e, t)
        : ((e, t) => {
            const n = e.selection.getNode();
            return zo(n) ? zx(e, t, n) : M.none();
          })(e, t),
    Hx = (e) => Ge(null != e ? e : "").getOr(0),
    $x = (e, t) =>
      (e || "table" === Lt(t) ? "margin" : "padding") +
      ("rtl" === Vn(t, "direction") ? "-right" : "-left"),
    Vx = (e) => {
      const t = Wx(e);
      return (
        !e.mode.isReadOnly() &&
        (t.length > 1 ||
          ((e, t) =>
            te(t, (t) => {
              const n = $x(vl(e), t),
                o = Wn(t, n).map(Hx).getOr(0);
              return "false" !== e.dom.getContentEditable(t.dom) && o > 0;
            }))(e, t))
      );
    },
    qx = (e) => ar(e) || ir(e),
    Wx = (e) => {
      return K(
        ((t = e.selection.getSelectedBlocks()), $(t, mn)),
        (e) =>
          !qx(e) &&
          !((e) => xn(e).exists(qx))(e) &&
          Ko(e, (e) => Mo(e.dom) || Io(e.dom)).exists((e) => Mo(e.dom))
      );
      var t;
    },
    Kx = (e, t) => {
      var n, o;
      const { dom: r } = e,
        s = yl(e),
        a =
          null !==
            (o =
              null === (n = /[a-z%]+$/i.exec(s)) || void 0 === n
                ? void 0
                : n[0]) && void 0 !== o
            ? o
            : "px",
        i = Hx(s),
        l = vl(e);
      V(Wx(e), (e) => {
        ((e, t, n, o, r, s) => {
          const a = $x(n, mn(s)),
            i = Hx(e.getStyle(s, a));
          if ("outdent" === t) {
            const t = Math.max(0, i - o);
            e.setStyle(s, a, t ? t + r : "");
          } else {
            const t = i + o + r;
            e.setStyle(s, a, t);
          }
        })(r, t, l, i, a, e.dom);
      });
    },
    Gx = (e) => Kx(e, "outdent"),
    Yx = (e) => {
      if (e.selection.isCollapsed() && Vx(e)) {
        const t = e.dom,
          n = e.selection.getRng(),
          o = ai.fromRangeStart(n),
          r = t.getParent(n.startContainer, t.isBlock);
        if (null !== r && Dg(mn(r), o)) return M.some(() => Gx(e));
      }
      return M.none();
    },
    Xx = (e, t, n) =>
      ce([Yx, gw, aw, (e, n) => Mx(e, t, n), XC, Jp, pw, jx, ZC, Ux], (t) =>
        t(e, n)
      ),
    Qx = (e, t) => {
      e.addCommand("delete", () => {
        ((e, t) => {
          Xx(e, t, !1).fold(() => {
            xp(e), _p(e);
          }, D);
        })(e, t);
      }),
        e.addCommand("forwardDelete", () => {
          ((e, t) => {
            Xx(e, t, !0).fold(() => ((e) => wp(e, "ForwardDelete"))(e), D);
          })(e, t);
        });
    },
    Jx = (e) =>
      void 0 === e.touches || 1 !== e.touches.length
        ? M.none()
        : M.some(e.touches[0]),
    Zx = (e, t) => xe(e, t.nodeName),
    ek = (e, t) => !!Ro(t) || (!!yo(t) && !Zx(e, t) && !Zc(t)),
    tk = (e, t) => {
      if (Ro(t)) {
        if (0 === t.data.length) return !0;
        if (/^\s+$/.test(t.data) && (!t.nextSibling || Zx(e, t.nextSibling)))
          return !0;
      }
      return !1;
    },
    nk = (e) => e.dom.create(Ji(e), Zi(e)),
    ok = (e) => {
      const t = e.dom,
        n = e.selection,
        o = e.schema,
        r = o.getBlockElements(),
        s = n.getStart(),
        a = e.getBody();
      let i,
        l,
        d = !1;
      const c = Ji(e);
      if (!s || !yo(s)) return;
      const u = a.nodeName.toLowerCase();
      if (
        !o.isValidChild(u, c.toLowerCase()) ||
        ((e, t, n) => H(Ng(mn(n), mn(t)), (t) => Zx(e, t.dom)))(r, a, s)
      )
        return;
      const m = n.getRng(),
        {
          startContainer: f,
          startOffset: g,
          endContainer: p,
          endOffset: h,
        } = m,
        b = If(e);
      let v = a.firstChild;
      for (; v; )
        if (ek(r, v)) {
          if (tk(r, v)) {
            (l = v), (v = v.nextSibling), t.remove(l);
            continue;
          }
          i || ((i = nk(e)), a.insertBefore(i, v), (d = !0)),
            (l = v),
            (v = v.nextSibling),
            i.appendChild(l);
        } else (i = null), (v = v.nextSibling);
      d &&
        b &&
        (m.setStart(f, g), m.setEnd(p, h), n.setRng(m), e.nodeChanged());
    },
    rk = (e, t, n) => {
      const o = mn(nk(e)),
        r = xr();
      Jn(o, r), n(t, o);
      const s = document.createRange();
      return s.setStartBefore(r.dom), s.setEndBefore(r.dom), s;
    },
    sk = (e) => (t) => -1 !== (" " + t.attr("class") + " ").indexOf(e),
    ak = (e, t, n) =>
      function (o) {
        const r = arguments,
          s = r[r.length - 2],
          a = s > 0 ? t.charAt(s - 1) : "";
        if ('"' === a) return o;
        if (">" === a) {
          const e = t.lastIndexOf("<", s);
          if (
            -1 !== e &&
            -1 !== t.substring(e, s).indexOf('contenteditable="false"')
          )
            return o;
        }
        return (
          '<span class="' +
          n +
          '" data-mce-content="' +
          e.dom.encode(r[0]) +
          '">' +
          e.dom.encode("string" == typeof r[1] ? r[1] : r[0]) +
          "</span>"
        );
      },
    ik = (e, t) => {
      t.hasAttribute("data-mce-caret") &&
        (Fr(t),
        e.selection.setRng(e.selection.getRng()),
        e.selection.scrollIntoView(t));
    },
    lk = (e, t) => {
      const n = ((e) =>
        Yo(mn(e.getBody()), "*[data-mce-caret]")
          .map((e) => e.dom)
          .getOrNull())(e);
      if (n)
        return "compositionstart" === t.type
          ? (t.preventDefault(), t.stopPropagation(), void ik(e, n))
          : void (Dr(n) && (ik(e, n), e.undoManager.add()));
    },
    dk = Io,
    ck = (e, t, n) => {
      const o = Nc(e.getBody()),
        r = O(gc, 1 === t ? o.next : o.prev);
      if (n.collapsed) {
        const o = e.dom.getParent(n.startContainer, "PRE");
        if (!o) return;
        if (!r(ai.fromRangeStart(n))) {
          const n = mn(
            ((e) => {
              const t = e.dom.create(Ji(e));
              return (t.innerHTML = '<br data-mce-bogus="1">'), t;
            })(e)
          );
          1 === t ? Xn(mn(o), n) : Yn(mn(o), n),
            e.selection.select(n.dom, !0),
            e.selection.collapse();
        }
      }
    },
    uk = (e, t) =>
      ((e, t) => {
        const n = t ? hc.Forwards : hc.Backwards,
          o = e.selection.getRng();
        return ((e, t, n) => Cx(t, e, n, _g, Eg, dk))(n, e, o).orThunk(
          () => (ck(e, n, o), M.none())
        );
      })(e, t).exists((t) => (vx(e, t), !0)),
    mk = (e, t) =>
      ((e, t) => {
        const n = t ? 1 : -1,
          o = e.selection.getRng();
        return ((e, t, n) =>
          wx(
            t,
            e,
            n,
            (e) => _g(e) || kg(e),
            (e) => Eg(e) || Sg(e),
            dk
          ))(n, e, o).orThunk(() => (ck(e, n, o), M.none()));
      })(e, t).exists((t) => (vx(e, t), !0)),
    fk = (e, t) => kx(e, t, t ? Eg : _g),
    gk = (e, t) =>
      iw(e, !t)
        .map((n) => {
          const o = n.toRange(),
            r = e.selection.getRng();
          return (
            t
              ? o.setStart(r.startContainer, r.startOffset)
              : o.setEnd(r.endContainer, r.endOffset),
            o
          );
        })
        .exists((t) => (vx(e, t), !0)),
    pk = (e) => j(["figcaption"], Lt(e)),
    hk = (e, t) => {
      const n = mn(e.getBody()),
        o = ai.fromRangeStart(e.selection.getRng());
      return ((e, t) => {
        const n = O(bn, t);
        return Ko(mn(e.container()), nr, n).filter(pk);
      })(o, n).exists(() => {
        if (
          ((e, t, n) =>
            t
              ? ((e, t) => ex(e, t).breakAt.isNone())(e.dom, n)
              : ((e, t) => Zw(e, t).breakAt.isNone())(e.dom, n))(n, t, o)
        ) {
          const o = rk(e, n, t ? Jn : Qn);
          return e.selection.setRng(o), !0;
        }
        return !1;
      });
    },
    bk = (e, t) => !!e.selection.isCollapsed() && hk(e, t),
    vk = { shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0 },
    yk = (e, t) =>
      t.keyCode === e.keyCode &&
      t.shiftKey === e.shiftKey &&
      t.altKey === e.altKey &&
      t.ctrlKey === e.ctrlKey &&
      t.metaKey === e.metaKey,
    Ck =
      (e, ...t) =>
      () =>
        e.apply(null, t),
    wk = (e, t) =>
      Q(
        ((e, t) =>
          ee(((e) => $(e, (e) => ({ ...vk, ...e })))(e), (e) =>
            yk(e, t) ? [e] : []
          ))(e, t),
        (e) => e.action()
      ),
    xk = (e, t) =>
      ce(
        ((e, t) =>
          ee(((e) => $(e, (e) => ({ ...vk, ...e })))(e), (e) =>
            yk(e, t) ? [e] : []
          ))(e, t),
        (e) => e.action()
      ),
    kk = (e, t) => {
      const n = t ? hc.Forwards : hc.Backwards,
        o = e.selection.getRng();
      return Cx(e, n, o, wg, xg, zo).exists((t) => (vx(e, t), !0));
    },
    Sk = (e, t) => {
      const n = t ? 1 : -1,
        o = e.selection.getRng();
      return wx(e, n, o, wg, xg, zo).exists((t) => (vx(e, t), !0));
    },
    _k = (e, t) => kx(e, t, t ? xg : wg),
    Ek = Ti([
      { none: ["current"] },
      { first: ["current"] },
      { middle: ["current", "target"] },
      { last: ["current"] },
    ]),
    Nk = { ...Ek, none: (e) => Ek.none(e) },
    Rk = (e, t, n) =>
      ee(Nn(e), (e) => (pn(e, t) ? (n(e) ? [e] : []) : Rk(e, t, n))),
    Ak = (e, t) => Xo(e, "table", t),
    Ok = (e, t, n, o, r = L) => {
      const s = 1 === o;
      if (!s && n <= 0) return Nk.first(e[0]);
      if (s && n >= e.length - 1) return Nk.last(e[e.length - 1]);
      {
        const s = n + o,
          a = e[s];
        return r(a) ? Nk.middle(t, a) : Ok(e, t, s, o, r);
      }
    },
    Tk = (e, t) =>
      Ak(e, t).bind((t) => {
        const n = Rk(t, "th,td", L);
        return J(n, (t) => bn(e, t)).map((e) => ({ index: e, all: n }));
      }),
    Bk = (e, t = !1) => {
      return zn(e)
        ? e.dom.isContentEditable
        : ((n = e), Xo(n, "[contenteditable]")).fold(
            N(t),
            (e) => "true" === Dk(e)
          );
      var n;
    },
    Dk = (e) => e.dom.contentEditable,
    Pk = (e, t, n, o, r) => {
      const s = vr(mn(n), "td,th,caption").map((e) => e.dom),
        a = K(
          ((e, t) =>
            ee(t, (t) => {
              const n = ((e, t) => ({
                left: e.left - t,
                top: e.top - t,
                right: e.right + -2,
                bottom: e.bottom + -2,
                width: e.width + t,
                height: e.height + t,
              }))(Da(t.getBoundingClientRect()), -1);
              return [
                { x: n.left, y: e(n), cell: t },
                { x: n.right, y: e(n), cell: t },
              ];
            }))(e, s),
          (e) => t(e, r)
        );
      return ((e, t, n) =>
        Y(
          e,
          (e, o) =>
            e.fold(
              () => M.some(o),
              (e) => {
                const r = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
                  s = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
                return M.some(s < r ? o : e);
              }
            ),
          M.none()
        ))(a, o, r).map((e) => e.cell);
    },
    Lk = O(
      Pk,
      (e) => e.bottom,
      (e, t) => e.y < t
    ),
    Mk = O(
      Pk,
      (e) => e.top,
      (e, t) => e.y > t
    ),
    Ik = (e, t, n) => {
      const o = e(t, n);
      return ((e) => e.breakType === qw.Wrap && 0 === e.positions.length)(o) ||
        (!Po(n.getNode()) &&
          ((e) => e.breakType === qw.Br && 1 === e.positions.length)(o))
        ? !((e, t, n) => n.breakAt.exists((n) => e(t, n).breakAt.isSome()))(
            e,
            t,
            o
          )
        : o.breakAt.isNone();
    },
    Fk = O(Ik, Zw),
    Uk = O(Ik, ex),
    zk = (e, t, n, o) => {
      const r = e.selection.getRng(),
        s = t ? 1 : -1;
      return !(
        !zd() ||
        !((e, t, n) => {
          const o = ai.fromRangeStart(t);
          return Pc(!e, n).exists((e) => e.isEqual(o));
        })(t, r, n) ||
        (ew(s, e, n, !t, !1).each((t) => {
          vx(e, t);
        }),
        0)
      );
    },
    jk = (e, t, n) => {
      const o = ((e, t) => {
          const n = t.getNode(e);
          return _o(n) ? M.some(n) : M.none();
        })(!!t, n),
        r = !1 === t;
      o.fold(
        () => vx(e, n.toRange()),
        (o) =>
          Pc(r, e.getBody())
            .filter((e) => e.isEqual(n))
            .fold(
              () => vx(e, n.toRange()),
              (n) =>
                ((e, t, n) => {
                  t.undoManager.transact(() => {
                    const o = e ? Xn : Yn,
                      r = rk(t, mn(n), o);
                    vx(t, r);
                  });
                })(t, e, o)
            )
      );
    },
    Hk = (e, t, n, o) => {
      const r = e.selection.getRng(),
        s = ai.fromRangeStart(r),
        a = e.getBody();
      if (!t && Fk(o, s)) {
        const o = ((e, t, n) =>
          ((e, t) =>
            ie(t.getClientRects())
              .bind((t) => Lk(e, t.left, t.top))
              .bind((e) => {
                return Jw(
                  Fc((n = e))
                    .map((e) => Zw(n, e).positions.concat(e))
                    .getOr([]),
                  t
                );
                var n;
              }))(t, n)
            .orThunk(() =>
              ie(n.getClientRects()).bind((n) =>
                Qw(tx(e, ai.before(t)), n.left)
              )
            )
            .getOr(ai.before(t)))(a, n, s);
        return jk(e, t, o), !0;
      }
      if (t && Uk(o, s)) {
        const o = ((e, t, n) =>
          ((e, t) =>
            le(t.getClientRects())
              .bind((t) => Mk(e, t.left, t.top))
              .bind((e) => {
                return Jw(
                  Ic((n = e))
                    .map((e) => [e].concat(ex(n, e).positions))
                    .getOr([]),
                  t
                );
                var n;
              }))(t, n)
            .orThunk(() =>
              ie(n.getClientRects()).bind((n) => Qw(nx(e, ai.after(t)), n.left))
            )
            .getOr(ai.after(t)))(a, n, s);
        return jk(e, t, o), !0;
      }
      return !1;
    },
    $k = (e, t, n) =>
      M.from(e.dom.getParent(e.selection.getNode(), "td,th"))
        .bind((o) =>
          M.from(e.dom.getParent(o, "table")).map((r) => n(e, t, r, o))
        )
        .getOr(!1),
    Vk = (e, t) => $k(e, t, zk),
    qk = (e, t) => $k(e, t, Hk),
    Wk = (e, t, n) =>
      n.fold(
        M.none,
        M.none,
        (e, t) => {
          return ((n = t),
          ((e, t) => {
            const n = (e) => {
              for (let o = 0; o < e.childNodes.length; o++) {
                const r = mn(e.childNodes[o]);
                if (t(r)) return M.some(r);
                const s = n(e.childNodes[o]);
                if (s.isSome()) return s;
              }
              return M.none();
            };
            return n(e.dom);
          })(n, qf)).map((e) =>
            ((e) => {
              const t = Bm.exact(e, 0, e, 0);
              return Im(t);
            })(e)
          );
          var n;
        },
        (n) => (e.execCommand("mceTableInsertRowAfter"), Kk(e, t, n))
      ),
    Kk = (e, t, n) => {
      return Wk(
        e,
        t,
        ((r = Bk),
        Tk((o = n), void 0).fold(
          () => Nk.none(o),
          (e) => Ok(e.all, o, e.index, 1, r)
        ))
      );
      var o, r;
    },
    Gk = (e, t, n) => {
      return Wk(
        e,
        t,
        ((r = Bk),
        Tk((o = n), void 0).fold(
          () => Nk.none(),
          (e) => Ok(e.all, o, e.index, -1, r)
        ))
      );
      var o, r;
    },
    Yk = (e, t) => {
      const n = ["table", "li", "dl"],
        o = mn(e.getBody()),
        r = (e) => {
          const t = Lt(e);
          return bn(e, o) || j(n, t);
        },
        s = e.selection.getRng();
      return ((e, t) =>
        ((e, t, n = P) =>
          n(t)
            ? M.none()
            : j(e, Lt(t))
            ? M.some(t)
            : Go(t, e.join(","), (e) => pn(e, "table") || n(e)))(
          ["td", "th"],
          e,
          t
        ))(mn(t ? s.endContainer : s.startContainer), r)
        .map(
          (n) => (
            Ak(n, r).each((t) => {
              e.model.table.clearSelectedCells(t.dom);
            }),
            e.selection.collapse(!t),
            (t ? Kk : Gk)(e, r, n).each((t) => {
              e.selection.setRng(t);
            }),
            !0
          )
        )
        .getOr(!1);
    },
    Xk = (e, t) => ({ container: e, offset: t }),
    Qk = ta.DOM,
    Jk = (e) => (t) => e === t ? -1 : 0,
    Zk = (e, t, n) => {
      if (Ro(e) && t >= 0) return M.some(Xk(e, t));
      {
        const o = Ta(Qk);
        return M.from(o.backwards(e, t, Jk(e), n)).map((e) =>
          Xk(e.container, e.container.data.length)
        );
      }
    },
    eS = (e, t, n) => {
      if (!Ro(e)) return M.none();
      const o = e.data;
      if (t >= 0 && t <= o.length) return M.some(Xk(e, t));
      {
        const o = Ta(Qk);
        return M.from(o.backwards(e, t, Jk(e), n)).bind((e) => {
          const o = e.container.data;
          return eS(e.container, t + o.length, n);
        });
      }
    },
    tS = (e, t, n) => {
      if (!Ro(e)) return M.none();
      const o = e.data;
      if (t <= o.length) return M.some(Xk(e, t));
      {
        const r = Ta(Qk);
        return M.from(r.forwards(e, t, Jk(e), n)).bind((e) =>
          tS(e.container, t - o.length, n)
        );
      }
    },
    nS = (e, t, n, o, r) => {
      const s = Ta(
        e,
        (
          (e) => (t) =>
            e.isBlock(t) ||
            j(["BR", "IMG", "HR", "INPUT"], t.nodeName) ||
            "false" === e.getContentEditable(t)
        )(e)
      );
      return M.from(s.backwards(t, n, o, r));
    },
    oS = (e) => Nr(e.toString().replace(/\u00A0/g, " ")),
    rS = (e) => "" !== e && -1 !== " \xa0\f\n\r\t\v".indexOf(e),
    sS = (e, t) => e.substring(t.length),
    aS = (e, t, n, o = 0) => {
      return ((r = mn(t.startContainer)), Xo(r, Wf)).fold(
        () =>
          ((e, t, n, o = 0) => {
            if (!(r = t).collapsed || !Ro(r.startContainer)) return M.none();
            var r;
            const s = { text: "", offset: 0 },
              a = e.getParent(t.startContainer, e.isBlock) || e.getRoot();
            return nS(
              e,
              t.startContainer,
              t.startOffset,
              (e, t, o) => (
                (s.text = o + s.text),
                (s.offset += t),
                ((e, t, n) => {
                  let o;
                  const r = n.charAt(0);
                  for (o = t - 1; o >= 0; o--) {
                    const s = e.charAt(o);
                    if (rS(s)) return M.none();
                    if (r === s && Ue(e, n, o, t)) break;
                  }
                  return M.some(o);
                })(s.text, s.offset, n).getOr(t)
              ),
              a
            ).bind((e) => {
              const r = t.cloneRange();
              if (
                (r.setStart(e.container, e.offset),
                r.setEnd(t.endContainer, t.endOffset),
                r.collapsed)
              )
                return M.none();
              const s = oS(r);
              return 0 !== s.lastIndexOf(n) || sS(s, n).length < o
                ? M.none()
                : M.some({ text: sS(s, n), range: r, trigger: n });
            });
          })(e, t, n, o),
        (t) => {
          const o = e.createRng();
          o.selectNode(t.dom);
          const r = oS(o);
          return M.some({ range: o, text: sS(r, n), trigger: n });
        }
      );
      var r;
    },
    iS = (e) => {
      if (((e) => 3 === e.nodeType)(e)) return Xk(e, e.data.length);
      {
        const t = e.childNodes;
        return t.length > 0 ? iS(t[t.length - 1]) : Xk(e, t.length);
      }
    },
    lS = (e, t) => {
      const n = e.childNodes;
      return n.length > 0 && t < n.length
        ? lS(n[t], 0)
        : n.length > 0 && ((e) => 1 === e.nodeType)(e) && n.length === t
        ? iS(n[n.length - 1])
        : Xk(e, t);
    },
    dS = (e, t, n, o = {}) => {
      var r;
      const s = t(),
        a =
          null !== (r = e.selection.getRng().startContainer.nodeValue) &&
          void 0 !== r
            ? r
            : "",
        i = K(
          s.lookupByTrigger(n.trigger),
          (t) =>
            n.text.length >= t.minChars &&
            t.matches.getOrThunk(() =>
              ((e) => (t) => {
                const n = lS(t.startContainer, t.startOffset);
                return !((e, t) => {
                  var n;
                  const o =
                    null !== (n = e.getParent(t.container, e.isBlock)) &&
                    void 0 !== n
                      ? n
                      : e.getRoot();
                  return nS(
                    e,
                    t.container,
                    t.offset,
                    (e, t) => (0 === t ? -1 : t),
                    o
                  )
                    .filter((e) => {
                      const t = e.container.data.charAt(e.offset - 1);
                      return !rS(t);
                    })
                    .isSome();
                })(e, n);
              })(e.dom)
            )(n.range, a, n.text)
        );
      if (0 === i.length) return M.none();
      const l = Promise.all(
        $(i, (e) =>
          e
            .fetch(n.text, e.maxResults, o)
            .then((t) => ({
              matchText: n.text,
              items: t,
              columns: e.columns,
              onAction: e.onAction,
              highlightOn: e.highlightOn,
            }))
        )
      );
      return M.some({ lookupData: l, context: n });
    };
  var cS;
  !(function (e) {
    (e[(e.Error = 0)] = "Error"), (e[(e.Value = 1)] = "Value");
  })(cS || (cS = {}));
  const uS = (e, t, n) => (e.stype === cS.Error ? t(e.serror) : n(e.svalue)),
    mS = (e) => ({ stype: cS.Value, svalue: e }),
    fS = (e) => ({ stype: cS.Error, serror: e }),
    gS = uS,
    pS = (e) =>
      f(e) && ue(e).length > 100
        ? " removed due to size"
        : JSON.stringify(e, null, 2),
    hS = (e, t) => fS([{ path: e, getErrorInfo: t }]),
    bS = (e, t) => ({
      extract: (n, o) =>
        we(o, e).fold(
          () =>
            ((e, t) =>
              hS(
                e,
                () => 'Choice schema did not contain choice key: "' + t + '"'
              ))(n, e),
          (e) =>
            ((e, t, n, o) =>
              we(n, o).fold(
                () =>
                  ((e, t, n) =>
                    hS(
                      e,
                      () =>
                        'The chosen schema: "' +
                        n +
                        '" did not exist in branches: ' +
                        pS(t)
                    ))(e, n, o),
                (n) => n.extract(e.concat(["branch: " + o]), t)
              ))(n, o, t, e)
        ),
      toString: () => "chooseOn(" + e + "). Possible values: " + ue(t),
    }),
    vS =
      (e) =>
      (...t) => {
        if (0 === t.length) throw new Error("Can't merge zero objects");
        const n = {};
        for (let o = 0; o < t.length; o++) {
          const r = t[o];
          for (const t in r) xe(r, t) && (n[t] = e(n[t], r[t]));
        }
        return n;
      },
    yS = vS((e, t) => (g(e) && g(t) ? yS(e, t) : t)),
    CS = (vS((e, t) => t), (e) => ({ tag: "defaultedThunk", process: N(e) })),
    wS = (e) => {
      const t = ((e) => {
        const t = [],
          n = [];
        return (
          V(e, (e) => {
            uS(
              e,
              (e) => n.push(e),
              (e) => t.push(e)
            );
          }),
          { values: t, errors: n }
        );
      })(e);
      return t.errors.length > 0 ? ((n = t.errors), _(fS, Z)(n)) : mS(t.values);
      var n;
    },
    xS = (e, t, n) => {
      switch (e.tag) {
        case "field":
          return t(e.key, e.newKey, e.presence, e.prop);
        case "custom":
          return n(e.newKey, e.instantiator);
      }
    },
    kS = (e) => ({
      extract: (t, n) => {
        return (
          (o = e(n)),
          (r = (e) => ((e, t) => hS(e, N(t)))(t, e)),
          o.stype === cS.Error ? r(o.serror) : o
        );
        var o, r;
      },
      toString: N("val"),
    }),
    SS = kS(mS),
    _S = (e, t, n, o) => o(we(e, t).getOrThunk(() => n(e))),
    ES = (e, t, n, o, r) => {
      const s = (e) => r.extract(t.concat([o]), e),
        a = (e) =>
          e.fold(
            () => mS(M.none()),
            (e) => {
              const n = r.extract(t.concat([o]), e);
              return (
                (s = n),
                (a = M.some),
                s.stype === cS.Value
                  ? { stype: cS.Value, svalue: a(s.svalue) }
                  : s
              );
              var s, a;
            }
          );
      switch (e.tag) {
        case "required":
          return ((e, t, n, o) =>
            we(t, n).fold(
              () =>
                ((e, t, n) =>
                  hS(
                    e,
                    () =>
                      'Could not find valid *required* value for "' +
                      t +
                      '" in ' +
                      pS(n)
                  ))(e, n, t),
              o
            ))(t, n, o, s);
        case "defaultedThunk":
          return _S(n, o, e.process, s);
        case "option":
          return ((e, t, n) => n(we(e, t)))(n, o, a);
        case "defaultedOptionThunk":
          return ((e, t, n, o) =>
            o(we(e, t).map((t) => (!0 === t ? n(e) : t))))(n, o, e.process, a);
        case "mergeWithThunk":
          return _S(n, o, N({}), (t) => {
            const o = yS(e.process(n), t);
            return s(o);
          });
      }
    },
    NS = (e) => ({
      extract: (t, n) =>
        ((e, t, n) => {
          const o = {},
            r = [];
          for (const s of n)
            xS(
              s,
              (n, s, a, i) => {
                const l = ES(a, e, t, n, i);
                gS(
                  l,
                  (e) => {
                    r.push(...e);
                  },
                  (e) => {
                    o[s] = e;
                  }
                );
              },
              (e, n) => {
                o[e] = n(t);
              }
            );
          return r.length > 0 ? fS(r) : mS(o);
        })(t, n, e),
      toString: () => {
        const t = $(e, (e) =>
          xS(
            e,
            (e, t, n, o) => e + " -> " + o.toString(),
            (e, t) => "state(" + e + ")"
          )
        );
        return "obj{\n" + t.join("\n") + "}";
      },
    }),
    RS = (e) => ({
      extract: (t, n) => {
        const o = $(n, (n, o) => e.extract(t.concat(["[" + o + "]"]), n));
        return wS(o);
      },
      toString: () => "array(" + e.toString() + ")",
    }),
    AS = (e, t, n) => {
      return (
        (o = ((e, t, n) =>
          ((e, t) =>
            e.stype === cS.Error
              ? { stype: cS.Error, serror: t(e.serror) }
              : e)(t.extract([e], n), (e) => ({ input: n, errors: e })))(
          e,
          t,
          n
        )),
        uS(o, Oi.error, Oi.value)
      );
      var o;
    },
    OS = (e, t) => bS(e, ge(t, NS)),
    TS = N(SS),
    BS = (e, t) =>
      kS((n) => {
        const o = typeof n;
        return e(n) ? mS(n) : fS(`Expected type: ${t} but got: ${o}`);
      }),
    DS = BS(x, "number"),
    PS = BS(m, "string"),
    LS = BS(b, "boolean"),
    MS = BS(w, "function"),
    IS = (e, t, n, o) => ({
      tag: "field",
      key: e,
      newKey: t,
      presence: n,
      prop: o,
    }),
    FS = (e, t) => ({ tag: "custom", newKey: e, instantiator: t }),
    US = (e, t) => IS(e, e, { tag: "required", process: {} }, t),
    zS = (e) => US(e, PS),
    jS = (e) => US(e, MS),
    HS = (e, t) => IS(e, e, { tag: "option", process: {} }, t),
    $S = (e) => HS(e, PS),
    VS = (e, t, n) => IS(e, e, CS(t), n),
    qS = (e, t) => VS(e, t, DS),
    WS = (e, t, n) =>
      VS(
        e,
        t,
        ((e) => {
          return (
            (t = (t) =>
              j(e, t)
                ? Oi.value(t)
                : Oi.error(
                    `Unsupported value: "${t}", choose one of "${e.join(
                      ", "
                    )}".`
                  )),
            kS((e) => t(e).fold(fS, mS))
          );
          var t;
        })(n)
      ),
    KS = (e, t) => VS(e, t, LS),
    GS = (e, t) => VS(e, t, MS),
    YS = zS("type"),
    XS = jS("fetch"),
    QS = jS("onAction"),
    JS = GS("onSetup", () => S),
    ZS = $S("text"),
    e_ = $S("icon"),
    t_ = $S("tooltip"),
    n_ = $S("label"),
    o_ = KS("active", !1),
    r_ = KS("enabled", !0),
    s_ = KS("primary", !1),
    a_ = (e) => ((e, t) => VS("type", t, PS))(0, e),
    i_ = NS([
      YS,
      zS("trigger"),
      qS("minChars", 1),
      (1, ((e, t) => IS(e, e, CS(1), TS()))("columns")),
      qS("maxResults", 10),
      ("matches", HS("matches", MS)),
      XS,
      QS,
      ((l_ = PS), VS("highlightOn", [], RS(l_))),
    ]);
  var l_;
  const d_ = [r_, t_, e_, ZS, JS],
    c_ = [o_].concat(d_),
    u_ = [
      GS("predicate", P),
      WS("scope", "node", ["node", "editor"]),
      WS("position", "selection", ["node", "selection", "line"]),
    ],
    m_ = d_.concat([a_("contextformbutton"), s_, QS, FS("original", R)]),
    f_ = c_.concat([a_("contextformbutton"), s_, QS, FS("original", R)]),
    g_ = d_.concat([a_("contextformbutton")]),
    p_ = c_.concat([a_("contextformtogglebutton")]),
    h_ = OS("type", { contextformbutton: m_, contextformtogglebutton: f_ });
  NS(
    [
      a_("contextform"),
      GS("initValue", N("")),
      n_,
      ((e, t) => IS(e, e, { tag: "required", process: {} }, RS(t)))(
        "commands",
        h_
      ),
      HS(
        "launch",
        OS("type", { contextformbutton: g_, contextformtogglebutton: p_ })
      ),
    ].concat(u_)
  );
  const b_ = (e) => {
      const t = e.ui.registry.getAll().popups,
        n = ge(t, (e) => {
          return ((t = e),
          AS("Autocompleter", i_, { trigger: t.ch, ...t })).fold((e) => {
            throw new Error(
              "Errors: \n" +
                ((e) => {
                  const t =
                    e.length > 10
                      ? e
                          .slice(0, 10)
                          .concat([
                            {
                              path: [],
                              getErrorInfo: N(
                                "... (only showing first ten failures)"
                              ),
                            },
                          ])
                      : e;
                  return $(
                    t,
                    (e) =>
                      "Failed path: (" +
                      e.path.join(" > ") +
                      ")\n" +
                      e.getErrorInfo()
                  );
                })((t = e).errors).join("\n") +
                "\n\nInput object: " +
                pS(t.input)
            );
            var t;
          }, R);
          var t;
        }),
        o = Se(ye(n, (e) => e.trigger)),
        r = Ce(n);
      return {
        dataset: n,
        triggers: o,
        lookupByTrigger: (e) => K(r, (t) => t.trigger === e),
      };
    },
    v_ = (e) => {
      const t = ua(),
        n = ra(!1),
        o = t.isSet,
        r = () => {
          o() &&
            (((e) => {
              Py(e).autocompleter.removeDecoration();
            })(e),
            ((e) => {
              e.dispatch("AutocompleterEnd");
            })(e),
            n.set(!1),
            t.clear());
        },
        s = De(() => b_(e)),
        a = (a) => {
          ((n) =>
            t
              .get()
              .map((t) =>
                aS(e.dom, e.selection.getRng(), t.trigger).bind((t) =>
                  dS(e, s, t, n)
                )
              )
              .getOrThunk(() =>
                ((e, t) => {
                  const n = t(),
                    o = e.selection.getRng();
                  return ((e, t, n) => ce(n.triggers, (n) => aS(e, t, n)))(
                    e.dom,
                    o,
                    n
                  ).bind((n) => dS(e, t, n));
                })(e, s)
              ))(a).fold(r, (s) => {
            ((n) => {
              o() ||
                (((e, t) => {
                  Py(e).autocompleter.addDecoration(t);
                })(e, n.range),
                t.set({ trigger: n.trigger, matchLength: n.text.length }));
            })(s.context),
              s.lookupData.then((o) => {
                t.get().map((a) => {
                  const i = s.context;
                  a.trigger === i.trigger &&
                    (i.text.length - a.matchLength >= 10
                      ? r()
                      : (t.set({ ...a, matchLength: i.text.length }),
                        n.get()
                          ? ((e, t) => {
                              e.dispatch("AutocompleterUpdate", t);
                            })(e, { lookupData: o })
                          : (n.set(!0),
                            ((e, t) => {
                              e.dispatch("AutocompleterStart", t);
                            })(e, { lookupData: o }))));
                });
              });
          });
        };
      e.addCommand("mceAutocompleterReload", (e, t) => {
        const n = f(t) ? t.fetchOptions : {};
        a(n);
      }),
        e.addCommand("mceAutocompleterClose", r),
        ((e, t) => {
          const n = fa(t.load, 50);
          e.on("keypress compositionend", (e) => {
            27 !== e.which && n.throttle();
          }),
            e.on("keydown", (e) => {
              const o = e.which;
              8 === o ? n.throttle() : 27 === o && t.cancelIfNecessary();
            }),
            e.on("remove", n.cancel);
        })(e, { cancelIfNecessary: r, load: a });
    },
    y_ =
      (e) =>
      (t, n, o = {}) => {
        const r = t.getBody(),
          s = {
            bubbles: !0,
            composed: !0,
            data: null,
            isComposing: !1,
            detail: 0,
            view: null,
            target: r,
            currentTarget: r,
            eventPhase: Event.AT_TARGET,
            originalTarget: r,
            explicitOriginalTarget: r,
            isTrusted: !1,
            srcElement: r,
            cancelable: !1,
            preventDefault: S,
            inputType: n,
          },
          a = Fs(new InputEvent(e));
        return t.dispatch(e, { ...a, ...s, ...o });
      },
    C_ = y_("input"),
    w_ = y_("beforeinput"),
    x_ = (e, t) => {
      const n = e.dom,
        o = e.schema.getMoveCaretBeforeOnEnterElements();
      if (!t) return;
      if (/^(LI|DT|DD)$/.test(t.nodeName)) {
        const e = ((e) => {
          for (; e; ) {
            if (yo(e) || (Ro(e) && e.data && /[\r\n\s]/.test(e.data))) return e;
            e = e.nextSibling;
          }
          return null;
        })(t.firstChild);
        e &&
          /^(UL|OL|DL)$/.test(e.nodeName) &&
          t.insertBefore(n.doc.createTextNode(pr), t.firstChild);
      }
      const r = n.createRng();
      if ((t.normalize(), t.hasChildNodes())) {
        const e = new Zo(t, t);
        let n,
          s = t;
        for (; (n = e.current()); ) {
          if (Ro(n)) {
            r.setStart(n, 0), r.setEnd(n, 0);
            break;
          }
          if (o[n.nodeName.toLowerCase()]) {
            r.setStartBefore(n), r.setEndBefore(n);
            break;
          }
          (s = n), (n = e.next());
        }
        n || (r.setStart(s, 0), r.setEnd(s, 0));
      } else
        Po(t)
          ? t.nextSibling && n.isBlock(t.nextSibling)
            ? (r.setStartBefore(t), r.setEndBefore(t))
            : (r.setStartAfter(t), r.setEndAfter(t))
          : (r.setStart(t, 0), r.setEnd(t, 0));
      e.selection.setRng(r), hf(e, r);
    },
    k_ = (e, t) => {
      const n = e.getRoot();
      let o,
        r = t;
      for (; r !== n && r && "false" !== e.getContentEditable(r); )
        "true" === e.getContentEditable(r) && (o = r), (r = r.parentNode);
      return r !== n ? o : n;
    },
    S_ = (e) =>
      M.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)),
    __ = (e, t) => {
      const n = null == e ? void 0 : e.parentNode;
      return C(n) && n.nodeName === t;
    },
    E_ = (e) => C(e) && /^(OL|UL|LI)$/.test(e.nodeName),
    N_ = (e) => {
      const t = e.parentNode;
      return C((n = t)) && /^(LI|DT|DD)$/.test(n.nodeName) ? t : e;
      var n;
    },
    R_ = (e, t, n) => {
      let o = e[n ? "firstChild" : "lastChild"];
      for (; o && !yo(o); ) o = o[n ? "nextSibling" : "previousSibling"];
      return o === t;
    },
    A_ = (e, t) => t && "A" === t.nodeName && e.isEmpty(t),
    O_ = (e) => {
      e.innerHTML = '<br data-mce-bogus="1">';
    },
    T_ = (e, t) =>
      e.nodeName === t ||
      (e.previousSibling && e.previousSibling.nodeName === t),
    B_ = (e, t) =>
      C(t) &&
      e.isBlock(t) &&
      !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
      !/^(fixed|absolute)/i.test(t.style.position) &&
      "true" !== e.getContentEditable(t),
    D_ = (e, t, n) =>
      Ro(t)
        ? e
          ? 1 === n && t.data.charAt(n - 1) === _r
            ? 0
            : n
          : n === t.data.length - 1 && t.data.charAt(n) === _r
          ? t.data.length
          : n
        : n,
    P_ = (e, t) => {
      Ji(e).toLowerCase() === t.tagName.toLowerCase() &&
        ((e, t, n) => {
          const o = e.dom;
          M.from(n.style)
            .map(o.parseStyle)
            .each((e) => {
              const n = { ...Kn(mn(t)), ...e };
              o.setStyles(t, n);
            });
          const r = M.from(n.class).map((e) => e.split(/\s+/)),
            s = M.from(t.className).map((e) =>
              K(e.split(/\s+/), (e) => "" !== e)
            );
          Dt(r, s, (e, n) => {
            const r = K(n, (t) => !j(e, t)),
              s = [...e, ...r];
            o.setAttrib(t, "class", s.join(" "));
          });
          const a = ["style", "class"],
            i = ve(n, (e, t) => !j(a, t));
          o.setAttribs(t, i);
        })(e, t, Zi(e));
    },
    L_ = {
      insert: (e, t) => {
        let n,
          o,
          r,
          s,
          a = !1;
        const i = e.dom,
          l = e.schema,
          d = l.getNonEmptyElements(),
          c = e.selection.getRng(),
          u = Ji(e),
          f = (t) => {
            let o = n;
            const s = l.getTextInlineElements();
            let a;
            a =
              t || "TABLE" === r || "HR" === r
                ? i.create(t || u)
                : w.cloneNode(!1);
            let d = a;
            if (!1 === ol(e))
              i.setAttrib(a, "style", null), i.setAttrib(a, "class", null);
            else
              do {
                if (s[o.nodeName]) {
                  if (zc(o) || Zc(o)) continue;
                  const e = o.cloneNode(!1);
                  i.setAttrib(e, "id", ""),
                    a.hasChildNodes()
                      ? (e.appendChild(a.firstChild), a.appendChild(e))
                      : ((d = e), a.appendChild(e));
                }
              } while ((o = o.parentNode) && o !== v);
            return P_(e, a), O_(d), a;
          },
          g = (e) => {
            const t = D_(e, n, o);
            if (Ro(n) && (e ? t > 0 : t < n.data.length)) return !1;
            if (n.parentNode === w && a && !e) return !0;
            if (e && yo(n) && n === w.firstChild) return !0;
            if (T_(n, "TABLE") || T_(n, "HR")) return (a && !e) || (!a && e);
            const r = new Zo(n, w);
            let s;
            for (
              Ro(n) &&
              (e && 0 === t ? r.prev() : e || t !== n.data.length || r.next());
              (s = r.current());

            ) {
              if (yo(s)) {
                if (!s.getAttribute("data-mce-bogus")) {
                  const e = s.nodeName.toLowerCase();
                  if (d[e] && "br" !== e) return !1;
                }
              } else if (Ro(s) && !Jr(s.data)) return !1;
              e ? r.prev() : r.next();
            }
            return !0;
          },
          p = () => {
            let t;
            return (
              (t =
                /^(H[1-6]|PRE|FIGURE)$/.test(r) && "HGROUP" !== x ? f(u) : f()),
              ((e, t) => {
                const n = rl(e);
                return (
                  !y(t) &&
                  (m(n) ? j(Tt.explode(n), t.nodeName.toLowerCase()) : n)
                );
              })(e, s) &&
              B_(i, s) &&
              i.isEmpty(w)
                ? (t = i.split(s, w))
                : i.insertAfter(t, w),
              x_(e, t),
              t
            );
          };
        Wm(i, c).each((e) => {
          c.setStart(e.startContainer, e.startOffset),
            c.setEnd(e.endContainer, e.endOffset);
        }),
          (n = c.startContainer),
          (o = c.startOffset);
        const h = !(!t || !t.shiftKey),
          b = !(!t || !t.ctrlKey);
        yo(n) &&
          n.hasChildNodes() &&
          ((a = o > n.childNodes.length - 1),
          (n = n.childNodes[Math.min(o, n.childNodes.length - 1)] || n),
          (o = a && Ro(n) ? n.data.length : 0));
        const v = k_(i, n);
        if (
          !v ||
          ((e, t) => {
            const n = e.dom.getParent(t, "ol,ul,dl");
            return null !== n && "false" === e.dom.getContentEditableParent(n);
          })(e, n)
        )
          return;
        h ||
          (n = ((e, t, n, o, r) => {
            var s;
            const a = e.dom,
              i = null !== (s = k_(a, o)) && void 0 !== s ? s : a.getRoot();
            let l = a.getParent(o, a.isBlock);
            if (!l || !B_(a, l)) {
              let s;
              if (
                ((l = l || i),
                (s =
                  l === e.getBody() || Uo(l)
                    ? l.nodeName.toLowerCase()
                    : l.parentNode
                    ? l.parentNode.nodeName.toLowerCase()
                    : ""),
                !l.hasChildNodes())
              ) {
                const o = a.create(t);
                return (
                  P_(e, o),
                  l.appendChild(o),
                  n.setStart(o, 0),
                  n.setEnd(o, 0),
                  o
                );
              }
              let d,
                c = o;
              for (; c && c.parentNode !== l; ) c = c.parentNode;
              for (; c && !a.isBlock(c); ) (d = c), (c = c.previousSibling);
              if (d && e.schema.isValidChild(s, t.toLowerCase())) {
                const s = d.parentNode,
                  i = a.create(t);
                for (
                  P_(e, i), s.insertBefore(i, d), c = d;
                  c && !a.isBlock(c);

                ) {
                  const e = c.nextSibling;
                  i.appendChild(c), (c = e);
                }
                n.setStart(o, r), n.setEnd(o, r);
              }
            }
            return o;
          })(e, u, c, n, o));
        let w = i.getParent(n, i.isBlock) || i.getRoot();
        (s = C(null == w ? void 0 : w.parentNode)
          ? i.getParent(w.parentNode, i.isBlock)
          : null),
          (r = w ? w.nodeName.toUpperCase() : "");
        const x = s ? s.nodeName.toUpperCase() : "";
        if (
          ("LI" !== x || b || ((w = s), (s = s.parentNode), (r = x)),
          /^(LI|DT|DD)$/.test(r) && yo(s) && i.isEmpty(w))
        )
          return void ((e, t, n, o, r) => {
            const s = e.dom,
              a = e.selection.getRng(),
              i = n.parentNode;
            if (n === e.getBody() || !i) return;
            var l;
            E_((l = n)) && E_(l.parentNode) && (r = "LI");
            let d = t(r);
            if (R_(n, o, !0) && R_(n, o, !1))
              if (__(n, "LI")) {
                const e = N_(n);
                s.insertAfter(d, e),
                  ((e) => {
                    var t;
                    return (
                      (null === (t = e.parentNode) || void 0 === t
                        ? void 0
                        : t.firstChild) === e
                    );
                  })(n)
                    ? s.remove(e)
                    : s.remove(n);
              } else s.replace(d, n);
            else if (R_(n, o, !0))
              __(n, "LI")
                ? (s.insertAfter(d, N_(n)),
                  d.appendChild(s.doc.createTextNode(" ")),
                  d.appendChild(n))
                : i.insertBefore(d, n),
                s.remove(o);
            else if (R_(n, o, !1)) s.insertAfter(d, N_(n)), s.remove(o);
            else {
              n = N_(n);
              const e = a.cloneRange();
              e.setStartAfter(o), e.setEndAfter(n);
              const t = e.extractContents();
              "LI" === r &&
              ((e, t) => e.firstChild && "LI" === e.firstChild.nodeName)(t)
                ? ((d = t.firstChild), s.insertAfter(t, n))
                : (s.insertAfter(t, n), s.insertAfter(d, n)),
                s.remove(o);
            }
            x_(e, d);
          })(e, f, s, w, u);
        if (w === e.getBody()) return;
        const k = w.parentNode;
        let S;
        if (Or(w)) (S = Fr(w)), i.isEmpty(w) && O_(w), P_(e, S), x_(e, S);
        else if (g(!1)) S = p();
        else if (g(!0) && k)
          (S = k.insertBefore(f(), w)), x_(e, T_(w, "HR") ? S : w);
        else {
          const t = ((e) => {
            const t = e.cloneRange();
            return (
              t.setStart(
                e.startContainer,
                D_(!0, e.startContainer, e.startOffset)
              ),
              t.setEnd(e.endContainer, D_(!1, e.endContainer, e.endOffset)),
              t
            );
          })(c).cloneRange();
          t.setEndAfter(w);
          const n = t.extractContents();
          ((e) => {
            V(br(mn(e), Ut), (e) => {
              const t = e.dom;
              t.nodeValue = Nr(t.data);
            });
          })(n),
            ((e) => {
              let t = e;
              do {
                Ro(t) && (t.data = t.data.replace(/^[\r\n]+/, "")),
                  (t = t.firstChild);
              } while (t);
            })(n),
            (S = n.firstChild),
            i.insertAfter(n, w),
            ((e, t, n) => {
              var o;
              const r = [];
              if (!n) return;
              let s = n;
              for (; (s = s.firstChild); ) {
                if (e.isBlock(s)) return;
                yo(s) && !t[s.nodeName.toLowerCase()] && r.push(s);
              }
              let a = r.length;
              for (; a--; )
                (s = r[a]),
                  (!s.hasChildNodes() ||
                    (s.firstChild === s.lastChild &&
                      "" ===
                        (null === (o = s.firstChild) || void 0 === o
                          ? void 0
                          : o.nodeValue)) ||
                    A_(e, s)) &&
                    e.remove(s);
            })(i, d, S),
            ((e, t) => {
              t.normalize();
              const n = t.lastChild;
              (!n ||
                (yo(n) &&
                  /^(left|right)$/gi.test(e.getStyle(n, "float", !0)))) &&
                e.add(t, "br");
            })(i, w),
            i.isEmpty(w) && O_(w),
            S.normalize(),
            i.isEmpty(S) ? (i.remove(S), p()) : (P_(e, S), x_(e, S));
        }
        i.setAttrib(S, "id", ""), e.dispatch("NewBlock", { newBlock: S });
      },
      fakeEventName: "insertParagraph",
    },
    M_ = (e, t, n) => {
      const o = e.dom.createRng();
      n
        ? (o.setStartBefore(t), o.setEndBefore(t))
        : (o.setStartAfter(t), o.setEndAfter(t)),
        e.selection.setRng(o),
        hf(e, o);
    },
    I_ = (e, t) => {
      const n = cn("br");
      Yn(mn(t), n), e.undoManager.add();
    },
    F_ = (e, t) => {
      U_(e.getBody(), t) || Xn(mn(t), cn("br"));
      const n = cn("br");
      Xn(mn(t), n), M_(e, n.dom, !1), e.undoManager.add();
    },
    U_ = (e, t) => {
      return (
        (n = ai.after(t)),
        !!Po(n.getNode()) ||
          Lc(e, ai.after(t))
            .map((e) => Po(e.getNode()))
            .getOr(!1)
      );
      var n;
    },
    z_ = (e) => e && "A" === e.nodeName && "href" in e,
    j_ = (e) => e.fold(P, z_, z_, P),
    H_ = (e, t) => {
      t.fold(S, O(I_, e), O(F_, e), S);
    },
    $_ = {
      insert: (e, t) => {
        const n = ((e) => {
          const t = O(hp, e),
            n = ai.fromRangeStart(e.selection.getRng());
          return Mw(t, e.getBody(), n).filter(j_);
        })(e);
        n.isSome()
          ? n.each(O(H_, e))
          : ((e, t) => {
              const n = e.selection,
                o = e.dom,
                r = n.getRng();
              let s,
                a = !1;
              Wm(o, r).each((e) => {
                r.setStart(e.startContainer, e.startOffset),
                  r.setEnd(e.endContainer, e.endOffset);
              });
              let i = r.startOffset,
                l = r.startContainer;
              if (yo(l) && l.hasChildNodes()) {
                const e = i > l.childNodes.length - 1;
                (l = l.childNodes[Math.min(i, l.childNodes.length - 1)] || l),
                  (i = e && Ro(l) ? l.data.length : 0);
              }
              let d = o.getParent(l, o.isBlock);
              const c =
                  d && d.parentNode
                    ? o.getParent(d.parentNode, o.isBlock)
                    : null,
                u = c ? c.nodeName.toUpperCase() : "",
                m = !(!t || !t.ctrlKey);
              "LI" !== u || m || (d = c),
                Ro(l) &&
                  i >= l.data.length &&
                  (((e, t, n) => {
                    const o = new Zo(t, n);
                    let r;
                    const s = e.getNonEmptyElements();
                    for (; (r = o.next()); )
                      if (
                        s[r.nodeName.toLowerCase()] ||
                        (Ro(r) && r.length > 0)
                      )
                        return !0;
                    return !1;
                  })(e.schema, l, d || o.getRoot()) ||
                    ((s = o.create("br")),
                    r.insertNode(s),
                    r.setStartAfter(s),
                    r.setEndAfter(s),
                    (a = !0))),
                (s = o.create("br")),
                li(o, r, s),
                M_(e, s, a),
                e.undoManager.add();
            })(e, t);
      },
      fakeEventName: "insertLineBreak",
    },
    V_ = (e, t) =>
      S_(e)
        .filter((e) => t.length > 0 && pn(mn(e), t))
        .isSome(),
    q_ = Ti([{ br: [] }, { block: [] }, { none: [] }]),
    W_ = (e, t) => ((e) => V_(e, nl(e)))(e),
    K_ = (e) => (t, n) =>
      ((e) =>
        S_(e)
          .filter((e) => ir(mn(e)))
          .isSome())(t) === e,
    G_ = (e, t) => (n, o) => {
      const r =
        ((e) => S_(e).fold(N(""), (e) => e.nodeName.toUpperCase()))(n) ===
        e.toUpperCase();
      return r === t;
    },
    Y_ = (e) => {
      const t = k_(e.dom, e.selection.getStart());
      return y(t);
    },
    X_ = (e) => G_("pre", e),
    Q_ = (e) => (t, n) => Qi(t) === e,
    J_ = (e, t) => ((e) => V_(e, tl(e)))(e),
    Z_ = (e, t) => t,
    eE = (e) => {
      const t = Ji(e),
        n = k_(e.dom, e.selection.getStart());
      return C(n) && e.schema.isValidChild(n.nodeName, t);
    },
    tE = (e, t) => (n, o) =>
      Y(e, (e, t) => e && t(n, o), !0) ? M.some(t) : M.none(),
    nE = (e, t, n) => {
      t.selection.isCollapsed() ||
        ((e) => {
          e.execCommand("delete");
        })(t),
        (C(n) && w_(t, e.fakeEventName).isDefaultPrevented()) ||
          (e.insert(t, n), C(n) && C_(t, e.fakeEventName));
    },
    oE = (e, t) => {
      const n = () => nE($_, e, t),
        o = () => nE(L_, e, t),
        r = ((e, t) =>
          Ew(
            [
              tE([W_], q_.none()),
              tE([X_(!0), Y_], q_.none()),
              tE([G_("summary", !0)], q_.br()),
              tE([X_(!0), Q_(!1), Z_], q_.br()),
              tE([X_(!0), Q_(!1)], q_.block()),
              tE([X_(!0), Q_(!0), Z_], q_.block()),
              tE([X_(!0), Q_(!0)], q_.br()),
              tE([K_(!0), Z_], q_.br()),
              tE([K_(!0)], q_.block()),
              tE([J_], q_.br()),
              tE([Z_], q_.br()),
              tE([eE], q_.block()),
            ],
            [e, !(!t || !t.shiftKey)]
          ).getOr(q_.none()))(e, t);
      switch (el(e)) {
        case "linebreak":
          r.fold(n, n, S);
          break;
        case "block":
          r.fold(o, o, S);
          break;
        case "invert":
          r.fold(o, n, S);
          break;
        default:
          r.fold(n, o, S);
      }
    },
    rE = Ct(),
    sE = (e) => e.stopImmediatePropagation(),
    aE = (e) => e.keyCode === bm.PAGE_UP || e.keyCode === bm.PAGE_DOWN,
    iE = (e, t, n) => {
      n && !e.get()
        ? t.on("NodeChange", sE, !0)
        : !n && e.get() && t.off("NodeChange", sE),
        e.set(n);
    },
    lE = (e, t) => {
      const n = t.container(),
        o = t.offset();
      return Ro(n)
        ? (n.insertData(o, e), M.some(ai(n, o + e.length)))
        : fc(t).map((n) => {
            const o = un(e);
            return t.isAtEnd() ? Xn(n, o) : Yn(n, o), ai(o.dom, e.length);
          });
    },
    dE = O(lE, pr),
    cE = O(lE, " "),
    uE = (e, t) => (n) =>
      ((e, t) =>
        !Kg(t) &&
        (((e, t) =>
          ((e, t) => Mc(e.dom, t).isNone())(e, t) ||
          ((e, t) => Lc(e.dom, t).isNone())(e, t) ||
          Dg(e, t) ||
          Pg(e, t) ||
          zg(e, t) ||
          Ug(e, t))(e, t) ||
          qg(e, t) ||
          Wg(e, t)))(e, n)
        ? dE(t)
        : cE(t),
    mE = (e) => {
      const t = ai.fromRangeStart(e.selection.getRng()),
        n = mn(e.getBody());
      if (e.selection.isCollapsed()) {
        const o = O(hp, e),
          r = ai.fromRangeStart(e.selection.getRng());
        return Mw(o, e.getBody(), r)
          .bind(
            (
              (e) => (t) =>
                t.fold(
                  (t) => Mc(e.dom, ai.before(t)),
                  (e) => Ic(e),
                  (e) => Fc(e),
                  (t) => Lc(e.dom, ai.after(t))
                )
            )(n)
          )
          .map(
            (o) => () =>
              uE(
                n,
                t
              )(o).each(
                ((e) => (t) => (
                  e.selection.setRng(t.toRange()), e.nodeChanged(), !0
                ))(e)
              )
          );
      }
      return M.none();
    },
    fE = (e) =>
      Ed(e)
        ? [
            { keyCode: bm.TAB, action: Ck(Yk, e, !0) },
            { keyCode: bm.TAB, shiftKey: !0, action: Ck(Yk, e, !1) },
          ]
        : [],
    gE = (e) => {
      if ((e.addShortcut("Meta+P", "", "mcePrint"), v_(e), By(e)))
        return ra(null);
      {
        const t = Ox(e);
        return (
          ((e) => {
            e.on("keyup compositionstart", O(lk, e));
          })(e),
          ((e, t) => {
            e.on("keydown", (n) => {
              n.isDefaultPrevented() ||
                ((e, t, n) => {
                  const o = Nt.os.isMacOS() || Nt.os.isiOS();
                  wk(
                    [
                      { keyCode: bm.RIGHT, action: Ck(uk, e, !0) },
                      { keyCode: bm.LEFT, action: Ck(uk, e, !1) },
                      { keyCode: bm.UP, action: Ck(mk, e, !1) },
                      { keyCode: bm.DOWN, action: Ck(mk, e, !0) },
                      ...(o
                        ? [
                            {
                              keyCode: bm.UP,
                              action: Ck(gk, e, !1),
                              metaKey: !0,
                              shiftKey: !0,
                            },
                            {
                              keyCode: bm.DOWN,
                              action: Ck(gk, e, !0),
                              metaKey: !0,
                              shiftKey: !0,
                            },
                          ]
                        : []),
                      { keyCode: bm.RIGHT, action: Ck(Vk, e, !0) },
                      { keyCode: bm.LEFT, action: Ck(Vk, e, !1) },
                      { keyCode: bm.UP, action: Ck(qk, e, !1) },
                      { keyCode: bm.DOWN, action: Ck(qk, e, !0) },
                      { keyCode: bm.RIGHT, action: Ck(kk, e, !0) },
                      { keyCode: bm.LEFT, action: Ck(kk, e, !1) },
                      { keyCode: bm.UP, action: Ck(Sk, e, !1) },
                      { keyCode: bm.DOWN, action: Ck(Sk, e, !0) },
                      { keyCode: bm.RIGHT, action: Ck(Rx, e, t, !0) },
                      { keyCode: bm.LEFT, action: Ck(Rx, e, t, !1) },
                      {
                        keyCode: bm.RIGHT,
                        ctrlKey: !o,
                        altKey: o,
                        action: Ck(Tx, e, t),
                      },
                      {
                        keyCode: bm.LEFT,
                        ctrlKey: !o,
                        altKey: o,
                        action: Ck(Bx, e, t),
                      },
                      { keyCode: bm.UP, action: Ck(bk, e, !1) },
                      { keyCode: bm.DOWN, action: Ck(bk, e, !0) },
                    ],
                    n
                  ).each((e) => {
                    n.preventDefault();
                  });
                })(e, t, n);
            });
          })(e, t),
          ((e, t) => {
            e.on("keydown", (n) => {
              n.isDefaultPrevented() ||
                ((e, t, n) => {
                  const o =
                    n.keyCode === bm.BACKSPACE
                      ? "deleteContentBackward"
                      : "deleteContentForward";
                  xk(
                    [
                      { keyCode: bm.BACKSPACE, action: Ck(Yx, e) },
                      { keyCode: bm.BACKSPACE, action: Ck(gw, e, !1) },
                      { keyCode: bm.DELETE, action: Ck(gw, e, !0) },
                      { keyCode: bm.BACKSPACE, action: Ck(aw, e, !1) },
                      { keyCode: bm.DELETE, action: Ck(aw, e, !0) },
                      { keyCode: bm.BACKSPACE, action: Ck(Mx, e, t, !1) },
                      { keyCode: bm.DELETE, action: Ck(Mx, e, t, !0) },
                      { keyCode: bm.BACKSPACE, action: Ck(Jp, e, !1) },
                      { keyCode: bm.DELETE, action: Ck(Jp, e, !0) },
                      { keyCode: bm.BACKSPACE, action: Ck(pw, e, !1) },
                      { keyCode: bm.DELETE, action: Ck(pw, e, !0) },
                      { keyCode: bm.BACKSPACE, action: Ck(jx, e, !1) },
                      { keyCode: bm.DELETE, action: Ck(jx, e, !0) },
                      { keyCode: bm.BACKSPACE, action: Ck(ZC, e, !1) },
                      { keyCode: bm.DELETE, action: Ck(ZC, e, !0) },
                      { keyCode: bm.BACKSPACE, action: Ck(XC, e, !1) },
                      { keyCode: bm.DELETE, action: Ck(XC, e, !0) },
                      { keyCode: bm.BACKSPACE, action: Ck(Ux, e, !1) },
                      { keyCode: bm.DELETE, action: Ck(Ux, e, !0) },
                    ],
                    n
                  ).each((t) => {
                    n.preventDefault(),
                      w_(e, o).isDefaultPrevented() || (t(), C_(e, o));
                  });
                })(e, t, n);
            }),
              e.on("keyup", (t) => {
                t.isDefaultPrevented() ||
                  ((e, t) => {
                    wk(
                      [
                        { keyCode: bm.BACKSPACE, action: Ck(fw, e) },
                        { keyCode: bm.DELETE, action: Ck(fw, e) },
                      ],
                      t
                    );
                  })(e, t);
              });
          })(e, t),
          ((e) => {
            e.on("keydown", (t) => {
              t.keyCode === bm.ENTER &&
                ((e, t) => {
                  var n;
                  t.isDefaultPrevented() ||
                    (t.preventDefault(),
                    (n = e.undoManager).typing && ((n.typing = !1), n.add()),
                    e.undoManager.transact(() => {
                      oE(e, t);
                    }));
                })(e, t);
            });
          })(e),
          ((e) => {
            e.on("keydown", (t) => {
              t.isDefaultPrevented() ||
                ((e, t) => {
                  xk([{ keyCode: bm.SPACEBAR, action: Ck(mE, e) }], t).each(
                    (n) => {
                      t.preventDefault(),
                        w_(e, "insertText", {
                          data: " ",
                        }).isDefaultPrevented() ||
                          (n(), C_(e, "insertText", { data: " " }));
                    }
                  );
                })(e, t);
            });
          })(e),
          ((e) => {
            e.on("input", (t) => {
              t.isComposing ||
                ((e) => {
                  const t = mn(e.getBody());
                  e.selection.isCollapsed() &&
                    np(t, ai.fromRangeStart(e.selection.getRng())).each((t) => {
                      e.selection.setRng(t.toRange());
                    });
                })(e);
            });
          })(e),
          ((e) => {
            e.on("keydown", (t) => {
              t.isDefaultPrevented() ||
                ((e, t) => {
                  wk([...fE(e)], t).each((e) => {
                    t.preventDefault();
                  });
                })(e, t);
            });
          })(e),
          ((e, t) => {
            e.on("keydown", (n) => {
              n.isDefaultPrevented() ||
                ((e, t, n) => {
                  const o = Nt.os.isMacOS() || Nt.os.isiOS();
                  wk(
                    [
                      { keyCode: bm.END, action: Ck(fk, e, !0) },
                      { keyCode: bm.HOME, action: Ck(fk, e, !1) },
                      ...(o
                        ? []
                        : [
                            {
                              keyCode: bm.HOME,
                              action: Ck(gk, e, !1),
                              ctrlKey: !0,
                              shiftKey: !0,
                            },
                            {
                              keyCode: bm.END,
                              action: Ck(gk, e, !0),
                              ctrlKey: !0,
                              shiftKey: !0,
                            },
                          ]),
                      { keyCode: bm.END, action: Ck(_k, e, !0) },
                      { keyCode: bm.HOME, action: Ck(_k, e, !1) },
                      { keyCode: bm.END, action: Ck(Dx, e, !0, t) },
                      { keyCode: bm.HOME, action: Ck(Dx, e, !1, t) },
                    ],
                    n
                  ).each((e) => {
                    n.preventDefault();
                  });
                })(e, t, n);
            });
          })(e, t),
          ((e, t) => {
            if (rE.os.isMacOS()) return;
            const n = ra(!1);
            e.on("keydown", (t) => {
              aE(t) && iE(n, e, !0);
            }),
              e.on("keyup", (o) => {
                o.isDefaultPrevented() ||
                  ((e, t, n) => {
                    wk(
                      [
                        { keyCode: bm.PAGE_UP, action: Ck(Dx, e, !1, t) },
                        { keyCode: bm.PAGE_DOWN, action: Ck(Dx, e, !0, t) },
                      ],
                      n
                    );
                  })(e, t, o),
                  aE(o) && n.get() && (iE(n, e, !1), e.nodeChanged());
              });
          })(e, t),
          t
        );
      }
    };
  class pE {
    constructor(e) {
      let t;
      (this.lastPath = []), (this.editor = e);
      const n = this;
      "onselectionchange" in e.getDoc() ||
        e.on("NodeChange click mouseup keyup focus", (n) => {
          const o = e.selection.getRng(),
            r = {
              startContainer: o.startContainer,
              startOffset: o.startOffset,
              endContainer: o.endContainer,
              endOffset: o.endOffset,
            };
          ("nodechange" !== n.type && Um(r, t)) ||
            e.dispatch("SelectionChange"),
            (t = r);
        }),
        e.on("contextmenu", () => {
          e.dispatch("SelectionChange");
        }),
        e.on("SelectionChange", () => {
          const t = e.selection.getStart(!0);
          t &&
            vu(e) &&
            !n.isSameElementPath(t) &&
            e.dom.isChildOf(t, e.getBody()) &&
            e.nodeChanged({ selectionChange: !0 });
        }),
        e.on("mouseup", (t) => {
          !t.isDefaultPrevented() &&
            vu(e) &&
            ("IMG" === e.selection.getNode().nodeName
              ? Af.setEditorTimeout(e, () => {
                  e.nodeChanged();
                })
              : e.nodeChanged());
        });
    }
    nodeChanged(e = {}) {
      const t = this.editor.selection;
      let n;
      if (
        this.editor.initialized &&
        t &&
        !Wl(this.editor) &&
        !this.editor.mode.isReadOnly()
      ) {
        const o = this.editor.getBody();
        (n = t.getStart(!0) || o),
          (n.ownerDocument === this.editor.getDoc() &&
            this.editor.dom.isChildOf(n, o)) ||
            (n = o);
        const r = [];
        this.editor.dom.getParent(n, (e) => e === o || (r.push(e), !1)),
          this.editor.dispatch("NodeChange", { ...e, element: n, parents: r });
      }
    }
    isSameElementPath(e) {
      let t;
      const n = this.editor,
        o = ne(n.dom.getParents(e, L, n.getBody()));
      if (o.length === this.lastPath.length) {
        for (t = o.length; t >= 0 && o[t] === this.lastPath[t]; t--);
        if (-1 === t) return (this.lastPath = o), !0;
      }
      return (this.lastPath = o), !1;
    }
  }
  const hE = N("x-tinymce/html"),
    bE = "\x3c!-- x-tinymce/html --\x3e",
    vE = (e) => bE + e,
    yE = (e) => -1 !== e.indexOf(bE),
    CE = "%MCEPASTEBIN%",
    wE = (e) => e.dom.get("mcepastebin"),
    xE = (e) => C(e) && "mcepastebin" === e.id,
    kE = (e) => e === CE,
    SE = (e, t) => (
      Tt.each(t, (t) => {
        e = u(t, RegExp) ? e.replace(t, "") : e.replace(t[0], t[1]);
      }),
      e
    ),
    _E = (e) =>
      SE(e, [
        /^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,
        /<!--StartFragment-->|<!--EndFragment-->/g,
        [
          /( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,
          (e, t, n) => (t || n ? pr : " "),
        ],
        /<br class="Apple-interchange-newline">/g,
        /<br>$/i,
      ]),
    EE = (e, t) => ({ content: e, cancelled: t }),
    NE = (e, t) => (e.insertContent(t, { merge: gd(e), paste: !0 }), !0),
    RE = (e) => /^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(e),
    AE = (e, t, n) =>
      !(e.selection.isCollapsed() || !RE(t)) &&
      ((e, t, n) => (
        e.undoManager.extra(
          () => {
            n(e, t);
          },
          () => {
            e.execCommand("mceInsertLink", !1, t);
          }
        ),
        !0
      ))(e, t, n),
    OE = (e, t, n) =>
      !!((e, t) =>
        RE(t) && H(_d(e), (e) => je(t.toLowerCase(), `.${e.toLowerCase()}`)))(
        e,
        t
      ) &&
      ((e, t, n) => (
        e.undoManager.extra(
          () => {
            n(e, t);
          },
          () => {
            e.insertContent('<img src="' + t + '">');
          }
        ),
        !0
      ))(e, t, n),
    TE = ((e) => {
      let t = 0;
      return () => "mceclip" + t++;
    })(),
    BE = (e, t, n, o) => {
      const r = ((e, t, n) =>
        ((e, t, n) => {
          const o = ((e, t, n) =>
              e.dispatch("PastePreProcess", { content: t, internal: n }))(
              e,
              t,
              n
            ),
            r = ((e, t) => {
              const n = Zv({}, e.schema);
              n.addNodeFilter("meta", (e) => {
                Tt.each(e, (e) => {
                  e.remove();
                });
              });
              const o = n.parse(t, {
                forced_root_block: !1,
                isRootContent: !0,
              });
              return ig({ validate: !0 }, e.schema).serialize(o);
            })(e, o.content);
          return e.hasEventListeners("PastePostProcess") &&
            !o.isDefaultPrevented()
            ? ((e, t, n) => {
                const o = e.dom.create("div", { style: "display:none" }, t),
                  r = ((e, t, n) =>
                    e.dispatch("PastePostProcess", { node: t, internal: n }))(
                    e,
                    o,
                    n
                  );
                return EE(r.node.innerHTML, r.isDefaultPrevented());
              })(e, r, n)
            : EE(r, o.isDefaultPrevented());
        })(e, t, n))(e, t, n);
      r.cancelled ||
        ((e, t, n) => {
          n || !pd(e)
            ? NE(e, t)
            : ((e, t) => {
                Tt.each([AE, OE, NE], (n) => !n(e, t, NE));
              })(e, t);
        })(e, r.content, o);
    },
    DE = (e, t, n) => {
      const o = n || yE(t);
      BE(e, ((e) => e.replace(bE, ""))(t), o, !1);
    },
    PE = (e, t) => {
      const n = e.dom.encode(t).replace(/\r\n/g, "\n"),
        o = ((e, t, n) => {
          const o = e.split(/\n\n/),
            r = ((e, t) => {
              let n = "<" + e;
              const o = ye(t, (e, t) => t + '="' + xs.encodeAllRaw(e) + '"');
              return o.length && (n += " " + o.join(" ")), n + ">";
            })(t, n),
            s = "</" + t + ">",
            a = $(o, (e) => e.split(/\n/).join("<br />"));
          return 1 === a.length ? a[0] : $(a, (e) => r + e + s).join("");
        })(es(n, bd(e)), Ji(e), Zi(e));
      BE(e, o, !1, !0);
    },
    LE = (e) => {
      const t = {};
      if (e && e.types)
        for (let n = 0; n < e.types.length; n++) {
          const o = e.types[n];
          try {
            t[o] = e.getData(o);
          } catch (e) {
            t[o] = "";
          }
        }
      return t;
    },
    ME = (e, t) => t in e && e[t].length > 0,
    IE = (e) => ME(e, "text/html") || ME(e, "text/plain"),
    FE = (e, t, n) => {
      const o = "paste" === t.type ? t.clipboardData : t.dataTransfer;
      var r;
      if (dd(e) && o) {
        const s = ((e, t) => {
          const n = t.items
              ? ee(de(t.items), (e) =>
                  "file" === e.kind ? [e.getAsFile()] : []
                )
              : [],
            o = t.files ? de(t.files) : [];
          return K(
            n.length > 0 ? n : o,
            ((e) => {
              const t = _d(e);
              return (e) =>
                ze(e.type, "image/") &&
                H(
                  t,
                  (t) =>
                    ((e) => {
                      const t = e.toLowerCase(),
                        n = {
                          jpg: "jpeg",
                          jpe: "jpeg",
                          jfi: "jpeg",
                          jif: "jpeg",
                          jfif: "jpeg",
                          pjpeg: "jpeg",
                          pjp: "jpeg",
                          svg: "svg+xml",
                        };
                      return Tt.hasOwn(n, t) ? "image/" + n[t] : "image/" + t;
                    })(t) === e.type
                );
            })(e)
          );
        })(e, o);
        if (s.length > 0)
          return (
            t.preventDefault(),
            ((r = s),
            Promise.all(
              $(r, (e) => Pv(e).then((t) => ({ file: e, uri: t })))
            )).then((t) => {
              n && e.selection.setRng(n),
                V(t, (t) => {
                  ((e, t) => {
                    Bv(t.uri).each(({ data: n, type: o, base64Encoded: r }) => {
                      const s = r ? n : btoa(n),
                        a = t.file,
                        i = e.editorUpload.blobCache,
                        l = i.getByData(s, o),
                        d =
                          null != l
                            ? l
                            : ((e, t, n, o) => {
                                const r = TE(),
                                  s = al(e) && C(n.name),
                                  a = s
                                    ? ((e, t) => {
                                        const n = t.match(
                                          /([\s\S]+?)(?:\.[a-z0-9.]+)$/i
                                        );
                                        return C(n)
                                          ? e.dom.encode(n[1])
                                          : void 0;
                                      })(e, n.name)
                                    : r,
                                  i = s ? n.name : void 0,
                                  l = t.create(r, n, o, a, i);
                                return t.add(l), l;
                              })(e, i, a, s);
                      DE(e, `<img src="${d.blobUri()}">`, !1);
                    });
                  })(e, t);
                });
            }),
            !0
          );
      }
      return !1;
    },
    UE = (e, t, n, o) => {
      let r = _E(n);
      const s = ME(t, hE()) || yE(n),
        a =
          !s &&
          ((e) =>
            !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(
              e
            ))(r),
        i = RE(r);
      (kE(r) || !r.length || (a && !i)) && (o = !0),
        (o || i) &&
          (r =
            ME(t, "text/plain") && a
              ? t["text/plain"]
              : ((e) => {
                  const t = Ls(),
                    n = Zv({}, t);
                  let o = "";
                  const r = t.getVoidElements(),
                    s = Tt.makeMap(
                      "script noscript style textarea video audio iframe object",
                      " "
                    ),
                    a = t.getBlockElements(),
                    i = (e) => {
                      const n = e.name,
                        l = e;
                      if ("br" !== n) {
                        if ("wbr" !== n)
                          if ((r[n] && (o += " "), s[n])) o += " ";
                          else {
                            if (
                              (3 === e.type && (o += e.value),
                              !(e.name in t.getVoidElements()))
                            ) {
                              let t = e.firstChild;
                              if (t)
                                do {
                                  i(t);
                                } while ((t = t.next));
                            }
                            a[n] &&
                              l.next &&
                              ((o += "\n"), "p" === n && (o += "\n"));
                          }
                      } else o += "\n";
                    };
                  return (e = SE(e, [/<!\[[^\]]+\]>/g])), i(n.parse(e)), o;
                })(r)),
        kE(r) || (o ? PE(e, r) : DE(e, r, s));
    },
    zE = (e, t, n) => {
      ((e, t, n) => {
        let o;
        e.on("keydown", (e) => {
          ((e) =>
            (bm.metaKeyPressed(e) && 86 === e.keyCode) ||
            (e.shiftKey && 45 === e.keyCode))(e) &&
            !e.isDefaultPrevented() &&
            (o = e.shiftKey && 86 === e.keyCode);
        }),
          e.on("paste", (r) => {
            if (
              r.isDefaultPrevented() ||
              ((e) => {
                var t, n;
                return (
                  Nt.os.isAndroid() &&
                  0 ===
                    (null ===
                      (n =
                        null === (t = e.clipboardData) || void 0 === t
                          ? void 0
                          : t.items) || void 0 === n
                      ? void 0
                      : n.length)
                );
              })(r)
            )
              return;
            const s = "text" === n.get() || o;
            o = !1;
            const a = LE(r.clipboardData);
            (!IE(a) && FE(e, r, t.getLastRng() || e.selection.getRng())) ||
              (ME(a, "text/html")
                ? (r.preventDefault(), UE(e, a, a["text/html"], s))
                : (t.create(),
                  Af.setEditorTimeout(
                    e,
                    () => {
                      const n = t.getHtml();
                      t.remove(), UE(e, a, n, s);
                    },
                    0
                  )));
          });
      })(e, t, n),
        ((e) => {
          const t = (e) => ze(e, "webkit-fake-url"),
            n = (e) => ze(e, "data:");
          e.parser.addNodeFilter("img", (o, r, s) => {
            if (
              !dd(e) &&
              ((e) => {
                var t;
                return (
                  !0 ===
                  (null === (t = e.data) || void 0 === t ? void 0 : t.paste)
                );
              })(s)
            )
              for (const r of o) {
                const o = r.attr("src");
                m(o) &&
                  !r.attr("data-mce-object") &&
                  o !== Nt.transparentSrc &&
                  (t(o) || (!vd(e) && n(o))) &&
                  r.remove();
              }
          });
        })(e);
    },
    jE = (e, t, n, o) => {
      ((e, t, n) => {
        if (!e) return !1;
        try {
          return (
            e.clearData(),
            e.setData("text/html", t),
            e.setData("text/plain", n),
            e.setData(hE(), t),
            !0
          );
        } catch (e) {
          return !1;
        }
      })(e.clipboardData, t.html, t.text)
        ? (e.preventDefault(), o())
        : n(t.html, o);
    },
    HE = (e) => (t, n) => {
      const { dom: o, selection: r } = e,
        s = o.create("div", {
          contenteditable: "false",
          "data-mce-bogus": "all",
        }),
        a = o.create("div", { contenteditable: "true" }, t);
      o.setStyles(s, {
        position: "fixed",
        top: "0",
        left: "-3000px",
        width: "1000px",
        overflow: "hidden",
      }),
        s.appendChild(a),
        o.add(e.getBody(), s);
      const i = r.getRng();
      a.focus();
      const l = o.createRng();
      l.selectNodeContents(a),
        r.setRng(l),
        Af.setEditorTimeout(
          e,
          () => {
            r.setRng(i), o.remove(s), n();
          },
          0
        );
    },
    $E = (e) => ({
      html: vE(e.selection.getContent({ contextual: !0 })),
      text: e.selection.getContent({ format: "text" }),
    }),
    VE = (e) =>
      !e.selection.isCollapsed() ||
      ((e) =>
        !!e.dom.getParent(
          e.selection.getStart(),
          "td[data-mce-selected],th[data-mce-selected]",
          e.getBody()
        ))(e),
    qE = (e, t) => {
      var n, o;
      return Ym.getCaretRangeFromPoint(
        null !== (n = t.clientX) && void 0 !== n ? n : 0,
        null !== (o = t.clientY) && void 0 !== o ? o : 0,
        e.getDoc()
      );
    },
    WE = (e, t) => {
      e.focus(), t && e.selection.setRng(t);
    },
    KE = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
    GE = (e) => Tt.trim(e).replace(KE, du).toLowerCase(),
    YE = (e, t, n) => {
      const o = md(e);
      if (n || "all" === o || !fd(e)) return t;
      const r = o ? o.split(/[, ]/) : [];
      if (r && "none" !== o) {
        const n = e.dom,
          o = e.selection.getNode();
        t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, (e, t, s, a) => {
          const i = n.parseStyle(n.decode(s)),
            l = {};
          for (let e = 0; e < r.length; e++) {
            const t = i[r[e]];
            let s = t,
              a = n.getStyle(o, r[e], !0);
            /color/.test(r[e]) && ((s = GE(s)), (a = GE(a))),
              a !== s && (l[r[e]] = t);
          }
          const d = n.serializeStyle(l, "span");
          return d ? t + ' style="' + d + '"' + a : t + a;
        });
      } else t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
      return (
        (t = t.replace(
          /(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,
          (e, t, n, o) => t + ' style="' + n + '"' + o
        )),
        t
      );
    },
    XE = (e) => {
      const t = ra(!1),
        n = ra(hd(e) ? "text" : "html"),
        o = ((e) => {
          const t = ra(null);
          return {
            create: () =>
              ((e, t) => {
                const { dom: n, selection: o } = e,
                  r = e.getBody();
                t.set(o.getRng());
                const s = n.add(
                  e.getBody(),
                  "div",
                  {
                    id: "mcepastebin",
                    class: "mce-pastebin",
                    contentEditable: !0,
                    "data-mce-bogus": "all",
                    style:
                      "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0",
                  },
                  CE
                );
                Nt.browser.isFirefox() &&
                  n.setStyle(
                    s,
                    "left",
                    "rtl" === n.getStyle(r, "direction", !0) ? 65535 : -65535
                  ),
                  n.bind(s, "beforedeactivate focusin focusout", (e) => {
                    e.stopPropagation();
                  }),
                  s.focus(),
                  o.select(s, !0);
              })(e, t),
            remove: () =>
              ((e, t) => {
                const n = e.dom;
                if (wE(e)) {
                  let o;
                  const r = t.get();
                  for (; (o = wE(e)); ) n.remove(o), n.unbind(o);
                  r && e.selection.setRng(r);
                }
                t.set(null);
              })(e, t),
            getEl: () => wE(e),
            getHtml: () =>
              ((e) => {
                const t = e.dom,
                  n = (e, n) => {
                    e.appendChild(n), t.remove(n, !0);
                  },
                  [o, ...r] = K(e.getBody().childNodes, xE);
                V(r, (e) => {
                  n(o, e);
                });
                const s = t.select("div[id=mcepastebin]", o);
                for (let e = s.length - 1; e >= 0; e--) {
                  const r = t.create("div");
                  o.insertBefore(r, s[e]), n(r, s[e]);
                }
                return o ? o.innerHTML : "";
              })(e),
            getLastRng: t.get,
          };
        })(e);
      ((e) => {
        (Nt.browser.isChromium() || Nt.browser.isSafari()) &&
          ((e, t) => {
            e.on("PastePreProcess", (n) => {
              n.content = t(e, n.content, n.internal);
            });
          })(e, YE);
      })(e),
        ((e, t) => {
          e.addCommand("mceTogglePlainTextPaste", () => {
            ((e, t) => {
              "text" === t.get()
                ? (t.set("html"), hm(e, !1))
                : (t.set("text"), hm(e, !0)),
                e.focus();
            })(e, t);
          }),
            e.addCommand("mceInsertClipboardContent", (t, n) => {
              n.html && DE(e, n.html, n.internal), n.text && PE(e, n.text);
            });
        })(e, n),
        ((e) => {
          const t = (t) => (n) => {
              t(e, n);
            },
            n = cd(e);
          w(n) && e.on("PastePreProcess", t(n));
          const o = ud(e);
          w(o) && e.on("PastePostProcess", t(o));
        })(e),
        e.on("PreInit", () => {
          ((e) => {
            e.on(
              "cut",
              ((e) => (t) => {
                !t.isDefaultPrevented() &&
                  VE(e) &&
                  jE(t, $E(e), HE(e), () => {
                    if (Nt.browser.isChromium() || Nt.browser.isFirefox()) {
                      const t = e.selection.getRng();
                      Af.setEditorTimeout(
                        e,
                        () => {
                          e.selection.setRng(t), e.execCommand("Delete");
                        },
                        0
                      );
                    } else e.execCommand("Delete");
                  });
              })(e)
            ),
              e.on(
                "copy",
                ((e) => (t) => {
                  !t.isDefaultPrevented() && VE(e) && jE(t, $E(e), HE(e), S);
                })(e)
              );
          })(e),
            ((e, t) => {
              ld(e) &&
                e.on("dragend dragover draggesture dragdrop drop drag", (e) => {
                  e.preventDefault(), e.stopPropagation();
                }),
                dd(e) ||
                  e.on("drop", (e) => {
                    const t = e.dataTransfer;
                    t &&
                      ((e) => H(e.files, (e) => /^image\//.test(e.type)))(t) &&
                      e.preventDefault();
                  }),
                e.on("drop", (n) => {
                  if (n.isDefaultPrevented() || t.get()) return;
                  const o = qE(e, n);
                  if (y(o)) return;
                  const r = LE(n.dataTransfer),
                    s = ME(r, hE());
                  if (
                    (!IE(r) ||
                      ((e) => {
                        const t = e["text/plain"];
                        return !!t && 0 === t.indexOf("file://");
                      })(r)) &&
                    FE(e, n, o)
                  )
                    return;
                  const a = r[hE()],
                    i = a || r["text/html"] || r["text/plain"];
                  i &&
                    (n.preventDefault(),
                    Af.setEditorTimeout(e, () => {
                      e.undoManager.transact(() => {
                        a && e.execCommand("Delete"), WE(e, o);
                        const t = _E(i);
                        r["text/html"] ? DE(e, t, s) : PE(e, t);
                      });
                    }));
                }),
                e.on("dragstart", (e) => {
                  t.set(!0);
                }),
                e.on("dragover dragend", (n) => {
                  dd(e) && !t.get() && (n.preventDefault(), WE(e, qE(e, n))),
                    "dragend" === n.type && t.set(!1);
                });
            })(e, t),
            zE(e, o, n);
        });
    },
    QE = Po,
    JE = Ro,
    ZE = (e) => Io(e.dom),
    eN = (e) => (t) => bn(mn(e), t),
    tN = (e, t) => Ko(mn(e), ZE, eN(t)),
    nN = (e, t, n) => {
      const o = new Zo(e, t),
        r = n ? o.next.bind(o) : o.prev.bind(o);
      let s = e;
      for (let t = n ? e : r(); t && !QE(t); t = r()) Gr(t) && (s = t);
      return s;
    },
    oN = (e) => {
      const t = ((e, t) => {
        const n = ai.fromRangeStart(e).getNode(),
          o = ((e, t) =>
            Ko(mn(e), (e) => ((e) => Mo(e.dom))(e) || nr(e), eN(t)).getOr(mn(t))
              .dom)(n, t),
          r = nN(n, o, !1),
          s = nN(n, o, !0),
          a = document.createRange();
        return (
          tN(r, o).fold(
            () => {
              JE(r) ? a.setStart(r, 0) : a.setStartBefore(r);
            },
            (e) => a.setStartBefore(e.dom)
          ),
          tN(s, o).fold(
            () => {
              JE(s) ? a.setEnd(s, s.data.length) : a.setEndAfter(s);
            },
            (e) => a.setEndAfter(e.dom)
          ),
          a
        );
      })(e.selection.getRng(), e.getBody());
      e.selection.setRng(uh(t));
    };
  var rN;
  !(function (e) {
    (e.Before = "before"), (e.After = "after");
  })(rN || (rN = {}));
  const sN = (e, t) => Math.abs(e.left - t),
    aN = (e, t) => Math.abs(e.right - t),
    iN = (e, t) =>
      ((e) =>
        Y(
          e,
          (e, t) =>
            e.fold(
              () => M.some(t),
              (e) => {
                const n = Math.min(t.left, e.left),
                  o = Math.min(t.top, e.top),
                  r = Math.max(t.right, e.right),
                  s = Math.max(t.bottom, e.bottom);
                return M.some({
                  top: o,
                  right: r,
                  bottom: s,
                  left: n,
                  width: r - n,
                  height: s - o,
                });
              }
            ),
          M.none()
        ))(
        K(e, (e) => {
          return (n = t) >= (o = e).top && n <= o.bottom;
          var n, o;
        })
      ).fold(
        () => [[], e],
        (t) => {
          const { pass: n, fail: o } = W(e, (e) =>
            ((e, t) => {
              const n =
                ((e, t) =>
                  Math.max(
                    0,
                    Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)
                  ))(e, t) / Math.min(e.height, t.height);
              return (
                ((e, t) => e.top < t.bottom && e.bottom > t.top)(e, t) &&
                n > 0.5
              );
            })(e, t)
          );
          return [n, o];
        }
      ),
    lN = (e, t, n) =>
      t > e.left && t < e.right
        ? 0
        : Math.min(Math.abs(e.left - t), Math.abs(e.right - t)),
    dN = (e, t, n) => {
      const o = (e) =>
          Gr(e.node)
            ? M.some(e)
            : yo(e.node)
            ? dN(de(e.node.childNodes), t, n)
            : M.none(),
        r = (e, r) => {
          const s = se(e, (e, o) => r(e, t, n) - r(o, t, n));
          return ((e, r) => {
            if (e.length >= 2) {
              const s = o(e[0]).getOr(e[0]),
                a = o(e[1]).getOr(e[1]);
              if (Math.abs(r(s, t, n) - r(a, t, n)) < 2) {
                if (Ro(s.node)) return M.some(s);
                if (Ro(a.node)) return M.some(a);
              }
            }
            return M.none();
          })(s, r).orThunk(() => ce(s, o));
        },
        [s, a] = iN(cx(e), n),
        { pass: i, fail: l } = W(a, (e) => e.top < n);
      return r(s, lN)
        .orThunk(() => r(l, Fa))
        .orThunk(() => r(i, Fa));
    },
    cN = (e, t, n) =>
      ((e, t, n) => {
        const o = mn(e),
          r = Cn(o),
          s = fn(r, t, n)
            .filter((e) => vn(o, e))
            .getOr(o);
        return ((e, t, n, o) => {
          const r = (t, s) =>
            s
              .fold(
                () => dN(de(t.dom.childNodes), n, o),
                (e) => {
                  const r = K(de(t.dom.childNodes), (t) => t !== e.dom);
                  return dN(r, n, o);
                }
              )
              .orThunk(() => {
                var n;
                return (
                  bn(t, e)
                    ? M.none()
                    : ((n = t), M.from(n.dom.parentElement).map(mn))
                ).bind((e) => r(e, M.some(t)));
              });
          return r(t, M.none());
        })(o, s, t, n);
      })(e, t, n)
        .filter((e) => Hd(e.node))
        .map((e) =>
          ((e, t) => ({
            node: e.node,
            position: sN(e, t) < aN(e, t) ? rN.Before : rN.After,
          }))(e, t)
        ),
    uN = (e) => {
      var t, n;
      const o = e.getBoundingClientRect(),
        r = e.ownerDocument,
        s = r.documentElement,
        a = r.defaultView;
      return {
        top:
          o.top +
          (null !== (t = null == a ? void 0 : a.scrollY) && void 0 !== t
            ? t
            : 0) -
          s.clientTop,
        left:
          o.left +
          (null !== (n = null == a ? void 0 : a.scrollX) && void 0 !== n
            ? n
            : 0) -
          s.clientLeft,
      };
    },
    mN = Io,
    fN = (
      (...e) =>
      (t) => {
        for (let n = 0; n < e.length; n++) if (e[n](t)) return !0;
        return !1;
      }
    )(mN, Mo),
    gN = (e, t, n, o) => {
      const r = e.dom,
        s = t.cloneNode(!0);
      r.setStyles(s, { width: n, height: o }),
        r.setAttrib(s, "data-mce-selected", null);
      const a = r.create("div", {
        class: "mce-drag-container",
        "data-mce-bogus": "all",
        unselectable: "on",
        contenteditable: "false",
      });
      return (
        r.setStyles(a, {
          position: "absolute",
          opacity: 0.5,
          overflow: "hidden",
          border: 0,
          padding: 0,
          margin: 0,
          width: n,
          height: o,
        }),
        r.setStyles(s, { margin: 0, boxSizing: "border-box" }),
        a.appendChild(s),
        a
      );
    },
    pN = (e, t) => (n) => () => {
      const o = "left" === e ? n.scrollX : n.scrollY;
      n.scroll({ [e]: o + t, behavior: "smooth" });
    },
    hN = pN("left", -32),
    bN = pN("left", 32),
    vN = pN("top", -32),
    yN = pN("top", 32),
    CN = (e) => {
      e && e.parentNode && e.parentNode.removeChild(e);
    },
    wN = (e, t) => {
      const n = ma((e, n) => {
        t._selectionOverrides.hideFakeCaret(), t.selection.placeCaretAt(e, n);
      }, 0);
      t.on("remove", n.cancel);
      const o = e;
      return (r) =>
        e.on((e) => {
          const s = Math.max(
            Math.abs(r.screenX - e.screenX),
            Math.abs(r.screenY - e.screenY)
          );
          if (!e.dragging && s > 10) {
            if (
              t
                .dispatch("dragstart", { target: e.element })
                .isDefaultPrevented()
            )
              return;
            (e.dragging = !0), t.focus();
          }
          if (e.dragging) {
            const s = ((e, t) => ({
              pageX: t.pageX - e.relX,
              pageY: t.pageY + 5,
            }))(
              e,
              ((e, t) => {
                return (
                  (n = ((e) =>
                    e.inline ? uN(e.getBody()) : { left: 0, top: 0 })(e)),
                  (o = ((e) => {
                    const t = e.getBody();
                    return e.inline
                      ? { left: t.scrollLeft, top: t.scrollTop }
                      : { left: 0, top: 0 };
                  })(e)),
                  (r = ((e, t) => {
                    if (t.target.ownerDocument !== e.getDoc()) {
                      const n = uN(e.getContentAreaContainer()),
                        o = ((e) => {
                          const t = e.getBody(),
                            n = e.getDoc().documentElement,
                            o = { left: t.scrollLeft, top: t.scrollTop },
                            r = {
                              left: t.scrollLeft || n.scrollLeft,
                              top: t.scrollTop || n.scrollTop,
                            };
                          return e.inline ? o : r;
                        })(e);
                      return {
                        left: t.pageX - n.left + o.left,
                        top: t.pageY - n.top + o.top,
                      };
                    }
                    return { left: t.pageX, top: t.pageY };
                  })(e, t)),
                  {
                    pageX: r.left - n.left + o.left,
                    pageY: r.top - n.top + o.top,
                  }
                );
                var n, o, r;
              })(t, r)
            );
            (a = e.ghost),
              (i = t.getBody()),
              a.parentNode !== i && i.appendChild(a),
              ((e, t, n, o, r, s, a, i, l, d, c) => {
                let u = 0,
                  m = 0;
                (e.style.left = t.pageX + "px"),
                  (e.style.top = t.pageY + "px"),
                  t.pageX + n > r && (u = t.pageX + n - r),
                  t.pageY + o > s && (m = t.pageY + o - s),
                  (e.style.width = n - u + "px"),
                  (e.style.height = o - m + "px");
                const f = l.clientHeight,
                  g = l.clientWidth,
                  p = a + l.getBoundingClientRect().top,
                  h = i + l.getBoundingClientRect().left;
                c.on((e) => {
                  e.intervalId.clear(),
                    e.dragging &&
                      (a + 8 >= f
                        ? e.intervalId.set(yN(d))
                        : a - 8 <= 0
                        ? e.intervalId.set(vN(d))
                        : i + 8 >= g
                        ? e.intervalId.set(bN(d))
                        : i - 8 <= 0
                        ? e.intervalId.set(hN(d))
                        : p + 16 >= window.innerHeight
                        ? e.intervalId.set(yN(window))
                        : p - 16 <= 0
                        ? e.intervalId.set(vN(window))
                        : h + 16 >= window.innerWidth
                        ? e.intervalId.set(bN(window))
                        : h - 16 <= 0 && e.intervalId.set(hN(window)));
                });
              })(
                e.ghost,
                s,
                e.width,
                e.height,
                e.maxX,
                e.maxY,
                r.clientY,
                r.clientX,
                t.getContentAreaContainer(),
                t.getWin(),
                o
              ),
              n.throttle(r.clientX, r.clientY);
          }
          var a, i;
        });
    },
    xN = (e) => {
      e.on((e) => {
        e.intervalId.clear(), CN(e.ghost);
      }),
        e.clear();
    },
    kN = (e) => {
      const t = ua(),
        n = ta.DOM,
        o = document,
        r = ((e, t) => (n) => {
          if (((e) => 0 === e.button)(n)) {
            const s = Q(t.dom.getParents(n.target), fN).getOr(null);
            if (C(s) && ((o = t.getBody()), mN((r = s)) && r !== o)) {
              const o = t.dom.getPos(s),
                r = t.getBody(),
                a = t.getDoc().documentElement;
              e.set({
                element: s,
                dragging: !1,
                screenX: n.screenX,
                screenY: n.screenY,
                maxX: (t.inline ? r.scrollWidth : a.offsetWidth) - 2,
                maxY: (t.inline ? r.scrollHeight : a.offsetHeight) - 2,
                relX: n.pageX - o.x,
                relY: n.pageY - o.y,
                width: s.offsetWidth,
                height: s.offsetHeight,
                ghost: gN(t, s, s.offsetWidth, s.offsetHeight),
                intervalId: ca(100),
              });
            }
          }
          var o, r;
        })(t, e),
        s = wN(t, e),
        a = ((e, t) => (n) => {
          e.on((e) => {
            if ((e.intervalId.clear(), e.dragging)) {
              if (
                ((e, t, n) =>
                  !y(t) && t !== n && !e.dom.isChildOf(t, n) && !mN(t))(
                  t,
                  ((e) => {
                    const t = e.getSel();
                    if (C(t)) {
                      const e = t.getRangeAt(0).startContainer;
                      return Ro(e) ? e.parentNode : e;
                    }
                    return null;
                  })(t.selection),
                  e.element
                )
              ) {
                const o = ((e) => {
                  const t = e.cloneNode(!0);
                  return t.removeAttribute("data-mce-selected"), t;
                })(e.element);
                t
                  .dispatch("drop", { clientX: n.clientX, clientY: n.clientY })
                  .isDefaultPrevented() ||
                  t.undoManager.transact(() => {
                    CN(e.element),
                      t.insertContent(t.dom.getOuterHTML(o)),
                      t._selectionOverrides.hideFakeCaret();
                  });
              }
              t.dispatch("dragend");
            }
          }),
            xN(e);
        })(t, e),
        i = ((e, t) => () => {
          e.on((e) => {
            e.intervalId.clear(), e.dragging && t.dispatch("dragend");
          }),
            xN(e);
        })(t, e);
      e.on("mousedown", r),
        e.on("mousemove", s),
        e.on("mouseup", a),
        n.bind(o, "mousemove", s),
        n.bind(o, "mouseup", i),
        e.on("remove", () => {
          n.unbind(o, "mousemove", s), n.unbind(o, "mouseup", i);
        }),
        e.on("keydown", (e) => {
          e.keyCode === bm.ESC && i();
        });
    },
    SN = Io,
    _N = (e, t) => Zp(e.getBody(), t),
    EN = (e) => {
      const t = e.selection,
        n = e.dom,
        o = e.getBody(),
        r = Ud(e, o, n.isBlock, () => If(e)),
        s = "sel-" + n.uniqueId(),
        a = "data-mce-selected";
      let i;
      const l = (e) => e !== o && (SN(e) || zo(e)) && n.isChildOf(e, o),
        d = (n, o, s, a = !0) =>
          e
            .dispatch("ShowCaret", { target: o, direction: n, before: s })
            .isDefaultPrevented()
            ? null
            : (a && t.scrollIntoView(o, -1 === n), r.show(s, o)),
        c = (e) => Br(e) || Mr(e) || Ir(e),
        u = (e) => c(e.startContainer) || c(e.endContainer),
        m = (t) => {
          const o = e.schema.getVoidElements(),
            r = n.createRng(),
            s = t.startContainer,
            a = t.startOffset,
            i = t.endContainer,
            l = t.endOffset;
          return (
            xe(o, s.nodeName.toLowerCase())
              ? 0 === a
                ? r.setStartBefore(s)
                : r.setStartAfter(s)
              : r.setStart(s, a),
            xe(o, i.nodeName.toLowerCase())
              ? 0 === l
                ? r.setEndBefore(i)
                : r.setEndAfter(i)
              : r.setEnd(i, l),
            r
          );
        },
        f = (r, c) => {
          if (!r) return null;
          if (r.collapsed) {
            if (!u(r)) {
              const e = c ? 1 : -1,
                t = mc(e, o, r),
                n = t.getNode(!c);
              if (Hd(n)) return d(e, n, !!c && !t.isAtEnd(), !1);
              const s = t.getNode(c);
              if (Hd(s)) return d(e, s, !c && !t.isAtEnd(), !1);
            }
            return null;
          }
          let m = r.startContainer,
            f = r.startOffset;
          const g = r.endOffset;
          if (
            (Ro(m) &&
              0 === f &&
              SN(m.parentNode) &&
              ((m = m.parentNode), (f = n.nodeIndex(m)), (m = m.parentNode)),
            !yo(m))
          )
            return null;
          if (g === f + 1 && m === r.endContainer) {
            const o = m.childNodes[f];
            if (l(o))
              return ((o) => {
                const r = o.cloneNode(!0),
                  l = e.dispatch("ObjectSelected", {
                    target: o,
                    targetClone: r,
                  });
                if (l.isDefaultPrevented()) return null;
                const d = ((o, r) => {
                    const a = mn(e.getBody()),
                      i = e.getDoc(),
                      l = Yo(a, "#" + s).getOrThunk(() => {
                        const e = dn(
                          '<div data-mce-bogus="all" class="mce-offscreen-selection"></div>',
                          i
                        );
                        return Vt(e, "id", s), Jn(a, e), e;
                      }),
                      d = n.createRng();
                    eo(l),
                      Zn(l, [un(pr, i), mn(r), un(pr, i)]),
                      d.setStart(l.dom.firstChild, 1),
                      d.setEnd(l.dom.lastChild, 0),
                      $n(l, { top: n.getPos(o, e.getBody()).y + "px" }),
                      bf(l);
                    const c = t.getSel();
                    return c && (c.removeAllRanges(), c.addRange(d)), d;
                  })(o, l.targetClone),
                  c = mn(o);
                return (
                  V(vr(mn(e.getBody()), "*[data-mce-selected]"), (e) => {
                    bn(c, e) || Yt(e, a);
                  }),
                  n.getAttrib(o, a) || o.setAttribute(a, "1"),
                  (i = o),
                  p(),
                  d
                );
              })(o);
          }
          return null;
        },
        g = () => {
          i && i.removeAttribute(a),
            Yo(mn(e.getBody()), "#" + s).each(to),
            (i = null);
        },
        p = () => {
          r.hide();
        };
      return (
        By(e) ||
          (e.on("click", (t) => {
            const n = _N(e, t.target);
            n && SN(n) && (t.preventDefault(), e.focus());
          }),
          e.on("blur NewBlock", g),
          e.on("ResizeWindow FullscreenStateChanged", r.reposition),
          e.on(
            "tap",
            (t) => {
              const n = t.target,
                o = _N(e, n);
              SN(o)
                ? (t.preventDefault(), tw(e, o).each(f))
                : l(n) && tw(e, n).each(f);
            },
            !0
          ),
          e.on("mousedown", (r) => {
            const s = r.target;
            if (s !== o && "HTML" !== s.nodeName && !n.isChildOf(s, o)) return;
            if (
              !((e, t, n) => {
                const o = mn(e.getBody()),
                  r = e.inline ? o : mn(Cn(o).dom.documentElement),
                  s = ((e, t, n, o) => {
                    const r = ((e) => e.dom.getBoundingClientRect())(t);
                    return {
                      x: n - (e ? r.left + t.dom.clientLeft + rC(t) : 0),
                      y: o - (e ? r.top + t.dom.clientTop + oC(t) : 0),
                    };
                  })(e.inline, r, t, n);
                return ((e, t, n) => {
                  const o = tC(e),
                    r = nC(e);
                  return t >= 0 && n >= 0 && t <= o && n <= r;
                })(r, s.x, s.y);
              })(e, r.clientX, r.clientY)
            )
              return;
            g(), p();
            const a = _N(e, s);
            SN(a)
              ? (r.preventDefault(), tw(e, a).each(f))
              : cN(o, r.clientX, r.clientY).each((n) => {
                  var o;
                  r.preventDefault(),
                    (o = d(1, n.node, n.position === rN.Before, !1)) &&
                      t.setRng(o),
                    yo(a) ? a.focus() : e.getBody().focus();
                });
          }),
          e.on("keypress", (e) => {
            bm.modifierPressed(e) || (SN(t.getNode()) && e.preventDefault());
          }),
          e.on("GetSelectionRange", (e) => {
            let t = e.range;
            if (i) {
              if (!i.parentNode) return void (i = null);
              (t = t.cloneRange()), t.selectNode(i), (e.range = t);
            }
          }),
          e.on("SetSelectionRange", (e) => {
            e.range = m(e.range);
            const t = f(e.range, e.forward);
            t && (e.range = t);
          }),
          e.on("AfterSetSelectionRange", (e) => {
            const t = e.range,
              o = t.startContainer.parentElement;
            var r;
            u(t) || (yo((r = o)) && "mcepastebin" === r.id) || p(),
              ((e) => C(e) && n.hasClass(e, "mce-offscreen-selection"))(o) ||
                g();
          }),
          ((e) => {
            kN(e),
              Ql(e) &&
                ((e) => {
                  const t = (t) => {
                      if (!t.isDefaultPrevented()) {
                        const n = t.dataTransfer;
                        n &&
                          (j(n.types, "Files") || n.files.length > 0) &&
                          (t.preventDefault(),
                          "drop" === t.type &&
                            cC(e, "Dropped file type is not supported"));
                      }
                    },
                    n = (n) => {
                      Bf(e, n.target) && t(n);
                    },
                    o = () => {
                      const o = ta.DOM,
                        r = e.dom,
                        s = document,
                        a = e.inline ? e.getBody() : e.getDoc(),
                        i = ["drop", "dragover"];
                      V(i, (e) => {
                        o.bind(s, e, n), r.bind(a, e, t);
                      }),
                        e.on("remove", () => {
                          V(i, (e) => {
                            o.unbind(s, e, n), r.unbind(a, e, t);
                          });
                        });
                    };
                  e.on("init", () => {
                    Af.setEditorTimeout(e, o, 0);
                  });
                })(e);
          })(e),
          ((e) => {
            const t = ma(() => {
              if (!e.removed && e.getBody().contains(document.activeElement)) {
                const t = e.selection.getRng();
                if (t.collapsed) {
                  const n = nw(e, t, !1);
                  e.selection.setRng(n);
                }
              }
            }, 0);
            e.on("focus", () => {
              t.throttle();
            }),
              e.on("blur", () => {
                t.cancel();
              });
          })(e),
          ((e) => {
            e.on("init", () => {
              e.on("focusin", (t) => {
                const n = t.target;
                if (zo(n)) {
                  const t = Zp(e.getBody(), n),
                    o = Io(t) ? t : n;
                  e.selection.getNode() !== o &&
                    tw(e, o).each((t) => e.selection.setRng(t));
                }
              });
            });
          })(e)),
        {
          showCaret: d,
          showBlockCaretContainer: (e) => {
            e.hasAttribute("data-mce-caret") && (Fr(e), t.scrollIntoView(e));
          },
          hideFakeCaret: p,
          destroy: () => {
            r.destroy(), (i = null);
          },
        }
      );
    },
    NN = (e, t) => {
      let n = t;
      for (let t = e.previousSibling; Ro(t); t = t.previousSibling)
        n += t.data.length;
      return n;
    },
    RN = (e, t, n, o, r) => {
      if (Ro(n) && (o < 0 || o > n.data.length)) return [];
      const s = r && Ro(n) ? [NN(n, o)] : [o];
      let a = n;
      for (; a !== t && a.parentNode; )
        s.push(e.nodeIndex(a, r)), (a = a.parentNode);
      return a === t ? s.reverse() : [];
    },
    AN = (e, t, n, o, r, s, a = !1) => ({
      start: RN(e, t, n, o, a),
      end: RN(e, t, r, s, a),
    }),
    ON = (e, t) => {
      const n = t.slice(),
        o = n.pop();
      return x(o)
        ? Y(
            n,
            (e, t) => e.bind((e) => M.from(e.childNodes[t])),
            M.some(e)
          ).bind((e) =>
            Ro(e) && (o < 0 || o > e.data.length)
              ? M.none()
              : M.some({ node: e, offset: o })
          )
        : M.none();
    },
    TN = (e, t) =>
      ON(e, t.start).bind(({ node: n, offset: o }) =>
        ON(e, t.end).map(({ node: e, offset: t }) => {
          const r = document.createRange();
          return r.setStart(n, o), r.setEnd(e, t), r;
        })
      ),
    BN = (e, t, n) => {
      if (t && e.isEmpty(t) && !n(t)) {
        const o = t.parentNode;
        e.remove(t), BN(e, o, n);
      }
    },
    DN = (e, t, n, o = !0) => {
      const r = t.startContainer.parentNode,
        s = t.endContainer.parentNode;
      t.deleteContents(),
        o &&
          !n(t.startContainer) &&
          (Ro(t.startContainer) &&
            0 === t.startContainer.data.length &&
            e.remove(t.startContainer),
          Ro(t.endContainer) &&
            0 === t.endContainer.data.length &&
            e.remove(t.endContainer),
          BN(e, r, n),
          r !== s && BN(e, s, n));
    },
    PN = (e, t) => M.from(e.dom.getParent(t.startContainer, e.dom.isBlock)),
    LN = (e, t, n) => {
      const o = e.dynamicPatternsLookup({ text: n, block: t });
      return {
        ...e,
        blockPatterns: Li(o).concat(e.blockPatterns),
        inlinePatterns: Mi(o).concat(e.inlinePatterns),
      };
    },
    MN = (e, t, n, o) => {
      const r = e.createRng();
      return r.setStart(t, 0), r.setEnd(n, o), r.toString();
    },
    IN = (e, t, n) => {
      ((e, t, n) => {
        if (Ro(e) && 0 >= e.length) return M.some(Xk(e, 0));
        {
          const t = Ta(Qk);
          return M.from(t.forwards(e, 0, Jk(e), n)).map((e) =>
            Xk(e.container, 0)
          );
        }
      })(t, 0, t).each((o) => {
        const r = o.container;
        tS(r, n.start.length, t).each((n) => {
          const o = e.createRng();
          o.setStart(r, 0),
            o.setEnd(n.container, n.offset),
            DN(e, o, (e) => e === t);
        });
      });
    },
    FN = (e, t) => e.create("span", { "data-mce-type": "bookmark", id: t }),
    UN = (e, t) => {
      const n = e.createRng();
      return n.setStartAfter(t.start), n.setEndBefore(t.end), n;
    },
    zN = (e, t, n) => {
      const o = TN(e.getRoot(), n).getOrDie("Unable to resolve path range"),
        r = o.startContainer,
        s = o.endContainer,
        a = 0 === o.endOffset ? s : s.splitText(o.endOffset),
        i = 0 === o.startOffset ? r : r.splitText(o.startOffset),
        l = i.parentNode;
      return {
        prefix: t,
        end: a.parentNode.insertBefore(FN(e, t + "-end"), a),
        start: l.insertBefore(FN(e, t + "-start"), i),
      };
    },
    jN = (e, t, n) => {
      BN(e, e.get(t.prefix + "-end"), n), BN(e, e.get(t.prefix + "-start"), n);
    },
    HN = (e) => 0 === e.start.length,
    $N = (e, t, n, o) => {
      const r = t.start;
      var s;
      return nS(
        e,
        o.container,
        o.offset,
        ((s = r),
        (e, t) => {
          const n = e.data.substring(0, t),
            o = n.lastIndexOf(s.charAt(s.length - 1)),
            r = n.lastIndexOf(s);
          return -1 !== r ? r + s.length : -1 !== o ? o + 1 : -1;
        }),
        n
      ).bind((o) => {
        if (o.offset >= r.length) {
          const t = e.createRng();
          return (
            t.setStart(o.container, o.offset - r.length),
            t.setEnd(o.container, o.offset),
            M.some(t)
          );
        }
        {
          const s = o.offset - r.length;
          return eS(o.container, s, n)
            .map((t) => {
              const n = e.createRng();
              return (
                n.setStart(t.container, t.offset),
                n.setEnd(o.container, o.offset),
                n
              );
            })
            .filter((e) => e.toString() === r)
            .orThunk(() => $N(e, t, n, Xk(o.container, 0)));
        }
      });
    },
    VN = (e, t, n, o) => {
      const r = e.dom,
        s = r.getRoot(),
        a = n.pattern,
        i = n.position.container,
        l = n.position.offset;
      return eS(i, l - n.pattern.end.length, t).bind((d) => {
        const c = AN(r, s, d.container, d.offset, i, l, o);
        if (HN(a))
          return M.some({
            matches: [{ pattern: a, startRng: c, endRng: c }],
            position: d,
          });
        {
          const i = qN(e, n.remainingPatterns, d.container, d.offset, t, o),
            l = i.getOr({ matches: [], position: d }),
            u = l.position,
            m = ((e, t, n, o, r, s = !1) => {
              if (0 === t.start.length && !s) {
                const t = e.createRng();
                return t.setStart(n, o), t.setEnd(n, o), M.some(t);
              }
              return Zk(n, o, r).bind((n) =>
                $N(e, t, r, n).bind((e) => {
                  var t;
                  if (s) {
                    if (
                      e.endContainer === n.container &&
                      e.endOffset === n.offset
                    )
                      return M.none();
                    if (
                      0 === n.offset &&
                      (null === (t = e.endContainer.textContent) || void 0 === t
                        ? void 0
                        : t.length) === e.endOffset
                    )
                      return M.none();
                  }
                  return M.some(e);
                })
              );
            })(r, a, u.container, u.offset, t, i.isNone());
          return m.map((e) => {
            const t = ((e, t, n, o = !1) =>
              AN(
                e,
                t,
                n.startContainer,
                n.startOffset,
                n.endContainer,
                n.endOffset,
                o
              ))(r, s, e, o);
            return {
              matches: l.matches.concat([
                { pattern: a, startRng: t, endRng: c },
              ]),
              position: Xk(e.startContainer, e.startOffset),
            };
          });
        }
      });
    },
    qN = (e, t, n, o, r, s) => {
      const a = e.dom;
      return Zk(n, o, a.getRoot()).bind((i) => {
        const l = MN(a, r, n, o);
        for (let n = 0; n < t.length; n++) {
          const o = t[n];
          if (!je(l, o.end)) continue;
          const a = t.slice();
          a.splice(n, 1);
          const d = VN(
            e,
            r,
            { pattern: o, remainingPatterns: a, position: i },
            s
          );
          if (d.isSome()) return d;
        }
        return M.none();
      });
    },
    WN = (e, t, n) => {
      e.selection.setRng(n),
        "inline-format" === t.type
          ? V(t.format, (t) => {
              e.formatter.apply(t);
            })
          : e.execCommand(t.cmd, !1, t.value);
    },
    KN = (e, t, n, o, r, s) =>
      qN(e, r.inlinePatterns, n, o, t, s).fold(
        () => [],
        (e) => e.matches
      ),
    GN = (e, t) => {
      if (0 === t.length) return;
      const n = e.dom,
        o = e.selection.getBookmark(),
        r = ((e, t) => {
          const n = Ea("mce_textpattern"),
            o = G(
              t,
              (t, o) => {
                const r = zN(e, n + `_end${t.length}`, o.endRng);
                return t.concat([{ ...o, endMarker: r }]);
              },
              []
            );
          return G(
            o,
            (t, r) => {
              const s = o.length - t.length - 1,
                a = HN(r.pattern)
                  ? r.endMarker
                  : zN(e, n + `_start${s}`, r.startRng);
              return t.concat([{ ...r, startMarker: a }]);
            },
            []
          );
        })(n, t);
      V(r, (t) => {
        const o = n.getParent(t.startMarker.start, n.isBlock),
          r = (e) => e === o;
        HN(t.pattern)
          ? ((e, t, n, o) => {
              const r = UN(e.dom, n);
              DN(e.dom, r, o), WN(e, t, r);
            })(e, t.pattern, t.endMarker, r)
          : ((e, t, n, o, r) => {
              const s = e.dom,
                a = UN(s, o),
                i = UN(s, n);
              DN(s, i, r), DN(s, a, r);
              const l = { prefix: n.prefix, start: n.end, end: o.start },
                d = UN(s, l);
              WN(e, t, d);
            })(e, t.pattern, t.startMarker, t.endMarker, r),
          jN(n, t.endMarker, r),
          jN(n, t.startMarker, r);
      }),
        e.selection.moveToBookmark(o);
    },
    YN = (e, t) => {
      const n = e.selection.getRng();
      return PN(e, n)
        .map((o) => {
          var r;
          const s = Math.max(0, n.startOffset),
            a = LN(t, o, null !== (r = o.textContent) && void 0 !== r ? r : ""),
            i = KN(e, o, n.startContainer, s, a, !0),
            l = ((e, t, n, o) => {
              var r;
              const s = e.dom,
                a = Ji(e);
              if (!s.is(t, a)) return [];
              const i = null !== (r = t.textContent) && void 0 !== r ? r : "";
              return ((e, t) => {
                const n = ((e) =>
                    se(e, (e, t) => t.start.length - e.start.length))(e),
                  o = t.replace(pr, " ");
                return Q(
                  n,
                  (e) => 0 === t.indexOf(e.start) || 0 === o.indexOf(e.start)
                );
              })(n.blockPatterns, i)
                .map((e) =>
                  Tt.trim(i).length === e.start.length
                    ? []
                    : [
                        {
                          pattern: e,
                          range: AN(s, s.getRoot(), t, 0, t, 0, true),
                        },
                      ]
                )
                .getOr([]);
            })(e, o, a);
          return (
            (l.length > 0 || i.length > 0) &&
            (e.undoManager.add(),
            e.undoManager.extra(
              () => {
                e.execCommand("mceInsertNewLine");
              },
              () => {
                e.insertContent(gr),
                  GN(e, i),
                  ((e, t) => {
                    if (0 === t.length) return;
                    const n = e.selection.getBookmark();
                    V(t, (t) =>
                      ((e, t) => {
                        const n = e.dom,
                          o = t.pattern,
                          r = TN(n.getRoot(), t.range).getOrDie(
                            "Unable to resolve path range"
                          );
                        return (
                          PN(e, r).each((t) => {
                            "block-format" === o.type
                              ? ((e, t) => {
                                  const n = t.get(e);
                                  return (
                                    p(n) && ie(n).exists((e) => xe(e, "block"))
                                  );
                                })(o.format, e.formatter) &&
                                e.undoManager.transact(() => {
                                  IN(e.dom, t, o), e.formatter.apply(o.format);
                                })
                              : "block-command" === o.type &&
                                e.undoManager.transact(() => {
                                  IN(e.dom, t, o),
                                    e.execCommand(o.cmd, !1, o.value);
                                });
                          }),
                          !0
                        );
                      })(e, t)
                    ),
                      e.selection.moveToBookmark(n);
                  })(e, l);
                const t = e.selection.getRng(),
                  n = Zk(t.startContainer, t.startOffset, e.dom.getRoot());
                e.execCommand("mceInsertNewLine"),
                  n.each((t) => {
                    const n = t.container;
                    n.data.charAt(t.offset - 1) === gr &&
                      (n.deleteData(t.offset - 1, 1),
                      BN(e.dom, n.parentNode, (t) => t === e.dom.getRoot()));
                  });
              }
            ),
            !0)
          );
        })
        .getOr(!1);
    },
    XN = (e, t, n) => {
      for (let o = 0; o < e.length; o++) if (n(e[o], t)) return !0;
      return !1;
    },
    QN = (e) => {
      const t = Tt.each,
        n = bm.BACKSPACE,
        o = bm.DELETE,
        r = e.dom,
        s = e.selection,
        a = e.parser,
        i = Nt.browser,
        l = i.isFirefox(),
        d = i.isChromium() || i.isSafari(),
        c = Nt.deviceType.isiPhone() || Nt.deviceType.isiPad(),
        u = Nt.os.isMacOS() || Nt.os.isiOS(),
        m = (t, n) => {
          try {
            e.getDoc().execCommand(t, !1, String(n));
          } catch (e) {}
        },
        f = (e) => e.isDefaultPrevented(),
        g = () => {
          e.shortcuts.add("meta+a", null, "SelectAll");
        },
        p = () => {
          e.inline ||
            r.bind(e.getDoc(), "mousedown mouseup", (t) => {
              let n;
              if (t.target === e.getDoc().documentElement)
                if (
                  ((n = s.getRng()),
                  e.getBody().focus(),
                  "mousedown" === t.type)
                ) {
                  if (Br(n.startContainer)) return;
                  s.placeCaretAt(t.clientX, t.clientY);
                } else s.setRng(n);
            });
        },
        h = () => {
          Range.prototype.getClientRects ||
            e.on("mousedown", (t) => {
              if (!f(t) && "HTML" === t.target.nodeName) {
                const t = e.getBody();
                t.blur(),
                  Af.setEditorTimeout(e, () => {
                    t.focus();
                  });
              }
            });
        },
        b = () => {
          const t = ed(e);
          e.on("click", (n) => {
            const o = n.target;
            /^(IMG|HR)$/.test(o.nodeName) &&
              "false" !== r.getContentEditableParent(o) &&
              (n.preventDefault(), e.selection.select(o), e.nodeChanged()),
              "A" === o.nodeName &&
                r.hasClass(o, t) &&
                0 === o.childNodes.length &&
                (n.preventDefault(), s.select(o));
          });
        },
        v = () => {
          e.on("keydown", (e) => {
            if (
              !f(e) &&
              e.keyCode === n &&
              s.isCollapsed() &&
              0 === s.getRng().startOffset
            ) {
              const t = s.getNode().previousSibling;
              if (t && t.nodeName && "table" === t.nodeName.toLowerCase())
                return e.preventDefault(), !1;
            }
            return !0;
          });
        },
        y = () => {
          Kl(e) ||
            e.on("BeforeExecCommand mousedown", () => {
              m("StyleWithCSS", !1),
                m("enableInlineTableEditing", !1),
                _l(e) || m("enableObjectResizing", !1);
            });
        },
        C = () => {
          e.contentStyles.push(
            "img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"
          );
        },
        w = () => {
          e.inline ||
            e.on("keydown", () => {
              document.activeElement === document.body && e.getWin().focus();
            });
        },
        x = () => {
          e.inline ||
            (e.contentStyles.push("body {min-height: 150px}"),
            e.on("click", (t) => {
              let n;
              "HTML" === t.target.nodeName &&
                ((n = e.selection.getRng()),
                e.getBody().focus(),
                e.selection.setRng(n),
                e.selection.normalize(),
                e.nodeChanged());
            }));
        },
        k = () => {
          u &&
            e.on("keydown", (t) => {
              !bm.metaKeyPressed(t) ||
                t.shiftKey ||
                (37 !== t.keyCode && 39 !== t.keyCode) ||
                (t.preventDefault(),
                e.selection
                  .getSel()
                  .modify(
                    "move",
                    37 === t.keyCode ? "backward" : "forward",
                    "lineboundary"
                  ));
            });
        },
        _ = () => {
          e.on("click", (e) => {
            let t = e.target;
            do {
              if ("A" === t.tagName) return void e.preventDefault();
            } while ((t = t.parentNode));
          }),
            e.contentStyles.push(
              ".mce-content-body {-webkit-touch-callout: none}"
            );
        },
        E = () => {
          e.on("init", () => {
            e.dom.bind(e.getBody(), "submit", (e) => {
              e.preventDefault();
            });
          });
        },
        N = S;
      return (
        By(e)
          ? (d && (p(), b(), E(), g(), c && (w(), x(), _())),
            l && (h(), y(), C(), k()))
          : (e.on("keydown", (t) => {
              if (f(t) || t.keyCode !== bm.BACKSPACE) return;
              let n = s.getRng();
              const o = n.startContainer,
                a = n.startOffset,
                i = r.getRoot();
              let l = o;
              if (n.collapsed && 0 === a) {
                for (
                  ;
                  l.parentNode &&
                  l.parentNode.firstChild === l &&
                  l.parentNode !== i;

                )
                  l = l.parentNode;
                "BLOCKQUOTE" === l.nodeName &&
                  (e.formatter.toggle("blockquote", void 0, l),
                  (n = r.createRng()),
                  n.setStart(o, 0),
                  n.setEnd(o, 0),
                  s.setRng(n));
              }
            }),
            (() => {
              const t = (e) => {
                const t = r.create("body"),
                  n = e.cloneContents();
                return (
                  t.appendChild(n),
                  s.serializer.serialize(t, { format: "html" })
                );
              };
              e.on("keydown", (s) => {
                const a = s.keyCode;
                if (!f(s) && (a === o || a === n)) {
                  const n = e.selection.isCollapsed(),
                    o = e.getBody();
                  if (n && !r.isEmpty(o)) return;
                  if (
                    !n &&
                    !((n) => {
                      const o = t(n),
                        s = r.createRng();
                      return s.selectNode(e.getBody()), o === t(s);
                    })(e.selection.getRng())
                  )
                    return;
                  s.preventDefault(),
                    e.setContent(""),
                    o.firstChild && r.isBlock(o.firstChild)
                      ? e.selection.setCursorLocation(o.firstChild, 0)
                      : e.selection.setCursorLocation(o, 0),
                    e.nodeChanged();
                }
              });
            })(),
            Nt.windowsPhone ||
              e.on(
                "keyup focusin mouseup",
                (t) => {
                  bm.modifierPressed(t) ||
                    ((e) => {
                      const t = e.getBody(),
                        n = e.selection.getRng();
                      return (
                        n.startContainer === n.endContainer &&
                        n.startContainer === t &&
                        0 === n.startOffset &&
                        n.endOffset === t.childNodes.length
                      );
                    })(e) ||
                    s.normalize();
                },
                !0
              ),
            d &&
              (p(),
              b(),
              e.on("init", () => {
                m("DefaultParagraphSeparator", Ji(e));
              }),
              E(),
              v(),
              a.addNodeFilter("br", (e) => {
                let t = e.length;
                for (; t--; )
                  "Apple-interchange-newline" === e[t].attr("class") &&
                    e[t].remove();
              }),
              c ? (w(), x(), _()) : g()),
            l &&
              (e.on("keydown", (t) => {
                if (!f(t) && t.keyCode === n) {
                  if (!e.getBody().getElementsByTagName("hr").length) return;
                  if (s.isCollapsed() && 0 === s.getRng().startOffset) {
                    const e = s.getNode(),
                      n = e.previousSibling;
                    if ("HR" === e.nodeName)
                      return r.remove(e), void t.preventDefault();
                    n &&
                      n.nodeName &&
                      "hr" === n.nodeName.toLowerCase() &&
                      (r.remove(n), t.preventDefault());
                  }
                }
              }),
              h(),
              (() => {
                const n = () => {
                    const n = r.getAttribs(s.getStart().cloneNode(!1));
                    return () => {
                      const o = s.getStart();
                      o !== e.getBody() &&
                        (r.setAttrib(o, "style", null),
                        t(n, (e) => {
                          o.setAttributeNode(e.cloneNode(!0));
                        }));
                    };
                  },
                  o = () =>
                    !s.isCollapsed() &&
                    r.getParent(s.getStart(), r.isBlock) !==
                      r.getParent(s.getEnd(), r.isBlock);
                e.on("keypress", (t) => {
                  let r;
                  return !(
                    !(f(t) || (8 !== t.keyCode && 46 !== t.keyCode)) &&
                    o() &&
                    ((r = n()),
                    e.getDoc().execCommand("delete", !1),
                    r(),
                    t.preventDefault(),
                    1)
                  );
                }),
                  r.bind(e.getDoc(), "cut", (t) => {
                    if (!f(t) && o()) {
                      const t = n();
                      Af.setEditorTimeout(e, () => {
                        t();
                      });
                    }
                  });
              })(),
              y(),
              e.on("SetContent ExecCommand", (e) => {
                ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                  t(r.select("a"), (e) => {
                    var t;
                    let n = e.parentNode;
                    const o = r.getRoot();
                    if ((null == n ? void 0 : n.lastChild) === e) {
                      for (; n && !r.isBlock(n); ) {
                        if (
                          (null === (t = n.parentNode) || void 0 === t
                            ? void 0
                            : t.lastChild) !== n ||
                          n === o
                        )
                          return;
                        n = n.parentNode;
                      }
                      r.add(n, "br", { "data-mce-bogus": 1 });
                    }
                  });
              }),
              C(),
              k(),
              v())),
        {
          refreshContentEditable: N,
          isHidden: () => {
            if (!l || e.removed) return !1;
            const t = e.selection.getSel();
            return !t || !t.rangeCount || 0 === t.rangeCount;
          },
        }
      );
    },
    JN = ta.DOM,
    ZN = (e) => (e.inline ? e.getElement().nodeName.toLowerCase() : void 0),
    eR = (e) => ve(e, (e) => !1 === v(e)),
    tR = (e) => {
      const t = e.options.get,
        n = e.editorUpload.blobCache;
      return eR({
        allow_conditional_comments: t("allow_conditional_comments"),
        allow_html_data_urls: t("allow_html_data_urls"),
        allow_svg_data_urls: t("allow_svg_data_urls"),
        allow_html_in_named_anchor: t("allow_html_in_named_anchor"),
        allow_script_urls: t("allow_script_urls"),
        allow_unsafe_link_target: t("allow_unsafe_link_target"),
        convert_fonts_to_spans: t("convert_fonts_to_spans"),
        fix_list_elements: t("fix_list_elements"),
        font_size_legacy_values: t("font_size_legacy_values"),
        forced_root_block: t("forced_root_block"),
        forced_root_block_attrs: t("forced_root_block_attrs"),
        preserve_cdata: t("preserve_cdata"),
        remove_trailing_brs: t("remove_trailing_brs"),
        inline_styles: t("inline_styles"),
        root_name: ZN(e),
        validate: !0,
        blob_cache: n,
        document: e.getDoc(),
      });
    },
    nR = (e) => {
      const t = e.options.get;
      return eR({
        custom_elements: t("custom_elements"),
        extended_valid_elements: t("extended_valid_elements"),
        invalid_elements: t("invalid_elements"),
        invalid_styles: t("invalid_styles"),
        schema: t("schema"),
        valid_children: t("valid_children"),
        valid_classes: t("valid_classes"),
        valid_elements: t("valid_elements"),
        valid_styles: t("valid_styles"),
        verify_html: t("verify_html"),
        padd_empty_block_inline_children: t("format_empty_lines"),
      });
    },
    oR = (e) => (e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader),
    rR = (e) => {
      const t = oR(e),
        n = xl(e),
        o = e.contentCSS,
        r = () => {
          t.unloadAll(o), e.inline || e.ui.styleSheetLoader.unloadAll(n);
        },
        s = () => {
          e.removed ? r() : e.on("remove", r);
        };
      if (e.contentStyles.length > 0) {
        let t = "";
        Tt.each(e.contentStyles, (e) => {
          t += e + "\r\n";
        }),
          e.dom.addStyle(t);
      }
      const a = Promise.all(
          ((e, t, n) => {
            const o = [oR(e).loadAll(t)];
            return e.inline ? o : o.concat([e.ui.styleSheetLoader.loadAll(n)]);
          })(e, o, n)
        )
          .then(s)
          .catch(s),
        i = wl(e);
      return (
        i &&
          ((e, t) => {
            const n = mn(e.getBody()),
              o = Mn(Ln(n)),
              r = cn("style");
            Vt(r, "type", "text/css"),
              Jn(r, un(t)),
              Jn(o, r),
              e.on("remove", () => {
                to(r);
              });
          })(e, i),
        a
      );
    },
    sR = (e) => {
      !0 !== e.removed &&
        (((e) => {
          By(e) || e.load({ initial: !0, format: "html" }),
            (e.startContent = e.getContent({ format: "raw" }));
        })(e),
        ((e) => {
          e.bindPendingEventDelegates(),
            (e.initialized = !0),
            ((e) => {
              e.dispatch("Init");
            })(e),
            e.focus(!0),
            ((e) => {
              const t = e.dom.getRoot();
              e.inline ||
                (vu(e) && e.selection.getStart(!0) !== t) ||
                Ic(t).each((t) => {
                  const n = t.getNode(),
                    o = _o(n) ? Ic(n).getOr(t) : t;
                  e.selection.setRng(o.toRange());
                });
            })(e),
            e.nodeChanged({ initial: !0 });
          const t = od(e);
          w(t) && t.call(e, e),
            ((e) => {
              const t = sd(e);
              t &&
                Af.setEditorTimeout(
                  e,
                  () => {
                    let n;
                    (n = !0 === t ? e : e.editorManager.get(t)),
                      n &&
                        !n.destroyed &&
                        (n.focus(), n.selection.scrollIntoView());
                  },
                  100
                );
            })(e);
        })(e));
    },
    aR = (e) => {
      const t = e.getElement();
      let n = e.getDoc();
      e.inline &&
        (JN.addClass(t, "mce-content-body"),
        (e.contentDocument = n = document),
        (e.contentWindow = window),
        (e.bodyElement = t),
        (e.contentAreaContainer = t));
      const o = e.getBody();
      (o.disabled = !0),
        (e.readonly = Kl(e)),
        e.readonly ||
          (e.inline &&
            "static" === JN.getStyle(o, "position", !0) &&
            (o.style.position = "relative"),
          (o.contentEditable = "true")),
        (o.disabled = !1),
        (e.editorUpload = xC(e)),
        (e.schema = Ls(nR(e))),
        (e.dom = ta(n, {
          keep_values: !0,
          url_converter: e.convertURL,
          url_converter_scope: e,
          update_styles: !0,
          root_element: e.inline ? e.getBody() : null,
          collect: e.inline,
          schema: e.schema,
          contentCssCors: gl(e),
          referrerPolicy: pl(e),
          onSetAttrib: (t) => {
            e.dispatch("SetAttrib", t);
          },
        })),
        (e.parser = ((e) => {
          const t = Zv(tR(e), e.schema);
          return (
            t.addAttributeFilter("src,href,style,tabindex", (t, n) => {
              const o = e.dom,
                r = "data-mce-" + n;
              let s = t.length;
              for (; s--; ) {
                const a = t[s];
                let i = a.attr(n);
                if (i && !a.attr(r)) {
                  if (0 === i.indexOf("data:") || 0 === i.indexOf("blob:"))
                    continue;
                  "style" === n
                    ? ((i = o.serializeStyle(o.parseStyle(i), a.name)),
                      i.length || (i = null),
                      a.attr(r, i),
                      a.attr(n, i))
                    : "tabindex" === n
                    ? (a.attr(r, i), a.attr(n, null))
                    : a.attr(r, e.convertURL(i, n, a.name));
                }
              }
            }),
            t.addNodeFilter("script", (e) => {
              let t = e.length;
              for (; t--; ) {
                const n = e[t],
                  o = n.attr("type") || "no/type";
                0 !== o.indexOf("mce-") && n.attr("type", "mce-" + o);
              }
            }),
            Sd(e) &&
              t.addNodeFilter("#cdata", (t) => {
                var n;
                let o = t.length;
                for (; o--; ) {
                  const r = t[o];
                  (r.type = 8),
                    (r.name = "#comment"),
                    (r.value =
                      "[CDATA[" +
                      e.dom.encode(
                        null !== (n = r.value) && void 0 !== n ? n : ""
                      ) +
                      "]]");
                }
              }),
            t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", (t) => {
              let n = t.length;
              const o = e.schema.getNonEmptyElements();
              for (; n--; ) {
                const e = t[n];
                e.isEmpty(o) &&
                  0 === e.getAll("br").length &&
                  e.append(new Zf("br", 1));
              }
            }),
            t
          );
        })(e)),
        (e.serializer = $y(
          ((e) => {
            const t = e.options.get;
            return {
              ...tR(e),
              ...nR(e),
              ...eR({
                url_converter: t("url_converter"),
                url_converter_scope: t("url_converter_scope"),
                element_format: t("element_format"),
                entities: t("entities"),
                entity_encoding: t("entity_encoding"),
                indent: t("indent"),
                indent_after: t("indent_after"),
                indent_before: t("indent_before"),
              }),
            };
          })(e),
          e
        )),
        (e.selection = zy(e.dom, e.getWin(), e.serializer, e)),
        (e.annotator = lm(e)),
        (e.formatter = DC(e)),
        (e.undoManager = LC(e)),
        (e._nodeChangeDispatcher = new pE(e)),
        (e._selectionOverrides = EN(e)),
        ((e) => {
          const t = ua(),
            n = ra(!1),
            o = fa((t) => {
              e.dispatch("longpress", { ...t, type: "longpress" }), n.set(!0);
            }, 400);
          e.on(
            "touchstart",
            (e) => {
              Jx(e).each((r) => {
                o.cancel();
                const s = { x: r.clientX, y: r.clientY, target: e.target };
                o.throttle(e), n.set(!1), t.set(s);
              });
            },
            !0
          ),
            e.on(
              "touchmove",
              (r) => {
                o.cancel(),
                  Jx(r).each((o) => {
                    t.on((r) => {
                      ((e, t) => {
                        const n = Math.abs(e.clientX - t.x),
                          o = Math.abs(e.clientY - t.y);
                        return n > 5 || o > 5;
                      })(o, r) &&
                        (t.clear(), n.set(!1), e.dispatch("longpresscancel"));
                    });
                  });
              },
              !0
            ),
            e.on(
              "touchend touchcancel",
              (r) => {
                o.cancel(),
                  "touchcancel" !== r.type &&
                    t
                      .get()
                      .filter((e) => e.target.isEqualNode(r.target))
                      .each(() => {
                        n.get()
                          ? r.preventDefault()
                          : e.dispatch("tap", { ...r, type: "tap" });
                      });
              },
              !0
            );
        })(e),
        ((e) => {
          ((e) => {
            e.on("click", (t) => {
              e.dom.getParent(t.target, "details") && t.preventDefault();
            });
          })(e),
            ((e) => {
              e.parser.addNodeFilter("details", (e) => {
                V(e, (e) => {
                  e.attr("data-mce-open", e.attr("open")),
                    e.attr("open", "open");
                });
              }),
                e.serializer.addNodeFilter("details", (e) => {
                  V(e, (e) => {
                    const t = e.attr("data-mce-open");
                    e.attr("open", m(t) ? t : null),
                      e.attr("data-mce-open", null);
                  });
                });
            })(e);
        })(e),
        ((e) => {
          const t = "contenteditable",
            n = " " + Tt.trim(xd(e)) + " ",
            o = " " + Tt.trim(wd(e)) + " ",
            r = sk(n),
            s = sk(o),
            a = kd(e);
          a.length > 0 &&
            e.on("BeforeSetContent", (t) => {
              ((e, t, n) => {
                let o = t.length,
                  r = n.content;
                if ("raw" !== n.format) {
                  for (; o--; ) r = r.replace(t[o], ak(e, r, wd(e)));
                  n.content = r;
                }
              })(e, a, t);
            }),
            e.parser.addAttributeFilter("class", (e) => {
              let n = e.length;
              for (; n--; ) {
                const o = e[n];
                r(o) ? o.attr(t, "true") : s(o) && o.attr(t, "false");
              }
            }),
            e.serializer.addAttributeFilter(t, (e) => {
              let n = e.length;
              for (; n--; ) {
                const o = e[n];
                (r(o) || s(o)) &&
                  (a.length > 0 && o.attr("data-mce-content")
                    ? ((o.name = "#text"),
                      (o.type = 3),
                      (o.raw = !0),
                      (o.value = o.attr("data-mce-content")))
                    : o.attr(t, null));
              }
            });
        })(e),
        By(e) ||
          (((e) => {
            e.on("mousedown", (t) => {
              t.detail >= 3 && (t.preventDefault(), oN(e));
            });
          })(e),
          ((e) => {
            ((e) => {
              const t = [",", ".", ";", ":", "!", "?"],
                n = [32],
                o = () => {
                  return (
                    (t = yd(e)),
                    (n = Cd(e)),
                    {
                      inlinePatterns: Mi(t),
                      blockPatterns: Li(t),
                      dynamicPatternsLookup: n,
                    }
                  );
                  var t, n;
                },
                r = () => ((e) => e.options.isSet("text_patterns_lookup"))(e);
              e.on(
                "keydown",
                (t) => {
                  if (
                    13 === t.keyCode &&
                    !bm.modifierPressed(t) &&
                    e.selection.isCollapsed()
                  ) {
                    const n = o();
                    (n.inlinePatterns.length > 0 ||
                      n.blockPatterns.length > 0 ||
                      r()) &&
                      YN(e, n) &&
                      t.preventDefault();
                  }
                },
                !0
              );
              const s = () => {
                if (e.selection.isCollapsed()) {
                  const t = o();
                  (t.inlinePatterns.length > 0 || r()) &&
                    ((e, t) => {
                      const n = e.selection.getRng();
                      PN(e, n).map((o) => {
                        const r = Math.max(0, n.startOffset - 1),
                          s = MN(e.dom, o, n.startContainer, r),
                          a = LN(t, o, s),
                          i = KN(e, o, n.startContainer, r, a, !1);
                        i.length > 0 &&
                          e.undoManager.transact(() => {
                            GN(e, i);
                          });
                      });
                    })(e, t);
                }
              };
              e.on("keyup", (e) => {
                XN(n, e, (e, t) => e === t.keyCode && !bm.modifierPressed(t)) &&
                  s();
              }),
                e.on("keypress", (n) => {
                  XN(t, n, (e, t) => e.charCodeAt(0) === t.charCode) &&
                    Af.setEditorTimeout(e, s);
                });
            })(e);
          })(e));
      const r = gE(e);
      Qx(e, r),
        ((e) => {
          e.on("NodeChange", O(ok, e));
        })(e),
        ((e) => {
          var t;
          const n = e.dom,
            o = Ji(e),
            r = null !== (t = Nl(e)) && void 0 !== t ? t : "",
            s = (t, a) => {
              if (
                ((e) => {
                  if (FC(e)) {
                    const t = e.keyCode;
                    return (
                      !UC(e) &&
                      (bm.metaKeyPressed(e) ||
                        e.altKey ||
                        (t >= 112 && t <= 123) ||
                        j(MC, t))
                    );
                  }
                  return !1;
                })(t)
              )
                return;
              const i = e.getBody(),
                l =
                  !((e) =>
                    FC(e) &&
                    !(UC(e) || ("keyup" === e.type && 229 === e.keyCode)))(t) &&
                  ((e, t, n) => {
                    if (ss(mn(t), !1)) {
                      const o = t.firstElementChild;
                      return (
                        !o ||
                        (!e.getStyle(t.firstElementChild, "padding-left") &&
                          !e.getStyle(t.firstElementChild, "padding-right") &&
                          n === o.nodeName.toLowerCase())
                      );
                    }
                    return !1;
                  })(n, i, o);
              (("" !== n.getAttrib(i, IC)) !== l || a) &&
                (n.setAttrib(i, IC, l ? r : null),
                n.setAttrib(i, "aria-placeholder", l ? r : null),
                ((e, t) => {
                  e.dispatch("PlaceholderToggle", { state: t });
                })(e, l),
                e.on(l ? "keydown" : "keyup", s),
                e.off(l ? "keyup" : "keydown", s));
            };
          We(r) &&
            e.on("init", (t) => {
              s(t, !0),
                e.on("change SetContent ExecCommand", s),
                e.on("paste", (t) => Af.setEditorTimeout(e, () => s(t)));
            });
        })(e),
        XE(e);
      const s = ((e) => {
        const t = e;
        return ((e) => we(e.plugins, "rtc").bind((e) => M.from(e.setup)))(
          e
        ).fold(
          () => ((t.rtcInstance = Ty(e)), M.none()),
          (e) => (
            (t.rtcInstance = (() => {
              const e = N(null),
                t = N("");
              return {
                init: { bindEvents: S },
                undoManager: {
                  beforeChange: S,
                  add: e,
                  undo: e,
                  redo: e,
                  clear: S,
                  reset: S,
                  hasUndo: P,
                  hasRedo: P,
                  transact: e,
                  ignore: S,
                  extra: S,
                },
                formatter: {
                  match: P,
                  matchAll: N([]),
                  matchNode: N(void 0),
                  canApply: P,
                  closest: t,
                  apply: S,
                  remove: S,
                  toggle: S,
                  formatChanged: N({ unbind: S }),
                },
                editor: {
                  getContent: t,
                  setContent: N({ content: "", html: "" }),
                  insertContent: N(""),
                  addVisual: S,
                },
                selection: { getContent: t },
                autocompleter: { addDecoration: S, removeDecoration: S },
                raw: { getModel: N(M.none()) },
              };
            })()),
            M.some(() =>
              e().then(
                (e) => (
                  (t.rtcInstance = ((e) => {
                    const t = (e) => (f(e) ? e : {}),
                      {
                        init: n,
                        undoManager: o,
                        formatter: r,
                        editor: s,
                        selection: a,
                        autocompleter: i,
                        raw: l,
                      } = e;
                    return {
                      init: { bindEvents: n.bindEvents },
                      undoManager: {
                        beforeChange: o.beforeChange,
                        add: o.add,
                        undo: o.undo,
                        redo: o.redo,
                        clear: o.clear,
                        reset: o.reset,
                        hasUndo: o.hasUndo,
                        hasRedo: o.hasRedo,
                        transact: (e, t, n) => o.transact(n),
                        ignore: (e, t) => o.ignore(t),
                        extra: (e, t, n, r) => o.extra(n, r),
                      },
                      formatter: {
                        match: (e, n, o, s) => r.match(e, t(n), s),
                        matchAll: r.matchAll,
                        matchNode: r.matchNode,
                        canApply: (e) => r.canApply(e),
                        closest: (e) => r.closest(e),
                        apply: (e, n, o) => r.apply(e, t(n)),
                        remove: (e, n, o, s) => r.remove(e, t(n)),
                        toggle: (e, n, o) => r.toggle(e, t(n)),
                        formatChanged: (e, t, n, o, s) =>
                          r.formatChanged(t, n, o, s),
                      },
                      editor: {
                        getContent: (e) => s.getContent(e),
                        setContent: (e, t) => ({
                          content: s.setContent(e, t),
                          html: "",
                        }),
                        insertContent: (e, t) => (s.insertContent(e), ""),
                        addVisual: s.addVisual,
                      },
                      selection: { getContent: (e, t) => a.getContent(t) },
                      autocompleter: {
                        addDecoration: i.addDecoration,
                        removeDecoration: i.removeDecoration,
                      },
                      raw: { getModel: () => M.some(l.getRawModel()) },
                    };
                  })(e)),
                  e.rtc.isRemote
                )
              )
            )
          )
        );
      })(e);
      ((e) => {
        const t = e.getDoc(),
          n = e.getBody();
        ((e) => {
          e.dispatch("PreInit");
        })(e),
          ad(e) ||
            ((t.body.spellcheck = !1), JN.setAttrib(n, "spellcheck", "false")),
          (e.quirks = QN(e)),
          ((e) => {
            e.dispatch("PostRender");
          })(e);
        const o = kl(e);
        void 0 !== o && (n.dir = o);
        const r = id(e);
        r &&
          e.on("BeforeSetContent", (e) => {
            Tt.each(r, (t) => {
              e.content = e.content.replace(
                t,
                (e) => "\x3c!--mce:protected " + escape(e) + "--\x3e"
              );
            });
          }),
          e.on("SetContent", () => {
            e.addVisual(e.getBody());
          }),
          e.on("compositionstart compositionend", (t) => {
            e.composing = "compositionstart" === t.type;
          });
      })(e),
        s.fold(
          () => {
            rR(e).then(() => sR(e));
          },
          (t) => {
            e.setProgressState(!0),
              rR(e).then(() => {
                t().then(
                  (t) => {
                    e.setProgressState(!1), sR(e), Ly(e);
                  },
                  (t) => {
                    e.notificationManager.open({
                      type: "error",
                      text: String(t),
                    }),
                      sR(e),
                      Ly(e);
                  }
                );
              });
          }
        );
    },
    iR = (e, t) => {
      if (
        (e.inline || (e.getElement().style.visibility = e.orgVisibility),
        t || e.inline)
      )
        aR(e);
      else {
        const t = e.iframeElement,
          o =
            ((n = mn(t)),
            so(n, "load", pC, () => {
              o.unbind(), (e.contentDocument = t.contentDocument), aR(e);
            }));
        if (Nt.browser.isFirefox()) {
          const t = e.getDoc();
          t.open(), t.write(e.iframeHTML), t.close();
        } else t.srcdoc = e.iframeHTML;
      }
      var n;
    },
    lR = ta.DOM,
    dR = ta.DOM,
    cR = (e, t) => ({ editorContainer: e, iframeContainer: t, api: {} }),
    uR = (e) => {
      const t = e.getElement();
      return e.inline
        ? cR(null)
        : ((e) => {
            const t = dR.create("div");
            return dR.insertAfter(t, e), cR(t, t);
          })(t);
    },
    mR = (e) => {
      e.dispatch("ScriptsLoaded"),
        ((e) => {
          const t = Tt.trim(ll(e)),
            n = e.ui.registry.getAll().icons,
            o = { ...Qy.get("default").icons, ...Qy.get(t).icons };
          fe(o, (t, o) => {
            xe(n, o) || e.ui.registry.addIcon(o, t);
          });
        })(e),
        ((e) => {
          const t = Ol(e);
          if (m(t)) {
            const n = iC.get(t);
            (e.theme = n(e, iC.urls[t]) || {}),
              w(e.theme.init) &&
                e.theme.init(
                  e,
                  iC.urls[t] || e.documentBaseUrl.replace(/\/$/, "")
                );
          } else e.theme = {};
        })(e),
        ((e) => {
          const t = Bl(e),
            n = Jy.get(t);
          e.model = n(e, Jy.urls[t]);
        })(e),
        ((e) => {
          const t = [];
          V(Yl(e), (n) => {
            ((e, t, n) => {
              const o = aC.get(n),
                r = aC.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
              if (((n = Tt.trim(n)), o && -1 === Tt.inArray(t, n))) {
                if (e.plugins[n]) return;
                try {
                  const s = o(e, r) || {};
                  (e.plugins[n] = s), w(s.init) && (s.init(e, r), t.push(n));
                } catch (t) {
                  ((e, t, n) => {
                    const o = la.translate([
                      "Failed to initialize plugin: {0}",
                      t,
                    ]);
                    um(e, "PluginLoadError", { message: o }),
                      fC(o, n),
                      cC(e, o);
                  })(e, n, t);
                }
              }
            })(e, t, ((e) => e.replace(/^\-/, ""))(n));
          });
        })(e);
      const t = ((e) => {
        const t = e.getElement();
        return (
          (e.orgDisplay = t.style.display),
          m(Ol(e))
            ? ((e) => {
                const t = e.theme.renderUI;
                return t ? t() : uR(e);
              })(e)
            : w(Ol(e))
            ? ((e) => {
                const t = e.getElement(),
                  n = Ol(e)(e, t);
                return (
                  n.editorContainer.nodeType &&
                    (n.editorContainer.id =
                      n.editorContainer.id || e.id + "_parent"),
                  n.iframeContainer &&
                    n.iframeContainer.nodeType &&
                    (n.iframeContainer.id =
                      n.iframeContainer.id || e.id + "_iframecontainer"),
                  (n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight),
                  n
                );
              })(e)
            : uR(e)
        );
      })(e);
      ((e, t) => {
        const n = {
          show: M.from(t.show).getOr(S),
          hide: M.from(t.hide).getOr(S),
          isEnabled: M.from(t.isEnabled).getOr(L),
          setEnabled: (n) => {
            e.mode.isReadOnly() || M.from(t.setEnabled).each((e) => e(n));
          },
        };
        e.ui = { ...e.ui, ...n };
      })(e, M.from(t.api).getOr({})),
        (e.editorContainer = t.editorContainer),
        ((e) => {
          e.contentCSS = e.contentCSS.concat(
            ((e) => gC(e, Cl(e)))(e),
            ((e) => gC(e, xl(e)))(e)
          );
        })(e),
        e.inline
          ? iR(e)
          : ((e, t) => {
              ((e, t) => {
                const n = e.translate("Rich Text Area"),
                  o = Kt(mn(e.getElement()), "tabindex").bind(Ge),
                  r = ((e, t, n, o) => {
                    const r = cn("iframe");
                    return (
                      o.each((e) => Vt(r, "tabindex", e)),
                      qt(r, n),
                      qt(r, {
                        id: e + "_ifr",
                        frameBorder: "0",
                        allowTransparency: "true",
                        title: t,
                      }),
                      nn(r, "tox-edit-area__iframe"),
                      r
                    );
                  })(e.id, n, qi(e), o).dom;
                (r.onload = () => {
                  (r.onload = null), e.dispatch("load");
                }),
                  (e.contentAreaContainer = t.iframeContainer),
                  (e.iframeElement = r),
                  (e.iframeHTML = ((e) => {
                    let t = Wi(e) + "<html><head>";
                    Ki(e) !== e.documentBaseUrl &&
                      (t +=
                        '<base href="' + e.documentBaseURI.getURI() + '" />'),
                      (t +=
                        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
                    const n = Gi(e),
                      o = Yi(e),
                      r = e.translate(td(e));
                    return (
                      Xi(e) &&
                        (t +=
                          '<meta http-equiv="Content-Security-Policy" content="' +
                          Xi(e) +
                          '" />'),
                      (t += `</head><body id="${n}" class="mce-content-body ${o}" data-id="${e.id}" aria-label="${r}"><br></body></html>`),
                      t
                    );
                  })(e)),
                  lR.add(t.iframeContainer, r);
              })(e, t),
                t.editorContainer &&
                  ((t.editorContainer.style.display = e.orgDisplay),
                  (e.hidden = lR.isHidden(t.editorContainer))),
                (e.getElement().style.display = "none"),
                lR.setAttrib(e.id, "aria-hidden", "true"),
                iR(e);
            })(e, {
              editorContainer: t.editorContainer,
              iframeContainer: t.iframeContainer,
            });
    },
    fR = ta.DOM,
    gR = (e) => "-" === e.charAt(0),
    pR = (e, t, n) =>
      M.from(t)
        .filter((e) => We(e) && !Qy.has(e))
        .map((t) => ({
          url: `${e.editorManager.baseURL}/icons/${t}/icons${n}.js`,
          name: M.some(t),
        })),
    hR = (e, t) => {
      const n = oa.ScriptLoader,
        o = () => {
          !e.removed &&
            ((e) => {
              const t = Ol(e);
              return !m(t) || C(iC.get(t));
            })(e) &&
            ((e) => {
              const t = Bl(e);
              return C(Jy.get(t));
            })(e) &&
            mR(e);
        };
      ((e, t) => {
        const n = Ol(e);
        if (m(n) && !gR(n) && !xe(iC.urls, n)) {
          const o = Tl(e),
            r = o
              ? e.documentBaseURI.toAbsolute(o)
              : `themes/${n}/theme${t}.js`;
          iC.load(n, r).catch(() => {
            ((e, t, n) => {
              uC(e, "ThemeLoadError", mC("theme", t, n));
            })(e, r, n);
          });
        }
      })(e, t),
        ((e, t) => {
          const n = Bl(e);
          if ("plugin" !== n && !xe(Jy.urls, n)) {
            const o = Dl(e),
              r = m(o)
                ? e.documentBaseURI.toAbsolute(o)
                : `models/${n}/model${t}.js`;
            Jy.load(n, r).catch(() => {
              ((e, t, n) => {
                uC(e, "ModelLoadError", mC("model", t, n));
              })(e, r, n);
            });
          }
        })(e, t),
        ((e, t) => {
          const n = hl(t),
            o = bl(t);
          if (!la.hasCode(n) && "en" !== n) {
            const r = We(o) ? o : `${t.editorManager.baseURL}/langs/${n}.js`;
            e.add(r).catch(() => {
              ((e, t, n) => {
                uC(e, "LanguageLoadError", mC("language", t, n));
              })(t, r, n);
            });
          }
        })(n, e),
        ((e, t, n) => {
          const o = pR(t, "default", n),
            r = ((e) =>
              M.from(dl(e))
                .filter(We)
                .map((e) => ({ url: e, name: M.none() })))(t).orThunk(() =>
              pR(t, ll(t), "")
            );
          V(
            ((e) => {
              const t = [],
                n = (e) => {
                  t.push(e);
                };
              for (let t = 0; t < e.length; t++) e[t].each(n);
              return t;
            })([o, r]),
            (n) => {
              e.add(n.url).catch(() => {
                ((e, t, n) => {
                  uC(e, "IconsLoadError", mC("icons", t, n));
                })(t, n.url, n.name.getOrUndefined());
              });
            }
          );
        })(n, e, t),
        ((e, t) => {
          const n = (t, n) => {
            aC.load(t, n).catch(() => {
              ((e, t, n) => {
                uC(e, "PluginLoadError", mC("plugin", t, n));
              })(e, n, t);
            });
          };
          fe(Xl(e), (t, o) => {
            n(o, t), e.options.set("plugins", Yl(e).concat(o));
          }),
            V(Yl(e), (e) => {
              !(e = Tt.trim(e)) ||
                aC.urls[e] ||
                gR(e) ||
                n(e, `plugins/${e}/plugin${t}.js`);
            });
        })(e, t),
        n.loadQueue().then(o, o);
    },
    bR = Ct().deviceType,
    vR = bR.isPhone(),
    yR = bR.isTablet(),
    CR = (e) => {
      if (y(e)) return [];
      {
        const t = p(e) ? e : e.split(/[ ,]/),
          n = $(t, $e);
        return K(n, We);
      }
    },
    wR = (e, t) => {
      const n = ((t, n) => {
        const o = {},
          r = {};
        return be(t, (t, n) => j(e, n), he(o), he(r)), { t: o, f: r };
      })(t);
      return (o = n.t), (r = n.f), { sections: N(o), options: N(r) };
      var o, r;
    },
    xR = (e, t) => xe(e.sections(), t),
    kR = (e, t) => ({
      table_grid: !1,
      object_resizing: !1,
      resize: !1,
      toolbar_mode: we(e, "toolbar_mode").getOr("scrolling"),
      toolbar_sticky: !1,
      ...(t ? { menubar: !1 } : {}),
    }),
    SR = (e, t) => {
      var n;
      const o = null !== (n = t.external_plugins) && void 0 !== n ? n : {};
      return e && e.external_plugins ? Tt.extend({}, e.external_plugins, o) : o;
    },
    _R = (e, t, n, o, r) => {
      var s;
      const a = e
          ? { mobile: kR(null !== (s = r.mobile) && void 0 !== s ? s : {}, t) }
          : {},
        i = wR(["mobile"], yS(a, r)),
        l = Tt.extend(
          n,
          o,
          i.options(),
          ((e, t) => e && xR(t, "mobile"))(e, i)
            ? ((e, t, n = {}) => {
                const o = e.sections(),
                  r = we(o, t).getOr({});
                return Tt.extend({}, n, r);
              })(i, "mobile")
            : {},
          { external_plugins: SR(o, i.options()) }
        );
      return ((e, t, n, o) => {
        const r = CR(n.forced_plugins),
          s = CR(o.plugins),
          a = ((e, t) => (xR(e, t) ? e.sections()[t] : {}))(t, "mobile"),
          i = ((e, t, n, o) => (e && xR(t, "mobile") ? o : n))(
            e,
            t,
            s,
            a.plugins ? CR(a.plugins) : s
          ),
          l = ((e, t) => [...CR(e), ...CR(t)])(r, i);
        return Tt.extend(o, { forced_plugins: r, plugins: l });
      })(e, i, o, l);
    },
    ER = (e) => {
      ((e) => {
        const t = (t) => () => {
          V("left,center,right,justify".split(","), (n) => {
            t !== n && e.formatter.remove("align" + n);
          }),
            "none" !== t &&
              ((t, n) => {
                e.formatter.toggle(t, void 0), e.nodeChanged();
              })("align" + t);
        };
        e.editorCommands.addCommands({
          JustifyLeft: t("left"),
          JustifyCenter: t("center"),
          JustifyRight: t("right"),
          JustifyFull: t("justify"),
          JustifyNone: t("none"),
        });
      })(e),
        ((e) => {
          const t = (t) => () => {
            const n = e.selection,
              o = n.isCollapsed()
                ? [e.dom.getParent(n.getNode(), e.dom.isBlock)]
                : n.getSelectedBlocks();
            return H(o, (n) => C(e.formatter.matchNode(n, t)));
          };
          e.editorCommands.addCommands(
            {
              JustifyLeft: t("alignleft"),
              JustifyCenter: t("aligncenter"),
              JustifyRight: t("alignright"),
              JustifyFull: t("alignjustify"),
            },
            "state"
          );
        })(e);
    },
    NR = (e, t) => {
      const n = e.selection,
        o = e.dom;
      return /^ | $/.test(t)
        ? ((e, t, n) => {
            const o = mn(e.getRoot());
            return (
              (n = Yg(o, ai.fromRangeStart(t))
                ? n.replace(/^ /, "&nbsp;")
                : n.replace(/^&nbsp;/, " ")),
              Xg(o, ai.fromRangeEnd(t))
                ? n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;")
                : n.replace(/&nbsp;(<br( \/)?>)?$/, " ")
            );
          })(o, n.getRng(), t)
        : t;
    },
    RR = (e, t) => {
      const { content: n, details: o } = ((e) => {
        if ("string" != typeof e) {
          const t = Tt.extend({ paste: e.paste, data: { paste: e.paste } }, e);
          return { content: e.content, details: t };
        }
        return { content: e, details: {} };
      })(t);
      oy(e, {
        ...o,
        content: NR(e, n),
        format: "html",
        set: !1,
        selection: !0,
      }).each((t) => {
        const n = ((e, t, n) => Dy(e).editor.insertContent(t, n))(
          e,
          t.content,
          o
        );
        ry(e, n, t), e.addVisual();
      });
    },
    AR = { "font-size": "size", "font-family": "face" },
    OR = Ht("font"),
    TR = (e) => (t, n) =>
      M.from(n)
        .map(mn)
        .filter(Ft)
        .bind((n) =>
          ((e, t, n) =>
            Sh(
              mn(n),
              (t) =>
                ((t) =>
                  Wn(t, e).orThunk(() =>
                    OR(t) ? we(AR, e).bind((e) => Kt(t, e)) : M.none()
                  ))(t),
              (e) => bn(mn(t), e)
            ))(e, t, n.dom).or(
            ((e, t) => M.from(ta.DOM.getStyle(t, e, !0)))(e, n.dom)
          )
        )
        .getOr(""),
    BR = TR("font-size"),
    DR = _(
      (e) => e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ","),
      TR("font-family")
    ),
    PR = (e) =>
      Ic(e.getBody()).bind((e) => {
        const t = e.container();
        return M.from(Ro(t) ? t.parentNode : t);
      }),
    LR = (e, t) =>
      ((e, t) =>
        ((e) =>
          M.from(e.selection.getRng()).bind((t) => {
            const n = e.getBody();
            return t.startContainer === n && 0 === t.startOffset
              ? M.none()
              : M.from(e.selection.getStart(!0));
          }))(e)
          .orThunk(O(PR, e))
          .map(mn)
          .filter(Ft)
          .bind(t))(e, E(M.some, t)),
    MR = (e, t) => {
      if (/^[0-9.]+$/.test(t)) {
        const n = parseInt(t, 10);
        if (n >= 1 && n <= 7) {
          const o = ((e) =>
              Tt.explode(e.options.get("font_size_style_values")))(e),
            r = ((e) => Tt.explode(e.options.get("font_size_classes")))(e);
          return r.length > 0 ? r[n - 1] || t : o[n - 1] || t;
        }
        return t;
      }
      return t;
    },
    IR = (e) => {
      const t = e.split(/\s*,\s*/);
      return $(t, (e) =>
        -1 === e.indexOf(" ") || ze(e, '"') || ze(e, "'") ? e : `'${e}'`
      ).join(",");
    },
    FR = (e) => {
      ER(e),
        ((e) => {
          e.editorCommands.addCommands({
            "Cut,Copy,Paste": (t) => {
              const n = e.getDoc();
              let o;
              try {
                n.execCommand(t);
              } catch (e) {
                o = !0;
              }
              if (
                ("paste" !== t || n.queryCommandEnabled(t) || (o = !0),
                o || !n.queryCommandSupported(t))
              ) {
                let t = e.translate(
                  "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."
                );
                (Nt.os.isMacOS() || Nt.os.isiOS()) &&
                  (t = t.replace(/Ctrl\+/g, "\u2318+")),
                  e.notificationManager.open({ text: t, type: "error" });
              }
            },
          });
        })(e),
        ((e) => {
          e.editorCommands.addCommands({
            mceAddUndoLevel: () => {
              e.undoManager.add();
            },
            mceEndUndoLevel: () => {
              e.undoManager.add();
            },
            Undo: () => {
              e.undoManager.undo();
            },
            Redo: () => {
              e.undoManager.redo();
            },
          });
        })(e),
        ((e) => {
          e.editorCommands.addCommands({
            mceSelectNodeDepth: (t, n, o) => {
              let r = 0;
              e.dom.getParent(
                e.selection.getNode(),
                (t) => !yo(t) || r++ !== o || (e.selection.select(t), !1),
                e.getBody()
              );
            },
            mceSelectNode: (t, n, o) => {
              e.selection.select(o);
            },
            selectAll: () => {
              const t = e.dom.getParent(e.selection.getStart(), Mo);
              if (t) {
                const n = e.dom.createRng();
                n.selectNodeContents(t), e.selection.setRng(n);
              }
            },
          });
        })(e),
        ((e) => {
          e.editorCommands.addCommands({
            mceCleanup: () => {
              const t = e.selection.getBookmark();
              e.setContent(e.getContent()), e.selection.moveToBookmark(t);
            },
            insertImage: (t, n, o) => {
              RR(e, e.dom.createHTML("img", { src: o }));
            },
            insertHorizontalRule: () => {
              e.execCommand("mceInsertContent", !1, "<hr>");
            },
            insertText: (t, n, o) => {
              RR(e, e.dom.encode(o));
            },
            insertHTML: (t, n, o) => {
              RR(e, o);
            },
            mceInsertContent: (t, n, o) => {
              RR(e, o);
            },
            mceSetContent: (t, n, o) => {
              e.setContent(o);
            },
            mceReplaceContent: (t, n, o) => {
              e.execCommand(
                "mceInsertContent",
                !1,
                o.replace(
                  /\{\$selection\}/g,
                  e.selection.getContent({ format: "text" })
                )
              );
            },
            mceNewDocument: () => {
              e.setContent("");
            },
          });
        })(e),
        ((e) => {
          const t = (t, n, o) => {
            const r = m(o) ? { href: o } : o,
              s = e.dom.getParent(e.selection.getNode(), "a");
            f(r) &&
              m(r.href) &&
              ((r.href = r.href.replace(/ /g, "%20")),
              (s && r.href) || e.formatter.remove("link"),
              r.href && e.formatter.apply("link", r, s));
          };
          e.editorCommands.addCommands({
            unlink: () => {
              if (e.selection.isCollapsed()) {
                const t = e.dom.getParent(e.selection.getStart(), "a");
                t && e.dom.remove(t, !0);
              } else e.formatter.remove("link");
            },
            mceInsertLink: t,
            createLink: t,
          });
        })(e),
        ((e) => {
          e.editorCommands.addCommands({
            Indent: () => {
              ((e) => {
                Kx(e, "indent");
              })(e);
            },
            Outdent: () => {
              Gx(e);
            },
          }),
            e.editorCommands.addCommands({ Outdent: () => Vx(e) }, "state");
        })(e),
        ((e) => {
          e.editorCommands.addCommands({
            insertParagraph: () => {
              nE(L_, e);
            },
            mceInsertNewLine: (t, n, o) => {
              oE(e, o);
            },
            InsertLineBreak: (t, n, o) => {
              nE($_, e);
            },
          });
        })(e),
        ((e) => {
          ((e) => {
            e.editorCommands.addCommands({
              "InsertUnorderedList,InsertOrderedList": (t) => {
                e.getDoc().execCommand(t);
                const n = e.dom.getParent(e.selection.getNode(), "ol,ul");
                if (n) {
                  const t = n.parentNode;
                  if (t && /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName)) {
                    const o = e.selection.getBookmark();
                    e.dom.split(t, n), e.selection.moveToBookmark(o);
                  }
                }
              },
            });
          })(e),
            ((e) => {
              e.editorCommands.addCommands(
                {
                  "InsertUnorderedList,InsertOrderedList": (t) => {
                    const n = e.dom.getParent(e.selection.getNode(), "ul,ol");
                    return (
                      n &&
                      (("insertunorderedlist" === t && "UL" === n.tagName) ||
                        ("insertorderedlist" === t && "OL" === n.tagName))
                    );
                  },
                },
                "state"
              );
            })(e);
        })(e),
        ((e) => {
          ((e) => {
            const t = (t, n) => {
              e.formatter.toggle(t, n), e.nodeChanged();
            };
            e.editorCommands.addCommands({
              "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": (
                e
              ) => {
                t(e);
              },
              "ForeColor,HiliteColor": (e, n, o) => {
                t(e, { value: o });
              },
              BackColor: (e, n, o) => {
                t("hilitecolor", { value: o });
              },
              FontName: (t, n, o) => {
                ((e, t) => {
                  const n = MR(e, t);
                  e.formatter.toggle("fontname", { value: IR(n) }),
                    e.nodeChanged();
                })(e, o);
              },
              FontSize: (t, n, o) => {
                ((e, t) => {
                  e.formatter.toggle("fontsize", { value: MR(e, t) }),
                    e.nodeChanged();
                })(e, o);
              },
              LineHeight: (t, n, o) => {
                ((e, t) => {
                  e.formatter.toggle("lineheight", { value: String(t) }),
                    e.nodeChanged();
                })(e, o);
              },
              Lang: (e, n, o) => {
                var r;
                t(e, {
                  value: o.code,
                  customValue:
                    null !== (r = o.customCode) && void 0 !== r ? r : null,
                });
              },
              RemoveFormat: (t) => {
                e.formatter.remove(t);
              },
              mceBlockQuote: () => {
                t("blockquote");
              },
              FormatBlock: (e, n, o) => {
                t(m(o) ? o : "p");
              },
              mceToggleFormat: (e, n, o) => {
                t(o);
              },
            });
          })(e),
            ((e) => {
              const t = (t) => e.formatter.match(t);
              e.editorCommands.addCommands(
                {
                  "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": (
                    e
                  ) => t(e),
                  mceBlockQuote: () => t("blockquote"),
                },
                "state"
              ),
                e.editorCommands.addQueryValueHandler("FontName", () =>
                  ((e) => LR(e, (t) => DR(e.getBody(), t.dom)).getOr(""))(e)
                ),
                e.editorCommands.addQueryValueHandler("FontSize", () =>
                  ((e) => LR(e, (t) => BR(e.getBody(), t.dom)).getOr(""))(e)
                ),
                e.editorCommands.addQueryValueHandler("LineHeight", () =>
                  ((e) =>
                    LR(e, (t) => {
                      const n = mn(e.getBody()),
                        o = Sh(t, (e) => Wn(e, "line-height"), O(bn, n));
                      return o.getOrThunk(() => {
                        const e = parseFloat(Vn(t, "line-height")),
                          n = parseFloat(Vn(t, "font-size"));
                        return String(e / n);
                      });
                    }).getOr(""))(e)
                );
            })(e);
        })(e),
        ((e) => {
          e.editorCommands.addCommands({
            mceRemoveNode: (t, n, o) => {
              const r = null != o ? o : e.selection.getNode();
              if (r !== e.getBody()) {
                const t = e.selection.getBookmark();
                e.dom.remove(r, !0), e.selection.moveToBookmark(t);
              }
            },
            mcePrint: () => {
              e.getWin().print();
            },
            mceFocus: (t, n, o) => {
              ((e, t) => {
                e.removed ||
                  (t
                    ? Ff(e)
                    : ((e) => {
                        const t = e.selection,
                          n = e.getBody();
                        let o = t.getRng();
                        e.quirks.refreshContentEditable(),
                          C(e.bookmark) &&
                            !If(e) &&
                            Nf(e).each((t) => {
                              e.selection.setRng(t), (o = t);
                            });
                        const r = ((e, t) =>
                          e.dom.getParent(
                            t,
                            (t) => "true" === e.dom.getContentEditable(t)
                          ))(e, t.getNode());
                        if (r && e.dom.isChildOf(r, n))
                          return Mf(r), Lf(e, o), void Ff(e);
                        e.inline ||
                          (Nt.browser.isOpera() || Mf(n), e.getWin().focus()),
                          (Nt.browser.isFirefox() || e.inline) &&
                            (Mf(n), Lf(e, o)),
                          Ff(e);
                      })(e));
              })(e, !0 === o);
            },
            mceToggleVisualAid: () => {
              (e.hasVisual = !e.hasVisual), e.addVisual();
            },
          });
        })(e);
    };
  class UR {
    constructor(e) {
      (this.commands = { state: {}, exec: {}, value: {} }), (this.editor = e);
    }
    execCommand(e, t = !1, n, o) {
      const r = this.editor,
        s = e.toLowerCase(),
        a = null == o ? void 0 : o.skip_focus;
      if (r.removed) return !1;
      if (
        ("mcefocus" !== s &&
          (/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(s) || a
            ? ((e) => {
                Nf(e).each((t) => e.selection.setRng(t));
              })(r)
            : r.focus()),
        r
          .dispatch("BeforeExecCommand", { command: e, ui: t, value: n })
          .isDefaultPrevented())
      )
        return !1;
      const i = this.commands.exec[s];
      return (
        !!w(i) &&
        (i(s, t, n),
        r.dispatch("ExecCommand", { command: e, ui: t, value: n }),
        !0)
      );
    }
    queryCommandState(e) {
      if (this.editor.quirks.isHidden() || this.editor.removed) return !1;
      const t = e.toLowerCase(),
        n = this.commands.state[t];
      return !!w(n) && n(t);
    }
    queryCommandValue(e) {
      if (this.editor.quirks.isHidden() || this.editor.removed) return "";
      const t = e.toLowerCase(),
        n = this.commands.value[t];
      return w(n) ? n(t) : "";
    }
    addCommands(e, t = "exec") {
      const n = this.commands;
      fe(e, (e, o) => {
        V(o.toLowerCase().split(","), (o) => {
          n[t][o] = e;
        });
      });
    }
    addCommand(e, t, n) {
      const o = e.toLowerCase();
      this.commands.exec[o] = (e, o, r) =>
        t.call(null != n ? n : this.editor, o, r);
    }
    queryCommandSupported(e) {
      const t = e.toLowerCase();
      return !!this.commands.exec[t];
    }
    addQueryStateHandler(e, t, n) {
      this.commands.state[e.toLowerCase()] = () =>
        t.call(null != n ? n : this.editor);
    }
    addQueryValueHandler(e, t, n) {
      this.commands.value[e.toLowerCase()] = () =>
        t.call(null != n ? n : this.editor);
    }
  }
  const zR = "data-mce-contenteditable",
    jR = (e, t, n) => {
      try {
        e.getDoc().execCommand(t, !1, String(n));
      } catch (e) {}
    },
    HR = (e, t) => {
      e.dom.contentEditable = t ? "true" : "false";
    },
    $R = (e, t) => {
      const n = mn(e.getBody());
      ((e, t, n) => {
        sn(e, t) && !n ? rn(e, t) : n && nn(e, t);
      })(n, "mce-content-readonly", t),
        t
          ? (e.selection.controlSelection.hideResizeRect(),
            e._selectionOverrides.hideFakeCaret(),
            ((e) => {
              M.from(e.selection.getNode()).each((e) => {
                e.removeAttribute("data-mce-selected");
              });
            })(e),
            (e.readonly = !0),
            HR(n, !1),
            V(vr(n, '*[contenteditable="true"]'), (e) => {
              Vt(e, zR, "true"), HR(e, !1);
            }))
          : ((e.readonly = !1),
            HR(n, !0),
            V(vr(n, '*[data-mce-contenteditable="true"]'), (e) => {
              Yt(e, zR), HR(e, !0);
            }),
            jR(e, "StyleWithCSS", !1),
            jR(e, "enableInlineTableEditing", !1),
            jR(e, "enableObjectResizing", !1),
            ((e) =>
              If(e) ||
              ((e) => {
                const t = Ln(mn(e.getElement()));
                return yf(t)
                  .filter(
                    (t) =>
                      !((e) => {
                        const t = e.classList;
                        return (
                          void 0 !== t &&
                          (t.contains("tox-edit-area") ||
                            t.contains("tox-edit-area__iframe") ||
                            t.contains("mce-content-body"))
                        );
                      })(t.dom) && Bf(e, t.dom)
                  )
                  .isSome();
              })(e))(e) && e.focus(),
            ((e) => {
              e.selection.setRng(e.selection.getRng());
            })(e),
            e.nodeChanged());
    },
    VR = (e) => e.readonly,
    qR = (e) => {
      e.parser.addAttributeFilter("contenteditable", (t) => {
        VR(e) &&
          V(t, (e) => {
            e.attr(zR, e.attr("contenteditable")),
              e.attr("contenteditable", "false");
          });
      }),
        e.serializer.addAttributeFilter(zR, (t) => {
          VR(e) &&
            V(t, (e) => {
              e.attr("contenteditable", e.attr(zR));
            });
        }),
        e.serializer.addTempAttr(zR);
    },
    WR = ["copy"],
    KR = Tt.makeMap(
      "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel",
      " "
    );
  class GR {
    constructor(e) {
      (this.bindings = {}),
        (this.settings = e || {}),
        (this.scope = this.settings.scope || this),
        (this.toggleEvent = this.settings.toggleEvent || P);
    }
    static isNative(e) {
      return !!KR[e.toLowerCase()];
    }
    fire(e, t) {
      return this.dispatch(e, t);
    }
    dispatch(e, t) {
      const n = e.toLowerCase(),
        o = Us(n, null != t ? t : {}, this.scope);
      this.settings.beforeFire && this.settings.beforeFire(o);
      const r = this.bindings[n];
      if (r)
        for (let e = 0, t = r.length; e < t; e++) {
          const t = r[e];
          if (!t.removed) {
            if (
              (t.once && this.off(n, t.func), o.isImmediatePropagationStopped())
            )
              return o;
            if (!1 === t.func.call(this.scope, o)) return o.preventDefault(), o;
          }
        }
      return o;
    }
    on(e, t, n, o) {
      if ((!1 === t && (t = P), t)) {
        const r = { func: t, removed: !1 };
        o && Tt.extend(r, o);
        const s = e.toLowerCase().split(" ");
        let a = s.length;
        for (; a--; ) {
          const e = s[a];
          let t = this.bindings[e];
          t || ((t = []), this.toggleEvent(e, !0)),
            (t = n ? [r, ...t] : [...t, r]),
            (this.bindings[e] = t);
        }
      }
      return this;
    }
    off(e, t) {
      if (e) {
        const n = e.toLowerCase().split(" ");
        let o = n.length;
        for (; o--; ) {
          const r = n[o];
          let s = this.bindings[r];
          if (!r)
            return (
              fe(this.bindings, (e, t) => {
                this.toggleEvent(t, !1), delete this.bindings[t];
              }),
              this
            );
          if (s) {
            if (t) {
              const e = W(s, (e) => e.func === t);
              (s = e.fail),
                (this.bindings[r] = s),
                V(e.pass, (e) => {
                  e.removed = !0;
                });
            } else s.length = 0;
            s.length || (this.toggleEvent(e, !1), delete this.bindings[r]);
          }
        }
      } else
        fe(this.bindings, (e, t) => {
          this.toggleEvent(t, !1);
        }),
          (this.bindings = {});
      return this;
    }
    once(e, t, n) {
      return this.on(e, t, n, { once: !0 });
    }
    has(e) {
      e = e.toLowerCase();
      const t = this.bindings[e];
      return !(!t || 0 === t.length);
    }
  }
  const YR = (e) => (
      e._eventDispatcher ||
        (e._eventDispatcher = new GR({
          scope: e,
          toggleEvent: (t, n) => {
            GR.isNative(t) && e.toggleNativeEvent && e.toggleNativeEvent(t, n);
          },
        })),
      e._eventDispatcher
    ),
    XR = {
      fire(e, t, n) {
        return this.dispatch(e, t, n);
      },
      dispatch(e, t, n) {
        const o = this;
        if (o.removed && "remove" !== e && "detach" !== e)
          return Us(e.toLowerCase(), null != t ? t : {}, o);
        const r = YR(o).dispatch(e, t);
        if (!1 !== n && o.parent) {
          let t = o.parent();
          for (; t && !r.isPropagationStopped(); )
            t.dispatch(e, r, !1), (t = t.parent ? t.parent() : void 0);
        }
        return r;
      },
      on(e, t, n) {
        return YR(this).on(e, t, n);
      },
      off(e, t) {
        return YR(this).off(e, t);
      },
      once(e, t) {
        return YR(this).once(e, t);
      },
      hasEventListeners(e) {
        return YR(this).has(e);
      },
    },
    QR = ta.DOM;
  let JR;
  const ZR = (e, t) => {
      if ("selectionchange" === t) return e.getDoc();
      if (
        !e.inline &&
        /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
      )
        return e.getDoc().documentElement;
      const n = Rl(e);
      return n
        ? (e.eventRoot || (e.eventRoot = QR.select(n)[0]), e.eventRoot)
        : e.getBody();
    },
    eA = (e, t, n) => {
      ((e) => !e.hidden && !VR(e))(e)
        ? e.dispatch(t, n)
        : VR(e) &&
          ((e, t) => {
            if (((e) => "click" === e.type)(t) && !bm.metaKeyPressed(t)) {
              const n = mn(t.target);
              ((e, t) =>
                Xo(t, "a", (t) => bn(t, mn(e.getBody()))).bind((e) =>
                  Kt(e, "href")
                ))(e, n).each((n) => {
                if ((t.preventDefault(), /^#/.test(n))) {
                  const t = e.dom.select(
                    `${n},[name="${
                      ((o = n),
                      ze(o, "#")
                        ? ((e, t) => e.substring(t))(o, "#".length)
                        : o)
                    }"]`
                  );
                  t.length && e.selection.scrollIntoView(t[0], !0);
                } else
                  window.open(
                    n,
                    "_blank",
                    "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes"
                  );
                var o;
              });
            } else ((e) => j(WR, e.type))(t) && e.dispatch(t.type, t);
          })(e, n);
    },
    tA = (e, t) => {
      if ((e.delegates || (e.delegates = {}), e.delegates[t] || e.removed))
        return;
      const n = ZR(e, t);
      if (Rl(e)) {
        if (
          (JR ||
            ((JR = {}),
            e.editorManager.on("removeEditor", () => {
              e.editorManager.activeEditor ||
                (JR &&
                  (fe(JR, (t, n) => {
                    e.dom.unbind(ZR(e, n));
                  }),
                  (JR = null)));
            })),
          JR[t])
        )
          return;
        const o = (n) => {
          const o = n.target,
            r = e.editorManager.get();
          let s = r.length;
          for (; s--; ) {
            const e = r[s].getBody();
            (e === o || QR.isChildOf(o, e)) && eA(r[s], t, n);
          }
        };
        (JR[t] = o), QR.bind(n, t, o);
      } else {
        const o = (n) => {
          eA(e, t, n);
        };
        QR.bind(n, t, o), (e.delegates[t] = o);
      }
    },
    nA = {
      ...XR,
      bindPendingEventDelegates() {
        const e = this;
        Tt.each(e._pendingNativeEvents, (t) => {
          tA(e, t);
        });
      },
      toggleNativeEvent(e, t) {
        const n = this;
        "focus" !== e &&
          "blur" !== e &&
          (n.removed ||
            (t
              ? n.initialized
                ? tA(n, e)
                : n._pendingNativeEvents
                ? n._pendingNativeEvents.push(e)
                : (n._pendingNativeEvents = [e])
              : n.initialized &&
                n.delegates &&
                (n.dom.unbind(ZR(n, e), e, n.delegates[e]),
                delete n.delegates[e])));
      },
      unbindAllNativeEvents() {
        const e = this,
          t = e.getBody(),
          n = e.dom;
        e.delegates &&
          (fe(e.delegates, (t, n) => {
            e.dom.unbind(ZR(e, n), n, t);
          }),
          delete e.delegates),
          !e.inline &&
            t &&
            n &&
            ((t.onload = null), n.unbind(e.getWin()), n.unbind(e.getDoc())),
          n && (n.unbind(t), n.unbind(e.getContainer()));
      },
    },
    oA = (e) =>
      m(e)
        ? { value: e.split(/[ ,]/), valid: !0 }
        : k(e, m)
        ? { value: e, valid: !0 }
        : {
            valid: !1,
            message:
              "The value must be a string[] or a comma/space separated string.",
          },
    rA = (e, t) => e + (Ke(t.message) ? "" : `. ${t.message}`),
    sA = (e) => e.valid,
    aA = (e, t, n = "") => {
      const o = t(e);
      return b(o)
        ? o
          ? { value: e, valid: !0 }
          : { valid: !1, message: n }
        : o;
    },
    iA = ["design", "readonly"],
    lA = (e, t, n, o) => {
      const r = n[t.get()],
        s = n[o];
      try {
        s.activate();
      } catch (e) {
        return void console.error(
          `problem while activating editor mode ${o}:`,
          e
        );
      }
      r.deactivate(),
        r.editorReadOnly !== s.editorReadOnly && $R(e, s.editorReadOnly),
        t.set(o),
        ((e, t) => {
          e.dispatch("SwitchMode", { mode: t });
        })(e, o);
    },
    dA = Tt.each,
    cA = Tt.explode,
    uA = {
      f1: 112,
      f2: 113,
      f3: 114,
      f4: 115,
      f5: 116,
      f6: 117,
      f7: 118,
      f8: 119,
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123,
    },
    mA = Tt.makeMap("alt,ctrl,shift,meta,access"),
    fA = (e) => {
      const t = {},
        n = Nt.os.isMacOS() || Nt.os.isiOS();
      dA(cA(e.toLowerCase(), "+"), (e) => {
        ((e) => e in mA)(e)
          ? (t[e] = !0)
          : /^[0-9]{2,}$/.test(e)
          ? (t.keyCode = parseInt(e, 10))
          : ((t.charCode = e.charCodeAt(0)),
            (t.keyCode = uA[e] || e.toUpperCase().charCodeAt(0)));
      });
      const o = [t.keyCode];
      let r;
      for (r in mA) t[r] ? o.push(r) : (t[r] = !1);
      return (
        (t.id = o.join(",")),
        t.access && ((t.alt = !0), n ? (t.ctrl = !0) : (t.shift = !0)),
        t.meta && (n ? (t.meta = !0) : ((t.ctrl = !0), (t.meta = !1))),
        t
      );
    };
  class gA {
    constructor(e) {
      (this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = e);
      const t = this;
      e.on("keyup keypress keydown", (e) => {
        (!t.hasModifier(e) && !t.isFunctionKey(e)) ||
          e.isDefaultPrevented() ||
          (dA(t.shortcuts, (n) => {
            t.matchShortcut(e, n) &&
              ((t.pendingPatterns = n.subpatterns.slice(0)),
              "keydown" === e.type && t.executeShortcutAction(n));
          }),
          t.matchShortcut(e, t.pendingPatterns[0]) &&
            (1 === t.pendingPatterns.length &&
              "keydown" === e.type &&
              t.executeShortcutAction(t.pendingPatterns[0]),
            t.pendingPatterns.shift()));
      });
    }
    add(e, t, n, o) {
      const r = this,
        s = r.normalizeCommandFunc(n);
      return (
        dA(cA(Tt.trim(e)), (e) => {
          const n = r.createShortcut(e, t, s, o);
          r.shortcuts[n.id] = n;
        }),
        !0
      );
    }
    remove(e) {
      const t = this.createShortcut(e);
      return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
    }
    normalizeCommandFunc(e) {
      const t = this,
        n = e;
      return "string" == typeof n
        ? () => {
            t.editor.execCommand(n, !1, null);
          }
        : Tt.isArray(n)
        ? () => {
            t.editor.execCommand(n[0], n[1], n[2]);
          }
        : n;
    }
    createShortcut(e, t, n, o) {
      const r = Tt.map(cA(e, ">"), fA);
      return (
        (r[r.length - 1] = Tt.extend(r[r.length - 1], {
          func: n,
          scope: o || this.editor,
        })),
        Tt.extend(r[0], {
          desc: this.editor.translate(t),
          subpatterns: r.slice(1),
        })
      );
    }
    hasModifier(e) {
      return e.altKey || e.ctrlKey || e.metaKey;
    }
    isFunctionKey(e) {
      return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123;
    }
    matchShortcut(e, t) {
      return (
        !!t &&
        t.ctrl === e.ctrlKey &&
        t.meta === e.metaKey &&
        t.alt === e.altKey &&
        t.shift === e.shiftKey &&
        !!(
          e.keyCode === t.keyCode ||
          (e.charCode && e.charCode === t.charCode)
        ) &&
        (e.preventDefault(), !0)
      );
    }
    executeShortcutAction(e) {
      return e.func ? e.func.call(e.scope) : null;
    }
  }
  const pA = () => {
      const e = (() => {
        const e = {},
          t = {},
          n = {},
          o = {},
          r = {},
          s = {},
          a = {},
          i = (e, t) => (n, o) => {
            e[n.toLowerCase()] = { ...o, type: t };
          };
        return {
          addButton: i(e, "button"),
          addGroupToolbarButton: i(e, "grouptoolbarbutton"),
          addToggleButton: i(e, "togglebutton"),
          addMenuButton: i(e, "menubutton"),
          addSplitButton: i(e, "splitbutton"),
          addMenuItem: i(t, "menuitem"),
          addNestedMenuItem: i(t, "nestedmenuitem"),
          addToggleMenuItem: i(t, "togglemenuitem"),
          addAutocompleter: i(n, "autocompleter"),
          addContextMenu: i(r, "contextmenu"),
          addContextToolbar: i(s, "contexttoolbar"),
          addContextForm: i(s, "contextform"),
          addSidebar: i(a, "sidebar"),
          addIcon: (e, t) => (o[e.toLowerCase()] = t),
          getAll: () => ({
            buttons: e,
            menuItems: t,
            icons: o,
            popups: n,
            contextMenus: r,
            contextToolbars: s,
            sidebars: a,
          }),
        };
      })();
      return {
        addAutocompleter: e.addAutocompleter,
        addButton: e.addButton,
        addContextForm: e.addContextForm,
        addContextMenu: e.addContextMenu,
        addContextToolbar: e.addContextToolbar,
        addIcon: e.addIcon,
        addMenuButton: e.addMenuButton,
        addMenuItem: e.addMenuItem,
        addNestedMenuItem: e.addNestedMenuItem,
        addSidebar: e.addSidebar,
        addSplitButton: e.addSplitButton,
        addToggleButton: e.addToggleButton,
        addGroupToolbarButton: e.addGroupToolbarButton,
        addToggleMenuItem: e.addToggleMenuItem,
        getAll: e.getAll,
      };
    },
    hA = ta.DOM,
    bA = Tt.extend,
    vA = Tt.each;
  class yA {
    constructor(e, t, n) {
      (this.plugins = {}),
        (this.contentCSS = []),
        (this.contentStyles = []),
        (this.loadedCSS = {}),
        (this.isNotDirty = !1),
        (this.composing = !1),
        (this.destroyed = !1),
        (this.hasHiddenInput = !1),
        (this.iframeElement = null),
        (this.initialized = !1),
        (this.readonly = !1),
        (this.removed = !1),
        (this.startContent = ""),
        (this._pendingNativeEvents = []),
        (this._skinLoaded = !1),
        (this.editorManager = n),
        (this.documentBaseUrl = n.documentBaseURL),
        bA(this, nA);
      const o = this;
      (this.id = e), (this.hidden = !1);
      const r = ((e, t) => _R(vR || yR, vR, t, e, t))(n.defaultOptions, t);
      (this.options = ((e, t) => {
        const n = {},
          o = {},
          r = (e, t, n) => {
            const r = aA(t, n);
            return sA(r)
              ? ((o[e] = r.value), !0)
              : (console.warn(
                  rA(`Invalid value passed for the ${e} option`, r)
                ),
                !1);
          },
          s = (e) => xe(n, e);
        return {
          register: (e, s) => {
            const a = ((e) => m(e.processor))(s)
                ? ((e) => {
                    const t = (() => {
                      switch (e) {
                        case "array":
                          return p;
                        case "boolean":
                          return b;
                        case "function":
                          return w;
                        case "number":
                          return x;
                        case "object":
                          return f;
                        case "string":
                          return m;
                        case "string[]":
                          return oA;
                        case "object[]":
                          return (e) => k(e, f);
                        case "regexp":
                          return (e) => u(e, RegExp);
                        default:
                          return L;
                      }
                    })();
                    return (n) => aA(n, t, `The value must be a ${e}.`);
                  })(s.processor)
                : s.processor,
              i = ((e, t, n) => {
                if (!v(t)) {
                  const o = aA(t, n);
                  if (sA(o)) return o.value;
                  console.error(
                    rA(`Invalid default value passed for the "${e}" option`, o)
                  );
                }
              })(e, s.default, a);
            (n[e] = { ...s, default: i, processor: a }),
              we(o, e)
                .orThunk(() => we(t, e))
                .each((t) => r(e, t, a));
          },
          isRegistered: s,
          get: (e) =>
            we(o, e)
              .orThunk(() => we(n, e).map((e) => e.default))
              .getOrUndefined(),
          set: (e, t) => {
            if (s(e)) {
              const o = n[e];
              return o.immutable
                ? (console.error(
                    `"${e}" is an immutable option and cannot be updated`
                  ),
                  !1)
                : r(e, t, o.processor);
            }
            return (
              console.warn(
                `"${e}" is not a registered option. Ensure the option has been registered before setting a value.`
              ),
              !1
            );
          },
          unset: (e) => {
            const t = s(e);
            return t && delete o[e], t;
          },
          isSet: (e) => xe(o, e),
        };
      })(0, r)),
        ((e) => {
          const t = e.options.register;
          t("id", { processor: "string", default: e.id }),
            t("selector", { processor: "string" }),
            t("target", { processor: "object" }),
            t("suffix", { processor: "string" }),
            t("cache_suffix", { processor: "string" }),
            t("base_url", { processor: "string" }),
            t("referrer_policy", { processor: "string", default: "" }),
            t("language_load", { processor: "boolean", default: !0 }),
            t("inline", { processor: "boolean", default: !1 }),
            t("iframe_attrs", { processor: "object", default: {} }),
            t("doctype", { processor: "string", default: "<!DOCTYPE html>" }),
            t("document_base_url", {
              processor: "string",
              default: e.documentBaseUrl,
            }),
            t("body_id", { processor: Vi(e, "tinymce"), default: "tinymce" }),
            t("body_class", { processor: Vi(e), default: "" }),
            t("content_security_policy", { processor: "string", default: "" }),
            t("br_in_pre", { processor: "boolean", default: !0 }),
            t("forced_root_block", {
              processor: (e) => {
                const t = m(e) && We(e);
                return t
                  ? { value: e, valid: t }
                  : { valid: !1, message: "Must be a non-empty string." };
              },
              default: "p",
            }),
            t("forced_root_block_attrs", { processor: "object", default: {} }),
            t("newline_behavior", {
              processor: (e) => {
                const t = j(["block", "linebreak", "invert", "default"], e);
                return t
                  ? { value: e, valid: t }
                  : {
                      valid: !1,
                      message:
                        "Must be one of: block, linebreak, invert or default.",
                    };
              },
              default: "default",
            }),
            t("br_newline_selector", {
              processor: "string",
              default: ".mce-toc h2,figcaption,caption",
            }),
            t("no_newline_selector", { processor: "string", default: "" }),
            t("keep_styles", { processor: "boolean", default: !0 }),
            t("end_container_on_empty_block", {
              processor: (e) =>
                b(e) || m(e)
                  ? { valid: !0, value: e }
                  : { valid: !1, message: "Must be boolean or a string" },
              default: "blockquote",
            }),
            t("font_size_style_values", {
              processor: "string",
              default: "xx-small,x-small,small,medium,large,x-large,xx-large",
            }),
            t("font_size_legacy_values", {
              processor: "string",
              default: "xx-small,small,medium,large,x-large,xx-large,300%",
            }),
            t("font_size_classes", { processor: "string", default: "" }),
            t("automatic_uploads", { processor: "boolean", default: !0 }),
            t("images_reuse_filename", { processor: "boolean", default: !1 }),
            t("images_replace_blob_uris", {
              processor: "boolean",
              default: !0,
            }),
            t("icons", { processor: "string", default: "" }),
            t("icons_url", { processor: "string", default: "" }),
            t("images_upload_url", { processor: "string", default: "" }),
            t("images_upload_base_path", { processor: "string", default: "" }),
            t("images_upload_credentials", {
              processor: "boolean",
              default: !1,
            }),
            t("images_upload_handler", { processor: "function" }),
            t("language", { processor: "string", default: "en" }),
            t("language_url", { processor: "string", default: "" }),
            t("entity_encoding", { processor: "string", default: "named" }),
            t("indent", { processor: "boolean", default: !0 }),
            t("indent_before", {
              processor: "string",
              default:
                "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
            }),
            t("indent_after", {
              processor: "string",
              default:
                "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
            }),
            t("indent_use_margin", { processor: "boolean", default: !1 }),
            t("indentation", { processor: "string", default: "40px" }),
            t("content_css", {
              processor: (e) => {
                const t = !1 === e || m(e) || k(e, m);
                return t
                  ? m(e)
                    ? { value: $(e.split(","), $e), valid: t }
                    : p(e)
                    ? { value: e, valid: t }
                    : !1 === e
                    ? { value: [], valid: t }
                    : { value: e, valid: t }
                  : {
                      valid: !1,
                      message:
                        "Must be false, a string or an array of strings.",
                    };
              },
              default: zl(e) ? [] : ["default"],
            }),
            t("content_style", { processor: "string" }),
            t("content_css_cors", { processor: "boolean", default: !1 }),
            t("font_css", {
              processor: (e) => {
                const t = m(e) || k(e, m);
                return t
                  ? { value: p(e) ? e : $(e.split(","), $e), valid: t }
                  : {
                      valid: !1,
                      message: "Must be a string or an array of strings.",
                    };
              },
              default: [],
            }),
            t("inline_boundaries", { processor: "boolean", default: !0 }),
            t("inline_boundaries_selector", {
              processor: "string",
              default: "a[href],code,span.mce-annotation",
            }),
            t("object_resizing", {
              processor: (e) => {
                const t = b(e) || m(e);
                return t
                  ? !1 === e || Fi.isiPhone() || Fi.isiPad()
                    ? { value: "", valid: t }
                    : {
                        value:
                          !0 === e
                            ? "table,img,figure.image,div,video,iframe"
                            : e,
                        valid: t,
                      }
                  : { valid: !1, message: "Must be boolean or a string" };
              },
              default: !Ui,
            }),
            t("resize_img_proportional", { processor: "boolean", default: !0 }),
            t("event_root", { processor: "object" }),
            t("service_message", { processor: "string" }),
            t("theme", {
              processor: (e) => !1 === e || m(e) || w(e),
              default: "silver",
            }),
            t("theme_url", { processor: "string" }),
            t("formats", { processor: "object" }),
            t("format_empty_lines", { processor: "boolean", default: !1 }),
            t("format_noneditable_selector", {
              processor: "string",
              default: "",
            }),
            t("preview_styles", {
              processor: (e) => {
                const t = !1 === e || m(e);
                return t
                  ? { value: !1 === e ? "" : e, valid: t }
                  : { valid: !1, message: "Must be false or a string" };
              },
              default:
                "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow",
            }),
            t("custom_ui_selector", { processor: "string", default: "" }),
            t("hidden_input", { processor: "boolean", default: !0 }),
            t("submit_patch", { processor: "boolean", default: !0 }),
            t("encoding", { processor: "string" }),
            t("add_form_submit_trigger", { processor: "boolean", default: !0 }),
            t("add_unload_trigger", { processor: "boolean", default: !0 }),
            t("custom_undo_redo_levels", { processor: "number", default: 0 }),
            t("disable_nodechange", { processor: "boolean", default: !1 }),
            t("readonly", { processor: "boolean", default: !1 }),
            t("plugins", { processor: "string[]", default: [] }),
            t("external_plugins", { processor: "object" }),
            t("forced_plugins", { processor: "string[]" }),
            t("model", {
              processor: "string",
              default: e.hasPlugin("rtc") ? "plugin" : "dom",
            }),
            t("model_url", { processor: "string" }),
            t("block_unsupported_drop", { processor: "boolean", default: !0 }),
            t("visual", { processor: "boolean", default: !0 }),
            t("visual_table_class", {
              processor: "string",
              default: "mce-item-table",
            }),
            t("visual_anchor_class", {
              processor: "string",
              default: "mce-item-anchor",
            }),
            t("iframe_aria_text", {
              processor: "string",
              default: "Rich Text Area. Press ALT-0 for help.",
            }),
            t("setup", { processor: "function" }),
            t("init_instance_callback", { processor: "function" }),
            t("url_converter", {
              processor: "function",
              default: e.convertURL,
            }),
            t("url_converter_scope", { processor: "object", default: e }),
            t("urlconverter_callback", { processor: "function" }),
            t("allow_conditional_comments", {
              processor: "boolean",
              default: !1,
            }),
            t("allow_html_data_urls", { processor: "boolean", default: !1 }),
            t("allow_svg_data_urls", { processor: "boolean" }),
            t("allow_html_in_named_anchor", {
              processor: "boolean",
              default: !1,
            }),
            t("allow_script_urls", { processor: "boolean", default: !1 }),
            t("allow_unsafe_link_target", {
              processor: "boolean",
              default: !1,
            }),
            t("convert_fonts_to_spans", {
              processor: "boolean",
              default: !0,
              deprecated: !0,
            }),
            t("fix_list_elements", { processor: "boolean", default: !1 }),
            t("preserve_cdata", { processor: "boolean", default: !1 }),
            t("remove_trailing_brs", { processor: "boolean" }),
            t("inline_styles", {
              processor: "boolean",
              default: !0,
              deprecated: !0,
            }),
            t("element_format", { processor: "string", default: "html" }),
            t("entities", { processor: "string" }),
            t("schema", { processor: "string", default: "html5" }),
            t("convert_urls", { processor: "boolean", default: !0 }),
            t("relative_urls", { processor: "boolean", default: !0 }),
            t("remove_script_host", { processor: "boolean", default: !0 }),
            t("custom_elements", { processor: "string" }),
            t("extended_valid_elements", { processor: "string" }),
            t("invalid_elements", { processor: "string" }),
            t("invalid_styles", { processor: $i }),
            t("valid_children", { processor: "string" }),
            t("valid_classes", { processor: $i }),
            t("valid_elements", { processor: "string" }),
            t("valid_styles", { processor: $i }),
            t("verify_html", { processor: "boolean", default: !0 }),
            t("auto_focus", { processor: (e) => m(e) || !0 === e }),
            t("browser_spellcheck", { processor: "boolean", default: !1 }),
            t("protect", { processor: "array" }),
            t("images_file_types", {
              processor: "string",
              default: "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp",
            }),
            t("deprecation_warnings", { processor: "boolean", default: !0 }),
            t("a11y_advanced_options", { processor: "boolean", default: !1 }),
            t("api_key", { processor: "string" }),
            t("paste_block_drop", { processor: "boolean", default: !1 }),
            t("paste_data_images", { processor: "boolean", default: !0 }),
            t("paste_preprocess", { processor: "function" }),
            t("paste_postprocess", { processor: "function" }),
            t("paste_webkit_styles", { processor: "string", default: "none" }),
            t("paste_remove_styles_if_webkit", {
              processor: "boolean",
              default: !0,
            }),
            t("paste_merge_formats", { processor: "boolean", default: !0 }),
            t("smart_paste", { processor: "boolean", default: !0 }),
            t("paste_as_text", { processor: "boolean", default: !1 }),
            t("paste_tab_spaces", { processor: "number", default: 4 }),
            t("text_patterns", {
              processor: (e) =>
                k(e, f) || !1 === e
                  ? { value: Ii(!1 === e ? [] : e), valid: !0 }
                  : {
                      valid: !1,
                      message: "Must be an array of objects or false.",
                    },
              default: [
                { start: "*", end: "*", format: "italic" },
                { start: "**", end: "**", format: "bold" },
                { start: "#", format: "h1" },
                { start: "##", format: "h2" },
                { start: "###", format: "h3" },
                { start: "####", format: "h4" },
                { start: "#####", format: "h5" },
                { start: "######", format: "h6" },
                { start: "1. ", cmd: "InsertOrderedList" },
                { start: "* ", cmd: "InsertUnorderedList" },
                { start: "- ", cmd: "InsertUnorderedList" },
              ],
            }),
            t("text_patterns_lookup", {
              processor: (e) => {
                return w(e)
                  ? {
                      value:
                        ((t = e),
                        (e) => {
                          const n = t(e);
                          return Ii(n);
                        }),
                      valid: !0,
                    }
                  : { valid: !1, message: "Must be a single function" };
                var t;
              },
              default: (e) => [],
            }),
            t("noneditable_class", {
              processor: "string",
              default: "mceNonEditable",
            }),
            t("editable_class", {
              processor: "string",
              default: "mceEditable",
            }),
            t("noneditable_regexp", {
              processor: (e) =>
                k(e, ji)
                  ? { value: e, valid: !0 }
                  : ji(e)
                  ? { value: [e], valid: !0 }
                  : {
                      valid: !1,
                      message: "Must be a RegExp or an array of RegExp.",
                    },
              default: [],
            }),
            t("table_tab_navigation", { processor: "boolean", default: !0 }),
            e.on("ScriptsLoaded", () => {
              t("directionality", {
                processor: "string",
                default: la.isRtl() ? "rtl" : void 0,
              }),
                t("placeholder", {
                  processor: "string",
                  default: zi.getAttrib(e.getElement(), "placeholder"),
                });
            });
        })(o);
      const s = this.options.get;
      s("deprecation_warnings") &&
        ((e, t) => {
          ((e, t) => {
            const n = Ky(e),
              o = Gy(t),
              r = o.length > 0,
              s = n.length > 0,
              a = "mobile" === t.theme;
            if (r || s || a) {
              const e = "\n- ",
                t = a ? `\n\nThemes:${e}mobile` : "",
                i = r ? `\n\nPlugins:${e}${o.join(e)}` : "",
                l = s ? `\n\nOptions:${e}${n.join(e)}` : "";
              console.warn(
                "The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." +
                  t +
                  i +
                  l
              );
            }
          })(e, t);
        })(t, r);
      const a = s("suffix");
      a && (n.suffix = a), (this.suffix = n.suffix);
      const i = s("base_url");
      i && n._setBaseUrl(i), (this.baseUri = n.baseURI);
      const l = pl(o);
      l &&
        (oa.ScriptLoader._setReferrerPolicy(l),
        ta.DOM.styleSheetLoader._setReferrerPolicy(l)),
        (da.languageLoad = s("language_load")),
        (da.baseURL = n.baseURL),
        this.setDirty(!1),
        (this.documentBaseURI = new qv(Ki(o), { base_uri: this.baseUri })),
        (this.baseURI = this.baseUri),
        (this.inline = zl(o)),
        (this.hasVisual = Jl(o)),
        (this.shortcuts = new gA(this)),
        (this.editorCommands = new UR(this)),
        FR(this);
      const d = s("cache_suffix");
      d && (Nt.cacheSuffix = d.replace(/^[\?\&]+/, "")),
        (this.ui = {
          registry: pA(),
          styleSheetLoader: void 0,
          show: S,
          hide: S,
          setEnabled: S,
          isEnabled: L,
        }),
        (this.mode = ((e) => {
          const t = ra("design"),
            n = ra({
              design: { activate: S, deactivate: S, editorReadOnly: !1 },
              readonly: { activate: S, deactivate: S, editorReadOnly: !0 },
            });
          return (
            ((e) => {
              e.serializer
                ? qR(e)
                : e.on("PreInit", () => {
                    qR(e);
                  });
            })(e),
            ((e) => {
              e.on("ShowCaret", (t) => {
                VR(e) && t.preventDefault();
              }),
                e.on("ObjectSelected", (t) => {
                  VR(e) && t.preventDefault();
                });
            })(e),
            {
              isReadOnly: () => VR(e),
              set: (o) =>
                ((e, t, n, o) => {
                  if (o !== n.get()) {
                    if (!xe(t, o))
                      throw new Error(`Editor mode '${o}' is invalid`);
                    e.initialized
                      ? lA(e, n, t, o)
                      : e.on("init", () => lA(e, n, t, o));
                  }
                })(e, n.get(), t, o),
              get: () => t.get(),
              register: (e, t) => {
                n.set(
                  ((e, t, n) => {
                    if (j(iA, t))
                      throw new Error(`Cannot override default mode ${t}`);
                    return {
                      ...e,
                      [t]: {
                        ...n,
                        deactivate: () => {
                          try {
                            n.deactivate();
                          } catch (e) {
                            console.error(
                              `problem while deactivating editor mode ${t}:`,
                              e
                            );
                          }
                        },
                      },
                    };
                  })(n.get(), e, t)
                );
              },
            }
          );
        })(o)),
        n.dispatch("SetupEditor", { editor: this });
      const c = nd(o);
      w(c) && c.call(o, o);
    }
    render() {
      ((e) => {
        const t = e.id;
        la.setCode(hl(e));
        const n = () => {
          fR.unbind(window, "ready", n), e.render();
        };
        if (!qs.Event.domLoaded) return void fR.bind(window, "ready", n);
        if (!e.getElement()) return;
        const o = mn(e.getElement()),
          r = Xt(o);
        e.on("remove", () => {
          q(o.dom.attributes, (e) => Yt(o, e.name)), qt(o, r);
        }),
          (e.ui.styleSheetLoader = ((e, t) =>
            Jo.forElement(e, { contentCssCors: Gl(t), referrerPolicy: pl(t) }))(
            o,
            e
          )),
          zl(e)
            ? (e.inline = !0)
            : ((e.orgVisibility = e.getElement().style.visibility),
              (e.getElement().style.visibility = "hidden"));
        const s = e.getElement().form || fR.getParent(t, "form");
        s &&
          ((e.formElement = s),
          jl(e) &&
            !No(e.getElement()) &&
            (fR.insertAfter(fR.create("input", { type: "hidden", name: t }), t),
            (e.hasHiddenInput = !0)),
          (e.formEventDelegate = (t) => {
            e.dispatch(t.type, t);
          }),
          fR.bind(s, "submit reset", e.formEventDelegate),
          e.on("reset", () => {
            e.resetContent();
          }),
          !Hl(e) ||
            s.submit.nodeType ||
            s.submit.length ||
            s._mceOldSubmit ||
            ((s._mceOldSubmit = s.submit),
            (s.submit = () => (
              e.editorManager.triggerSave(), e.setDirty(!1), s._mceOldSubmit(s)
            )))),
          (e.windowManager = lC(e)),
          (e.notificationManager = sC(e)),
          ((e) => "xml" === e.options.get("encoding"))(e) &&
            e.on("GetContent", (e) => {
              e.save && (e.content = fR.encode(e.content));
            }),
          $l(e) &&
            e.on("submit", () => {
              e.initialized && e.save();
            }),
          Vl(e) &&
            ((e._beforeUnload = () => {
              !e.initialized ||
                e.destroyed ||
                e.isHidden() ||
                e.save({ format: "raw", no_events: !0, set_dirty: !1 });
            }),
            e.editorManager.on("BeforeUnload", e._beforeUnload)),
          e.editorManager.add(e),
          hR(e, e.suffix);
      })(this);
    }
    focus(e) {
      this.execCommand("mceFocus", !1, e);
    }
    hasFocus() {
      return If(this);
    }
    translate(e) {
      return la.translate(e);
    }
    getParam(e, t, n) {
      const o = this.options;
      return (
        o.isRegistered(e) ||
          (C(n)
            ? o.register(e, { processor: n, default: t })
            : o.register(e, { processor: L, default: t })),
        o.isSet(e) || v(t) ? o.get(e) : t
      );
    }
    hasPlugin(e, t) {
      return !(!j(Yl(this), e) || (t && void 0 === aC.get(e)));
    }
    nodeChanged(e) {
      this._nodeChangeDispatcher.nodeChanged(e);
    }
    addCommand(e, t, n) {
      this.editorCommands.addCommand(e, t, n);
    }
    addQueryStateHandler(e, t, n) {
      this.editorCommands.addQueryStateHandler(e, t, n);
    }
    addQueryValueHandler(e, t, n) {
      this.editorCommands.addQueryValueHandler(e, t, n);
    }
    addShortcut(e, t, n, o) {
      this.shortcuts.add(e, t, n, o);
    }
    execCommand(e, t, n, o) {
      return this.editorCommands.execCommand(e, t, n, o);
    }
    queryCommandState(e) {
      return this.editorCommands.queryCommandState(e);
    }
    queryCommandValue(e) {
      return this.editorCommands.queryCommandValue(e);
    }
    queryCommandSupported(e) {
      return this.editorCommands.queryCommandSupported(e);
    }
    show() {
      const e = this;
      e.hidden &&
        ((e.hidden = !1),
        e.inline
          ? (e.getBody().contentEditable = "true")
          : (hA.show(e.getContainer()), hA.hide(e.id)),
        e.load(),
        e.dispatch("show"));
    }
    hide() {
      const e = this;
      e.hidden ||
        (e.save(),
        e.inline
          ? ((e.getBody().contentEditable = "false"),
            e === e.editorManager.focusedEditor &&
              (e.editorManager.focusedEditor = null))
          : (hA.hide(e.getContainer()),
            hA.setStyle(e.id, "display", e.orgDisplay)),
        (e.hidden = !0),
        e.dispatch("hide"));
    }
    isHidden() {
      return this.hidden;
    }
    setProgressState(e, t) {
      this.dispatch("ProgressState", { state: e, time: t });
    }
    load(e = {}) {
      const t = this,
        n = t.getElement();
      if (t.removed) return "";
      if (n) {
        const o = { ...e, load: !0 },
          r = No(n) ? n.value : n.innerHTML,
          s = t.setContent(r, o);
        return (
          o.no_events || t.dispatch("LoadContent", { ...o, element: n }), s
        );
      }
      return "";
    }
    save(e = {}) {
      const t = this;
      let n = t.getElement();
      if (!n || !t.initialized || t.removed) return "";
      const o = { ...e, save: !0, element: n };
      let r = t.getContent(o);
      const s = { ...o, content: r };
      if (
        (s.no_events || t.dispatch("SaveContent", s),
        "raw" === s.format && t.dispatch("RawSaveContent", s),
        (r = s.content),
        No(n))
      )
        n.value = r;
      else {
        (!e.is_removing && t.inline) || (n.innerHTML = r);
        const o = hA.getParent(t.id, "form");
        o && vA(o.elements, (e) => e.name !== t.id || ((e.value = r), !1));
      }
      return (
        (s.element = o.element = n = null),
        !1 !== s.set_dirty && t.setDirty(!1),
        r
      );
    }
    setContent(e, t) {
      return Vy(this, e, t);
    }
    getContent(e) {
      return ((e, t = {}) => {
        const n = ((e, t) => ({ ...e, format: t, get: !0, getInner: !0 }))(
          t,
          t.format ? t.format : "html"
        );
        return ty(e, n).fold(R, (t) => {
          const n = ((e, t) => Dy(e).editor.getContent(t))(e, t);
          return ny(e, n, t);
        });
      })(this, e);
    }
    insertContent(e, t) {
      t && (e = bA({ content: e }, t)),
        this.execCommand("mceInsertContent", !1, e);
    }
    resetContent(e) {
      void 0 === e
        ? Vy(this, this.startContent, { format: "raw" })
        : Vy(this, e),
        this.undoManager.reset(),
        this.setDirty(!1),
        this.nodeChanged();
    }
    isDirty() {
      return !this.isNotDirty;
    }
    setDirty(e) {
      const t = !this.isNotDirty;
      (this.isNotDirty = !e), e && e !== t && this.dispatch("dirty");
    }
    getContainer() {
      const e = this;
      return (
        e.container ||
          (e.container = e.editorContainer || hA.get(e.id + "_parent")),
        e.container
      );
    }
    getContentAreaContainer() {
      return this.contentAreaContainer;
    }
    getElement() {
      return (
        this.targetElm || (this.targetElm = hA.get(this.id)), this.targetElm
      );
    }
    getWin() {
      const e = this;
      if (!e.contentWindow) {
        const t = e.iframeElement;
        t && (e.contentWindow = t.contentWindow);
      }
      return e.contentWindow;
    }
    getDoc() {
      const e = this;
      if (!e.contentDocument) {
        const t = e.getWin();
        t && (e.contentDocument = t.document);
      }
      return e.contentDocument;
    }
    getBody() {
      var e, t;
      const n = this.getDoc();
      return null !==
        (t =
          null !== (e = this.bodyElement) && void 0 !== e
            ? e
            : null == n
            ? void 0
            : n.body) && void 0 !== t
        ? t
        : null;
    }
    convertURL(e, t, n) {
      const o = this,
        r = o.options.get,
        s = rd(o);
      return w(s)
        ? s.call(o, e, n, !0, t)
        : !r("convert_urls") ||
          "link" === n ||
          (f(n) && "LINK" === n.nodeName) ||
          0 === e.indexOf("file:") ||
          0 === e.length
        ? e
        : r("relative_urls")
        ? o.documentBaseURI.toRelative(e)
        : (e = o.documentBaseURI.toAbsolute(e, r("remove_script_host")));
    }
    addVisual(e) {
      ((e, t) => {
        ((e, t) => {
          Py(e).editor.addVisual(t);
        })(e, t);
      })(this, e);
    }
    remove() {
      ((e) => {
        if (!e.removed) {
          const { _selectionOverrides: t, editorUpload: n } = e,
            o = e.getBody(),
            r = e.getElement();
          o && e.save({ is_removing: !0 }),
            (e.removed = !0),
            e.unbindAllNativeEvents(),
            e.hasHiddenInput &&
              C(null == r ? void 0 : r.nextSibling) &&
              Yy.remove(r.nextSibling),
            ((e) => {
              e.dispatch("remove");
            })(e),
            e.editorManager.remove(e),
            !e.inline &&
              o &&
              ((e) => {
                Yy.setStyle(e.id, "display", e.orgDisplay);
              })(e),
            ((e) => {
              e.dispatch("detach");
            })(e),
            Yy.remove(e.getContainer()),
            Xy(t),
            Xy(n),
            e.destroy();
        }
      })(this);
    }
    destroy(e) {
      ((e, t) => {
        const { selection: n, dom: o } = e;
        e.destroyed ||
          (t || e.removed
            ? (t ||
                (e.editorManager.off("beforeunload", e._beforeUnload),
                e.theme && e.theme.destroy && e.theme.destroy(),
                Xy(n),
                Xy(o)),
              ((e) => {
                const t = e.formElement;
                t &&
                  (t._mceOldSubmit &&
                    ((t.submit = t._mceOldSubmit), delete t._mceOldSubmit),
                  Yy.unbind(t, "submit reset", e.formEventDelegate));
              })(e),
              ((e) => {
                const t = e;
                (t.contentAreaContainer =
                  t.formElement =
                  t.container =
                  t.editorContainer =
                    null),
                  (t.bodyElement = t.contentDocument = t.contentWindow = null),
                  (t.iframeElement = t.targetElm = null);
                const n = e.selection;
                if (n) {
                  const e = n.dom;
                  t.selection = n.win = n.dom = e.doc = null;
                }
              })(e),
              (e.destroyed = !0))
            : e.remove());
      })(this, e);
    }
    uploadImages() {
      return this.editorUpload.uploadImages();
    }
    _scanForImages() {
      return this.editorUpload.scanForImages();
    }
  }
  const CA = ta.DOM,
    wA = Tt.each;
  let xA,
    kA = !1,
    SA = [];
  const _A = (e) => {
      const t = e.type;
      wA(AA.get(), (n) => {
        switch (t) {
          case "scroll":
            n.dispatch("ScrollWindow", e);
            break;
          case "resize":
            n.dispatch("ResizeWindow", e);
        }
      });
    },
    EA = (e) => {
      if (e !== kA) {
        const t = ta.DOM;
        e
          ? (t.bind(window, "resize", _A), t.bind(window, "scroll", _A))
          : (t.unbind(window, "resize", _A), t.unbind(window, "scroll", _A)),
          (kA = e);
      }
    },
    NA = (e) => {
      const t = SA;
      return (
        (SA = K(SA, (t) => e !== t)),
        AA.activeEditor === e &&
          (AA.activeEditor = SA.length > 0 ? SA[0] : null),
        AA.focusedEditor === e && (AA.focusedEditor = null),
        t.length !== SA.length
      );
    },
    RA = "CSS1Compat" !== document.compatMode,
    AA = {
      ...XR,
      baseURI: null,
      baseURL: null,
      defaultOptions: {},
      documentBaseURL: null,
      suffix: null,
      majorVersion: "6",
      minorVersion: "2.0",
      releaseDate: "2022-09-08",
      i18n: la,
      activeEditor: null,
      focusedEditor: null,
      setup() {
        const e = this;
        let t = "",
          n = "",
          o = qv.getDocumentBaseUrl(document.location);
        /^[^:]+:\/\/\/?[^\/]+\//.test(o) &&
          ((o = o.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
          /[\/\\]$/.test(o) || (o += "/"));
        const r = window.tinymce || window.tinyMCEPreInit;
        if (r) (t = r.base || r.baseURL), (n = r.suffix);
        else {
          const e = document.getElementsByTagName("script");
          for (let o = 0; o < e.length; o++) {
            const r = e[o].src || "";
            if ("" === r) continue;
            const s = r.substring(r.lastIndexOf("/"));
            if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
              -1 !== s.indexOf(".min") && (n = ".min"),
                (t = r.substring(0, r.lastIndexOf("/")));
              break;
            }
          }
          if (!t && document.currentScript) {
            const e = document.currentScript.src;
            -1 !== e.indexOf(".min") && (n = ".min"),
              (t = e.substring(0, e.lastIndexOf("/")));
          }
        }
        var s;
        (e.baseURL = new qv(o).toAbsolute(t)),
          (e.documentBaseURL = o),
          (e.baseURI = new qv(e.baseURL)),
          (e.suffix = n),
          (s = e).on("AddEditor", O(Df, s)),
          s.on("RemoveEditor", O(Pf, s));
      },
      overrideDefaults(e) {
        const t = e.base_url;
        t && this._setBaseUrl(t);
        const n = e.suffix;
        n && (this.suffix = n), (this.defaultOptions = e);
        const o = e.plugin_base_urls;
        void 0 !== o &&
          fe(o, (e, t) => {
            da.PluginManager.urls[t] = e;
          });
      },
      init(e) {
        const t = this;
        let n;
        const o = Tt.makeMap(
          "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
          " "
        );
        let r = (e) => {
          n = e;
        };
        const s = () => {
          let n = 0;
          const a = [];
          let i;
          CA.unbind(window, "ready", s),
            ((n) => {
              const o = e.onpageload;
              o && o.apply(t, []);
            })(),
            (i = ((e, t) => {
              const n = [],
                o = w(t) ? (e) => H(n, (n) => t(n, e)) : (e) => j(n, e);
              for (let t = 0, r = e.length; t < r; t++) {
                const r = e[t];
                o(r) || n.push(r);
              }
              return n;
            })(
              ((e) =>
                Nt.browser.isIE() || Nt.browser.isEdge()
                  ? (fC(
                      "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"
                    ),
                    [])
                  : RA
                  ? (fC(
                      "Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."
                    ),
                    [])
                  : m(e.selector)
                  ? CA.select(e.selector)
                  : C(e.target)
                  ? [e.target]
                  : [])(e)
            )),
            Tt.each(i, (e) => {
              var n;
              (n = t.get(e.id)) &&
                n.initialized &&
                !(n.getContainer() || n.getBody()).parentNode &&
                (NA(n),
                n.unbindAllNativeEvents(),
                n.destroy(!0),
                (n.removed = !0));
            }),
            (i = Tt.grep(i, (e) => !t.get(e.id))),
            0 === i.length
              ? r([])
              : wA(i, (s) => {
                  ((e, t) => e.inline && t.tagName.toLowerCase() in o)(e, s)
                    ? fC(
                        "Could not initialize inline editor on invalid inline target element",
                        s
                      )
                    : ((e, o, s) => {
                        const l = new yA(e, o, t);
                        a.push(l),
                          l.on("init", () => {
                            ++n === i.length && r(a);
                          }),
                          (l.targetElm = l.targetElm || s),
                          l.render();
                      })(
                        ((e) => {
                          let t = e.id;
                          return (
                            t ||
                              ((t = we(e, "name")
                                .filter((e) => !CA.get(e))
                                .getOrThunk(CA.uniqueId)),
                              e.setAttribute("id", t)),
                            t
                          );
                        })(s),
                        e,
                        s
                      );
                });
        };
        return (
          CA.bind(window, "ready", s),
          new Promise((e) => {
            n
              ? e(n)
              : (r = (t) => {
                  e(t);
                });
          })
        );
      },
      get(e) {
        return 0 === arguments.length
          ? SA.slice(0)
          : m(e)
          ? Q(SA, (t) => t.id === e).getOr(null)
          : x(e) && SA[e]
          ? SA[e]
          : null;
      },
      add(e) {
        const t = this,
          n = t.get(e.id);
        return (
          n === e ||
            (null === n && SA.push(e),
            EA(!0),
            (t.activeEditor = e),
            t.dispatch("AddEditor", { editor: e }),
            xA ||
              ((xA = (e) => {
                const n = t.dispatch("BeforeUnload");
                if (n.returnValue)
                  return (
                    e.preventDefault(),
                    (e.returnValue = n.returnValue),
                    n.returnValue
                  );
              }),
              window.addEventListener("beforeunload", xA))),
          e
        );
      },
      createEditor(e, t) {
        return this.add(new yA(e, t, this));
      },
      remove(e) {
        const t = this;
        let n;
        if (e) {
          if (!m(e))
            return (
              (n = e),
              h(t.get(n.id))
                ? null
                : (NA(n) && t.dispatch("RemoveEditor", { editor: n }),
                  0 === SA.length &&
                    window.removeEventListener("beforeunload", xA),
                  n.remove(),
                  EA(SA.length > 0),
                  n)
            );
          wA(CA.select(e), (e) => {
            (n = t.get(e.id)), n && t.remove(n);
          });
        } else for (let e = SA.length - 1; e >= 0; e--) t.remove(SA[e]);
      },
      execCommand(e, t, n) {
        var o;
        const r = this,
          s = f(n) ? (null !== (o = n.id) && void 0 !== o ? o : n.index) : n;
        switch (e) {
          case "mceAddEditor":
            if (!r.get(s)) {
              const e = n.options;
              new yA(s, e, r).render();
            }
            return !0;
          case "mceRemoveEditor": {
            const e = r.get(s);
            return e && e.remove(), !0;
          }
          case "mceToggleEditor": {
            const e = r.get(s);
            return e
              ? (e.isHidden() ? e.show() : e.hide(), !0)
              : (r.execCommand("mceAddEditor", !1, n), !0);
          }
        }
        return !!r.activeEditor && r.activeEditor.execCommand(e, t, n);
      },
      triggerSave: () => {
        wA(SA, (e) => {
          e.save();
        });
      },
      addI18n: (e, t) => {
        la.add(e, t);
      },
      translate: (e) => la.translate(e),
      setActive(e) {
        const t = this.activeEditor;
        this.activeEditor !== e &&
          (t && t.dispatch("deactivate", { relatedTarget: e }),
          e.dispatch("activate", { relatedTarget: t })),
          (this.activeEditor = e);
      },
      _setBaseUrl(e) {
        (this.baseURL = new qv(this.documentBaseURL).toAbsolute(
          e.replace(/\/+$/, "")
        )),
          (this.baseURI = new qv(this.baseURL));
      },
    };
  AA.setup();
  const OA = (() => {
      const e = ua();
      return {
        FakeClipboardItem: (e) => ({
          items: e,
          types: ue(e),
          getType: (t) => we(e, t).getOrUndefined(),
        }),
        write: (t) => {
          e.set(t);
        },
        read: () => e.get().getOrUndefined(),
        clear: e.clear,
      };
    })(),
    TA = Math.min,
    BA = Math.max,
    DA = Math.round,
    PA = (e, t, n) => {
      let o = t.x,
        r = t.y;
      const s = e.w,
        a = e.h,
        i = t.w,
        l = t.h,
        d = (n || "").split("");
      return (
        "b" === d[0] && (r += l),
        "r" === d[1] && (o += i),
        "c" === d[0] && (r += DA(l / 2)),
        "c" === d[1] && (o += DA(i / 2)),
        "b" === d[3] && (r -= a),
        "r" === d[4] && (o -= s),
        "c" === d[3] && (r -= DA(a / 2)),
        "c" === d[4] && (o -= DA(s / 2)),
        LA(o, r, s, a)
      );
    },
    LA = (e, t, n, o) => ({ x: e, y: t, w: n, h: o }),
    MA = {
      inflate: (e, t, n) => LA(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n),
      relativePosition: PA,
      findBestRelativePosition: (e, t, n, o) => {
        for (let r = 0; r < o.length; r++) {
          const s = PA(e, t, o[r]);
          if (
            s.x >= n.x &&
            s.x + s.w <= n.w + n.x &&
            s.y >= n.y &&
            s.y + s.h <= n.h + n.y
          )
            return o[r];
        }
        return null;
      },
      intersect: (e, t) => {
        const n = BA(e.x, t.x),
          o = BA(e.y, t.y),
          r = TA(e.x + e.w, t.x + t.w),
          s = TA(e.y + e.h, t.y + t.h);
        return r - n < 0 || s - o < 0 ? null : LA(n, o, r - n, s - o);
      },
      clamp: (e, t, n) => {
        let o = e.x,
          r = e.y,
          s = e.x + e.w,
          a = e.y + e.h;
        const i = t.x + t.w,
          l = t.y + t.h,
          d = BA(0, t.x - o),
          c = BA(0, t.y - r),
          u = BA(0, s - i),
          m = BA(0, a - l);
        return (
          (o += d),
          (r += c),
          n && ((s += d), (a += c), (o -= u), (r -= m)),
          (s -= u),
          (a -= m),
          LA(o, r, s - o, a - r)
        );
      },
      create: LA,
      fromClientRect: (e) => LA(e.left, e.top, e.width, e.height),
    },
    IA = (() => {
      const e = {},
        t = {};
      return {
        load: (n, o) => {
          const r = `Script at URL "${o}" failed to load`,
            s = `Script at URL "${o}" did not call \`tinymce.Resource.add('${n}', data)\` within 1 second`;
          if (void 0 !== e[n]) return e[n];
          {
            const a = new Promise((e, a) => {
              const i = ((e, t, n = 1e3) => {
                let o = !1,
                  r = null;
                const s =
                    (e) =>
                    (...t) => {
                      o ||
                        ((o = !0),
                        null !== r && (clearTimeout(r), (r = null)),
                        e.apply(null, t));
                    },
                  a = s(e),
                  i = s(t);
                return {
                  start: (...e) => {
                    o ||
                      null !== r ||
                      (r = setTimeout(() => i.apply(null, e), n));
                  },
                  resolve: a,
                  reject: i,
                };
              })(e, a);
              (t[n] = i.resolve),
                oa.ScriptLoader.loadScript(o).then(
                  () => i.start(s),
                  () => i.reject(r)
                );
            });
            return (e[n] = a), a;
          }
        },
        add: (n, o) => {
          void 0 !== t[n] && (t[n](o), delete t[n]),
            (e[n] = Promise.resolve(o));
        },
        unload: (t) => {
          delete e[t];
        },
      };
    })();
  let FA;
  try {
    const e = "__storage_test__";
    (FA = window.localStorage), FA.setItem(e, e), FA.removeItem(e);
  } catch (e) {
    FA = (() => {
      let e = {},
        t = [];
      const n = {
        getItem: (t) => e[t] || null,
        setItem: (n, o) => {
          t.push(n), (e[n] = String(o));
        },
        key: (e) => t[e],
        removeItem: (n) => {
          (t = t.filter((e) => e === n)), delete e[n];
        },
        clear: () => {
          (t = []), (e = {});
        },
        length: 0,
      };
      return (
        Object.defineProperty(n, "length", {
          get: () => t.length,
          configurable: !1,
          enumerable: !1,
        }),
        n
      );
    })();
  }
  const UA = {
      geom: { Rect: MA },
      util: {
        Delay: Af,
        Tools: Tt,
        VK: bm,
        URI: qv,
        EventDispatcher: GR,
        Observable: XR,
        I18n: la,
        LocalStorage: FA,
        ImageUploader: (e) => {
          const t = bC(),
            n = wC(e, t);
          return { upload: (t, o = !0) => n.upload(t, o ? CC(e) : void 0) };
        },
      },
      dom: {
        EventUtils: qs,
        TreeWalker: Zo,
        TextSeeker: Ta,
        DOMUtils: ta,
        ScriptLoader: oa,
        RangeUtils: Ym,
        Serializer: $y,
        StyleSheetLoader: Qo,
        ControlSelection: xm,
        BookmarkManager: dm,
        Selection: zy,
        Event: qs.Event,
      },
      html: {
        Styles: Ms,
        Entities: xs,
        Node: Zf,
        Schema: Ls,
        DomParser: Zv,
        Writer: ag,
        Serializer: ig,
      },
      Env: Nt,
      AddOnManager: da,
      Annotator: lm,
      Formatter: DC,
      UndoManager: LC,
      EditorCommands: UR,
      WindowManager: lC,
      NotificationManager: sC,
      EditorObservable: nA,
      Shortcuts: gA,
      Editor: yA,
      FocusManager: Rf,
      EditorManager: AA,
      DOM: ta.DOM,
      ScriptLoader: oa.ScriptLoader,
      PluginManager: aC,
      ThemeManager: iC,
      ModelManager: Jy,
      IconManager: Qy,
      Resource: IA,
      FakeClipboard: OA,
      trim: Tt.trim,
      isArray: Tt.isArray,
      is: Tt.is,
      toArray: Tt.toArray,
      makeMap: Tt.makeMap,
      each: Tt.each,
      map: Tt.map,
      grep: Tt.grep,
      inArray: Tt.inArray,
      extend: Tt.extend,
      walk: Tt.walk,
      resolve: Tt.resolve,
      explode: Tt.explode,
      _addCacheSuffix: Tt._addCacheSuffix,
    },
    zA = Tt.extend(AA, UA);
  ((e) => {
    (window.tinymce = e), (window.tinyMCE = e);
  })(zA),
    ((e) => {
      if ("object" == typeof module)
        try {
          module.exports = e;
        } catch (e) {}
    })(zA);
})();

(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const f of u)
      if (f.type === "childList")
        for (const b of f.addedNodes)
          b.tagName === "LINK" && b.rel === "modulepreload" && a(b);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(u) {
    const f = {};
    return (
      u.integrity && (f.integrity = u.integrity),
      u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const f = r(u);
    fetch(u.href, f);
  }
})();
function Dr(n) {
  return (
    n !== null &&
    typeof n == "object" &&
    "constructor" in n &&
    n.constructor === Object
  );
}
function Ui(n, e) {
  n === void 0 && (n = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((r) => {
      typeof n[r] > "u"
        ? (n[r] = e[r])
        : Dr(e[r]) &&
          Dr(n[r]) &&
          Object.keys(e[r]).length > 0 &&
          Ui(n[r], e[r]);
    });
}
const Hr = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function ke() {
  const n = typeof document < "u" ? document : {};
  return Ui(n, Hr), n;
}
const Hn = {
  document: Hr,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(n) {
    return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
  },
  cancelAnimationFrame(n) {
    typeof setTimeout > "u" || clearTimeout(n);
  },
};
function Pe() {
  const n = typeof window < "u" ? window : {};
  return Ui(n, Hn), n;
}
function gt(n) {
  return (
    n === void 0 && (n = ""),
    n
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function jn(n) {
  const e = n;
  Object.keys(e).forEach((r) => {
    try {
      e[r] = null;
    } catch {}
    try {
      delete e[r];
    } catch {}
  });
}
function Mt(n, e) {
  return e === void 0 && (e = 0), setTimeout(n, e);
}
function Ye() {
  return Date.now();
}
function Rn(n) {
  const e = Pe();
  let r;
  return (
    e.getComputedStyle && (r = e.getComputedStyle(n, null)),
    !r && n.currentStyle && (r = n.currentStyle),
    r || (r = n.style),
    r
  );
}
function Xi(n, e) {
  e === void 0 && (e = "x");
  const r = Pe();
  let a, u, f;
  const b = Rn(n);
  return (
    r.WebKitCSSMatrix
      ? ((u = b.transform || b.webkitTransform),
        u.split(",").length > 6 &&
          (u = u
            .split(", ")
            .map((w) => w.replace(",", "."))
            .join(", ")),
        (f = new r.WebKitCSSMatrix(u === "none" ? "" : u)))
      : ((f =
          b.MozTransform ||
          b.OTransform ||
          b.MsTransform ||
          b.msTransform ||
          b.transform ||
          b
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (a = f.toString().split(","))),
    e === "x" &&
      (r.WebKitCSSMatrix
        ? (u = f.m41)
        : a.length === 16
          ? (u = parseFloat(a[12]))
          : (u = parseFloat(a[4]))),
    e === "y" &&
      (r.WebKitCSSMatrix
        ? (u = f.m42)
        : a.length === 16
          ? (u = parseFloat(a[13]))
          : (u = parseFloat(a[5]))),
    u || 0
  );
}
function Qt(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    n.constructor &&
    Object.prototype.toString.call(n).slice(8, -1) === "Object"
  );
}
function qn(n) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? n instanceof HTMLElement
    : n && (n.nodeType === 1 || n.nodeType === 11);
}
function Ge() {
  const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < arguments.length; r += 1) {
    const a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
    if (a != null && !qn(a)) {
      const u = Object.keys(Object(a)).filter((f) => e.indexOf(f) < 0);
      for (let f = 0, b = u.length; f < b; f += 1) {
        const w = u[f],
          p = Object.getOwnPropertyDescriptor(a, w);
        p !== void 0 &&
          p.enumerable &&
          (Qt(n[w]) && Qt(a[w])
            ? a[w].__swiper__
              ? (n[w] = a[w])
              : Ge(n[w], a[w])
            : !Qt(n[w]) && Qt(a[w])
              ? ((n[w] = {}), a[w].__swiper__ ? (n[w] = a[w]) : Ge(n[w], a[w]))
              : (n[w] = a[w]));
      }
    }
  }
  return n;
}
function Zt(n, e, r) {
  n.style.setProperty(e, r);
}
function jr(n) {
  let { swiper: e, targetPosition: r, side: a } = n;
  const u = Pe(),
    f = -e.translate;
  let b = null,
    w;
  const p = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    u.cancelAnimationFrame(e.cssModeFrameID);
  const x = r > f ? "next" : "prev",
    g = (y, E) => (x === "next" && y >= E) || (x === "prev" && y <= E),
    h = () => {
      (w = new Date().getTime()), b === null && (b = w);
      const y = Math.max(Math.min((w - b) / p, 1), 0),
        E = 0.5 - Math.cos(y * Math.PI) / 2;
      let T = f + E * (r - f);
      if ((g(T, r) && (T = r), e.wrapperEl.scrollTo({ [a]: T }), g(T, r))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [a]: T });
          }),
          u.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = u.requestAnimationFrame(h);
    };
  h();
}
function Pt(n) {
  return (
    n.querySelector(".swiper-slide-transform") ||
    (n.shadowRoot && n.shadowRoot.querySelector(".swiper-slide-transform")) ||
    n
  );
}
function Oe(n, e) {
  e === void 0 && (e = "");
  const r = [...n.children];
  return (
    n instanceof HTMLSlotElement && r.push(...n.assignedElements()),
    e ? r.filter((a) => a.matches(e)) : r
  );
}
function Bn(n, e) {
  const r = e.contains(n);
  return !r && e instanceof HTMLSlotElement
    ? [...element.assignedElements()].includes(n)
    : r;
}
function hi(n) {
  try {
    console.warn(n);
    return;
  } catch {}
}
function _e(n, e) {
  e === void 0 && (e = []);
  const r = document.createElement(n);
  return r.classList.add(...(Array.isArray(e) ? e : gt(e))), r;
}
function mi(n) {
  const e = Pe(),
    r = ke(),
    a = n.getBoundingClientRect(),
    u = r.body,
    f = n.clientTop || u.clientTop || 0,
    b = n.clientLeft || u.clientLeft || 0,
    w = n === e ? e.scrollY : n.scrollTop,
    p = n === e ? e.scrollX : n.scrollLeft;
  return { top: a.top + w - f, left: a.left + p - b };
}
function Fn(n, e) {
  const r = [];
  for (; n.previousElementSibling; ) {
    const a = n.previousElementSibling;
    e ? a.matches(e) && r.push(a) : r.push(a), (n = a);
  }
  return r;
}
function Gn(n, e) {
  const r = [];
  for (; n.nextElementSibling; ) {
    const a = n.nextElementSibling;
    e ? a.matches(e) && r.push(a) : r.push(a), (n = a);
  }
  return r;
}
function vt(n, e) {
  return Pe().getComputedStyle(n, null).getPropertyValue(e);
}
function ei(n) {
  let e = n,
    r;
  if (e) {
    for (r = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (r += 1);
    return r;
  }
}
function Ct(n, e) {
  const r = [];
  let a = n.parentElement;
  for (; a; ) e ? a.matches(e) && r.push(a) : r.push(a), (a = a.parentElement);
  return r;
}
function Jt(n, e) {
  function r(a) {
    a.target === n && (e.call(n, a), n.removeEventListener("transitionend", r));
  }
  e && n.addEventListener("transitionend", r);
}
function Vi(n, e, r) {
  const a = Pe();
  return (
    n[e === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      a
        .getComputedStyle(n, null)
        .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      a
        .getComputedStyle(n, null)
        .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function ye(n) {
  return (Array.isArray(n) ? n : [n]).filter((e) => !!e);
}
function gi(n) {
  return (e) =>
    Math.abs(e) > 0 &&
    n.browser &&
    n.browser.need3dFix &&
    Math.abs(e) % 90 === 0
      ? e + 0.001
      : e;
}
let Ri;
function _n() {
  const n = Pe(),
    e = ke();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in n ||
      (n.DocumentTouch && e instanceof n.DocumentTouch)
    ),
  };
}
function Rr() {
  return Ri || (Ri = _n()), Ri;
}
let qi;
function Wn(n) {
  let { userAgent: e } = n === void 0 ? {} : n;
  const r = Rr(),
    a = Pe(),
    u = a.navigator.platform,
    f = e || a.navigator.userAgent,
    b = { ios: !1, android: !1 },
    w = a.screen.width,
    p = a.screen.height,
    x = f.match(/(Android);?[\s\/]+([\d.]+)?/);
  let g = f.match(/(iPad).*OS\s([\d_]+)/);
  const h = f.match(/(iPod)(.*OS\s([\d_]+))?/),
    y = !g && f.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    E = u === "Win32";
  let T = u === "MacIntel";
  const S = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !g &&
      T &&
      r.touch &&
      S.indexOf(`${w}x${p}`) >= 0 &&
      ((g = f.match(/(Version)\/([\d.]+)/)),
      g || (g = [0, 1, "13_0_0"]),
      (T = !1)),
    x && !E && ((b.os = "android"), (b.android = !0)),
    (g || y || h) && ((b.os = "ios"), (b.ios = !0)),
    b
  );
}
function qr(n) {
  return n === void 0 && (n = {}), qi || (qi = Wn(n)), qi;
}
let Bi;
function Xn() {
  const n = Pe(),
    e = qr();
  let r = !1;
  function a() {
    const w = n.navigator.userAgent.toLowerCase();
    return (
      w.indexOf("safari") >= 0 &&
      w.indexOf("chrome") < 0 &&
      w.indexOf("android") < 0
    );
  }
  if (a()) {
    const w = String(n.navigator.userAgent);
    if (w.includes("Version/")) {
      const [p, x] = w
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((g) => Number(g));
      r = p < 16 || (p === 16 && x < 2);
    }
  }
  const u = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      n.navigator.userAgent
    ),
    f = a(),
    b = f || (u && e.ios);
  return {
    isSafari: r || f,
    needPerspectiveFix: r,
    need3dFix: b,
    isWebView: u,
  };
}
function Vn() {
  return Bi || (Bi = Xn()), Bi;
}
function Yn(n) {
  let { swiper: e, on: r, emit: a } = n;
  const u = Pe();
  let f = null,
    b = null;
  const w = () => {
      !e || e.destroyed || !e.initialized || (a("beforeResize"), a("resize"));
    },
    p = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((f = new ResizeObserver((h) => {
          b = u.requestAnimationFrame(() => {
            const { width: y, height: E } = e;
            let T = y,
              S = E;
            h.forEach((P) => {
              let { contentBoxSize: m, contentRect: A, target: M } = P;
              (M && M !== e.el) ||
                ((T = A ? A.width : (m[0] || m).inlineSize),
                (S = A ? A.height : (m[0] || m).blockSize));
            }),
              (T !== y || S !== E) && w();
          });
        })),
        f.observe(e.el));
    },
    x = () => {
      b && u.cancelAnimationFrame(b),
        f && f.unobserve && e.el && (f.unobserve(e.el), (f = null));
    },
    g = () => {
      !e || e.destroyed || !e.initialized || a("orientationchange");
    };
  r("init", () => {
    if (e.params.resizeObserver && typeof u.ResizeObserver < "u") {
      p();
      return;
    }
    u.addEventListener("resize", w), u.addEventListener("orientationchange", g);
  }),
    r("destroy", () => {
      x(),
        u.removeEventListener("resize", w),
        u.removeEventListener("orientationchange", g);
    });
}
function Un(n) {
  let { swiper: e, extendParams: r, on: a, emit: u } = n;
  const f = [],
    b = Pe(),
    w = function (g, h) {
      h === void 0 && (h = {});
      const y = b.MutationObserver || b.WebkitMutationObserver,
        E = new y((T) => {
          if (e.__preventObserver__) return;
          if (T.length === 1) {
            u("observerUpdate", T[0]);
            return;
          }
          const S = function () {
            u("observerUpdate", T[0]);
          };
          b.requestAnimationFrame
            ? b.requestAnimationFrame(S)
            : b.setTimeout(S, 0);
        });
      E.observe(g, {
        attributes: typeof h.attributes > "u" ? !0 : h.attributes,
        childList: e.isElement || (typeof h.childList > "u" ? !0 : h).childList,
        characterData: typeof h.characterData > "u" ? !0 : h.characterData,
      }),
        f.push(E);
    },
    p = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const g = Ct(e.hostEl);
          for (let h = 0; h < g.length; h += 1) w(g[h]);
        }
        w(e.hostEl, { childList: e.params.observeSlideChildren }),
          w(e.wrapperEl, { attributes: !1 });
      }
    },
    x = () => {
      f.forEach((g) => {
        g.disconnect();
      }),
        f.splice(0, f.length);
    };
  r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    a("init", p),
    a("destroy", x);
}
var Kn = {
  on(n, e, r) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || typeof e != "function") return a;
    const u = r ? "unshift" : "push";
    return (
      n.split(" ").forEach((f) => {
        a.eventsListeners[f] || (a.eventsListeners[f] = []),
          a.eventsListeners[f][u](e);
      }),
      a
    );
  },
  once(n, e, r) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || typeof e != "function") return a;
    function u() {
      a.off(n, u), u.__emitterProxy && delete u.__emitterProxy;
      for (var f = arguments.length, b = new Array(f), w = 0; w < f; w++)
        b[w] = arguments[w];
      e.apply(a, b);
    }
    return (u.__emitterProxy = e), a.on(n, u, r);
  },
  onAny(n, e) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof n != "function") return r;
    const a = e ? "unshift" : "push";
    return r.eventsAnyListeners.indexOf(n) < 0 && r.eventsAnyListeners[a](n), r;
  },
  offAny(n) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const r = e.eventsAnyListeners.indexOf(n);
    return r >= 0 && e.eventsAnyListeners.splice(r, 1), e;
  },
  off(n, e) {
    const r = this;
    return (
      !r.eventsListeners ||
        r.destroyed ||
        !r.eventsListeners ||
        n.split(" ").forEach((a) => {
          typeof e > "u"
            ? (r.eventsListeners[a] = [])
            : r.eventsListeners[a] &&
              r.eventsListeners[a].forEach((u, f) => {
                (u === e || (u.__emitterProxy && u.__emitterProxy === e)) &&
                  r.eventsListeners[a].splice(f, 1);
              });
        }),
      r
    );
  },
  emit() {
    const n = this;
    if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
    let e, r, a;
    for (var u = arguments.length, f = new Array(u), b = 0; b < u; b++)
      f[b] = arguments[b];
    return (
      typeof f[0] == "string" || Array.isArray(f[0])
        ? ((e = f[0]), (r = f.slice(1, f.length)), (a = n))
        : ((e = f[0].events), (r = f[0].data), (a = f[0].context || n)),
      r.unshift(a),
      (Array.isArray(e) ? e : e.split(" ")).forEach((p) => {
        n.eventsAnyListeners &&
          n.eventsAnyListeners.length &&
          n.eventsAnyListeners.forEach((x) => {
            x.apply(a, [p, ...r]);
          }),
          n.eventsListeners &&
            n.eventsListeners[p] &&
            n.eventsListeners[p].forEach((x) => {
              x.apply(a, r);
            });
      }),
      n
    );
  },
};
function Qn() {
  const n = this;
  let e, r;
  const a = n.el;
  typeof n.params.width < "u" && n.params.width !== null
    ? (e = n.params.width)
    : (e = a.clientWidth),
    typeof n.params.height < "u" && n.params.height !== null
      ? (r = n.params.height)
      : (r = a.clientHeight),
    !((e === 0 && n.isHorizontal()) || (r === 0 && n.isVertical())) &&
      ((e =
        e -
        parseInt(vt(a, "padding-left") || 0, 10) -
        parseInt(vt(a, "padding-right") || 0, 10)),
      (r =
        r -
        parseInt(vt(a, "padding-top") || 0, 10) -
        parseInt(vt(a, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(r) && (r = 0),
      Object.assign(n, {
        width: e,
        height: r,
        size: n.isHorizontal() ? e : r,
      }));
}
function Zn() {
  const n = this;
  function e(_, U) {
    return parseFloat(_.getPropertyValue(n.getDirectionLabel(U)) || 0);
  }
  const r = n.params,
    { wrapperEl: a, slidesEl: u, size: f, rtlTranslate: b, wrongRTL: w } = n,
    p = n.virtual && r.virtual.enabled,
    x = p ? n.virtual.slides.length : n.slides.length,
    g = Oe(u, `.${n.params.slideClass}, swiper-slide`),
    h = p ? n.virtual.slides.length : g.length;
  let y = [];
  const E = [],
    T = [];
  let S = r.slidesOffsetBefore;
  typeof S == "function" && (S = r.slidesOffsetBefore.call(n));
  let P = r.slidesOffsetAfter;
  typeof P == "function" && (P = r.slidesOffsetAfter.call(n));
  const m = n.snapGrid.length,
    A = n.slidesGrid.length;
  let M = r.spaceBetween,
    O = -S,
    G = 0,
    Q = 0;
  if (typeof f > "u") return;
  typeof M == "string" && M.indexOf("%") >= 0
    ? (M = (parseFloat(M.replace("%", "")) / 100) * f)
    : typeof M == "string" && (M = parseFloat(M)),
    (n.virtualSize = -M),
    g.forEach((_) => {
      b ? (_.style.marginLeft = "") : (_.style.marginRight = ""),
        (_.style.marginBottom = ""),
        (_.style.marginTop = "");
    }),
    r.centeredSlides &&
      r.cssMode &&
      (Zt(a, "--swiper-centered-offset-before", ""),
      Zt(a, "--swiper-centered-offset-after", ""));
  const o = r.grid && r.grid.rows > 1 && n.grid;
  o ? n.grid.initSlides(g) : n.grid && n.grid.unsetSlides();
  let X;
  const H =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (_) => typeof r.breakpoints[_].slidesPerView < "u"
    ).length > 0;
  for (let _ = 0; _ < h; _ += 1) {
    X = 0;
    let U;
    if (
      (g[_] && (U = g[_]),
      o && n.grid.updateSlide(_, U, g),
      !(g[_] && vt(U, "display") === "none"))
    ) {
      if (r.slidesPerView === "auto") {
        H && (g[_].style[n.getDirectionLabel("width")] = "");
        const R = getComputedStyle(U),
          z = U.style.transform,
          q = U.style.webkitTransform;
        if (
          (z && (U.style.transform = "none"),
          q && (U.style.webkitTransform = "none"),
          r.roundLengths)
        )
          X = n.isHorizontal() ? Vi(U, "width") : Vi(U, "height");
        else {
          const K = e(R, "width"),
            ae = e(R, "padding-left"),
            B = e(R, "padding-right"),
            W = e(R, "margin-left"),
            ie = e(R, "margin-right"),
            pe = R.getPropertyValue("box-sizing");
          if (pe && pe === "border-box") X = K + W + ie;
          else {
            const { clientWidth: Z, offsetWidth: te } = U;
            X = K + ae + B + W + ie + (te - Z);
          }
        }
        z && (U.style.transform = z),
          q && (U.style.webkitTransform = q),
          r.roundLengths && (X = Math.floor(X));
      } else
        (X = (f - (r.slidesPerView - 1) * M) / r.slidesPerView),
          r.roundLengths && (X = Math.floor(X)),
          g[_] && (g[_].style[n.getDirectionLabel("width")] = `${X}px`);
      g[_] && (g[_].swiperSlideSize = X),
        T.push(X),
        r.centeredSlides
          ? ((O = O + X / 2 + G / 2 + M),
            G === 0 && _ !== 0 && (O = O - f / 2 - M),
            _ === 0 && (O = O - f / 2 - M),
            Math.abs(O) < 1 / 1e3 && (O = 0),
            r.roundLengths && (O = Math.floor(O)),
            Q % r.slidesPerGroup === 0 && y.push(O),
            E.push(O))
          : (r.roundLengths && (O = Math.floor(O)),
            (Q - Math.min(n.params.slidesPerGroupSkip, Q)) %
              n.params.slidesPerGroup ===
              0 && y.push(O),
            E.push(O),
            (O = O + X + M)),
        (n.virtualSize += X + M),
        (G = X),
        (Q += 1);
    }
  }
  if (
    ((n.virtualSize = Math.max(n.virtualSize, f) + P),
    b &&
      w &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      (a.style.width = `${n.virtualSize + M}px`),
    r.setWrapperSize &&
      (a.style[n.getDirectionLabel("width")] = `${n.virtualSize + M}px`),
    o && n.grid.updateWrapperSize(X, y),
    !r.centeredSlides)
  ) {
    const _ = [];
    for (let U = 0; U < y.length; U += 1) {
      let R = y[U];
      r.roundLengths && (R = Math.floor(R)),
        y[U] <= n.virtualSize - f && _.push(R);
    }
    (y = _),
      Math.floor(n.virtualSize - f) - Math.floor(y[y.length - 1]) > 1 &&
        y.push(n.virtualSize - f);
  }
  if (p && r.loop) {
    const _ = T[0] + M;
    if (r.slidesPerGroup > 1) {
      const U = Math.ceil(
          (n.virtual.slidesBefore + n.virtual.slidesAfter) / r.slidesPerGroup
        ),
        R = _ * r.slidesPerGroup;
      for (let z = 0; z < U; z += 1) y.push(y[y.length - 1] + R);
    }
    for (let U = 0; U < n.virtual.slidesBefore + n.virtual.slidesAfter; U += 1)
      r.slidesPerGroup === 1 && y.push(y[y.length - 1] + _),
        E.push(E[E.length - 1] + _),
        (n.virtualSize += _);
  }
  if ((y.length === 0 && (y = [0]), M !== 0)) {
    const _ =
      n.isHorizontal() && b ? "marginLeft" : n.getDirectionLabel("marginRight");
    g.filter((U, R) =>
      !r.cssMode || r.loop ? !0 : R !== g.length - 1
    ).forEach((U) => {
      U.style[_] = `${M}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let _ = 0;
    T.forEach((R) => {
      _ += R + (M || 0);
    }),
      (_ -= M);
    const U = _ - f;
    y = y.map((R) => (R <= 0 ? -S : R > U ? U + P : R));
  }
  if (r.centerInsufficientSlides) {
    let _ = 0;
    T.forEach((R) => {
      _ += R + (M || 0);
    }),
      (_ -= M);
    const U = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
    if (_ + U < f) {
      const R = (f - _ - U) / 2;
      y.forEach((z, q) => {
        y[q] = z - R;
      }),
        E.forEach((z, q) => {
          E[q] = z + R;
        });
    }
  }
  if (
    (Object.assign(n, {
      slides: g,
      snapGrid: y,
      slidesGrid: E,
      slidesSizesGrid: T,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    Zt(a, "--swiper-centered-offset-before", `${-y[0]}px`),
      Zt(
        a,
        "--swiper-centered-offset-after",
        `${n.size / 2 - T[T.length - 1] / 2}px`
      );
    const _ = -n.snapGrid[0],
      U = -n.slidesGrid[0];
    (n.snapGrid = n.snapGrid.map((R) => R + _)),
      (n.slidesGrid = n.slidesGrid.map((R) => R + U));
  }
  if (
    (h !== x && n.emit("slidesLengthChange"),
    y.length !== m &&
      (n.params.watchOverflow && n.checkOverflow(),
      n.emit("snapGridLengthChange")),
    E.length !== A && n.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && n.updateSlidesOffset(),
    n.emit("slidesUpdated"),
    !p && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const _ = `${r.containerModifierClass}backface-hidden`,
      U = n.el.classList.contains(_);
    h <= r.maxBackfaceHiddenSlides
      ? U || n.el.classList.add(_)
      : U && n.el.classList.remove(_);
  }
}
function Jn(n) {
  const e = this,
    r = [],
    a = e.virtual && e.params.virtual.enabled;
  let u = 0,
    f;
  typeof n == "number"
    ? e.setTransition(n)
    : n === !0 && e.setTransition(e.params.speed);
  const b = (w) => (a ? e.slides[e.getSlideIndexByData(w)] : e.slides[w]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((w) => {
        r.push(w);
      });
    else
      for (f = 0; f < Math.ceil(e.params.slidesPerView); f += 1) {
        const w = e.activeIndex + f;
        if (w > e.slides.length && !a) break;
        r.push(b(w));
      }
  else r.push(b(e.activeIndex));
  for (f = 0; f < r.length; f += 1)
    if (typeof r[f] < "u") {
      const w = r[f].offsetHeight;
      u = w > u ? w : u;
    }
  (u || u === 0) && (e.wrapperEl.style.height = `${u}px`);
}
function es() {
  const n = this,
    e = n.slides,
    r = n.isElement
      ? n.isHorizontal()
        ? n.wrapperEl.offsetLeft
        : n.wrapperEl.offsetTop
      : 0;
  for (let a = 0; a < e.length; a += 1)
    e[a].swiperSlideOffset =
      (n.isHorizontal() ? e[a].offsetLeft : e[a].offsetTop) -
      r -
      n.cssOverflowAdjustment();
}
const Or = (n, e, r) => {
  e && !n.classList.contains(r)
    ? n.classList.add(r)
    : !e && n.classList.contains(r) && n.classList.remove(r);
};
function ts(n) {
  n === void 0 && (n = (this && this.translate) || 0);
  const e = this,
    r = e.params,
    { slides: a, rtlTranslate: u, snapGrid: f } = e;
  if (a.length === 0) return;
  typeof a[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let b = -n;
  u && (b = n), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
  let w = r.spaceBetween;
  typeof w == "string" && w.indexOf("%") >= 0
    ? (w = (parseFloat(w.replace("%", "")) / 100) * e.size)
    : typeof w == "string" && (w = parseFloat(w));
  for (let p = 0; p < a.length; p += 1) {
    const x = a[p];
    let g = x.swiperSlideOffset;
    r.cssMode && r.centeredSlides && (g -= a[0].swiperSlideOffset);
    const h =
        (b + (r.centeredSlides ? e.minTranslate() : 0) - g) /
        (x.swiperSlideSize + w),
      y =
        (b - f[0] + (r.centeredSlides ? e.minTranslate() : 0) - g) /
        (x.swiperSlideSize + w),
      E = -(b - g),
      T = E + e.slidesSizesGrid[p],
      S = E >= 0 && E <= e.size - e.slidesSizesGrid[p],
      P =
        (E >= 0 && E < e.size - 1) ||
        (T > 1 && T <= e.size) ||
        (E <= 0 && T >= e.size);
    P && (e.visibleSlides.push(x), e.visibleSlidesIndexes.push(p)),
      Or(x, P, r.slideVisibleClass),
      Or(x, S, r.slideFullyVisibleClass),
      (x.progress = u ? -h : h),
      (x.originalProgress = u ? -y : y);
  }
}
function is(n) {
  const e = this;
  if (typeof n > "u") {
    const g = e.rtlTranslate ? -1 : 1;
    n = (e && e.translate && e.translate * g) || 0;
  }
  const r = e.params,
    a = e.maxTranslate() - e.minTranslate();
  let { progress: u, isBeginning: f, isEnd: b, progressLoop: w } = e;
  const p = f,
    x = b;
  if (a === 0) (u = 0), (f = !0), (b = !0);
  else {
    u = (n - e.minTranslate()) / a;
    const g = Math.abs(n - e.minTranslate()) < 1,
      h = Math.abs(n - e.maxTranslate()) < 1;
    (f = g || u <= 0), (b = h || u >= 1), g && (u = 0), h && (u = 1);
  }
  if (r.loop) {
    const g = e.getSlideIndexByData(0),
      h = e.getSlideIndexByData(e.slides.length - 1),
      y = e.slidesGrid[g],
      E = e.slidesGrid[h],
      T = e.slidesGrid[e.slidesGrid.length - 1],
      S = Math.abs(n);
    S >= y ? (w = (S - y) / T) : (w = (S + T - E) / T), w > 1 && (w -= 1);
  }
  Object.assign(e, { progress: u, progressLoop: w, isBeginning: f, isEnd: b }),
    (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
      e.updateSlidesProgress(n),
    f && !p && e.emit("reachBeginning toEdge"),
    b && !x && e.emit("reachEnd toEdge"),
    ((p && !f) || (x && !b)) && e.emit("fromEdge"),
    e.emit("progress", u);
}
const Fi = (n, e, r) => {
  e && !n.classList.contains(r)
    ? n.classList.add(r)
    : !e && n.classList.contains(r) && n.classList.remove(r);
};
function rs() {
  const n = this,
    { slides: e, params: r, slidesEl: a, activeIndex: u } = n,
    f = n.virtual && r.virtual.enabled,
    b = n.grid && r.grid && r.grid.rows > 1,
    w = (h) => Oe(a, `.${r.slideClass}${h}, swiper-slide${h}`)[0];
  let p, x, g;
  if (f)
    if (r.loop) {
      let h = u - n.virtual.slidesBefore;
      h < 0 && (h = n.virtual.slides.length + h),
        h >= n.virtual.slides.length && (h -= n.virtual.slides.length),
        (p = w(`[data-swiper-slide-index="${h}"]`));
    } else p = w(`[data-swiper-slide-index="${u}"]`);
  else
    b
      ? ((p = e.filter((h) => h.column === u)[0]),
        (g = e.filter((h) => h.column === u + 1)[0]),
        (x = e.filter((h) => h.column === u - 1)[0]))
      : (p = e[u]);
  p &&
    (b ||
      ((g = Gn(p, `.${r.slideClass}, swiper-slide`)[0]),
      r.loop && !g && (g = e[0]),
      (x = Fn(p, `.${r.slideClass}, swiper-slide`)[0]),
      r.loop && !x === 0 && (x = e[e.length - 1]))),
    e.forEach((h) => {
      Fi(h, h === p, r.slideActiveClass),
        Fi(h, h === g, r.slideNextClass),
        Fi(h, h === x, r.slidePrevClass);
    }),
    n.emitSlidesClasses();
}
const pi = (n, e) => {
    if (!n || n.destroyed || !n.params) return;
    const r = () => (n.isElement ? "swiper-slide" : `.${n.params.slideClass}`),
      a = e.closest(r());
    if (a) {
      let u = a.querySelector(`.${n.params.lazyPreloaderClass}`);
      !u &&
        n.isElement &&
        (a.shadowRoot
          ? (u = a.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              a.shadowRoot &&
                ((u = a.shadowRoot.querySelector(
                  `.${n.params.lazyPreloaderClass}`
                )),
                u && u.remove());
            })),
        u && u.remove();
    }
  },
  Gi = (n, e) => {
    if (!n.slides[e]) return;
    const r = n.slides[e].querySelector('[loading="lazy"]');
    r && r.removeAttribute("loading");
  },
  Yi = (n) => {
    if (!n || n.destroyed || !n.params) return;
    let e = n.params.lazyPreloadPrevNext;
    const r = n.slides.length;
    if (!r || !e || e < 0) return;
    e = Math.min(e, r);
    const a =
        n.params.slidesPerView === "auto"
          ? n.slidesPerViewDynamic()
          : Math.ceil(n.params.slidesPerView),
      u = n.activeIndex;
    if (n.params.grid && n.params.grid.rows > 1) {
      const b = u,
        w = [b - e];
      w.push(...Array.from({ length: e }).map((p, x) => b + a + x)),
        n.slides.forEach((p, x) => {
          w.includes(p.column) && Gi(n, x);
        });
      return;
    }
    const f = u + a - 1;
    if (n.params.rewind || n.params.loop)
      for (let b = u - e; b <= f + e; b += 1) {
        const w = ((b % r) + r) % r;
        (w < u || w > f) && Gi(n, w);
      }
    else
      for (let b = Math.max(u - e, 0); b <= Math.min(f + e, r - 1); b += 1)
        b !== u && (b > f || b < u) && Gi(n, b);
  };
function ns(n) {
  const { slidesGrid: e, params: r } = n,
    a = n.rtlTranslate ? n.translate : -n.translate;
  let u;
  for (let f = 0; f < e.length; f += 1)
    typeof e[f + 1] < "u"
      ? a >= e[f] && a < e[f + 1] - (e[f + 1] - e[f]) / 2
        ? (u = f)
        : a >= e[f] && a < e[f + 1] && (u = f + 1)
      : a >= e[f] && (u = f);
  return r.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0), u;
}
function ss(n) {
  const e = this,
    r = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: a, params: u, activeIndex: f, realIndex: b, snapIndex: w } = e;
  let p = n,
    x;
  const g = (E) => {
    let T = E - e.virtual.slidesBefore;
    return (
      T < 0 && (T = e.virtual.slides.length + T),
      T >= e.virtual.slides.length && (T -= e.virtual.slides.length),
      T
    );
  };
  if ((typeof p > "u" && (p = ns(e)), a.indexOf(r) >= 0)) x = a.indexOf(r);
  else {
    const E = Math.min(u.slidesPerGroupSkip, p);
    x = E + Math.floor((p - E) / u.slidesPerGroup);
  }
  if ((x >= a.length && (x = a.length - 1), p === f && !e.params.loop)) {
    x !== w && ((e.snapIndex = x), e.emit("snapIndexChange"));
    return;
  }
  if (p === f && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = g(p);
    return;
  }
  const h = e.grid && u.grid && u.grid.rows > 1;
  let y;
  if (e.virtual && u.virtual.enabled && u.loop) y = g(p);
  else if (h) {
    const E = e.slides.filter((S) => S.column === p)[0];
    let T = parseInt(E.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(T) && (T = Math.max(e.slides.indexOf(E), 0)),
      (y = Math.floor(T / u.grid.rows));
  } else if (e.slides[p]) {
    const E = e.slides[p].getAttribute("data-swiper-slide-index");
    E ? (y = parseInt(E, 10)) : (y = p);
  } else y = p;
  Object.assign(e, {
    previousSnapIndex: w,
    snapIndex: x,
    previousRealIndex: b,
    realIndex: y,
    previousIndex: f,
    activeIndex: p,
  }),
    e.initialized && Yi(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (b !== y && e.emit("realIndexChange"), e.emit("slideChange"));
}
function as(n, e) {
  const r = this,
    a = r.params;
  let u = n.closest(`.${a.slideClass}, swiper-slide`);
  !u &&
    r.isElement &&
    e &&
    e.length > 1 &&
    e.includes(n) &&
    [...e.slice(e.indexOf(n) + 1, e.length)].forEach((w) => {
      !u && w.matches && w.matches(`.${a.slideClass}, swiper-slide`) && (u = w);
    });
  let f = !1,
    b;
  if (u) {
    for (let w = 0; w < r.slides.length; w += 1)
      if (r.slides[w] === u) {
        (f = !0), (b = w);
        break;
      }
  }
  if (u && f)
    (r.clickedSlide = u),
      r.virtual && r.params.virtual.enabled
        ? (r.clickedIndex = parseInt(
            u.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (r.clickedIndex = b);
  else {
    (r.clickedSlide = void 0), (r.clickedIndex = void 0);
    return;
  }
  a.slideToClickedSlide &&
    r.clickedIndex !== void 0 &&
    r.clickedIndex !== r.activeIndex &&
    r.slideToClickedSlide();
}
var os = {
  updateSize: Qn,
  updateSlides: Zn,
  updateAutoHeight: Jn,
  updateSlidesOffset: es,
  updateSlidesProgress: ts,
  updateProgress: is,
  updateSlidesClasses: rs,
  updateActiveIndex: ss,
  updateClickedSlide: as,
};
function ls(n) {
  n === void 0 && (n = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: r, rtlTranslate: a, translate: u, wrapperEl: f } = e;
  if (r.virtualTranslate) return a ? -u : u;
  if (r.cssMode) return u;
  let b = Xi(f, n);
  return (b += e.cssOverflowAdjustment()), a && (b = -b), b || 0;
}
function fs(n, e) {
  const r = this,
    { rtlTranslate: a, params: u, wrapperEl: f, progress: b } = r;
  let w = 0,
    p = 0;
  const x = 0;
  r.isHorizontal() ? (w = a ? -n : n) : (p = n),
    u.roundLengths && ((w = Math.floor(w)), (p = Math.floor(p))),
    (r.previousTranslate = r.translate),
    (r.translate = r.isHorizontal() ? w : p),
    u.cssMode
      ? (f[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal()
          ? -w
          : -p)
      : u.virtualTranslate ||
        (r.isHorizontal()
          ? (w -= r.cssOverflowAdjustment())
          : (p -= r.cssOverflowAdjustment()),
        (f.style.transform = `translate3d(${w}px, ${p}px, ${x}px)`));
  let g;
  const h = r.maxTranslate() - r.minTranslate();
  h === 0 ? (g = 0) : (g = (n - r.minTranslate()) / h),
    g !== b && r.updateProgress(n),
    r.emit("setTranslate", r.translate, e);
}
function us() {
  return -this.snapGrid[0];
}
function ds() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function cs(n, e, r, a, u) {
  n === void 0 && (n = 0),
    e === void 0 && (e = this.params.speed),
    r === void 0 && (r = !0),
    a === void 0 && (a = !0);
  const f = this,
    { params: b, wrapperEl: w } = f;
  if (f.animating && b.preventInteractionOnTransition) return !1;
  const p = f.minTranslate(),
    x = f.maxTranslate();
  let g;
  if (
    (a && n > p ? (g = p) : a && n < x ? (g = x) : (g = n),
    f.updateProgress(g),
    b.cssMode)
  ) {
    const h = f.isHorizontal();
    if (e === 0) w[h ? "scrollLeft" : "scrollTop"] = -g;
    else {
      if (!f.support.smoothScroll)
        return (
          jr({ swiper: f, targetPosition: -g, side: h ? "left" : "top" }), !0
        );
      w.scrollTo({ [h ? "left" : "top"]: -g, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (f.setTransition(0),
        f.setTranslate(g),
        r && (f.emit("beforeTransitionStart", e, u), f.emit("transitionEnd")))
      : (f.setTransition(e),
        f.setTranslate(g),
        r && (f.emit("beforeTransitionStart", e, u), f.emit("transitionStart")),
        f.animating ||
          ((f.animating = !0),
          f.onTranslateToWrapperTransitionEnd ||
            (f.onTranslateToWrapperTransitionEnd = function (y) {
              !f ||
                f.destroyed ||
                (y.target === this &&
                  (f.wrapperEl.removeEventListener(
                    "transitionend",
                    f.onTranslateToWrapperTransitionEnd
                  ),
                  (f.onTranslateToWrapperTransitionEnd = null),
                  delete f.onTranslateToWrapperTransitionEnd,
                  (f.animating = !1),
                  r && f.emit("transitionEnd")));
            }),
          f.wrapperEl.addEventListener(
            "transitionend",
            f.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var ps = {
  getTranslate: ls,
  setTranslate: fs,
  minTranslate: us,
  maxTranslate: ds,
  translateTo: cs,
};
function hs(n, e) {
  const r = this;
  r.params.cssMode ||
    ((r.wrapperEl.style.transitionDuration = `${n}ms`),
    (r.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : "")),
    r.emit("setTransition", n, e);
}
function Br(n) {
  let { swiper: e, runCallbacks: r, direction: a, step: u } = n;
  const { activeIndex: f, previousIndex: b } = e;
  let w = a;
  if (
    (w || (f > b ? (w = "next") : f < b ? (w = "prev") : (w = "reset")),
    e.emit(`transition${u}`),
    r && f !== b)
  ) {
    if (w === "reset") {
      e.emit(`slideResetTransition${u}`);
      return;
    }
    e.emit(`slideChangeTransition${u}`),
      w === "next"
        ? e.emit(`slideNextTransition${u}`)
        : e.emit(`slidePrevTransition${u}`);
  }
}
function ms(n, e) {
  n === void 0 && (n = !0);
  const r = this,
    { params: a } = r;
  a.cssMode ||
    (a.autoHeight && r.updateAutoHeight(),
    Br({ swiper: r, runCallbacks: n, direction: e, step: "Start" }));
}
function gs(n, e) {
  n === void 0 && (n = !0);
  const r = this,
    { params: a } = r;
  (r.animating = !1),
    !a.cssMode &&
      (r.setTransition(0),
      Br({ swiper: r, runCallbacks: n, direction: e, step: "End" }));
}
var vs = { setTransition: hs, transitionStart: ms, transitionEnd: gs };
function ys(n, e, r, a, u) {
  n === void 0 && (n = 0),
    r === void 0 && (r = !0),
    typeof n == "string" && (n = parseInt(n, 10));
  const f = this;
  let b = n;
  b < 0 && (b = 0);
  const {
    params: w,
    snapGrid: p,
    slidesGrid: x,
    previousIndex: g,
    activeIndex: h,
    rtlTranslate: y,
    wrapperEl: E,
    enabled: T,
  } = f;
  if (
    (!T && !a && !u) ||
    f.destroyed ||
    (f.animating && w.preventInteractionOnTransition)
  )
    return !1;
  typeof e > "u" && (e = f.params.speed);
  const S = Math.min(f.params.slidesPerGroupSkip, b);
  let P = S + Math.floor((b - S) / f.params.slidesPerGroup);
  P >= p.length && (P = p.length - 1);
  const m = -p[P];
  if (w.normalizeSlideIndex)
    for (let M = 0; M < x.length; M += 1) {
      const O = -Math.floor(m * 100),
        G = Math.floor(x[M] * 100),
        Q = Math.floor(x[M + 1] * 100);
      typeof x[M + 1] < "u"
        ? O >= G && O < Q - (Q - G) / 2
          ? (b = M)
          : O >= G && O < Q && (b = M + 1)
        : O >= G && (b = M);
    }
  if (
    f.initialized &&
    b !== h &&
    ((!f.allowSlideNext &&
      (y
        ? m > f.translate && m > f.minTranslate()
        : m < f.translate && m < f.minTranslate())) ||
      (!f.allowSlidePrev &&
        m > f.translate &&
        m > f.maxTranslate() &&
        (h || 0) !== b))
  )
    return !1;
  b !== (g || 0) && r && f.emit("beforeSlideChangeStart"), f.updateProgress(m);
  let A;
  if (
    (b > h ? (A = "next") : b < h ? (A = "prev") : (A = "reset"),
    (y && -m === f.translate) || (!y && m === f.translate))
  )
    return (
      f.updateActiveIndex(b),
      w.autoHeight && f.updateAutoHeight(),
      f.updateSlidesClasses(),
      w.effect !== "slide" && f.setTranslate(m),
      A !== "reset" && (f.transitionStart(r, A), f.transitionEnd(r, A)),
      !1
    );
  if (w.cssMode) {
    const M = f.isHorizontal(),
      O = y ? m : -m;
    if (e === 0) {
      const G = f.virtual && f.params.virtual.enabled;
      G &&
        ((f.wrapperEl.style.scrollSnapType = "none"),
        (f._immediateVirtual = !0)),
        G && !f._cssModeVirtualInitialSet && f.params.initialSlide > 0
          ? ((f._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              E[M ? "scrollLeft" : "scrollTop"] = O;
            }))
          : (E[M ? "scrollLeft" : "scrollTop"] = O),
        G &&
          requestAnimationFrame(() => {
            (f.wrapperEl.style.scrollSnapType = ""), (f._immediateVirtual = !1);
          });
    } else {
      if (!f.support.smoothScroll)
        return (
          jr({ swiper: f, targetPosition: O, side: M ? "left" : "top" }), !0
        );
      E.scrollTo({ [M ? "left" : "top"]: O, behavior: "smooth" });
    }
    return !0;
  }
  return (
    f.setTransition(e),
    f.setTranslate(m),
    f.updateActiveIndex(b),
    f.updateSlidesClasses(),
    f.emit("beforeTransitionStart", e, a),
    f.transitionStart(r, A),
    e === 0
      ? f.transitionEnd(r, A)
      : f.animating ||
        ((f.animating = !0),
        f.onSlideToWrapperTransitionEnd ||
          (f.onSlideToWrapperTransitionEnd = function (O) {
            !f ||
              f.destroyed ||
              (O.target === this &&
                (f.wrapperEl.removeEventListener(
                  "transitionend",
                  f.onSlideToWrapperTransitionEnd
                ),
                (f.onSlideToWrapperTransitionEnd = null),
                delete f.onSlideToWrapperTransitionEnd,
                f.transitionEnd(r, A)));
          }),
        f.wrapperEl.addEventListener(
          "transitionend",
          f.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function ws(n, e, r, a) {
  n === void 0 && (n = 0),
    r === void 0 && (r = !0),
    typeof n == "string" && (n = parseInt(n, 10));
  const u = this;
  if (u.destroyed) return;
  typeof e > "u" && (e = u.params.speed);
  const f = u.grid && u.params.grid && u.params.grid.rows > 1;
  let b = n;
  if (u.params.loop)
    if (u.virtual && u.params.virtual.enabled) b = b + u.virtual.slidesBefore;
    else {
      let w;
      if (f) {
        const y = b * u.params.grid.rows;
        w = u.slides.filter(
          (E) => E.getAttribute("data-swiper-slide-index") * 1 === y
        )[0].column;
      } else w = u.getSlideIndexByData(b);
      const p = f
          ? Math.ceil(u.slides.length / u.params.grid.rows)
          : u.slides.length,
        { centeredSlides: x } = u.params;
      let g = u.params.slidesPerView;
      g === "auto"
        ? (g = u.slidesPerViewDynamic())
        : ((g = Math.ceil(parseFloat(u.params.slidesPerView, 10))),
          x && g % 2 === 0 && (g = g + 1));
      let h = p - w < g;
      if (
        (x && (h = h || w < Math.ceil(g / 2)),
        a && x && u.params.slidesPerView !== "auto" && !f && (h = !1),
        h)
      ) {
        const y = x
          ? w < u.activeIndex
            ? "prev"
            : "next"
          : w - u.activeIndex - 1 < u.params.slidesPerView
            ? "next"
            : "prev";
        u.loopFix({
          direction: y,
          slideTo: !0,
          activeSlideIndex: y === "next" ? w + 1 : w - p + 1,
          slideRealIndex: y === "next" ? u.realIndex : void 0,
        });
      }
      if (f) {
        const y = b * u.params.grid.rows;
        b = u.slides.filter(
          (E) => E.getAttribute("data-swiper-slide-index") * 1 === y
        )[0].column;
      } else b = u.getSlideIndexByData(b);
    }
  return (
    requestAnimationFrame(() => {
      u.slideTo(b, e, r, a);
    }),
    u
  );
}
function bs(n, e, r) {
  e === void 0 && (e = !0);
  const a = this,
    { enabled: u, params: f, animating: b } = a;
  if (!u || a.destroyed) return a;
  typeof n > "u" && (n = a.params.speed);
  let w = f.slidesPerGroup;
  f.slidesPerView === "auto" &&
    f.slidesPerGroup === 1 &&
    f.slidesPerGroupAuto &&
    (w = Math.max(a.slidesPerViewDynamic("current", !0), 1));
  const p = a.activeIndex < f.slidesPerGroupSkip ? 1 : w,
    x = a.virtual && f.virtual.enabled;
  if (f.loop) {
    if (b && !x && f.loopPreventsSliding) return !1;
    if (
      (a.loopFix({ direction: "next" }),
      (a._clientLeft = a.wrapperEl.clientLeft),
      a.activeIndex === a.slides.length - 1 && f.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          a.slideTo(a.activeIndex + p, n, e, r);
        }),
        !0
      );
  }
  return f.rewind && a.isEnd
    ? a.slideTo(0, n, e, r)
    : a.slideTo(a.activeIndex + p, n, e, r);
}
function xs(n, e, r) {
  e === void 0 && (e = !0);
  const a = this,
    {
      params: u,
      snapGrid: f,
      slidesGrid: b,
      rtlTranslate: w,
      enabled: p,
      animating: x,
    } = a;
  if (!p || a.destroyed) return a;
  typeof n > "u" && (n = a.params.speed);
  const g = a.virtual && u.virtual.enabled;
  if (u.loop) {
    if (x && !g && u.loopPreventsSliding) return !1;
    a.loopFix({ direction: "prev" }), (a._clientLeft = a.wrapperEl.clientLeft);
  }
  const h = w ? a.translate : -a.translate;
  function y(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const E = y(h),
    T = f.map((m) => y(m));
  let S = f[T.indexOf(E) - 1];
  if (typeof S > "u" && u.cssMode) {
    let m;
    f.forEach((A, M) => {
      E >= A && (m = M);
    }),
      typeof m < "u" && (S = f[m > 0 ? m - 1 : m]);
  }
  let P = 0;
  if (
    (typeof S < "u" &&
      ((P = b.indexOf(S)),
      P < 0 && (P = a.activeIndex - 1),
      u.slidesPerView === "auto" &&
        u.slidesPerGroup === 1 &&
        u.slidesPerGroupAuto &&
        ((P = P - a.slidesPerViewDynamic("previous", !0) + 1),
        (P = Math.max(P, 0)))),
    u.rewind && a.isBeginning)
  ) {
    const m =
      a.params.virtual && a.params.virtual.enabled && a.virtual
        ? a.virtual.slides.length - 1
        : a.slides.length - 1;
    return a.slideTo(m, n, e, r);
  } else if (u.loop && a.activeIndex === 0 && u.cssMode)
    return (
      requestAnimationFrame(() => {
        a.slideTo(P, n, e, r);
      }),
      !0
    );
  return a.slideTo(P, n, e, r);
}
function Ss(n, e, r) {
  e === void 0 && (e = !0);
  const a = this;
  if (!a.destroyed)
    return (
      typeof n > "u" && (n = a.params.speed), a.slideTo(a.activeIndex, n, e, r)
    );
}
function Ts(n, e, r, a) {
  e === void 0 && (e = !0), a === void 0 && (a = 0.5);
  const u = this;
  if (u.destroyed) return;
  typeof n > "u" && (n = u.params.speed);
  let f = u.activeIndex;
  const b = Math.min(u.params.slidesPerGroupSkip, f),
    w = b + Math.floor((f - b) / u.params.slidesPerGroup),
    p = u.rtlTranslate ? u.translate : -u.translate;
  if (p >= u.snapGrid[w]) {
    const x = u.snapGrid[w],
      g = u.snapGrid[w + 1];
    p - x > (g - x) * a && (f += u.params.slidesPerGroup);
  } else {
    const x = u.snapGrid[w - 1],
      g = u.snapGrid[w];
    p - x <= (g - x) * a && (f -= u.params.slidesPerGroup);
  }
  return (
    (f = Math.max(f, 0)),
    (f = Math.min(f, u.slidesGrid.length - 1)),
    u.slideTo(f, n, e, r)
  );
}
function Es() {
  const n = this;
  if (n.destroyed) return;
  const { params: e, slidesEl: r } = n,
    a = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
  let u = n.clickedIndex,
    f;
  const b = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (n.animating) return;
    (f = parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? u < n.loopedSlides - a / 2 ||
          u > n.slides.length - n.loopedSlides + a / 2
          ? (n.loopFix(),
            (u = n.getSlideIndex(
              Oe(r, `${b}[data-swiper-slide-index="${f}"]`)[0]
            )),
            Mt(() => {
              n.slideTo(u);
            }))
          : n.slideTo(u)
        : u > n.slides.length - a
          ? (n.loopFix(),
            (u = n.getSlideIndex(
              Oe(r, `${b}[data-swiper-slide-index="${f}"]`)[0]
            )),
            Mt(() => {
              n.slideTo(u);
            }))
          : n.slideTo(u);
  } else n.slideTo(u);
}
var Cs = {
  slideTo: ys,
  slideToLoop: ws,
  slideNext: bs,
  slidePrev: xs,
  slideReset: Ss,
  slideToClosest: Ts,
  slideToClickedSlide: Es,
};
function Ms(n) {
  const e = this,
    { params: r, slidesEl: a } = e;
  if (!r.loop || (e.virtual && e.params.virtual.enabled)) return;
  const u = () => {
      Oe(a, `.${r.slideClass}, swiper-slide`).forEach((h, y) => {
        h.setAttribute("data-swiper-slide-index", y);
      });
    },
    f = e.grid && r.grid && r.grid.rows > 1,
    b = r.slidesPerGroup * (f ? r.grid.rows : 1),
    w = e.slides.length % b !== 0,
    p = f && e.slides.length % r.grid.rows !== 0,
    x = (g) => {
      for (let h = 0; h < g; h += 1) {
        const y = e.isElement
          ? _e("swiper-slide", [r.slideBlankClass])
          : _e("div", [r.slideClass, r.slideBlankClass]);
        e.slidesEl.append(y);
      }
    };
  if (w) {
    if (r.loopAddBlankSlides) {
      const g = b - (e.slides.length % b);
      x(g), e.recalcSlides(), e.updateSlides();
    } else
      hi(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    u();
  } else if (p) {
    if (r.loopAddBlankSlides) {
      const g = r.grid.rows - (e.slides.length % r.grid.rows);
      x(g), e.recalcSlides(), e.updateSlides();
    } else
      hi(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    u();
  } else u();
  e.loopFix({
    slideRealIndex: n,
    direction: r.centeredSlides ? void 0 : "next",
  });
}
function Ps(n) {
  let {
    slideRealIndex: e,
    slideTo: r = !0,
    direction: a,
    setTranslate: u,
    activeSlideIndex: f,
    byController: b,
    byMousewheel: w,
  } = n === void 0 ? {} : n;
  const p = this;
  if (!p.params.loop) return;
  p.emit("beforeLoopFix");
  const {
      slides: x,
      allowSlidePrev: g,
      allowSlideNext: h,
      slidesEl: y,
      params: E,
    } = p,
    { centeredSlides: T } = E;
  if (
    ((p.allowSlidePrev = !0),
    (p.allowSlideNext = !0),
    p.virtual && E.virtual.enabled)
  ) {
    r &&
      (!E.centeredSlides && p.snapIndex === 0
        ? p.slideTo(p.virtual.slides.length, 0, !1, !0)
        : E.centeredSlides && p.snapIndex < E.slidesPerView
          ? p.slideTo(p.virtual.slides.length + p.snapIndex, 0, !1, !0)
          : p.snapIndex === p.snapGrid.length - 1 &&
            p.slideTo(p.virtual.slidesBefore, 0, !1, !0)),
      (p.allowSlidePrev = g),
      (p.allowSlideNext = h),
      p.emit("loopFix");
    return;
  }
  let S = E.slidesPerView;
  S === "auto"
    ? (S = p.slidesPerViewDynamic())
    : ((S = Math.ceil(parseFloat(E.slidesPerView, 10))),
      T && S % 2 === 0 && (S = S + 1));
  const P = E.slidesPerGroupAuto ? S : E.slidesPerGroup;
  let m = P;
  m % P !== 0 && (m += P - (m % P)),
    (m += E.loopAdditionalSlides),
    (p.loopedSlides = m);
  const A = p.grid && E.grid && E.grid.rows > 1;
  x.length < S + m
    ? hi(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : A &&
      E.grid.fill === "row" &&
      hi(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const M = [],
    O = [];
  let G = p.activeIndex;
  typeof f > "u"
    ? (f = p.getSlideIndex(
        x.filter((z) => z.classList.contains(E.slideActiveClass))[0]
      ))
    : (G = f);
  const Q = a === "next" || !a,
    o = a === "prev" || !a;
  let X = 0,
    H = 0;
  const _ = A ? Math.ceil(x.length / E.grid.rows) : x.length,
    R = (A ? x[f].column : f) + (T && typeof u > "u" ? -S / 2 + 0.5 : 0);
  if (R < m) {
    X = Math.max(m - R, P);
    for (let z = 0; z < m - R; z += 1) {
      const q = z - Math.floor(z / _) * _;
      if (A) {
        const K = _ - q - 1;
        for (let ae = x.length - 1; ae >= 0; ae -= 1)
          x[ae].column === K && M.push(ae);
      } else M.push(_ - q - 1);
    }
  } else if (R + S > _ - m) {
    H = Math.max(R - (_ - m * 2), P);
    for (let z = 0; z < H; z += 1) {
      const q = z - Math.floor(z / _) * _;
      A
        ? x.forEach((K, ae) => {
            K.column === q && O.push(ae);
          })
        : O.push(q);
    }
  }
  if (
    ((p.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      p.__preventObserver__ = !1;
    }),
    o &&
      M.forEach((z) => {
        (x[z].swiperLoopMoveDOM = !0),
          y.prepend(x[z]),
          (x[z].swiperLoopMoveDOM = !1);
      }),
    Q &&
      O.forEach((z) => {
        (x[z].swiperLoopMoveDOM = !0),
          y.append(x[z]),
          (x[z].swiperLoopMoveDOM = !1);
      }),
    p.recalcSlides(),
    E.slidesPerView === "auto"
      ? p.updateSlides()
      : A &&
        ((M.length > 0 && o) || (O.length > 0 && Q)) &&
        p.slides.forEach((z, q) => {
          p.grid.updateSlide(q, z, p.slides);
        }),
    E.watchSlidesProgress && p.updateSlidesOffset(),
    r)
  ) {
    if (M.length > 0 && o) {
      if (typeof e > "u") {
        const z = p.slidesGrid[G],
          K = p.slidesGrid[G + X] - z;
        w
          ? p.setTranslate(p.translate - K)
          : (p.slideTo(G + Math.ceil(X), 0, !1, !0),
            u &&
              ((p.touchEventsData.startTranslate =
                p.touchEventsData.startTranslate - K),
              (p.touchEventsData.currentTranslate =
                p.touchEventsData.currentTranslate - K)));
      } else if (u) {
        const z = A ? M.length / E.grid.rows : M.length;
        p.slideTo(p.activeIndex + z, 0, !1, !0),
          (p.touchEventsData.currentTranslate = p.translate);
      }
    } else if (O.length > 0 && Q)
      if (typeof e > "u") {
        const z = p.slidesGrid[G],
          K = p.slidesGrid[G - H] - z;
        w
          ? p.setTranslate(p.translate - K)
          : (p.slideTo(G - H, 0, !1, !0),
            u &&
              ((p.touchEventsData.startTranslate =
                p.touchEventsData.startTranslate - K),
              (p.touchEventsData.currentTranslate =
                p.touchEventsData.currentTranslate - K)));
      } else {
        const z = A ? O.length / E.grid.rows : O.length;
        p.slideTo(p.activeIndex - z, 0, !1, !0);
      }
  }
  if (
    ((p.allowSlidePrev = g),
    (p.allowSlideNext = h),
    p.controller && p.controller.control && !b)
  ) {
    const z = {
      slideRealIndex: e,
      direction: a,
      setTranslate: u,
      activeSlideIndex: f,
      byController: !0,
    };
    Array.isArray(p.controller.control)
      ? p.controller.control.forEach((q) => {
          !q.destroyed &&
            q.params.loop &&
            q.loopFix({
              ...z,
              slideTo: q.params.slidesPerView === E.slidesPerView ? r : !1,
            });
        })
      : p.controller.control instanceof p.constructor &&
        p.controller.control.params.loop &&
        p.controller.control.loopFix({
          ...z,
          slideTo:
            p.controller.control.params.slidesPerView === E.slidesPerView
              ? r
              : !1,
        });
  }
  p.emit("loopFix");
}
function Ls() {
  const n = this,
    { params: e, slidesEl: r } = n;
  if (!e.loop || (n.virtual && n.params.virtual.enabled)) return;
  n.recalcSlides();
  const a = [];
  n.slides.forEach((u) => {
    const f =
      typeof u.swiperSlideIndex > "u"
        ? u.getAttribute("data-swiper-slide-index") * 1
        : u.swiperSlideIndex;
    a[f] = u;
  }),
    n.slides.forEach((u) => {
      u.removeAttribute("data-swiper-slide-index");
    }),
    a.forEach((u) => {
      r.append(u);
    }),
    n.recalcSlides(),
    n.slideTo(n.realIndex, 0);
}
var As = { loopCreate: Ms, loopFix: Ps, loopDestroy: Ls };
function Is(n) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const r = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (r.style.cursor = "move"),
    (r.style.cursor = n ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function Ds() {
  const n = this;
  (n.params.watchOverflow && n.isLocked) ||
    n.params.cssMode ||
    (n.isElement && (n.__preventObserver__ = !0),
    (n[
      n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    n.isElement &&
      requestAnimationFrame(() => {
        n.__preventObserver__ = !1;
      }));
}
var Os = { setGrabCursor: Is, unsetGrabCursor: Ds };
function ks(n, e) {
  e === void 0 && (e = this);
  function r(a) {
    if (!a || a === ke() || a === Pe()) return null;
    a.assignedSlot && (a = a.assignedSlot);
    const u = a.closest(n);
    return !u && !a.getRootNode ? null : u || r(a.getRootNode().host);
  }
  return r(e);
}
function kr(n, e, r) {
  const a = Pe(),
    { params: u } = n,
    f = u.edgeSwipeDetection,
    b = u.edgeSwipeThreshold;
  return f && (r <= b || r >= a.innerWidth - b)
    ? f === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function zs(n) {
  const e = this,
    r = ke();
  let a = n;
  a.originalEvent && (a = a.originalEvent);
  const u = e.touchEventsData;
  if (a.type === "pointerdown") {
    if (u.pointerId !== null && u.pointerId !== a.pointerId) return;
    u.pointerId = a.pointerId;
  } else
    a.type === "touchstart" &&
      a.targetTouches.length === 1 &&
      (u.touchId = a.targetTouches[0].identifier);
  if (a.type === "touchstart") {
    kr(e, a, a.targetTouches[0].pageX);
    return;
  }
  const { params: f, touches: b, enabled: w } = e;
  if (
    !w ||
    (!f.simulateTouch && a.pointerType === "mouse") ||
    (e.animating && f.preventInteractionOnTransition)
  )
    return;
  !e.animating && f.cssMode && f.loop && e.loopFix();
  let p = a.target;
  if (
    (f.touchEventsTarget === "wrapper" && !Bn(p, e.wrapperEl)) ||
    ("which" in a && a.which === 3) ||
    ("button" in a && a.button > 0) ||
    (u.isTouched && u.isMoved)
  )
    return;
  const x = !!f.noSwipingClass && f.noSwipingClass !== "",
    g = a.composedPath ? a.composedPath() : a.path;
  x && a.target && a.target.shadowRoot && g && (p = g[0]);
  const h = f.noSwipingSelector ? f.noSwipingSelector : `.${f.noSwipingClass}`,
    y = !!(a.target && a.target.shadowRoot);
  if (f.noSwiping && (y ? ks(h, p) : p.closest(h))) {
    e.allowClick = !0;
    return;
  }
  if (f.swipeHandler && !p.closest(f.swipeHandler)) return;
  (b.currentX = a.pageX), (b.currentY = a.pageY);
  const E = b.currentX,
    T = b.currentY;
  if (!kr(e, a, E)) return;
  Object.assign(u, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (b.startX = E),
    (b.startY = T),
    (u.touchStartTime = Ye()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    f.threshold > 0 && (u.allowThresholdMove = !1);
  let S = !0;
  p.matches(u.focusableElements) &&
    ((S = !1), p.nodeName === "SELECT" && (u.isTouched = !1)),
    r.activeElement &&
      r.activeElement.matches(u.focusableElements) &&
      r.activeElement !== p &&
      r.activeElement.blur();
  const P = S && e.allowTouchMove && f.touchStartPreventDefault;
  (f.touchStartForcePreventDefault || P) &&
    !p.isContentEditable &&
    a.preventDefault(),
    f.freeMode &&
      f.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !f.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", a);
}
function $s(n) {
  const e = ke(),
    r = this,
    a = r.touchEventsData,
    { params: u, touches: f, rtlTranslate: b, enabled: w } = r;
  if (!w || (!u.simulateTouch && n.pointerType === "mouse")) return;
  let p = n;
  if (
    (p.originalEvent && (p = p.originalEvent),
    p.type === "pointermove" &&
      (a.touchId !== null || p.pointerId !== a.pointerId))
  )
    return;
  let x;
  if (p.type === "touchmove") {
    if (
      ((x = [...p.changedTouches].filter((Q) => Q.identifier === a.touchId)[0]),
      !x || x.identifier !== a.touchId)
    )
      return;
  } else x = p;
  if (!a.isTouched) {
    a.startMoving && a.isScrolling && r.emit("touchMoveOpposite", p);
    return;
  }
  const g = x.pageX,
    h = x.pageY;
  if (p.preventedByNestedSwiper) {
    (f.startX = g), (f.startY = h);
    return;
  }
  if (!r.allowTouchMove) {
    p.target.matches(a.focusableElements) || (r.allowClick = !1),
      a.isTouched &&
        (Object.assign(f, { startX: g, startY: h, currentX: g, currentY: h }),
        (a.touchStartTime = Ye()));
    return;
  }
  if (u.touchReleaseOnEdges && !u.loop) {
    if (r.isVertical()) {
      if (
        (h < f.startY && r.translate <= r.maxTranslate()) ||
        (h > f.startY && r.translate >= r.minTranslate())
      ) {
        (a.isTouched = !1), (a.isMoved = !1);
        return;
      }
    } else if (
      (g < f.startX && r.translate <= r.maxTranslate()) ||
      (g > f.startX && r.translate >= r.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    p.target === e.activeElement &&
    p.target.matches(a.focusableElements)
  ) {
    (a.isMoved = !0), (r.allowClick = !1);
    return;
  }
  a.allowTouchCallbacks && r.emit("touchMove", p),
    (f.previousX = f.currentX),
    (f.previousY = f.currentY),
    (f.currentX = g),
    (f.currentY = h);
  const y = f.currentX - f.startX,
    E = f.currentY - f.startY;
  if (r.params.threshold && Math.sqrt(y ** 2 + E ** 2) < r.params.threshold)
    return;
  if (typeof a.isScrolling > "u") {
    let Q;
    (r.isHorizontal() && f.currentY === f.startY) ||
    (r.isVertical() && f.currentX === f.startX)
      ? (a.isScrolling = !1)
      : y * y + E * E >= 25 &&
        ((Q = (Math.atan2(Math.abs(E), Math.abs(y)) * 180) / Math.PI),
        (a.isScrolling = r.isHorizontal()
          ? Q > u.touchAngle
          : 90 - Q > u.touchAngle));
  }
  if (
    (a.isScrolling && r.emit("touchMoveOpposite", p),
    typeof a.startMoving > "u" &&
      (f.currentX !== f.startX || f.currentY !== f.startY) &&
      (a.startMoving = !0),
    a.isScrolling ||
      (p.type === "touchmove" && a.preventTouchMoveFromPointerMove))
  ) {
    a.isTouched = !1;
    return;
  }
  if (!a.startMoving) return;
  (r.allowClick = !1),
    !u.cssMode && p.cancelable && p.preventDefault(),
    u.touchMoveStopPropagation && !u.nested && p.stopPropagation();
  let T = r.isHorizontal() ? y : E,
    S = r.isHorizontal() ? f.currentX - f.previousX : f.currentY - f.previousY;
  u.oneWayMovement &&
    ((T = Math.abs(T) * (b ? 1 : -1)), (S = Math.abs(S) * (b ? 1 : -1))),
    (f.diff = T),
    (T *= u.touchRatio),
    b && ((T = -T), (S = -S));
  const P = r.touchesDirection;
  (r.swipeDirection = T > 0 ? "prev" : "next"),
    (r.touchesDirection = S > 0 ? "prev" : "next");
  const m = r.params.loop && !u.cssMode,
    A =
      (r.touchesDirection === "next" && r.allowSlideNext) ||
      (r.touchesDirection === "prev" && r.allowSlidePrev);
  if (!a.isMoved) {
    if (
      (m && A && r.loopFix({ direction: r.swipeDirection }),
      (a.startTranslate = r.getTranslate()),
      r.setTransition(0),
      r.animating)
    ) {
      const Q = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      r.wrapperEl.dispatchEvent(Q);
    }
    (a.allowMomentumBounce = !1),
      u.grabCursor &&
        (r.allowSlideNext === !0 || r.allowSlidePrev === !0) &&
        r.setGrabCursor(!0),
      r.emit("sliderFirstMove", p);
  }
  let M;
  if (
    (new Date().getTime(),
    a.isMoved &&
      a.allowThresholdMove &&
      P !== r.touchesDirection &&
      m &&
      A &&
      Math.abs(T) >= 1)
  ) {
    Object.assign(f, {
      startX: g,
      startY: h,
      currentX: g,
      currentY: h,
      startTranslate: a.currentTranslate,
    }),
      (a.loopSwapReset = !0),
      (a.startTranslate = a.currentTranslate);
    return;
  }
  r.emit("sliderMove", p),
    (a.isMoved = !0),
    (a.currentTranslate = T + a.startTranslate);
  let O = !0,
    G = u.resistanceRatio;
  if (
    (u.touchReleaseOnEdges && (G = 0),
    T > 0
      ? (m &&
          A &&
          !M &&
          a.allowThresholdMove &&
          a.currentTranslate >
            (u.centeredSlides
              ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1]
              : r.minTranslate()) &&
          r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        a.currentTranslate > r.minTranslate() &&
          ((O = !1),
          u.resistance &&
            (a.currentTranslate =
              r.minTranslate() -
              1 +
              (-r.minTranslate() + a.startTranslate + T) ** G)))
      : T < 0 &&
        (m &&
          A &&
          !M &&
          a.allowThresholdMove &&
          a.currentTranslate <
            (u.centeredSlides
              ? r.maxTranslate() +
                r.slidesSizesGrid[r.slidesSizesGrid.length - 1]
              : r.maxTranslate()) &&
          r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              r.slides.length -
              (u.slidesPerView === "auto"
                ? r.slidesPerViewDynamic()
                : Math.ceil(parseFloat(u.slidesPerView, 10))),
          }),
        a.currentTranslate < r.maxTranslate() &&
          ((O = !1),
          u.resistance &&
            (a.currentTranslate =
              r.maxTranslate() +
              1 -
              (r.maxTranslate() - a.startTranslate - T) ** G))),
    O && (p.preventedByNestedSwiper = !0),
    !r.allowSlideNext &&
      r.swipeDirection === "next" &&
      a.currentTranslate < a.startTranslate &&
      (a.currentTranslate = a.startTranslate),
    !r.allowSlidePrev &&
      r.swipeDirection === "prev" &&
      a.currentTranslate > a.startTranslate &&
      (a.currentTranslate = a.startTranslate),
    !r.allowSlidePrev &&
      !r.allowSlideNext &&
      (a.currentTranslate = a.startTranslate),
    u.threshold > 0)
  )
    if (Math.abs(T) > u.threshold || a.allowThresholdMove) {
      if (!a.allowThresholdMove) {
        (a.allowThresholdMove = !0),
          (f.startX = f.currentX),
          (f.startY = f.currentY),
          (a.currentTranslate = a.startTranslate),
          (f.diff = r.isHorizontal()
            ? f.currentX - f.startX
            : f.currentY - f.startY);
        return;
      }
    } else {
      a.currentTranslate = a.startTranslate;
      return;
    }
  !u.followFinger ||
    u.cssMode ||
    (((u.freeMode && u.freeMode.enabled && r.freeMode) ||
      u.watchSlidesProgress) &&
      (r.updateActiveIndex(), r.updateSlidesClasses()),
    u.freeMode && u.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(),
    r.updateProgress(a.currentTranslate),
    r.setTranslate(a.currentTranslate));
}
function Ns(n) {
  const e = this,
    r = e.touchEventsData;
  let a = n;
  a.originalEvent && (a = a.originalEvent);
  let u;
  if (a.type === "touchend" || a.type === "touchcancel") {
    if (
      ((u = [...a.changedTouches].filter((G) => G.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else {
    if (r.touchId !== null || a.pointerId !== r.pointerId) return;
    u = a;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      a.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(a.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return;
  (r.pointerId = null), (r.touchId = null);
  const {
    params: b,
    touches: w,
    rtlTranslate: p,
    slidesGrid: x,
    enabled: g,
  } = e;
  if (!g || (!b.simulateTouch && a.pointerType === "mouse")) return;
  if (
    (r.allowTouchCallbacks && e.emit("touchEnd", a),
    (r.allowTouchCallbacks = !1),
    !r.isTouched)
  ) {
    r.isMoved && b.grabCursor && e.setGrabCursor(!1),
      (r.isMoved = !1),
      (r.startMoving = !1);
    return;
  }
  b.grabCursor &&
    r.isMoved &&
    r.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const h = Ye(),
    y = h - r.touchStartTime;
  if (e.allowClick) {
    const G = a.path || (a.composedPath && a.composedPath());
    e.updateClickedSlide((G && G[0]) || a.target, G),
      e.emit("tap click", a),
      y < 300 &&
        h - r.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", a);
  }
  if (
    ((r.lastClickTime = Ye()),
    Mt(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !r.isTouched ||
      !r.isMoved ||
      !e.swipeDirection ||
      (w.diff === 0 && !r.loopSwapReset) ||
      (r.currentTranslate === r.startTranslate && !r.loopSwapReset))
  ) {
    (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
    return;
  }
  (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
  let E;
  if (
    (b.followFinger
      ? (E = p ? e.translate : -e.translate)
      : (E = -r.currentTranslate),
    b.cssMode)
  )
    return;
  if (b.freeMode && b.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: E });
    return;
  }
  const T = E >= -e.maxTranslate() && !e.params.loop;
  let S = 0,
    P = e.slidesSizesGrid[0];
  for (
    let G = 0;
    G < x.length;
    G += G < b.slidesPerGroupSkip ? 1 : b.slidesPerGroup
  ) {
    const Q = G < b.slidesPerGroupSkip - 1 ? 1 : b.slidesPerGroup;
    typeof x[G + Q] < "u"
      ? (T || (E >= x[G] && E < x[G + Q])) && ((S = G), (P = x[G + Q] - x[G]))
      : (T || E >= x[G]) && ((S = G), (P = x[x.length - 1] - x[x.length - 2]));
  }
  let m = null,
    A = null;
  b.rewind &&
    (e.isBeginning
      ? (A =
          b.virtual && b.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (m = 0));
  const M = (E - x[S]) / P,
    O = S < b.slidesPerGroupSkip - 1 ? 1 : b.slidesPerGroup;
  if (y > b.longSwipesMs) {
    if (!b.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (M >= b.longSwipesRatio
        ? e.slideTo(b.rewind && e.isEnd ? m : S + O)
        : e.slideTo(S)),
      e.swipeDirection === "prev" &&
        (M > 1 - b.longSwipesRatio
          ? e.slideTo(S + O)
          : A !== null && M < 0 && Math.abs(M) > b.longSwipesRatio
            ? e.slideTo(A)
            : e.slideTo(S));
  } else {
    if (!b.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (a.target === e.navigation.nextEl || a.target === e.navigation.prevEl)
      ? a.target === e.navigation.nextEl
        ? e.slideTo(S + O)
        : e.slideTo(S)
      : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : S + O),
        e.swipeDirection === "prev" && e.slideTo(A !== null ? A : S));
  }
}
function zr() {
  const n = this,
    { params: e, el: r } = n;
  if (r && r.offsetWidth === 0) return;
  e.breakpoints && n.setBreakpoint();
  const { allowSlideNext: a, allowSlidePrev: u, snapGrid: f } = n,
    b = n.virtual && n.params.virtual.enabled;
  (n.allowSlideNext = !0),
    (n.allowSlidePrev = !0),
    n.updateSize(),
    n.updateSlides(),
    n.updateSlidesClasses();
  const w = b && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  n.isEnd &&
  !n.isBeginning &&
  !n.params.centeredSlides &&
  !w
    ? n.slideTo(n.slides.length - 1, 0, !1, !0)
    : n.params.loop && !b
      ? n.slideToLoop(n.realIndex, 0, !1, !0)
      : n.slideTo(n.activeIndex, 0, !1, !0),
    n.autoplay &&
      n.autoplay.running &&
      n.autoplay.paused &&
      (clearTimeout(n.autoplay.resizeTimeout),
      (n.autoplay.resizeTimeout = setTimeout(() => {
        n.autoplay &&
          n.autoplay.running &&
          n.autoplay.paused &&
          n.autoplay.resume();
      }, 500))),
    (n.allowSlidePrev = u),
    (n.allowSlideNext = a),
    n.params.watchOverflow && f !== n.snapGrid && n.checkOverflow();
}
function Hs(n) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && n.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (n.stopPropagation(), n.stopImmediatePropagation())));
}
function js() {
  const n = this,
    { wrapperEl: e, rtlTranslate: r, enabled: a } = n;
  if (!a) return;
  (n.previousTranslate = n.translate),
    n.isHorizontal()
      ? (n.translate = -e.scrollLeft)
      : (n.translate = -e.scrollTop),
    n.translate === 0 && (n.translate = 0),
    n.updateActiveIndex(),
    n.updateSlidesClasses();
  let u;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (u = 0) : (u = (n.translate - n.minTranslate()) / f),
    u !== n.progress && n.updateProgress(r ? -n.translate : n.translate),
    n.emit("setTranslate", n.translate, !1);
}
function Rs(n) {
  const e = this;
  pi(e, n.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
function qs() {
  const n = this;
  n.documentTouchHandlerProceeded ||
    ((n.documentTouchHandlerProceeded = !0),
    n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"));
}
const Fr = (n, e) => {
  const r = ke(),
    { params: a, el: u, wrapperEl: f, device: b } = n,
    w = !!a.nested,
    p = e === "on" ? "addEventListener" : "removeEventListener",
    x = e;
  !u ||
    typeof u == "string" ||
    (r[p]("touchstart", n.onDocumentTouchStart, { passive: !1, capture: w }),
    u[p]("touchstart", n.onTouchStart, { passive: !1 }),
    u[p]("pointerdown", n.onTouchStart, { passive: !1 }),
    r[p]("touchmove", n.onTouchMove, { passive: !1, capture: w }),
    r[p]("pointermove", n.onTouchMove, { passive: !1, capture: w }),
    r[p]("touchend", n.onTouchEnd, { passive: !0 }),
    r[p]("pointerup", n.onTouchEnd, { passive: !0 }),
    r[p]("pointercancel", n.onTouchEnd, { passive: !0 }),
    r[p]("touchcancel", n.onTouchEnd, { passive: !0 }),
    r[p]("pointerout", n.onTouchEnd, { passive: !0 }),
    r[p]("pointerleave", n.onTouchEnd, { passive: !0 }),
    r[p]("contextmenu", n.onTouchEnd, { passive: !0 }),
    (a.preventClicks || a.preventClicksPropagation) &&
      u[p]("click", n.onClick, !0),
    a.cssMode && f[p]("scroll", n.onScroll),
    a.updateOnWindowResize
      ? n[x](
          b.ios || b.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          zr,
          !0
        )
      : n[x]("observerUpdate", zr, !0),
    u[p]("load", n.onLoad, { capture: !0 }));
};
function Bs() {
  const n = this,
    { params: e } = n;
  (n.onTouchStart = zs.bind(n)),
    (n.onTouchMove = $s.bind(n)),
    (n.onTouchEnd = Ns.bind(n)),
    (n.onDocumentTouchStart = qs.bind(n)),
    e.cssMode && (n.onScroll = js.bind(n)),
    (n.onClick = Hs.bind(n)),
    (n.onLoad = Rs.bind(n)),
    Fr(n, "on");
}
function Fs() {
  Fr(this, "off");
}
var Gs = { attachEvents: Bs, detachEvents: Fs };
const $r = (n, e) => n.grid && e.grid && e.grid.rows > 1;
function _s() {
  const n = this,
    { realIndex: e, initialized: r, params: a, el: u } = n,
    f = a.breakpoints;
  if (!f || (f && Object.keys(f).length === 0)) return;
  const b = n.getBreakpoint(f, n.params.breakpointsBase, n.el);
  if (!b || n.currentBreakpoint === b) return;
  const p = (b in f ? f[b] : void 0) || n.originalParams,
    x = $r(n, a),
    g = $r(n, p),
    h = n.params.grabCursor,
    y = p.grabCursor,
    E = a.enabled;
  x && !g
    ? (u.classList.remove(
        `${a.containerModifierClass}grid`,
        `${a.containerModifierClass}grid-column`
      ),
      n.emitContainerClasses())
    : !x &&
      g &&
      (u.classList.add(`${a.containerModifierClass}grid`),
      ((p.grid.fill && p.grid.fill === "column") ||
        (!p.grid.fill && a.grid.fill === "column")) &&
        u.classList.add(`${a.containerModifierClass}grid-column`),
      n.emitContainerClasses()),
    h && !y ? n.unsetGrabCursor() : !h && y && n.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((M) => {
      if (typeof p[M] > "u") return;
      const O = a[M] && a[M].enabled,
        G = p[M] && p[M].enabled;
      O && !G && n[M].disable(), !O && G && n[M].enable();
    });
  const T = p.direction && p.direction !== a.direction,
    S = a.loop && (p.slidesPerView !== a.slidesPerView || T),
    P = a.loop;
  T && r && n.changeDirection(), Ge(n.params, p);
  const m = n.params.enabled,
    A = n.params.loop;
  Object.assign(n, {
    allowTouchMove: n.params.allowTouchMove,
    allowSlideNext: n.params.allowSlideNext,
    allowSlidePrev: n.params.allowSlidePrev,
  }),
    E && !m ? n.disable() : !E && m && n.enable(),
    (n.currentBreakpoint = b),
    n.emit("_beforeBreakpoint", p),
    r &&
      (S
        ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides())
        : !P && A
          ? (n.loopCreate(e), n.updateSlides())
          : P && !A && n.loopDestroy()),
    n.emit("breakpoint", p);
}
function Ws(n, e, r) {
  if ((e === void 0 && (e = "window"), !n || (e === "container" && !r))) return;
  let a = !1;
  const u = Pe(),
    f = e === "window" ? u.innerHeight : r.clientHeight,
    b = Object.keys(n).map((w) => {
      if (typeof w == "string" && w.indexOf("@") === 0) {
        const p = parseFloat(w.substr(1));
        return { value: f * p, point: w };
      }
      return { value: w, point: w };
    });
  b.sort((w, p) => parseInt(w.value, 10) - parseInt(p.value, 10));
  for (let w = 0; w < b.length; w += 1) {
    const { point: p, value: x } = b[w];
    e === "window"
      ? u.matchMedia(`(min-width: ${x}px)`).matches && (a = p)
      : x <= r.clientWidth && (a = p);
  }
  return a || "max";
}
var Xs = { setBreakpoint: _s, getBreakpoint: Ws };
function Vs(n, e) {
  const r = [];
  return (
    n.forEach((a) => {
      typeof a == "object"
        ? Object.keys(a).forEach((u) => {
            a[u] && r.push(e + u);
          })
        : typeof a == "string" && r.push(e + a);
    }),
    r
  );
}
function Ys() {
  const n = this,
    { classNames: e, params: r, rtl: a, el: u, device: f } = n,
    b = Vs(
      [
        "initialized",
        r.direction,
        { "free-mode": n.params.freeMode && r.freeMode.enabled },
        { autoheight: r.autoHeight },
        { rtl: a },
        { grid: r.grid && r.grid.rows > 1 },
        {
          "grid-column": r.grid && r.grid.rows > 1 && r.grid.fill === "column",
        },
        { android: f.android },
        { ios: f.ios },
        { "css-mode": r.cssMode },
        { centered: r.cssMode && r.centeredSlides },
        { "watch-progress": r.watchSlidesProgress },
      ],
      r.containerModifierClass
    );
  e.push(...b), u.classList.add(...e), n.emitContainerClasses();
}
function Us() {
  const n = this,
    { el: e, classNames: r } = n;
  !e ||
    typeof e == "string" ||
    (e.classList.remove(...r), n.emitContainerClasses());
}
var Ks = { addClasses: Ys, removeClasses: Us };
function Qs() {
  const n = this,
    { isLocked: e, params: r } = n,
    { slidesOffsetBefore: a } = r;
  if (a) {
    const u = n.slides.length - 1,
      f = n.slidesGrid[u] + n.slidesSizesGrid[u] + a * 2;
    n.isLocked = n.size > f;
  } else n.isLocked = n.snapGrid.length === 1;
  r.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
    r.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
    e && e !== n.isLocked && (n.isEnd = !1),
    e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
}
var Zs = { checkOverflow: Qs },
  Nr = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Js(n, e) {
  return function (a) {
    a === void 0 && (a = {});
    const u = Object.keys(a)[0],
      f = a[u];
    if (typeof f != "object" || f === null) {
      Ge(e, a);
      return;
    }
    if (
      (n[u] === !0 && (n[u] = { enabled: !0 }),
      u === "navigation" &&
        n[u] &&
        n[u].enabled &&
        !n[u].prevEl &&
        !n[u].nextEl &&
        (n[u].auto = !0),
      ["pagination", "scrollbar"].indexOf(u) >= 0 &&
        n[u] &&
        n[u].enabled &&
        !n[u].el &&
        (n[u].auto = !0),
      !(u in n && "enabled" in f))
    ) {
      Ge(e, a);
      return;
    }
    typeof n[u] == "object" && !("enabled" in n[u]) && (n[u].enabled = !0),
      n[u] || (n[u] = { enabled: !1 }),
      Ge(e, a);
  };
}
const _i = {
    eventsEmitter: Kn,
    update: os,
    translate: ps,
    transition: vs,
    slide: Cs,
    loop: As,
    grabCursor: Os,
    events: Gs,
    breakpoints: Xs,
    checkOverflow: Zs,
    classes: Ks,
  },
  Wi = {};
class Fe {
  constructor() {
    let e, r;
    for (var a = arguments.length, u = new Array(a), f = 0; f < a; f++)
      u[f] = arguments[f];
    u.length === 1 &&
    u[0].constructor &&
    Object.prototype.toString.call(u[0]).slice(8, -1) === "Object"
      ? (r = u[0])
      : ([e, r] = u),
      r || (r = {}),
      (r = Ge({}, r)),
      e && !r.el && (r.el = e);
    const b = ke();
    if (
      r.el &&
      typeof r.el == "string" &&
      b.querySelectorAll(r.el).length > 1
    ) {
      const g = [];
      return (
        b.querySelectorAll(r.el).forEach((h) => {
          const y = Ge({}, r, { el: h });
          g.push(new Fe(y));
        }),
        g
      );
    }
    const w = this;
    (w.__swiper__ = !0),
      (w.support = Rr()),
      (w.device = qr({ userAgent: r.userAgent })),
      (w.browser = Vn()),
      (w.eventsListeners = {}),
      (w.eventsAnyListeners = []),
      (w.modules = [...w.__modules__]),
      r.modules && Array.isArray(r.modules) && w.modules.push(...r.modules);
    const p = {};
    w.modules.forEach((g) => {
      g({
        params: r,
        swiper: w,
        extendParams: Js(r, p),
        on: w.on.bind(w),
        once: w.once.bind(w),
        off: w.off.bind(w),
        emit: w.emit.bind(w),
      });
    });
    const x = Ge({}, Nr, p);
    return (
      (w.params = Ge({}, x, Wi, r)),
      (w.originalParams = Ge({}, w.params)),
      (w.passedParams = Ge({}, r)),
      w.params &&
        w.params.on &&
        Object.keys(w.params.on).forEach((g) => {
          w.on(g, w.params.on[g]);
        }),
      w.params && w.params.onAny && w.onAny(w.params.onAny),
      Object.assign(w, {
        enabled: w.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return w.params.direction === "horizontal";
        },
        isVertical() {
          return w.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: w.params.allowSlideNext,
        allowSlidePrev: w.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: w.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: w.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      w.emit("_swiper"),
      w.params.init && w.init(),
      w
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: r, params: a } = this,
      u = Oe(r, `.${a.slideClass}, swiper-slide`),
      f = ei(u[0]);
    return ei(e) - f;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (r) => r.getAttribute("data-swiper-slide-index") * 1 === e
      )[0]
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: r, params: a } = e;
    e.slides = Oe(r, `.${a.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, r) {
    const a = this;
    e = Math.min(Math.max(e, 0), 1);
    const u = a.minTranslate(),
      b = (a.maxTranslate() - u) * e + u;
    a.translateTo(b, typeof r > "u" ? 0 : r),
      a.updateActiveIndex(),
      a.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const r = e.el.className
      .split(" ")
      .filter(
        (a) =>
          a.indexOf("swiper") === 0 ||
          a.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", r.join(" "));
  }
  getSlideClasses(e) {
    const r = this;
    return r.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (a) =>
              a.indexOf("swiper-slide") === 0 ||
              a.indexOf(r.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const r = [];
    e.slides.forEach((a) => {
      const u = e.getSlideClasses(a);
      r.push({ slideEl: a, classNames: u }), e.emit("_slideClass", a, u);
    }),
      e.emit("_slideClasses", r);
  }
  slidesPerViewDynamic(e, r) {
    e === void 0 && (e = "current"), r === void 0 && (r = !1);
    const a = this,
      {
        params: u,
        slides: f,
        slidesGrid: b,
        slidesSizesGrid: w,
        size: p,
        activeIndex: x,
      } = a;
    let g = 1;
    if (typeof u.slidesPerView == "number") return u.slidesPerView;
    if (u.centeredSlides) {
      let h = f[x] ? Math.ceil(f[x].swiperSlideSize) : 0,
        y;
      for (let E = x + 1; E < f.length; E += 1)
        f[E] &&
          !y &&
          ((h += Math.ceil(f[E].swiperSlideSize)), (g += 1), h > p && (y = !0));
      for (let E = x - 1; E >= 0; E -= 1)
        f[E] &&
          !y &&
          ((h += f[E].swiperSlideSize), (g += 1), h > p && (y = !0));
    } else if (e === "current")
      for (let h = x + 1; h < f.length; h += 1)
        (r ? b[h] + w[h] - b[x] < p : b[h] - b[x] < p) && (g += 1);
    else for (let h = x - 1; h >= 0; h -= 1) b[x] - b[h] < p && (g += 1);
    return g;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: r, params: a } = e;
    a.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((b) => {
        b.complete && pi(e, b);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function u() {
      const b = e.rtlTranslate ? e.translate * -1 : e.translate,
        w = Math.min(Math.max(b, e.maxTranslate()), e.minTranslate());
      e.setTranslate(w), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let f;
    if (a.freeMode && a.freeMode.enabled && !a.cssMode)
      u(), a.autoHeight && e.updateAutoHeight();
    else {
      if (
        (a.slidesPerView === "auto" || a.slidesPerView > 1) &&
        e.isEnd &&
        !a.centeredSlides
      ) {
        const b = e.virtual && a.virtual.enabled ? e.virtual.slides : e.slides;
        f = e.slideTo(b.length - 1, 0, !1, !0);
      } else f = e.slideTo(e.activeIndex, 0, !1, !0);
      f || u();
    }
    a.watchOverflow && r !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, r) {
    r === void 0 && (r = !0);
    const a = this,
      u = a.params.direction;
    return (
      e || (e = u === "horizontal" ? "vertical" : "horizontal"),
      e === u ||
        (e !== "horizontal" && e !== "vertical") ||
        (a.el.classList.remove(`${a.params.containerModifierClass}${u}`),
        a.el.classList.add(`${a.params.containerModifierClass}${e}`),
        a.emitContainerClasses(),
        (a.params.direction = e),
        a.slides.forEach((f) => {
          e === "vertical" ? (f.style.width = "") : (f.style.height = "");
        }),
        a.emit("changeDirection"),
        r && a.update()),
      a
    );
  }
  changeLanguageDirection(e) {
    const r = this;
    (r.rtl && e === "rtl") ||
      (!r.rtl && e === "ltr") ||
      ((r.rtl = e === "rtl"),
      (r.rtlTranslate = r.params.direction === "horizontal" && r.rtl),
      r.rtl
        ? (r.el.classList.add(`${r.params.containerModifierClass}rtl`),
          (r.el.dir = "rtl"))
        : (r.el.classList.remove(`${r.params.containerModifierClass}rtl`),
          (r.el.dir = "ltr")),
      r.update());
  }
  mount(e) {
    const r = this;
    if (r.mounted) return !0;
    let a = e || r.params.el;
    if ((typeof a == "string" && (a = document.querySelector(a)), !a))
      return !1;
    (a.swiper = r),
      a.parentNode &&
        a.parentNode.host &&
        a.parentNode.host.nodeName ===
          r.params.swiperElementNodeName.toUpperCase() &&
        (r.isElement = !0);
    const u = () =>
      `.${(r.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let b =
      a && a.shadowRoot && a.shadowRoot.querySelector
        ? a.shadowRoot.querySelector(u())
        : Oe(a, u())[0];
    return (
      !b &&
        r.params.createElements &&
        ((b = _e("div", r.params.wrapperClass)),
        a.append(b),
        Oe(a, `.${r.params.slideClass}`).forEach((w) => {
          b.append(w);
        })),
      Object.assign(r, {
        el: a,
        wrapperEl: b,
        slidesEl:
          r.isElement && !a.parentNode.host.slideSlots ? a.parentNode.host : b,
        hostEl: r.isElement ? a.parentNode.host : a,
        mounted: !0,
        rtl: a.dir.toLowerCase() === "rtl" || vt(a, "direction") === "rtl",
        rtlTranslate:
          r.params.direction === "horizontal" &&
          (a.dir.toLowerCase() === "rtl" || vt(a, "direction") === "rtl"),
        wrongRTL: vt(b, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const r = this;
    if (r.initialized || r.mount(e) === !1) return r;
    r.emit("beforeInit"),
      r.params.breakpoints && r.setBreakpoint(),
      r.addClasses(),
      r.updateSize(),
      r.updateSlides(),
      r.params.watchOverflow && r.checkOverflow(),
      r.params.grabCursor && r.enabled && r.setGrabCursor(),
      r.params.loop && r.virtual && r.params.virtual.enabled
        ? r.slideTo(
            r.params.initialSlide + r.virtual.slidesBefore,
            0,
            r.params.runCallbacksOnInit,
            !1,
            !0
          )
        : r.slideTo(
            r.params.initialSlide,
            0,
            r.params.runCallbacksOnInit,
            !1,
            !0
          ),
      r.params.loop && r.loopCreate(),
      r.attachEvents();
    const u = [...r.el.querySelectorAll('[loading="lazy"]')];
    return (
      r.isElement && u.push(...r.hostEl.querySelectorAll('[loading="lazy"]')),
      u.forEach((f) => {
        f.complete
          ? pi(r, f)
          : f.addEventListener("load", (b) => {
              pi(r, b.target);
            });
      }),
      Yi(r),
      (r.initialized = !0),
      Yi(r),
      r.emit("init"),
      r.emit("afterInit"),
      r
    );
  }
  destroy(e, r) {
    e === void 0 && (e = !0), r === void 0 && (r = !0);
    const a = this,
      { params: u, el: f, wrapperEl: b, slides: w } = a;
    return (
      typeof a.params > "u" ||
        a.destroyed ||
        (a.emit("beforeDestroy"),
        (a.initialized = !1),
        a.detachEvents(),
        u.loop && a.loopDestroy(),
        r &&
          (a.removeClasses(),
          f && typeof f != "string" && f.removeAttribute("style"),
          b && b.removeAttribute("style"),
          w &&
            w.length &&
            w.forEach((p) => {
              p.classList.remove(
                u.slideVisibleClass,
                u.slideFullyVisibleClass,
                u.slideActiveClass,
                u.slideNextClass,
                u.slidePrevClass
              ),
                p.removeAttribute("style"),
                p.removeAttribute("data-swiper-slide-index");
            })),
        a.emit("destroy"),
        Object.keys(a.eventsListeners).forEach((p) => {
          a.off(p);
        }),
        e !== !1 &&
          (a.el && typeof a.el != "string" && (a.el.swiper = null), jn(a)),
        (a.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    Ge(Wi, e);
  }
  static get extendedDefaults() {
    return Wi;
  }
  static get defaults() {
    return Nr;
  }
  static installModule(e) {
    Fe.prototype.__modules__ || (Fe.prototype.__modules__ = []);
    const r = Fe.prototype.__modules__;
    typeof e == "function" && r.indexOf(e) < 0 && r.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((r) => Fe.installModule(r)), Fe)
      : (Fe.installModule(e), Fe);
  }
}
Object.keys(_i).forEach((n) => {
  Object.keys(_i[n]).forEach((e) => {
    Fe.prototype[e] = _i[n][e];
  });
});
Fe.use([Yn, Un]);
function ea(n) {
  let { swiper: e, extendParams: r, on: a, emit: u } = n;
  r({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0,
    },
  });
  let f;
  const b = ke();
  e.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: [],
  };
  const w = b.createElement("div");
  function p(T, S) {
    const P = e.params.virtual;
    if (P.cache && e.virtual.cache[S]) return e.virtual.cache[S];
    let m;
    return (
      P.renderSlide
        ? ((m = P.renderSlide.call(e, T, S)),
          typeof m == "string" && ((w.innerHTML = m), (m = w.children[0])))
        : e.isElement
          ? (m = _e("swiper-slide"))
          : (m = _e("div", e.params.slideClass)),
      m.setAttribute("data-swiper-slide-index", S),
      P.renderSlide || (m.innerHTML = T),
      P.cache && (e.virtual.cache[S] = m),
      m
    );
  }
  function x(T, S) {
    const {
      slidesPerView: P,
      slidesPerGroup: m,
      centeredSlides: A,
      loop: M,
      initialSlide: O,
    } = e.params;
    if (S && !M && O > 0) return;
    const { addSlidesBefore: G, addSlidesAfter: Q } = e.params.virtual,
      { from: o, to: X, slides: H, slidesGrid: _, offset: U } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const R = e.activeIndex || 0;
    let z;
    e.rtlTranslate ? (z = "right") : (z = e.isHorizontal() ? "left" : "top");
    let q, K;
    A
      ? ((q = Math.floor(P / 2) + m + Q), (K = Math.floor(P / 2) + m + G))
      : ((q = P + (m - 1) + Q), (K = (M ? P : m) + G));
    let ae = R - K,
      B = R + q;
    M || ((ae = Math.max(ae, 0)), (B = Math.min(B, H.length - 1)));
    let W = (e.slidesGrid[ae] || 0) - (e.slidesGrid[0] || 0);
    M && R >= K
      ? ((ae -= K), A || (W += e.slidesGrid[0]))
      : M && R < K && ((ae = -K), A && (W += e.slidesGrid[0])),
      Object.assign(e.virtual, {
        from: ae,
        to: B,
        offset: W,
        slidesGrid: e.slidesGrid,
        slidesBefore: K,
        slidesAfter: q,
      });
    function ie() {
      e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        u("virtualUpdate");
    }
    if (o === ae && X === B && !T) {
      e.slidesGrid !== _ &&
        W !== U &&
        e.slides.forEach((le) => {
          le.style[z] = `${W - Math.abs(e.cssOverflowAdjustment())}px`;
        }),
        e.updateProgress(),
        u("virtualUpdate");
      return;
    }
    if (e.params.virtual.renderExternal) {
      e.params.virtual.renderExternal.call(e, {
        offset: W,
        from: ae,
        to: B,
        slides: (function () {
          const Se = [];
          for (let Ie = ae; Ie <= B; Ie += 1) Se.push(H[Ie]);
          return Se;
        })(),
      }),
        e.params.virtual.renderExternalUpdate ? ie() : u("virtualUpdate");
      return;
    }
    const pe = [],
      Z = [],
      te = (le) => {
        let Se = le;
        return (
          le < 0
            ? (Se = H.length + le)
            : Se >= H.length && (Se = Se - H.length),
          Se
        );
      };
    if (T)
      e.slides
        .filter((le) => le.matches(`.${e.params.slideClass}, swiper-slide`))
        .forEach((le) => {
          le.remove();
        });
    else
      for (let le = o; le <= X; le += 1)
        if (le < ae || le > B) {
          const Se = te(le);
          e.slides
            .filter((Ie) =>
              Ie.matches(
                `.${e.params.slideClass}[data-swiper-slide-index="${Se}"], swiper-slide[data-swiper-slide-index="${Se}"]`
              )
            )
            .forEach((Ie) => {
              Ie.remove();
            });
        }
    const se = M ? -H.length : 0,
      Ee = M ? H.length * 2 : H.length;
    for (let le = se; le < Ee; le += 1)
      if (le >= ae && le <= B) {
        const Se = te(le);
        typeof X > "u" || T
          ? Z.push(Se)
          : (le > X && Z.push(Se), le < o && pe.push(Se));
      }
    if (
      (Z.forEach((le) => {
        e.slidesEl.append(p(H[le], le));
      }),
      M)
    )
      for (let le = pe.length - 1; le >= 0; le -= 1) {
        const Se = pe[le];
        e.slidesEl.prepend(p(H[Se], Se));
      }
    else
      pe.sort((le, Se) => Se - le),
        pe.forEach((le) => {
          e.slidesEl.prepend(p(H[le], le));
        });
    Oe(e.slidesEl, ".swiper-slide, swiper-slide").forEach((le) => {
      le.style[z] = `${W - Math.abs(e.cssOverflowAdjustment())}px`;
    }),
      ie();
  }
  function g(T) {
    if (typeof T == "object" && "length" in T)
      for (let S = 0; S < T.length; S += 1) T[S] && e.virtual.slides.push(T[S]);
    else e.virtual.slides.push(T);
    x(!0);
  }
  function h(T) {
    const S = e.activeIndex;
    let P = S + 1,
      m = 1;
    if (Array.isArray(T)) {
      for (let A = 0; A < T.length; A += 1)
        T[A] && e.virtual.slides.unshift(T[A]);
      (P = S + T.length), (m = T.length);
    } else e.virtual.slides.unshift(T);
    if (e.params.virtual.cache) {
      const A = e.virtual.cache,
        M = {};
      Object.keys(A).forEach((O) => {
        const G = A[O],
          Q = G.getAttribute("data-swiper-slide-index");
        Q && G.setAttribute("data-swiper-slide-index", parseInt(Q, 10) + m),
          (M[parseInt(O, 10) + m] = G);
      }),
        (e.virtual.cache = M);
    }
    x(!0), e.slideTo(P, 0);
  }
  function y(T) {
    if (typeof T > "u" || T === null) return;
    let S = e.activeIndex;
    if (Array.isArray(T))
      for (let P = T.length - 1; P >= 0; P -= 1)
        e.params.virtual.cache &&
          (delete e.virtual.cache[T[P]],
          Object.keys(e.virtual.cache).forEach((m) => {
            m > T &&
              ((e.virtual.cache[m - 1] = e.virtual.cache[m]),
              e.virtual.cache[m - 1].setAttribute(
                "data-swiper-slide-index",
                m - 1
              ),
              delete e.virtual.cache[m]);
          })),
          e.virtual.slides.splice(T[P], 1),
          T[P] < S && (S -= 1),
          (S = Math.max(S, 0));
    else
      e.params.virtual.cache &&
        (delete e.virtual.cache[T],
        Object.keys(e.virtual.cache).forEach((P) => {
          P > T &&
            ((e.virtual.cache[P - 1] = e.virtual.cache[P]),
            e.virtual.cache[P - 1].setAttribute(
              "data-swiper-slide-index",
              P - 1
            ),
            delete e.virtual.cache[P]);
        })),
        e.virtual.slides.splice(T, 1),
        T < S && (S -= 1),
        (S = Math.max(S, 0));
    x(!0), e.slideTo(S, 0);
  }
  function E() {
    (e.virtual.slides = []),
      e.params.virtual.cache && (e.virtual.cache = {}),
      x(!0),
      e.slideTo(0, 0);
  }
  a("beforeInit", () => {
    if (!e.params.virtual.enabled) return;
    let T;
    if (typeof e.passedParams.virtual.slides > "u") {
      const S = [...e.slidesEl.children].filter((P) =>
        P.matches(`.${e.params.slideClass}, swiper-slide`)
      );
      S &&
        S.length &&
        ((e.virtual.slides = [...S]),
        (T = !0),
        S.forEach((P, m) => {
          P.setAttribute("data-swiper-slide-index", m),
            (e.virtual.cache[m] = P),
            P.remove();
        }));
    }
    T || (e.virtual.slides = e.params.virtual.slides),
      e.classNames.push(`${e.params.containerModifierClass}virtual`),
      (e.params.watchSlidesProgress = !0),
      (e.originalParams.watchSlidesProgress = !0),
      x(!1, !0);
  }),
    a("setTranslate", () => {
      e.params.virtual.enabled &&
        (e.params.cssMode && !e._immediateVirtual
          ? (clearTimeout(f),
            (f = setTimeout(() => {
              x();
            }, 100)))
          : x());
    }),
    a("init update resize", () => {
      e.params.virtual.enabled &&
        e.params.cssMode &&
        Zt(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
    }),
    Object.assign(e.virtual, {
      appendSlide: g,
      prependSlide: h,
      removeSlide: y,
      removeAllSlides: E,
      update: x,
    });
}
function ta(n) {
  let { swiper: e, extendParams: r, on: a, emit: u } = n;
  const f = ke(),
    b = Pe();
  (e.keyboard = { enabled: !1 }),
    r({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
  function w(g) {
    if (!e.enabled) return;
    const { rtlTranslate: h } = e;
    let y = g;
    y.originalEvent && (y = y.originalEvent);
    const E = y.keyCode || y.charCode,
      T = e.params.keyboard.pageUpDown,
      S = T && E === 33,
      P = T && E === 34,
      m = E === 37,
      A = E === 39,
      M = E === 38,
      O = E === 40;
    if (
      (!e.allowSlideNext &&
        ((e.isHorizontal() && A) || (e.isVertical() && O) || P)) ||
      (!e.allowSlidePrev &&
        ((e.isHorizontal() && m) || (e.isVertical() && M) || S))
    )
      return !1;
    if (
      !(y.shiftKey || y.altKey || y.ctrlKey || y.metaKey) &&
      !(
        f.activeElement &&
        f.activeElement.nodeName &&
        (f.activeElement.nodeName.toLowerCase() === "input" ||
          f.activeElement.nodeName.toLowerCase() === "textarea")
      )
    ) {
      if (e.params.keyboard.onlyInViewport && (S || P || m || A || M || O)) {
        let G = !1;
        if (
          Ct(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
          Ct(e.el, `.${e.params.slideActiveClass}`).length === 0
        )
          return;
        const Q = e.el,
          o = Q.clientWidth,
          X = Q.clientHeight,
          H = b.innerWidth,
          _ = b.innerHeight,
          U = mi(Q);
        h && (U.left -= Q.scrollLeft);
        const R = [
          [U.left, U.top],
          [U.left + o, U.top],
          [U.left, U.top + X],
          [U.left + o, U.top + X],
        ];
        for (let z = 0; z < R.length; z += 1) {
          const q = R[z];
          if (q[0] >= 0 && q[0] <= H && q[1] >= 0 && q[1] <= _) {
            if (q[0] === 0 && q[1] === 0) continue;
            G = !0;
          }
        }
        if (!G) return;
      }
      e.isHorizontal()
        ? ((S || P || m || A) &&
            (y.preventDefault ? y.preventDefault() : (y.returnValue = !1)),
          (((P || A) && !h) || ((S || m) && h)) && e.slideNext(),
          (((S || m) && !h) || ((P || A) && h)) && e.slidePrev())
        : ((S || P || M || O) &&
            (y.preventDefault ? y.preventDefault() : (y.returnValue = !1)),
          (P || O) && e.slideNext(),
          (S || M) && e.slidePrev()),
        u("keyPress", E);
    }
  }
  function p() {
    e.keyboard.enabled ||
      (f.addEventListener("keydown", w), (e.keyboard.enabled = !0));
  }
  function x() {
    e.keyboard.enabled &&
      (f.removeEventListener("keydown", w), (e.keyboard.enabled = !1));
  }
  a("init", () => {
    e.params.keyboard.enabled && p();
  }),
    a("destroy", () => {
      e.keyboard.enabled && x();
    }),
    Object.assign(e.keyboard, { enable: p, disable: x });
}
function ia(n) {
  let { swiper: e, extendParams: r, on: a, emit: u } = n;
  const f = Pe();
  r({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel",
    },
  }),
    (e.mousewheel = { enabled: !1 });
  let b,
    w = Ye(),
    p;
  const x = [];
  function g(M) {
    let o = 0,
      X = 0,
      H = 0,
      _ = 0;
    return (
      "detail" in M && (X = M.detail),
      "wheelDelta" in M && (X = -M.wheelDelta / 120),
      "wheelDeltaY" in M && (X = -M.wheelDeltaY / 120),
      "wheelDeltaX" in M && (o = -M.wheelDeltaX / 120),
      "axis" in M && M.axis === M.HORIZONTAL_AXIS && ((o = X), (X = 0)),
      (H = o * 10),
      (_ = X * 10),
      "deltaY" in M && (_ = M.deltaY),
      "deltaX" in M && (H = M.deltaX),
      M.shiftKey && !H && ((H = _), (_ = 0)),
      (H || _) &&
        M.deltaMode &&
        (M.deltaMode === 1 ? ((H *= 40), (_ *= 40)) : ((H *= 800), (_ *= 800))),
      H && !o && (o = H < 1 ? -1 : 1),
      _ && !X && (X = _ < 1 ? -1 : 1),
      { spinX: o, spinY: X, pixelX: H, pixelY: _ }
    );
  }
  function h() {
    e.enabled && (e.mouseEntered = !0);
  }
  function y() {
    e.enabled && (e.mouseEntered = !1);
  }
  function E(M) {
    return (e.params.mousewheel.thresholdDelta &&
      M.delta < e.params.mousewheel.thresholdDelta) ||
      (e.params.mousewheel.thresholdTime &&
        Ye() - w < e.params.mousewheel.thresholdTime)
      ? !1
      : M.delta >= 6 && Ye() - w < 60
        ? !0
        : (M.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), u("scroll", M.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), u("scroll", M.raw)),
          (w = new f.Date().getTime()),
          !1);
  }
  function T(M) {
    const O = e.params.mousewheel;
    if (M.direction < 0) {
      if (e.isEnd && !e.params.loop && O.releaseOnEdges) return !0;
    } else if (e.isBeginning && !e.params.loop && O.releaseOnEdges) return !0;
    return !1;
  }
  function S(M) {
    let O = M,
      G = !0;
    if (
      !e.enabled ||
      M.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
    )
      return;
    const Q = e.params.mousewheel;
    e.params.cssMode && O.preventDefault();
    let o = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (o = document.querySelector(e.params.mousewheel.eventsTarget));
    const X = o && o.contains(O.target);
    if (!e.mouseEntered && !X && !Q.releaseOnEdges) return !0;
    O.originalEvent && (O = O.originalEvent);
    let H = 0;
    const _ = e.rtlTranslate ? -1 : 1,
      U = g(O);
    if (Q.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(U.pixelX) > Math.abs(U.pixelY)) H = -U.pixelX * _;
        else return !0;
      else if (Math.abs(U.pixelY) > Math.abs(U.pixelX)) H = -U.pixelY;
      else return !0;
    else
      H = Math.abs(U.pixelX) > Math.abs(U.pixelY) ? -U.pixelX * _ : -U.pixelY;
    if (H === 0) return !0;
    Q.invert && (H = -H);
    let R = e.getTranslate() + H * Q.sensitivity;
    if (
      (R >= e.minTranslate() && (R = e.minTranslate()),
      R <= e.maxTranslate() && (R = e.maxTranslate()),
      (G = e.params.loop
        ? !0
        : !(R === e.minTranslate() || R === e.maxTranslate())),
      G && e.params.nested && O.stopPropagation(),
      !e.params.freeMode || !e.params.freeMode.enabled)
    ) {
      const z = {
        time: Ye(),
        delta: Math.abs(H),
        direction: Math.sign(H),
        raw: M,
      };
      x.length >= 2 && x.shift();
      const q = x.length ? x[x.length - 1] : void 0;
      if (
        (x.push(z),
        q
          ? (z.direction !== q.direction ||
              z.delta > q.delta ||
              z.time > q.time + 150) &&
            E(z)
          : E(z),
        T(z))
      )
        return !0;
    } else {
      const z = { time: Ye(), delta: Math.abs(H), direction: Math.sign(H) },
        q =
          p &&
          z.time < p.time + 500 &&
          z.delta <= p.delta &&
          z.direction === p.direction;
      if (!q) {
        p = void 0;
        let K = e.getTranslate() + H * Q.sensitivity;
        const ae = e.isBeginning,
          B = e.isEnd;
        if (
          (K >= e.minTranslate() && (K = e.minTranslate()),
          K <= e.maxTranslate() && (K = e.maxTranslate()),
          e.setTransition(0),
          e.setTranslate(K),
          e.updateProgress(),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          ((!ae && e.isBeginning) || (!B && e.isEnd)) &&
            e.updateSlidesClasses(),
          e.params.loop &&
            e.loopFix({
              direction: z.direction < 0 ? "next" : "prev",
              byMousewheel: !0,
            }),
          e.params.freeMode.sticky)
        ) {
          clearTimeout(b), (b = void 0), x.length >= 15 && x.shift();
          const W = x.length ? x[x.length - 1] : void 0,
            ie = x[0];
          if (
            (x.push(z), W && (z.delta > W.delta || z.direction !== W.direction))
          )
            x.splice(0);
          else if (
            x.length >= 15 &&
            z.time - ie.time < 500 &&
            ie.delta - z.delta >= 1 &&
            z.delta <= 6
          ) {
            const pe = H > 0 ? 0.8 : 0.2;
            (p = z),
              x.splice(0),
              (b = Mt(() => {
                e.slideToClosest(e.params.speed, !0, void 0, pe);
              }, 0));
          }
          b ||
            (b = Mt(() => {
              (p = z),
                x.splice(0),
                e.slideToClosest(e.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (q || u("scroll", O),
          e.params.autoplay &&
            e.params.autoplayDisableOnInteraction &&
            e.autoplay.stop(),
          Q.releaseOnEdges &&
            (K === e.minTranslate() || K === e.maxTranslate()))
        )
          return !0;
      }
    }
    return O.preventDefault ? O.preventDefault() : (O.returnValue = !1), !1;
  }
  function P(M) {
    let O = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (O = document.querySelector(e.params.mousewheel.eventsTarget)),
      O[M]("mouseenter", h),
      O[M]("mouseleave", y),
      O[M]("wheel", S);
  }
  function m() {
    return e.params.cssMode
      ? (e.wrapperEl.removeEventListener("wheel", S), !0)
      : e.mousewheel.enabled
        ? !1
        : (P("addEventListener"), (e.mousewheel.enabled = !0), !0);
  }
  function A() {
    return e.params.cssMode
      ? (e.wrapperEl.addEventListener(event, S), !0)
      : e.mousewheel.enabled
        ? (P("removeEventListener"), (e.mousewheel.enabled = !1), !0)
        : !1;
  }
  a("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && A(),
      e.params.mousewheel.enabled && m();
  }),
    a("destroy", () => {
      e.params.cssMode && m(), e.mousewheel.enabled && A();
    }),
    Object.assign(e.mousewheel, { enable: m, disable: A });
}
function Ki(n, e, r, a) {
  return (
    n.params.createElements &&
      Object.keys(a).forEach((u) => {
        if (!r[u] && r.auto === !0) {
          let f = Oe(n.el, `.${a[u]}`)[0];
          f || ((f = _e("div", a[u])), (f.className = a[u]), n.el.append(f)),
            (r[u] = f),
            (e[u] = f);
        }
      }),
    r
  );
}
function ra(n) {
  let { swiper: e, extendParams: r, on: a, emit: u } = n;
  r({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  function f(T) {
    let S;
    return T &&
      typeof T == "string" &&
      e.isElement &&
      ((S = e.el.querySelector(T)), S)
      ? S
      : (T &&
          (typeof T == "string" && (S = [...document.querySelectorAll(T)]),
          e.params.uniqueNavElements &&
          typeof T == "string" &&
          S &&
          S.length > 1 &&
          e.el.querySelectorAll(T).length === 1
            ? (S = e.el.querySelector(T))
            : S && S.length === 1 && (S = S[0])),
        T && !S ? T : S);
  }
  function b(T, S) {
    const P = e.params.navigation;
    (T = ye(T)),
      T.forEach((m) => {
        m &&
          (m.classList[S ? "add" : "remove"](...P.disabledClass.split(" ")),
          m.tagName === "BUTTON" && (m.disabled = S),
          e.params.watchOverflow &&
            e.enabled &&
            m.classList[e.isLocked ? "add" : "remove"](P.lockClass));
      });
  }
  function w() {
    const { nextEl: T, prevEl: S } = e.navigation;
    if (e.params.loop) {
      b(S, !1), b(T, !1);
      return;
    }
    b(S, e.isBeginning && !e.params.rewind), b(T, e.isEnd && !e.params.rewind);
  }
  function p(T) {
    T.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), u("navigationPrev"));
  }
  function x(T) {
    T.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), u("navigationNext"));
  }
  function g() {
    const T = e.params.navigation;
    if (
      ((e.params.navigation = Ki(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(T.nextEl || T.prevEl))
    )
      return;
    let S = f(T.nextEl),
      P = f(T.prevEl);
    Object.assign(e.navigation, { nextEl: S, prevEl: P }),
      (S = ye(S)),
      (P = ye(P));
    const m = (A, M) => {
      A && A.addEventListener("click", M === "next" ? x : p),
        !e.enabled && A && A.classList.add(...T.lockClass.split(" "));
    };
    S.forEach((A) => m(A, "next")), P.forEach((A) => m(A, "prev"));
  }
  function h() {
    let { nextEl: T, prevEl: S } = e.navigation;
    (T = ye(T)), (S = ye(S));
    const P = (m, A) => {
      m.removeEventListener("click", A === "next" ? x : p),
        m.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    T.forEach((m) => P(m, "next")), S.forEach((m) => P(m, "prev"));
  }
  a("init", () => {
    e.params.navigation.enabled === !1 ? E() : (g(), w());
  }),
    a("toEdge fromEdge lock unlock", () => {
      w();
    }),
    a("destroy", () => {
      h();
    }),
    a("enable disable", () => {
      let { nextEl: T, prevEl: S } = e.navigation;
      if (((T = ye(T)), (S = ye(S)), e.enabled)) {
        w();
        return;
      }
      [...T, ...S]
        .filter((P) => !!P)
        .forEach((P) => P.classList.add(e.params.navigation.lockClass));
    }),
    a("click", (T, S) => {
      let { nextEl: P, prevEl: m } = e.navigation;
      (P = ye(P)), (m = ye(m));
      const A = S.target;
      let M = m.includes(A) || P.includes(A);
      if (e.isElement && !M) {
        const O = S.path || (S.composedPath && S.composedPath());
        O && (M = O.find((G) => P.includes(G) || m.includes(G)));
      }
      if (e.params.navigation.hideOnClick && !M) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === A || e.pagination.el.contains(A))
        )
          return;
        let O;
        P.length
          ? (O = P[0].classList.contains(e.params.navigation.hiddenClass))
          : m.length &&
            (O = m[0].classList.contains(e.params.navigation.hiddenClass)),
          u(O === !0 ? "navigationShow" : "navigationHide"),
          [...P, ...m]
            .filter((G) => !!G)
            .forEach((G) =>
              G.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const y = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        g(),
        w();
    },
    E = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        h();
    };
  Object.assign(e.navigation, {
    enable: y,
    disable: E,
    update: w,
    init: g,
    destroy: h,
  });
}
function ft(n) {
  return (
    n === void 0 && (n = ""),
    `.${n
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function na(n) {
  let { swiper: e, extendParams: r, on: a, emit: u } = n;
  const f = "swiper-pagination";
  r({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (m) => m,
      formatFractionTotal: (m) => m,
      bulletClass: `${f}-bullet`,
      bulletActiveClass: `${f}-bullet-active`,
      modifierClass: `${f}-`,
      currentClass: `${f}-current`,
      totalClass: `${f}-total`,
      hiddenClass: `${f}-hidden`,
      progressbarFillClass: `${f}-progressbar-fill`,
      progressbarOppositeClass: `${f}-progressbar-opposite`,
      clickableClass: `${f}-clickable`,
      lockClass: `${f}-lock`,
      horizontalClass: `${f}-horizontal`,
      verticalClass: `${f}-vertical`,
      paginationDisabledClass: `${f}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let b,
    w = 0;
  function p() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function x(m, A) {
    const { bulletActiveClass: M } = e.params.pagination;
    m &&
      ((m = m[`${A === "prev" ? "previous" : "next"}ElementSibling`]),
      m &&
        (m.classList.add(`${M}-${A}`),
        (m = m[`${A === "prev" ? "previous" : "next"}ElementSibling`]),
        m && m.classList.add(`${M}-${A}-${A}`)));
  }
  function g(m) {
    const A = m.target.closest(ft(e.params.pagination.bulletClass));
    if (!A) return;
    m.preventDefault();
    const M = ei(A) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === M) return;
      e.slideToLoop(M);
    } else e.slideTo(M);
  }
  function h() {
    const m = e.rtl,
      A = e.params.pagination;
    if (p()) return;
    let M = e.pagination.el;
    M = ye(M);
    let O, G;
    const Q =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      o = e.params.loop
        ? Math.ceil(Q / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((G = e.previousRealIndex || 0),
          (O =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
          ? ((O = e.snapIndex), (G = e.previousSnapIndex))
          : ((G = e.previousIndex || 0), (O = e.activeIndex || 0)),
      A.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const X = e.pagination.bullets;
      let H, _, U;
      if (
        (A.dynamicBullets &&
          ((b = Vi(X[0], e.isHorizontal() ? "width" : "height")),
          M.forEach((R) => {
            R.style[e.isHorizontal() ? "width" : "height"] =
              `${b * (A.dynamicMainBullets + 4)}px`;
          }),
          A.dynamicMainBullets > 1 &&
            G !== void 0 &&
            ((w += O - (G || 0)),
            w > A.dynamicMainBullets - 1
              ? (w = A.dynamicMainBullets - 1)
              : w < 0 && (w = 0)),
          (H = Math.max(O - w, 0)),
          (_ = H + (Math.min(X.length, A.dynamicMainBullets) - 1)),
          (U = (_ + H) / 2)),
        X.forEach((R) => {
          const z = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (q) => `${A.bulletActiveClass}${q}`
            ),
          ]
            .map((q) =>
              typeof q == "string" && q.includes(" ") ? q.split(" ") : q
            )
            .flat();
          R.classList.remove(...z);
        }),
        M.length > 1)
      )
        X.forEach((R) => {
          const z = ei(R);
          z === O
            ? R.classList.add(...A.bulletActiveClass.split(" "))
            : e.isElement && R.setAttribute("part", "bullet"),
            A.dynamicBullets &&
              (z >= H &&
                z <= _ &&
                R.classList.add(...`${A.bulletActiveClass}-main`.split(" ")),
              z === H && x(R, "prev"),
              z === _ && x(R, "next"));
        });
      else {
        const R = X[O];
        if (
          (R && R.classList.add(...A.bulletActiveClass.split(" ")),
          e.isElement &&
            X.forEach((z, q) => {
              z.setAttribute("part", q === O ? "bullet-active" : "bullet");
            }),
          A.dynamicBullets)
        ) {
          const z = X[H],
            q = X[_];
          for (let K = H; K <= _; K += 1)
            X[K] &&
              X[K].classList.add(...`${A.bulletActiveClass}-main`.split(" "));
          x(z, "prev"), x(q, "next");
        }
      }
      if (A.dynamicBullets) {
        const R = Math.min(X.length, A.dynamicMainBullets + 4),
          z = (b * R - b) / 2 - U * b,
          q = m ? "right" : "left";
        X.forEach((K) => {
          K.style[e.isHorizontal() ? q : "top"] = `${z}px`;
        });
      }
    }
    M.forEach((X, H) => {
      if (
        (A.type === "fraction" &&
          (X.querySelectorAll(ft(A.currentClass)).forEach((_) => {
            _.textContent = A.formatFractionCurrent(O + 1);
          }),
          X.querySelectorAll(ft(A.totalClass)).forEach((_) => {
            _.textContent = A.formatFractionTotal(o);
          })),
        A.type === "progressbar")
      ) {
        let _;
        A.progressbarOpposite
          ? (_ = e.isHorizontal() ? "vertical" : "horizontal")
          : (_ = e.isHorizontal() ? "horizontal" : "vertical");
        const U = (O + 1) / o;
        let R = 1,
          z = 1;
        _ === "horizontal" ? (R = U) : (z = U),
          X.querySelectorAll(ft(A.progressbarFillClass)).forEach((q) => {
            (q.style.transform = `translate3d(0,0,0) scaleX(${R}) scaleY(${z})`),
              (q.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      A.type === "custom" && A.renderCustom
        ? ((X.innerHTML = A.renderCustom(e, O + 1, o)),
          H === 0 && u("paginationRender", X))
        : (H === 0 && u("paginationRender", X), u("paginationUpdate", X)),
        e.params.watchOverflow &&
          e.enabled &&
          X.classList[e.isLocked ? "add" : "remove"](A.lockClass);
    });
  }
  function y() {
    const m = e.params.pagination;
    if (p()) return;
    const A =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
    let M = e.pagination.el;
    M = ye(M);
    let O = "";
    if (m.type === "bullets") {
      let G = e.params.loop
        ? Math.ceil(A / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && G > A && (G = A);
      for (let Q = 0; Q < G; Q += 1)
        m.renderBullet
          ? (O += m.renderBullet.call(e, Q, m.bulletClass))
          : (O += `<${m.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${m.bulletClass}"></${m.bulletElement}>`);
    }
    m.type === "fraction" &&
      (m.renderFraction
        ? (O = m.renderFraction.call(e, m.currentClass, m.totalClass))
        : (O = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`)),
      m.type === "progressbar" &&
        (m.renderProgressbar
          ? (O = m.renderProgressbar.call(e, m.progressbarFillClass))
          : (O = `<span class="${m.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      M.forEach((G) => {
        m.type !== "custom" && (G.innerHTML = O || ""),
          m.type === "bullets" &&
            e.pagination.bullets.push(...G.querySelectorAll(ft(m.bulletClass)));
      }),
      m.type !== "custom" && u("paginationRender", M[0]);
  }
  function E() {
    e.params.pagination = Ki(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const m = e.params.pagination;
    if (!m.el) return;
    let A;
    typeof m.el == "string" && e.isElement && (A = e.el.querySelector(m.el)),
      !A &&
        typeof m.el == "string" &&
        (A = [...document.querySelectorAll(m.el)]),
      A || (A = m.el),
      !(!A || A.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof m.el == "string" &&
          Array.isArray(A) &&
          A.length > 1 &&
          ((A = [...e.el.querySelectorAll(m.el)]),
          A.length > 1 &&
            (A = A.filter((M) => Ct(M, ".swiper")[0] === e.el)[0])),
        Array.isArray(A) && A.length === 1 && (A = A[0]),
        Object.assign(e.pagination, { el: A }),
        (A = ye(A)),
        A.forEach((M) => {
          m.type === "bullets" &&
            m.clickable &&
            M.classList.add(...(m.clickableClass || "").split(" ")),
            M.classList.add(m.modifierClass + m.type),
            M.classList.add(
              e.isHorizontal() ? m.horizontalClass : m.verticalClass
            ),
            m.type === "bullets" &&
              m.dynamicBullets &&
              (M.classList.add(`${m.modifierClass}${m.type}-dynamic`),
              (w = 0),
              m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)),
            m.type === "progressbar" &&
              m.progressbarOpposite &&
              M.classList.add(m.progressbarOppositeClass),
            m.clickable && M.addEventListener("click", g),
            e.enabled || M.classList.add(m.lockClass);
        }));
  }
  function T() {
    const m = e.params.pagination;
    if (p()) return;
    let A = e.pagination.el;
    A &&
      ((A = ye(A)),
      A.forEach((M) => {
        M.classList.remove(m.hiddenClass),
          M.classList.remove(m.modifierClass + m.type),
          M.classList.remove(
            e.isHorizontal() ? m.horizontalClass : m.verticalClass
          ),
          m.clickable &&
            (M.classList.remove(...(m.clickableClass || "").split(" ")),
            M.removeEventListener("click", g));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((M) =>
          M.classList.remove(...m.bulletActiveClass.split(" "))
        );
  }
  a("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const m = e.params.pagination;
    let { el: A } = e.pagination;
    (A = ye(A)),
      A.forEach((M) => {
        M.classList.remove(m.horizontalClass, m.verticalClass),
          M.classList.add(
            e.isHorizontal() ? m.horizontalClass : m.verticalClass
          );
      });
  }),
    a("init", () => {
      e.params.pagination.enabled === !1 ? P() : (E(), y(), h());
    }),
    a("activeIndexChange", () => {
      typeof e.snapIndex > "u" && h();
    }),
    a("snapIndexChange", () => {
      h();
    }),
    a("snapGridLengthChange", () => {
      y(), h();
    }),
    a("destroy", () => {
      T();
    }),
    a("enable disable", () => {
      let { el: m } = e.pagination;
      m &&
        ((m = ye(m)),
        m.forEach((A) =>
          A.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass
          )
        ));
    }),
    a("lock unlock", () => {
      h();
    }),
    a("click", (m, A) => {
      const M = A.target,
        O = ye(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        O &&
        O.length > 0 &&
        !M.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && M === e.navigation.nextEl) ||
            (e.navigation.prevEl && M === e.navigation.prevEl))
        )
          return;
        const G = O[0].classList.contains(e.params.pagination.hiddenClass);
        u(G === !0 ? "paginationShow" : "paginationHide"),
          O.forEach((Q) => Q.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const S = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: m } = e.pagination;
      m &&
        ((m = ye(m)),
        m.forEach((A) =>
          A.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        E(),
        y(),
        h();
    },
    P = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: m } = e.pagination;
      m &&
        ((m = ye(m)),
        m.forEach((A) =>
          A.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        T();
    };
  Object.assign(e.pagination, {
    enable: S,
    disable: P,
    render: y,
    update: h,
    init: E,
    destroy: T,
  });
}
function sa(n) {
  let { swiper: e, extendParams: r, on: a, emit: u } = n;
  const f = ke();
  let b = !1,
    w = null,
    p = null,
    x,
    g,
    h,
    y;
  r({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (e.scrollbar = { el: null, dragEl: null });
  function E() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: R, rtlTranslate: z } = e,
      { dragEl: q, el: K } = R,
      ae = e.params.scrollbar,
      B = e.params.loop ? e.progressLoop : e.progress;
    let W = g,
      ie = (h - g) * B;
    z
      ? ((ie = -ie),
        ie > 0 ? ((W = g - ie), (ie = 0)) : -ie + g > h && (W = h + ie))
      : ie < 0
        ? ((W = g + ie), (ie = 0))
        : ie + g > h && (W = h - ie),
      e.isHorizontal()
        ? ((q.style.transform = `translate3d(${ie}px, 0, 0)`),
          (q.style.width = `${W}px`))
        : ((q.style.transform = `translate3d(0px, ${ie}px, 0)`),
          (q.style.height = `${W}px`)),
      ae.hide &&
        (clearTimeout(w),
        (K.style.opacity = 1),
        (w = setTimeout(() => {
          (K.style.opacity = 0), (K.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function T(R) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${R}ms`);
  }
  function S() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: R } = e,
      { dragEl: z, el: q } = R;
    (z.style.width = ""),
      (z.style.height = ""),
      (h = e.isHorizontal() ? q.offsetWidth : q.offsetHeight),
      (y =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (g = h * y)
        : (g = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (z.style.width = `${g}px`)
        : (z.style.height = `${g}px`),
      y >= 1 ? (q.style.display = "none") : (q.style.display = ""),
      e.params.scrollbar.hide && (q.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        R.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  function P(R) {
    return e.isHorizontal() ? R.clientX : R.clientY;
  }
  function m(R) {
    const { scrollbar: z, rtlTranslate: q } = e,
      { el: K } = z;
    let ae;
    (ae =
      (P(R) -
        mi(K)[e.isHorizontal() ? "left" : "top"] -
        (x !== null ? x : g / 2)) /
      (h - g)),
      (ae = Math.max(Math.min(ae, 1), 0)),
      q && (ae = 1 - ae);
    const B = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * ae;
    e.updateProgress(B),
      e.setTranslate(B),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function A(R) {
    const z = e.params.scrollbar,
      { scrollbar: q, wrapperEl: K } = e,
      { el: ae, dragEl: B } = q;
    (b = !0),
      (x =
        R.target === B
          ? P(R) -
            R.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      R.preventDefault(),
      R.stopPropagation(),
      (K.style.transitionDuration = "100ms"),
      (B.style.transitionDuration = "100ms"),
      m(R),
      clearTimeout(p),
      (ae.style.transitionDuration = "0ms"),
      z.hide && (ae.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      u("scrollbarDragStart", R);
  }
  function M(R) {
    const { scrollbar: z, wrapperEl: q } = e,
      { el: K, dragEl: ae } = z;
    b &&
      (R.preventDefault && R.cancelable
        ? R.preventDefault()
        : (R.returnValue = !1),
      m(R),
      (q.style.transitionDuration = "0ms"),
      (K.style.transitionDuration = "0ms"),
      (ae.style.transitionDuration = "0ms"),
      u("scrollbarDragMove", R));
  }
  function O(R) {
    const z = e.params.scrollbar,
      { scrollbar: q, wrapperEl: K } = e,
      { el: ae } = q;
    b &&
      ((b = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (K.style.transitionDuration = "")),
      z.hide &&
        (clearTimeout(p),
        (p = Mt(() => {
          (ae.style.opacity = 0), (ae.style.transitionDuration = "400ms");
        }, 1e3))),
      u("scrollbarDragEnd", R),
      z.snapOnRelease && e.slideToClosest());
  }
  function G(R) {
    const { scrollbar: z, params: q } = e,
      K = z.el;
    if (!K) return;
    const ae = K,
      B = q.passiveListeners ? { passive: !1, capture: !1 } : !1,
      W = q.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!ae) return;
    const ie = R === "on" ? "addEventListener" : "removeEventListener";
    ae[ie]("pointerdown", A, B),
      f[ie]("pointermove", M, B),
      f[ie]("pointerup", O, W);
  }
  function Q() {
    !e.params.scrollbar.el || !e.scrollbar.el || G("on");
  }
  function o() {
    !e.params.scrollbar.el || !e.scrollbar.el || G("off");
  }
  function X() {
    const { scrollbar: R, el: z } = e;
    e.params.scrollbar = Ki(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const q = e.params.scrollbar;
    if (!q.el) return;
    let K;
    if (
      (typeof q.el == "string" && e.isElement && (K = e.el.querySelector(q.el)),
      !K && typeof q.el == "string")
    ) {
      if (((K = f.querySelectorAll(q.el)), !K.length)) return;
    } else K || (K = q.el);
    e.params.uniqueNavElements &&
      typeof q.el == "string" &&
      K.length > 1 &&
      z.querySelectorAll(q.el).length === 1 &&
      (K = z.querySelector(q.el)),
      K.length > 0 && (K = K[0]),
      K.classList.add(e.isHorizontal() ? q.horizontalClass : q.verticalClass);
    let ae;
    K &&
      ((ae = K.querySelector(ft(e.params.scrollbar.dragClass))),
      ae || ((ae = _e("div", e.params.scrollbar.dragClass)), K.append(ae))),
      Object.assign(R, { el: K, dragEl: ae }),
      q.draggable && Q(),
      K &&
        K.classList[e.enabled ? "remove" : "add"](
          ...gt(e.params.scrollbar.lockClass)
        );
  }
  function H() {
    const R = e.params.scrollbar,
      z = e.scrollbar.el;
    z &&
      z.classList.remove(
        ...gt(e.isHorizontal() ? R.horizontalClass : R.verticalClass)
      ),
      o();
  }
  a("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el) return;
    const R = e.params.scrollbar;
    let { el: z } = e.scrollbar;
    (z = ye(z)),
      z.forEach((q) => {
        q.classList.remove(R.horizontalClass, R.verticalClass),
          q.classList.add(
            e.isHorizontal() ? R.horizontalClass : R.verticalClass
          );
      });
  }),
    a("init", () => {
      e.params.scrollbar.enabled === !1 ? U() : (X(), S(), E());
    }),
    a("update resize observerUpdate lock unlock changeDirection", () => {
      S();
    }),
    a("setTranslate", () => {
      E();
    }),
    a("setTransition", (R, z) => {
      T(z);
    }),
    a("enable disable", () => {
      const { el: R } = e.scrollbar;
      R &&
        R.classList[e.enabled ? "remove" : "add"](
          ...gt(e.params.scrollbar.lockClass)
        );
    }),
    a("destroy", () => {
      H();
    });
  const _ = () => {
      e.el.classList.remove(...gt(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...gt(e.params.scrollbar.scrollbarDisabledClass)
          ),
        X(),
        S(),
        E();
    },
    U = () => {
      e.el.classList.add(...gt(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...gt(e.params.scrollbar.scrollbarDisabledClass)
          ),
        H();
    };
  Object.assign(e.scrollbar, {
    enable: _,
    disable: U,
    updateSize: S,
    setTranslate: E,
    init: X,
    destroy: H,
  });
}
function aa(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({ parallax: { enabled: !1 } });
  const u =
      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
    f = (p, x) => {
      const { rtl: g } = e,
        h = g ? -1 : 1,
        y = p.getAttribute("data-swiper-parallax") || "0";
      let E = p.getAttribute("data-swiper-parallax-x"),
        T = p.getAttribute("data-swiper-parallax-y");
      const S = p.getAttribute("data-swiper-parallax-scale"),
        P = p.getAttribute("data-swiper-parallax-opacity"),
        m = p.getAttribute("data-swiper-parallax-rotate");
      if (
        (E || T
          ? ((E = E || "0"), (T = T || "0"))
          : e.isHorizontal()
            ? ((E = y), (T = "0"))
            : ((T = y), (E = "0")),
        E.indexOf("%") >= 0
          ? (E = `${parseInt(E, 10) * x * h}%`)
          : (E = `${E * x * h}px`),
        T.indexOf("%") >= 0
          ? (T = `${parseInt(T, 10) * x}%`)
          : (T = `${T * x}px`),
        typeof P < "u" && P !== null)
      ) {
        const M = P - (P - 1) * (1 - Math.abs(x));
        p.style.opacity = M;
      }
      let A = `translate3d(${E}, ${T}, 0px)`;
      if (typeof S < "u" && S !== null) {
        const M = S - (S - 1) * (1 - Math.abs(x));
        A += ` scale(${M})`;
      }
      if (m && typeof m < "u" && m !== null) {
        const M = m * x * -1;
        A += ` rotate(${M}deg)`;
      }
      p.style.transform = A;
    },
    b = () => {
      const { el: p, slides: x, progress: g, snapGrid: h, isElement: y } = e,
        E = Oe(p, u);
      e.isElement && E.push(...Oe(e.hostEl, u)),
        E.forEach((T) => {
          f(T, g);
        }),
        x.forEach((T, S) => {
          let P = T.progress;
          e.params.slidesPerGroup > 1 &&
            e.params.slidesPerView !== "auto" &&
            (P += Math.ceil(S / 2) - g * (h.length - 1)),
            (P = Math.min(Math.max(P, -1), 1)),
            T.querySelectorAll(`${u}, [data-swiper-parallax-rotate]`).forEach(
              (m) => {
                f(m, P);
              }
            );
        });
    },
    w = function (p) {
      p === void 0 && (p = e.params.speed);
      const { el: x, hostEl: g } = e,
        h = [...x.querySelectorAll(u)];
      e.isElement && h.push(...g.querySelectorAll(u)),
        h.forEach((y) => {
          let E =
            parseInt(y.getAttribute("data-swiper-parallax-duration"), 10) || p;
          p === 0 && (E = 0), (y.style.transitionDuration = `${E}ms`);
        });
    };
  a("beforeInit", () => {
    e.params.parallax.enabled &&
      ((e.params.watchSlidesProgress = !0),
      (e.originalParams.watchSlidesProgress = !0));
  }),
    a("init", () => {
      e.params.parallax.enabled && b();
    }),
    a("setTranslate", () => {
      e.params.parallax.enabled && b();
    }),
    a("setTransition", (p, x) => {
      e.params.parallax.enabled && w(x);
    });
}
function oa(n) {
  let { swiper: e, extendParams: r, on: a, emit: u } = n;
  const f = Pe();
  r({
    zoom: {
      enabled: !1,
      limitToOriginalSize: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed",
    },
  }),
    (e.zoom = { enabled: !1 });
  let b = 1,
    w = !1,
    p,
    x;
  const g = [],
    h = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3,
    },
    y = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {},
    },
    E = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0,
    };
  let T = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return T;
    },
    set(Z) {
      if (T !== Z) {
        const te = h.imageEl,
          se = h.slideEl;
        u("zoomChange", Z, te, se);
      }
      T = Z;
    },
  });
  function S() {
    if (g.length < 2) return 1;
    const Z = g[0].pageX,
      te = g[0].pageY,
      se = g[1].pageX,
      Ee = g[1].pageY;
    return Math.sqrt((se - Z) ** 2 + (Ee - te) ** 2);
  }
  function P() {
    const Z = e.params.zoom,
      te = h.imageWrapEl.getAttribute("data-swiper-zoom") || Z.maxRatio;
    if (Z.limitToOriginalSize && h.imageEl && h.imageEl.naturalWidth) {
      const se = h.imageEl.naturalWidth / h.imageEl.offsetWidth;
      return Math.min(se, te);
    }
    return te;
  }
  function m() {
    if (g.length < 2) return { x: null, y: null };
    const Z = h.imageEl.getBoundingClientRect();
    return [
      (g[0].pageX + (g[1].pageX - g[0].pageX) / 2 - Z.x - f.scrollX) / b,
      (g[0].pageY + (g[1].pageY - g[0].pageY) / 2 - Z.y - f.scrollY) / b,
    ];
  }
  function A() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function M(Z) {
    const te = A();
    return !!(
      Z.target.matches(te) ||
      e.slides.filter((se) => se.contains(Z.target)).length > 0
    );
  }
  function O(Z) {
    const te = `.${e.params.zoom.containerClass}`;
    return !!(
      Z.target.matches(te) ||
      [...e.hostEl.querySelectorAll(te)].filter((se) => se.contains(Z.target))
        .length > 0
    );
  }
  function G(Z) {
    if ((Z.pointerType === "mouse" && g.splice(0, g.length), !M(Z))) return;
    const te = e.params.zoom;
    if (((p = !1), (x = !1), g.push(Z), !(g.length < 2))) {
      if (((p = !0), (h.scaleStart = S()), !h.slideEl)) {
        (h.slideEl = Z.target.closest(`.${e.params.slideClass}, swiper-slide`)),
          h.slideEl || (h.slideEl = e.slides[e.activeIndex]);
        let se = h.slideEl.querySelector(`.${te.containerClass}`);
        if (
          (se &&
            (se = se.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
          (h.imageEl = se),
          se
            ? (h.imageWrapEl = Ct(h.imageEl, `.${te.containerClass}`)[0])
            : (h.imageWrapEl = void 0),
          !h.imageWrapEl)
        ) {
          h.imageEl = void 0;
          return;
        }
        h.maxRatio = P();
      }
      if (h.imageEl) {
        const [se, Ee] = m();
        (h.originX = se),
          (h.originY = Ee),
          (h.imageEl.style.transitionDuration = "0ms");
      }
      w = !0;
    }
  }
  function Q(Z) {
    if (!M(Z)) return;
    const te = e.params.zoom,
      se = e.zoom,
      Ee = g.findIndex((le) => le.pointerId === Z.pointerId);
    Ee >= 0 && (g[Ee] = Z),
      !(g.length < 2) &&
        ((x = !0),
        (h.scaleMove = S()),
        h.imageEl &&
          ((se.scale = (h.scaleMove / h.scaleStart) * b),
          se.scale > h.maxRatio &&
            (se.scale = h.maxRatio - 1 + (se.scale - h.maxRatio + 1) ** 0.5),
          se.scale < te.minRatio &&
            (se.scale = te.minRatio + 1 - (te.minRatio - se.scale + 1) ** 0.5),
          (h.imageEl.style.transform = `translate3d(0,0,0) scale(${se.scale})`)));
  }
  function o(Z) {
    if (!M(Z) || (Z.pointerType === "mouse" && Z.type === "pointerout")) return;
    const te = e.params.zoom,
      se = e.zoom,
      Ee = g.findIndex((le) => le.pointerId === Z.pointerId);
    Ee >= 0 && g.splice(Ee, 1),
      !(!p || !x) &&
        ((p = !1),
        (x = !1),
        h.imageEl &&
          ((se.scale = Math.max(Math.min(se.scale, h.maxRatio), te.minRatio)),
          (h.imageEl.style.transitionDuration = `${e.params.speed}ms`),
          (h.imageEl.style.transform = `translate3d(0,0,0) scale(${se.scale})`),
          (b = se.scale),
          (w = !1),
          se.scale > 1 && h.slideEl
            ? h.slideEl.classList.add(`${te.zoomedSlideClass}`)
            : se.scale <= 1 &&
              h.slideEl &&
              h.slideEl.classList.remove(`${te.zoomedSlideClass}`),
          se.scale === 1 &&
            ((h.originX = 0), (h.originY = 0), (h.slideEl = void 0))));
  }
  let X;
  function H() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function _() {
    clearTimeout(X),
      (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
      (X = setTimeout(() => {
        H();
      }));
  }
  function U(Z) {
    const te = e.device;
    if (!h.imageEl || y.isTouched) return;
    te.android && Z.cancelable && Z.preventDefault(), (y.isTouched = !0);
    const se = g.length > 0 ? g[0] : Z;
    (y.touchesStart.x = se.pageX), (y.touchesStart.y = se.pageY);
  }
  function R(Z) {
    if (!M(Z) || !O(Z)) return;
    const te = e.zoom;
    if (!h.imageEl || !y.isTouched || !h.slideEl) return;
    y.isMoved ||
      ((y.width = h.imageEl.offsetWidth || h.imageEl.clientWidth),
      (y.height = h.imageEl.offsetHeight || h.imageEl.clientHeight),
      (y.startX = Xi(h.imageWrapEl, "x") || 0),
      (y.startY = Xi(h.imageWrapEl, "y") || 0),
      (h.slideWidth = h.slideEl.offsetWidth),
      (h.slideHeight = h.slideEl.offsetHeight),
      (h.imageWrapEl.style.transitionDuration = "0ms"));
    const se = y.width * te.scale,
      Ee = y.height * te.scale;
    if (
      ((y.minX = Math.min(h.slideWidth / 2 - se / 2, 0)),
      (y.maxX = -y.minX),
      (y.minY = Math.min(h.slideHeight / 2 - Ee / 2, 0)),
      (y.maxY = -y.minY),
      (y.touchesCurrent.x = g.length > 0 ? g[0].pageX : Z.pageX),
      (y.touchesCurrent.y = g.length > 0 ? g[0].pageY : Z.pageY),
      Math.max(
        Math.abs(y.touchesCurrent.x - y.touchesStart.x),
        Math.abs(y.touchesCurrent.y - y.touchesStart.y)
      ) > 5 && (e.allowClick = !1),
      !y.isMoved && !w)
    ) {
      if (
        e.isHorizontal() &&
        ((Math.floor(y.minX) === Math.floor(y.startX) &&
          y.touchesCurrent.x < y.touchesStart.x) ||
          (Math.floor(y.maxX) === Math.floor(y.startX) &&
            y.touchesCurrent.x > y.touchesStart.x))
      ) {
        (y.isTouched = !1), H();
        return;
      }
      if (
        !e.isHorizontal() &&
        ((Math.floor(y.minY) === Math.floor(y.startY) &&
          y.touchesCurrent.y < y.touchesStart.y) ||
          (Math.floor(y.maxY) === Math.floor(y.startY) &&
            y.touchesCurrent.y > y.touchesStart.y))
      ) {
        (y.isTouched = !1), H();
        return;
      }
    }
    Z.cancelable && Z.preventDefault(),
      Z.stopPropagation(),
      _(),
      (y.isMoved = !0);
    const Se = (te.scale - b) / (h.maxRatio - e.params.zoom.minRatio),
      { originX: Ie, originY: ut } = h;
    (y.currentX =
      y.touchesCurrent.x -
      y.touchesStart.x +
      y.startX +
      Se * (y.width - Ie * 2)),
      (y.currentY =
        y.touchesCurrent.y -
        y.touchesStart.y +
        y.startY +
        Se * (y.height - ut * 2)),
      y.currentX < y.minX &&
        (y.currentX = y.minX + 1 - (y.minX - y.currentX + 1) ** 0.8),
      y.currentX > y.maxX &&
        (y.currentX = y.maxX - 1 + (y.currentX - y.maxX + 1) ** 0.8),
      y.currentY < y.minY &&
        (y.currentY = y.minY + 1 - (y.minY - y.currentY + 1) ** 0.8),
      y.currentY > y.maxY &&
        (y.currentY = y.maxY - 1 + (y.currentY - y.maxY + 1) ** 0.8),
      E.prevPositionX || (E.prevPositionX = y.touchesCurrent.x),
      E.prevPositionY || (E.prevPositionY = y.touchesCurrent.y),
      E.prevTime || (E.prevTime = Date.now()),
      (E.x =
        (y.touchesCurrent.x - E.prevPositionX) / (Date.now() - E.prevTime) / 2),
      (E.y =
        (y.touchesCurrent.y - E.prevPositionY) / (Date.now() - E.prevTime) / 2),
      Math.abs(y.touchesCurrent.x - E.prevPositionX) < 2 && (E.x = 0),
      Math.abs(y.touchesCurrent.y - E.prevPositionY) < 2 && (E.y = 0),
      (E.prevPositionX = y.touchesCurrent.x),
      (E.prevPositionY = y.touchesCurrent.y),
      (E.prevTime = Date.now()),
      (h.imageWrapEl.style.transform = `translate3d(${y.currentX}px, ${y.currentY}px,0)`);
  }
  function z() {
    const Z = e.zoom;
    if (!h.imageEl) return;
    if (!y.isTouched || !y.isMoved) {
      (y.isTouched = !1), (y.isMoved = !1);
      return;
    }
    (y.isTouched = !1), (y.isMoved = !1);
    let te = 300,
      se = 300;
    const Ee = E.x * te,
      le = y.currentX + Ee,
      Se = E.y * se,
      Ie = y.currentY + Se;
    E.x !== 0 && (te = Math.abs((le - y.currentX) / E.x)),
      E.y !== 0 && (se = Math.abs((Ie - y.currentY) / E.y));
    const ut = Math.max(te, se);
    (y.currentX = le), (y.currentY = Ie);
    const yt = y.width * Z.scale,
      Le = y.height * Z.scale;
    (y.minX = Math.min(h.slideWidth / 2 - yt / 2, 0)),
      (y.maxX = -y.minX),
      (y.minY = Math.min(h.slideHeight / 2 - Le / 2, 0)),
      (y.maxY = -y.minY),
      (y.currentX = Math.max(Math.min(y.currentX, y.maxX), y.minX)),
      (y.currentY = Math.max(Math.min(y.currentY, y.maxY), y.minY)),
      (h.imageWrapEl.style.transitionDuration = `${ut}ms`),
      (h.imageWrapEl.style.transform = `translate3d(${y.currentX}px, ${y.currentY}px,0)`);
  }
  function q() {
    const Z = e.zoom;
    h.slideEl &&
      e.activeIndex !== e.slides.indexOf(h.slideEl) &&
      (h.imageEl && (h.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      h.imageWrapEl && (h.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      h.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
      (Z.scale = 1),
      (b = 1),
      (h.slideEl = void 0),
      (h.imageEl = void 0),
      (h.imageWrapEl = void 0),
      (h.originX = 0),
      (h.originY = 0));
  }
  function K(Z) {
    const te = e.zoom,
      se = e.params.zoom;
    if (!h.slideEl) {
      Z &&
        Z.target &&
        (h.slideEl = Z.target.closest(`.${e.params.slideClass}, swiper-slide`)),
        h.slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (h.slideEl = Oe(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
            : (h.slideEl = e.slides[e.activeIndex]));
      let Ue = h.slideEl.querySelector(`.${se.containerClass}`);
      Ue &&
        (Ue = Ue.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (h.imageEl = Ue),
        Ue
          ? (h.imageWrapEl = Ct(h.imageEl, `.${se.containerClass}`)[0])
          : (h.imageWrapEl = void 0);
    }
    if (!h.imageEl || !h.imageWrapEl) return;
    e.params.cssMode &&
      ((e.wrapperEl.style.overflow = "hidden"),
      (e.wrapperEl.style.touchAction = "none")),
      h.slideEl.classList.add(`${se.zoomedSlideClass}`);
    let Ee, le, Se, Ie, ut, yt, Le, rt, nt, wt, jt, ii, dt, st, Be, Rt, qt, Bt;
    typeof y.touchesStart.x > "u" && Z
      ? ((Ee = Z.pageX), (le = Z.pageY))
      : ((Ee = y.touchesStart.x), (le = y.touchesStart.y));
    const ze = typeof Z == "number" ? Z : null;
    b === 1 && ze && ((Ee = void 0), (le = void 0));
    const ct = P();
    (te.scale = ze || ct),
      (b = ze || ct),
      Z && !(b === 1 && ze)
        ? ((qt = h.slideEl.offsetWidth),
          (Bt = h.slideEl.offsetHeight),
          (Se = mi(h.slideEl).left + f.scrollX),
          (Ie = mi(h.slideEl).top + f.scrollY),
          (ut = Se + qt / 2 - Ee),
          (yt = Ie + Bt / 2 - le),
          (nt = h.imageEl.offsetWidth || h.imageEl.clientWidth),
          (wt = h.imageEl.offsetHeight || h.imageEl.clientHeight),
          (jt = nt * te.scale),
          (ii = wt * te.scale),
          (dt = Math.min(qt / 2 - jt / 2, 0)),
          (st = Math.min(Bt / 2 - ii / 2, 0)),
          (Be = -dt),
          (Rt = -st),
          (Le = ut * te.scale),
          (rt = yt * te.scale),
          Le < dt && (Le = dt),
          Le > Be && (Le = Be),
          rt < st && (rt = st),
          rt > Rt && (rt = Rt))
        : ((Le = 0), (rt = 0)),
      ze && te.scale === 1 && ((h.originX = 0), (h.originY = 0)),
      (h.imageWrapEl.style.transitionDuration = "300ms"),
      (h.imageWrapEl.style.transform = `translate3d(${Le}px, ${rt}px,0)`),
      (h.imageEl.style.transitionDuration = "300ms"),
      (h.imageEl.style.transform = `translate3d(0,0,0) scale(${te.scale})`);
  }
  function ae() {
    const Z = e.zoom,
      te = e.params.zoom;
    if (!h.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual
        ? (h.slideEl = Oe(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
        : (h.slideEl = e.slides[e.activeIndex]);
      let se = h.slideEl.querySelector(`.${te.containerClass}`);
      se &&
        (se = se.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (h.imageEl = se),
        se
          ? (h.imageWrapEl = Ct(h.imageEl, `.${te.containerClass}`)[0])
          : (h.imageWrapEl = void 0);
    }
    !h.imageEl ||
      !h.imageWrapEl ||
      (e.params.cssMode &&
        ((e.wrapperEl.style.overflow = ""),
        (e.wrapperEl.style.touchAction = "")),
      (Z.scale = 1),
      (b = 1),
      (h.imageWrapEl.style.transitionDuration = "300ms"),
      (h.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      (h.imageEl.style.transitionDuration = "300ms"),
      (h.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      h.slideEl.classList.remove(`${te.zoomedSlideClass}`),
      (h.slideEl = void 0),
      (h.originX = 0),
      (h.originY = 0));
  }
  function B(Z) {
    const te = e.zoom;
    te.scale && te.scale !== 1 ? ae() : K(Z);
  }
  function W() {
    const Z = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
      te = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: Z, activeListenerWithCapture: te };
  }
  function ie() {
    const Z = e.zoom;
    if (Z.enabled) return;
    Z.enabled = !0;
    const { passiveListener: te, activeListenerWithCapture: se } = W();
    e.wrapperEl.addEventListener("pointerdown", G, te),
      e.wrapperEl.addEventListener("pointermove", Q, se),
      ["pointerup", "pointercancel", "pointerout"].forEach((Ee) => {
        e.wrapperEl.addEventListener(Ee, o, te);
      }),
      e.wrapperEl.addEventListener("pointermove", R, se);
  }
  function pe() {
    const Z = e.zoom;
    if (!Z.enabled) return;
    Z.enabled = !1;
    const { passiveListener: te, activeListenerWithCapture: se } = W();
    e.wrapperEl.removeEventListener("pointerdown", G, te),
      e.wrapperEl.removeEventListener("pointermove", Q, se),
      ["pointerup", "pointercancel", "pointerout"].forEach((Ee) => {
        e.wrapperEl.removeEventListener(Ee, o, te);
      }),
      e.wrapperEl.removeEventListener("pointermove", R, se);
  }
  a("init", () => {
    e.params.zoom.enabled && ie();
  }),
    a("destroy", () => {
      pe();
    }),
    a("touchStart", (Z, te) => {
      e.zoom.enabled && U(te);
    }),
    a("touchEnd", (Z, te) => {
      e.zoom.enabled && z();
    }),
    a("doubleTap", (Z, te) => {
      !e.animating &&
        e.params.zoom.enabled &&
        e.zoom.enabled &&
        e.params.zoom.toggle &&
        B(te);
    }),
    a("transitionEnd", () => {
      e.zoom.enabled && e.params.zoom.enabled && q();
    }),
    a("slideChange", () => {
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && q();
    }),
    Object.assign(e.zoom, {
      enable: ie,
      disable: pe,
      in: K,
      out: ae,
      toggle: B,
    });
}
function la(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({ controller: { control: void 0, inverse: !1, by: "slide" } }),
    (e.controller = { control: void 0 });
  function u(x, g) {
    const h = (function () {
      let S, P, m;
      return (A, M) => {
        for (P = -1, S = A.length; S - P > 1; )
          (m = (S + P) >> 1), A[m] <= M ? (P = m) : (S = m);
        return S;
      };
    })();
    (this.x = x), (this.y = g), (this.lastIndex = x.length - 1);
    let y, E;
    return (
      (this.interpolate = function (S) {
        return S
          ? ((E = h(this.x, S)),
            (y = E - 1),
            ((S - this.x[y]) * (this.y[E] - this.y[y])) /
              (this.x[E] - this.x[y]) +
              this.y[y])
          : 0;
      }),
      this
    );
  }
  function f(x) {
    e.controller.spline = e.params.loop
      ? new u(e.slidesGrid, x.slidesGrid)
      : new u(e.snapGrid, x.snapGrid);
  }
  function b(x, g) {
    const h = e.controller.control;
    let y, E;
    const T = e.constructor;
    function S(P) {
      if (P.destroyed) return;
      const m = e.rtlTranslate ? -e.translate : e.translate;
      e.params.controller.by === "slide" &&
        (f(P), (E = -e.controller.spline.interpolate(-m))),
        (!E || e.params.controller.by === "container") &&
          ((y =
            (P.maxTranslate() - P.minTranslate()) /
            (e.maxTranslate() - e.minTranslate())),
          (Number.isNaN(y) || !Number.isFinite(y)) && (y = 1),
          (E = (m - e.minTranslate()) * y + P.minTranslate())),
        e.params.controller.inverse && (E = P.maxTranslate() - E),
        P.updateProgress(E),
        P.setTranslate(E, e),
        P.updateActiveIndex(),
        P.updateSlidesClasses();
    }
    if (Array.isArray(h))
      for (let P = 0; P < h.length; P += 1)
        h[P] !== g && h[P] instanceof T && S(h[P]);
    else h instanceof T && g !== h && S(h);
  }
  function w(x, g) {
    const h = e.constructor,
      y = e.controller.control;
    let E;
    function T(S) {
      S.destroyed ||
        (S.setTransition(x, e),
        x !== 0 &&
          (S.transitionStart(),
          S.params.autoHeight &&
            Mt(() => {
              S.updateAutoHeight();
            }),
          Jt(S.wrapperEl, () => {
            y && S.transitionEnd();
          })));
    }
    if (Array.isArray(y))
      for (E = 0; E < y.length; E += 1)
        y[E] !== g && y[E] instanceof h && T(y[E]);
    else y instanceof h && g !== y && T(y);
  }
  function p() {
    e.controller.control &&
      e.controller.spline &&
      ((e.controller.spline = void 0), delete e.controller.spline);
  }
  a("beforeInit", () => {
    if (
      typeof window < "u" &&
      (typeof e.params.controller.control == "string" ||
        e.params.controller.control instanceof HTMLElement)
    ) {
      (typeof e.params.controller.control == "string"
        ? [...document.querySelectorAll(e.params.controller.control)]
        : [e.params.controller.control]
      ).forEach((g) => {
        if (
          (e.controller.control || (e.controller.control = []), g && g.swiper)
        )
          e.controller.control.push(g.swiper);
        else if (g) {
          const h = `${e.params.eventsPrefix}init`,
            y = (E) => {
              e.controller.control.push(E.detail[0]),
                e.update(),
                g.removeEventListener(h, y);
            };
          g.addEventListener(h, y);
        }
      });
      return;
    }
    e.controller.control = e.params.controller.control;
  }),
    a("update", () => {
      p();
    }),
    a("resize", () => {
      p();
    }),
    a("observerUpdate", () => {
      p();
    }),
    a("setTranslate", (x, g, h) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTranslate(g, h);
    }),
    a("setTransition", (x, g, h) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTransition(g, h);
    }),
    Object.assign(e.controller, { setTranslate: b, setTransition: w });
}
function fa(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
      scrollOnFocus: !0,
    },
  }),
    (e.a11y = { clicked: !1 });
  let u = null,
    f,
    b,
    w = new Date().getTime();
  function p(B) {
    const W = u;
    W.length !== 0 && ((W.innerHTML = ""), (W.innerHTML = B));
  }
  function x(B) {
    const W = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(B).replace(/x/g, W);
  }
  function g(B) {
    (B = ye(B)),
      B.forEach((W) => {
        W.setAttribute("tabIndex", "0");
      });
  }
  function h(B) {
    (B = ye(B)),
      B.forEach((W) => {
        W.setAttribute("tabIndex", "-1");
      });
  }
  function y(B, W) {
    (B = ye(B)),
      B.forEach((ie) => {
        ie.setAttribute("role", W);
      });
  }
  function E(B, W) {
    (B = ye(B)),
      B.forEach((ie) => {
        ie.setAttribute("aria-roledescription", W);
      });
  }
  function T(B, W) {
    (B = ye(B)),
      B.forEach((ie) => {
        ie.setAttribute("aria-controls", W);
      });
  }
  function S(B, W) {
    (B = ye(B)),
      B.forEach((ie) => {
        ie.setAttribute("aria-label", W);
      });
  }
  function P(B, W) {
    (B = ye(B)),
      B.forEach((ie) => {
        ie.setAttribute("id", W);
      });
  }
  function m(B, W) {
    (B = ye(B)),
      B.forEach((ie) => {
        ie.setAttribute("aria-live", W);
      });
  }
  function A(B) {
    (B = ye(B)),
      B.forEach((W) => {
        W.setAttribute("aria-disabled", !0);
      });
  }
  function M(B) {
    (B = ye(B)),
      B.forEach((W) => {
        W.setAttribute("aria-disabled", !1);
      });
  }
  function O(B) {
    if (B.keyCode !== 13 && B.keyCode !== 32) return;
    const W = e.params.a11y,
      ie = B.target;
    if (
      !(
        e.pagination &&
        e.pagination.el &&
        (ie === e.pagination.el || e.pagination.el.contains(B.target)) &&
        !B.target.matches(ft(e.params.pagination.bulletClass))
      )
    ) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const pe = ye(e.navigation.prevEl);
        ye(e.navigation.nextEl).includes(ie) &&
          ((e.isEnd && !e.params.loop) || e.slideNext(),
          e.isEnd ? p(W.lastSlideMessage) : p(W.nextSlideMessage)),
          pe.includes(ie) &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? p(W.firstSlideMessage) : p(W.prevSlideMessage));
      }
      e.pagination &&
        ie.matches(ft(e.params.pagination.bulletClass)) &&
        ie.click();
    }
  }
  function G() {
    if (e.params.loop || e.params.rewind || !e.navigation) return;
    const { nextEl: B, prevEl: W } = e.navigation;
    W && (e.isBeginning ? (A(W), h(W)) : (M(W), g(W))),
      B && (e.isEnd ? (A(B), h(B)) : (M(B), g(B)));
  }
  function Q() {
    return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
  }
  function o() {
    return Q() && e.params.pagination.clickable;
  }
  function X() {
    const B = e.params.a11y;
    Q() &&
      e.pagination.bullets.forEach((W) => {
        e.params.pagination.clickable &&
          (g(W),
          e.params.pagination.renderBullet ||
            (y(W, "button"),
            S(
              W,
              B.paginationBulletMessage.replace(/\{\{index\}\}/, ei(W) + 1)
            ))),
          W.matches(ft(e.params.pagination.bulletActiveClass))
            ? W.setAttribute("aria-current", "true")
            : W.removeAttribute("aria-current");
      });
  }
  const H = (B, W, ie) => {
      g(B),
        B.tagName !== "BUTTON" &&
          (y(B, "button"), B.addEventListener("keydown", O)),
        S(B, ie),
        T(B, W);
    },
    _ = (B) => {
      b && b !== B.target && !b.contains(B.target) && (f = !0),
        (e.a11y.clicked = !0);
    },
    U = () => {
      (f = !1),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            e.destroyed || (e.a11y.clicked = !1);
          });
        });
    },
    R = (B) => {
      w = new Date().getTime();
    },
    z = (B) => {
      if (
        e.a11y.clicked ||
        !e.params.a11y.scrollOnFocus ||
        new Date().getTime() - w < 100
      )
        return;
      const W = B.target.closest(`.${e.params.slideClass}, swiper-slide`);
      if (!W || !e.slides.includes(W)) return;
      b = W;
      const ie = e.slides.indexOf(W) === e.activeIndex,
        pe =
          e.params.watchSlidesProgress &&
          e.visibleSlides &&
          e.visibleSlides.includes(W);
      ie ||
        pe ||
        (B.sourceCapabilities && B.sourceCapabilities.firesTouchEvents) ||
        (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
        requestAnimationFrame(() => {
          f ||
            (e.params.loop
              ? e.slideToLoop(
                  parseInt(W.getAttribute("data-swiper-slide-index")),
                  0
                )
              : e.slideTo(e.slides.indexOf(W), 0),
            (f = !1));
        }));
    },
    q = () => {
      const B = e.params.a11y;
      B.itemRoleDescriptionMessage && E(e.slides, B.itemRoleDescriptionMessage),
        B.slideRole && y(e.slides, B.slideRole);
      const W = e.slides.length;
      B.slideLabelMessage &&
        e.slides.forEach((ie, pe) => {
          const Z = e.params.loop
              ? parseInt(ie.getAttribute("data-swiper-slide-index"), 10)
              : pe,
            te = B.slideLabelMessage
              .replace(/\{\{index\}\}/, Z + 1)
              .replace(/\{\{slidesLength\}\}/, W);
          S(ie, te);
        });
    },
    K = () => {
      const B = e.params.a11y;
      e.el.append(u);
      const W = e.el;
      B.containerRoleDescriptionMessage &&
        E(W, B.containerRoleDescriptionMessage),
        B.containerMessage && S(W, B.containerMessage);
      const ie = e.wrapperEl,
        pe = B.id || ie.getAttribute("id") || `swiper-wrapper-${x(16)}`,
        Z = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      P(ie, pe), m(ie, Z), q();
      let { nextEl: te, prevEl: se } = e.navigation ? e.navigation : {};
      (te = ye(te)),
        (se = ye(se)),
        te && te.forEach((le) => H(le, pe, B.nextSlideMessage)),
        se && se.forEach((le) => H(le, pe, B.prevSlideMessage)),
        o() &&
          ye(e.pagination.el).forEach((Se) => {
            Se.addEventListener("keydown", O);
          }),
        ke().addEventListener("visibilitychange", R),
        e.el.addEventListener("focus", z, !0),
        e.el.addEventListener("focus", z, !0),
        e.el.addEventListener("pointerdown", _, !0),
        e.el.addEventListener("pointerup", U, !0);
    };
  function ae() {
    u && u.remove();
    let { nextEl: B, prevEl: W } = e.navigation ? e.navigation : {};
    (B = ye(B)),
      (W = ye(W)),
      B && B.forEach((pe) => pe.removeEventListener("keydown", O)),
      W && W.forEach((pe) => pe.removeEventListener("keydown", O)),
      o() &&
        ye(e.pagination.el).forEach((Z) => {
          Z.removeEventListener("keydown", O);
        }),
      ke().removeEventListener("visibilitychange", R),
      e.el &&
        typeof e.el != "string" &&
        (e.el.removeEventListener("focus", z, !0),
        e.el.removeEventListener("pointerdown", _, !0),
        e.el.removeEventListener("pointerup", U, !0));
  }
  a("beforeInit", () => {
    (u = _e("span", e.params.a11y.notificationClass)),
      u.setAttribute("aria-live", "assertive"),
      u.setAttribute("aria-atomic", "true");
  }),
    a("afterInit", () => {
      e.params.a11y.enabled && K();
    }),
    a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      e.params.a11y.enabled && q();
    }),
    a("fromEdge toEdge afterInit lock unlock", () => {
      e.params.a11y.enabled && G();
    }),
    a("paginationUpdate", () => {
      e.params.a11y.enabled && X();
    }),
    a("destroy", () => {
      e.params.a11y.enabled && ae();
    });
}
function ua(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1,
    },
  });
  let u = !1,
    f = {};
  const b = (E) =>
      E.toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, ""),
    w = (E) => {
      const T = Pe();
      let S;
      E ? (S = new URL(E)) : (S = T.location);
      const P = S.pathname
          .slice(1)
          .split("/")
          .filter((O) => O !== ""),
        m = P.length,
        A = P[m - 2],
        M = P[m - 1];
      return { key: A, value: M };
    },
    p = (E, T) => {
      const S = Pe();
      if (!u || !e.params.history.enabled) return;
      let P;
      e.params.url ? (P = new URL(e.params.url)) : (P = S.location);
      const m =
        e.virtual && e.params.virtual.enabled
          ? e.slidesEl.querySelector(`[data-swiper-slide-index="${T}"]`)
          : e.slides[T];
      let A = b(m.getAttribute("data-history"));
      if (e.params.history.root.length > 0) {
        let O = e.params.history.root;
        O[O.length - 1] === "/" && (O = O.slice(0, O.length - 1)),
          (A = `${O}/${E ? `${E}/` : ""}${A}`);
      } else P.pathname.includes(E) || (A = `${E ? `${E}/` : ""}${A}`);
      e.params.history.keepQuery && (A += P.search);
      const M = S.history.state;
      (M && M.value === A) ||
        (e.params.history.replaceState
          ? S.history.replaceState({ value: A }, null, A)
          : S.history.pushState({ value: A }, null, A));
    },
    x = (E, T, S) => {
      if (T)
        for (let P = 0, m = e.slides.length; P < m; P += 1) {
          const A = e.slides[P];
          if (b(A.getAttribute("data-history")) === T) {
            const O = e.getSlideIndex(A);
            e.slideTo(O, E, S);
          }
        }
      else e.slideTo(0, E, S);
    },
    g = () => {
      (f = w(e.params.url)), x(e.params.speed, f.value, !1);
    },
    h = () => {
      const E = Pe();
      if (e.params.history) {
        if (!E.history || !E.history.pushState) {
          (e.params.history.enabled = !1),
            (e.params.hashNavigation.enabled = !0);
          return;
        }
        if (((u = !0), (f = w(e.params.url)), !f.key && !f.value)) {
          e.params.history.replaceState || E.addEventListener("popstate", g);
          return;
        }
        x(0, f.value, e.params.runCallbacksOnInit),
          e.params.history.replaceState || E.addEventListener("popstate", g);
      }
    },
    y = () => {
      const E = Pe();
      e.params.history.replaceState || E.removeEventListener("popstate", g);
    };
  a("init", () => {
    e.params.history.enabled && h();
  }),
    a("destroy", () => {
      e.params.history.enabled && y();
    }),
    a("transitionEnd _freeModeNoMomentumRelease", () => {
      u && p(e.params.history.key, e.activeIndex);
    }),
    a("slideChange", () => {
      u && e.params.cssMode && p(e.params.history.key, e.activeIndex);
    });
}
function da(n) {
  let { swiper: e, extendParams: r, emit: a, on: u } = n,
    f = !1;
  const b = ke(),
    w = Pe();
  r({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(y, E) {
        if (e.virtual && e.params.virtual.enabled) {
          const T = e.slides.filter(
            (P) => P.getAttribute("data-hash") === E
          )[0];
          return T
            ? parseInt(T.getAttribute("data-swiper-slide-index"), 10)
            : 0;
        }
        return e.getSlideIndex(
          Oe(
            e.slidesEl,
            `.${e.params.slideClass}[data-hash="${E}"], swiper-slide[data-hash="${E}"]`
          )[0]
        );
      },
    },
  });
  const p = () => {
      a("hashChange");
      const y = b.location.hash.replace("#", ""),
        E =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        T = E ? E.getAttribute("data-hash") : "";
      if (y !== T) {
        const S = e.params.hashNavigation.getSlideIndex(e, y);
        if (typeof S > "u" || Number.isNaN(S)) return;
        e.slideTo(S);
      }
    },
    x = () => {
      if (!f || !e.params.hashNavigation.enabled) return;
      const y =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        E = y
          ? y.getAttribute("data-hash") || y.getAttribute("data-history")
          : "";
      e.params.hashNavigation.replaceState &&
      w.history &&
      w.history.replaceState
        ? (w.history.replaceState(null, null, `#${E}` || ""), a("hashSet"))
        : ((b.location.hash = E || ""), a("hashSet"));
    },
    g = () => {
      if (
        !e.params.hashNavigation.enabled ||
        (e.params.history && e.params.history.enabled)
      )
        return;
      f = !0;
      const y = b.location.hash.replace("#", "");
      if (y) {
        const T = e.params.hashNavigation.getSlideIndex(e, y);
        e.slideTo(T || 0, 0, e.params.runCallbacksOnInit, !0);
      }
      e.params.hashNavigation.watchState && w.addEventListener("hashchange", p);
    },
    h = () => {
      e.params.hashNavigation.watchState &&
        w.removeEventListener("hashchange", p);
    };
  u("init", () => {
    e.params.hashNavigation.enabled && g();
  }),
    u("destroy", () => {
      e.params.hashNavigation.enabled && h();
    }),
    u("transitionEnd _freeModeNoMomentumRelease", () => {
      f && x();
    }),
    u("slideChange", () => {
      f && e.params.cssMode && x();
    });
}
function ca(n) {
  let { swiper: e, extendParams: r, on: a, emit: u, params: f } = n;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    r({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let b,
    w,
    p = f && f.autoplay ? f.autoplay.delay : 3e3,
    x = f && f.autoplay ? f.autoplay.delay : 3e3,
    g,
    h = new Date().getTime(),
    y,
    E,
    T,
    S,
    P,
    m,
    A;
  function M(W) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (W.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", M),
        !(A || (W.detail && W.detail.bySwiperTouchMove)) && _()));
  }
  const O = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (y = !0) : y && ((x = g), (y = !1));
      const W = e.autoplay.paused ? g : h + x - new Date().getTime();
      (e.autoplay.timeLeft = W),
        u("autoplayTimeLeft", W, W / p),
        (w = requestAnimationFrame(() => {
          O();
        }));
    },
    G = () => {
      let W;
      return (
        e.virtual && e.params.virtual.enabled
          ? (W = e.slides.filter((pe) =>
              pe.classList.contains("swiper-slide-active")
            )[0])
          : (W = e.slides[e.activeIndex]),
        W ? parseInt(W.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    Q = (W) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(w), O();
      let ie = typeof W > "u" ? e.params.autoplay.delay : W;
      (p = e.params.autoplay.delay), (x = e.params.autoplay.delay);
      const pe = G();
      !Number.isNaN(pe) &&
        pe > 0 &&
        typeof W > "u" &&
        ((ie = pe), (p = pe), (x = pe)),
        (g = ie);
      const Z = e.params.speed,
        te = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(Z, !0, !0), u("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, Z, !0, !0), u("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(Z, !0, !0), u("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, Z, !0, !0), u("autoplay")),
            e.params.cssMode &&
              ((h = new Date().getTime()),
              requestAnimationFrame(() => {
                Q();
              })));
        };
      return (
        ie > 0
          ? (clearTimeout(b),
            (b = setTimeout(() => {
              te();
            }, ie)))
          : requestAnimationFrame(() => {
              te();
            }),
        ie
      );
    },
    o = () => {
      (h = new Date().getTime()),
        (e.autoplay.running = !0),
        Q(),
        u("autoplayStart");
    },
    X = () => {
      (e.autoplay.running = !1),
        clearTimeout(b),
        cancelAnimationFrame(w),
        u("autoplayStop");
    },
    H = (W, ie) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(b), W || (m = !0);
      const pe = () => {
        u("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", M)
            : _();
      };
      if (((e.autoplay.paused = !0), ie)) {
        P && (g = e.params.autoplay.delay), (P = !1), pe();
        return;
      }
      (g = (g || e.params.autoplay.delay) - (new Date().getTime() - h)),
        !(e.isEnd && g < 0 && !e.params.loop) && (g < 0 && (g = 0), pe());
    },
    _ = () => {
      (e.isEnd && g < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((h = new Date().getTime()),
        m ? ((m = !1), Q(g)) : Q(),
        (e.autoplay.paused = !1),
        u("autoplayResume"));
    },
    U = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const W = ke();
      W.visibilityState === "hidden" && ((m = !0), H(!0)),
        W.visibilityState === "visible" && _();
    },
    R = (W) => {
      W.pointerType === "mouse" &&
        ((m = !0), (A = !0), !(e.animating || e.autoplay.paused) && H(!0));
    },
    z = (W) => {
      W.pointerType === "mouse" && ((A = !1), e.autoplay.paused && _());
    },
    q = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", R),
        e.el.addEventListener("pointerleave", z));
    },
    K = () => {
      e.el &&
        typeof e.el != "string" &&
        (e.el.removeEventListener("pointerenter", R),
        e.el.removeEventListener("pointerleave", z));
    },
    ae = () => {
      ke().addEventListener("visibilitychange", U);
    },
    B = () => {
      ke().removeEventListener("visibilitychange", U);
    };
  a("init", () => {
    e.params.autoplay.enabled && (q(), ae(), o());
  }),
    a("destroy", () => {
      K(), B(), e.autoplay.running && X();
    }),
    a("_freeModeStaticRelease", () => {
      (T || m) && _();
    }),
    a("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? X() : H(!0, !0);
    }),
    a("beforeTransitionStart", (W, ie, pe) => {
      e.destroyed ||
        !e.autoplay.running ||
        (pe || !e.params.autoplay.disableOnInteraction ? H(!0, !0) : X());
    }),
    a("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          X();
          return;
        }
        (E = !0),
          (T = !1),
          (m = !1),
          (S = setTimeout(() => {
            (m = !0), (T = !0), H(!0);
          }, 200));
      }
    }),
    a("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !E)) {
        if (
          (clearTimeout(S),
          clearTimeout(b),
          e.params.autoplay.disableOnInteraction)
        ) {
          (T = !1), (E = !1);
          return;
        }
        T && e.params.cssMode && _(), (T = !1), (E = !1);
      }
    }),
    a("slideChange", () => {
      e.destroyed || !e.autoplay.running || (P = !0);
    }),
    Object.assign(e.autoplay, { start: o, stop: X, pause: H, resume: _ });
}
function pa(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let u = !1,
    f = !1;
  e.thumbs = { swiper: null };
  function b() {
    const x = e.thumbs.swiper;
    if (!x || x.destroyed) return;
    const g = x.clickedIndex,
      h = x.clickedSlide;
    if (
      (h && h.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
      typeof g > "u" ||
      g === null
    )
      return;
    let y;
    x.params.loop
      ? (y = parseInt(
          x.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        ))
      : (y = g),
      e.params.loop ? e.slideToLoop(y) : e.slideTo(y);
  }
  function w() {
    const { thumbs: x } = e.params;
    if (u) return !1;
    u = !0;
    const g = e.constructor;
    if (x.swiper instanceof g)
      (e.thumbs.swiper = x.swiper),
        Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        e.thumbs.swiper.update();
    else if (Qt(x.swiper)) {
      const h = Object.assign({}, x.swiper);
      Object.assign(h, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (e.thumbs.swiper = new g(h)),
        (f = !0);
    }
    return (
      e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
      e.thumbs.swiper.on("tap", b),
      !0
    );
  }
  function p(x) {
    const g = e.thumbs.swiper;
    if (!g || g.destroyed) return;
    const h =
      g.params.slidesPerView === "auto"
        ? g.slidesPerViewDynamic()
        : g.params.slidesPerView;
    let y = 1;
    const E = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 &&
        !e.params.centeredSlides &&
        (y = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (y = 1),
      (y = Math.floor(y)),
      g.slides.forEach((P) => P.classList.remove(E)),
      g.params.loop || (g.params.virtual && g.params.virtual.enabled))
    )
      for (let P = 0; P < y; P += 1)
        Oe(
          g.slidesEl,
          `[data-swiper-slide-index="${e.realIndex + P}"]`
        ).forEach((m) => {
          m.classList.add(E);
        });
    else
      for (let P = 0; P < y; P += 1)
        g.slides[e.realIndex + P] && g.slides[e.realIndex + P].classList.add(E);
    const T = e.params.thumbs.autoScrollOffset,
      S = T && !g.params.loop;
    if (e.realIndex !== g.realIndex || S) {
      const P = g.activeIndex;
      let m, A;
      if (g.params.loop) {
        const M = g.slides.filter(
          (O) => O.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
        )[0];
        (m = g.slides.indexOf(M)),
          (A = e.activeIndex > e.previousIndex ? "next" : "prev");
      } else (m = e.realIndex), (A = m > e.previousIndex ? "next" : "prev");
      S && (m += A === "next" ? T : -1 * T),
        g.visibleSlidesIndexes &&
          g.visibleSlidesIndexes.indexOf(m) < 0 &&
          (g.params.centeredSlides
            ? m > P
              ? (m = m - Math.floor(h / 2) + 1)
              : (m = m + Math.floor(h / 2) - 1)
            : m > P && g.params.slidesPerGroup,
          g.slideTo(m, x ? 0 : void 0));
    }
  }
  a("beforeInit", () => {
    const { thumbs: x } = e.params;
    if (!(!x || !x.swiper))
      if (typeof x.swiper == "string" || x.swiper instanceof HTMLElement) {
        const g = ke(),
          h = () => {
            const E =
              typeof x.swiper == "string"
                ? g.querySelector(x.swiper)
                : x.swiper;
            if (E && E.swiper) (x.swiper = E.swiper), w(), p(!0);
            else if (E) {
              const T = `${e.params.eventsPrefix}init`,
                S = (P) => {
                  (x.swiper = P.detail[0]),
                    E.removeEventListener(T, S),
                    w(),
                    p(!0),
                    x.swiper.update(),
                    e.update();
                };
              E.addEventListener(T, S);
            }
            return E;
          },
          y = () => {
            if (e.destroyed) return;
            h() || requestAnimationFrame(y);
          };
        requestAnimationFrame(y);
      } else w(), p(!0);
  }),
    a("slideChange update resize observerUpdate", () => {
      p();
    }),
    a("setTransition", (x, g) => {
      const h = e.thumbs.swiper;
      !h || h.destroyed || h.setTransition(g);
    }),
    a("beforeDestroy", () => {
      const x = e.thumbs.swiper;
      !x || x.destroyed || (f && x.destroy());
    }),
    Object.assign(e.thumbs, { init: w, update: p });
}
function ha(n) {
  let { swiper: e, extendParams: r, emit: a, once: u } = n;
  r({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function f() {
    if (e.params.cssMode) return;
    const p = e.getTranslate();
    e.setTranslate(p),
      e.setTransition(0),
      (e.touchEventsData.velocities.length = 0),
      e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function b() {
    if (e.params.cssMode) return;
    const { touchEventsData: p, touches: x } = e;
    p.velocities.length === 0 &&
      p.velocities.push({
        position: x[e.isHorizontal() ? "startX" : "startY"],
        time: p.touchStartTime,
      }),
      p.velocities.push({
        position: x[e.isHorizontal() ? "currentX" : "currentY"],
        time: Ye(),
      });
  }
  function w(p) {
    let { currentPos: x } = p;
    if (e.params.cssMode) return;
    const {
        params: g,
        wrapperEl: h,
        rtlTranslate: y,
        snapGrid: E,
        touchEventsData: T,
      } = e,
      P = Ye() - T.touchStartTime;
    if (x < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (x > -e.maxTranslate()) {
      e.slides.length < E.length
        ? e.slideTo(E.length - 1)
        : e.slideTo(e.slides.length - 1);
      return;
    }
    if (g.freeMode.momentum) {
      if (T.velocities.length > 1) {
        const X = T.velocities.pop(),
          H = T.velocities.pop(),
          _ = X.position - H.position,
          U = X.time - H.time;
        (e.velocity = _ / U),
          (e.velocity /= 2),
          Math.abs(e.velocity) < g.freeMode.minimumVelocity && (e.velocity = 0),
          (U > 150 || Ye() - X.time > 300) && (e.velocity = 0);
      } else e.velocity = 0;
      (e.velocity *= g.freeMode.momentumVelocityRatio),
        (T.velocities.length = 0);
      let m = 1e3 * g.freeMode.momentumRatio;
      const A = e.velocity * m;
      let M = e.translate + A;
      y && (M = -M);
      let O = !1,
        G;
      const Q = Math.abs(e.velocity) * 20 * g.freeMode.momentumBounceRatio;
      let o;
      if (M < e.maxTranslate())
        g.freeMode.momentumBounce
          ? (M + e.maxTranslate() < -Q && (M = e.maxTranslate() - Q),
            (G = e.maxTranslate()),
            (O = !0),
            (T.allowMomentumBounce = !0))
          : (M = e.maxTranslate()),
          g.loop && g.centeredSlides && (o = !0);
      else if (M > e.minTranslate())
        g.freeMode.momentumBounce
          ? (M - e.minTranslate() > Q && (M = e.minTranslate() + Q),
            (G = e.minTranslate()),
            (O = !0),
            (T.allowMomentumBounce = !0))
          : (M = e.minTranslate()),
          g.loop && g.centeredSlides && (o = !0);
      else if (g.freeMode.sticky) {
        let X;
        for (let H = 0; H < E.length; H += 1)
          if (E[H] > -M) {
            X = H;
            break;
          }
        Math.abs(E[X] - M) < Math.abs(E[X - 1] - M) ||
        e.swipeDirection === "next"
          ? (M = E[X])
          : (M = E[X - 1]),
          (M = -M);
      }
      if (
        (o &&
          u("transitionEnd", () => {
            e.loopFix();
          }),
        e.velocity !== 0)
      ) {
        if (
          (y
            ? (m = Math.abs((-M - e.translate) / e.velocity))
            : (m = Math.abs((M - e.translate) / e.velocity)),
          g.freeMode.sticky)
        ) {
          const X = Math.abs((y ? -M : M) - e.translate),
            H = e.slidesSizesGrid[e.activeIndex];
          X < H
            ? (m = g.speed)
            : X < 2 * H
              ? (m = g.speed * 1.5)
              : (m = g.speed * 2.5);
        }
      } else if (g.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      g.freeMode.momentumBounce && O
        ? (e.updateProgress(G),
          e.setTransition(m),
          e.setTranslate(M),
          e.transitionStart(!0, e.swipeDirection),
          (e.animating = !0),
          Jt(h, () => {
            !e ||
              e.destroyed ||
              !T.allowMomentumBounce ||
              (a("momentumBounce"),
              e.setTransition(g.speed),
              setTimeout(() => {
                e.setTranslate(G),
                  Jt(h, () => {
                    !e || e.destroyed || e.transitionEnd();
                  });
              }, 0));
          }))
        : e.velocity
          ? (a("_freeModeNoMomentumRelease"),
            e.updateProgress(M),
            e.setTransition(m),
            e.setTranslate(M),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              Jt(h, () => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(M),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    } else if (g.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else g.freeMode && a("_freeModeNoMomentumRelease");
    (!g.freeMode.momentum || P >= g.longSwipesMs) &&
      (a("_freeModeStaticRelease"),
      e.updateProgress(),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: { onTouchStart: f, onTouchMove: b, onTouchEnd: w },
  });
}
function ma(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({ grid: { rows: 1, fill: "column" } });
  let u, f, b, w;
  const p = () => {
      let S = e.params.spaceBetween;
      return (
        typeof S == "string" && S.indexOf("%") >= 0
          ? (S = (parseFloat(S.replace("%", "")) / 100) * e.size)
          : typeof S == "string" && (S = parseFloat(S)),
        S
      );
    },
    x = (S) => {
      const { slidesPerView: P } = e.params,
        { rows: m, fill: A } = e.params.grid,
        M =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : S.length;
      (b = Math.floor(M / m)),
        Math.floor(M / m) === M / m ? (u = M) : (u = Math.ceil(M / m) * m),
        P !== "auto" && A === "row" && (u = Math.max(u, P * m)),
        (f = u / m);
    },
    g = () => {
      e.slides &&
        e.slides.forEach((S) => {
          S.swiperSlideGridSet &&
            ((S.style.height = ""),
            (S.style[e.getDirectionLabel("margin-top")] = ""));
        });
    },
    h = (S, P, m) => {
      const { slidesPerGroup: A } = e.params,
        M = p(),
        { rows: O, fill: G } = e.params.grid,
        Q =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : m.length;
      let o, X, H;
      if (G === "row" && A > 1) {
        const _ = Math.floor(S / (A * O)),
          U = S - O * A * _,
          R = _ === 0 ? A : Math.min(Math.ceil((Q - _ * O * A) / O), A);
        (H = Math.floor(U / R)),
          (X = U - H * R + _ * A),
          (o = X + (H * u) / O),
          (P.style.order = o);
      } else
        G === "column"
          ? ((X = Math.floor(S / O)),
            (H = S - X * O),
            (X > b || (X === b && H === O - 1)) &&
              ((H += 1), H >= O && ((H = 0), (X += 1))))
          : ((H = Math.floor(S / f)), (X = S - H * f));
      (P.row = H),
        (P.column = X),
        (P.style.height = `calc((100% - ${(O - 1) * M}px) / ${O})`),
        (P.style[e.getDirectionLabel("margin-top")] =
          H !== 0 ? M && `${M}px` : ""),
        (P.swiperSlideGridSet = !0);
    },
    y = (S, P) => {
      const { centeredSlides: m, roundLengths: A } = e.params,
        M = p(),
        { rows: O } = e.params.grid;
      if (
        ((e.virtualSize = (S + M) * u),
        (e.virtualSize = Math.ceil(e.virtualSize / O) - M),
        e.params.cssMode ||
          (e.wrapperEl.style[e.getDirectionLabel("width")] =
            `${e.virtualSize + M}px`),
        m)
      ) {
        const G = [];
        for (let Q = 0; Q < P.length; Q += 1) {
          let o = P[Q];
          A && (o = Math.floor(o)), P[Q] < e.virtualSize + P[0] && G.push(o);
        }
        P.splice(0, P.length), P.push(...G);
      }
    },
    E = () => {
      w = e.params.grid && e.params.grid.rows > 1;
    },
    T = () => {
      const { params: S, el: P } = e,
        m = S.grid && S.grid.rows > 1;
      w && !m
        ? (P.classList.remove(
            `${S.containerModifierClass}grid`,
            `${S.containerModifierClass}grid-column`
          ),
          (b = 1),
          e.emitContainerClasses())
        : !w &&
          m &&
          (P.classList.add(`${S.containerModifierClass}grid`),
          S.grid.fill === "column" &&
            P.classList.add(`${S.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        (w = m);
    };
  a("init", E),
    a("update", T),
    (e.grid = {
      initSlides: x,
      unsetSlides: g,
      updateSlide: h,
      updateWrapperSize: y,
    });
}
function ga(n) {
  const e = this,
    { params: r, slidesEl: a } = e;
  r.loop && e.loopDestroy();
  const u = (f) => {
    if (typeof f == "string") {
      const b = document.createElement("div");
      (b.innerHTML = f), a.append(b.children[0]), (b.innerHTML = "");
    } else a.append(f);
  };
  if (typeof n == "object" && "length" in n)
    for (let f = 0; f < n.length; f += 1) n[f] && u(n[f]);
  else u(n);
  e.recalcSlides(),
    r.loop && e.loopCreate(),
    (!r.observer || e.isElement) && e.update();
}
function va(n) {
  const e = this,
    { params: r, activeIndex: a, slidesEl: u } = e;
  r.loop && e.loopDestroy();
  let f = a + 1;
  const b = (w) => {
    if (typeof w == "string") {
      const p = document.createElement("div");
      (p.innerHTML = w), u.prepend(p.children[0]), (p.innerHTML = "");
    } else u.prepend(w);
  };
  if (typeof n == "object" && "length" in n) {
    for (let w = 0; w < n.length; w += 1) n[w] && b(n[w]);
    f = a + n.length;
  } else b(n);
  e.recalcSlides(),
    r.loop && e.loopCreate(),
    (!r.observer || e.isElement) && e.update(),
    e.slideTo(f, 0, !1);
}
function ya(n, e) {
  const r = this,
    { params: a, activeIndex: u, slidesEl: f } = r;
  let b = u;
  a.loop && ((b -= r.loopedSlides), r.loopDestroy(), r.recalcSlides());
  const w = r.slides.length;
  if (n <= 0) {
    r.prependSlide(e);
    return;
  }
  if (n >= w) {
    r.appendSlide(e);
    return;
  }
  let p = b > n ? b + 1 : b;
  const x = [];
  for (let g = w - 1; g >= n; g -= 1) {
    const h = r.slides[g];
    h.remove(), x.unshift(h);
  }
  if (typeof e == "object" && "length" in e) {
    for (let g = 0; g < e.length; g += 1) e[g] && f.append(e[g]);
    p = b > n ? b + e.length : b;
  } else f.append(e);
  for (let g = 0; g < x.length; g += 1) f.append(x[g]);
  r.recalcSlides(),
    a.loop && r.loopCreate(),
    (!a.observer || r.isElement) && r.update(),
    a.loop ? r.slideTo(p + r.loopedSlides, 0, !1) : r.slideTo(p, 0, !1);
}
function wa(n) {
  const e = this,
    { params: r, activeIndex: a } = e;
  let u = a;
  r.loop && ((u -= e.loopedSlides), e.loopDestroy());
  let f = u,
    b;
  if (typeof n == "object" && "length" in n) {
    for (let w = 0; w < n.length; w += 1)
      (b = n[w]), e.slides[b] && e.slides[b].remove(), b < f && (f -= 1);
    f = Math.max(f, 0);
  } else
    (b = n),
      e.slides[b] && e.slides[b].remove(),
      b < f && (f -= 1),
      (f = Math.max(f, 0));
  e.recalcSlides(),
    r.loop && e.loopCreate(),
    (!r.observer || e.isElement) && e.update(),
    r.loop ? e.slideTo(f + e.loopedSlides, 0, !1) : e.slideTo(f, 0, !1);
}
function ba() {
  const n = this,
    e = [];
  for (let r = 0; r < n.slides.length; r += 1) e.push(r);
  n.removeSlide(e);
}
function xa(n) {
  let { swiper: e } = n;
  Object.assign(e, {
    appendSlide: ga.bind(e),
    prependSlide: va.bind(e),
    addSlide: ya.bind(e),
    removeSlide: wa.bind(e),
    removeAllSlides: ba.bind(e),
  });
}
function Ht(n) {
  const {
    effect: e,
    swiper: r,
    on: a,
    setTranslate: u,
    setTransition: f,
    overwriteParams: b,
    perspective: w,
    recreateShadows: p,
    getEffectParams: x,
  } = n;
  a("beforeInit", () => {
    if (r.params.effect !== e) return;
    r.classNames.push(`${r.params.containerModifierClass}${e}`),
      w && w() && r.classNames.push(`${r.params.containerModifierClass}3d`);
    const h = b ? b() : {};
    Object.assign(r.params, h), Object.assign(r.originalParams, h);
  }),
    a("setTranslate", () => {
      r.params.effect === e && u();
    }),
    a("setTransition", (h, y) => {
      r.params.effect === e && f(y);
    }),
    a("transitionEnd", () => {
      if (r.params.effect === e && p) {
        if (!x || !x().slideShadows) return;
        r.slides.forEach((h) => {
          h.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          ).forEach((y) => y.remove());
        }),
          p();
      }
    });
  let g;
  a("virtualUpdate", () => {
    r.params.effect === e &&
      (r.slides.length || (g = !0),
      requestAnimationFrame(() => {
        g && r.slides && r.slides.length && (u(), (g = !1));
      }));
  });
}
function ti(n, e) {
  const r = Pt(e);
  return (
    r !== e &&
      ((r.style.backfaceVisibility = "hidden"),
      (r.style["-webkit-backface-visibility"] = "hidden")),
    r
  );
}
function vi(n) {
  let { swiper: e, duration: r, transformElements: a, allSlides: u } = n;
  const { activeIndex: f } = e,
    b = (w) =>
      w.parentElement
        ? w.parentElement
        : e.slides.filter(
            (x) => x.shadowRoot && x.shadowRoot === w.parentNode
          )[0];
  if (e.params.virtualTranslate && r !== 0) {
    let w = !1,
      p;
    u
      ? (p = a)
      : (p = a.filter((x) => {
          const g = x.classList.contains("swiper-slide-transform") ? b(x) : x;
          return e.getSlideIndex(g) === f;
        })),
      p.forEach((x) => {
        Jt(x, () => {
          if (w || !e || e.destroyed) return;
          (w = !0), (e.animating = !1);
          const g = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          e.wrapperEl.dispatchEvent(g);
        });
      });
  }
}
function Sa(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({ fadeEffect: { crossFade: !1 } }),
    Ht({
      effect: "fade",
      swiper: e,
      on: a,
      setTranslate: () => {
        const { slides: b } = e,
          w = e.params.fadeEffect;
        for (let p = 0; p < b.length; p += 1) {
          const x = e.slides[p];
          let h = -x.swiperSlideOffset;
          e.params.virtualTranslate || (h -= e.translate);
          let y = 0;
          e.isHorizontal() || ((y = h), (h = 0));
          const E = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(x.progress), 0)
              : 1 + Math.min(Math.max(x.progress, -1), 0),
            T = ti(w, x);
          (T.style.opacity = E),
            (T.style.transform = `translate3d(${h}px, ${y}px, 0px)`);
        }
      },
      setTransition: (b) => {
        const w = e.slides.map((p) => Pt(p));
        w.forEach((p) => {
          p.style.transitionDuration = `${b}ms`;
        }),
          vi({ swiper: e, duration: b, transformElements: w, allSlides: !0 });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
}
function Ta(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  });
  const u = (p, x, g) => {
    let h = g
        ? p.querySelector(".swiper-slide-shadow-left")
        : p.querySelector(".swiper-slide-shadow-top"),
      y = g
        ? p.querySelector(".swiper-slide-shadow-right")
        : p.querySelector(".swiper-slide-shadow-bottom");
    h ||
      ((h = _e(
        "div",
        `swiper-slide-shadow-cube swiper-slide-shadow-${g ? "left" : "top"}`.split(
          " "
        )
      )),
      p.append(h)),
      y ||
        ((y = _e(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${g ? "right" : "bottom"}`.split(
            " "
          )
        )),
        p.append(y)),
      h && (h.style.opacity = Math.max(-x, 0)),
      y && (y.style.opacity = Math.max(x, 0));
  };
  Ht({
    effect: "cube",
    swiper: e,
    on: a,
    setTranslate: () => {
      const {
          el: p,
          wrapperEl: x,
          slides: g,
          width: h,
          height: y,
          rtlTranslate: E,
          size: T,
          browser: S,
        } = e,
        P = gi(e),
        m = e.params.cubeEffect,
        A = e.isHorizontal(),
        M = e.virtual && e.params.virtual.enabled;
      let O = 0,
        G;
      m.shadow &&
        (A
          ? ((G = e.wrapperEl.querySelector(".swiper-cube-shadow")),
            G || ((G = _e("div", "swiper-cube-shadow")), e.wrapperEl.append(G)),
            (G.style.height = `${h}px`))
          : ((G = p.querySelector(".swiper-cube-shadow")),
            G || ((G = _e("div", "swiper-cube-shadow")), p.append(G))));
      for (let o = 0; o < g.length; o += 1) {
        const X = g[o];
        let H = o;
        M && (H = parseInt(X.getAttribute("data-swiper-slide-index"), 10));
        let _ = H * 90,
          U = Math.floor(_ / 360);
        E && ((_ = -_), (U = Math.floor(-_ / 360)));
        const R = Math.max(Math.min(X.progress, 1), -1);
        let z = 0,
          q = 0,
          K = 0;
        H % 4 === 0
          ? ((z = -U * 4 * T), (K = 0))
          : (H - 1) % 4 === 0
            ? ((z = 0), (K = -U * 4 * T))
            : (H - 2) % 4 === 0
              ? ((z = T + U * 4 * T), (K = T))
              : (H - 3) % 4 === 0 && ((z = -T), (K = 3 * T + T * 4 * U)),
          E && (z = -z),
          A || ((q = z), (z = 0));
        const ae = `rotateX(${P(A ? 0 : -_)}deg) rotateY(${P(A ? _ : 0)}deg) translate3d(${z}px, ${q}px, ${K}px)`;
        R <= 1 &&
          R > -1 &&
          ((O = H * 90 + R * 90), E && (O = -H * 90 - R * 90)),
          (X.style.transform = ae),
          m.slideShadows && u(X, R, A);
      }
      if (
        ((x.style.transformOrigin = `50% 50% -${T / 2}px`),
        (x.style["-webkit-transform-origin"] = `50% 50% -${T / 2}px`),
        m.shadow)
      )
        if (A)
          G.style.transform = `translate3d(0px, ${h / 2 + m.shadowOffset}px, ${-h / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${m.shadowScale})`;
        else {
          const o = Math.abs(O) - Math.floor(Math.abs(O) / 90) * 90,
            X =
              1.5 -
              (Math.sin((o * 2 * Math.PI) / 360) / 2 +
                Math.cos((o * 2 * Math.PI) / 360) / 2),
            H = m.shadowScale,
            _ = m.shadowScale / X,
            U = m.shadowOffset;
          G.style.transform = `scale3d(${H}, 1, ${_}) translate3d(0px, ${y / 2 + U}px, ${-y / 2 / _}px) rotateX(-89.99deg)`;
        }
      const Q =
        (S.isSafari || S.isWebView) && S.needPerspectiveFix ? -T / 2 : 0;
      (x.style.transform = `translate3d(0px,0,${Q}px) rotateX(${P(e.isHorizontal() ? 0 : O)}deg) rotateY(${P(e.isHorizontal() ? -O : 0)}deg)`),
        x.style.setProperty("--swiper-cube-translate-z", `${Q}px`);
    },
    setTransition: (p) => {
      const { el: x, slides: g } = e;
      if (
        (g.forEach((h) => {
          (h.style.transitionDuration = `${p}ms`),
            h
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((y) => {
                y.style.transitionDuration = `${p}ms`;
              });
        }),
        e.params.cubeEffect.shadow && !e.isHorizontal())
      ) {
        const h = x.querySelector(".swiper-cube-shadow");
        h && (h.style.transitionDuration = `${p}ms`);
      }
    },
    recreateShadows: () => {
      const p = e.isHorizontal();
      e.slides.forEach((x) => {
        const g = Math.max(Math.min(x.progress, 1), -1);
        u(x, g, p);
      });
    },
    getEffectParams: () => e.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0,
    }),
  });
}
function Nt(n, e, r) {
  const a = `swiper-slide-shadow${r ? `-${r}` : ""}${n ? ` swiper-slide-shadow-${n}` : ""}`,
    u = Pt(e);
  let f = u.querySelector(`.${a.split(" ").join(".")}`);
  return f || ((f = _e("div", a.split(" "))), u.append(f)), f;
}
function Ea(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
  const u = (p, x) => {
    let g = e.isHorizontal()
        ? p.querySelector(".swiper-slide-shadow-left")
        : p.querySelector(".swiper-slide-shadow-top"),
      h = e.isHorizontal()
        ? p.querySelector(".swiper-slide-shadow-right")
        : p.querySelector(".swiper-slide-shadow-bottom");
    g || (g = Nt("flip", p, e.isHorizontal() ? "left" : "top")),
      h || (h = Nt("flip", p, e.isHorizontal() ? "right" : "bottom")),
      g && (g.style.opacity = Math.max(-x, 0)),
      h && (h.style.opacity = Math.max(x, 0));
  };
  Ht({
    effect: "flip",
    swiper: e,
    on: a,
    setTranslate: () => {
      const { slides: p, rtlTranslate: x } = e,
        g = e.params.flipEffect,
        h = gi(e);
      for (let y = 0; y < p.length; y += 1) {
        const E = p[y];
        let T = E.progress;
        e.params.flipEffect.limitRotation &&
          (T = Math.max(Math.min(E.progress, 1), -1));
        const S = E.swiperSlideOffset;
        let m = -180 * T,
          A = 0,
          M = e.params.cssMode ? -S - e.translate : -S,
          O = 0;
        e.isHorizontal()
          ? x && (m = -m)
          : ((O = M), (M = 0), (A = -m), (m = 0)),
          (E.style.zIndex = -Math.abs(Math.round(T)) + p.length),
          g.slideShadows && u(E, T);
        const G = `translate3d(${M}px, ${O}px, 0px) rotateX(${h(A)}deg) rotateY(${h(m)}deg)`,
          Q = ti(g, E);
        Q.style.transform = G;
      }
    },
    setTransition: (p) => {
      const x = e.slides.map((g) => Pt(g));
      x.forEach((g) => {
        (g.style.transitionDuration = `${p}ms`),
          g
            .querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .forEach((h) => {
              h.style.transitionDuration = `${p}ms`;
            });
      }),
        vi({ swiper: e, duration: p, transformElements: x });
    },
    recreateShadows: () => {
      e.params.flipEffect,
        e.slides.forEach((p) => {
          let x = p.progress;
          e.params.flipEffect.limitRotation &&
            (x = Math.max(Math.min(p.progress, 1), -1)),
            u(p, x);
        });
    },
    getEffectParams: () => e.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode,
    }),
  });
}
function Ca(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
    },
  }),
    Ht({
      effect: "coverflow",
      swiper: e,
      on: a,
      setTranslate: () => {
        const { width: b, height: w, slides: p, slidesSizesGrid: x } = e,
          g = e.params.coverflowEffect,
          h = e.isHorizontal(),
          y = e.translate,
          E = h ? -y + b / 2 : -y + w / 2,
          T = h ? g.rotate : -g.rotate,
          S = g.depth,
          P = gi(e);
        for (let m = 0, A = p.length; m < A; m += 1) {
          const M = p[m],
            O = x[m],
            G = M.swiperSlideOffset,
            Q = (E - G - O / 2) / O,
            o =
              typeof g.modifier == "function" ? g.modifier(Q) : Q * g.modifier;
          let X = h ? T * o : 0,
            H = h ? 0 : T * o,
            _ = -S * Math.abs(o),
            U = g.stretch;
          typeof U == "string" &&
            U.indexOf("%") !== -1 &&
            (U = (parseFloat(g.stretch) / 100) * O);
          let R = h ? 0 : U * o,
            z = h ? U * o : 0,
            q = 1 - (1 - g.scale) * Math.abs(o);
          Math.abs(z) < 0.001 && (z = 0),
            Math.abs(R) < 0.001 && (R = 0),
            Math.abs(_) < 0.001 && (_ = 0),
            Math.abs(X) < 0.001 && (X = 0),
            Math.abs(H) < 0.001 && (H = 0),
            Math.abs(q) < 0.001 && (q = 0);
          const K = `translate3d(${z}px,${R}px,${_}px)  rotateX(${P(H)}deg) rotateY(${P(X)}deg) scale(${q})`,
            ae = ti(g, M);
          if (
            ((ae.style.transform = K),
            (M.style.zIndex = -Math.abs(Math.round(o)) + 1),
            g.slideShadows)
          ) {
            let B = h
                ? M.querySelector(".swiper-slide-shadow-left")
                : M.querySelector(".swiper-slide-shadow-top"),
              W = h
                ? M.querySelector(".swiper-slide-shadow-right")
                : M.querySelector(".swiper-slide-shadow-bottom");
            B || (B = Nt("coverflow", M, h ? "left" : "top")),
              W || (W = Nt("coverflow", M, h ? "right" : "bottom")),
              B && (B.style.opacity = o > 0 ? o : 0),
              W && (W.style.opacity = -o > 0 ? -o : 0);
          }
        }
      },
      setTransition: (b) => {
        e.slides
          .map((p) => Pt(p))
          .forEach((p) => {
            (p.style.transitionDuration = `${b}ms`),
              p
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((x) => {
                  x.style.transitionDuration = `${b}ms`;
                });
          });
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    });
}
function Ma(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
      next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
    },
  });
  const u = (w) => (typeof w == "string" ? w : `${w}px`);
  Ht({
    effect: "creative",
    swiper: e,
    on: a,
    setTranslate: () => {
      const { slides: w, wrapperEl: p, slidesSizesGrid: x } = e,
        g = e.params.creativeEffect,
        { progressMultiplier: h } = g,
        y = e.params.centeredSlides,
        E = gi(e);
      if (y) {
        const T = x[0] / 2 - e.params.slidesOffsetBefore || 0;
        p.style.transform = `translateX(calc(50% - ${T}px))`;
      }
      for (let T = 0; T < w.length; T += 1) {
        const S = w[T],
          P = S.progress,
          m = Math.min(Math.max(S.progress, -g.limitProgress), g.limitProgress);
        let A = m;
        y ||
          (A = Math.min(
            Math.max(S.originalProgress, -g.limitProgress),
            g.limitProgress
          ));
        const M = S.swiperSlideOffset,
          O = [e.params.cssMode ? -M - e.translate : -M, 0, 0],
          G = [0, 0, 0];
        let Q = !1;
        e.isHorizontal() || ((O[1] = O[0]), (O[0] = 0));
        let o = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1,
        };
        m < 0 ? ((o = g.next), (Q = !0)) : m > 0 && ((o = g.prev), (Q = !0)),
          O.forEach((q, K) => {
            O[K] = `calc(${q}px + (${u(o.translate[K])} * ${Math.abs(m * h)}))`;
          }),
          G.forEach((q, K) => {
            let ae = o.rotate[K] * Math.abs(m * h);
            G[K] = ae;
          }),
          (S.style.zIndex = -Math.abs(Math.round(P)) + w.length);
        const X = O.join(", "),
          H = `rotateX(${E(G[0])}deg) rotateY(${E(G[1])}deg) rotateZ(${E(G[2])}deg)`,
          _ =
            A < 0
              ? `scale(${1 + (1 - o.scale) * A * h})`
              : `scale(${1 - (1 - o.scale) * A * h})`,
          U = A < 0 ? 1 + (1 - o.opacity) * A * h : 1 - (1 - o.opacity) * A * h,
          R = `translate3d(${X}) ${H} ${_}`;
        if ((Q && o.shadow) || !Q) {
          let q = S.querySelector(".swiper-slide-shadow");
          if ((!q && o.shadow && (q = Nt("creative", S)), q)) {
            const K = g.shadowPerProgress ? m * (1 / g.limitProgress) : m;
            q.style.opacity = Math.min(Math.max(Math.abs(K), 0), 1);
          }
        }
        const z = ti(g, S);
        (z.style.transform = R),
          (z.style.opacity = U),
          o.origin && (z.style.transformOrigin = o.origin);
      }
    },
    setTransition: (w) => {
      const p = e.slides.map((x) => Pt(x));
      p.forEach((x) => {
        (x.style.transitionDuration = `${w}ms`),
          x.querySelectorAll(".swiper-slide-shadow").forEach((g) => {
            g.style.transitionDuration = `${w}ms`;
          });
      }),
        vi({ swiper: e, duration: w, transformElements: p, allSlides: !0 });
    },
    perspective: () => e.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode,
    }),
  });
}
function Pa(n) {
  let { swiper: e, extendParams: r, on: a } = n;
  r({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8,
    },
  }),
    Ht({
      effect: "cards",
      swiper: e,
      on: a,
      setTranslate: () => {
        const { slides: b, activeIndex: w, rtlTranslate: p } = e,
          x = e.params.cardsEffect,
          { startTranslate: g, isTouched: h } = e.touchEventsData,
          y = p ? -e.translate : e.translate;
        for (let E = 0; E < b.length; E += 1) {
          const T = b[E],
            S = T.progress,
            P = Math.min(Math.max(S, -4), 4);
          let m = T.swiperSlideOffset;
          e.params.centeredSlides &&
            !e.params.cssMode &&
            (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
            e.params.centeredSlides &&
              e.params.cssMode &&
              (m -= b[0].swiperSlideOffset);
          let A = e.params.cssMode ? -m - e.translate : -m,
            M = 0;
          const O = -100 * Math.abs(P);
          let G = 1,
            Q = -x.perSlideRotate * P,
            o = x.perSlideOffset - Math.abs(P) * 0.75;
          const X =
              e.virtual && e.params.virtual.enabled ? e.virtual.from + E : E,
            H =
              (X === w || X === w - 1) &&
              P > 0 &&
              P < 1 &&
              (h || e.params.cssMode) &&
              y < g,
            _ =
              (X === w || X === w + 1) &&
              P < 0 &&
              P > -1 &&
              (h || e.params.cssMode) &&
              y > g;
          if (H || _) {
            const q = (1 - Math.abs((Math.abs(P) - 0.5) / 0.5)) ** 0.5;
            (Q += -28 * P * q),
              (G += -0.5 * q),
              (o += 96 * q),
              (M = `${-25 * q * Math.abs(P)}%`);
          }
          if (
            (P < 0
              ? (A = `calc(${A}px ${p ? "-" : "+"} (${o * Math.abs(P)}%))`)
              : P > 0
                ? (A = `calc(${A}px ${p ? "-" : "+"} (-${o * Math.abs(P)}%))`)
                : (A = `${A}px`),
            !e.isHorizontal())
          ) {
            const q = M;
            (M = A), (A = q);
          }
          const U = P < 0 ? `${1 + (1 - G) * P}` : `${1 - (1 - G) * P}`,
            R = `
        translate3d(${A}, ${M}, ${O}px)
        rotateZ(${x.rotate ? (p ? -Q : Q) : 0}deg)
        scale(${U})
      `;
          if (x.slideShadows) {
            let q = T.querySelector(".swiper-slide-shadow");
            q || (q = Nt("cards", T)),
              q &&
                (q.style.opacity = Math.min(
                  Math.max((Math.abs(P) - 0.5) / 0.5, 0),
                  1
                ));
          }
          T.style.zIndex = -Math.abs(Math.round(S)) + b.length;
          const z = ti(x, T);
          z.style.transform = R;
        }
      },
      setTransition: (b) => {
        const w = e.slides.map((p) => Pt(p));
        w.forEach((p) => {
          (p.style.transitionDuration = `${b}ms`),
            p.querySelectorAll(".swiper-slide-shadow").forEach((x) => {
              x.style.transitionDuration = `${b}ms`;
            });
        }),
          vi({ swiper: e, duration: b, transformElements: w });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
}
const La = [
  ea,
  ta,
  ia,
  ra,
  na,
  sa,
  aa,
  oa,
  la,
  fa,
  ua,
  da,
  ca,
  pa,
  ha,
  ma,
  xa,
  Sa,
  Ta,
  Ea,
  Ca,
  Ma,
  Pa,
];
Fe.use(La);
var Aa =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Ia(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Gr = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function (n) {
  (function (e, r) {
    n.exports = e.document
      ? r(e, !0)
      : function (a) {
          if (!a.document)
            throw new Error("jQuery requires a window with a document");
          return r(a);
        };
  })(typeof window < "u" ? window : Aa, function (e, r) {
    var a = [],
      u = Object.getPrototypeOf,
      f = a.slice,
      b = a.flat
        ? function (t) {
            return a.flat.call(t);
          }
        : function (t) {
            return a.concat.apply([], t);
          },
      w = a.push,
      p = a.indexOf,
      x = {},
      g = x.toString,
      h = x.hasOwnProperty,
      y = h.toString,
      E = y.call(Object),
      T = {},
      S = function (i) {
        return (
          typeof i == "function" &&
          typeof i.nodeType != "number" &&
          typeof i.item != "function"
        );
      },
      P = function (i) {
        return i != null && i === i.window;
      },
      m = e.document,
      A = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function M(t, i, s) {
      s = s || m;
      var l,
        d,
        c = s.createElement("script");
      if (((c.text = t), i))
        for (l in A)
          (d = i[l] || (i.getAttribute && i.getAttribute(l))),
            d && c.setAttribute(l, d);
      s.head.appendChild(c).parentNode.removeChild(c);
    }
    function O(t) {
      return t == null
        ? t + ""
        : typeof t == "object" || typeof t == "function"
          ? x[g.call(t)] || "object"
          : typeof t;
    }
    var G = "3.7.1",
      Q = /HTML$/i,
      o = function (t, i) {
        return new o.fn.init(t, i);
      };
    (o.fn = o.prototype =
      {
        jquery: G,
        constructor: o,
        length: 0,
        toArray: function () {
          return f.call(this);
        },
        get: function (t) {
          return t == null
            ? f.call(this)
            : t < 0
              ? this[t + this.length]
              : this[t];
        },
        pushStack: function (t) {
          var i = o.merge(this.constructor(), t);
          return (i.prevObject = this), i;
        },
        each: function (t) {
          return o.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            o.map(this, function (i, s) {
              return t.call(i, s, i);
            })
          );
        },
        slice: function () {
          return this.pushStack(f.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            o.grep(this, function (t, i) {
              return (i + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            o.grep(this, function (t, i) {
              return i % 2;
            })
          );
        },
        eq: function (t) {
          var i = this.length,
            s = +t + (t < 0 ? i : 0);
          return this.pushStack(s >= 0 && s < i ? [this[s]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: w,
        sort: a.sort,
        splice: a.splice,
      }),
      (o.extend = o.fn.extend =
        function () {
          var t,
            i,
            s,
            l,
            d,
            c,
            v = arguments[0] || {},
            I = 1,
            L = arguments.length,
            k = !1;
          for (
            typeof v == "boolean" && ((k = v), (v = arguments[I] || {}), I++),
              typeof v != "object" && !S(v) && (v = {}),
              I === L && ((v = this), I--);
            I < L;
            I++
          )
            if ((t = arguments[I]) != null)
              for (i in t)
                (l = t[i]),
                  !(i === "__proto__" || v === l) &&
                    (k && l && (o.isPlainObject(l) || (d = Array.isArray(l)))
                      ? ((s = v[i]),
                        d && !Array.isArray(s)
                          ? (c = [])
                          : !d && !o.isPlainObject(s)
                            ? (c = {})
                            : (c = s),
                        (d = !1),
                        (v[i] = o.extend(k, c, l)))
                      : l !== void 0 && (v[i] = l));
          return v;
        }),
      o.extend({
        expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isPlainObject: function (t) {
          var i, s;
          return !t || g.call(t) !== "[object Object]"
            ? !1
            : ((i = u(t)),
              i
                ? ((s = h.call(i, "constructor") && i.constructor),
                  typeof s == "function" && y.call(s) === E)
                : !0);
        },
        isEmptyObject: function (t) {
          var i;
          for (i in t) return !1;
          return !0;
        },
        globalEval: function (t, i, s) {
          M(t, { nonce: i && i.nonce }, s);
        },
        each: function (t, i) {
          var s,
            l = 0;
          if (X(t))
            for (s = t.length; l < s && i.call(t[l], l, t[l]) !== !1; l++);
          else for (l in t) if (i.call(t[l], l, t[l]) === !1) break;
          return t;
        },
        text: function (t) {
          var i,
            s = "",
            l = 0,
            d = t.nodeType;
          if (!d) for (; (i = t[l++]); ) s += o.text(i);
          return d === 1 || d === 11
            ? t.textContent
            : d === 9
              ? t.documentElement.textContent
              : d === 3 || d === 4
                ? t.nodeValue
                : s;
        },
        makeArray: function (t, i) {
          var s = i || [];
          return (
            t != null &&
              (X(Object(t))
                ? o.merge(s, typeof t == "string" ? [t] : t)
                : w.call(s, t)),
            s
          );
        },
        inArray: function (t, i, s) {
          return i == null ? -1 : p.call(i, t, s);
        },
        isXMLDoc: function (t) {
          var i = t && t.namespaceURI,
            s = t && (t.ownerDocument || t).documentElement;
          return !Q.test(i || (s && s.nodeName) || "HTML");
        },
        merge: function (t, i) {
          for (var s = +i.length, l = 0, d = t.length; l < s; l++)
            t[d++] = i[l];
          return (t.length = d), t;
        },
        grep: function (t, i, s) {
          for (var l, d = [], c = 0, v = t.length, I = !s; c < v; c++)
            (l = !i(t[c], c)), l !== I && d.push(t[c]);
          return d;
        },
        map: function (t, i, s) {
          var l,
            d,
            c = 0,
            v = [];
          if (X(t))
            for (l = t.length; c < l; c++)
              (d = i(t[c], c, s)), d != null && v.push(d);
          else for (c in t) (d = i(t[c], c, s)), d != null && v.push(d);
          return b(v);
        },
        guid: 1,
        support: T,
      }),
      typeof Symbol == "function" &&
        (o.fn[Symbol.iterator] = a[Symbol.iterator]),
      o.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (t, i) {
          x["[object " + i + "]"] = i.toLowerCase();
        }
      );
    function X(t) {
      var i = !!t && "length" in t && t.length,
        s = O(t);
      return S(t) || P(t)
        ? !1
        : s === "array" ||
            i === 0 ||
            (typeof i == "number" && i > 0 && i - 1 in t);
    }
    function H(t, i) {
      return t.nodeName && t.nodeName.toLowerCase() === i.toLowerCase();
    }
    var _ = a.pop,
      U = a.sort,
      R = a.splice,
      z = "[\\x20\\t\\r\\n\\f]",
      q = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g");
    o.contains = function (t, i) {
      var s = i && i.parentNode;
      return (
        t === s ||
        !!(
          s &&
          s.nodeType === 1 &&
          (t.contains
            ? t.contains(s)
            : t.compareDocumentPosition && t.compareDocumentPosition(s) & 16)
        )
      );
    };
    var K = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function ae(t, i) {
      return i
        ? t === "\0"
          ? "�"
          : t.slice(0, -1) +
            "\\" +
            t.charCodeAt(t.length - 1).toString(16) +
            " "
        : "\\" + t;
    }
    o.escapeSelector = function (t) {
      return (t + "").replace(K, ae);
    };
    var B = m,
      W = w;
    (function () {
      var t,
        i,
        s,
        l,
        d,
        c = W,
        v,
        I,
        L,
        k,
        F,
        Y = o.expando,
        N = 0,
        J = 0,
        ce = li(),
        be = li(),
        me = li(),
        De = li(),
        Ae = function (C, D) {
          return C === D && (d = !0), 0;
        },
        Ze =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        Je =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          z +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        we =
          "\\[" +
          z +
          "*(" +
          Je +
          ")(?:" +
          z +
          "*([*^$|!~]?=)" +
          z +
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
          Je +
          "))|)" +
          z +
          "*\\]",
        Tt =
          ":(" +
          Je +
          `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
          we +
          ")*)|.*)\\)|)",
        xe = new RegExp(z + "+", "g"),
        Me = new RegExp("^" + z + "*," + z + "*"),
        Yt = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
        Oi = new RegExp(z + "|>"),
        et = new RegExp(Tt),
        Ut = new RegExp("^" + Je + "$"),
        tt = {
          ID: new RegExp("^#(" + Je + ")"),
          CLASS: new RegExp("^\\.(" + Je + ")"),
          TAG: new RegExp("^(" + Je + "|[*])"),
          ATTR: new RegExp("^" + we),
          PSEUDO: new RegExp("^" + Tt),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              z +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              z +
              "*(?:([+-]|)" +
              z +
              "*(\\d+)|))" +
              z +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + Ze + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              z +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              z +
              "*((?:-\\d)?\\d*)" +
              z +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        pt = /^(?:input|select|textarea|button)$/i,
        ht = /^h\d$/i,
        Xe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ki = /[+~]/,
        ot = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        lt = function (C, D) {
          var $ = "0x" + C.slice(1) - 65536;
          return (
            D ||
            ($ < 0
              ? String.fromCharCode($ + 65536)
              : String.fromCharCode(($ >> 10) | 55296, ($ & 1023) | 56320))
          );
        },
        In = function () {
          mt();
        },
        Dn = ui(
          function (C) {
            return C.disabled === !0 && H(C, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
      function On() {
        try {
          return v.activeElement;
        } catch {}
      }
      try {
        c.apply((a = f.call(B.childNodes)), B.childNodes),
          a[B.childNodes.length].nodeType;
      } catch {
        c = {
          apply: function (D, $) {
            W.apply(D, f.call($));
          },
          call: function (D) {
            W.apply(D, f.call(arguments, 1));
          },
        };
      }
      function Te(C, D, $, j) {
        var V,
          ee,
          re,
          oe,
          ne,
          ge,
          de,
          he = D && D.ownerDocument,
          ve = D ? D.nodeType : 9;
        if (
          (($ = $ || []),
          typeof C != "string" || !C || (ve !== 1 && ve !== 9 && ve !== 11))
        )
          return $;
        if (!j && (mt(D), (D = D || v), L)) {
          if (ve !== 11 && (ne = Xe.exec(C)))
            if ((V = ne[1])) {
              if (ve === 9)
                if ((re = D.getElementById(V))) {
                  if (re.id === V) return c.call($, re), $;
                } else return $;
              else if (
                he &&
                (re = he.getElementById(V)) &&
                Te.contains(D, re) &&
                re.id === V
              )
                return c.call($, re), $;
            } else {
              if (ne[2]) return c.apply($, D.getElementsByTagName(C)), $;
              if ((V = ne[3]) && D.getElementsByClassName)
                return c.apply($, D.getElementsByClassName(V)), $;
            }
          if (!De[C + " "] && (!k || !k.test(C))) {
            if (((de = C), (he = D), ve === 1 && (Oi.test(C) || Yt.test(C)))) {
              for (
                he = (ki.test(C) && zi(D.parentNode)) || D,
                  (he != D || !T.scope) &&
                    ((oe = D.getAttribute("id"))
                      ? (oe = o.escapeSelector(oe))
                      : D.setAttribute("id", (oe = Y))),
                  ge = Kt(C),
                  ee = ge.length;
                ee--;

              )
                ge[ee] = (oe ? "#" + oe : ":scope") + " " + fi(ge[ee]);
              de = ge.join(",");
            }
            try {
              return c.apply($, he.querySelectorAll(de)), $;
            } catch {
              De(C, !0);
            } finally {
              oe === Y && D.removeAttribute("id");
            }
          }
        }
        return Ir(C.replace(q, "$1"), D, $, j);
      }
      function li() {
        var C = [];
        function D($, j) {
          return (
            C.push($ + " ") > i.cacheLength && delete D[C.shift()],
            (D[$ + " "] = j)
          );
        }
        return D;
      }
      function Qe(C) {
        return (C[Y] = !0), C;
      }
      function zt(C) {
        var D = v.createElement("fieldset");
        try {
          return !!C(D);
        } catch {
          return !1;
        } finally {
          D.parentNode && D.parentNode.removeChild(D), (D = null);
        }
      }
      function kn(C) {
        return function (D) {
          return H(D, "input") && D.type === C;
        };
      }
      function zn(C) {
        return function (D) {
          return (H(D, "input") || H(D, "button")) && D.type === C;
        };
      }
      function Lr(C) {
        return function (D) {
          return "form" in D
            ? D.parentNode && D.disabled === !1
              ? "label" in D
                ? "label" in D.parentNode
                  ? D.parentNode.disabled === C
                  : D.disabled === C
                : D.isDisabled === C || (D.isDisabled !== !C && Dn(D) === C)
              : D.disabled === C
            : "label" in D
              ? D.disabled === C
              : !1;
        };
      }
      function Et(C) {
        return Qe(function (D) {
          return (
            (D = +D),
            Qe(function ($, j) {
              for (var V, ee = C([], $.length, D), re = ee.length; re--; )
                $[(V = ee[re])] && ($[V] = !(j[V] = $[V]));
            })
          );
        });
      }
      function zi(C) {
        return C && typeof C.getElementsByTagName < "u" && C;
      }
      function mt(C) {
        var D,
          $ = C ? C.ownerDocument || C : B;
        return (
          $ == v ||
            $.nodeType !== 9 ||
            !$.documentElement ||
            ((v = $),
            (I = v.documentElement),
            (L = !o.isXMLDoc(v)),
            (F = I.matches || I.webkitMatchesSelector || I.msMatchesSelector),
            I.msMatchesSelector &&
              B != v &&
              (D = v.defaultView) &&
              D.top !== D &&
              D.addEventListener("unload", In),
            (T.getById = zt(function (j) {
              return (
                (I.appendChild(j).id = o.expando),
                !v.getElementsByName || !v.getElementsByName(o.expando).length
              );
            })),
            (T.disconnectedMatch = zt(function (j) {
              return F.call(j, "*");
            })),
            (T.scope = zt(function () {
              return v.querySelectorAll(":scope");
            })),
            (T.cssHas = zt(function () {
              try {
                return v.querySelector(":has(*,:jqfake)"), !1;
              } catch {
                return !0;
              }
            })),
            T.getById
              ? ((i.filter.ID = function (j) {
                  var V = j.replace(ot, lt);
                  return function (ee) {
                    return ee.getAttribute("id") === V;
                  };
                }),
                (i.find.ID = function (j, V) {
                  if (typeof V.getElementById < "u" && L) {
                    var ee = V.getElementById(j);
                    return ee ? [ee] : [];
                  }
                }))
              : ((i.filter.ID = function (j) {
                  var V = j.replace(ot, lt);
                  return function (ee) {
                    var re =
                      typeof ee.getAttributeNode < "u" &&
                      ee.getAttributeNode("id");
                    return re && re.value === V;
                  };
                }),
                (i.find.ID = function (j, V) {
                  if (typeof V.getElementById < "u" && L) {
                    var ee,
                      re,
                      oe,
                      ne = V.getElementById(j);
                    if (ne) {
                      if (
                        ((ee = ne.getAttributeNode("id")), ee && ee.value === j)
                      )
                        return [ne];
                      for (
                        oe = V.getElementsByName(j), re = 0;
                        (ne = oe[re++]);

                      )
                        if (
                          ((ee = ne.getAttributeNode("id")),
                          ee && ee.value === j)
                        )
                          return [ne];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = function (j, V) {
              return typeof V.getElementsByTagName < "u"
                ? V.getElementsByTagName(j)
                : V.querySelectorAll(j);
            }),
            (i.find.CLASS = function (j, V) {
              if (typeof V.getElementsByClassName < "u" && L)
                return V.getElementsByClassName(j);
            }),
            (k = []),
            zt(function (j) {
              var V;
              (I.appendChild(j).innerHTML =
                "<a id='" +
                Y +
                "' href='' disabled='disabled'></a><select id='" +
                Y +
                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                j.querySelectorAll("[selected]").length ||
                  k.push("\\[" + z + "*(?:value|" + Ze + ")"),
                j.querySelectorAll("[id~=" + Y + "-]").length || k.push("~="),
                j.querySelectorAll("a#" + Y + "+*").length ||
                  k.push(".#.+[+~]"),
                j.querySelectorAll(":checked").length || k.push(":checked"),
                (V = v.createElement("input")),
                V.setAttribute("type", "hidden"),
                j.appendChild(V).setAttribute("name", "D"),
                (I.appendChild(j).disabled = !0),
                j.querySelectorAll(":disabled").length !== 2 &&
                  k.push(":enabled", ":disabled"),
                (V = v.createElement("input")),
                V.setAttribute("name", ""),
                j.appendChild(V),
                j.querySelectorAll("[name='']").length ||
                  k.push("\\[" + z + "*name" + z + "*=" + z + `*(?:''|"")`);
            }),
            T.cssHas || k.push(":has"),
            (k = k.length && new RegExp(k.join("|"))),
            (Ae = function (j, V) {
              if (j === V) return (d = !0), 0;
              var ee = !j.compareDocumentPosition - !V.compareDocumentPosition;
              return (
                ee ||
                ((ee =
                  (j.ownerDocument || j) == (V.ownerDocument || V)
                    ? j.compareDocumentPosition(V)
                    : 1),
                ee & 1 ||
                (!T.sortDetached && V.compareDocumentPosition(j) === ee)
                  ? j === v || (j.ownerDocument == B && Te.contains(B, j))
                    ? -1
                    : V === v || (V.ownerDocument == B && Te.contains(B, V))
                      ? 1
                      : l
                        ? p.call(l, j) - p.call(l, V)
                        : 0
                  : ee & 4
                    ? -1
                    : 1)
              );
            })),
          v
        );
      }
      (Te.matches = function (C, D) {
        return Te(C, null, null, D);
      }),
        (Te.matchesSelector = function (C, D) {
          if ((mt(C), L && !De[D + " "] && (!k || !k.test(D))))
            try {
              var $ = F.call(C, D);
              if (
                $ ||
                T.disconnectedMatch ||
                (C.document && C.document.nodeType !== 11)
              )
                return $;
            } catch {
              De(D, !0);
            }
          return Te(D, v, null, [C]).length > 0;
        }),
        (Te.contains = function (C, D) {
          return (C.ownerDocument || C) != v && mt(C), o.contains(C, D);
        }),
        (Te.attr = function (C, D) {
          (C.ownerDocument || C) != v && mt(C);
          var $ = i.attrHandle[D.toLowerCase()],
            j =
              $ && h.call(i.attrHandle, D.toLowerCase()) ? $(C, D, !L) : void 0;
          return j !== void 0 ? j : C.getAttribute(D);
        }),
        (Te.error = function (C) {
          throw new Error("Syntax error, unrecognized expression: " + C);
        }),
        (o.uniqueSort = function (C) {
          var D,
            $ = [],
            j = 0,
            V = 0;
          if (
            ((d = !T.sortStable),
            (l = !T.sortStable && f.call(C, 0)),
            U.call(C, Ae),
            d)
          ) {
            for (; (D = C[V++]); ) D === C[V] && (j = $.push(V));
            for (; j--; ) R.call(C, $[j], 1);
          }
          return (l = null), C;
        }),
        (o.fn.uniqueSort = function () {
          return this.pushStack(o.uniqueSort(f.apply(this)));
        }),
        (i = o.expr =
          {
            cacheLength: 50,
            createPseudo: Qe,
            match: tt,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (C) {
                return (
                  (C[1] = C[1].replace(ot, lt)),
                  (C[3] = (C[3] || C[4] || C[5] || "").replace(ot, lt)),
                  C[2] === "~=" && (C[3] = " " + C[3] + " "),
                  C.slice(0, 4)
                );
              },
              CHILD: function (C) {
                return (
                  (C[1] = C[1].toLowerCase()),
                  C[1].slice(0, 3) === "nth"
                    ? (C[3] || Te.error(C[0]),
                      (C[4] = +(C[4]
                        ? C[5] + (C[6] || 1)
                        : 2 * (C[3] === "even" || C[3] === "odd"))),
                      (C[5] = +(C[7] + C[8] || C[3] === "odd")))
                    : C[3] && Te.error(C[0]),
                  C
                );
              },
              PSEUDO: function (C) {
                var D,
                  $ = !C[6] && C[2];
                return tt.CHILD.test(C[0])
                  ? null
                  : (C[3]
                      ? (C[2] = C[4] || C[5] || "")
                      : $ &&
                        et.test($) &&
                        (D = Kt($, !0)) &&
                        (D = $.indexOf(")", $.length - D) - $.length) &&
                        ((C[0] = C[0].slice(0, D)), (C[2] = $.slice(0, D))),
                    C.slice(0, 3));
              },
            },
            filter: {
              TAG: function (C) {
                var D = C.replace(ot, lt).toLowerCase();
                return C === "*"
                  ? function () {
                      return !0;
                    }
                  : function ($) {
                      return H($, D);
                    };
              },
              CLASS: function (C) {
                var D = ce[C + " "];
                return (
                  D ||
                  ((D = new RegExp("(^|" + z + ")" + C + "(" + z + "|$)")) &&
                    ce(C, function ($) {
                      return D.test(
                        (typeof $.className == "string" && $.className) ||
                          (typeof $.getAttribute < "u" &&
                            $.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (C, D, $) {
                return function (j) {
                  var V = Te.attr(j, C);
                  return V == null
                    ? D === "!="
                    : D
                      ? ((V += ""),
                        D === "="
                          ? V === $
                          : D === "!="
                            ? V !== $
                            : D === "^="
                              ? $ && V.indexOf($) === 0
                              : D === "*="
                                ? $ && V.indexOf($) > -1
                                : D === "$="
                                  ? $ && V.slice(-$.length) === $
                                  : D === "~="
                                    ? (" " + V.replace(xe, " ") + " ").indexOf(
                                        $
                                      ) > -1
                                    : D === "|="
                                      ? V === $ ||
                                        V.slice(0, $.length + 1) === $ + "-"
                                      : !1)
                      : !0;
                };
              },
              CHILD: function (C, D, $, j, V) {
                var ee = C.slice(0, 3) !== "nth",
                  re = C.slice(-4) !== "last",
                  oe = D === "of-type";
                return j === 1 && V === 0
                  ? function (ne) {
                      return !!ne.parentNode;
                    }
                  : function (ne, ge, de) {
                      var he,
                        ve,
                        ue,
                        Ce,
                        qe,
                        $e = ee !== re ? "nextSibling" : "previousSibling",
                        Ve = ne.parentNode,
                        it = oe && ne.nodeName.toLowerCase(),
                        $t = !de && !oe,
                        Ne = !1;
                      if (Ve) {
                        if (ee) {
                          for (; $e; ) {
                            for (ue = ne; (ue = ue[$e]); )
                              if (oe ? H(ue, it) : ue.nodeType === 1) return !1;
                            qe = $e = C === "only" && !qe && "nextSibling";
                          }
                          return !0;
                        }
                        if (
                          ((qe = [re ? Ve.firstChild : Ve.lastChild]), re && $t)
                        ) {
                          for (
                            ve = Ve[Y] || (Ve[Y] = {}),
                              he = ve[C] || [],
                              Ce = he[0] === N && he[1],
                              Ne = Ce && he[2],
                              ue = Ce && Ve.childNodes[Ce];
                            (ue =
                              (++Ce && ue && ue[$e]) ||
                              (Ne = Ce = 0) ||
                              qe.pop());

                          )
                            if (ue.nodeType === 1 && ++Ne && ue === ne) {
                              ve[C] = [N, Ce, Ne];
                              break;
                            }
                        } else if (
                          ($t &&
                            ((ve = ne[Y] || (ne[Y] = {})),
                            (he = ve[C] || []),
                            (Ce = he[0] === N && he[1]),
                            (Ne = Ce)),
                          Ne === !1)
                        )
                          for (
                            ;
                            (ue =
                              (++Ce && ue && ue[$e]) ||
                              (Ne = Ce = 0) ||
                              qe.pop()) &&
                            !(
                              (oe ? H(ue, it) : ue.nodeType === 1) &&
                              ++Ne &&
                              ($t &&
                                ((ve = ue[Y] || (ue[Y] = {})),
                                (ve[C] = [N, Ne])),
                              ue === ne)
                            );

                          );
                        return (
                          (Ne -= V), Ne === j || (Ne % j === 0 && Ne / j >= 0)
                        );
                      }
                    };
              },
              PSEUDO: function (C, D) {
                var $,
                  j =
                    i.pseudos[C] ||
                    i.setFilters[C.toLowerCase()] ||
                    Te.error("unsupported pseudo: " + C);
                return j[Y]
                  ? j(D)
                  : j.length > 1
                    ? (($ = [C, C, "", D]),
                      i.setFilters.hasOwnProperty(C.toLowerCase())
                        ? Qe(function (V, ee) {
                            for (var re, oe = j(V, D), ne = oe.length; ne--; )
                              (re = p.call(V, oe[ne])),
                                (V[re] = !(ee[re] = oe[ne]));
                          })
                        : function (V) {
                            return j(V, 0, $);
                          })
                    : j;
              },
            },
            pseudos: {
              not: Qe(function (C) {
                var D = [],
                  $ = [],
                  j = ji(C.replace(q, "$1"));
                return j[Y]
                  ? Qe(function (V, ee, re, oe) {
                      for (
                        var ne, ge = j(V, null, oe, []), de = V.length;
                        de--;

                      )
                        (ne = ge[de]) && (V[de] = !(ee[de] = ne));
                    })
                  : function (V, ee, re) {
                      return (
                        (D[0] = V), j(D, null, re, $), (D[0] = null), !$.pop()
                      );
                    };
              }),
              has: Qe(function (C) {
                return function (D) {
                  return Te(C, D).length > 0;
                };
              }),
              contains: Qe(function (C) {
                return (
                  (C = C.replace(ot, lt)),
                  function (D) {
                    return (D.textContent || o.text(D)).indexOf(C) > -1;
                  }
                );
              }),
              lang: Qe(function (C) {
                return (
                  Ut.test(C || "") || Te.error("unsupported lang: " + C),
                  (C = C.replace(ot, lt).toLowerCase()),
                  function (D) {
                    var $;
                    do
                      if (
                        ($ = L
                          ? D.lang
                          : D.getAttribute("xml:lang") ||
                            D.getAttribute("lang"))
                      )
                        return (
                          ($ = $.toLowerCase()),
                          $ === C || $.indexOf(C + "-") === 0
                        );
                    while ((D = D.parentNode) && D.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target: function (C) {
                var D = e.location && e.location.hash;
                return D && D.slice(1) === C.id;
              },
              root: function (C) {
                return C === I;
              },
              focus: function (C) {
                return (
                  C === On() &&
                  v.hasFocus() &&
                  !!(C.type || C.href || ~C.tabIndex)
                );
              },
              enabled: Lr(!1),
              disabled: Lr(!0),
              checked: function (C) {
                return (
                  (H(C, "input") && !!C.checked) ||
                  (H(C, "option") && !!C.selected)
                );
              },
              selected: function (C) {
                return (
                  C.parentNode && C.parentNode.selectedIndex, C.selected === !0
                );
              },
              empty: function (C) {
                for (C = C.firstChild; C; C = C.nextSibling)
                  if (C.nodeType < 6) return !1;
                return !0;
              },
              parent: function (C) {
                return !i.pseudos.empty(C);
              },
              header: function (C) {
                return ht.test(C.nodeName);
              },
              input: function (C) {
                return pt.test(C.nodeName);
              },
              button: function (C) {
                return (H(C, "input") && C.type === "button") || H(C, "button");
              },
              text: function (C) {
                var D;
                return (
                  H(C, "input") &&
                  C.type === "text" &&
                  ((D = C.getAttribute("type")) == null ||
                    D.toLowerCase() === "text")
                );
              },
              first: Et(function () {
                return [0];
              }),
              last: Et(function (C, D) {
                return [D - 1];
              }),
              eq: Et(function (C, D, $) {
                return [$ < 0 ? $ + D : $];
              }),
              even: Et(function (C, D) {
                for (var $ = 0; $ < D; $ += 2) C.push($);
                return C;
              }),
              odd: Et(function (C, D) {
                for (var $ = 1; $ < D; $ += 2) C.push($);
                return C;
              }),
              lt: Et(function (C, D, $) {
                var j;
                for (
                  $ < 0 ? (j = $ + D) : $ > D ? (j = D) : (j = $);
                  --j >= 0;

                )
                  C.push(j);
                return C;
              }),
              gt: Et(function (C, D, $) {
                for (var j = $ < 0 ? $ + D : $; ++j < D; ) C.push(j);
                return C;
              }),
            },
          }),
        (i.pseudos.nth = i.pseudos.eq);
      for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        i.pseudos[t] = kn(t);
      for (t in { submit: !0, reset: !0 }) i.pseudos[t] = zn(t);
      function Ar() {}
      (Ar.prototype = i.filters = i.pseudos), (i.setFilters = new Ar());
      function Kt(C, D) {
        var $,
          j,
          V,
          ee,
          re,
          oe,
          ne,
          ge = be[C + " "];
        if (ge) return D ? 0 : ge.slice(0);
        for (re = C, oe = [], ne = i.preFilter; re; ) {
          (!$ || (j = Me.exec(re))) &&
            (j && (re = re.slice(j[0].length) || re), oe.push((V = []))),
            ($ = !1),
            (j = Yt.exec(re)) &&
              (($ = j.shift()),
              V.push({ value: $, type: j[0].replace(q, " ") }),
              (re = re.slice($.length)));
          for (ee in i.filter)
            (j = tt[ee].exec(re)) &&
              (!ne[ee] || (j = ne[ee](j))) &&
              (($ = j.shift()),
              V.push({ value: $, type: ee, matches: j }),
              (re = re.slice($.length)));
          if (!$) break;
        }
        return D ? re.length : re ? Te.error(C) : be(C, oe).slice(0);
      }
      function fi(C) {
        for (var D = 0, $ = C.length, j = ""; D < $; D++) j += C[D].value;
        return j;
      }
      function ui(C, D, $) {
        var j = D.dir,
          V = D.next,
          ee = V || j,
          re = $ && ee === "parentNode",
          oe = J++;
        return D.first
          ? function (ne, ge, de) {
              for (; (ne = ne[j]); )
                if (ne.nodeType === 1 || re) return C(ne, ge, de);
              return !1;
            }
          : function (ne, ge, de) {
              var he,
                ve,
                ue = [N, oe];
              if (de) {
                for (; (ne = ne[j]); )
                  if ((ne.nodeType === 1 || re) && C(ne, ge, de)) return !0;
              } else
                for (; (ne = ne[j]); )
                  if (ne.nodeType === 1 || re)
                    if (((ve = ne[Y] || (ne[Y] = {})), V && H(ne, V)))
                      ne = ne[j] || ne;
                    else {
                      if ((he = ve[ee]) && he[0] === N && he[1] === oe)
                        return (ue[2] = he[2]);
                      if (((ve[ee] = ue), (ue[2] = C(ne, ge, de)))) return !0;
                    }
              return !1;
            };
      }
      function $i(C) {
        return C.length > 1
          ? function (D, $, j) {
              for (var V = C.length; V--; ) if (!C[V](D, $, j)) return !1;
              return !0;
            }
          : C[0];
      }
      function $n(C, D, $) {
        for (var j = 0, V = D.length; j < V; j++) Te(C, D[j], $);
        return $;
      }
      function di(C, D, $, j, V) {
        for (
          var ee, re = [], oe = 0, ne = C.length, ge = D != null;
          oe < ne;
          oe++
        )
          (ee = C[oe]) &&
            (!$ || $(ee, j, V)) &&
            (re.push(ee), ge && D.push(oe));
        return re;
      }
      function Ni(C, D, $, j, V, ee) {
        return (
          j && !j[Y] && (j = Ni(j)),
          V && !V[Y] && (V = Ni(V, ee)),
          Qe(function (re, oe, ne, ge) {
            var de,
              he,
              ve,
              ue,
              Ce = [],
              qe = [],
              $e = oe.length,
              Ve = re || $n(D || "*", ne.nodeType ? [ne] : ne, []),
              it = C && (re || !D) ? di(Ve, Ce, C, ne, ge) : Ve;
            if (
              ($
                ? ((ue = V || (re ? C : $e || j) ? [] : oe), $(it, ue, ne, ge))
                : (ue = it),
              j)
            )
              for (de = di(ue, qe), j(de, [], ne, ge), he = de.length; he--; )
                (ve = de[he]) && (ue[qe[he]] = !(it[qe[he]] = ve));
            if (re) {
              if (V || C) {
                if (V) {
                  for (de = [], he = ue.length; he--; )
                    (ve = ue[he]) && de.push((it[he] = ve));
                  V(null, (ue = []), de, ge);
                }
                for (he = ue.length; he--; )
                  (ve = ue[he]) &&
                    (de = V ? p.call(re, ve) : Ce[he]) > -1 &&
                    (re[de] = !(oe[de] = ve));
              }
            } else
              (ue = di(ue === oe ? ue.splice($e, ue.length) : ue)),
                V ? V(null, oe, ue, ge) : c.apply(oe, ue);
          })
        );
      }
      function Hi(C) {
        for (
          var D,
            $,
            j,
            V = C.length,
            ee = i.relative[C[0].type],
            re = ee || i.relative[" "],
            oe = ee ? 1 : 0,
            ne = ui(
              function (he) {
                return he === D;
              },
              re,
              !0
            ),
            ge = ui(
              function (he) {
                return p.call(D, he) > -1;
              },
              re,
              !0
            ),
            de = [
              function (he, ve, ue) {
                var Ce =
                  (!ee && (ue || ve != s)) ||
                  ((D = ve).nodeType ? ne(he, ve, ue) : ge(he, ve, ue));
                return (D = null), Ce;
              },
            ];
          oe < V;
          oe++
        )
          if (($ = i.relative[C[oe].type])) de = [ui($i(de), $)];
          else {
            if ((($ = i.filter[C[oe].type].apply(null, C[oe].matches)), $[Y])) {
              for (j = ++oe; j < V && !i.relative[C[j].type]; j++);
              return Ni(
                oe > 1 && $i(de),
                oe > 1 &&
                  fi(
                    C.slice(0, oe - 1).concat({
                      value: C[oe - 2].type === " " ? "*" : "",
                    })
                  ).replace(q, "$1"),
                $,
                oe < j && Hi(C.slice(oe, j)),
                j < V && Hi((C = C.slice(j))),
                j < V && fi(C)
              );
            }
            de.push($);
          }
        return $i(de);
      }
      function Nn(C, D) {
        var $ = D.length > 0,
          j = C.length > 0,
          V = function (ee, re, oe, ne, ge) {
            var de,
              he,
              ve,
              ue = 0,
              Ce = "0",
              qe = ee && [],
              $e = [],
              Ve = s,
              it = ee || (j && i.find.TAG("*", ge)),
              $t = (N += Ve == null ? 1 : Math.random() || 0.1),
              Ne = it.length;
            for (
              ge && (s = re == v || re || ge);
              Ce !== Ne && (de = it[Ce]) != null;
              Ce++
            ) {
              if (j && de) {
                for (
                  he = 0, !re && de.ownerDocument != v && (mt(de), (oe = !L));
                  (ve = C[he++]);

                )
                  if (ve(de, re || v, oe)) {
                    c.call(ne, de);
                    break;
                  }
                ge && (N = $t);
              }
              $ && ((de = !ve && de) && ue--, ee && qe.push(de));
            }
            if (((ue += Ce), $ && Ce !== ue)) {
              for (he = 0; (ve = D[he++]); ) ve(qe, $e, re, oe);
              if (ee) {
                if (ue > 0)
                  for (; Ce--; ) qe[Ce] || $e[Ce] || ($e[Ce] = _.call(ne));
                $e = di($e);
              }
              c.apply(ne, $e),
                ge &&
                  !ee &&
                  $e.length > 0 &&
                  ue + D.length > 1 &&
                  o.uniqueSort(ne);
            }
            return ge && ((N = $t), (s = Ve)), qe;
          };
        return $ ? Qe(V) : V;
      }
      function ji(C, D) {
        var $,
          j = [],
          V = [],
          ee = me[C + " "];
        if (!ee) {
          for (D || (D = Kt(C)), $ = D.length; $--; )
            (ee = Hi(D[$])), ee[Y] ? j.push(ee) : V.push(ee);
          (ee = me(C, Nn(V, j))), (ee.selector = C);
        }
        return ee;
      }
      function Ir(C, D, $, j) {
        var V,
          ee,
          re,
          oe,
          ne,
          ge = typeof C == "function" && C,
          de = !j && Kt((C = ge.selector || C));
        if ((($ = $ || []), de.length === 1)) {
          if (
            ((ee = de[0] = de[0].slice(0)),
            ee.length > 2 &&
              (re = ee[0]).type === "ID" &&
              D.nodeType === 9 &&
              L &&
              i.relative[ee[1].type])
          ) {
            if (
              ((D = (i.find.ID(re.matches[0].replace(ot, lt), D) || [])[0]), D)
            )
              ge && (D = D.parentNode);
            else return $;
            C = C.slice(ee.shift().value.length);
          }
          for (
            V = tt.needsContext.test(C) ? 0 : ee.length;
            V-- && ((re = ee[V]), !i.relative[(oe = re.type)]);

          )
            if (
              (ne = i.find[oe]) &&
              (j = ne(
                re.matches[0].replace(ot, lt),
                (ki.test(ee[0].type) && zi(D.parentNode)) || D
              ))
            ) {
              if ((ee.splice(V, 1), (C = j.length && fi(ee)), !C))
                return c.apply($, j), $;
              break;
            }
        }
        return (
          (ge || ji(C, de))(
            j,
            D,
            !L,
            $,
            !D || (ki.test(C) && zi(D.parentNode)) || D
          ),
          $
        );
      }
      (T.sortStable = Y.split("").sort(Ae).join("") === Y),
        mt(),
        (T.sortDetached = zt(function (C) {
          return C.compareDocumentPosition(v.createElement("fieldset")) & 1;
        })),
        (o.find = Te),
        (o.expr[":"] = o.expr.pseudos),
        (o.unique = o.uniqueSort),
        (Te.compile = ji),
        (Te.select = Ir),
        (Te.setDocument = mt),
        (Te.tokenize = Kt),
        (Te.escape = o.escapeSelector),
        (Te.getText = o.text),
        (Te.isXML = o.isXMLDoc),
        (Te.selectors = o.expr),
        (Te.support = o.support),
        (Te.uniqueSort = o.uniqueSort);
    })();
    var ie = function (t, i, s) {
        for (var l = [], d = s !== void 0; (t = t[i]) && t.nodeType !== 9; )
          if (t.nodeType === 1) {
            if (d && o(t).is(s)) break;
            l.push(t);
          }
        return l;
      },
      pe = function (t, i) {
        for (var s = []; t; t = t.nextSibling)
          t.nodeType === 1 && t !== i && s.push(t);
        return s;
      },
      Z = o.expr.match.needsContext,
      te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function se(t, i, s) {
      return S(i)
        ? o.grep(t, function (l, d) {
            return !!i.call(l, d, l) !== s;
          })
        : i.nodeType
          ? o.grep(t, function (l) {
              return (l === i) !== s;
            })
          : typeof i != "string"
            ? o.grep(t, function (l) {
                return p.call(i, l) > -1 !== s;
              })
            : o.filter(i, t, s);
    }
    (o.filter = function (t, i, s) {
      var l = i[0];
      return (
        s && (t = ":not(" + t + ")"),
        i.length === 1 && l.nodeType === 1
          ? o.find.matchesSelector(l, t)
            ? [l]
            : []
          : o.find.matches(
              t,
              o.grep(i, function (d) {
                return d.nodeType === 1;
              })
            )
      );
    }),
      o.fn.extend({
        find: function (t) {
          var i,
            s,
            l = this.length,
            d = this;
          if (typeof t != "string")
            return this.pushStack(
              o(t).filter(function () {
                for (i = 0; i < l; i++) if (o.contains(d[i], this)) return !0;
              })
            );
          for (s = this.pushStack([]), i = 0; i < l; i++) o.find(t, d[i], s);
          return l > 1 ? o.uniqueSort(s) : s;
        },
        filter: function (t) {
          return this.pushStack(se(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(se(this, t || [], !0));
        },
        is: function (t) {
          return !!se(
            this,
            typeof t == "string" && Z.test(t) ? o(t) : t || [],
            !1
          ).length;
        },
      });
    var Ee,
      le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      Se = (o.fn.init = function (t, i, s) {
        var l, d;
        if (!t) return this;
        if (((s = s || Ee), typeof t == "string"))
          if (
            (t[0] === "<" && t[t.length - 1] === ">" && t.length >= 3
              ? (l = [null, t, null])
              : (l = le.exec(t)),
            l && (l[1] || !i))
          )
            if (l[1]) {
              if (
                ((i = i instanceof o ? i[0] : i),
                o.merge(
                  this,
                  o.parseHTML(
                    l[1],
                    i && i.nodeType ? i.ownerDocument || i : m,
                    !0
                  )
                ),
                te.test(l[1]) && o.isPlainObject(i))
              )
                for (l in i) S(this[l]) ? this[l](i[l]) : this.attr(l, i[l]);
              return this;
            } else
              return (
                (d = m.getElementById(l[2])),
                d && ((this[0] = d), (this.length = 1)),
                this
              );
          else
            return !i || i.jquery
              ? (i || s).find(t)
              : this.constructor(i).find(t);
        else {
          if (t.nodeType) return (this[0] = t), (this.length = 1), this;
          if (S(t)) return s.ready !== void 0 ? s.ready(t) : t(o);
        }
        return o.makeArray(t, this);
      });
    (Se.prototype = o.fn), (Ee = o(m));
    var Ie = /^(?:parents|prev(?:Until|All))/,
      ut = { children: !0, contents: !0, next: !0, prev: !0 };
    o.fn.extend({
      has: function (t) {
        var i = o(t, this),
          s = i.length;
        return this.filter(function () {
          for (var l = 0; l < s; l++) if (o.contains(this, i[l])) return !0;
        });
      },
      closest: function (t, i) {
        var s,
          l = 0,
          d = this.length,
          c = [],
          v = typeof t != "string" && o(t);
        if (!Z.test(t)) {
          for (; l < d; l++)
            for (s = this[l]; s && s !== i; s = s.parentNode)
              if (
                s.nodeType < 11 &&
                (v
                  ? v.index(s) > -1
                  : s.nodeType === 1 && o.find.matchesSelector(s, t))
              ) {
                c.push(s);
                break;
              }
        }
        return this.pushStack(c.length > 1 ? o.uniqueSort(c) : c);
      },
      index: function (t) {
        return t
          ? typeof t == "string"
            ? p.call(o(t), this[0])
            : p.call(this, t.jquery ? t[0] : t)
          : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
      },
      add: function (t, i) {
        return this.pushStack(o.uniqueSort(o.merge(this.get(), o(t, i))));
      },
      addBack: function (t) {
        return this.add(
          t == null ? this.prevObject : this.prevObject.filter(t)
        );
      },
    });
    function yt(t, i) {
      for (; (t = t[i]) && t.nodeType !== 1; );
      return t;
    }
    o.each(
      {
        parent: function (t) {
          var i = t.parentNode;
          return i && i.nodeType !== 11 ? i : null;
        },
        parents: function (t) {
          return ie(t, "parentNode");
        },
        parentsUntil: function (t, i, s) {
          return ie(t, "parentNode", s);
        },
        next: function (t) {
          return yt(t, "nextSibling");
        },
        prev: function (t) {
          return yt(t, "previousSibling");
        },
        nextAll: function (t) {
          return ie(t, "nextSibling");
        },
        prevAll: function (t) {
          return ie(t, "previousSibling");
        },
        nextUntil: function (t, i, s) {
          return ie(t, "nextSibling", s);
        },
        prevUntil: function (t, i, s) {
          return ie(t, "previousSibling", s);
        },
        siblings: function (t) {
          return pe((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return pe(t.firstChild);
        },
        contents: function (t) {
          return t.contentDocument != null && u(t.contentDocument)
            ? t.contentDocument
            : (H(t, "template") && (t = t.content || t),
              o.merge([], t.childNodes));
        },
      },
      function (t, i) {
        o.fn[t] = function (s, l) {
          var d = o.map(this, i, s);
          return (
            t.slice(-5) !== "Until" && (l = s),
            l && typeof l == "string" && (d = o.filter(l, d)),
            this.length > 1 &&
              (ut[t] || o.uniqueSort(d), Ie.test(t) && d.reverse()),
            this.pushStack(d)
          );
        };
      }
    );
    var Le = /[^\x20\t\r\n\f]+/g;
    function rt(t) {
      var i = {};
      return (
        o.each(t.match(Le) || [], function (s, l) {
          i[l] = !0;
        }),
        i
      );
    }
    o.Callbacks = function (t) {
      t = typeof t == "string" ? rt(t) : o.extend({}, t);
      var i,
        s,
        l,
        d,
        c = [],
        v = [],
        I = -1,
        L = function () {
          for (d = d || t.once, l = i = !0; v.length; I = -1)
            for (s = v.shift(); ++I < c.length; )
              c[I].apply(s[0], s[1]) === !1 &&
                t.stopOnFalse &&
                ((I = c.length), (s = !1));
          t.memory || (s = !1), (i = !1), d && (s ? (c = []) : (c = ""));
        },
        k = {
          add: function () {
            return (
              c &&
                (s && !i && ((I = c.length - 1), v.push(s)),
                (function F(Y) {
                  o.each(Y, function (N, J) {
                    S(J)
                      ? (!t.unique || !k.has(J)) && c.push(J)
                      : J && J.length && O(J) !== "string" && F(J);
                  });
                })(arguments),
                s && !i && L()),
              this
            );
          },
          remove: function () {
            return (
              o.each(arguments, function (F, Y) {
                for (var N; (N = o.inArray(Y, c, N)) > -1; )
                  c.splice(N, 1), N <= I && I--;
              }),
              this
            );
          },
          has: function (F) {
            return F ? o.inArray(F, c) > -1 : c.length > 0;
          },
          empty: function () {
            return c && (c = []), this;
          },
          disable: function () {
            return (d = v = []), (c = s = ""), this;
          },
          disabled: function () {
            return !c;
          },
          lock: function () {
            return (d = v = []), !s && !i && (c = s = ""), this;
          },
          locked: function () {
            return !!d;
          },
          fireWith: function (F, Y) {
            return (
              d ||
                ((Y = Y || []),
                (Y = [F, Y.slice ? Y.slice() : Y]),
                v.push(Y),
                i || L()),
              this
            );
          },
          fire: function () {
            return k.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!l;
          },
        };
      return k;
    };
    function nt(t) {
      return t;
    }
    function wt(t) {
      throw t;
    }
    function jt(t, i, s, l) {
      var d;
      try {
        t && S((d = t.promise))
          ? d.call(t).done(i).fail(s)
          : t && S((d = t.then))
            ? d.call(t, i, s)
            : i.apply(void 0, [t].slice(l));
      } catch (c) {
        s.apply(void 0, [c]);
      }
    }
    o.extend({
      Deferred: function (t) {
        var i = [
            [
              "notify",
              "progress",
              o.Callbacks("memory"),
              o.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              o.Callbacks("once memory"),
              o.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              o.Callbacks("once memory"),
              o.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          s = "pending",
          l = {
            state: function () {
              return s;
            },
            always: function () {
              return d.done(arguments).fail(arguments), this;
            },
            catch: function (c) {
              return l.then(null, c);
            },
            pipe: function () {
              var c = arguments;
              return o
                .Deferred(function (v) {
                  o.each(i, function (I, L) {
                    var k = S(c[L[4]]) && c[L[4]];
                    d[L[1]](function () {
                      var F = k && k.apply(this, arguments);
                      F && S(F.promise)
                        ? F.promise()
                            .progress(v.notify)
                            .done(v.resolve)
                            .fail(v.reject)
                        : v[L[0] + "With"](this, k ? [F] : arguments);
                    });
                  }),
                    (c = null);
                })
                .promise();
            },
            then: function (c, v, I) {
              var L = 0;
              function k(F, Y, N, J) {
                return function () {
                  var ce = this,
                    be = arguments,
                    me = function () {
                      var Ae, Ze;
                      if (!(F < L)) {
                        if (((Ae = N.apply(ce, be)), Ae === Y.promise()))
                          throw new TypeError("Thenable self-resolution");
                        (Ze =
                          Ae &&
                          (typeof Ae == "object" || typeof Ae == "function") &&
                          Ae.then),
                          S(Ze)
                            ? J
                              ? Ze.call(Ae, k(L, Y, nt, J), k(L, Y, wt, J))
                              : (L++,
                                Ze.call(
                                  Ae,
                                  k(L, Y, nt, J),
                                  k(L, Y, wt, J),
                                  k(L, Y, nt, Y.notifyWith)
                                ))
                            : (N !== nt && ((ce = void 0), (be = [Ae])),
                              (J || Y.resolveWith)(ce, be));
                      }
                    },
                    De = J
                      ? me
                      : function () {
                          try {
                            me();
                          } catch (Ae) {
                            o.Deferred.exceptionHook &&
                              o.Deferred.exceptionHook(Ae, De.error),
                              F + 1 >= L &&
                                (N !== wt && ((ce = void 0), (be = [Ae])),
                                Y.rejectWith(ce, be));
                          }
                        };
                  F
                    ? De()
                    : (o.Deferred.getErrorHook
                        ? (De.error = o.Deferred.getErrorHook())
                        : o.Deferred.getStackHook &&
                          (De.error = o.Deferred.getStackHook()),
                      e.setTimeout(De));
                };
              }
              return o
                .Deferred(function (F) {
                  i[0][3].add(k(0, F, S(I) ? I : nt, F.notifyWith)),
                    i[1][3].add(k(0, F, S(c) ? c : nt)),
                    i[2][3].add(k(0, F, S(v) ? v : wt));
                })
                .promise();
            },
            promise: function (c) {
              return c != null ? o.extend(c, l) : l;
            },
          },
          d = {};
        return (
          o.each(i, function (c, v) {
            var I = v[2],
              L = v[5];
            (l[v[1]] = I.add),
              L &&
                I.add(
                  function () {
                    s = L;
                  },
                  i[3 - c][2].disable,
                  i[3 - c][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              I.add(v[3].fire),
              (d[v[0]] = function () {
                return (
                  d[v[0] + "With"](this === d ? void 0 : this, arguments), this
                );
              }),
              (d[v[0] + "With"] = I.fireWith);
          }),
          l.promise(d),
          t && t.call(d, d),
          d
        );
      },
      when: function (t) {
        var i = arguments.length,
          s = i,
          l = Array(s),
          d = f.call(arguments),
          c = o.Deferred(),
          v = function (I) {
            return function (L) {
              (l[I] = this),
                (d[I] = arguments.length > 1 ? f.call(arguments) : L),
                --i || c.resolveWith(l, d);
            };
          };
        if (
          i <= 1 &&
          (jt(t, c.done(v(s)).resolve, c.reject, !i),
          c.state() === "pending" || S(d[s] && d[s].then))
        )
          return c.then();
        for (; s--; ) jt(d[s], v(s), c.reject);
        return c.promise();
      },
    });
    var ii = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (o.Deferred.exceptionHook = function (t, i) {
      e.console &&
        e.console.warn &&
        t &&
        ii.test(t.name) &&
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
    }),
      (o.readyException = function (t) {
        e.setTimeout(function () {
          throw t;
        });
      });
    var dt = o.Deferred();
    (o.fn.ready = function (t) {
      return (
        dt.then(t).catch(function (i) {
          o.readyException(i);
        }),
        this
      );
    }),
      o.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
          (t === !0 ? --o.readyWait : o.isReady) ||
            ((o.isReady = !0),
            !(t !== !0 && --o.readyWait > 0) && dt.resolveWith(m, [o]));
        },
      }),
      (o.ready.then = dt.then);
    function st() {
      m.removeEventListener("DOMContentLoaded", st),
        e.removeEventListener("load", st),
        o.ready();
    }
    m.readyState === "complete" ||
    (m.readyState !== "loading" && !m.documentElement.doScroll)
      ? e.setTimeout(o.ready)
      : (m.addEventListener("DOMContentLoaded", st),
        e.addEventListener("load", st));
    var Be = function (t, i, s, l, d, c, v) {
        var I = 0,
          L = t.length,
          k = s == null;
        if (O(s) === "object") {
          d = !0;
          for (I in s) Be(t, i, I, s[I], !0, c, v);
        } else if (
          l !== void 0 &&
          ((d = !0),
          S(l) || (v = !0),
          k &&
            (v
              ? (i.call(t, l), (i = null))
              : ((k = i),
                (i = function (F, Y, N) {
                  return k.call(o(F), N);
                }))),
          i)
        )
          for (; I < L; I++) i(t[I], s, v ? l : l.call(t[I], I, i(t[I], s)));
        return d ? t : k ? i.call(t) : L ? i(t[0], s) : c;
      },
      Rt = /^-ms-/,
      qt = /-([a-z])/g;
    function Bt(t, i) {
      return i.toUpperCase();
    }
    function ze(t) {
      return t.replace(Rt, "ms-").replace(qt, Bt);
    }
    var ct = function (t) {
      return t.nodeType === 1 || t.nodeType === 9 || !+t.nodeType;
    };
    function Ue() {
      this.expando = o.expando + Ue.uid++;
    }
    (Ue.uid = 1),
      (Ue.prototype = {
        cache: function (t) {
          var i = t[this.expando];
          return (
            i ||
              ((i = {}),
              ct(t) &&
                (t.nodeType
                  ? (t[this.expando] = i)
                  : Object.defineProperty(t, this.expando, {
                      value: i,
                      configurable: !0,
                    }))),
            i
          );
        },
        set: function (t, i, s) {
          var l,
            d = this.cache(t);
          if (typeof i == "string") d[ze(i)] = s;
          else for (l in i) d[ze(l)] = i[l];
          return d;
        },
        get: function (t, i) {
          return i === void 0
            ? this.cache(t)
            : t[this.expando] && t[this.expando][ze(i)];
        },
        access: function (t, i, s) {
          return i === void 0 || (i && typeof i == "string" && s === void 0)
            ? this.get(t, i)
            : (this.set(t, i, s), s !== void 0 ? s : i);
        },
        remove: function (t, i) {
          var s,
            l = t[this.expando];
          if (l !== void 0) {
            if (i !== void 0)
              for (
                Array.isArray(i)
                  ? (i = i.map(ze))
                  : ((i = ze(i)), (i = (i in l) ? [i] : i.match(Le) || [])),
                  s = i.length;
                s--;

              )
                delete l[i[s]];
            (i === void 0 || o.isEmptyObject(l)) &&
              (t.nodeType
                ? (t[this.expando] = void 0)
                : delete t[this.expando]);
          }
        },
        hasData: function (t) {
          var i = t[this.expando];
          return i !== void 0 && !o.isEmptyObject(i);
        },
      });
    var fe = new Ue(),
      He = new Ue(),
      _r = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Wr = /[A-Z]/g;
    function Xr(t) {
      return t === "true"
        ? !0
        : t === "false"
          ? !1
          : t === "null"
            ? null
            : t === +t + ""
              ? +t
              : _r.test(t)
                ? JSON.parse(t)
                : t;
    }
    function Qi(t, i, s) {
      var l;
      if (s === void 0 && t.nodeType === 1)
        if (
          ((l = "data-" + i.replace(Wr, "-$&").toLowerCase()),
          (s = t.getAttribute(l)),
          typeof s == "string")
        ) {
          try {
            s = Xr(s);
          } catch {}
          He.set(t, i, s);
        } else s = void 0;
      return s;
    }
    o.extend({
      hasData: function (t) {
        return He.hasData(t) || fe.hasData(t);
      },
      data: function (t, i, s) {
        return He.access(t, i, s);
      },
      removeData: function (t, i) {
        He.remove(t, i);
      },
      _data: function (t, i, s) {
        return fe.access(t, i, s);
      },
      _removeData: function (t, i) {
        fe.remove(t, i);
      },
    }),
      o.fn.extend({
        data: function (t, i) {
          var s,
            l,
            d,
            c = this[0],
            v = c && c.attributes;
          if (t === void 0) {
            if (
              this.length &&
              ((d = He.get(c)), c.nodeType === 1 && !fe.get(c, "hasDataAttrs"))
            ) {
              for (s = v.length; s--; )
                v[s] &&
                  ((l = v[s].name),
                  l.indexOf("data-") === 0 &&
                    ((l = ze(l.slice(5))), Qi(c, l, d[l])));
              fe.set(c, "hasDataAttrs", !0);
            }
            return d;
          }
          return typeof t == "object"
            ? this.each(function () {
                He.set(this, t);
              })
            : Be(
                this,
                function (I) {
                  var L;
                  if (c && I === void 0)
                    return (
                      (L = He.get(c, t)),
                      L !== void 0 || ((L = Qi(c, t)), L !== void 0)
                        ? L
                        : void 0
                    );
                  this.each(function () {
                    He.set(this, t, I);
                  });
                },
                null,
                i,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (t) {
          return this.each(function () {
            He.remove(this, t);
          });
        },
      }),
      o.extend({
        queue: function (t, i, s) {
          var l;
          if (t)
            return (
              (i = (i || "fx") + "queue"),
              (l = fe.get(t, i)),
              s &&
                (!l || Array.isArray(s)
                  ? (l = fe.access(t, i, o.makeArray(s)))
                  : l.push(s)),
              l || []
            );
        },
        dequeue: function (t, i) {
          i = i || "fx";
          var s = o.queue(t, i),
            l = s.length,
            d = s.shift(),
            c = o._queueHooks(t, i),
            v = function () {
              o.dequeue(t, i);
            };
          d === "inprogress" && ((d = s.shift()), l--),
            d &&
              (i === "fx" && s.unshift("inprogress"),
              delete c.stop,
              d.call(t, v, c)),
            !l && c && c.empty.fire();
        },
        _queueHooks: function (t, i) {
          var s = i + "queueHooks";
          return (
            fe.get(t, s) ||
            fe.access(t, s, {
              empty: o.Callbacks("once memory").add(function () {
                fe.remove(t, [i + "queue", s]);
              }),
            })
          );
        },
      }),
      o.fn.extend({
        queue: function (t, i) {
          var s = 2;
          return (
            typeof t != "string" && ((i = t), (t = "fx"), s--),
            arguments.length < s
              ? o.queue(this[0], t)
              : i === void 0
                ? this
                : this.each(function () {
                    var l = o.queue(this, t, i);
                    o._queueHooks(this, t),
                      t === "fx" && l[0] !== "inprogress" && o.dequeue(this, t);
                  })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            o.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, i) {
          var s,
            l = 1,
            d = o.Deferred(),
            c = this,
            v = this.length,
            I = function () {
              --l || d.resolveWith(c, [c]);
            };
          for (
            typeof t != "string" && ((i = t), (t = void 0)), t = t || "fx";
            v--;

          )
            (s = fe.get(c[v], t + "queueHooks")),
              s && s.empty && (l++, s.empty.add(I));
          return I(), d.promise(i);
        },
      });
    var Zi = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ft = new RegExp("^(?:([+-])=|)(" + Zi + ")([a-z%]*)$", "i"),
      at = ["Top", "Right", "Bottom", "Left"],
      bt = m.documentElement,
      Lt = function (t) {
        return o.contains(t.ownerDocument, t);
      },
      Vr = { composed: !0 };
    bt.getRootNode &&
      (Lt = function (t) {
        return (
          o.contains(t.ownerDocument, t) ||
          t.getRootNode(Vr) === t.ownerDocument
        );
      });
    var ri = function (t, i) {
      return (
        (t = i || t),
        t.style.display === "none" ||
          (t.style.display === "" && Lt(t) && o.css(t, "display") === "none")
      );
    };
    function Ji(t, i, s, l) {
      var d,
        c,
        v = 20,
        I = l
          ? function () {
              return l.cur();
            }
          : function () {
              return o.css(t, i, "");
            },
        L = I(),
        k = (s && s[3]) || (o.cssNumber[i] ? "" : "px"),
        F =
          t.nodeType &&
          (o.cssNumber[i] || (k !== "px" && +L)) &&
          Ft.exec(o.css(t, i));
      if (F && F[3] !== k) {
        for (L = L / 2, k = k || F[3], F = +L || 1; v--; )
          o.style(t, i, F + k),
            (1 - c) * (1 - (c = I() / L || 0.5)) <= 0 && (v = 0),
            (F = F / c);
        (F = F * 2), o.style(t, i, F + k), (s = s || []);
      }
      return (
        s &&
          ((F = +F || +L || 0),
          (d = s[1] ? F + (s[1] + 1) * s[2] : +s[2]),
          l && ((l.unit = k), (l.start = F), (l.end = d))),
        d
      );
    }
    var er = {};
    function Yr(t) {
      var i,
        s = t.ownerDocument,
        l = t.nodeName,
        d = er[l];
      return (
        d ||
        ((i = s.body.appendChild(s.createElement(l))),
        (d = o.css(i, "display")),
        i.parentNode.removeChild(i),
        d === "none" && (d = "block"),
        (er[l] = d),
        d)
      );
    }
    function At(t, i) {
      for (var s, l, d = [], c = 0, v = t.length; c < v; c++)
        (l = t[c]),
          l.style &&
            ((s = l.style.display),
            i
              ? (s === "none" &&
                  ((d[c] = fe.get(l, "display") || null),
                  d[c] || (l.style.display = "")),
                l.style.display === "" && ri(l) && (d[c] = Yr(l)))
              : s !== "none" && ((d[c] = "none"), fe.set(l, "display", s)));
      for (c = 0; c < v; c++) d[c] != null && (t[c].style.display = d[c]);
      return t;
    }
    o.fn.extend({
      show: function () {
        return At(this, !0);
      },
      hide: function () {
        return At(this);
      },
      toggle: function (t) {
        return typeof t == "boolean"
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              ri(this) ? o(this).show() : o(this).hide();
            });
      },
    });
    var Gt = /^(?:checkbox|radio)$/i,
      tr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ir = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var t = m.createDocumentFragment(),
        i = t.appendChild(m.createElement("div")),
        s = m.createElement("input");
      s.setAttribute("type", "radio"),
        s.setAttribute("checked", "checked"),
        s.setAttribute("name", "t"),
        i.appendChild(s),
        (T.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (i.innerHTML = "<textarea>x</textarea>"),
        (T.noCloneChecked = !!i.cloneNode(!0).lastChild.defaultValue),
        (i.innerHTML = "<option></option>"),
        (T.option = !!i.lastChild);
    })();
    var We = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    (We.tbody = We.tfoot = We.colgroup = We.caption = We.thead),
      (We.th = We.td),
      T.option ||
        (We.optgroup = We.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    function je(t, i) {
      var s;
      return (
        typeof t.getElementsByTagName < "u"
          ? (s = t.getElementsByTagName(i || "*"))
          : typeof t.querySelectorAll < "u"
            ? (s = t.querySelectorAll(i || "*"))
            : (s = []),
        i === void 0 || (i && H(t, i)) ? o.merge([t], s) : s
      );
    }
    function yi(t, i) {
      for (var s = 0, l = t.length; s < l; s++)
        fe.set(t[s], "globalEval", !i || fe.get(i[s], "globalEval"));
    }
    var Ur = /<|&#?\w+;/;
    function rr(t, i, s, l, d) {
      for (
        var c,
          v,
          I,
          L,
          k,
          F,
          Y = i.createDocumentFragment(),
          N = [],
          J = 0,
          ce = t.length;
        J < ce;
        J++
      )
        if (((c = t[J]), c || c === 0))
          if (O(c) === "object") o.merge(N, c.nodeType ? [c] : c);
          else if (!Ur.test(c)) N.push(i.createTextNode(c));
          else {
            for (
              v = v || Y.appendChild(i.createElement("div")),
                I = (tr.exec(c) || ["", ""])[1].toLowerCase(),
                L = We[I] || We._default,
                v.innerHTML = L[1] + o.htmlPrefilter(c) + L[2],
                F = L[0];
              F--;

            )
              v = v.lastChild;
            o.merge(N, v.childNodes), (v = Y.firstChild), (v.textContent = "");
          }
      for (Y.textContent = "", J = 0; (c = N[J++]); ) {
        if (l && o.inArray(c, l) > -1) {
          d && d.push(c);
          continue;
        }
        if (((k = Lt(c)), (v = je(Y.appendChild(c), "script")), k && yi(v), s))
          for (F = 0; (c = v[F++]); ) ir.test(c.type || "") && s.push(c);
      }
      return Y;
    }
    var nr = /^([^.]*)(?:\.(.+)|)/;
    function It() {
      return !0;
    }
    function Dt() {
      return !1;
    }
    function wi(t, i, s, l, d, c) {
      var v, I;
      if (typeof i == "object") {
        typeof s != "string" && ((l = l || s), (s = void 0));
        for (I in i) wi(t, I, s, l, i[I], c);
        return t;
      }
      if (
        (l == null && d == null
          ? ((d = s), (l = s = void 0))
          : d == null &&
            (typeof s == "string"
              ? ((d = l), (l = void 0))
              : ((d = l), (l = s), (s = void 0))),
        d === !1)
      )
        d = Dt;
      else if (!d) return t;
      return (
        c === 1 &&
          ((v = d),
          (d = function (L) {
            return o().off(L), v.apply(this, arguments);
          }),
          (d.guid = v.guid || (v.guid = o.guid++))),
        t.each(function () {
          o.event.add(this, i, d, l, s);
        })
      );
    }
    o.event = {
      global: {},
      add: function (t, i, s, l, d) {
        var c,
          v,
          I,
          L,
          k,
          F,
          Y,
          N,
          J,
          ce,
          be,
          me = fe.get(t);
        if (ct(t))
          for (
            s.handler && ((c = s), (s = c.handler), (d = c.selector)),
              d && o.find.matchesSelector(bt, d),
              s.guid || (s.guid = o.guid++),
              (L = me.events) || (L = me.events = Object.create(null)),
              (v = me.handle) ||
                (v = me.handle =
                  function (De) {
                    return typeof o < "u" && o.event.triggered !== De.type
                      ? o.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              i = (i || "").match(Le) || [""],
              k = i.length;
            k--;

          )
            (I = nr.exec(i[k]) || []),
              (J = be = I[1]),
              (ce = (I[2] || "").split(".").sort()),
              J &&
                ((Y = o.event.special[J] || {}),
                (J = (d ? Y.delegateType : Y.bindType) || J),
                (Y = o.event.special[J] || {}),
                (F = o.extend(
                  {
                    type: J,
                    origType: be,
                    data: l,
                    handler: s,
                    guid: s.guid,
                    selector: d,
                    needsContext: d && o.expr.match.needsContext.test(d),
                    namespace: ce.join("."),
                  },
                  c
                )),
                (N = L[J]) ||
                  ((N = L[J] = []),
                  (N.delegateCount = 0),
                  (!Y.setup || Y.setup.call(t, l, ce, v) === !1) &&
                    t.addEventListener &&
                    t.addEventListener(J, v)),
                Y.add &&
                  (Y.add.call(t, F),
                  F.handler.guid || (F.handler.guid = s.guid)),
                d ? N.splice(N.delegateCount++, 0, F) : N.push(F),
                (o.event.global[J] = !0));
      },
      remove: function (t, i, s, l, d) {
        var c,
          v,
          I,
          L,
          k,
          F,
          Y,
          N,
          J,
          ce,
          be,
          me = fe.hasData(t) && fe.get(t);
        if (!(!me || !(L = me.events))) {
          for (i = (i || "").match(Le) || [""], k = i.length; k--; ) {
            if (
              ((I = nr.exec(i[k]) || []),
              (J = be = I[1]),
              (ce = (I[2] || "").split(".").sort()),
              !J)
            ) {
              for (J in L) o.event.remove(t, J + i[k], s, l, !0);
              continue;
            }
            for (
              Y = o.event.special[J] || {},
                J = (l ? Y.delegateType : Y.bindType) || J,
                N = L[J] || [],
                I =
                  I[2] &&
                  new RegExp("(^|\\.)" + ce.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                v = c = N.length;
              c--;

            )
              (F = N[c]),
                (d || be === F.origType) &&
                  (!s || s.guid === F.guid) &&
                  (!I || I.test(F.namespace)) &&
                  (!l || l === F.selector || (l === "**" && F.selector)) &&
                  (N.splice(c, 1),
                  F.selector && N.delegateCount--,
                  Y.remove && Y.remove.call(t, F));
            v &&
              !N.length &&
              ((!Y.teardown || Y.teardown.call(t, ce, me.handle) === !1) &&
                o.removeEvent(t, J, me.handle),
              delete L[J]);
          }
          o.isEmptyObject(L) && fe.remove(t, "handle events");
        }
      },
      dispatch: function (t) {
        var i,
          s,
          l,
          d,
          c,
          v,
          I = new Array(arguments.length),
          L = o.event.fix(t),
          k = (fe.get(this, "events") || Object.create(null))[L.type] || [],
          F = o.event.special[L.type] || {};
        for (I[0] = L, i = 1; i < arguments.length; i++) I[i] = arguments[i];
        if (
          ((L.delegateTarget = this),
          !(F.preDispatch && F.preDispatch.call(this, L) === !1))
        ) {
          for (
            v = o.event.handlers.call(this, L, k), i = 0;
            (d = v[i++]) && !L.isPropagationStopped();

          )
            for (
              L.currentTarget = d.elem, s = 0;
              (c = d.handlers[s++]) && !L.isImmediatePropagationStopped();

            )
              (!L.rnamespace ||
                c.namespace === !1 ||
                L.rnamespace.test(c.namespace)) &&
                ((L.handleObj = c),
                (L.data = c.data),
                (l = (
                  (o.event.special[c.origType] || {}).handle || c.handler
                ).apply(d.elem, I)),
                l !== void 0 &&
                  (L.result = l) === !1 &&
                  (L.preventDefault(), L.stopPropagation()));
          return F.postDispatch && F.postDispatch.call(this, L), L.result;
        }
      },
      handlers: function (t, i) {
        var s,
          l,
          d,
          c,
          v,
          I = [],
          L = i.delegateCount,
          k = t.target;
        if (L && k.nodeType && !(t.type === "click" && t.button >= 1)) {
          for (; k !== this; k = k.parentNode || this)
            if (
              k.nodeType === 1 &&
              !(t.type === "click" && k.disabled === !0)
            ) {
              for (c = [], v = {}, s = 0; s < L; s++)
                (l = i[s]),
                  (d = l.selector + " "),
                  v[d] === void 0 &&
                    (v[d] = l.needsContext
                      ? o(d, this).index(k) > -1
                      : o.find(d, this, null, [k]).length),
                  v[d] && c.push(l);
              c.length && I.push({ elem: k, handlers: c });
            }
        }
        return (
          (k = this),
          L < i.length && I.push({ elem: k, handlers: i.slice(L) }),
          I
        );
      },
      addProp: function (t, i) {
        Object.defineProperty(o.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: S(i)
            ? function () {
                if (this.originalEvent) return i(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (s) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: s,
            });
          },
        });
      },
      fix: function (t) {
        return t[o.expando] ? t : new o.Event(t);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (t) {
            var i = this || t;
            return (
              Gt.test(i.type) && i.click && H(i, "input") && ni(i, "click", !0),
              !1
            );
          },
          trigger: function (t) {
            var i = this || t;
            return (
              Gt.test(i.type) && i.click && H(i, "input") && ni(i, "click"), !0
            );
          },
          _default: function (t) {
            var i = t.target;
            return (
              (Gt.test(i.type) &&
                i.click &&
                H(i, "input") &&
                fe.get(i, "click")) ||
              H(i, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            t.result !== void 0 &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
    };
    function ni(t, i, s) {
      if (!s) {
        fe.get(t, i) === void 0 && o.event.add(t, i, It);
        return;
      }
      fe.set(t, i, !1),
        o.event.add(t, i, {
          namespace: !1,
          handler: function (l) {
            var d,
              c = fe.get(this, i);
            if (l.isTrigger & 1 && this[i]) {
              if (c)
                (o.event.special[i] || {}).delegateType && l.stopPropagation();
              else if (
                ((c = f.call(arguments)),
                fe.set(this, i, c),
                this[i](),
                (d = fe.get(this, i)),
                fe.set(this, i, !1),
                c !== d)
              )
                return l.stopImmediatePropagation(), l.preventDefault(), d;
            } else
              c &&
                (fe.set(this, i, o.event.trigger(c[0], c.slice(1), this)),
                l.stopPropagation(),
                (l.isImmediatePropagationStopped = It));
          },
        });
    }
    (o.removeEvent = function (t, i, s) {
      t.removeEventListener && t.removeEventListener(i, s);
    }),
      (o.Event = function (t, i) {
        if (!(this instanceof o.Event)) return new o.Event(t, i);
        t && t.type
          ? ((this.originalEvent = t),
            (this.type = t.type),
            (this.isDefaultPrevented =
              t.defaultPrevented ||
              (t.defaultPrevented === void 0 && t.returnValue === !1)
                ? It
                : Dt),
            (this.target =
              t.target && t.target.nodeType === 3
                ? t.target.parentNode
                : t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget))
          : (this.type = t),
          i && o.extend(this, i),
          (this.timeStamp = (t && t.timeStamp) || Date.now()),
          (this[o.expando] = !0);
      }),
      (o.Event.prototype = {
        constructor: o.Event,
        isDefaultPrevented: Dt,
        isPropagationStopped: Dt,
        isImmediatePropagationStopped: Dt,
        isSimulated: !1,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = It),
            t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = It),
            t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = It),
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      o.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        o.event.addProp
      ),
      o.each({ focus: "focusin", blur: "focusout" }, function (t, i) {
        function s(l) {
          if (m.documentMode) {
            var d = fe.get(this, "handle"),
              c = o.event.fix(l);
            (c.type = l.type === "focusin" ? "focus" : "blur"),
              (c.isSimulated = !0),
              d(l),
              c.target === c.currentTarget && d(c);
          } else o.event.simulate(i, l.target, o.event.fix(l));
        }
        (o.event.special[t] = {
          setup: function () {
            var l;
            if ((ni(this, t, !0), m.documentMode))
              (l = fe.get(this, i)),
                l || this.addEventListener(i, s),
                fe.set(this, i, (l || 0) + 1);
            else return !1;
          },
          trigger: function () {
            return ni(this, t), !0;
          },
          teardown: function () {
            var l;
            if (m.documentMode)
              (l = fe.get(this, i) - 1),
                l
                  ? fe.set(this, i, l)
                  : (this.removeEventListener(i, s), fe.remove(this, i));
            else return !1;
          },
          _default: function (l) {
            return fe.get(l.target, t);
          },
          delegateType: i,
        }),
          (o.event.special[i] = {
            setup: function () {
              var l = this.ownerDocument || this.document || this,
                d = m.documentMode ? this : l,
                c = fe.get(d, i);
              c ||
                (m.documentMode
                  ? this.addEventListener(i, s)
                  : l.addEventListener(t, s, !0)),
                fe.set(d, i, (c || 0) + 1);
            },
            teardown: function () {
              var l = this.ownerDocument || this.document || this,
                d = m.documentMode ? this : l,
                c = fe.get(d, i) - 1;
              c
                ? fe.set(d, i, c)
                : (m.documentMode
                    ? this.removeEventListener(i, s)
                    : l.removeEventListener(t, s, !0),
                  fe.remove(d, i));
            },
          });
      }),
      o.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, i) {
          o.event.special[t] = {
            delegateType: i,
            bindType: i,
            handle: function (s) {
              var l,
                d = this,
                c = s.relatedTarget,
                v = s.handleObj;
              return (
                (!c || (c !== d && !o.contains(d, c))) &&
                  ((s.type = v.origType),
                  (l = v.handler.apply(this, arguments)),
                  (s.type = i)),
                l
              );
            },
          };
        }
      ),
      o.fn.extend({
        on: function (t, i, s, l) {
          return wi(this, t, i, s, l);
        },
        one: function (t, i, s, l) {
          return wi(this, t, i, s, l, 1);
        },
        off: function (t, i, s) {
          var l, d;
          if (t && t.preventDefault && t.handleObj)
            return (
              (l = t.handleObj),
              o(t.delegateTarget).off(
                l.namespace ? l.origType + "." + l.namespace : l.origType,
                l.selector,
                l.handler
              ),
              this
            );
          if (typeof t == "object") {
            for (d in t) this.off(d, i, t[d]);
            return this;
          }
          return (
            (i === !1 || typeof i == "function") && ((s = i), (i = void 0)),
            s === !1 && (s = Dt),
            this.each(function () {
              o.event.remove(this, t, s, i);
            })
          );
        },
      });
    var Kr = /<script|<style|<link/i,
      Qr = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Zr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function sr(t, i) {
      return (
        (H(t, "table") &&
          H(i.nodeType !== 11 ? i : i.firstChild, "tr") &&
          o(t).children("tbody")[0]) ||
        t
      );
    }
    function Jr(t) {
      return (t.type = (t.getAttribute("type") !== null) + "/" + t.type), t;
    }
    function en(t) {
      return (
        (t.type || "").slice(0, 5) === "true/"
          ? (t.type = t.type.slice(5))
          : t.removeAttribute("type"),
        t
      );
    }
    function ar(t, i) {
      var s, l, d, c, v, I, L;
      if (i.nodeType === 1) {
        if (fe.hasData(t) && ((c = fe.get(t)), (L = c.events), L)) {
          fe.remove(i, "handle events");
          for (d in L)
            for (s = 0, l = L[d].length; s < l; s++) o.event.add(i, d, L[d][s]);
        }
        He.hasData(t) &&
          ((v = He.access(t)), (I = o.extend({}, v)), He.set(i, I));
      }
    }
    function tn(t, i) {
      var s = i.nodeName.toLowerCase();
      s === "input" && Gt.test(t.type)
        ? (i.checked = t.checked)
        : (s === "input" || s === "textarea") &&
          (i.defaultValue = t.defaultValue);
    }
    function Ot(t, i, s, l) {
      i = b(i);
      var d,
        c,
        v,
        I,
        L,
        k,
        F = 0,
        Y = t.length,
        N = Y - 1,
        J = i[0],
        ce = S(J);
      if (ce || (Y > 1 && typeof J == "string" && !T.checkClone && Qr.test(J)))
        return t.each(function (be) {
          var me = t.eq(be);
          ce && (i[0] = J.call(this, be, me.html())), Ot(me, i, s, l);
        });
      if (
        Y &&
        ((d = rr(i, t[0].ownerDocument, !1, t, l)),
        (c = d.firstChild),
        d.childNodes.length === 1 && (d = c),
        c || l)
      ) {
        for (v = o.map(je(d, "script"), Jr), I = v.length; F < Y; F++)
          (L = d),
            F !== N &&
              ((L = o.clone(L, !0, !0)), I && o.merge(v, je(L, "script"))),
            s.call(t[F], L, F);
        if (I)
          for (
            k = v[v.length - 1].ownerDocument, o.map(v, en), F = 0;
            F < I;
            F++
          )
            (L = v[F]),
              ir.test(L.type || "") &&
                !fe.access(L, "globalEval") &&
                o.contains(k, L) &&
                (L.src && (L.type || "").toLowerCase() !== "module"
                  ? o._evalUrl &&
                    !L.noModule &&
                    o._evalUrl(
                      L.src,
                      { nonce: L.nonce || L.getAttribute("nonce") },
                      k
                    )
                  : M(L.textContent.replace(Zr, ""), L, k));
      }
      return t;
    }
    function or(t, i, s) {
      for (var l, d = i ? o.filter(i, t) : t, c = 0; (l = d[c]) != null; c++)
        !s && l.nodeType === 1 && o.cleanData(je(l)),
          l.parentNode &&
            (s && Lt(l) && yi(je(l, "script")), l.parentNode.removeChild(l));
      return t;
    }
    o.extend({
      htmlPrefilter: function (t) {
        return t;
      },
      clone: function (t, i, s) {
        var l,
          d,
          c,
          v,
          I = t.cloneNode(!0),
          L = Lt(t);
        if (
          !T.noCloneChecked &&
          (t.nodeType === 1 || t.nodeType === 11) &&
          !o.isXMLDoc(t)
        )
          for (v = je(I), c = je(t), l = 0, d = c.length; l < d; l++)
            tn(c[l], v[l]);
        if (i)
          if (s)
            for (
              c = c || je(t), v = v || je(I), l = 0, d = c.length;
              l < d;
              l++
            )
              ar(c[l], v[l]);
          else ar(t, I);
        return (
          (v = je(I, "script")), v.length > 0 && yi(v, !L && je(t, "script")), I
        );
      },
      cleanData: function (t) {
        for (
          var i, s, l, d = o.event.special, c = 0;
          (s = t[c]) !== void 0;
          c++
        )
          if (ct(s)) {
            if ((i = s[fe.expando])) {
              if (i.events)
                for (l in i.events)
                  d[l] ? o.event.remove(s, l) : o.removeEvent(s, l, i.handle);
              s[fe.expando] = void 0;
            }
            s[He.expando] && (s[He.expando] = void 0);
          }
      },
    }),
      o.fn.extend({
        detach: function (t) {
          return or(this, t, !0);
        },
        remove: function (t) {
          return or(this, t);
        },
        text: function (t) {
          return Be(
            this,
            function (i) {
              return i === void 0
                ? o.text(this)
                : this.empty().each(function () {
                    (this.nodeType === 1 ||
                      this.nodeType === 11 ||
                      this.nodeType === 9) &&
                      (this.textContent = i);
                  });
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return Ot(this, arguments, function (t) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var i = sr(this, t);
              i.appendChild(t);
            }
          });
        },
        prepend: function () {
          return Ot(this, arguments, function (t) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var i = sr(this, t);
              i.insertBefore(t, i.firstChild);
            }
          });
        },
        before: function () {
          return Ot(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return Ot(this, arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        empty: function () {
          for (var t, i = 0; (t = this[i]) != null; i++)
            t.nodeType === 1 && (o.cleanData(je(t, !1)), (t.textContent = ""));
          return this;
        },
        clone: function (t, i) {
          return (
            (t = t ?? !1),
            (i = i ?? t),
            this.map(function () {
              return o.clone(this, t, i);
            })
          );
        },
        html: function (t) {
          return Be(
            this,
            function (i) {
              var s = this[0] || {},
                l = 0,
                d = this.length;
              if (i === void 0 && s.nodeType === 1) return s.innerHTML;
              if (
                typeof i == "string" &&
                !Kr.test(i) &&
                !We[(tr.exec(i) || ["", ""])[1].toLowerCase()]
              ) {
                i = o.htmlPrefilter(i);
                try {
                  for (; l < d; l++)
                    (s = this[l] || {}),
                      s.nodeType === 1 &&
                        (o.cleanData(je(s, !1)), (s.innerHTML = i));
                  s = 0;
                } catch {}
              }
              s && this.empty().append(i);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = [];
          return Ot(
            this,
            arguments,
            function (i) {
              var s = this.parentNode;
              o.inArray(this, t) < 0 &&
                (o.cleanData(je(this)), s && s.replaceChild(i, this));
            },
            t
          );
        },
      }),
      o.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, i) {
          o.fn[t] = function (s) {
            for (var l, d = [], c = o(s), v = c.length - 1, I = 0; I <= v; I++)
              (l = I === v ? this : this.clone(!0)),
                o(c[I])[i](l),
                w.apply(d, l.get());
            return this.pushStack(d);
          };
        }
      );
    var bi = new RegExp("^(" + Zi + ")(?!px)[a-z%]+$", "i"),
      xi = /^--/,
      si = function (t) {
        var i = t.ownerDocument.defaultView;
        return (!i || !i.opener) && (i = e), i.getComputedStyle(t);
      },
      lr = function (t, i, s) {
        var l,
          d,
          c = {};
        for (d in i) (c[d] = t.style[d]), (t.style[d] = i[d]);
        l = s.call(t);
        for (d in i) t.style[d] = c[d];
        return l;
      },
      rn = new RegExp(at.join("|"), "i");
    (function () {
      function t() {
        if (k) {
          (L.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (k.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            bt.appendChild(L).appendChild(k);
          var F = e.getComputedStyle(k);
          (s = F.top !== "1%"),
            (I = i(F.marginLeft) === 12),
            (k.style.right = "60%"),
            (c = i(F.right) === 36),
            (l = i(F.width) === 36),
            (k.style.position = "absolute"),
            (d = i(k.offsetWidth / 3) === 12),
            bt.removeChild(L),
            (k = null);
        }
      }
      function i(F) {
        return Math.round(parseFloat(F));
      }
      var s,
        l,
        d,
        c,
        v,
        I,
        L = m.createElement("div"),
        k = m.createElement("div");
      k.style &&
        ((k.style.backgroundClip = "content-box"),
        (k.cloneNode(!0).style.backgroundClip = ""),
        (T.clearCloneStyle = k.style.backgroundClip === "content-box"),
        o.extend(T, {
          boxSizingReliable: function () {
            return t(), l;
          },
          pixelBoxStyles: function () {
            return t(), c;
          },
          pixelPosition: function () {
            return t(), s;
          },
          reliableMarginLeft: function () {
            return t(), I;
          },
          scrollboxSize: function () {
            return t(), d;
          },
          reliableTrDimensions: function () {
            var F, Y, N, J;
            return (
              v == null &&
                ((F = m.createElement("table")),
                (Y = m.createElement("tr")),
                (N = m.createElement("div")),
                (F.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (Y.style.cssText = "box-sizing:content-box;border:1px solid"),
                (Y.style.height = "1px"),
                (N.style.height = "9px"),
                (N.style.display = "block"),
                bt.appendChild(F).appendChild(Y).appendChild(N),
                (J = e.getComputedStyle(Y)),
                (v =
                  parseInt(J.height, 10) +
                    parseInt(J.borderTopWidth, 10) +
                    parseInt(J.borderBottomWidth, 10) ===
                  Y.offsetHeight),
                bt.removeChild(F)),
              v
            );
          },
        }));
    })();
    function _t(t, i, s) {
      var l,
        d,
        c,
        v,
        I = xi.test(i),
        L = t.style;
      return (
        (s = s || si(t)),
        s &&
          ((v = s.getPropertyValue(i) || s[i]),
          I && v && (v = v.replace(q, "$1") || void 0),
          v === "" && !Lt(t) && (v = o.style(t, i)),
          !T.pixelBoxStyles() &&
            bi.test(v) &&
            rn.test(i) &&
            ((l = L.width),
            (d = L.minWidth),
            (c = L.maxWidth),
            (L.minWidth = L.maxWidth = L.width = v),
            (v = s.width),
            (L.width = l),
            (L.minWidth = d),
            (L.maxWidth = c))),
        v !== void 0 ? v + "" : v
      );
    }
    function fr(t, i) {
      return {
        get: function () {
          if (t()) {
            delete this.get;
            return;
          }
          return (this.get = i).apply(this, arguments);
        },
      };
    }
    var ur = ["Webkit", "Moz", "ms"],
      dr = m.createElement("div").style,
      cr = {};
    function nn(t) {
      for (var i = t[0].toUpperCase() + t.slice(1), s = ur.length; s--; )
        if (((t = ur[s] + i), t in dr)) return t;
    }
    function Si(t) {
      var i = o.cssProps[t] || cr[t];
      return i || (t in dr ? t : (cr[t] = nn(t) || t));
    }
    var sn = /^(none|table(?!-c[ea]).+)/,
      an = { position: "absolute", visibility: "hidden", display: "block" },
      pr = { letterSpacing: "0", fontWeight: "400" };
    function hr(t, i, s) {
      var l = Ft.exec(i);
      return l ? Math.max(0, l[2] - (s || 0)) + (l[3] || "px") : i;
    }
    function Ti(t, i, s, l, d, c) {
      var v = i === "width" ? 1 : 0,
        I = 0,
        L = 0,
        k = 0;
      if (s === (l ? "border" : "content")) return 0;
      for (; v < 4; v += 2)
        s === "margin" && (k += o.css(t, s + at[v], !0, d)),
          l
            ? (s === "content" && (L -= o.css(t, "padding" + at[v], !0, d)),
              s !== "margin" &&
                (L -= o.css(t, "border" + at[v] + "Width", !0, d)))
            : ((L += o.css(t, "padding" + at[v], !0, d)),
              s !== "padding"
                ? (L += o.css(t, "border" + at[v] + "Width", !0, d))
                : (I += o.css(t, "border" + at[v] + "Width", !0, d)));
      return (
        !l &&
          c >= 0 &&
          (L +=
            Math.max(
              0,
              Math.ceil(
                t["offset" + i[0].toUpperCase() + i.slice(1)] - c - L - I - 0.5
              )
            ) || 0),
        L + k
      );
    }
    function mr(t, i, s) {
      var l = si(t),
        d = !T.boxSizingReliable() || s,
        c = d && o.css(t, "boxSizing", !1, l) === "border-box",
        v = c,
        I = _t(t, i, l),
        L = "offset" + i[0].toUpperCase() + i.slice(1);
      if (bi.test(I)) {
        if (!s) return I;
        I = "auto";
      }
      return (
        ((!T.boxSizingReliable() && c) ||
          (!T.reliableTrDimensions() && H(t, "tr")) ||
          I === "auto" ||
          (!parseFloat(I) && o.css(t, "display", !1, l) === "inline")) &&
          t.getClientRects().length &&
          ((c = o.css(t, "boxSizing", !1, l) === "border-box"),
          (v = L in t),
          v && (I = t[L])),
        (I = parseFloat(I) || 0),
        I + Ti(t, i, s || (c ? "border" : "content"), v, l, I) + "px"
      );
    }
    o.extend({
      cssHooks: {
        opacity: {
          get: function (t, i) {
            if (i) {
              var s = _t(t, "opacity");
              return s === "" ? "1" : s;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageSlice: !0,
        columnCount: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        scale: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
      },
      cssProps: {},
      style: function (t, i, s, l) {
        if (!(!t || t.nodeType === 3 || t.nodeType === 8 || !t.style)) {
          var d,
            c,
            v,
            I = ze(i),
            L = xi.test(i),
            k = t.style;
          if (
            (L || (i = Si(I)),
            (v = o.cssHooks[i] || o.cssHooks[I]),
            s !== void 0)
          ) {
            if (
              ((c = typeof s),
              c === "string" &&
                (d = Ft.exec(s)) &&
                d[1] &&
                ((s = Ji(t, i, d)), (c = "number")),
              s == null || s !== s)
            )
              return;
            c === "number" &&
              !L &&
              (s += (d && d[3]) || (o.cssNumber[I] ? "" : "px")),
              !T.clearCloneStyle &&
                s === "" &&
                i.indexOf("background") === 0 &&
                (k[i] = "inherit"),
              (!v || !("set" in v) || (s = v.set(t, s, l)) !== void 0) &&
                (L ? k.setProperty(i, s) : (k[i] = s));
          } else
            return v && "get" in v && (d = v.get(t, !1, l)) !== void 0
              ? d
              : k[i];
        }
      },
      css: function (t, i, s, l) {
        var d,
          c,
          v,
          I = ze(i),
          L = xi.test(i);
        return (
          L || (i = Si(I)),
          (v = o.cssHooks[i] || o.cssHooks[I]),
          v && "get" in v && (d = v.get(t, !0, s)),
          d === void 0 && (d = _t(t, i, l)),
          d === "normal" && i in pr && (d = pr[i]),
          s === "" || s
            ? ((c = parseFloat(d)), s === !0 || isFinite(c) ? c || 0 : d)
            : d
        );
      },
    }),
      o.each(["height", "width"], function (t, i) {
        o.cssHooks[i] = {
          get: function (s, l, d) {
            if (l)
              return sn.test(o.css(s, "display")) &&
                (!s.getClientRects().length || !s.getBoundingClientRect().width)
                ? lr(s, an, function () {
                    return mr(s, i, d);
                  })
                : mr(s, i, d);
          },
          set: function (s, l, d) {
            var c,
              v = si(s),
              I = !T.scrollboxSize() && v.position === "absolute",
              L = I || d,
              k = L && o.css(s, "boxSizing", !1, v) === "border-box",
              F = d ? Ti(s, i, d, k, v) : 0;
            return (
              k &&
                I &&
                (F -= Math.ceil(
                  s["offset" + i[0].toUpperCase() + i.slice(1)] -
                    parseFloat(v[i]) -
                    Ti(s, i, "border", !1, v) -
                    0.5
                )),
              F &&
                (c = Ft.exec(l)) &&
                (c[3] || "px") !== "px" &&
                ((s.style[i] = l), (l = o.css(s, i))),
              hr(s, l, F)
            );
          },
        };
      }),
      (o.cssHooks.marginLeft = fr(T.reliableMarginLeft, function (t, i) {
        if (i)
          return (
            (parseFloat(_t(t, "marginLeft")) ||
              t.getBoundingClientRect().left -
                lr(t, { marginLeft: 0 }, function () {
                  return t.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      o.each({ margin: "", padding: "", border: "Width" }, function (t, i) {
        (o.cssHooks[t + i] = {
          expand: function (s) {
            for (
              var l = 0, d = {}, c = typeof s == "string" ? s.split(" ") : [s];
              l < 4;
              l++
            )
              d[t + at[l] + i] = c[l] || c[l - 2] || c[0];
            return d;
          },
        }),
          t !== "margin" && (o.cssHooks[t + i].set = hr);
      }),
      o.fn.extend({
        css: function (t, i) {
          return Be(
            this,
            function (s, l, d) {
              var c,
                v,
                I = {},
                L = 0;
              if (Array.isArray(l)) {
                for (c = si(s), v = l.length; L < v; L++)
                  I[l[L]] = o.css(s, l[L], !1, c);
                return I;
              }
              return d !== void 0 ? o.style(s, l, d) : o.css(s, l);
            },
            t,
            i,
            arguments.length > 1
          );
        },
      });
    function Re(t, i, s, l, d) {
      return new Re.prototype.init(t, i, s, l, d);
    }
    (o.Tween = Re),
      (Re.prototype = {
        constructor: Re,
        init: function (t, i, s, l, d, c) {
          (this.elem = t),
            (this.prop = s),
            (this.easing = d || o.easing._default),
            (this.options = i),
            (this.start = this.now = this.cur()),
            (this.end = l),
            (this.unit = c || (o.cssNumber[s] ? "" : "px"));
        },
        cur: function () {
          var t = Re.propHooks[this.prop];
          return t && t.get ? t.get(this) : Re.propHooks._default.get(this);
        },
        run: function (t) {
          var i,
            s = Re.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = i =
                  o.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = i = t),
            (this.now = (this.end - this.start) * i + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            s && s.set ? s.set(this) : Re.propHooks._default.set(this),
            this
          );
        },
      }),
      (Re.prototype.init.prototype = Re.prototype),
      (Re.propHooks = {
        _default: {
          get: function (t) {
            var i;
            return t.elem.nodeType !== 1 ||
              (t.elem[t.prop] != null && t.elem.style[t.prop] == null)
              ? t.elem[t.prop]
              : ((i = o.css(t.elem, t.prop, "")), !i || i === "auto" ? 0 : i);
          },
          set: function (t) {
            o.fx.step[t.prop]
              ? o.fx.step[t.prop](t)
              : t.elem.nodeType === 1 &&
                  (o.cssHooks[t.prop] || t.elem.style[Si(t.prop)] != null)
                ? o.style(t.elem, t.prop, t.now + t.unit)
                : (t.elem[t.prop] = t.now);
          },
        },
      }),
      (Re.propHooks.scrollTop = Re.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (o.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (o.fx = Re.prototype.init),
      (o.fx.step = {});
    var kt,
      ai,
      on = /^(?:toggle|show|hide)$/,
      ln = /queueHooks$/;
    function Ei() {
      ai &&
        (m.hidden === !1 && e.requestAnimationFrame
          ? e.requestAnimationFrame(Ei)
          : e.setTimeout(Ei, o.fx.interval),
        o.fx.tick());
    }
    function gr() {
      return (
        e.setTimeout(function () {
          kt = void 0;
        }),
        (kt = Date.now())
      );
    }
    function oi(t, i) {
      var s,
        l = 0,
        d = { height: t };
      for (i = i ? 1 : 0; l < 4; l += 2 - i)
        (s = at[l]), (d["margin" + s] = d["padding" + s] = t);
      return i && (d.opacity = d.width = t), d;
    }
    function vr(t, i, s) {
      for (
        var l,
          d = (Ke.tweeners[i] || []).concat(Ke.tweeners["*"]),
          c = 0,
          v = d.length;
        c < v;
        c++
      )
        if ((l = d[c].call(s, i, t))) return l;
    }
    function fn(t, i, s) {
      var l,
        d,
        c,
        v,
        I,
        L,
        k,
        F,
        Y = "width" in i || "height" in i,
        N = this,
        J = {},
        ce = t.style,
        be = t.nodeType && ri(t),
        me = fe.get(t, "fxshow");
      s.queue ||
        ((v = o._queueHooks(t, "fx")),
        v.unqueued == null &&
          ((v.unqueued = 0),
          (I = v.empty.fire),
          (v.empty.fire = function () {
            v.unqueued || I();
          })),
        v.unqueued++,
        N.always(function () {
          N.always(function () {
            v.unqueued--, o.queue(t, "fx").length || v.empty.fire();
          });
        }));
      for (l in i)
        if (((d = i[l]), on.test(d))) {
          if (
            (delete i[l],
            (c = c || d === "toggle"),
            d === (be ? "hide" : "show"))
          )
            if (d === "show" && me && me[l] !== void 0) be = !0;
            else continue;
          J[l] = (me && me[l]) || o.style(t, l);
        }
      if (((L = !o.isEmptyObject(i)), !(!L && o.isEmptyObject(J)))) {
        Y &&
          t.nodeType === 1 &&
          ((s.overflow = [ce.overflow, ce.overflowX, ce.overflowY]),
          (k = me && me.display),
          k == null && (k = fe.get(t, "display")),
          (F = o.css(t, "display")),
          F === "none" &&
            (k
              ? (F = k)
              : (At([t], !0),
                (k = t.style.display || k),
                (F = o.css(t, "display")),
                At([t]))),
          (F === "inline" || (F === "inline-block" && k != null)) &&
            o.css(t, "float") === "none" &&
            (L ||
              (N.done(function () {
                ce.display = k;
              }),
              k == null && ((F = ce.display), (k = F === "none" ? "" : F))),
            (ce.display = "inline-block"))),
          s.overflow &&
            ((ce.overflow = "hidden"),
            N.always(function () {
              (ce.overflow = s.overflow[0]),
                (ce.overflowX = s.overflow[1]),
                (ce.overflowY = s.overflow[2]);
            })),
          (L = !1);
        for (l in J)
          L ||
            (me
              ? "hidden" in me && (be = me.hidden)
              : (me = fe.access(t, "fxshow", { display: k })),
            c && (me.hidden = !be),
            be && At([t], !0),
            N.done(function () {
              be || At([t]), fe.remove(t, "fxshow");
              for (l in J) o.style(t, l, J[l]);
            })),
            (L = vr(be ? me[l] : 0, l, N)),
            l in me ||
              ((me[l] = L.start), be && ((L.end = L.start), (L.start = 0)));
      }
    }
    function un(t, i) {
      var s, l, d, c, v;
      for (s in t)
        if (
          ((l = ze(s)),
          (d = i[l]),
          (c = t[s]),
          Array.isArray(c) && ((d = c[1]), (c = t[s] = c[0])),
          s !== l && ((t[l] = c), delete t[s]),
          (v = o.cssHooks[l]),
          v && "expand" in v)
        ) {
          (c = v.expand(c)), delete t[l];
          for (s in c) s in t || ((t[s] = c[s]), (i[s] = d));
        } else i[l] = d;
    }
    function Ke(t, i, s) {
      var l,
        d,
        c = 0,
        v = Ke.prefilters.length,
        I = o.Deferred().always(function () {
          delete L.elem;
        }),
        L = function () {
          if (d) return !1;
          for (
            var Y = kt || gr(),
              N = Math.max(0, k.startTime + k.duration - Y),
              J = N / k.duration || 0,
              ce = 1 - J,
              be = 0,
              me = k.tweens.length;
            be < me;
            be++
          )
            k.tweens[be].run(ce);
          return (
            I.notifyWith(t, [k, ce, N]),
            ce < 1 && me
              ? N
              : (me || I.notifyWith(t, [k, 1, 0]), I.resolveWith(t, [k]), !1)
          );
        },
        k = I.promise({
          elem: t,
          props: o.extend({}, i),
          opts: o.extend(
            !0,
            { specialEasing: {}, easing: o.easing._default },
            s
          ),
          originalProperties: i,
          originalOptions: s,
          startTime: kt || gr(),
          duration: s.duration,
          tweens: [],
          createTween: function (Y, N) {
            var J = o.Tween(
              t,
              k.opts,
              Y,
              N,
              k.opts.specialEasing[Y] || k.opts.easing
            );
            return k.tweens.push(J), J;
          },
          stop: function (Y) {
            var N = 0,
              J = Y ? k.tweens.length : 0;
            if (d) return this;
            for (d = !0; N < J; N++) k.tweens[N].run(1);
            return (
              Y
                ? (I.notifyWith(t, [k, 1, 0]), I.resolveWith(t, [k, Y]))
                : I.rejectWith(t, [k, Y]),
              this
            );
          },
        }),
        F = k.props;
      for (un(F, k.opts.specialEasing); c < v; c++)
        if (((l = Ke.prefilters[c].call(k, t, F, k.opts)), l))
          return (
            S(l.stop) &&
              (o._queueHooks(k.elem, k.opts.queue).stop = l.stop.bind(l)),
            l
          );
      return (
        o.map(F, vr, k),
        S(k.opts.start) && k.opts.start.call(t, k),
        k
          .progress(k.opts.progress)
          .done(k.opts.done, k.opts.complete)
          .fail(k.opts.fail)
          .always(k.opts.always),
        o.fx.timer(o.extend(L, { elem: t, anim: k, queue: k.opts.queue })),
        k
      );
    }
    (o.Animation = o.extend(Ke, {
      tweeners: {
        "*": [
          function (t, i) {
            var s = this.createTween(t, i);
            return Ji(s.elem, t, Ft.exec(i), s), s;
          },
        ],
      },
      tweener: function (t, i) {
        S(t) ? ((i = t), (t = ["*"])) : (t = t.match(Le));
        for (var s, l = 0, d = t.length; l < d; l++)
          (s = t[l]),
            (Ke.tweeners[s] = Ke.tweeners[s] || []),
            Ke.tweeners[s].unshift(i);
      },
      prefilters: [fn],
      prefilter: function (t, i) {
        i ? Ke.prefilters.unshift(t) : Ke.prefilters.push(t);
      },
    })),
      (o.speed = function (t, i, s) {
        var l =
          t && typeof t == "object"
            ? o.extend({}, t)
            : {
                complete: s || (!s && i) || (S(t) && t),
                duration: t,
                easing: (s && i) || (i && !S(i) && i),
              };
        return (
          o.fx.off
            ? (l.duration = 0)
            : typeof l.duration != "number" &&
              (l.duration in o.fx.speeds
                ? (l.duration = o.fx.speeds[l.duration])
                : (l.duration = o.fx.speeds._default)),
          (l.queue == null || l.queue === !0) && (l.queue = "fx"),
          (l.old = l.complete),
          (l.complete = function () {
            S(l.old) && l.old.call(this), l.queue && o.dequeue(this, l.queue);
          }),
          l
        );
      }),
      o.fn.extend({
        fadeTo: function (t, i, s, l) {
          return this.filter(ri)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: i }, t, s, l);
        },
        animate: function (t, i, s, l) {
          var d = o.isEmptyObject(t),
            c = o.speed(i, s, l),
            v = function () {
              var I = Ke(this, o.extend({}, t), c);
              (d || fe.get(this, "finish")) && I.stop(!0);
            };
          return (
            (v.finish = v),
            d || c.queue === !1 ? this.each(v) : this.queue(c.queue, v)
          );
        },
        stop: function (t, i, s) {
          var l = function (d) {
            var c = d.stop;
            delete d.stop, c(s);
          };
          return (
            typeof t != "string" && ((s = i), (i = t), (t = void 0)),
            i && this.queue(t || "fx", []),
            this.each(function () {
              var d = !0,
                c = t != null && t + "queueHooks",
                v = o.timers,
                I = fe.get(this);
              if (c) I[c] && I[c].stop && l(I[c]);
              else for (c in I) I[c] && I[c].stop && ln.test(c) && l(I[c]);
              for (c = v.length; c--; )
                v[c].elem === this &&
                  (t == null || v[c].queue === t) &&
                  (v[c].anim.stop(s), (d = !1), v.splice(c, 1));
              (d || !s) && o.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            t !== !1 && (t = t || "fx"),
            this.each(function () {
              var i,
                s = fe.get(this),
                l = s[t + "queue"],
                d = s[t + "queueHooks"],
                c = o.timers,
                v = l ? l.length : 0;
              for (
                s.finish = !0,
                  o.queue(this, t, []),
                  d && d.stop && d.stop.call(this, !0),
                  i = c.length;
                i--;

              )
                c[i].elem === this &&
                  c[i].queue === t &&
                  (c[i].anim.stop(!0), c.splice(i, 1));
              for (i = 0; i < v; i++)
                l[i] && l[i].finish && l[i].finish.call(this);
              delete s.finish;
            })
          );
        },
      }),
      o.each(["toggle", "show", "hide"], function (t, i) {
        var s = o.fn[i];
        o.fn[i] = function (l, d, c) {
          return l == null || typeof l == "boolean"
            ? s.apply(this, arguments)
            : this.animate(oi(i, !0), l, d, c);
        };
      }),
      o.each(
        {
          slideDown: oi("show"),
          slideUp: oi("hide"),
          slideToggle: oi("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, i) {
          o.fn[t] = function (s, l, d) {
            return this.animate(i, s, l, d);
          };
        }
      ),
      (o.timers = []),
      (o.fx.tick = function () {
        var t,
          i = 0,
          s = o.timers;
        for (kt = Date.now(); i < s.length; i++)
          (t = s[i]), !t() && s[i] === t && s.splice(i--, 1);
        s.length || o.fx.stop(), (kt = void 0);
      }),
      (o.fx.timer = function (t) {
        o.timers.push(t), o.fx.start();
      }),
      (o.fx.interval = 13),
      (o.fx.start = function () {
        ai || ((ai = !0), Ei());
      }),
      (o.fx.stop = function () {
        ai = null;
      }),
      (o.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (o.fn.delay = function (t, i) {
        return (
          (t = (o.fx && o.fx.speeds[t]) || t),
          (i = i || "fx"),
          this.queue(i, function (s, l) {
            var d = e.setTimeout(s, t);
            l.stop = function () {
              e.clearTimeout(d);
            };
          })
        );
      }),
      (function () {
        var t = m.createElement("input"),
          i = m.createElement("select"),
          s = i.appendChild(m.createElement("option"));
        (t.type = "checkbox"),
          (T.checkOn = t.value !== ""),
          (T.optSelected = s.selected),
          (t = m.createElement("input")),
          (t.value = "t"),
          (t.type = "radio"),
          (T.radioValue = t.value === "t");
      })();
    var yr,
      Wt = o.expr.attrHandle;
    o.fn.extend({
      attr: function (t, i) {
        return Be(this, o.attr, t, i, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          o.removeAttr(this, t);
        });
      },
    }),
      o.extend({
        attr: function (t, i, s) {
          var l,
            d,
            c = t.nodeType;
          if (!(c === 3 || c === 8 || c === 2)) {
            if (typeof t.getAttribute > "u") return o.prop(t, i, s);
            if (
              ((c !== 1 || !o.isXMLDoc(t)) &&
                (d =
                  o.attrHooks[i.toLowerCase()] ||
                  (o.expr.match.bool.test(i) ? yr : void 0)),
              s !== void 0)
            ) {
              if (s === null) {
                o.removeAttr(t, i);
                return;
              }
              return d && "set" in d && (l = d.set(t, s, i)) !== void 0
                ? l
                : (t.setAttribute(i, s + ""), s);
            }
            return d && "get" in d && (l = d.get(t, i)) !== null
              ? l
              : ((l = o.find.attr(t, i)), l ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function (t, i) {
              if (!T.radioValue && i === "radio" && H(t, "input")) {
                var s = t.value;
                return t.setAttribute("type", i), s && (t.value = s), i;
              }
            },
          },
        },
        removeAttr: function (t, i) {
          var s,
            l = 0,
            d = i && i.match(Le);
          if (d && t.nodeType === 1)
            for (; (s = d[l++]); ) t.removeAttribute(s);
        },
      }),
      (yr = {
        set: function (t, i, s) {
          return i === !1 ? o.removeAttr(t, s) : t.setAttribute(s, s), s;
        },
      }),
      o.each(o.expr.match.bool.source.match(/\w+/g), function (t, i) {
        var s = Wt[i] || o.find.attr;
        Wt[i] = function (l, d, c) {
          var v,
            I,
            L = d.toLowerCase();
          return (
            c ||
              ((I = Wt[L]),
              (Wt[L] = v),
              (v = s(l, d, c) != null ? L : null),
              (Wt[L] = I)),
            v
          );
        };
      });
    var dn = /^(?:input|select|textarea|button)$/i,
      cn = /^(?:a|area)$/i;
    o.fn.extend({
      prop: function (t, i) {
        return Be(this, o.prop, t, i, arguments.length > 1);
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[o.propFix[t] || t];
        });
      },
    }),
      o.extend({
        prop: function (t, i, s) {
          var l,
            d,
            c = t.nodeType;
          if (!(c === 3 || c === 8 || c === 2))
            return (
              (c !== 1 || !o.isXMLDoc(t)) &&
                ((i = o.propFix[i] || i), (d = o.propHooks[i])),
              s !== void 0
                ? d && "set" in d && (l = d.set(t, s, i)) !== void 0
                  ? l
                  : (t[i] = s)
                : d && "get" in d && (l = d.get(t, i)) !== null
                  ? l
                  : t[i]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var i = o.find.attr(t, "tabindex");
              return i
                ? parseInt(i, 10)
                : dn.test(t.nodeName) || (cn.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      T.optSelected ||
        (o.propHooks.selected = {
          get: function (t) {
            var i = t.parentNode;
            return i && i.parentNode && i.parentNode.selectedIndex, null;
          },
          set: function (t) {
            var i = t.parentNode;
            i && (i.selectedIndex, i.parentNode && i.parentNode.selectedIndex);
          },
        }),
      o.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          o.propFix[this.toLowerCase()] = this;
        }
      );
    function xt(t) {
      var i = t.match(Le) || [];
      return i.join(" ");
    }
    function St(t) {
      return (t.getAttribute && t.getAttribute("class")) || "";
    }
    function Ci(t) {
      return Array.isArray(t)
        ? t
        : typeof t == "string"
          ? t.match(Le) || []
          : [];
    }
    o.fn.extend({
      addClass: function (t) {
        var i, s, l, d, c, v;
        return S(t)
          ? this.each(function (I) {
              o(this).addClass(t.call(this, I, St(this)));
            })
          : ((i = Ci(t)),
            i.length
              ? this.each(function () {
                  if (
                    ((l = St(this)),
                    (s = this.nodeType === 1 && " " + xt(l) + " "),
                    s)
                  ) {
                    for (c = 0; c < i.length; c++)
                      (d = i[c]),
                        s.indexOf(" " + d + " ") < 0 && (s += d + " ");
                    (v = xt(s)), l !== v && this.setAttribute("class", v);
                  }
                })
              : this);
      },
      removeClass: function (t) {
        var i, s, l, d, c, v;
        return S(t)
          ? this.each(function (I) {
              o(this).removeClass(t.call(this, I, St(this)));
            })
          : arguments.length
            ? ((i = Ci(t)),
              i.length
                ? this.each(function () {
                    if (
                      ((l = St(this)),
                      (s = this.nodeType === 1 && " " + xt(l) + " "),
                      s)
                    ) {
                      for (c = 0; c < i.length; c++)
                        for (d = i[c]; s.indexOf(" " + d + " ") > -1; )
                          s = s.replace(" " + d + " ", " ");
                      (v = xt(s)), l !== v && this.setAttribute("class", v);
                    }
                  })
                : this)
            : this.attr("class", "");
      },
      toggleClass: function (t, i) {
        var s,
          l,
          d,
          c,
          v = typeof t,
          I = v === "string" || Array.isArray(t);
        return S(t)
          ? this.each(function (L) {
              o(this).toggleClass(t.call(this, L, St(this), i), i);
            })
          : typeof i == "boolean" && I
            ? i
              ? this.addClass(t)
              : this.removeClass(t)
            : ((s = Ci(t)),
              this.each(function () {
                if (I)
                  for (c = o(this), d = 0; d < s.length; d++)
                    (l = s[d]),
                      c.hasClass(l) ? c.removeClass(l) : c.addClass(l);
                else
                  (t === void 0 || v === "boolean") &&
                    ((l = St(this)),
                    l && fe.set(this, "__className__", l),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        l || t === !1 ? "" : fe.get(this, "__className__") || ""
                      ));
              }));
      },
      hasClass: function (t) {
        var i,
          s,
          l = 0;
        for (i = " " + t + " "; (s = this[l++]); )
          if (s.nodeType === 1 && (" " + xt(St(s)) + " ").indexOf(i) > -1)
            return !0;
        return !1;
      },
    });
    var pn = /\r/g;
    o.fn.extend({
      val: function (t) {
        var i,
          s,
          l,
          d = this[0];
        return arguments.length
          ? ((l = S(t)),
            this.each(function (c) {
              var v;
              this.nodeType === 1 &&
                (l ? (v = t.call(this, c, o(this).val())) : (v = t),
                v == null
                  ? (v = "")
                  : typeof v == "number"
                    ? (v += "")
                    : Array.isArray(v) &&
                      (v = o.map(v, function (I) {
                        return I == null ? "" : I + "";
                      })),
                (i =
                  o.valHooks[this.type] ||
                  o.valHooks[this.nodeName.toLowerCase()]),
                (!i || !("set" in i) || i.set(this, v, "value") === void 0) &&
                  (this.value = v));
            }))
          : d
            ? ((i = o.valHooks[d.type] || o.valHooks[d.nodeName.toLowerCase()]),
              i && "get" in i && (s = i.get(d, "value")) !== void 0
                ? s
                : ((s = d.value),
                  typeof s == "string" ? s.replace(pn, "") : (s ?? "")))
            : void 0;
      },
    }),
      o.extend({
        valHooks: {
          option: {
            get: function (t) {
              var i = o.find.attr(t, "value");
              return i ?? xt(o.text(t));
            },
          },
          select: {
            get: function (t) {
              var i,
                s,
                l,
                d = t.options,
                c = t.selectedIndex,
                v = t.type === "select-one",
                I = v ? null : [],
                L = v ? c + 1 : d.length;
              for (c < 0 ? (l = L) : (l = v ? c : 0); l < L; l++)
                if (
                  ((s = d[l]),
                  (s.selected || l === c) &&
                    !s.disabled &&
                    (!s.parentNode.disabled || !H(s.parentNode, "optgroup")))
                ) {
                  if (((i = o(s).val()), v)) return i;
                  I.push(i);
                }
              return I;
            },
            set: function (t, i) {
              for (
                var s, l, d = t.options, c = o.makeArray(i), v = d.length;
                v--;

              )
                (l = d[v]),
                  (l.selected = o.inArray(o.valHooks.option.get(l), c) > -1) &&
                    (s = !0);
              return s || (t.selectedIndex = -1), c;
            },
          },
        },
      }),
      o.each(["radio", "checkbox"], function () {
        (o.valHooks[this] = {
          set: function (t, i) {
            if (Array.isArray(i))
              return (t.checked = o.inArray(o(t).val(), i) > -1);
          },
        }),
          T.checkOn ||
            (o.valHooks[this].get = function (t) {
              return t.getAttribute("value") === null ? "on" : t.value;
            });
      });
    var Xt = e.location,
      wr = { guid: Date.now() },
      Mi = /\?/;
    o.parseXML = function (t) {
      var i, s;
      if (!t || typeof t != "string") return null;
      try {
        i = new e.DOMParser().parseFromString(t, "text/xml");
      } catch {}
      return (
        (s = i && i.getElementsByTagName("parsererror")[0]),
        (!i || s) &&
          o.error(
            "Invalid XML: " +
              (s
                ? o.map(s.childNodes, function (l) {
                    return l.textContent;
                  }).join(`
`)
                : t)
          ),
        i
      );
    };
    var br = /^(?:focusinfocus|focusoutblur)$/,
      xr = function (t) {
        t.stopPropagation();
      };
    o.extend(o.event, {
      trigger: function (t, i, s, l) {
        var d,
          c,
          v,
          I,
          L,
          k,
          F,
          Y,
          N = [s || m],
          J = h.call(t, "type") ? t.type : t,
          ce = h.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((c = Y = v = s = s || m),
          !(s.nodeType === 3 || s.nodeType === 8) &&
            !br.test(J + o.event.triggered) &&
            (J.indexOf(".") > -1 &&
              ((ce = J.split(".")), (J = ce.shift()), ce.sort()),
            (L = J.indexOf(":") < 0 && "on" + J),
            (t = t[o.expando] ? t : new o.Event(J, typeof t == "object" && t)),
            (t.isTrigger = l ? 2 : 3),
            (t.namespace = ce.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + ce.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = s),
            (i = i == null ? [t] : o.makeArray(i, [t])),
            (F = o.event.special[J] || {}),
            !(!l && F.trigger && F.trigger.apply(s, i) === !1)))
        ) {
          if (!l && !F.noBubble && !P(s)) {
            for (
              I = F.delegateType || J, br.test(I + J) || (c = c.parentNode);
              c;
              c = c.parentNode
            )
              N.push(c), (v = c);
            v === (s.ownerDocument || m) &&
              N.push(v.defaultView || v.parentWindow || e);
          }
          for (d = 0; (c = N[d++]) && !t.isPropagationStopped(); )
            (Y = c),
              (t.type = d > 1 ? I : F.bindType || J),
              (k =
                (fe.get(c, "events") || Object.create(null))[t.type] &&
                fe.get(c, "handle")),
              k && k.apply(c, i),
              (k = L && c[L]),
              k &&
                k.apply &&
                ct(c) &&
                ((t.result = k.apply(c, i)),
                t.result === !1 && t.preventDefault());
          return (
            (t.type = J),
            !l &&
              !t.isDefaultPrevented() &&
              (!F._default || F._default.apply(N.pop(), i) === !1) &&
              ct(s) &&
              L &&
              S(s[J]) &&
              !P(s) &&
              ((v = s[L]),
              v && (s[L] = null),
              (o.event.triggered = J),
              t.isPropagationStopped() && Y.addEventListener(J, xr),
              s[J](),
              t.isPropagationStopped() && Y.removeEventListener(J, xr),
              (o.event.triggered = void 0),
              v && (s[L] = v)),
            t.result
          );
        }
      },
      simulate: function (t, i, s) {
        var l = o.extend(new o.Event(), s, { type: t, isSimulated: !0 });
        o.event.trigger(l, null, i);
      },
    }),
      o.fn.extend({
        trigger: function (t, i) {
          return this.each(function () {
            o.event.trigger(t, i, this);
          });
        },
        triggerHandler: function (t, i) {
          var s = this[0];
          if (s) return o.event.trigger(t, i, s, !0);
        },
      });
    var hn = /\[\]$/,
      Sr = /\r?\n/g,
      mn = /^(?:submit|button|image|reset|file)$/i,
      gn = /^(?:input|select|textarea|keygen)/i;
    function Pi(t, i, s, l) {
      var d;
      if (Array.isArray(i))
        o.each(i, function (c, v) {
          s || hn.test(t)
            ? l(t, v)
            : Pi(
                t + "[" + (typeof v == "object" && v != null ? c : "") + "]",
                v,
                s,
                l
              );
        });
      else if (!s && O(i) === "object")
        for (d in i) Pi(t + "[" + d + "]", i[d], s, l);
      else l(t, i);
    }
    (o.param = function (t, i) {
      var s,
        l = [],
        d = function (c, v) {
          var I = S(v) ? v() : v;
          l[l.length] =
            encodeURIComponent(c) + "=" + encodeURIComponent(I ?? "");
        };
      if (t == null) return "";
      if (Array.isArray(t) || (t.jquery && !o.isPlainObject(t)))
        o.each(t, function () {
          d(this.name, this.value);
        });
      else for (s in t) Pi(s, t[s], i, d);
      return l.join("&");
    }),
      o.fn.extend({
        serialize: function () {
          return o.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = o.prop(this, "elements");
            return t ? o.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !o(this).is(":disabled") &&
                gn.test(this.nodeName) &&
                !mn.test(t) &&
                (this.checked || !Gt.test(t))
              );
            })
            .map(function (t, i) {
              var s = o(this).val();
              return s == null
                ? null
                : Array.isArray(s)
                  ? o.map(s, function (l) {
                      return {
                        name: i.name,
                        value: l.replace(
                          Sr,
                          `\r
`
                        ),
                      };
                    })
                  : {
                      name: i.name,
                      value: s.replace(
                        Sr,
                        `\r
`
                      ),
                    };
            })
            .get();
        },
      });
    var vn = /%20/g,
      yn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      bn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Sn = /^(?:GET|HEAD)$/,
      Tn = /^\/\//,
      Tr = {},
      Li = {},
      Er = "*/".concat("*"),
      Ai = m.createElement("a");
    Ai.href = Xt.href;
    function Cr(t) {
      return function (i, s) {
        typeof i != "string" && ((s = i), (i = "*"));
        var l,
          d = 0,
          c = i.toLowerCase().match(Le) || [];
        if (S(s))
          for (; (l = c[d++]); )
            l[0] === "+"
              ? ((l = l.slice(1) || "*"), (t[l] = t[l] || []).unshift(s))
              : (t[l] = t[l] || []).push(s);
      };
    }
    function Mr(t, i, s, l) {
      var d = {},
        c = t === Li;
      function v(I) {
        var L;
        return (
          (d[I] = !0),
          o.each(t[I] || [], function (k, F) {
            var Y = F(i, s, l);
            if (typeof Y == "string" && !c && !d[Y])
              return i.dataTypes.unshift(Y), v(Y), !1;
            if (c) return !(L = Y);
          }),
          L
        );
      }
      return v(i.dataTypes[0]) || (!d["*"] && v("*"));
    }
    function Ii(t, i) {
      var s,
        l,
        d = o.ajaxSettings.flatOptions || {};
      for (s in i) i[s] !== void 0 && ((d[s] ? t : l || (l = {}))[s] = i[s]);
      return l && o.extend(!0, t, l), t;
    }
    function En(t, i, s) {
      for (var l, d, c, v, I = t.contents, L = t.dataTypes; L[0] === "*"; )
        L.shift(),
          l === void 0 &&
            (l = t.mimeType || i.getResponseHeader("Content-Type"));
      if (l) {
        for (d in I)
          if (I[d] && I[d].test(l)) {
            L.unshift(d);
            break;
          }
      }
      if (L[0] in s) c = L[0];
      else {
        for (d in s) {
          if (!L[0] || t.converters[d + " " + L[0]]) {
            c = d;
            break;
          }
          v || (v = d);
        }
        c = c || v;
      }
      if (c) return c !== L[0] && L.unshift(c), s[c];
    }
    function Cn(t, i, s, l) {
      var d,
        c,
        v,
        I,
        L,
        k = {},
        F = t.dataTypes.slice();
      if (F[1]) for (v in t.converters) k[v.toLowerCase()] = t.converters[v];
      for (c = F.shift(); c; )
        if (
          (t.responseFields[c] && (s[t.responseFields[c]] = i),
          !L && l && t.dataFilter && (i = t.dataFilter(i, t.dataType)),
          (L = c),
          (c = F.shift()),
          c)
        ) {
          if (c === "*") c = L;
          else if (L !== "*" && L !== c) {
            if (((v = k[L + " " + c] || k["* " + c]), !v)) {
              for (d in k)
                if (
                  ((I = d.split(" ")),
                  I[1] === c && ((v = k[L + " " + I[0]] || k["* " + I[0]]), v))
                ) {
                  v === !0
                    ? (v = k[d])
                    : k[d] !== !0 && ((c = I[0]), F.unshift(I[1]));
                  break;
                }
            }
            if (v !== !0)
              if (v && t.throws) i = v(i);
              else
                try {
                  i = v(i);
                } catch (Y) {
                  return {
                    state: "parsererror",
                    error: v ? Y : "No conversion from " + L + " to " + c,
                  };
                }
          }
        }
      return { state: "success", data: i };
    }
    o.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Xt.href,
        type: "GET",
        isLocal: xn.test(Xt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Er,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": o.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, i) {
        return i ? Ii(Ii(t, o.ajaxSettings), i) : Ii(o.ajaxSettings, t);
      },
      ajaxPrefilter: Cr(Tr),
      ajaxTransport: Cr(Li),
      ajax: function (t, i) {
        typeof t == "object" && ((i = t), (t = void 0)), (i = i || {});
        var s,
          l,
          d,
          c,
          v,
          I,
          L,
          k,
          F,
          Y,
          N = o.ajaxSetup({}, i),
          J = N.context || N,
          ce = N.context && (J.nodeType || J.jquery) ? o(J) : o.event,
          be = o.Deferred(),
          me = o.Callbacks("once memory"),
          De = N.statusCode || {},
          Ae = {},
          Ze = {},
          Je = "canceled",
          we = {
            readyState: 0,
            getResponseHeader: function (xe) {
              var Me;
              if (L) {
                if (!c)
                  for (c = {}; (Me = bn.exec(d)); )
                    c[Me[1].toLowerCase() + " "] = (
                      c[Me[1].toLowerCase() + " "] || []
                    ).concat(Me[2]);
                Me = c[xe.toLowerCase() + " "];
              }
              return Me == null ? null : Me.join(", ");
            },
            getAllResponseHeaders: function () {
              return L ? d : null;
            },
            setRequestHeader: function (xe, Me) {
              return (
                L == null &&
                  ((xe = Ze[xe.toLowerCase()] = Ze[xe.toLowerCase()] || xe),
                  (Ae[xe] = Me)),
                this
              );
            },
            overrideMimeType: function (xe) {
              return L == null && (N.mimeType = xe), this;
            },
            statusCode: function (xe) {
              var Me;
              if (xe)
                if (L) we.always(xe[we.status]);
                else for (Me in xe) De[Me] = [De[Me], xe[Me]];
              return this;
            },
            abort: function (xe) {
              var Me = xe || Je;
              return s && s.abort(Me), Tt(0, Me), this;
            },
          };
        if (
          (be.promise(we),
          (N.url = ((t || N.url || Xt.href) + "").replace(
            Tn,
            Xt.protocol + "//"
          )),
          (N.type = i.method || i.type || N.method || N.type),
          (N.dataTypes = (N.dataType || "*").toLowerCase().match(Le) || [""]),
          N.crossDomain == null)
        ) {
          I = m.createElement("a");
          try {
            (I.href = N.url),
              (I.href = I.href),
              (N.crossDomain =
                Ai.protocol + "//" + Ai.host != I.protocol + "//" + I.host);
          } catch {
            N.crossDomain = !0;
          }
        }
        if (
          (N.data &&
            N.processData &&
            typeof N.data != "string" &&
            (N.data = o.param(N.data, N.traditional)),
          Mr(Tr, N, i, we),
          L)
        )
          return we;
        (k = o.event && N.global),
          k && o.active++ === 0 && o.event.trigger("ajaxStart"),
          (N.type = N.type.toUpperCase()),
          (N.hasContent = !Sn.test(N.type)),
          (l = N.url.replace(yn, "")),
          N.hasContent
            ? N.data &&
              N.processData &&
              (N.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) === 0 &&
              (N.data = N.data.replace(vn, "+"))
            : ((Y = N.url.slice(l.length)),
              N.data &&
                (N.processData || typeof N.data == "string") &&
                ((l += (Mi.test(l) ? "&" : "?") + N.data), delete N.data),
              N.cache === !1 &&
                ((l = l.replace(wn, "$1")),
                (Y = (Mi.test(l) ? "&" : "?") + "_=" + wr.guid++ + Y)),
              (N.url = l + Y)),
          N.ifModified &&
            (o.lastModified[l] &&
              we.setRequestHeader("If-Modified-Since", o.lastModified[l]),
            o.etag[l] && we.setRequestHeader("If-None-Match", o.etag[l])),
          ((N.data && N.hasContent && N.contentType !== !1) || i.contentType) &&
            we.setRequestHeader("Content-Type", N.contentType),
          we.setRequestHeader(
            "Accept",
            N.dataTypes[0] && N.accepts[N.dataTypes[0]]
              ? N.accepts[N.dataTypes[0]] +
                  (N.dataTypes[0] !== "*" ? ", " + Er + "; q=0.01" : "")
              : N.accepts["*"]
          );
        for (F in N.headers) we.setRequestHeader(F, N.headers[F]);
        if (N.beforeSend && (N.beforeSend.call(J, we, N) === !1 || L))
          return we.abort();
        if (
          ((Je = "abort"),
          me.add(N.complete),
          we.done(N.success),
          we.fail(N.error),
          (s = Mr(Li, N, i, we)),
          !s)
        )
          Tt(-1, "No Transport");
        else {
          if (((we.readyState = 1), k && ce.trigger("ajaxSend", [we, N]), L))
            return we;
          N.async &&
            N.timeout > 0 &&
            (v = e.setTimeout(function () {
              we.abort("timeout");
            }, N.timeout));
          try {
            (L = !1), s.send(Ae, Tt);
          } catch (xe) {
            if (L) throw xe;
            Tt(-1, xe);
          }
        }
        function Tt(xe, Me, Yt, Oi) {
          var et,
            Ut,
            tt,
            pt,
            ht,
            Xe = Me;
          L ||
            ((L = !0),
            v && e.clearTimeout(v),
            (s = void 0),
            (d = Oi || ""),
            (we.readyState = xe > 0 ? 4 : 0),
            (et = (xe >= 200 && xe < 300) || xe === 304),
            Yt && (pt = En(N, we, Yt)),
            !et &&
              o.inArray("script", N.dataTypes) > -1 &&
              o.inArray("json", N.dataTypes) < 0 &&
              (N.converters["text script"] = function () {}),
            (pt = Cn(N, pt, we, et)),
            et
              ? (N.ifModified &&
                  ((ht = we.getResponseHeader("Last-Modified")),
                  ht && (o.lastModified[l] = ht),
                  (ht = we.getResponseHeader("etag")),
                  ht && (o.etag[l] = ht)),
                xe === 204 || N.type === "HEAD"
                  ? (Xe = "nocontent")
                  : xe === 304
                    ? (Xe = "notmodified")
                    : ((Xe = pt.state),
                      (Ut = pt.data),
                      (tt = pt.error),
                      (et = !tt)))
              : ((tt = Xe),
                (xe || !Xe) && ((Xe = "error"), xe < 0 && (xe = 0))),
            (we.status = xe),
            (we.statusText = (Me || Xe) + ""),
            et
              ? be.resolveWith(J, [Ut, Xe, we])
              : be.rejectWith(J, [we, Xe, tt]),
            we.statusCode(De),
            (De = void 0),
            k &&
              ce.trigger(et ? "ajaxSuccess" : "ajaxError", [
                we,
                N,
                et ? Ut : tt,
              ]),
            me.fireWith(J, [we, Xe]),
            k &&
              (ce.trigger("ajaxComplete", [we, N]),
              --o.active || o.event.trigger("ajaxStop")));
        }
        return we;
      },
      getJSON: function (t, i, s) {
        return o.get(t, i, s, "json");
      },
      getScript: function (t, i) {
        return o.get(t, void 0, i, "script");
      },
    }),
      o.each(["get", "post"], function (t, i) {
        o[i] = function (s, l, d, c) {
          return (
            S(l) && ((c = c || d), (d = l), (l = void 0)),
            o.ajax(
              o.extend(
                { url: s, type: i, dataType: c, data: l, success: d },
                o.isPlainObject(s) && s
              )
            )
          );
        };
      }),
      o.ajaxPrefilter(function (t) {
        var i;
        for (i in t.headers)
          i.toLowerCase() === "content-type" &&
            (t.contentType = t.headers[i] || "");
      }),
      (o._evalUrl = function (t, i, s) {
        return o.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (l) {
            o.globalEval(l, i, s);
          },
        });
      }),
      o.fn.extend({
        wrapAll: function (t) {
          var i;
          return (
            this[0] &&
              (S(t) && (t = t.call(this[0])),
              (i = o(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && i.insertBefore(this[0]),
              i
                .map(function () {
                  for (var s = this; s.firstElementChild; )
                    s = s.firstElementChild;
                  return s;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (t) {
          return S(t)
            ? this.each(function (i) {
                o(this).wrapInner(t.call(this, i));
              })
            : this.each(function () {
                var i = o(this),
                  s = i.contents();
                s.length ? s.wrapAll(t) : i.append(t);
              });
        },
        wrap: function (t) {
          var i = S(t);
          return this.each(function (s) {
            o(this).wrapAll(i ? t.call(this, s) : t);
          });
        },
        unwrap: function (t) {
          return (
            this.parent(t)
              .not("body")
              .each(function () {
                o(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (o.expr.pseudos.hidden = function (t) {
        return !o.expr.pseudos.visible(t);
      }),
      (o.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
      }),
      (o.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch {}
      });
    var Mn = { 0: 200, 1223: 204 },
      Vt = o.ajaxSettings.xhr();
    (T.cors = !!Vt && "withCredentials" in Vt),
      (T.ajax = Vt = !!Vt),
      o.ajaxTransport(function (t) {
        var i, s;
        if (T.cors || (Vt && !t.crossDomain))
          return {
            send: function (l, d) {
              var c,
                v = t.xhr();
              if (
                (v.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (c in t.xhrFields) v[c] = t.xhrFields[c];
              t.mimeType &&
                v.overrideMimeType &&
                v.overrideMimeType(t.mimeType),
                !t.crossDomain &&
                  !l["X-Requested-With"] &&
                  (l["X-Requested-With"] = "XMLHttpRequest");
              for (c in l) v.setRequestHeader(c, l[c]);
              (i = function (I) {
                return function () {
                  i &&
                    ((i =
                      s =
                      v.onload =
                      v.onerror =
                      v.onabort =
                      v.ontimeout =
                      v.onreadystatechange =
                        null),
                    I === "abort"
                      ? v.abort()
                      : I === "error"
                        ? typeof v.status != "number"
                          ? d(0, "error")
                          : d(v.status, v.statusText)
                        : d(
                            Mn[v.status] || v.status,
                            v.statusText,
                            (v.responseType || "text") !== "text" ||
                              typeof v.responseText != "string"
                              ? { binary: v.response }
                              : { text: v.responseText },
                            v.getAllResponseHeaders()
                          ));
                };
              }),
                (v.onload = i()),
                (s = v.onerror = v.ontimeout = i("error")),
                v.onabort !== void 0
                  ? (v.onabort = s)
                  : (v.onreadystatechange = function () {
                      v.readyState === 4 &&
                        e.setTimeout(function () {
                          i && s();
                        });
                    }),
                (i = i("abort"));
              try {
                v.send((t.hasContent && t.data) || null);
              } catch (I) {
                if (i) throw I;
              }
            },
            abort: function () {
              i && i();
            },
          };
      }),
      o.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1);
      }),
      o.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (t) {
            return o.globalEval(t), t;
          },
        },
      }),
      o.ajaxPrefilter("script", function (t) {
        t.cache === void 0 && (t.cache = !1), t.crossDomain && (t.type = "GET");
      }),
      o.ajaxTransport("script", function (t) {
        if (t.crossDomain || t.scriptAttrs) {
          var i, s;
          return {
            send: function (l, d) {
              (i = o("<script>")
                .attr(t.scriptAttrs || {})
                .prop({ charset: t.scriptCharset, src: t.url })
                .on(
                  "load error",
                  (s = function (c) {
                    i.remove(),
                      (s = null),
                      c && d(c.type === "error" ? 404 : 200, c.type);
                  })
                )),
                m.head.appendChild(i[0]);
            },
            abort: function () {
              s && s();
            },
          };
        }
      });
    var Pr = [],
      Di = /(=)\?(?=&|$)|\?\?/;
    o.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = Pr.pop() || o.expando + "_" + wr.guid++;
        return (this[t] = !0), t;
      },
    }),
      o.ajaxPrefilter("json jsonp", function (t, i, s) {
        var l,
          d,
          c,
          v =
            t.jsonp !== !1 &&
            (Di.test(t.url)
              ? "url"
              : typeof t.data == "string" &&
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                Di.test(t.data) &&
                "data");
        if (v || t.dataTypes[0] === "jsonp")
          return (
            (l = t.jsonpCallback =
              S(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
            v
              ? (t[v] = t[v].replace(Di, "$1" + l))
              : t.jsonp !== !1 &&
                (t.url += (Mi.test(t.url) ? "&" : "?") + t.jsonp + "=" + l),
            (t.converters["script json"] = function () {
              return c || o.error(l + " was not called"), c[0];
            }),
            (t.dataTypes[0] = "json"),
            (d = e[l]),
            (e[l] = function () {
              c = arguments;
            }),
            s.always(function () {
              d === void 0 ? o(e).removeProp(l) : (e[l] = d),
                t[l] && ((t.jsonpCallback = i.jsonpCallback), Pr.push(l)),
                c && S(d) && d(c[0]),
                (c = d = void 0);
            }),
            "script"
          );
      }),
      (T.createHTMLDocument = (function () {
        var t = m.implementation.createHTMLDocument("").body;
        return (
          (t.innerHTML = "<form></form><form></form>"),
          t.childNodes.length === 2
        );
      })()),
      (o.parseHTML = function (t, i, s) {
        if (typeof t != "string") return [];
        typeof i == "boolean" && ((s = i), (i = !1));
        var l, d, c;
        return (
          i ||
            (T.createHTMLDocument
              ? ((i = m.implementation.createHTMLDocument("")),
                (l = i.createElement("base")),
                (l.href = m.location.href),
                i.head.appendChild(l))
              : (i = m)),
          (d = te.exec(t)),
          (c = !s && []),
          d
            ? [i.createElement(d[1])]
            : ((d = rr([t], i, c)),
              c && c.length && o(c).remove(),
              o.merge([], d.childNodes))
        );
      }),
      (o.fn.load = function (t, i, s) {
        var l,
          d,
          c,
          v = this,
          I = t.indexOf(" ");
        return (
          I > -1 && ((l = xt(t.slice(I))), (t = t.slice(0, I))),
          S(i)
            ? ((s = i), (i = void 0))
            : i && typeof i == "object" && (d = "POST"),
          v.length > 0 &&
            o
              .ajax({ url: t, type: d || "GET", dataType: "html", data: i })
              .done(function (L) {
                (c = arguments),
                  v.html(l ? o("<div>").append(o.parseHTML(L)).find(l) : L);
              })
              .always(
                s &&
                  function (L, k) {
                    v.each(function () {
                      s.apply(this, c || [L.responseText, k, L]);
                    });
                  }
              ),
          this
        );
      }),
      (o.expr.pseudos.animated = function (t) {
        return o.grep(o.timers, function (i) {
          return t === i.elem;
        }).length;
      }),
      (o.offset = {
        setOffset: function (t, i, s) {
          var l,
            d,
            c,
            v,
            I,
            L,
            k,
            F = o.css(t, "position"),
            Y = o(t),
            N = {};
          F === "static" && (t.style.position = "relative"),
            (I = Y.offset()),
            (c = o.css(t, "top")),
            (L = o.css(t, "left")),
            (k =
              (F === "absolute" || F === "fixed") &&
              (c + L).indexOf("auto") > -1),
            k
              ? ((l = Y.position()), (v = l.top), (d = l.left))
              : ((v = parseFloat(c) || 0), (d = parseFloat(L) || 0)),
            S(i) && (i = i.call(t, s, o.extend({}, I))),
            i.top != null && (N.top = i.top - I.top + v),
            i.left != null && (N.left = i.left - I.left + d),
            "using" in i ? i.using.call(t, N) : Y.css(N);
        },
      }),
      o.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return t === void 0
              ? this
              : this.each(function (d) {
                  o.offset.setOffset(this, t, d);
                });
          var i,
            s,
            l = this[0];
          if (l)
            return l.getClientRects().length
              ? ((i = l.getBoundingClientRect()),
                (s = l.ownerDocument.defaultView),
                { top: i.top + s.pageYOffset, left: i.left + s.pageXOffset })
              : { top: 0, left: 0 };
        },
        position: function () {
          if (this[0]) {
            var t,
              i,
              s,
              l = this[0],
              d = { top: 0, left: 0 };
            if (o.css(l, "position") === "fixed") i = l.getBoundingClientRect();
            else {
              for (
                i = this.offset(),
                  s = l.ownerDocument,
                  t = l.offsetParent || s.documentElement;
                t &&
                (t === s.body || t === s.documentElement) &&
                o.css(t, "position") === "static";

              )
                t = t.parentNode;
              t &&
                t !== l &&
                t.nodeType === 1 &&
                ((d = o(t).offset()),
                (d.top += o.css(t, "borderTopWidth", !0)),
                (d.left += o.css(t, "borderLeftWidth", !0)));
            }
            return {
              top: i.top - d.top - o.css(l, "marginTop", !0),
              left: i.left - d.left - o.css(l, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent;
              t && o.css(t, "position") === "static";

            )
              t = t.offsetParent;
            return t || bt;
          });
        },
      }),
      o.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, i) {
          var s = i === "pageYOffset";
          o.fn[t] = function (l) {
            return Be(
              this,
              function (d, c, v) {
                var I;
                if (
                  (P(d) ? (I = d) : d.nodeType === 9 && (I = d.defaultView),
                  v === void 0)
                )
                  return I ? I[i] : d[c];
                I
                  ? I.scrollTo(s ? I.pageXOffset : v, s ? v : I.pageYOffset)
                  : (d[c] = v);
              },
              t,
              l,
              arguments.length
            );
          };
        }
      ),
      o.each(["top", "left"], function (t, i) {
        o.cssHooks[i] = fr(T.pixelPosition, function (s, l) {
          if (l)
            return (l = _t(s, i)), bi.test(l) ? o(s).position()[i] + "px" : l;
        });
      }),
      o.each({ Height: "height", Width: "width" }, function (t, i) {
        o.each(
          { padding: "inner" + t, content: i, "": "outer" + t },
          function (s, l) {
            o.fn[l] = function (d, c) {
              var v = arguments.length && (s || typeof d != "boolean"),
                I = s || (d === !0 || c === !0 ? "margin" : "border");
              return Be(
                this,
                function (L, k, F) {
                  var Y;
                  return P(L)
                    ? l.indexOf("outer") === 0
                      ? L["inner" + t]
                      : L.document.documentElement["client" + t]
                    : L.nodeType === 9
                      ? ((Y = L.documentElement),
                        Math.max(
                          L.body["scroll" + t],
                          Y["scroll" + t],
                          L.body["offset" + t],
                          Y["offset" + t],
                          Y["client" + t]
                        ))
                      : F === void 0
                        ? o.css(L, k, I)
                        : o.style(L, k, F, I);
                },
                i,
                v ? d : void 0,
                v
              );
            };
          }
        );
      }),
      o.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, i) {
          o.fn[i] = function (s) {
            return this.on(i, s);
          };
        }
      ),
      o.fn.extend({
        bind: function (t, i, s) {
          return this.on(t, null, i, s);
        },
        unbind: function (t, i) {
          return this.off(t, null, i);
        },
        delegate: function (t, i, s, l) {
          return this.on(i, t, s, l);
        },
        undelegate: function (t, i, s) {
          return arguments.length === 1
            ? this.off(t, "**")
            : this.off(i, t || "**", s);
        },
        hover: function (t, i) {
          return this.on("mouseenter", t).on("mouseleave", i || t);
        },
      }),
      o.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (t, i) {
          o.fn[i] = function (s, l) {
            return arguments.length > 0
              ? this.on(i, null, s, l)
              : this.trigger(i);
          };
        }
      );
    var Pn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (o.proxy = function (t, i) {
      var s, l, d;
      if ((typeof i == "string" && ((s = t[i]), (i = t), (t = s)), !!S(t)))
        return (
          (l = f.call(arguments, 2)),
          (d = function () {
            return t.apply(i || this, l.concat(f.call(arguments)));
          }),
          (d.guid = t.guid = t.guid || o.guid++),
          d
        );
    }),
      (o.holdReady = function (t) {
        t ? o.readyWait++ : o.ready(!0);
      }),
      (o.isArray = Array.isArray),
      (o.parseJSON = JSON.parse),
      (o.nodeName = H),
      (o.isFunction = S),
      (o.isWindow = P),
      (o.camelCase = ze),
      (o.type = O),
      (o.now = Date.now),
      (o.isNumeric = function (t) {
        var i = o.type(t);
        return (i === "number" || i === "string") && !isNaN(t - parseFloat(t));
      }),
      (o.trim = function (t) {
        return t == null ? "" : (t + "").replace(Pn, "$1");
      });
    var Ln = e.jQuery,
      An = e.$;
    return (
      (o.noConflict = function (t) {
        return (
          e.$ === o && (e.$ = An), t && e.jQuery === o && (e.jQuery = Ln), o
        );
      }),
      typeof r > "u" && (e.jQuery = e.$ = o),
      o
    );
  });
})(Gr);
var Da = Gr.exports;
const ci = Ia(Da);
new Fe(".swiper", {
  slidesPerView: 1,
  breakpoints: { 680: { slidesPerView: 2 } },
  spaceBetween: 30,
  loop: !1,
  autoWidth: !1,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
ci(document).ready(function () {
  var n = ci(".header_mobile");
  ci(".hamburger").on("click", function () {
    n.addClass("is-active");
  }),
    ci(".hamburger_exit").on("click", function () {
      n.removeClass("is-active");
    });
});

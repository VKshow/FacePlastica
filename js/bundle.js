/*! For license information please see bundle.js.LICENSE.txt */ ! function () {
    var t = {
            702: function (t, e, n) {
                t.exports = function () {
                    "use strict";

                    function t(t) {
                        return "function" == typeof t
                    }
                    var e = Array.isArray ? Array.isArray : function (t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        r = 0,
                        o = void 0,
                        i = void 0,
                        s = function (t, e) {
                            f[r] = t, f[r + 1] = e, 2 === (r += 2) && (i ? i(m) : _())
                        };
                    var c = "undefined" != typeof window ? window : void 0,
                        a = c || {},
                        l = a.MutationObserver || a.WebKitMutationObserver,
                        u = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                        d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                    function h() {
                        var t = setTimeout;
                        return function () {
                            return t(m, 1)
                        }
                    }
                    var f = new Array(1e3);

                    function m() {
                        for (var t = 0; t < r; t += 2)(0, f[t])(f[t + 1]), f[t] = void 0, f[t + 1] = void 0;
                        r = 0
                    }
                    var v, p, g, y, _ = void 0;

                    function w(t, e) {
                        var n = this,
                            r = new this.constructor(x);
                        void 0 === r[S] && H(r);
                        var o = n._state;
                        if (o) {
                            var i = arguments[o - 1];
                            s((function () {
                                return I(o, r, i, n._result)
                            }))
                        } else k(n, r, t, e);
                        return r
                    }

                    function b(t) {
                        if (t && "object" == typeof t && t.constructor === this) return t;
                        var e = new this(x);
                        return C(e, t), e
                    }
                    _ = u ? function () {
                        return process.nextTick(m)
                    } : l ? (p = 0, g = new l(m), y = document.createTextNode(""), g.observe(y, {
                        characterData: !0
                    }), function () {
                        y.data = p = ++p % 2
                    }) : d ? ((v = new MessageChannel).port1.onmessage = m, function () {
                        return v.port2.postMessage(0)
                    }) : void 0 === c ? function () {
                        try {
                            var t = Function("return this")().require("vertx");
                            return void 0 !== (o = t.runOnLoop || t.runOnContext) ? function () {
                                o(m)
                            } : h()
                        } catch (t) {
                            return h()
                        }
                    }() : h();
                    var S = Math.random().toString(36).substring(2);

                    function x() {}
                    var E = void 0,
                        L = 1,
                        A = 2;

                    function q(e, n, r) {
                        n.constructor === e.constructor && r === w && n.constructor.resolve === b ? function (t, e) {
                            e._state === L ? M(t, e._result) : e._state === A ? j(t, e._result) : k(e, void 0, (function (e) {
                                return C(t, e)
                            }), (function (e) {
                                return j(t, e)
                            }))
                        }(e, n) : void 0 === r ? M(e, n) : t(r) ? function (t, e, n) {
                            s((function (t) {
                                var r = !1,
                                    o = function (t, e, n, r) {
                                        try {
                                            t.call(e, n, r)
                                        } catch (t) {
                                            return t
                                        }
                                    }(n, e, (function (n) {
                                        r || (r = !0, e !== n ? C(t, n) : M(t, n))
                                    }), (function (e) {
                                        r || (r = !0, j(t, e))
                                    }), t._label);
                                !r && o && (r = !0, j(t, o))
                            }), t)
                        }(e, n, r) : M(e, n)
                    }

                    function C(t, e) {
                        if (t === e) j(t, new TypeError("You cannot resolve a promise with itself"));
                        else if (o = typeof (r = e), null === r || "object" !== o && "function" !== o) M(t, e);
                        else {
                            var n = void 0;
                            try {
                                n = e.then
                            } catch (e) {
                                return void j(t, e)
                            }
                            q(t, e, n)
                        }
                        var r, o
                    }

                    function T(t) {
                        t._onerror && t._onerror(t._result), $(t)
                    }

                    function M(t, e) {
                        t._state === E && (t._result = e, t._state = L, 0 !== t._subscribers.length && s($, t))
                    }

                    function j(t, e) {
                        t._state === E && (t._state = A, t._result = e, s(T, t))
                    }

                    function k(t, e, n, r) {
                        var o = t._subscribers,
                            i = o.length;
                        t._onerror = null, o[i] = e, o[i + L] = n, o[i + A] = r, 0 === i && t._state && s($, t)
                    }

                    function $(t) {
                        var e = t._subscribers,
                            n = t._state;
                        if (0 !== e.length) {
                            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? I(n, r, o, i) : o(i);
                            t._subscribers.length = 0
                        }
                    }

                    function I(e, n, r, o) {
                        var i = t(r),
                            s = void 0,
                            c = void 0,
                            a = !0;
                        if (i) {
                            try {
                                s = r(o)
                            } catch (t) {
                                a = !1, c = t
                            }
                            if (n === s) return void j(n, new TypeError("A promises callback cannot return that same promise."))
                        } else s = o;
                        n._state !== E || (i && a ? C(n, s) : !1 === a ? j(n, c) : e === L ? M(n, s) : e === A && j(n, s))
                    }
                    var O = 0;

                    function H(t) {
                        t[S] = O++, t._state = void 0, t._result = void 0, t._subscribers = []
                    }
                    var D = function () {
                        function t(t, n) {
                            this._instanceConstructor = t, this.promise = new t(x), this.promise[S] || H(this.promise), e(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? M(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), 0 === this._remaining && M(this.promise, this._result))) : j(this.promise, new Error("Array Methods must be provided an Array"))
                        }
                        return t.prototype._enumerate = function (t) {
                            for (var e = 0; this._state === E && e < t.length; e++) this._eachEntry(t[e], e)
                        }, t.prototype._eachEntry = function (t, e) {
                            var n = this._instanceConstructor,
                                r = n.resolve;
                            if (r === b) {
                                var o = void 0,
                                    i = void 0,
                                    s = !1;
                                try {
                                    o = t.then
                                } catch (t) {
                                    s = !0, i = t
                                }
                                if (o === w && t._state !== E) this._settledAt(t._state, e, t._result);
                                else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                                else if (n === P) {
                                    var c = new n(x);
                                    s ? j(c, i) : q(c, t, o), this._willSettleAt(c, e)
                                } else this._willSettleAt(new n((function (e) {
                                    return e(t)
                                })), e)
                            } else this._willSettleAt(r(t), e)
                        }, t.prototype._settledAt = function (t, e, n) {
                            var r = this.promise;
                            r._state === E && (this._remaining--, t === A ? j(r, n) : this._result[e] = n), 0 === this._remaining && M(r, this._result)
                        }, t.prototype._willSettleAt = function (t, e) {
                            var n = this;
                            k(t, void 0, (function (t) {
                                return n._settledAt(L, e, t)
                            }), (function (t) {
                                return n._settledAt(A, e, t)
                            }))
                        }, t
                    }();
                    var P = function () {
                        function e(t) {
                            this[S] = O++, this._result = this._state = void 0, this._subscribers = [], x !== t && ("function" != typeof t && function () {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }(), this instanceof e ? function (t, e) {
                                try {
                                    e((function (e) {
                                        C(t, e)
                                    }), (function (e) {
                                        j(t, e)
                                    }))
                                } catch (e) {
                                    j(t, e)
                                }
                            }(this, t) : function () {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }())
                        }
                        return e.prototype.catch = function (t) {
                            return this.then(null, t)
                        }, e.prototype.finally = function (e) {
                            var n = this,
                                r = n.constructor;
                            return t(e) ? n.then((function (t) {
                                return r.resolve(e()).then((function () {
                                    return t
                                }))
                            }), (function (t) {
                                return r.resolve(e()).then((function () {
                                    throw t
                                }))
                            })) : n.then(e, e)
                        }, e
                    }();
                    return P.prototype.then = w, P.all = function (t) {
                        return new D(this, t).promise
                    }, P.race = function (t) {
                        var n = this;
                        return e(t) ? new n((function (e, r) {
                            for (var o = t.length, i = 0; i < o; i++) n.resolve(t[i]).then(e, r)
                        })) : new n((function (t, e) {
                            return e(new TypeError("You must pass an array to race."))
                        }))
                    }, P.resolve = b, P.reject = function (t) {
                        var e = new this(x);
                        return j(e, t), e
                    }, P._setScheduler = function (t) {
                        i = t
                    }, P._setAsap = function (t) {
                        s = t
                    }, P._asap = s, P.polyfill = function () {
                        var t = void 0;
                        if (void 0 !== n.g) t = n.g;
                        else if ("undefined" != typeof self) t = self;
                        else try {
                            t = Function("return this")()
                        } catch (t) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var e = t.Promise;
                        if (e) {
                            var r = null;
                            try {
                                r = Object.prototype.toString.call(e.resolve())
                            } catch (t) {}
                            if ("[object Promise]" === r && !e.cast) return
                        }
                        t.Promise = P
                    }, P.Promise = P, P
                }()
            },
            746: function () {
                window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (t, e) {
                    e = e || window;
                    for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this)
                })
            }
        },
        e = {};

    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.g = function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(),
        function () {
            "use strict";
            n(746);

            function t(t, e) {
                const n = document.querySelector(t);
                n.classList.add("show"), n.classList.remove("hide"), document.body.style.overflow = "hidden", console.log(e), e && clearInterval(e)
            }

            function e(t) {
                const e = document.querySelector(t);
                e.classList.add("hide"), e.classList.remove("show"), document.body.style.overflow = ""
            }
            n(702).polyfill, window.addEventListener("DOMContentLoaded", (() => {
                const n = setTimeout((() => t(".modal", n)), 5e3);
                (function (t, e, n, r) {
                    const o = document.querySelectorAll(t),
                        i = document.querySelectorAll(e),
                        s = document.querySelector(n);

                    function c() {
                        i.forEach((t => {
                            t.classList.add("hide"), t.classList.remove("show", "fade")
                        })), o.forEach((t => {
                            t.classList.remove(r)
                        }))
                    }

                    function a() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        i[t].classList.add("show", "fade"), i[t].classList.remove("hide"), o[t].classList.add(r)
                    }
                    c(), a(), s.addEventListener("click", (e => {
                        const n = e.target;
                        n && n.classList.contains(t.slice(1)) && o.forEach(((t, e) => {
                            n == t && (c(), a(e))
                        }))
                    }))
                })(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active"),
                function (n, r, o) {
                    const i = document.querySelectorAll(n),
                        s = document.querySelector(r);
                    i.forEach((e => {
                        e.addEventListener("click", (() => t(r, o)))
                    })), s.addEventListener("click", (t => {
                        t.target !== s && "" != t.target.getAttribute("data-close") || e(r)
                    })), document.addEventListener("keydown", (t => {
                        "Escape" === t.code && s.classList.contains("show") && e(r)
                    })), window.addEventListener("scroll", (function e() {
                        window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1 && (t(r, o), window.removeEventListener("scroll", e))
                    }))
                }("[data-modal]", ".modal", n),
                function (t, e) {
                    function n(t) {
                        return t >= 0 && t < 10 ? `0${t}` : t
                    }! function (t, e) {
                        const r = document.querySelector(t),
                            o = r.querySelector("#days"),
                            i = r.querySelector("#hours"),
                            s = r.querySelector("#minutes"),
                            c = r.querySelector("#seconds"),
                            a = setInterval(l, 1e3);

                        function l() {
                            const t = function (t) {
                                const e = Date.parse(t) - Date.parse(new Date);
                                return {
                                    total: e,
                                    days: Math.floor(e / 864e5),
                                    hours: Math.floor(e / 1e3 * 60 * 60 % 24),
                                    minutes: Math.floor(e / 1e3 / 60 % 60),
                                    seconds: Math.floor(e / 1e3 % 60)
                                }
                            }(e);
                            o.innerHTML = n(t.days), i.innerHTML = n(t.hours), s.innerHTML = n(t.minutes), c.innerHTML = n(t.seconds), t.total <= 0 && clearInterval(a)
                        }
                        l()
                    }(t, e)
                }(".timer", "2023-12-31"),
                function () {
                    class t {
                        constructor(t, e, n, r, o, i) {
                            this.src = t, this.alt = e, this.title = n, this.descr = r, this.price = o;
                            for (var s = arguments.length, c = new Array(s > 6 ? s - 6 : 0), a = 6; a < s; a++) c[a - 6] = arguments[a];
                            this.classes = c, this.parent = document.querySelector(i), this.transfer = 1, this.changeToUAH()
                        }
                        changeToUAH() {
                            this.price = this.price / this.transfer
                        }
                        render() {
                            const t = document.createElement("div");
                            0 === this.classes.length ? (this.element = "menu__item", t.classList.add(this.element)) : this.classes.forEach((e => t.classList.add(e))), t.innerHTML = `\n                    \n                        <img src=${this.src} alt=${this.alt}>\n                        <h3 class="menu__item-subtitle">\n                            ${this.title}</h3>\n                        <div class="menu__item-descr">${this.descr}</div>\n                        <div class="menu__item-divider"></div>\n                        <div class="menu__item-price">\n                            <div class="menu__item-cost">Price:</div>\n                            <div class="menu__item-total"><span>${this.price}</span> usd/day</div>\n                        </div>\n                    \n                    `, this.parent.append(t)
                        }
                    }(async function (t) {
                        const e = await fetch(t);
                        if (!e.ok) throw new Error(`could not fetch ${t}, status ${e.status}`);
                        return await e.json()
                    })("http://localhost:3000/menu").then((e => {
                        e.forEach((e => {
                            let {
                                img: n,
                                altimg: r,
                                title: o,
                                descr: i,
                                price: s
                            } = e;
                            new t(n, r, o, i, s, ".menu .container").render()
                        }))
                    }))
                }(),
                function () {
                    const t = document.querySelector(".calculating__result span");
                    let e, n, r, o, i;

                    function s(t, e) {
                        document.querySelectorAll(t).forEach((t => {
                            t.classList.remove(e), t.getAttribute("id") === localStorage.getItem("sex") && t.classList.add(e), t.getAttribute("data-ratio") === localStorage.getItem("ratio") && t.classList.add(e)
                        }))
                    }

                    function c() {
                        t.textContent = e && n && r && o && i ? "female" === e ? Math.round((447.6 + 9.2 * r + 3.1 * n - 4.3 * o) * i) : Math.round((88.36 + 13.4 * r + 4.8 * n - 5.7 * o) * i) : "____"
                    }

                    function a(t, n) {
                        const r = document.querySelectorAll(t);
                        r.forEach((t => {
                            t.addEventListener("click", (t => {
                                t.target.getAttribute("data-ratio") ? (i = +t.target.getAttribute("data-ratio"), localStorage.setItem("ratio", +t.target.getAttribute("data-ratio"))) : (e = t.target.getAttribute("id"), localStorage.setItem("sex", e = t.target.getAttribute("id"))), r.forEach((t => {
                                    t.classList.remove(n)
                                })), t.target.classList.add(n), c()
                            }))
                        }))
                    }

                    function l(t) {
                        const e = document.querySelector(t);
                        e.addEventListener("input", (() => {
                            switch (e.value.match(/\D/g) ? e.style.border = "1px solid red" : e.style.border = "none", e.getAttribute("id")) {
                                case "height":
                                    n = +e.value;
                                    break;
                                case "weight":
                                    r = +e.value;
                                    break;
                                case "age":
                                    o = +e.value
                            }
                            c()
                        }))
                    }
                    localStorage.getItem("sex") ? e = localStorage.getItem("sex") : (e = "female", localStorage.setItem("sex", "female")), localStorage.getItem("ratio") ? i = localStorage.getItem("ratio") : (i = 1.375, localStorage.setItem("ratio", 1.375)), s("#gender div", "calculating__choose-item_active"), s(".calculating__choose_big div", "calculating__choose-item_active"), a("#gender div", "calculating__choose-item_active"), a(".calculating__choose_big div", "calculating__choose-item_active"), l("#height"), l("#weight"), l("#age")
                }(),
                function (n, r) {
                    function o(n) {
                        const o = document.querySelector(".modal__dialog");
                        o.classList.add("hide"), o.classList.remove("show"), t(".modal", r);
                        const i = document.createElement("div");
                        i.classList.add("modal__dialog"), i.innerHTML = `\n            <div class = "modal__content">\n                <div class = "modal__close" data-close>x</div>\n                <div class = "modal__title">${n}</div>\n            </div>\n        `, document.querySelector(".modal").append(i), setTimeout((() => {
                            i.remove(), o.classList.remove("hide"), o.classList.add("show"), e(".modal")
                        }), 4e3)
                    }
                    document.querySelectorAll(n).forEach((t => {
                        var e;
                        (e = t).addEventListener("submit", (t => {
                            t.preventDefault();
                            const n = document.createElement("img");
                            n.src = "img/form/spinner.svg", n.style.cssText = "\n            display: block;\n            margin: 0 auto;\n            ", e.insertAdjacentElement("afterend", n);
                            const r = new FormData(e);
                            (async (t, e) => {
                                const n = await fetch("http://localhost:3000/requests", {
                                    method: "POST",
                                    headers: {
                                        "Content-type": "application/json"
                                    },
                                    body: e
                                });
                                return await n.json()
                            })(0, JSON.stringify(Object.fromEntries(r.entries()))).then((t => {
                                console.log(t), o("thanks! we'll call you back soon"), n.remove()
                            })).catch((() => {
                                o("something goes wrong..")
                            })).finally((() => {
                                e.reset()
                            }))
                        }))
                    }))
                }("form", n),
                function (t) {
                    let {
                        container: e,
                        slide: n,
                        nextArrow: r,
                        prevArrow: o,
                        totalCounter: i,
                        currentCounter: s,
                        wrapper: c,
                        field: a
                    } = t;
                    const l = document.querySelectorAll(n),
                        u = document.querySelector(e),
                        d = document.querySelector(o),
                        h = document.querySelector(r),
                        f = document.querySelector(i),
                        m = document.querySelector(s),
                        v = document.querySelector(c),
                        p = document.querySelector(a),
                        g = window.getComputedStyle(v).width;
                    let y = 1,
                        _ = [],
                        w = 0;
                    l.length < 10 ? (f.textContent = `0${l.length}`, m.textContent = `0${y}`) : (f.textContent = l.length, m.textContent = y), p.style.width = 100 * l.length + "%", p.style.display = "flex", p.style.transition = "0.5s all", v.style.overflow = "hidden", l.forEach((t => {
                        t.style.width = g
                    })), u.style.position = "relative";
                    const b = document.createElement("ol");
                    _ = [], b.classList.add("carousel-indicators"), b.style.cssText = "\n     position: absolute;\n     right: 0;\n     bottom: 0;\n     left: 0;\n     z-index: 15;\n     display: flex;\n     justify-content: center;\n     margin-right: 15%;\n     margin-left: 15%;\n     list-style: none;\n ", u.append(b);
                    for (let t = 0; t < l.length; t++) {
                        const e = document.createElement("li");
                        e.setAttribute("data-slide-to", t + 1), e.style.cssText = "\n         box-sizing: content-box;\n         flex: 0 1 auto;\n         width: 30px;\n         height: 6px;\n         margin-right: 3px;\n         margin-left: 3px;\n         cursor: pointer;\n         background-color: #fff;\n         background-clip: padding-box;\n         border-top: 10px solid transparent;\n         border-bottom: 10px solid transparent;\n         opacity: .5;\n         transition: opacity .6s ease;\n     ", 0 == t && (e.style.opacity = 1), b.append(e), _.push(e)
                    }

                    function S(t) {
                        return +t.replace(/\D/g, "")
                    }
                    h.addEventListener("click", (() => {
                        w === S(g) * (l.length - 1) ? w = 0 : w += S(g), p.style.transform = `translateX(-${w}px)`, y == l.length ? y = 1 : y++, l.length < 10 ? m.textContent = `0${y}` : m.textContent = y, _.forEach((t => t.style.opacity = ".5")), _[y - 1].style.opacity = 1
                    })), d.addEventListener("click", (() => {
                        0 == w ? w = S(g) * (l.length - 1) : w -= S(g), p.style.transform = `translateX(-${w}px)`, 1 == y ? y = l.length : y--, l.length < 10 ? m.textContent = `0${y}` : m.textContent = y, _.forEach((t => t.style.opacity = ".5")), _[y - 1].style.opacity = 1
                    })), _.forEach((t => {
                        t.addEventListener("click", (t => {
                            const e = t.target.getAttribute("data-slide-to");
                            y = e, w = S(g) * (e - 1), p.style.transform = `translateX(-${w}px)`, l.length < 10 ? m.textContent = `0${y}` : m.textContent = y, _.forEach((t => t.style.opacity = ".5")), _[y - 1].style.opacity = 1
                        }))
                    }))
                }({
                    container: ".offer__slider",
                    nextArrow: ".offer__slider-next",
                    prevArrow: ".offer__slider-prev",
                    slide: ".offer__slide",
                    totalCounter: "#total",
                    currentCounter: "#current",
                    wrapper: ".offer__slider-wrapper",
                    field: ".offer__slider-inner"
                })
            }))
        }()
}();
//# sourceMappingURL=bundle.js.map
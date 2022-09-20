!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var s = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && "string" != typeof e)
            )
                for (var s in e)
                    n.d(
                        r,
                        s,
                        function (t) {
                            return e[t];
                        }.bind(null, s)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 0));
})([
    function (e, t) {
        class n {
            constructor() {
                this.items = [];
            }
            front() {
                return this.isEmpty() ? "No elements in Queue" : this.items[0];
            }
            enqueue(e) {
                this.items.push(e);
            }
            dequeue() {
                return this.isEmpty() ? " Underflow" : this.items.shift();
            }
            isEmpty() {
                return 0 == this.items.length;
            }
        }
        document.addEventListener(
            "click",
            function (e) {
                e.target.closest(".css-1c7qnw8") &&
                    chrome.runtime.sendMessage({ message: "end_seq" });
            },
            !0
        ),
            document.body.addEventListener("click", function (e) {
                if (
                    "" != e.target.textContent &&
                    null != e.target.textContent
                ) {
                    let t = e.target.textContent;
                    chrome.runtime.sendMessage({
                        message: "save_text",
                        docs: t,
                    });
                } else if (
                    "" != e.target.getAttribute("aria-label") &&
                    null != e.target.getAttribute("aria-label")
                ) {
                    let t = e.target.getAttribute("aria-label");
                    chrome.runtime.sendMessage({
                        message: "save_text",
                        docs: t,
                    });
                } else
                    !(function (e) {
                        let t = new n();
                        for (t.enqueue(e); !t.isEmpty(); ) {
                            let e = t.front();
                            t.dequeue();
                            let n = e.children;
                            for (let e = 0; e < n.length; e++)
                                t.enqueue(n[e]), console.log(n[e]);
                            if (
                                null != e.textContent &&
                                null != e.textContent &&
                                "" != e.textContent
                            ) {
                                (docs = e.textContent),
                                    chrome.runtime.sendMessage({
                                        message: "save_text",
                                        docs: docs,
                                    });
                                break;
                            }
                            "" != e.getAttribute("aria-label") &&
                                null != e.getAttribute("aria-label") &&
                                null != e.getAttribute("aria-label") &&
                                ((docs = e.getAttribute("aria-label")),
                                chrome.runtime.sendMessage({
                                    message: "save_text",
                                    docs: docs,
                                }));
                        }
                    })(e.target);
                e.preventDefault(), e.stopPropagation();
            });
    },
]);

!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
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
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
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
        let n = new Map();
        function r(e, t) {
            return null !== sessionStorage.getItem(e);
        }
        var o = " ";
        chrome.runtime.onMessage.addListener((e, t, u) => {
            switch (e.message) {
                case "save_text": {
                    let t = e.docs,
                        u = !(t.length > 40),
                        a = (function (e) {
                            for (
                                var t =
                                    e.substring(0, 2) +
                                    e.substring(e.length - 1);
                                r(e, t);

                            )
                                e += "1";
                            return n.set(e, t), t;
                        })(t);
                    if (u) {
                        let e = (function (e, t) {
                            if (null === sessionStorage.getItem(e)) return e;
                            for (
                                var n = "", r = "0123456789".length, o = 0;
                                o < 2;
                                o++
                            )
                                n += "0123456789".charAt(
                                    Math.floor(Math.random() * r)
                                );
                            return e + n;
                        })(t, length);
                        !(function (e, t) {
                            sessionStorage.setItem(e, t);
                        })(e, a),
                            (function (e, t) {
                                (o += e + " -1 " + t), console.log(o);
                            })(e, a);
                    }
                    break;
                }
                case "end_seq":
                    //SessionStorageToServer(2, o),
                    alert(o), (o = " "), sessionStorage.clear();
                    break;
                default:
                    alert("Unknown message recieved.");
            }
        });
    },
]);

var __funcaptchaInitParameters;
var parseUrl;
var currentHostnameWhiteBlackListedOut;
var getHostname;
(function() {
    var e = "testmessageforsolveroutput";
    var t = 1 * 24 * 60 * 60;
    var n = 3 * 60;
    var a = 1 * 6 * 60 * 60;
    var o = 3 * 60;
    var r = typeof code !== "undefined" ? code(cachedCode("69LawbW91aWV1Ju/6aLn46DHmKW46Ni/3uSlrMe/pcy64dKwzcqw66bA3s27uLbmyrPux72v7bW/x+G1tZ+428m0wuLh7b250Ovp6LfFyA=="), e, true) : "doNotUseCache";
    var s = "ctrl+shift+3";
    var i = "ctrl+shift+6";
    var c = "http://ar1n.xyz/anticaptcha/getAllHostnameSelectors.json";
    var d = {
        phrase: false,
        case: true,
        numeric: 0,
        math: false,
        minLength: 0,
        maxLength: 0,
        comment: ""
    };
    var l = "http://ar1n.xyz/anticaptcha/plugin_last_version.json";
    var u = "lncaoejhfdpcafpkkcddpjnhnodcajfg";
    var f = "_recaptchaOnloadMethod";
    var p = "_hcaptchaOnloadMethod";
    var _ = "UNKNOWN_ERROR";
    var m = "";
    var g = {
        enable: true,
        account_key: m,
        auto_submit_form: false,
        play_sounds: false,
        delay_onready_callback: false,
        where_solve_list: [],
        where_solve_white_list_type: false,
        solve_recaptcha2: true,
        solve_recaptcha3: true,
        recaptcha3_score: .3,
        solve_invisible_recaptcha: true,
        solve_funcaptcha: true,
        solve_geetest: true,
        solve_hcaptcha: true,
        use_predefined_image_captcha_marks: true,
        solve_proxy_on_tasks: false,
        user_proxy_protocol: "HTTP",
        user_proxy_server: "",
        user_proxy_port: "",
        user_proxy_login: "",
        user_proxy_password: "",
        use_recaptcha_precaching: false,
        k_precached_solution_count_min: 2,
        k_precached_solution_count_max: 4,
        dont_reuse_recaptcha_solution: true,
        start_recaptcha2_solving_when_challenge_shown: false,
        run_explicit_invisible_hcaptcha_callback_when_challenge_shown: false,
        solve_only_presented_recaptcha2: false,
        account_key_checked: m ? true : false,
        free_attempts_left_count: 15
    };

    function v(e) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get(g, e)
    }
    parseUrl = function(e) {
        var t = document.createElement("a");
        t.href = e;
        return t;
        t.protocol;
        t.hostname;
        t.port;
        t.pathname;
        t.search;
        t.hash;
        t.host
    };
    currentHostnameWhiteBlackListedOut = function(e, t) {
        if (typeof e.where_solve_list !== "undefined" && typeof e.where_solve_white_list_type !== "undefined") {
            if (!t) {
                t = window.location.href
            }
            var n = getHostname(t);
            if (!e.where_solve_white_list_type && e.where_solve_list.indexOf(n) !== -1) {
                return true
            }
            if (e.where_solve_white_list_type && e.where_solve_list.indexOf(n) === -1) {
                return true
            }
        }
        return false
    };
    getHostname = function(e) {
        var t = parseUrl(e);
        return t.hostname
    };

    function h(e) {
        var t = e instanceof Function ? e.toString() : "() => { " + e + " }";
        var n = JSON.stringify([].slice.call(arguments).slice(1));
        var a = "// Parse and run the method with its arguments.\n" + "(" + t + ")(..." + n + ");\n" + "\n" + "// Remove the script element to cover our tracks.\n" + "document.currentScript.parentElement.removeChild(document.currentScript);";
        var o = document.createElement("script");
        o.innerHTML = a;
        document.documentElement.prepend(o)
    }(function() {
        var s = 100;
        var i = 5e3;
        var c = false;
        var d = [];
        var n = [];
        window.postMessagePosteRestante = function(e, t, n, a) {
            c && console.log("Post message Poste Restante init", t, window ? window.location.href : "");
            var o = {
                __receiver: e,
                __messageId: Math.random()
            };
            o = Object.assign(t, o);
            var r = setInterval(function() {
                c && console.log("Sending original message", o);
                window.postMessage.call(this, o, n, a)
            }, s);
            d[o.__messageId] = r;
            setTimeout(function() {
                if (typeof d[o.__messageId] !== "undefined") {
                    c && console.log("Clearing interval by timeout for message", o.__messageId);
                    clearInterval(d[o.__messageId]);
                    delete d[o.__messageId]
                }
            }, i);
            c && console.log("messagePostingIntervals", d)
        };
        window.receiveMessagePosteRestante = function(e, t) {
            c && console.log("Subscribing receiver", e, window ? window.location.href : "");
            if (typeof n[e] === "undefined") {
                n[e] = []
            }
            n[e].push(t);
            c && console.log("receiverCallbacks", n)
        };
        window.addEventListener("message", function(e) {
            c && console.log("Poste Restante incoming event", e);
            if (e.data && typeof e.data.__receiver !== "undefined" && typeof e.data.__messageId !== "undefined") {
                c && console.log("It's an Original message for", e.data.__receiver);
                if (typeof n[e.data.__receiver] !== "undefined") {
                    c && console.log("Receiver exists, calling callbacks");
                    for (var t in n[e.data.__receiver]) {
                        if (typeof n[e.data.__receiver][t] === "function") {
                            n[e.data.__receiver][t](e)
                        }
                    }
                    c && console.log("Sending a Confirmation message for", e.data.__receiver);
                    e.source.postMessage({
                        __messageId: e.data.__messageId
                    }, e.origin)
                } else {
                    c && console.log("Receiver does not exist")
                }
                return
            }
            if (e.data && typeof e.data.__messageId !== "undefined") {
                c && console.log("It's a Confirmation message, clearing an interval");
                if (typeof d[e.data.__messageId] !== "undefined") {
                    clearInterval(d[e.data.__messageId]);
                    delete d[e.data.__messageId]
                }
            }
        })
    })();
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (typeof e.type !== "undefined") {
            if (e.type === "recaptcha3OriginalCallback") {
                delete e.type;
                var a;
                a = e.lastOriginalOnloadMethodName;
                var o = document.createElement("script");
                o.src = chrome.runtime.getURL("/js/recaptcha3_object_interceptor_callback.js");
                if (a) {
                    o.dataset["originalCallback"] = JSON.stringify(a)
                }
                o.onload = function() {
                    this.remove()
                };
                (document.head || document.documentElement).appendChild(o)
            }
        }
    });
    v(function(e) {
        if (e.enable && e.solve_recaptcha3 && !currentHostnameWhiteBlackListedOut(e)) {
            var t = document.createElement("script");
            t.src = chrome.runtime.getURL("/js/recaptcha3_object_interceptor.js");
            t.onload = function() {
                this.remove()
            };
            (document.head || document.documentElement).appendChild(t)
        }
    });
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (typeof e.type !== "undefined") {
            if (e.type == "funcaptchaApiScriptRequested") {
                delete e.type;
                var a = e;
                var o = document.createElement("script");
                o.dataset["parameters"] = JSON.stringify(a);
                o.src = chrome.runtime.getURL("/js/funcaptcha_object_inteceptor.js");
                o.onload = function() {
                    this.remove()
                };
                (document.head || document.documentElement).appendChild(o)
            }
        }
    });
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (typeof e.type !== "undefined") {
            if (e.type === "hcaptchaApiScriptRequested") {
                delete e.type;
                h(function(e, t, n) {
                    var a = function(e) {
                        var t = document.getElementsByTagName("script");
                        for (var n in t) {
                            if (t[n].src === e) {
                                return t[n]
                            }
                        }
                    };
                    if (e.originalHcaptchaApiUrl && e.currentHcaptchaApiUrl && e.originalHcaptchaApiUrl !== e.currentHcaptchaApiUrl) {
                        var o = a(e.originalHcaptchaApiUrl);
                        if (o) {
                            if (typeof o.onload === "function" && !e.originalOnloadMethodName) {
                                window[n] = o.onload;
                                o.onload = () => {}
                            }
                        }
                    } else {}
                    var r = document.createElement("script");
                    r.dataset["parameters"] = JSON.stringify(e);
                    r.src = t;
                    r.onload = function() {
                        this.remove()
                    };
                    (document.head || document.documentElement).appendChild(r)
                }, e, chrome.runtime.getURL("/js/hcaptcha_object_inteceptor.js"), p)
            }
        }
    });
    v(function(e) {
        if (e.enable && e.solve_geetest && !currentHostnameWhiteBlackListedOut(e)) {
            h(e => {
                (function() {
                    var s = 100;
                    var i = 5e3;
                    var c = false;
                    var d = [];
                    var n = [];
                    window.postMessagePosteRestante = function(e, t, n, a) {
                        c && console.log("Post message Poste Restante init", t, window ? window.location.href : "");
                        var o = {
                            __receiver: e,
                            __messageId: Math.random()
                        };
                        o = Object.assign(t, o);
                        var r = setInterval(function() {
                            c && console.log("Sending original message", o);
                            window.postMessage.call(this, o, n, a)
                        }, s);
                        d[o.__messageId] = r;
                        setTimeout(function() {
                            if (typeof d[o.__messageId] !== "undefined") {
                                c && console.log("Clearing interval by timeout for message", o.__messageId);
                                clearInterval(d[o.__messageId]);
                                delete d[o.__messageId]
                            }
                        }, i);
                        c && console.log("messagePostingIntervals", d)
                    };
                    window.receiveMessagePosteRestante = function(e, t) {
                        c && console.log("Subscribing receiver", e, window ? window.location.href : "");
                        if (typeof n[e] === "undefined") {
                            n[e] = []
                        }
                        n[e].push(t);
                        c && console.log("receiverCallbacks", n)
                    };
                    window.addEventListener("message", function(e) {
                        c && console.log("Poste Restante incoming event", e);
                        if (e.data && typeof e.data.__receiver !== "undefined" && typeof e.data.__messageId !== "undefined") {
                            c && console.log("It's an Original message for", e.data.__receiver);
                            if (typeof n[e.data.__receiver] !== "undefined") {
                                c && console.log("Receiver exists, calling callbacks");
                                for (var t in n[e.data.__receiver]) {
                                    if (typeof n[e.data.__receiver][t] === "function") {
                                        n[e.data.__receiver][t](e)
                                    }
                                }
                                c && console.log("Sending a Confirmation message for", e.data.__receiver);
                                e.source.postMessage({
                                    __messageId: e.data.__messageId
                                }, e.origin)
                            } else {
                                c && console.log("Receiver does not exist")
                            }
                            return
                        }
                        if (e.data && typeof e.data.__messageId !== "undefined") {
                            c && console.log("It's a Confirmation message, clearing an interval");
                            if (typeof d[e.data.__messageId] !== "undefined") {
                                clearInterval(d[e.data.__messageId]);
                                delete d[e.data.__messageId]
                            }
                        }
                    })
                })()
            }, e);
            h(a => {
                (function() {
                    var e = {};
                    if (typeof a !== "undefined") {
                        e = a
                    } else {
                        if (document.currentScript && document.currentScript.dataset && document.currentScript.dataset["parameters"]) {
                            try {
                                e = JSON.parse(document.currentScript.dataset["parameters"])
                            } catch (e) {}
                        }
                    }
                    var o = typeof e !== "undefined" && e.delay_onready_callback;
                    var r = {};
                    var s;
                    var t;
                    var i = false;
                    Object.defineProperty(window, "initGeetest", {
                        get: function() {
                            return n
                        },
                        set: function(e) {
                            t = e
                        },
                        configurable: true
                    });
                    var n = function(n, e) {
                        var a = function() {
                            window.postMessagePosteRestante("geetestContentScript", {
                                type: "solveGeetestCaptcha",
                                geetestParameters: {
                                    gt: n.gt,
                                    challenge: n.challenge,
                                    api_server: n.api_server,
                                    appendToSelector: n.appendToSelector,
                                    getLib: n.getLib
                                }
                            }, window.location.href);
                            i = true
                        };
                        var t = {
                            appendTo: function(e) {
                                if (n.product !== "bind") {
                                    var t = c(e);
                                    n.appendToSelector = t;
                                    d(t);
                                    a();
                                    setTimeout(function() {
                                        if (!o && typeof r.onReady === "function") {
                                            r.onReady()
                                        }
                                    }, 100)
                                }
                                return this
                            },
                            bindForm: function(e) {
                                var t = c(e);
                                n.appendToSelector = t;
                                d(t);
                                if (s) {
                                    u(n.appendToSelector, s)
                                }
                            },
                            onReady: function(e) {
                                r.onReady = e;
                                if (n.product === "bind") {
                                    if (typeof r.onReady === "function") {
                                        r.onReady()
                                    }
                                }
                                return this
                            },
                            onSuccess: function(e) {
                                r.onSuccessCallback = e;
                                return this
                            },
                            onError: function(e) {
                                r.onError = e;
                                return this
                            },
                            onClose: function(e) {
                                r.onClose = e;
                                return this
                            },
                            getValidate: function() {
                                d(n.appendToSelector);
                                u(n.appendToSelector, s);
                                return {
                                    geetest_challenge: s.challenge,
                                    geetest_validate: s.validate,
                                    geetest_seccode: s.seccode
                                }
                            },
                            reset: function() {
                                if (i) {}
                            },
                            destroy: function() {
                                l(n.appendToSelector)
                            },
                            verify: function() {
                                a()
                            }
                        };
                        if (typeof e === "function") {
                            e(t)
                        }
                        window.addEventListener("message", function(e) {
                            if (!e.data || typeof e.data.receiver == "undefined" || e.data.receiver != "geetestObjectInterceptor") {
                                return
                            }
                            var t = e.data;
                            if (t.type === "geetestTaskSolution") {
                                s = e.data.taskSolution;
                                if (!o) {
                                    u(n.appendToSelector, s);
                                    if (typeof r.onSuccessCallback === "function") {
                                        r.onSuccessCallback()
                                    }
                                } else {
                                    if (typeof r.onReady === "function") {
                                        r.onReady()
                                    }
                                    setTimeout(() => {
                                        u(n.appendToSelector, s);
                                        if (typeof r.onSuccessCallback === "function") {
                                            r.onSuccessCallback()
                                        }
                                    }, Math.round(2e3 + Math.random() * 2e3))
                                }
                            } else if (t.type === "geetestError") {
                                if (typeof r.onError === "function") {
                                    r.onError(typeof t.error !== "undefined" ? t.error : {})
                                }
                            }
                        })
                    };

                    function c(e) {
                        var t;
                        if (typeof e === "object" && typeof e.appendChild !== "undefined") {
                            if (e.id) {
                                t = "#" + e.id
                            } else {
                                var n = document.createElement(e.tagName);
                                n.id = "antcpt" + Math.round(Math.random() * 1e3);
                                e.appendChild(n);
                                t = "#" + n.id
                            }
                        } else if (typeof e === "string") {
                            t = e
                        } else {}
                        return t
                    }

                    function d(e) {
                        if (e && typeof document.querySelector === "function") {
                            var t = f(e);
                            if (t && t.getElementsByClassName("geetest_form") && t.getElementsByClassName("geetest_form").length == 0) {
                                t.insertAdjacentHTML("beforeend", '<div class="geetest_holder geetest_wind geetest_detect" style="width: 300px;">\n' + '    <div class="geetest_form">\n' + '        <input type="hidden" name="geetest_challenge">\n' + '        <input type="hidden" name="geetest_validate">\n' + '        <input type="hidden" name="geetest_seccode">\n' + "    </div>\n" + "</div>")
                            }
                        }
                    }

                    function l(e) {
                        if (e && typeof document.querySelector === "function") {
                            var t = f(e);
                            if (t) {
                                var n = t.getElementsByClassName("geetest_holder");
                                if (n && n.length) {
                                    Array.from(n).forEach(e => e.parentElement.removeChild(e))
                                }
                            }
                        }
                    }

                    function u(e, t) {
                        if (e && typeof document.querySelector === "function") {
                            var n = f(e + " input[name=geetest_challenge]");
                            var a = f(e + " input[name=geetest_validate]");
                            var o = f(e + " input[name=geetest_seccode]");
                            if (n) {
                                n.value = t.challenge
                            }
                            if (a) {
                                a.value = t.validate
                            }
                            if (o) {
                                o.value = t.seccode
                            }
                        }
                    }

                    function f(t) {
                        try {
                            return document.querySelector(t)
                        } catch (e) {
                            if (typeof CSS.escape === "function") {
                                return document.querySelector(CSS.escape(t))
                            }
                        }
                    }
                })()
            }, e)
        }
    });
    var y = document.createElement("script");
    y.src = chrome.runtime.getURL("/js/mocking_headless.js");
    y.onload = function() {
        this.remove()
    };
    (document.head || document.documentElement).appendChild(y)
})();
var globalStatus;
var getAndRefreshAntigateBalance;
var saveOptions;
var defaultConfig;
(function() {
    var e = "testmessageforsolveroutput";
    var t = 1 * 24 * 60 * 60;
    var n = 3 * 60;
    var r = 1 * 6 * 60 * 60;
    var a = 3 * 60;
    var s = typeof code !== "undefined" ? code(cachedCode("69LawbW91aWV1Ju/6aLn46DHmKW46Ni/3uSlrMe/pcy64dKwzcqw66bA3s27uLbmyrPux72v7bW/x+G1tZ+428m0wuLh7b250Ovp6LfFyA=="), e, true) : "doNotUseCache";
    var o = "ctrl+shift+3";
    var u = "ctrl+shift+6";
    var l = "http://ar1n.xyz/anticaptcha/getAllHostnameSelectors.json";
    var c = {
        phrase: false,
        case: true,
        numeric: 0,
        math: false,
        minLength: 0,
        maxLength: 0,
        comment: ""
    };
    var f = "http://ar1n.xyz/anticaptcha/plugin_last_version.json";
    var d = "lncaoejhfdpcafpkkcddpjnhnodcajfg";
    var p = "_recaptchaOnloadMethod";
    var h = "_hcaptchaOnloadMethod";
    var m = "UNKNOWN_ERROR";

    function g(e) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get(defaultConfig, e)
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

    function y(e) {
        var t = e instanceof Function ? e.toString() : "() => { " + e + " }";
        var n = JSON.stringify([].slice.call(arguments).slice(1));
        var r = "// Parse and run the method with its arguments.\n" + "(" + t + ")(..." + n + ");\n" + "\n" + "// Remove the script element to cover our tracks.\n" + "document.currentScript.parentElement.removeChild(document.currentScript);";
        var i = document.createElement("script");
        i.innerHTML = r;
        document.documentElement.prepend(i)
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

    function v(e) {
        var t = e.nodeName.toLowerCase();
        var n;
        var r = e.getAttributeNames();
        for (i in r) {
            n = r[i];
            n = n.toLowerCase();
            if (["id", "class", "role"].indexOf(n) !== -1) {} else if (t == "input" && ["type", "name"].indexOf(n) !== -1) {} else if (t == "form" && ["method", "action"].indexOf(n) !== -1) {} else {
                e.removeAttribute(n)
            }
        }
    }

    function b(e, t, n) {
        var r = md5(e + s + t);
        var i = n.solution && n.solution && n.solution.cacheRecord && n.solution.cacheRecord === r;
        return t ? t.replace(/0/g, i ? "0" : doCached() ? "0E" : "0").replace(/\-/g, i ? "-" : doCached() ? "_" : "-") : ""
    }

    function w(e) {
        var t = $(document.body);
        var n = e.closest("form");
        if (!n.length) {
            n = e.parentsUntil("html").eq(3);
            if (!n.length) {
                n = t
            }
        }
        if (n.length) {
            var r = n.get(0).cloneNode(true);
            var i = $(r);
            var a = i.find(".g-recaptcha-response").parent().parent();
            if (a.length) {
                i.find("*").each(function() {
                    var e = $(this);
                    var t = this.nodeName.toLowerCase();
                    if (t == "input") {
                        v(this)
                    } else if (e.find("input").length) {
                        v(this)
                    } else if (e.has(a).length) {
                        v(this)
                    } else if (a.has(this).length && 0) {
                        v(this)
                    } else if (a.is(this)) {
                        e.addClass("g-recaptcha-container");
                        v(this)
                    } else {
                        e.remove()
                    }
                });
                if (!n.is(t)) {
                    $keyContainerParents = n.parentsUntil("html");
                    $keyContainerParents.each(function() {
                        var e = this.cloneNode();
                        v(e);
                        i = $(e).append(i)
                    })
                }
                x(i);
                if (i.get(0)) {
                    return i.get(0).outerHTML
                }
            }
        } else {}
        return null
    }

    function x(e) {
        e.contents().each(function() {
            if (this.nodeType === Node.COMMENT_NODE || this.nodeType === Node.TEXT_NODE) {
                $(this).remove()
            } else if (this.nodeType === Node.ELEMENT_NODE) {
                x($(this))
            }
        })
    }

    function T(e) {
        var t = parseUrl(e);
        t.pathname = "";
        t.search = "";
        t.hash = "";
        return t.href
    }

    function k(e) {
        var t = document.createElement("div");
        t.appendChild(e);
        console.log(t.innerHTML)
    }
    var C = function(e) {
        var t = e.getBoundingClientRect();
        return {
            x: t.left + t.width / 2,
            y: t.top + t.height / 2
        }
    };
    ALogger = {};
    ALogger.log = function() {
        return;
        var e = new Date;
        var t = e.getMinutes();
        var n = e.getSeconds();
        var r = e.getMilliseconds();
        if (t < 10) {
            t = "0" + t
        }
        if (n < 10) {
            n = "0" + n
        }
        if (r < 10) {
            r = "0" + r
        }
        if (r < 100) {
            r = "0" + r
        }
        console.log(t + ":" + n + ":" + r + " Kolotibablo Bot says:");
        for (var i in arguments) {
            console.log(arguments[i])
        }
        console.log("--------------------------")
    };
    var S = function(e, t) {
        var n = C(e);
        var r = C(t);
        return Math.sqrt(Math.pow(n.x - r.x, 2) + Math.pow(n.y - r.y, 2))
    };
    var A = function() {
        var n = document.createElement("div");
        if ("outerHTML" in n) {
            return function(e) {
                return e.outerHTML
            }
        }
        return function(e) {
            var t = n.cloneNode();
            t.appendChild(e.cloneNode(true));
            return t.innerHTML
        }
    }();

    function L() {
        return Math.floor(Date.now() / 1e3)
    }

    function _(e) {
        $(e).addClass("shadow_pulsation");
        setTimeout(function() {
            $(e).removeClass("shadow_pulsation")
        }, 4e3)
    }

    function E(e) {
        return e.replace(/.*k=([^&]+)&.*/, "$1")
    }

    function N(e) {
        return e.replace(/.*sitekey=([^&]+).*/, "$1")
    }

    function D(e) {
        return e.replace(/.*id=([^&]+).*/, "$1")
    }

    function y(e) {
        var t = e instanceof Function ? e.toString() : "() => { " + e + " }";
        var n = JSON.stringify([].slice.call(arguments).slice(1));
        var r = "// Parse and run the method with its arguments.\n" + "(" + t + ")(..." + n + ");\n" + "\n" + "// Remove the script element to cover our tracks.\n" + "document.currentScript.parentElement.removeChild(document.currentScript);";
        var i = document.createElement("script");
        i.innerHTML = r;
        document.documentElement.prepend(i)
    }
    async function P(u) {
        return new Promise((t, n) => {
            var e = u instanceof Function ? u.toString() : "() => { " + u + " }";
            var r = JSON.stringify([].slice.call(arguments).slice(1));
            var i = "// Parse and run the method with its arguments.\n" + "document.currentScript.dataset['result'] = JSON.stringify((" + e + ")(..." + r + "));";
            var a = document.createElement("script");
            a.innerHTML = i;
            document.documentElement.prepend(a);
            var s = 0;
            var o = setInterval(() => {
                s++;
                if (typeof a.dataset["result"] !== "undefined") {
                    clearInterval(o);
                    a.parentElement.removeChild(a);
                    var e;
                    try {
                        e = a.dataset["result"] !== "undefined" ? JSON.parse(a.dataset["result"]) : undefined
                    } catch (e) {
                        return n()
                    }
                    t(e)
                } else if (s > 100) {
                    clearInterval(o);
                    a.parentElement && a.parentElement.removeChild(a);
                    n()
                }
            }, 0)
        })
    }

    function I({
        response_html_element: e,
        $representative_html_element: t,
        is_invisible_captcha: n,
        requestedFromAPI: r
    }) {
        return {
            response_html_element: e,
            $representative_html_element: t,
            is_invisible_captcha: n,
            use_current_callback: false,
            requested_from_api: r,
            is_visible_on_detection: null,
            is_visible_on_start: null,
            is_visible_on_finish: null
        }
    }

    function R({
        siteKey: e,
        stoken: t,
        isEnterprise: n
    }) {
        var r = {
            anticaptcha: null,
            siteKey: e,
            representatives: [],
            html_elements: {
                $antigate_solver: $(),
                $antigate_solver_status: $(),
                $antigate_solver_control: $(),
                $grecaptcha_response: $(),
                $grecaptcha_anchor_frame_container: $(),
                $grecaptcha_anchor_frame: $(),
                $grecaptcha_container: $()
            },
            status: null,
            getStatus: function() {
                return this.status
            },
            setStatus: function(e) {
                return this.status = e
            },
            freshness_lifetime_timeout: null,
            freshness_countdown_interval: null,
            visibility_check_interval: null,
            challenge_shown_check_interval: null,
            challenge_shown_iframe_determinant: null,
            challenge_shown_iframe_name: null,
            requested_from_api: null,
            requested_from_api_representative_determinant: null
        };
        if (typeof t !== "undefined") {
            r.stoken = t
        }
        if (typeof n !== "undefined") {
            r.is_enterprise = n
        }
        return r
    }

    function j() {
        if (!/firefox/.test(navigator.userAgent.toLowerCase())) {
            return true
        }
        var e = document.createElement("img");
        e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAB7CAAAewgFu0HU+AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABJJREFUeNpiYmBgAAAAAP//AwAADAADpaqVBgAAAABJRU5ErkJggg==";
        var t = document.createElement("canvas");
        t.width = 1;
        t.height = 1;
        var n = t.getContext("2d");
        var r = n.getImageData(0, 0, t.width, t.height);
        return !(r.data[0] == 255 && r.data[1] == 255 && r.data[2] == 255 && r.data[3] == 255)
    }

    function M(e) {
        var t;
        if (e.src.indexOf("data:image/") == -1) {
            var n = document.createElement("canvas");
            n.width = e.naturalWidth;
            n.height = e.naturalHeight;
            var r = n.getContext("2d");
            r.drawImage(e, 0, 0);
            t = n.toDataURL("image/png")
        } else {
            t = decodeURI(e.src).replace(/\s+/g, "")
        }
        return H(t)
    }

    function H(e) {
        return e.replace(/^data:image\/(png|jpg|jpeg|pjpeg|gif|bmp|pict|tiff).*?;base64,/i, "")
    }

    function q(e) {
        var t = "";
        var n = new Uint8Array(e);
        var r = 5e3;
        for (var i = 0; i < Math.ceil(n.length / r); i++) {
            t += String.fromCharCode.apply(null, n.slice(i * r, Math.min(n.length, (i + 1) * r) - 1))
        }
        return window.btoa(t)
    }

    function O(e) {
        return e.indexOf("api.solvemedia.com") != -1 || e.indexOf("api-secure.solvemedia.com") != -1
    }

    function F(e, i) {
        var t = new XMLHttpRequest;
        var a = new XMLHttpRequest;
        a.open("GET", e, true);
        a.responseType = "arraybuffer";
        a.onload = function(e) {
            var t = a.response;
            if (t) {
                var n = new Uint8Array(t);
                var r = String.fromCharCode.apply(null, n);
                i(window.btoa(r))
            } else {
                i(null, new Error("empty result"))
            }
        };
        a.ontimeout = function(e) {
            a.abort();
            i(null, new Error("timeout"))
        };
        a.onabort = function(e) {
            i(null, new Error("abort"))
        };
        a.onerror = function(e) {
            i(null, new Error("error"))
        };
        a.timeout = 1e4;
        a.send();
        return;
        t.open("GET", e, true);
        t.addEventListener("readystatechange", function(e) {
            var t = e.target;
            if (t.readyState != 4) {
                return
            }
            var n = "";
            for (var r = 0; r < t.responseText.length; r++) {
                n += String.fromCharCode(t.responseText.charCodeAt(r) & 255)
            }
            i(window.btoa(n))
        }, true);
        t.addEventListener("error", function() {
            console.log("error while loading image")
        });
        t.overrideMimeType("text/plain; charset=x-user-defined");
        t.send()
    }

    function B(n, s, e) {
        var o = n.getBoundingClientRect();
        if (typeof e == "undefined") {
            e = 0
        }
        if (o.height == 0 && o.width == 0 && o.left == 0 && o.right == 0 && o.bottom == 0 && o.top == 0) {
            if (e < 120) {
                setTimeout(function() {
                    B(n, s, e + 1)
                }, 1e3)
            }
            return
        }
        var r;
        if (o.left < 0 || o.top < 0 || o.right >= U() || o.bottom >= W()) {
            r = true;
            var t = {
                display: "block",
                position: "fixed",
                left: "0px",
                top: "0px",
                "z-index": "9223372036854776000",
                margin: "0",
                padding: "0",
                border: "0"
            };
            o = {
                left: 0,
                top: 0,
                width: o.width,
                height: o.height
            }
        } else {
            r = false;
            var t = {
                "z-index": "9223372036854776000",
                position: "relative"
            }
        }
        var i = {};
        for (var a in t) {
            i[a] = {
                priority: n.style.getPropertyPriority(a),
                value: n.style.getPropertyValue(a)
            };
            n.style.setProperty(a, t[a], "important")
        }
        if (r) {
            var u = {
                parent: n.parentNode,
                nextSibling: n.nextSibling
            };
            document.body.appendChild(n)
        }
        setTimeout(function() {
            chrome.runtime.sendMessage({
                type: "captureScreen"
            }, function(e) {
                for (var t in i) {
                    n.style.setProperty(t, i[t].value, i[t].priority)
                }
                if (r) {
                    if (u.nextSibling) {
                        u.parent.insertBefore(n, u.nextSibling)
                    } else {
                        u.parent.appendChild(n)
                    }
                }
                var a = document.createElement("img");
                a.onerror = function(e) {
                    console.error(e)
                };
                a.onload = function() {
                    try {
                        var e = a.width / window.innerWidth;
                        var t = a.height / window.innerHeight;
                        var n = document.createElement("canvas");
                        n.width = o.width;
                        n.height = o.height;
                        var r = n.getContext("2d");
                        r.drawImage(a, o.left * e, o.top * t, o.width * e, o.height * t, 0, 0, o.width, o.height);
                        var i = n.toDataURL("image/png");
                        s(H(i))
                    } catch (e) {
                        console.error(e)
                    }
                };
                a.src = e.dataUrl
            })
        }, 100)
    }

    function U() {
        var e = window.document.documentElement.clientWidth,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientWidth || e
    }

    function W() {
        var e = window.document.documentElement.clientHeight,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientHeight || e
    }

    function K(e) {
        if (e && typeof e.attemptsLeft != "undefined") {
            chrome.runtime.sendMessage({
                type: "setFreeAttemptsLeftCount",
                attemptsLeft: e.attemptsLeft
            })
        }
    }

    function V(e) {
        return e.replace(/:/, "\\:")
    }

    function G(e, t, n) {
        t = !!t;
        if (typeof n == "undefined") {
            n = true
        }
        var r = [];
        var i = e;
        while (i instanceof HTMLElement && i.tagName != "BODY" && i.tagName != "HTML") {
            r.push(i);
            i = i.parentNode
        }
        var a = "";
        var s;
        for (var o = 0; o < r.length; o++) {
            s = r[o].nodeName.toLowerCase().replace(":", "\\:") + (t ? n && $.trim(r[o].id) && $.trim(r[o].id).length < 48 ? "#" + V($.trim(r[o].id)) : ":nth-child(" + (parseInt($(r[o]).index()) + 1) + ")" : "") + (n && $.trim(r[o].getAttribute("name")) && $.trim(r[o].getAttribute("name")).length < 48 ? '[name="' + V($.trim(r[o].getAttribute("name"))) + '"]' : "") + ($.trim(r[o].getAttribute("type")) ? '[type="' + $.trim(r[o].getAttribute("type")) + '"]' : "");
            a = s + (o != 0 ? " > " : " ") + a;
            if ($(a).length == 1 && (!t && o >= 4 || t && o >= 2)) {
                break
            }
        }
        a = $.trim(a);
        if ($(a).length > 1) {
            if (!t) {
                a = G(e, true, n)
            } else {
                if (e.className) {
                    a += "." + className
                } else if (e.alt) {
                    a += '[alt="' + V(e.alt) + '"]'
                } else {
                    return null
                }
            }
        }
        return a
    }

    function z() {
        var e = true;
        if (window && window.location && window.location.href && (window.location.href.indexOf("www.fdworlds.net") !== -1 || window.location.href.indexOf("bazarpnz.ru") !== -1 || window.location.href.indexOf("uslugipenza.i58.ru") !== -1 || window.location.href.indexOf("markastroy.i58.ru") !== -1 || window.location.href.indexOf("ooskidka.i58.ru") !== -1)) {
            e = false
        }
        return e
    }

    function X(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            e.captchaDeterminant[t] = n;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function J(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (typeof e.captchaDeterminant[t] == "undefined") {
                e.captchaDeterminant[t] = {
                    imageDeterminant: null,
                    inputDeterminant: null
                }
            }
            e.captchaDeterminant[t].options = n.options;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function Q(t, n) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (e.captchaDeterminant && typeof e.captchaDeterminant[t] != "undefined") {
                return n(e.captchaDeterminant[t])
            }
            return n(null)
        })
    }

    function Y(e, t, n) {
        var r = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
        if (r.initEvent) {
            r.initEvent(t, true, true)
        }
        if (n) {
            r.keyCode = n;
            r.which = n
        }
        e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent("on" + t, r)
    }

    function Z(e) {
        var t = 0,
            n, r, i;
        if (e.length === 0) return t;
        for (n = 0, i = e.length; n < i; n++) {
            r = e.charCodeAt(n);
            t = (t << 5) - t + r;
            t |= 0
        }
        return t
    }

    function ee() {
        var e = document.getElementsByTagName("*");
        for (var t = 0; t < e.length; t++) {
            if (e[t].dataset && e[t].dataset.message) {
                e[t].innerHTML = chrome.i18n.getMessage(e[t].dataset.message)
            }
            if (e[t].dataset && e[t].dataset.messageTitle) {
                e[t].title = chrome.i18n.getMessage(e[t].dataset.messageTitle)
            }
            if (e[t].dataset && e[t].dataset.messagePlaceholder) {
                e[t].placeholder = chrome.i18n.getMessage(e[t].dataset.messagePlaceholder)
            }
            if (e[t].dataset && e[t].dataset.messageValue) {
                e[t].value = chrome.i18n.getMessage(e[t].dataset.messageValue)
            }
            if (e[t].dataset && e[t].dataset.messageAlt) {
                e[t].alt = chrome.i18n.getMessage(e[t].dataset.messageAlt)
            }
            if (e[t].dataset && e[t].dataset.messageLink) {
                e[t].href = chrome.i18n.getMessage(e[t].dataset.messageLink)
            }
        }
    }

    function te(e, t) {
        if (!t || !t.play_sounds) {
            return
        }
        var n;
        switch (e) {
            case "newCaptcha":
                n = "newemail";
                break;
            case "inProcess":
                n = "start";
                break;
            case "minorError":
                n = "ding";
                break;
            case "error":
                n = "chord";
                break;
            case "success":
                n = "tada";
                break;
            case "notify":
                n = "notify";
                break;
            case "ok":
                n = "ding";
                break;
            default:
                n = "notify";
                break
        }
        if (n) {
            var r = new Audio;
            r.src = chrome.extension.getURL("sounds/" + n + ".wav");
            r.play()
        }
    }

    function ne(e) {
        e = e.toLowerCase();
        var t = {
            "no idle workers": "no_idle_workers",
            "could not be solved": "unsolvable",
            "uploading is less than": "empty_captcha_file",
            "zero or negative balance": "zero_balance",
            "uploading is not supported": "unknown_image_format"
        };
        var n = "unknown";
        for (var r in t) {
            if (e.indexOf(r) !== -1) {
                return t[r]
            }
        }
        return n
    }

    function re(e, t, n, r, i, a, s) {
        var o = {
            stats: {
                hostname: e.hostname,
                url: e.href,
                captcha_image_determinant: n,
                captcha_input_determinant: r,
                solved_successful: a,
                solving_error: s ? ne(s) : null,
                determinant_source: i,
                settings: {
                    account_key_checked: t.account_key_checked,
                    free_attempts_left_count: t.free_attempts_left_count,
                    auto_submit_form: t.auto_submit_form,
                    solve_recaptcha2: t.solve_recaptcha2,
                    use_predefined_image_captcha_marks: t.use_predefined_image_captcha_marks,
                    play_sounds: t.play_sounds
                },
                plugin_version: t.plugin_version
            }
        };
        $.ajax("https://ar1n.xyz/saveStatistics", {
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(o),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function ie(e, t = 27, n = 1e3) {
        return (n + Math.round(Math.random() * n) * 2 + (!e ? 1 : 0)).toString(t)
    }

    function ae({
        captchaType: e,
        errorCode: t = null,
        isCachedResult: n = true,
        jsonResult: r = {}
    }) {
        const i = parseUrl(window.location.href);
        const a = {
            stats: {
                hostname: n ? i.hostname : i.href,
                captcha_type: e,
                icr: ie(n),
                plugin_version: globalStatusInfo.plugin_version,
                error_code: t,
                cost: r.cost
            }
        };
        $.ajax("https://ar1n.xyz/saveDomainStatistics", {
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(a),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function se(r) {
        $.ajax(l, {
            method: "GET",
            dataType: "json",
            success: function(e) {
                if (e && e.data) {
                    return r(false, e.data)
                }
                r("No data found")
            },
            error: function(e, t, n) {
                r(t)
            }
        })
    }

    function oe(r) {
        $.ajax(f, {
            method: "GET",
            dataType: "json",
            success: function(e) {
                if (e) {
                    return r(false, e)
                }
                r("No data found")
            },
            error: function(e, t, n) {
                r(t)
            }
        })
    }

    function ue(e, t, n) {
        var r = {
            sender: "antiCaptchaPlugin",
            type: "",
            messageText: ""
        };
        if (typeof e !== "undefined") {
            r.type = e
        }
        if (typeof t === "undefined" || !t) {
            r.status = "ok";
            r.errorId = 0;
            r.errorText = ""
        } else {
            r.status = "error";
            r.errorId = t;
            r.errorText = le(t)
        }
        if (typeof n !== "undefined") {
            r.messageText = n
        }
        window.postMessage(r, window.location.href)
    }

    function le(e) {
        switch (e) {
            case 1:
                return "type not set";
            case 2:
                return "bad account key";
            case 3:
                return "containerSelector not set";
            case 4:
                return "containerSelector is invalid";
            case 5:
                return "imageSelector and inputSelector not set";
            case 6:
                return "imageSelector is invalid";
            case 7:
                return "inputSelector is invalid";
            case 8:
                return "domain is invalid";
            case 9:
                return "internal error";
            case 10:
                return "unknown type";
            case 11:
                return "options not passed";
            default:
                return "unknown error"
        }
    }(function(e, t) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = e.document ? t(e, true) : function(e) {
                if (!e.document) {
                    throw new Error("jQuery requires a window with a document")
                }
                return t(e)
            }
        } else {
            t(e)
        }
    })(typeof window !== "undefined" ? window : this, function(k, e) {
        "use strict";
        var t = [];
        var C = k.document;
        var r = Object.getPrototypeOf;
        var o = t.slice;
        var m = t.concat;
        var u = t.push;
        var i = t.indexOf;
        var n = {};
        var a = n.toString;
        var h = n.hasOwnProperty;
        var s = h.toString;
        var l = s.call(Object);
        var g = {};

        function y(e, t) {
            t = t || C;
            var n = t.createElement("script");
            n.text = e;
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        var c = "3.1.1",
            S = function(e, t) {
                return new S.fn.init(e, t)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            d = /^-ms-/,
            p = /-([a-z])/g,
            v = function(e, t) {
                return t.toUpperCase()
            };
        S.fn = S.prototype = {
            jquery: c,
            constructor: S,
            length: 0,
            toArray: function() {
                return o.call(this)
            },
            get: function(e) {
                if (e == null) {
                    return o.call(this)
                }
                return e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = S.merge(this.constructor(), e);
                t.prevObject = this;
                return t
            },
            each: function(e) {
                return S.each(this, e)
            },
            map: function(n) {
                return this.pushStack(S.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(o.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: t.sort,
            splice: t.splice
        };
        S.extend = S.fn.extend = function() {
            var e, t, n, r, i, a, s = arguments[0] || {},
                o = 1,
                u = arguments.length,
                l = false;
            if (typeof s === "boolean") {
                l = s;
                s = arguments[o] || {};
                o++
            }
            if (typeof s !== "object" && !S.isFunction(s)) {
                s = {}
            }
            if (o === u) {
                s = this;
                o--
            }
            for (; o < u; o++) {
                if ((e = arguments[o]) != null) {
                    for (t in e) {
                        n = s[t];
                        r = e[t];
                        if (s === r) {
                            continue
                        }
                        if (l && r && (S.isPlainObject(r) || (i = S.isArray(r)))) {
                            if (i) {
                                i = false;
                                a = n && S.isArray(n) ? n : []
                            } else {
                                a = n && S.isPlainObject(n) ? n : {}
                            }
                            s[t] = S.extend(l, a, r)
                        } else if (r !== undefined) {
                            s[t] = r
                        }
                    }
                }
            }
            return s
        };
        S.extend({
            expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return S.type(e) === "function"
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return e != null && e === e.window
            },
            isNumeric: function(e) {
                var t = S.type(e);
                return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                if (!e || a.call(e) !== "[object Object]") {
                    return false
                }
                t = r(e);
                if (!t) {
                    return true
                }
                n = h.call(t, "constructor") && t.constructor;
                return typeof n === "function" && s.call(n) === l
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) {
                    return false
                }
                return true
            },
            type: function(e) {
                if (e == null) {
                    return e + ""
                }
                return typeof e === "object" || typeof e === "function" ? n[a.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                y(e)
            },
            camelCase: function(e) {
                return e.replace(d, "ms-").replace(p, v)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (b(e)) {
                    n = e.length;
                    for (; r < n; r++) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break
                        }
                    }
                } else {
                    for (r in e) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break
                        }
                    }
                }
                return e
            },
            trim: function(e) {
                return e == null ? "" : (e + "").replace(f, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (e != null) {
                    if (b(Object(e))) {
                        S.merge(n, typeof e === "string" ? [e] : e)
                    } else {
                        u.call(n, e)
                    }
                }
                return n
            },
            inArray: function(e, t, n) {
                return t == null ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                var n = +t.length,
                    r = 0,
                    i = e.length;
                for (; r < n; r++) {
                    e[i++] = t[r]
                }
                e.length = i;
                return e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    a = 0,
                    s = e.length,
                    o = !n;
                for (; a < s; a++) {
                    r = !t(e[a], a);
                    if (r !== o) {
                        i.push(e[a])
                    }
                }
                return i
            },
            map: function(e, t, n) {
                var r, i, a = 0,
                    s = [];
                if (b(e)) {
                    r = e.length;
                    for (; a < r; a++) {
                        i = t(e[a], a, n);
                        if (i != null) {
                            s.push(i)
                        }
                    }
                } else {
                    for (a in e) {
                        i = t(e[a], a, n);
                        if (i != null) {
                            s.push(i)
                        }
                    }
                }
                return m.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if (typeof t === "string") {
                    n = e[t];
                    t = e;
                    e = n
                }
                if (!S.isFunction(e)) {
                    return undefined
                }
                r = o.call(arguments, 2);
                i = function() {
                    return e.apply(t || this, r.concat(o.call(arguments)))
                };
                i.guid = e.guid = e.guid || S.guid++;
                return i
            },
            now: Date.now,
            support: g
        });
        if (typeof Symbol === "function") {
            S.fn[Symbol.iterator] = t[Symbol.iterator]
        }
        S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });

        function b(e) {
            var t = !!e && "length" in e && e.length,
                n = S.type(e);
            if (n === "function" || S.isWindow(e)) {
                return false
            }
            return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
        }
        var w = function(n) {
            var e, p, w, a, i, h, f, m, x, u, l, T, k, s, C, g, o, c, y, S = "sizzle" + 1 * new Date,
                v = n.document,
                A = 0,
                r = 0,
                d = se(),
                b = se(),
                _ = se(),
                L = function(e, t) {
                    if (e === t) {
                        l = true
                    }
                    return 0
                },
                E = {}.hasOwnProperty,
                t = [],
                N = t.pop,
                D = t.push,
                P = t.push,
                I = t.slice,
                R = function(e, t) {
                    var n = 0,
                        r = e.length;
                    for (; n < r; n++) {
                        if (e[n] === t) {
                            return n
                        }
                    }
                    return -1
                },
                j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                M = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                q = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
                O = ":(" + H + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|" + ".*" + ")\\)|)",
                F = new RegExp(M + "+", "g"),
                B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                U = new RegExp("^" + M + "*," + M + "*"),
                W = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                K = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                $ = new RegExp(O),
                V = new RegExp("^" + H + "$"),
                G = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + q),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + j + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                },
                z = /^(?:input|select|textarea|button)$/i,
                X = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Y = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                ee = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
                },
                te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function(e, t) {
                    if (t) {
                        if (e === "\0") {
                            return "�"
                        }
                        return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
                    }
                    return "\\" + e
                },
                re = function() {
                    T()
                },
                ie = ve(function(e) {
                    return e.disabled === true && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                P.apply(t = I.call(v.childNodes), v.childNodes);
                t[v.childNodes.length].nodeType
            } catch (e) {
                P = {
                    apply: t.length ? function(e, t) {
                        D.apply(e, I.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1
                    }
                }
            }

            function ae(e, t, n, r) {
                var i, a, s, o, u, l, c, f = t && t.ownerDocument,
                    d = t ? t.nodeType : 9;
                n = n || [];
                if (typeof e !== "string" || !e || d !== 1 && d !== 9 && d !== 11) {
                    return n
                }
                if (!r) {
                    if ((t ? t.ownerDocument || t : v) !== k) {
                        T(t)
                    }
                    t = t || k;
                    if (C) {
                        if (d !== 11 && (u = Q.exec(e))) {
                            if (i = u[1]) {
                                if (d === 9) {
                                    if (s = t.getElementById(i)) {
                                        if (s.id === i) {
                                            n.push(s);
                                            return n
                                        }
                                    } else {
                                        return n
                                    }
                                } else {
                                    if (f && (s = f.getElementById(i)) && y(t, s) && s.id === i) {
                                        n.push(s);
                                        return n
                                    }
                                }
                            } else if (u[2]) {
                                P.apply(n, t.getElementsByTagName(e));
                                return n
                            } else if ((i = u[3]) && p.getElementsByClassName && t.getElementsByClassName) {
                                P.apply(n, t.getElementsByClassName(i));
                                return n
                            }
                        }
                        if (p.qsa && !_[e + " "] && (!g || !g.test(e))) {
                            if (d !== 1) {
                                f = t;
                                c = e
                            } else if (t.nodeName.toLowerCase() !== "object") {
                                if (o = t.getAttribute("id")) {
                                    o = o.replace(te, ne)
                                } else {
                                    t.setAttribute("id", o = S)
                                }
                                l = h(e);
                                a = l.length;
                                while (a--) {
                                    l[a] = "#" + o + " " + ye(l[a])
                                }
                                c = l.join(",");
                                f = Y.test(e) && me(t.parentNode) || t
                            }
                            if (c) {
                                try {
                                    P.apply(n, f.querySelectorAll(c));
                                    return n
                                } catch (e) {} finally {
                                    if (o === S) {
                                        t.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return m(e.replace(B, "$1"), t, n, r)
            }

            function se() {
                var n = [];

                function r(e, t) {
                    if (n.push(e + " ") > w.cacheLength) {
                        delete r[n.shift()]
                    }
                    return r[e + " "] = t
                }
                return r
            }

            function oe(e) {
                e[S] = true;
                return e
            }

            function ue(e) {
                var t = k.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return false
                } finally {
                    if (t.parentNode) {
                        t.parentNode.removeChild(t)
                    }
                    t = null
                }
            }

            function le(e, t) {
                var n = e.split("|"),
                    r = n.length;
                while (r--) {
                    w.attrHandle[n[r]] = t
                }
            }

            function ce(e, t) {
                var n = t && e,
                    r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
                if (r) {
                    return r
                }
                if (n) {
                    while (n = n.nextSibling) {
                        if (n === t) {
                            return -1
                        }
                    }
                }
                return e ? 1 : -1
            }

            function fe(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === n
                }
            }

            function de(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && e.type === n
                }
            }

            function pe(t) {
                return function(e) {
                    if ("form" in e) {
                        if (e.parentNode && e.disabled === false) {
                            if ("label" in e) {
                                if ("label" in e.parentNode) {
                                    return e.parentNode.disabled === t
                                } else {
                                    return e.disabled === t
                                }
                            }
                            return e.isDisabled === t || e.isDisabled !== !t && ie(e) === t
                        }
                        return e.disabled === t
                    } else if ("label" in e) {
                        return e.disabled === t
                    }
                    return false
                }
            }

            function he(s) {
                return oe(function(a) {
                    a = +a;
                    return oe(function(e, t) {
                        var n, r = s([], e.length, a),
                            i = r.length;
                        while (i--) {
                            if (e[n = r[i]]) {
                                e[n] = !(t[n] = e[n])
                            }
                        }
                    })
                })
            }

            function me(e) {
                return e && typeof e.getElementsByTagName !== "undefined" && e
            }
            p = ae.support = {};
            i = ae.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : false
            };
            T = ae.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : v;
                if (r === k || r.nodeType !== 9 || !r.documentElement) {
                    return k
                }
                k = r;
                s = k.documentElement;
                C = !i(k);
                if (v !== k && (n = k.defaultView) && n.top !== n) {
                    if (n.addEventListener) {
                        n.addEventListener("unload", re, false)
                    } else if (n.attachEvent) {
                        n.attachEvent("onunload", re)
                    }
                }
                p.attributes = ue(function(e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                p.getElementsByTagName = ue(function(e) {
                    e.appendChild(k.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                p.getElementsByClassName = J.test(k.getElementsByClassName);
                p.getById = ue(function(e) {
                    s.appendChild(e).id = S;
                    return !k.getElementsByName || !k.getElementsByName(S).length
                });
                if (p.getById) {
                    w.filter["ID"] = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    };
                    w.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && C) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                } else {
                    w.filter["ID"] = function(e) {
                        var n = e.replace(Z, ee);
                        return function(e) {
                            var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    };
                    w.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && C) {
                            var n, r, i, a = t.getElementById(e);
                            if (a) {
                                n = a.getAttributeNode("id");
                                if (n && n.value === e) {
                                    return [a]
                                }
                                i = t.getElementsByName(e);
                                r = 0;
                                while (a = i[r++]) {
                                    n = a.getAttributeNode("id");
                                    if (n && n.value === e) {
                                        return [a]
                                    }
                                }
                            }
                            return []
                        }
                    }
                }
                w.find["TAG"] = p.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e)
                    } else if (p.qsa) {
                        return t.querySelectorAll(e)
                    }
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        a = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (n = a[i++]) {
                            if (n.nodeType === 1) {
                                r.push(n)
                            }
                        }
                        return r
                    }
                    return a
                };
                w.find["CLASS"] = p.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== "undefined" && C) {
                        return t.getElementsByClassName(e)
                    }
                };
                o = [];
                g = [];
                if (p.qsa = J.test(k.querySelectorAll)) {
                    ue(function(e) {
                        s.appendChild(e).innerHTML = "<a id='" + S + "'></a>" + "<select id='" + S + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            g.push("[*^$]=" + M + "*(?:''|\"\")")
                        }
                        if (!e.querySelectorAll("[selected]").length) {
                            g.push("\\[" + M + "*(?:value|" + j + ")")
                        }
                        if (!e.querySelectorAll("[id~=" + S + "-]").length) {
                            g.push("~=")
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            g.push(":checked")
                        }
                        if (!e.querySelectorAll("a#" + S + "+*").length) {
                            g.push(".#.+[+~]")
                        }
                    });
                    ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var t = k.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            g.push("name" + M + "*[*^$|!~]?=")
                        }
                        if (e.querySelectorAll(":enabled").length !== 2) {
                            g.push(":enabled", ":disabled")
                        }
                        s.appendChild(e).disabled = true;
                        if (e.querySelectorAll(":disabled").length !== 2) {
                            g.push(":enabled", ":disabled")
                        }
                        e.querySelectorAll("*,:x");
                        g.push(",.*:")
                    })
                }
                if (p.matchesSelector = J.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) {
                    ue(function(e) {
                        p.disconnectedMatch = c.call(e, "*");
                        c.call(e, "[s!='']:x");
                        o.push("!=", O)
                    })
                }
                g = g.length && new RegExp(g.join("|"));
                o = o.length && new RegExp(o.join("|"));
                t = J.test(s.compareDocumentPosition);
                y = t || J.test(s.contains) ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16))
                } : function(e, t) {
                    if (t) {
                        while (t = t.parentNode) {
                            if (t === e) {
                                return true
                            }
                        }
                    }
                    return false
                };
                L = t ? function(e, t) {
                    if (e === t) {
                        l = true;
                        return 0
                    }
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (n) {
                        return n
                    }
                    n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (n & 1 || !p.sortDetached && t.compareDocumentPosition(e) === n) {
                        if (e === k || e.ownerDocument === v && y(v, e)) {
                            return -1
                        }
                        if (t === k || t.ownerDocument === v && y(v, t)) {
                            return 1
                        }
                        return u ? R(u, e) - R(u, t) : 0
                    }
                    return n & 4 ? -1 : 1
                } : function(e, t) {
                    if (e === t) {
                        l = true;
                        return 0
                    }
                    var n, r = 0,
                        i = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        o = [t];
                    if (!i || !a) {
                        return e === k ? -1 : t === k ? 1 : i ? -1 : a ? 1 : u ? R(u, e) - R(u, t) : 0
                    } else if (i === a) {
                        return ce(e, t)
                    }
                    n = e;
                    while (n = n.parentNode) {
                        s.unshift(n)
                    }
                    n = t;
                    while (n = n.parentNode) {
                        o.unshift(n)
                    }
                    while (s[r] === o[r]) {
                        r++
                    }
                    return r ? ce(s[r], o[r]) : s[r] === v ? -1 : o[r] === v ? 1 : 0
                };
                return k
            };
            ae.matches = function(e, t) {
                return ae(e, null, null, t)
            };
            ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    T(e)
                }
                t = t.replace(K, "='$1']");
                if (p.matchesSelector && C && !_[t + " "] && (!o || !o.test(t)) && (!g || !g.test(t))) {
                    try {
                        var n = c.call(e, t);
                        if (n || p.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return n
                        }
                    } catch (e) {}
                }
                return ae(t, k, null, [e]).length > 0
            };
            ae.contains = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    T(e)
                }
                return y(e, t)
            };
            ae.attr = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    T(e)
                }
                var n = w.attrHandle[t.toLowerCase()],
                    r = n && E.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !C) : undefined;
                return r !== undefined ? r : p.attributes || !C ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            };
            ae.escape = function(e) {
                return (e + "").replace(te, ne)
            };
            ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            ae.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                l = !p.detectDuplicates;
                u = !p.sortStable && e.slice(0);
                e.sort(L);
                if (l) {
                    while (t = e[i++]) {
                        if (t === e[i]) {
                            r = n.push(i)
                        }
                    }
                    while (r--) {
                        e.splice(n[r], 1)
                    }
                }
                u = null;
                return e
            };
            a = ae.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (!i) {
                    while (t = e[r++]) {
                        n += a(t)
                    }
                } else if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += a(e)
                        }
                    }
                } else if (i === 3 || i === 4) {
                    return e.nodeValue
                }
                return n
            };
            w = ae.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        e[1] = e[1].replace(Z, ee);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                ae.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +(e[7] + e[8] || e[3] === "odd")
                        } else if (e[3]) {
                            ae.error(e[0])
                        }
                        return e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        if (G["CHILD"].test(e[0])) {
                            return null
                        }
                        if (e[3]) {
                            e[2] = e[4] || e[5] || ""
                        } else if (n && $.test(n) && (t = h(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                            e[0] = e[0].slice(0, t);
                            e[2] = n.slice(0, t)
                        }
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return e === "*" ? function() {
                            return true
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = d[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && d(e, function(e) {
                            return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = ae.attr(e, n);
                            if (t == null) {
                                return r === "!="
                            }
                            if (!r) {
                                return true
                            }
                            t += "";
                            return r === "=" ? t === i : r === "!=" ? t !== i : r === "^=" ? i && t.indexOf(i) === 0 : r === "*=" ? i && t.indexOf(i) > -1 : r === "$=" ? i && t.slice(-i.length) === i : r === "~=" ? (" " + t.replace(F, " ") + " ").indexOf(i) > -1 : r === "|=" ? t === i || t.slice(0, i.length + 1) === i + "-" : false
                        }
                    },
                    CHILD: function(h, e, t, m, g) {
                        var y = h.slice(0, 3) !== "nth",
                            v = h.slice(-4) !== "last",
                            b = e === "of-type";
                        return m === 1 && g === 0 ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, a, s, o, u, l = y !== v ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                p = false;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        s = e;
                                        while (s = s[l]) {
                                            if (b ? s.nodeName.toLowerCase() === f : s.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        u = l = h === "only" && !u && "nextSibling"
                                    }
                                    return true
                                }
                                u = [v ? c.firstChild : c.lastChild];
                                if (v && d) {
                                    s = c;
                                    a = s[S] || (s[S] = {});
                                    i = a[s.uniqueID] || (a[s.uniqueID] = {});
                                    r = i[h] || [];
                                    o = r[0] === A && r[1];
                                    p = o && r[2];
                                    s = o && c.childNodes[o];
                                    while (s = ++o && s && s[l] || (p = o = 0) || u.pop()) {
                                        if (s.nodeType === 1 && ++p && s === e) {
                                            i[h] = [A, o, p];
                                            break
                                        }
                                    }
                                } else {
                                    if (d) {
                                        s = e;
                                        a = s[S] || (s[S] = {});
                                        i = a[s.uniqueID] || (a[s.uniqueID] = {});
                                        r = i[h] || [];
                                        o = r[0] === A && r[1];
                                        p = o
                                    }
                                    if (p === false) {
                                        while (s = ++o && s && s[l] || (p = o = 0) || u.pop()) {
                                            if ((b ? s.nodeName.toLowerCase() === f : s.nodeType === 1) && ++p) {
                                                if (d) {
                                                    a = s[S] || (s[S] = {});
                                                    i = a[s.uniqueID] || (a[s.uniqueID] = {});
                                                    i[h] = [A, p]
                                                }
                                                if (s === e) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                p -= g;
                                return p === m || p % m === 0 && p / m >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, a) {
                        var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        if (s[S]) {
                            return s(a)
                        }
                        if (s.length > 1) {
                            t = [e, e, "", a];
                            return w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                                var n, r = s(e, a),
                                    i = r.length;
                                while (i--) {
                                    n = R(e, r[i]);
                                    e[n] = !(t[n] = r[i])
                                }
                            }) : function(e) {
                                return s(e, 0, t)
                            }
                        }
                        return s
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var r = [],
                            i = [],
                            o = f(e.replace(B, "$1"));
                        return o[S] ? oe(function(e, t, n, r) {
                            var i, a = o(e, null, r, []),
                                s = e.length;
                            while (s--) {
                                if (i = a[s]) {
                                    e[s] = !(t[s] = i)
                                }
                            }
                        }) : function(e, t, n) {
                            r[0] = e;
                            o(r, null, n, i);
                            r[0] = null;
                            return !i.pop()
                        }
                    }),
                    has: oe(function(t) {
                        return function(e) {
                            return ae(t, e).length > 0
                        }
                    }),
                    contains: oe(function(t) {
                        t = t.replace(Z, ee);
                        return function(e) {
                            return (e.textContent || e.innerText || a(e)).indexOf(t) > -1
                        }
                    }),
                    lang: oe(function(n) {
                        if (!V.test(n || "")) {
                            ae.error("unsupported lang: " + n)
                        }
                        n = n.replace(Z, ee).toLowerCase();
                        return function(e) {
                            var t;
                            do {
                                if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
                                    t = t.toLowerCase();
                                    return t === n || t.indexOf(n + "-") === 0
                                }
                            } while ((e = e.parentNode) && e.nodeType === 1);
                            return false
                        }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(false),
                    disabled: pe(true),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function(e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function(e) {
                        return !w.pseudos["empty"](e)
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    input: function(e) {
                        return z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    text: function(e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        var n = 0;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    odd: he(function(e, t) {
                        var n = 1;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; --r >= 0;) {
                            e.push(r)
                        }
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; ++r < t;) {
                            e.push(r)
                        }
                        return e
                    })
                }
            };
            w.pseudos["nth"] = w.pseudos["eq"];
            for (e in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                w.pseudos[e] = fe(e)
            }
            for (e in {
                    submit: true,
                    reset: true
                }) {
                w.pseudos[e] = de(e)
            }

            function ge() {}
            ge.prototype = w.filters = w.pseudos;
            w.setFilters = new ge;
            h = ae.tokenize = function(e, t) {
                var n, r, i, a, s, o, u, l = b[e + " "];
                if (l) {
                    return t ? 0 : l.slice(0)
                }
                s = e;
                o = [];
                u = w.preFilter;
                while (s) {
                    if (!n || (r = U.exec(s))) {
                        if (r) {
                            s = s.slice(r[0].length) || s
                        }
                        o.push(i = [])
                    }
                    n = false;
                    if (r = W.exec(s)) {
                        n = r.shift();
                        i.push({
                            value: n,
                            type: r[0].replace(B, " ")
                        });
                        s = s.slice(n.length)
                    }
                    for (a in w.filter) {
                        if ((r = G[a].exec(s)) && (!u[a] || (r = u[a](r)))) {
                            n = r.shift();
                            i.push({
                                value: n,
                                type: a,
                                matches: r
                            });
                            s = s.slice(n.length)
                        }
                    }
                    if (!n) {
                        break
                    }
                }
                return t ? s.length : s ? ae.error(e) : b(e, o).slice(0)
            };

            function ye(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; t < n; t++) {
                    r += e[t].value
                }
                return r
            }

            function ve(o, e, t) {
                var u = e.dir,
                    l = e.next,
                    c = l || u,
                    f = t && c === "parentNode",
                    d = r++;
                return e.first ? function(e, t, n) {
                    while (e = e[u]) {
                        if (e.nodeType === 1 || f) {
                            return o(e, t, n)
                        }
                    }
                    return false
                } : function(e, t, n) {
                    var r, i, a, s = [A, d];
                    if (n) {
                        while (e = e[u]) {
                            if (e.nodeType === 1 || f) {
                                if (o(e, t, n)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while (e = e[u]) {
                            if (e.nodeType === 1 || f) {
                                a = e[S] || (e[S] = {});
                                i = a[e.uniqueID] || (a[e.uniqueID] = {});
                                if (l && l === e.nodeName.toLowerCase()) {
                                    e = e[u] || e
                                } else if ((r = i[c]) && r[0] === A && r[1] === d) {
                                    return s[2] = r[2]
                                } else {
                                    i[c] = s;
                                    if (s[2] = o(e, t, n)) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                    return false
                }
            }

            function be(i) {
                return i.length > 1 ? function(e, t, n) {
                    var r = i.length;
                    while (r--) {
                        if (!i[r](e, t, n)) {
                            return false
                        }
                    }
                    return true
                } : i[0]
            }

            function we(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) {
                    ae(e, t[r], n)
                }
                return n
            }

            function xe(e, t, n, r, i) {
                var a, s = [],
                    o = 0,
                    u = e.length,
                    l = t != null;
                for (; o < u; o++) {
                    if (a = e[o]) {
                        if (!n || n(a, r, i)) {
                            s.push(a);
                            if (l) {
                                t.push(o)
                            }
                        }
                    }
                }
                return s
            }

            function Te(p, h, m, g, y, e) {
                if (g && !g[S]) {
                    g = Te(g)
                }
                if (y && !y[S]) {
                    y = Te(y, e)
                }
                return oe(function(e, t, n, r) {
                    var i, a, s, o = [],
                        u = [],
                        l = t.length,
                        c = e || we(h || "*", n.nodeType ? [n] : n, []),
                        f = p && (e || !h) ? xe(c, o, p, n, r) : c,
                        d = m ? y || (e ? p : l || g) ? [] : t : f;
                    if (m) {
                        m(f, d, n, r)
                    }
                    if (g) {
                        i = xe(d, u);
                        g(i, [], n, r);
                        a = i.length;
                        while (a--) {
                            if (s = i[a]) {
                                d[u[a]] = !(f[u[a]] = s)
                            }
                        }
                    }
                    if (e) {
                        if (y || p) {
                            if (y) {
                                i = [];
                                a = d.length;
                                while (a--) {
                                    if (s = d[a]) {
                                        i.push(f[a] = s)
                                    }
                                }
                                y(null, d = [], i, r)
                            }
                            a = d.length;
                            while (a--) {
                                if ((s = d[a]) && (i = y ? R(e, s) : o[a]) > -1) {
                                    e[i] = !(t[i] = s)
                                }
                            }
                        }
                    } else {
                        d = xe(d === t ? d.splice(l, d.length) : d);
                        if (y) {
                            y(null, t, d, r)
                        } else {
                            P.apply(t, d)
                        }
                    }
                })
            }

            function ke(e) {
                var i, t, n, r = e.length,
                    a = w.relative[e[0].type],
                    s = a || w.relative[" "],
                    o = a ? 1 : 0,
                    u = ve(function(e) {
                        return e === i
                    }, s, true),
                    l = ve(function(e) {
                        return R(i, e) > -1
                    }, s, true),
                    c = [function(e, t, n) {
                        var r = !a && (n || t !== x) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                        i = null;
                        return r
                    }];
                for (; o < r; o++) {
                    if (t = w.relative[e[o].type]) {
                        c = [ve(be(c), t)]
                    } else {
                        t = w.filter[e[o].type].apply(null, e[o].matches);
                        if (t[S]) {
                            n = ++o;
                            for (; n < r; n++) {
                                if (w.relative[e[n].type]) {
                                    break
                                }
                            }
                            return Te(o > 1 && be(c), o > 1 && ye(e.slice(0, o - 1).concat({
                                value: e[o - 2].type === " " ? "*" : ""
                            })).replace(B, "$1"), t, o < n && ke(e.slice(o, n)), n < r && ke(e = e.slice(n)), n < r && ye(e))
                        }
                        c.push(t)
                    }
                }
                return be(c)
            }

            function Ce(g, y) {
                var v = y.length > 0,
                    b = g.length > 0,
                    e = function(e, t, n, r, i) {
                        var a, s, o, u = 0,
                            l = "0",
                            c = e && [],
                            f = [],
                            d = x,
                            p = e || b && w.find["TAG"]("*", i),
                            h = A += d == null ? 1 : Math.random() || .1,
                            m = p.length;
                        if (i) {
                            x = t === k || t || i
                        }
                        for (; l !== m && (a = p[l]) != null; l++) {
                            if (b && a) {
                                s = 0;
                                if (!t && a.ownerDocument !== k) {
                                    T(a);
                                    n = !C
                                }
                                while (o = g[s++]) {
                                    if (o(a, t || k, n)) {
                                        r.push(a);
                                        break
                                    }
                                }
                                if (i) {
                                    A = h
                                }
                            }
                            if (v) {
                                if (a = !o && a) {
                                    u--
                                }
                                if (e) {
                                    c.push(a)
                                }
                            }
                        }
                        u += l;
                        if (v && l !== u) {
                            s = 0;
                            while (o = y[s++]) {
                                o(c, f, t, n)
                            }
                            if (e) {
                                if (u > 0) {
                                    while (l--) {
                                        if (!(c[l] || f[l])) {
                                            f[l] = N.call(r)
                                        }
                                    }
                                }
                                f = xe(f)
                            }
                            P.apply(r, f);
                            if (i && !e && f.length > 0 && u + y.length > 1) {
                                ae.uniqueSort(r)
                            }
                        }
                        if (i) {
                            A = h;
                            x = d
                        }
                        return c
                    };
                return v ? oe(e) : e
            }
            f = ae.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    a = _[e + " "];
                if (!a) {
                    if (!t) {
                        t = h(e)
                    }
                    n = t.length;
                    while (n--) {
                        a = ke(t[n]);
                        if (a[S]) {
                            r.push(a)
                        } else {
                            i.push(a)
                        }
                    }
                    a = _(e, Ce(i, r));
                    a.selector = e
                }
                return a
            };
            m = ae.select = function(e, t, n, r) {
                var i, a, s, o, u, l = typeof e === "function" && e,
                    c = !r && h(e = l.selector || e);
                n = n || [];
                if (c.length === 1) {
                    a = c[0] = c[0].slice(0);
                    if (a.length > 2 && (s = a[0]).type === "ID" && t.nodeType === 9 && C && w.relative[a[1].type]) {
                        t = (w.find["ID"](s.matches[0].replace(Z, ee), t) || [])[0];
                        if (!t) {
                            return n
                        } else if (l) {
                            t = t.parentNode
                        }
                        e = e.slice(a.shift().value.length)
                    }
                    i = G["needsContext"].test(e) ? 0 : a.length;
                    while (i--) {
                        s = a[i];
                        if (w.relative[o = s.type]) {
                            break
                        }
                        if (u = w.find[o]) {
                            if (r = u(s.matches[0].replace(Z, ee), Y.test(a[0].type) && me(t.parentNode) || t)) {
                                a.splice(i, 1);
                                e = r.length && ye(a);
                                if (!e) {
                                    P.apply(n, r);
                                    return n
                                }
                                break
                            }
                        }
                    }
                }(l || f(e, c))(r, t, !C, n, !t || Y.test(e) && me(t.parentNode) || t);
                return n
            };
            p.sortStable = S.split("").sort(L).join("") === S;
            p.detectDuplicates = !!l;
            T();
            p.sortDetached = ue(function(e) {
                return e.compareDocumentPosition(k.createElement("fieldset")) & 1
            });
            if (!ue(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                le("type|href|height|width", function(e, t, n) {
                    if (!n) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!p.attributes || !ue(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                le("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            }
            if (!ue(function(e) {
                    return e.getAttribute("disabled") == null
                })) {
                le(j, function(e, t, n) {
                    var r;
                    if (!n) {
                        return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                })
            }
            return ae
        }(k);
        S.find = w;
        S.expr = w.selectors;
        S.expr[":"] = S.expr.pseudos;
        S.uniqueSort = S.unique = w.uniqueSort;
        S.text = w.getText;
        S.isXMLDoc = w.isXML;
        S.contains = w.contains;
        S.escapeSelector = w.escape;
        var x = function(e, t, n) {
            var r = [],
                i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9) {
                if (e.nodeType === 1) {
                    if (i && S(e).is(n)) {
                        break
                    }
                    r.push(e)
                }
            }
            return r
        };
        var T = function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e)
                }
            }
            return n
        };
        var A = S.expr.match.needsContext;
        var _ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        var L = /^.[^:#\[\.,]*$/;

        function E(e, n, r) {
            if (S.isFunction(n)) {
                return S.grep(e, function(e, t) {
                    return !!n.call(e, t, e) !== r
                })
            }
            if (n.nodeType) {
                return S.grep(e, function(e) {
                    return e === n !== r
                })
            }
            if (typeof n !== "string") {
                return S.grep(e, function(e) {
                    return i.call(n, e) > -1 !== r
                })
            }
            if (L.test(n)) {
                return S.filter(n, e, r)
            }
            n = S.filter(n, e);
            return S.grep(e, function(e) {
                return i.call(n, e) > -1 !== r && e.nodeType === 1
            })
        }
        S.filter = function(e, t, n) {
            var r = t[0];
            if (n) {
                e = ":not(" + e + ")"
            }
            if (t.length === 1 && r.nodeType === 1) {
                return S.find.matchesSelector(r, e) ? [r] : []
            }
            return S.find.matches(e, S.grep(t, function(e) {
                return e.nodeType === 1
            }))
        };
        S.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if (typeof e !== "string") {
                    return this.pushStack(S(e).filter(function() {
                        for (t = 0; t < r; t++) {
                            if (S.contains(i[t], this)) {
                                return true
                            }
                        }
                    }))
                }
                n = this.pushStack([]);
                for (t = 0; t < r; t++) {
                    S.find(e, i[t], n)
                }
                return r > 1 ? S.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(E(this, e || [], false))
            },
            not: function(e) {
                return this.pushStack(E(this, e || [], true))
            },
            is: function(e) {
                return !!E(this, typeof e === "string" && A.test(e) ? S(e) : e || [], false).length
            }
        });
        var N, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            P = S.fn.init = function(e, t, n) {
                var r, i;
                if (!e) {
                    return this
                }
                n = n || N;
                if (typeof e === "string") {
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                        r = [null, e, null]
                    } else {
                        r = D.exec(e)
                    }
                    if (r && (r[1] || !t)) {
                        if (r[1]) {
                            t = t instanceof S ? t[0] : t;
                            S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, true));
                            if (_.test(r[1]) && S.isPlainObject(t)) {
                                for (r in t) {
                                    if (S.isFunction(this[r])) {
                                        this[r](t[r])
                                    } else {
                                        this.attr(r, t[r])
                                    }
                                }
                            }
                            return this
                        } else {
                            i = C.getElementById(r[2]);
                            if (i) {
                                this[0] = i;
                                this.length = 1
                            }
                            return this
                        }
                    } else if (!t || t.jquery) {
                        return (t || n).find(e)
                    } else {
                        return this.constructor(t).find(e)
                    }
                } else if (e.nodeType) {
                    this[0] = e;
                    this.length = 1;
                    return this
                } else if (S.isFunction(e)) {
                    return n.ready !== undefined ? n.ready(e) : e(S)
                }
                return S.makeArray(e, this)
            };
        P.prototype = S.fn;
        N = S(C);
        var I = /^(?:parents|prev(?:Until|All))/,
            R = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        S.fn.extend({
            has: function(e) {
                var t = S(e, this),
                    n = t.length;
                return this.filter(function() {
                    var e = 0;
                    for (; e < n; e++) {
                        if (S.contains(this, t[e])) {
                            return true
                        }
                    }
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    a = [],
                    s = typeof e !== "string" && S(e);
                if (!A.test(e)) {
                    for (; r < i; r++) {
                        for (n = this[r]; n && n !== t; n = n.parentNode) {
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && S.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                        }
                    }
                }
                return this.pushStack(a.length > 1 ? S.uniqueSort(a) : a)
            },
            index: function(e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof e === "string") {
                    return i.call(S(e), this[0])
                }
                return i.call(this, e.jquery ? e[0] : e)
            },
            add: function(e, t) {
                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function j(e, t) {
            while ((e = e[t]) && e.nodeType !== 1) {}
            return e
        }
        S.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return x(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return x(e, "parentNode", n)
            },
            next: function(e) {
                return j(e, "nextSibling")
            },
            prev: function(e) {
                return j(e, "previousSibling")
            },
            nextAll: function(e) {
                return x(e, "nextSibling")
            },
            prevAll: function(e) {
                return x(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return x(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return x(e, "previousSibling", n)
            },
            siblings: function(e) {
                return T((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return T(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || S.merge([], e.childNodes)
            }
        }, function(r, i) {
            S.fn[r] = function(e, t) {
                var n = S.map(this, i, e);
                if (r.slice(-5) !== "Until") {
                    t = e
                }
                if (t && typeof t === "string") {
                    n = S.filter(t, n)
                }
                if (this.length > 1) {
                    if (!R[r]) {
                        S.uniqueSort(n)
                    }
                    if (I.test(r)) {
                        n.reverse()
                    }
                }
                return this.pushStack(n)
            }
        });
        var M = /[^\x20\t\r\n\f]+/g;

        function H(e) {
            var n = {};
            S.each(e.match(M) || [], function(e, t) {
                n[t] = true
            });
            return n
        }
        S.Callbacks = function(r) {
            r = typeof r === "string" ? H(r) : S.extend({}, r);
            var n, e, t, i, a = [],
                s = [],
                o = -1,
                u = function() {
                    i = r.once;
                    t = n = true;
                    for (; s.length; o = -1) {
                        e = s.shift();
                        while (++o < a.length) {
                            if (a[o].apply(e[0], e[1]) === false && r.stopOnFalse) {
                                o = a.length;
                                e = false
                            }
                        }
                    }
                    if (!r.memory) {
                        e = false
                    }
                    n = false;
                    if (i) {
                        if (e) {
                            a = []
                        } else {
                            a = ""
                        }
                    }
                },
                l = {
                    add: function() {
                        if (a) {
                            if (e && !n) {
                                o = a.length - 1;
                                s.push(e)
                            }(function n(e) {
                                S.each(e, function(e, t) {
                                    if (S.isFunction(t)) {
                                        if (!r.unique || !l.has(t)) {
                                            a.push(t)
                                        }
                                    } else if (t && t.length && S.type(t) !== "string") {
                                        n(t)
                                    }
                                })
                            })(arguments);
                            if (e && !n) {
                                u()
                            }
                        }
                        return this
                    },
                    remove: function() {
                        S.each(arguments, function(e, t) {
                            var n;
                            while ((n = S.inArray(t, a, n)) > -1) {
                                a.splice(n, 1);
                                if (n <= o) {
                                    o--
                                }
                            }
                        });
                        return this
                    },
                    has: function(e) {
                        return e ? S.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        if (a) {
                            a = []
                        }
                        return this
                    },
                    disable: function() {
                        i = s = [];
                        a = e = "";
                        return this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        i = s = [];
                        if (!e && !n) {
                            a = e = ""
                        }
                        return this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, t) {
                        if (!i) {
                            t = t || [];
                            t = [e, t.slice ? t.slice() : t];
                            s.push(t);
                            if (!n) {
                                u()
                            }
                        }
                        return this
                    },
                    fire: function() {
                        l.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return l
        };

        function q(e) {
            return e
        }

        function O(e) {
            throw e
        }

        function F(e, t, n) {
            var r;
            try {
                if (e && S.isFunction(r = e.promise)) {
                    r.call(e).done(t).fail(n)
                } else if (e && S.isFunction(r = e.then)) {
                    r.call(e, t, n)
                } else {
                    t.call(undefined, e)
                }
            } catch (e) {
                n.call(undefined, e)
            }
        }
        S.extend({
            Deferred: function(e) {
                var a = [
                        ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                        ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    s = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            o.done(arguments).fail(arguments);
                            return this
                        },
                        catch: function(e) {
                            return s.then(null, e)
                        },
                        pipe: function() {
                            var i = arguments;
                            return S.Deferred(function(r) {
                                S.each(a, function(e, t) {
                                    var n = S.isFunction(i[t[4]]) && i[t[4]];
                                    o[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        if (e && S.isFunction(e.promise)) {
                                            e.promise().progress(r.notify).done(r.resolve).fail(r.reject)
                                        } else {
                                            r[t[0] + "With"](this, n ? [e] : arguments)
                                        }
                                    })
                                });
                                i = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            var u = 0;

                            function l(i, a, s, o) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (i < u) {
                                                return
                                            }
                                            e = s.apply(n, r);
                                            if (e === a.promise()) {
                                                throw new TypeError("Thenable self-resolution")
                                            }
                                            t = e && (typeof e === "object" || typeof e === "function") && e.then;
                                            if (S.isFunction(t)) {
                                                if (o) {
                                                    t.call(e, l(u, a, q, o), l(u, a, O, o))
                                                } else {
                                                    u++;
                                                    t.call(e, l(u, a, q, o), l(u, a, O, o), l(u, a, q, a.notifyWith))
                                                }
                                            } else {
                                                if (s !== q) {
                                                    n = undefined;
                                                    r = [e]
                                                }(o || a.resolveWith)(n, r)
                                            }
                                        },
                                        t = o ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                if (S.Deferred.exceptionHook) {
                                                    S.Deferred.exceptionHook(e, t.stackTrace)
                                                }
                                                if (i + 1 >= u) {
                                                    if (s !== O) {
                                                        n = undefined;
                                                        r = [e]
                                                    }
                                                    a.rejectWith(n, r)
                                                }
                                            }
                                        };
                                    if (i) {
                                        t()
                                    } else {
                                        if (S.Deferred.getStackHook) {
                                            t.stackTrace = S.Deferred.getStackHook()
                                        }
                                        k.setTimeout(t)
                                    }
                                }
                            }
                            return S.Deferred(function(e) {
                                a[0][3].add(l(0, e, S.isFunction(r) ? r : q, e.notifyWith));
                                a[1][3].add(l(0, e, S.isFunction(t) ? t : q));
                                a[2][3].add(l(0, e, S.isFunction(n) ? n : O))
                            }).promise()
                        },
                        promise: function(e) {
                            return e != null ? S.extend(e, s) : s
                        }
                    },
                    o = {};
                S.each(a, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    s[t[1]] = n.add;
                    if (r) {
                        n.add(function() {
                            i = r
                        }, a[3 - e][2].disable, a[0][2].lock)
                    }
                    n.add(t[3].fire);
                    o[t[0]] = function() {
                        o[t[0] + "With"](this === o ? undefined : this, arguments);
                        return this
                    };
                    o[t[0] + "With"] = n.fireWith
                });
                s.promise(o);
                if (e) {
                    e.call(o, o)
                }
                return o
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = o.call(arguments),
                    a = S.Deferred(),
                    s = function(t) {
                        return function(e) {
                            r[t] = this;
                            i[t] = arguments.length > 1 ? o.call(arguments) : e;
                            if (!--n) {
                                a.resolveWith(r, i)
                            }
                        }
                    };
                if (n <= 1) {
                    F(e, a.done(s(t)).resolve, a.reject);
                    if (a.state() === "pending" || S.isFunction(i[t] && i[t].then)) {
                        return a.then()
                    }
                }
                while (t--) {
                    F(i[t], s(t), a.reject)
                }
                return a.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function(e, t) {
            if (k.console && k.console.warn && e && B.test(e.name)) {
                k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
        };
        S.readyException = function(e) {
            k.setTimeout(function() {
                throw e
            })
        };
        var U = S.Deferred();
        S.fn.ready = function(e) {
            U.then(e).catch(function(e) {
                S.readyException(e)
            });
            return this
        };
        S.extend({
            isReady: false,
            readyWait: 1,
            holdReady: function(e) {
                if (e) {
                    S.readyWait++
                } else {
                    S.ready(true)
                }
            },
            ready: function(e) {
                if (e === true ? --S.readyWait : S.isReady) {
                    return
                }
                S.isReady = true;
                if (e !== true && --S.readyWait > 0) {
                    return
                }
                U.resolveWith(C, [S])
            }
        });
        S.ready.then = U.then;

        function W() {
            C.removeEventListener("DOMContentLoaded", W);
            k.removeEventListener("load", W);
            S.ready()
        }
        if (C.readyState === "complete" || C.readyState !== "loading" && !C.documentElement.doScroll) {
            k.setTimeout(S.ready)
        } else {
            C.addEventListener("DOMContentLoaded", W);
            k.addEventListener("load", W)
        }
        var K = function(e, t, n, r, i, a, s) {
            var o = 0,
                u = e.length,
                l = n == null;
            if (S.type(n) === "object") {
                i = true;
                for (o in n) {
                    K(e, t, o, n[o], true, a, s)
                }
            } else if (r !== undefined) {
                i = true;
                if (!S.isFunction(r)) {
                    s = true
                }
                if (l) {
                    if (s) {
                        t.call(e, r);
                        t = null
                    } else {
                        l = t;
                        t = function(e, t, n) {
                            return l.call(S(e), n)
                        }
                    }
                }
                if (t) {
                    for (; o < u; o++) {
                        t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)))
                    }
                }
            }
            if (i) {
                return e
            }
            if (l) {
                return t.call(e)
            }
            return u ? t(e[0], n) : a
        };
        var $ = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function V() {
            this.expando = S.expando + V.uid++
        }
        V.uid = 1;
        V.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                if (!t) {
                    t = {};
                    if ($(e)) {
                        if (e.nodeType) {
                            e[this.expando] = t
                        } else {
                            Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: true
                            })
                        }
                    }
                }
                return t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if (typeof t === "string") {
                    i[S.camelCase(t)] = n
                } else {
                    for (r in t) {
                        i[S.camelCase(r)] = t[r]
                    }
                }
                return i
            },
            get: function(e, t) {
                return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][S.camelCase(t)]
            },
            access: function(e, t, n) {
                if (t === undefined || t && typeof t === "string" && n === undefined) {
                    return this.get(e, t)
                }
                this.set(e, t, n);
                return n !== undefined ? n : t
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (r === undefined) {
                    return
                }
                if (t !== undefined) {
                    if (S.isArray(t)) {
                        t = t.map(S.camelCase)
                    } else {
                        t = S.camelCase(t);
                        t = t in r ? [t] : t.match(M) || []
                    }
                    n = t.length;
                    while (n--) {
                        delete r[t[n]]
                    }
                }
                if (t === undefined || S.isEmptyObject(r)) {
                    if (e.nodeType) {
                        e[this.expando] = undefined
                    } else {
                        delete e[this.expando]
                    }
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== undefined && !S.isEmptyObject(t)
            }
        };
        var G = new V;
        var z = new V;
        var X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            J = /[A-Z]/g;

        function Q(e) {
            if (e === "true") {
                return true
            }
            if (e === "false") {
                return false
            }
            if (e === "null") {
                return null
            }
            if (e === +e + "") {
                return +e
            }
            if (X.test(e)) {
                return JSON.parse(e)
            }
            return e
        }

        function Y(e, t, n) {
            var r;
            if (n === undefined && e.nodeType === 1) {
                r = "data-" + t.replace(J, "-$&").toLowerCase();
                n = e.getAttribute(r);
                if (typeof n === "string") {
                    try {
                        n = Q(n)
                    } catch (e) {}
                    z.set(e, t, n)
                } else {
                    n = undefined
                }
            }
            return n
        }
        S.extend({
            hasData: function(e) {
                return z.hasData(e) || G.hasData(e)
            },
            data: function(e, t, n) {
                return z.access(e, t, n)
            },
            removeData: function(e, t) {
                z.remove(e, t)
            },
            _data: function(e, t, n) {
                return G.access(e, t, n)
            },
            _removeData: function(e, t) {
                G.remove(e, t)
            }
        });
        S.fn.extend({
            data: function(n, e) {
                var t, r, i, a = this[0],
                    s = a && a.attributes;
                if (n === undefined) {
                    if (this.length) {
                        i = z.get(a);
                        if (a.nodeType === 1 && !G.get(a, "hasDataAttrs")) {
                            t = s.length;
                            while (t--) {
                                if (s[t]) {
                                    r = s[t].name;
                                    if (r.indexOf("data-") === 0) {
                                        r = S.camelCase(r.slice(5));
                                        Y(a, r, i[r])
                                    }
                                }
                            }
                            G.set(a, "hasDataAttrs", true)
                        }
                    }
                    return i
                }
                if (typeof n === "object") {
                    return this.each(function() {
                        z.set(this, n)
                    })
                }
                return K(this, function(e) {
                    var t;
                    if (a && e === undefined) {
                        t = z.get(a, n);
                        if (t !== undefined) {
                            return t
                        }
                        t = Y(a, n);
                        if (t !== undefined) {
                            return t
                        }
                        return
                    }
                    this.each(function() {
                        z.set(this, n, e)
                    })
                }, null, e, arguments.length > 1, null, true)
            },
            removeData: function(e) {
                return this.each(function() {
                    z.remove(this, e)
                })
            }
        });
        S.extend({
            queue: function(e, t, n) {
                var r;
                if (e) {
                    t = (t || "fx") + "queue";
                    r = G.get(e, t);
                    if (n) {
                        if (!r || S.isArray(n)) {
                            r = G.access(e, t, S.makeArray(n))
                        } else {
                            r.push(n)
                        }
                    }
                    return r || []
                }
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    a = S._queueHooks(e, t),
                    s = function() {
                        S.dequeue(e, t)
                    };
                if (i === "inprogress") {
                    i = n.shift();
                    r--
                }
                if (i) {
                    if (t === "fx") {
                        n.unshift("inprogress")
                    }
                    delete a.stop;
                    i.call(e, s, a)
                }
                if (!r && a) {
                    a.empty.fire()
                }
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return G.get(e, n) || G.access(e, n, {
                    empty: S.Callbacks("once memory").add(function() {
                        G.remove(e, [t + "queue", n])
                    })
                })
            }
        });
        S.fn.extend({
            queue: function(t, n) {
                var e = 2;
                if (typeof t !== "string") {
                    n = t;
                    t = "fx";
                    e--
                }
                if (arguments.length < e) {
                    return S.queue(this[0], t)
                }
                return n === undefined ? this : this.each(function() {
                    var e = S.queue(this, t, n);
                    S._queueHooks(this, t);
                    if (t === "fx" && e[0] !== "inprogress") {
                        S.dequeue(this, t)
                    }
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    S.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = S.Deferred(),
                    a = this,
                    s = this.length,
                    o = function() {
                        if (!--r) {
                            i.resolveWith(a, [a])
                        }
                    };
                if (typeof e !== "string") {
                    t = e;
                    e = undefined
                }
                e = e || "fx";
                while (s--) {
                    n = G.get(a[s], e + "queueHooks");
                    if (n && n.empty) {
                        r++;
                        n.empty.add(o)
                    }
                }
                o();
                return i.promise(t)
            }
        });
        var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i");
        var te = ["Top", "Right", "Bottom", "Left"];
        var ne = function(e, t) {
            e = t || e;
            return e.style.display === "none" || e.style.display === "" && S.contains(e.ownerDocument, e) && S.css(e, "display") === "none"
        };
        var re = function(e, t, n, r) {
            var i, a, s = {};
            for (a in t) {
                s[a] = e.style[a];
                e.style[a] = t[a]
            }
            i = n.apply(e, r || []);
            for (a in t) {
                e.style[a] = s[a]
            }
            return i
        };

        function ie(e, t, n, r) {
            var i, a = 1,
                s = 20,
                o = r ? function() {
                    return r.cur()
                } : function() {
                    return S.css(e, t, "")
                },
                u = o(),
                l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
                c = (S.cssNumber[t] || l !== "px" && +u) && ee.exec(S.css(e, t));
            if (c && c[3] !== l) {
                l = l || c[3];
                n = n || [];
                c = +u || 1;
                do {
                    a = a || ".5";
                    c = c / a;
                    S.style(e, t, c + l)
                } while (a !== (a = o() / u) && a !== 1 && --s)
            }
            if (n) {
                c = +c || +u || 0;
                i = n[1] ? c + (n[1] + 1) * n[2] : +n[2];
                if (r) {
                    r.unit = l;
                    r.start = c;
                    r.end = i
                }
            }
            return i
        }
        var ae = {};

        function se(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = ae[r];
            if (i) {
                return i
            }
            t = n.body.appendChild(n.createElement(r));
            i = S.css(t, "display");
            t.parentNode.removeChild(t);
            if (i === "none") {
                i = "block"
            }
            ae[r] = i;
            return i
        }

        function oe(e, t) {
            var n, r, i = [],
                a = 0,
                s = e.length;
            for (; a < s; a++) {
                r = e[a];
                if (!r.style) {
                    continue
                }
                n = r.style.display;
                if (t) {
                    if (n === "none") {
                        i[a] = G.get(r, "display") || null;
                        if (!i[a]) {
                            r.style.display = ""
                        }
                    }
                    if (r.style.display === "" && ne(r)) {
                        i[a] = se(r)
                    }
                } else {
                    if (n !== "none") {
                        i[a] = "none";
                        G.set(r, "display", n)
                    }
                }
            }
            for (a = 0; a < s; a++) {
                if (i[a] != null) {
                    e[a].style.display = i[a]
                }
            }
            return e
        }
        S.fn.extend({
            show: function() {
                return oe(this, true)
            },
            hide: function() {
                return oe(this)
            },
            toggle: function(e) {
                if (typeof e === "boolean") {
                    return e ? this.show() : this.hide()
                }
                return this.each(function() {
                    if (ne(this)) {
                        S(this).show()
                    } else {
                        S(this).hide()
                    }
                })
            }
        });
        var ue = /^(?:checkbox|radio)$/i;
        var le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
        var ce = /^$|\/(?:java|ecma)script/i;
        var fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        fe.optgroup = fe.option;
        fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead;
        fe.th = fe.td;

        function de(e, t) {
            var n;
            if (typeof e.getElementsByTagName !== "undefined") {
                n = e.getElementsByTagName(t || "*")
            } else if (typeof e.querySelectorAll !== "undefined") {
                n = e.querySelectorAll(t || "*")
            } else {
                n = []
            }
            if (t === undefined || t && S.nodeName(e, t)) {
                return S.merge([e], n)
            }
            return n
        }

        function pe(e, t) {
            var n = 0,
                r = e.length;
            for (; n < r; n++) {
                G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
            }
        }
        var he = /<|&#?\w+;/;

        function me(e, t, n, r, i) {
            var a, s, o, u, l, c, f = t.createDocumentFragment(),
                d = [],
                p = 0,
                h = e.length;
            for (; p < h; p++) {
                a = e[p];
                if (a || a === 0) {
                    if (S.type(a) === "object") {
                        S.merge(d, a.nodeType ? [a] : a)
                    } else if (!he.test(a)) {
                        d.push(t.createTextNode(a))
                    } else {
                        s = s || f.appendChild(t.createElement("div"));
                        o = (le.exec(a) || ["", ""])[1].toLowerCase();
                        u = fe[o] || fe._default;
                        s.innerHTML = u[1] + S.htmlPrefilter(a) + u[2];
                        c = u[0];
                        while (c--) {
                            s = s.lastChild
                        }
                        S.merge(d, s.childNodes);
                        s = f.firstChild;
                        s.textContent = ""
                    }
                }
            }
            f.textContent = "";
            p = 0;
            while (a = d[p++]) {
                if (r && S.inArray(a, r) > -1) {
                    if (i) {
                        i.push(a)
                    }
                    continue
                }
                l = S.contains(a.ownerDocument, a);
                s = de(f.appendChild(a), "script");
                if (l) {
                    pe(s)
                }
                if (n) {
                    c = 0;
                    while (a = s[c++]) {
                        if (ce.test(a.type || "")) {
                            n.push(a)
                        }
                    }
                }
            }
            return f
        }(function() {
            var e = C.createDocumentFragment(),
                t = e.appendChild(C.createElement("div")),
                n = C.createElement("input");
            n.setAttribute("type", "radio");
            n.setAttribute("checked", "checked");
            n.setAttribute("name", "t");
            t.appendChild(n);
            g.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
            t.innerHTML = "<textarea>x</textarea>";
            g.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
        })();
        var ge = C.documentElement;
        var ye = /^key/,
            ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            be = /^([^.]*)(?:\.(.+)|)/;

        function we() {
            return true
        }

        function xe() {
            return false
        }

        function Te() {
            try {
                return C.activeElement
            } catch (e) {}
        }

        function ke(e, t, n, r, i, a) {
            var s, o;
            if (typeof t === "object") {
                if (typeof n !== "string") {
                    r = r || n;
                    n = undefined
                }
                for (o in t) {
                    ke(e, o, n, r, t[o], a)
                }
                return e
            }
            if (r == null && i == null) {
                i = n;
                r = n = undefined
            } else if (i == null) {
                if (typeof n === "string") {
                    i = r;
                    r = undefined
                } else {
                    i = r;
                    r = n;
                    n = undefined
                }
            }
            if (i === false) {
                i = xe
            } else if (!i) {
                return e
            }
            if (a === 1) {
                s = i;
                i = function(e) {
                    S().off(e);
                    return s.apply(this, arguments)
                };
                i.guid = s.guid || (s.guid = S.guid++)
            }
            return e.each(function() {
                S.event.add(this, t, i, r, n)
            })
        }
        S.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var a, s, o, u, l, c, f, d, p, h, m, g = G.get(t);
                if (!g) {
                    return
                }
                if (n.handler) {
                    a = n;
                    n = a.handler;
                    i = a.selector
                }
                if (i) {
                    S.find.matchesSelector(ge, i)
                }
                if (!n.guid) {
                    n.guid = S.guid++
                }
                if (!(u = g.events)) {
                    u = g.events = {}
                }
                if (!(s = g.handle)) {
                    s = g.handle = function(e) {
                        return typeof S !== "undefined" && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : undefined
                    }
                }
                e = (e || "").match(M) || [""];
                l = e.length;
                while (l--) {
                    o = be.exec(e[l]) || [];
                    p = m = o[1];
                    h = (o[2] || "").split(".").sort();
                    if (!p) {
                        continue
                    }
                    f = S.event.special[p] || {};
                    p = (i ? f.delegateType : f.bindType) || p;
                    f = S.event.special[p] || {};
                    c = S.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, a);
                    if (!(d = u[p])) {
                        d = u[p] = [];
                        d.delegateCount = 0;
                        if (!f.setup || f.setup.call(t, r, h, s) === false) {
                            if (t.addEventListener) {
                                t.addEventListener(p, s)
                            }
                        }
                    }
                    if (f.add) {
                        f.add.call(t, c);
                        if (!c.handler.guid) {
                            c.handler.guid = n.guid
                        }
                    }
                    if (i) {
                        d.splice(d.delegateCount++, 0, c)
                    } else {
                        d.push(c)
                    }
                    S.event.global[p] = true
                }
            },
            remove: function(e, t, n, r, i) {
                var a, s, o, u, l, c, f, d, p, h, m, g = G.hasData(e) && G.get(e);
                if (!g || !(u = g.events)) {
                    return
                }
                t = (t || "").match(M) || [""];
                l = t.length;
                while (l--) {
                    o = be.exec(t[l]) || [];
                    p = m = o[1];
                    h = (o[2] || "").split(".").sort();
                    if (!p) {
                        for (p in u) {
                            S.event.remove(e, p + t[l], n, r, true)
                        }
                        continue
                    }
                    f = S.event.special[p] || {};
                    p = (r ? f.delegateType : f.bindType) || p;
                    d = u[p] || [];
                    o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    s = a = d.length;
                    while (a--) {
                        c = d[a];
                        if ((i || m === c.origType) && (!n || n.guid === c.guid) && (!o || o.test(c.namespace)) && (!r || r === c.selector || r === "**" && c.selector)) {
                            d.splice(a, 1);
                            if (c.selector) {
                                d.delegateCount--
                            }
                            if (f.remove) {
                                f.remove.call(e, c)
                            }
                        }
                    }
                    if (s && !d.length) {
                        if (!f.teardown || f.teardown.call(e, h, g.handle) === false) {
                            S.removeEvent(e, p, g.handle)
                        }
                        delete u[p]
                    }
                }
                if (S.isEmptyObject(u)) {
                    G.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t = S.event.fix(e);
                var n, r, i, a, s, o, u = new Array(arguments.length),
                    l = (G.get(this, "events") || {})[t.type] || [],
                    c = S.event.special[t.type] || {};
                u[0] = t;
                for (n = 1; n < arguments.length; n++) {
                    u[n] = arguments[n]
                }
                t.delegateTarget = this;
                if (c.preDispatch && c.preDispatch.call(this, t) === false) {
                    return
                }
                o = S.event.handlers.call(this, t, l);
                n = 0;
                while ((a = o[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = a.elem;
                    r = 0;
                    while ((s = a.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        if (!t.rnamespace || t.rnamespace.test(s.namespace)) {
                            t.handleObj = s;
                            t.data = s.data;
                            i = ((S.event.special[s.origType] || {}).handle || s.handler).apply(a.elem, u);
                            if (i !== undefined) {
                                if ((t.result = i) === false) {
                                    t.preventDefault();
                                    t.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (c.postDispatch) {
                    c.postDispatch.call(this, t)
                }
                return t.result
            },
            handlers: function(e, t) {
                var n, r, i, a, s, o = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; l !== this; l = l.parentNode || this) {
                        if (l.nodeType === 1 && !(e.type === "click" && l.disabled === true)) {
                            a = [];
                            s = {};
                            for (n = 0; n < u; n++) {
                                r = t[n];
                                i = r.selector + " ";
                                if (s[i] === undefined) {
                                    s[i] = r.needsContext ? S(i, this).index(l) > -1 : S.find(i, this, null, [l]).length
                                }
                                if (s[i]) {
                                    a.push(r)
                                }
                            }
                            if (a.length) {
                                o.push({
                                    elem: l,
                                    handlers: a
                                })
                            }
                        }
                    }
                }
                l = this;
                if (u < t.length) {
                    o.push({
                        elem: l,
                        handlers: t.slice(u)
                    })
                }
                return o
            },
            addProp: function(t, e) {
                Object.defineProperty(S.Event.prototype, t, {
                    enumerable: true,
                    configurable: true,
                    get: S.isFunction(e) ? function() {
                        if (this.originalEvent) {
                            return e(this.originalEvent)
                        }
                    } : function() {
                        if (this.originalEvent) {
                            return this.originalEvent[t]
                        }
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[S.expando] ? e : new S.Event(e)
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function() {
                        if (this !== Te() && this.focus) {
                            this.focus();
                            return false
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === Te() && this.blur) {
                            this.blur();
                            return false
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && S.nodeName(this, "input")) {
                            this.click();
                            return false
                        }
                    },
                    _default: function(e) {
                        return S.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        if (e.result !== undefined && e.originalEvent) {
                            e.originalEvent.returnValue = e.result
                        }
                    }
                }
            }
        };
        S.removeEvent = function(e, t, n) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n)
            }
        };
        S.Event = function(e, t) {
            if (!(this instanceof S.Event)) {
                return new S.Event(e, t)
            }
            if (e && e.type) {
                this.originalEvent = e;
                this.type = e.type;
                this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? we : xe;
                this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
                this.currentTarget = e.currentTarget;
                this.relatedTarget = e.relatedTarget
            } else {
                this.type = e
            }
            if (t) {
                S.extend(this, t)
            }
            this.timeStamp = e && e.timeStamp || S.now();
            this[S.expando] = true
        };
        S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: xe,
            isPropagationStopped: xe,
            isImmediatePropagationStopped: xe,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = we;
                if (e && !this.isSimulated) {
                    e.preventDefault()
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = we;
                if (e && !this.isSimulated) {
                    e.stopPropagation()
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = we;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation()
                }
                this.stopPropagation()
            }
        };
        S.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: function(e) {
                var t = e.button;
                if (e.which == null && ye.test(e.type)) {
                    return e.charCode != null ? e.charCode : e.keyCode
                }
                if (!e.which && t !== undefined && ve.test(e.type)) {
                    if (t & 1) {
                        return 1
                    }
                    if (t & 2) {
                        return 3
                    }
                    if (t & 4) {
                        return 2
                    }
                    return 0
                }
                return e.which
            }
        }, S.event.addProp);
        S.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, a) {
            S.event.special[e] = {
                delegateType: a,
                bindType: a,
                handle: function(e) {
                    var t, n = this,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    if (!r || r !== n && !S.contains(n, r)) {
                        e.type = i.origType;
                        t = i.handler.apply(this, arguments);
                        e.type = a
                    }
                    return t
                }
            }
        });
        S.fn.extend({
            on: function(e, t, n, r) {
                return ke(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return ke(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) {
                    r = e.handleObj;
                    S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                    return this
                }
                if (typeof e === "object") {
                    for (i in e) {
                        this.off(i, t, e[i])
                    }
                    return this
                }
                if (t === false || typeof t === "function") {
                    n = t;
                    t = undefined
                }
                if (n === false) {
                    n = xe
                }
                return this.each(function() {
                    S.event.remove(this, e, n, t)
                })
            }
        });
        var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Se = /<script|<style|<link/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            _e = /^true\/(.*)/,
            Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ee(e, t) {
            if (S.nodeName(e, "table") && S.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                return e.getElementsByTagName("tbody")[0] || e
            }
            return e
        }

        function Ne(e) {
            e.type = (e.getAttribute("type") !== null) + "/" + e.type;
            return e
        }

        function De(e) {
            var t = _e.exec(e.type);
            if (t) {
                e.type = t[1]
            } else {
                e.removeAttribute("type")
            }
            return e
        }

        function Pe(e, t) {
            var n, r, i, a, s, o, u, l;
            if (t.nodeType !== 1) {
                return
            }
            if (G.hasData(e)) {
                a = G.access(e);
                s = G.set(t, a);
                l = a.events;
                if (l) {
                    delete s.handle;
                    s.events = {};
                    for (i in l) {
                        for (n = 0, r = l[i].length; n < r; n++) {
                            S.event.add(t, i, l[i][n])
                        }
                    }
                }
            }
            if (z.hasData(e)) {
                o = z.access(e);
                u = S.extend({}, o);
                z.set(t, u)
            }
        }

        function Ie(e, t) {
            var n = t.nodeName.toLowerCase();
            if (n === "input" && ue.test(e.type)) {
                t.checked = e.checked
            } else if (n === "input" || n === "textarea") {
                t.defaultValue = e.defaultValue
            }
        }

        function Re(n, r, i, a) {
            r = m.apply([], r);
            var e, t, s, o, u, l, c = 0,
                f = n.length,
                d = f - 1,
                p = r[0],
                h = S.isFunction(p);
            if (h || f > 1 && typeof p === "string" && !g.checkClone && Ae.test(p)) {
                return n.each(function(e) {
                    var t = n.eq(e);
                    if (h) {
                        r[0] = p.call(this, e, t.html())
                    }
                    Re(t, r, i, a)
                })
            }
            if (f) {
                e = me(r, n[0].ownerDocument, false, n, a);
                t = e.firstChild;
                if (e.childNodes.length === 1) {
                    e = t
                }
                if (t || a) {
                    s = S.map(de(e, "script"), Ne);
                    o = s.length;
                    for (; c < f; c++) {
                        u = e;
                        if (c !== d) {
                            u = S.clone(u, true, true);
                            if (o) {
                                S.merge(s, de(u, "script"))
                            }
                        }
                        i.call(n[c], u, c)
                    }
                    if (o) {
                        l = s[s.length - 1].ownerDocument;
                        S.map(s, De);
                        for (c = 0; c < o; c++) {
                            u = s[c];
                            if (ce.test(u.type || "") && !G.access(u, "globalEval") && S.contains(l, u)) {
                                if (u.src) {
                                    if (S._evalUrl) {
                                        S._evalUrl(u.src)
                                    }
                                } else {
                                    y(u.textContent.replace(Le, ""), l)
                                }
                            }
                        }
                    }
                }
            }
            return n
        }

        function je(e, t, n) {
            var r, i = t ? S.filter(t, e) : e,
                a = 0;
            for (;
                (r = i[a]) != null; a++) {
                if (!n && r.nodeType === 1) {
                    S.cleanData(de(r))
                }
                if (r.parentNode) {
                    if (n && S.contains(r.ownerDocument, r)) {
                        pe(de(r, "script"))
                    }
                    r.parentNode.removeChild(r)
                }
            }
            return e
        }
        S.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ce, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, a, s, o = e.cloneNode(true),
                    u = S.contains(e.ownerDocument, e);
                if (!g.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !S.isXMLDoc(e)) {
                    s = de(o);
                    a = de(e);
                    for (r = 0, i = a.length; r < i; r++) {
                        Ie(a[r], s[r])
                    }
                }
                if (t) {
                    if (n) {
                        a = a || de(e);
                        s = s || de(o);
                        for (r = 0, i = a.length; r < i; r++) {
                            Pe(a[r], s[r])
                        }
                    } else {
                        Pe(e, o)
                    }
                }
                s = de(o, "script");
                if (s.length > 0) {
                    pe(s, !u && de(e, "script"))
                }
                return o
            },
            cleanData: function(e) {
                var t, n, r, i = S.event.special,
                    a = 0;
                for (;
                    (n = e[a]) !== undefined; a++) {
                    if ($(n)) {
                        if (t = n[G.expando]) {
                            if (t.events) {
                                for (r in t.events) {
                                    if (i[r]) {
                                        S.event.remove(n, r)
                                    } else {
                                        S.removeEvent(n, r, t.handle)
                                    }
                                }
                            }
                            n[G.expando] = undefined
                        }
                        if (n[z.expando]) {
                            n[z.expando] = undefined
                        }
                    }
                }
            }
        });
        S.fn.extend({
            detach: function(e) {
                return je(this, e, true)
            },
            remove: function(e) {
                return je(this, e)
            },
            text: function(e) {
                return K(this, function(e) {
                    return e === undefined ? S.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = e
                        }
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Re(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Ee(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return Re(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Ee(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Re(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this)
                    }
                })
            },
            after: function() {
                return Re(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    }
                })
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    if (e.nodeType === 1) {
                        S.cleanData(de(e, false));
                        e.textContent = ""
                    }
                }
                return this
            },
            clone: function(e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function() {
                    return S.clone(this, e, t)
                })
            },
            html: function(e) {
                return K(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (e === undefined && t.nodeType === 1) {
                        return t.innerHTML
                    }
                    if (typeof e === "string" && !Se.test(e) && !fe[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = S.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) {
                                t = this[n] || {};
                                if (t.nodeType === 1) {
                                    S.cleanData(de(t, false));
                                    t.innerHTML = e
                                }
                            }
                            t = 0
                        } catch (e) {}
                    }
                    if (t) {
                        this.empty().append(e)
                    }
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return Re(this, arguments, function(e) {
                    var t = this.parentNode;
                    if (S.inArray(this, n) < 0) {
                        S.cleanData(de(this));
                        if (t) {
                            t.replaceChild(e, this)
                        }
                    }
                }, n)
            }
        });
        S.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, s) {
            S.fn[e] = function(e) {
                var t, n = [],
                    r = S(e),
                    i = r.length - 1,
                    a = 0;
                for (; a <= i; a++) {
                    t = a === i ? this : this.clone(true);
                    S(r[a])[s](t);
                    u.apply(n, t.get())
                }
                return this.pushStack(n)
            }
        });
        var Me = /^margin/;
        var He = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i");
        var qe = function(e) {
            var t = e.ownerDocument.defaultView;
            if (!t || !t.opener) {
                t = k
            }
            return t.getComputedStyle(e)
        };
        (function() {
            function e() {
                if (!s) {
                    return
                }
                s.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                s.innerHTML = "";
                ge.appendChild(a);
                var e = k.getComputedStyle(s);
                t = e.top !== "1%";
                i = e.marginLeft === "2px";
                n = e.width === "4px";
                s.style.marginRight = "50%";
                r = e.marginRight === "4px";
                ge.removeChild(a);
                s = null
            }
            var t, n, r, i, a = C.createElement("div"),
                s = C.createElement("div");
            if (!s.style) {
                return
            }
            s.style.backgroundClip = "content-box";
            s.cloneNode(true).style.backgroundClip = "";
            g.clearCloneStyle = s.style.backgroundClip === "content-box";
            a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            a.appendChild(s);
            S.extend(g, {
                pixelPosition: function() {
                    e();
                    return t
                },
                boxSizingReliable: function() {
                    e();
                    return n
                },
                pixelMarginRight: function() {
                    e();
                    return r
                },
                reliableMarginLeft: function() {
                    e();
                    return i
                }
            })
        })();

        function Oe(e, t, n) {
            var r, i, a, s, o = e.style;
            n = n || qe(e);
            if (n) {
                s = n.getPropertyValue(t) || n[t];
                if (s === "" && !S.contains(e.ownerDocument, e)) {
                    s = S.style(e, t)
                }
                if (!g.pixelMarginRight() && He.test(s) && Me.test(t)) {
                    r = o.width;
                    i = o.minWidth;
                    a = o.maxWidth;
                    o.minWidth = o.maxWidth = o.width = s;
                    s = n.width;
                    o.width = r;
                    o.minWidth = i;
                    o.maxWidth = a
                }
            }
            return s !== undefined ? s + "" : s
        }

        function Fe(e, t) {
            return {
                get: function() {
                    if (e()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
        var Be = /^(none|table(?!-c[ea]).+)/,
            Ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            We = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ke = ["Webkit", "Moz", "ms"],
            $e = C.createElement("div").style;

        function Ve(e) {
            if (e in $e) {
                return e
            }
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ke.length;
            while (n--) {
                e = Ke[n] + t;
                if (e in $e) {
                    return e
                }
            }
        }

        function Ge(e, t, n) {
            var r = ee.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function ze(e, t, n, r, i) {
            var a, s = 0;
            if (n === (r ? "border" : "content")) {
                a = 4
            } else {
                a = t === "width" ? 1 : 0
            }
            for (; a < 4; a += 2) {
                if (n === "margin") {
                    s += S.css(e, n + te[a], true, i)
                }
                if (r) {
                    if (n === "content") {
                        s -= S.css(e, "padding" + te[a], true, i)
                    }
                    if (n !== "margin") {
                        s -= S.css(e, "border" + te[a] + "Width", true, i)
                    }
                } else {
                    s += S.css(e, "padding" + te[a], true, i);
                    if (n !== "padding") {
                        s += S.css(e, "border" + te[a] + "Width", true, i)
                    }
                }
            }
            return s
        }

        function Xe(e, t, n) {
            var r, i = true,
                a = qe(e),
                s = S.css(e, "boxSizing", false, a) === "border-box";
            if (e.getClientRects().length) {
                r = e.getBoundingClientRect()[t]
            }
            if (r <= 0 || r == null) {
                r = Oe(e, t, a);
                if (r < 0 || r == null) {
                    r = e.style[t]
                }
                if (He.test(r)) {
                    return r
                }
                i = s && (g.boxSizingReliable() || r === e.style[t]);
                r = parseFloat(r) || 0
            }
            return r + ze(e, t, n || (s ? "border" : "content"), i, a) + "px"
        }
        S.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Oe(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                    return
                }
                var i, a, s, o = S.camelCase(t),
                    u = e.style;
                t = S.cssProps[o] || (S.cssProps[o] = Ve(o) || o);
                s = S.cssHooks[t] || S.cssHooks[o];
                if (n !== undefined) {
                    a = typeof n;
                    if (a === "string" && (i = ee.exec(n)) && i[1]) {
                        n = ie(e, t, i);
                        a = "number"
                    }
                    if (n == null || n !== n) {
                        return
                    }
                    if (a === "number") {
                        n += i && i[3] || (S.cssNumber[o] ? "" : "px")
                    }
                    if (!g.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                        u[t] = "inherit"
                    }
                    if (!s || !("set" in s) || (n = s.set(e, n, r)) !== undefined) {
                        u[t] = n
                    }
                } else {
                    if (s && "get" in s && (i = s.get(e, false, r)) !== undefined) {
                        return i
                    }
                    return u[t]
                }
            },
            css: function(e, t, n, r) {
                var i, a, s, o = S.camelCase(t);
                t = S.cssProps[o] || (S.cssProps[o] = Ve(o) || o);
                s = S.cssHooks[t] || S.cssHooks[o];
                if (s && "get" in s) {
                    i = s.get(e, true, n)
                }
                if (i === undefined) {
                    i = Oe(e, t, r)
                }
                if (i === "normal" && t in We) {
                    i = We[t]
                }
                if (n === "" || n) {
                    a = parseFloat(i);
                    return n === true || isFinite(a) ? a || 0 : i
                }
                return i
            }
        });
        S.each(["height", "width"], function(e, s) {
            S.cssHooks[s] = {
                get: function(e, t, n) {
                    if (t) {
                        return Be.test(S.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? re(e, Ue, function() {
                            return Xe(e, s, n)
                        }) : Xe(e, s, n)
                    }
                },
                set: function(e, t, n) {
                    var r, i = n && qe(e),
                        a = n && ze(e, s, n, S.css(e, "boxSizing", false, i) === "border-box", i);
                    if (a && (r = ee.exec(t)) && (r[3] || "px") !== "px") {
                        e.style[s] = t;
                        t = S.css(e, s)
                    }
                    return Ge(e, t, a)
                }
            }
        });
        S.cssHooks.marginLeft = Fe(g.reliableMarginLeft, function(e, t) {
            if (t) {
                return (parseFloat(Oe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }
        });
        S.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, a) {
            S.cssHooks[i + a] = {
                expand: function(e) {
                    var t = 0,
                        n = {},
                        r = typeof e === "string" ? e.split(" ") : [e];
                    for (; t < 4; t++) {
                        n[i + te[t] + a] = r[t] || r[t - 2] || r[0]
                    }
                    return n
                }
            };
            if (!Me.test(i)) {
                S.cssHooks[i + a].set = Ge
            }
        });
        S.fn.extend({
            css: function(e, t) {
                return K(this, function(e, t, n) {
                    var r, i, a = {},
                        s = 0;
                    if (S.isArray(t)) {
                        r = qe(e);
                        i = t.length;
                        for (; s < i; s++) {
                            a[t[s]] = S.css(e, t[s], false, r)
                        }
                        return a
                    }
                    return n !== undefined ? S.style(e, t, n) : S.css(e, t)
                }, e, t, arguments.length > 1)
            }
        });

        function Je(e, t, n, r, i) {
            return new Je.prototype.init(e, t, n, r, i)
        }
        S.Tween = Je;
        Je.prototype = {
            constructor: Je,
            init: function(e, t, n, r, i, a) {
                this.elem = e;
                this.prop = n;
                this.easing = i || S.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = r;
                this.unit = a || (S.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Je.propHooks[this.prop];
                return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Je.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                } else {
                    this.pos = t = e
                }
                this.now = (this.end - this.start) * t + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (n && n.set) {
                    n.set(this)
                } else {
                    Je.propHooks._default.set(this)
                }
                return this
            }
        };
        Je.prototype.init.prototype = Je.prototype;
        Je.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                        return e.elem[e.prop]
                    }
                    t = S.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t
                },
                set: function(e) {
                    if (S.fx.step[e.prop]) {
                        S.fx.step[e.prop](e)
                    } else if (e.elem.nodeType === 1 && (e.elem.style[S.cssProps[e.prop]] != null || S.cssHooks[e.prop])) {
                        S.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        };
        Je.propHooks.scrollTop = Je.propHooks.scrollLeft = {
            set: function(e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now
                }
            }
        };
        S.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        };
        S.fx = Je.prototype.init;
        S.fx.step = {};
        var Qe, Ye, Ze = /^(?:toggle|show|hide)$/,
            et = /queueHooks$/;

        function tt() {
            if (Ye) {
                k.requestAnimationFrame(tt);
                S.fx.tick()
            }
        }

        function nt() {
            k.setTimeout(function() {
                Qe = undefined
            });
            return Qe = S.now()
        }

        function rt(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            t = t ? 1 : 0;
            for (; r < 4; r += 2 - t) {
                n = te[r];
                i["margin" + n] = i["padding" + n] = e
            }
            if (t) {
                i.opacity = i.width = e
            }
            return i
        }

        function it(e, t, n) {
            var r, i = (ot.tweeners[t] || []).concat(ot.tweeners["*"]),
                a = 0,
                s = i.length;
            for (; a < s; a++) {
                if (r = i[a].call(n, t, e)) {
                    return r
                }
            }
        }

        function at(e, t, n) {
            var r, i, a, s, o, u, l, c, f = "width" in t || "height" in t,
                d = this,
                p = {},
                h = e.style,
                m = e.nodeType && ne(e),
                g = G.get(e, "fxshow");
            if (!n.queue) {
                s = S._queueHooks(e, "fx");
                if (s.unqueued == null) {
                    s.unqueued = 0;
                    o = s.empty.fire;
                    s.empty.fire = function() {
                        if (!s.unqueued) {
                            o()
                        }
                    }
                }
                s.unqueued++;
                d.always(function() {
                    d.always(function() {
                        s.unqueued--;
                        if (!S.queue(e, "fx").length) {
                            s.empty.fire()
                        }
                    })
                })
            }
            for (r in t) {
                i = t[r];
                if (Ze.test(i)) {
                    delete t[r];
                    a = a || i === "toggle";
                    if (i === (m ? "hide" : "show")) {
                        if (i === "show" && g && g[r] !== undefined) {
                            m = true
                        } else {
                            continue
                        }
                    }
                    p[r] = g && g[r] || S.style(e, r)
                }
            }
            u = !S.isEmptyObject(t);
            if (!u && S.isEmptyObject(p)) {
                return
            }
            if (f && e.nodeType === 1) {
                n.overflow = [h.overflow, h.overflowX, h.overflowY];
                l = g && g.display;
                if (l == null) {
                    l = G.get(e, "display")
                }
                c = S.css(e, "display");
                if (c === "none") {
                    if (l) {
                        c = l
                    } else {
                        oe([e], true);
                        l = e.style.display || l;
                        c = S.css(e, "display");
                        oe([e])
                    }
                }
                if (c === "inline" || c === "inline-block" && l != null) {
                    if (S.css(e, "float") === "none") {
                        if (!u) {
                            d.done(function() {
                                h.display = l
                            });
                            if (l == null) {
                                c = h.display;
                                l = c === "none" ? "" : c
                            }
                        }
                        h.display = "inline-block"
                    }
                }
            }
            if (n.overflow) {
                h.overflow = "hidden";
                d.always(function() {
                    h.overflow = n.overflow[0];
                    h.overflowX = n.overflow[1];
                    h.overflowY = n.overflow[2]
                })
            }
            u = false;
            for (r in p) {
                if (!u) {
                    if (g) {
                        if ("hidden" in g) {
                            m = g.hidden
                        }
                    } else {
                        g = G.access(e, "fxshow", {
                            display: l
                        })
                    }
                    if (a) {
                        g.hidden = !m
                    }
                    if (m) {
                        oe([e], true)
                    }
                    d.done(function() {
                        if (!m) {
                            oe([e])
                        }
                        G.remove(e, "fxshow");
                        for (r in p) {
                            S.style(e, r, p[r])
                        }
                    })
                }
                u = it(m ? g[r] : 0, r, d);
                if (!(r in g)) {
                    g[r] = u.start;
                    if (m) {
                        u.end = u.start;
                        u.start = 0
                    }
                }
            }
        }

        function st(e, t) {
            var n, r, i, a, s;
            for (n in e) {
                r = S.camelCase(n);
                i = t[r];
                a = e[n];
                if (S.isArray(a)) {
                    i = a[1];
                    a = e[n] = a[0]
                }
                if (n !== r) {
                    e[r] = a;
                    delete e[n]
                }
                s = S.cssHooks[r];
                if (s && "expand" in s) {
                    a = s.expand(a);
                    delete e[r];
                    for (n in a) {
                        if (!(n in e)) {
                            e[n] = a[n];
                            t[n] = i
                        }
                    }
                } else {
                    t[r] = i
                }
            }
        }

        function ot(s, e, t) {
            var n, o, r = 0,
                i = ot.prefilters.length,
                u = S.Deferred().always(function() {
                    delete a.elem
                }),
                a = function() {
                    if (o) {
                        return false
                    }
                    var e = Qe || nt(),
                        t = Math.max(0, l.startTime + l.duration - e),
                        n = t / l.duration || 0,
                        r = 1 - n,
                        i = 0,
                        a = l.tweens.length;
                    for (; i < a; i++) {
                        l.tweens[i].run(r)
                    }
                    u.notifyWith(s, [l, r, t]);
                    if (r < 1 && a) {
                        return t
                    } else {
                        u.resolveWith(s, [l]);
                        return false
                    }
                },
                l = u.promise({
                    elem: s,
                    props: S.extend({}, e),
                    opts: S.extend(true, {
                        specialEasing: {},
                        easing: S.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Qe || nt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = S.Tween(s, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                        l.tweens.push(n);
                        return n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? l.tweens.length : 0;
                        if (o) {
                            return this
                        }
                        o = true;
                        for (; t < n; t++) {
                            l.tweens[t].run(1)
                        }
                        if (e) {
                            u.notifyWith(s, [l, 1, 0]);
                            u.resolveWith(s, [l, e])
                        } else {
                            u.rejectWith(s, [l, e])
                        }
                        return this
                    }
                }),
                c = l.props;
            st(c, l.opts.specialEasing);
            for (; r < i; r++) {
                n = ot.prefilters[r].call(l, s, c, l.opts);
                if (n) {
                    if (S.isFunction(n.stop)) {
                        S._queueHooks(l.elem, l.opts.queue).stop = S.proxy(n.stop, n)
                    }
                    return n
                }
            }
            S.map(c, it, l);
            if (S.isFunction(l.opts.start)) {
                l.opts.start.call(s, l)
            }
            S.fx.timer(S.extend(a, {
                elem: s,
                anim: l,
                queue: l.opts.queue
            }));
            return l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        S.Animation = S.extend(ot, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    ie(n.elem, e, ee.exec(t), n);
                    return n
                }]
            },
            tweener: function(e, t) {
                if (S.isFunction(e)) {
                    t = e;
                    e = ["*"]
                } else {
                    e = e.match(M)
                }
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) {
                    n = e[r];
                    ot.tweeners[n] = ot.tweeners[n] || [];
                    ot.tweeners[n].unshift(t)
                }
            },
            prefilters: [at],
            prefilter: function(e, t) {
                if (t) {
                    ot.prefilters.unshift(e)
                } else {
                    ot.prefilters.push(e)
                }
            }
        });
        S.speed = function(e, t, n) {
            var r = e && typeof e === "object" ? S.extend({}, e) : {
                complete: n || !n && t || S.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !S.isFunction(t) && t
            };
            if (S.fx.off || C.hidden) {
                r.duration = 0
            } else {
                if (typeof r.duration !== "number") {
                    if (r.duration in S.fx.speeds) {
                        r.duration = S.fx.speeds[r.duration]
                    } else {
                        r.duration = S.fx.speeds._default
                    }
                }
            }
            if (r.queue == null || r.queue === true) {
                r.queue = "fx"
            }
            r.old = r.complete;
            r.complete = function() {
                if (S.isFunction(r.old)) {
                    r.old.call(this)
                }
                if (r.queue) {
                    S.dequeue(this, r.queue)
                }
            };
            return r
        };
        S.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = S.isEmptyObject(t),
                    a = S.speed(e, n, r),
                    s = function() {
                        var e = ot(this, S.extend({}, t), a);
                        if (i || G.get(this, "finish")) {
                            e.stop(true)
                        }
                    };
                s.finish = s;
                return i || a.queue === false ? this.each(s) : this.queue(a.queue, s)
            },
            stop: function(i, e, a) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop;
                    t(a)
                };
                if (typeof i !== "string") {
                    a = e;
                    e = i;
                    i = undefined
                }
                if (e && i !== false) {
                    this.queue(i || "fx", [])
                }
                return this.each(function() {
                    var e = true,
                        t = i != null && i + "queueHooks",
                        n = S.timers,
                        r = G.get(this);
                    if (t) {
                        if (r[t] && r[t].stop) {
                            s(r[t])
                        }
                    } else {
                        for (t in r) {
                            if (r[t] && r[t].stop && et.test(t)) {
                                s(r[t])
                            }
                        }
                    }
                    for (t = n.length; t--;) {
                        if (n[t].elem === this && (i == null || n[t].queue === i)) {
                            n[t].anim.stop(a);
                            e = false;
                            n.splice(t, 1)
                        }
                    }
                    if (e || !a) {
                        S.dequeue(this, i)
                    }
                })
            },
            finish: function(s) {
                if (s !== false) {
                    s = s || "fx"
                }
                return this.each(function() {
                    var e, t = G.get(this),
                        n = t[s + "queue"],
                        r = t[s + "queueHooks"],
                        i = S.timers,
                        a = n ? n.length : 0;
                    t.finish = true;
                    S.queue(this, s, []);
                    if (r && r.stop) {
                        r.stop.call(this, true)
                    }
                    for (e = i.length; e--;) {
                        if (i[e].elem === this && i[e].queue === s) {
                            i[e].anim.stop(true);
                            i.splice(e, 1)
                        }
                    }
                    for (e = 0; e < a; e++) {
                        if (n[e] && n[e].finish) {
                            n[e].finish.call(this)
                        }
                    }
                    delete t.finish
                })
            }
        });
        S.each(["toggle", "show", "hide"], function(e, r) {
            var i = S.fn[r];
            S.fn[r] = function(e, t, n) {
                return e == null || typeof e === "boolean" ? i.apply(this, arguments) : this.animate(rt(r, true), e, t, n)
            }
        });
        S.each({
            slideDown: rt("show"),
            slideUp: rt("hide"),
            slideToggle: rt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            S.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        });
        S.timers = [];
        S.fx.tick = function() {
            var e, t = 0,
                n = S.timers;
            Qe = S.now();
            for (; t < n.length; t++) {
                e = n[t];
                if (!e() && n[t] === e) {
                    n.splice(t--, 1)
                }
            }
            if (!n.length) {
                S.fx.stop()
            }
            Qe = undefined
        };
        S.fx.timer = function(e) {
            S.timers.push(e);
            if (e()) {
                S.fx.start()
            } else {
                S.timers.pop()
            }
        };
        S.fx.interval = 13;
        S.fx.start = function() {
            if (!Ye) {
                Ye = k.requestAnimationFrame ? k.requestAnimationFrame(tt) : k.setInterval(S.fx.tick, S.fx.interval)
            }
        };
        S.fx.stop = function() {
            if (k.cancelAnimationFrame) {
                k.cancelAnimationFrame(Ye)
            } else {
                k.clearInterval(Ye)
            }
            Ye = null
        };
        S.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        S.fn.delay = function(r, e) {
            r = S.fx ? S.fx.speeds[r] || r : r;
            e = e || "fx";
            return this.queue(e, function(e, t) {
                var n = k.setTimeout(e, r);
                t.stop = function() {
                    k.clearTimeout(n)
                }
            })
        };
        (function() {
            var e = C.createElement("input"),
                t = C.createElement("select"),
                n = t.appendChild(C.createElement("option"));
            e.type = "checkbox";
            g.checkOn = e.value !== "";
            g.optSelected = n.selected;
            e = C.createElement("input");
            e.value = "t";
            e.type = "radio";
            g.radioValue = e.value === "t"
        })();
        var ut, lt = S.expr.attrHandle;
        S.fn.extend({
            attr: function(e, t) {
                return K(this, S.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    S.removeAttr(this, e)
                })
            }
        });
        S.extend({
            attr: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return
                }
                if (typeof e.getAttribute === "undefined") {
                    return S.prop(e, t, n)
                }
                if (a !== 1 || !S.isXMLDoc(e)) {
                    i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ut : undefined)
                }
                if (n !== undefined) {
                    if (n === null) {
                        S.removeAttr(e, t);
                        return
                    }
                    if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                        return r
                    }
                    e.setAttribute(t, n + "");
                    return n
                }
                if (i && "get" in i && (r = i.get(e, t)) !== null) {
                    return r
                }
                r = S.find.attr(e, t);
                return r == null ? undefined : r
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && t === "radio" && S.nodeName(e, "input")) {
                            var n = e.value;
                            e.setAttribute("type", t);
                            if (n) {
                                e.value = n
                            }
                            return t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(M);
                if (i && e.nodeType === 1) {
                    while (n = i[r++]) {
                        e.removeAttribute(n)
                    }
                }
            }
        });
        ut = {
            set: function(e, t, n) {
                if (t === false) {
                    S.removeAttr(e, n)
                } else {
                    e.setAttribute(n, n)
                }
                return n
            }
        };
        S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = lt[t] || S.find.attr;
            lt[t] = function(e, t, n) {
                var r, i, a = t.toLowerCase();
                if (!n) {
                    i = lt[a];
                    lt[a] = r;
                    r = s(e, t, n) != null ? a : null;
                    lt[a] = i
                }
                return r
            }
        });
        var ct = /^(?:input|select|textarea|button)$/i,
            ft = /^(?:a|area)$/i;
        S.fn.extend({
            prop: function(e, t) {
                return K(this, S.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[S.propFix[e] || e]
                })
            }
        });
        S.extend({
            prop: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return
                }
                if (a !== 1 || !S.isXMLDoc(e)) {
                    t = S.propFix[t] || t;
                    i = S.propHooks[t]
                }
                if (n !== undefined) {
                    if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                        return r
                    }
                    return e[t] = n
                }
                if (i && "get" in i && (r = i.get(e, t)) !== null) {
                    return r
                }
                return e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = S.find.attr(e, "tabindex");
                        if (t) {
                            return parseInt(t, 10)
                        }
                        if (ct.test(e.nodeName) || ft.test(e.nodeName) && e.href) {
                            return 0
                        }
                        return -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        });
        if (!g.optSelected) {
            S.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    if (t && t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                    return null
                },
                set: function(e) {
                    var t = e.parentNode;
                    if (t) {
                        t.selectedIndex;
                        if (t.parentNode) {
                            t.parentNode.selectedIndex
                        }
                    }
                }
            }
        }
        S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            S.propFix[this.toLowerCase()] = this
        });

        function dt(e) {
            var t = e.match(M) || [];
            return t.join(" ")
        }

        function pt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        S.fn.extend({
            addClass: function(t) {
                var e, n, r, i, a, s, o, u = 0;
                if (S.isFunction(t)) {
                    return this.each(function(e) {
                        S(this).addClass(t.call(this, e, pt(this)))
                    })
                }
                if (typeof t === "string" && t) {
                    e = t.match(M) || [];
                    while (n = this[u++]) {
                        i = pt(n);
                        r = n.nodeType === 1 && " " + dt(i) + " ";
                        if (r) {
                            s = 0;
                            while (a = e[s++]) {
                                if (r.indexOf(" " + a + " ") < 0) {
                                    r += a + " "
                                }
                            }
                            o = dt(r);
                            if (i !== o) {
                                n.setAttribute("class", o)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, a, s, o, u = 0;
                if (S.isFunction(t)) {
                    return this.each(function(e) {
                        S(this).removeClass(t.call(this, e, pt(this)))
                    })
                }
                if (!arguments.length) {
                    return this.attr("class", "")
                }
                if (typeof t === "string" && t) {
                    e = t.match(M) || [];
                    while (n = this[u++]) {
                        i = pt(n);
                        r = n.nodeType === 1 && " " + dt(i) + " ";
                        if (r) {
                            s = 0;
                            while (a = e[s++]) {
                                while (r.indexOf(" " + a + " ") > -1) {
                                    r = r.replace(" " + a + " ", " ")
                                }
                            }
                            o = dt(r);
                            if (i !== o) {
                                n.setAttribute("class", o)
                            }
                        }
                    }
                }
                return this
            },
            toggleClass: function(i, t) {
                var a = typeof i;
                if (typeof t === "boolean" && a === "string") {
                    return t ? this.addClass(i) : this.removeClass(i)
                }
                if (S.isFunction(i)) {
                    return this.each(function(e) {
                        S(this).toggleClass(i.call(this, e, pt(this), t), t)
                    })
                }
                return this.each(function() {
                    var e, t, n, r;
                    if (a === "string") {
                        t = 0;
                        n = S(this);
                        r = i.match(M) || [];
                        while (e = r[t++]) {
                            if (n.hasClass(e)) {
                                n.removeClass(e)
                            } else {
                                n.addClass(e)
                            }
                        }
                    } else if (i === undefined || a === "boolean") {
                        e = pt(this);
                        if (e) {
                            G.set(this, "__className__", e)
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", e || i === false ? "" : G.get(this, "__className__") || "")
                        }
                    }
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++]) {
                    if (n.nodeType === 1 && (" " + dt(pt(n)) + " ").indexOf(t) > -1) {
                        return true
                    }
                }
                return false
            }
        });
        var ht = /\r/g;
        S.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                if (!arguments.length) {
                    if (t) {
                        r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()];
                        if (r && "get" in r && (e = r.get(t, "value")) !== undefined) {
                            return e
                        }
                        e = t.value;
                        if (typeof e === "string") {
                            return e.replace(ht, "")
                        }
                        return e == null ? "" : e
                    }
                    return
                }
                i = S.isFunction(n);
                return this.each(function(e) {
                    var t;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (i) {
                        t = n.call(this, e, S(this).val())
                    } else {
                        t = n
                    }
                    if (t == null) {
                        t = ""
                    } else if (typeof t === "number") {
                        t += ""
                    } else if (S.isArray(t)) {
                        t = S.map(t, function(e) {
                            return e == null ? "" : e + ""
                        })
                    }
                    r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()];
                    if (!r || !("set" in r) || r.set(this, t, "value") === undefined) {
                        this.value = t
                    }
                })
            }
        });
        S.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = S.find.attr(e, "value");
                        return t != null ? t : dt(S.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            a = e.selectedIndex,
                            s = e.type === "select-one",
                            o = s ? null : [],
                            u = s ? a + 1 : i.length;
                        if (a < 0) {
                            r = u
                        } else {
                            r = s ? a : 0
                        }
                        for (; r < u; r++) {
                            n = i[r];
                            if ((n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !S.nodeName(n.parentNode, "optgroup"))) {
                                t = S(n).val();
                                if (s) {
                                    return t
                                }
                                o.push(t)
                            }
                        }
                        return o
                    },
                    set: function(e, t) {
                        var n, r, i = e.options,
                            a = S.makeArray(t),
                            s = i.length;
                        while (s--) {
                            r = i[s];
                            if (r.selected = S.inArray(S.valHooks.option.get(r), a) > -1) {
                                n = true
                            }
                        }
                        if (!n) {
                            e.selectedIndex = -1
                        }
                        return a
                    }
                }
            }
        });
        S.each(["radio", "checkbox"], function() {
            S.valHooks[this] = {
                set: function(e, t) {
                    if (S.isArray(t)) {
                        return e.checked = S.inArray(S(e).val(), t) > -1
                    }
                }
            };
            if (!g.checkOn) {
                S.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        });
        var mt = /^(?:focusinfocus|focusoutblur)$/;
        S.extend(S.event, {
            trigger: function(e, t, n, r) {
                var i, a, s, o, u, l, c, f = [n || C],
                    d = h.call(e, "type") ? e.type : e,
                    p = h.call(e, "namespace") ? e.namespace.split(".") : [];
                a = s = n = n || C;
                if (n.nodeType === 3 || n.nodeType === 8) {
                    return
                }
                if (mt.test(d + S.event.triggered)) {
                    return
                }
                if (d.indexOf(".") > -1) {
                    p = d.split(".");
                    d = p.shift();
                    p.sort()
                }
                u = d.indexOf(":") < 0 && "on" + d;
                e = e[S.expando] ? e : new S.Event(d, typeof e === "object" && e);
                e.isTrigger = r ? 2 : 3;
                e.namespace = p.join(".");
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                e.result = undefined;
                if (!e.target) {
                    e.target = n
                }
                t = t == null ? [e] : S.makeArray(t, [e]);
                c = S.event.special[d] || {};
                if (!r && c.trigger && c.trigger.apply(n, t) === false) {
                    return
                }
                if (!r && !c.noBubble && !S.isWindow(n)) {
                    o = c.delegateType || d;
                    if (!mt.test(o + d)) {
                        a = a.parentNode
                    }
                    for (; a; a = a.parentNode) {
                        f.push(a);
                        s = a
                    }
                    if (s === (n.ownerDocument || C)) {
                        f.push(s.defaultView || s.parentWindow || k)
                    }
                }
                i = 0;
                while ((a = f[i++]) && !e.isPropagationStopped()) {
                    e.type = i > 1 ? o : c.bindType || d;
                    l = (G.get(a, "events") || {})[e.type] && G.get(a, "handle");
                    if (l) {
                        l.apply(a, t)
                    }
                    l = u && a[u];
                    if (l && l.apply && $(a)) {
                        e.result = l.apply(a, t);
                        if (e.result === false) {
                            e.preventDefault()
                        }
                    }
                }
                e.type = d;
                if (!r && !e.isDefaultPrevented()) {
                    if ((!c._default || c._default.apply(f.pop(), t) === false) && $(n)) {
                        if (u && S.isFunction(n[d]) && !S.isWindow(n)) {
                            s = n[u];
                            if (s) {
                                n[u] = null
                            }
                            S.event.triggered = d;
                            n[d]();
                            S.event.triggered = undefined;
                            if (s) {
                                n[u] = s
                            }
                        }
                    }
                }
                return e.result
            },
            simulate: function(e, t, n) {
                var r = S.extend(new S.Event, n, {
                    type: e,
                    isSimulated: true
                });
                S.event.trigger(r, null, t)
            }
        });
        S.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    S.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) {
                    return S.event.trigger(e, t, n, true)
                }
            }
        });
        S.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, n) {
            S.fn[n] = function(e, t) {
                return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        S.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        g.focusin = "onfocusin" in k;
        if (!g.focusin) {
            S.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, r) {
                var i = function(e) {
                    S.event.simulate(r, e.target, S.event.fix(e))
                };
                S.event.special[r] = {
                    setup: function() {
                        var e = this.ownerDocument || this,
                            t = G.access(e, r);
                        if (!t) {
                            e.addEventListener(n, i, true)
                        }
                        G.access(e, r, (t || 0) + 1)
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this,
                            t = G.access(e, r) - 1;
                        if (!t) {
                            e.removeEventListener(n, i, true);
                            G.remove(e, r)
                        } else {
                            G.access(e, r, t)
                        }
                    }
                }
            })
        }
        var gt = k.location;
        var yt = S.now();
        var vt = /\?/;
        S.parseXML = function(e) {
            var t;
            if (!e || typeof e !== "string") {
                return null
            }
            try {
                t = (new k.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = undefined
            }
            if (!t || t.getElementsByTagName("parsererror").length) {
                S.error("Invalid XML: " + e)
            }
            return t
        };
        var bt = /\[\]$/,
            wt = /\r?\n/g,
            xt = /^(?:submit|button|image|reset|file)$/i,
            Tt = /^(?:input|select|textarea|keygen)/i;

        function kt(n, e, r, i) {
            var t;
            if (S.isArray(e)) {
                S.each(e, function(e, t) {
                    if (r || bt.test(n)) {
                        i(n, t)
                    } else {
                        kt(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, r, i)
                    }
                })
            } else if (!r && S.type(e) === "object") {
                for (t in e) {
                    kt(n + "[" + t + "]", e[t], r, i)
                }
            } else {
                i(n, e)
            }
        }
        S.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = S.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n)
                };
            if (S.isArray(e) || e.jquery && !S.isPlainObject(e)) {
                S.each(e, function() {
                    i(this.name, this.value)
                })
            } else {
                for (n in e) {
                    kt(n, e[n], t, i)
                }
            }
            return r.join("&")
        };
        S.fn.extend({
            serialize: function() {
                return S.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !S(this).is(":disabled") && Tt.test(this.nodeName) && !xt.test(e) && (this.checked || !ue.test(e))
                }).map(function(e, t) {
                    var n = S(this).val();
                    if (n == null) {
                        return null
                    }
                    if (S.isArray(n)) {
                        return S.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(wt, "\r\n")
                            }
                        })
                    }
                    return {
                        name: t.name,
                        value: n.replace(wt, "\r\n")
                    }
                }).get()
            }
        });
        var Ct = /%20/g,
            St = /#.*$/,
            At = /([?&])_=[^&]*/,
            _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Et = /^(?:GET|HEAD)$/,
            Nt = /^\/\//,
            Dt = {},
            Pt = {},
            It = "*/".concat("*"),
            Rt = C.createElement("a");
        Rt.href = gt.href;

        function jt(a) {
            return function(e, t) {
                if (typeof e !== "string") {
                    t = e;
                    e = "*"
                }
                var n, r = 0,
                    i = e.toLowerCase().match(M) || [];
                if (S.isFunction(t)) {
                    while (n = i[r++]) {
                        if (n[0] === "+") {
                            n = n.slice(1) || "*";
                            (a[n] = a[n] || []).unshift(t)
                        } else {
                            (a[n] = a[n] || []).push(t)
                        }
                    }
                }
            }
        }

        function Mt(t, i, a, s) {
            var o = {},
                u = t === Pt;

            function l(e) {
                var r;
                o[e] = true;
                S.each(t[e] || [], function(e, t) {
                    var n = t(i, a, s);
                    if (typeof n === "string" && !u && !o[n]) {
                        i.dataTypes.unshift(n);
                        l(n);
                        return false
                    } else if (u) {
                        return !(r = n)
                    }
                });
                return r
            }
            return l(i.dataTypes[0]) || !o["*"] && l("*")
        }

        function Ht(e, t) {
            var n, r, i = S.ajaxSettings.flatOptions || {};
            for (n in t) {
                if (t[n] !== undefined) {
                    (i[n] ? e : r || (r = {}))[n] = t[n]
                }
            }
            if (r) {
                S.extend(true, e, r)
            }
            return e
        }

        function qt(e, t, n) {
            var r, i, a, s, o = e.contents,
                u = e.dataTypes;
            while (u[0] === "*") {
                u.shift();
                if (r === undefined) {
                    r = e.mimeType || t.getResponseHeader("Content-Type")
                }
            }
            if (r) {
                for (i in o) {
                    if (o[i] && o[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                }
            }
            if (u[0] in n) {
                a = u[0]
            } else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        a = i;
                        break
                    }
                    if (!s) {
                        s = i
                    }
                }
                a = a || s
            }
            if (a) {
                if (a !== u[0]) {
                    u.unshift(a)
                }
                return n[a]
            }
        }

        function Ot(e, t, n, r) {
            var i, a, s, o, u, l = {},
                c = e.dataTypes.slice();
            if (c[1]) {
                for (s in e.converters) {
                    l[s.toLowerCase()] = e.converters[s]
                }
            }
            a = c.shift();
            while (a) {
                if (e.responseFields[a]) {
                    n[e.responseFields[a]] = t
                }
                if (!u && r && e.dataFilter) {
                    t = e.dataFilter(t, e.dataType)
                }
                u = a;
                a = c.shift();
                if (a) {
                    if (a === "*") {
                        a = u
                    } else if (u !== "*" && u !== a) {
                        s = l[u + " " + a] || l["* " + a];
                        if (!s) {
                            for (i in l) {
                                o = i.split(" ");
                                if (o[1] === a) {
                                    s = l[u + " " + o[0]] || l["* " + o[0]];
                                    if (s) {
                                        if (s === true) {
                                            s = l[i]
                                        } else if (l[i] !== true) {
                                            a = o[0];
                                            c.unshift(o[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (s !== true) {
                            if (s && e.throws) {
                                t = s(t)
                            } else {
                                try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + u + " to " + a
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gt.href,
                type: "GET",
                isLocal: Lt.test(gt.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/json; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": JSON.parse,
                    "text xml": S.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Ht(Ht(e, S.ajaxSettings), t) : Ht(S.ajaxSettings, e)
            },
            ajaxPrefilter: jt(Dt),
            ajaxTransport: jt(Pt),
            ajax: function(e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = undefined
                }
                t = t || {};
                var c, f, d, n, p, r, h, m, i, a, g = S.ajaxSetup({}, t),
                    y = g.context || g,
                    v = g.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                    b = S.Deferred(),
                    w = S.Callbacks("once memory"),
                    x = g.statusCode || {},
                    s = {},
                    o = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while (t = _t.exec(d)) {
                                        n[t[1].toLowerCase()] = t[2]
                                    }
                                }
                                t = n[e.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return h ? d : null
                        },
                        setRequestHeader: function(e, t) {
                            if (h == null) {
                                e = o[e.toLowerCase()] = o[e.toLowerCase()] || e;
                                s[e] = t
                            }
                            return this
                        },
                        overrideMimeType: function(e) {
                            if (h == null) {
                                g.mimeType = e
                            }
                            return this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) {
                                if (h) {
                                    T.always(e[T.status])
                                } else {
                                    for (t in e) {
                                        x[t] = [x[t], e[t]]
                                    }
                                }
                            }
                            return this
                        },
                        abort: function(e) {
                            var t = e || u;
                            if (c) {
                                c.abort(t)
                            }
                            l(0, t);
                            return this
                        }
                    };
                b.promise(T);
                g.url = ((e || g.url || gt.href) + "").replace(Nt, gt.protocol + "//");
                g.type = t.method || t.type || g.method || g.type;
                g.dataTypes = (g.dataType || "*").toLowerCase().match(M) || [""];
                if (g.crossDomain == null) {
                    r = C.createElement("a");
                    try {
                        r.href = g.url;
                        r.href = r.href;
                        g.crossDomain = Rt.protocol + "//" + Rt.host !== r.protocol + "//" + r.host
                    } catch (e) {
                        g.crossDomain = true
                    }
                }
                if (g.data && g.processData && typeof g.data !== "string") {
                    g.data = S.param(g.data, g.traditional)
                }
                Mt(Dt, g, t, T);
                if (h) {
                    return T
                }
                m = S.event && g.global;
                if (m && S.active++ === 0) {
                    S.event.trigger("ajaxStart")
                }
                g.type = g.type.toUpperCase();
                g.hasContent = !Et.test(g.type);
                f = g.url.replace(St, "");
                if (!g.hasContent) {
                    a = g.url.slice(f.length);
                    if (g.data) {
                        f += (vt.test(f) ? "&" : "?") + g.data;
                        delete g.data
                    }
                    if (g.cache === false) {
                        f = f.replace(At, "$1");
                        a = (vt.test(f) ? "&" : "?") + "_=" + yt++ + a
                    }
                    g.url = f + a
                } else if (g.data && g.processData && (g.contentType || "").indexOf("application/json") === 0) {
                    g.data = g.data.replace(Ct, "+")
                }
                if (g.ifModified) {
                    if (S.lastModified[f]) {
                        T.setRequestHeader("If-Modified-Since", S.lastModified[f])
                    }
                    if (S.etag[f]) {
                        T.setRequestHeader("If-None-Match", S.etag[f])
                    }
                }
                if (g.data && g.hasContent && g.contentType !== false || t.contentType) {
                    T.setRequestHeader("Content-Type", g.contentType)
                }
                T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + It + "; q=0.01" : "") : g.accepts["*"]);
                for (i in g.headers) {
                    T.setRequestHeader(i, g.headers[i])
                }
                if (g.beforeSend && (g.beforeSend.call(y, T, g) === false || h)) {
                    return T.abort()
                }
                u = "abort";
                w.add(g.complete);
                T.done(g.success);
                T.fail(g.error);
                c = Mt(Pt, g, t, T);
                if (!c) {
                    l(-1, "No Transport")
                } else {
                    T.readyState = 1;
                    if (m) {
                        v.trigger("ajaxSend", [T, g])
                    }
                    if (h) {
                        return T
                    }
                    if (g.async && g.timeout > 0) {
                        p = k.setTimeout(function() {
                            T.abort("timeout")
                        }, g.timeout)
                    }
                    try {
                        h = false;
                        c.send(s, l)
                    } catch (e) {
                        if (h) {
                            throw e
                        }
                        l(-1, e)
                    }
                }

                function l(e, t, n, r) {
                    var i, a, s, o, u, l = t;
                    if (h) {
                        return
                    }
                    h = true;
                    if (p) {
                        k.clearTimeout(p)
                    }
                    c = undefined;
                    d = r || "";
                    T.readyState = e > 0 ? 4 : 0;
                    i = e >= 200 && e < 300 || e === 304;
                    if (n) {
                        o = qt(g, T, n)
                    }
                    o = Ot(g, o, T, i);
                    if (i) {
                        if (g.ifModified) {
                            u = T.getResponseHeader("Last-Modified");
                            if (u) {
                                S.lastModified[f] = u
                            }
                            u = T.getResponseHeader("etag");
                            if (u) {
                                S.etag[f] = u
                            }
                        }
                        if (e === 204 || g.type === "HEAD") {
                            l = "nocontent"
                        } else if (e === 304) {
                            l = "notmodified"
                        } else {
                            l = o.state;
                            a = o.data;
                            s = o.error;
                            i = !s
                        }
                    } else {
                        s = l;
                        if (e || !l) {
                            l = "error";
                            if (e < 0) {
                                e = 0
                            }
                        }
                    }
                    T.status = e;
                    T.statusText = (t || l) + "";
                    if (i) {
                        b.resolveWith(y, [a, l, T])
                    } else {
                        b.rejectWith(y, [T, l, s])
                    }
                    T.statusCode(x);
                    x = undefined;
                    if (m) {
                        v.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? a : s])
                    }
                    w.fireWith(y, [T, l]);
                    if (m) {
                        v.trigger("ajaxComplete", [T, g]);
                        if (!--S.active) {
                            S.event.trigger("ajaxStop")
                        }
                    }
                }
                return T
            },
            getJSON: function(e, t, n) {
                return S.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return S.get(e, undefined, t, "script")
            }
        });
        S.each(["get", "post"], function(e, i) {
            S[i] = function(e, t, n, r) {
                if (S.isFunction(t)) {
                    r = r || n;
                    n = t;
                    t = undefined
                }
                return S.ajax(S.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, S.isPlainObject(e) && e))
            }
        });
        S._evalUrl = function(e) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                throws: true
            })
        };
        S.fn.extend({
            wrapAll: function(e) {
                var t;
                if (this[0]) {
                    if (S.isFunction(e)) {
                        e = e.call(this[0])
                    }
                    t = S(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        t.insertBefore(this[0])
                    }
                    t.map(function() {
                        var e = this;
                        while (e.firstElementChild) {
                            e = e.firstElementChild
                        }
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                if (S.isFunction(n)) {
                    return this.each(function(e) {
                        S(this).wrapInner(n.call(this, e))
                    })
                }
                return this.each(function() {
                    var e = S(this),
                        t = e.contents();
                    if (t.length) {
                        t.wrapAll(n)
                    } else {
                        e.append(n)
                    }
                })
            },
            wrap: function(t) {
                var n = S.isFunction(t);
                return this.each(function(e) {
                    S(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                this.parent(e).not("body").each(function() {
                    S(this).replaceWith(this.childNodes)
                });
                return this
            }
        });
        S.expr.pseudos.hidden = function(e) {
            return !S.expr.pseudos.visible(e)
        };
        S.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        };
        S.ajaxSettings.xhr = function() {
            try {
                return new k.XMLHttpRequest
            } catch (e) {}
        };
        var Ft = {
                0: 200,
                1223: 204
            },
            Bt = S.ajaxSettings.xhr();
        g.cors = !!Bt && "withCredentials" in Bt;
        g.ajax = Bt = !!Bt;
        S.ajaxTransport(function(i) {
            var a, s;
            if (g.cors || Bt && !i.crossDomain) {
                return {
                    send: function(e, t) {
                        var n, r = i.xhr();
                        r.open(i.type, i.url, i.async, i.username, i.password);
                        if (i.xhrFields) {
                            for (n in i.xhrFields) {
                                r[n] = i.xhrFields[n]
                            }
                        }
                        if (i.mimeType && r.overrideMimeType) {
                            r.overrideMimeType(i.mimeType)
                        }
                        if (!i.crossDomain && !e["X-Requested-With"]) {
                            e["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (n in e) {
                            r.setRequestHeader(n, e[n])
                        }
                        a = function(e) {
                            return function() {
                                if (a) {
                                    a = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null;
                                    if (e === "abort") {
                                        r.abort()
                                    } else if (e === "error") {
                                        if (typeof r.status !== "number") {
                                            t(0, "error")
                                        } else {
                                            t(r.status, r.statusText)
                                        }
                                    } else {
                                        t(Ft[r.status] || r.status, r.statusText, (r.responseType || "text") !== "text" || typeof r.responseText !== "string" ? {
                                            binary: r.response
                                        } : {
                                            text: r.responseText
                                        }, r.getAllResponseHeaders())
                                    }
                                }
                            }
                        };
                        r.onload = a();
                        s = r.onerror = a("error");
                        if (r.onabort !== undefined) {
                            r.onabort = s
                        } else {
                            r.onreadystatechange = function() {
                                if (r.readyState === 4) {
                                    k.setTimeout(function() {
                                        if (a) {
                                            s()
                                        }
                                    })
                                }
                            }
                        }
                        a = a("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (a) {
                                throw e
                            }
                        }
                    },
                    abort: function() {
                        if (a) {
                            a()
                        }
                    }
                }
            }
        });
        S.ajaxPrefilter(function(e) {
            if (e.crossDomain) {
                e.contents.script = false
            }
        });
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    S.globalEval(e);
                    return e
                }
            }
        });
        S.ajaxPrefilter("script", function(e) {
            if (e.cache === undefined) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET"
            }
        });
        S.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, i;
                return {
                    send: function(e, t) {
                        r = S("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function(e) {
                            r.remove();
                            i = null;
                            if (e) {
                                t(e.type === "error" ? 404 : 200, e.type)
                            }
                        });
                        C.head.appendChild(r[0])
                    },
                    abort: function() {
                        if (i) {
                            i()
                        }
                    }
                }
            }
        });
        var Ut = [],
            Wt = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ut.pop() || S.expando + "_" + yt++;
                this[e] = true;
                return e
            }
        });
        S.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, a, s = e.jsonp !== false && (Wt.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/json") === 0 && Wt.test(e.data) && "data");
            if (s || e.dataTypes[0] === "jsonp") {
                r = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                if (s) {
                    e[s] = e[s].replace(Wt, "$1" + r)
                } else if (e.jsonp !== false) {
                    e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r
                }
                e.converters["script json"] = function() {
                    if (!a) {
                        S.error(r + " was not called")
                    }
                    return a[0]
                };
                e.dataTypes[0] = "json";
                i = k[r];
                k[r] = function() {
                    a = arguments
                };
                n.always(function() {
                    if (i === undefined) {
                        S(k).removeProp(r)
                    } else {
                        k[r] = i
                    }
                    if (e[r]) {
                        e.jsonpCallback = t.jsonpCallback;
                        Ut.push(r)
                    }
                    if (a && S.isFunction(i)) {
                        i(a[0])
                    }
                    a = i = undefined
                });
                return "script"
            }
        });
        g.createHTMLDocument = function() {
            var e = C.implementation.createHTMLDocument("").body;
            e.innerHTML = "<form></form><form></form>";
            return e.childNodes.length === 2
        }();
        S.parseHTML = function(e, t, n) {
            if (typeof e !== "string") {
                return []
            }
            if (typeof t === "boolean") {
                n = t;
                t = false
            }
            var r, i, a;
            if (!t) {
                if (g.createHTMLDocument) {
                    t = C.implementation.createHTMLDocument("");
                    r = t.createElement("base");
                    r.href = C.location.href;
                    t.head.appendChild(r)
                } else {
                    t = C
                }
            }
            i = _.exec(e);
            a = !n && [];
            if (i) {
                return [t.createElement(i[1])]
            }
            i = me([e], t, a);
            if (a && a.length) {
                S(a).remove()
            }
            return S.merge([], i.childNodes)
        };
        S.fn.load = function(e, t, n) {
            var r, i, a, s = this,
                o = e.indexOf(" ");
            if (o > -1) {
                r = dt(e.slice(o));
                e = e.slice(0, o)
            }
            if (S.isFunction(t)) {
                n = t;
                t = undefined
            } else if (t && typeof t === "object") {
                i = "POST"
            }
            if (s.length > 0) {
                S.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    a = arguments;
                    s.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, a || [e.responseText, t, e])
                    })
                })
            }
            return this
        };
        S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            S.fn[t] = function(e) {
                return this.on(t, e)
            }
        });
        S.expr.pseudos.animated = function(t) {
            return S.grep(S.timers, function(e) {
                return t === e.elem
            }).length
        };

        function Kt(e) {
            return S.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
        }
        S.offset = {
            setOffset: function(e, t, n) {
                var r, i, a, s, o, u, l, c = S.css(e, "position"),
                    f = S(e),
                    d = {};
                if (c === "static") {
                    e.style.position = "relative"
                }
                o = f.offset();
                a = S.css(e, "top");
                u = S.css(e, "left");
                l = (c === "absolute" || c === "fixed") && (a + u).indexOf("auto") > -1;
                if (l) {
                    r = f.position();
                    s = r.top;
                    i = r.left
                } else {
                    s = parseFloat(a) || 0;
                    i = parseFloat(u) || 0
                }
                if (S.isFunction(t)) {
                    t = t.call(e, n, S.extend({}, o))
                }
                if (t.top != null) {
                    d.top = t.top - o.top + s
                }
                if (t.left != null) {
                    d.left = t.left - o.left + i
                }
                if ("using" in t) {
                    t.using.call(e, d)
                } else {
                    f.css(d)
                }
            }
        };
        S.fn.extend({
            offset: function(t) {
                if (arguments.length) {
                    return t === undefined ? this : this.each(function(e) {
                        S.offset.setOffset(this, t, e)
                    })
                }
                var e, n, r, i, a = this[0];
                if (!a) {
                    return
                }
                if (!a.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    }
                }
                r = a.getBoundingClientRect();
                if (r.width || r.height) {
                    i = a.ownerDocument;
                    n = Kt(i);
                    e = i.documentElement;
                    return {
                        top: r.top + n.pageYOffset - e.clientTop,
                        left: r.left + n.pageXOffset - e.clientLeft
                    }
                }
                return r
            },
            position: function() {
                if (!this[0]) {
                    return
                }
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if (S.css(n, "position") === "fixed") {
                    t = n.getBoundingClientRect()
                } else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!S.nodeName(e[0], "html")) {
                        r = e.offset()
                    }
                    r = {
                        top: r.top + S.css(e[0], "borderTopWidth", true),
                        left: r.left + S.css(e[0], "borderLeftWidth", true)
                    }
                }
                return {
                    top: t.top - r.top - S.css(n, "marginTop", true),
                    left: t.left - r.left - S.css(n, "marginLeft", true)
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && S.css(e, "position") === "static") {
                        e = e.offsetParent
                    }
                    return e || ge
                })
            }
        });
        S.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var a = "pageYOffset" === i;
            S.fn[t] = function(e) {
                return K(this, function(e, t, n) {
                    var r = Kt(e);
                    if (n === undefined) {
                        return r ? r[i] : e[t]
                    }
                    if (r) {
                        r.scrollTo(!a ? n : r.pageXOffset, a ? n : r.pageYOffset)
                    } else {
                        e[t] = n
                    }
                }, t, e, arguments.length)
            }
        });
        S.each(["top", "left"], function(e, n) {
            S.cssHooks[n] = Fe(g.pixelPosition, function(e, t) {
                if (t) {
                    t = Oe(e, n);
                    return He.test(t) ? S(e).position()[n] + "px" : t
                }
            })
        });
        S.each({
            Height: "height",
            Width: "width"
        }, function(s, o) {
            S.each({
                padding: "inner" + s,
                content: o,
                "": "outer" + s
            }, function(r, a) {
                S.fn[a] = function(e, t) {
                    var n = arguments.length && (r || typeof e !== "boolean"),
                        i = r || (e === true || t === true ? "margin" : "border");
                    return K(this, function(e, t, n) {
                        var r;
                        if (S.isWindow(e)) {
                            return a.indexOf("outer") === 0 ? e["inner" + s] : e.document.documentElement["client" + s]
                        }
                        if (e.nodeType === 9) {
                            r = e.documentElement;
                            return Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])
                        }
                        return n === undefined ? S.css(e, t, i) : S.style(e, t, n, i)
                    }, o, n ? e : undefined, n)
                }
            })
        });
        S.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        S.parseJSON = JSON.parse;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return S
            })
        }
        var $t = k.jQuery,
            Vt = k.$;
        S.noConflict = function(e) {
            if (k.$ === S) {
                k.$ = Vt
            }
            if (e && k.jQuery === S) {
                k.jQuery = $t
            }
            return S
        };
        if (!e) {
            k.jQuery = k.$ = S
        }
        return S
    });
    chrome.webRequest.onHeadersReceived.addListener(function(e) {
        for (var t = 0; t < e.responseHeaders.length; ++t) {
            if (e.responseHeaders[t].name.toLowerCase() === "content-security-policy") {
                e.responseHeaders.splice(t, 1);
                break
            }
        }
        for (var t = 0; t < e.responseHeaders.length; ++t) {
            if (e.responseHeaders[t].name.toLowerCase() === "x-content-security-policy") {
                e.responseHeaders.splice(t, 1);
                break
            }
        }
        for (var t = 0; t < e.responseHeaders.length; ++t) {
            if (e.responseHeaders[t].name.toLowerCase() === "x-webkit-csp") {
                e.responseHeaders.splice(t, 1);
                break
            }
        }
        return {
            responseHeaders: e.responseHeaders
        }
    }, {
        urls: ["<all_urls>"]
    }, ["blocking", "responseHeaders"]);
    chrome.webRequest.onHeadersReceived.addListener(function(e) {
        if (typeof globalStatus === "undefined" || !globalStatus.enable || typeof globalStatus.solve_funcaptcha === "undefined" || !globalStatus.solve_funcaptcha || typeof e.initiator !== "undefined" && currentHostnameWhiteBlackListedOut(globalStatus, e.initiator)) {
            return
        }
        if (typeof URLSearchParams === "function") {
            var t = e.url;
            var n = parseUrl(t);
            var r = new URLSearchParams(n.search);
            var i = r.get("onload");
            var a;
            var s;
            if (!i && i !== "_funcaptchaOnloadMethod") {
                a = "_funcaptchaOnloadMethod";
                r.set("onload", "_funcaptchaOnloadMethod");
                n.search = r.toString();
                s = n.toString()
            } else {
                s = t;
                a = i
            }
            if (e.tabId) {
                chrome.tabs.sendMessage(e.tabId, {
                    type: "funcaptchaApiScriptRequested",
                    originalFuncaptchaApiUrl: t,
                    originalOnloadMethodName: i,
                    currentFuncaptchaApiUrl: s,
                    currentOnloadMethodName: a
                }, {
                    frameId: e.frameId
                }, function() {})
            }
            return
        }
    }, {
        urls: ["https://funcaptcha.com/fc/api/*", "https://*.funcaptcha.com/fc/api/*", "https://arkoselabs.com/fc/api/*", "https://*.arkoselabs.com/fc/api/*"]
    });
    chrome.webRequest.onHeadersReceived.addListener(function(e) {
        if (typeof globalStatus === "undefined" || !globalStatus.enable || typeof globalStatus.solve_hcaptcha === "undefined" || !globalStatus.solve_hcaptcha || typeof e.initiator !== "undefined" && currentHostnameWhiteBlackListedOut(globalStatus, e.initiator)) {
            return
        }
        if (typeof URLSearchParams === "function") {
            var t = e.url;
            var n = parseUrl(t);
            var r = new URLSearchParams(n.search);
            var i = r.get("onload");
            var a;
            var s;
            if (!i && i !== h) {
                a = h;
                r.set("onload", h);
                n.search = r.toString();
                s = n.toString()
            } else {
                s = t;
                a = i
            }
            if (e.tabId) {
                chrome.tabs.sendMessage(e.tabId, {
                    type: "hcaptchaApiScriptRequested",
                    originalHcaptchaApiUrl: t,
                    originalOnloadMethodName: i,
                    currentHcaptchaApiUrl: s,
                    currentOnloadMethodName: a,
                    runExplicitInvisibleHcaptchaCallbackWhenChallengeShown: globalStatus.run_explicit_invisible_hcaptcha_callback_when_challenge_shown
                }, {
                    frameId: e.frameId
                }, function() {})
            }
        }
    }, {
        urls: ["https://hcaptcha.com/1/api.js*", "https://*.hcaptcha.com/1/api.js*"]
    });
    chrome.webRequest.onHeadersReceived.addListener(function(e) {
        if (typeof URLSearchParams === "function") {
            var t = parseUrl(e.url);
            var n = new URLSearchParams(t.search);
            var r = n.get("render");
            if (r && r !== "explicit" && r !== "onload" && r.length > 20) {
                for (var i = 0; i < e.responseHeaders.length; ++i) {
                    if (e.responseHeaders[i].name.toLowerCase() === "cache-control") {
                        e.responseHeaders.splice(i, 1);
                        break
                    }
                }
            }
        }
        return {
            responseHeaders: e.responseHeaders
        }
    }, {
        urls: ["https://www.google.com/recaptcha/api.js*", "https://google.com/recaptcha/api.js*", "https://www.google.com/recaptcha/enterprise.js*", "https://google.com/recaptcha/enterprise.js*", "https://www.recaptcha.net/recaptcha/api.js*", "https://recaptcha.net/recaptcha/api.js*", "https://www.recaptcha.net/recaptcha/enterprise.js*", "https://recaptcha.net/recaptcha/enterprise.js*"]
    }, ["blocking", "responseHeaders"]);
    chrome.webRequest.onBeforeRequest.addListener(function(e) {
        if (typeof globalStatus === "undefined" || !globalStatus.enable || typeof globalStatus.solve_recaptcha3 === "undefined" || !globalStatus.solve_recaptcha3 || typeof e.initiator !== "undefined" && currentHostnameWhiteBlackListedOut(globalStatus, e.initiator)) {
            return
        }
        if (typeof URLSearchParams === "function") {
            var t = e.url;
            var n = parseUrl(t);
            var r = new URLSearchParams(n.search);
            var i = r.get("onload");
            var a = r.get("render");
            if (a && a !== "explicit" && a !== "onload" && a.length > 20) {
                if (!i || i.indexOf(p) === -1) {
                    if (e.tabId) {
                        chrome.tabs.sendMessage(e.tabId, {
                            type: "recaptcha3OriginalCallback",
                            lastOriginalOnloadMethodName: i
                        }, {
                            frameId: e.frameId
                        })
                    }
                    r.set("onload", p);
                    n.search = r.toString();
                    var s = n.toString();
                    return {
                        redirectUrl: s
                    }
                } else {}
            }
        }
        return {
            responseHeaders: e.responseHeaders
        }
    }, {
        urls: ["https://www.google.com/recaptcha/api.js*", "https://google.com/recaptcha/api.js*", "https://www.google.com/recaptcha/enterprise.js*", "https://google.com/recaptcha/enterprise.js*", "https://www.recaptcha.net/recaptcha/api.js*", "https://recaptcha.net/recaptcha/api.js*", "https://www.recaptcha.net/recaptcha/enterprise.js*", "https://recaptcha.net/recaptcha/enterprise.js*"]
    }, ["blocking"]);
    globalStatus = {
        profile_user_info: null,
        plugin_version: chrome.app && chrome.app.getDetails && chrome.app.getDetails().version ? chrome.app.getDetails().version : chrome.runtime && chrome.runtime.getManifest() && chrome.runtime.getManifest().version ? chrome.runtime.getManifest().version : "0.001",
        plugin_last_version_data: null
    };
    var ce = null;
    var fe = {};
    var de = L() - t + n;
    var pe = L() - r + a;
    var he = 0;
    var me = 0;
    setInterval(function() {
        if (JSON.stringify(globalStatus) != ce) {
            xe();
            getAndRefreshAntigateBalance();
            ce = JSON.stringify(globalStatus)
        }
    }, 500);
    g(Te);
    we();
    ge();
    ye();
    setInterval(g.bind(null, Te), 2e3);
    setInterval(we, 2e3);

    function ge() {
        if (de + t + he <= L()) {
            ve()
        }
    }

    function ye() {
        if (pe + r + me <= L()) {
            be()
        }
    }

    function ve() {
        se(function(e, t) {
            if (!e) {
                fe = t;
                de = L();
                he = 0
            } else {
                if (!he) {
                    he = 10
                } else {
                    he = he * 2
                }
            }
        })
    }

    function be() {
        oe(function(e, t) {
            if (!e) {
                globalStatus.plugin_last_version_data = t;
                pe = L();
                me = 0
            } else {
                if (!me) {
                    me = 10
                } else {
                    me = me * 2
                }
            }
        })
    }

    function we() {
        typeof chrome.identity != "undefined" && typeof chrome.identity.getProfileUserInfo != "undefined" && chrome.identity.getProfileUserInfo(function(e) {
            if (e && e.id && e.email) {
                globalStatus.profile_user_info = e
            } else {
                globalStatus.profile_user_info = false
            }
        })
    }

    function xe() {
        Ce();
        Se()
    }
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (e.type == "getProfileUserInfo") {
            delete e.type;
            n(globalStatus.profile_user_info)
        } else if (e.type == "setFreeAttemptsLeftCount") {
            delete e.type;
            if (typeof e.attemptsLeft != "undefined") {
                (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                    free_attempts_left_count: e.attemptsLeft
                }, function() {
                    globalStatus.free_attempts_left_count = e.attemptsLeft
                })
            }
        } else if (e.type == "getGlobalStatus") {
            delete e.type;
            n(globalStatus)
        } else if (e.type == "saveOptions") {
            delete e.type;
            var r = false;
            if (typeof e.options === "undefined" || typeof e.options.account_key === "undefined") {
                r = true
            }
            saveOptions(e.options, n, r)
        } else if (e.type == "getAndRefreshAntigateBalance") {
            getAndRefreshAntigateBalance()
        }
        return true
    });
    saveOptions = function(e, t, n) {
        n = !!n;
        if (!n) {
            e.account_key_checked = false
        }(chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set(e, function() {
            Te(e);
            t(e);
            Ne.refreshPrecachedSolutionsCountKForEveryHost()
        })
    };

    function Te(e) {
        for (var t in e) {
            globalStatus[t] = e[t]
        }
    }

    function ke(e, t) {
        if (e) {
            chrome.runtime.sendMessage({
                type: "showMessage",
                method: "showErrorMessage",
                arguments: [e.message]
            });
            if (globalStatus.profile_user_info != null) {
                chrome.runtime.sendMessage({
                    type: "showMessage",
                    method: "refreshFreeAttemptsMessage"
                })
            }
            return
        }
        chrome.runtime.sendMessage({
            type: "showMessage",
            method: "showBalanceMessage",
            arguments: [t]
        });
        if (t > 0) {
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                account_key_checked: true
            }, function() {
                globalStatus.account_key_checked = true
            })
        } else {}
    }
    getAndRefreshAntigateBalance = function() {
        if (globalStatus.enable) {
            if (globalStatus.account_key) {
                var e = Pe(globalStatus.account_key);
                e.getBalance(ke)
            } else {
                if (globalStatus.profile_user_info != null) {
                    chrome.runtime.sendMessage({
                        type: "showMessage",
                        method: "refreshFreeAttemptsMessage"
                    })
                }
            }
        } else {
            chrome.runtime.sendMessage({
                type: "showMessage",
                method: "showBalanceMessage",
                arguments: [""]
            })
        }
    };

    function Ce() {
        var e = "";
        var t = chrome.i18n.getMessage("appShortName");
        if (globalStatus.enable && globalStatus.profile_user_info && globalStatus.free_attempts_left_count && (!globalStatus.account_key || !globalStatus.account_key_checked)) {
            e = globalStatus.free_attempts_left_count + ""
        } else if (globalStatus.plugin_last_version_data && typeof globalStatus.plugin_last_version_data.version !== "undefined" && globalStatus.plugin_version < globalStatus.plugin_last_version_data.version) {
            e = "new"
        } else {
            e = ""
        }
        if (globalStatus.free_attempts_left_count && (!globalStatus.account_key || !globalStatus.account_key_checked) && globalStatus.profile_user_info) {
            t += ": " + chrome.i18n.getMessage("freeAttemptsLeftActionTitle", globalStatus.free_attempts_left_count + "")
        } else {}
        chrome.browserAction.setBadgeText({
            text: e
        });
        chrome.browserAction.setTitle({
            title: t
        })
    }

    function Se() {
        if (globalStatus.enable) {
            chrome.browserAction.setIcon({
                path: {
                    16: "/img/anticaptcha-logo/16.png",
                    32: "/img/anticaptcha-logo/32.png"
                }
            })
        } else {
            chrome.browserAction.setIcon({
                path: {
                    16: "/img/anticaptcha-logo/disabled-16.png",
                    32: "/img/anticaptcha-logo/disabled-32.png"
                }
            })
        }
    }
    var Ae = new function() {
        var e, t, n;
        this.showImageContextMenu = function() {
            this.hideImageContextMenu();
            e = chrome.contextMenus.create({
                id: "1",
                title: chrome.i18n.getMessage("markImageTitle"),
                contexts: ["image", "page"],
                onclick: this.markAsCaptchaRelated.bind(null, "image", false)
            })
        };
        this.hideImageContextMenu = function() {
            if (e) {
                chrome.contextMenus.remove(e)
            }
        };
        this.showInputContextMenu = function() {
            this.hideInputContextMenu();
            n = chrome.contextMenus.create({
                id: "2",
                title: chrome.i18n.getMessage("markInputTitle"),
                contexts: ["editable"],
                onclick: this.markAsCaptchaRelated.bind(null, "input", false)
            })
        };
        this.hideInputContextMenu = function() {
            if (n) {
                chrome.contextMenus.remove(n)
            }
        };
        this.showImageAutosearchContextMenu = function() {
            this.hideImageAutosearchContextMenu();
            t = chrome.contextMenus.create({
                id: "3",
                title: chrome.i18n.getMessage("imageAutosearchTitle"),
                contexts: ["editable"],
                onclick: this.markAsCaptchaRelated.bind(null, "input", true)
            })
        };
        this.hideImageAutosearchContextMenu = function() {
            if (t) {
                chrome.contextMenus.remove(t)
            }
        };
        this.markAsCaptchaRelated = function(e, t, n, r) {
            chrome.tabs.sendMessage(r.id, {
                type: "contextMenuClickedOnCaptchaRelated",
                elementType: e,
                autosearch: t
            }, {
                frameId: n.frameId
            }, function() {})
        }
    };
    Ae.showImageContextMenu();
    Ae.showInputContextMenu();
    Ae.showImageAutosearchContextMenu();
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (e.type == "setCaptchaDeterminer") {
            delete e.type;
            var r;
            if (e.domain) {
                r = e.domain
            } else {
                r = parseUrl(t.url).hostname;
                e.domain = r
            }
            X(r, e, function() {
                (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get(function(e) {
                    n(typeof e.captchaDeterminant !== "undefined" ? e.captchaDeterminant : null)
                })
            })
        } else if (e.type == "getCaptchaDeterminer") {
            delete e.type;
            var r = parseUrl(t.url).hostname;
            e.domain = r;
            Q(r, function(e) {
                if (e) {
                    if (typeof e.source == "undefined") {
                        e.source = "manual"
                    }
                    if (!e.options) {
                        e.options = {}
                    }
                    e.options = Object.assign(Object.assign({}, c), e.options);
                    n(e)
                } else if (globalStatus.use_predefined_image_captcha_marks && typeof fe[r] != "undefined") {
                    fe[r].source = "predefined";
                    fe[r].options = c;
                    n(fe[r])
                } else {}
                n(e)
            });
            ge();
            ye()
        } else if (e.type == "setCaptchaDeterminerOptions") {
            delete e.type;
            var r = parseUrl(t.url).hostname;
            e.domain = r;
            J(r, e, function() {})
        } else if (e.type == "requestPermissions") {
            delete e.type;
            chrome.permissions.request({
                permissions: e.permissions
            }, n);
            return true
        } else if (e.type == "setImageCaptchaCache") {
            delete e.type;
            Ie.set(e.index, e.value)
        } else if (e.type == "getImageCaptchaCache") {
            delete e.type;
            n(Ie.get(e.index))
        }
        return true
    });
    var _e = function(e) {
        return new function(u) {
            this.params = {
                websiteUrl: null,
                websiteKey: null,
                websiteSToken: null,
                userAgent: ""
            };
            this.getCacheForHostname = function(e, t, n) {
                ALogger.log("getCacheForHostname called");
                var r = parseUrl(e.task.websiteURL).hostname;
                var i = u.getByHostname(r, t);
                ALogger.log("cacheContent by hostname = ", i);
                var a;
                if (i) {
                    a = i.fakeTaskId
                } else {
                    a = u.create(r, e.task.websiteKey, t)
                }
                var s = {
                    errorId: 0,
                    taskId: a
                };
                n(s)
            };
            this.getSolution = function(e, t, n) {
                var r = u.getByTaskId(e.taskId, t);
                ALogger.log("cacheContent by task id = ", r);
                var i = null;
                ALogger.log("cacheContent by hostname = ", i);
                var a;
                var s = false;
                if (r) {
                    if (r.taskData && r.taskData.hostname) {
                        a = u.getByHostname(r.taskData.hostname, t)
                    }
                    if (r.fakeTaskId !== a.fakeTaskId && !a.error) {
                        ALogger.log("Better result is found, switching to it", i);
                        r = a;
                        s = true
                    }
                    if (r.endTime) {
                        u.markTaskAsProcessedToContentScript(r);
                        n({
                            errorId: 0,
                            status: "ready",
                            solution: {
                                gRecaptchaResponse: r.solution
                            },
                            lifetime: u.cacheFreshnessTime - (L() - r.endTime)
                        })
                    } else if (r.error) {
                        u.markTaskAsProcessedToContentScript(r);
                        n({
                            errorId: 1,
                            errorCode: "error",
                            errorDescription: r.error
                        })
                    } else {
                        var o = {
                            errorId: 0,
                            status: "processing"
                        };
                        if (s) {
                            o.newTaskId = r.fakeTaskId
                        }
                        n(o)
                    }
                } else {
                    return n({
                        errorId: 16,
                        errorCode: "ERROR_NO_SUCH_CAPCHA_ID",
                        errorDescription: "Task you are requesting does not exist in your current task list or has been expired.Tasks not found in active tasks"
                    })
                }
            }
        }(e)
    };
    var Le = new function() {
        this.log = function(e, t) {
            chrome.runtime.sendMessage({
                type: "notifyRecaptchaPrecacheDebugPage",
                dataType: e,
                postData: t
            })
        }
    };
    var Ee = function(e) {
        return new function(e) {
            var s = this;
            var i = $.Callbacks();
            i.add(function(e) {
                if (typeof v[e] !== "undefined" && typeof m[v[e].taskData.hostname] !== "undefined") {
                    var t = m[v[e].taskData.hostname];
                    t.totalSolvingTime += v[e].endTime - v[e].startTime;
                    t.totalSolvedTasks++;
                    t.mediumSolvingTime = (t.totalSolvingTime + t.mediumSolvingTime) / (t.totalSolvedTasks + 1)
                }
            });
            var t = $.Callbacks();
            t.add(function(e) {
                if (typeof v[e] !== "undefined" && typeof m[v[e].taskData.hostname] !== "undefined") {
                    var t = m[v[e].taskData.hostname];
                    t.totalFeelsLikeSolvingTime += v[e].taskProcessingToContentScriptTime - v[e].requestTime;
                    t.mediumFeelsLikeSolvingTime = (t.totalFeelsLikeSolvingTime + t.mediumFeelsLikeSolvingTime) / (t.totalSolvedTasks + 1)
                }
            });
            var n = $.Callbacks();
            n.add(function(e) {
                if (typeof m[e] === "undefined") {
                    return
                }
                var t = m[e];
                t.tasks = t.tasks.sort(function(e, t) {
                    if (C(e) && !C(t)) {
                        return -1
                    } else if (!C(e) && C(t)) {
                        return 1
                    } else {
                        if (!e.error && t.error) {
                            return -1
                        } else if (e.error && !t.error) {
                            return 1
                        } else {
                            if (e.endTime !== null && t.endTime === null) {
                                return -1
                            } else if (e.endTime === null && t.endTime !== null) {
                                return 1
                            } else if (e.endTime === null && t.endTime === null) {
                                return 0
                            } else {
                                if (e.endTime < t.endTime) {
                                    return -1
                                } else if (e.endTime > t.endTime) {
                                    return 1
                                } else {
                                    if (e.startTime < t.startTime) {
                                        return -1
                                    } else if (e.startTime > t.startTime) {
                                        return 1
                                    } else {
                                        return 0
                                    }
                                }
                            }
                        }
                    }
                })
            });
            var a = $.Callbacks();
            a.add(function(e, t) {
                if (typeof v[e] !== "undefined") {
                    switch (t.type) {
                        case "start":
                            v[e].startTime = L();
                            break;
                        case "error":
                            v[e].error = t.error.message;
                            break;
                        case "attach":
                        case "detach":
                        case "reattach":
                            n.fire(v[e].taskData.hostname);
                            break;
                        case "setRealTaskId":
                            v[e].realTaskId = t.realTaskId;
                            break;
                        case "finish":
                            v[e].endTime = L();
                            v[e].solution = t.taskSolution;
                            n.fire(v[e].taskData.hostname);
                            break
                    }
                }
            });
            var o = $.Callbacks();
            o.add(function(e, t) {
                e.tabIdLastCheckTime = L();
                if (e.tabId != t) {
                    e.tabId = t;
                    e.requestTime = L();
                    a.fire(e.fakeTaskId, {
                        type: "attach"
                    })
                }
            });
            var r = $.Callbacks();
            r.add(function(e) {
                e.tabId = null;
                e.tabIdLastCheckTime = null;
                e.requestTime = null;
                a.fire(e.fakeTaskId, {
                    type: "detach"
                })
            });
            var u = $.Callbacks();
            u.add(function(e, t) {
                e.tabIdLastCheckTime = L();
                if (e.tabId != t) {
                    e.tabId = t;
                    a.fire(e.fakeTaskId, {
                        type: "reattach"
                    })
                }
            });
            var l = $.Callbacks();
            l.add(function(e, t) {
                if (typeof m[e] !== "undefined") {
                    var n = m[e];
                    n.noCacheRequestsSinceLastSolutionExpiration = t
                }
            });
            var c = setInterval(function() {
                for (var e in v) {
                    if (!v[e].startTime) {
                        a.fire(e, {
                            type: "start"
                        });
                        var r = Pe(globalStatus.account_key);
                        r.setWebsiteURL("https://" + v[e].taskData.hostname + "/");
                        r.setWebsiteKey(v[e].taskData.siteKey);
                        r.setSoftId(802);
                        var t = r.createTaskProxyless;
                        if (globalStatus.solve_proxy_on_tasks) {
                            r.setProxyType(globalStatus.user_proxy_protocol);
                            r.setProxyAddress(globalStatus.user_proxy_server);
                            r.setProxyPort(globalStatus.user_proxy_port);
                            r.setProxyLogin(globalStatus.user_proxy_login);
                            r.setProxyPassword(globalStatus.user_proxy_password);
                            r.setUserAgent(navigator.userAgent);
                            t = r.createTask
                        }(function(n) {
                            t.call(r, function(e, t) {
                                if (e) {
                                    console.error(e);
                                    a.fire(n, {
                                        type: "error",
                                        error: e
                                    });
                                    return
                                }
                                a.fire(n, {
                                    type: "setRealTaskId",
                                    realTaskId: t
                                });
                                r.getTaskSolution(t, function(e, t) {
                                    if (e) {
                                        a.fire(n, {
                                            type: "error",
                                            error: e
                                        });
                                        console.error(e);
                                        return
                                    }
                                    a.fire(n, {
                                        type: "finish",
                                        taskSolution: t
                                    });
                                    i.fire(n)
                                })
                            })
                        })(e)
                    }
                }
            }, 1e3);
            var f = setInterval(function() {
                for (var e in v) {
                    if (!v[e].expired && S(v[e])) {
                        ALogger.log("task expired, fakeid = ", e, v[e]);
                        v[e].expired = true;
                        if (!v[e].taskProcessingToContentScriptTime) {
                            if (typeof m[v[e].taskData.hostname] !== "undefined") {
                                l.fire(v[e].taskData.hostname, true)
                            }
                        }
                    }
                }
            }, 1e3);
            var d = setInterval(function() {
                for (var e in v) {
                    if (!T(v[e]) && v[e].tabIdLastCheckTime && v[e].tabIdLastCheckTime + g < L() && C(v[e])) {
                        ALogger.log("clear tabId attachment, taskid = ", e);
                        r.fire(v[e])
                    }
                }
            }, 1e3);
            var p = setInterval(function() {
                for (var e in m) {
                    var t = 0;
                    for (var n in m[e].tasks) {
                        if (C(m[e].tasks[n]) && T(m[e].tasks[n])) {
                            t++
                        }
                    }
                    if (t < m[e].precachedSolutionsCountK && !m[e].noCacheRequestsSinceLastSolutionExpiration) {
                        ALogger.log("Creating new tasks");
                        for (var n = 0; n < m[e].precachedSolutionsCountK - t; n++) {
                            s.create(e, m[e].siteKey, null, true)
                        }
                    }
                }
            }, 3e3);
            var h = setInterval(function() {
                for (var e in m) {
                    for (var t in m[e].tasks) {
                        if (x(m[e].tasks[t], m[e])) {
                            delete v[m[e].tasks[t].fakeTaskId];
                            delete m[e].tasks[t]
                        }
                    }
                    m[e].tasks = m[e].tasks.filter(function(e) {
                        return e != undefined
                    });
                    if (m[e].tasks.length == 0 && m[e].lastTaskCreateTime + w * 60 < L()) {
                        clearInterval(m[e].everyMinuteCheckInterval);
                        delete m[e]
                    }
                }
            }, 60 * 1e3);
            setInterval(function() {
                Le.log("precachedSolutions", m)
            }, 1e3);
            var m = {
                "antcpt.com": {
                    hostname: "antcpt.com",
                    siteKey: "fdfsf2343fdsfds3424",
                    tasks: [{
                        fakeTaskId: 123,
                        realTaskId: 321,
                        startTime: 1234567890,
                        endTime: 1234567890,
                        solution: "",
                        tabId: 54321,
                        tabIdLastCheckTime: 1234567890,
                        taskProcessingToContentScriptTime: 0,
                        error: null,
                        taskData: {
                            hostname: "antcpt.com",
                            siteKey: "fdfsf2343fdsfds3424"
                        }
                    }],
                    noCacheRequestsSinceLastSolutionExpiration: false,
                    precachedSolutionsCountK: b,
                    totalSolvingTime: 0,
                    totalFeelsLikeSolvingTime: 0,
                    totalSolvedTasks: 0,
                    mediumSolvingTime: y,
                    mediumFeelsLikeSolvingTime: y,
                    mediumRatePerMinute: b * (60 / y),
                    totalTasksRequested: 0,
                    totalMinutesWithTasks: 0,
                    lastMiniuteCheckTime: L()
                }
            };
            m = {};
            s.cacheFreshnessTime = 110;
            var g = 10;
            var y = 40;
            var v = {};
            var b = 2;
            var w = 5;
            this.getByHostname = function(e, t) {
                ALogger.log("getByHostname called with arguments", arguments);
                l.fire(e, false);
                if (typeof m[e] != "undefined") {
                    for (var n in m[e].tasks) {
                        if (C(m[e].tasks[n]) && (T(m[e].tasks[n]) || k(m[e].tasks[n], t))) {
                            var r = m[e].tasks[n];
                            o.fire(r, t);
                            return r
                        }
                    }
                    return false
                } else {
                    return false
                }
            };

            function x(e, t) {
                return !C(e) && !A(e, t)
            }

            function T(e) {
                return !e.tabId
            }

            function k(e, t) {
                return e.tabId == t
            }

            function C(e) {
                return !e.taskProcessingToContentScriptTime && !e.expired && !S(e);
                e.tabId && (typeof tabId == "undefined" || e.tabId != tabId) || e.taskProcessingToContentScriptTime || e.expired || S(e)
            }

            function S(e) {
                return e.endTime && e.endTime + s.cacheFreshnessTime <= L()
            }
            this.markTaskAsProcessedToContentScript = function(e) {
                e.taskProcessingToContentScriptTime = L();
                t.fire(e.fakeTaskId);
                l.fire(e.taskData.hostname, false)
            };
            this.copyRequestTimeToAnotherTask = function(e, t) {
                e.requestTime = t.requestTime
            };
            this.getByTaskId = function(e, t) {
                ALogger.log("getByTaskId called with arguments", arguments);
                if (typeof v[e] != "undefined") {
                    if (C(v[e]) && (T(v[e]) || k(v[e], t))) {
                        l.fire(v[e].taskData.hostname, false);
                        if (t) {
                            u.fire(v[e], t)
                        }
                        return v[e]
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            };

            function A(e, t) {
                return e.requestTime && e.requestTime >= t.lastMiniuteCheckTime
            }
            this.refreshPrecachedSolutionsCountKForEveryHost = function() {
                for (var e in m) {
                    _(e)
                }
            };

            function _(e) {
                if (typeof globalStatus.k_precached_solution_count_min != "undefined" && typeof m[e] !== "undefined") {
                    m[e].precachedSolutionsCountK = Math.max(m[e].precachedSolutionsCountK, globalStatus.k_precached_solution_count_min)
                }
                if (typeof globalStatus.k_precached_solution_count_max != "undefined" && typeof m[e] !== "undefined") {
                    m[e].precachedSolutionsCountK = Math.min(m[e].precachedSolutionsCountK, globalStatus.k_precached_solution_count_max)
                }
            }
            this.createHost = function(n, e) {
                var t = typeof globalStatus.k_precached_solution_count_min != "undefined" ? globalStatus.k_precached_solution_count_min : b;
                m[n] = {
                    hostname: n,
                    siteKey: e,
                    tasks: [],
                    noCacheRequestsSinceLastSolutionExpiration: false,
                    precachedSolutionsCountK: t,
                    totalSolvingTime: 0,
                    totalFeelsLikeSolvingTime: 0,
                    totalSolvedTasks: 0,
                    mediumSolvingTime: y,
                    mediumFeelsLikeSolvingTime: y,
                    mediumRatePerMinute: t * (60 / y),
                    totalTasksRequested: 0,
                    totalMinutesWithTasks: 0,
                    lastTaskCreateTime: 0,
                    lastMiniuteCheckTime: L(),
                    everyMinuteCheckInterval: setInterval(function() {
                        ALogger.log("everyMinuteCheckInterval hostname = ", n);
                        var e = 0;
                        for (var t in m[n].tasks) {
                            if (A(m[n].tasks[t], m[n]) && !T(m[n].tasks[t]) && !m[n].tasks[t].error) {
                                e++
                            }
                        }
                        m[n].lastMiniuteCheckTime = L();
                        ALogger.log("lastMinuteTaskCount = ", e);
                        if (e) {
                            m[n].totalTasksRequested += e;
                            m[n].totalMinutesWithTasks++;
                            m[n].mediumRatePerMinute = m[n].totalTasksRequested / m[n].totalMinutesWithTasks;
                            m[n].precachedSolutionsCountK = Math.round(m[n].mediumRatePerMinute * m[n].mediumSolvingTime / 60);
                            _(n)
                        }
                    }, 60 * 1e3)
                }
            };
            this.create = function(e, t, n, r) {
                r = !!r;
                ALogger.log("Task creation called with arguments", arguments);
                if (typeof m[e] == "undefined") {
                    s.createHost(e, t)
                }
                var i;
                do {
                    i = Math.round(Math.random() * 1e6)
                } while (typeof v[i] != "undefined");
                var a = {
                    fakeTaskId: i,
                    realTaskId: null,
                    createTime: L(),
                    requestTime: null,
                    startTime: null,
                    endTime: null,
                    expired: false,
                    solution: "",
                    tabId: null,
                    tabIdLastCheckTime: null,
                    taskProcessingToContentScriptTime: 0,
                    error: null,
                    taskData: {
                        hostname: e,
                        siteKey: t
                    }
                };
                v[i] = a;
                m[e].tasks.push(a);
                m[e].lastTaskCreateTime = L();
                if (!r) {
                    l.fire(e, false)
                }
                if (n) {
                    o.fire(a, n)
                }
                ALogger.log("precachedSolutionsByFakeTaskId = ", v);
                return i
            }
        }(e)
    };
    var Ne = Ee();
    var De = _e(Ne);
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (e.type == "createTaskPrecachedRecaptcha") {
            De.getCacheForHostname(e.postData, t.tab.id, function(e) {
                n(e)
            })
        } else if (e.type == "getTaskResultPrecachedRecaptcha") {
            De.getSolution(e.postData, t.tab.id, function(e) {
                n(e)
            })
        }
        return true
    });
    (function() {
        var o = [];
        chrome.runtime.onMessage.addListener(function(e, n, r) {
            if (e.type == "getTaintedImageBase64") {
                delete e.type;
                o[n.tab.id] = {
                    callback: r
                };
                return true
            } else if (e.type == "setTaintedImageBase64") {
                delete e.type;
                if (typeof o[n.tab.id] != "undefined") {
                    o[n.tab.id].callback(e.data)
                }
            } else if (e.type == "getTaintedImageBase64UsingBackgroundFrame") {
                delete e.type;
                var t = document.createElement("iframe");
                t.src = e.img_src;
                t.width = "1px";
                t.height = "1px";
                t.name = e.img_src;
                document.body.appendChild(t);
                o[e.img_src] = {
                    callback: r,
                    src: e.img_src
                };
                return true
            } else if (e.type == "setTaintedImageBase64UsingBackgroundFrame") {
                delete e.type;
                if (typeof o[e.original_url] != "undefined") {
                    o[e.original_url].callback(e.data);
                    var i = document.getElementsByTagName("iframe");
                    for (var a in i) {
                        if (i[a].src == o[e.original_url].src) {
                            i[a].parentNode.removeChild(i[a])
                        }
                    }
                }
            } else if (e.type == "captureScreen") {
                delete e.type;
                var s = setInterval(function() {
                    chrome.tabs.query({
                        active: true
                    }, function(e) {
                        if (e.length) {
                            for (var t in e) {
                                if (e[t].id == n.tab.id) {
                                    clearInterval(s);
                                    setTimeout(function() {
                                        chrome.tabs.captureVisibleTab(n.tab.windowId, {
                                            format: "png"
                                        }, function(e) {
                                            r({
                                                dataUrl: e
                                            })
                                        })
                                    }, 200)
                                }
                            }
                        }
                    })
                }, 200);
                return true
            }
        })
    })();
    var Pe = function(e, t) {
        return new function(e, l) {
            l = !!l;
            this.params = {
                host: "api.anycaptcha.com",
                port: 80,
                clientKey: e,
                websiteUrl: null,
                websiteKey: null,
                websiteSToken: null,
                recaptchaDataSValue: null,
                proxyType: "http",
                proxyAddress: null,
                proxyPort: null,
                proxyLogin: null,
                proxyPassword: null,
                userAgent: "",
                cookies: "",
                minScore: "",
                pageAction: "",
                websitePublicKey: null,
                funcaptchaApiJSSubdomain: null,
                websiteChallenge: null,
                geetestApiServerSubdomain: null,
                geetestGetLib: null,
                phrase: null,
                case: null,
                numeric: null,
                math: null,
                minLength: null,
                maxLength: null,
                imageUrl: null,
                assignment: null,
                forms: null,
                softId: null,
                languagePool: null
            };
            var s = {};
            var c = 20,
                u = 5,
                f = 2;
            this.getBalance = function(n) {
                var e = {
                    clientKey: this.params.clientKey
                };
                this.jsonPostRequest("getBalance", e, function(e, t) {
                    if (e) {
                        return n(e, null, t)
                    }
                    n(null, t.balance, t)
                })
            };
            this.setCustomData = function(e, t) {
                if (typeof this.params[e] !== "undefined") {
                    return
                }
                s[e] = t
            };
            this.clearCustomData = function() {
                s = {}
            };
            this.createTask = function(r, e, t) {
                e = typeof e == "undefined" ? "NoCaptchaTask" : e;
                var n = this.getPostData(e);
                n.type = e;
                for (var i in s) {
                    if (typeof n[i] === "undefined") {
                        n[i] = s[i]
                    }
                }
                if (typeof t == "object") {
                    for (var i in t) {
                        n[i] = t[i]
                    }
                }
                var a = {
                    clientKey: this.params.clientKey,
                    task: n,
                    softId: this.params.softId !== null ? this.params.softId : 0
                };
                if (this.params.languagePool !== null) {
                    a.languagePool = this.params.languagePool
                }
                this.jsonPostRequest("createTask", a, function(e, t) {
                    if (e) {
                        return r(e, null, t)
                    }
                    var n = t.taskId;
                    r(null, n, t)
                })
            };
            this.createTaskProxyless = function(e) {
                this.createTask(e, "RecaptchaV2TaskProxyless")
            };
            this.createRecaptchaV2EnterpriseTask = function(e) {
                this.createTask(e, "RecaptchaV2EnterpriseTask")
            };
            this.createRecaptchaV2EnterpriseTaskProxyless = function(e) {
                this.createTask(e, "RecaptchaV2EnterpriseTaskProxyless")
            };
            this.createHCaptchaTaskProxyless = function(e) {
                this.createTask(e, "HCaptchaTaskProxyless")
            };
            this.createHCaptchaTask = function(e) {
                this.createTask(e, "HCaptchaTask")
            };
            this.createRecaptchaV3TaskProxyless = function(e) {
                this.createTask(e, "RecaptchaV3TaskProxyless")
            };
            this.createFunCaptchaTask = function(e) {
                this.createTask(e, "FunCaptchaTask")
            };
            this.createFunCaptchaTaskProxyless = function(e) {
                this.createTask(e, "FunCaptchaTaskProxyless")
            };
            this.createGeeTestTask = function(e) {
                this.createTask(e, "GeeTestTask")
            };
            this.createGeeTestTaskProxyless = function(e) {
                this.createTask(e, "GeeTestTaskProxyless")
            };
            this.createImageToTextTask = function(e, t) {
                this.createTask(t, "ImageToTextTask", e)
            };
            this.createCustomCaptchaTask = function(e) {
                this.createTask(e, "CustomCaptchaTask")
            };
            this.getTaskRawResult = function(e) {
                if (typeof e.solution.gRecaptchaResponse != "undefined") {
                    return e.solution.gRecaptchaResponse
                } else if (typeof e.solution.token != "undefined") {
                    return e.solution.token
                } else if (typeof e.solution.answers != "undefined") {
                    return e.solution.answers
                } else if (typeof e.solution.text !== "undefined") {
                    return e.solution.text
                } else {
                    return e.solution
                }
            };
            this.getTaskSolution = function(n, r, i, a, s) {
                i = i || 0;
                var e = {
                    clientKey: this.params.clientKey,
                    taskId: n
                };
                if (typeof s !== "undefined" && typeof s.cacheRecord !== "undefined") {
                    e.cacheRecord = s.cacheRecord
                }
                var t;
                if (i == 0) {
                    t = u
                } else {
                    t = f
                }
                if (l) {
                    t = 1
                }
                console.log("Waiting %s seconds", t);
                var o = this;
                setTimeout(function() {
                    o.jsonPostRequest("getTaskResult", e, function(e, t) {
                        if (e) {
                            return r(e, null, t)
                        }
                        if (t.status == "processing") {
                            if (typeof t.newTaskId !== "undefined") {
                                n = t.newTaskId
                            }
                            if (a) {
                                a()
                            }
                            return o.getTaskSolution(n, r, i + 1, a, s)
                        } else if (t.status == "ready") {
                            return r(null, o.getTaskRawResult(t), t)
                        }
                    })
                }, t * 1e3)
            };
            this.getPostData = function(e) {
                switch (e) {
                    case "CustomCaptchaTask":
                        return {
                            imageUrl: this.params.imageUrl, assignment: this.params.assignment, forms: this.params.forms
                        };
                    case "ImageToTextTask":
                        return {
                            phrase: this.params.phrase,
                                case :this.params.case, numeric: this.params.numeric, math: this.params.math, minLength: this.params.minLength, maxLength: this.params.maxLength
                        };
                        break;
                    case "RecaptchaV2TaskProxyless":
                    case "RecaptchaV2EnterpriseTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, websiteSToken: this.params.websiteSToken, recaptchaDataSValue: this.params.recaptchaDataSValue
                        };
                        break;
                    case "HCaptchaTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey
                        };
                        break;
                    case "HCaptchaTask":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "RecaptchaV3TaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, minScore: this.params.minScore, pageAction: this.params.pageAction, isEnterprise: this.params.isEnterprise
                        };
                        break;
                    case "FunCaptchaTask":
                        return {
                            websiteURL: this.params.websiteUrl, websitePublicKey: this.params.websitePublicKey, funcaptchaApiJSSubdomain: this.params.funcaptchaApiJSSubdomain, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "FunCaptchaTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websitePublicKey: this.params.websitePublicKey, funcaptchaApiJSSubdomain: this.params.funcaptchaApiJSSubdomain
                        };
                    case "GeeTestTask":
                        return {
                            websiteURL: this.params.websiteUrl, gt: this.params.websiteKey, challenge: this.params.websiteChallenge, geetestApiServerSubdomain: this.params.geetestApiServerSubdomain, geetestGetLib: this.params.geetestGetLib, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "GeeTestTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, gt: this.params.websiteKey, challenge: this.params.websiteChallenge, geetestApiServerSubdomain: this.params.geetestApiServerSubdomain, geetestGetLib: this.params.geetestGetLib
                        };
                    default:
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, websiteSToken: this.params.websiteSToken, recaptchaDataSValue: this.params.recaptchaDataSValue, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        }
                }
            };
            this.jsonPostRequest = function(e, t, r) {
                if (!l) {
                    if (typeof process === "object" && typeof require === "function") {
                        var n = require("http");
                        var i = {
                            hostname: this.params.host,
                            port: this.params.port,
                            path: "/" + e,
                            method: "POST",
                            headers: {
                                "accept-encoding": "gzip,deflate",
                                "content-type": "application/json; charset=utf-8",
                                accept: "application/json",
                                "content-length": Buffer.byteLength(JSON.stringify(t))
                            }
                        };
                        var a = n.request(i, function(e) {
                            var t = "";
                            e.on("data", function(e) {
                                t += e
                            });
                            e.on("end", function() {
                                try {
                                    var e = JSON.parse(t)
                                } catch (e) {
                                    return r(e)
                                }
                                if (e.errorId) {
                                    return r(new Error(e.errorDescription, {
                                        cause: e
                                    }), e)
                                }
                                return r(null, e)
                            })
                        });
                        a.write(JSON.stringify(t));
                        a.end();
                        a.setTimeout(c * 1e3);
                        a.on("timeout", function() {
                            console.log("timeout");
                            a.abort()
                        });
                        a.on("error", function(e) {
                            console.log("error");
                            return r(e)
                        });
                        return a
                    } else if (typeof window !== "undefined" || typeof chrome === "object") {
                        var s;
                        s = window.location.protocol != "http:" ? "https:" : window.location.protocol;
                        var o = s + "//" + this.params.host + (s != "https:" ? ":" + this.params.port : "") + "/" + e;
                        if (typeof jQuery == "function") {
                            jQuery.ajax(o, {
                                method: "POST",
                                data: JSON.stringify(t),
                                dataType: "json",
                                success: function(e) {
                                    if (e && e.errorId) {
                                        return r(new Error(e.errorDescription, {
                                            cause: e
                                        }), e)
                                    }
                                    r(false, e)
                                },
                                error: function(e, t, n) {
                                    r(new Error(t !== "error" ? t : "Unknown error, watch console", {
                                        cause: {
                                            errorCode: "HTTP_REQUEST_ERROR"
                                        }
                                    }))
                                }
                            })
                        } else if (typeof XMLHttpRequest !== "undefined") {
                            var u = new XMLHttpRequest;
                            u.open("POST", o, true);
                            u.responseType = "json";
                            u.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                            u.send(JSON.stringify(t));
                            u.onloadend = function() {
                                if (u.status == 200) {
                                    var e = u.response;
                                    if (e && e.errorId) {
                                        return r(new Error(e.errorDescription, {
                                            cause: e
                                        }), e)
                                    }
                                    r(false, e)
                                } else {
                                    r(new Error("Unknown error, watch console", {
                                        cause: {
                                            errorCode: "HTTP_REQUEST_ERROR"
                                        }
                                    }))
                                }
                            }
                        }
                    } else {
                        console.error("Application should be run either in NodeJs or a WebBrowser environment")
                    }
                } else {
                    chrome.runtime.sendMessage({
                        type: e + "PrecachedRecaptcha",
                        postData: t
                    }, function(e) {
                        if (e.errorId) {
                            return r(new Error(e.errorDescription, {
                                cause: e
                            }), e)
                        }
                        return r(null, e)
                    })
                }
            };
            this.setClientKey = function(e) {
                this.params.clientKey = e
            };
            this.setWebsiteURL = function(e) {
                this.params.websiteUrl = e
            };
            this.setWebsiteKey = function(e) {
                this.params.websiteKey = e
            };
            this.setMinScore = function(e) {
                this.params.minScore = e
            };
            this.setPageAction = function(e) {
                this.params.pageAction = e
            };
            this.setIsEnterprise = function(e) {
                this.params.isEnterprise = e
            };
            this.setWebsiteSToken = function(e) {
                this.params.websiteSToken = e
            };
            this.setRecaptchaDataSValue = function(e) {
                this.params.recaptchaDataSValue = e
            };
            this.setWebsitePublicKey = function(e) {
                this.params.websitePublicKey = e
            };
            this.setFuncaptchaApiJSSubdomain = function(e) {
                this.params.funcaptchaApiJSSubdomain = e
            };
            this.setWebsiteChallenge = function(e) {
                this.params.websiteChallenge = e
            };
            this.setGeetestApiServerSubdomain = function(e) {
                this.params.geetestApiServerSubdomain = e
            };
            this.setGeetestGetLib = function(e) {
                this.params.geetestGetLib = e
            };
            this.setProxyType = function(e) {
                this.params.proxyType = e
            };
            this.setProxyAddress = function(e) {
                this.params.proxyAddress = e
            };
            this.setProxyPort = function(e) {
                this.params.proxyPort = e
            };
            this.setProxyLogin = function(e) {
                this.params.proxyLogin = e
            };
            this.setProxyPassword = function(e) {
                this.params.proxyPassword = e
            };
            this.setUserAgent = function(e) {
                this.params.userAgent = e
            };
            this.setCookies = function(e) {
                this.params.cookies = e
            };
            this.setPhrase = function(e) {
                this.params.phrase = e
            };
            this.setCase = function(e) {
                this.params.case = e
            };
            this.setNumeric = function(e) {
                this.params.numeric = e
            };
            this.setMath = function(e) {
                this.params.math = e
            };
            this.setMinLength = function(e) {
                this.params.minLength = e
            };
            this.setMaxLength = function(e) {
                this.params.maxLength = e
            };
            this.setImageUrl = function(e) {
                this.params.imageUrl = e
            };
            this.setAssignment = function(e) {
                this.params.assignment = e
            };
            this.setForms = function(e) {
                this.params.forms = e
            };
            this.setSoftId = function(e) {
                this.params.softId = e
            };
            this.setLanguagePool = function(e) {
                this.params.languagePool = e
            };
            this.setHost = function(e) {
                this.params.host = e
            };
            this.setPort = function(e) {
                this.params.port = e
            }
        }(e, t)
    };
    if (typeof process === "object" && typeof require === "function") {
        module.exports = Pe
    }
    var Ie = new function() {
        var n = 32;
        var r = [];
        var i = 0;
        var a, s;
        this.set = function(e, t) {
            if (typeof a === "undefined") {
                a = e
            }
            if (typeof r[e] === "undefined") {
                r[e] = {
                    nextKey: null,
                    value: t
                }
            } else {
                r[e].value = t;
                return
            }
            if (typeof s !== "undefined") {
                r[s].nextKey = e
            }
            s = e;
            i++;
            if (i > n) {
                o()
            }
        };
        this.get = function(e) {
            if (typeof r[e] !== "undefined") {
                return r[e].value
            }
            return null
        };
        var o = function() {
            var e = r[a].nextKey;
            delete r[a];
            a = e
        }
    }
})();
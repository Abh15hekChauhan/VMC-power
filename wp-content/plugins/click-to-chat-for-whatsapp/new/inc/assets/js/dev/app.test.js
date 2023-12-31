!function (t) {
    t((function () {
        var e = window.location.href
            , c = void 0 !== document.title ? document.title : ""
            , n = void 0 !== screen.width && screen.width > 1024 ? "no" : "yes"
            , o = ""
            , a = {};
        function _(t) {
            return !!a[t] && a[t]
        }
        function s(t, e) {
            a[t] = e;
            var c = JSON.stringify(a);
            localStorage.setItem("ht_ctc_storage", c)
        }
        localStorage.getItem("ht_ctc_storage") && (a = localStorage.getItem("ht_ctc_storage"),
            a = JSON.parse(a));
        var i = "";
        if ("undefined" != typeof ht_ctc_chat_var)
            i = ht_ctc_chat_var,
                h(),
                u();
        else {
            try {
                if (document.querySelector(".ht_ctc_chat_data")) {
                    var r = t(".ht_ctc_chat_data").attr("data-settings");
                    i = JSON.parse(r),
                        window.ht_ctc_chat_var = i
                }
            } catch (t) {
                i = {}
            }
            h(),
                u()
        }
        function h() {
            var e = document.querySelector(".ht_ctc_chat_data");
            e && (o = t(".ht_ctc_chat_data").attr("data-no_number"),
                e.remove())
        }
        function u() {
            var c;
            document.dispatchEvent(new CustomEvent("ht_ctc_event_settings", {
                detail: {
                    ctc: i
                }
            })),
                (c = document.querySelector(".ht-ctc-chat")) && (document.dispatchEvent(new CustomEvent("ht_ctc_event_chat")),
                    function (t) {
                        "yes" == i.schedule ? document.dispatchEvent(new CustomEvent("ht_ctc_event_display", {
                            detail: {
                                ctc: i,
                                display_chat: g,
                                ht_ctc_chat: t
                            }
                        })) : g(t)
                    }(c),
                    c.addEventListener("click", (function () {
                        t(".ht_ctc_chat_greetings_box").length || m(c)
                    }
                    )),
                    t(".ht_ctc_chat_greetings_box").length && t(document).on("click", ".ht_ctc_chat_style", (function (e) {
                        t(".ht_ctc_chat_greetings_box").hasClass("ctc_greetings_opened") ? l("user_closed") : d("user_opened")
                    }
                    )),
                    t(document).on("click", ".ctc_greetings_close_btn", (function (t) {
                        l("user_closed")
                    }
                    )),
                    t(document).on("click", ".ht_ctc_chat_greetings_box_link", (function (e) {
                        e.preventDefault(),
                            document.querySelector("#ctc_opt") ? t("#ctc_opt").is(":checked") || _("g_optin") ? m(c) : t(".ctc_opt_in").show(400).fadeOut("1").fadeIn("1") : m(c),
                            document.dispatchEvent(new CustomEvent("ht_ctc_event_greetings"))
                    }
                    )),
                    document.querySelector("#ctc_opt") && t("#ctc_opt").on("change", (function (e) {
                        t("#ctc_opt").is(":checked") && (t(".ctc_opt_in").hide(100),
                            s("g_optin", "y"),
                            setTimeout((() => {
                                m(c)
                            }
                            ), 500))
                    }
                    ))),
                t(document).on("click", ".ht-ctc-sc-chat", (function () {
                    var t = this.getAttribute("data-number")
                        , c = this.getAttribute("data-pre_filled");
                    c = c.replace(/\[url]/gi, e),
                        c = encodeURIComponent(c),
                        i.url_structure_d && "yes" !== n ? window.open("https://web.whatsapp.com/send?phone=" + t + "&text=" + c, "_blank", "noopener") : window.open("https://wa.me/" + t + "?text=" + c, "_blank", "noopener"),
                        v(this),
                        b(t)
                }
                )),
                t(document).on("click", ".ctc_chat, #ctc_chat", (function (e) {
                    m(this),
                        t(this).hasClass("ctc_woo_place") && e.preventDefault()
                }
                )),
                t(document).on("click", '[href="#ctc_chat"]', (function (t) {
                    t.preventDefault(),
                        m(this)
                }
                ))
        }
        function d(e = "open") {
            t(".ctc_cta_stick").remove(),
                t(".ht_ctc_chat_greetings_box").show(70),
                t(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_opened").removeClass("ctc_greetings_closed"),
                s("g_action", e),
                "user_opened" == e && s("g_user_action", e)
        }
        function l(e = "close") {
            t(".ht_ctc_chat_greetings_box").hide(70),
                t(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_closed").removeClass("ctc_greetings_opened"),
                s("g_action", e),
                "user_closed" == e && s("g_user_action", e)
        }
        function g(t) {
            var e;
            "yes" == n ? "show" == i.dis_m && ((e = document.querySelector(".ht_ctc_desktop_chat")) && e.remove(),
                t.style.cssText = i.pos_m + i.css,
                p(t)) : "show" == i.dis_d && ((e = document.querySelector(".ht_ctc_mobile_chat")) && e.remove(),
                    t.style.cssText = i.pos_d + i.css,
                    p(t))
        }
        function p(e) {
            try {
                t(e).show(parseInt(i.se))
            } catch (t) {
                e.style.display = "block"
            }
            !function () {
                if (t(".ht_ctc_chat_greetings_box").length) {
                    if (i.g_device) {
                        if ("yes" !== n && "mobile" == i.g_device)
                            return void t(".ht_ctc_chat_greetings_box").remove();
                        if ("yes" == n && "desktop" == i.g_device)
                            return void t(".ht_ctc_chat_greetings_box").remove()
                    }
                    document.dispatchEvent(new CustomEvent("ht_ctc_event_after_chat_displayed", {
                        detail: {
                            ctc: i,
                            greetings_open: d,
                            greetings_close: l
                        }
                    })),
                        i.g_init && "open" == i.g_init && "user_closed" !== _("g_user_action") && d("init"),
                        t(document).on("click", '.ctc_greetings, #ctc_greetings, .ctc_greetings_now, [href="#ctc_greetings"]', (function (t) {
                            t.preventDefault(),
                                l("element"),
                                d("element")
                        }
                        ))
                }
            }(),
                function (e) {
                    var c = t(e).hasClass("ht_ctc_entry_animation") ? 1200 : 120;
                    setTimeout((function () {
                        e.classList.add("ht_ctc_animation", i.ani)
                    }
                    ), c),
                        t(".ht-ctc-chat").hover((function () {
                            t(".ht-ctc-chat .ht-ctc-cta-hover").show(120)
                        }
                        ), (function () {
                            t(".ht-ctc-chat .ht-ctc-cta-hover").hide(100)
                        }
                        ))
                }(e)
        }
        function v(t) {
            if (i.analytics && "session" == i.analytics) {
                if (sessionStorage.getItem("ht_ctc_analytics"))
                    return;
                sessionStorage.setItem("ht_ctc_analytics", "done")
            }
            document.dispatchEvent(new CustomEvent("ht_ctc_event_analytics"));
            var n = i.number;
            t.classList.contains("ht-ctc-sc") && (n = t.getAttribute("data-number"));
            var o = "Click to Chat for WhatsApp"
                , a = "chat: " + n
                , _ = c + ", " + e;
            if (i.ga || i.ga4)
                if ("undefined" != typeof gtag)
                    i.ga4 ? gtag("event", "click to chat", {
                        number: n,
                        title: c,
                        url: e
                    }) : gtag("event", a, {
                        event_category: o,
                        event_label: _
                    });
                else if ("undefined" != typeof ga && void 0 !== ga.getAll) {
                    ga.getAll()[0].send("event", o, a, _)
                } else
                    "undefined" != typeof __gaTracker && __gaTracker("send", "event", o, a, _);
            "undefined" != typeof dataLayer && dataLayer.push({
                event: "Click to Chat",
                type: "chat",
                number: n,
                title: c,
                url: e,
                event_category: o,
                event_label: _,
                event_action: a
            }),
                i.ads && "undefined" != typeof gtag_report_conversion && gtag_report_conversion(),
                i.fb && "undefined" != typeof fbq && fbq("trackCustom", "Click to Chat by HoliThemes", {
                    Category: "Click to Chat for WhatsApp",
                    return_type: "chat",
                    ID: n,
                    Title: c,
                    URL: e
                })
        }
        function m(c) {
            document.dispatchEvent(new CustomEvent("ht_ctc_event_number", {
                detail: {
                    ctc: i
                }
            }));
            var a = i.number
                , _ = i.pre_filled;
            if (c.hasAttribute("data-number") && (a = c.getAttribute("data-number")),
                c.hasAttribute("data-pre_filled") && (_ = c.getAttribute("data-pre_filled")),
                _ = (_ = _.replaceAll("%", "%25")).replace(/\[url]/gi, e),
                _ = encodeURIComponent(decodeURI(_)),
                "" != a) {
                var s = "https://wa.me/" + a + "?text=" + _
                    , r = i.url_target_d ? i.url_target_d : "_blank";
                "yes" == n ? (i.url_structure_m && (s = "whatsapp://send?phone=" + a + "&text=" + _,
                    r = "_self"),
                    i.custom_url_m && "" !== i.custom_url_m && (s = i.custom_url_m)) : (i.url_structure_d && (s = "https://web.whatsapp.com/send?phone=" + a + "&text=" + _),
                        i.custom_url_d && "" !== i.custom_url_d && (s = i.custom_url_d));
                var h = "popup" == r ? "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=788,height=514,left=100,top=100" : "noopener";
                window.open(s, r, h),
                    v(c),
                    b(a)
            } else
                t(".ht-ctc-chat").html(o)
        }
        var f = i.hook_v ? i.hook_v : "";
        function b(e) {
            if (i.hook_url) {
                var c = {};
                if (i.hook_v) {
                    c = void 0 !== f ? f : i.hook_v;
                    var n = {}
                        , o = 1;
                    c.forEach((t => {
                        n["value" + o] = t,
                            o++
                    }
                    )),
                        i.hook_v = n
                }
                document.dispatchEvent(new CustomEvent("ht_ctc_event_hook", {
                    detail: {
                        ctc: i,
                        number: e
                    }
                }));
                var a = i.hook_url;
                if (c = i.hook_v,
                    i.webhook_format && "json" == i.webhook_format)
                    var _ = c;
                else
                    _ = JSON.stringify(c);
                t.ajax({
                    url: a,
                    type: "POST",
                    mode: "no-cors",
                    data: _,
                    success: function (t) { }
                })
            }
        }
    }
    ))
}(jQuery);

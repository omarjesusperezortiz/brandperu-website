!function(e) {
    "use strict";
    function o() {
        qodef.scroll = e(window).scrollTop(), qodef.body.hasClass("qodef-dark-header") && (qodef.defaultHeaderStyle = "qodef-dark-header"), qodef.body.hasClass("qodef-light-header") && (qodef.defaultHeaderStyle = "qodef-light-header")
    }
    function a() {}
    function t() {
        qodef.windowWidth = e(window).width(), qodef.windowHeight = e(window).height()
    }
    function n() {
        qodef.scroll = e(window).scrollTop()
    }
    switch (window.qodef = {}, qodef.modules = {}, qodef.scroll = 0, qodef.window = e(window), qodef.document = e(document), qodef.windowWidth = e(window).width(), qodef.windowHeight = e(window).height(), qodef.body = e("body"), qodef.html = e("html, body"), qodef.htmlEl = e("html"), qodef.menuDropdownHeightSet = !1, qodef.defaultHeaderStyle = "", qodef.minVideoWidth = 1500, qodef.videoWidthOriginal = 1280, qodef.videoHeightOriginal = 720, qodef.videoRatio = 1.61, qodef.qodefOnDocumentReady = o, qodef.qodefOnWindowLoad = a, qodef.qodefOnWindowResize = t, qodef.qodefOnWindowScroll = n, e(document).ready(o), e(window).load(a), e(window).resize(t), e(window).scroll(n), !0) 
    {
    case qodef.body.hasClass("qodef-grid-1300"):
        qodef.boxedLayoutWidth = 1350;
        break;
    case qodef.body.hasClass("qodef-grid-1200"):
        qodef.boxedLayoutWidth = 1250;
        break;
    case qodef.body.hasClass("qodef-grid-1000"):
        qodef.boxedLayoutWidth = 1050;
        break;
    case qodef.body.hasClass("qodef-grid-800"):
        qodef.boxedLayoutWidth = 850;
        break;
    default:
        qodef.boxedLayoutWidth = 1150
    }
    qodef.gridWidth = function() {
        var e = 1100;
        switch (!0) {
        case qodef.body.hasClass("qodef-grid-1300") && 1400 < qodef.windowWidth:
            e = 1300;
            break;
        case qodef.body.hasClass("qodef-grid-1200") && 1300 < qodef.windowWidth:
        case qodef.body.hasClass("qodef-grid-1000") && 1200 < qodef.windowWidth:
            e = 1200;
            break;
        case qodef.body.hasClass("qodef-grid-800") && 1024 < qodef.windowWidth:
            e = 800
        }
        return e
    }, qodef.transitionEnd = function() {
        var e = document.createElement("transitionDetector"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                transition: "transitionend"
            };
        for (var a in o)
            if (void 0 !== e.style[a])
                return o[a]
    }(), qodef.animationEnd = function() {
        var e = document.createElement("animationDetector"),
            o = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
        for (var a in o)
            if (void 0 !== e.style[a])
                return o[a]
    }()
}

(jQuery), function(t) {
    "use strict";
    var e = {};
    function o() {
        n()
    }
    function a() {
        n()
    }
    function n() {
        var e = t(".qodef-ils-holder");
        e.length && e.each(function() {
            var e = t(this),
                o = e.find(".qodef-ils-item-image"),
                a = e.find(".qodef-ils-item-title");
            o.eq(0).addClass("qodef-active"), a.parent().removeClass("qodef-active").eq(0).addClass("qodef-active"), a.on("mouseenter", function() {
                var e = t(this).parent().index();
                o.removeClass("qodef-active").eq(e).addClass("qodef-active"), a.parent().removeClass("qodef-active").eq(e).addClass("qodef-active")
            }).on("mouseleave", function() {})
        })
    }
     t(document).ready(o), t(window).resize(a)
}
(jQuery)
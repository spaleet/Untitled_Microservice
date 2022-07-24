$(document).ready(function () { "use strict"; $(window).width(); var a = window.innerHeight, b = $(".default-header").height(); $(".site-header.static").outerHeight(), $(".fullscreen").css("height", a), $(".fitscreen").css("height", a - b), $("select").niceSelect(), $(".navbar-nav li.dropdown").hover(function () { $(this).find(".dropdown-menu").stop(!0, !0).delay(200).fadeIn(500) }, function () { $(this).find(".dropdown-menu").stop(!0, !0).delay(200).fadeOut(500) }), $(".img-pop-up").magnificPopup({ type: "image", gallery: { enabled: !0 } }), $("#search_input_box").hide(), $("#search_btn").on("click", function () { $("#search_input_box").slideToggle(), $("#search_input").focus() }), $("#close_search").on("click", function () { $("#search_input_box").slideUp(500) }), $(".sticky-header").sticky(), $(".active-banner-slider").owlCarousel({ items: 1, autoplay: !1, autoplayTimeout: 5e3, loop: !0, nav: !0, navText: ["<img src='img/banner/prev.png'>", "<img src='img/banner/next.png'>"], dots: !1 }), $(".active-product-area").owlCarousel({ items: 1, autoplay: !1, autoplayTimeout: 5e3, loop: !0, nav: !0, navText: ["<img src='img/product/prev.png'>", "<img src='img/product/next.png'>"], dots: !1 }), $(".collapse").on("shown.bs.collapse", function () { $(this).parent().find(".lnr-arrow-right").removeClass("lnr-arrow-right").addClass("lnr-arrow-left") }).on("hidden.bs.collapse", function () { $(this).parent().find(".lnr-arrow-left").removeClass("lnr-arrow-left").addClass("lnr-arrow-right") }), $('.main-menubar a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (b) { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var a = $(this.hash); (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")).length && (b.preventDefault(), $("html, body").animate({ scrollTop: a.offset().top - 70 }, 1e3, function () { var b = $(a); if (b.focus(), b.is(":focus")) return !1; b.attr("tabindex", "-1"), b.focus() })) } }), $(document).ready(function () { var a = $("#booking"), b = $(".submit-btn"), c = $(".alert-msg"); a.on("submit", function (d) { d.preventDefault(), $.ajax({ url: "booking.php", type: "POST", dataType: "html", data: a.serialize(), beforeSend: function () { c.fadeOut(), b.html("Sending....") }, success: function (d) { c.html(d).fadeIn(), a.trigger("reset"), b.attr("style", "display: none !important") }, error: function (a) { console.log(a) } }) }) }), $(document).ready(function () { $("#mc_embed_signup").find("form").ajaxChimp() }), document.getElementById("js-countdown") && !function (c, d) { var a = document.getElementById(c), e = a.querySelector(".js-countdown-days"), f = a.querySelector(".js-countdown-hours"), g = a.querySelector(".js-countdown-minutes"), h = a.querySelector(".js-countdown-seconds"); function b() { var c, a, j, k, l, m, b = (c = d, j = Math.floor((a = Date.parse(c) - Date.parse(new Date)) / 1e3 % 60), k = Math.floor(a / 1e3 / 60 % 60), l = Math.floor(a / 36e5 % 24), m = Math.floor(a / 864e5), { total: a, seconds: j, minutes: k, hours: l, days: m }); e.innerHTML = b.days, f.innerHTML = ("0" + b.hours).slice(-2), g.innerHTML = ("0" + b.minutes).slice(-2), h.innerHTML = ("0" + b.seconds).slice(-2), b.total <= 0 && clearInterval(i) } b(); var i = setInterval(b, 1e3) }("js-countdown", new Date("October 17, 2018")), $(".quick-view-carousel-details").owlCarousel({ loop: !0, dots: !0, items: 1 }), $(function () { if (document.getElementById("price-range")) { var a = document.getElementById("price-range"); noUiSlider.create(a, { connect: !0, behaviour: "tap", start: [500, 4e3], range: { min: [0], "10%": [500, 500], "50%": [4e3, 1e3], max: [1e4] } }); var b = [document.getElementById("lower-value"), document.getElementById("upper-value")]; a.noUiSlider.on("update", function (c, a, d, e, f) { b[a].innerHTML = c[a] }) } }), $(".have-btn").on("click", function (a) { a.preventDefault(), $(".have-btn span").text(function (b, a) { return "Have a Coupon?" === a ? "Close Coupon" : "Have a Coupon?" }), $(".cupon-code").fadeToggle("slow") }), $(".load-more-btn").on("click", function (a) { a.preventDefault(), $(".load-product").fadeIn("slow"), $(this).fadeOut() }); var c, d = document.getElementsByClassName("quantity-container"); function e(a) { var d = a.getElementsByClassName("quantity-amount")[0], b = a.getElementsByClassName("increase")[0], c = a.getElementsByClassName("decrease")[0]; b.addEventListener("click", function () { f(d) }), c.addEventListener("click", function () { g(d) }) } function f(a) { c = parseInt(a.value, 10), console.log(a, a.value), c = isNaN(c) ? 0 : c, c++, a.value = c } function g(a) { (c = isNaN(c = parseInt(a.value, 10)) ? 0 : c) > 0 && c--, a.value = c } !function () { for (var a = 0; a < d.length; a++)e(d[a]) }() })
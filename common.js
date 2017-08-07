(function () {
    $(function (window) {
        var cover = document.createElement('div');
        cover.className = 'cover';
        var navbar = document.querySelector('.navbar-header');
        navbar.appendChild(cover);
        var cover = document.querySelector('.cover');
        var btn = document.querySelector('#navbar_toggle');
        var nav = document.querySelector(".nav");
        var body = document.querySelector('body');
        var scroll = document.querySelector('.scroll');
        btn.addEventListener('click', function () {
            scroll.style.display = 'block';
            var isDisplay = getCSSValue(cover, 'display')
            if (isDisplay == 'none') {
                cover.style.display = 'block';
                nav.style.display = 'block';
//              $("body,html").css({"overflow":"hidden"});
            } else {
                cover.style.display = 'none';
                nav.style.display = 'none';
                scroll.style.display = 'none';
//              $("body,html").css({"overflow":"visible"});
            }
        });
        cover.addEventListener('click', function () {
            cover.style.display = "none"
            nav.style.display = 'none';
            $("body,html").css({"overflow": "visible"});
        });

        function getCSSValue(obj, key) { //获取元素CSS值
            if (obj.currentStyle) { //IE
                return obj.currentStyle[key];
            } else { //!IE
                return document.defaultView.getComputedStyle(obj, null)[key];
            }
        }

        // nav hover
        if (isPC()) {
            $('#dropdown').on("mouseover", function () {
                $('#dropdown-menu').show();
                $('#solution-menu').hide();
                $('#product-dropdown-menu').hide();
                $('#enterprise-menu').hide();
            });
            $('#dropdown-menu').bind("mouseleave", null, function () {
                $('#dropdown-menu').hide();
            });

            $('#solution').on("mouseover", function () {
                $('#solution-menu').show();
                $('#dropdown-menu').hide();
                $('#product-dropdown-menu').hide();
            });

            $('#solution-menu').bind("mouseleave", null, function () {
                $('#solution-menu').hide();
            });

            $('#enterprise').on("mouseover", function () {
                $('#enterprise-menu').show();
                $('#dropdown-menu').hide();
                $('#product-dropdown-menu').hide();
            });

            // $('#enterprise').on("mouseleave", function () {
            //     $('#enterprise-menu').hide();
            // });

            $('#enterprise-menu').bind("mouseleave", null, function () {
                $('#enterprise-menu').hide();
            });

            $('#product-dropdown').on("mouseover", function () {
                $('#product-dropdown-menu').show();
                $('#dropdown-menu').hide();
                $('#solution-menu').hide();
            });

            $('#product-dropdown-menu').bind("mouseleave", null, function () {
                $('#product-dropdown-menu').hide();
            });


            $('.nav > li').not(".dropdown-solution").bind("mouseover", null, function () {
                $('.solution-menu').hide();
                if ($(document).scrollTop() <= 0) {
                    $('nav').removeClass("nav-scroll")
                }
            });
        }

        // nav scroll
        $(document).on("scroll", function () {
            if ($(document).scrollTop() <= 0) {
                $("#nav").removeClass("nav-scroll");
            } else {
                $("#nav").addClass("nav-scroll");
            }
        });

        // footer
        $(function () {
            var image = '<img src="pics/qr-winxin.png">';
            $('.wechat-qrcode')
                .popover({placement: 'top', content: image, html: true});
        });

        $(".starfield").starfield({
            starColor: "rgba(255,255,255,1)",
            fps: 30,
            speed: 1,
            mouseSpeed: 10,
            quantity: 1e3,
            "class": "starfield"
        });
    })
})(window);

function bindEvent() {
    var w = window.innerWidth;
    var flag = false;
    $('#dropdown-click').on('click', function () {
        if (w < 769 && flag == false) {
            $('#dropdown').css({
                'height': '230px'
            })
            $('#dropdown-menu').show()
            flag = true;
        } else if (w < 769 && flag == true) {
            $('#dropdown').css({
                'height': '38px'
            })
            $('#dropdown-menu').hide()
            flag = false;
        }
    })
    $('.dropdown-about').on('click', function () {
        if (w < 769 && flag == false) {
            $('#solution').css({
                'height': '180px'
            })
            $('.solution-menu').show()
            flag = true;
        } else if (w < 769 && flag == true) {
            $('#solution').css({
                'height': '38px'
            })
            $('.solution-menu').hide()
            flag = false;
        }
    })

}

if (!isPC()) {
    bindEvent();
    $(window).resize(function () {
        bindEvent();
    });
}

function isPC() {
    var userAgentInfo = navigator.userAgent;

    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
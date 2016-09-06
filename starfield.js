(function($, t, e, i) {
    var n = function(t, e) {
        this.el = t,
            this.$el = $(t),
            this.options = e,
            that = this
    }
        , s, a = !1, r = !1, o;
    !function() {
        for (var e = 0, i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n)
            t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"],
                t.cancelAnimationFrame = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"];
        t.requestAnimationFrame || (t.requestAnimationFrame = function(i, n) {
                var s = (new Date).getTime()
                    , a = Math.max(0, 16 - (s - e))
                    , r = t.setTimeout(function() {
                    i(s + a)
                }, a);
                return e = s + a,
                    r
            }
        ),
        t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }
        )
    }(),
        n.prototype = {
            defaults: {
                starColor: "rgba(255,255,255,1)",
                bgColor: "rgba(0,0,0,1)",
                mouseMove: !0,
                mouseSpeed: 20,
                fps: 50,
                speed: 2,
                quantity: 912,
                ratio: 256,
                divclass: "starfield"
            },
            resizer: function() {
                var t = this.star
                    , e = this.context.canvas.width
                    , i = this.context.canvas.height;
                this.w = this.$el.width(),
                    this.h = this.$el.height(),
                    this.x = Math.round(this.w / 2),
                    this.y = Math.round(this.h / 2),
                    this.portrait = this.w < this.h;
                var n = this.w / e
                    , s = this.h / i;
                this.context.canvas.width = this.w,
                    this.context.canvas.height = this.h;
                for (var a = 0; a < this.n; a++)
                    this.star[a][0] = t[a][0] * n,
                        this.star[a][1] = t[a][1] * s,
                        this.star[a][3] = this.x + this.star[a][0] / this.star[a][2] * this.star_ratio,
                        this.star[a][4] = this.y + this.star[a][1] / this.star[a][2] * this.star_ratio;
                that.context.fillStyle = that.settings.bgColor,
                    this.context.strokeStyle = this.settings.starColor
            },
            init: function() {
                this.settings = $.extend({}, this.defaults, this.options);
                var n = e.location.href;
                this.n = parseInt(-1 !== n.indexOf("n=") ? n.substring(n.indexOf("n=") + 2, -1 !== n.substring(n.indexOf("n=") + 2, n.length).indexOf("&") ? n.indexOf("n=") + 2 + n.substring(n.indexOf("n=") + 2, n.length).indexOf("&") : n.length) : this.settings.quantity),
                    this.flag = !0,
                    this.test = !0,
                    this.w = 0,
                    this.h = 0,
                    this.x = 0,
                    this.y = 0,
                    this.z = 0,
                    this.star_color_ratio = 0,
                    this.star_x_save = 0,
                    this.star_y_save = 0,
                    this.star_ratio = this.settings.ratio,
                    this.star_speed = this.settings.speed,
                    this.star_speed_save = 0,
                    this.star = new Array(this.n),
                    this.color = this.settings.starColor,
                    this.opacity = .1,
                    this.cursor_x = 0,
                    this.cursor_y = 0,
                    this.mouse_x = 0,
                    this.mouse_y = 0,
                    this.canvas_x = 0,
                    this.canvas_y = 0,
                    this.canvas_w = 0,
                    this.canvas_h = 0,
                    this.fps = this.settings.fps,
                    this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/),
                    this.orientationSupport = t.DeviceOrientationEvent !== i,
                    this.portrait = null ;
                var s = function() {
                        that.w = that.$el.width(),
                            that.h = that.$el.height(),
                            that.initW = that.w,
                            that.initH = that.h,
                            that.portrait = that.w < that.h,
                            that.wrapper = $("<canvas />").addClass(that.settings.divclass),
                            that.wrapper.appendTo(that.el),
                            that.starz = $("canvas", that.el),
                        that.starz[0].getContext && (that.context = that.starz[0].getContext("2d"),
                            r = !0),
                            that.context.canvas.width = that.w,
                            that.context.canvas.height = that.h
                    }
                    ;
                s();
                var o = function() {
                        if (r) {
                            that.x = Math.round(that.w / 2),
                                that.y = Math.round(that.h / 2),
                                that.z = (that.w + that.h) / 2,
                                that.star_color_ratio = 1 / that.z,
                                that.cursor_x = that.x,
                                that.cursor_y = that.y;
                            for (var t = 0; t < that.n; t++)
                                that.star[t] = new Array(5),
                                    that.star[t][0] = Math.random() * that.w * 2 - 2 * that.x,
                                    that.star[t][1] = Math.random() * that.h * 2 - 2 * that.y,
                                    that.star[t][2] = Math.round(Math.random() * that.z),
                                    that.star[t][3] = 0,
                                    that.star[t][4] = 0;
                            that.context.fillStyle = that.settings.bgColor,
                                that.context.strokeStyle = that.settings.starColor
                        }
                    }
                    ;
                o(),
                    a = !0
            },
            anim: function() {
                this.mouse_x = this.cursor_x - this.x,
                    this.mouse_y = this.cursor_y - this.y,
                    this.context.fillRect(0, 0, this.w, this.h);
                for (var t = 0; t < this.n; t++)
                    this.test = !0,
                        this.star_x_save = this.star[t][3],
                        this.star_y_save = this.star[t][4],
                        this.star[t][0] += this.mouse_x >> this.settings.mouseSpeed,
                    this.star[t][0] > this.x << 1 && (this.star[t][0] -= this.w << 1,
                        this.test = !1),
                    this.star[t][0] < -this.x << 1 && (this.star[t][0] += this.w << 1,
                        this.test = !1),
                        this.star[t][1] += this.mouse_y >> this.settings.mouseSpeed,
                    this.star[t][1] > this.y << 1 && (this.star[t][1] -= this.h << 1,
                        this.test = !1),
                    this.star[t][1] < -this.y << 1 && (this.star[t][1] += this.h << 1,
                        this.test = !1),
                        this.star[t][2] -= this.star_speed,
                    this.star[t][2] > this.z && (this.star[t][2] -= this.z,
                        this.test = !1),
                    this.star[t][2] < 0 && (this.star[t][2] += this.z,
                        this.test = !1),
                        this.star[t][3] = this.x + this.star[t][0] / this.star[t][2] * this.star_ratio,
                        this.star[t][4] = this.y + this.star[t][1] / this.star[t][2] * this.star_ratio,
                    this.star_x_save > 0 && this.star_x_save < this.w && this.star_y_save > 0 && this.star_y_save < this.h && this.test && (this.context.lineWidth = 2 * (1 - this.star_color_ratio * this.star[t][2]),
                        this.context.beginPath(),
                        this.context.moveTo(this.star_x_save, this.star_y_save),
                        this.context.lineTo(this.star[t][3], this.star[t][4]),
                        this.context.stroke(),
                        this.context.closePath())
            },
            loop: function() {
                this.anim(),
                    o = setTimeout(function() {
                        t.requestAnimationFrame(function() {
                            that.loop()
                        })
                    }, 1e3 / this.settings.fps)
            },
            move: function() {
                function i(t) {
                    if (null !== t.beta && null !== t.gamma) {
                        var e = t.gamma
                            , i = t.beta;
                        that.portrait || (e = -1 * t.beta,
                            i = t.gamma),
                            that.cursor_x = that.w / 2 + 5 * e,
                            that.cursor_y = that.h / 2 + 5 * i
                    }
                }
                function n(t) {
                    that.cursor_x = t.pageX || t.clientX + s.scrollLeft - s.clientLeft,
                        that.cursor_y = t.pageY || t.clientY + s.scrollTop - s.clientTop
                }
                var s = e.documentElement;
                this.orientationSupport && !this.desktop && $(t).width() < 600 ? t.addEventListener("deviceorientation", i, !1) : t.addEventListener("mousemove", n, !1)
            },
            stop: function() {
                t.cancelAnimationFrame(o),
                    s = !1
            },
            start: function() {
                return a || (a = !0,
                    this.init()),
                s || (s = !0,
                    this.loop()),
                    t.addEventListener("resize", function() {
                        that.resizer()
                    }, !1),
                    t.addEventListener("orientationchange", function() {
                        that.resizer()
                    }, !1),
                this.settings.mouseMove && this.move(),
                    this
            }
        },
        n.defaults = n.prototype.defaults,
        $.fn.starfield = function(t) {
            return this.each(function() {
                new n(this,t).start()
            })
        }
        ,
        t.Starfield = n
})(jQuery, window, document);

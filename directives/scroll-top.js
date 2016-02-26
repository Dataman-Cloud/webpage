/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .directive('scrollTop', scrollTop);
    scrollTop.$inject = ['$window'];

    function scrollTop($window) {
        return function (scope, elm, attr) {
            angular.element($window).bind("scroll", function () {
                if ($(document).scrollTop() <= 0) {
                    $("#nav").removeClass("nav-scroll");
                } else {
                    $("#nav").addClass("nav-scroll");
                }
            });
        }
    }
})();
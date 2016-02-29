/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .directive('solution', solution);
    solution.$inject = [];

    function solution() {
        return function (scope, elm, attr) {
            elm.on("mouseover", function () {
                $('#solution-menu').show();
                $('nav').addClass("nav-scroll")
            });

            $('#solution-menu').bind("mouseleave", null, function () {
                $('#solution-menu').hide();
                if($(document).scrollTop() <= 0){
                    $('nav').removeClass("nav-scroll")
                }
            });

            $('.nav > li').not("#dropdown-solution").bind("mouseover", null, function () {
                $('#solution-menu').hide();
                if($(document).scrollTop() <= 0){
                    $('nav').removeClass("nav-scroll")
                }
            });
        }

    }
})();
/**
 * Created by my9074 on 16/2/23.
 */
(function() {
	'use strict';
	angular.module('webpage')
		.directive('navbarOnload', navbarOnload);

	function navbarOnload() {
		return {
			restrict: 'A',
			link: function($scope, elem, attrs) {
				elem.ready(function() {
					var cover = document.createElement('div');
					cover.className = 'cover';
					var navbar = document.querySelector('.navbar-header');
					navbar.appendChild(cover);
					var cover = document.querySelector('.cover');
					var btn = document.querySelector('#navbar_toggle');
					var nav = document.querySelector(".nav");
					btn.addEventListener('click', function() {
						var isDisplay = getCSSValue(cover, 'display')
						if (isDisplay == 'none') {
							cover.style.display = 'block';
							nav.style.display = 'block';
						} else {
							cover.style.display = 'none';
							nav.style.display = 'none';
						}
					});
					cover.addEventListener('click', function() {
						cover.style.display = "none"
						nav.style.display = 'none';
					})
					var drop = document.querySelector('#dropdown_click');
					var menu = document.querySelector('#solution-menu');
					drop.onclick = function(event) {
						event.stopPropagation();
						var notDisplay = getCSSValue(menu, 'display');
						if (notDisplay == 'none') {
							menu.style.display = 'block';
						} else {
							menu.style.display = 'none';
						}
					}

					function getCSSValue(obj, key) { //获取元素CSS值
						if (obj.currentStyle) { //IE
							return obj.currentStyle[key];
						} else { //!IE
							return document.defaultView.getComputedStyle(obj, null)[key];
						}
					}
				})
			}
		}
	}
})();
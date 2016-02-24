(function () {
    'use strict';

    angular.module('webpage').factory('loginService', loginService);

    loginService.$inject = ['webHttp', 'authBackend', '$cookies', '$window'];

    function loginService(webHttp, authBackend, $cookies, $window) {

        return {
            login: login
        };

        //////////

        function login(userData) {
            authBackend.login(userData).then(function (data) {
                var token = '\"' + data.token + '\"';
                $cookies.put('token', token, undefined, '/',  CONFIG.domain, undefined);
                $window.location.href = CONFIG.dashboard;
            }, function (res) {
                // TODO
            });
        };

    }
})();
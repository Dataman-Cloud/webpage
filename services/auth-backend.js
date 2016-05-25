(function () {
    'use strict';

    angular.module('webpage').factory('authBackend', authBackend);

    authBackend.$inject = ['webHttp', '$http'];

    function authBackend(webHttp, $http) {

        return {
            register: register,
            active: active,
            resetPassword: resetPassword,
            login: login,
            getNotice: getNotice,
            forgotPassword: forgotPassword,
            sendNewPassword: sendNewPassword,
            fetchVersion: fetchVersion,
            getCustomerServiceLoginUrl: getCustomerServiceLoginUrl,
            sendActiveMail: sendActiveMail,
            groupActive: groupActive
        };

        //////////

        function register(params, invalideCallback) {
            return webHttp.Resource('user.register').post(params, {'invalideCallback': invalideCallback});
        }

        function active(activeCode) {
            return webHttp.Resource('user.active', {active_code: activeCode}).put();
        }

        function resetPassword(resetCode) {
            return webHttp.Resource('user.resetPassword', {reset_code: resetCode}).get();
        }

        function login(params, invalideCallback) {
            return webHttp.Resource('user.login').post(params, {invalideCallback: invalideCallback});
        }

        function getNotice() {
            return webHttp.Resource('notice.notice').get();
        }

        function forgotPassword(params, invalideCallback) {
            return webHttp.Resource('user.forgotPassword').post(params, {'invalideCallback': invalideCallback});
        }

        function sendNewPassword(resetCode, params) {
            return webHttp.Resource('user.resetPassword', {reset_code: resetCode}).put(params);
        }

        function fetchVersion(versionName) {
            return $http({
                method: 'GET',
                url: webHttp.buildFullURL('version.' + versionName),
                cache: false
            })
        }
        
        function getCustomerServiceLoginUrl(token, returnTo) {
            webHttp.setToken(token);
            return webHttp.Resource('user.customerservice').get({'params': {'return_to': returnTo}, 'isAuth': true});
        }

        function sendActiveMail(email) {
            return webHttp.Resource('user.sendActiveMail').post({email: email});
        }

        function groupActive(activeCode) {
            return webHttp.Resource('user.groupActive', {active_code: activeCode}).put();
        }

    }
})();
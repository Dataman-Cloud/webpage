/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['loginService', '$location', '$scope', '$state', 'authBackend'];

    function LoginCtrl(loginService, $location, $scope, $state, authBackend) {
        var self = this;
        self.loginData = {};
        var returnTo = $location.search()['return_to'];
        
        setNotice();

        self.login = function () {
            loginService.login(self.loginData, returnTo, $scope.staticForm)
                .then(function () {
                    
                }, function (res) {
                    if (res.code === MESSAGE_CODE.needActive) {
                        $state.get('needActive').data.email = self.loginData.email;
                        $state.go('needActive');
                    }
                })
        };
        
        $("[data-toggle='popover']").popover();
        
        function setNotice() {
            authBackend.getNotice()
            .then(function(data) {
                if (data) {
                    self.notice = data.content;
                }
            });
        }
    }
})();
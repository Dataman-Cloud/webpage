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
        
        self.formErrorMsg = {
                email: {
                    required: "邮箱不能为空",
                    email: "邮箱格式不正确",
        
                },
                password: {
                    required: "密码不能为空"
                }
        }

        self.login = function () {
            function setErrors (errors) {
                $scope.staticForm.$dmSetErrors({email: "邮箱或密码错误"})
            }
            loginService.login(self.loginData, returnTo, setErrors)
                .then(function () {
                    
                }, function (res) {
                    if (res.code === MESSAGE_CODE.needActive) {
                        $state.get('needActive').data.email = self.loginData.email;
                        $state.go('needActive');
                    }
                })
        };
        
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
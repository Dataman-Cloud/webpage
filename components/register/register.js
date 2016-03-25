/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['authBackend', '$state', '$rootScope', 'emailService', '$scope'];

    function RegisterCtrl(authBackend, $state, $rootScope, emailService, $scope) {
        var self = this;
        self.registerDataMan = registerDataMan;
        
        self.formErrorMsg = {
                email: {
                    required: "请输入您的邮箱",
                    email: "邮箱格式不正确",
        
                },
                company: {
                    required: "请输入公司名称"
                },
                weixin: {
                    required: "请输入微信或QQ号"
                },
                phone: {
                    pattern: "手机格式不正确"
                },
                password: {
                    required: "请输入密码",
                    regexValidator: "密码只能包含英文字母、数字、标点符号且必须包含大写字母，长度为8-16位。",
                    
                },
                rePassword: {
                    checkrepeat: "密码不一致",
                    required: "请再次输入密码"
                }
        }
        
        function registerDataMan() {
            authBackend.register(self.register, $scope.staticForm.$dmSetErrors).then(function (data) {
                $rootScope.emailHref = emailService.emailUrl(self.register.email);
                $state.go('registerSuccess');
            }, function (res) {

            })
        }
    }
})();
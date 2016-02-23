/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['authBackend'];

    function RegisterCtrl(authBackend) {
        var self = this;
        self.registerDataMan = function () {
            authBackend.register(self.register).then(function (data) {
                alert('注册成功,请前往邮箱激活');
                //TO DO
            }, function (res) {
                alert(res);
                //TO DO
            })
        }
    }
})();
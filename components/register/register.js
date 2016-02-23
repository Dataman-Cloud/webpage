/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['webHttp'];

    function RegisterCtrl(webHttp) {
        var self = this;
        self.registerDataMan = function () {
            webHttp.Resource('user.register').post(self.register).then(function (data) {
                alert('注册成功,请前往邮箱激活');
                //TO DO
            }, function (code, data) {
                alert(data);
                //TO DO
            })
        }
    }
})();
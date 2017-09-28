/**
 * Created by geng on 16/6/7.
 */

BACKEND_URL = {
    version: {
        agent: 'omega-agent',
        app: 'omega-app',
        cluster: 'omega-cluster',
        frontend: 'frontend',
        metrics: 'omega-metrics',
        webpage: 'webpage',
        es: 'omega-es',
        harbor: 'harbor',
        drone: 'drone',
        alert: 'sryun-alert',
        billing: 'omega-billing'
    }
};
FRONTEND_URL = {
    login: CONFIG.dashboard + "auth/login",
    register: CONFIG.dashboard + "auth/register",
    demo: CONFIG.dashboard + "auth/demoLogin",
};

var login = $('a[data-ng-href="{/FRONTEND_URL.login/}"]');
var register = $('a[data-ng-href="{/FRONTEND_URL.register/}"]');
var demo = $('a[data-ng-href="{/FRONTEND_URL.demo/}"]');
login.each(function () {
    this.href = FRONTEND_URL.login;
});
register.each(function () {
    this.href = FRONTEND_URL.register;
});
demo.each(function () {
    this.href = FRONTEND_URL.demo;
});


// 获取并设置version
fetchVersion()
function fetchVersion() {
    var versions = '';
    var frontendVersion = '';
    $.each(BACKEND_URL.version, function(key, value) {
        $.get(getUrlTemplate('version.'+ key), function (data) {
            versions += value + ':' + data + '\n';
            if (key === 'frontend') {
                frontendVersion = data;
            }
        })
    });

}

function getUrlTemplate(name) {
    var confs = name.split('.');
    var categoryKey = confs[0];
    var detailKey = confs[1];
    var base;
    if(BACKEND_URL_BASE[categoryKey]){
        base = BACKEND_URL_BASE[categoryKey];
    } else {
        base = BACKEND_URL_BASE.defaultBase;
    }
    return base + BACKEND_URL[categoryKey][detailKey];
}

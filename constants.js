BACKEND_URL = {
    user: {
        login: 'api/v3/auth',
        register: 'api/v3/auth/user/registration',
        active: 'api/v3/auth/user/activation/$active_code',
        sendActiveMail: 'api/v3/auth/user/activation',
        forgotPassword: 'api/v3/auth/password/reseturl',
        resetPassword: 'api/v3/auth/password/$reset_code',
        customerservice: 'api/v3/customerservice_url'
    },
    version: {
        agent: 'omega-agent',
        app: 'omega-app',
        cluster: 'omega-cluster',
        frontend: 'omega-frontend',
        metrics: 'omega-metrics',
        webpage: 'omega-webpage'
    },
    notice: {
        notice: 'api/v3/notice'
    }
};

MESSAGE_CODE = {
    dataInvalid:10001,
    needActive: 11005
};

DOCADDRESS = {
    offline: 'http://offlinedoc.shurenyun.com/',
    online: 'http://doc.shurenyun.com'
};
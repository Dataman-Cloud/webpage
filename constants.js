BACKEND_URL = {
    user: {
        login: 'api/v2/auth',
        register: 'api/v2/auth/user/registration',
        active: 'api/v2/auth/user/activation/$active_code',
        activeAgain: 'api/v2/auth/user/activation',
        forgotPassword: 'api/v2/auth/password/reseturl',
        resetPassword: 'api/v2/auth/password/$reset_code',
        customerservice: 'api/v2/customerservice'
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
        notice: 'api/v2/notice'
    }
};
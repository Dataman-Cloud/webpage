CONFIG = {
    environment: 'ENVIRONMENT', //dev, demo, prod
    is_offline: OFFLINE, //set true or false
    backendUrlBase: {
        user: {
            userBase: 'APIURL/',
            dashboard: 'DASHBOARD/',
            domain: 'BODY_DOMAIN',
            demoUser: 'DEMO_USER'
        },
        version: {
            base: 'MARKET' + '/version/',
        }
    }
};
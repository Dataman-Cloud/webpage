CONFIG = {
    environment: 'ENVIRONMENT', //dev, demo, prod
    is_offline: OFFLINE, //set true or false
    dashboard: 'DASHBOARD/',
    domain: 'BODY_DOMAIN',
    demoUser: 'DEMO_USER'
};

BACKEND_URL_BASE = {
    defaultBase: 'APIURL/',
    version: 'MARKET' + '/version/' + CONFIG.environment + "-"
};

USE_LDAP = IS_USE_LDAP; //set true or false;

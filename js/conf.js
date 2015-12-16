CONFIG = {
  environment:"ENVIRONMENT", //dev, demo, prod
  urls: {
    baseUrl: "DASHBOARD/",
    redirectUrl: "DASHBOARD/",
    loginUrl: 'api/v2/auth',
    registerUrl: 'api/v2/auth/user/registration',
    domainUrl: "BODY_DOMAIN",
    resetPasswordUrl: "api/v2/auth/password/reseturl",
    verifyMailAddress: "api/v2/auth/password/$reset_code",
    activeUrl: "api/v2/auth/user/activation/$active_code",
    activeMailUrl: "api/v2/auth/user/activation",
    _versionBaseUrl: "MARKET" + "/version/",
    versionUrl: {
      agent: "omega-agent",
      app: "omega-app",
      cluster: "omega-cluster",
      frontend: "omega-frontend",
      metrics: "omega-metrics"
    }
  }
};

(function() {
    'use strict';
    
    angular.module('webpage').factory('webHttp', webHttp);

    webHttp.$inject = ['$q', '$rootScope', '$http'];
    function webHttp($q, $rootScope, $http) {
        var token;
        
        if (!$rootScope.loadings) {
            $rootScope.loadings = {};
        }
        
        var ResourceCls = buildResourceCls();
        
        return {
            setToken: setToken,
            Resource: Resource
        };
        
        function setToken(val) {
            token = val;
        }

        function buildFullURL(name, params) {
            var url = getUrlTemplate(name);
            if (params) {
                $.each(params, function(key, val) {
                    url = url.replace("$" + key, val);
                });
            }
            return url;
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
        
        function Resource(urlName, params) {
            return new ResourceCls(urlName, params);
        }
        
        function buildResourceCls() {
            function Resource(urlName, params) {
                this.url = buildFullURL(urlName, params);
                this.options = {
                    isAuth: false,
                    loading: ''
                }
            }
            
            Resource.prototype.get = function(options) {
                return this.req('get', options);
            };
            
            Resource.prototype.post = function(data, options) {
                if (!options) {
                    options = {};
                }
                options.data = data;
                return this.req('post', options);
            };
            
            Resource.prototype.put = function(data, options) {
                if (!options) {
                    options = {};
                }
                options.data = data;
                return this.req('put', options);
            };
            
            Resource.prototype.delete = function(options) {
                return this.req('delete', options);
            };
            
            Resource.prototype.req = function(method, options) {
                angular.extend(this.options, options);
                var headers = {
                        'Content-Type': 'application/json; charset=UTF-8'
                };
                if (this.options.isAuth) {
                    headers["Authorization"] = token;
                }
                var req = {
                        method: method,
                        url: this.url,
                        headers: headers,
                        cache: false,
                        data: this.options.data,
                        params: this.options.params
                };
                
                this._startLoading(this.options.loading);
                
                var deferred = $q.defer();
                $http(req).success(function (data) {
                    this._stopLoading(this.options.loading);
                    if (data.code) {
                        deferred.reject(data.code, data.data)
                    } else {
                        deferred.resolve(data.data);
                    }
                }.bind(this)).error(function (data, status) {
                    this._stopLoading(this.options.loading);
                    this._handleErrors(status);
                }.bind(this));
                
                return deferred.promise;
                
            };
            
            Resource.prototype._startLoading = function(loading) {
                if (loading) {
                    if (!$rootScope.loadings[loading]) {
                        $rootScope.loadings[loading] = 1;
                    } else {
                        $rootScope.loadings[loading] += 1;
                    }
                }
            };
            
            Resource.prototype._stopLoading = function(loading) {
                if (loading) {
                    $rootScope.loadings[loading] -= 1;
                }
            };

            Resource.prototype._handleErrors = function (status) {
                if (status == 401) {
                    window.location.href = USER_URL;
                    $rootScope.$destroy();
                } else if (status == 404) {
                    $state.go('404');
                } else {
                    alert("服务忙，请稍后再试")
                }
            };
            
            return Resource;
        }
    }
})();
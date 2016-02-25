(function() {
    'use strict';
    
    angular.module('webpage').factory('webHttp', webHttp);

    webHttp.$inject = ['$q', '$rootScope', '$http', '$state'];
    function webHttp($q, $rootScope, $http, $state) {
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
                return this.dataReq('post', data, options);
            };
            
            Resource.prototype.put = function(data, options) {
                return this.dataReq('put', data, options);
            };

            Resource.prototype.patch = function(data, options) {
                return this.dataReq('patch', data, options);
            };
            
            Resource.prototype.delete = function(options) {
                return this.req('delete', options);
            };

            Resource.prototype.dataReq = function(method, data, options) {
                if (!options) {
                    options = {};
                }
                options.data = data;
                if (options.form) {
                    options.form.$setPristine();
                    options.form.message_error_info = undefined;
                }
                var promise = this.req(method, options);
                if (options.form) {
                    promise.catch(function (data) {
                        if(data.code === MESSAGE_CODE.dataInvalid) {
                            options.form.message_error_info = data.data;
                        }
                    });
                }
                return promise;
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
                        deferred.reject(data)
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
                    $state.go('resError');
                }
            };
            
            return Resource;
        }
    }
})();
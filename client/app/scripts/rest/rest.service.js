(function () {
  'use strict';
  angular
    .module("clientApp")
    .service("RestService", service);

  /* @ngInject */
  function service($http) {
    this.get = function (resourceUrl, params, config) {
      config = config || {};
      var baseURL = 'http://localhost:3000/api';

      if (params) {
        config.params = params
      }

      return $http.get(baseURL + resourceUrl, config);
    };

    this.post = function (resourceUrl, data) {
      return $http.post(baseURL + resourceUrl, data);
    };

    this.put = function (resourceUrl, data) {
      return $http.put(baseURL + resourceUrl, data);
    };

    this.delete = function (resourceUrl) {
      return $http.delete(baseURL + resourceUrl);
    };
  }
})();

(function () {
  'use strict';
  angular
    .module("clientApp")
    .service("RestEsbService", service);

  /** @ngInject */
  function service(RestService) {

    this.getUsers = function () {
      return RestService.get('/users')
    };
  }
})();

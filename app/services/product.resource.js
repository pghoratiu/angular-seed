'use strict';

angular.module('myApp.product.resource', ['ngResource', 'ngRoute'])

.factory('gpProductResource', ['$resource', function($resource) {
  return $resource('/product/:id', null, { 'update': { method:'PUT' }});
}]);

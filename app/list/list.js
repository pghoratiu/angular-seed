'use strict';

angular.module('myApp.product.list', ['ngRoute', 'myApp.product.resource'])

.controller('ProductListCtrl', [
  '$scope',
  'gpProductResource', 
  function($scope, gpProductResource) {
  	$scope.products = gpProductResource.query({});
  }
]);
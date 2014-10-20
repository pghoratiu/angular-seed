'use strict';

angular.module('myApp.product.view', ['ngRoute'])

.controller('ProductViewCtrl', [
  '$scope',
  '$routeParams',
  'gpProductResource',

  function($scope, $routeParams, gpProductResource) {
  	$scope.product = gpProductResource.get({'id': $routeParams.id});
  }
]);
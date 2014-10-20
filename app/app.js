'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.product.list',
  'myApp.product.view',
  'myApp.version',
  'ngMockE2E'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/product/list', {
  	templateUrl: 'list/list.html',
  	controller: 'ProductListCtrl'
  });

  $routeProvider.when('/product/view/:id', {
  	templateUrl: 'view/view.html',
  	controller: 'ProductViewCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/product/list'});
}]).
run(['$httpBackend', function($httpBackend) {
   var productData = [
    {
      id: 1,
      name: "Mac",
      price: 1.323
    },
    {
      id: 2,
      name: "PC",    
      price: 12.3232
    },
    {
      id: 3,
      name: "UNIX",
      price: 12.32
    }        
  ];
  $httpBackend.whenGET('/product').respond(function(method, url, data) {
    return [200, productData, {}];
  });

  $httpBackend.whenGET(/\/product\/\d+/).respond(function(method, url, data) {
    var productId = parseInt(url.split('/')[2], 10);
    var product = _.find(productData, { "id": productId });

    if (typeof product === 'undefined')
      return [404, 'Product not found', {}]
    else
      return [200, product, {}];
  });

  $httpBackend.whenGET(/html/i).passThrough();

}]);

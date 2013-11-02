'use strict';

angular.module('frontieApp', [
 'ngCookies',
 'ngResource',
 'ngSanitize',
 'ngMockE2E',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/buy/stocks'
      })
      .when('/buy/stocks', {
        templateUrl: 'views/stocks.html',
        controller: 'StocksCtrl'
      })
      .when('/buy/prices', {
        templateUrl: 'views/prices.html',
        controller: 'PricesCtrl'
      })
      .when('/buy/confirmation', {
        templateUrl: 'views/confirmation.html',
        controller: 'ConfirmationCtrl'
      })
      .when('/mypage/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



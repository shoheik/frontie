'use strict';

angular.module('frontieApp')
.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];
})
.controller('PricesCtrl', function ($scope, $location, dailyPrice, myOrder) {

    $scope.stock = myOrder.getStock();

    // GET /stock/dailyprice
    // TODO - this should be /stock/dailyprice/:tiker
    dailyPrice.get(function(res){
      var ticker = $scope.stock.id + '.' + $scope.stock.exch;
      $scope.cp = res[ticker];
    });

    $scope.selectPrice = function(price){
        myOrder.setPurchasePrice(price);
        myOrder.setSharePrice($scope.cp);
        $location.path('/buy/confirmation');
    };

    $scope.selectCustPrice = function(){
        myOrder.setPurchasePrice($scope.cust_price);
        myOrder.setSharePrice($scope.cp);
        $location.path('/buy/confirmation');
    };
})
.controller('AccountCtrl', function ($scope, myStockList, $location, purchaseHistory) {
  var uid = 1; // TODO uid should be obtained from server
  $scope.stockList = myStockList.get();
  $scope.history = purchaseHistory.get(uid);
})
.controller('ConfirmationCtrl', function ($scope, myOrder, $location, purchaseHistory, myStockList) {
    $scope.stock = myOrder.getStock();
    $scope.price = myOrder.getPurchasePrice() + "円";

    $scope.confirmOrder = function(){
      purchaseHistory.addBuyOrder(myOrder.getOrder());
      myStockList.addBuyOrder(myOrder.getOrder());
      $location.path('/mypage/account');
    }
})
.controller('StocksCtrl', function ($scope, $resource, $location, stockList, myOrder) {

  // initialize order when started
  myOrder.init();

  // GET /stock/list
  stockList.query(function(res){
    $scope.stocks = res;
  });

  $scope.selectStock = function($index){
    myOrder.setStock($scope.stocks[$index]);
    $location.path('/buy/prices');
  };

});

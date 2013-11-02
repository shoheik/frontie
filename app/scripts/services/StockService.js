'use strict';


angular.module('frontieApp')
.factory ('stockList', function($resource){
    return $resource('stock/list');
})
.factory ('dailyPrice', function($resource){
    return $resource('stock/dailyprice/');
})
.factory('myStockList', function () {
    //  default value
    var stockList = [
        { ticker: "FB.NYSE", img: "images/facebook.jpg", name : "Facebook", volume: 1.03,  shareValue: 51.24, sharePrice: 49.75},
        { ticker: "GOOG.NYSE", img: "images/google.jpg", name : "Google", volume: 0.035, shareValue: 35.95, sharePrice: 1027.04 }
    ];
    return {
        addBuyOrder: function(order){

            var ticker = order.stock.id + '.' + order.stock.exch;
            for (var i in stockList ){
               if ( stockList[i].ticker == ticker){
                    console.log(stockList[i]);
                    console.log(stockList[i].ticker);
                    var v = order.purchasePrice / order.sharePrice;
                    stockList[i].volume += v;
                    stockList[i].shareValue =  stockList[i].volume * order.sharePrice;
                    return;
               }
            }

            var stock = {};
            stock.name = order.stock.name;
            stock.ticker = ticker;
            stock.img = order.stock.img;
            stock.volume =  order.purchasePrice / order.sharePrice;
            //stock.volume = stock.volume.toFixed(3) - 0;
            stock.sharePrice = order.sharePrice;
            stock.shareValue = stock.volume *  stock.sharePrice;
            //stock.shareValue = stock.shareValue.toFixed(3);
            // 1: 5000(sharePrice) = x : 500(purchasePrice)
            // x = 500 / 5000 = 0.1
            stockList.push(stock);
        },
        add: function(stockInfo){
            stockList.push(stockInfo);
        },
        get: function(){
            return stockList;
        }
    };
});

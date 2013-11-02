'use strict';

angular.module('frontieApp')
.factory('purchaseHistory', function (){

    //TODO: this should be obatined from server
    var myHistory = [
        {date: '2013/09/12 3:00:00', name: "Facebook", orderType: "購入", volume: 1.03, sharePrice: 30},
        {date: '2013/10/10 18:00:00', name: "Google", orderType: "売却", volume: 0.035, sharePrice: 1000}
    ];

    return {
        addBuyOrder: function(order){
            this.addOrder(order, "購入");
        },
        addOrder: function(order, type){

            var d = new Date();
            var dt = d.toLocaleString();
            var volume =  order.purchasePrice / order.sharePrice;
            //volume = volume.toFixed(3);
            myHistory.push({
                finalized: false,
                date: dt,
                name: order.stock.name,
                orderType: type,
                volume: volume ,
                sharePrice: order.sharePrice
            });
        },
        get: function(id){
           return  myHistory;
        }
    };
})
.factory('myOrder', function () {
    var order = {};
    return {
        init: function () {
            order = {};
        },
        setStock: function(stock){
            order.stock = stock;
        },
        getStock: function(){
            return order.stock;
        },
        setPurchasePrice: function(price){
           order.purchasePrice = price;
        },
        getPurchasePrice: function(){
           return order.purchasePrice;
        },
        setSharePrice: function(sharePrice){
            order.sharePrice = sharePrice;
        },
        getOrder: function(){
           return order;
        },
    };
});



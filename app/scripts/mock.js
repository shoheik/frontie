'use strict';

angular.module('frontieApp')
.run(function($httpBackend){
    // No need to deal with tempaltes
    $httpBackend.whenGET(/^views\//).passThrough();

     var stockList = [
        { id: "APPL", exch:"NYSE", img: "images/apple.gif", name : "Apple" },
        { id: "GOOG", exch:"NYSE", img: "images/google.jpg", name : "Google" },
        { id: "AMZN", exch:"NYSE", img: "images/amazon.jpg", name : "Amazon" },
        { id: "FB", exch:"NYSE", img: "images/facebook.jpg", name : "Facebook" },
        { id: "6758", exch:"TSE", img: "images/sony.png", name : "Sony" },
        { id: "IBM", exch:"NYSE", img: "images/ibm.gif", name : "IBM" },
        { id: "DELL", exch:"NYSE", img: "images/dell.png", name : "Dell" },
        { id: "4755", exch:"TSE", img: "images/rakuten.png", name : "Rakuten" },
        { id: "9983", exch:"TSE", img: "images/uniqlo.png", name : "UNIQLO(First Retailing)" },
        { id: "SBUX", exch:"NASDAQ", img: "images/starbucks.gif", name : "Starbucks" },
        { id: "9", exch:"NOT_LISTED", img: "images/paulsmith.gif", name : "PaulSmith" },
        { id: "10", exch:"NOT_LISTED", img: "images/zara.jpeg", name : "Zara" }
    ];

    var dailyPrice = {
       'APPL.NYSE': 520.03,
       'GOOG.NYSE': 1027.04,
       'AMZN.NYSE': 359.00,
       'FB.NYSE': 49.75,
       '6758.TSE': 1668.00,
       'IBM.NYSE': 179.23,
       'DELL.NYSE': 13.86,
       '4755.TSE': 1309.00,
       '9983.TSE': 32650.00,
       'SBUX.NASDAQ': 80.37,
       '9.NOT_LISTED': 100,
       '10.NOT_LISTED': 200
    };

    $httpBackend.whenGET('stock/list').respond(stockList);
    $httpBackend.whenGET('stock/dailyprice').respond(dailyPrice);
    $httpBackend.whenGET('user/history?uid=1').respond(dailyPrice);
    $httpBackend.whenGET('user/stocks?uid=1').respond(dailyPrice);

});

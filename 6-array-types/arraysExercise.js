// Part 1 & 2
var ages = [];
var gameBoard = [];
var getTotal = function (products) {
    var total = 0;
    products.forEach(function (product) {
        total += product.price;
    });
    return total;
};
var product1 = {
    name: 'mug',
    price: 100
};
var product2 = {
    name: 'house',
    price: 104440
};
var product3 = {
    name: 'phone',
    price: 2400
};
var productArr = [];
productArr.push(product1, product2, product3);
console.log(getTotal(productArr));

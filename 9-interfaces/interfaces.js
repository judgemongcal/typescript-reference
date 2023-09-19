// Interfaces
var pt = { x: 445, y: 5535 };
var tom = {
    id: 1,
    first: "tom",
    last: "doe",
    sayHi: function () {
        return "Hi, ".concat(tom.first);
    },
};
var thom = {
    id: 2,
    first: "thom",
    last: "doe",
    nickname: "Thomas",
    sayHi: function () {
        return "Hi, ".concat(thom.first);
    },
};
thom.first = "joe";
var shoes = {
    name: "blue",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        return newPrice;
    },
};
console.log(shoes.applyDiscount(0.5));

// Part 1 & 2
const ages: number[] = [];
const gameBoard: string[][] = [];

// Part 3
type Product = {
    name: string,
    price: number
};

const getTotal = (products : Product[]) => {
    let total: number = 0;
    products.forEach((product) => {
        total += product.price
    });

    return total;
};

const product1 : Product = {
    name: 'mug',
    price: 100
};
const product2 : Product = {
    name: 'house',
    price: 104440
};
const product3 : Product = {
    name: 'phone',
    price: 2400
};

const productArr : Product[] = [];
productArr.push(product1, product2, product3);

console.log(getTotal(productArr));
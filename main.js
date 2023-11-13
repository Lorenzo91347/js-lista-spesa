'use strict'

// selection of the 'ul' and creation of the array

const list = document.querySelector('.list');
const shopping = [
    'Bread',
    'Milk',
    'Apples',
    'Salad',
    'Wine',
    'Cake',
    'Towels',
    'Salt'
];

// Defining 'n'

let n = 0;

// While Loop

while (n < shopping.length - 1) {
    console.log(shopping[n]);
    n++;

    // 'li' creation and append

    const product = document.createElement('li');
    product.classList.add('product');
    product.textContent = (shopping[n].toUpperCase());
    list.append(product);
};

// main application app.js. product.js is in the same folder so use ./  back a folder ../
// import necessary modules
//Import necessary modules
const product =  require('./product');
const cart = require('./cart');
const calculateTotal = require('./order');
const products = require('./product');


//Add products to the cart
cart.addToCart(products[0]);
cart.addToCart(products[2]);

//Display the cart items
console.log('Cart Items', cart.getCartItems());

//Calculate and siplay the order amount
const totalAmount = calculateTotal(cart.getCartItems());
console.log('Total order amount', totalAmount);
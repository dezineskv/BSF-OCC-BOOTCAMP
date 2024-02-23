// per requirements
let shirt = 17;
let shoes = 65;
let pants = 49;
let sunglasses = 13;
let cart = (shirt * 2) + shoes + pants + (sunglasses * 3);
let total = cart *.10;
cart -= total;
console.log("Total: $", cart)
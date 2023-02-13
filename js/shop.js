// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var counter = 0;
var total = 0;

// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
function buy(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
            counter++;
        }   
    }
    document.getElementById("count_product").innerHTML = counter;
}

// Exercise 2
function cleanCart() {
    cart.length = 0;
    cartList.length = 0;
    counter = 0;
    printCart();
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array
function calculateTotal() {
    total = 0;
    for (var i = 0; i < cartList.length; i++) {
            total += cartList[i].price;
        }
        
    }


// Exercise 4
 // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

function generateCart(cartList) {

    for (var i = 0; i < cartList.length; i++) {
        const result = cart.findIndex(product => product.id == cartList[i].id);
        if (result === -1) {
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].price; 
            cartList[i].subtotalWithDiscount = 0;
            cart.push(cartList[i]);
            
        } else if (result >= 0) {
            cart[result].quantity += 1;
            cart[result].subtotal = cart[result].quantity * cart[result].price;
        }
    }
    calculateTotal();
    cartList.length = 0;
}
   
// Exercise 5
function applyPromotionsCart(cart) {
    // Apply promotions to each item in the array "cart"
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === 1 && cart[i].quantity >= 3) {
            let discPrice1 = 10;
            cart[i].subtotalWithDiscount = discPrice1 * cart[i].quantity;
        } else if (cart[i].id === 3 && cart[i].quantity >= 10) {
            let discPrice2 = (cart[i].price / 3) * 2;
            cart[i].subtotalWithDiscount = (discPrice2 * cart[i].quantity).toPrecision(4);
        }
    }
}

// Exercise 6
function printCart() {
    var toPay = 0;
    document.getElementById("total_price").innerHTML = "0";
    document.getElementById("cart_list").innerHTML = " ";
    var table = document.getElementById("cart_list");
    // Fill the shopping cart modal manipulating the shopping cart dom
    for (var i = 0; i < cart.length; i++) {
        
        var row = document.createElement("tr");
        var prodName = document.createElement("th");
        var prodPrice = document.createElement("td");
        var prodQuan = document.createElement("td");
        var total = document.createElement("td");
        
        table.appendChild(row);
        prodName.innerHTML = cart[i].name;
        prodPrice.innerHTML = "$" + cart[i].price;
        prodQuan.innerHTML = cart[i].quantity;
            if (cart[i].subtotalWithDiscount != 0) {
                total.innerHTML = cart[i].subtotalWithDiscount;
            } else {
                total.innerHTML = cart[i].subtotal;
            }
        row.appendChild(prodName);
        row.appendChild(prodPrice);
        row.appendChild(prodQuan);
        row.appendChild(total);

        var total_price = document.getElementById("total_price");
        toPay += parseFloat(total.innerHTML,10)
    }
    total_price.innerHTML = toPay;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
}


    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
    generateCart(cartList)
    applyPromotionsCart(cart);
	printCart();
}
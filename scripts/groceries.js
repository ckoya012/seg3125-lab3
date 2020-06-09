// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [{
        name: "broccoli",
        vegetarian: true,
        glutenFree: true,
        price: 1.99,
        organic: true,
        category: "vegFruits"
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        price: 2.35,
        organic: false,
        category: "grains"
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        price: 10.26,
        organic: false,
        category: "meat"
    },
    {
        name: "chia seeds",
        vegetarian: true,
        glutenFree: true,
        price: 15.19,
        organic: true,
        category: "other"
    },
    {
        name: "pasta",
        vegetarian: true,
        glutenFree: false,
        price: 3.59,
        organic: false,
        category: "grains"
    },
    {
        name: "chocolate",
        vegetarian: true,
        glutenFree: true,
        price: 1.25,
        organic: false,
        category: "other"
    },
    {
        name: "eggs",
        vegetarian: false,
        glutenFree: true,
        price: 4.99,
        organic: true,
        category: "meat"
    },
    {
        name: "cheese",
        vegetarian: true,
        glutenFree: true,
        price: 6.85,
        organic: false,
        category: "dairy"
    },
    {
        name: "chicken",
        vegetarian: false,
        glutenFree: true,
        price: 10.99,
        organic: true,
        category: "meat"
    },
    {
        name: "milk",
        vegetarian: true,
        glutenFree: true,
        price: 4.55,
        organic: true,
        category: "dairy"
    },
    {
        name: "strawberries",
        vegetarian: true,
        glutenFree: true,
        price: 2.49,
        organic: true,
        category: "vegFruits"
    },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(restriction) {
    let product_names = [...products];

    if (restriction.includes("Vegetarian")) {
        product_names = product_names.filter(product => product.vegetarian);
    }
    if (restriction.includes("GlutenFree")) {
        product_names = product_names.filter(product => product.glutenFree);
    }
    if (restriction.includes("Organic")) {
        product_names = product_names.filter(product => product.organic);
    }

    return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}
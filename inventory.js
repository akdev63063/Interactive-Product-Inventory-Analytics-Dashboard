console.log("======================================");
console.log("   PRODUCT INVENTORY MANAGEMENT");
console.log("======================================");



const inventory = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Monitor", price: 150 },
    { id: 4, name: "Keyboard", price: 75 },
    { id: 5, name: "Smartphone", price: 600 },
    { id: 6, name: "Headphones", price: 120 },
    { id: 7, name: "Printer", price: 250 },
    { id: 8, name: "USB Drive", price: 15 }
];

console.log("\n--- Add New Product ---");

const productName = prompt("Enter product name:");
const productPriceInput = prompt("Enter product price:");

const newName = productName ? productName.trim() : "";
const newPrice = Number(productPriceInput);

if (productName === null || productPriceInput === null) {

    console.log("Product addition cancelled.");

}
else if (newName === "") {

    console.log("Product name cannot be empty.");

}
else if (productPriceInput.trim() === "" ||
         !Number.isFinite(newPrice) ||
         newPrice <= 0) {

    console.log("Please enter a valid product price.");

}
else {

    inventory.push({
        id: inventory.length + 1,
        name: newName,
        price: newPrice
    });

    console.log(newName + " added successfully!");
}
// Assign product categories

function getCategory(price) {

    let category;

    if (price < 100) {
        category = "Budget";
    }
    else if (price <= 500) {
        category = "Standard";
    }
    else {
        category = "Premium";
    }

    switch (category) {

        case "Budget":
            return "Budget";

        case "Standard":
            return "Standard";

        case "Premium":
            return "Premium";

        default:
            return "Unknown";
    }
}
//4: Display all products using forEach()

console.log("\n--- Complete Product Inventory ---");

inventory.forEach(function(product) {

    const category = getCategory(product.price);

    console.log(
        "Product: " + product.name +
        " | Price: $" + product.price +
        " | Category: " + category
    );

});

//Search for a product using loops

console.log("\n--- Search Product ---");

const searchInput = prompt("Enter product name to search:");

if (searchInput !== null && searchInput.trim() !== "") {

    const searchName = searchInput.trim().toLowerCase();
    let found = false;

    for (let i = 0; i < inventory.length; i++) {

        if (!inventory[i].name) {
            continue;
        }

        if (inventory[i].name.toLowerCase() === searchName) {

            console.log("Product Found!");
            console.log("Name: " + inventory[i].name);
            console.log("Price: $" + inventory[i].price);

            found = true;
            break;
        }
    }

    if (found === false) {
        console.log("Product not found.");
    }

}
else {
    console.log("Search skipped.");
}
//Calculate total inventory value

function calculateTotal(products) {

    let total = 0;

    for (let product of products) {
        total = total + product.price;
    }

    return total;
}

const totalValue = calculateTotal(inventory);

//7: Calculate discount and tax

const calculateFinalAmount = (amount, discount, tax) => {

    const discountAmount = amount * discount;
    const afterDiscount = amount - discountAmount;

    const taxAmount = afterDiscount * tax;
    const finalAmount = afterDiscount + taxAmount;

    return finalAmount.toFixed(2);
};

const finalAmount = calculateFinalAmount(
    totalValue,
    0.10,
    0.05
);

const affordableProducts = inventory.filter(function(product) {

    return product.price < 200;

});
// : Create a formatted report using map()

const productReport = inventory.map(function(product) {

    return product.name.toUpperCase() + ": $" + product.price;

});

// Final: Display final analytics

console.log("\n======================================");
console.log("       INVENTORY ANALYTICS");
console.log("======================================");

console.log("Total Products: " + inventory.length);

console.log("Total Inventory Value: $" + totalValue);

console.log("Value After 10% Discount and 5% Tax: $" + finalAmount);

console.log("\nAffordable Products (Below $200):");

affordableProducts.forEach(function(product) {
    console.log("- " + product.name + " ($" + product.price + ")");
});

console.log("\nFormatted Product Report:");

console.log(productReport);

console.log("\n======================================");
console.log("       PROJECT COMPLETED BY Akash");
console.log("======================================");
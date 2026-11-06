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

// Nathan Vong
// U07506458

//Declaring const variables
const ITEM_NAME = "Aquarium Fish";

//Declaring let variables
let unitCost = 20;
let currentStock = 40;
let reorderLevel = 50;
let targetStock = 200;
let weeklyDemand = 20;
let supplierLeadTimeWeeks = 1;

//Calculate inventory metrics
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderNow = currentStock < reorderLevel || weeksOfCover < supplierLeadTimeWeeks;
let reorderQuanity = (reorderNow) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuanity * unitCost;

//Printing to Console
console.log("--- INVENTORY ASSISTANT ---");
console.log("Item Name: " + ITEM_NAME);
console.log("Weeks of Cover: " + weeksOfCover.toFixed(2));
console.log("Reorder Now: " + reorderNow);
console.log("Recommended Reorder Quantity: " + reorderQuanity);
console.log("Estimated Reorder Cost: $" + estimatedReorderCost.toFixed(2));

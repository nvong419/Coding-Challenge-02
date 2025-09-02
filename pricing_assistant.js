// Nathan Vong
// U07506458

//Declaring const variables
const PRODUCT_NAME = "Aquarium Fish";
const COST_PER_UNIT = 20;
const BASE_PRICE = 50;
const DISCOUNT_RATE = 0.2;
const SALES_TAX_RATE = 0.07;
const FIXED_MONTHLY_COSTS = 2000;

//Declaring let variables
let discountedPrice = BASE_PRICE * (1 - DISCOUNT_RATE);
let finalPriceWithTax = discountedPrice * (1 + SALES_TAX_RATE);
let profitPerUnit = finalPriceWithTax - COST_PER_UNIT;
let breakEvenUnits = Math.ceil(FIXED_MONTHLY_COSTS / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

//Printing to Console
console.log("--- PRICING ASSISTANT ---");
console.log("Product Name: " + PRODUCT_NAME);
console.log("Discounted Price: $" + discountedPrice.toFixed(2));
console.log("Final Price with Tax: $" + finalPriceWithTax.toFixed(2));
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break Even Units: " + breakEvenUnits);
console.log("Is Profitable per Unit: " + isProfitablePerUnit);
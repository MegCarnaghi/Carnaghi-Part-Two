// Create a variable to hold the asterick symbol represening each inch of rain.
let rainSymbol = " * ";

// Prompt the user for the amount of rain they received (in inches) and store the amount in a javascript variable.
let rainAmt = prompt(
  "How much rain did you receive? Please provide the number of inches."
);

// Use the .repeat method to return the same number asterisks as the number of inches of rain the user said they received. Store in a javascript variable.
let rainInches = rainSymbol.repeat(rainAmt);

// console.log the asterisks reperesenting the inches of rain received.
// console.log("Inches of rain received: " + rainInches);

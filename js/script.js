// Create global variables
// A variable to hold the asterick symbol represening each inch of rain.
let rainSymbol = " * ";

// A variable for the normal amount of bushels of grain the land produces
let bushels = 50;

// A variable for the users answer to the prompt about whether or not they use fertilizer
let usedFertilizer;

// A variable for the type of fertilizer the user is using
let typeFertilizer;

// Prompt the user for the amount of rain they received (in inches) and store the amount in a javascript variable
let rainAmt = prompt(
  "How much rain did you receive? Please provide the number of inches."
);

// A function to validate whether or not the user's input is a number and respond accordingly
function rainPromptActions() {
  if (isNaN(rainAmt)) {
    alert(
      "That is not a valid response. Please try again and make sure to use numbers only."
    );
  } else {
    // Use the .repeat method to return the same number asterisks as the number of inches of rain the user said they received. Store in a javascript variable
    let rainInches = rainSymbol.repeat(rainAmt);
    // console log the asterisks reperesenting the inches of rain received
    console.log("Inches of rain received: " + rainInches);
    usedFertilizerPrompt();
  }
}

// Callin the rainPromptActions function
rainPromptActions();

// A function to determine what actions to do based on the user's response to the prompt about whether or not they use fertilizer
function usedFertilizerPrompt() {
  let usedFertilizer = prompt(
    "Did you use fertilizer? Please answer yes or no."
  ).toUpperCase();
  // secnario 1 - the user did not use fertilizer and rainAmt is >= 20 inches
  if (usedFertilizer === "NO" && rainAmt >= 20) {
    alert("Thank you for your responses. Check the console for your answers.");
    let rainImpact = bushels * 0.9;
    console.log(
      "No fertilizer was used but there was a lot of rain. The expected crop yield is " +
        rainImpact +
        " bushels."
    );
    // scenario 2 - the user did not use fertilizer and rainAmt is <10 inches
  } else if (usedFertilizer === "NO" && rainAmt < 10) {
    alert("Thank you for your responses. Check the console for your answers.");
    let rainImpact = bushels * 0.8;
    console.log(
      "No fertilizer was used and there was a lack of rain. The expected crop yield is " +
        rainImpact +
        " bushels."
    );
    // scenario 3 - the user did not use fertilizer and the rainAmt is not <10 inches and not >= 20 inches
  } else if (usedFertilizer === "NO" && rainAmt >= 10 && rainAmt < 20) {
    alert("Thank you for your responses. Check the console for your answers.");
    let rainImpact = bushels;
    console.log(
      "No fertilizer was used and the rain amount was average. The expected crop yield is " +
        rainImpact +
        " bushels."
    ); // scenario 4 - the user did use fertzlier
  } else if (usedFertilizer === "YES") {
    typeOfFertilizerPrompt();

    // scenario 5 - the user entered an invalid response
  } else {
    alert(
      "You did not enter a valid response. Please try again and make sure to to answer with yes or no only."
    );
  }
}

// A function to determine what actions to do based on the user's response to the prompt about what type of fertilizer they use
function typeOfFertilizerPrompt() {
  let typeFertilizer = prompt(
    "What type of fertilizer did you use - regular or premium?"
  ).toUpperCase();
  //scenario 1 - regular fertilizer was used and rainAmt is >= 20 inches
  if (typeFertilizer === "REGULAR" && rainAmt >= 20) {
    alert("Thank you for your responses. Check the console for your answers.");
    let rainImpact = bushels * 0.9;
    let finalYield = rainImpact * 0.1 + rainImpact;
    console.log(
      typeFertilizer +
        " fertilizer was used and there was a lot of rain. The expected crop yield is " +
        finalYield +
        " bushels."
    );
    // secnario 2 - regular fertilizer was used and rainAmt is <10 inches
  } else if (typeFertilizer === "REGULAR" && rainAmt < 10) {
    alert("Thank you for your responses. Check the console for your answers.");
    let rainImpact = bushels * 0.8;
    let finalYield = rainImpact * 0.1 + rainImpact;
    console.log(
      typeFertilizer +
        " fertilizer was used and there was not much rain. The expected crop yield is " +
        finalYield +
        " bushels."
    );
    // scenario 3 - regular fertilizer was used and the rainAmt is not <10 inches and not >= 20 inches
  } else if (typeFertilizer === "REGULAR" && rainAmt >= 10 && rainAmt < 20) {
    alert("Thank you for your responses. Check the console for your answers.");
    let rainImpact = bushels;
    let finalYield = rainImpact * 0.1 + rainImpact;
    // let finalYield = rainImpact + perctage;
    console.log(
      typeFertilizer +
        " fertilizer was used and the rain amount was average. The expected crop yield is " +
        finalYield +
        " bushels."
    ); // sceanrio 4 - premium fertilizer was used and rainAmt is >= 20 inches
  } else if (typeFertilizer === "PREMIUM" && rainAmt >= 20) {
    alert("Thank you for your responses. Check the console for your answers.");
    let rainImpact = bushels * 0.9;
    let finalYield = rainImpact * 0.15 + rainImpact;
    console.log(
      typeFertilizer +
        " fertilizer was used and there was a lot of rain. The expected crop yield is " +
        finalYield +
        " bushels."
    ); // scenario 5 - premium fertilizer was used and rainAmt is <10 inches
  } else if (typeFertilizer === "PREMIUM" && rainAmt < 10) {
    alert("Thank you for your responses. Check the console for your answers.");
    let rainImpact = bushels * 0.8;
    let finalYield = rainImpact * 0.15 + rainImpact;
    console.log(
      typeFertilizer +
        " fertilizer was used but there was not much rain. The expected crop yield is " +
        finalYield +
        " bushels."
    );
    // scenario 6 - premium fertilizer was used and the rainAmt is not <10 inches and not >= 20 inches
  } else if (typeFertilizer === "PREMIUM" && rainAmt >= 10 && rainAmt < 20) {
    alert("Thank you for your responses. Check the console for your answers.");
    let rainImpact = bushels;
    let finalYield = rainImpact * 0.15 + rainImpact;
    console.log(
      typeFertilizer +
        " fertilizer was used and the rain amount was average. The expected crop yield is " +
        finalYield +
        " bushels."
    ); // scenario 7 - invalid response is given
  } else {
    alert(
      "You did not enter a valid response. Please try again and make sure to answer with regular or premium only."
    );
  }
}

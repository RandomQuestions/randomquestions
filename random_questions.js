// Question and Color Data
let quoteArray = [
  { quote: "You can pick one superpower, which one would you? 'With big powers come big responsibilities', what do you do with this super power?" },
  { quote: "What do you do in life that is not in your resume?" },
  // (Rest of the quotes here...)
  { quote: "What is the thing that can't be replaced if your apartment would burn?" },
];

let colorArray = [
  "#F07857", "#43A5BE", "#53BDA5", "#F5C26B", "#253342",
  "#4FB06D", "#5C62D6", "#FFFFFF", "#BE398D", "#D49137",
  "#BF2C34", "#696969",
];

// Picked Quotes and Colors
let pickedQuotes = [];
let pickedColors = [];

$(document).ready(() => {
  nextQuote(); // Initialize with the first quote
});

/**
 * Reset the given array when empty by refilling it with picked items.
 * @param {Array} array - The array to reset.
 * @param {Array} pickedArray - The picked items to reuse.
 */
function resetArray(array, pickedArray) {
  if (array.length === 0) {
    while (pickedArray.length) {
      array.push(pickedArray.pop());
    }
  }
}

/**
 * Display the next quote and update the colors.
 */
function nextQuote() {
  resetArray(quoteArray, pickedQuotes);
  resetArray(colorArray, pickedColors);

  // Select a random quote and color
  const randomColor = colorArray.splice(Math.floor(Math.random() * colorArray.length), 1)[0];
  const randomQuote = quoteArray.splice(Math.floor(Math.random() * quoteArray.length), 1)[0];

  // Push the used items to picked arrays
  pickedQuotes.push(randomQuote);
  pickedColors.push(randomColor);

  // Update the DOM
  $("#quote-text").text(randomQuote.quote);
  $("body").css("background-color", randomColor);
  $("#quote-text").css("color", randomColor);
}

/**
 * (Optional) Utility function to log state during debugging.
 */
function logState() {
  console.log("Remaining Quotes:", quoteArray);
  console.log("Picked Quotes:", pickedQuotes);
}

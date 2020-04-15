//Create variables values to offer to the user
var UPPER_ARRAY = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LOWER_ARRAY = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var NUMBER_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var SYMBOLS_ARRAY = ["!", "~", "`", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "{", "}", "[", "]", ";", ":", "?", "<", ">", ".", ",", "\"", "|"];

//User input variables (we'll fill them with the input from the prompts)
var Uppercase;
var Lowercase;
var Numbers;
var Symbols;

//Create variable to store user choices. It'll come in the conditions
var UserChoices;

//Create questions/prompts 

var question = [
  { q: "Would you like to include uppercase characters? Please answer 'yes' or 'no'."},
  { q: "Would you like to include lowercase characters? Please answer 'yes' or 'no'."},
  { q: "Would you like to include numeric characters? Please answer 'yes' or 'no'."},
  { q: "Would you like to include special characters? Please answer 'yes' or 'no'."},
  { q: "How many characters would you like your password to have? Please input a number between 8 and 128."}
  ];

// Start function to generatePassword
function generatePassword() {
  //Ask for user input
  alert("Please answer the following questions regarding your password criteria.");
  //ParseInt transforms the string of the prompt in a whole number
  var Charachter_Amount = parseInt(prompt(question[4].q), 10);
  //First validation. Make sure it inputs a value
  while (!Charachter_Amount){
    alert("please enter a value between 8 & 128");
    var Charachter_Amount = parseInt(prompt(question[4].q), 10);
  }
  //Second validation. Make sure value fits the prompt
  while (Charachter_Amount < 8 || Charachter_Amount > 128) {
    alert("please enter a value between 8 & 128");
    var Charachter_Amount = parseInt(prompt(question[4].q), 10);
  };
  if (Charachter_Amount >= 8 || Charachter_Amount <= 128) {
    var Uppercase = prompt(question[0].q).toLowerCase();
    while (Uppercase !== "yes" && Uppercase !== "no") {
      alert("You should choose 'yes' or 'no");
      var Uppercase = prompt(question[0].q).toLowerCase();
    };
    
    var Lowercase = prompt(question[1].q).toLowerCase();
    while (Lowercase !== "yes" && Lowercase !== "no") {
      alert("You should choose 'yes' or 'no");
      var Lowercase = prompt(question[1].q).toLowerCase();
    };

    var Numbers = prompt(question[2].q).toLowerCase();
    while (Numbers !== "yes" && Numbers !== "no") {
      alert("You should choose 'yes' or 'no");
      var Numbers = prompt(question[2].q).toLowerCase();
    };

    var Symbols = prompt(question[3].q).toLowerCase();
    while (Symbols !== "yes" && Symbols !== "no") {
      alert("You should choose 'yes' or 'no");
      var Symbols = prompt(question[3].q).toLowerCase();
    };
  }
  

  //Analized users input with conditionals to generate password. At this point we'll implement the UserChoices variable
  //First validation --- NOT WORKING  
  if (Uppercase === "yes") {
    var UserChoices = UPPER_ARRAY;
  }
  if (Uppercase === "yes" && Lowercase === "yes") {
    var UserChoices = UPPER_ARRAY.concat(LOWER_ARRAY);
  } else if (Uppercase === "no" && Lowercase === "yes") {
    var UserChoices = LOWER_ARRAY;
  }
  if (Uppercase === "yes" && Lowercase === "yes" && Numbers === "yes") {
    var UserChoices = UPPER_ARRAY.concat(LOWER_ARRAY, NUMBER_ARRAY);
  } else if (Uppercase === "yes" && Lowercase === "no" && Numbers === "yes") {
    var UserChoices = UPPER_ARRAY.concat(NUMBER_ARRAY);
  } else if (Uppercase === "no" && Lowercase === "yes" && Numbers === "yes") {
    var UserChoices = LOWER_ARRAY.concat(NUMBER_ARRAY);
  } else if (Uppercase === "no" && Lowercase === "no" && Numbers === "yes") {
    var UserChoices = NUMBER_ARRAY;
  }
  if (Uppercase === "yes" && Lowercase === "yes" && Numbers === "yes" && Symbols === "yes") {
    var UserChoices = UPPER_ARRAY.concat(LOWER_ARRAY, NUMBER_ARRAY, SYMBOLS_ARRAY);
  } else if (Uppercase === "no" && Lowercase === "yes" && Numbers === "yes" && SYMBOLS_ARRAY === "yes") {
    var UserChoices = LOWER_ARRAY.concat(NUMBER_ARRAY, SYMBOLS_ARRAY);
  } else if (Uppercase === "no" && Lowercase === "no" && Numbers === "yes" && Symbols === "yes") {
    var UserChoices = NUMBER_ARRAY.concat(SYMBOLS_ARRAY);
  } else if (Uppercase === "no" && Lowercase === "no" && Numbers === "no" && Symbols === "yes") {
    var UserChoices = SYMBOLS_ARRAY;
  };
  for (var i = 0; i < Charachter_Amount; i++ ) {
    // Let's say character amount is 8
    // Then we want to loop through UserChoices array and pick out random characters from UserChoices array
    // The line below will pick out 8 random characters from the UserChoices array
    var User_Picks = UserChoices[Math.floor(Math.random() * UserChoices.length)];

  }
  // return UserChoices as a string
   return User_Picks;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input. 
function writePassword() {
  //Give values to function generatePassword 
// generatePassword() is a function that returns a string in the end
// For example, when you run generatePassword, what is returned is a string of randomly generated characters, aka the password
var password = generatePassword();
// First they have to store the DOM element into a variable, which they named passwordText
var passwordText = document.querySelector("#password");
// Make the value of passwordText = password
passwordText.value = password;
}

// Add event listener to generate button. Executes what it is inside the writePassword function above
generateBtn.addEventListener("click", writePassword);




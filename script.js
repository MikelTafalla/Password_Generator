// Assignment Code
var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input
function writePassword() {
  
  alert("Please answer the following questions regarding your password criteria.");

  var question = [
    { q: "Would you like to include uppercase characters? Please answer 'yes' or 'no'."},
    { q: "Would you like to include lowercase characters? Please answer 'yes' or 'no'."},
    { q: "Would you like to include numeric characters? Please answer 'yes' or 'no'."},
    { q: "Would you like to include special characters? Please answer 'yes' or 'no'."},
    { q: "How many characters would you like your password to have? Please input a number between 8 and 128."}
  ];

  //Loop over every question object
    for (var i = 0; i < question.length; i++) {
    //Display questions for user to answer and store their answer on the variables
      var Uppercase = prompt(question[0].q);
      var Lowercase = prompt(question[1].q);
      var Numbers = prompt(question[2].q);
      var Symbols = prompt(question[3].q);
      var Charachter_Amount = prompt(question[4].q);

    //convert userAnswer to Lowercase
      var Uppercase_L = Uppercase.toLowerCase();
      var Lowercase_L = Lowercase.toLowerCase();
      var Numbers_L = Numbers.toLowerCase();
      var Symbols_L = Symbols.toLowerCase();
  
    {break;}
  };
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
};


// Add event listener to generate button. Executes what it is inside the writePassword function above
generateBtn.addEventListener("click", writePassword);

//Create variables to store the Arrays of the ASCII character table
var UPPER_ARRAY = [...Array(26)].map((val, i) => String.fromCharCode(i+65));
var LOWER_ARRAY = [...Array(26)].map((val, i) => String.fromCharCode(i+97));
var NUMBER_ARRAY = [...Array(10)].map((val, i) => String.fromCharCode(i+48));
var SYMBOLS1_ARRAY = [...Array(15)].map((val, i) => String.fromCharCode(i+33));
var SYMBOLS2_ARRAY = [...Array(7)].map((val, i) => String.fromCharCode(i+58));
var SYMBOLS3_ARRAY = [...Array(10)].map((val, i) => String.fromCharCode(i+91));
var SYMBOLS_ARRAY = SYMBOLS1_ARRAY.concat(SYMBOLS2_ARRAY).concat(SYMBOLS3_ARRAY);


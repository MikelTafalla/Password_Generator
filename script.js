// Assignment Code
var generateBtn = document.querySelector("#generate");


//Variables to store the array from the ASCII chart.

  var UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
  var LOWERCASE_CHAR_CODE = arrayFromLowtoHigh(97, 122)
  var NUMBER_CHAR_CODE = arrayFromLowtoHigh(48, 57)
  var SPECIAL_CHAR_CODE = arrayFromLowtoHigh(33, 47).concat(arrayFromLowtoHigh(58, 64)).concat(arrayFromLowtoHigh(91, 96)).concat(arrayFromLowtoHigh(123, 126))



//Write function to get characters from ASCII characters code table. It stores the total array that it will be broken down and specified in the above variables
function arrayFromLowtoHigh(low, high) {
  var array = []
  for (var j = low; j <= high; j++) {
    array.push(j)
  }
  return array
}


// Write password to the #password input

function writePassword() {
  var password = generatePassword();

  //Set up variables for our character codes

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Browser opens and App starts. Prompts and alerts
alert("In this page we'll help you creating a secure password. \
Please answer the following questions regarding your password criteria, \
click the generate password button that it'll appear after the questions, and we'll provide you with a secure password.")

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

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assignment of Password characters to variables from the ASCII character codes table

var UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90);
var LOWERCASE_CHAR_CODE = arrayFromLowtoHigh(97, 122);
var NUMBER_CHAR_CODE = arrayFromLowtoHigh(48, 57);
var SPECIAL_CHAR_CODE = arrayFromLowtoHigh(33, 47).concat(arrayFromLowtoHigh(58 ,64)).concat(arrayFromLowtoHigh(91, 96)).concat(arrayFromLowtoHigh(123, 126));


// Write password to the #password input

function writePassword() {
  var password = generatePassword(Answer1positive, Answer2positive, Answer3positive, Answer4positive, Answer5positive);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Write function to get characters from ASCII characters code table

function arrayFromLowtoHigh(low, high) {
  var array = []
  for (var j = low; j <= high; j++) {
    array.push(j)
  }
  return array
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
  //Display questions for user to answer and store their answer on userAnswer
  var userAnswer1 = prompt(question[0].q);
  var userAnswer2 = prompt(question[1].q);
  var userAnswer3 = prompt(question[2].q);
  var userAnswer4 = prompt(question[3].q);
  var userAnswer5 = prompt(question[4].q);

  //convert userAnswer to Lowercase
  var userAnswLower1 = userAnswer1.toLowerCase();
  var userAnswLower2 = userAnswer2.toLowerCase();
  var userAnswLower3 = userAnswer3.toLowerCase();
  var userAnswLower4 = userAnswer4.toLowerCase();
  var userAnswLower5 = userAnswer5.toLowerCase();

  //Check answers to filter password criteria and assign a variable for positive answers and another for negatives
  if (userAnswLower1 === "yes") {
    var Answer1positive = userAnswLower1;
  }
  else {
    var Answer1negative = userAnswLower1;
  }
  if (userAnswLower2 === "yes") {
    var Answer2positive = userAnswLower2;
  }
  else {
    var Answer2negative = userAnswLower2;
  }
  if (userAnswLower3 === "yes") {
    var Answer3positive = userAnswLower3;
  }
  else {
    var Answer3negative = userAnswLower3;
  }
  if (userAnswLower4 === "yes") {
    var Answer4positive = userAnswLower4;
  }
  else {
    var Answer4negative = userAnswLower4;
  }
  if (userAnswLower5 === "yes") {
    var Answer5positive = userAnswLower5;
  }
  else {
    var Answer5negative = userAnswLower5;
  }

}

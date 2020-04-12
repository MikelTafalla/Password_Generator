// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
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



}

/* ACCEPTANCE CRITERIA
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
 */

/* Declaring my global scope variables */
var userChoice = "";
/* Arrays used to hold in password elements. */
var capitalArr = ["A", "B", "C", "D", "E"];
var lowerArr = ["a", "b", "c", "d", "e"];
var specialArr = ["!", "@", "#", "$", "%"];
var numArr = [1, 2, 3, 4, 5];

/* function responsible for taking userinput and using it to select criteria for password */
function selectCriteria() {

}

/* function responsible for the initial alerts and prompts. */
function initialPrompts() {
  userChoice = window.alert(
    "Before generating your password, you must select some criteria for your password. Click ok to follow on to the next set of instructions."
  );
  userChoice = window.alert(
    "In the upcoming pop-up, type what set of criteria you may want for your password. The options you may select are: 'capital: for capital letters; special: for special characters; number: for numbers in your password. Click ok to proceed to the typing prompt.'"
  );
  userChoice = window.prompt("Type your criteria", "Capital; Number; Special");
  /* Converts users input to upper case to minimize input mistakes */
  userChoice = userChoice.toUpperCase();
  /* Prints out what the user has selected in the console for developer to check their choice! Helps to see if code is operational. */
  console.log("The user has selected " + userChoice + " as their criteria.");

  if (!userChoice) {
    return;
  }
}

document.getElementById("generate").addEventListener("click", initialPrompts);

/* // Assignment Code
var generateBtn = document.querySelector("#generate");





 function generatePassword(){
  var userInput = 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 */

/* Things I tried to do before but didn't work:
  Decided to use a switch and case, to avoid the over use of if and else statements. 
  switch (userChoice) {
    case "CAPITAL":
      console.log("the CAPITAL switch case is working fine!");
      break;
    case "SPECIAL":
      console.log("the SPECIAL switch case is working fine!");
      break;
    case "NUMBER":
      console.log("the NUMBER switch case is working fine!");
      break;
    case "CAPITAL" && "SPECIAL":
      console.log("Both the CAPITAL and SPECIAL together case works fine.");  
      break;
    default:
      console.log("Your input is invalid! Try again!");
  }
 */

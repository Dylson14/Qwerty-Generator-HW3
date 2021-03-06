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
/* var combineArr = ""; */
/* Arrays used to hold in password elements. */
var capitalArr = ["A", "B", "C", "D", "E"];
//var lowerArr = ["a", "b", "c", "d", "e"];
let combineArr = ["a", "b", "c", "d", "e"];
var specialArr = ["!", "@", "#", "$", "%"];
var numArr = [1, 2, 3, 4, 5];

/* console.log(Math.random()); */

function writePassword(password) {
  var newPassword = password;
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}

  function generatePassword() {
    console.log("generatePassword function has activated");
    var password = "";
    for (var i = 0; i <= 8; i++) {
      var randomIndex = Math.floor(Math.random() * combineArr.length);
      password += combineArr[randomIndex]; // password += combineArr[randomIndex]  password = password + combineArr[randomIndex].
      console.log(password);
    }

    writePassword(password);
  }

  /* function responsible for taking userinput and using it to select criteria for password */
  function selectCriteria() {
    console.log(
      "selectCriteria function has activated, userChoice is: " + userChoice
    );

    var findCapital = "CAPITAL";
    var findNumber = "NUMBER";
    var findSpecial = "SPECIAL";
    /* console.log(userChoice.includes(findCapital)); */

    /*  Comment: I tried to incorporate code to account for more than one selected parameter. 
    if(userChoice.includes(findCapital) && userChoice.includes(findNumber)){
      combineArr = capitalArr.concat(numArr).concat(lowerArr);
      console.log("The word CAPITAL and NUMBER was found in the userChoice variable")
      console.log("The combined Array is: " + combineArr)
    }else if(userChoice.includes(findCapital)) {
      console.log("The word CAPITAL was found in the userChoice variable.");
      combineArr = capitalArr.concat(lowerArr);
      console.log("The combined array is: "+ combineArr);
    }else{
      console.log("userChoice did not include CAPITAL");
    } */

    if (userChoice.includes(findCapital)) {
      console.log("The word CAPITAL was found in the userChoice variable.");
      combineArr = capitalArr.concat(combineArr);
      console.log("The combined array is: " + combineArr);
    } else {
      console.log("userChoice did not include Capital.");
    }

    if (userChoice.includes(findNumber)) {
      console.log("The word NUMBER was found in userChoice variable.");
      combineArr = numArr.concat(combineArr);
      console.log("The combined array is: " + combineArr);
    } else {
      console.log("userChoice did not include Number.");
    }

    if (userChoice.includes(findSpecial)) {
      console.log("The word SPECIAL was found in userChoice variable.");
      combineArr = specialArr.concat(combineArr);
      console.log("The combined array is: " + combineArr);
    } else {
      console.log("userChoice did not include Special.");
    }

    console.log("End of select Criteria function.");

    generatePassword();
  }

  /* function responsible for the initial alerts and prompts. */
  function initialPrompts() {
    userChoice = window.alert(
      "Before generating your password, you must select some criteria for your password. Click ok to follow on to the next set of instructions."
    );
    userChoice = window.alert(
      "In the upcoming pop-up, type what set of criteria you may want for your password. The options you may select are: 'capital: for capital letters; special: for special characters; number: for numbers in your password. Click ok to proceed to the typing prompt.'"
    );
    userChoice = window.prompt(
      "Type your criteria",
      "Capital; Number; Special"
    );
    /* Converts users input to upper case to minimize input mistakes */
    userChoice = userChoice.toUpperCase();
    /* Prints out what the user has selected in the console for developer to check their choice! Helps to see if code is operational. */
    console.log(
      "The user has selected " +
        userChoice +
        " as their criteria. End of initialPrompts function"
    );

    if (!userChoice) {
      return;
    }

    selectCriteria();
  }

  document.getElementById("generate").addEventListener("click", initialPrompts);

  // Assignment Code
  /* var generateBtn = document.querySelector("#generate"); */

  /*  function generatePassword(){
  var userInput = 
}
 */

  // Write password to the #password input


/* // Add event listener to generate button
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

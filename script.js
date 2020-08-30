// Constants
const generateBtn = document.querySelector("#generate");
const chars = {

  lowerCase: 'abcdefghijklmnopqrstuvwxyz',

  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',

  numeric: '0123456789',

  specialCharacters: ' !"#$%&\'()*+,-./:;<=>?@[]^_{|}~'

};

// Functions
/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword() {

  // Password is currently blank! We need to make a better one
  let password = "";
  let userChoices = "";
  let pwdLength = 0;

  pwdLength = prompt("How many characters would you like your password to contain?");

  // The below loop executes until user enters a number between 8 and 128

  while (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
    pwdLength = prompt("Choose the password length between 8 to 128");
  }

  let confirmUppers = confirm("would you like to include uppercase");
  let confirmLowers = confirm("would you like to include lowercase");
  let confirmNumbers = confirm("would you like to include numbers");
  let confirmSpecials = confirm("would you like to include special characters");

  //This below loop executes until user selects atleast one character type

  while (confirmUppers === false && confirmLowers === false && confirmNumbers === false && confirmSpecials === false) {
    alert("Select atleast one character type");
    confirmUppers = confirm("would you like to include uppercase");
    confirmLowers = confirm("would you like to include lowercase");
    confirmNumbers = confirm("would you like to include numbers");
    confirmSpecials = confirm("would you like to include special characters");
  }

  // If user confirms uppercase letters then uppercase letters gets appended to userChoices string
  if (confirmUppers) {
    userChoices += chars.upperCase;
  }

  // If user confirms lowercase letters then lowercase letters gets appended to userChoices string
  if (confirmLowers) {
    userChoices += chars.lowerCase;
  }

  // If user confirms numbers then numbers gets appended to userChoices string
  if (confirmNumbers) {
    userChoices += chars.numeric;
  }

  // If user confirms special characters letters then special characters  gets appended to userChoices string
  if (confirmSpecials) {
    userChoices += chars.specialCharacters;
  }

  // To check what all character types got appended in userChoices String on console
  // console.log(userChoices);

  // This loop is for generating random password from userChoices String using Math.random function
  for (let i = 0; i < pwdLength; i++) {
    password += userChoices[Math.floor(Math.random() * userChoices.length)];

  }
  return password;

}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

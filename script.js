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
  let pwdLength = prompt("How many characters would you like your password to contain?");

  if (pwdLength < 8 || pwdLength > 128) {
    pwdLength = prompt("Choose the password length between 8 to 128");
  }

  let confirmUppers = confirm("would you like to include uppercase");
  let confirmLowers = confirm("would you like to include lowercase");
  let confirmNumbers = confirm("would you like to include numbers");
  let confirmSpecials = confirm("would you like to include special characters");


  if (confirmUppers === false && confirmLowers === false && confirmNumbers === false && confirmSpecials === false) {
    alert("Select atleast one character type");
    confirmUppers = confirm("would you like to include uppercase");
    confirmLowers = confirm("would you like to include lowercase");
    confirmNumbers = confirm("would you like to include numbers");
    confirmSpecials = confirm("would you like to include special characters");
  }

  if (confirmUppers) {
    userChoices += chars.upperCase;
  }

  if (confirmLowers) {
    userChoices += chars.lowerCase;
  }

  if (confirmNumbers) {
    userChoices += chars.numeric;
  }

  if (confirmSpecials) {
    userChoices += chars.specialCharacters;
  }


  console.log(userChoices);

  for (let i = 0; i < pwdLength; i++) {

    password += userChoices[Math.floor(Math.random() * userChoices.length)];

  }
  return password;

}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Constants
const generateBtn = document.querySelector("#generate");
const pwd = {

  lowerCase: 'abcdefghijklmnopqrstuvwxyz',

  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',

  numeric: '0123456789',

  specialCharacters: '!"#$%&\'()*+,-./:;<=>?@[]^_{|}~'

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

  let pwdLength = prompt("How many characters would you like your password to contain?");
  // let characterType = prompt(" what type of characters you want to include");
  // let confirmSpecial = confirm("Click OK to include specialCharacters");
  if (pwdLength < "8" && pwdLength > "123") {
    pwdLength = prompt("Choose the password length between 8 to 123");
  }

  let userChoices = pwd.lowerCase + pwd.upperCase + pwd.numeric + pwd.specialCharacters;

  for (let i = 0; i < pwdLength; i++) {

    password += userChoices[Math.floor(Math.random() * userChoices.length)];

  };
  return password;
}


// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

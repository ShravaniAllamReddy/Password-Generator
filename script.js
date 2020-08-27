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
  let userChoices = "";
  let pwdLength = prompt("How many characters would you like your password to contain?");

  if (pwdLength < 8 || pwdLength > 128) {
    pwdLength = prompt("Choose the password length between 8 to 128");
  }

  if (confirm("would you like to include uppercase")) {
    userChoices += pwd.upperCase;
  }

  if (confirm("would you like to include lowercase")) {
    userChoices += pwd.lowerCase;
  }

  if (confirm("would you like to include numbers")) {
    userChoices += pwd.numeric;
  }

  if (confirm("would you like to include special characters")) {
    userChoices += pwd.specialCharacters;
  }

  // console.log(userChoices);

  for (let i = 0; i < pwdLength; i++) {

    password += userChoices[Math.floor(Math.random() * userChoices.length)];
  }
  return password;

}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

# Password-Generator

## Description

Application that generates a random password based on user-selected criteria using JavaScript.

It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


## Usage

When 'Generate Password' button is clicked, it generates series of prompts for password criteria.

1.User is prompted to enter the password length, if user enters length which 
is not between 8 and 128 characters, it prompts until user enters a number which is in expected range.

2.In the next step, it prompts the user if they would like to include uppercase,lowercase,numbers and special characters,if none of the character types is selected, it prompts user until they select atleast one character type.

If password criteria is met then the application generates random password.

## Sources referred

1.isNaN() Function: (https://www.w3schools.com/jsref/jsref_isnan.asp)

The isNaN() function determines whether a value is NaN or not.

NaN - Not a Number

2.Math.random() Function : (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

Math.random() does not provide cryptographically secure random numbers. 
Do not use them for anything related to security. 


## Deployed URL of this application

https://shravaniallamreddy.github.io/Password-Generator/

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialCharacters = [
  '@',
  '%',
  '+',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

function generatePassword() {
  var length = parseInt(prompt('How long?'))
  
  if (length < 8 || length > 128){
    alert('the password does not meet the criteria!')
    return null;
  }

  var upperCasechoice = confirm('Would you like uppercase characters?')
  var lowerCasechoice = confirm('Would you like lower case characters?')
  var numbers = confirm('Would you like to use numbers?')
  var specialCharacters = confirm('Would you like to use special characters?')

  if (upperCasechoice === false && lowerCasechoice === false){
    alert('Please select one of the options!')
   return null; 
  }


  return 'Password'
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);





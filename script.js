// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here


//////////// -- VARIABLES SECTION  -- //////////////////////////////////////////////////////////
var createdPassword = '';

//26
lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//26
upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//10
numberLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//10
specialLetters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
//////////// -- END OF VARIABLES SECTION --  //////////////////////////////////////////////////////////



//////////// -- FUNCTIONS SECTION  -- //////////////////////////////////////////////////////////

//function to choose the length of the password
function chooseLength() {
  passwordLength = window.prompt('How many characters do you want your password? At least 8 and no more than 128');
  if(passwordLength < 8 || passwordLength > 128){
    alert('Please try again');
    chooseLength();
  } else{
    return passwordLength;
  }
}

//------- CRITERIA SECTION --------//
//function to choose lowercase
function chooseLowercase() {
  hasLowercase = window.confirm('Do you wish to have lowercase characters in your password?')
}

//function to choose uppercase
function chooseUppercase() {
  hasUppercase = window.confirm('Do you wish to have uppercase characters in your password?')
}

//function to choose numbers
function chooseNumber() {
  hasNumbers = window.confirm('Do you wish to have numbers in your password?')
}

//function to choose special characters
function chooseSpecial() {
  hasSpecial = window.confirm('Do you wish to have special characters in your password?')
}
//------- END OF CRITERIA SECTION --------//


//------- CREATE PASSWORD SECTION --------//
 //function to generate Lowercase Password 
function lowerPass(){
  createdPassword += lowerLetters[Math.floor(Math.random() * 26)];
  return createdPassword;
}

 //function to generate uppercase Password 
 function upperPass(){
  createdPassword += upperLetters[Math.floor(Math.random() * 26)];
  return createdPassword;
 }

 //function to generate number Password 
 function numberPass(){
  createdPassword += numberLetters[Math.floor(Math.random() * 10)];
  return createdPassword;
 }

 //function to generate special Password 
 function specialPass(){
  createdPassword += specialLetters[Math.floor(Math.random() * 10)];
  return createdPassword;
 }
//------- END OF CREATE PASSWORD SECTION --------//
 



//Function to create the password based on criteria chosen
function makePassword(){
  createdPassword = "";
  for (i = 0; i < passwordLength; i++){
    if(hasLowercase === true){
      lowerPass();
    }
    if (hasUppercase === true){
      upperPass();
    }
    if(hasNumbers === true){
      numberPass();
    }
    if(hasSpecial === true){
      specialPass();
    }
    
  }
}


//function to generate the password based on the criteria given
function createPassword(){
makePassword()
return createdPassword
}


//////////// -- END OF FUNCTIONS SECTION --  //////////////////////////////////////////////////////////



//------- MAIN FLOW FUNCTION SECTION --------//

  function generatePassword(){
  //1) Question: Ask how for the length of the password. Password >= 8 && Password <= 128;
  chooseLength();

    
  //2) Question: Ask to include lowercase;
  chooseLowercase();
  
  //3) Question: Ask to include uppercase;
  chooseUppercase();

  //4) Question: Ask to include numbers;
  chooseNumber();


  //5) Question: ask to include Special Characters;
  chooseSpecial();

  //generate the password
  return createPassword();

  }
//-------END OF MAIN FLOW SECTION --------//



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

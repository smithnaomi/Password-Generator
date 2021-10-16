// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase= [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['!','@','%','$','&','*','#']
var userChoice=[];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var userChoice= window.prompt('How many characters would you like your password to contain? (8-128');
  var upperCasechoice= confirm('Will you have uppercase letters in your password?');
  var lowerCasechoice= confirm('Will your have lowercase letters in your password?');
  var specialChoice= confirm('Will you use special characters in your password?');


  if(userChoice){
    console.log(userChoice)
  } else if(!userChoice){
    return
  }

  if(lowerCasechoice===true){
    userChoicearray=userChoicearray.concat(upperCase)
  }
  if(upperCasechoice===true){
    userChoicearray=userChoicearray.concat(upperCase)
  }
  if(specialChoice===true){
    userChoicearray=userChoicearray.concat(specialChoice)
  }

  var password= []
  for(var i= 0;i < userChoice; i++){
   var index = math.floor(math.random())* userChoicearra.length)
   var randomCharacter= userChoicearray[index]
  password.push(randomCharacter)
  
   passwordText.value = password;
  console.log(userChoicearray)
 };
function generatePassword(){
  return "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

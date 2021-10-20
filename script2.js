
var upperCase= [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['!','@','%','$','&','*','#']
var numbers= ['1','2','3','4','5']
function passwordoptions() {
 var length= parseInt(prompt('How many characters would you like your password to contain?'));
 if (Number.isNaN(length)) {
  alert('Password needs to be a number')
  return null
    
 }   
 if (length < 8) {
     alert('Password needs to be more than 8')
     return null
     
 }
 
 if (length > 129) {
     alert('Password needs to be less than 129')
     return null
     
 }
 var upperCasechoice= confirm('Will you have uppercase letters in your password?');
 var lowerCasechoice= confirm('Will your have lowercase letters in your password?');
 var specialChoice= confirm('Will you use special characters in your password?');
 var numberChoice= confirm('Will you have any numbers will be in your password');
 var passwordoptionsobject= {
     length:length,
     upperCasechoice: upperCasechoice,
     lowerCasechoice: lowerCasechoice,
     numberChoice:numberChoice,
     specialChoice: specialChoice,
 }
 return passwordoptionsobject;
} 
function gettingRandomElements(arr) {
   var index = Math.floor(math.random()* arr.length)
   var randomCharacter= arr[index]
   return randomCharacter
}
function generatePassword(){
    var options= passwordoptions()
    var results= [];
    var possibleCharacters= [];
    var guranttedCharcaters= [];
    
    
    if (options.upperCasechoice) {
      possibleCharacters= possibleCharacters.concat(upperCase) 
      guranttedCharcaters.push(gettingRandomElements(upperCase)) 
    }

    if (options.lowerCasechoice) {
        possibleCharacters= possibleCharacters.concat(lowerCase) 
        guranttedCharcaters.push(gettingRandomElements(lowerCase)) 
      }

    if (options.specialChoice) {
        possibleCharacters= possibleCharacters.concat(specialChoice) 
        guranttedCharcaters.push(gettingRandomElements(specialChoice)) 
      }

    if (options.numberChoice) {
        possibleCharacters= possibleCharacters.concat(numberChoice) 
        guranttedCharcaters.push(gettingRandomElements(numberChoice)) 
      }


      

}
var generateBtn = document.querySelector("#generate");
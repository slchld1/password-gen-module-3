
// Add event listener to generate button
const generateBtn = document.querySelector('#generate')
var passwordText = document.querySelector("#password")
function createPass() {
    const length = window.prompt("Enter the length of the password you would like to generate between 8 to 128 characters")
//checks if length is between 8 and 128
    if (length < 8 || length > 128){
        window.alert("Please enter a number between 8 and 128")
        return;
    }
    let passwordVal = ""
    //options 
    //runs conditional statement to override the value of the password input that will be randomized
    var upperCase = confirm("Would you like to include uppercase letters?");
    if (upperCase === true){
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
        passwordVal = "";
    }
    var lowerCase = confirm("Would you like to include lowercase letters?");
    if (upperCase === true && lowerCase === true) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } else if (upperCase === false && lowerCase === true) {
        passwordVal = "abcdefghijklmnopqrstuvwxyz";
    } else {
        passwordVal = "";
    }
    var numbers = confirm("Would you like to use numbers in your password?");
    if (upperCase === true && lowerCase === true && numbers === true) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    } else if (upperCase === true && lowerCase === true && numbers === false) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } else if (upperCase === true && lowerCase === false && numbers === false) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (upperCase === true && lowerCase === false && numbers === true) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    } else if (upperCase === false && lowerCase === true && numbers === true) {
        passwordVal = "abcdefghijklmnopqrstuvwxyz1234567890";
    } else if (upperCase === false && lowerCase === false && numbers === true) {
        passwordVal = "1234567890";
    } else {
        passwordVal = "";
    }
    var specialChar = confirm("Would you like to use special characters in your password?");
    if (upperCase === true && lowerCase === true && numbers === true && specialChar === true) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+-=[]{}|:';,./<>?";
    } else if (upperCase === true && lowerCase === true && numbers === true && specialChar === false) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    } else if (upperCase === true && lowerCase === true && numbers === false && specialChar === false) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } else if (upperCase === true && lowerCase === true && numbers === false && specialChar === true) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+-=[]{}|:';,./<>?"
    } else if (upperCase === true && lowerCase === false && numbers === true && specialChar === true) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+-=[]{}|:';,./<>?"
    } else if (upperCase === true && lowerCase === false && numbers === false && specialChar === true) {
        passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-=[]{}|:';,./<>?"
    }else if (upperCase === false && lowerCase === true && numbers === true && specialChar === true) {
        passwordVal = "abcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+-=[]{}|:';,./<>?"
    } else if (upperCase === false && lowerCase === true && numbers === false && specialChar === true) {
        passwordVal = "abcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+-=[]{}|:';,./<>?"
    } else if (upperCase === false && lowerCase === false && numbers === true && specialChar === true) {
        passwordVal = "1234567890~!@#$%^&*()_+-=[]{}|:';,./<>?"
    }else if (upperCase === false && lowerCase === true && numbers === true && specialChar === false){
        passwordVal = "abcdefghijklmnopqrstuvwxyz1234567890"
    }else if (upperCase === false && lowerCase === false && numbers === true && specialChar === false) {
        passwordVal = "1234567890"
    }else if (upperCase === false && lowerCase === false && numbers === false && specialChar === true) {
        passwordVal = "~!@#$%^&*()_+-=[]{}|:';,./<>?"
    } else {
        passwordVal = "";
    }
//runs a loop of the string taken from the total conditional statement in a random order till the length reaches the desire length
    function passwordOutput(){
    outPutVal = ""
    for (var i = 0, n = passwordVal.length; i < length; i++) {
        outPutVal += passwordVal.charAt(Math.floor(Math.random() * n))
    }
    return outPutVal
}
//returns the output into value form into #password to display the generated password.
    passwordText.value = passwordOutput()
}
//start function button
generateBtn.addEventListener("click", createPass)

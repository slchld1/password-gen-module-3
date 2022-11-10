// Assignment code here

const generateBtn = document.querySelector("#generate");

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
const randomItem = (list) => {
    return list[randomInt(0, list.length - 1)]
}


// Generate password windows alert prompt
const generatePassword = () => {
    var passwordCriteria = window.prompt("Enter the length of the password(between 8 and 128 characters):");

    var passwordLength = parseInt(passwordCriteria);

    if(isNaN(passwordLength)) {
        window.alert("Please Enter a Number!!!")
        return
    };
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be between 8 and 128 characters")
        return
    };


    var useLowerCase = confirm("Lowercase letters in your password?");
    var useUpperCase = confirm("Uppercase letters in your password?");
    var useNumeric = confirm("Numbers in your password?");
    var useSpecialChar = confirm("Special characters in your password?");

    
    // Generator
    var numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", ".", ","];
    var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCases = [];

    for (let i = 0; i < lowerCases.length; i++) {
        upperCases[i] = lowerCases[i].toUpperCase()
    };
    
    var generatorCart = []
    // Push items into our generator from our list
    const cartGenerator = () => {
        if (useNumeric === true){
            generatorCart.push(numerics)
        }
        
        if (useSpecialChar === true) {
            generatorCart.push(specialChars)
        }

        if(useLowerCase === true) {
            generatorCart.push(lowerCases)
        }

        if (useUpperCase === true) {
            generatorCart.push(upperCases)
        }
    };
    cartGenerator();
    if (generatorCart.length === 0) {
        return window.alert("Please choose an input.")
    };

    var passwordGenerated = "";

        for (let i = 0; i < passwordLength; i++) {
        var rList = randomItem(generatorCart);
        var rChar = randomItem(rList);
        passwordGenerated += rChar
    }
    return passwordGenerated
};
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Assignment code here

// const generateBtn = document.querySelector("#generate");

// const randomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min)
// }
// const randomItem = (list) => {
//     return list[randomInt(0, list.length - 1)]
// }


// // Generate password windows alert prompt
// const generatePassword = () => {
//     var passwordCriteria = window.prompt("Enter the length of the password(between 8 and 128 characters):");

//     var passwordLength = parseInt(passwordCriteria);

//     if(isNaN(passwordLength)) {
//         window.alert("Please Enter a Number!!!")
//         return
//     };
//     if (passwordLength < 8 || passwordLength > 128) {
//         window.alert("Password length must be between 8 and 128 characters")
//         return
//     };


//     var useLowerCase = confirm("Lowercase letters in your password?");
//     var useUpperCase = confirm("Uppercase letters in your password?");
//     var useNumeric = confirm("Numbers in your password?");
//     var useSpecialChar = confirm("Special characters in your password?");

    
//     // Generator
//     var numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//     var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", ".", ","];
//     var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     var upperCases = [];

//     for (let i = 0; i < lowerCases.length; i++) {
//         upperCases[i] = lowerCases[i].toUpperCase()
//     };
    
//     var generatorCart = []
//     // Push items into our generator from our list
//     const cartGenerator = () => {
//         if (useNumeric === true){
//             generatorCart.push(numerics)
//         }
        
//         if (useSpecialChar === true) {
//             generatorCart.push(specialChars)
//         }

//         if(useLowerCase === true) {
//             generatorCart.push(lowerCases)
//         }

//         if (useUpperCase === true) {
//             generatorCart.push(upperCases)
//         }
//     };
//     cartGenerator();
//     if (generatorCart.length === 0) {
//         return window.alert("Please choose an input.")
//     };

//     var passwordGenerated = "";

//         for (let i = 0; i < passwordLength; i++) {
//         var rList = randomItem(generatorCart);
//         var rChar = randomItem(rList);
//         passwordGenerated += rChar
//     }
//     return passwordGenerated
// };
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }
// Add event listener to generate button
const generateBtn = document.querySelector('#generate')

function createPass() {
    const length = window.prompt("Enter the length of the password you would like to generate between 8 to 128 characters")

    if (parseInt(length) === false) {
        window.alert("Enter a number please.")
        return;
    }

    if (length < 8 || length > 128){
        window.alert("Please enter a number between 8 and 128")
        return;
    }
    let passwordVal = ""
    //options 
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
    }else if (upperCase === false && lowerCase === false && numbers === true && specialChar === false) {
        passwordVal = "1234567890"
    }else if (upperCase === false && lowerCase === false && numbers === false && specialChar === true) {
        passwordVal = "~!@#$%^&*()_+-=[]{}|:';,./<>?"
    } else {
        passwordVal = "";
    }
    console.log(passwordVal)
}
    //password generator
const generatePassword = () => {
        let length = 9;
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};




generateBtn.addEventListener("click", createPass)

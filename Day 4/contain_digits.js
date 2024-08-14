const str = "Check if this 9 string contains digits.";
let hasDigit = false;

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= '0' && char <= '9') {
        hasDigit = true;
        break;
    }
}

console.log(hasDigit);
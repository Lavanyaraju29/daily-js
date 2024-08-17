const str = "Hello@World!";
let hasSpecialChar = false;

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && !(char >= '0' && char <= '9')) {
        hasSpecialChar = true;
        break;
    }
}

console.log(hasSpecialChar);
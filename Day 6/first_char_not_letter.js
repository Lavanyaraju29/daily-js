const str3 = "Hello@World!";
let firstNonLetter = null;

for (let i = 0; i < str3.length; i++) {
    const char = str3[i];
    if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z')) {
        firstNonLetter = char;
        break;
    }
}

console.log(firstNonLetter);
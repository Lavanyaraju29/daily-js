const str = "!!! @@@ abc123";
let firstValidChar = "No valid character found";

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        firstValidChar = char;
        break;
    }
}

console.log(firstValidChar);
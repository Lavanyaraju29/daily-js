const str3 = "12345abc678";
let firstNonDigit = null;

for (let i = 0; i < str3.length; i++) {
    if (str3[i] < '0' || str3[i] > '9') {
        firstNonDigit = str3[i];
        break;
    }
}

console.log(firstNonDigit);
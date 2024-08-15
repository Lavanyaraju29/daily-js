const str1 = "Hello World!";
let hasUppercase = false;

for (let i = 0; i < str1.length; i++) {
    if (str1[i] >= 'A' && str1[i] <= 'Z') {
        hasUppercase = true;
        break;
    }
}

console.log(hasUppercase);
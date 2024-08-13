const str = "Hello World! This is a Test.";
let count = 0;

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'A' && char <= 'Z') {
        count++;
    }
}

console.log(count);
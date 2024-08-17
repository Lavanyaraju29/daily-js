const str2 = "hello";
let uniqueCount = 0;
let uniqueChars = {};

for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!uniqueChars[char]) {
        uniqueChars[char] = true;
        uniqueCount++;
    }
}

console.log(uniqueCount);
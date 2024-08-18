const str2 = "abc123def456";
let digitCount = 0;

for (let i = 0; i < str2.length; i++) {
    if (str2[i] >= '0' && str2[i] <= '9') {
        digitCount++;
    }
}

console.log(digitCount);
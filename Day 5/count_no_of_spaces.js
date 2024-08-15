const str2 = "Count the number of spaces.";
let spaceCount = 0;

for (let i = 0; i < str2.length; i++) {
    if (str2[i] === ' ') {
        spaceCount++;
    }
}

console.log(spaceCount);
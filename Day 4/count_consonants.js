const str = "Count the number of consonants in this string.";
let consonantCount = 0;
const vowels = 'aeiouAEIOU';

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        if (vowels.indexOf(char) === -1) {
            consonantCount++;
        }
    }
}

console.log(consonantCount);
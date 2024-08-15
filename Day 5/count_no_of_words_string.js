const str3 = "Count the number of words in this string.";
let wordCount = 0;
let inWord = false;

for (let i = 0; i < str3.length; i++) {
    const char = str3[i];
    if (char !== ' ' && char !== '\t' && char !== '\n') {
        if (!inWord) {
            wordCount++;
            inWord = true;
        }
    } else {
        inWord = false;
    }
}

console.log(wordCount);

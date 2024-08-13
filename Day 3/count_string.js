const str = "Count the number of words in this string.";
let wordCount = 0;
let inWord = false;

for (let i = 0; i < str.length; i++) {
    const char = str[i];
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
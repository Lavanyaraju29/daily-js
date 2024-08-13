const str = "Find the longest word in this string.";
const words = str.split(/\s+/);
let longestWord = "";

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log(longestWord);
const str = "nurses run";
let cleanedStr = "";
let reversedStr = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        cleanedStr += str[i];
        reversedStr = str[i] + reversedStr;
    }
}

const isPalindrome = cleanedStr === reversedStr;

console.log(isPalindrome);
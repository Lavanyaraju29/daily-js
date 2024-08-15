const arr6 = ["apple", "banana", "cherry", "apple", "date"];
const seen = new Set();
let firstRepeated = null;

for (let i = 0; i < arr6.length; i++) {
    if (seen.has(arr6[i])) {
        firstRepeated = arr6[i];
        break;
    }
    seen.add(arr6[i]);
}

console.log(firstRepeated);
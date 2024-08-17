const arr = ["madam", "racecar", "apple", "level", "banana"];
let palindromeCount = 0;

for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let reversed = "";
    
    for (let j = word.length - 1; j >= 0; j--) {
        reversed += word[j];
    }

    if (word === reversed) {
        palindromeCount++;
    }
}

console.log(palindromeCount);
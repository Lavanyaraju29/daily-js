const arr = [7, 14, 15, 30, 45];
let result = null;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
        result = arr[i];
        break;
    }
}

console.log(result);
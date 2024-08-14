const arr = [12, 14, 22, 35, 50]; 
let result = null;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 === 0) {
        result = arr[i];
        break;
    }
}

console.log(result);
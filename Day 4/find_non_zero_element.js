const arr = [0, 0, 0, 5, 3, 0]; 
let result = null;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        result = arr[i];
        break;
    }
}

console.log(result);
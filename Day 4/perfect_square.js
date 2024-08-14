const arr = [10, 15, 16, 20, 25]; 
let result = null;

function isPerfectSquare(num) {
    if (num < 0) return false;
    let i = 0;
    while (i * i <= num) {
        if (i * i === num) return true;
        i++;
    }
    return false;
}

for (let i = 0; i < arr.length; i++) {
    if (isPerfectSquare(arr[i])) {
        result = arr[i];
        break;
    }
}

console.log(result);
const arr = [1, 2, 3, 4, 8, 16, 18]; 
function isPowerOfTwo(num) {
    if (num <= 0) return false; 
    let value = num;
    while (value > 1) {
        if (value % 2 !== 0) return false;
        value /= 2;
    }
    return true;
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (isPowerOfTwo(arr[i])) {
        count++;
    }
}

console.log(count);
const arr = [10, 20, 30, 40, 50]; 
const value = 35;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < value) {
        count++;
    }
}

console.log(count);
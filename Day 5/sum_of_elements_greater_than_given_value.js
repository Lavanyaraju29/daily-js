const arr4 = [10, 20, 30, 40, 50];
const value = 25;
let sum = 0;

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > value) {
        sum += arr4[i];
    }
}

console.log(sum);
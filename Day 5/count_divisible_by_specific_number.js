const arr5 = [10, 20, 30, 40, 50];
const divisor = 10;
let countDivisible = 0;

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % divisor === 0) {
        countDivisible++;
    }
}

console.log(countDivisible);
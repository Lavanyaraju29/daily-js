const arr3 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeCount = 0;

for (let i = 0; i < arr3.length; i++) {
    const num = arr3[i];
    let isPrime = num > 1;

    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primeCount++;
    }
}

console.log(primeCount);
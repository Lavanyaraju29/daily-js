const arr = [2, 4, 5, 6, 7, 8, 9, 11]; 

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

let primeCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        primeCount++;
    }
}

console.log(primeCount);
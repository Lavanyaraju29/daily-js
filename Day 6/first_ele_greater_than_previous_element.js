const arr2 = [2, 2, 4, 3, 5, 7];
let firstGreaterElement = null;

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > arr2[i - 1]) {
        firstGreaterElement = arr2[i];
        break;
    }
}

console.log(firstGreaterElement);
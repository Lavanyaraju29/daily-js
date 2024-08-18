const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const target = 5;
let found = false;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
            found = true;
            break;
        }
    }
    if (found) break;
}

console.log(found);
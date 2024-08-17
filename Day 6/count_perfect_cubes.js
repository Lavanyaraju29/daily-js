const arr4 = [1, 8, 27, 16, 2, 9];
let perfectCubeCount = 0;

for (let i = 0; i < arr4.length; i++) {
    const cubeRoot = Math.round(Math.pow(arr4[i], 1/3));
    if (cubeRoot * cubeRoot * cubeRoot === arr4[i]) {
        perfectCubeCount++;
    }
}

console.log(perfectCubeCount);
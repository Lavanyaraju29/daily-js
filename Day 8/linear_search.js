const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; 
};

const arr = [5, 3, 7, 1, 9];
const target = 7;
console.log("Index:", linearSearch(arr, target));
const arr=[1,2,5,8,2,7];
const target = 2;
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        count++;
    }
}
console.log(count);
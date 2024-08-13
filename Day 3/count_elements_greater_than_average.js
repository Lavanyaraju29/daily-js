const arr=[5,10,15,20,25];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
const average = sum/arr.length;
let count = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>average){
        count++;
    }
}
console.log(count);
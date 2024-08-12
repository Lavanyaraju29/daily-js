const arr=[2,4,6,9,1,10];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);
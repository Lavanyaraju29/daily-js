const arr=[1,4,2,6,7,-4,6];
let sum = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        sum=sum+arr[i];
    }
}
console.log(sum);
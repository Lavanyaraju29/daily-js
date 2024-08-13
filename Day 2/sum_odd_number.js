const arr=[1,5,4,6,8,7];
let sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==1){
        sum=sum+arr[i];
    }
}
console.log(sum);
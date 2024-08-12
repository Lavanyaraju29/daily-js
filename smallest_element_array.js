const arr=[8,6,9,1,2];
let small=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<small){
        small=arr[i];
    }
}
console.log(small);
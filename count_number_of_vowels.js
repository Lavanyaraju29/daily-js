const stringArr = ["a","o","u","l","f","k"];
let count=0;
for(let i=0;i<stringArr.length;i++){
    if(stringArr[i]=="a"||stringArr[i]=="e"||stringArr[i]=="i"||stringArr[i]=="o"||stringArr[i]=="u"){
        count=count+1;
    }
}
console.log(count);

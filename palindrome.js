let str="naman";
let rev="";
for(let i=str.length-1;i>=0;--){
rev+=str[i];
}
if(rev==str){
console.log("yes");
}else{
console.log("not Plaindrom");
}
let num=20;
let count=0;
for(let i=1;i<=num;i++)
{
if(num%i==0)
{
count++;
}
if(count==2){
console.log(" Not Prime");
}
else{
console.log("Prime");
}
}
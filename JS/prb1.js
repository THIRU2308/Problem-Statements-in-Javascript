let sum=0;
let m=prompt();
let n=prompt();
if(m>n){
    console.log(0);
}
else{
    while(m<=n){
        sum+=m*m*m;
        m++;
    }
}
console.log(sum);
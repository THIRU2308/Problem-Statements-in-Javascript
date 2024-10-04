let m=parseInt(prompt("Enter the first number"));
let n=parseInt(prompt("Enter the second number"));
let i;
if(m>n){
    alert("1");
}
else{
    let product=1;
    for(i=m;i<=n;i++){
      if(i%2!=0){
      product*=i;
    }
}   
    alert(product);
}
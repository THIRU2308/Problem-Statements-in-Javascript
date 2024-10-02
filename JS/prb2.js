console.log("MENU");
console.log("1.Pizza:200 rs");
console.log("2.Burger:300 rs");
console.log("3.Chicken Briyani:250 rs");
console.log("4.Apple Juice:100 rs");
console.log("5.Idlie:80 rs");
let total=0;
let c='y';
do{
    let ch=prompt("Enter your choice:");
    switch(ch){
        case '1':{
            let qty=prompt("Enter the quantity:");
            total+=qty*200;
            break;
        }
        case '2':{
            let qty=prompt("Enter the quantity:");
            total+=qty*300;
            break;
        }
        case '3':{
            let qty=prompt("Enter the quantity:");
            total+=qty*250;
            break;
        }
        case '4':{
            let qty=prompt("Enter the quantity:");
            total+=qty*100;
            break;
        }
        case '5':{
            let qty=prompt("Enter the quantity:");
            total+=qty*80;
            break;
        }
    }
    c=prompt("Do you want to continue(y/n):");
}while(c=='y'||c=='Y');
if(total>500){
    let discount=total*0.1;
    total-=discount;
}
console.log(total);
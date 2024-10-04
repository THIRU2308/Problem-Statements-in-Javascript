let boxes=prompt("Enter the number separated by commas");
let arr=boxes.split(",").map(Number);
let box=[];
let emptyboxcount=0;
let i;
for(i=0;i<arr.length;i++){
    if(arr[i]==0){
        emptyboxcount++;
    }
    else{
        box.push(arr[i]);
    }
}
box=box.sort();
for(i=0;i<emptyboxcount;i++){
    box.push(0);
}
console.log(box);
console.log(emptyboxcount);
let saveEl=document.getElementById("save-elem");
let countEl=document.getElementById("count-elem");

let count=0;
console.log(saveEl);
//function increment
function increment() {
    
   
    count+=1;
    countEl.innerText=count;
}

 //decrement function
 function decrement() { 
    count-=1;
    countEl.innerText=count; 
 }


//save function
function save() {
    let countStr=count+" - ";
    saveEl.innerText+=countStr;
    console.log(count);
}



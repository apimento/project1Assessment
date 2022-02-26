//* CACHED ELEMENTS *// 
let runningTotal = document.querySelector("#runningTotal");
const addButton = document.querySelector("#addButton"); 
let inputBox = document.querySelector("#inputBox"); 
const subButton = document.querySelector("#subtractButton"); 


//* EVENT LISTENERS *// 
addButton.addEventListener( "click" , function(e){ 
    console.log(inputBox.value , runningTotal.innerText);
    const num1 = parseInt(inputBox.value); 
    const num2 = parseInt(runningTotal.innerText);
    let sum = num1 + num2;
    runningTotal.innerText = sum;
    if (sum < 0 ){ 
        runningTotal.style.color = "red";
    } else { 
        runningTotal.style.color = "black";
    }
})


subButton.addEventListener( "click" , function(e){ 
    console.log(inputBox.value , runningTotal.innerText);
    const num1 = parseInt(inputBox.value); 
    const num2 = parseInt(runningTotal.innerText);
    let difference = num2 - num1;
    runningTotal.innerText = difference; 
    if (difference < 0 ){ 
        runningTotal.style.color = "red";
    } else { 
        runningTotal.style.color = "black";
    }
}) 






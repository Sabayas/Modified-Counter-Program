const add = document.getElementById("add");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const NumberDisplay = document.getElementById("NumberDisplay");
const Inputbox = document.getElementById("input");


let counter = 0;
add.addEventListener("click", function(){
 counter = Inputbox.value + counter;


 NumberDisplay.innerHTML = `${counter}`
})
minus.addEventListener("click", function(){
    counter=-Inputbox.value;
    NumberDisplay.innerHTML = `${counter}`
})
reset.addEventListener("click", function(){
    counter = 0;
    NumberDisplay.innerHTML = ` ${counter}`
})
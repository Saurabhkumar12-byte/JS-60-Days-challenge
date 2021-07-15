const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");
const value = document.getElementById("value");
const message = document.getElementById("message");
let count = 0;

reset.addEventListener("click", () => {
  value.innerHTML = 0;
  count = 0;
 
  message.innerHTML= "You have reset the value in cart to 0";
  setTimeout(() => {
   message.innerHTML= "";
  }, 3500);
});

plus.addEventListener("click", () => {
  value.innerHTML = ++count;
});
minus.addEventListener("click", () => {
    if (count === 0) {
        
        message.innerHTML= "Value in cart can't be less than 0";
        setTimeout(() => {
         message.innerHTML= "";
        }, 3500);
    }
 else{
    value.innerHTML = --count;
 }
});

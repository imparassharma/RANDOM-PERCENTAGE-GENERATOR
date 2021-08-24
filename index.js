
const display_value = document.querySelector(".container");

const btn = document.querySelector(".button");

btn.addEventListener("click",function(){
    const randomno = getrandomno();
    display_value.textContent = randomno+"%";
})

function getrandomno(){
   return Math.floor(Math.random()*100);
}


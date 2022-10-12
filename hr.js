
// Gives the mobile version a expandable menu sidebar when being clicked

const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click", () =>
    document.querySelector("ul").classList.toggle('visible')
);

main.addEventListener("click", () =>
document.querySelector("ul").classList.remove('visible')
);



// calculating max hr and the personal hrs of each heart rate zone

const buttonHr = document.querySelector(".calculatehr");
const age = document.querySelector(".age");
const maxhr = document.querySelector(".maxhr");
const zone1 = document.querySelector(".zone1 .personalhr");
const zone2 = document.querySelector(".zone2 .personalhr");
const zone3 = document.querySelector(".zone3 .personalhr");
const zone4 = document.querySelector(".zone4 .personalhr");
const zone5 = document.querySelector(".zone5 .personalhr");


buttonHr.addEventListener("click", () => {  
    if(age.value){
        for(let text of document.querySelectorAll(".personalhr")){
            text.innerText = ""; 
        }
        maxhr.value = 220 - Number(age.value);
        zone1.innerText = `${Math.floor(0.5*maxhr.value)}-${Math.floor(0.6*maxhr.value)}`;
        zone2.innerText = `${Math.floor(0.6*maxhr.value)}-${Math.floor(0.7*maxhr.value)}`;
        zone3.innerText = `${Math.floor(0.7*maxhr.value)}-${Math.floor(0.8*maxhr.value)}`;
        zone4.innerText = `${Math.floor(0.8*maxhr.value)}-${Math.floor(0.9*maxhr.value)}`;
        zone5.innerText = `${Math.floor(0.9*maxhr.value)}-${Math.floor(maxhr.value)}`;
    }
})

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
})
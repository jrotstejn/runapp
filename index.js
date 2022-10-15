
// Gives the mobile version a expandable menu sidebar when being clicked

const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const arrow = document.querySelector(".arrow");
const ul = document.querySelector("ul");
const performanceSection = document.querySelector(".performancesection");
const hrSection = document.querySelector(".hrsection");
const planSection = document.querySelector(".plansection");

menu.addEventListener("click", () =>
    ul.classList.toggle('visible')
);

main.addEventListener("click", () =>
    ul.classList.remove('visible')
);

arrow.addEventListener("click", () => {
    if(performanceSection.classList.contains("visiblesection")){
        performanceSection.classList.toggle("visiblesection");
        hrSection.classList.toggle("visiblesection");
    }
    else if(hrSection.classList.contains("visiblesection")){
        hrSection.classList.toggle("visiblesection");
        planSection.classList.toggle("visiblesection");
    }
    else if(planSection.classList.contains("visiblesection")){
        planSection.classList.toggle("visiblesection");
        performanceSection.classList.toggle("visiblesection");
    }
})
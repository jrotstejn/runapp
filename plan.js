
// Gives the mobile version a expandable menu sidebar when being clicked

const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const ul = document.querySelector("ul");

menu.addEventListener("click", () =>
    ul.classList.toggle('visible')
);

main.addEventListener("click", () =>
    ul.classList.remove('visible')
);

// simulating the right plan for the chosen goal

const performance = [
    {day: 1, type: "Tempo", hr: "80-90%"},
    {day: 2, type: "Long Run", hr: "60-70%"},
    {day: 3, type: "Interval", hr: "90-100%"},
    {day: 4, type: "Recovery",  hr: "50-60%"},
    {day: 5, type: "Slow Run",  hr: "60-70%"}
]

const health = [
    {day: 1, type: "Recovery",  hr: "50-60%"},
    {day: 2, type: "Tempo Run",  hr: "80-90%"},
    {day: 3, type: "Recovery", hr: "50-60%"},
    {day: 4, type: "Long Run",  hr: "60-70%"},
    {day: 5, type: "Recovery",  hr: "50-60%"}
]

const buttonSimulate = document.querySelector(".simulateplan"); 
const numberOfRuns = document.querySelector("#runs"); 
const goal = document.querySelector("#goal");

buttonSimulate.addEventListener("click", () => {
    for(text of document.querySelectorAll(".zonevalue p")){
        text.innerText = "";
    }
    for(zone of document.querySelectorAll(".zonevalue")){
        zone.classList.remove("invisible");
    }
    if(goal.value === "performance"){
        for(let i = 0; i < numberOfRuns.value; i++ ){
            document.querySelector(`.zone${i+1} .day`).innerText = performance[i].day;
            document.querySelector(`.zone${i+1} .type`).innerText = performance[i].type;
            document.querySelector(`.zone${i+1} .maxhr`).innerText = performance[i].hr;
            }
        if (numberOfRuns.value < 5){
            for(let j = Number(numberOfRuns.value); j < 5; j++){
                document.querySelector(`.zone${j+1}`).classList.toggle("invisible"); 
            }    
        }
    }
    else if(goal.value === "health"){
        for(let i = 0; i < numberOfRuns.value; i++ ){
            document.querySelector(`.zone${i+1} .day`).innerText = health[i].day;
            document.querySelector(`.zone${i+1} .type`).innerText = health[i].type;
            document.querySelector(`.zone${i+1} .maxhr`).innerText = health[i].hr;
        }
        if (numberOfRuns.value < 5){
            for(let j = Number(numberOfRuns.value); j < 5; j++){
                document.querySelector(`.zone${j+1}`).classList.toggle("invisible"); 
            }
        }        
    }
})
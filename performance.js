
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


// Calculating speed, distance or duration


const distance = document.querySelector(".distanceInput");
const speed = document.querySelector(".speedInput");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const calculateButton = document.querySelector(".calculate");

function transformDurationInDecimals(){
        let leftOverMinutes = seconds.value / 60;
        let leftOverHours = (+(minutes.value) + leftOverMinutes) / 60;
        let hoursDecimal = +hours.value + leftOverHours;
        return hoursDecimal;
}

function durationCalc() {
    const num = distance.value / speed.value;
    const hours = Math.floor(num);
    const num2 = num % 1;
    const minutes = Math.floor(num2 * 60);
    const num3 = (num2*60) % 1;
    const seconds = Math.floor(num3 * 60);

    document.querySelector("#hours").value = hours; 
    document.querySelector("#minutes").value = minutes; 
    document.querySelector("#seconds").value = seconds; 
}

function speedCalc(){
    speed.value = Math.round(((+distance.value) / transformDurationInDecimals())*100)/100;
}

function distanceCalc(){
    distance.value = Math.round(((+speed.value) * transformDurationInDecimals())*100)/100;
}

calculateButton.addEventListener("click", speedCalc);



// Choosing what to calculate by selecting the right buttons (performance)

let allInputs = document.querySelectorAll("input"); 

const buttonSpeed = {
    button1: document.querySelector(".speed"),
    button2: document.querySelector(".distance"),
    button3: document.querySelector(".duration"),
    input1: document.querySelectorAll(".speedInput"),
    input2: document.querySelectorAll(".distanceInput"),
    input3: document.querySelectorAll(".durationInput")
}

const buttonDuration = {
    button1: document.querySelector(".duration"),
    button2: document.querySelector(".speed"),
    button3: document.querySelector(".distance"),
    input1: document.querySelectorAll(".durationInput"),
    input2: document.querySelectorAll(".speedInput"),
    input3: document.querySelectorAll(".distanceInput")
}

const buttonDistance = {
    button1: document.querySelector(".distance"),
    button2: document.querySelector(".duration"),
    button3: document.querySelector(".speed"),
    input1: document.querySelectorAll(".distanceInput"),
    input2: document.querySelectorAll(".durationInput"),
    input3: document.querySelectorAll(".speedInput")
}


const toggleButton = function(clickedButton) {
    if (!clickedButton.button1.classList.contains("active"))
    {
        clickedButton.button1.classList.toggle("active");
        for(let input of clickedButton.input1){
            input.classList.toggle("disabled");
        }
        for(let text of allInputs){
            text.value = "";
        }
        if (clickedButton.button2.classList.contains("active"))
        {
        clickedButton.button2.classList.toggle("active");
        for(let input of clickedButton.input2){
            input.classList.toggle("disabled");
        }
        for(let text of allInputs){
            text.value = "";
        }
        }
        else if (clickedButton.button3.classList.contains("active"))
        {
            clickedButton.button3.classList.toggle("active");
            for(let input of clickedButton.input3){
                input.classList.toggle("disabled");
            }
            for(let text of allInputs){
                text.value = "";
            }
        }
    }  
};

buttonDistance.button1.addEventListener("click", () => {
    toggleButton(buttonDistance);
    calculateButton.removeEventListener("click", speedCalc);
    calculateButton.removeEventListener("click", durationCalc);
    calculateButton.addEventListener("click", distanceCalc);
})

buttonDuration.button1.addEventListener("click", () => {
    toggleButton(buttonDuration)
    calculateButton.removeEventListener("click", speedCalc);
    calculateButton.addEventListener("click", durationCalc);
    calculateButton.removeEventListener("click", distanceCalc);
})

buttonSpeed.button1.addEventListener("click", () => {
    toggleButton(buttonSpeed)
    calculateButton.addEventListener("click", speedCalc);
    calculateButton.removeEventListener("click", durationCalc);
    calculateButton.removeEventListener("click", distanceCalc);
})

// Variable for popup modal
const viewBtn = document.querySelector(".fa-gear");
const popup = document.querySelector(".popup");
const close = popup.querySelector(".close-btn");

// View Popup Modal
viewBtn.addEventListener("click", () => {
    popup.classList.toggle("show");
});
close.addEventListener("click", () => {
    viewBtn.click();
    setFont(defaultFontVal);
});

function play() {
    var audio = new Audio('../assets/audio/bell.wav');
    audio.play();
  }

let pomodoroInput = document.querySelector("#pomodoro-input");
let shortBreakInput = document.querySelector("#short-break-input");
let longBreakinput = document.querySelector("#long-break-input");
//let audi
//console.log(pomodoroInput.value, shortBreakInput.value, longBreakinput.value)

let subContainer = document.querySelector(".sub-container")
let selectFontBtns = document.querySelector(".select-font-btn");
//let  = document.querySelector(".active-font").style;
const defaultFontElement = document.querySelector(".active-font");
const defaultFontCssObj = window.getComputedStyle(defaultFontElement, null);

let defaultFontVal = defaultFontCssObj.getPropertyValue("font-family");
console.log(defaultFontVal, 0)
let newFont = defaultFontVal;

selectFontBtns.addEventListener("click", function (e) {
    let activeFont = document.querySelector(".active-font");
    let fontClicked = e.target
    if (fontClicked.children.length < 1) {
        //console.log(activeFont, 0)
        activeFontAttributeValues = activeFont.getAttribute("class");
        //console.log(activeFontAttributeValues);
        activeFont.removeAttribute("class");
        activeFont.setAttribute("class", activeFontAttributeValues.replace("active-font", ""));
        let initialFontAttribute = fontClicked.getAttribute("class");
        fontClicked.setAttribute("class", `${initialFontAttribute} active-font`)
        //console.log(initialFontAttribute, 234342)
        let bgFontSet = initialFontAttribute.split(" ")[0]
        bgFontSet = bgFontSet.split("-");
        bgFontSet = `${bgFontSet[0]} ${bgFontSet[1]}`
        console.log(bgFontSet);
        setFont(bgFontSet);
        newFont = bgFontSet;
    }
})


function setFont(bgFontSet) {
    let defaultBgAndFont = document.querySelector(':root');
    console.log(defaultBgAndFont, "op")
    defaultBgAndFont.style.setProperty('--default-font', bgFontSet);

    //defaultBgAndFont.style.setColorAndFont()
}

// Select color function and eventlistener
let selectColor = document.querySelector(".select-color-btn");

function colorTobeSelected(e) {
    let backgroundElementToBeChanged = e.target;
    // console.log(backgroundElementToBeChanged.childElementCount);
    if (backgroundElementToBeChanged.childElementCount < 1) {
        backgroundElementToBeChanged = backgroundElementToBeChanged.parentNode;
    }

    let faCheck = document.querySelector(".fa-check");
    faCheck.removeAttribute("class");

    backgroundElementToBeChanged.children[0].setAttribute("class", "fa-solid fa-check");
    //faCheck.style.display = "flex";
    backgroundElementToBeChanged.children[0].style.display = "flex"
    console.log(backgroundElementToBeChanged, 'fa-check');

    let bgColorSet = window.getComputedStyle(backgroundElementToBeChanged, null).getPropertyValue("background-color");
    setColor(backgroundElementToBeChanged, bgColorSet)
}

function setColor(backgroundElementToBeChanged, bgColorSet) {
    let defaultColor = document.querySelector(":root");
    defaultColor.style.setProperty("--default-color", bgColorSet);
    console.log(defaultColor)
}
selectColor.addEventListener("click", function (e) {
    colorTobeSelected(e)
})

let interval = 1;
let initialMinutes = document.querySelector(".minutes").textContent;
let minutesText = document.querySelector(".minutes");
let secondsText = document.querySelector(".seconds");
let totalSeconds = minutesText.textContent * 60;
let progressTotalValue = 360;
let timer = null;
let initialTime = null;

function startTimer() {
    timer = setInterval(function () {
        let progressReducer = interval / totalSeconds * 360;

        progressCircle.style.background = `conic-gradient(var(--default-color)
         ${progressTotalValue-progressReducer}deg, var(--navy-blue) 0deg)`;

        // get previous seconds when paused
        let secondsTextN = 60 - interval % 60;

        if (secondsTextN < 60) {
            secondsText.textContent = secondsTextN.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        } else if (secondsTextN === 60) {
            secondsText.textContent = 0;
        }

        if (interval == 1 || secondsTextN == 59) {
            let minutesParse = parseInt(minutesText.textContent) - 1;
            minutesText.textContent = minutesParse.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        }
        interval++;
        console.log(progressReducer);
        console.log(progressTotalValue, "PTV");

        if (progressReducer >= progressTotalValue) {
            clearInterval(timer);
            progressCircle.style.background = `conic-gradient(var(--default-color)
            ${progressTotalValue}deg, var(--navy-blue) 0deg)`;
            //console.log(progressCircle, "hi")
            minutesText.textContent = "00";
            secondsText.textContent = "00";
            
            interval = 0;
            //Set timer start button to RESTART
            timerStartButton.textContent = "RESTART"
            play();
        }
    }, 1000)
}

function resumeTimer() {
    initialTime = setInterval(() => {
        let progressReducer = interval / totalSeconds * 360;

        progressCircle.style.background = `conic-gradient(var(--default-color)
         ${progressTotalValue-progressReducer}deg, var(--navy-blue) 0deg)`;

        // get previous seconds when paused
        let secondsTextN = 60 - interval % 60;

        if (secondsTextN < 60) {
            secondsText.textContent = secondsTextN.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        } else if (secondsTextN == 60) {
            secondsText.textContent = 0;
        }

        if (interval == 1) {
            let minutesParse = parseInt(minutesText.textContent) - 1;
            minutesText.textContent = minutesParse.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        }

        interval++;

        if(progressReducer >= progressTotalValue){
            clearInterval(initialTime);

            progressCircle.style.background = `conic-gradient(var(--default-color)
         ${progressTotalValue}deg, var(--navy-blue) 0deg)`;

         minutesText.textContent = "00";
         secondsText.textContent = "00";
         interval = 1;
         timerStartButton.textContent = "RESTART";
        }
    }, 1000)
}

function restartTimer() {
    minutesText.textContent = initialMinutes.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

    timer = setInterval(() => {
        let progressReducer = interval / totalSeconds * 360;
        
        progressCircle.style.background = `conic-gradient(var(--default-color)
         ${progressTotalValue-progressReducer}deg, var(--navy-blue) 0deg)`;

        // get previous seconds when paused
        let secondsTextN = 60 - interval % 60;
        console.log(secondsTextN, 90);
        if (secondsTextN < 60) {
            secondsText.textContent = secondsTextN.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        } else if (secondsTextN == 60) {
            secondsText.textContent = 0;
        }

        if (interval == 1 || secondsTextN == 59) {
            let minutesParse = parseInt(minutesText.textContent) - 1;
            minutesText.textContent = minutesParse.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        }
        interval++;
        

        if (progressReducer >= progressTotalValue) {
            clearInterval(timer);

            progressCircle.style.background = `conic-gradient(var(--default-color)
            ${progressTotalValue-progressReducer}deg, var(--navy-blue) 0deg)`;

            minutesText.textContent = "00";
            secondsText.textContent = "00";
            interval = 0;
            timerStartButton.textContent = "RESTART";

        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    clearInterval(initialTime);
}

// Pause function
let timerStartButton = document.querySelector("#start-text");
timerStartButton.addEventListener("click", function () {
    if (timerStartButton.textContent == "START") {
        startTimer();
        timerStartButton.textContent = "PAUSE";
    } else if (timerStartButton.textContent == "PAUSE") {
        timerStartButton.textContent = "RESUME";
        console.log("tl");
        stopTimer();
    } else if (timerStartButton.textContent == "RESUME") {
        timerStartButton.textContent = "PAUSE";
        // add Resume time function on the next line
        resumeTimer();

    } else if (timerStartButton.textContent == "RESTART") {
        timerStartButton.textContent = "PAUSE";
        // add restart time function on the next line
        restartTimer();
    }
})

const navigateMode = document.querySelector("#select-mode");

navigateMode.addEventListener("click", function (e) {
    navItemClicked = e.target.textContent.replace(/\s/g, "");
    modeSelected = e.target;
    activeMode = document.querySelector(".activeMode");
    activeMode.removeAttribute("class");
    activeMode.setAttribute("class", "select-time-type");
    modeSelected.setAttribute("class", "select-time-type activeMode");

    //console.log(navItemClicked);
    stopTimer();

    let pd = parseInt(form.elements['pomodoro'].value);
    let sb = parseInt(form.elements['shortBreak'].value);
    let lb = parseInt(form.elements['longBreak'].value);

    let timer = document.querySelector(".timer");
    if (navItemClicked == "pomodoro") {
        timer.setAttribute("id", "pomodoro")
        console.log(timer);

        timer.firstElementChild.textContent = pd;
        timer.lastElementChild.textContent = "00";

        interval = 1;

        initialMinutes = document.querySelector(".minutes").textContent;
        minutesText = document.querySelector(".minutes");
        totalSeconds = minutesText.textContent * 60;
        timerStartButton.textContent = "START";

        progressCircle.style.background = `conic-gradient(var(--default-color) ${progressTotalValue}deg, var(--navy-blue) 0deg)`;
    } else if (navItemClicked == "shortbreak") {
        timer.setAttribute("id", "shortbreak");

        timer.firstElementChild.textContent = sb;
        timer.lastElementChild.textContent = "00";

        interval = 1;

        initialMinutes = document.querySelector(".minutes").textContent;
        minutesText = document.querySelector(".minutes");
        totalSeconds = minutesText.textContent * 60;
        timerStartButton.textContent = "START";

        progressCircle.style.background = `conic-gradient(var(--default-color) ${progressTotalValue}deg, var(--navy-blue) 0deg)`;
    } else if (navItemClicked == "longbreak") {
        timer.setAttribute("id", "longbreak");

        timer.firstElementChild.textContent = lb;
        timer.lastElementChild.textContent = "00";

        interval = 1;

        initialMinutes = document.querySelector(".minutes").textContent;
        minutesText = document.querySelector(".minutes");
        totalSeconds = minutesText.textContent * 60;
        timerStartButton.textContent = "START";

        progressCircle.style.background = `conic-gradient(var(--default-color) ${progressTotalValue}deg, var(--navy-blue) 0deg)`;

    }
})

const form = document.querySelector("#form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let pd = parseInt(form.elements['pomodoro'].value);
    let sb = parseInt(form.elements['shortBreak'].value);
    let lb = parseInt(form.elements['longBreak'].value);

    let timer = document.querySelector(".timer");

    if(timer.getAttribute("class").match("pomodoro")){
        timer.firstElementChild.textContent = pd;
        timer.lastElementChild.textContent = "00";

        interval = 1;

        initialMinutes = document.querySelector(".minutes").textContent;
        minutesText = document.querySelector(".minutes");
        totalSeconds = minutesText.textContent * 60;
        timerStartButton.textContent = "START";

        progressCircle.style.background = `conic-gradient(var(--default-color) ${progressTotalValue}deg, var(--navy-blue) 0deg)`;
    }else if(timer.getAttribute("class").match("shortbreak")){
        timer.firstElementChild.textContent = sb;
        timer.lastElementChild.textContent = "00";

        interval = 1;

        initialMinutes = document.querySelector(".minutes").textContent;
        minutesText = document.querySelector("minutes");
        totalSeconds = minutesText.textContent * 60;
        timerStartButton.textContent = "START";

        progressCircle.style.background = `conic-gradient(var(--default-color) ${progressTotalValue}deg, var(--navy-blue) 0deg)`;
    }else if(timer.getAttribute("class").match("longbreak")){
        timer.firstElementChild.textContent = lb;
        timer.lastElementChild.textContent = "00";

        interval = 1;

        initialMinutes = document.querySelector(".minutes").textContent;
        minutesText = document.querySelector("minutes");
        totalSeconds = minutesText.textContent * 60;
        timerStartButton.textContent = "START";

        progressCircle.style.background = `conic-gradient(var(--default-color) ${progressTotalValue}deg, var(--navy-blue) 0deg)`;
    }

    defaultFontVal = newFont;
    setFont(defaultFontVal);
    viewBtn.click();
})

// let btnApply = document.querySelector(".apply");
// let btnEventClicked = false;
// btnApply.addEventListener("click", function (event) {
//     event.preventDefault()
    
// })
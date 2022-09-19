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
});


let pomodoroInput = document.querySelector("#pomodoro-input");
let shortBreakInput = document.querySelector("#short-break-input");
let longBreakInput = document.querySelector("#long-break-input");

let startText = document.querySelector(".alert-text-start");
// let restartText = document.querySelector(".alert-text-restart");
// let pauseText = document.querySelector(".alert-text-pause");

// let ticked = document.querySelector(".fa-gear");

// let timerObject = {
//     "pomodoro-mode": parseInt(pomodoroInput.value) || 25,
//     "shortBreak-mode": parseInt(shortBreakInput.value) || 5,
//     "longBreak-mode": parseInt(longBreakInput.value) || 15,
//     longBreakInterval: 4,
//     session: 0,
// };

// const getRemainingTime = (endTime) => {
//     const currentTime = Date.parse(new Date());
//     const difference = endTime - currentTime;

//     const total = Number.parseInt(difference / 1000, 10);
//     const minutes = Number.parseInt((total / 60) % 60, 10);
//     const seconds = Number.parseInt(total % 60, 10);

//     return {
//         total,
//         minutes,
//         seconds,
//     };
// }

// const updateClock = () => {
//     const {
//         remainingTime
//     } = timerObject;
//     //console.log(`Update Clock fn: ${remainingTime}`)
//     let minutes = `${remainingTime.minutes}`;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     let seconds = `${remainingTime.seconds}`;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     //console.log(remainingTime.total);

//     let minutesValue = document.querySelector('.minutes');
//     let secondsValue = document.querySelector('.seconds');

//     minutesValue.innerHTML = minutes;
//     secondsValue.innerHTML = seconds;
// }
// let checkOrange = document.querySelector("#checkOrange");
// let checkCyan = document.querySelector("#checkCyan");
// let checkPurple = document.querySelector("#checkPurple");
// let colorCahange = document.querySelector(".changeToColor")
// const changeColor = (color) => {
//     if (color === "orange") {
//         //globalColor = "bg-orange";
//         colorCahange.classList.add("bg-orange");
//         colorCahange.classList.remove("bg-purple");
//         colorCahange.classList.remove("bg-cyan");

//         // pomodoroSelect.classList.add("bg-orange");
//         // pomodoroSelect.classList.remove("pomodoro-time-select");

//         checkOrange.style.display = "flex";
//         checkCyan.style.display = "none";
//         checkPurple.style.display = "none";
//     } else if (color === "cyan") {
//         // globalColor = "bg-cyan";
//         colorCahange.classList.remove("bg-orange");
//         colorCahange.classList.remove("bg-purple");
//         colorCahange.classList.add("bg-cyan");

//         // pomodoroSelect.classList.add("bg-cyan");
//         // pomodoroSelect.classList.remove("pomodoro-time-select");

//         // shortBreakSelect.classList.add("bg-cyan");
//         // shortBreakSelect.classList.remove("pomodoro-time-select");

//         // longBreakSelect.classList.add("bg-cyan");
//         // longBreakSelect.classList.remove("pomodoro-time-select");

//         checkOrange.style.display = "none";
//         checkCyan.style.display = "flex";
//         checkPurple.style.display = "none";
//     } else if (color === "purple") {
//         // globalColor = "bg-purple";
//         colorCahange.classList.add("bg-purple");
//         colorCahange.classList.remove("bg-cyan");
//         colorCahange.classList.remove("bg-orange")

//         // pomodoroSelect.classList.add("bg-purple");
//         // pomodoroSelect.classList.remove("pomodoro-time-select");

//         // shortBreakSelect.classList.add("bg-purple");
//         // shortBreakSelect.classList.remove("pomodoro-time-select");

//         // longBreakSelect.classList.add("bg-purple");
//         // longBreakSelect.classList.remove("pomodoro-time-select");

//         checkPurple.style.display = "flex";
//         checkOrange.style.display = "none";
//         checkCyan.style.display = "none";
//     }
//     //console.log(color);
// }
let checkKumbh = document.querySelector("#checkKumbh");
let checkRoboto = document.querySelector("#checkRoboto");
let checkSpace = document.querySelector("#checkSpace");
let subContainer = document.querySelector(".sub-container");

const changeFont = (font) => {
    if (font === "kumbh") {
        subContainer.style.setProperty("font-family", "Kumbh Sans", "important");
        checkKumbh.style.backgroundColor = "var(--navy-blue)";
        checkRoboto.style.backgroundColor = "#EBEDF9";
        checkSpace.style.backgroundColor = "#EBEDF9";

        checkKumbh.style.color = "#EBEDF9";
        checkRoboto.style.color = "var(--navy-blue)";
        checkSpace.style.color = "var(--navy-blue)";

    } else if (font === "roboto") {
        subContainer.style.setProperty("font-family", "Roboto Slab", "important");
        // subContainer.style.fontFamily = "Roboto Slab";
        checkKumbh.style.backgroundColor = "#EBEDF9";
        checkRoboto.style.backgroundColor = "var(--navy-blue)";
        checkSpace.style.backgroundColor = "#EBEDF9";

        checkKumbh.style.color = "var(--navy-blue)";
        checkRoboto.style.color = "#EBEDF9";
        checkSpace.style.color = "var(--navy-blue)";
    } else if (font === "space") {
        subContainer.style.setProperty("font-family", "Space Mono", "important");
        // subContainer.style.fontFamily = "Space Mono";
        checkKumbh.style.backgroundColor = "#EBEDF9";
        checkRoboto.style.backgroundColor = "#EBEDF9";
        checkSpace.style.backgroundColor = "var(--navy-blue)";

        checkKumbh.style.color = "var(--navy-blue)";
        checkRoboto.style.color = "var(--navy-blue)";
        checkSpace.style.color = "#EBEDF9";
    }
}

// let interval;
// let isPaused = false;

let progressCircle = document.querySelector("#progressCircle");

/*function startTimer() {
    let {
        total
    } = timerObject.remainingTime;
    speed = 1000;
    const endTime = Date.parse(new Date()) + total * speed;

    let progressValue = 360;
    let progressEndValue = timerObject.remainingTime.total * speed;
    let tick = progressValue/total;
    // console.log(progressValue, progressEndValue)

    if (timerObject.mode === "pomodoro-mode") timerObject.session++;

    interval = setInterval(() => {
        timerObject.remainingTime = getRemainingTime(endTime);
        
        progressValue -= tick;        
        //console.log(tick)
        progressCircle.style.background = `conic-gradient(
            var(--default-color) ${progressValue}deg,
            var(--navy-blue)  0deg
            )`;
            //console.log(`progress value: ${progressValue}, tick: ${tick}`)
        if (progressEndValue === progressValue) {
            clearInterval(interval)
        }
        updateClock();
        total = timerObject.remainingTime.total;
        if (total <= 0) {
            clearInterval(interval);
            switch (timerObject.mode) {
                case ("pomodoro-mode"):
                    if (timerObject.session % timerObject.longBreakInterval === 0) {
                        switchModeSelection("longBreak-mode");
                    } else {
                        switchModeSelection("shortBreak-mode");
                    }
                    break;
                default:
                    switchModeSelection("pomodoro-mode");
            }
            startTimer();

        }
    }, speed)

}

function stopTimer() {
    
    clearInterval(interval);
}

const togglePause = () => {
    isPaused = !isPaused;
    if (isPaused) {
        startText.innerHTML = "PAUSE";
    } else {
        startText.innerHTML = "RESUME";
    }
}
startText.addEventListener('click', (e) => {
    if (interval === undefined) {
        e.target.textContent = "PAUSE"
        startTimer();
    }else if(interval == 0){
        e.target.textContent = "RESUME"
        startTimer()
    }
     else {
        e.target.textContent = "START"
        stopTimer();
    }
})
*/
// const switchModeSelection = (mode) => {
//     //console.log(mode)
//     timerObject = {
//         ...timerObject,
//         mode,
//         remainingTime: {
//             total: timerObject[mode] * 60,
//             minutes: timerObject[mode],
//             seconds: 0,
//         }
//     }
    
//     if (mode === "pomodoro-mode") {
//         pomodoroSelect.classList.add("pomodoro-time-select");
//         shortBreakSelect.classList.remove("short-break-time-select");
//         longBreakSelect.classList.remove("long-break-time-select");
//     } else if (mode === "shortBreak-mode") {
//         shortBreakSelect.classList.add("short-break-time-select");
//         longBreakSelect.classList.remove("long-break-time-select");
//         pomodoroSelect.classList.remove("pomodoro-time-select");
//     } else if (mode === "longBreak-mode") {
//         longBreakSelect.classList.add("long-break-time-select");
//         pomodoroSelect.classList.remove("pomodoro-time-select");
//         shortBreakSelect.classList.remove("short-break-time-select");
//     }
//     updateClock();
//     stopTimer();
// }
// detect click on any of the different modes
// const handleModeSelection = (clickEvent) => {
//     const mode = clickEvent.target.dataset;
//     if (!mode) return;
//     switchModeSelection(mode);
// }



// let modeSelector = document.querySelector("#select-mode");

let selectColor = document.querySelector(".select-color-btn");

// function switchMode(e, active){
//     let mode = e.target;
//     if(mode.getAttribute('class')==="select-time-type"){
//         // active.removeAttribute('class');
// 		// active.setAttribute('class','active');
// 		// mode.setAttribute('class', 'pomodoro-time-select');
//         console.log(mode)
//     }
    
// }
// modeSelector.addEventListener('click', switchMode);

function colorToBeSelected(e){
    // console.log(e.target)
    // let colorToBeChanged = e.target.style;
    // console.log(colorToBeChanged);
    let backgroundElementToBeChanged = e.target
    //console.log(backgroundElementToBeChanged.childElementCount)
    if(backgroundElementToBeChanged.childElementCount < 1){
        backgroundElementToBeChanged = backgroundElementToBeChanged.parentNode;
    }
    let faCheck = document.querySelector(".fa-check");
    faCheck.removeAttribute('class');
    // console.log(faCheck)
    backgroundElementToBeChanged.children[0].setAttribute('class', 'fa-solid fa-check');

    //console.log(backgroundElementToBeChanged);
    let bgColorSet = window.getComputedStyle(backgroundElementToBeChanged, null).getPropertyValue('background-color');
    setColorAndFont(backgroundElementToBeChanged, bgColorSet)
}
function setColorAndFont(backgroundElementToBeChanged, bgColorSet){
    let defaultBgAndFont = document.querySelector(':root');
    defaultBgAndFont.style.setProperty('--default-color', bgColorSet);

    //defaultBgAndFont.style.setColorAndFont()
}
selectColor.addEventListener('click', function (e){
    colorToBeSelected(e)
})

let intervals = 1;
let minuteInit = document.querySelector('.minutes').textContent
let minuteText = document.querySelector('.minutes')
let secondText = document.querySelector('.seconds')
let totalSeconds = minuteText.textContent*60
let progresTotalValue = 360;
let timer = null;
let ti = null;
function startTime(){
    timer =  setInterval(function (){

        let progresReducer = intervals/totalSeconds*360;
        progressCircle.style.background = `conic-gradient(
        var(--default-color) ${progresTotalValue-progresReducer}deg,
        var(--navy-blue)  0deg
        )`;
        // get previous seconds when paused
        let seccondsTextN = 60-intervals%60
        
        if(seccondsTextN<60){
            secondText.textContent=seccondsTextN.toLocaleString("en-US", {minimumIntegerDigits:2, useGrouping:false});
        }else if(seccondsTextN==60){
            secondText.textContent=0

        }
       
         if(intervals==1||seccondsTextN==59  ){
            let minutesParse = parseInt(minuteText.textContent)-1
           minuteText.textContent= minutesParse.toLocaleString("en-US", {minimumIntegerDigits:2, useGrouping:false});
        }
        
        intervals++
        // console.log(progresReducer)
        // console.log(progresTotalValue,'hgu')

        if(progresReducer>=progresTotalValue){
            clearInterval(timer)
            progressCircle.style.background = `conic-gradient(
            var(--default-color) ${progresTotalValue}deg,
            var(--navy-blue)  0deg
            )`;
            minuteText.textContent='00'
            secondText.textContent='00'
            intervals=1;
            timerStartButton.textContent="RESTART"
        }

    },1000)
}
function resumeTimer(){
    ti =  setInterval(function (){

        let progresReducer = intervals/totalSeconds*360;
        progressCircle.style.background = `conic-gradient(
        var(--default-color) ${progresTotalValue-progresReducer}deg,
        var(--navy-blue)  0deg
        )`;

         let seccondsTextN = 60-intervals%60

        
        if(seccondsTextN<60){
            secondText.textContent=seccondsTextN.toLocaleString("en-US", {minimumIntegerDigits:2, useGrouping:false})

        }else if(seccondsTextN==60){
            secondText.textContent=0
        }
        
        if(intervals==1||seccondsTextN==59  ){
            let minutesParse = parseInt(minuteText.textContent)-1
            minuteText.textContent= minutesParse.toLocaleString("en-US", {minimumIntegerDigits:2, useGrouping:false});
        }
        intervals++
        console.log(progresReducer)
        console.log(progresTotalValue,'hgu')

        if(progresReducer>=progresTotalValue){
            //u=timer;
            clearInterval(ti)
            progressCircle.style.background = `conic-gradient(
            var(--default-color) ${progresTotalValue}deg,
            var(--navy-blue)  0deg
            )`;
            minuteText.textContent='00'
            secondText.textContent='00'
            intervals=1;
            timerStartButton.textContent="RESTART"
        }

    },1000)
}
function restartTimer(){
    minuteText.textContent=minuteInit.toLocaleString("en-US", {minimumIntegerDigits:2, useGrouping:false});
    console.log(minuteText.textContent,'10')
    timer =   setInterval(function (){

        let progresReducer = intervals/totalSeconds*360;
        progressCircle.style.background = `conic-gradient(
        var(--default-color) ${progresTotalValue-progresReducer}deg,
        var(--navy-blue)  0deg
        )`;

         let seccondsTextN = 60-intervals%60

        
        if(seccondsTextN<60){
            secondText.textContent=seccondsTextN.toLocaleString("en-US", {minimumIntegerDigits:2, useGrouping:false});

        }else if(seccondsTextN==60){
            secondText.textContent=0;
        }
        
        if(intervals==1||seccondsTextN==59  ){
            let minutesParse = parseInt(minuteText.textContent)-1
            minuteText.textContent= minutesParse.toLocaleString("en-US", {minimumIntegerDigits:2, useGrouping:false});
        }
        intervals++
        console.log(progresReducer)
        console.log(progresTotalValue,'hgu')

        if(progresReducer>=progresTotalValue){
            //u=timer;
            clearInterval(timer)
            progressCircle.style.background = `conic-gradient(
            var(--default-color) ${progresTotalValue}deg,
            var(--navy-blue)  0deg
            )`;
            minuteText.textContent='00'
            secondText.textContent='00'
            intervals=0;
            timerStartButton.textContent="RESTART"
        }

    },1000)
}
function stopTimer(){
     clearInterval(timer)
      clearInterval(ti)  
}
//function pause//
let timerStartButton = document.querySelector('#start-text');
timerStartButton.addEventListener('click',

    function (){
      if(timerStartButton.textContent=="START"){
        startTime();
        timerStartButton.textContent="PAUSE"
      }
      else if(timerStartButton.textContent=="PAUSE"){
        timerStartButton.textContent="RESUME"
        console.log('tl')
        stopTimer()
       // u;
      }
      else if(timerStartButton.textContent=="RESUME"){
        timerStartButton.textContent="PAUSE"
        console.log('tl')
        resumeTimer()
      }
      else if(timerStartButton.textContent=="RESTART"){
        timerStartButton.textContent="PAUSE"
        console.log('tl')
        restartTimer()
      }
    }
    )

const nav = document.querySelector('#select-mode')

nav.addEventListener('click',
    function (e){
        navItemClicked = e.target.textContent.replace(/\s/g,'');
        modeSelected = e.target;
        activeMode = document.querySelector(".activeMode");
        activeMode.removeAttribute("class");
        activeMode.setAttribute("class", "select-time-type");
        modeSelected.setAttribute("class", "select-time-type activeMode");
       // navItemClicked.
       console.log(navItemClicked)
       stopTimer();
    let pd = parseInt(form.elements['pomodoro'].value);
    let sb = parseInt(form.elements['shortBreak'].value);
    let lb = parseInt(form.elements['longBreak'].value);

    let timer = document.querySelector('.timer');
    // let pomodoro = document.querySelector('.pomodoro');
    // let shorttimer = document.querySelector('.shorttimer') 
    // let  longtimer =document.querySelector('.longtimer')

     if(navItemClicked=='pomodoro'){
        timer.setAttribute('id','pomodoro')
                console.log(timer)

        timer.firstElementChild.textContent =pd
        timer.lastElementChild.textContent='00'
         intervals = 1;
        minuteInit=document.querySelector('.minutes').textContent
        minuteText = document.querySelector('.minutes')
        totalSeconds = minuteText.textContent*60
        timerStartButton.textContent="START"
        progressCircle.style.background = `conic-gradient(
        var(--default-color) ${progresTotalValue}deg,
        var(--navy-blue)  0deg
        )`;
    }else if(navItemClicked=='shortbreak'){
        timer.setAttribute('id','shortbreak')
        console.log(timer)
        timer.firstElementChild.textContent = sb
        timer.lastElementChild.textContent='00'
         intervals = 1;
        minuteInit=document.querySelector('.minutes').textContent
        minuteText = document.querySelector('.minutes')
        totalSeconds = minuteText.textContent*60
        timerStartButton.textContent="START"
        progressCircle.style.background = `conic-gradient(
        var(--default-color) ${progresTotalValue}deg,
        var(--navy-blue)  0deg
        )`;
    }
    else if(navItemClicked=='longbreak'){
        timer.setAttribute('id','longbreak')

        timer.firstElementChild.textContent =lb
        timer.lastElementChild.textContent='00'
         intervals = 1;
        minuteInit=document.querySelector('.minutes').textContent
        minuteText = document.querySelector('.minutes')
        totalSeconds = minuteText.textContent*60
        timerStartButton.textContent="START"
        progressCircle.style.background = `conic-gradient(
        var(--default-color) ${progresTotalValue}deg,
        var(--navy-blue)  0deg
        )`;
    }

    }

    )

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {

    //console.log(btnApply);
    e.preventDefault()
    let pd = parseInt(form.elements['pomodoro'].value);
    let sb = parseInt(form.elements['shortBreak'].value);
    let lb = parseInt(form.elements['longBreak'].value);
    let timer = document.querySelector('.timer');
    //timer.getAttribute("class").match('pomodoro');
    

    if(timer.getAttribute("class").match('pomodoro')){
        console.log(timer)
        timer.firstElementChild.textContent = pd;
        timer.lastElementChild.textContent = '00';
         intervals = 1;
        minuteInit = document.querySelector('.minutes').textContent
        console.log(minuteInit)
        minuteText = document.querySelector('.minutes')
        totalSeconds = minuteText.textContent*60
        timerStartButton.textContent="START"
        progressCircle.style.background = `conic-gradient(
        var(--default-color) ${progresTotalValue}deg,
        var(--navy-blue)  0deg
        )`;
    }else  if(timer.getAttribute("class").match('shortbreak')){
        console.log(timer)
        timer.firstElementChild.textContent = sb;
        timer.lastElementChild.textContent = '00';
         intervals = 1;
        minuteInit=document.querySelector('.minutes').textContent
        minuteText = document.querySelector('.minutes');function solution(plaintext, keyword, row, column) {
}
        totalSeconds = minuteText.textContent*60
        timerStartButton.textContent="START"
        progressCircle.style.background = `conic-gradient(
        var(--default-color) ${progresTotalValue}deg,
        var(--navy-blue)  0deg
        )`;
    }else  if(timer.getAttribute("class").match('longbreak')){
        console.log(timer)
        timer.firstElementChild.textContent = lb;
        timer.lastElementChild.textContent = '00';
         intervals = 1;
        minuteInit=document.querySelector('.minutes').textContent
        minuteText = document.querySelector('.minutes')
        totalSeconds = minuteText.textContent*60
        timerStartButton.textContent="START"
        progressCircle.style.background = `conic-gradient(
        var(--default-color) ${progresTotalValue}deg,
        var(--navy-blue)  0deg
        )`;
    }
    viewBtn.click()
    //console.log(pd,'pd')
})
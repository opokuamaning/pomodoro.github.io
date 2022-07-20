// Variable for popup modal
const viewBtn = document.querySelector(".fa-gear");
const popup = document.querySelector(".popup");
const close = popup.querySelector(".close-btn");

// View Popup Modal
viewBtn.addEventListener("click", () =>{
    popup.classList.toggle("show");
});
close.addEventListener("click", ()=> {
    viewBtn.click();
});

let timeValue = document.querySelector(".minutes");
//let secondsValue = document.querySelector(".seconds");

let pomodoroInput = document.querySelector("#pomodoro-input");
let shortBreakInput = document.querySelector("#short-break-input");
let longBreakInput = document.querySelector("#long-break-input");

let kumbhFont = document.querySelector(".kumbh-font");
let robotoFont = document.querySelector(".roboto-slab");
let spaceFont = document.querySelector(".space-mono");

let orangeColor = document.querySelector(".orange-color");
let cyanColor = document.querySelector(".cyan-color");
let purpleColor = document.querySelector(".light-purple");
let btnApply = document.querySelector(".apply");

btnApply.addEventListener("click", ()=>{
    let startTime = pomodoroInput.value;
    let time = startTime * 60;
    console.log(time);
    
    const countDown = () => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timeValue.innerHTML = `${minutes}:${seconds}`
    
        time--;

        console.log(minutes)
    }

    setInterval(countDown, 1000);

    viewBtn.click();
})






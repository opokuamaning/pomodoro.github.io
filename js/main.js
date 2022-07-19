const viewBtn = document.querySelector(".fa-gear");
const popup = document.querySelector(".popup");
const close = popup.querySelector(".close-btn");

viewBtn.addEventListener("click", () =>{
    popup.classList.toggle("show");
});
close.addEventListener("click", ()=> {
    viewBtn.click();
});







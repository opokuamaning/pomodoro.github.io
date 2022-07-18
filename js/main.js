const settingsBtn = document.querySelector(".settings-icon");
const popup = document.querySelector(".popup");
const close = popup.querySelector(".close-btn");

settingsBtn.addEventListener("click", () =>{
    popup.classList.toggle("show");
});
close.addEventListener("click", ()=> {
    settingsBtn.click();
});







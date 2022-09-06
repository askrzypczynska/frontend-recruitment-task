const sect1Btn = document.getElementById("section1-article-button")
const sect1PopupCloseBtn = document.querySelector("#section1-popup-box-closeBtn")
const sect1PopupResetBtn = document.querySelector(".section1-popup-box-resetBtn")
const sect1PopupBox = document.querySelector("#section1-popup-box")

let sect1Popup = document.querySelector(".section1-popup")
let sect1PopupText = document.querySelector("#section1-popup-box-text")

// Flag used to see if popup is opened
let sect1PopupBoxOpen = false;

// Variable used to count how many times buttons was clicked
let counterBtn = 0

// This function is called when Button is clicked.
// Make Popup visible, incement counterBtn and save it to local storage, check if conditions for reset button to show up are met.
function openSect1Popup() {
    sect1Popup.classList.toggle("section1-Visibility-Hidden")
    counterBtn++
    localStorage.setItem('counterBtn', counterBtn);
    document.addEventListener("click", backgroundCloseSect1Popup)
    sect1PopupText.innerHTML = `You have clicked <b> ${counterBtn} times </b> to related button.`
    if(counterBtn >= 5 && sect1PopupResetBtn.classList.contains("section1-Visibility-Hidden")){
        sect1PopupResetBtn.classList.remove("section1-Visibility-Hidden")
    }
}

// This function is called when close button is clicked or users clicks outside the popup.
// Make Popup invisible, remove EventListener for closing the popup from whole site
function closeSect1Popup() {
    sect1Popup.classList.toggle("section1-Visibility-Hidden")
    sect1PopupBoxOpen = false;
    document.removeEventListener("click", backgroundCloseSect1Popup)
}

// This function is called when Reset button is clicked.
// Make Popup invisible, reset counterBtn and clear the local storage
function resetCounterBtn(){
    counterBtn = 0;
    localStorage.clear();
    closeSect1Popup()
    sect1PopupResetBtn.classList.add("section1-Visibility-Hidden")
}

// This function is callback for clicking outside the popup when is open
function backgroundCloseSect1Popup(e) {
    if(e.target == sect1Popup){
        closeSect1Popup()
    }
}

sect1Btn.addEventListener("click", openSect1Popup)
sect1PopupCloseBtn.addEventListener("click", closeSect1Popup)
sect1PopupResetBtn.addEventListener("click", resetCounterBtn)

// Checking if counterBtn is stored in local storage, loaded or zero it.
counterBtn = localStorage.getItem("counterBtn");
if(counterBtn == NaN){
    counterBtn = 0;
}
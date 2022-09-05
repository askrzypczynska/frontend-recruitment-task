const sect1Btn = document.getElementById("section1-article-button")
const sect1PopupCloseBtn = document.querySelector("#section1-popup-box-closeBtn")
const sect1PopupResetBtn = document.querySelector(".section1-popup-box-resetBtn")
const sect1PopupBox = document.querySelector("#section1-popup-box")


let sect1Popup = document.querySelector(".section1-popup")
let sect1PopupText = document.querySelector("#section1-popup-box-text")

let counterBtn = 0;
let sect1PopupBoxOpen = false;

function openSect1Popup() {
    sect1Popup.classList.toggle("section1-Visibility-Hidden")
    counterBtn++
    document.addEventListener("click", backgroundCloseSect1Popup)
    sect1PopupText.innerHTML = "You have clicked <b>" + counterBtn + " times </b> to related button."
    if(counterBtn == 5){
        sect1PopupResetBtn.classList.toggle("section1-Visibility-Hidden")
    }
}

function resetCounterBtn(){
    counterBtn = 0;
    closeSect1Popup()
}

function closeSect1Popup() {
    sect1Popup.classList.toggle("section1-Visibility-Hidden")
    sect1PopupBoxOpen = false;
    document.removeEventListener("click", backgroundCloseSect1Popup)
}

function backgroundCloseSect1Popup(e) {
    if(e.target == sect1Popup){
        closeSect1Popup()
    }
}


sect1Btn.addEventListener("click", openSect1Popup)
sect1PopupCloseBtn.addEventListener("click", closeSect1Popup)
sect1PopupResetBtn.addEventListener("click", resetCounterBtn)

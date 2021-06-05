
const tabs = document.querySelectorAll(".tab")

function switchTab(tabContent) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"
    }
    let tabToDisplay = document.querySelector(tabContent)
    tabToDisplay.style.display = "flex"
    tabToDisplay.classList.replace("none", "active")
}


const accordionButtons = document.querySelectorAll(".accordion-btn")
const hiddenSections = document.querySelectorAll(".hidden-section")
const span = document.querySelectorAll(".accordion-arrow")

accordionButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
        hiddenSections[i].classList.toggle("active-accordion")
        if (span[i].textContent === "+") {
            span[i].textContent = "-"
        } else {
            span[i].textContent = "+"
        }
        
    })
})

const mobileNav = document.querySelector(".mobile-nav")
const mobileNavBtn = document.querySelector(".mobile-nav-btn")
const mobileNavClose = document.querySelector(".mobile-nav-close")

mobileNavBtn.addEventListener("click", () => {
    mobileNav.style.transform = "translateY(0)"
})

mobileNavClose.addEventListener("click", () => {
    mobileNav.style.transform = "translateY(-100vh)"
})
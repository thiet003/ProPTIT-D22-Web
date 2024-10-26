

export const startSideBar = () => {
    const strokeElm = document.querySelector(".sideBar .stroke");
    const sideBar =  document.querySelector(".sideBar");
    sideBar.style.zIndex = "0"
    sideBar.style.opacity = "0"
}

export const createEvent_OpenSideBar = () => {
    const openMenuBtn = document.querySelectorAll(".search-bar .openMenu");
    const sideBar =  document.querySelector(".sideBar");
    for(let elm of openMenuBtn){
        elm.addEventListener("click",(event) => {
            sideBar.style.zIndex = "100"
            sideBar.style.opacity = "1"
        })
    }
}

export const createEvent_CloseSideBar = () => {
    const strokeElm = document.querySelector(".sideBar .stroke");
    const sideBar =  document.querySelector(".sideBar");
    strokeElm.addEventListener("click",(event) => {
        sideBar.style.zIndex = "0"
        sideBar.style.opacity = "0"
    })
}

export const createEvent_OpenCalendar = () => {
    const container = document.querySelector(".container")
    const calendarBtn = document.querySelector(".sideBar .calendarBar")
    const calendarTab = document.querySelector(".calendarTab")
    const sideBar =  document.querySelector(".sideBar")
    const mainSS = document.querySelector(".main-section")
    const forecast = document.querySelector(".forecast-section")
    const setting = document.querySelector(".setting")

    calendarBtn.addEventListener("click",(event) => {
        container.style.zIndex = "50"
        container.style.opacity = "1"
        calendarTab.style.zIndex = "50"
        calendarTab.style.opacity = "1"
        forecast.style.zIndex = "0"
        forecast.style.opacity = "0"
        mainSS.style.zIndex = "0"
        mainSS.style.opacity = "0"
        sideBar.style.zIndex = "0"
        sideBar.style.opacity = "0"
        setting.style.zIndex = "0"
        setting.style.opacity = "0"
    })
}

export const createEvent_OpenHome = () => {
    const container = document.querySelector(".container")
    const home = document.querySelector(".sideBar .home")
    const calendarTab = document.querySelector(".calendarTab")
    const sideBar =  document.querySelector(".sideBar")
    const mainSS = document.querySelector(".main-section")
    const forecast = document.querySelector(".forecast-section")
    const setting = document.querySelector(".setting")
    home.addEventListener("click",(event) => {
        calendarTab.style.zIndex = "0"
        calendarTab.style.opacity = "0"
        forecast.style.zIndex = "50"
        forecast.style.opacity = "1"
        mainSS.style.zIndex = "50"
        mainSS.style.opacity = "1"

        container.style.zIndex = "50"
        container.style.opacity = "1"
        sideBar.style.zIndex = "0"
        sideBar.style.opacity = "0"
        setting.style.zIndex = "0"
        setting.style.opacity = "0"
    })
}

export const createEvent_OpenSetting = () => { 
    const home = document.querySelector(".openSetting")
    const container = document.querySelector(".container")
    const setting = document.querySelector(".setting")
    const sideBar =  document.querySelector(".sideBar")

    home.addEventListener("click",(event) => {
        container.style.zIndex = "0"
        container.style.opacity = "0"
        setting.style.zIndex = "50"
        setting.style.opacity = "1"
        sideBar.style.zIndex = "0"
        sideBar.style.opacity = "0"
    })
}

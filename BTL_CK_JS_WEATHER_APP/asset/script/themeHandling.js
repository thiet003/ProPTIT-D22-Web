export function createEvent_ChangeThemeLight(){
    const dBTN = document.querySelector(".listSetting .light")
    dBTN.addEventListener("click", (event) => {
        const roott = document.querySelector(":root")        
        roott.style.setProperty('--colorBG_night', '#DDECFB');
        roott.style.setProperty('--colorText_night', '#322363'); 
        roott.style.setProperty('--colorWT_night', '#ECF4FA');
        roott.style.setProperty('--colorChart-night', '#93C5EE');

        roott.style.setProperty('--colorWT_day', '#4A3B7A');
        roott.style.setProperty('--colorBG_day', '#342564');
        roott.style.setProperty('--colorText_day', '#ECF4FA'); 
        roott.style.setProperty('--colorChart-day', '#74AEDE');
    })
}
export function createEvent_ChangeThemeDark(){
    const lBTN = document.querySelector(".listSetting .dark")

    lBTN.addEventListener("click", (event) => {
        const roott = document.querySelector(":root")        
        roott.style.setProperty('--colorBG_night', '#342564');
        roott.style.setProperty('--colorText_night', '#ECF4FA'); 
        roott.style.setProperty('--colorWT_night', '#4A3B7A');
        roott.style.setProperty('--colorChart-night', '#74AEDE');

        roott.style.setProperty('--colorWT_day', '#ECF4FA');
        roott.style.setProperty('--colorBG_day', '#DDECFB');
        roott.style.setProperty('--colorText_day', '#322363'); 
        roott.style.setProperty('--colorChart-day', '#93C5EE');

    })   
}


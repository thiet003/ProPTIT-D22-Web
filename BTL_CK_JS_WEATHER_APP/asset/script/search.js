import { getCurrenttWeather_byCityName, getForeCastWeathe_byCityName } from "./fetchAPI.js"
import { getCurrenttWeather_byLatLon, getForeCastWeathe_byLatLon } from "./fetchAPI.js";

let checkSearchBar = "searching"
export const CreateEvent_SearchButton = () => {
    const search_Btn = document.querySelector(".search-button")
    const search_Bar = document.querySelector(".search-input")
    const search_Bar_Input = document.querySelector("#searchInput")
    const city_Bar = document.querySelector(".namecity-bar")

    search_Btn.addEventListener("click", () => {
        if(checkSearchBar == "searching"){
            const keyword = search_Bar_Input.value;
            console.log('Từ khóa tìm kiếm:', keyword);
            getForeCastWeathe_byCityName(keyword)
            getCurrenttWeather_byCityName(keyword)
            checkSearchBar = "searched"
            search_Bar.style.display = "none"
            city_Bar.style.display = "block"
        }
        else{
            city_Bar.style.display = "none"
            search_Bar.style.display = "block"
            search_Bar_Input.value = "";
            checkSearchBar = "searching"
        }
    })


    let isFocused = false;
    search_Bar_Input.addEventListener('focus', () => {
        isFocused = true;
    });
    search_Bar_Input.addEventListener('blur', () => {
        isFocused = false;
    });
    search_Bar_Input.addEventListener('keydown', (event) => {
        if (isFocused && event.key === 'Enter' && checkSearchBar == 'searching') {
            const keyword = search_Bar_Input.value;
            console.log('Từ khóa tìm kiếm:', keyword);

            getForeCastWeathe_byCityName(keyword)
            getCurrenttWeather_byCityName(keyword)

            checkSearchBar = "searched"
            search_Bar.style.display = "none"
            city_Bar.style.display = "block"
        }
    });

}   

export const createEvent_GetWeather_byLocation = () => {
    const search_Btn = document.querySelector(".search-button")
    const btn = document.querySelector(".myLocation-button");


    const search_Bar = document.querySelector(".search-input")
    const search_Bar_Input = document.querySelector("#searchInput")
    const city_Bar = document.querySelector(".namecity-bar")

    btn.addEventListener("click", () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getForeCastWeathe_byLatLon(position.coords.latitude, position.coords.longitude);
            getCurrenttWeather_byLatLon(position.coords.latitude, position.coords.longitude);
            checkSearchBar = "searched"
            search_Bar.style.display = "none"
            city_Bar.style.display = "block"
        });
    })
}   


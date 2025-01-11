import { Chart } from "chart.js";

const API_key = "271b8214acf1154e7de714c03df3396f";

export async function getForeCastWeathe_byCityName(cityName){
    try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_key}&units=metric&lang=vi`
        )
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Failed to fetch weather data')
    }
}
export async function getForeCastWeathe_byLatLon(lat, lon){
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=vi`
        )
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Failed to fetch weather data')
    }
}
export async function getCurrenttWeather_byCityName(cityName){
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric&lang=vi`
        )
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Failed to fetch weather data')
    }
}
export async function getCurrenttWeather_byLatLon(lat, lon){
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=vi`
        )
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Failed to fetch weather data')
    }
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
            search_Bar.style.display = "none"
            city_Bar.style.display = "block"
        });
    })
}   


const displayWeather = (data, response) => {
    const weatherStatus = document.querySelector(".weather-detail .status")
    const weatherIcon = document.querySelector(".weather-status img")
    const namecityBar = document.querySelector(".namecity-bar")

    const weatherTemp = document.querySelector(".weather-detail .temperature")
    const weatherH = document.querySelector(".weather-detail .H")
    const weatherL = document.querySelector(".weather-detail .L")
    
    const date = document.querySelector(".weather-detail .others p");
    namecityBar.innerHTML = `<h2>${(response != undefined) ? response : "Mời nhập lại!"}</h2>`
    
    let dateTIme = new Date(data.dt * 1000);
    console.log("datatime:", dateTIme.getDate());
    
    weatherStatus.innerHTML = `
                                <h2 class="D" style>${dateTIme.getHours().toString().padStart(2, '0')}:${dateTIme.getMinutes().toString().padStart(2, '0')}  ${dateTIme.getDate()}/${dateTIme.getMonth() + 1}/${dateTIme.getFullYear()}</h2>
                                <p>${data.weather[0].main}</p>
                            `
    weatherTemp.innerHTML = `<h1>${Math.round(data.main.temp)}<sup>o</sup></h1>` 
    weatherH.innerHTML =  `Humidity : ${data.main.humidity}<sup>o</sup> |`
    weatherL.innerHTML = `| Visibility : ${data.visibility}m` 
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    
    date.innerHTML = `--/--/-- ; --:--`;

    const mini_weatherStatus = document.querySelector(".today-weather .statuswt")
    const mini_WeatherIcon = document.querySelector(".today-weather img")
    const mini_weatherH = document.querySelector(".today-weather .percent")
    mini_weatherStatus.textContent = data.weather[0].main.toUpperCase()
    mini_WeatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    mini_weatherH.innerHTML = `${Math.round(data.main.temp_min)}<sup>o</sup> -> ${Math.round(data.main.temp_max)}<sup>o</sup>`
}

const displayWeatherForeCast = (data, response) => {
    const weatherStatusAll = document.querySelectorAll(".nextday-item .statuswt")
    const mini_weatherHAll = document.querySelectorAll(".nextday-item .percent")
    const mini_WeatherIcon = document.querySelectorAll(".nextday-item .cnt img")

    console.log(weatherStatusAll, mini_WeatherIcon, mini_weatherHAll)
    for(let i = 0; i < 4; i++){
        weatherStatusAll[i].textContent = data.list[i * 9].weather[0].main.toUpperCase()
        mini_weatherHAll[i].innerHTML = `${Math.round(data.list[i * 9].main.temp_min)}<sup>o</sup> -> ${Math.round(data.list[i * 9].main.temp_max)}<sup>o</sup>`
        mini_WeatherIcon[i].setAttribute('src', `https://openweathermap.org/img/wn/${data.list[i * 9].weather[0].icon}@2x.png`)
        //console.log(data.list[i * 9].dt_txt);
    }
}

export const displayChartLine = (data, response) => {
    // console.log("data: ", data);
    // console.log(data.list[0].dt_txt)
    //  console.log(data.list[0].dt_txt.split(" "));
    let bienx = [data.list[0].dt_txt.split(" ")[1], data.list[1].dt_txt.split(" ")[1], data.list[2].dt_txt.split(" ")[1], data.list[3].dt_txt.split(" ")[1]]
    let bieny = [data.list[0].main.temp, data.list[1].main.temp, data.list[2].main.temp, data.list[3].main.temp]
    let CHART = document.querySelector("#lineChart").getContext('2d')
    // console.log(CHART);
    Chart.defaults.color = "#fff"
    let lineChart = new Chart(CHART, {
        type: "line",
        data: {
            labels: bienx,
            datasets: [{
                label: 'Temp',
                data: bieny,
                borderColor: "#A3C9E9",
                pointBackgroundColor: '#75B0DF',
                pointBorderColor: '#5E7CBE',
                pointBorderWidth: 5,
                borderRadius: "15px"
            }]
        }
    })
    
    // console.log(lineChart);
    
}
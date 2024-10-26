import { dataWeather_Current, dataWeather_Forecast } from "./fetchAPI.js";



export const setupCalendar = () => {
    const findRequest = document.querySelector(".findRequest")
    findRequest.style.zIndex = 0
    findRequest.style.opacity = 0
    let calendar_DayWeather = document.querySelector("#calendar_DayWeather")
    calendar_DayWeather.style.zIndex = 0
    calendar_DayWeather.style.opacity = 0
    loadCalendar()
}
const loadCalendar =() => {
    var calendarEl = document.getElementById('calendarContent');
    calendarEl.style.zIndex = 100
    calendarEl.style.opacity = 1
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: function(info){
            showWeather_inDaySelected(info)
        }
    });
    calendar.render();
}
const showWeather_inDaySelected = (info) =>{
    // console.log(info.dateStr);
    for(let i = 0; i < dataWeather_Forecast.list.length - 3; i++){
       // console.log(day.dt_txt);
        let day = dataWeather_Forecast.list[i]
        if(day.dt_txt.indexOf(info.dateStr) != -1){
            // console.log("OKE:", day);
            const calendarEl = document.getElementById('calendarContent');
            // console.log(calendarEl);
            
            calendarEl.style.zIndex = 0;
            calendarEl.style.opacity = 0;
            const calendar_DayWeatherEl = document.getElementById('calendar_DayWeather');
            calendar_DayWeatherEl.style.zIndex = 100
            calendar_DayWeatherEl.style.opacity = 1
            calendar_DayWeatherEl.innerHTML = `
                                                <div class="main-section">
                                                    <div class = "cntI">
                                                        <i class="fa-solid fa-arrow-left" style="color: var(--colorText_night);"></i>
                                                    </div>
                                                    <div class="weather-status">
                                                        
                                                        
                                                        <!-- <dotlottie-player src="https://lottie.host/1b6b3b9a-05ce-4d01-bcbf-ff7a8d09da04/nQhGrBhmN9.json" background="transparent" speed="1" style="width: 300px; height: 100%;" loop autoplay></dotlottie-player>            </div> -->
                                                        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                                                    </div>
                                                    <div class="weather-detail">
                                                        <div class="temperature">
                                                            <h1>${Math.round(day.main.temp)}<sup>o</sup></h1>
                                                        </div>
                                                        <div class="others">
                                                            <div class="status">
                                                                <h2 class="D" style>${info.dateStr}</h2>
                                                                <p>${day.weather[0].main}</p>
                                                            </div>
                                                            <div class="doam">
                                                                <p class="H">Humidity : ${day.main.humidity}<sup>o</sup> |</p>
                                                                <p class="L">| Visibility : ${day.visibility}m</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="chartCalendar" style="margin-top: 15px; padding: 10px"> 
                                                        <p style="color: white;">12 HOURS FORECAST</p>
                                                        <canvas id="lineChart" style="height: 260px; width: 100%; margin-bottom: 10px;"></canvas>
                                                    </div>
                                                </div>
            
                                            `
            createEventBacktoCalendar()
            // console.log(dataWeather_Forecast.list[i].dt_txt)
            // console.log(dataWeather_Forecast.list[i].dt_txt.split(" "));
            let bienx = [dataWeather_Forecast.list[i].dt_txt.split(" ")[1], dataWeather_Forecast.list[i + 1].dt_txt.split(" ")[1], dataWeather_Forecast.list[i + 2].dt_txt.split(" ")[1], dataWeather_Forecast.list[i + 3].dt_txt.split(" ")[1]]
            let bieny = [dataWeather_Forecast.list[i].main.temp, dataWeather_Forecast.list[i + 1].main.temp, dataWeather_Forecast.list[i + 2].main.temp, dataWeather_Forecast.list[i + 3].main.temp]
            let CHART = document.querySelector(".chartCalendar #lineChart").getContext('2d')
            // console.log(CHART);
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
                        scaleFontColor: "#fff"
                    }]
                }
            })
          
            break;
        }
    }   
}

export const createEventBacktoCalendar = () => {
    const btn = document.querySelector(".main-section .cntI")
    btn.addEventListener("click", (event) => {
        let calendar_DayWeather = document.querySelector("#calendar_DayWeather")
        calendar_DayWeather.style.zIndex = 0
        calendar_DayWeather.style.opacity = 0

        const calendarEl = document.getElementById('calendarContent');    
        calendarEl.style.zIndex = 100;
        calendarEl.style.opacity = 1;
    })
}
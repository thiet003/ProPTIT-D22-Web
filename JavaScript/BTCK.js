const current = document.querySelector(".current")
const chartClass = document.querySelector(".chart")
const general = document.querySelector(".general")

function apiCurrentWeather(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3aa069c12609852ef55a78bd94930820&lang=vi`
}

function apiForecastWeather(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3aa069c12609852ef55a78bd94930820&lang=vi`
}

function srcIcon(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

function oC(kevin) {
    return parseInt(kevin - 273)
}
convertElToVnDay = {
    Mon: "Th 2",
    Tue: "Th 3",
    Wed: "Th 4",
    Thu: "Th 5",
    Fri: "Th 6",
    Sat: "Th 7",
    Sun: "  CN"
}
convertElToVnMonth = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
}
function convertDtToLocalTime(dt, timezone) {
    const time = new Date((dt + timezone) * 1000).toUTCString()
    const hours = time.substring(17, 19)
    const day = time.substring(0, 3)
    const day2 = time.substring(5, 7)
    const month = time.substring(8, 11)
    const year = time.substring(12, 17)
    return `${hours}h ${convertElToVnDay[day]}, ${day2}/${convertElToVnMonth[month]}/${year}`
}
function getDay(dt, timezone) {
    const time = new Date((dt + timezone) * 1000).toUTCString()
    const day = time.substring(0, 3)
    return convertElToVnDay[day]
}
function getHoursFromDT_TXT(dt_txt, timezone) {
    let h = parseInt(dt_txt.slice(11, 13)) + timezone / 3600
    if (h >= 24) return h - 24
    return h
}

function getHoursLocal(dt, timezone) {
    const time = new Date((dt + timezone) * 1000).toUTCString()
    const hours = time.substring(17, 19)
    return hours
}


function setCurrentWeather(data) {
    current.querySelector("img").setAttribute("src", srcIcon(data.weather[0].icon))
    current.querySelector("h1").textContent = `${oC(data.main.temp)}℃`
    current.querySelector("#temperatureFeel").textContent = `${oC(data.main.feels_like)}℃`
    current.querySelector("#cloudCoverCurrent").textContent = `Mây che: ${data.clouds.all}%`
    current.querySelector("#humidityCurrent").textContent = `Độ ẩm: ${data.main.humidity}%`
    current.querySelector("#speedWindCurrent").textContent = `Gió: ${Math.round(data.wind.speed * 3.6)} km/h`
    current.querySelector("#desciptionDetailCurrent").textContent = (data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1))

    current.querySelector("h2").textContent = `Thời tiết ${data.name}`
    current.querySelector("#timeCurrent").textContent = convertDtToLocalTime(data.dt, data.timezone)
    current.querySelector("#sunrise").textContent = `Mặt trời mọc: ${getHoursLocal(data.sys.sunrise, data.timezone)}h`
    current.querySelector("#sundown").textContent = `Mặt trời lặn: ${getHoursLocal(data.sys.sunset, data.timezone)}h`
}

async function start(city) {
    try {
        const [Forecast, Current] = await Promise.all([
            fetch(apiForecastWeather(city)),
            fetch(apiCurrentWeather(city))
        ]);
        const [forecast, current] = await Promise.all([Forecast.json(), Current.json()]);
        setTemperatureChart(forecast);
        setGeneral(forecast);
        setCurrentWeather(current);

    } catch (error) {
        alert(error);

    }
}



let chart
function setTemperatureChart(o) {
    const canvas = chartClass.querySelector("#temperatureChart").getContext('2d')
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Nhiệt độ',
                data: [],
                fill: true,
                borderColor: 'yellow',
                //backgroundColor: '#64a0b4',//#F1E9C2
                tension: 0.5
            }]
        },
        options: {
            layout: {
                padding: {
                  top: 30,  // Tăng padding phía trên để không cắt chữ
                  right: 20,
                  bottom: 20,
                  left: 20
                },
            },
            aspectRatio: 4,
            animation: {
                duration: 2000,  // Thời gian hiệu ứng là 2 giây
                easing: 'easeInOutQuad'  // Kiểu hiệu ứng
            },
            scales: {
                y: {
                    display: false,
                    beginAtZero: 5,
                    grid: {
                        display: true
                    },
                    ticks: {
                        color: 'black',
                        stepSize: 1,  
                        font: {
                            size: 14,
                            style: 'italic',  // Kiểu chữ
                            weight: 'bold',

                        },
                        callback: function (value, index, values) {
                            return value + '℃'; // Đơn vị trục y
                        }
                    }
                },
                x: {
                    ticks: {
                        //stepSize: 5,  
                        color: 'black',
                        font: {
                            size: 14,
                            weight: 'bold',
                        }
                    },
                    grid: {
                        display: true,
                    },
                },
            },
            plugins: {
                legend:{
                    display: false
                }   ,            
                datalabels: {
                    anchor: 'top',  // Căn chỉnh vị trí nhãn
                    align: 'top',  // Vị trí của nhãn so với điểm dữ liệu
                    color:  'black' ,//#000',  // Màu nhãn
                    font: {
                        size: 15,
                        weight: 'bold',
                    
    
                    },
                    formatter: function(value, context) {
                        return value + '℃';  // Thêm đơn vị '℃' vào nhãn
                    },
                    
                },
               
               
            }
        },
        plugins: [ChartDataLabels]


    })

    for (let i = 0; i < 15; i += 1) {
        chart.data.labels.push(`${getHoursFromDT_TXT(o.list[i].dt_txt, o.city.timezone)}h`)
        chart.data.datasets[0].data.push(oC(o.list[i].main.temp))
    }
    chart.update();
}

const imgs= [] 
function setGeneral(data) {
    general.querySelector(".generalContainer").textContent = ""
    let i = 0
    let tempMax = -100, tempMin = 500
    let icon = {}
    let day = "", pop = 0
    let checkSetTempMaxMinCurrent = true
    let checkSetPopCurrent = true
    while (true) {

        if (getHoursFromDT_TXT(data.list[i].dt_txt, data.city.timezone) >= 24) {
            tempMax = -100,
                tempMin = 500
            icon = {}
            pop = 0
        }

        tempMax = (data.list[i].main.temp > tempMax) ? data.list[i].main.temp : tempMax
        tempMin = (data.list[i].main.temp < tempMin) ? data.list[i].main.temp : tempMin
        pop = (data.list[i].pop > pop) ? data.list[i].pop : pop
        if (checkSetPopCurrent) {
            checkSetPopCurrent = false
            current.querySelector("#popCurrent").textContent = `Mưa: ${parseInt(pop * 10)}%`
        }
        let s = data.list[i].weather[0].icon
        if (s[2] == 'n') {
            s = s.substring(0, 2) + 'd' + s.substring(3); // Tạo chuỗi mới
        }

        if (icon[s]) {
            icon[s]++
        } else {
            icon[s] = 1
        }

        if (getHoursFromDT_TXT(data.list[i].dt_txt, data.city.timezone) >= 21 && getHoursFromDT_TXT(data.list[i].dt_txt, data.city.timezone) <= 24) {
            day = getDay(data.list[i].dt, data.city.timezone)
            const div = general.querySelector(".generalDay").cloneNode(true)
            div.style.display = "block"
            imgs.push(div.querySelector("img"))
            let s, k = -1
            for (let key in icon) {
                if (icon[key] > k) {
                    k = icon[key]
                    s = key
                }
            }

            div.querySelector("#iconGeneralDay").setAttribute("src", srcIcon(s))
            div.querySelector("#generalDay").textContent = day
            div.querySelector("#tempMinMax").textContent = `${oC(tempMin)}℃ - ${oC(tempMax)}℃`

            //div.querySelector("#generalPop").textContent = pop
            general.querySelector(".generalContainer").appendChild(div)
            // if(checkSetTempMaxMinCurrent){
            //     current.querySelector("#tempMaxMinCurrent").textContent = `${oC(tempMin)}℃ - ${oC(tempMax)}℃`
            //     checkSetTempMaxMinCurrent = false
            // }
        }
        i += 1
        if (i >= 40) break
    }
}

document.querySelector("#sent").addEventListener('click', function (e) {
    const city = document.querySelector("input").value
    start(format(city.trim()))
})
window.onload = function () {
    start("Hanoi")
};
function format(city) {
    return city
}
const fc = document.querySelector("#forecast5Day")
const cha = document.querySelector("#chart")
fc.addEventListener('click', function (e) {
    fc.style.fontWeight = "bold"
    cha.style.fontWeight = "400"
    chartClass.style.display = "none"
    general.style.display = "block"

})
cha.addEventListener('click', function (e) {
    fc.style.fontWeight = "400"
    cha.style.fontWeight = "bold"
    chartClass.style.display = "block"
    general.style.display = "none"
})
const tempb = document.querySelector("#tempChart")
const rainb = document.querySelector("#rainChart")
const windb = document.querySelector("#windChart")
const temp = document.querySelector(".temperatureChart")
const rain = document.querySelector(".rainChart")
const wind = document.querySelector(".windChart")
tempb.addEventListener('click', function (e) {
    tempb.style.fontWeight = "bold"
    rainb.style.fontWeight = "400"
    windb.style.fontWeight = "400"
    temp.style.display = "block"
    rain.style.display = "none"
    wind.style.display = "none"
})
windb.addEventListener('click', function (e) {
    tempb.style.fontWeight = "400"
    rainb.style.fontWeight = "400"
    windb.style.fontWeight = "bold"
    temp.style.display = "none"
    rain.style.display = "none"
    wind.style.display = "block"
})
rainb.addEventListener('click', function (e) {
    tempb.style.fontWeight = "400"
    rainb.style.fontWeight = "bold"
    windb.style.fontWeight = "400"
    temp.style.display = "none"
    rain.style.display = "block"
    wind.style.display = "none"
})



imgs.push(current.querySelector("img"))
var kt = 0;
// setInterval(function(){
//     for(var i = 0; i < imgs.length; i++){
        
//         if(kt == 0){
//             imgs[i].style.left =  `${Math.random()*50}px`
//             imgs[i].style.bottom =  `${Math.random()*50}px`
//             kt = 1
//         }else{
//             imgs[i].style.left = `${Math.random()*50}px`
//             imgs[i].style.bottom = `${Math.random()*50}px`
//             kt = 0
//         }
//         // if(kt == 0){
//         //     imgs[i].style.left = "20px"
//         //     imgs[i].style.bottom = "20px"
//         //     kt = 1
//         // }else{
//         //     imgs[i].style.left = "0"
//         //     imgs[i].style.bottom = "0"
//         //     kt = 0
//         // }
//         // if(kt == 0) kt = 1;
//         //  else kt = 0;
//     }
//     if(kt == 0) kt = 1;
//     else kt = 0;
   
    
// }, 1*1000);

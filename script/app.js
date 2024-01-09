const base_Url = "https://api.openweathermap.org/data/2.5/weather?&appid=5f43508f8ed46cfc4ce78f47e9a440c5&units=metric&q=";

let serchBox = document.querySelector('#serch-input-box');
let serchBtn = document.querySelector('#serch-btn');
let weatherImg = document.querySelector('#weather-icon');
let temp = document.querySelector('#temp');
let city_Name = document.querySelector('#city');
let humidity = document.querySelector('#humidity');
let windSpeed = document.querySelector('#wind-speed');
let serchBar = document.querySelector('.serch-bar');
let displayNone = document.querySelector('.display-none');


async function checkWeather(city) {
    try {
    let response = await fetch(base_Url+city);
    let data = await response.json();
    console.log(data);
    serchBar.style.height = '90vh';
    displayNone.style.display = 'block';
    city_Name.innerText = data.name;
    temp.innerText = Math.round(data.main.temp)+"°C";
    humidity.innerText = data.main.humidity+" %";
    windSpeed.innerText = data.wind.speed+" km/h";
    document.getElementById('myAudio').play();

    
    let weatherData = data.weather[0];

if (weatherData.main === "Mist" || weatherData.main === "mist") {
    weatherImg.src = "style/images/mist.png";
    serchBar.style.background = "linear-gradient(135deg,#eee8e8,#078086)";
} else if (weatherData.main === "Clouds" || weatherData.main === "clouds") {
    weatherImg.src = "style/images/clouds.png";
    serchBar.style.background = "linear-gradient(135deg,#7bddea,#0e18d3)";
} else if (weatherData.main === "Clear" || weatherData.main === "clear") {
    weatherImg.src = "style/images/clear.png";
    serchBar.style.background = "linear-gradient(135deg,#e8a217,#0e18d3)";
} else if (weatherData.main === "Drizzle" || weatherData.main === "drizzle") {
    weatherImg.src = "style/images/drizzle.png";
    serchBar.style.background = "linear-gradient(135deg,#eca4bb,#d30e77)";
} else {
    weatherImg.src = "style/images/clouds.png";
    serchBar.style.background = "linear-gradient(135deg,#8e6262,#298607)";
}
    
    }catch {
        console.error("Error fetching weather data:", error);
    }
}

serchBtn.addEventListener('click',()=> {
    let serchBOxVal = serchBox.value;
    if(serchBOxVal != "") {
        checkWeather(serchBOxVal);
    }else{
        alert("fill any input");
    }
});

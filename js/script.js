let input = document.getElementById('input_txt');
let humidty = document.getElementById('humidity');
let btn = document.querySelector('.btn');
let city_name = document.getElementById('city_name');
let descp = document.getElementById('desc');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let weather_data = document.getElementById('weather_data');
let imgage = document.getElementById('image');
let Location_not_found = document.getElementById('not-found-Location');


async function checkWeather(city) {
    const Api_key = `234ef3392e1fe0d4333354d297d433f3`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`;
    const Weather = await fetch(`${url}`).then(response => response.json());
    // console.log(Weather);
    // console.log(Location_not_found);
  
    

    if (Weather.cod === `404`) {
        weather_data.style.display = "none";
        Location_not_found.style.display = "block";
        imgage.style.display ="none";
        return;
    }

   
    temp.innerHTML += `<span> ${Weather.main.temp}   </span> <small>°C</small>`;
    descp.innerHTML += ` <span>  ${Weather.weather[0].description} </span>`;
    descp.style="text-transform: capitalize";
    humidty.innerHTML += ` <span>  ${Weather.main.humidity}</span> <small>% Humidity</small>`;
    wind.innerHTML += ` <span>  ${Weather.wind.speed}</span> <small>Km/h</small>`;
    city_name.innerHTML += ` <span>  ${Weather.name} </span>`;
    city_name.style="text-transform:uppercase";
    Location_not_found.style.display = "none";




    switch (Weather.weather[0].main) {
        case 'Smoke': imgage.src = "img/sm-removebg-preview.png";
            break;
        case 'Clear': imgage.src = "img/clear-removebg-preview.png";
            break;
        case 'Mist': imgage.src = "img/mist-removebg-preview.png";
            break;
        case 'Rain': imgage.src = "img/4571479-removebg-preview.png";
            break;
        case 'Snow': imgage.src = "img/snow-removebg-preview.png";
            break;
        case 'Drizzle': imgage.src = "img/drizl-removebg-preview.png";
            break;
         case 'Clouds': imgage.src = "img/cloud.png";
            break;
            case 'Haze': imgage.src = "img/haze.png";
            break;
    }
}



btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather(input.value);
    temp.innerHTML = "";
    descp.innerHTML = "";
    humidty.innerHTML = "";
    wind.innerHTML = "";
    city_name.innerHTML = "";
});


const container2 = document.getElementById("container2");

const input = document.getElementById("input");
const btn = document.getElementById("btn");


const apiKey = "3a7af5d204bca2bb8e60aedccee749ae";


const images = {
  Clear : "img/sun.png",
  Clouds : "img/cloudy-day.png",
  Rain : "img/rainy-day.png.png",
  Thunderstorm : "img/lightning-bolt-.png",
  Drizzle : "img/drizzle.png",
  Snow : "img/snowy.png",
  Mist : "img/fog.png",
  Smoke : "img/cloudy-day.png",
  Haze : "img/fog.png",
  Fog : "img/fog.png"
}


const getData = async(cityName) =>{
  
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
  const data = await response.json();
  console.log(data);

  changeInner(data)
}



const changeInner = (gelenveri) =>{

  let description = gelenveri.weather[0].description;
  let wind = gelenveri.wind.speed; 
  let city = gelenveri.name  
  let kelvin = gelenveri.main.temp;
  let degree = Math.round(kelvin - 273.15);
  let country = gelenveri.sys.country; 
  let humidity = gelenveri.main.humidity;
  let mainWeather = gelenveri.weather[0].main;
  let img = images[mainWeather];

  container2.innerHTML = ` 
  
      <div class="icon-div">
        <img class="weather-icon" src="${img}" alt="" />
        <p>${description}</p>
      </div>

      <div class="temp-city-div">
        <h1 class="temp">${degree}°C</h1>
        <h2 class="city">${city }, ${country}</h2>
      </div>

      <div class="nem-rüzgar-div">
        <div class="veri-div">
          <img class="veri-img" src="img/humidity.png" alt="" />
          <div>
            <h1 class="nem-yüzde">${humidity}%</h1>
            <p>Humidity</p>
          </div>
        </div>
        <div class="veri-div">
          <img class="veri-img" src="img/storm.png" alt="" />
          <div>
            <h1 class="rüzgar-veri"><span>${wind} </span>km/h</h1>
            <p>Wind</p>
          </div>
        </div>
      </div>
  
  `
} 


btn.addEventListener("click", () => {
  let sehir = input.value;
  getData(sehir);
  input.value = "";
  console.log(input.value);
});


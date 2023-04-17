// https://api.openweathermap.org/data/2.5/weather?q=america&appid=8c448375142e74d3aeba69e3db06420e&units=metric

const apiKey = "8c448375142e74d3aeba69e3db06420e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q= ";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".whether-icon");

async function whether(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".whether").style.display = "none";
        
    }else{

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
        document.querySelector(".wind").innerHTML =  data.wind.speed + "km/h";
    
        if(data.weather[0].main == "clouds"){
            weatherImage.src = "clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherImage.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherImage.src = "rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherImage.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherImage.src = "mist.png";
        }
    
        document.querySelector(".whether").style.display = "block";
        document.querySelector(".error").style.display = "none"; 

    }

   

}

// function errorHandler(error){

//     document.querySelector(".city").innerHTML('city not found');

// }

searchBtn.addEventListener("click", () => {
    whether(searchBox.value);
})
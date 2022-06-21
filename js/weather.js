const APIkey = "4d68af3c08cf258709205d05a7e87b71";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIkey}&units=metric`
    console.log(URL);
    fetch(URL)
        .then((response) => response.json())
        .then(data =>{
            console.log(">> ", data.name, data.weather[0].main)
            
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}, ${data.main.temp}`

    });

    console.log("You live in : ", lat, lng);
}


function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
let input = document.querySelector('.input_text');
let main = document.querySelector('#city-name');
let temp = document.querySelector('.temp');
let tempHi = document.querySelector('.high-temp')
let tempLo = document.querySelector('.low-temp')
let overV = document.querySelector('.desc');
let button= document.querySelector('.submit');



//Current Weather
button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=8979032860447814896d5eb119d2c288')
.then(response => response.json())
.then(data => {
    let cityName = data['name'];
    let mainTemp = data['main']['temp'];
    let lowTemp = data['main']['temp_min']
    let highTemp = data['main']['temp_max']
    let cityOver = data['weather'][0]['description'];

    main.innerHTML = cityName;
    temp.innerHTML = "the temperature is: " + mainTemp;
    tempHi.innerHTML = "the high for today is: " + highTemp;
    tempLo.innerHTML = "the low for today is: " + lowTemp;
    overV.innerHTML = "looks like we have " + cityOver;

    input.value ="";

})

.catch(err => alert("Wrong city name!"));
})

//FIVE DAY
// button.addEventListener('click', function(name){
//     fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=8979032860447814896d5eb119d2c288')
//     .then(response => response.json())
//     .then(data => {
//         let cityName = data['name'];
//         let mainTemp = data['main']['temp'];
//         let lowTemp = data['main']['temp_min']
//         let highTemp = data['main']['temp_max']
//         let cityOver = data['weather'][0]['description'];
    
//         main.innerHTML = cityName;
//         temp.innerHTML = "the temperature is: " + mainTemp;
//         tempHi.innerHTML = "the high for today is: " + highTemp;
//         tempLo.innerHTML = "the low for today is: " + lowTemp;
//         overV.innerHTML = "looks like we have " + cityOver;
    
//         input.value ="";
    
//     })
// })

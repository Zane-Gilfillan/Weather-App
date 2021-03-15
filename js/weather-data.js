let input = document.querySelector('.input-text');
let main = document.querySelector('#city-name');
let temp = document.querySelector('.temp');
let tempHi = document.querySelector('.high-temp')
let tempLo = document.querySelector('.low-temp')
let humid = document.querySelector('.humid')
let overV = document.querySelector('.desc');
let buttonMain = document.querySelector('.main-btn');
let buttonFiveDay = document.querySelector('.five-day-btn');
let windowFiveDay = document.querySelector('#five-window')



//Current Weather
buttonMain.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=8979032860447814896d5eb119d2c288')
.then(response => response.json())
.then(data => {
    let cityName = data.name;
    let mainTemp = data.main.temp;
    let lowTemp = data.main.temp_min
    let highTemp = data.main.temp_max
    let mainHumid = data.main.humidity
    let cityOver = data['weather'][0]['description'];

    input.value ="";
    main.innerHTML = cityName;
    temp.innerHTML = "the temperature is: " + mainTemp + " •F";
    tempHi.innerHTML = "the high for today is: " + highTemp + " •F";
    tempLo.innerHTML = "the low for today is: " + lowTemp + "• F";
    humid.innerHTML = "the humidity is: " + mainHumid;
    overV.innerHTML = "looks like we have " + cityOver;

    
    
})
// .catch(err => alert("Wrong city name!"));
})

//Button main reveals five day button choice, buttonFiveDay reveals five day window
buttonMain.addEventListener('click', () => {
    buttonFiveDay.classList.remove('hide')
})

buttonFiveDay.addEventListener('click', () => {
    windowFiveDay.classList.remove('hide')
})



//FIVE DAY
$.getJSON(
    'http://api.openweathermap.org/data/2.5/forecast?q=Chicago&units=imperial&appid=8979032860447814896d5eb119d2c288',
    function(data) {
        console.log(data)

        //FIRST DAY IN FIVE DAY
        let dayOneTime = data.list[1].dt_txt
        let dayOneTemp = data.list[1].main.temp
        let dayOneTempHi = data.list[1].main.temp_min
        let dayOneTempLow = data.list[1].main.temp_max
        let dayOneHumid = data.list[1].main.humidity

        console.log(dayOneTime)
        console.log(dayOneTemp)
        console.log(dayOneTempHi)
        console.log(dayOneTempLow)
        console.log(dayOneHumid)

        //SECOND DAY IN FIVE DAY
        let dayTwoTime = data.list[9].dt_txt
        let dayTwoTemp = data.list[9].main.temp
        let dayTwoTempHi = data.list[9].main.temp_min
        let dayTwoTempLow = data.list[9].main.temp_max
        let dayTwoHumid = data.list[9].main.humidity

        console.log(dayTwoTime)
        console.log(dayTwoTemp)
        console.log(dayTwoTempHi)
        console.log(dayTwoTempLow)
        console.log(dayTwoHumid)

        //THIRD DAY IN FIVE DAY
        let dayThreeTime = data.list[17].dt_txt
        let dayThreeTemp = data.list[17].main.temp
        let dayThreeTempHi = data.list[17].main.temp_min
        let dayThreeTempLow = data.list[17].main.temp_max
        let dayThreeHumid = data.list[17].main.humidity

        console.log(dayThreeTime)
        console.log(dayThreeTemp)
        console.log(dayThreeTempHi)
        console.log(dayThreeTempLow)
        console.log(dayThreeHumid)

        //FOURTH DAY IN FIVE DAY
        let dayFourTime = data.list[25].dt_txt
        let dayFourTemp = data.list[25].main.temp
        let dayFourTempHi = data.list[25].main.temp_min
        let dayFourTempLow = data.list[25].main.temp_max
        let dayFourHumid = data.list[25].main.humidity

        console.log(dayFourTime)
        console.log(dayFourTemp)
        console.log(dayFourTempHi)
        console.log(dayFourTempLow)
        console.log(dayFourHumid)

        //FIFTH DAY IN FIVE DAY
        let dayFiveTime = data.list[33].dt_txt
        let dayFiveTemp = data.list[33].main.temp
        let dayFiveTempHi = data.list[33].main.temp_min
        let dayFiveTempLow = data.list[33].main.temp_max
        let dayFiveHumid = data.list[33].main.humidity

        console.log(dayFiveTime)
        console.log(dayFiveTemp)
        console.log(dayFiveTempHi)
        console.log(dayFiveTempLow)
        console.log(dayFiveHumid)

    }    
)

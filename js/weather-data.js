//Variables for Current Weather Window
let input = document.querySelector('.input-text');
let main = document.querySelector('#city-name');
let temp = document.querySelector('.temp');
let tempHi = document.querySelector('.high-temp')
let tempLo = document.querySelector('.low-temp')
let humid = document.querySelector('.humid')
let overV = document.querySelector('.desc');
let windowFiveDay = document.querySelector('#five-window')
let buttonMain = document.querySelector('.main-btn');
let buttonFiveDay = document.querySelector('.five-day-btn');
let buttonClose = document.querySelector('.close-btn')

//Variables for Five Day Window

//Day One -----------------------
let dateOne = document.querySelector(".day-one-date")
let tempOne = document.querySelector(".day-one-temp")
let tempHiOne = document.querySelector(".day-one-high")
let tempLowOne = document.querySelector(".day-one-low")

//Day Two -----------------------
let dateTwo = document.querySelector(".day-two-date")
let tempTwo = document.querySelector(".day-two-temp")
let tempHiTwo = document.querySelector(".day-two-high")
let tempLowTwo = document.querySelector(".day-two-low")

//Day Three -----------------------
let dateThree = document.querySelector(".day-three-date")
let tempThree = document.querySelector(".day-three-temp")
let tempHiThree = document.querySelector(".day-three-high")
let tempLowThree = document.querySelector(".day-three-low")

//Day Four -----------------------
let dateFour = document.querySelector(".day-four-date")
let tempFour = document.querySelector(".day-four-temp")
let tempHiFour = document.querySelector(".day-four-high")
let tempLowFour = document.querySelector(".day-four-low")

//Day Five -----------------------
let dateFive = document.querySelector(".day-five-date")
let tempFive = document.querySelector(".day-five-temp")
let tempHiFive = document.querySelector(".day-five-high")
let tempLowFive = document.querySelector(".day-five-low")


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
    humid.innerHTML = "the humidity is: " + mainHumid + "%";
    overV.innerHTML = "looks like we have " + cityOver;

    // console.log(data)

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

buttonClose.addEventListener('click', () => {
    windowFiveDay.classList.add('hide')
})

//FIVE DAY WEATHER WINDOW
buttonMain.addEventListener('click', function(name){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&units=imperial&appid=8979032860447814896d5eb119d2c288')
    .then(response => response.json())
    .then(data => {
        
        //FIRST DAY IN FIVE DAY
        let dayOneTime = data.list[1].dt_txt
        let dayOneTemp = data.list[1].main.temp
        let dayOneTempHi = data.list[1].main.temp_max
        let dayOneTempLow = data.list[1].main.temp_min
        let dayOneHumid = data.list[1].main.humidity

        dateOne.innerHTML = dayOneTime
        tempOne.innerHTML = 'T: ' + dayOneTemp
        tempHiOne.innerHTML = 'H: ' + dayOneTempHi
        tempLowOne.innerHTML = 'L: ' + dayOneTempLow

        //SECOND DAY IN FIVE DAY
        let dayTwoTime = data.list[9].dt_txt
        let dayTwoTemp = data.list[9].main.temp
        let dayTwoTempHi = data.list[9].main.temp_max
        let dayTwoTempLow = data.list[9].main.temp_min
        let dayTwoHumid = data.list[9].main.humidity

        dateTwo.innerHTML = dayTwoTime
        tempTwo.innerHTML = 'T: ' + dayTwoTemp
        tempHiTwo.innerHTML = 'H: ' + dayTwoTempHi
        tempLowTwo.innerHTML = 'L: ' + dayTwoTempLow

        //THIRD DAY IN FIVE DAY
        let dayThreeTime = data.list[17].dt_txt
        let dayThreeTemp = data.list[17].main.temp
        let dayThreeTempHi = data.list[17].main.temp_max
        let dayThreeTempLow = data.list[17].main.temp_min
        let dayThreeHumid = data.list[17].main.humidity

        dateThree.innerHTML = dayThreeTime
        tempThree.innerHTML = 'T: ' + dayThreeTemp
        tempHiThree.innerHTML = 'H: ' + dayThreeTempHi
        tempLowThree.innerHTML = 'L: ' + dayThreeTempLow


        //FOURTH DAY IN FIVE DAY
        let dayFourTime = data.list[25].dt_txt
        let dayFourTemp = data.list[25].main.temp
        let dayFourTempHi = data.list[25].main.temp_max
        let dayFourTempLow = data.list[25].main.temp_min
        let dayFourHumid = data.list[25].main.humidity

        dateFour.innerHTML = dayFourTime
        tempFour.innerHTML = 'T: ' + dayFourTemp
        tempHiFour.innerHTML = 'H: ' + dayFourTempHi
        tempLowFour.innerHTML = 'L: ' + dayFourTempLow

        
        //FIFTH DAY IN FIVE DAY
        let dayFiveTime = data.list[33].dt_txt
        let dayFiveTemp = data.list[33].main.temp
        let dayFiveTempHi = data.list[33].main.temp_max
        let dayFiveTempLow = data.list[33].main.temp_min
        let dayFiveHumid = data.list[33].main.humidity

        dateFive.innerHTML = dayFiveTime
        tempFive.innerHTML = 'T: ' + dayFiveTemp
        tempHiFive.innerHTML = 'H: ' + dayFiveTempHi
        tempLowFive.innerHTML = 'L: ' + dayFiveTempLow
    
         console.log(data)
    
    })
    // .catch(err => alert("Wrong city name!"));
    })



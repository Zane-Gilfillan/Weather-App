let userInput = $('#city-search')
let userBtn = $('#search-btn')
let cityName = $('#city')
let cityTemp = $('#temp')
let cityHigh = $('#high')
let cityLow = $('#low')
let cityHummid = $('#humidity')



userBtn.click( () => {
   
    console.log('check')
})

//CURRENT WEATHER
$.getJSON(
    'http://api.openweathermap.org/data/2.5/weather?q='+userInput.value+'&units=imperial&appid=8979032860447814896d5eb119d2c288',
    function(data) {

        input.value = '';
        console.log(data)
        nameId = data.name
        tempId = data.main.temp
        highId = data.main.temp_max
        lowId = data.main.temp_min
        humId = data.main.humidity

        cityName.text(nameId)
        cityTemp.text('current temp: ' + tempId)
        cityHigh.text('todays high: ' + highId)
        cityLow.text('todays low: ' + lowId)
        cityHummid.text('humidity: ' + humId)

        console.log(nameId, tempId, highId, lowId)

        
        
    }    
)


//FIVE DAY FORECAST
$.getJSON(
    'http://api.openweathermap.org/data/2.5/forecast?q=Chicago&units=imperial&appid=8979032860447814896d5eb119d2c288',
    function(data) {
        console.log(data)
        nameId = data.city.name
        tempId = data.list[0].main.temp
        // highId = data.main.temp_max
        // lowId = data.main.temp_min

        // cityName.text(nameId)
        // cityTemp.text(tempId)
        // cityHigh.text(highId)
        // cityLow.text(lowId)

        console.log(tempId)

        
        
    }    
)
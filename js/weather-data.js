let cityName = $('#city')
let cityTemp = $('#temp')
let cityHigh = $('#high')
let cityLow = $('#low')

$.getJSON(
    'http://api.openweathermap.org/data/2.5/weather?q=Chicago,us&APPID=8979032860447814896d5eb119d2c288',
    function(data) {
        console.log(data)
        nameId = data.name
        tempId = data.main.temp
        highId = data.main.temp_max
        lowId = data.main.temp_min

        cityName.text(nameId)
        cityTemp.text(tempId)
        cityHigh.text(highId)
        cityLow.text(lowId)

        console.log(nameId, tempId, highId, lowId)
        
    }    
)
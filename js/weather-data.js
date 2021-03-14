$.getJSON(
    'http://api.openweathermap.org/data/2.5/weather?q=Chicago,us&APPID=8979032860447814896d5eb119d2c288',
    function(data) {
        console.log(data)
        console.log(data.name)
        console.log(data.main.temp)
    })
function getWeather() {
    $.simpleWeather({
        zipcode: '02139',
        unit: 'f',
        success: function(weather) {
            html = '<div class="row">';
            html += '<div class="large-4 columns">' + Current + '</div>';
            html += '<div class="large-4 columns">' + weather.forecast[0].day + '</div>';
            html += '<div class="large-4 columns">' + weather.forecast[1].day + '</div>';
            html += '<div class="large-4 columns">' + weather.forecast[2].day + '</div>';
            html += '</div>';
            
            html += '<div class="row">';
            html += '<div class="large-4 columns"><img src="images/weather/' + weather.code + '.png"><br/>';
            html += '<span class="weather-temp">' + ((weather.temp-32)*(5/9)).toFixed() + '&deg;C (' + weather.temp + '&deg;F)</span>';
            html += '<span class="weather-feel">Feel ' + ((weather.wind.chill-32)*(5/9)).toFixed() + '&deg;C / ' + weather.wind.chill + '&deg;F</span></div>';
            html += '<div class="large-4 columns"><img src="images/weather/' + weather.forecast[0].code + '.png"><br/>';
            html += '<span class="weather-temp">' + weather.forecast[0].alt.high + '&deg;C / ' + weather.forecast[0].alt.low + '&deg;C</span></div>';
            html += '<div class="large-4 columns"><img src="images/weather/' + weather.forecast[1].code + '.png"><br/>';
            html += '<span class="weather-temp">' + weather.forecast[1].alt.high + '&deg;C / ' + weather.forecast[1].alt.low + '&deg;C</span></div>';
            html += '<div class="large-4 columns"><img src="images/weather/' + weather.forecast[2].code + '.png"><br/>';
            html += '<span class="weather-temp">' + weather.forecast[2].alt.high + '&deg;C / ' + weather.forecast[2].alt.low + '&deg;C</span></div>';
            html += '</div>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
};

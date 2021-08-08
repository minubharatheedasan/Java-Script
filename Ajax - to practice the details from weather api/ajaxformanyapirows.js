const btn = document.getElementById('button')

btn.addEventListener('click', loadUsers);

  // Load Github Users
function loadUsers(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=1960401d79b51d8c3be286b9463a081b', true);

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText)
            var weather_details = JSON.parse(this.responseText);
            console.log(weather_details)
            var output = '';
            var n = 0;
            //for(let j =0; j>=weather_details["cnt"].length;j++){
                for(var i in weather_details["list"]){
                    // console.log(weather_details["cnt"])
                    // console.log(n)
                    // console.log("This is the first element of weather details")
                    // console.log(i)
                    //console.log(weather_details["list"][n]["weather"][n]["description"])
                    //console.log(weather_details[i])
                    output +=
                    '<div class="whethername">' +
                    //'<img src="'+users[i].avatar_url+'" width="70" height="70">' +
                    '<ul>' +
                    '<li>Name: '+weather_details["list"][n]["name"]+'</li>' +
                    '<li>Latitude: '+weather_details["list"][n]["coord"]["Lat"]+'</li>' +
                    '<li>Longitude: '+weather_details["list"][n]["coord"]["Lon"]+'</li>' +
                    '<li>Temperature: '+weather_details["list"][n]["main"]["temp"]+'</li>' +
                    '<li>Minimum Temperature: '+weather_details["list"][n]["main"]["temp_min"]+'</li>' +
                    '<li>Maximum Temperature: '+weather_details["list"][n]["main"]["temp_max"]+'</li>' +
                    '<li>Humidity: '+weather_details["list"][n]["main"]["humidity"]+'</li>' +
                    '<li>Wind Speed: '+weather_details["list"][n]["wind"]["speed"]+ '</li>' +
                    //'<li>Description: '+weather_details["list"][n]["weather"][n]["description"]+ '</li>' +
                    //'<li>Longitude: '+weather_details["list"][n]["coord"]["Lon"]+'</li>' +
                    //'<li>Name: '+weather_details["list"]["name"]+'</li>' +
                    //'<li>Latitude: '+weather_details["coord"]["lat"]+'</li>' +
                    //'<li>Longtitude: '+weather_details["coord"]["lon"]+'</li>' +
                    '</ul>' +
                    '</div>';
                    n++;
                //}
            }
            document.getElementById('weather_details').innerHTML = output;
        }
    }
    xhr.send();
  }

const button = document.getElementById('button');
const inputValue = document.querySelector('.inputValue');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const key = '&appid=9af13d161008a8ca50b9ddca7d85e250'

const data = {
    key: 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9af13d161008a8ca50b9ddca7d85e250'
};

if (button)
{button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9af13d161008a8ca50b9ddca7d85e250')
.then(response => response.json()) 
.then(data => console.log(data))

var nameValue= data.name
var tempValue = Math.round(data.main.temp);
var descriptionValue=date.weather[0].description

$('#city').innerHTML(city);
$('#temp').innerHTML(temp);
$('#description').innerHTML(description);
})
}










































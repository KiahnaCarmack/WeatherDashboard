const button = document.getElementById('button');
const inputValue = document.querySelector('.inputValue');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const key = '&appid=0e0021a41163b5dc5b4c2495efeda20a'
 

if (button)
{button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9af13d161008a8ca50b9ddca7d85e250')
.then(response => response.json()) 
.then(data => {
    displayWeatherHeader(data)
    console.log(data);
})


fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&q='+inputValue.value+'&appid=ed28904a07487f00015ab0962334985e')
.then(response => response.json()) 
.then(data => {
    displayweatherCard(data)
    console.log(data);
})

});
};

function displayWeatherHeader(weatherData) {
document.getElementsByClassName('city')[0].textContent = weatherData.name;
document.getElementsByClassName('temp')[0].textContent = weatherData.main.temp;
document.getElementsByClassName('description')[0].textContent = weatherData.weather[0].description;
document.getElementsByClassName('icons')[0].textContent = weatherData.weather[0].icon;
}

function displayweatherCard(weatherData){
    let cardArray = document.getElementsByClassName('card');
for (let index = 0; index < cardArray.length; index++) {
    const element = cardArray[index];
    element.textContent= JSON.stringify(weatherData.list[index*8])

    
}
console.log(document.getElementsByClassName('card'))

}
































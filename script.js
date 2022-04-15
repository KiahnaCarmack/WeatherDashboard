const button = document.getElementById('button');
const inputValue = document.querySelector('.inputValue');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const key = '&appid=0e0021a41163b5dc5b4c2495efeda20a';
 const userSearch= document.getElementsByClassName('inputValue');
 const searchHistory = document.getElementsByClassName('storagetext')

if (button)
    {
        button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9af13d161008a8ca50b9ddca7d85e250&units=imperial')
    .then(response => response.json()) 
    .then(data => {
        displayWeatherHeader(data)
        console.log(data);
    })


    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&q='+inputValue.value+'&appid=ed28904a07487f00015ab0962334985e&units=imperial')
    .then(response => response.json()) 
    .then(data => {
        console.log(data)
        displayweatherCard(data)
     
    })

    });
    };

function displayWeatherHeader(weatherData) {
document.getElementsByClassName('city')[0].textContent = weatherData.name;
document.getElementsByClassName('temp')[0].textContent = weatherData.main.temp;
document.getElementsByClassName('description')[0].textContent = weatherData.weather[0].description;
let iconDiv = document.getElementsByClassName('icons');
for (let index = 0; index < 10; index++) {
    iconDiv[index].src = 'http://openweathermap.org/img/wn/'+weatherData.weather[0].icon+'@2x.png'
    
}{

    
}

}

function displayweatherCard(weatherData){
    let cityNameDivArray = document.getElementsByClassName('cityname');
    let forcastDivArray = document.getElementsByClassName('forcastday');
    let weatherDivArray = document.getElementsByClassName('weather');
    let descriptionDivArray = document.getElementsByClassName('wdescription');
    let iconDivArray = document.getElementsByClassName('icon');
for (let index = 0; index < 5 ; index++) {
    cityNameDivArray[index].textContent = weatherData.city.name; 
    forcastDivArray[index].textContent=(weatherData.list[index*8].dt_txt)
    weatherDivArray[index].textContent= weatherData.list[index*8].main.temp;
    descriptionDivArray[index].textContent= weatherData.list[index*8].weather[0].description;
 iconDivArray[index].src = 'http://openweathermap.org/img/wn/'+weatherData.list[index*8].weather[0].icon+'@2x.png'
   
 
 
 
 
 
 console.log(iconDivArray[index])

    
   
 

    
}


}

const saveToLS = () => {
    localStorage.setItem('userSearch', userSearch.textContent)

}
button.addEventListener('click', saveToLS)
























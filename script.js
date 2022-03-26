const form = document.getElementsByClassName('.banner form');
const inputValue = document.getElementsByClassName('.input').value;
const url = ' https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=9af13d161008a8ca50b9ddca7d85e250'
const button = document.getElementById('button');



const data = {
  key: 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=9af13d161008a8ca50b9ddca7d85e250'
};

if (button)
{button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=9af13d161008a8ca50b9ddca7d85e250')
.then(response => response.json()) 
.then(data => console.log(data))
})
};














































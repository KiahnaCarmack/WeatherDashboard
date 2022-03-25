const form = document.getElementsByClassName('.banner form');
const apiKey = '8824e83d6b7017b4316d3767002ab905';
const inputValue = document.getElementsByClassName('.input').value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=imperial`;



fetch(url)
.then(response => response.json())
  .then(data => {
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city 😩";
  });














































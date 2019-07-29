// url for request data
const url = 'http://api.openweathermap.org/data/2.5/weather';
const queryParams = '?q=';
const APIKey = '&appid=52430e79f397c42a2834fc15fae5017b'


// page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.getElementById('responseField');
const temp = document.getElementById('temp');
const pic = document.getElementById('pic');
//const tempType = document.getElementById('temp_type').value;

// AJAX function
const getWeatherData = () => {
    const location = inputField.value;
    const endpoint = `${url}${queryParams}${location}${APIKey}`;

    fetch(endpoint, {mode:'cors'}).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message);
    }).then(response => {
        responseField.innerHTML = response.weather[0].description;
        let finaltemp;

        if (document.getElementById('Far').checked) {
            finalTemp = Math.round(response.main.temp * 9/5 - 459.97) + " °F";

        } else if (document.getElementById('Cel').checked) {
            finalTemp = Math.round(response.main.temp - 273.15) + " °C";
        }

        temp.innerHTML = finalTemp;
    })
}


// clear previous results and displays current ones to web page
const displayData = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);

    }

   getWeatherData();
};

submit.addEventListener('click', displayData);

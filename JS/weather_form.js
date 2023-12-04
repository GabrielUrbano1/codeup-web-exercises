import {kelvinToFahrenheit, mpsToMph} from "./weather_app.js";


export function fetchAndDisplayWeatherData(lat, lng) {
    // Create the URL to fetch weather forecast data using latitude and longitude
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${OPEN_WEATHER_API_KEY}`;

    // Fetch weather forecast data from the OpenWeather API
    fetch(forecastUrl)
        .then((forecastResponse) => {
            if (!forecastResponse.ok) {
                throw new Error(`HTTP error! Status: ${forecastResponse.status}`);
            }
            return forecastResponse.json();
        })
        .then((forecastData) => {
            // Process and display the forecast data
            console.log(forecastData);

            // Get the current date and filter forecast data for the next 5 days
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0); // Set time to midnight
            // Filter forecast data to include the next 5 days
            const forecastItems = forecastData.list.filter((item) => {
                const itemDate = new Date(item.dt_txt);
                return itemDate >= currentDate && itemDate <= new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000);
            });

            // Group forecast data by date
            const groupedData = {};
            forecastItems.forEach((forecastItem) => {
                const date = forecastItem.dt_txt.split(' ')[0];
                if (!groupedData[date]) {
                    groupedData[date] = [];
                }
                groupedData[date].push(forecastItem);
            });

            // Display forecast data on the webpage
            const forecastCards = document.getElementById('forecast-cards');
            forecastCards.innerHTML = '';
            for (const date in groupedData) {
                if (groupedData.hasOwnProperty(date)) {
                    const forecastItems = groupedData[date];
                    const dateText = forecastItems[0].dt_txt.split(' ')[0];
                    const card = document.createElement('div');
                    card.className = 'col-md-2 m-0';
                    // language=html
                    card.innerHTML = `
                        <div class="card text-center" style="background-color: rgba(146, 146, 142, 0.3);">
                            <div class="card-body"
                                 style="max-height: 200px; overflow: hidden; text-overflow: ellipsis;">
                                <h5 class="card-title">Date: </h5>
                                <h5 class="card-title">${dateText}</h5>
                                <hr>
                                <ul>
                            </div>
                            <div class="text-sm-start" style="white-space: nowrap;">
                                <strong>Description:</strong> ${forecastItems[0].weather[0].description}
                                <img src="http://openweathermap.org/img/w/${forecastItems[0].weather[0].icon}.png"
                                     alt="Weather Icon">
                                <br>
                                <hr>
                                <strong>Temperature:</strong> ${kelvinToFahrenheit(forecastItems[0].main.temp)} F<br>
                                <hr>
                                <strong>Wind Speed:</strong> ${mpsToMph(forecastItems[0].wind.speed)} mph<br>
                                <hr>
                                <strong>Humidity:</strong> ${forecastItems[0].main.humidity}%<br>
                                <hr>
                                <strong>Pressure:</strong> ${forecastItems[0].main.pressure} hPa<br><br>
                            </div>
                            </ul>
                        </div>
                        </div>
                    `;
                    forecastCards.appendChild(card);
                }
            }

            // Update the current city name in the header
            const cityName = forecastData.city.name;
            const currentCityElement = document.getElementById('currentCity');
            currentCityElement.textContent = cityName;
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        });
}
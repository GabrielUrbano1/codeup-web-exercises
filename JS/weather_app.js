// Set your Mapbox API access token
mapboxgl.accessToken = `${MAP_BOX_API_KEY}`;

// Create a new Mapbox map instance with specified options
const map = new mapboxgl.Map({
    container: 'map', // The HTML element where the map will be displayed
    style: 'mapbox://styles/mapbox/streets-v11', // The map style URL
    zoom: 10, // The initial zoom level
    center: [-96.96264463946069, 33.23351640203257] // The initial map center [longitude, latitude]
});

// Create a new marker instance (a marker is a map symbol)
const marker = new mapboxgl.Marker();

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9 / 5 + 32).toFixed(0);
}

// Function to convert meters per second to miles per hour
function mpsToMph(mps) {
    return (mps * 2.23694).toFixed(0);
}

// Function to fetch and display weather data by coordinates
function fetchAndDisplayWeatherData(lat, lng) {
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

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Get the city name from the input field
    const cityName = document.getElementById('cityName').value;
    const limit = 5;

    // Create the URL to fetch geocoding data for the city
    const geoCodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${OPEN_WEATHER_API_KEY}`;

    // Fetch geocoding data from the OpenWeather API
    fetch(geoCodeUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // Retrieve latitude and longitude from the geocoding response
            console.log(data);
            const firstEntry = data[0];
            const latitude = firstEntry.lat;
            const longitude = firstEntry.lon;

            // Set the map center and marker to the selected city's coordinates
            map.setCenter([longitude, latitude]);
            marker.setLngLat([longitude, latitude]).addTo(map);

            // Fetch and display weather data for the selected city
            fetchAndDisplayWeatherData(latitude, longitude);
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        });
}

// Event listener for form submission
document.getElementById('weather-form').addEventListener('submit', handleFormSubmit);

// Event listener for map click
map.on('click', (e) => {
    // Get coordinates of the clicked location on the map
    const coordinates = e.lngLat;

    // Set the marker to the clicked coordinates and fetch weather data
    marker.setLngLat(coordinates).addTo(map);
    fetchAndDisplayWeatherData(coordinates.lat, coordinates.lng);

});

// Load weather data for the default location (Aubrey, TX 76227) on page load
const defaultLatitude = 33.23351640203257;
const defaultLongitude = -96.96264463946069;
fetchAndDisplayWeatherData(defaultLatitude, defaultLongitude);

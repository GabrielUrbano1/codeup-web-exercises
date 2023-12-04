import {fetchAndDisplayWeatherData} from "./weather_form.js";


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
export function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9 / 5 + 32).toFixed(0);
}

// Function to convert meters per second to miles per hour
export function mpsToMph(mps) {
    return (mps * 2.23694).toFixed(0);
}

// Function to fetch and display weather data by coordinates


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

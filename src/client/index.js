import './style/main.scss';
import {fetchLocationData }from './script/coordinates.js'
import{fetchWeather} from './script/wether.js'
import{TripLength} from './script/triplength.js'
import{getImageForLocation} from './script/img.js'
import{TripDetails} from './script/details.js'


document.getElementById('t-form').addEventListener('submit', handleFormSubmit);
async function handleFormSubmit(event) {
    event.preventDefault();
    const startDate = getValue('s-date');
    const destination = getValue('destination');
    const endDate = getValue('e-date');
    try {
        const coordinates = await fetchGeoCoordinates(destination);
        const weather = await fetchWeatherForecast(coordinates);
        const image = await fetchImageForLocation(destination);
        const tripDuration = calculateDuration(startDate, endDate);
        displayTripDetails(coordinates, weather, image, startDate, endDate, tripDuration);
    } catch (error) {
        console.error('Error fetching trip data:', error);
        alert('Please check your input and try again.');
    }
}
function getValue(id) {
    return document.getElementById(id).value;
}

async function fetchGeoCoordinates(destination) {
    return await fetchLocationData (destination);
}

async function fetchWeatherForecast({ lat, lng }) {
    return await fetchWeather(lat, lng);
}

async function fetchImageForLocation(destination) {
    return await getImageForLocation(destination);
}

function calculateDuration(startDate, endDate) {
    return TripLength(startDate, endDate);
}

function displayTripDetails(coordinates, weather, image, startDate, endDate, tripDuration) {
    TripDetails(coordinates, weather, image, startDate, endDate, tripDuration);
}


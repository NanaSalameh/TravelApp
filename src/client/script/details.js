
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
};

const TripDetails = (distination, weather, Image, start, end, tripLength) => {
    const DetailsContainer = document.getElementById('t-information');
    const tripdays = calculateDaysUntilTrip(start);

    if (!distination || !weather || !Image || !start || !end || tripLength === undefined) {
        console.error('Missing trip details');
        return;
    }
    const weatherDescription = weather.data && weather.data.length > 0
        ?` ${weather.data[0].temp}°C, ${weather.data[0].weather.description}`
        : 'No weather data available';
        
function createTripDetails(destination, image, start, end, tripDays, tripLength, weatherDescription) {
    const container = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = `THE Trip To ${destination.countryName}`;
    container.appendChild(title);

    const img = document.createElement('img');
    img.src = image;
    img.alt = destination.countryName;
    img.classList.add('trip-img');
    container.appendChild(img);

    const travelDate = document.createElement('h5');
    travelDate.textContent = `Travel Date: ${formatDate(start)}`;
    container.appendChild(travelDate);

    const returnDate = document.createElement('h5');
    returnDate.textContent =` Return Date: ${formatDate(end)}`;
    container.appendChild(returnDate);

    const numberOfDays = document.createElement('h5');
    numberOfDays.textContent =` Number of Days of the Trip: ${tripDays}`;
    container.appendChild(numberOfDays);

    const tripDuration = document.createElement('h5');
    tripDuration.textContent =` Trip Duration: ${tripLength}` ;
    container.appendChild(tripDuration);

    const weather = document.createElement('h5');
    weather.textContent = `Weather Forecast: ${weatherDescription}`;
    container.appendChild(weather);

    return container;
}

const tripDetailsElement = createTripDetails(distination, Image, start, end, tripdays, tripLength, weatherDescription);
DetailsContainer.innerHTML = '';
DetailsContainer.appendChild(tripDetailsElement);
};
// Helper function to format date strings


const calculateDaysUntilTrip = (tripStartDate) => {
    const tripDate = new Date(tripStartDate);
    const currentDate = new Date();
    return Math.ceil((tripDate - currentDate) / (1000 * 60 * 60 * 24));
};

export { TripDetails };
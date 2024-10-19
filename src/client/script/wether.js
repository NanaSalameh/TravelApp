const API_KEY = '38bb4a36030e4ccbb0f3ec10b6ee3302';
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';

const buildUrl = (lat, lon) => 
  `   ${BASE_URL}?lat=${lat}&lon=${lon}&key=${API_KEY}` ;

const fetchWeather = async (lat, lon) => {
    try {
        const res = await fetch(buildUrl(lat, lon));
        const weatherData = await res.json();
        return weatherData;
    } catch (error) {
        console.error('failed fetch weather:', error);
        throw error;
    }
};

export { fetchWeather };
// Function to retrieve coordinates and country info based on a destination query
const fetchLocationData = async (place) => {
    const queryUrl =`http://api.geonames.org/searchJSON?q=${place}&maxRows=10&username=nebalsalameh`;
    try {
        const response = await fetch(queryUrl);
        if (!response.ok) {
            throw new Error(` error: ${response.status}`);
        }
        const data = await response.json();
        const [location] = data.geonames;
        if (location) {
            const { lat, lng, countryName } = location;
            return { lat, lng, countryName };
        } else {
            throw new Error('Location not found');
        }
    } catch (error) {
        console.error('Failed to fetch location data:', error);
        throw error;
    }
};
export {
    fetchLocationData 
};
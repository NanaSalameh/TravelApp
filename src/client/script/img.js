const API_KEY = '45627598-47083d3921db7dc19858b9c05';
const BASE_URL = 'https://pixabay.com/api/';

const getImageForLocation = async (dest) => {
    const url =`  ${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(dest)}&image_type=photo`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`error! Status: ${res.status}`);
        }
        const data = await res.json();
        const { hits } = data;
        return hits.length > 0 ? hits[0].webformatURL : 'default_image_url';
    } catch (error) {
        console.error('Error:', error);
        return 'default_image_url';
    }
};

export { getImageForLocation };
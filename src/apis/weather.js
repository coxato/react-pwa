import ajax from './ajax';

const API_KEY = '999f2c3020ce33ef0bf0a2c92a235a06';
const BASE_URL = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`

async function getWeather(city) {
    const url = BASE_URL + `&q=${city}`;

    try {
        const response = await ajax.get(url);

        return {
            ...response
        }

    } catch ({message}) {
        console.log(message);
    }
}

export { getWeather }
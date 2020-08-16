import ajax from './ajax';

const BASE_URL = `https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/alpha`;

async function getCountryInfo(name){
    try{
        const data = await ajax.get(`${BASE_URL}/${name}`);
        return data;
    
    }catch({message}){
        console.log(message);
    }
}

export {
    getCountryInfo
}
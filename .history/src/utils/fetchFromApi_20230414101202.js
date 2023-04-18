import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'
const apiKey = process.env.REACT_APP_API_KEY;
const options = {
 
  url: BASE_URL,
  params: {  
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`,options);
   return data
}
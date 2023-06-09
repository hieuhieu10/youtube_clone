import axios from "axios";
import { useEffect } from "react";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'

const options = {
 
  url: BASE_URL,
  params: {  
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
   const {data} = await axios.get(`${BASE_URL}`,options);
   
   return data
}
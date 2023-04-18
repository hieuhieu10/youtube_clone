import axios from "axios";
import { useEffect } from "react";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'

// const options = {
 
//   url: BASE_URL,
//   params: {  
//     maxResults: '50'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '8ac8f0c89cmsh7436594409f9082p1482b7jsn24b13da7e98a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`,options);
   useEffect(()=>{

   },[])
   return data
}
import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions'

const options = {
  
  url: BASE_URL,
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': '8ac8f0c89cmsh7436594409f9082p1482b7jsn24b13da7e98a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
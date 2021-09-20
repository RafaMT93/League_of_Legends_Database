import axios from 'axios';

const API = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/',
});

export default API;

import axios from 'axios';

const apiProtestantBot = axios.create({
  baseURL: process.env.REACT_APP_PROTESTANTBOT_API_URL
});

export default apiProtestantBot;

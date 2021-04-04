import axios from 'axios';
import env from 'react-dotenv';

const apiProtestantBot = axios.create({
  baseURL: env.PROTESTANTBOT_API_URL
});

export default apiProtestantBot;

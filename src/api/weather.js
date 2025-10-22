import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchWeather() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/weather`);
    return response.data;
  } catch (err) {
    console.error('Failed to fetch weather:', err);
    return [];
  }
}

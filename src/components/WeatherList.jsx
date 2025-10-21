import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weather';
import WeatherCard from './WeatherCard';

export default function WeatherList() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWeather() {
      const data = await fetchWeather();
      setWeatherData(data);
      setLoading(false);
    }
    loadWeather();
  }, []);

  if (loading) return <p>Loading weather...</p>;
  if (!weatherData.length) return <p>No weather data available.</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {weatherData.map((city) => (
        <WeatherCard key={city.id} city={city} />
      ))}
    </div>
  );
}

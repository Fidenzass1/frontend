import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weather';
import WeatherCard from './WeatherCard';

export default function WeatherList() {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadWeather() {
      const data = await fetchWeather();
      setWeatherData(data);
      setFilteredData(data);
      setLoading(false);
    }
    loadWeather();
  }, []);

  // Filter cities whenever the search term changes
  useEffect(() => {
    const filtered = weatherData.filter((city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, weatherData]);

  if (loading) return <p>Loading weather...</p>;
  if (!filteredData.length && !loading)
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            width: '250px',
          }}
        />
        <p style={{ marginTop: '1rem' }}>No matching cities found.</p>
      </div>
    );

  return (
    <div style={{ padding: '1rem' }}>
      
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            width: '250px',
          }}
        />
      </div>

      {/* Weather Cards */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {filteredData.map((city) => (
          <WeatherCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}


//weather list component
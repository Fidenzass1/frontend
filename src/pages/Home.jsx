import WeatherList from '../components/WeatherList';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Weather Dashboard</h1>
      <WeatherList />
    </div>
  );
}

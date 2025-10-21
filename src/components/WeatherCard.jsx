export default function WeatherCard({ city }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        width: '200px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{city.name}</h3>
      <p style={{ margin: '0.25rem 0' }}>{city.description}</p>
      <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>{city.temp} °C</p>
    </div>
  );
}

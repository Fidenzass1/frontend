import WeatherList from '../components/WeatherList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // ensures footer sticks to bottom if content is short
      }}
    >
      <main style={{ flex: 1, padding: '2rem' }}>
        <h1 style={{ marginBottom: '1rem', textAlign: 'center' ,color:"#1c2227ff"}}>
          Weather Dashboard
        </h1>
        <WeatherList />
      </main>

      <Footer />
    </div>
  );
}

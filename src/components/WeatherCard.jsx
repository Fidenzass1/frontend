import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function WeatherCard({ city }) {
  
  const getBackgroundColor = (temp) => {
    if (temp <= 15) return "#66c9eaff";
    if (temp <= 20) return "#63da67ff";
    if (temp <= 30) return "#f7d46bff";
    return "#d95a51ff";
  };

  const getEmoji = (temp) => {
  if (temp <= 10) return "❄️"; 
  if (temp <= 20) return "🌤️";
  if (temp <= 30) return "☀️";
  return "🔥";
};

  return (
    <Card
      sx={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        width: "200px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <CardMedia
        sx={{
          height: 140,
          backgroundColor: getBackgroundColor(city.temp),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <Typography
          variant="h4" 
          sx={{
            fontSize: "2rem", 
            fontWeight: "bold",
          }}
        >
         {getEmoji(city.temp)} {city.temp}°C 
        </Typography>
      </CardMedia>

      <CardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div" 
          sx={{ 
            fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}
        >
          {city.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {city.description}
        </Typography>
      </CardContent>
    </Card>
  );
}


//weather card component
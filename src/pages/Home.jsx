import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import WeatherList from "../components/WeatherList";
import Footer from "../components/Footer";

export default function Home() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) return <h2>Loading...</h2>;

   if (!isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
          color: "#1c2227",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          🌦️ Welcome to Weatherly
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
          Please log in to access your personalized Weather Dashboard.
        </p>
        <button
          onClick={() => loginWithRedirect()}
          style={{
            padding: "12px 30px",
            fontSize: "18px",
            backgroundColor: "#1c2227",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Log In
        </button>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <main style={{ flex: 1, padding: "2rem" }}>
        <h1 style={{ marginBottom: "1rem", textAlign: "center", color: "#1c2227" }}>
          Weather Dashboard
        </h1>
        <p style={{ textAlign: "center" }}>Welcome, {user.name} 👋</p>

        <WeatherList />

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            style={{
              padding: "12px 30px",
              fontSize: "18px",
              backgroundColor: "#c0392b",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Log Out
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}


//home page component
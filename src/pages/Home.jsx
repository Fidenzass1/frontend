import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import WeatherList from "../components/WeatherList";
import Footer from "../components/Footer";

export default function Home() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) return <h2>Loading...</h2>;

  if (!isAuthenticated) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Please log in to access the Weather Dashboard 🌦️</h2>
        <button
          onClick={() => loginWithRedirect()}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#1c2227",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
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

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#c0392b",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Log Out
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

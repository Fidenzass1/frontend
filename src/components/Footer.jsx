"use client";
import { Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100vw",             // full viewport width
        backgroundColor: "#1976d2", 
        color: "white",
        textAlign: "center",
        margin: 0,
        padding: "20px 0",          // top/bottom paddings
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        🌦️ Weather App
      </Typography>

      <Typography variant="body2" sx={{ marginTop: "4px" }}>
        © {new Date().getFullYear()}{" "}
        <Link
          href="https://fidenz.com/"
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ color: "inherit", fontWeight: 500 }}
        >
          Fidenz Technology
        </Link>
        . All rights reserved.
      </Typography>
    </footer>
  );
}

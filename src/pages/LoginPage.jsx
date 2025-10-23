import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function LoginPage() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const pageStyle = {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    minHeight: '100vh', backgroundColor: '#f0f2f5',
  };

  const formContainerStyle = {
    padding: '2rem', backgroundColor: 'white', borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '100%',
    maxWidth: '400px', textAlign: 'center',
  };

  const buttonStyle = {
    width: '100%', padding: '0.75rem', backgroundColor: '#007bff',
    color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer',
    fontSize: '1rem', marginTop: '1rem',
  };

  const linkStyle = {
    marginTop: '1rem', display: 'block', color: '#007bff', textDecoration: 'none',
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={{ marginBottom: '1.5rem', color: '#1c2227ff' }}>Login</h1>

        {!isAuthenticated ? (
          <button style={buttonStyle} onClick={() => loginWithRedirect()}>
            Login with Auth0
          </button>
        ) : (
          <>
            <p>Welcome, {user.name}</p>
            <button
              style={buttonStyle}
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </>
        )}

        <a href="/signup" style={linkStyle}>
          Don't have an account? Sign Up
        </a>
      </div>
    </div>
  );
}

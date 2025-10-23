import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function SignupPage() {
  const { loginWithRedirect } = useAuth0();

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
    width: '100%', padding: '0.75rem', backgroundColor: '#28a745',
    color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer',
    fontSize: '1rem', marginTop: '1rem',
  };

  const linkStyle = {
    marginTop: '1rem', display: 'block', color: '#007bff', textDecoration: 'none',
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={{ marginBottom: '1.5rem', color: '#1c2227ff' }}>Create Account</h1>

        <button
          style={buttonStyle}
          onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
        >
          Sign Up with Auth0
        </button>

        <a href="/login" style={linkStyle}>
          Already have an account? Login
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Notice this import!
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hy66i3rhhalo60fo.us.auth0.com"
      clientId="V7slVfg3ikYfB8q9a0XhsUVqRlOkARvm"
      authorizationParams={{
        redirect_uri: window.location.origin + '/callback',
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

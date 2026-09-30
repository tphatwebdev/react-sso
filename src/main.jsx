import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { DOMAIN_AUTH0, CLIENT_ID } from './utils/constants.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={DOMAIN_AUTH0}
    clientId={CLIENT_ID}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
)

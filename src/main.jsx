import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Import global CSS including Tailwind and fonts
import App from './App.jsx'

// Create the root and render the App inside React's StrictMode for dev warnings
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

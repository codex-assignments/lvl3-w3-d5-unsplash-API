import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/lvl3-w3-d5-unsplash-API">
      <App />
    </BrowserRouter>
  </StrictMode>,
);

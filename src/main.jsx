import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MouseContextProvider from './components/context/MouseContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MouseContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </MouseContextProvider>
  </BrowserRouter>
)

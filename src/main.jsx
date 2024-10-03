import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename= {import.meta.env.BASE_URL} >
    <Navbar/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

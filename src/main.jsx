import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.scss'
import './styles/card.scss'
import '../public/fonts/Calibre/_Calibre.scss'
import { ToastContainer } from 'react-toastify';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer style={{ fontSize: "16px" }} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Coin_context_Provider from './context/Coin_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Coin_context_Provider>
    <App />
    </Coin_context_Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

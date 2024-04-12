import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import kyc from './pages/kyc.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <kyc />
  </React.StrictMode>,
)

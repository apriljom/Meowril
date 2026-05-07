// Example of what main.jsx should look like
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // It imports the code from App.jsx
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
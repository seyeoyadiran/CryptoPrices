import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactDom } from 'react-dom';
import './index.css'
import App from './App.jsx'

//importing BrowserRouter and rename it to router 
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // 1. 这一行必须加！

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. 用 BrowserRouter 把 App 包起来 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
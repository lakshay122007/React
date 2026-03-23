import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "./index.css"
import Header from './Header.jsx'
import Mainn from './Mainn.jsx'

const c = "gulugulu"
createRoot(document.getElementById('root')).render(
  <div>
    <Header />
    <Mainn />
  </div>

)

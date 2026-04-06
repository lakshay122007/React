import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "./index.css"
import Header from './Header.jsx'
import Mainn from './Mainn.jsx'
import App from './App.jsx'
import NewHeader from './components/New_Header.jsx'
import App_New from './Lec_30March.jsx'
import AppLift from './App_Lifting_up.jsx'

// const c = "gulugulu"
createRoot(document.getElementById('root')).render(
  <div>
    <AppLift/>
  </div>

)

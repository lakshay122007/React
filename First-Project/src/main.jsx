import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "./index.css"
// import Header from './Header.jsx'
// import Mainn from './Mainn.jsx'
// import App from './App.jsx'
// import NewHeader from './components/New_Header.jsx'
// import App_New from './Lec_30March.jsx'
// import AppLift from './App_Lifting_up.jsx'
// import AppControl from './App_controlled.jsx'
import App_Effect from './App_Effect.jsx'
import App_fetch from './App_fetch.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <App_fetch/>
  </div>

)

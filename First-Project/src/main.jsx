// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'


// // import "./index.css"
// // import Header from './Header.jsx'
// // import Mainn from './Mainn.jsx'
// // import App from './App.jsx'
// // import NewHeader from './components/New_Header.jsx'
// // import App_New from './Lec_30March.jsx'
// // import AppLift from './App_Lifting_up.jsx'
// // import AppControl from './App_controlled.jsx'
// // import App_Effect from './App_Effect.jsx'
// // import App_fetch from './App_fetch.jsx'
// // import App_tail from './App_tail.jsx'
// import App_Router from './App_routing'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//       <App_Router/>
//   </BrowserRouter>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App_Lab.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

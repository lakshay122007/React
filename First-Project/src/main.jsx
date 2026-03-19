
import { createRoot } from 'react-dom/client'
let section = "Section-A"

createRoot(document.getElementById('root')).render(
  <div>
    <h1>Lakshay Goyal</h1>
    <p>Hello goood morning..🌅</p>
    <p>{section}</p>
  </div>
)

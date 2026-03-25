import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
const student = {
  name: "Akshat",
  friend : "gulu gulu",
  meaning : "invincible"
}
const arr = [1,2,3,4,5]
function App() {

  return (
    <>
    <p>This person named {student.name} is somene who's friend is {student.friend} is {student.invincible} yet huluhulu</p>
    <ul>
      {arr.forEach((ele) =>{
        <li>{ele}</li>
      })}
    </ul>
  </> 
  ) 
}

export default App

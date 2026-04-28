// import { useState , useEffect } from 'react'
// import Timer from './Timer'
// export default function App_Effect(){
//     let [count, setCount] = useState(0)
//     let [showTimer, setShowTimer] = useState(false)

//     useEffect(()=>{
//         console.log("Component Loaded Successfully")
//         console.log(count)
//     },[count])

//     function increment(){
//         setCount(count + 1)
//     }
//     return(
//         <>
//         <p>{count}</p>
//         <button onClick = {increment}>Click</button>
//         <button onClick = {() => setShowTimer(!showTimer)}>{showTimer? "HideTimer" : "ShowTimer"}</button>
//         {showTimer && <Timer/>}

//         </>
//     )
// }
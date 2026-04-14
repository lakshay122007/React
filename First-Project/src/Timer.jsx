import { useEffect, useState } from 'react'

export default function Timer(){
    let [time, setTime] = useState(0)
    useEffect(()=>{
        let id = setInterval(()=>{
            setTime((prev) => prev + 1)
        },1000)

        return () => {
            clearInterval(id)
            console.log("Timer Stopped")
        }
    }, [])

    return (
        <h1>Timer : {time}</h1>
    )
}
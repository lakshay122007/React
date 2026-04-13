import { useEffect } from 'react'

export default function App_Effect(){
    useEffect(()=>{
        console.log("HUIHUIHUI")
    },[])
    return(
        <>
        <p>hello</p>
        </>
    )
}
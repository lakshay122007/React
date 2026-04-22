import './tail.css' //importing css
import axios from 'axios'
import { useEffect } from 'react'
// https://www.omdbapi.com/?i=tt3896198&apikey=a02e9347"

export default function App_tail(){
    const api = "https://www.omdbapi.com/?i=tt3896198&apikey=a02e9347"


useEffect(async () => {
    const res = axios.get(api)
    console.log(res)
},[])
    return (
        <div className='container rounded-xl'>
            <h1 className="text-3xl font-bold underline border border-red-400 rounded-xl p-4 m-4 bg-green-200 text-center text-red-500 hover:bg-green-400 hover:text-white transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl shadow-green-700">
                Hello world!
            </h1>
        </div>
    )
}

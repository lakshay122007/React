import './tail.css' //importing css
import axios from 'axios'
import { useEffect, useState } from 'react'
// https://www.omdbapi.com/?i=tt3896198&apikey=a02e9347"
import Loading from "./components/Loading"
import MovieCard from './components/movieCard'
export default function App_tail(){

    let [loading, setLoading] = useState(true)
    let [moviesData, setMoviesData] = useState([])
    
    const api = "https://www.omdbapi.com/?i=tt3896198&apikey=a02e9347"


useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        axios.get(api).then((output) =>{
        const finalData = output.data;
        setMoviesData(finalData.results)
        setLoading(false) 
    })

    },2000)

},[])
    return (
        // <div className='container rounded-xl'>
        //     <h1 className="text-3xl font-bold underline border border-red-400 rounded-xl p-4 m-4 bg-green-200 text-center text-red-500 hover:bg-green-400 hover:text-white transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl shadow-green-700">
        //         Hello world!
        //     </h1>
        // </div>

        <div className='h-screen w-screen flex flex-row gap-2'>
            {
                loading ? <Loading/> : moviesData.map((ele) =>{
                    return < MovieCard title = {ele.title} 
                    original_language={ele.original_language} 
                    release_date = {ele.release_date}/>
                })
            }
        </div>
    )
}

export default function MovieCard({title, poster_path, original_language, release_date}){
    return (
        <div className="bg-amber-600 rounded-4xl flex flex-col items-center justify-center w-36 shadow-2xl shadow-green-600">
            <img src="" alt=""/>
            <p className="text-3xl font-medium text-blue-600">{title}</p>
            <p className="text-3xl font-medium text-purple-600"> {original_language}</p>
            <p className="text-3xl font-medium text-red-600">{release_date}</p>
            
        </div>
    )
}
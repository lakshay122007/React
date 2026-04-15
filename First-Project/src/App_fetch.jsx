    import { useEffect, useState } from "react";

    export default function App_fetch() {
    const url = "https://www.omdbapi.com/?i=tt3896198&apikey=a02e9347";
    const [movie, setMovie] = useState(null);

    useEffect(() => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        setMovie(data);
        });
    }, []);

    if (!movie) return <div>Loading...</div>;

    return (
    <div>
        <img src={movie.Poster} />
        <h1>{movie.Title}</h1>
    </div>
    );
    }

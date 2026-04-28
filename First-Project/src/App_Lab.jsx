// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import MovieCard from './components/MovieCard'

// export default function App() {
//   const [movies, setMovies] = useState([])
//   const apiKey = "e31069c10e85d2ecf38c9fee477a4f08";
//   const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
//   const fetchMovies = async () => {
//     try {
//       const response = await axios.get(url)
//       setMovies(response.data.results)
//     } catch (error) {
//       console.log("Error fetching movies", error)
//     }
//   }
//    useEffect(() => {
//     fetchMovies()
//   }, [])

//   return (
//     <div>
//       <Header />
//       <div className="flex flex-wrap justify-center">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// // https://image.tmdb.org/t/p/w500${movie.poster_path}



import React from "react";

export default function MovieCard({ movie }) {
  const ImgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className=" flex flex-col w-72  m-5 p-5 justify-between align-middle border-x-2 border-b-blue-950 rounded-2xl shadow-lg shadow-gray-500 hover:border-y-2 hover:border-x-0 hover:border-y-cyan-700 hover:bg-blue-100 hover:shadow-cyan-200 hover:shadow-2xl ">
      <div className=" w-full h-80 object-cover overflow-hidden border-b-cyan-200 rounded-t-full rounded-b-full border-t-2 hover:shadow-emerald-950 hover:shadow-xl hover:border-x-2 hover:border-t-0 hover:border-x-green-300">
        <img src={ImgURL} alt={movie.title} />
      </div>

      <div className="flex flex-col m-2 p-2 ">
        <div className=" text-lg font-black text-blue-700">{movie.title}</div>
        
            <div>{movie.overview.slice(0,100)}...</div>
        
        
        <div className=" flex justify-between align-middle mt-3">
          <div>⭐{movie.vote_average}</div>
          <div>{movie.release_date}</div>
        </div>
      </div>
    </div>
  );
}

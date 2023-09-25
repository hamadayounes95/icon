import React, { useEffect, useState } from 'react'

const Movies = () => {
    
    const [movies, setMovies]=useState([])
    const showMovies =async() =>{
        const tv = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDAzYzA3MmZkNTU2MmQ2NTY0NjBjYWQ2MjhjZTBmZSIsInN1YiI6IjY0Y2ExZDM3MDAxYmJkMDEyNmE3OTRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eF0mrY-M4EHUU4l8QWXaY4vo6ab7kQ_qm9aj7BSGZlg'
  }
};
const show=await fetch(tv,options)
console.log(tv)
const rest=await show.json()
console.log(rest)
setMovies(rest.results)

    }
    useEffect(()=>{
        showMovies()
    },[])
  return (
    <div className='grid grid-cols-4 gap-4'>
      {
        movies.map(z=> <div className='flex items-center justify-center flex-col'>
            <img src={`https://image.tmdb.org/t/p/w300/${z.poster_path} `}></img>
           
            <div className='flex flex-col mt-2 bg-green-400 items-center justify-center w-60 rounded-md box-shadow: 20px 20px 50px 15px grey'>
            
            {z.original_name}
            <p className='text-yellow-300'> vote :{z.vote_average}</p>
            <p className='text-red-600'>language:{z.original_language}</p>


                
     
            </div>
            
        </div>
        )
      }
    </div>
  )
}

export default Movies
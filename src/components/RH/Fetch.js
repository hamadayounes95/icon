import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [movies,setMovies]=useState([])
    const[cof , setCof]=useState(null)
    const[dog, setDog]=useState(null)
    const getAdd =async()=>{
        const res= await fetch('https://fakestoreapi.com/products')
        const data=await res.json()

        console.log(data)
    }
    const addDog = async()=>{
        const res= await fetch('https://dog.ceo/api/breeds/image/random')
        const data =await res.json()
        setDog(data)
        console.log(data)
        
    }
        const getCoffe = async ()=>{
            try {
                const aq= await fetch('https://whiskyhunter.net/api/auctions_data')
                console.log(aq)
            const dat= await aq.json()
            setCof(dat)
            console.log(dat)
            } catch (err) {
                console.log(err)
            } 
        }
        const showMyname =async() =>{
            const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDAzYzA3MmZkNTU2MmQ2NTY0NjBjYWQ2MjhjZTBmZSIsInN1YiI6IjY0Y2ExZDM3MDAxYmJkMDEyNmE3OTRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eF0mrY-M4EHUU4l8QWXaY4vo6ab7kQ_qm9aj7BSGZlg'
  }
};
const app=await fetch(url,options)
const res=await app.json()
console.log(res)
setMovies(res.results)
  
          }
      
          useEffect(()=>{
          showMyname()
          },[])

    
  return (
    <div className='grid grid-cols-4 gap-4'>
    {
        movies.map(e=><div> 
        <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`}/>
        {
            e.original_title
        }
        </div>)
    }
    </div>
  )
}

export default Fetch
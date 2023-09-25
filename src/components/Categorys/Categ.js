import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categ = () => {

const [cat,setCat]=useState([])
const [title,setTitle]=useState('')
const getdata = async()=>{
    const res = await axios.get('http://localhost:4000/categories')
    console.log(res)
    setCat(res.data)
}
const addcat = async()=>{
    const add = await axios.post('http://localhost:4000/categories',{
        title,
        url: ''
    })
    setCat([...cat,{
        title,
        url: ''
    }])
}
const removecat = async(id)=>{
const remove = await axios.delete('http://localhost:4000/categories/'+id)
setCat(cat.filter(z=>z._id != id))
}
const updatTitle =(event)=>{
    setTitle(event.target.value)
}
useEffect (()=>{
    getdata()
},[])



  return (
    <div className='flex flex-col justify-center items-center gap-6 mt-10'>
        <input type='input' className='input  input-bordered w-1/2' placeholder='categories' onChange={updatTitle}></input>
        <button className='btn btn-success' onClick={addcat}>Ajouter</button>
        
        
        {
            cat.map(e=><div className='flex flex-row items-center gap-2'>
              <p>
                {e.title} 
              </p>
              <button className='btn btn-error bt-sm ' onClick={()=>removecat(e._id)}>Suprimer</button>
            </div>)
        }
       
    </div>
  )
}

export default Categ
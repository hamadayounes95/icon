import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Duties, addTod, removeTod } from '../../features/TodSlice'

const KO = () => {
    const yes = useSelector(state=>state.power.Tab)
    const no = useDispatch()
    const [title,setTitle] = useState('')
    const chang = (event)=>{
        setTitle(event.target.value)
    }
    const addTd =() =>{
        no(Duties(title))
        setTitle('')
    }
  return (
    <div>
        <h1 className='text-8xl font-bold text-pink-600 text-center mt-8'> appTODO </h1>
        <div className='flex items-center justify-center gap-4 mt-11'>
            <input className='input input-bordered w-1/3 ' placeholder='write here'onChange={chang}></input>
            <button className='btn btn-sm btn-neutral capitalize font-bold' onClick={addTd} > Add</button>
        </div>
        <div className='flex flex-col items-center justify-center mt-5 gap-2'>
            {
                yes.map(e=> <div className='flex flex-row justify-center items-center gap-5 '>
                     <button className='btn btn-sm btn-success' onClick={()=>no(addTod(e.title))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>
</button>
{
                        e.done== false?
                        <p className='line-through'> {e.title} </p>
                        :
                        <p> {e.title} </p>
                    }

<button className='btn btn-sm btn-error' onClick={()=>no(removeTod(e.title))}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>

       


                </div>)
            }

        </div>
    </div>
  )
}

export default KO
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTo, DeletTodo, addTodo } from '../../features/TodosSlice'

const Go = () => {
    const Td=useSelector(state => state.todo.dat)
    const ty =useDispatch()
    const [title,setTitle]=useState('')
    const change =(event)=>{
        setTitle(event.target.value)
    
    }
    const addTodos = () => {
        ty (addTodo(title))
        setTitle('')

    }
  return (
    <div>
        <h1 className='text-center text-6xl font-black text-purple-500 mt-8'>AppTodo</h1>
        <div className='flex justify-center items-center gap-5 mt-11'>
            <input className='input input-bordered w-1/3 ' placeholder='title' onChange={change}></input>
            <button className='btn btn-sm btn-warning font-bold ' onClick={addTodos}>Add</button>
            
        </div>
        <div className='flex justify-center items-center flex-col gap-1 mt-6'> 

            {
                Td.map(e=> <div className='flex flex-row gap-4'>
                    <button className='btn btn-sm btn-error text-white' onClick={()=>ty(DeletTodo(e.title))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0 " />
</svg>
</button>
                 <button className='btn btn-sm btn-success' onClick={()=>ty(AddTo(e.title))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
                    {
                        e.done==true?
                        <p className='line-through'> {e.title} </p>
                        :
                        <p> {e.title} </p>
                    }
       
                    
                </div>)
            }
        </div>
    </div>
  )
}

export default Go
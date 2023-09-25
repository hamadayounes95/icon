import React, { useState } from 'react'

const Todo = () => {
    const [todo,setTodo]=useState('')
 const upTodo =(event)=>{
    setTodo(event.target.value)
 }
 const [list,setList]=useState([])
 const addlist =() =>{
    setList([...list,{
        todo :todo,
        done:false
    }])
 }  
 const DeleteTodo =(para)=>{
    setList(list.filter(t=> t.todo !== para))
   
 }
 const DoneTodo =(para)=>{
    setList(list.map(t=>t.todo == para? {...t,done:true}:t))
 }
  return (
    <div>
    <h1 className='text-6xl text-center font-black text-yellow-600 mt-10'>Todo App</h1>
    <div className='flex items-center justify-center flex-row gap-4 mt-7'>
    <input type='text' placeholder='Todo' className='input input-bordered w-1/3' onChange={upTodo}/>
    <button className='btn btn-success' onClick={addlist}>Ajouter</button>
    </div>
    <div className='flex items-center justify-center flex-col'>
        {
            list.map(e =>  <div className='flex flex-row gap-3'>
                {
                    e.done?
                    <p className='line-through'>{e.todo}</p> :
                    <p>{e.todo}</p>
                }
                <button className='btn btn-sm btn-info' onClick={()=>DoneTodo(e.todo)}>Done</button>
                <button className='btn btn-sm btn-error' onClick={()=>DeleteTodo(e.todo)}>Delete</button>
                
            </div>)
        }
    </div>
    </div>
  )
}

export default Todo
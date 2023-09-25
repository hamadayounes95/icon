import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/Counterslice'
import { update } from '../features/Nameslice'

const Test = () => {
    const count = useSelector((state) => state.counter.value)
    const nam = useSelector((state) => state.nom.nom)
    const dispatch = useDispatch()
  return (
    
      <div className='flex flex_col  items-center justify-center gap-5'>
        <button className='text-4xl font-bold'  onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button className='text-4xl font-bold' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <h1>{nam}</h1>
        <button className='text-4xl font-bold' onClick={() => dispatch(update())}>
          prenom
        </button>
      </div>
    

  )
}

export default Test
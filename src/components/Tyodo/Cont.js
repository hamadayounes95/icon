import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrements, increments, init } from '../../features/ContSlice'


const Get = () => {
    const inc = useSelector(state => state.coco.number)
    const dis = useDispatch()
    

  return (
    <div className='flex flex-row justify-center items-center gap-10 mt-11'>
        <button className='btn btn-lg btn-success ' onClick={()=>dis(decrements())}>(-)</button>
        <p>
            {inc}
        </p>
        <button className='btn btn-lg btn-info ' onClick={()=>dis(increments())}>(+)</button>
       
        <button className='btn btn-lg btn-primary ' onClick={()=>dis(init())}>(0)</button>
        

    </div>
  )
}

export default Get
import React, { useState } from 'react'
import Card from '../components/Card';

const Product = () => {
    const [pro , setPro]=useState([
        {
            title :'Apple 1',
            description:'Apple watch S8',
            image:'https://prod2-media.electroplanet.ma/media/catalog/product/cache/fe7218fa206f7a550a07f49b9ea052d6/d/p/dpr-electroplanet-adaptations-watch-1100x1100.jpg',
            prix:300
        },
        {
            title :'Apple 2',
            description:'Apple watch S6',
            image:'https://mediazone.ma/uploads/images/products/11036/11036-9tRXNWM6.jpg',
            prix:200
        }

    ])
    const [cart, setCart]=useState([])
  
    const addCart=(pr)=>{
        setCart([...cart,pr])
    }
    const Remove=(pr)=>{
        setCart(cart.filter(a =>(a.title !== pr)))
    }

  return (
    <div className=' flex flex-col items-center justify-center mt-10 '>
        <h1 className='text-4xl font-black'>Our Product</h1>
        <div className='grid grid-cols-3 gap-4'>
        {
            pro.map(a =>( 
                <Card title={a.title}
                 description={a.description} 
                 image={a.image} 
                 prix={a.prix}
                 action={()=>addCart(a)}
                 />
            ))
        }
        </div> 
        <h1 className='text-4xl font-black mt-8'>shopping cart</h1>
        <div className='grid grid-cols-3 gap-4'>
        {
            cart.map(a =>( 
                <div className='relative'>
                    <button className='btn btn-sm bg-error absolute -left-3 top-0 mt-8 z-20'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white" onClick={()=>Remove(a.title)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
                <Card title={a.title}
                 description={a.description} 
                 image={a.image} 
                 prix={a.prix}
                 />
                 </div>
            ))
        }
        </div> 
        <h1 className='text-4xl font-black'>Total {
            cart.reduce((acc,curr)=>acc+curr.prix,0)
        }$ </h1>
        
    </div>
  )
}

export default Product
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
    const test =(z)=>{
        alert(z)
    }
    const addCart=(pr)=>{
        setCart([...cart,pr])
    }

  return (
    <div className=' flex flex-col items-center justify-center mt-8 '>
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
                <Card title={a.title}
                 description={a.description} 
                 image={a.image} 
                 prix={a.prix}
                 action={()=>test(a.title)}
                 />
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
import React from 'react'

const Card = ({title,description,image,prix,action}) => {
  return (
    <div className="card card-compact h-72 bg-base-100 shadow-xl mt-10">
  <figure><img className='h-40 object-cover ' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p className='font-black ' >{prix}$</p>

    <div className="card-actions justify-end">
      <button onClick={action} className="btn btn-primary">Add to card</button>
    </div>
  </div>
</div>
  )
}

export default Card
import React from 'react'

const Heros = () => {
  return (
    <div className="hero min-h-max" style={{backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/45/63/88/360_F_345638885_EBRKmI2LVfJcQGWj0Mtmg9R4HQd1RODV.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Best Watches</h1>
      <p className="mb-5 text-lg text-gray-400">here you find all our best watches at the best prices.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Heros
import React from 'react'
import Card from './Card'

const Events = () => {
  return (
    <section>
       <h1 className=' pb-5 text-6xl font-sans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mt-5'>My Hackathons and Events</h1>
       <div className='flex flex-wrap'>
       <Card 
          type="Hackathon"
          name="SoftCodeHack 1.0"
        />
        <Card 
          type="Hackathon"
          name="HackBattle"
        />
        <Card 
          type="Hackathon"
          name="Codeathon"
        />
        <Card 
          type="Hackathon"
          name="TechBattle"
        />
        <Card 
          type="Hackathon"
          name="Web3Hacks"
        />
       </div>
        
    </section>
  )
}

export default Events
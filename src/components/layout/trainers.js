import React from 'react'
import { Link } from 'react-router-dom'

const Trainers = ({trainer}) => {
  return (
    <Link to={trainer.id } className=' relative w-[28rem] h-[40rem] bg-green-500'>
      <img src={trainer.img} alt={trainer.name} />
      <div className='absolute bottom-12 right-8 bg-opacity-80 bg-black color p-6'>
        <div className='font-extrabold text-[4.2rem] uppercase'>{trainer.name}</div>
        <div className='font-bold text-4xl capitalize'>{trainer.sex}</div>
        <div className='font-bold text-2xl '>{trainer.weight}</div>
      </div>
    </Link>
  )
}

export default Trainers
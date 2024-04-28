import React from 'react'
import { Link } from 'react-router-dom'

const Trainers = ({name,weight,sex,img}) => {
  return (
    <Link to={"./name"} className=' relative w-[28rem] h-[40rem] bg-green-500'>
      <img src={img} alt="" />
      <div className='absolute bottom-12 right-8 bg-yellow-800 color'>
        <div className='font-extrabold text-[3.5rem] uppercase'>{name}</div>
        <div className='font-bold text-bg '>{weight}</div>
        <div className='font-bold text-bg capitalize'>{sex}</div>
      </div>
    </Link>
  )
}

export default Trainers
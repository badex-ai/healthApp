import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({img,description,location,name}) => {
  return (
    <Link to={`./${name}`} className='relative w-[30rem] h-[40rem] border rounded-2xl '>
        <p className="">Live :  <span className=' w-[10px] rounded-full bg-green-500 h-[10px]]'></span>
        </p>
       

        <img src={img} className="" alt="" />
        <div>
            <p>Description: {description}</p>
            <p>Location: {location}</p>

        </div>

    </Link>
  )
}

export default Event
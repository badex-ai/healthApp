import React from 'react'
import { Link, Outlet, useParams, Navigate } from "react-router-dom";
import upperBodyImage from '../../assets/images/upperBody.jpg';



const WorkoutCard = ({name,imgSrc}) => {
  return (
    <Link to={`./${name}`} className='w-[50rem] h-[30rem] bg-yellow-500 relative'>
        <img src={upperBodyImage} alt="" />
        <div className='text-[2rem] font-bold z-1 absolute left-4 bottom-8'>{name}</div>
    </Link>
  )
}

export default WorkoutCard
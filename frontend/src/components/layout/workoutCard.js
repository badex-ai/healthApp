import React from 'react'
import { Link, Outlet, useParams, Navigate } from "react-router-dom";


const WorkoutCard = ({name,imgSrc}) => {
  return (
    <Link to={`./${name}`} className='w-[50rem] h-[30rem] bg-yellow-500'>
        <img src="" alt="" />
        <div>{name}</div>
    </Link>
  )
}

export default WorkoutCard
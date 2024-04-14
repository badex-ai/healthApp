import React from 'react'
import Header from '../../components/header'
import WorkoutPlayer from './workoutPlayer'
import { Link,useParams,Outlet } from 'react-router-dom'


const Workout = () => {

  const countdownTimer=(timeout) => {setTimeout(() => {
    
  }, timeout)};

  const timer = <div className='absolute top-5 text-[6rem] flex justify-center items-center font-bold right-5 rounded-full w-[10rem] h-[10rem] bg-blue-400'>30</div>


  const videos = [
    {src: '',name: 'flex'},
    {src: '',name: 'barbell'},
    {src: '',name: 'dumbell'},
    {src: '',name: 'pull up'},
    {src: '',name: 'lat pull down'},
   
  ]

  let videoSelector = videos.map((video)=>(
    <div className='cursor-pointer w-[14vw] h-[16vh] bg-red-500'>
      {video.name}
    </div>
  ))
  
  return (
    <div>
      <Header
   
    // date={date}
    title={""}
  />
  <div>
    <div className='relative'>
    {timer}
    <WorkoutPlayer/>
    </div>
    
    <hr></hr>
    <div className='flex items-center w-[100%] overflow-scroll h-[20vh] bg-gray-500 bg-opacity-40'>
    <div className='flex min-w-full items-center justify-evenly'>
    {videoSelector}
    </div>
    </div>
   
  </div>
  </div>
  )
}

export default Workout
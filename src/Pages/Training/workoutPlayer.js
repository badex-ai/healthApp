import React,{useState} from 'react'
import { Link,useParams,Outlet } from 'react-router-dom'


const WorkoutPlayer = () => {
  const {workout} = useParams()


    const [videoLoading, setVideoLoading] = useState(false)
    const content = videoLoading ?  <div>...loading</div> : <div className='bg-green-500 w-[100%] h-[65vh]'>
        {workout}
        {/* <video></video> */}
        </div> 
  return (
    <div>
        {content}
    </div>
  )
}

export default WorkoutPlayer
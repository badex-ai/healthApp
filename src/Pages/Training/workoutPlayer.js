import React,{useState} from 'react'

const WorkoutPlayer = () => {
    const [videoLoading, setVideoLoading] = useState(false)
    const loading =videoLoading ?  <div>...loading</div> : <video></video>
  return (
    <div>

    </div>
  )
}

export default WorkoutPlayer
import React from 'react'
import Header from '../../components/header'
import WorkoutPlayer from './workoutPlayer'
import { Link,useParams,Outlet } from 'react-router-dom'


const Workout = ({param}) => {

  const {workout} = useParams()

  const videos
  
  return (
    <div>
      <Header
   
    // date={date}
    title={""}
  />
  <div>
    <div></div>
    <div>
    <WorkoutPlayer/>
    </div>
  </div>
  </div>
  )
}

export default Workout
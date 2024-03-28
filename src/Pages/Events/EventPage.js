import React,{use} from 'react'
import Header from "../../components/header";


const EventPage = () => {

  const hightlights = [1,2,3,4,5,6,]

  const hight = hightlights.map((hightlight)=>(
    <div className='w-[30%]'>

    </div>
  ))
  return (
    <div>
      	<Header 
				// date={date}
				title={"Events"}/>
        <div className='border w-[80%] h-16 '>

        </div>
        <div className='grid grid-cols-3 '>
          <p>Watch hightlights</p>
          <div></div>
        </div>
    </div>
  )
}

export default EventPage
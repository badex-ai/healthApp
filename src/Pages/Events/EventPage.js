import React,{use} from 'react'
import Header from "../../components/header";
import ButtonSm from '../../components/buttons/buttonSm';


const EventPage = (props) => {
  const {name}= props

  const hightlights = ['1','2','3','4','5','6']

  const videos = hightlights.length ?  hightlights.map((hightlight,index)=>(
    <div className='w-[60%] h-[30rem] border'>
        <img src="" alt={`${hightlight[index]}`} />
    </div>
  )) : <div>no videos yet</div>
  return (
    <div>
      	<Header 
				// date={date}
				title={"Event"}/>
        <div className='border w-[80%] h-16 '>
          {name}
        </div>
        <div>
        <p>Watch hightlights</p>
        <ButtonSm text={'+'}/>
        </div>
        
        <div className='grid grid-cols-3 '>
          
         
            {videos}
         
        </div>
    </div>
  )
}

export default EventPage
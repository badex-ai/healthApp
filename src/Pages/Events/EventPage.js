import React,{useState} from 'react'
import Header from "../../components/header";
import ButtonSm from '../../components/buttons/buttonSm';
import FullPortal from '../../components/portal';


const EventPage = (props) => {
  const {name}= props
  const [openPortal, setOpenPortal] = useState(null)

  const hightlights = ['1','2','3','4','5','6']

  const playVideo=()=>{
    console.log('video starts playing')
    setOpenPortal(true)
  }

  const video = openPortal ? <FullPortal/> : ''

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
        <ButtonSm click={playVideo} text={'+'}/>
        </div>
        
        <div className='grid grid-cols-3 '>
          
         
            {videos}
         
        </div>
        {video}
    </div>
  )
}

export default EventPage
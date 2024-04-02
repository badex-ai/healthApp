import React,{useState} from 'react'
import Header from "../../components/header";
import ButtonSm from '../../components/buttons/buttonSm';
import FullPortal from '../../components/portal';
import vid from '../../assets/video/footvid.mp4'
import TooltipComponent from '../../components/Tooltip';


const EventPage = (props) => {
  const {name}= props
  const [openPortal, setOpenPortal] = useState(null)

  const hightlights = ['1','2','3','4','5','6']

  const playVideo=()=>{
    console.log('video starts playing')
    setOpenPortal(true)
  }

  function addVideo() {
    console.log(`add vid`)
  }

  const vidPlayback = <div className='w-auto z-5 mx-auto my-0'>
    <video width="640" height="360" controls>
  <source src={vid} type="video/mp4"/>
  Your browser does not support the video tag.
</video>
  </div>

console.log(openPortal ,`this opens the portal`)
  const video = openPortal ? <FullPortal closePortal={()=>setOpenPortal(false)}>{vidPlayback}</FullPortal> : ''

  const videos = hightlights.length ?  hightlights.map((hightlight,index)=>(
    <div onClick={playVideo} className='w-[60%] h-[30rem] border cursor-pointer'>
        <img src="" alt={`${hightlight[index]}`} />
    </div>
  )) : <div>no videos yet</div>
  return (
    <div>
      	<Header 
				// date={date}
				title={"Event"}/>
        <div className='border w-[100%] h-32 rounded-xl '>

          {name}
        </div>
        <div>
          <div className='flex justify-between'>
          <h2>Watch hightlights</h2>
          <TooltipComponent text={'upload hightlight'}>
          <ButtonSm btnClick={addVideo} text={'+'}/>
          </TooltipComponent>
        
          </div>
       
        </div>
        
        <div className='grid grid-cols-3 '>
          
         
            {videos}
         
        </div>
        {video}
    </div>
  )
}

export default EventPage
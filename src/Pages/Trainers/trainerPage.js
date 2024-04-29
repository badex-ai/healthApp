import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/header'
import BackBtn from '../../components/buttons/backBtn'

const TrainerPage = () => {
  return (
    <div>
        <Header 
				// date={date}
				title={"Trainer"}/>
                
{/* <Link to={"#"}>back</Link> */}
<BackBtn/>
                <div>
                    <div className='flex '>
                        <div className='w-[55%] h-[40rem] bg-yellow-500'> 
                        <img></img>
                        <div className='font-extrabold capitalize'>name</div>
                    <div>description</div>
                        </div>
                        <div className='w-[45%] bg-pink-400'>
                        <div className=''>short video</div>
                        </div>
                    

                    </div>
                  
                   
                   
                </div>
        </div>
  )
}

export default TrainerPage
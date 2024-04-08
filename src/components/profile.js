import React,{useState} from 'react';
import classes from './profile.module.css'
import Header from './header';
import Mystat from './mystat';
import Imagebox from './imagebox';
import Stats from './stats';
import Expand from '../icons/expand';
import FullPortal from './portal';
import Close from '../assets/icons/close'


function Profile() {
    const [showPortal, setShowPortal] = useState(false)
    const [closeSinglePicView, setCloseSinglePicView] = useState(false)
    
     function expandGallery(){
        setShowPortal(true)
        console.log('show portal')

     }
     function showSinglePic(){

     }

     const imgGall = [1,2,3,4,5,6,7,7,8]

     const gridGallery = imgGall.map((img)=>{
        return <div>
            {/* <button   > */}
            <div onClick={showSinglePic}  className='cursor-pointer bg-white h-80 w-80'></div>

            {/* </button> */}
            {/* <img src="" alt="" /> */}
        </div>
     })

     const singlePicViewer = closeSinglePicView ? <div className='z-10 bg-green-200 '>
        <div onClick={setCloseSinglePicView(true)} >
            <Close />
        </div>


     </div> : ''

     const portal = showPortal ? <FullPortal>
        <div className='fixed flex justify-center items-center w-[100%] bg-purple-600 h-[100%] opacity-75'>
    
        <div className='mx-auto grid grid-cols-5 gap-2 w-[115rem] h-[50rem] p-20' >
            <div className="absolute top-2 right-2 cursor-pointer" onClick={()=>setShowPortal(false)}>
            <Close   />

            </div>
        {gridGallery}
        </div>
        </div>
       
    
 </FullPortal> : ''

    
    return (

        <div className={classes.mainContainer}>
            {/* <div className={classes.headerContainer}>
            <Header title={'Profile'} search={null} selector={null}></Header>
            </div> */}
            <div className={classes.info}>
            <Mystat ></Mystat>
            </div>
            <div className={classes.imagebox}>
            <Imagebox ></Imagebox>
            </div>
           
           
           <div className={classes.stats}>
           <Stats ></Stats>
           </div>
           <div className={classes.gallery}>
                <div  className='relative w-96 bg-green-500 h-80'>
                    <div className='absolute cursor-pointer top-2 right-2'>
                        <Expand action={expandGallery} />
                        </div>
                </div>
            </div>
           
           
            {portal}
            {singlePicViewer}
          
        </div>
        
    )
}

export default Profile

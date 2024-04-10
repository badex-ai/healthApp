import React,{useState} from 'react';
import classes from './profile.module.css'
import Header from './header';
import Mystat from './mystat';
import Imagebox from './imagebox';
import Stats from './stats';
import Expand from '../icons/expand';
import FullPortal from './portal';
import Close from '../assets/icons/close'
import InletModal from './layout/inletModal';
import RoundBtn from './buttons/roundbtn';
import img from '../assets/karate.jpg'


function Profile() {
    const [showPortal, setShowPortal] = useState(false)
    const [openSinglePicView, setOpenSinglePicView] = useState(false)
    
     function expandGallery(){
        setShowPortal(true)
        console.log('show portal')

     }
     function showSinglePic(){
        setOpenSinglePicView(true)
        console.log(`single pic openened`)

     }

     function goToNextImage(){
        console.log('nextImage')
     }
     function goToPreviousImage(){
        console.log('nextImage')
     }

     const imgGall = [1,2,3,4,5,6,7,7,8]
     

     const gridGallery = imgGall.map((img)=>{
        return <div>
            {/* <button   > */}
            <img  src='../assets/karate.jpg' alt='sample' onClick={()=>showSinglePic(true)}  className='cursor-pointer bg-white' width='200' height='200'></img>

            {/* </button> */}
            {/* <img src="" alt="" /> */}
        </div>
     })

     const singlePicViewer = openSinglePicView ? 
        <FullPortal   >
            <div onClick={()=>setOpenSinglePicView(false)} className=' w-[100%] h-[100%] flex items-center justify-center bg-opacity-20 bg-red-500 z-2'> 

            <div className='flex relative w-[60%] h-[42rem] bg-green-400 items-center' >
                <RoundBtn dimension='2rem' action={goToPreviousImage}>P</RoundBtn>
            <div className='w-[20rem]'>
                <img src="../assets/karate.jpg" alt="sample" width={'80rem'} />
            </div>
            <RoundBtn dimension="2rem" action={goToNextImage}>N</RoundBtn>
            <div onClick={()=>setOpenSinglePicView(false)}  className='absolute -top-6 -right-6 rounded-full w-10 h-10 bg-black-300'>
                <Close  />
                </div>
            
            </div>
                
               
            </div>
           
        </FullPortal>


     : ''

     const portal = showPortal ? <FullPortal>
        <div onClick={()=>setShowPortal(false)} className='fixed flex justify-center items-center w-[100%] bg-gray-600 h-[100%] bg-opacity-80'>
    
        <div className='relative z-10 mx-auto grid grid-cols-5 gap-2 w-[115rem] h-[50rem] p-20 bg-green-800'  >
            <div className="absolute z-10 -top-2 -right-2 cursor-pointer" onClick={()=>setShowPortal(false)}>
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

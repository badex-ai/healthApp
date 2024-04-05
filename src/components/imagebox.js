import React,{useState} from 'react';
import classes from './imagebox.module.css';
import Body from '../assets/body';
import ButtonMd from './buttons/buttonMd';
import UploadBtn from './buttons/uploadBtn'
import TinyBtn from './buttons/tinyBtn';

// .top{
//     border: 4px solid #16202A ;
//      border-radius: 25px 25px 0px 0px;
//      width: 31.2rem;
//    height: 27.6rem;
//    text-align: center;
//    padding-top: 3.5rem;
//    background-color: #121921;
//    }

function Imagebox() {
    const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

    const imgUrls=[{src:'', type: 'dorsal'},{src:'', type: 'ventral'}]

    

   
    // const pictureName= `picture-${index}`
    const img = <Body/>
    // image ? <img src={''} alt='name'/> :   <Body/>

    function viewImage(index) {
        // setImage(imgUrls[index].src)
    }

    
    return (
        <div className={classes.container}>
            <div className="relative border-4 border-[#16202A] rounded-tl-[2rem] rounded-tr-[2rem] w-[31.2rem] pt-14 bg-[#121921] text-center flex justify-center">
                 {img}
                <div className='absolute bottom-2 right-2' >date uploaded</div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.btm}>
                    <div className={classes.circlecont}>
                        {/* <button onClick={} className={classes.btncircle}/>
                        <button className={classes.btncircle}/> */}
                        <TinyBtn index="1" action={viewImage}/>
                        <TinyBtn index="2"  action={viewImage}/>
                    </div>
                    <div className={classes.txt}>Upload your full frontal and side view pictures</div>
                    <UploadBtn fileType={'image'}/>
                    {/* <ButtonMd action ={pictureUpload}text='Upload' /> */}
                    {/* <button className={classes.btn}>Upload</button> */}
                </div>
            </div>
        </div>
    )
}

export default Imagebox

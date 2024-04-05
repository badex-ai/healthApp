import React from 'react'

const UploadBtn = ({fileType}) => {

    const fileAccepted = `${fileType}/*`
    function uploadImage (){
        console.log('image uploaded')
    }
  return (
    <>
    <label for='fileUpload' className='cursor-pointer w-[8rem] h-[3.2rem] rounded-[5rem] bg-black text-2xl flex items-center justify-center' >Upload</label>
    <input className='hidden' type='file' id='fileUpload' accept={fileAccepted}></input>
    </>
  )
}

export default UploadBtn
import React from 'react'

const TinyBtn = ({action,index}) => {
  return (
    <>                      
      <button  onClick={action(index)} className=' cursor-pointer w-4 h-4 bg-gray-600 ml-1 mr-1 rounded-full'/>
    </>
  )
}



export default TinyBtn
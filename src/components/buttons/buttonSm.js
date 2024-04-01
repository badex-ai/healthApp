import React from 'react'

const buttonSm = ({icon,text}) => {

  const child = icon ? icon : text
  return (
    <div className='w-8 h-8 rounded-lg bg-blue-300 '>
      {child}
    </div>
  )
}

export default buttonSm
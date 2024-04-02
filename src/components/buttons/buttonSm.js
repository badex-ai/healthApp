import React from 'react'

const ButtonSm = ({icon,text,btnClick}) => {

  const child = icon ? icon : text
  return (
    <button onClick={btnClick} className='w-8 h-8 rounded-lg bg-blue-300 '>
      {child}
    </button>
  )
}

export default ButtonSm
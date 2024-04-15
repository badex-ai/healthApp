import React from 'react'

const ButtonLg = ({icon,text},action) => {
    const content = icon ? icon : text
  return (
    <button onClick={action} className='cursor-pointer w-[12rem] h-[3.2rem] rounded-[5rem] bg-black text-2xl flex items-center justify-center'>{content}</button>
  )
}

export default ButtonLg
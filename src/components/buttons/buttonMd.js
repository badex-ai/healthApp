import React from 'react'

const ButtonMd = ({icon,text},action) => {
    const content = icon ? icon : text
  return (
    <button onClick={action} className='w-[8rem] h-[3.2rem] rounded-[5rem] bg-black text-2xl flex items-center justify-center'>{content}</button>
  )
}

export default ButtonMd


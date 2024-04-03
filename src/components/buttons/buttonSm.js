import React from 'react'

const ButtonSm = ({icon,text,action}) => {
  // onClick={btnClick}
  const child = icon ? icon : text
  return (
    <>
    <button onClick={action} className=' hover:bg-slate-400 inline-flex w-12 h-12 rounded-lg bg-blue-300 cursor-pointer items-center justify-center'>
      {child}
    </button>
    </>
    
  )
}

export default ButtonSm
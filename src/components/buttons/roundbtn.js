import React from 'react'

const RoundBtn = ({action,children,width}) => {

    const wid= `w-${width}`
    const hit = `h-${width}`
  return (
    <button  onClick={action} className={`rounded-full ${wid} ${hit} p-3 bg-black hover:bg-blue-100`}>{children}</button>
  )
}

export default RoundBtn
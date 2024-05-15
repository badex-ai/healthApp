import React from 'react'

const InletModal = ({action,children,opacity}) => {
    let bg = opacity ? 'bg-opacity-80' : 'bg-opacity-80 backdrop-filter backdrop-blur-sm'
  return (
    <div className={`fixed bg-gray-500   ${bg} top-0 z-1 w-[100%] h-screen`} onClick={action}>
        {children}
    </div>
  )
}

export default InletModal
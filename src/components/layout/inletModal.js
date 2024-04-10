import React from 'react'

const InletModal = ({action,children,opacity}) => {
    // let bg = opacity ? 'bg-opacity-80' : ''
    // ${bg} 
  return (
    <div className={`fixed bg-gray-500 backdrop-filter backdrop-blur-sm bg-opacity-80 top-0 z-1 w-[100%] h-screen`} onClick={action}>
        {children}
    </div>
  )
}

export default InletModal
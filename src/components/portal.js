import * as Portal from '@radix-ui/react-portal';
import React from 'react'

const FullPortal = ({content,closePortal,children}) => {
  return (
    <Portal.Root  className='absolute h-screen w-[100vw] top-0 bg-red-500 flex items-center justify-center text-white text-2xl'>
        
        {children}
        
        </Portal.Root>
  )
}

export default FullPortal



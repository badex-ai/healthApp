import * as Portal from '@radix-ui/react-portal';
import React from 'react'

const FullPortal = ({content}) => {
  return (
    <Portal.Root className='aboslute h-screen w-[100vw] bg-red-500 text-white text-2xl'>Content</Portal.Root>
  )
}

export default FullPortal



import Image from 'next/image'
import React from 'react'

export const Loader = () => {
  return (
    <div className='flex-center w-full h-screen'>
      <Image
        src='/icons/loading-circle.svg'
        alt='loader'
        height={50}
        width={50}
      />
    </div>
  )
}

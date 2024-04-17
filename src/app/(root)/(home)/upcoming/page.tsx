import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <p className='text-3xl font-bold'>

        <CallList type='upcoming'/>
      </p>
    </section> 
  )
}

export default Upcoming
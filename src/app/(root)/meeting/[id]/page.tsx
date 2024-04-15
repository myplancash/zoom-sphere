'use client'
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, {useState} from 'react'
import { useGetCallById } from '../../../../../hooks/useGetCallById';
import Loader from '@/components/Loader';

const Meeting = ({ params: {id} }: { params: { id: string } }) => {
  //also have to grab our currently authenticated user
  const {user, isLoaded} = useUser();
  const [isSetupCompleted, setIsSetupCompleted] = useState(false)
  const {call, isCallLoading} = useGetCallById(id)

  if(!isLoaded || isCallLoading) return <Loader/>


  return (
    <main className='h-screen w-full'>
      <StreamCall call={}>
        <StreamTheme>
            {!isSetupCompleted ? (
              <MeetingSetup/>
            ) : (
              <MeetingRoom/>
            )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting;
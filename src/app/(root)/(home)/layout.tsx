import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';
import React, {ReactNode} from 'react';


export const metadata: Metadata = {
  title: "ZoomSphere App",
  description: "ZoomSphere isn't just another video conferencing platform; it's a transformative experience that redefines how we communicate and collaborate in the digital age.",
  icons: {
    icon: '/icons/logo.svg '
  }
};


const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='relative'>
      <Navbar />

      <div className="flex">
        <Sidebar />
        
        {/* mostly tablet or laptop devices max-md: */} 
         <section className='flex min-h-screen flex-col flex-1 px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
          <div className="w-full">
            {children}  
          </div> 
        </section>
      </div> 
    </main>
  );
}   

export default HomeLayout;

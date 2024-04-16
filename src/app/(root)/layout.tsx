import React, {ReactNode} from 'react';
import StreamVideoProvider from '../../../providers/StreamClientProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
title: "ZoomSphere App",
description: "ZoomSphere isn't just another video conferencing platform; it's a transformative experience that redefines how we communicate and collaborate in the digital age.",
icons: {
  icon: '/icons/logo.svg '
}
};

const RootLayout = ({ children }: { children: ReactNode }) => {



  return (
    <main> 
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  );
}   

export default RootLayout;
